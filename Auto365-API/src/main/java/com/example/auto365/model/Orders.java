package com.example.auto365.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "orders_id")
    private Integer ordersId;

    private String quantityOrders;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "id_bill", referencedColumnName = "id_bill")
    private Bill bill;


    public Orders() {
    }

    public Orders(Integer ordersId, String quantityOrders,
                  Product product, Customer customer, Bill bill) {
        this.ordersId = ordersId;
        this.quantityOrders = quantityOrders;
        this.product = product;
        this.customer = customer;
        this.bill = bill;
    }

    public Integer getOrdersId() {
        return ordersId;
    }

    public void setOrdersId(Integer ordersId) {
        this.ordersId = ordersId;
    }

    public String getQuantityOrders() {
        return quantityOrders;
    }

    public void setQuantityOrders(String quantityOrders) {
        this.quantityOrders = quantityOrders;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }
}
