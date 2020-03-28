package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import pojo.*;
import service.vip.VipService;
import tools.PagerTools;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/vip")
public class VipController {
	
    @Autowired
    private VipService vipService;

    @RequestMapping("/vip.html")
    public String vipMain(HttpSession session) {
        if(session.getAttribute("user")==null){//权限控制
            return "redirect:/login.html";
        }
        return "/vip/vip";
    }
    
  //添加会员信息
	@RequestMapping("/addVip.do")
	@ResponseBody
	public Object addVip(Vip vip,HttpSession session) {
		User user = (User) session.getAttribute("user");
		if(user==null){//权限控制
			return "redirect:/login.html";
		}
		vip.setCreator(user.getUserCode());
		int addVipFlag = vipService.insertVip(vip);
	    return "{\"addVipFlag\":\"" + addVipFlag + "\"}";
	}
	
  //加载会员信息
	@RequestMapping("/loadVipList.do")
	@ResponseBody
	public ModelAndView loadDrinkBillCode(ModelAndView modelAndView,Vip pager) {	
		int totalCount =  vipService.getVipCount(pager);
	    if (totalCount != 0) {
	        pager.setTotalCount(totalCount);
	    } else {
	        pager.setTotalCount(1);
	    }
	    pager.setPageSize(PagerTools.vipPagerSize);
	    pager.count();
	    List<Vip> vipList = vipService.getVipList(pager);
	    pager.setList(vipList);
	    modelAndView.addObject("pager", pager);
        modelAndView.setViewName("/vip/ajaxVipList");
        return modelAndView;
	}


    //充值or扣费
    @RequestMapping("/change.do")
    @ResponseBody
    public Object charging(HttpSession session,Consume consume) {
    	User user = (User) session.getAttribute("user");
		if(user==null){//权限控制
			return "redirect:/login.html";
		}
		consume.setCreator(user.getUserCode());
    	int row = vipService.change(consume);
    	if(row == 1) {
    		return ApiResult.of(ResultCode.SUCCESS);
    	}else {
    		return ApiResult.of(ResultCode.UNKNOWN_ERROR);
    	}
    }
    
    //加载销售信息
	@RequestMapping("/loadSellList.do")
	@ResponseBody
	public ModelAndView loadSellList(ModelAndView modelAndView, Consume pager) {
		int totalCount =  vipService.getConsumeCount(pager);
		if (totalCount != 0) {
		    pager.setTotalCount(totalCount);
		} else {
		    pager.setTotalCount(1);
		}
		pager.setPageSize(PagerTools.vipPagerSize);
		pager.count();
		pager.setList(vipService.getConsumeList(pager));
		modelAndView.addObject("pager", pager);
		modelAndView.setViewName("/vip/sellList");
		return modelAndView;
	}


//    //del删除销售信息
//    @RequestMapping("/delDrinkSellBill.do")
//    @ResponseBody
//    public Object delDrinkSellBill(@RequestParam(required = false) String id) {
//        return JSON.toJSONString(providerService.delDrinkSellBill(id));
//    }
//
//    //更新进货信息
//    @RequestMapping("/updateDrinkBill.do")
//    @ResponseBody
//    public Object delDrinkBill(Drinkbill drinkbill) {
//        drinkbill.setIsPay(2);
//        return JSON.toJSONString(providerService.updateDrinkBill(drinkbill));
//    }
//
//

//
//    //加载销售信息
//    @RequestMapping("/loadSuplusDrinkBill.do")
//    @ResponseBody
//    public ModelAndView loadSuplusDrinkBill(ModelAndView modelAndView, DrinkBillPager pager) {
//        int totalCount = providerService.getDrinkSellBillCount(pager);
//        if (totalCount != 0) {
//            pager.setTotalCount(totalCount);
//        } else {
//            pager.setTotalCount(1);
//        }
//        pager.setPageSize(PagerTools.drinkBillPagerSize);
//        pager.count();
//        pager.setList(providerService.getSuplusDrinkBill(pager));
//        modelAndView.addObject("pager", pager);
//        modelAndView.setViewName("/drink/suplusDrinkBillList");
//        return modelAndView;
//    }
//
//    //添加供应商
//    @RequestMapping("/addProvider.do")
//    @ResponseBody
//    public Object addProvider(Provider provider){
//        return JSON.toJSONString(providerService.addProvider(provider));
//    }
//    //验证供应商是否存在
//    @RequestMapping("/isProExist.do")
//    @ResponseBody
//    public Object isProExist(@RequestParam(required = false) String proName){
//        return JSON.toJSONString(providerService.isProExist(proName));
//    }
//    //加载供应商列表
//    @RequestMapping("/showProviderList.do")
//    public ModelAndView showProviderList(ModelAndView modelAndView,Pager pager){
//        pager.setTotalCount(providerService.getTotalCount(pager));
//        pager.setPageSize(3);
//        pager.count();
//        if("".equals(pager.getOpr()) || pager.getOpr()==null){
//            modelAndView.addObject("provider",providerService.getProviderList(pager).get(0));
//            modelAndView.setViewName("daily/provider/updateProvider");
//        }else{
//            pager.setList(providerService.getProviderList(pager));
//            modelAndView.setViewName("daily/provider/providerList");
//            modelAndView.addObject("pager",pager);
//        }
//        return modelAndView;
//    }
//    //删除供应商
//    @RequestMapping("/delProviderById.do")
//    @ResponseBody
//    public Object delProviderById(Pager pager){
//        return JSON.toJSONString(providerService.delProviderById(pager));
//    }
//    //更改供应商
//    @RequestMapping("/updateProvider.do")
//    @ResponseBody
//    public Object updateProvider(Provider provider){
//        return JSON.toJSONString(providerService.updateProvider(provider));
//    }
}
