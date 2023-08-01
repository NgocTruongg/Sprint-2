package com.example.auto365.dto;

import com.example.auto365.model.Customer;

import java.util.ArrayList;
import java.util.List;

public class PaymentForm {
    private Customer customer;
    private String phoneNumberShipping;
    private String addressShipping;
    private String name;
    private Double totalPrice;
    private List<Integer> listCartId = new ArrayList<>();

    public PaymentForm() {
    }

    public PaymentForm(Customer customer, String phoneNumberShipping,
                       String addressShipping, String name, Double totalPrice, List<Integer> listCartId) {
        this.customer = customer;
        this.phoneNumberShipping = phoneNumberShipping;
        this.addressShipping = addressShipping;
        this.name = name;
        this.totalPrice = totalPrice;
        this.listCartId = listCartId;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getPhoneNumberShipping() {
        return phoneNumberShipping;
    }

    public void setPhoneNumberShipping(String phoneNumberShipping) {
        this.phoneNumberShipping = phoneNumberShipping;
    }

    public String getAddressShipping() {
        return addressShipping;
    }

    public void setAddressShipping(String addressShipping) {
        this.addressShipping = addressShipping;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public List<Integer> getListCartId() {
        return listCartId;
    }

    public void setListCartId(List<Integer> listCartId) {
        this.listCartId = listCartId;
    }
}
