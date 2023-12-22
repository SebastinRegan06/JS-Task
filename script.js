function signup() {
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 5, 10);
    checkLength(password, 5, 10);
    checkConfirmPassword(password, password2);
    checkEmail(email);
    checkAlpha(username);
  });

  function errorInput(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector("p");
    p.innerHTML = message;
  }
  function successInput(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector("p");
    p.innerHTML = "";
  }

  function checkRequired(inputs) {
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        errorInput(input, `${getName(input)} is Required`);
      } else {
        successInput(input);
      }
    });
  }
  function getName(input) {
    return input.id;
  }

  function checkLength(input, min, max) {
    const data = input.value.trim().length;
    if (data < min) {
      errorInput(
        input,
        `${getName(input)} must be aleast greater than ${min} characters`
      );
    } else if (data > max) {
      errorInput(
        input,
        `${getName(input)} must be aleast lesser than ${max} characters`
      );
    } else {
      successInput(input);
    }
  }

  function checkConfirmPassword(password, password2) {
    if (password.value != password2.value) {
      errorInput(password2, `${getName(password2)}  does not match`);
    }
  }

  function checkEmail(input) {
    if (!input.value.trim().isEmail()) {
      errorInput(input, `This is not an valid email address`);
    }
  }
  function checkAlpha(input) {
    if (!input.value.trim().isAlpha()) {
      errorInput(input, `${getName(input)}  Must be Alphabets`);
    }
  }
  String.prototype.isEmail = function () {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  };

  String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z]*$/);
  };
  const valid1 = document.querySelectorAll(".form-group.success");
  if (valid1.length === 4) {
    showloginpage();
  }
}
signup();

function login() {
  let form2 = document.getElementById("form2");
  let username2 = document.getElementById("username2");
  let password3 = document.getElementById("password3");

  form2.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username2, password3]);
    checkLength(username2, 5, 10);
    checkLength(password3, 8, 15);
  });

  function getName(input) {
    return input.id;
  }
  function errorInput(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector("p");
    p.innerHTML = message;
  }
  function successInput(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group1 success";
    const p = formGroup.querySelector("p");
    p.innerHTML = "";
  }

  function checkRequired(inputs) {
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        errorInput(input, `${getName(input)} is Required`);
      } else {
        successInput(input);
      }
    });
  }
  function checkLength(input, min, max) {
    const data = input.value.trim().length;
    if (data < min) {
      errorInput(
        input,
        `${getName(input)} must be aleast greater than ${min} characters`
      );
    } else if (data > max) {
      errorInput(
        input,
        `${getName(input)} must be aleast lesser than ${max} characters`
      );
    } else {
      successInput(input);
    }
  }
  function checkLength(input, min, max) {
    const data = input.value.trim().length;
    if (data < min) {
      errorInput(
        input,
        `${getName(input)} must be aleast greater than ${min} characters`
      );
    } else if (data > max) {
      errorInput(
        input,
        `${getName(input)} must be aleast lesser than ${max} characters`
      );
    } else {
      successInput(input);
    }
  }
  const valid2 = document.querySelectorAll(".form-group1.success");
  if (valid2.length === 2) {
    showtodolist();
  }
}
login();

function showsignuppage() {
  document.getElementById("signup-page").style.display = "block";
  document.getElementById("login-page").style.display = "none";
  document.getElementById("todo-list").style.display = "none";
}

function showloginpage() {
  document.getElementById("signup-page").style.display = "none";
  document.getElementById("login-page").style.display = "block";
  document.getElementById("todo-list").style.display = "none";
}

function showtodolist() {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("signup-page").style.display = "none";
  document.getElementById("todo-list").style.display = "block";
}

let todoarea = document.getElementById("area");
let input = document.getElementById("input-todo");
let btn = document.getElementById("goto");

window.onload = () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => addtodo(todo));
};

let todos = [];

btn.addEventListener("click", () => {
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  addtodo(input.value);
  input.value = "";
});

function addtodo(todo) {
  let para = document.createElement("p");
  para.style.backgroundColor = "#f0b176";
  para.style.padding = "20px";
  para.style.margin = "3px";
  para.style.fontSize = "30px";
  para.innerText = todo;
  todoarea.appendChild(para);
  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    remove(todo);
  });

  para.addEventListener("dblclick", () => {
    todoarea.removeChild(para);
    remove(todo);
  });
}

function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}
