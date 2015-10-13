package cr.fr.warriorteam.json;

import java.util.HashMap;
import java.util.Map;

public class JsonResponse {
	private String status;
	private String errorMsg;
	private HashMap<String, Object> fieldErrors = new HashMap<String, Object>();
	private Object data;

	public JsonResponse() {
	}

	public JsonResponse(String status, String errorMsg) {
		this.status = status;
		this.errorMsg = errorMsg;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public Map<String, Object> getFieldErrors() {
		return fieldErrors;
	}

	public void setFieldErrors(HashMap<String, Object> fieldErrors) {
		this.fieldErrors = fieldErrors;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

}
