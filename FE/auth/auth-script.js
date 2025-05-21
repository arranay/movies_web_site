document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.querySelector("form[action='register']");
  const loginForm = document.querySelector("form[action='login']");

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const age = document.getElementById('age').value;
      const avatar = document.getElementById('avatar').files[0];

      if (!email || !password || !confirmPassword || !age) {
        alert('Пожалуйста, заполните все поля.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Пароли не совпадают.');
        return;
      }

      if (age < 1) {
        alert('Введите корректный возраст.');
        return;
      }

      const userData = {
        email,
        password,
        age,
        avatarName: avatar ? avatar.name : null, // только имя файла
      };

      sessionStorage.setItem('user', JSON.stringify(userData));

      alert('Регистрация прошла успешно!');
      registerForm.reset();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      if (!email || !password) {
        alert('Введите email и пароль.');
        return;
      }

      const savedUser = JSON.parse(sessionStorage.getItem('user'));

      if (
        savedUser &&
        email === savedUser.email &&
        password === savedUser.password
      ) {
        alert(`Добро пожаловать, ${email}!`);
        loginForm.reset();
      } else {
        alert('Неверный email или пароль.');
      }
    });
  }
});
