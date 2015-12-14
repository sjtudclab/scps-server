package cn.edu.sjtu.se.dclab.server.service;

import cn.edu.sjtu.se.dclab.server.entity.Expand;

/**
 * Created by Kevin on 12/14/2015.
 */
public interface ExpandService {
    public boolean updateExpand(Expand expand);
    public Expand getExpand(int id, int service_type);
}
