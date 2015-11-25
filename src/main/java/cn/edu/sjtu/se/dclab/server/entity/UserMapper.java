package cn.edu.sjtu.se.dclab.server.entity;

import cn.edu.sjtu.se.dclab.server.mapper.User;
import org.apache.ibatis.annotations.Param;

import java.util.Collection;

/**
 * Created by Huiyi on 2015/3/11.
 */
public interface UserMapper {

    public User findByUserName(String username);
}
