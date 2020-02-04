package dao.vip;

import java.util.List;

import pojo.Consume;

public interface ConsumeMapper {
    int deleteByPrimaryKey(String cid);

    int insert(Consume record);

    Consume selectByPrimaryKey(String cid);

    List<Consume> selectAll();

    int updateByPrimaryKey(Consume record);
}