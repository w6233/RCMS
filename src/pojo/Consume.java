package pojo;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class Consume extends Pager implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
    private String cid;

    private String vipid;

    private String vipName;
    
    private String phone;
    
    private String billid;

    private Integer recordtype;//记录类型:0充值1消费

    private BigDecimal changepay;

    private BigDecimal changegive;

    private String changepayee;

    private Integer changeway;

    private String remark;

    private String creator;

    private Date createdate;

    private String modifier;

    private Date modifydate;

    public String getVipName() {
		return vipName;
	}

	public void setVipName(String vipName) {
		this.vipName = vipName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid == null ? null : cid.trim();
    }

    public String getVipid() {
        return vipid;
    }

    public void setVipid(String vipid) {
        this.vipid = vipid == null ? null : vipid.trim();
    }

    public String getBillid() {
        return billid;
    }

    public void setBillid(String billid) {
        this.billid = billid == null ? null : billid.trim();
    }

    public Integer getRecordtype() {
        return recordtype;
    }

    public void setRecordtype(Integer recordtype) {
        this.recordtype = recordtype;
    }

    public BigDecimal getChangepay() {
        return changepay;
    }

    public void setChangepay(BigDecimal changepay) {
        this.changepay = changepay;
    }

    public BigDecimal getChangegive() {
        return changegive;
    }

    public void setChangegive(BigDecimal changegive) {
        this.changegive = changegive;
    }

    public String getChangepayee() {
        return changepayee;
    }

    public void setChangepayee(String changepayee) {
        this.changepayee = changepayee == null ? null : changepayee.trim();
    }

    public Integer getChangeway() {
        return changeway;
    }

    public void setChangeway(Integer changeway) {
        this.changeway = changeway;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator == null ? null : creator.trim();
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
        this.modifier = modifier == null ? null : modifier.trim();
    }

    public Date getModifydate() {
        return modifydate;
    }

    public void setModifydate(Date modifydate) {
        this.modifydate = modifydate;
    }
}