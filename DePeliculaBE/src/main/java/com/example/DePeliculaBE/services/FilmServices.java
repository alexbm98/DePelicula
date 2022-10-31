package com.example.DePeliculaBE.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DePeliculaBE.models.Film;
import com.example.DePeliculaBE.repositories.FilmRepository;

@Service
public class FilmServices
{
	@Autowired
	private FilmRepository repository;
	
	public List<Film> listAllFilms()
	{
		return repository.findAll();
	}
	
	public Optional<Film> listFilmById(long id)
	{
		return repository.findById(id);
	}
	
	public Optional<Film> listFilmByTitle(String title)
	{
		return repository.findByTitle(title);
	}
	
	public Film createFilm(Film film)
	{
		return repository.save(film);
	}
}
