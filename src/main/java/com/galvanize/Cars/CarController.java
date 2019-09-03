package com.galvanize.Cars;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import com.galvanize.Cars.Models.*;
import com.galvanize.Locations.Location;
import com.galvanize.Locations.LocationRepository;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarRepository carRepository;
    private final LocationRepository locationRepository;

    public CarController(CarRepository carRepository, LocationRepository locationRepository) {
        this.carRepository = carRepository;
        this.locationRepository = locationRepository;
    }

    @GetMapping
    public MappingJacksonValue getAllCars() {
        getAllCarsModel cars = new getAllCarsModel();
        cars.setCars((ArrayList<Car>) carRepository.findAll());

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAll();
        FilterProvider filters = new SimpleFilterProvider().addFilter("carFilter", filter)
                .setFailOnUnknownId(false);
        MappingJacksonValue mapping = new MappingJacksonValue(cars);
        mapping.setFilters(filters);
        return mapping;
    }

    @GetMapping("/{strID}")
    public MappingJacksonValue getOneUser(@PathVariable String strID) {

        long id = Long.parseLong(strID);
        Optional<Car> car = carRepository.findById(id);

        getOneCarModel cars = new getOneCarModel();
        cars.setCar(car.get());

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAll();
        FilterProvider filters = new SimpleFilterProvider().addFilter("carFilter", filter);
        MappingJacksonValue mapping = new MappingJacksonValue(cars);
        mapping.setFilters(filters);

        return mapping;
    }

    @PatchMapping("/{strID}")
    public MappingJacksonValue updateOneCar(@RequestBody Car updatedCar, @PathVariable String strID) {
        long id = Long.parseLong(strID);

        Car car = carRepository.findCarById(id);

        car.setLocation(updatedCar.getLocation());
        car.setMiles(updatedCar.getMiles());
        car.setPrice(updatedCar.getPrice());
        car.setPhotoUrl(updatedCar.getPhotoUrl());

        carRepository.save(car);

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAll();
        //.filterOutAllExcept("id","example");
        FilterProvider filters = new SimpleFilterProvider().addFilter("carFilter", filter);
        MappingJacksonValue mapping = new MappingJacksonValue(car);
        mapping.setFilters(filters);

        return mapping;
    }

    @DeleteMapping("/{strID}")
    public countCarsModel deleteOneCar(@PathVariable String strID) {

        long id = Long.parseLong(strID);
        countCarsModel count = new countCarsModel();

        if (carRepository.findById(id).isPresent()) {
//            removedUser = userRepository.findById(id).get();
            carRepository.deleteById(id);
        }
        count.setCount(carRepository.count());
        StringBuilder message = new StringBuilder();
        message.append("You have successfully deleted the requested car with ID:");
        message.append("id");

        //chg to ret message with model containing STRING. message.toString();
        return count;
    }

    @PostMapping()
    public MappingJacksonValue postCar(@RequestBody Car car) {

        postCarModel postCar = new postCarModel(car);
        long locationID = postCar.getCar().getLocationId();

        if(locationID > 0)
        {
            Location location = locationRepository.findLocationById(1l);
            car.setLocation(location);
        }

        carRepository.save(car);

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAll();
        FilterProvider filters = new SimpleFilterProvider().addFilter("carFilter", filter)
                .setFailOnUnknownId(false);
        MappingJacksonValue mapping = new MappingJacksonValue(postCar);
        mapping.setFilters(filters);
        return mapping;
    }
}