package cn.edu.sjtu.se.dclab.server.service;

import cn.edu.sjtu.se.dclab.server.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 *
 *@author Kaiyang Lv
 */
public interface UserService extends UserDetailsService{
    public Boolean registerUser(User user);
}
