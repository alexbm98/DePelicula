package com.example.DePeliculaBE.repositories;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.DePeliculaBE.models.Film;

@Repository
public interface FilmRepository extends JpaRepository<Film,Long>
{
	public Optional<Film> findByTitle(String title);
	public Optional<Film> deleteByTitle(String title);
	
	@Query(value = "SELECT * FROM film f WHERE f.title like :search%", nativeQuery = true)
	public Collection<Film> findBySearch(@Param("search") String search);
	
	@Query(value = "SELECT * FROM film f WHERE f.genre like %:genre%", nativeQuery = true)
	public Collection<Film> findByGenre(@Param("genre") String genre);
}
