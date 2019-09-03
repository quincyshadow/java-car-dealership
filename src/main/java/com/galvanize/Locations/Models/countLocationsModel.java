package com.galvanize.Locations.Models;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
public class countLocationsModel {

    private long count;

    public countLocationsModel(long count) {
        this.count = count;
    }
}
