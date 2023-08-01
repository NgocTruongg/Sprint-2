package com.example.auto365.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_orders")
    private Integer idOrders;

    private String invoiceDate;

    private String totalPayment;

    public Orders() {
    }

    public Orders(Integer idOrders, String invoiceDate, String totalPayment) {
        this.idOrders = idOrders;
        this.invoiceDate = invoiceDate;
        this.totalPayment = totalPayment;
    }

    public Integer getIdOrders() {
        return idOrders;
    }

    public void setIdOrders(Integer idOrders) {
        this.idOrders = idOrders;
    }

    public String getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(String invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public String getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(String totalPayment) {
        this.totalPayment = totalPayment;
    }
}
