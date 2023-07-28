package com.example.auto365.security.userPrincipal;

import com.example.auto365.model.Account;
import com.example.auto365.service.account.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserDetailService implements UserDetailsService {
    @Autowired
    private IAccountService iAccountService;

    /**
     * @Param username
     * @return UserDetails loadUserByUsername(String username)
     * Phương thức sử dụng để build đối tượng UserDetails dựa trên đối tượng Account được lấy ra lên từ db
     * Kết quả trả về là đối tượng UserDetails.
     */
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) {
        try {
            Account account = iAccountService.findAccountByNameAccount(username);
            return UserPrinciple.build(account);
        } catch(UsernameNotFoundException e) {
            e.getMessage();
        }
        return null;
    }
}
