package com.example.auto365.repository;

import com.example.auto365.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductsRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product where product_type_id = :productTypeId", nativeQuery = true)
    List<Product> getProductByType(@Param("productTypeId") Integer type);


    @Query(value = "select * from product join product_type pt on pt.product_type_id = product.product_type_id where product_type_name like CONCAT('%',?1, '%')", nativeQuery = true)
    List<Product> getProductByName(String productName);

    @Modifying
    @Query(value = "update product set amount = :amount where product_id = :productId", nativeQuery = true)
    void setAmount(@Param("amount") Integer amount,
                   @Param("productId") Integer productId);
}