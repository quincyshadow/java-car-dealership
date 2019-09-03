package com.galvanize.Locations;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.galvanize.Cars.Car;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "locations")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonFilter("locationFilter")
//@NamedQuery(name = "Location.findAllCars", query ="SELECT * FROM cars JOIN locations WHERE cars.location_id = locations.id;")
public class Location {

    @OneToMany(mappedBy="location")
    private List<Car> cars;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private String address;

    public void addCar(Car car)
    {
        this.cars.add(car);
        if(car.getLocation() != this)
        {
            car.setLocation(this);
        }
    }

//    public ArrayList getCars(){
//        this.cars;
//    }

}