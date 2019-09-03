package com.galvanize.Cars.Models;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
public class countCarsModel {

    private long count;

    public countCarsModel(long count) {
        this.count = count;
    }
}
