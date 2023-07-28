package com.example.auto365.model;

import javax.persistence.*;

@Entity
@Table(name = "bill")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_bill")
    private Integer idBill;

    private String invoiceDate;

    private String totalOrders;

    public Bill() {
    }

    public Bill(Integer idBill, String invoiceDate, String totalOrders) {
        this.idBill = idBill;
        this.invoiceDate = invoiceDate;
        this.totalOrders = totalOrders;
    }

    public Integer getIdBill() {
        return idBill;
    }

    public void setIdBill(Integer idBill) {
        this.idBill = idBill;
    }

    public String getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(String invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public String getTotalOrders() {
        return totalOrders;
    }

    public void setTotalOrders(String totalOrders) {
        this.totalOrders = totalOrders;
    }
}
