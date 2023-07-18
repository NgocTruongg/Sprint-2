//package com.example.auto365.model;
//import javax.persistence.*;
//
//@Entity
//@Table(name = "account_role")
//public class AccountRole {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer accountRoleId;
//
//    @ManyToOne
//    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
//    private Account account;
//
//    @ManyToOne
//    @JoinColumn(name = "roles_id", referencedColumnName = "roles_id")
//    private Roles roles;
//
//    public AccountRole() {
//    }
//
//    public AccountRole(Integer accountRoleId, Account account, Roles roles) {
//        this.accountRoleId = accountRoleId;
//        this.account = account;
//        this.roles = roles;
//    }
//
//    public Integer getAccountRoleId() {
//        return accountRoleId;
//    }
//
//    public void setAccountRoleId(Integer accountRoleId) {
//        this.accountRoleId = accountRoleId;
//    }
//
//    public Account getAccountUser() {
//        return account;
//    }
//
//    public void setAccountUser(Account account) {
//        this.account = account;
//    }
//
//    public Roles getRoles() {
//        return roles;
//    }
//
//    public void setRoles(Roles roles) {
//        this.roles = roles;
//    }
//}
