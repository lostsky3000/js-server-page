

var g_fn_wrap_query = function(it){
	var arr = {};
	if(it){
		while(it.hasNext()){
			var en = it.next();
			arr[en.key] = en.value; 
		}
	}
	return arr;
};

var g_fn_json_decode = function(jsonStr){
	return JSON.parse(jsonStr);
};

var g_fn_json_encode = function(jsonObj){
	return JSON.stringify(jsonObj);
};
















