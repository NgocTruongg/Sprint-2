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
import java.util.List;

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

    Product findProductByProductId(int id);

    @Query(value = "SELECT * FROM product ORDER BY product_id DESC  LIMIT 8", nativeQuery = true)
    List<Product> findNewProduct();

    @Query(value = "select * from product where product_type_id = :productTypeId", nativeQuery = true)
    List<Product> getProductByType(@Param("productTypeId") Integer type);

    @Query(value = "select * from product join product_type pt on pt.product_type_id = product.product_type_id where product_type_name like CONCAT('%',?1, '%')", nativeQuery = true)
    List<Product> getProductByName(String productName);

    @Modifying
    @Query(value = "update product set amount = :amount where product_id = :productId", nativeQuery = true)
    void setAmount(@Param("amount") Integer amount,
                   @Param("productId") Integer productId);
}
