package com.galvanize.Locations;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.galvanize.Cars.Car;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "locations")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonFilter("locationFilter")
//@NamedQuery(name = "Location.findAllCars", query ="SELECT * FROM cars JOIN locations WHERE cars.location_id = locations.id;")
public class Location implements Serializable{

//    @OneToMany(mappedBy="location", cascade = CascadeType.ALL)
//    private Collection<Car> cars;// = new ArrayList<>();

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private String address;

//    public void addCar(Car car)
//    {
//        this.cars.add(car);
//        if(car.getLocation() != this)
//        {
//            car.setLocation(this);
//        }
//    }

//    public ArrayList getCars(){
//        this.cars;
//    }

}
