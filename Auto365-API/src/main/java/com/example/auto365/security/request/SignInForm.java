package com.example.auto365.security.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignInForm {
    @NotBlank(message = "Tên đăng nhập không được để trống")
    @Size(min = 6, max = 30, message = "Tên đăng nhập chỉ từ 6 đến 30 ký tự")
    private String accountName;
    @NotBlank(message = "Mật khẩu không được để trống")
    @Size(min = 6, max = 30, message = "Mật khẩu chỉ từ 6 đến 30 ký tự")
    private String accountPassword;

    public SignInForm() {
    }

    public SignInForm(String accountName, String accountPassword) {
        this.accountName = accountName;
        this.accountPassword = accountPassword;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getAccountPassword() {
        return accountPassword;
    }

    public void setAccountPassword(String accountPassword) {
        this.accountPassword = accountPassword;
    }
}
