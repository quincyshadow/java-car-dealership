package com.galvanize.Cars;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.galvanize.Locations.Location;
//import com.sun.xml.internal.bind.annotation.OverrideAnnotationOf;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "cars")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonFilter("carFilter")
public class Car {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Column
    private String vin;

    @Column
    private int year;

    @Column
    private String make;

    @Column
    private String model;

    @Column
    private int miles;

    @Column
    private int price;

    @Column
    private String photoUrl;

    @Column
    private long locationId;

    //By using FetchType.LAZY you will just get ID, then u need to
    //getWhatever();
    @ManyToOne(fetch=FetchType.LAZY, optional = false)
    @JoinColumn(name="location", nullable = false)
    @JsonIgnore
    private Location location;

    public void setLocation(Location location)
    {
        this.location = location;
        if(!location.getCars().contains(this))
        {
            location.getCars().add(this);
        }
    }

//    public long getLocationID(Location location)
//    {
//        long locationId = location.getId();
//        return locationId;
//    }
//
//    public void setLocation(int locationId)
//    {
//        Location location = new Location();
//        location.setId( (long) locationId );
//
//        this.location = location;
//    }
}
