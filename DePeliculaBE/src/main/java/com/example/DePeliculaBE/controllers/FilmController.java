package com.example.DePeliculaBE.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.DePeliculaBE.models.Film;
import com.example.DePeliculaBE.services.FilmServices;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/films")
public class FilmController
{
	@Autowired
	private FilmServices services;
	
	@GetMapping
	public List<Film> showAllFilms()
	{
		return services.listAllFilms();
	}
	
	@GetMapping("/{filmId}")
	public Optional<Film> showFilmById(@PathVariable long filmId)
	{
		return services.listFilmById(filmId);
	}
	
	@GetMapping("/search/{filmTitle}")
	public Optional<Film> showFilmByTitle(@PathVariable String filmTitle)
	{
		return services.listFilmByTitle(filmTitle);
	}
	
	@PostMapping("/addFilm")
	public Film addFilm(@RequestBody Film film)
	{
		return services.createFilm(film);
	}
}
