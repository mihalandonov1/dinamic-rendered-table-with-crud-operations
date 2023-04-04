const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const birth = document.getElementById("birth");
const salary = document.getElementById("salary");
const btnEdit = document.getElementById("btnEdit");
const btnDelete = document.getElementById("btnDelete");
const btn = document.getElementById("btn");
const tablebody = document.getElementById("tablebody");

const ntable = document.getElementById("myTable");
const nRow = document.getElementById("tRow");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const ntable = document.getElementById("myTable");

  const newR = ntable.insertRow(-1);

  let cell0 = newR.insertCell(0);
  let cell1 = newR.insertCell(1);
  let cell2 = newR.insertCell(2);
  let cell3 = newR.insertCell(3);
  let cell4 = newR.insertCell(4);
  let cell5 = newR.insertCell(5);

  var x = document.getElementsByTagName("tr");
  for (i = 0; i < x.length; i++) {
    cell0.innerHTML = x[i].rowIndex;
  }

  cell1.innerHTML = fullname.value;
  cell2.innerHTML = email.value;
  cell3.innerHTML = phone.value;
  cell4.innerHTML = birth.value;
  cell5.innerHTML = salary.value;

  fullname.value = email.value = phone.value = birth.value = salary.value = "";
});

// clear input functiong

const clearInput = function () {
  fullname.value = email.value = phone.value = birth.value = salary.value = "";
};

btnEdit.addEventListener("click", function (e) {
  e.preventDefault();
  document.addEventListener("click", function (e) {
    const target = e.target.closest("tr"); // Or any other selector.

    if (target) {
      // Do something with `target`.
      e.preventDefault();
      fullname.value = target.cells[1].innerText;
      email.value = target.cells[2].innerText;
      phone.value = target.cells[3].innerText;
      birth.value = target.cells[4].innerHTML;
      salary.value = target.cells[5].innerHTML;
      console.log(target);

      document.getElementById("btnSave").addEventListener(
        "click",
        function abc(e) {
          e.preventDefault();
          target.cells[1].innerText = fullname.value;
          target.cells[2].innerText = email.value;
          target.cells[3].innerText = phone.value;
          target.cells[4].innerText = birth.value;
          target.cells[5].innerText = salary.value;
          console.log(target);

          fullname.value =
            email.value =
            phone.value =
            birth.value =
            salary.value =
              "";
        },
        { once: true }
      );
    }
  });
});

btnDelete.addEventListener("click", function (e) {
  document.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target.closest("tr"); // Or any other selector.

    if (target) {
      console.log(target.rowIndex);
      let reow = target.rowIndex;
      document.getElementById("myTable").deleteRow(reow);
    }
  });
});

fetch("./employees.json")
  .then((response) => response.json())
  .then((data) => showData(data));

function showData(data) {
  let table = data.employees;

  for (let i = 0; i < table.length; i++) {
    const ntable = document.getElementById("myTable");

    const newR = ntable.insertRow(1 + i);
    let cell0 = newR.insertCell(0);
    let cell1 = newR.insertCell(1);
    let cell2 = newR.insertCell(2);
    let cell3 = newR.insertCell(3);
    let cell4 = newR.insertCell(4);
    let cell5 = newR.insertCell(5);
    cell0.innerHTML = table[i].id;
    cell1.innerHTML = table[i].name;
    cell2.innerHTML = table[i].email;
    cell3.innerHTML = `0${table[i].phone}`;
    cell4.innerHTML = table[i].birth;
    cell5.innerHTML = table[i].salary;
  }
}
