package com.example.auto365.service.products;

import com.example.auto365.model.Product;
import com.example.auto365.model.ProductType;

import java.util.List;

public interface IProductsService {
    List<Product> getAllProduct();

    List<ProductType> getAllTypeProduct();

    List<Product> getProductByTypeProducts(Integer type);

    List<Product> getProductByNameProduct(String productName);

}
