package com.example.auto365.controller;

import com.example.auto365.model.Customer;
import com.example.auto365.model.OrderDetail;
import com.example.auto365.security.jwt.JwtProvider;
import com.example.auto365.security.jwt.JwtTokenFilter;
import com.example.auto365.service.customer.ICustomerService;
import com.example.auto365.service.orderDetail.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/user/order-detail")
@CrossOrigin("*")
public class OrderDetailController {

    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private IOrderDetailService iOrderDetailService;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public List<OrderDetail> findAllOrderByCustomer(HttpServletRequest request , @PathVariable("id") Integer id){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        return iOrderDetailService.findAllByOrder(id);
    }
}
