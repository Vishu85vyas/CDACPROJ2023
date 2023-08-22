package com.app.service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingDao;
import com.app.dao.UserDao;
import com.app.entities.BookingTbl;
import com.app.entities.RoomType;
import com.app.entities.User;
import com.app.exception.ResourceNotFoundException;

@Transactional
@Service
public class UserServiceImpl implements UserService { 
	@Autowired
	private UserDao userDao;
	@Autowired
	private BookingDao bookDao;
	User user = null;
	public boolean authenticate(String username , String password)
	{
	     User user = userDao.findByEmail(username);
	     this.user = user;
	     return user.getEmail().equals(username) && user.getPassword().equals(password);
	}
	public String getUserRole()
	{
	     return user.getRole().toString();	
	}
	@Override
	public List<User> getAllUser() {
		return userDao.findAll();
	}

	@Override
	public User addUser(User user) {
		return userDao.save(user);
	}

	@Override
	public User updateUserDetail(User user) {
		User founduser = userDao.findById(user.getId()).orElseThrow(()-> new
				ResourceNotFoundException("Invalid Emp ID !!!!!"));
				
		return userDao.save(user);
	}
	@Override
	public String deleteUserDetails(Long userId) {
		// TODO Auto-generated method stub
		User founduser=userDao.findById(userId).orElseThrow(()
				->new  ResourceNotFoundException("Invalid Emp ID !!!!!"));
		userDao.deleteById(userId);
		return "user Deatils deleted successfully !!!";
	}
	@Override
	public User getUserDetails(Long userId) {
		// TODO Auto-generated method stub
		
		return userDao.findById(userId).orElseThrow(()->
		new ResourceNotFoundException("Invalid Emp ID !!!!!"));
	}
	public int bookingPrice(LocalDate checkIn,LocalDate checkOut,String type)
	{
		int days = (int)ChronoUnit.DAYS.between(checkIn, checkOut);
		System.out.println(days);
		int price = 0;
		if(type.equals("AC"))
		{
			price = days*3000;
			System.out.println("in AC");
		}
		else if(type.equals("NONAC"))
		{
			price = days*1000;
		}
		else if(type.equals("DELUXE"))
		{
			price = days*5000;
		}
		else
		{
			price = days*0;
			System.out.println("in else");
		}
		bookDao.save(new BookingTbl(checkIn,checkOut,java.time.LocalDate.now(),price));
		return price;
	}
}
