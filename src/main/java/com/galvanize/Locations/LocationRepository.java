package com.galvanize.Locations;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface LocationRepository extends CrudRepository<Location, Long> {
//
//    Car findOneCarByEmail(String email);

    Location findLocationById(long id);
//    public ArrayList<Location> findAllCars(long locationId);
}