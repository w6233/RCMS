<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>会员管理</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">


</head>

<body>
	<!-- 头文件 -->
	<%@ include file="../command/head.jsp"%>
	<!-- /头文件 -->

	<!-- 标题 -->
	<div class="row">
		<div class="col-md-12"></div>
	</div>
	<hr />
	<!-- /标题 -->
	<input type="hidden" id="path"
		path="${pageContext.request.contextPath}" />
	<!-- 主体 -->
	<div class="col-lg-12 vipbody" style="display: none;">

		<!-- 导航 -->
		<ul class="nav nav-tabs ">
			<li class="active"><a href="#today" data-toggle="tab">会员信息</a></li>
			<li><a href="#consume" id="showSellDivBtn" data-toggle="tab">消费记录</a></li>
		</ul>
		<!-- /导航 -->

		<!-- 导航内容 -->
		<div class="tab-content">

			<!-- 会员信息 -->
			<div class=" tab-pane fade active in" id="today">
				<%@include file="vipList.jsp"%>
			</div>
			<!-- /会员信息 -->

			<!-- 消费记录 -->
			<div class="tab-pane fade" id="consume">
				<div class="col-lg-12 col-md-12 ">
					<br />
					<div class="table-responsive">
						<div class="row">
							<div class="col-lg-3">
								<div class="input-group">
									<span class="input-group-addon">会员姓名</span><input type="text"
										id="vipNameC" name="vipNameC" class="form-control" />
								</div>
							</div>
							<div class="col-lg-3">
								<div class="input-group">
									<span class="input-group-addon">手机号码</span><input type="text"
										id="phoneC" name="phoneC" class="form-control" />
								</div>
							</div>
							<div class="col-lg-3">
								<button class="btn btn-default" id="searchConsumeBtn">查询</button>
							</div>
						</div>
						<br />
						<div id="ajaxSellListAppendDiv"></div>
					</div>
				</div>
			</div>
			<!-- /消费记录 -->
		</div>
		<!-- /导航内容 -->

	</div>
	<!-- /主体 -->

	<!-- 添加会员信息弹框 -->
	<div class="modal fade" id="addVipModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<%@include file="addVipModal.jsp"%>
	</div>
	<!-- /添加会员信息弹框 -->
	<!-- 尾文件 -->
	<%@ include file="../command/foot.jsp"%>
	<!-- 尾文件 -->
	<script src="${pageContext.request.contextPath}/assets/js/vip.js"></script>
	<script type="text/javascript">
		$(function() {
			$(".vipbody").slideDown(500);
		})
	</script>
</body>
</html>
