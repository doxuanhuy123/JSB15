let array=[
  "name:Huy,age:17","name:Hoàng,age:17","name:Nam,age:16",
  "name:Khôi,age:16","name:Đăng,age:17","name:Lan,age:14",
  "name:Trung,age:14","name:Nam Anh,age:16","name:Khoa,age:14",
  "name:Dũng,age:14","name:Sơn,age:9"]
    console.log(array)
______________________________________________________________________
for (var i = 1000; i >= 0; i--){
    if (i % 3 == 0){
        document.write(i + ' + ');
    }
}
______________________________________________________________________
console.log("tổng số tuổi của các bạn")
console.log([17,17,16,16,17,14,14,16,14,14,9]
.reduce((a,b) =>a+b,0))