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
    @Column(columnDefinition = "bit(1) default 0")
    private Boolean isDelete;


    @OneToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    private Account account;

    public Customer() {
    }

    public Customer(Integer customerId, String customerName, String numberPhone, String address,
                    String email, Double gender, LocalDate dayOfBirth, Boolean isDelete, Account account) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.numberPhone = numberPhone;
        this.address = address;
        this.email = email;
        this.gender = gender;
        this.dayOfBirth = dayOfBirth;
        this.isDelete = isDelete;
        this.account = account;
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

    public Boolean getDelete() {
        return isDelete;
    }

    public void setDelete(Boolean delete) {
        isDelete = delete;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
