package com.galvanize.Cars.Models;

import com.galvanize.Cars.Car;
import com.galvanize.Locations.Location;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
public class getOneCarModel {

    private Car car;

    private Location location;

    public getOneCarModel(Car car, Location location) {
        this.car = car;
        this.location = location;
    }
}
