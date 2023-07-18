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

    private String priceBill;
    @OneToOne
    @JoinColumn(name = "orders_id", referencedColumnName = "orders_id")
    private Orders orders ;

    public Bill() {
    }

    public Bill(Integer idBill, String invoiceDate, String priceBill, Orders orders) {
        this.idBill = idBill;
        this.invoiceDate = invoiceDate;
        this.priceBill = priceBill;
        this.orders = orders;
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

    public String getPriceBill() {
        return priceBill;
    }

    public void setPriceBill(String priceBill) {
        this.priceBill = priceBill;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }
}
