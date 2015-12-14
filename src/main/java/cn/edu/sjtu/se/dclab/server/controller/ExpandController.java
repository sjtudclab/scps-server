package cn.edu.sjtu.se.dclab.server.controller;

import cn.edu.sjtu.se.dclab.server.entity.Expand;
import cn.edu.sjtu.se.dclab.server.service.ExpandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Kevin on 12/14/2015.
 */
@Controller
@RequestMapping("")
public class ExpandController {
    @Autowired
    private ExpandService expandService;


    @ResponseBody
    @RequestMapping(value = "/updateExpand", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean updateExpand(@RequestBody Expand expand) {
       return expandService.updateExpand(expand);
    }

    @RequestMapping(value="/getExpand/{id}",method = RequestMethod.GET)
    @ResponseBody
    public Expand getExpand(@PathVariable("id") int id, @RequestParam(defaultValue = "1", required = false)int service_type) {
      return expandService.getExpand(id, service_type);
    }
}
