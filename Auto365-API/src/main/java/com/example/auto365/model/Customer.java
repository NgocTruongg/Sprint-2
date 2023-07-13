package com.example.auto365.model;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "customer_id")
    private Integer customerId;

    private String customerName;

    private String numberPhone;

    private String address;

    private String email;

    private Double gender;

    private LocalDate dayOfBirth;

    public Customer() {
    }

    public Customer(Integer customerId, String customerName, String numberPhone,
                    String address, String email, Double gender, LocalDate dayOfBirth) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.numberPhone = numberPhone;
        this.address = address;
        this.email = email;
        this.gender = gender;
        this.dayOfBirth = dayOfBirth;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getNumberPhone() {
        return numberPhone;
    }

    public void setNumberPhone(String numberPhone) {
        this.numberPhone = numberPhone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getGender() {
        return gender;
    }

    public void setGender(Double gender) {
        this.gender = gender;
    }

    public LocalDate getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(LocalDate dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }
}
