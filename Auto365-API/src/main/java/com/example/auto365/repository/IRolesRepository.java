package com.example.auto365.repository;

import com.example.auto365.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRolesRepository extends JpaRepository<Roles, Integer> {
    Roles findByRolesName(String name);
}
