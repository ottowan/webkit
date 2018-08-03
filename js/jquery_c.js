$(document).ready(function(){
	$.isBlank = function(obj){
		return(!obj || $.trim(obj) === "");
	};
	//initial
	$("#loading").hide();
	/*$(".rdu").hide();
	$(".rdde").hide();
	$("#ComboBox2").change(function(){
		var level = this.value;
		switch(level) {
		case "1":
			$(".black_code").show();
			$(".rdd").show();
			$(".rdu").hide();
			$(".rdde").hide();
			break;
		case "2":
			$(".black_code").hide();
			$(".rdd").hide();
			$(".rdu").show();
			$(".rdde").hide();
			break;
		case "3":
			$(".black_code").hide();
			$(".rdd").hide();
			$(".rdu").hide();
			$(".rdde").show();
			break;
		default:
			$(".black_code").show();
			$(".rdd").show();
			$(".rdu").hide();
			$(".rdde").hide();
		} 
	});*/
	$.isBlank = function(obj){
		return(!obj || $.trim(obj) === "");
	};
	var spinner = $( "#page" ).spinner();
	spinner.spinner( "disable" );
	
	$( "#tabs" ).tabs();
	$( "#case" ).accordion({
		heightStyle: "content",
		active:2
	});
	var pcode = "p0";
	var office = {};
	$("#dt1").mask("99/99/9999",{placeholder:"__/__/____"});
	//alert(pcode);
	$.post(baseurl+"/decision/office",{"p":"p0"}, function(data, status){
		//alert(status);
			$("#TextBox2").find('option').remove().end()
			$("#testbox").text(data);//console
			
			$.each(jQuery.parseJSON(data), function(i, row) {
				$("#TextBox2").append('<option value='+row+'>'+row+'</option>');//ส่งค่าตอนคลิกที่ลิส
			});
	});
	$("#partnumber").change(function(){
		pcode = this.value;
		$.post(baseurl+"/decision/office",
			{"p":pcode
			 }, function(data, status){
			$("#TextBox2").find('option').remove().end()
			$("#testbox").text(data);//console
			//$("#TextBox2").append('<option value=""></option>');
			$.each(jQuery.parseJSON(data), function(i, row) {
				$("#TextBox2").append('<option value='+row+'>'+row+'</option>');//ส่งค่าตอนคลิกที่ลิส
			});
		});
	});


	
	$("#reset_but").click(function(){
		w3_close();
	});
    $("#search_but").click(function(){
		$("#loading").show();
		var red = $("#rdd").val();
		var black = $("#TextBox3").val();
		var ComboBox2 = $("#ComboBox2").val();
		var partnumber = $("#partnumber").val();
		var TextBox4 = $("#TextBox4").val();
		var TextBox5 = $("#TextBox5").val();
		var dt1 = $("#dt1").val();
		var TextBox6 = $("#TextBox6").val();
		var TextBox9 = $("#TextBox9").val();
		var TextBox11 = $("#TextBox11").val();
		var TextBox2 = $("#TextBox2").val();
		var jj = $("#jj").val();
		var jl = $("#jl").val();
		var typedecision = $("#typedecision").val();
		var ticket = $("#ticket").val();
		var rdu = $("#rdu").val();
		var rdde = $("#rdde").val();
		//alert("search.php?r="+encodeURIComponent(red)+"&b="+encodeURIComponent(black)+"&ComboBox2="+encodeURIComponent(ComboBox2)+"&partnumber="+encodeURIComponent(partnumber)+"&TextBox4="+encodeURIComponent(TextBox4)+"&TextBox5="+encodeURIComponent(TextBox5)+"&dt1="+encodeURIComponent(dt1)+"&TextBox6="+encodeURIComponent(TextBox6)+"&TextBox9="+encodeURIComponent(TextBox9)+"&TextBox11="+encodeURIComponent(TextBox11)+"&TextBox2="+encodeURIComponent(TextBox2));
		//if($.isBlank(red)&&$.isBlank(black)&&$.isBlank(TextBox4)&&$.isBlank(TextBox5)&&$.isBlank(dt1)&&$.isBlank(TextBox6)&&$.isBlank(TextBox9)&&$.isBlank(TextBox11)&&$.isBlank(jj)&&$.isBlank(jl)&&$.isBlank(typedecision)){
		//alert("โปรดกรอกคำค้นหาอย่างน้อย 1 รายการ");
		//return(false);
		//}
		var record = 0;
		var search_data = {"r":red,
			 "b":black,
			 "ComboBox2":ComboBox2,
			 "partnumber":partnumber,
			 "TextBox4":TextBox4,
			 "TextBox5":TextBox5,
			 "dt1":dt1,
			 "TextBox6":TextBox6,
			 "TextBox9":TextBox9,
			 "TextBox11":TextBox11,
			 "TextBox2":TextBox2,
			 "typedecision":typedecision,
			 "jj":jj,
			 "jl":jl,
			 "ticket":ticket,
			 "rdu":rdu,
			 "rdde":rdde
			 };
		//$("#testbox").text(search_data+'123');
		$.post(baseurl+"/decision/search0",search_data, function(data, status){
			$("#list-bar").find('option').remove().end()
			//$("#testbox").text(data);//console
			$("#record").text(data);
			record = data;
			var total = Math.ceil(record/1000);
			$("#tpage").text('รวม '+total+' หน้า');
			//$("#testbox").text(record+'รวม '+total+' หน้า');
			spinner.spinner( "enable" );
			spinner.spinner({
				max: total,
				min: 1,
			});
			spinner.spinner( "value", 1 );
		$.post(baseurl+"/decision/search",
			{"r":red,
			 "b":black,
			 "ComboBox2":ComboBox2,
			 "partnumber":partnumber,
			 "TextBox4":TextBox4,
			 "TextBox5":TextBox5,
			 "dt1":dt1,
			 "TextBox6":TextBox6,
			 "TextBox9":TextBox9,
			 "TextBox11":TextBox11,
			 "TextBox2":TextBox2,
			 "typedecision":typedecision,
			 "jj":jj,
			 "jl":jl,
			 "ticket":ticket,
			 "rdu":rdu,
			 "rdde":rdde,
			 "page":1
			 }, function(data, status){
			$("#list-bar").find('option').remove().end()
			$("#testbox").text(data);//console
			$.each(jQuery.parseJSON(data), function(i, row) {
				$("#list-bar").append('<option value='+row.id+'>'+row.black_id+'</option>');//ส่งค่าตอนคลิกที่ลิส
			});
			
			w3_open();
			$("#loading").hide();
		});
		});
	});	
		
    
	$("#go_but").click(function(){
		var page = $("#page").val();
		var red = $("#rdd").val();
		var black = $("#TextBox3").val();
		var ComboBox2 = $("#ComboBox2").val();
		var partnumber = $("#partnumber").val();
		var TextBox4 = $("#TextBox4").val();
		var TextBox5 = $("#TextBox5").val();
		var dt1 = $("#dt1").val();
		var TextBox6 = $("#TextBox6").val();
		var TextBox9 = $("#TextBox9").val();
		var TextBox11 = $("#TextBox11").val();
		var TextBox2 = $("#TextBox2").val();
		var jj = $("#jj").val();
		var jl = $("#jl").val();
		var typedecision = $("#typedecision").val();
		var ticket = $("#ticket").val();
		var record = 0;
		var rdu = $("#rdu").val();
		var rdde = $("#rdde").val();
		var search_data = {"r":red,
			 "b":black,
			 "ComboBox2":ComboBox2,
			 "partnumber":partnumber,
			 "TextBox4":TextBox4,
			 "TextBox5":TextBox5,
			 "dt1":dt1,
			 "TextBox6":TextBox6,
			 "TextBox9":TextBox9,
			 "TextBox11":TextBox11,
			 "TextBox2":TextBox2,
			 "typedecision":typedecision,
			 "jj":jj,
			 "jl":jl,
			 "ticket":ticket,
			 "rdu":rdu,
			 "rdde":rdde
			 };
				$.post(baseurl+"/decision/search0",search_data, function(data, status){
			$("#list-bar").find('option').remove().end()
			//$("#testbox").text(data);//console
			$("#record").text(data);
			record = data;
			var total = Math.ceil(record/1000);
			$("#tpage").text('รวม '+total+' หน้า');
			//$("#testbox").text(record+'รวม '+total+' หน้า');
			spinner.spinner( "enable" );
			spinner.spinner({
				max: total,
				min: 1,
			});
		$.post(baseurl+"/decision/search",
			{"r":red,
			 "b":black,
			 "ComboBox2":ComboBox2,
			 "partnumber":partnumber,
			 "TextBox4":TextBox4,
			 "TextBox5":TextBox5,
			 "dt1":dt1,
			 "TextBox6":TextBox6,
			 "TextBox9":TextBox9,
			 "TextBox11":TextBox11,
			 "TextBox2":TextBox2,
			 "typedecision":typedecision,
			 "jj":jj,
			 "jl":jl,
			 "ticket":ticket,
			 "page":page
			 }, function(data, status){
			$("#list-bar").find('option').remove().end()
			$("#testbox").text(data);//console
			$.each(jQuery.parseJSON(data), function(i, row) {
				$("#list-bar").append('<option value='+row.id+'>'+row.black_id+'</option>');//ส่งค่าตอนคลิกที่ลิส
			});
			w3_open();
		});
		});
	});
		//+++++++++++++++++++++ท่อนล่างไม่แก้++++++++++++++++++++++++++++++++
	$("#list-bar").change(function() {
	  //alert( "Handler for .select() called." );
	  //$("#testbox").text($("#list-bar").val());
	  var str = "";
	  //str = $("#list-bar").val();
	  str = $(this).val();
	  $.get(baseurl+"/decision/search2?id="+str, function(data, status){
			row = jQuery.parseJSON(data);
			$("#testbox").text(data);//consol
			//*******ใส่ข้อมูล
			$('#show_id').val(row.idau);//id
			$("#callow").text(row.callow+"สำหรับใช้คัดถ่ายคำพิพากษา");
			$("#ticket_c").text(row.ticket);
			$('#text9').val(row.c_court_code);//ศาล
			$('#text10').val(row.l2);//ชั้นของคดี
			$('#show_black').val(row.b1);//เลขดำ
			$('#text102').val(row.date_sent);//วันตัดสิน
			$('#show_red').val(row.rednumber);//เลขแดง
			$('#show_rdu').val(row.reduton);//เลขแดงอุทธรณ์
			$('#show_rdde').val(row.reddeeka);//เลขแดงฎีกา
			$('#text103').val(row.j1);//ผู้พิพากษาตัดสิน
			$('#text104').val(row.j1p);//องค์คณะ
			//$('#show_text').val(row.idau);//หมายเหตุ
			$('#text105').val(row.about_case);//เรื่อง
			$('#text106').val(row.tags);//คำสำคัญ
			if($.isBlank(row.wherepdf)){
				$('#word_but').attr('disabled', 'disabled');
				$('#word_but').val("ไม่มีไฟล์ word");
			}else{
				$('#word_but').removeAttr('disabled');//ปุ่มไฟล์ Word 
				$('#word_but').val("เปิด ไฟล์  word");
			}
			$('#text107').val(row.wherepdf);//ไฟล์ Word 
			$('#word_form').attr('action', 'decision/word_load/1?d='+row.idau);//formไฟล์ Word 
			$('#text108').val(row.whereword);//ไฟล์ PDF
			if($.isBlank(row.whereword)){
				$('#pdf_but').attr('disabled', 'disabled');
				$('#pdf_but').val("ไม่มีไฟล์ pdf");
				$('#pdf_form').attr('action', '');//formไฟล์ pdf
			}else{
				$('#pdf_but').removeAttr('disabled');//ปุ่มไฟล์ pdf 
				$('#pdf_but').val("เปิด ไฟล์ pdf");
				$('#pdf_form').attr('action', 'decision/pdf_load/1?d='+row.idau);//formไฟล์ pdf
			}
			
			
			$('#word_file2').val(row.whereword_u);//ไฟล์ PDF
			if($.isBlank(row.whereword_u)){
				$('#word2_but').attr('disabled', 'disabled');
				$('#word2_but').val("ไม่มีไฟล์ word");
				$('#word2_form').attr('action', '');
			}else{
				$('#word2_but').removeAttr('disabled');//ปุ่มไฟล์ pdf 
				$('#word2_but').val("เปิด ไฟล์ word");
				$('#word2_form').attr('action', 'decision/word_load/2?d='+row.idau);//formไฟล์ word
			}
			
			$('#pdf_file2').val(row.wherepdf_u);//ไฟล์ PDF
			if($.isBlank(row.wherepdf_u)){
				$('#pdf2_but').attr('disabled', 'disabled');
				$('#pdf2_but').val("ไม่มีไฟล์ pdf");
				$('#pdf2_form').attr('action', '');	
			}else{
				$('#pdf2_but').removeAttr('disabled');//ปุ่มไฟล์ pdf 
				$('#pdf2_but').val("เปิด ไฟล์ pdf");
				$('#pdf2_form').attr('action', 'decision/pdf_load/2?d='+row.idau);//formไฟล์ pdf	
			}
					
			
			$('#word_file3').val(row.whereword_d);//ไฟล์ PDF
			if($.isBlank(row.whereword_d)){
				$('#word3_but').attr('disabled', 'disabled');
				$('#word3_but').val("ไม่มีไฟล์ word");
				$('#word3_form').attr('action', '');
			}else{
				$('#word3_but').removeAttr('disabled');//ปุ่มไฟล์ pdf 
				$('#word3_but').val("เปิด ไฟล์ word");
				$('#word3_form').attr('action', 'decision/word_load/3?d='+row.idau);
			}
			
			$('#pdf_file3').val(row.wherepdf_d);//ไฟล์ PDF
			if($.isBlank(row.whereword_d)){
				$('#pdf3_but').attr('disabled', 'disabled');
				$('#pdf3_but').val("ไม่มีไฟล์ pdf");
				$('#pdf3_form').attr('action', '');
			}else{
				$('#pdf3_but').removeAttr('disabled');//ปุ่มไฟล์ pdf 
				$('#pdf3_but').val("เปิด ไฟล์ pdf");
				$('#pdf3_form').attr('action', 'decision/pdf_load/3?d='+row.idau);
			}
					
			$('#text109').val(row.jj);//โจทก์
			$('#text1010').val(row.jl);//จำเลย
			$('#text1011').val(row.fnud);//วันสืบนัดแรก
			$('#text1012').val(row.ftot);//วันสืบนัดแรกของต่อเนื่อง
			$('#text1013').val(row.datereaduton_eng);//วันอ่านอุทธรณ์
			$('#text1014').val(row.datereaddeka_eng);//วันอ่านฎีกา
			$('#utoncase').text(row.utoncase);//คำพิพากษาอุทธรณ์
			$('#dekacase').text(row.dekacase);//คำพิพากษาฎีกา
			$('#d3case').text(row.d3);//คำพิพากษาชั้นต้น  ฝั่งซ้ายเป็น ชื่อ คอนโทรล ฝั้งขวาเป็นตัวแปร json ที่ส่งค่ามาจากไฟล์ search2
			//********************
			 selectTab('result');
		});
	});
	$("#open_list").click(function(){
		w3_open();
	});
	$("#close_list").click(function(){
		w3_close();
	});
	
	function selectTab(tabName) {
    $("#tabs").tabs("option", "active", $(tabName + "Selector").index());
}
	function w3_open() {
	$("#main").css("marginLeft","160px");
	$(".w3-sidenav").css("width","160px");
	$(".w3-sidenav").css("display","block");
	$(".w3-opennav").css("display","none");
	}
	function w3_close() {
	$("#main").css("marginLeft","0%");
	$(".w3-sidenav").css("display","none");
	$(".w3-opennav").css("display","inline-block");
	}
	
});