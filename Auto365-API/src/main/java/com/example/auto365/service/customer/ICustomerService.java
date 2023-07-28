package com.example.auto365.service.customer;

import com.example.auto365.model.Cart;
import com.example.auto365.model.Customer;

public interface ICustomerService {
    Customer findByAccount(String name);

}
