package com.example.auto365.service.account;

import com.example.auto365.model.Account;

public interface IAccountService {

    Account findAccountByNameAccount(String name);
    Account saveAccount(Account account);

}
