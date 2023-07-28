package com.example.auto365.service.customer.impl;

import com.example.auto365.model.Customer;
import com.example.auto365.repository.ICustomerRepository;
import com.example.auto365.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Override
    public Customer findByAccount(String name) {
        return iCustomerRepository.findCustomerByAccount_AccountName(name);
    }
}
