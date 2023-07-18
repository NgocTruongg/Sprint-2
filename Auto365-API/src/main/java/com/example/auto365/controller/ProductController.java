package com.example.auto365.controller;

import com.example.auto365.dto.ProductDTO;
import com.example.auto365.model.Product;
import com.example.auto365.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private IProductService productService;

    @GetMapping("")
    public ResponseEntity<Page<Product>> findProductByName (
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(name = "productTypeId", defaultValue = "0") Integer productTypeId,
            @PageableDefault(size = 8) Pageable pageable ) {
        Page<Product> products = productService.findAllProduct(name, productTypeId,pageable);
        if (products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


    @GetMapping("/list")
    public ResponseEntity<Page<Product>> getAllProduct(@PageableDefault(size = 5) Pageable pageable,
                                                         @RequestParam(value = "page", defaultValue = "0")
                                                         int page) {
        pageable = PageRequest.of(page, 5);
        Page<Product> product = productService.findAll(pageable);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create")
    public ResponseEntity<?> createProduct(@Validated @RequestBody ProductDTO productDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        productService.addProduct(productDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/detail/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") Integer id) {
        Product product = productService.findById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

}
