package com.galvanize.Locations.Models;

import com.galvanize.Cars.Car;
import com.galvanize.Locations.Location;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
public class getOneLocationModel {

    private long id;
    private String name;
    private String address;
    private Collection<Car> cars;

    public void setLocation(Location location) {
        this.id = location.getId();
        this.name = location.getName();
        this.address = location.getAddress();
        this.cars = location.getCars();
    }
}
