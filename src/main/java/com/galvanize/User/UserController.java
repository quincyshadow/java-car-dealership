//package com.galvanize.User;
//
//import com.fasterxml.jackson.databind.ser.FilterProvider;
//import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
//import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
//import com.galvanize.User.Models.*;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.http.converter.json.MappingJacksonValue;
//import org.springframework.util.DigestUtils;
//import org.springframework.util.StringUtils;
//import org.springframework.web.bind.annotation.*;
//
//import javax.swing.*;
//import java.util.ArrayList;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/users")
//public class UserController {
//
//    private final UserRepository userRepository;
//
//    public UserController(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @GetMapping
//    public MappingJacksonValue getAllUsers() {
//        getAllUsersModel users = new getAllUsersModel();
//        users.setUsers((ArrayList<User>) userRepository.findAll());
//
//        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("id", "email");
//        FilterProvider filters = new SimpleFilterProvider().addFilter("UserFilter", filter);
//        MappingJacksonValue mapping = new MappingJacksonValue(users);
//        mapping.setFilters(filters);
//        return mapping;
//    }
//
//    @PostMapping
//    public MappingJacksonValue postNewUser(@RequestBody postNewUserModel newUser) {
//
//        postNewUserModel postUpdate = new postNewUserModel(newUser.getUser());
//        User user = postUpdate.getUser();
//        userRepository.save(user);
//
//        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("id", "email");
//        FilterProvider filters = new SimpleFilterProvider().addFilter("UserFilter", filter);
//        MappingJacksonValue mapping = new MappingJacksonValue(user);
//        mapping.setFilters(filters);
//        return mapping;
//    }
//
//    @GetMapping("/{strID}")
//    public MappingJacksonValue getOneUser(@PathVariable String strID) {
//
//        long id = Long.parseLong(strID);
//        Optional<User> user = userRepository.findById(id);
//
//        getOneUserModel users = new getOneUserModel();
//        users.setUser(user.get());
//
//        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("id", "email");
//        FilterProvider filters = new SimpleFilterProvider().addFilter("UserFilter", filter);
//        MappingJacksonValue mapping = new MappingJacksonValue(users);
//        mapping.setFilters(filters);
//
//        return mapping;
//
//    }
//
//    @PatchMapping("/{strID}")
//    public MappingJacksonValue updateOneUser(@RequestBody User updatedUser, @PathVariable String strID) {
//        long id = Long.parseLong(strID);
//
//        User user = userRepository.findUserById(id);
//        if(!StringUtils.isEmpty(updatedUser.getPassword()))
//        {
//            user.setPassword(DigestUtils.md5DigestAsHex(updatedUser.getPassword().getBytes()) );
//        }
//        if(!StringUtils.isEmpty(updatedUser.getEmail()))
//        {
//            user.setEmail(updatedUser.getEmail());
//        }
//
//        userRepository.save(user);
//
//        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("id", "email");
//        FilterProvider filters = new SimpleFilterProvider().addFilter("UserFilter", filter);
//        MappingJacksonValue mapping = new MappingJacksonValue(user);
//        mapping.setFilters(filters);
//
//        return mapping;
//    }
//
//    @DeleteMapping("/{strID}")
//    public countUsersModel deleteOneUser(@PathVariable String strID) {
//
//        long id = Long.parseLong(strID);
//        countUsersModel count = new countUsersModel();
//
//        if(userRepository.findById(id).isPresent())
//        {
////            removedUser = userRepository.findById(id).get();
//            userRepository.deleteById(id);
//        }
//        count.setCount(userRepository.count() );
//        return count;
//    }
//
//    @PostMapping()
//    public MappingJacksonValue authenticateUser(@RequestBody User user) {
//
//        postAuthUserModel postAuth = new postAuthUserModel(user);
//        User databaseFoundUser = userRepository.findOneUserByEmail(user.getEmail());
//
//        if(databaseFoundUser != null)
//        {
//            if ( (DigestUtils.md5DigestAsHex(user.getPassword().getBytes()) ).equals(databaseFoundUser.getPassword()))
//            {
//                postAuth.setAuthenticated(true);
//            }
//            else
//            {
//                postAuth.setAuthenticated(false);
//            }
//            SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("id", "email", "authenticated");
//            FilterProvider filters = new SimpleFilterProvider().addFilter("UserFilter", filter);
//            MappingJacksonValue mapping = new MappingJacksonValue(postAuth);
//            mapping.setFilters(filters);
//            return mapping;
//        }
//        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("authenticated");
//        FilterProvider filters = new SimpleFilterProvider().addFilter("UserFilter", filter);
//        MappingJacksonValue mapping = new MappingJacksonValue(postAuth);
//        mapping.setFilters(filters);
//        return mapping;
//    }
//
//}
