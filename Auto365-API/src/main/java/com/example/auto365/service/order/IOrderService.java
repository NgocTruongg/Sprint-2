package com.example.auto365.service.order;

import com.example.auto365.model.Orders;

public interface IOrderService {
    void save(Orders orders);
    Orders findById(Integer id);
}
