package com.galvanize.Locations.Models;

import com.galvanize.Locations.Location;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Data
@Getter
@Setter
@NoArgsConstructor
public class getAllLocationsModel {

    private ArrayList<Location> locations;

    public getAllLocationsModel(ArrayList<Location> locations) {
        this.locations = locations;
    }
}
