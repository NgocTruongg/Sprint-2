package com.example.auto365.repository;

import com.example.auto365.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

    Customer findCustomerByAccount_AccountName(String name);

    Customer findCustomerByAccount_AccountId(int id);
}
