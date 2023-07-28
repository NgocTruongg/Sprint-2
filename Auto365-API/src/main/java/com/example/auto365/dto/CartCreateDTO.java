package com.example.auto365.dto;

import com.example.auto365.model.Account;

public class CartCreateDTO {
    private Integer quantity;
    private boolean status = true;
    private Integer product;

    public CartCreateDTO(Integer quantity, boolean status, Integer product, Account account) {
        this.quantity = quantity;
        this.status = status;
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Integer getProduct() {
        return product;
    }

    public void setProduct(Integer product) {
        this.product = product;
    }
}
