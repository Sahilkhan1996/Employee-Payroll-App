window.addEventListener('DOMContentLoaded', function () {
    createTabularInnterHtml();
})

const remove = (id) => {
    let empList = JSON.parse(localStorage.getItem('SahilStorage'));
    //Parsing the String to Object
    let emp = empList.find(empData => empData._id == id);
    //Retrieving the object of the id which is passed by the user
    //const index = empList.map(empData => empData._id).indexOf(emp._id);
    //const index=empList.indexOf(emp.id);
    empList.splice(index, 1);
    localStorage.setItem('SahilStorage', JSON.stringify(empList));

    // var empCount = document.querySelector('.emp-count');

    // empCount.innerHTML = `${empList.length}`;

    createTabularInnterHtml();
};

function createTabularInnterHtml() {
    let tableContent = document.querySelector('#table-display');

    let empCnt = document.querySelector('.emp-count');

    var tableData =
        `<tr>
    <th> Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>`;

    // alert(tableData);
    var empList = JSON.parse(localStorage.getItem('SahilStorage'));
    //deserialization and cparsing from string to object

    empCnt.innerHTML = empList.length;
    //displaying the number of contact added in the form
    empList.forEach(e => {
        // alert(e._name);
        tableData = `${tableData}
        <tr>
        <td class="progileRow"><img src="${e._profilePic}">${e._name}</td>
        <td>${e._gender}</td>
        <td>${e._department}</td>
        <td>${e._salary}</td>
        <td>${e._startDate}</td>
        <td>
                    <img src="../assets/icons/delete-black-18dp.svg" alt="Remove icon" onclick="remove('${e._id}')">

                    <img src="../assets/icons/create-black-18dp.svg" alt="" onclick="edit('${e._id}')">
                </td>
        </tr>`;
    });
    tableContent.innerHTML = tableData;
}