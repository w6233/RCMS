<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: CHANGEX
  Date: 2018/5/3
  Time: 20:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<table class="table table-striped table-bordered table-hover sellList" style="display: none;">
    <thead>
    <tr>
        <th class="text-center">会员名称</th>
        <th class="text-center">联系方式</th>
        <th class="text-center">记录类型</th>
        <th class="text-center">金额变动</th>
        <th class="text-center">赠送变动</th>
        <th class="text-center">收款人</th>
        <th class="text-center">收款方式</th>
        <th class="text-center">备注</th>
        <th class="text-center">创建人</th>
        <th class="text-center">创建时间</th>
    </tr>
    </thead>
    <tbody>
        <c:forEach items="${pager.list}" var="consume">
            <tr>
                <td class="text-center">${consume.vipName}</td>
                <td class="text-center">${consume.phone}</td>
                <td class="text-center">
	                <c:if test="${consume.recordtype==0}">充值</c:if>
	                <c:if test="${consume.recordtype==1}">消费</c:if>
            	</td>
                <td class="text-center">￥${consume.changepay}</td>
                <td class="text-center">￥${consume.changegive}</td>
                <td class="text-center">${consume.changepayee}</td>
                <td class="text-center">
	                <c:if test="${consume.changeway==1}">支付宝</c:if>
	                <c:if test="${consume.changeway==2}">微信</c:if>
	                <c:if test="${consume.changeway==3}">美团</c:if>
	                <c:if test="${consume.changeway==4}">现金</c:if>
	                <c:if test="${consume.changeway==5}">其它</c:if>
            	</td>
                <td class="text-center">${consume.remark}</td>
                <td class="text-center">${consume.creator}</td>
                <td class="text-center">
                	<fmt:formatDate value="${consume.createdate}" type="both"/>
            	</td>
            </tr>
        </c:forEach>
    </tbody>
</table>
<div class="row sellList">
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
    <div class="col-lg-4  col-md-4 col-sm-4 col-xs-4 ">
        <c:if test="${pager.pageCount!=1 and pager.pageCount!=0 }">
        <ul class="pager">
            <c:if test="${pager.pageIndex>1 }">
            <li class="previous">
            <a pageIndex="${pager.pageIndex-1}" phone="${pager.phone}" vipName="${pager.vipName}" class="sellPagerBtn" href="javascript:;">上一页</a>
            </li>
            </c:if>
            <li class="h2">${pager.pageIndex}/${pager.pageCount}</li>
            <c:if test="${pager.pageIndex<pager.pageCount}">
            <li class="next">
            <a pageIndex="${pager.pageIndex+1}" phone="${pager.phone}" vipName="${pager.vipName}" class="sellPagerBtn" href="javascript:;">下一页</a>
            </li>
            </c:if>
        </ul>
         </c:if>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 "></div>
</div>
<script type="text/javascript">
    $(".sellList").fadeIn(200);
</script>
