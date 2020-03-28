<%--
  Created by IntelliJ IDEA.
  User: CHANGEX
  Date: 2018/5/2
  Time: 19:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<table class="table table-striped table-bordered table-hover vipList" style="display: none;">
    <thead>
    <tr>
        <th class="text-center" style="width: 10%;">会员名</th>
        <th class="text-center" style="width: 10%;">联系方式</th>
        <th class="text-center" style="width: 11%;">充值金额</th>
        <th class="text-center" style="width: 11%;">赠送金额</th>
        <th class="text-center" style="width: 10%;">收款人</th>
        <th class="text-center" style="width: 8%;">收款方式</th>
        <th class="text-center" style="width: 10%;">备注</th>
        <th class="text-center" style="width: 8%;">录入人</th>
        <th class="text-center" style="width: 10%;">录入时间</th>
        <th class="text-center" style="width: 12%;">操作</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach items="${pager.list}" var="vip">
        <tr>
            <td class="text-center">${vip.vipName}</td>
            <td class="text-center">${vip.phone}</td>
            <td class="text-center">￥${vip.pay}</td>
            <td class="text-center">￥${vip.give}</td>
            <td class="text-center">${vip.payee}</td>
            <td class="text-center">
                <c:if test="${vip.way==1}">支付宝</c:if>
                <c:if test="${vip.way==2}">微信</c:if>
                <c:if test="${vip.way==3}">美团</c:if>
                <c:if test="${vip.way==4}">现金</c:if>
                <c:if test="${vip.way==5}">其它</c:if>
            </td>
            <td class="text-center">
                <c:if test="${vip.remark=='' or vip.remark==null}">无</c:if>
                <c:if test="${vip.remark!='' and vip.remark!=null}">${vip.remark}</c:if>
            </td>
            <td class="text-center">${vip.creator}</td>
            <td class="text-center">
                <fmt:formatDate value="${vip.createdate}" pattern="yyyy-MM-dd"/>
            </td>
            <td class="text-center">
                <button class="btn btn-danger charging" vipId="${vip.id}">扣费</button>
                <button class="btn btn-success recharge" vipId="${vip.id}">充值</button>
            </td>
        </tr>
    </c:forEach>
    </tbody>
</table>
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
    <div class="col-lg-4  col-md-4 col-sm-4 col-xs-4 ">
        <c:if test="${pager.pageCount!=1 and pager.pageCount!=0 }">
            <ul class="pager">
                <c:if test="${pager.pageIndex>1 }">
                    <li class="previous"><a pageIndex="${pager.pageIndex-1}"
                                            phone ="${pager.phone}"
                                            vipName ="${pager.vipName}"
                                            class="vipPagerBtn"
                                            href="javascript:;">
                        上一页 </a></li>
                </c:if>
                <li class="h2">${pager.pageIndex}/${pager.pageCount}</li>
                <c:if test="${pager.pageIndex<pager.pageCount}">
                    <li class="next"><a pageIndex="${pager.pageIndex+1}"
                                        phone="${pager.phone}"
                                        vipName="${pager.vipName}"
                                        class="vipPagerBtn"
                                        href="javascript:;">
                        下一页 </a></li>
                </c:if>
            </ul>
        </c:if>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 "></div>
</div>
<script type="text/javascript">
    $(".vipList").fadeIn(200);
</script>