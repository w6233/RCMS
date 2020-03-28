$(function () {
    var path=$("#path").attr("path");

    //参数
    var param = {};
    
    function getParam(vipName, phone, pageIndex) {
        param.vipName = vipName;
        param.phone = phone;
        param.pageIndex = pageIndex;
    }
    
    function loadVipList(param) {
    	$.ajax({
    		url: path+"/vip/loadVipList.do",
    		dataType: "html",
    		type: "post",
    		data: param,
    		success: function (data) {
    			$("#ajaxVipListAppendDiv").html(data);
    		},
    		error: function () {
    			alert("通信异常");
    		}
    	});
    }

    getParam(null, null, 1);
    
    loadVipList(param);
    
    //动态搜索
    $("#today").on("click", "#searchVipBtn", function (e) {
    	var phone = $("#phone").val();
    	var vipName = $("#vipName").val();
    	getParam(vipName, phone, 1);
    	loadVipList(param);
    })
    
    //翻页
    $("#today").on("click", ".vipPagerBtn", function (e) {
        var pageIndex = $(e.target).attr("pageIndex");
        var phone = $(e.target).attr("phone");
        var vipName = $(e.target).attr("vipName");
        getParam(vipName, phone, pageIndex);
        loadVipList(param);
    })
    
    //扣费模块
    $("#today").on("click", ".charging", function (e) {
		var eTd10 = $(e.target);
		eTd10.attr('disabled',true);
		var vipId = eTd10.attr("vipId");
		var chargingStr = "<tr>" + 
		"    <td class=\"text-center\">扣款行<input type=\"hidden\" id=\"recordtype\" name=\"recordtype\" value=\"1\"/></td>" + 
		"    <td class=\"text-center\">-</td>" + 
		"    <td class=\"text-center\"><input type=\"number\" class=\"form-control\" id=\"reducePay\" name=\"reducePay\" placeholder=\"扣除金额\" min=\"1\" /></td>" + 
		"    <td class=\"text-center\"><input type=\"number\" class=\"form-control\" id=\"reduceGive\" name=\"reduceGive\" placeholder=\"扣除金额\" min=\"1\" /></td>" + 
		"    <td class=\"text-center\"><input type=\"text\" class=\"form-control\" id=\"reducePayee\" name=\"reducePayee\" placeholder=\"收款人\" /></td>" + 
		"    <td class=\"text-center\">" + 
		"		<div class=\"input-group\">" + 
		"			<select type=\"text\" id=\"reduceWay\" name=\"reduceWay\" class=\"form-control\">" + 
		"				<option value=\"0\" selected=\"selected\">请选择</option>" + 
		"				<option value=\"1\">支付宝</option>" + 
		"				<option value=\"2\">微信</option>" + 
		"				<option value=\"3\">美团</option>" + 
		"				<option value=\"4\">现金</option>" + 
		"				<option value=\"5\">其它(请备注付款方式)</option>" + 
		"			</select>" + 
		"		</div>" + 
		"    </td>" + 
		"    <td class=\"text-center\">" + 
		"        <input type=\"text\" class=\"form-control\" id=\"reduceRemark\" name=\"reduceRemark\" placeholder=\"备注\" />" + 
		"    </td>" + 
		"    <td class=\"text-center\">-</td>" + 
		"    <td class=\"text-center\">-</td>" + 
		"    <td class=\"text-center\">" + 
		"        <button class=\"btn btn-danger chargingBtn\" vipId=\""+vipId+"\">确定</button>" + 
		"        <button class=\"btn btn-danger chargingEscBtn\">取消</button>" + 
		"    </td>" + 
		"</tr>";
		var eTr = eTd10.parents("tr");
    	eTr.after(chargingStr);
    })
    
    //充值模块
    $("#today").on("click", ".recharge", function (e) {
    	var eTd10 = $(e.target);
    	eTd10.attr('disabled',true);
    	var vipId = eTd10.attr("vipId");
    	var chargingStr = "<tr>" + 
    	"    <td class=\"text-center\">充值行<input type=\"hidden\" id=\"recordtype\" name=\"recordtype\" value=\"0\"/></td>" + 
    	"    <td class=\"text-center\">-</td>" + 
    	"    <td class=\"text-center\"><input type=\"number\" class=\"form-control\" id=\"reducePay\" name=\"reducePay\" placeholder=\"充值金额\" min=\"1\" /></td>" + 
    	"    <td class=\"text-center\"><input type=\"number\" class=\"form-control\" id=\"reduceGive\" name=\"reduceGive\" placeholder=\"赠送金额\" min=\"1\" /></td>" + 
    	"    <td class=\"text-center\"><input type=\"text\" class=\"form-control\" id=\"reducePayee\" name=\"reducePayee\" placeholder=\"收款人\" /></td>" + 
    	"    <td class=\"text-center\">" + 
    	"		<div class=\"input-group\">" + 
    	"			<select type=\"text\" id=\"reduceWay\" name=\"reduceWay\" class=\"form-control\">" + 
    	"				<option value=\"0\" selected=\"selected\">请选择</option>" + 
    	"				<option value=\"1\">支付宝</option>" + 
    	"				<option value=\"2\">微信</option>" + 
    	"				<option value=\"3\">美团</option>" + 
    	"				<option value=\"4\">现金</option>" + 
    	"				<option value=\"5\">其它(请备注付款方式)</option>" + 
    	"			</select>" + 
    	"		</div>" + 
    	"    </td>" + 
    	"    <td class=\"text-center\">" + 
    	"        <input type=\"text\" class=\"form-control\" id=\"reduceRemark\" name=\"reduceRemark\" placeholder=\"备注\" />" + 
    	"    </td>" + 
    	"    <td class=\"text-center\">-</td>" + 
    	"    <td class=\"text-center\">-</td>" + 
    	"    <td class=\"text-center\">" + 
    	"        <button class=\"btn btn-danger chargingBtn\" vipId=\""+vipId+"\">确定</button>" + 
    	"        <button class=\"btn btn-danger chargingEscBtn\">取消</button>" + 
    	"    </td>" + 
    	"</tr>";
    	var eTr = eTd10.parents("tr");
    	eTr.after(chargingStr);
    });
    
    $("#today").on("click", ".chargingEscBtn", function (e) {
    	var eTr = $(e.target).parents("tr");
    	eTr.remove();
    });
    
    
    //扣款或充值
    $("#today").on("click", ".chargingBtn", function (e) {
    	if (!confirm("确定充值或扣费？")) {return}
    	var eTd10 = $(e.target);
		eTd10.attr('disabled',true);
		var vipId = eTd10.attr("vipId");
		var reducePay    =  $("#reducePay").val();
		var reduceGive   =  $("#reduceGive").val();
		var reducePayee  =  $("#reducePayee").val();
		var reduceWay    =  $("#reduceWay").val();
		var reduceRemark =  $("#reduceRemark").val();
		var recordtype =  $("#recordtype").val();
		if(reducePay        == null || reducePay    == ''){alert("金额不能为空");eTd10.attr('disabled',false);return}
		if(reduceGive       == null || reduceGive   == ''){alert("赠送金额不能为空");eTd10.attr('disabled',false);return}
		if(reducePayee      == null || reducePayee  == ''){alert("收款人不能为空");eTd10.attr('disabled',false);return}
		if(reduceWay        == null || reduceWay    == ''){alert("收款方式不能为空");eTd10.attr('disabled',false);return}
		
		var parameter={};
		parameter.vipid        = vipId;
		parameter.changepay    = reducePay;
		parameter.changegive   = reduceGive;
		parameter.changepayee  = reducePayee;
		parameter.changeway    = reduceWay;
		parameter.remark       = reduceRemark;
		parameter.recordtype   = recordtype;
		
		$.ajax({
			url: path+"/vip/change.do",
			dataType: "json",
			data: parameter,
			success: function (data) {
				if(data.code==0){
					alert("成功！");
					getParam(null, null, 1);
					loadVipList(param);
				}else{
					console.log(data);
					alert("失败！");
					eTd10.attr('disabled',false);
				}
			},
			error: function () {
				alert("通信异常");
			}
		});
	
    });
    

    //phone\proCount\unit\price\totalCost\vipName\createBy\isPay\remark\addSellPrice
    //弹出添加模块
    $(".showAddVipModal").click(function(){
        $("#addVipModal").modal("show");
    });

    //添加按钮
    $("#addVipBtn").click(function(){
        var parameter={};
        var vipName		=$("#addVipName").val();
        var phone		=$("#addPhone").val();
        var pay			=$("#addPay").val();
        var give		=$("#addGive").val();
        var payee		=$("#addPayee").val();
        var way			=$("#addWay").val();
        var remark		=$("#addRemark").val();
//        进行判断
        if(vipName	== null || vipName	==  "" ){$("#vipNameError").text("不能为空");return;}else{$("#vipNameError").text("");}
        if(phone	== null || phone	==  "" ){$("#phoneError").text("不能为空");  return;}else{$("#phoneError").text("");}
        if(pay		== null || pay		==  "" ){$("#payError").text("不能为空");    return;}else{$("#payError").text("");}
        if( pay < 0 ){
        	$("#payError").text("不能小于0");
        	return
        }else{
        	$("#payError").text("");
        }
        if(give	    == null || give	   	==  "" ){$("#giveError").text("不能为空");   return;}else{$("#giveError").text("");}
        if( give < 0 ){
        	$("#giveError").text("不能小于0");
        	return
        }else{
        	$("#giveError").text("");
        }
        if(payee	== null || payee	==  "" ){$("#payeeError").text("不能为空");  return;}else{$("#payeeError").text("");}
        if(way		== null || way		==  "" ){$("#wayError").text("不能为空");    return;}else{$("#wayError").text("");}
        if( way == 0 ){
        	$("#wayError").text("请选择");
        	return
        }else{
        	$("#wayError").text("");
        }
        
        
        parameter.vipName	= vipName	;
        parameter.phone	    = phone	    ;
        parameter.pay		= pay		;
        parameter.give	    = give	    ;
        parameter.payee	    = payee	    ;
        parameter.way		= way		;
        parameter.remark	= remark	;
        
        if(!confirm("确定新增？")){
        	return;
        }
        
        $.ajax({
            url:path+"/vip/addVip.do",
            type:"post",
            dataType:"json",
            data:parameter,
            success:function (data) {
                if(data.addVipFlag==0 ||data.addVipFlag=="0"){
                    alert("添加会员信息失败！");
                }else{
                    alert("添加会员信息成功！");
                }
                $("#addVipModal").modal("hide");
                window.location.href=path+"/vip/vip.html?show=vip";
            },
            error:function () {
                alert("通信异常");
            }
        });
    
    });
    
    
//    展示会员消费记录
    $("#showSellDivBtn").click(function () {
        getParam(null, null, 1);
        loadSellList(param);
    });
    
    function loadSellList(param) {
        $.ajax({
            url: path+"/vip/loadSellList.do",
            dataType: "html",
            type: "post",
            data: param,
            success: function (data) {
                $("#ajaxSellListAppendDiv").html(data);
            },
            error: function () {
                alert("通信异常");
            }
        });
    }
    
    //翻页
    $("#ajaxSellListAppendDiv").on("click",".sellPagerBtn",function (e) {
        var pageIndex = $(e.target).attr("pageIndex");
        var vipName = $(e.target).attr("vipName");
        var phone = $(e.target).attr("phone");
        getParam(vipName, phone, pageIndex);
        loadSellList(param);
    });
    
    //动态搜索
    $("#consume").on("click", "#searchConsumeBtn", function (e) {
        var vipName = $("#vipNameC").val();
        var phone = $("#phoneC").val();
        getParam(vipName, phone, 1);
        loadSellList(param);
    });
});