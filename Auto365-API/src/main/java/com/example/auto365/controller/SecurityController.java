package com.example.auto365.controller;
import com.example.auto365.security.jwt.JwtProvider;
import com.example.auto365.security.request.SignInForm;
import com.example.auto365.security.response.ErrorMessage;
import com.example.auto365.security.response.JwtResponse;
import com.example.auto365.security.userPrincipal.UserPrinciple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/public")
public class SecurityController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtProvider jwtProvider;

    /**
     *
     * @return ResponseEntity<?> login(@Valid @RequestBody SignInForm signInForm)
     * Phương thức sử dụng để đăng nhập dựa trên đầu vào là username và password
     * Kết quả trả về là 1 object bao gồm: token được tạo có hiệu lực 1h, tên người dùng và quyền truy cập
     */

    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody SignInForm signInForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<ErrorMessage> errorMessages = new ArrayList<>();
            bindingResult
                    .getFieldErrors()
                    .stream()
                    .forEach(f -> errorMessages.add(new ErrorMessage(f.getField(), f.getDefaultMessage())));
            return new ResponseEntity<>(errorMessages, HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = authenticationManager.authenticate
                (new UsernamePasswordAuthenticationToken(signInForm.getAccountName(),
                        signInForm.getAccountPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.createToken(authentication);
        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
        return new ResponseEntity<>(new JwtResponse(token, userPrinciple.getUsername(), userPrinciple.getAuthorities()), HttpStatus.OK);
    }
}
