package com.example.auto365.controller;

import com.example.auto365.model.Customer;
import com.example.auto365.security.jwt.JwtProvider;
import com.example.auto365.security.jwt.JwtTokenFilter;
import com.example.auto365.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/user/customer")
@CrossOrigin("*")
public class CustomerController {

    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Customer findCustomer(HttpServletRequest request){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        return customer;
    }
}
