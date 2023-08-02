package com.example.auto365.controller.product;

import com.example.auto365.model.ProductType;
import com.example.auto365.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/public/product")
public class ProductTypeController {

    @Autowired
    private IProductTypeService productTypeService;

    @GetMapping("/type")
    public ResponseEntity<List<ProductType>>getAllProductType(){
        List<ProductType> productTypeList = productTypeService.findAllType();
        return new ResponseEntity<>(productTypeList, HttpStatus.OK);
    }
}

