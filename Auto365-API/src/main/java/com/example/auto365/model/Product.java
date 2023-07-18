package com.example.auto365.model;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer productId;

    private String productName;

    private String image;

    private String status;
    private String screenResolution; //độ phân giải
    private String screenSize; // size màn hình
    private String ram;
    private String internalMemory; //bộ nhớ trong

    private Integer quantity;

    private String price;
    @Column(columnDefinition = "bit(1) default 0")
    private Boolean isDelete;


    @ManyToOne
    @JoinColumn(name="product_type_id", referencedColumnName = "product_type_id")
    private ProductType productType;

    public Product() {
    }

    public Product(Integer productId, String productName, String image, String status,
                   String screenResolution, String screenSize, String ram, String internalMemory,
                   Integer quantity, String price, Boolean isDelete, ProductType productType) {
        this.productId = productId;
        this.productName = productName;
        this.image = image;
        this.status = status;
        this.screenResolution = screenResolution;
        this.screenSize = screenSize;
        this.ram = ram;
        this.internalMemory = internalMemory;
        this.quantity = quantity;
        this.price = price;
        this.isDelete = isDelete;
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

    public String getScreenResolution() {
        return screenResolution;
    }

    public void setScreenResolution(String screenResolution) {
        this.screenResolution = screenResolution;
    }

    public String getScreenSize() {
        return screenSize;
    }

    public void setScreenSize(String screenSize) {
        this.screenSize = screenSize;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getInternalMemory() {
        return internalMemory;
    }

    public void setInternalMemory(String internalMemory) {
        this.internalMemory = internalMemory;
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

    public Boolean getDelete() {
        return isDelete;
    }

    public void setDelete(Boolean delete) {
        isDelete = delete;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
