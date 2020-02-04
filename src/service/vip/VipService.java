package service.vip;

import java.util.List;

import pojo.Consume;
import pojo.Vip;

public interface VipService {

	int insertVip(Vip vip);

	/*
	 * 获取数量
	 */
	int getVipCount(Vip pager);

	/*
	 * 获取会员列表(分页)
	 * @param pager
	 * @return
	 */
	List<Vip> getVipList(Vip pager);

	/*
	 * 扣费
	 * @param vipConsumeRecord
	 * @return
	 */
	int change(Consume consume);

}
