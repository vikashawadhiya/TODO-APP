let myform = document.querySelector('form');
let inp1 = document.getElementById('task');
let inp2 = document.getElementById('priority')
let tbody = document.querySelector('tbody');

let AllTask = [];

myform.addEventListener('submit',function(e)
{
e.preventDefault();
let Data = {};
Data.task = inp1.value;
Data.priority = inp2.value;

AllTask.push(Data);
console.log(AllTask);
tbody.innerHTML = null;
AllTask.map((ele)=>
{
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerText = ele.task;
    td2.innerText = ele.priority;

    row.append(td1,td2);
  tbody.append(row);
})

})