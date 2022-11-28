package com.example.DePeliculaBE.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.DePeliculaBE.models.Anime;

@Repository
public interface AnimeRepository extends JpaRepository<Anime,Long>
{
	public Optional<Anime> findByTitle(String title);
}
