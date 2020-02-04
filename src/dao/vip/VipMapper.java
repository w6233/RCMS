package dao.vip;

import java.util.List;

import pojo.Vip;

public interface VipMapper {
    int deleteByPrimaryKey(String id);

    int insert(Vip record);

    Vip selectByPrimaryKey(String id);

    List<Vip> selectAll(Vip pager);

    int updateByPrimaryKey(Vip record);
    
	int getVipCount(Vip pager);

	/*
	 * 更新钱数
	 */
	int updateMoneyByPrimaryKey(Vip vip);
}