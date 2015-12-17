package cn.edu.sjtu.se.dclab.server.service.impl;

import cn.edu.sjtu.se.dclab.server.entity.Expand;
import cn.edu.sjtu.se.dclab.server.mapper.ExpandMapper;
import cn.edu.sjtu.se.dclab.server.service.ExpandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * Created by Kevin on 12/14/2015.
 */
@Service
public class ExpandServiceImpl implements ExpandService {
    private String script = "expand.sh";

    @Autowired
    private ExpandMapper expandMapper;

    @Override
    public boolean updateExpand(Expand expand) {
        return expandMapper.updateExpand(expand);
    }

    @Override
    public Expand getExpand(int id, int service_type) {
        expand();
        return expandMapper.getExpand(id, service_type);
    }

    @Override
    public void expand() {
        /*try {
            Process p = Runtime.getRuntime().exec(script);
            readBuffer(p.getInputStream(), p.getErrorStream());
                p.waitFor();
        } catch (Exception e) {
            e.printStackTrace();
        }*/
    }

    private void readBuffer(final InputStream input, final InputStream error) {
        new Thread() {

            public void run() {
                BufferedReader inputReader = new BufferedReader(
                        new InputStreamReader(input));
                try {
                    while (inputReader.readLine() != null)
                        ;
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        input.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }.start();

        new Thread() {
            public void run() {
                BufferedReader errorReader = new BufferedReader(
                        new InputStreamReader(error));
                try {
                    while (errorReader.readLine() != null)
                        ;
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        error.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }.start();
    }
}
