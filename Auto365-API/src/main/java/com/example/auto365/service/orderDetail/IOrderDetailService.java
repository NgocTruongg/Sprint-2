package com.example.auto365.service.orderDetail;

import com.example.auto365.model.OrderDetail;

import java.util.List;

public interface IOrderDetailService {
    void save(OrderDetail orderDetail);
    List<OrderDetail> findAll(Integer id);
    List<OrderDetail> findAllByOrder(Integer id);
}
