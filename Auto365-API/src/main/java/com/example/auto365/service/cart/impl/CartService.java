package com.example.auto365.service.cart.impl;

import com.example.auto365.model.Cart;
import com.example.auto365.repository.ICartRepository;
import com.example.auto365.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public List<Cart> findAllCart(String name) {
        return iCartRepository.findCartByCustomer_Account_AccountName(name);
    }

    @Override
    public Cart existCart(int customerId, int productId) {
        return iCartRepository.findCartByCustomer_CustomerIdAndProduct_ProductId(customerId, productId);
    }

    @Override
    public void decrease(int quantity) {

    }

    @Override
    public void increase(int quantity) {

    }

    @Override
    public void add(Cart cart) {
        iCartRepository.save(cart);
    }

    @Override
    public void delete(Cart cart) {
        iCartRepository.delete(cart);
    }

    @Override
    public Cart findById(int id) {
        return iCartRepository.findById(id).get();
    }

    @Override
    public List<Cart> findCartByCustomerId(int id) {
        return iCartRepository.findCartByCustomer_CustomerId(id);
    }
}
