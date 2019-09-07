package com.galvanize.Locations;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

import com.galvanize.Locations.Models.*;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/locations")
public class LocationController {

    private final LocationRepository locationRepository;

    public LocationController(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @GetMapping()
    public MappingJacksonValue getAllLocations() {
        getAllLocationsModel locations = new getAllLocationsModel();
        locations.setLocations((ArrayList<Location>) locationRepository.findAll());

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAll();
        FilterProvider filters = new SimpleFilterProvider().addFilter("locationFilter", filter).setFailOnUnknownId(false);
        MappingJacksonValue mapping = new MappingJacksonValue(locations);
        mapping.setFilters(filters);
        return mapping;
    }

    @GetMapping("/{strID}")
    public MappingJacksonValue getOneLocation(@PathVariable String strID) {

        long id = Long.parseLong(strID);
        Optional<Location> location = locationRepository.findById(id);

        getOneLocationModel locationM = new getOneLocationModel();
        locationM.setLocation(location.get());

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAll();
        FilterProvider filters = new SimpleFilterProvider().addFilter("locationFilter", filter)
                .addFilter("carFilter", filter);
        MappingJacksonValue mapping = new MappingJacksonValue(locationM);
        mapping.setFilters(filters);

        return mapping;
    }

    @PatchMapping("/{strID}")
    public MappingJacksonValue updateOneCar(@RequestBody Location updatedLocation, @PathVariable String strID) {
        long id = Long.parseLong(strID);

        Location location = locationRepository.findLocationById(id);

        Long longVal = updatedLocation.getId();
//        if(longVal != null && longVal > 0) { location.setId(longVal); }
        if(updatedLocation.getAddress() !=null) {location.setAddress(updatedLocation.getAddress()); }
        if(updatedLocation.getName() !=null) location.setName(updatedLocation.getName());

        locationRepository.save(location);

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAll();
        //.filterOutAllExcept("id","example");
        FilterProvider filters = new SimpleFilterProvider().addFilter("locationFilter", filter).setFailOnUnknownId(false);;
        MappingJacksonValue mapping = new MappingJacksonValue(location);
        mapping.setFilters(filters);

        return mapping;
    }

    @DeleteMapping("/{strID}")
    public countLocationsModel deleteOneCar(@PathVariable String strID) {

        long id = Long.parseLong(strID);
        countLocationsModel count = new countLocationsModel();

        if (locationRepository.findById(id).isPresent()) {
//            removedUser = userRepository.findById(id).get();
            locationRepository.deleteById(id);
        }
        count.setCount(locationRepository.count());
        StringBuilder message = new StringBuilder();
        message.append("You have successfully deleted the requested car with ID:");
        message.append("id");

        //chg to ret message with model containing STRING. message.toString();
        return count;
    }

    @PostMapping()
    public MappingJacksonValue postLocation(@RequestBody Location location) {

        postLocationModel postLocation = new postLocationModel(location);
        locationRepository.save(location);

        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAll();
        FilterProvider filters = new SimpleFilterProvider().addFilter("locationFilter", filter);
        MappingJacksonValue mapping = new MappingJacksonValue(postLocation);
        mapping.setFilters(filters);
        return mapping;
    }
}
