package com.example.auto365.controller;

import com.example.auto365.dto.CartCreateDTO;
import com.example.auto365.dto.UpdateCartDTO;
import com.example.auto365.model.Cart;
import com.example.auto365.model.Customer;
import com.example.auto365.model.Product;
import com.example.auto365.security.jwt.JwtProvider;
import com.example.auto365.security.jwt.JwtTokenFilter;
import com.example.auto365.security.response.ResponseMessage;
import com.example.auto365.service.cart.ICartService;
import com.example.auto365.service.customer.ICustomerService;
import com.example.auto365.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin("*")
@RequestMapping("api/user/cart")
public class CartController {
    @Autowired
    private ICartService iCartService;
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private IProductService iProductService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public ResponseEntity<?> findAllCart(HttpServletRequest request) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        if (name == null) {
            return new ResponseEntity<>(new ResponseMessage("Mã JWT không chính xác"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(iCartService.findAllCart(name), HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/add")
    public ResponseEntity<?> addCart(HttpServletRequest request, @RequestBody CartCreateDTO cartCreateDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        if (customer == null) {
            return new ResponseEntity<>(new ResponseMessage("Mã JWT không chính xác"), HttpStatus.BAD_REQUEST);
        }
        Cart existCart = iCartService.existCart(customer.getCustomerId(), cartCreateDTO.getProduct());
        Product product = iProductService.findById(cartCreateDTO.getProduct());
        if (existCart != null) {
            if (product.getQuantity() > existCart.getQuantity()) {
                existCart.setQuantity(existCart.getQuantity() + cartCreateDTO.getQuantity());
                iCartService.add(existCart);
                return new ResponseEntity<>(new ResponseMessage("Cập nhật giỏ hàng thành công"), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm vào giỏ hàng thành công"), HttpStatus.BAD_REQUEST);
            }
        } else {
            Cart cart = new Cart();
            if (product.getQuantity() >= cartCreateDTO.getQuantity()) {
                cart.setQuantity(cartCreateDTO.getQuantity());
                cart.setCustomer(customer);
                cart.setStatus(cartCreateDTO.isStatus());
                cart.setProduct(product);
                iCartService.add(cart);
                return new ResponseEntity<>(new ResponseMessage("Thêm vào giỏ hàng thành công"), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm vào giỏ hàng thành công"), HttpStatus.BAD_REQUEST);
            }
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/update")
    public ResponseEntity<?> addCart(HttpServletRequest request, @RequestBody UpdateCartDTO updateCartDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        Cart cart = iCartService.existCart(customer.getCustomerId(), updateCartDTO.getProduct());
        if (cart.getProduct().getQuantity() >= updateCartDTO.getQuantity()) {
            cart.setQuantity(updateCartDTO.getQuantity());
            iCartService.add(cart);
            return new ResponseEntity<>(new ResponseMessage("Cập nhật số lượng trong giỏ hàng thành công"), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseMessage("Cập nhật số lượng trong giỏ hàng không thành công"), HttpStatus.BAD_REQUEST);
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removeCart(HttpServletRequest request, @PathVariable("id") Integer id) {
        iCartService.delete(iCartService.findById(id));
        return new ResponseEntity<>(new ResponseMessage("Xoá sản phẩm thành công"), HttpStatus.OK);
    }
}
