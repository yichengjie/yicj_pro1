function addToTable(){//增加一行到表格中
	var id = $("#id").val();
	var name = $("#name").val();
	var desc = $("#desc").val();
	if(id==""){
		alert("请输入ID");
		return;
	}
	if(name==""){
		alert("请输name");
		return;
	}
	if(desc==""){
		alert("请输入desc");
		return;
	}
	var sValue=id+','+name+','+desc;
	if(checkIfTRInTable(sValue)){
		alert("该项已经添加");
		return;
	}
	var al = document.getElementById("newTable");//获取要添加的表格
	var newLine = al.insertRow();//新增一行
	newLine.className = 'listrow';//为新增的行指定样式
	var cb = '<input type=Checkbox name=infoid checked value="' + sValue + '" >';
	addNewCell(newLine,cb);
	addNewCell(newLine,id);
	addNewCell(newLine,name);
	addNewCell(newLine,desc);
}
function addNewCell(trLine,tdText){//朝行里添加单元格内容
	 var newCell = trLine.insertCell();
	 newCell.innerHTML = tdText;
}
function checkIfTRInTable(cname){//验证是否已经添加过
	for(i = 0;i < document.formadd.elements.length;i++){
			if(document.formadd.elements[i].value == cname){
				return true;
			}	
		}
	return false;
}
function deleteFromTable() {
	var delnum=0;//用来记录选择项的数目
	for (var i=0;i<document.getElementsByName("infoid").length;i++)
     {
     	e = document.getElementsByName("infoid")[i];
     	if (e.checked == true)delnum++;
     }
	if( delnum != 0 )
	{
		if (confirm("确定要删除吗?"))
		{
			var oTable = document.getElementById("newTable");	
			var cn= oTable.rows.length;
			var num=1;

			for (var i=1;i<cn;i++)
			 {
				e = document.getElementsByName("infoid")[num-1];			
				if(e.checked==true)
				 {
					oRow = oTable.rows(num);
					oRow.removeNode(true);
					num--;
				 }
				 num++;
			 }
		}
		else {}
	}
	else alert("请选择要删除的项!");
}
function checkAll(checked){
	$("input[name='infoid']").attr("checked", checked);
}