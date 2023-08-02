package com.example.auto365.service.products.impl;

import com.example.auto365.service.products.IProductsService;
import com.example.auto365.model.Product;
import com.example.auto365.model.ProductType;
import com.example.auto365.repository.IProductTypeRepository;
import com.example.auto365.repository.IProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductsService implements IProductsService {

    @Autowired
    private IProductsRepository iProductsRepository;

    @Autowired
    private IProductTypeRepository iProductTypeRepository;
    @Override
    public List<Product> getAllProduct() {
        return iProductsRepository.findAll();
    }

    @Override
    public List<ProductType> getAllTypeProduct() {
        return iProductTypeRepository.findAll();
    }

    @Override
    public List<Product> getProductByTypeProducts(Integer type) {
        return iProductsRepository.getProductByType(type);
    }

    @Override
    public List<Product> getProductByNameProduct(String productName) {
        return iProductsRepository.getProductByName(productName);
    }
}
