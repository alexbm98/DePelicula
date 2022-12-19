package com.example.DePeliculaBE.repositories;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.DePeliculaBE.models.Film;
import com.example.DePeliculaBE.models.Series;

@Repository
public interface SeriesRepository extends JpaRepository<Series,Long>
{
	public Optional<Series> findByTitle(String title);
	public Optional<Series> deleteByTitle(String title);
	
	@Query(value = "SELECT * FROM series f WHERE f.title like :search%", nativeQuery = true)
	public Collection<Series> findBySearch(@Param("search") String search);
	
	@Query(value = "SELECT * FROM series f WHERE f.genre like %:genre%", nativeQuery = true)
	public Collection<Series> findByGenre(@Param("genre") String genre);
}
