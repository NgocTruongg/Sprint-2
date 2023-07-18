package com.example.auto365.repository;

import com.example.auto365.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product(image, price, product_name,quantity, status, product_type_id)" +
            "VALUAS(:image, :price, :product_name,:quantity, :status, :product_type_id)", nativeQuery = true)
    void saveProduct(
            @Param("image") String image,
            @Param("price") String price,
            @Param("product_name") String productName,
            @Param("quantity") Integer quantity,
            @Param("status") String status,
            @Param("product_type_id") Integer productTypeId
    );

    @Transactional
    @Query(value = "SELECT * FROM product \n" +
            "WHERE (:productName IS NULL OR product.product_name LIKE CONCAT('%', :productName, '%'))\n" +
            "AND (:productTypeId = 0 OR product.product_type_id = :productTypeId)", nativeQuery = true)
    Page<Product> findProductByProductNameAndAndProductTypeContaining(@Param("productName") String name, @Param("productTypeId") Integer productTypeId, Pageable pageable);
    Product findByProductId(int id);
}
