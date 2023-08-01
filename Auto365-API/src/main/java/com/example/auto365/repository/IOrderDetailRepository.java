package com.example.auto365.repository;

import com.example.auto365.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Integer> {


    List<OrderDetail> findOrderDetailByCustomer_CustomerId(Integer id);
    List<OrderDetail> findOrdersDetailByOrders_IdOrders(Integer id);
}
