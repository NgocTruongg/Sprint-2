package com.example.auto365.repository;

import com.example.auto365.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IAccountRepository extends JpaRepository<Account, Integer> {
    @Query(value = "select * from account where account_name like :account_name", nativeQuery = true)
    Account findAccountByNameAccount(@Param("account_name") String accountName);
}
