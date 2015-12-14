package cn.edu.sjtu.se.dclab.server.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

/**
 * Created by Kevin on 12/14/2015.
 */
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Expand {
    private int id;
    private String threshold_setting;
    private String schema_setting_auto;
    private String schema_setting_manual;
    private int service_type;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getThreshold_setting() {
        return threshold_setting;
    }

    public void setThreshold_setting(String threshold_setting) {
        this.threshold_setting = threshold_setting;
    }

    public String getSchema_setting_auto() {
        return schema_setting_auto;
    }

    public void setSchema_setting_auto(String schema_setting_auto) {
        this.schema_setting_auto = schema_setting_auto;
    }

    public String getSchema_setting_manual() {
        return schema_setting_manual;
    }

    public void setSchema_setting_manual(String schema_setting_manual) {
        this.schema_setting_manual = schema_setting_manual;
    }

    public int getService_type() {
        return service_type;
    }

    public void setService_type(int service_type) {
        this.service_type = service_type;
    }

}

