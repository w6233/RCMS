package pojo;

/**
 * 错误码
 */
public enum ResultCode {

    /**
     * 成功
     */
    SUCCESS("0", "success"),

    /**
     * 未知错误
     */
    UNKNOWN_ERROR("1", "unkonwn error"),
    

    /**
     * 用户名错误或不存在
     */
    USERNAME_ERROR("2", "username error or does not exist"),

    /**
     * 密码错误
     */
    PASSWORD_ERROR("3", "password error"),

    /**
     * 用户名不能为空
     */
    USERNAME_EMPTY("4", "username can not be empty"),

	UPDATE_ERROR("5", "update error"), 
	
	INSERT_ERROR("6", "insert error"), 
	
	PARAMETER_ERROR("7", "parameter error");
	
    /**
     * 结果码
     */
    private String code;

    /**
     * 结果码描述
     */
    private String msg;


    ResultCode(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }
}