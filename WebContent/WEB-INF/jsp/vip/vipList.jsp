<%--
  Created by IntelliJ IDEA.
  User: CHANGEX
  Date: 2018/5/2
  Time: 16:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div class="col-lg-12 col-md-12 ">
	<br />
	<div class="table-responsive ">
		<div class="row">
			<div class="col-lg-3">
				<div class="input-group">
					<span class="input-group-addon">会员姓名</span><input type="text" id="vipName" name="vipName" class="form-control" />
				</div>
			</div>
			<div class="col-lg-3">
				<div class="input-group">
					<span class="input-group-addon">手机号码</span><input type="text" id="phone" name="phone" class="form-control" />
				</div>
			</div>
			<div class="col-lg-3">
				<button class="btn btn-default" id="searchVipBtn">查询</button>
			</div>
			<div class="tsx">
				<a class="btn btn-default showAddVipModal"> 添加 </a>
			</div>
		</div>
		<br />
		<%--   <div class=" col-md-10 col-sm-8 col-xs-6  "></div>--%>
		<div id="ajaxVipListAppendDiv"></div>

	</div>
</div>
