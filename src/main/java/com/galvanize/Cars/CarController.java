package com.galvanize.Cars;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import com.galvanize.Cars.Car;
import com.galvanize.Cars.CarRepository;
import com.galvanize.Cars.Models.*;
import com.galvanize.User.UserRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.util.DigestUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarRepository carRepository;

    public CarController(CarRepository carRepository) {
        this.carRepository = carRepository;
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

    

}
