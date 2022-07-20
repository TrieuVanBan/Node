// Hàm //

// function writelog(message) {
//     console.log(arguments);
// }
// writelog("Bannshd1212", "ban", "hhh")


// function writelog1() {
//     var mystring = "";
//     for(var param of arguments){
//         mystring += `${param} - `
//     }
//     console.log(mystring);
// }
// writelog1("Bannshd1212", "ban", "hhh")

//------------------------------------------------------------

// Return - trả về//
// var comfimn =  confirm("bạn có chắc chắn muốn xóa không?")

// function cong(a, b) {
//     return a + b;
// }
// var result = cong(3,5);
// console.log(result);


//------------------------------------------------------------
// Chuỗi trong javascrip

// var name2 = "Ban";
// var fullname = new String("Ban11")
// alert(name2);


//------------------------------------------------------------
// Làm việc với chuỗi
var namee = "Hoc js tai js js F8!";

//1: length
// console.log(namee.length);

// 2.find index
// console.log(namee.indexOf("F8"));

// 3.cut string
// console.log(namee.slice(-3, -1));

// 4. replace(Thay thế)
// console.log(namee.replace(/js/g, "Javascrip"));

// 5. convert to upper case(Thay thế thành hết chữ hoa)
// console.log(namee.toUpperCase());

// 6. convert to Lower case(Thay thế thành hết chữ thường)
// console.log(namee.toLowerCase());

// 7.trim(Bỏ khảng trắng ở 2 đầu )
// console.log(namee.trim());

// 8.split(Cắt 1 chuỗi thành 1 array)
// var length = "php, ruby, js";
// console.log(length.split(', ')); //, là điểm chung

// 9.get a character by index (lấy một ký tự theo chỉ mục)
// var nameee = "Ban Triệu"
// console.log(nameee.charAt(5));


//------------------------------------------------------------
// Mảng trong javascrip - array
// 1. Tạo mảng

// cách 1
// var languages = [
//     'Javascrip',
//     'Php',
//     'Ruby',
// ];

// Cách 2
// var languages = new Array('Javascrip','Php','Ruby','Angular');
// console.log(Array.isArray({}));


// 2. Truy xuất mảng
// var languages = [
//     'Javascrip',
//     'Php',
//     'Ruby',
// ];
// console.log(languages[2]);


//------------------------------------------------------------
// Làm việc với array
//1. toString
//2. join (Thêm dấu ngăn cách tùy ý)
//3. pop (Xóa phần tử cuối mảng và trả về phần tử đã xóa)
//4. push (Thêm 1 hoặc nhiều phần tử cuối mảng và trả về độ dài của mảng)
//5. shift (Xóa phần tử đầu mảng và trả về phần tử đã xóa)
//6. unshift (Thêm 1 hoặc nhiều phần tử đầu mảng và trả về độ dài của mảng)
//7. splice (Xóa, cắt hoặc chèn phân tử)
//8. concat (Nối mảng với nhau)
//9. slice (Cắt phần tử mong muốn)



var languages = [
    'Javascrip',
    'Php',
    'Ruby',
];

// console.log(languages.splicing("Angular", "c"));
// languages.splice(1,2, 'C++') //Xác địng phần tử 1(PHP) và xóa thêm 1 phần tử sau nó(Ruby) và chèn thêm (c++)
// console.log(languages);

// var languages2 = [
//     'Javascrip',
//     'Php',
//     'Ruby',
// ];

// console.log(languages.concat(languages2));

// console.log(languages.slice(1,2)); //Cắt từ phần tử số 1 đến đầu phần tử 2 (PHP)


//------------------------------------------------------------
// object trong javascrip
var myInfo = {
    name: "Ban Trieu",
    age: 20,
    address: "Ha Noi",
    getName: function () {
        return this.name;
    }
    // function : là 1 phương thức / method
    // others : là 1 thuộc tính / property
}
// delete myInfo.address //Xóa key muốn xóa
// myInfo.email = "ban@gamil.com" //Thêm key mới vào trong myInfo
// console.log(myInfo.getName());


//------------------------------------------------------------
// object constructor

// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`

//     }
// }

// var admin = new User("Ban", "Triệu", "Avatar");
// var user = new User("Long", "Nguyễn", "Avatar");

// admin.title = "Chia sẻ khóa học"
// user.coment = "Conment khóa học"

// console.log(admin.getName());
// console.log(user.getName());


//------------------------------------------------------------
//Đối tượng date

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() +1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`);



//------------------------------------------------------------
// Math object

// Math.PI
// round() //Làm tròn số
// abs() //Trả về giá trị tuyệt đối
// ceil() //Làm tròn trên
// floor() //Làm tròn dưới
// random() //Trả về số thập phân nhỏ hơn 1
// min() //Trả về số nhỏ nhất trong dãy số
// max() //Trả về số lớn nhất trong dãy số

// console.log(Math.floor(Math.random() * 5 ));

// var randum = Math.floor(Math.random() *6)
// var bonus =  [
//     '10',
//     '20',
//     '30',
//     '40',
//     '50',
//     '60',
// ]
// console.log(bonus[randum]);


// var randum = Math.floor(Math.random() *100)
// if(randum < 50){
//     console.log("Thành công");
// }


//------------------------------------------------------------
// if-else: < > !==
//switch-case :


//------------------------------------------------------------
// Toàn tử 3 ngôi
// var course = {
//     name:"Js",
//     coin: 0
// }

// var result = course.coin > 0 ? `${course.coin} Coin` : "Không có";  
// var result = course.coin > 0 (điều kiện) sau ? là 2 biếu thức mình cần in ra
// console.log(result);



//------------------------------------------------------------
// Vòng lặp
// for : lặp với điều kiện đúng
// for/in : Lặp qua key của đối tượng
// for/of : lặp qua value của đối tượng 
// while : lặp khi đkien đúng
// do/while :lặp ít nhất 1 lần, và lặp khi dkien đúng

// for(var i=1; i<=10;i++){
//     console.log(`${i}. Xin chào bạn`);
// }


// for-in
// var arr = {
//     name:"Javascrip",
//     age: 20,
//     Address:"Ha Noi",
// };

// for(var key in arr) {
//     console.log(arr[key]);
// } 



// for-of
// var language = [
//     "avvc",
//     "1323",
//     "3fewr4"
// ]

// for (var value of language) {
//     console.log(value);
// }

// keys lấy ra key, values lấy ra phần tử
// for (var value of Object.values(language)) {
//     console.log(value);
// }


// do-while
// var i =0;
// var isSuccess = false;

// do{
//     i++;
//     console.log(i);
// }while(i<10);


// do{
//     i++;
//     console.log("Nạp thẻ lần thứ " +i);

//     // thành công
//     if(true){
//         isSuccess = true;
//     }
// }while(isSuccess && i <= 3);


// break & continue
// for(var i = 0; i < 10; i++){
//     if(i % 2 == 0){
//         continue;
//     }
//     console.log(i);

// }


// vòng lặp lồng nhau
// var array = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for (var i = 0; i < array.length; i++){
//     for( var j = 0; j < array[i].length; j++){
//         console.log(array[i][j]);
//     }
// }

// for(var i =10; i > 0; i--){
//     console.log(i);
// }

// for(var i = 100; i >= 0; i -= 5){
//     console.log(i);
// }


//------------------------------------------------------------
// Đệ quy
// var arr = [1,2,3,1,2,3];
// console.log([...(new Set(arr))]);

// function giaithua(number){
//     if(number > 0){
//         return number * giaithua(number - 1);
//     }
//     return 1;
// }

// console.log(giaithua(3)); 



//------------------------------------------------------------
// Array methods
// var arrays = [
//     {
//         id: 1,
//         name:"Bannshd",
//         email:"bannshd@gmail.com",
//         age:20,
//         isFinish:false
//     },
//     {
//         id: 2,
//         name:"Dương",
//         email:"Dươngnshd@gmail.com",
//         age:20,
//         isFinish:false
//     },
//     {
//         id: 3,
//         name:"Tú",
//         email:"tunshd@gmail.com",
//         age:20,
//         isFinish:false
//     }, {
//         id: 5,
//         name:"Long",
//         email:"tunshd@gmail.com",
//         age:20,
//         isFinish:false
//     },
//     {
//         id: 4,
//         name:"Tú",
//         email:"longnshd@gmail.com",
//         age:0,
//         isFinish:false
//     }
// ];
// forEach(): Duyệt lấy các phần tử của mảng
// every(): Mỗi lần lặp qua 1 phần tử và kiểm tra điều kiện, sai là dừng lặp luôn về trả về false
// some(): Mỗi lần lặp qua 1 phần tử và kiểm tra điều kiện, đúng là dừng lặp luôn về trả về true
// find(): Mỗi lần lặp qua 1 phần tử và kiểm tra điều kiện, đúng là dừng lặp về trả về 
// nội dung trong phần tử chứ điều kiện đó
// filter(): Mỗi lần lặp qua 1 phần tử và kiểm tra điều kiện, lấy ra các phần tử thỏa mãn đkien
// map(): Duyệt qua mảng
// reduce():Tính tổng 1 phần tử nào đó trong {} trong mảng[] : ví dụ age

// arrays.forEach(function(array, index) {
//     console.log(index, array);
// })

// var result = arrays.some(function(array, index) {
//     return array.isFinish
// })
// console.log(result);

// var isFree = arrays.filter(function(array, index) {
//     console.log(index);
//     return array.name === "Tú";
// })
// console.log(isFree);


// function coursesHandle(course, index){
//     return {
//         id:course.id,
//         name:`Tên bạn là: ${course.name}`,
//         email:course.email,
//         age:`Tuổi là: ${course.age}`,
//         index:index
//     }
// } 
// Tạo ra biến newCouses gọi hàm map(coursesHandle) duyệt mảng sau đó chạy vào (return) và gọi ra từng phần tử
// var newCouses = arrays.map(coursesHandle)
// console.log(newCouses);

// Tính tổng số tuổi trong mảng kiểu for
// var sumAge = 0
// for(var array of arrays){
//     sumAge += array.age;
// }
// console.log(sumAge);

// var i = 0
// function ageHandle(accumulator, currenValue){
//     i++;

//     var total = accumulator + currenValue.age
//     console.table({
//         'Lượt chạy':i,
//         'Lượt tích trữ': accumulator,
//         'Tuổi từng người':currenValue.age, //Cái cần tính tổng
//         'Tích trữ được':total

//     });
//     return total;
// }
// var sumAge = arrays.reduce(ageHandle, 0)
// console.log(sumAge);



// Ngắn gọn
// var sumAge = arrays.reduce(function(accumulator, currenValue){
//     return accumulator + currenValue.age;
// },0);
// console.log(sumAge);


// Làm phẳng mảng bằng reduce
// var depthArray = [1,2,[3,4],5,6,[7,8,9]];
// var array = depthArray.reduce(function(accumulator, currenValue){
//     return accumulator.concat(currenValue)
// }, [])
// console.log(array);

// -------------
// PHƯƠNG THỨC reduce() logic như thế nào
// var numbers = [1,2,3,4,5,6,7,8];

// const result = numbers.reduce(function(accumulator, currenValue){
//     return accumulator + currenValue
// }, 0)

// console.log(result);


// Includes methods
//includes(chuỗi) : tìm kiếm chữ trong chuỗi cần tìm
//includes(mảng) : tìm kiếm phần tử trong chuỗi cần tìm

// var title = "Javascrip Php C"
// console.log(title.includes("PHp", 0)); //0 tìm kiếm từ vị trí 0

// var arr = ["Javascrip", "Php", "C"]
// console.log(arr.includes("Javascrip"), 0);



//------------------------------------------------------------
// CALL BACK
//1. CALL BACK : LÀ HÀM
//2. PHẢI ĐƯỢC TRUYỀN QUA ĐỐI SỐ
//3. ĐƯỢC GỌI LẠI (trong hàm nhận đối số)


// function myFunction(param){
//     param("Bạn là good boy Hải Dương")
// }

// function callBack(value){
//     console.log("Value: " ,value);
// }

// myFunction(callBack);


// var arrays = [
//     "Javascrip",
//     "PHP",
//     "Ruby",
//     "C#"
// ];

// var htmls = arrays.map(function(array){
//     return ` <h2>${array}</h2> `
// })

// console.log(htmls.join(","));


// --------------------------------------------------------------
// Định nghĩa forEach2

// Array.property.forEach2 = function(callback){

// }

// var courses = [
//     "Ruby",
//     "C#",
//     "C++"
// ]
// courses.forEach(function(course,index,array){
//     console.log(index,course,array);
// })



// --------------------------------------------------------------
// Định nghĩa filter2

// Array.prototype.filter2=function(callback){
//     var output = [];

//     for(var index in this){
//         if( this.hasOwnProperty(index) ){
//             var result = callback( this[index], index, this)
//             if (result) {
//                 output.push(this[index])
//             }
//         }
//     }
//     return output;
// }

// var arrs = [
//     {
//         name: "Ban",
//         age:20
//     },
//     {
//         name: "Long",
//         age:19
//     },
//     {
//         name: "Tú",
//         age:18
//     },
// ]
// var ar = arrs.filter2(function(arr,index,array){
//     return arr.age < 20
// })
// console.log(ar);


// --------------------------------------------------------------
// Định nghĩa some2

// Array.prototype.some2=function(callback){

//     for(var index in this){
//         if( this.hasOwnProperty(index) ){
//             if (callback( this[index], index, this)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// var arrs = [
//     {
//         name: "Ban",
//         age:20,
//         isFinish:false
//     },
//     {
//         name: "Long",
//         age:19,
//         isFinish:false
//     },
//     {
//         name: "Tú",
//         age:18,
//         isFinish:true
//     },
// ]
// var ar = arrs.some2(function(arr,index,array){
//     return arr.isFinish;
// })
// console.log(ar);


// --------------------------------------------------------------
// Định nghĩa every2

// Array.prototype.every2=function(callback){

//     for(var index in this){
//         if( this.hasOwnProperty(index) ){
//             if (!(callback( this[index], index, this))) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// var arrs = [
//     {
//         name: "Ban",
//         age:20,
//         isFinish:true
//     },
//     {
//         name: "Long",
//         age:19,
//         isFinish:true
//     },
//     {
//         name: "Tú",
//         age:18,
//         isFinish:true
//     },
// ]
// var ar = arrs.every2(function(arr,index,array){
//     return arr.isFinish;
// })
// console.log(ar);



// --------------------------------------------------------------
// HTML DOM (gồm 3 thành phần chính)
// 1. Element : ID, class, tag name, CSS selector, HTML colection
// 2. Attribute
// 3. Text


// 1. Element
// gọi tới id
// var headingNode =  document.getElementById("headingID");
// console.log(headingNode);

// gọi tới class
// var headingClass = document.getElementsByClassName("headingCL")
// console.log(headingClass);

// gọi tới thẻ : vd: h1,h2,p ...
// var headingClass = document.getElementsByTagName("h1")
// console.log(headingClass);

// gọi tới class
// var headingClass = document.querySelector(".box .headingCL2")
// console.log(headingClass);

// gọi tới all class giống nhau
// var headingClass = document.querySelectorAll(".box .headingCL2")
// console.log(headingClass);

// gọi tới form (id)
// console.log(document.forms.form1);

// gọi tới thẻ a có name
// console.log(document.anchors);

// var listNodes = document.querySelector('.box-1')
// console.log(listNodes);
// console.log(listNodes.getElementsByTagName("li"));
// console.log(listNodes.querySelector("p"));

// 2. Attribute
// Thêm Attribute vào Element
// var headingElemen = document.querySelector('h1');
// Cách1
// headingElemen.className = "theh1"

//Cách 2
// headingElemen.setAttribute("href", "The H1")
// alert(headingElemen.getAttribute("href"));


// 3.innerText, textContent
// var headingElemen = document.querySelector('.heading');
// Thay đổi nội dung text
// headingElemen.textContent = 'New heading'

// innerHTML , outerHTML  
// innerHTML: thêm element,Attribute,text vào trong class mà mình document
// outerHTML: ghi đè lên chính class mà mình document

// var boxElement = document.querySelector('.box');
// Thêm thẻ h2 vào trong class mà mình document tới
// boxElement.innerHTML = "<h2>Box class</h2>"
// console.log(document.querySelector("h2").innerText);
// console.log(boxElement.innerHTML);
// console.log([boxElement]);

// contenteditable="": để chỉnh sửa element như input



// ----------------------------------------------------------------
//* DOM Style CSS

// var boxElement = document.querySelector('.box');
// boxElement.style.background = "blue";
// boxElement.style.width = "100px";
// boxElement.style.height = "100px";

// Sử dụng thêm nhiều thuộc tính
// Object.assign(boxElement.style, {
//     width: "1000px",
//     height: "400px",
//     background: "yellow",
// })
// console.log(boxElement.style);



//* Classlist property (Chỉ lấy ra được element)

// add: thêm class vào element
// contains: Kiểm tra class có nằm trong element hay không
// remove: xóa bỏ 1 class
// toggle: khi element có class đó rồi thì xóa, còn không có thì nó thêm class đó vào

// var boxElement = document.querySelector('.box');
// console.log(boxElement.classList.value);
// boxElement.classList.add('red')
// boxElement.classList.remove('red')
// boxElement.classList.toggle('red')
// console.log(boxElement.classList.contains("rgg")); // Kiểm tra có là true, không có là false


// DOM Events (Sự kiện diễn ra trong quá trình người dùng tương tác)
// 1. Attribute events
// onclick trong h1
// 2. Assign event using the element node
// var h1Elements = document.querySelectorAll('.box h1');
// for (var i = 0; i < h1Elements.length; ++i){
//     h1Elements[i].onclick = function(e){
//         console.log(e.target);
//     }
// }


// DOM Events
//**  1. Input / select
// change, input,
// var inputValue ;
// var inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.oninput = function(e){
//     // inputValue = e.target.value;
//     console.log(e.target.checked);
// }

// var inputElement = document.querySelector('select');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }

//**  2. Keyup / dow
// onkeyup: khi ấn và nhả tay khỏi bàn phím thì nhận dữ liệu
// onkeydown: khi ấn bàn phím thì nhận dữ liệu
// onkeypress: khi ấn giữ bàn phím thì nhận nhiều dữ liệu
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeydown = function(e){
//     console.log(e.which);
//     switch (e.which) {
//         case 27:
//             console.log("Exit");
//             break;
//         case 13:
//             console.log("oceee");
//             break;
//     }
// }

//** 3. preventDefault (Loại bỏ hành vi mặc định của trình duyệt trong html)

// var aElements = document.links;
// for(var i=0; i<aElements.length; ++i){
//     aElements[i].onclick = function(e){
// Nếu đường dẫn khác http://google.com thì không vào được trang đó (startsWith)
//         if(!e.target.href.startsWith("http://google.com")){
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector("ul");
// Khi ấn chuột và nhả ra (onmousedown) và preventDefault (Loại bỏ hành vi mặc định của trình duyệt trong html)
// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }
// ulElement.onclick = function(e){
//     console.log(e.target);
// }

//** 4. stopPropagation (Ngăn chặn nổi bọt)
// Khi click vào thẻ con nó sẽ nổi bọt và in ra cả thẻ cha, nếu không muốn in thẻ cha ra khi ấn vào thẻ con 
// thì dùng stopPropagation vào thẻ con để ngăn chặn nổi bọt ra thẻ cha

// var divElement = document.querySelector('.div_events');
//     divElement.onclick = function(e){
//         console.log("DIV");
//     }

// var clickElement = document.querySelector('.click_events');
//     clickElement.onclick = function(e){
//         e.stopPropagation();
//         console.log("CLICK");
//     }

// ** 5. Event listener
// var clickElement = document.querySelector('.click_events');

// function viec1(){
//     console.log("Thực hiện xong việc 1");
// }
// function viec2(){
//     console.log("Thực hiện xong việc 2");
// }

// clickElement.addEventListener("click", viec1);
// clickElement.addEventListener("click", viec2);

// Sau 3s thì công việc 1 bị dừng lại không được thực hiện
// setTimeout(function(){
//     clickElement.removeEventListener("click", viec1);
// },3000)


// ** 6. JSON : Là 1 định dạng dữ liệu (Chuỗi)
// Json: number, string, null, object, array
// Stringify:Từ Javascrip Types -> Json
// Parse: từ Json -> Javascrip Types

// var json = '["JS","PHP","C++"]';
// var json = '{"name":"Ban Trieu", "age":20}';

// var a = '1';
// console.log(typeof JSON.parse(a));

// console.log(JSON.stringify([
//     'Java', 'PHP'
// ]));



// ----------------------------------------------------------------
// Promise (3 trạng thái:   
// pending: Kết quả chưa được xử lý xong, đang chờ
// fullfilled: Tác vụ được thực hiện thành công
// rejected: Tác vụ không đồng bộ thất bại)
// var promise = new Promise(function(resolve, reject) {
//     // resolve:Thành công
//     // reject: thất bại
//     // resolve({
//     //     name:"Ban",
//     //     age:20
//     // })
//     resolve()
// })

// Khi thành công thì chạy vào then
// promise.then(function(){
//     // Trả về 1
//     return 1;
// })
// .then(function(data){
//     // Nhận 1 ở trên và in ra 1, rồi trả về 2
//     console.log(data);
//     return 2;
// })
// .then(function(data){
//     // Nhận 2 ở trên và in ra 2, rồi trả về 3
//     console.log(data);
//     return 3;
// })
// .then(function(data){
//     // in ra 3
//     console.log(data);
// })
// // Khi thất bại thì chạy vào catch
// .catch(function(){
//     console.log("Thất bại");
// })
// // Khi thành công và thất bại đều chạy vào finally
// .finally(function() {
//     console.log("Done");
// })

// ----------------------
// ** Promise (chain)
// Ví dụ 1
// function sleep(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms);
//     })
// }
// sleep(1000) //Sau 1s chạy vào hàm đầu tiên in ra 1
// .then(function(){
//     console.log(1);
//     // trả về Promise sleep, sau 1s mới chạy đến .then tiếp theo
//     return sleep(1000)
// })
// .then(function(){
//     console.log(2);
//     return sleep(1000)
// })
// .then(function(){
//     console.log(3);
//     // chạy đến 3 gặp lỗi, chạy vào catch in ra lỗi
//     return new Promise(function (resolve, reject) {
//         reject("Có lỗi xảy ra");
//     })
// })
// .then(function(){
//     console.log(4);
//     return sleep(1000)
// })
// .catch(function(err){
//     console.log(err);
// })


// Ví dụ 2
// function notHell(value) {
//     return new Promise(function (resolve) {
//         resolve(value);
//     });
// }
// notHell(1)
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value + 1);
//     });


// *1. Promise.resolve() : luôn trả về thành công
// *2. Promise.reject() : luôn trả về thất bại
// *3. Promise.all() : luôn trả 

// var Promise = Promise.resolve("Success");
// var Promise = Promise.reject("Error");
// Promise.then(function(result){
//     console.log('Thành công :', result);
// })
// .catch(function(err){
//     console.log('Thất bại : ', err);
// })


// var promise1 = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([1]);
//     }, 1000)
// })
// var promise2 = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([2,3]);
//     }, 2000)
// })
// var promise2 = Promise.reject("Có lỗi !")

// Dùng Promise.all chỉ cần 1 hàm lỗi thì sẽ dừng (catch) và thông báo lỗi ra
// Promise.all([promise1,promise2])
// .then(function(result){
//     var result1 = result[0]
//     var result2 = result[1]
//     console.log(result1.concat(result2));
// })
// .catch(function(err){
//     console.log(err);
// })

// ----------------------
// ** Promise example
// var users = [
//     { 
//         id: 1, 
//         name: 'Long', 
//     },
//     { 
//         id: 2, 
//         name: 'Ban', 
//     },
//     { 
//         id: 3, 
//         name: 'Duong', 
//     }
// ]

// var comments = [
//     { 
//         id: 1, 
//         user_id: 1, 
//         content: "Ban co phai la Ban khong ?"
//     },
//     { 
//         id: 2, 
//         user_id: 2, 
//         content: "Dung! Toi la Ban"
//     },
//     { 
//         id: 3, 
//         user_id: 1, 
//         content: "Toi co chuyen muon hoi ban "
//     },
//     { 
//         id: 4, 
//         user_id: 2, 
//         content: "Oce"
//     },
// ]
// B1: Lấy comments
// B2: Từ comments lấy ra user_id
// Từ user_id lấy ra user tương ứng

// Fake API
// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(comments);
//         }, 1000)
//     })
// }

// function getUserId(userIds){
//     return new Promise(function(resolve){
//         var result = users.filter(function(user){
//             return userIds.includes(user.id);
//         })
//         setTimeout(function(){
//             resolve(result);
//         },1000)
//     })
// }

// getComments()
// .then(function(comments){
//     var userIds = comments.map(function(comment){
//         return comment.user_id
//     });

//     return getUserId(userIds)
//     .then(function(user){
//         return {
//             users: user,
//             comments: comments
//         }
//     })
// })
// .then(function(data){
//     var conmentBox = document.getElementById("comment-box");
//     var html = "";

//     data.comments.forEach(function(comment){
//         var user = data.users.find(function(user){
//             return user.id === comment.user_id
//         });
//         html += `<li>${user.name}: ${comment.content}</li>`
//     })
//     conmentBox.innerHTML = html 
// })



// ----------------------------------------------------------------
// Fetch: 

var userApi = "https://jsonplaceholder.typicode.com/users";

fetch(userApi)
    .then(function (response) {
        return response.json();
        // response.json() là JSON.parse: JSON -> Javascrip tyles (là dữ liệu dạng Javascrip)
    })
    .then(function (users) {
        var htmls = users.map(function (user) {
            return `<li>
                <h2>${user.name}</h2>
                <p>${user.username}</p>
                <p>${user.email}</p>
                <p>${user.phone}</p>
        </li>`
        })
        var html = htmls.join("");
        document.getElementById('comment-box').innerHTML = html;
    })
    .catch(function (err) {
        alert("Có lỗi");
    })


