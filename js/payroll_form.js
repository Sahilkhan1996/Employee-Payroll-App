window.addEventListener('DOMContentLoaded', function () {

    const name = document.querySelector('#userName');

    const textError = document.querySelector('.text-error');

    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        var emp = new EmployeePayroll();
        try {
            emp.name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const salaryOp = document.querySelector('.salary_output');
    salaryOp.textContent = salary.value;
    salary.addEventListener('input', function () {
        salaryOp.textContent = salary.value;
    });

    let userForm = this.document.querySelector(".userForm");
    userForm.addEventListener('submit', function (e) {
        if (!saveData()) {
            e.preventDefault();
        }
    });
});

function saveData() {

    var flag = true;

    var name = document.getElementById("empForm").elements.namedItem("userName").value;
    var gender = document.getElementById("empForm").elements.namedItem("gender").value;
    var salary = document.getElementById("empForm").elements.namedItem("salary").value;
    var day = document.getElementById("empForm").elements.namedItem("Day").value;
    var month = document.getElementById("empForm").elements.namedItem("Month").value;
    var year = document.getElementById("empForm").elements.namedItem("Year").value;

    var emp = new EmployeePayroll();

    try {
        emp.name = name;
        emp.gender = gender;
        emp.salary = salary;
        var startDate = day + "/" + month + "/" + year;

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !startDate ? 'undefiend' : new Date(startDate).toLocaleDateString('en-US', options);

        emp.startDate = empDate;


        emp.profilePic = document.getElementById("empForm").elements.namedItem("profile").value;
        emp.notes = document.getElementById("empForm").elements.namedItem("notes").value;

        var depts = document.getElementById("empForm").elements.namedItem("department");
        var selectedDepts = [];
        depts.forEach(ele => {
            if (ele.checked) {
                selectedDepts.push(ele.value);
            }
        });

        emp.department = selectedDepts.join(',');

    } catch (e) {
        flag = false;
    }

    if (flag) {
        addEmployeeData(emp);
    }

    return flag;
}

function addEmployeeData(empObj) {

    var empList = JSON.parse(localStorage.getItem('SahilStorage'));

    if (empList == undefined) {
        localStorage.setItem('lastId', 1);
        empObj.id = 1;
        empList = [empObj];
    } else {
        empObj.id = parseInt(localStorage.getItem('lastId')) + 1;
        localStorage.setItem('lastId', empObj.id);
        empList.push(empObj);
    }

    localStorage.setItem('SahilStorage', JSON.stringify(empList));
}

function getData() {
    var empList = localStorage.getItem('SahilStorage');
    alert(empList);
}