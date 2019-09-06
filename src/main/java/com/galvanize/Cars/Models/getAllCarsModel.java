package com.galvanize.Cars.Models;

import com.galvanize.Cars.Car;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Data
@Getter
@Setter
@NoArgsConstructor
public class getAllCarsModel {

    private ArrayList<Car> cars;

    public getAllCarsModel(ArrayList<Car> cars) {
        for(Car car:cars)
        {

        }
    }
}
