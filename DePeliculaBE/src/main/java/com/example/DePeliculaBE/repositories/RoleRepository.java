package com.example.DePeliculaBE.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.DePeliculaBE.models.ERole;
import com.example.DePeliculaBE.models.Role;

public interface RoleRepository extends JpaRepository<Role,Long>
{
	Optional<Role> findByName(ERole name);
}
