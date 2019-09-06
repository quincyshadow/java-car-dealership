-- mysql -uroot;
-- connect java_car_dealership;

-- drop table cars;
-- drop table locations;
-- 
-- Start java-spring server before exectuing below code. It will create the new
-- Tables for you.

INSERT INTO locations (id,name,address)
VALUES
(1, "California Beach Dealership", "1 California Way, Californa City, CA 82182"),
(2, "California City Dealership", "2312 California Way, Californa City, CA 82182"),
(3, "Best Sunny Dealer", "123 Sunny Street, Californa City, CA 82182")
;

INSERT INTO cars (vin,year,make,model,miles,price,photo_url,location_id)
VALUES
("ASD12333444",2016,"Chevrolet","Cruze Hatch",23555,20500,"https://i.pinimg.com/originals/c9/a3/37/c9a337e72985088c0f6dfae49fc2b737.jpg",1),
("ASD12333555",2019,"Chevrolet","Cruze SS",2,39999,"https://o.aolcdn.com/images/dims3/GLOB/crop/1707x962+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2018-11/5e3fc200-e430-11e8-bebe-208bd43506e7",1),
("ASD12333444",2014,"Vauxhall","VXR8 GTS",40599,18900,"https://cdn.motor1.com/images/mgl/lOYbJ/s1/vauxhall-vxr8-gts-is-the-chevy-ss-insane-supercharged-cousin.jpg",1),
("ASD12333444",2014,"Chevrolet","SS",90965,21990,"https://i136.photobucket.com/albums/q176/HazmanAvatarKing/Cameros/Cararo_2011/Christiancoach-6.jpg",1)
;