package com.example.DePeliculaBE.services;

import java.util.Collection;
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
	
	public Collection<Film> listFilmsBySearch(String searchContent)
	{
		return repository.findBySearch(searchContent);
	}
	
	public Collection<Film> listFilmsByGenre(String genre)
	{
		return repository.findByGenre(genre);
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
	
	public void deleteFilm(String filmTitle)
	{
		Optional<Film> f = repository.findByTitle(filmTitle);
		repository.delete(f.get());
	}
	
	public Film updateFilm(Film film)
	{
		Optional<Film> f = repository.findByTitle(film.getTitle());
				
		f.get().setTitle(film.getTitle());
		f.get().setGenre(film.getGenre());
		f.get().setRelease_date(film.getRelease_date());
		f.get().setSummary(film.getSummary());
		f.get().setPoster(film.getPoster());
		f.get().setTrailer_url(film.getTrailer_url());
		f.get().setPlatforms(film.getPlatforms());
		
		return repository.save(f.get());
	}
	
	public Optional<Film> filmExists(String filmTitle)
	{
		return repository.findByTitle(filmTitle);
	}
}
