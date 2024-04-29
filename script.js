//Emplouee and is detail are stored in arary of object
//empno,empname,empAdd,empGen,enpSal,empdeptno
//create object of above array using function constructor 
//and display is value using function and is partof prototype
//of function constructor Employee

var Empdetail = [

    { empno: 123, empname: "Rahul", empAdd: "Wadala", empGen: "Male", empSal: 20000, empdept: "It"},

    { empno: 1224, empname: "Karan", empAdd: "Bandra", empGen: "femal", empSal: 25000, empdept: "Sales" },

    { empno: 231, empname: "Tom", empAdd: "Andheri", empGen: "male", empSal: 40000, empdept: "Marketing" },
]

function Employee(empno, empname, empAdd, empGen, empSal, empdept) {
    this.empno = empno
    this.empname = empname
    this.empAdd = empAdd
    this.empGen = empGen
    this.empSal = empSal
    this.empdept = empdept

    this.myfunc = function () {
        console.log(`Employe No is ${this.empno} Employe Name is ${this.empname} Employe Add is ${this.empAdd} Employe Gender is ${this.empGen} Employe salary is ${this.empSal} and Employe dapartment is ${this.empdept}`);
    }
}

// var index = 0;

// for (index = 0; index < Empdetail.length; index++) {
//     var firstData = new Employee(Empdetail[index].empno, Empdetail[index].empname, Empdetail[index].empAdd, Empdetail[index].empGen, Empdetail[index].empSal, Empdetail[index].empdept)
//     // console.log(firstData);
//     firstData.myfunc();
// } 

// var seconData = new Employee(Empdetail[1].empno, Empdetail[1].empname, Empdetail[1].empAdd, Empdetail[1].empGen, Empdetail[1].empSal, Empdetail[1].empdept)
// // // console.log(firstData);
// seconData.myfunc()

// var thirData = new Employee(Empdetail[2].empno, Empdetail[2].empname, Empdetail[2].empAdd, Empdetail[2].empGen, Empdetail[2].empSal, Empdetail[2].empdept)
// console.log(firstData);
// thirData.myfunc()


// Empdetail.map( (val) =>{
//     var allData = new Employee(val.empno,val.empname,val.empAdd,val.empGen,val.empSal,val.empdept)
//     allData.myfunc()
// })

var btn = document.querySelector("button");
btn.onclick = function () {

            var newEmpNo = parseInt(document.getElementById("newEmpNo").value)
            var newEmpName = (document.getElementById("newEmpNa").value)
            var newEmpAdd = (document.getElementById("newEmpAdd").value)
            var newEmpGen = (document.getElementById("newEmpGen").value);
            var newEmpSal = parseInt(document.getElementById("newEmpSal").value);
            var newEmpDep = (document.getElementById("newEmpDep").value);
        
            Empdetail.push({
                empno: newEmpNo,
                empname: newEmpName,                
                empAdd: newEmpAdd,
                empGen: newEmpGen,
                empSal: newEmpSal,
                empdept: newEmpDep,
            })

            updateTable(Empdetail);
}


function updateTable(Empdetail){
    var data4 = document.getElementById("data2");
    // console.log(data4);

    const tbody = data4.querySelector("tbody")
    // console.log(tbody);

   
    tbody.innerHTML = '';

    Empdetail.forEach(value => {
        var newRow = document.createElement("tr")

        newRow.innerHTML = 
        `<td>${value.empno}</td>
        <td>${value.empname}</td>
        <td>${value.empAdd}</td>
        <td>${value.empGen}</td>
        <td>${value.empSal}</td>
        <td>${value.empdept}</td>`;
        tbody.appendChild(newRow)
    })
    // console.log(data);
}
updateTable(Empdetail)



var btn2 = document.getElementById("daTa")
btn2.addEventListener("click", function(){
    console.log("Hello");
    var notes = document.getElementById("newEmpNo").value
    console.log(notes);
    
    var num = Empdetail.filter ( (val) => { return val.empno == notes} )
    console.log(num);
    
    updateTable(num)
})


var btn3 = document.getElementById("DATa");
btn3.addEventListener("click", function(){
    var data4 = document.getElementById("data2");

    const tbody = data4.querySelector("tbody")

    tbody.innerHTML = '';

    Empdetail.forEach(value => {
        var newRow = document.createElement("tr")

        newRow.innerHTML = 
        `<td>${value.empno}</td>
        <td>${value.empname}</td>
        <td>${value.empAdd}</td>
        <td>${value.empGen}</td>
        <td>${value.empSal}</td>
        <td>${value.empdept}</td>`;
        tbody.appendChild(newRow)
    })
})
















