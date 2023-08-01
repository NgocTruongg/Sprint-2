package com.example.auto365.service.order.impl;

import com.example.auto365.model.Orders;
import com.example.auto365.repository.IOrderRepository;
import com.example.auto365.service.order.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository iOrderRepository;


    @Override
    public void save(Orders orders) {
        iOrderRepository.save(orders);
    }

    @Override
    public Orders findById(Integer id) {
        return iOrderRepository.findById(id).get();
    }
}
