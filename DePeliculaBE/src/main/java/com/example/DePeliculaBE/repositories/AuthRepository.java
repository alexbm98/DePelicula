package com.example.DePeliculaBE.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.DePeliculaBE.models.User;

@Repository
public interface AuthRepository extends JpaRepository<User,Long>
{
	
}
