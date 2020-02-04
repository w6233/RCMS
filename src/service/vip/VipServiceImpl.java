package service.vip;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.vip.ConsumeMapper;
import dao.vip.VipMapper;
import pojo.BusinessRuntimeException;
import pojo.Consume;
import pojo.ResultCode;
import pojo.Vip;

@Service
@Transactional
public class VipServiceImpl implements VipService {
	
	@Autowired
	public VipMapper vipMapper;
	
	@Autowired
	public ConsumeMapper consumeMapper;

	@Override
	public int insertVip(Vip vip) {
		String id = UUID.randomUUID().toString().replaceAll("-", "");
		vip.setId(id);
		return vipMapper.insert(vip);
	}

	@Override
	public int getVipCount(Vip pager) {
		return vipMapper.getVipCount(pager);
	}

	@Override
	public List<Vip> getVipList(Vip pager) {
		return vipMapper.selectAll(pager);
	}

	@Override
	public int change(Consume consume) {
		String cid = UUID.randomUUID().toString().replaceAll("-", "");
		consume.setCid(cid);
		//查出vip信息
		String vipId = consume.getVipid();
		Vip vip = vipMapper.selectByPrimaryKey(vipId);
		BigDecimal pay = vip.getPay();
		BigDecimal give = vip.getGive();
		if(consume.getRecordtype()==1) {
			//扣款
			BigDecimal reducePay = consume.getChangepay();
			BigDecimal resPay = pay.subtract(reducePay);
			BigDecimal reducegive = consume.getChangegive();
			BigDecimal resGive = give.subtract(reducegive);
			vip.setPay(resPay);
			vip.setGive(resGive);
		}else if(consume.getRecordtype() == 0) {
			//充值
			BigDecimal rechargePay = consume.getChangepay();
			BigDecimal resPay = pay.add(rechargePay);
			BigDecimal rechargeGive = consume.getChangegive();
			BigDecimal resGive = give.add(rechargeGive);
			vip.setPay(resPay);
			vip.setGive(resGive);
		}else {
			throw new BusinessRuntimeException(ResultCode.PARAMETER_ERROR);
		}
		//保存vip信息
		vip.setModifier(consume.getCreator());
		int vipRow = vipMapper.updateMoneyByPrimaryKey(vip);
		if(vipRow == 0) {
			throw new BusinessRuntimeException(ResultCode.UPDATE_ERROR);
		}
		//保存扣款记录
		consume.setModifier(consume.getCreator());
		int recordRow = consumeMapper.insert(consume);
		if(recordRow == 0) {
			throw new BusinessRuntimeException(ResultCode.INSERT_ERROR);
		}
		return recordRow;
	}

	
}
