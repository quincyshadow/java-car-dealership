package com.galvanize.Cars;

import com.fasterxml.jackson.annotation.*;
import com.galvanize.Locations.Location;
//import com.sun.xml.internal.bind.annotation.OverrideAnnotationOf;
import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "cars")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonFilter("carFilter")
public class Car implements Serializable {

    @ManyToOne
    @JoinColumn(name = "location_id")
    @Access(AccessType.FIELD)
//    @JsonBackReference
    @JsonIgnoreProperties("cars")
    private Location location;

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

//    @Column
//    private long locationId;

    //By using FetchType.LAZY you will just get ID, then u need to
    //getWhatever();
//    @ManyToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name="location_id", nullable = false)
////    @JoinColumn(name="location_name", referencedColumnName="name", columnDefinition = "varchar(255) default '15-JUL-1980'")
//    private Location location;

//    public void setLocation(Location location)
//    {
//        this.location = location;
//        if(!location.getCars().contains(this))
//        {
//          location.getCars().add(this);
//            //location.addCar(this);
//        }
//    }

//    public void setLocationName(Location location)
//    {
//        this.loca
//    }

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
