
function addExams() {
    var fullName = document.getElementById("fullName").value;
    var dob = document.getElementById("dob").value;
    var studentId = document.getElementById("studentId").value;
    var className = document.getElementById("class").value;

    // Kiểm tra xem các trường đã được nhập đầy đủ hay không
    if (fullName === "" || dob === "" || studentId === "" || className === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return false; // Ngăn chặn submit form nếu có trường trống
    }
    document.body.style.display = "none"
    window.location.href = "exam.html";
    // document.getElementById("sentForm").style.display = "none"
    // document.getElementById("examContainer").style.display = "block"
    // var ele = document.getElementById("message")
    // ele.innerHTML = cars.join("<br>")
}