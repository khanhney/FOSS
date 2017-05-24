$(document).ready(function(){
	// PRELADER For Load
	$("#status").fadeOut();
	$("#preloader").delay(1000).fadeOut(200);

	// begin SweetAlet
	
	$("#button").click(function(){
		var get_id = $("#user_id").val();
		var get_password = $("#user_password").val();
		var get_password_again = $("#user_password_again").val();
		var get_user = $("#user_name").val();
		var get_address = $("#user_address").val();
		
			
		if(get_id == "" || get_password == "" || get_password_again == "" || get_user == "" || 
		get_address == ""){
			swal({
					title : "Lưu Ý",
					text : "Bạn Cần Nhập Thông Tin Đầy Đủ",
					type : "error",
					animation :"slide-from-top"
			});
		}
		else{
			if(get_password != get_password_again)
			{
				swal({
					title : "Mật Khẩu Không Trùng Khớp",
					text : "Nhập Lại Mật Khẩu",
					type :"warning",
					animation: "slide-from-bottom"
				});
			}else{
				swal({
				title : "Đăng Nhập Thành Công",
				text : "Xin Chào ,"+get_user ,
				type : "success",
				animation :"slide-from-top"
			});
			}
		}
	});
	// end SweetAlet
});