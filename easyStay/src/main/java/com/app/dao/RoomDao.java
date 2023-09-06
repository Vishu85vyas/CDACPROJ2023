package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Room;

public interface RoomDao extends JpaRepository<Room, Long>{
	List<Room> findByCity(String city);
}
