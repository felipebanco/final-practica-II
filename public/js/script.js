function counter() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./index"
    }
  }, 1000);
}
function counterSignIn() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./signIn"
    }
  }, 1000);
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
  }, 1000);
}
function counterProduct() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./product"
    }
  }, 1000);
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
  }, 1000);
}
