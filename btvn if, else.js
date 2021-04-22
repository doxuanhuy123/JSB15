BÀI HIGH

    let a= prompt("nhập số bạn muốn")
    let array=["1","2","3","4","5","6","7","8","9","10"];
    array.push(a);
    console.log(array)
__________________________________________________
BÀI BO NÚT
    let a=prompt("nhap so a")
    let b=prompt("nhap so b")
    let c=prompt("nhap so c")
    if(a==0){
        if(b==0){
            if(c==0){
                console.log("phương trình vô số nghiệm");
            } else {
                console.log("phương trình vô  nghiệm");}
        } else{
            console.log("pt có nghiệm");
        }
    } else { 
        delta= b*b - 4*a*c;
        if(delta < 0) { 
            console.log("pt vô nghiệm");
        } else if(delta == 0) { 
            console.log("pt co nghiệm kép la",b/(a*2))
            } else {
            console.log("pt co 2 nghiem phân biệt");
            let x1= (-b - Math.sqrt(delta))/(2*a);
            let x2= (-b + Math.sqrt(delta))/(2*a);
            console.log("x1"+x1)
            console.log("x2"+x2)
        }
    }
______________________________________________________
BÀI BAR
    let a=prompt("cạnh 1")
    let b=prompt("cạnh 2")
    let c=prompt("cạnh 3")
    let d=prompt("cạnh 4")
    if(a==b && b==c && c==d && d==a){
            console.log("tứ giác là hình vuông ");
            }
        else if(a*b==c*d){
            console.log("Tứ giác là hình chữ nhật ");
        } else {
            console.log("Tứ giác normal")}
________________________________________________________
BÀI 4
    let a=prompt("nhập năm vào")
    if (a % 4==0){
        console.log("năm nhuận")}
    else { 
        console.log("năm không nhuận")}
__________________________________________________
BÀI 5
    let a=prompt("nhập x")
    let b=prompt("nhập y")
    if( a>0 && b>0){
        console.log("tọa độ góc phần tư thứ 1");
    } else if ( a<0 && b>0 ){
        console.log("tọa độ góc phần tư thứ 2");
    } else if ( a<0 && b<0 ){
        console.log("tọa độ góc phần tư thứ 3");
    } else  {
        console.log("góc phần tư thứ 4")
    }
______________________________________________________
BÀI 1
    for( i=0; i<=1000; i++ ){
        if( i % 2 == 0 ){
            console.log(i+ "là số chẵn")
    } else { 
            console.log(i+ "là số lẻ")
    } }