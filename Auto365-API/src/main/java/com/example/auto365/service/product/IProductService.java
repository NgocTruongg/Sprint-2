package com.example.auto365.service.product;

import com.example.auto365.dto.ProductDTO;
import com.example.auto365.model.Product;
import com.example.auto365.model.ProductType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<Product> findAll(Pageable pageable);

    void addProduct(ProductDTO productDTO);

    Product findById(int id);

    List<Product> findNewProduct();

    void save(Product product);


    List<Product> getAllProduct();

    List<ProductType> getAllTypeProduct();

    List<Product> getProductByTypeProducts(Integer type);

    List<Product> getProductByNameProduct(String productName);

}
