package com.galvanize.Cars.Models;

import com.galvanize.Cars.Car;
import com.galvanize.User.User;
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

    public getOneCarModel(Car car) {
        this.car = car;
    }
}
