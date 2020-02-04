<tr>
    <td class="text-center">扣款行</td>
    <td class="text-center"></td>
    <td class="text-center"><span>-</span><input type="number" class="form-control" id="reducePay" name="reducePay" placeholder="扣除金额" min="1" /></td>
    <td class="text-center"><span>-</span><input type="number" class="form-control" id="reduceGive" name="reduceGive" placeholder="扣除金额" min="1" /></td>
    <td class="text-center"><input type="text" class="form-control" id="reducePayee" name="reducePayee" placeholder="收款人" /></td>
    <td class="text-center">
		<div class="input-group">
			<select type="text" id="reduceWay" name="reduceWay" class="form-control">
				<option value="0" selected="selected">请选择</option>
				<option value="1">支付宝</option>
				<option value="2">微信</option>
				<option value="3">美团</option>
				<option value="4">现金</option>
				<option value="5">其它(请备注付款方式)</option>
			</select>
		</div>
    </td>
    <td class="text-center">
        <input type="text" class="form-control" id="addRemark" name="addRemark" placeholder="备注" />
    </td>
    <td class="text-center">
        <a class="btn btn-danger charging">确定扣费</a>
        <a class="btn btn-danger chargingEsc">取消</a>
    </td>
</tr>
