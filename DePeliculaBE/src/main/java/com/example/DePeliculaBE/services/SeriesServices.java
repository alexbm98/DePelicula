package com.example.DePeliculaBE.services;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DePeliculaBE.models.Film;
import com.example.DePeliculaBE.models.Series;
import com.example.DePeliculaBE.repositories.SeriesRepository;

@Service
public class SeriesServices
{
	@Autowired
	private SeriesRepository repository;
	
	public List<Series> listAllSeries()
	{
		return repository.findAll();
	}
	
	public Collection<Series> listSeriesBySearch(String searchContent)
	{
		return repository.findBySearch(searchContent);
	}
	
	public Collection<Series> listSeriesByGenre(String genre)
	{
		return repository.findByGenre(genre);
	}
	
	public Optional<Series> listSeriesById(long id)
	{
		return repository.findById(id);
	}
	
	public Optional<Series> listSeriesByTitle(String title)
	{
		return repository.findByTitle(title);
	}
	
	public Series createSeries(Series series)
	{
		return repository.save(series);
	}
	
	public void deleteSeries(String seriesTitle)
	{
		Optional<Series> f = repository.findByTitle(seriesTitle);
		repository.delete(f.get());
	}
	
	public Series updateSeries(Series series)
	{
		Optional<Series> f = repository.findByTitle(series.getTitle());
				
		f.get().setTitle(series.getTitle());
		f.get().setGenre(series.getGenre());
		f.get().setSeasons(series.getSeasons());
		f.get().setRelease_date(series.getRelease_date());
		f.get().setSummary(series.getSummary());
		f.get().setPoster(series.getPoster());
		f.get().setTrailer_url(series.getTrailer_url());
		f.get().setPlatforms(series.getPlatforms());
		
		return repository.save(f.get());
	}
	
	public Optional<Series> seriesExists(String seriesTitle)
	{
		return repository.findByTitle(seriesTitle);
	}
}
