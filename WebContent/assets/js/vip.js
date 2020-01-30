$(function () {
    var path=$("#path").attr("path");

    //参数
    var param = {};

    function getParam(vipName, phone, pageIndex) {
        param.vipName = vipName;
        param.phone = phone;
        param.pageIndex = pageIndex;
    }

    getParam(0, null, 1);
    loadDrinkBill(param);
    //翻页
    $("#today").on("click", ".drinkBillPagerBtn", function (e) {
        var pageIndex = $(e.target).attr("pageIndex");
        var phone = $(e.target).attr("phone");
        var vipName = $(e.target).attr("vipName");
        getParam(vipName, phone, pageIndex);
        loadDrinkBill(param);
    })
    //动态搜索
    $("#today").on("click", "#serchDrinkBillBtn", function (e) {
        var phone = $("#phone").val();
        var vipName = $("#vipName").val();
        getParam(vipName, phone, 1);
        loadDrinkBill(param);
    })
    $("#shengyu").on("click", "#serchDrinkSuplusBillBtn", function (e){
        var phone = $("#suplusProductName").val();
        var vipName = $("#suplusProviderId").val();
        getParam(vipName, phone, 1);
        loadSuplusDrinkBill(param);
    })
    getParam(0, null, 1);
    loadSuplusDrinkBill(param);
    //ajax加载进货信息
    function loadSuplusDrinkBill(param) {
        $.ajax({
            url: path+"/loadSuplusDrinkBill.do",
            dataType: "html",
            type: "post",
            data: param,
            success: function (data) {
                $("#ajaxSuplusListAppendDiv").html(data);
            },
            error: function () {
                alert("加载剩余信息通信异常");
            }
        });
    }
    //ajax加载进货信息
    function loadDrinkBill(param) {
        $.ajax({
            url: path+"/loadDrinkBill.do",
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
    $("#showSellDivBtn").click(function () {
        getParam(0, null, 1);
        loadDrinkSellBill(param);
    });
    getParam(0, null, 1);
    loadDrinkSellBill(param);
    function loadDrinkSellBill(param) {
        $.ajax({
            url: path+"/loadDrinkSellBill.do",
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
    //销售信息翻页
    $("#ajaxSellListAppendDiv").on("click",".drinkSellBillPagerBtn",function (e) {
        var pageIndex = $(e.target).attr("pageIndex");
        var phone = $(e.target).attr("phone");
        var vipName = $(e.target).attr("vipName");
        getParam(vipName, phone, pageIndex);
        loadDrinkSellBill(param);
    })
    //销售信息翻页
    $("#ajaxSuplusListAppendDiv").on("click",".suplusDrinkBillPagerBtn",function (e) {
        var pageIndex = $(e.target).attr("pageIndex");
        var phone = $(e.target).attr("phone");
        var vipName = $(e.target).attr("vipName");
        getParam(vipName, phone, pageIndex);
        loadSuplusDrinkBill(param);
    })
    //销售信息动态搜索
    $("#xiaoshou").on("click", "#serchDrinkSellBillBtn", function (e) {
        var phone = $("#sellProductName").val();
        var vipName = $("#sellProviderId").val();
        getParam(vipName, phone, 1);
        loadDrinkSellBill(param);
    })
    //删除进货信息
    $("#today").on("click", ".delDrinkBill", function (e) {
        if (confirm("确定删除？")) {
            var drinkBillId = $(e.target).attr("drinkBillId");
            $.ajax({
                url: path+"/delDrinkBill.do",
                dataType: "json",
                data: {"id": drinkBillId},
                success: function (data) {
                    alert("删除成功！");
                    getParam(0, null, 1);
                    loadDrinkBill(param);
                    loadDrinkSellBill(param);
                },
                error: function () {
                    alert("通信异常");
                }
            });
        }
    })
    //删除销售信息
    $("#xiaoshou").on("click",".delDrinkSellBill",function(e){
        if (confirm("确定删除？")) {
            var drinkSellBillId = $(e.target).attr("drinkSellBillId");
            $.ajax({
                url: path+"/delDrinkSellBill.do",
                dataType: "json",
                data: {"id": drinkSellBillId},
                success: function (data) {
                    alert("删除成功！");
                    getParam(0, null, 1);
                    loadDrinkSellBill(param);
                },
                error: function () {
                    alert("通信异常");
                }
            });
        }
    })
    //更新进货信息
    $("#today").on("click", ".updateDrinkBill", function (e) {
        if (confirm("确定付款？")) {
            var drinkBillId = $(e.target).attr("drinkBillId");
            $.ajax({
                url: path+"/updateDrinkBill.do",
                dataType: "json",
                data: {"id": drinkBillId},
                success: function (data) {
                    alert("付款成功！");
                    getParam(0, null, 1);
                    loadDrinkBill(param);
                },
                error: function () {
                    alert("通信异常");
                }
            });
        }
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
            data:param,
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

});