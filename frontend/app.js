const API ="https://shy-sunset-0f85.mjoji8979.workers.dev/";

async function addStudent() {
  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    course: document.getElementById("course").value,
    email: document.getElementById("email").value
  };

  await fetch(API + "/student", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Student Added!");
  loadStudents();
}

async function loadStudents() {
  const res = await fetch(API + "/students");
  const data = await res.json();

  document.getElementById("list").innerHTML =
    data.map(s =>
      `<p>${s.name} - ${s.course}</p>`
    ).join("");
}

window.onload = loadStudents;
