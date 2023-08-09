document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const knowMoreBtn = document.getElementById('know-more-btn');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação
    if (username === 'pedrin' && password === 'hype') {
      window.location.href = 'home.html';
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  });

  knowMoreBtn.addEventListener('click', function() {
    console.log('aaaa');
    window.location.href = 'about.html';
  });
});
