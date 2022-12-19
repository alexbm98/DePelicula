package com.example.DePeliculaBE.controllers;

import java.util.Collection;
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
import com.example.DePeliculaBE.models.Series;
import com.example.DePeliculaBE.services.FilmServices;
import com.example.DePeliculaBE.services.SeriesServices;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/series")
public class SeriesController
{
	@Autowired
	private SeriesServices services;
	
	@GetMapping
	public List<Series> showAllSeries()
	{
		return services.listAllSeries();
	}
	
	@GetMapping("/{seriesId}")
	public Optional<Series> showSeriesById(@PathVariable long seriesId)
	{
		return services.listSeriesById(seriesId);
	}
	
	@GetMapping("/search/{seriesTitle}")
	public Optional<Series> showSeriesByTitle(@PathVariable String seriesTitle)
	{
		return services.listSeriesByTitle(seriesTitle);
	}
	
	@PostMapping("/seriesSearch")
	public Collection<Series> showSeriesBySearch(@RequestBody String searchContent)
	{
		return services.listSeriesBySearch(searchContent);
	}
	
	@PostMapping("/seriesByGenre")
	public Collection<Series> showSeriesByGenre(@RequestBody String genre)
	{
		return services.listSeriesByGenre(genre);
	}
	
	@PostMapping("/addSeries")
	public Series addSeries(@RequestBody Series series)
	{
		return services.createSeries(series);
	}
	
	@PostMapping("/deleteSeries")
	public void deleteSeries(@RequestBody String seriesTitle)
	{
		services.deleteSeries(seriesTitle);
	}
	
	@PostMapping("/updateSeries")
	public Series updateSeries(@RequestBody Series series)
	{
		return services.updateSeries(series);
	}
	
	@PostMapping("/seriesExists")
	public Optional<Series> checkExistingSeries(@RequestBody String seriesTitle)
	{
		return services.seriesExists(seriesTitle);
	}
}
