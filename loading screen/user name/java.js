document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorMsg = '';

  if (username !== 'user123') {
    errorMsg = 'Wrong user name';
  } else if (password !== 'cheesecake') {
    errorMsg = 'Wrong password';
  } else {
    window.location.href = "home.html";
    return;
  }
  document.getElementById('errorMsg').textContent = errorMsg;
});