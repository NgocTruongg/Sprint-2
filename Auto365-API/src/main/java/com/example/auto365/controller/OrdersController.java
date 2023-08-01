package com.example.auto365.controller;

import com.example.auto365.dto.PaymentDTO;
import com.example.auto365.model.*;
import com.example.auto365.security.jwt.JwtProvider;
import com.example.auto365.security.jwt.JwtTokenFilter;
import com.example.auto365.service.cart.ICartService;
import com.example.auto365.service.customer.ICustomerService;
import com.example.auto365.service.order.IOrderService;
import com.example.auto365.service.orderDetail.IOrderDetailService;
import com.example.auto365.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/user/order")
@CrossOrigin("*")
public class OrdersController {

    @Autowired
    private IProductService iProductService;
    @Autowired
    private ICartService iCartService;
    @Autowired
    private IOrderService iOrderService;
    @Autowired
    private IOrderDetailService iOrderDetailService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private ICustomerService iCustomerService;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/payment")
    public void payment(HttpServletRequest request, @RequestBody PaymentDTO paymentDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        List<Cart> cartList = iCartService.findAllCart(name);
        Orders orders = new Orders();
        orders.setTotalPayment(paymentDTO.getTotalPrice());
        orders.setInvoiceDate(String.valueOf(LocalDate.now()));
        iOrderService.save(orders);
        for (int i = 0; i < cartList.size(); i++) {
            Product product = iProductService.findById(cartList.get(i).getProduct().getProductId());
            product.setQuantity(cartList.get(i).getProduct().getQuantity() - cartList.get(i).getQuantity());
            iProductService.save(product);
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setQuantityOrder(cartList.get(i).getQuantity());
            orderDetail.setProduct(cartList.get(i).getProduct());
            orderDetail.setCustomer(customer);
            orderDetail.setOrders(orders);
            iOrderDetailService.save(orderDetail);
            iCartService.delete(cartList.get(i));
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/history")
    public List<Orders> findAllOrderByCustomer(HttpServletRequest request) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        List<OrderDetail> orderDetails = iOrderDetailService.findAll(customer.getCustomerId());
        Set<Integer> integers = new HashSet<>();
        List<Orders> orders = new ArrayList<>();
        for (int i = 0; i < orderDetails.size(); i++) {
            integers.add(orderDetails.get(i).getOrders().getIdOrders());
        }
        List<Integer> count = new ArrayList<>(integers);
        for (int i = 0; i < count.size(); i++) {
            Orders order = iOrderService.findById(count.get(i));
            orders.add(order);
        }
        return orders;
    }

}
