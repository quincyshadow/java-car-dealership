package com.galvanize.Locations.Models;

import com.galvanize.Locations.Location;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
public class postLocationModel {

    private Location location;

    public postLocationModel(Location location) {
        this.location = location;
    }
}
