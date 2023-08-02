package com.example.auto365.controller.product;

import com.example.auto365.service.products.IProductsService;
import com.example.auto365.model.Product;
import com.example.auto365.model.ProductType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/public")
public class ProductRestController {

    @Autowired
    private IProductsService iProductsService;

    @GetMapping("")
    public ResponseEntity<List<Product>> displayMenu() {
        List<Product> products = iProductsService.getAllProduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/type-product")
    public ResponseEntity<List<ProductType>> displayTypeMenu() {
        List<ProductType> productsType = iProductsService.getAllTypeProduct();
        return new ResponseEntity<>(productsType, HttpStatus.OK);
    }

    @GetMapping("/product-by-type/{type}")
    public ResponseEntity<List<Product>> displayProductByType(@PathVariable Integer type) {
        List<Product> products = iProductsService.getProductByTypeProducts(type);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/product-by-name")
    public ResponseEntity<List<Product>> displayProductByName(@RequestParam(name = "productName") String productName) {
        List<Product> products = iProductsService.getProductByNameProduct(productName);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
