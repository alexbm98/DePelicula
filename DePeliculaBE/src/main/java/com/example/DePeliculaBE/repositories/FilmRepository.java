package com.example.DePeliculaBE.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.DePeliculaBE.models.Film;

@Repository
public interface FilmRepository extends JpaRepository<Film,Long>
{
	public Optional<Film> findByTitle(String title);
	public Optional<Film> deleteByTitle(String title);
}
