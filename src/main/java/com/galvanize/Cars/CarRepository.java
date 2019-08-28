package com.galvanize.Cars;

import com.galvanize.Cars.Car;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.util.List;

public interface CarRepository extends CrudRepository<Car, Long> {

    Car findOneCarByEmail(String email);

    Car findCarById(long id);
}