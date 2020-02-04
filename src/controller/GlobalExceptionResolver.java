package controller;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import pojo.ApiResult;
import pojo.BusinessRuntimeException;
import pojo.ResultCode;

/**
 * 全局Controller层异常处理类
 */
@ControllerAdvice
public class GlobalExceptionResolver {

    private static final Logger logger = Logger.getLogger(GlobalExceptionResolver.class);
    /**
     * 处理所有不可知异常
     *
     * @param e 异常
     * @return json结果
     */
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public Object handleException(Exception e) {
        // 打印异常堆栈信息
        logger.error(e.getMessage(), e);
        return ApiResult.of(ResultCode.UNKNOWN_ERROR);
    }

    /**
     * 处理所有业务异常
     *
     * @param e 业务异常
     * @return json结果
     */
    @ExceptionHandler(BusinessRuntimeException.class)
    @ResponseBody
    public Object handleOpdRuntimeException(BusinessRuntimeException e) {
        // 不打印异常堆栈信息
        logger.error(e.getMsg());
        return ApiResult.of(e.getResultCode());
    }
}
