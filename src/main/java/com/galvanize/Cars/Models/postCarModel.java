package com.galvanize.Cars.Models;

import com.galvanize.Cars.Car;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
public class postCarModel {

    private Car car;

    public postCarModel(Car car) {
        this.car = car;
    }
}
