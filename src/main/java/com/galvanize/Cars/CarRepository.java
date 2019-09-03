package com.galvanize.Cars;
import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository<Car, Long> {
//
//    Car findOneCarByEmail(String email);

    Car findCarById(long id);
}