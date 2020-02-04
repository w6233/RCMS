<%--
  Created by IntelliJ IDEA.
  User: CHANGEX
  Date: 2018/5/2
  Time: 17:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div class="" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<p class="modal-title h1 text-center " id="myModalLabel">添加会员信息</p>
		</div>
		<form action="">
			<div class="modal-body col-lg-12">
				<table class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
							<th>会员姓名<span id="vipNameError" style="color: red;"></span></th>
							<th>联系方式<span id="phoneError" style="color: red;"></span></th>
							<th>充值金额<span id="payError" style="color: red;"></span></th>
							<th>赠送金额<span id="giveError" style="color: red;"></span></th>
							<th>收款人<span id="payeeError" style="color: red;"></span></th>
							<th>收款方式<span id="wayError" style="color: red;"></span></th>
							<th>备注</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="text-center"><input type="text" class="form-control" id="addVipName" name="addVipName" placeholder="姓名" /></td>
							<td class="text-center"><input type="text" class="form-control" id="addPhone" name="addPhone" placeholder="手机号" /></td>
							<td class="text-center"><input type="number" class="form-control" id="addPay" name="addPay" placeholder="充值金额" min="100" /></td>
							<td class="text-center"><input type="number" class="form-control" id="addGive" name="addGive" min="0" value="0" /></td>
							<td class="text-center"><input type="text" class="form-control" id="addPayee" name="addPayee" placeholder="收款人" /></td>
							<td class="text-center">
								<div class="input-group">
									<select type="text" id="addWay" name="addWay" class="form-control">
										<option value="0" selected="selected">请选择</option>
										<option value="1">支付宝</option>
										<option value="2">微信</option>
										<option value="3">美团</option>
										<option value="4">现金</option>
										<option value="5">其它(请备注付款方式)</option>
									</select>
								</div>
							</td>
							<td class="text-center"><input type="text" class="form-control" id="addRemark" name="addRemark" placeholder="备注" /></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
				<input type="button" id="addVipBtn" name="submit" class="btn btn-primary" value="提交" />
			</div>
		</form>
	</div>
</div>
