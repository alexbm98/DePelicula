package com.example.DePeliculaBE.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DePeliculaBE.models.User;
import com.example.DePeliculaBE.repositories.AuthRepository;

@Service
public class AuthServices
{
	@Autowired
	private AuthRepository repository;

	public User createUser(User user)
	{
		return repository.save(user);
	}
	
}
