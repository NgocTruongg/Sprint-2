package com.example.auto365.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "role_id")
    private Integer roleId;

    private String roleName;

    public Role() {
    }

}
