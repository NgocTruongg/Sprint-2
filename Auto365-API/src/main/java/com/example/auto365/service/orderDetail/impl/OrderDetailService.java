package com.example.auto365.service.orderDetail.impl;

import com.example.auto365.model.OrderDetail;
import com.example.auto365.repository.IOrderDetailRepository;
import com.example.auto365.service.orderDetail.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderDetailService implements IOrderDetailService {

    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;
    @Override
    public void save(OrderDetail orderDetail) {
        iOrderDetailRepository.save(orderDetail);
    }

    @Override
    public List<OrderDetail> findAll(Integer id) {
        return iOrderDetailRepository.findOrderDetailByCustomer_CustomerId(id);
    }

    @Override
    public List<OrderDetail> findAllByOrder(Integer id) {
        return iOrderDetailRepository.findOrdersDetailByOrders_IdOrders(id);
    }
}
