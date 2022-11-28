package com.example.DePeliculaBE.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DePeliculaBE.repositories.UserRepository;

@Service
public class UserServices
{
	@Autowired
	private UserRepository repository;

	public boolean existsByUsername(String username)
	{
		return repository.findByUsername(username) != null;
	}
}
