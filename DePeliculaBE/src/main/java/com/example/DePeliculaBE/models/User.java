package com.example.DePeliculaBE.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(	name = "users", 
uniqueConstraints = { 
	@UniqueConstraint(columnNames = "username"),
	@UniqueConstraint(columnNames = "email") 
})
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long iduser;
	
	@Column(name = "username")
	@Size(max = 20)
	@NotBlank
	private String username;
	
	@Column(name = "email")
	@Size(max = 50)
	@Email
	private String email;
	
	@Column(name = "password")
	@Size(max = 120)
	@NotBlank
	private String password;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
	
	public User()
	{
		
	}

	public User(String username, String email, String password)
	{
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public long getIduser() {
		return iduser;
	}

	public void setIduser(long iduser) {
		this.iduser = iduser;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
}
