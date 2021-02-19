function tinh() {
    input = document.getElementById("inputBar").value;
    ketQua = document.getElementById("ketQua");
    let x = 0;
    x = input % 3;
    ketQua.innerText = x;
}