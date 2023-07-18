package com.example.auto365.dto;

import com.example.auto365.model.Employee;
import com.example.auto365.model.ProductType;


public class ProductDTO {

    private Integer productId;

    private String productName;

    private String image;

    private String status;
    private Integer quantity;

    private String price;


    private Employee employee;

    private ProductType productType;

    public ProductDTO() {
    }

    public ProductDTO(Integer productId, String productName, String image, String status,
                      Integer quantity, String price, Employee employee, ProductType productType) {
        this.productId = productId;
        this.productName = productName;
        this.image = image;
        this.status = status;
        this.quantity = quantity;
        this.price = price;
        this.employee = employee;
        this.productType = productType;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
