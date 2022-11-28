package com.example.DePeliculaBE.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DePeliculaBE.models.Anime;
import com.example.DePeliculaBE.repositories.AnimeRepository;

@Service
public class AnimeServices
{
	@Autowired
	private AnimeRepository repository;
	
	public List<Anime> listAllAnimes()
	{
		return repository.findAll();
	}
	
	public Optional<Anime> listAnimeById(long id)
	{
		return repository.findById(id);
	}
	
	public Optional<Anime> listAnimeByTitle(String title)
	{
		return repository.findByTitle(title);
	}
	
	public Anime createAnime(Anime anime)
	{
		return repository.save(anime);
	}
}
