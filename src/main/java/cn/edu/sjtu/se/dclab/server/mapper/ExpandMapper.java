package cn.edu.sjtu.se.dclab.server.mapper;

import cn.edu.sjtu.se.dclab.server.entity.Expand;
import org.apache.ibatis.annotations.Param;

/**
 * Created by Kevin on 12/14/2015.
 */
public interface ExpandMapper {
    public boolean updateExpand(Expand expand);
    public Expand getExpand(@Param("id")int id, @Param("service_type")int service_type);
}
