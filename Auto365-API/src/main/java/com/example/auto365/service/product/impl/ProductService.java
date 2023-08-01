package com.example.auto365.service.product.impl;

import com.example.auto365.dto.ProductDTO;
import com.example.auto365.model.Product;
import com.example.auto365.repository.IProductRepository;
import com.example.auto365.service.product.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductService implements IProductService {


    @Autowired
    private IProductRepository productRepository;

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public void addProduct(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        productRepository.saveProduct(
                product.getImage(),
                product.getPrice(),
                product.getProductName(),
                product.getQuantity(),
                product.getStatus(),
                product.getProductType().getProductTypeId()
        );
    }

    @Override
    public Product findById(int id) {
        return productRepository.findProductByProductId(id);
    }

    @Override
    public List<Product> findNewProduct() {
        return productRepository.findNewProduct();
    }

    @Override
    public List<Product> getProductByTypeProduct(Integer type) {
        return productRepository.getProductByType(type);
    }

    @Override
    public void save(Product product) {
        productRepository.save(product);
    }
}
