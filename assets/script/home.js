document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".nav-item");
  const contentTabs = document.querySelectorAll(".content");
  const nameField = document.getElementById("name");
  const ageField = document.getElementById("age");
  const genderField = document.getElementById("gender");

  // Dados de exemplo do usuário
  const userInfo = {
      name: "Pedro Barcelos",
      age: "15 anos",
      gender: "Masculino",
      institution: "Colégio Nacional",
      registration: "TEST123",
      email: "pedrin@hype.com",
      username: "pedrin"
  };

  // Mostra as informações do usuário
  showUserInfo(userInfo);

  // Mostra a aba "Profile" por padrão
  contentTabs[0].style.display = "block";
  navItems[0].classList.add("active");

  navItems.forEach((item, index) => {
      item.addEventListener("click", function() {
          // Oculta todas as divs de conteúdo
          contentTabs.forEach(tab => {
              tab.style.display = "none";
          });

          // Mostra a div de conteúdo correspondente à aba clicada
          contentTabs[index].style.display = "block";

          // Remove a classe "active" de todas as abas e a adiciona à aba clicada
          navItems.forEach(navItem => navItem.classList.remove("active"));
          this.classList.add("active");
      });
  });

  // Botão de redefinir senha
  const resetPasswordButton = document.getElementById("reset-password");
  resetPasswordButton.addEventListener("click", function() {
      // Implementar ação de redefinir senha aqui
      alert("Senha redefinida com sucesso! Confira seu Email.");
  });

  // Função para mostrar as informações do usuário
  function showUserInfo(user) {
      nameField.textContent = user.name;
      ageField.textContent = user.age;
      genderField.textContent = user.gender;
  }
});
