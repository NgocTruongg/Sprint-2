package com.example.auto365.service.product;

import com.example.auto365.dto.ProductDTO;
import com.example.auto365.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {

    Page<Product> findAllProduct( String name, Integer productTypeId,Pageable pageable);

    Page<Product> findAll(Pageable pageable);

    void addProduct(ProductDTO productDTO);

    Product findById(Integer id);
}
