var getId = function(id) {
	return document.getElementById(id);
}

/* 动态创建标签 */
var createObj = function(tagName) {
	return document.createElement(tagName);
}

var serialTxt = 0;
// 总页数
var totalPage = getId("spanTotalPage");
// 页号
var pageNum = getId("spanPageNum");
// 获取上翻按钮
var spanPre = getId("spanPre");
// 获取下翻按钮
var spanNext = getId("spanNext");
var pageSize = 10;
var page = 1;
var theTable = getId("tb");
// 获取行的长度
var numberRowsInTable = theTable.rows.length;
// 数据条数
var numRows = getId("spanTotalNumRows");
// 学生信息
var message = new Array();
message.push(new student(1606010425, "杜康明", "男", "计算机", 2016));
/* 显示增加窗体 */
var showHide = function(obj) {
	var overDiv = getId("over");
	overDiv.style.display = "block";
}

/* 关闭新增窗体 */
var showHide1 = function(obj) {
	var overDiv = getId("over");
	overDiv.style.display = "none";
}

/* 关闭修改窗体 */
var showHide2 = function(obj) {
	var overDiv = getId("over2");
	overDiv.style.display = "none";
}

/* 创建学生对象 */
function student(numberTxt, nameTxt, academyTxt, majorTxt, gradeTxt) {
	this.numberTxt = numberTxt;
	this.nameTxt = nameTxt;
	this.academyTxt = academyTxt;
	this.majorTxt = majorTxt;
	this.gradeTxt = gradeTxt;
}

var changeColor = function() {
	// 隔行换色。
	var table = document.getElementById("table");
	for (var j = 0; j < table.tBodies[0].rows.length; j++) {
		if (j % 2 == 0) {
			table.tBodies[0].rows[j].style.background = "#FFFFFF";
			table.tBodies[0].rows[j].onmouseover = function() {
				this.style.background = "#E2E2E1";
			}
			table.tBodies[0].rows[j].onmouseout = function() {
				this.style.background = "#FFFFFF";
			}
		} else {
			table.tBodies[0].rows[j].style.background = "#EEF1F8";
			table.tBodies[0].rows[j].onmouseover = function() {
				this.style.background = "#E2E2E1";
			}
			table.tBodies[0].rows[j].onmouseout = function() {
				this.style.background = "#EEF1F8";
			}
		}
	}
}

loadData();

/* 加载数据 */
function loadData() {
	for (var i = 0; i < message.length; i++) {
		var numberTxt = message[i].numberTxt;
		var nameTxt = message[i].nameTxt;
		var academyTxt = message[i].academyTxt;
		var majorTxt = message[i].majorTxt;
		var gradeTxt = message[i].gradeTxt;
		// 创建tr
		var tr = createObj("tr");
		// 创建td
		var checkTd = createObj("td");
		var serialTd = createObj("td");
		var numberTd = createObj("td");
		var nameTd = createObj("td");
		var academyTd = createObj("td");
		var majorTd = createObj("td");
		var gradeTd = createObj("td");
		var dmlTd = createObj("td");

		var checkBtn = createObj("input");
		checkBtn.type = "checkbox";
		// 将复选框添加到第一列；
		checkTd.appendChild(checkBtn);
		// 将获得的值添加到创建的指定Td中；
		var tbody = getId("tb");
		var rows = tbody.rows.length;
		// 将获得的信息添加到指定的为td中
		serialTd.innerHTML = rows + 1;
		numberTd.innerHTML = numberTxt;
		nameTd.innerHTML = nameTxt;
		academyTd.innerHTML = academyTxt;
		majorTd.innerHTML = majorTxt;
		gradeTd.innerHTML = gradeTxt;

		// 创建个button按钮，添加到操作列；
		var lookBtn = createObj("input");
		lookBtn.type = "button";
		lookBtn.value = "查看";
		// 为新建的lookBtn创建监听属性；
		lookBtn.onclick = function() {
			lookTr(this);
		};

		var changeBtn = createObj("input");
		changeBtn.type = "button";
		changeBtn.value = "修改";

		// 为新建的changeBtn创建监听属性；
		changeBtn.onclick = function() {
			modTr(this);
		}
		dmlTd.appendChild(lookBtn);
		dmlTd.appendChild(changeBtn);
		// 将新建的td加入到新建的行中
		tr.appendChild(checkTd);
		tr.appendChild(serialTd);
		tr.appendChild(numberTd);
		tr.appendChild(nameTd);
		tr.appendChild(academyTd);
		tr.appendChild(majorTd);
		tr.appendChild(gradeTd);
		tr.appendChild(dmlTd);

		// 将新建的tr加入到tbody中
		var tbody = getId("tb");
		tbody.appendChild(tr);

		// 隔行换色。
		var table = document.getElementById("table");
		table.tBodies[0].rows[table.tBodies[0].rows.length - 1].style.display = 'none';
		numberRowsInTable++;
		totalPage.innerHTML = pageCount();
		numRows.innerHTML = numberRowsInTable;
		first();
	}
	changeColor();
}

/* 增加学生信息 */
var addTr = function() {
	// 做添加，首先获取输入的值
	var numberTxt = getId("i1").value;
	if (numberTxt == '') {
		alert('学号不能为空！');
		return false;
	} else if (isNaN(numberTxt)) {
		alert("学号请输入数字");
		return false;
	}
	var nameTxt = getId("i2").value;
	if (nameTxt == '') {
		alert('姓名不能为空！');
		return false;
	}
	var academyTxt = getId("i3").value;
	if (academyTxt == '') {
		alert('性别不能为空！');
		return false;
	}
	var majorTxt = getId("i4").value;
	if (majorTxt == '') {
		alert('专业不能为空！');
		return false;
	}
	var gradeTxt = getId("i5").value;
	if (gradeTxt == '') {
		alert('年级不能为空！');
		return false;
	} else if (isNaN(gradeTxt)) {
		alert("年级请输入数字");
		return false;
	}
	// 存放学生信息
	message.push(new student(numberTxt, nameTxt, academyTxt, majorTxt,
			gradeTxt));
	showHide1();
	getId("i1").value = "";
	getId("i2").value = "";
	getId("i3").value = "";
	getId("i4").value = "";
	getId("i5").value = "";
	// 创建tr
	var tr = createObj("tr");
	// 创建td
	var checkTd = createObj("td");
	var serialTd = createObj("td");
	var numberTd = createObj("td");
	var nameTd = createObj("td");
	var academyTd = createObj("td");
	var majorTd = createObj("td");
	var gradeTd = createObj("td");
	var dmlTd = createObj("td");
	var checkBtn = createObj("input");
	checkBtn.type = "checkbox";
	checkTd.appendChild(checkBtn);
	// 将获得的值添加到创建的指定Td中；
	var tbody = getId("tb");
	var rows = tbody.rows.length;
	serialTd.innerHTML = rows + 1;
	numberTd.innerHTML = numberTxt;
	nameTd.innerHTML = nameTxt;
	academyTd.innerHTML = academyTxt;
	majorTd.innerHTML = majorTxt;
	gradeTd.innerHTML = gradeTxt;
	// 创建个button按钮，添加到操作列；
	var lookBtn = createObj("input");
	lookBtn.type = "button";
	lookBtn.value = "查看";

	// 为新建的lookBtn创建监听属性；
	lookBtn.onclick = function() {
		lookTr(this);
	};

	var changeBtn = createObj("input");
	changeBtn.type = "button";
	changeBtn.value = "修改";
	// 为新建的changeBtn创建监听属性；
	changeBtn.onclick = function() {
		modTr(this);
	}
	dmlTd.appendChild(lookBtn);
	dmlTd.appendChild(changeBtn);
	// 将新建的td加入到新建的行中
	tr.appendChild(checkTd);
	tr.appendChild(serialTd);
	tr.appendChild(numberTd);
	tr.appendChild(nameTd);
	tr.appendChild(academyTd);
	tr.appendChild(majorTd);
	tr.appendChild(gradeTd);
	tr.appendChild(dmlTd);

	// 将新建的tr加入到tbody中
	var tbody = getId("tb");
	tbody.appendChild(tr);

	var table = document.getElementById("table");
	// 隔行换色。
	changeColor();
	table.tBodies[0].rows[table.tBodies[0].rows.length - 1].style.display = 'none';
	numberRowsInTable++;
	totalPage.innerHTML = pageCount();
	numRows.innerHTML = numberRowsInTable;
	last();
}

/* 删除所选 */
var delSel = function() {
	var flag = window.confirm("确定删除？");
	var notDelete = numberRowsInTable;
	if (flag) {
		// 获得tbody对象
		var tbody = getId("tb");
		// 获得tbody下的input元素
		var preDelete = 0;
		var inputs = tbody.getElementsByTagName("input");
		for (var i = inputs.length - 1; i >= 0; i--) {
			if (inputs[i].type == "checkbox") {
				if (inputs[i].checked) {
					preDelete = i;
				}
			}
		}

		for (var i = inputs.length - 1; i >= 0; i--) {
			// 过滤出checkbox类型
			if (inputs[i].type == "checkbox") {
				var input = inputs[i];
				// 找出checkbox的所选择的行
				if (input.checked) {
					// 删除已选择的行
					tbody.removeChild(input.parentNode.parentNode);
					// table长度减一
					numberRowsInTable--;
				}
			}
		}
		numRows.innerHTML = numberRowsInTable;
		var rows = tbody.rows.length;
		for (var i = 0; i < rows; i++) {
			var tr = tbody.rows[i];
			tr.cells[1].innerHTML = i + 1;
		}
		// 页数
		totalPage.innerHTML = pageCount();

		for (var i = 0; i < numberRowsInTable; i++) {
			theTable.rows[i].style.display = 'none';
		}

		var locationPage = Math.floor(preDelete / (1 * pageSize));
		if (preDelete % (1 * pageSize) == 0
				&& preDelete / 1 == numberRowsInTable) {
			locationPage--;
		}

		for (var j = locationPage * pageSize; j < locationPage * pageSize
				+ pageSize
				&& j < numberRowsInTable; j++) {
			theTable.rows[j].style.display = '';
		}

		pageNum.innerHTML = locationPage + 1;
		page = locationPage + 1;

		if (numberRowsInTable == 0) {
			pageNum.innerHTML = 0;
		}
		if (locationPage == 0) {
			preText();
			nextLink();
		} else if (locationPage + 1 == pageCount()) {
			nextText();
		} else {
			preLink();
			nextLink();
		}
		if (numberRowsInTable <= pageSize) {
			nextText();
		}
		changeColor();
	}
	if (notDelete == numberRowsInTable) {
		alert("删除为空！请重新选择：");
	}
}

/* 全选 */
var selAll = function() {
	var thead = getId("thead");
	var tbody = getId("tb");
	// 获取全部的input元，素返回一个集合；
	var inputs = tbody.getElementsByTagName("input");
	var check = thead.getElementsByTagName("input");
	if (check[0].checked) {
		for (var i = (page - 1) * (1 * pageSize); i < inputs.length
				&& i < (page - 1) * (1 * pageSize) + (1 * pageSize); i += 1) {
			var input = inputs[i];

			if (input.type == "checkbox") {
				// 设置checkbox为已选
				input.checked = true;
			}
		}
	} else {
		for (var i = (page - 1) * (1 * pageSize); i < inputs.length
				&& i < (page - 1) * (1 * pageSize) + (1 * pageSize); i += 1) {
			var input = inputs[i];

			if (input.type == "checkbox") {
				// 设置checkbox为已选
				input.checked = false;
			}
		}
	}

}

/* 获取修改前学生信息 */
var modTr = function(obj) {
	var buttonConfirm = getId("hide");
	getId("lookMessages").innerHTML = "修改学生信息";
	buttonConfirm.style.display = "block";
	// 获得隐藏的DIV
	var overDiv = getId("over2");
	// 将隐藏的div有隐藏显现出来
	overDiv.style.display = "block";
	// 通过按钮来获得tr;
	var tr = obj.parentNode.parentNode;
	// 获得需要修改的内容
	serialTxt = tr.cells[1].innerHTML;
	var numberTxt = tr.cells[2].innerHTML;
	var nameTxt = tr.cells[3].innerHTML;
	var academyTxt = tr.cells[4].innerHTML;
	var majorTxt = tr.cells[5].innerHTML;
	var gradeTxt = tr.cells[6].innerHTML;
	// 获得遮罩层的tbody
	var tb = getId("over_tb2");
	// 获得tb中所有的input
	var inputs = tb.getElementsByTagName("input");
	// 往遮罩层中的input填入从表格中取得来的数据
	inputs[0].value = numberTxt;
	inputs[1].value = nameTxt;
	inputs[2].value = academyTxt;
	inputs[3].value = majorTxt;
	inputs[4].value = gradeTxt;
	inputs[0].disabled = "";
	inputs[1].disabled = "";
	inputs[2].disabled = "";
	inputs[3].disabled = "";
	inputs[4].disabled = "";
}

/* 查看学生信息 */
var lookTr = function(obj) {
	// 获得隐藏的DIV
	var overDiv = getId("over2");
	var buttonConfirm = getId("hide");
	getId("lookMessages").innerHTML = "查看学生信息";
	buttonConfirm.style.display = "none";

	// 将隐藏的div有隐藏显现出来
	overDiv.style.display = "block";
	// 通过按钮来获得tr;
	var tr = obj.parentNode.parentNode;
	// 获得需要查看的内容
	var numberTxt = tr.cells[2].innerHTML;
	var nameTxt = tr.cells[3].innerHTML;
	var academyTxt = tr.cells[4].innerHTML;
	var majorTxt = tr.cells[5].innerHTML;
	var gradeTxt = tr.cells[6].innerHTML;
	// 获得遮罩层的tbody
	var tb = getId("over_tb2");
	// 获得tb中所有的input
	var inputs = tb.getElementsByTagName("input");
	// 往遮罩层中的input填入从表格中取得来的数据
	inputs[0].value = numberTxt;
	inputs[1].value = nameTxt;
	inputs[2].value = academyTxt;
	inputs[3].value = majorTxt;
	inputs[4].value = gradeTxt;
	inputs[0].disabled = "disabled";
	inputs[1].disabled = "disabled";
	inputs[2].disabled = "disabled";
	inputs[3].disabled = "disabled";
	inputs[4].disabled = "disabled";
}

/* 确认修改按钮 */
var okBtn = function() {
	// 获得遮罩层中的tbody
	var tb = getId("over_tb2");
	// 获得tb中的所有的input的值，并且赋值给变量
	var inputs = tb.getElementsByTagName("input");
	var numberTxt = inputs[0].value;
	var nameTxt = inputs[1].value;
	var academyTxt = inputs[2].value;
	var majorTxt = inputs[3].value;
	var gradeTxt = inputs[4].value;
	// 获得主页中的数据,将修改的数据填入到主页中,
	var tbody = getId("tb");
	var rows = tbody.rows.length; // 获得所有的行
	for (var i = 0; i < rows; i++) {
		var tr = tbody.rows[i];
		if (i + 1 == serialTxt) {
			if (tr.cells[2].innerHTML != numberTxt) {
				if (numberTxt == '') {
					alert('学号不能为空！');
					return false;
				} else if (isNaN(numberTxt)) {
					alert("学号请输入数字");
					return false;
				}
				tr.cells[2].innerHTML = numberTxt;
			}
			if (tr.cells[3].innerHTML != nameTxt) {
				if (nameTxt == '') {
					alert('姓名不能为空！');
					return false;
				}
				tr.cells[3].innerHTML = nameTxt;
			}
			if (tr.cells[4].innerHTML != academyTxt) {
				if (academyTxt == '') {
					alert('性别不能为空！');
					return false;
				}
				tr.cells[4].innerHTML = academyTxt;
			}
			if (tr.cells[5].innerHTML != majorTxt) {
				if (majorTxt == '') {
					alert('专业不能为空！');
					return false;
				}
				tr.cells[5].innerHTML = majorTxt;
			}
			if (tr.cells[6].innerHTML != gradeTxt) {
				if (gradeTxt == '') {
					alert('年级不能为空！');
					return false;
				} else if (isNaN(gradeTxt)) {
					alert("年级请输入数字");
					return false;
				}
				tr.cells[6].innerHTML = gradeTxt;
			}
		}
	}
	// 隐藏遮罩层
	showHide2();
}

/* 下一页 */
function next() {

	hideTable();

	currentRow = pageSize * page;
	maxRow = currentRow + pageSize;
	if (maxRow > numberRowsInTable)
		maxRow = numberRowsInTable;
	for (var i = currentRow; i < maxRow; i++) {
		theTable.rows[i].style.display = '';
	}
	page++;
	if (maxRow == numberRowsInTable) {
		nextText();
		lastText();
	}
	showPage();
	preLink();
	firstLink();
}

/* 上一页 */
function pre() {

	hideTable();

	page--;

	currentRow = pageSize * page;
	maxRow = currentRow - pageSize;
	if (currentRow > numberRowsInTable)
		currentRow = numberRowsInTable;
	for (var i = maxRow; i < currentRow; i++) {
		theTable.rows[i].style.display = '';
	}

	if (maxRow == 0) {
		preText();
		firstText();
	}

	showPage();
	nextLink();
	lastLink();
}

/* 第一页 */
function first() {
	hideTable();
	page = 1;
	for (var i = 0; i < pageSize && i < numberRowsInTable; i++) {
		theTable.rows[i].style.display = '';
	}
	showPage();

	preText();
	nextLink();
	lastLink();
}

/* 最后一页 */
function last() {
	hideTable();
	page = pageCount();
	currentRow = pageSize * (page - 1);
	for (var i = currentRow; i < numberRowsInTable; i++) {
		theTable.rows[i].style.display = '';
	}
	showPage();

	preLink();
	nextText();
	firstLink();
}

/* 隐藏table */
function hideTable() {
	for (var i = 0; i < numberRowsInTable; i++) {
		theTable.rows[i].style.display = 'none';
	}
}

/* 展示第几页 */
function showPage() {
	pageNum.innerHTML = page;
}

/* 总共页数 */
function pageCount() {
	var count = 1;
	if (numberRowsInTable % pageSize != 0)
		count = 1;
	return parseInt(numberRowsInTable / (pageSize + 0.1)) + count;
}

/* 显示链接 */
function preLink() {
	spanPre.innerHTML = "<a class='upLink' href='javascript:pre();'>上一页</a>";
}
function preText() {
	spanPre.innerHTML = "上一页";
}

function nextLink() {
	spanNext.innerHTML = "<a class='downLink' href='javascript:next();'>下一页</a>";
}
function nextText() {
	spanNext.innerHTML = "下一页";
}

function firstLink() {
	spanFirst.innerHTML = "<a href='javascript:first();'>第一页 , </a>";
}
function firstText() {
	spanFirst.innerHTML = "第一页 , ";
}

function lastLink() {
	spanLast.innerHTML = "<a href='javascript:last();'>最后一页 , </a>";
}
function lastText() {
	spanLast.innerHTML = "最后一页 , ";
}

/* 隐藏表格 */
function hide() {
	for (var i = pageSize; i < numberRowsInTable; i++) {
		theTable.rows[i].style.display = 'none';
	}

	totalPage.innerHTML = pageCount();
	pageNum.innerHTML = '1';
	numRows.innerHTML = numberRowsInTable;

	nextLink();
	lastLink();
}

hide();

/*显示时特效*/
$(document).ready(function() {
	$("#show").click(function() {
		$(".over").show("slow");
	});
});

/*隐藏时特效*/
$(document).ready(function() {
	$("#hide23").click(function() {
		$(".over").hide("slow");
	});
});
