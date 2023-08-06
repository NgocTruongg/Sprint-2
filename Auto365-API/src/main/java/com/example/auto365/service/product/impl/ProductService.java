package com.example.auto365.service.product.impl;

import com.example.auto365.dto.ProductDTO;
import com.example.auto365.model.Product;
import com.example.auto365.model.ProductType;
import com.example.auto365.repository.IProductRepository;
import com.example.auto365.repository.IProductTypeRepository;
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
    private IProductRepository iProductRepository;
    @Autowired
    private IProductTypeRepository iProductTypeRepository;


    @Override
    public Page<Product> findAll(Pageable pageable) {
        return iProductRepository.findAll(pageable);
    }

    @Override
    public void addProduct(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        iProductRepository.saveProduct(
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
        return iProductRepository.findProductByProductId(id);
    }

    @Override
    public List<Product> findNewProduct() {
        return iProductRepository.findNewProduct();
    }
    @Override
    public void save(Product product) {
        iProductRepository.save(product);
    }
    @Override
    public List<Product> getAllProduct() {
        return iProductRepository.findAll();
    }

    @Override
    public List<ProductType> getAllTypeProduct() {
        return iProductTypeRepository.findAll();
    }

    @Override
    public List<Product> getProductByTypeProducts(Integer type) {
        return iProductRepository.getProductByType(type);
    }

    @Override
    public List<Product> getProductByNameProduct(String productName) {
        return iProductRepository.getProductByName(productName);
    }

}
