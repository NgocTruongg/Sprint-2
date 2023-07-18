package com.example.auto365.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private Integer employeeId;

    private String employeeName;

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

    @ManyToOne
    @JoinColumn(name = "position_id",referencedColumnName = "position_id")
    private Position position;

    public Employee() {
    }

    public Employee(Integer employeeId, String employeeName, String numberPhone, String address, String email, Double gender,
                    LocalDate dayOfBirth, Boolean isDelete, Account account, Position position) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.numberPhone = numberPhone;
        this.address = address;
        this.email = email;
        this.gender = gender;
        this.dayOfBirth = dayOfBirth;
        this.isDelete = isDelete;
        this.account = account;
        this.position = position;
    }

    public Integer getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
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

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}
