package com.example.auto365.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "account_user")
public class AccountUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name ="id")
    private Integer accountUserId;

    @Column(name ="account_user_name")
    private String accountUserName;

    @Column(name ="account_password")
    private String accountPassword;
    @Column(name ="reset_password")
    private String resetPassword;


    public AccountUser() {
    }

    public AccountUser(Integer accountUserId, String accountUserName, String accountPassword, String resetPassword) {
        this.accountUserId = accountUserId;
        this.accountUserName = accountUserName;
        this.accountPassword = accountPassword;
        this.resetPassword = resetPassword;
    }

    public Integer getAccountUserId() {
        return accountUserId;
    }

    public void setAccountUserId(Integer accountUserId) {
        this.accountUserId = accountUserId;
    }

    public String getAccountUserName() {
        return accountUserName;
    }

    public void setAccountUserName(String accountUserName) {
        this.accountUserName = accountUserName;
    }

    public String getAccountPassword() {
        return accountPassword;
    }

    public void setAccountPassword(String accountPassword) {
        this.accountPassword = accountPassword;
    }

    public String getResetPassword() {
        return resetPassword;
    }

    public void setResetPassword(String resetPassword) {
        this.resetPassword = resetPassword;
    }
}
