package com.example.auto365.repository;

import com.example.auto365.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findCartByCustomer_Account_AccountName(String accountName);

    Cart findCartByCustomer_CustomerIdAndProduct_ProductId(int customerId, int productId);

    List<Cart> findCartByCustomer_CustomerId(int id);
}
