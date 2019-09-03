//package com.galvanize.User.Models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import com.galvanize.User.User;
//import lombok.Data;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import org.springframework.util.DigestUtils;
//import org.springframework.util.StringUtils;
//
//@Data
//@Getter
//@Setter
//@NoArgsConstructor
//public class postNewUserModel {
//
//    private User user;
//
//    public postNewUserModel(User user) {
//    this.user = user;
//    if(!StringUtils.isEmpty(this.user.getPassword()) )
//        {
//            this.user.setPassword(DigestUtils.md5DigestAsHex(this.user.getPassword().getBytes()));
//        }
//    }
//}
