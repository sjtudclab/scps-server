package cn.edu.sjtu.se.dclab.server.controller;

import cn.edu.sjtu.se.dclab.server.common.Result;
import cn.edu.sjtu.se.dclab.server.entity.User;
import cn.edu.sjtu.se.dclab.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Huiyi on 2015/3/26.
 */
@Controller
@RequestMapping("")
public class UserController {
    @Autowired
    private UserService userService;

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public String login(HttpServletRequest request) {
        request.getSession().setAttribute("name", "li");
        return "success";
    }

    @ResponseBody
    @RequestMapping(value = "/register", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String register(@RequestBody User user) {
        userService.registerUser(user);
        return Result.SUCCESS;
    }
}
