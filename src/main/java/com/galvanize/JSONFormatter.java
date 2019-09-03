//package com.galvanize;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.fasterxml.jackson.annotation.JsonProperty;
//import com.galvanize.User.User;
//
//import java.util.ArrayList;
//
//public class JSONFormatter {
//    private ArrayList<User> users;
//
//    public JSONFormatter(ArrayList<User> users) {
//        this.users = users;
//    }
//
//    @JsonProperty("user")
//    public User getOneUser() {
//        return this.users.get(0);
//    }
//
//    public void setUser(User user) {
//        this.users.add(user);
//    }
//
//    @JsonProperty("users")
//    public ArrayList<User> getAllUsers() {
//        return this.users;
//    }
//}
