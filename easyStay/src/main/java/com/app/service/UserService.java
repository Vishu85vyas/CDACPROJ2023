package com.app.service;
import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;

import com.app.entities.RoomType;
import com.app.entities.User;

public interface UserService {
   public boolean authenticate(String username , String password);
   public String getUserRole();
   List<User> getAllUser();
   User addUser(User user);
   User updateUserDetail(User user);
   String deleteUserDetails(Long userId);
   User getUserDetails(Long userId);
   public int bookingPrice(LocalDate checkIn,LocalDate checkOut,String type);
}