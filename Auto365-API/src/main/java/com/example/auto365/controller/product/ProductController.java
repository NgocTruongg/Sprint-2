package com.example.auto365.controller.product;

import com.example.auto365.dto.ProductDTO;
import com.example.auto365.model.Product;
import com.example.auto365.model.ProductType;
import com.example.auto365.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/public/product")
public class ProductController {

    @Autowired
    private IProductService productService;


    // lây ra sản phẩm mới nhất được thêm vào
    @GetMapping("/newProduct")
    public ResponseEntity<List<Product>> getNewProduct() {
        List<Product> newProductList = productService.findNewProduct();
        if (newProductList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newProductList, HttpStatus.OK);
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


    @GetMapping("")
    public ResponseEntity<List<Product>> displayMenu() {
        List<Product> products = productService.getAllProduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/type-product")
    public ResponseEntity<List<ProductType>> displayTypeMenu() {
        List<ProductType> productsType = productService.getAllTypeProduct();
        return new ResponseEntity<>(productsType, HttpStatus.OK);
    }

    @GetMapping("/product-by-type/{type}")
    public ResponseEntity<List<Product>> displayProductByType(@PathVariable Integer type) {
        List<Product> products = productService.getProductByTypeProducts(type);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/product-by-name")
    public ResponseEntity<List<Product>> displayProductByName(@RequestParam(name = "productName") String productName) {
        List<Product> products = productService.getProductByNameProduct(productName);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
