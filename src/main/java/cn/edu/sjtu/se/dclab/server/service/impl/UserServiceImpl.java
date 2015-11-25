package cn.edu.sjtu.se.dclab.server.service.impl;

import cn.edu.sjtu.se.dclab.server.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * 2015年1月19日 下午9:44:00
 *
 * @author changyi yuan
 */
@Service
public class UserServiceImpl implements UserService {

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return null;
	}
}
