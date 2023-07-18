package com.example.auto365.service.product.impl;

import com.example.auto365.model.ProductType;
import com.example.auto365.repository.IProductTypeRepository;
import com.example.auto365.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {

    @Autowired
    private IProductTypeRepository iProductTypeRepository;

    @Override
    public List<ProductType> findAllType() {
        return iProductTypeRepository.findAll();
    }
}
