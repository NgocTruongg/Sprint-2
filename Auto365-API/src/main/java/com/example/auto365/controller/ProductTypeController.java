package com.example.auto365.controller;

import com.example.auto365.model.ProductType;
import com.example.auto365.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/product-type")
public class ProductTypeController {

    @Autowired
    private IProductTypeService iProductTypeService;


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<ProductType> findAllProductType(){
        return iProductTypeService.findAllType();
    }
}