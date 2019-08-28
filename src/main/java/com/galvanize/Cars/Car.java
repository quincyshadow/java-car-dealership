package com.galvanize.Cars;

import com.fasterxml.jackson.annotation.JsonFilter;
import lombok.*;

import javax.persistence.*;
import java.math.BigInteger;

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
    private String locationId;

}
