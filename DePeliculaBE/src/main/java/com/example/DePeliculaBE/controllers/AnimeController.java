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

import com.example.DePeliculaBE.models.Anime;
import com.example.DePeliculaBE.services.AnimeServices;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/animes")
public class AnimeController
{
	@Autowired
	private AnimeServices services;
	
	@GetMapping
	public List<Anime> showAllFilms()
	{
		return services.listAllAnimes();
	}
	
	@GetMapping("/{animeId}")
	public Optional<Anime> showAnimeById(@PathVariable long animeId)
	{
		return services.listAnimeById(animeId);
	}
	
	@GetMapping("/search/{animeTitle}")
	public Optional<Anime> showAnimeByTitle(@PathVariable String animeTitle)
	{
		return services.listAnimeByTitle(animeTitle);
	}
	
	@PostMapping("/addAnime")
	public Anime addFilm(@RequestBody Anime anime)
	{
		return services.createAnime(anime);
	}
}
