package com.example.auto365.model;
import javax.persistence.*;

@Entity
@Table(name = "account_role")
public class AccountRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private Integer accountRoleId;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private AccountUser accountUser;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Roles roles;

    public AccountRole() {
    }

    public AccountRole(Integer accountRoleId, AccountUser accountUser, Roles roles) {
        this.accountRoleId = accountRoleId;
        this.accountUser = accountUser;
        this.roles = roles;
    }

    public Integer getAccountRoleId() {
        return accountRoleId;
    }

    public void setAccountRoleId(Integer accountRoleId) {
        this.accountRoleId = accountRoleId;
    }

    public AccountUser getAccountUser() {
        return accountUser;
    }

    public void setAccountUser(AccountUser accountUser) {
        this.accountUser = accountUser;
    }

    public Roles getRoles() {
        return roles;
    }

    public void setRoles(Roles roles) {
        this.roles = roles;
    }
}
