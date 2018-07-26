//打印
getItems();

//增加以及修改
$(".mainform").submit(function() {
  var itemId = $("input[name='stuId']").val();
  var values = new Array();
  var stuName = $("input[name='stuName']").val();
  var stuSex = $("input[name='stuSex']").val();
  var stuId = $("input[name='stuId']").val();
  var stuClass = $("input[name='stuClass']").val();
  var stuMajor = $("input[name='stuMajor']").val();
  values.push(stuName);
  values.push(stuSex);
  values.push(stuId);
  values.push(stuClass);
  values.push(stuMajor);
  try{
    localStorage.setItem(itemId,values.join(';'));
  } catch(e){
    if(e == QUOTA_EXCEEDED_ERR){
      alert("Quota exceeded!");
    }
  }

});

//清空
$("#clear").click(function(){
 localStorage.clear();
});

//删除功能
function deleteItem(){
	$(".delete").click(function(){
		var id = $(this).attr("id");
		localStorage.removeItem(id);
		getItems();
	});
}

//获取所有内存中的信息并打印
function getItems() {
	var text = "";
	var i = 0;
	var length = localStorage.length;
	for(i = 0;i < length;i++){
		var itemKey = localStorage.key(i);
		var values = localStorage.getItem(itemKey);
		values = values.split(";");
		text += '<tr>' + '<td>' + values[0] + '</td>' + '<td>' + values[1] +'</td>' + '<td>' + values[2] + '</td>' + '<td>' + values[3] + '</td>'
    + '<td>' + values[4] +'</td>'+ '<td><button id="'+itemKey +'" class="delete" >x</button></td>' +'</tr>';
	}
	//显示内存中的学生内容
	$("#show").html(text);
  deleteItem();
}
