package com.example.auto365.security.jwt;

import com.example.auto365.security.userPrincipal.UserPrinciple;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtProvider {
    private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);
    private String jwtSecret = "auto365-secret"; // đây là SIGNATURE
    private long jwtExpiration = 3600000L; // set thời gian hết hạn của token là 1h

    /**
     * @Param authentication
     * @return String createToken(Authentication authentication)
     * Phương thức sử dụng để tạo ra token dựa vào tham số đầu vào là 1 đối tượng của Authentication
     * Kết quả trả về là 1 chuỗi token đã tạo
     **/
    public String createToken(Authentication authentication) {
        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
        return Jwts.builder().setSubject(userPrinciple.getUsername())
                .setIssuedAt(new Date()) // đặt thời gian phát hành cho token
                .setExpiration(new Date(new Date().getTime() + jwtExpiration)) // đặt thời gian hết hạn
                .signWith(SignatureAlgorithm.HS512, jwtSecret) // ký chuỗi bằng thuật toán hs256 và khóa bí mật
                .compact();
    }

    /**
     * @Param token
     * @return boolean validateToken(String token)
     * Phương thức sử dụng check token hợp lệ hay không
     * Nếu tên token hợp lệ thì trả về true, ngược lại false.
     */
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token); // giải mã mã token của client cung cấp
            return true;
        } catch (SignatureException e) {
            logger.error("Invalid JWT signature -> Message: {}", e);
        } catch (MalformedJwtException e) {
            logger.error("Invalid format token -> Message: {}", e);
        } catch (ExpiredJwtException e) {
            logger.error("Expired JWT token -> Message: {}", e);
        } catch (UnsupportedJwtException e) {
            logger.error("Unsupport JWT token -> Message: {}", e);
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty -> Message: {}", e);
        }
        return false;
    }

    /**
     * @Param token
     * @return String getUserNameFromToken(String token)
     * Phương thức sử dụng để lấy tên của AccountUser từ token
     */
    public String getUserNameFromToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }
}
