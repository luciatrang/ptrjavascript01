function upDate(previewPic) {
    // 1. Kiểm tra sự kiện hoạt động trong Console
    console.log("Đã di chuột vào ảnh!");
    
    // 2. In ra thuộc tính alt và src của ảnh đang tương tác
    console.log("Mô tả (Alt): " + previewPic.alt);
    console.log("Đường dẫn (Src): " + previewPic.src);
    
    // Lấy thẻ div có id là 'image'
    let displayDiv = document.getElementById("image");
    
    // 3c. Đổi nội dung chữ thành thuộc tính alt của ảnh nhỏ
    displayDiv.innerHTML = previewPic.alt;
    
    // 3e. Đổi ảnh nền thành đường dẫn src của ảnh nhỏ
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Lấy thẻ div có id là 'image'
    let displayDiv = document.getElementById("image");
    
    // 4a. Reset ảnh nền về trạng thái trống ban đầu
    displayDiv.style.backgroundImage = "url('')";
    
    // 4b. Reset chữ về câu thông báo mặc định ban đầu
    displayDiv.innerHTML = "Hover over an image below to display here.";
}
