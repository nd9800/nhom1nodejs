var x = 10;// biến global
/*
bản chất trong javascript không có kiểu dữ liệu mà linh hoạt có nhóm dữ liệu, x có thể là int có thể là char tùy thời điểm
dữ liệu sử dụng là Browser memory nên không ảnh hưởng đến memory máy tính.
*/
let y=20;// init variable
const z=30;
k=10;
x="hello world!";
console.log(x);
let f=y>10
let u=false;
if (f)
{
    console.log("y lon hon 10");
}
else
{
    console.log("y nho hon 10");
}
for(let i=0;i<10;i++)
{
    console.log("Xin chao"+i);
}
/*
Số + số - > số
Số + chuỗi -> chuỗi
*/
x="10";
y=20;
x = parseInt(x); /*biến chuỗi thành số*/
console.log(x+y);
k="hello";
k=parseInt(k);
console.log(k) /*nếu không là 13hello thì khi in ra sẽ là 13 còn không thì sẽ là NaN : not a number, gặp số thì in ra số, gặp chuỗi sẽ dừng lại*/
if(isNaN(k))
{
    console.log("Khong phai so");
}else
{
    console.log(k);
}
let ary=[1,2,3];//không giới hạn kích cỡ, kiểu dữ liệu
ary[3]="hello";
ary[4]=[5,6,"xin chao"];
ary[4][3]=[3.14,1,"a"];// Không giống C, đây không phải là mảng 2 chiều, đây là phần tử thứ 3 của  mảng ở trên, cấu trúc theo directory
sayHello();
function sayHello()
{
    console.log("Hello Everybody!");
}
function sum(a,b)
{
    return a+b;
}
c = sum(1,6);
console.log(c);

let arr=[5,1,7,9,12,2];
arr.map(function (e) {
    console.log(e);

});//xử lý từng phần tử trong array không cần thiết phải duyệt phần tử trong chỉ mục
arr.push(77);

function checkSNT(n)
{
    if(n<2) return false;
    if(n<3) return true;
    for(let i=2; i<=Math.sqrt(n);i++)
    {
        if(n%i==0) return false;
    }
    return true;
}

let snt=[];
for(let i = 0; i <100; i++)
{
    if(checkSNT(i))
        snt.push(i);
}
for(let i =0; i<snt.length;i++)
{
    console.log(snt[i]);
}

snt.map(function(e)
{
    console.log(e);
});
snt.map(e=>{
    console.log(e)
});
