function counter() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./index"
    }
  }, 200);
}
function counterSignIn() {
  let countdown = 7;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./"
    }
  }, 200);
}
function counterSignUp() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./signUp"
    }
  }, 200);
}
function counterQuery() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./query"
    }
  }, 200);
}
function counterClient() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./Client"
    }
  }, 200);
}
function counterPaciente() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./listPaciente"
    }
  }, 200);
}
function counterProducto() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./product"
    }
  }, 200);
}
function counterCategory() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./Category"
    }
  }, 200);
}
