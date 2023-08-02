package com.example.auto365.controller.product;

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

    @GetMapping("/list")
    public ResponseEntity<Page<Product>> getAllProduct(@PageableDefault(size = 8) Pageable pageable,
                                                         @RequestParam(value = "page", defaultValue = "0")
                                                         int page) {
        pageable = PageRequest.of(page, 8);
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


    @GetMapping("/productByType/{type}")
    public ResponseEntity<List<Product>> displayProductByType(@PathVariable Integer type) {
        List<Product> products = productService.getProductByTypeProduct(type);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
