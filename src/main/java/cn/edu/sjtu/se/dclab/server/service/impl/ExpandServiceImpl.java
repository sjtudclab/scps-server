package cn.edu.sjtu.se.dclab.server.service.impl;

import cn.edu.sjtu.se.dclab.server.entity.Expand;
import cn.edu.sjtu.se.dclab.server.mapper.ExpandMapper;
import cn.edu.sjtu.se.dclab.server.service.ExpandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Kevin on 12/14/2015.
 */
@Service
public class ExpandServiceImpl implements ExpandService{
    @Autowired
    private ExpandMapper expandMapper;

    @Override
    public boolean updateExpand(Expand expand) {
        return expandMapper.updateExpand(expand);
    }
    @Override
    public Expand getExpand(int id, int service_type){
        return expandMapper.getExpand(id, service_type);
    }
}
