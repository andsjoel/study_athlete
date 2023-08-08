document.addEventListener('DOMContentLoaded', function() {
  const userInfo = {
    nome: "Pedro Barcelos",
    idade: 15,
    genero: "Masculino",
    instituicao: "Colégio Nacional",
    matricula: "T3ST3ABC123",
    modalidade: "Vôlei",
    email: "pedrin@hype.com",
    usuario: "pedrobarcelos"
  };
  
  const editButton = document.getElementById('edit-button');
  const userFields = ['nome', 'idade', 'genero', 'instituicao', 'matricula', 'modalidade', 'email', 'usuario'];
  
  userFields.forEach(field => {
    const span = document.getElementById(field);
    span.textContent = userInfo[field];
  });
  
  editButton.addEventListener('click', function() {
    userFields.forEach(field => {
      const span = document.getElementById(field);
      const currentValue = span.textContent;
      const input = document.createElement('input');
      input.value = currentValue;
      span.textContent = '';
      span.appendChild(input);
    });
    
    editButton.textContent = 'Salvar';
    editButton.removeEventListener('click', this);
    
    editButton.addEventListener('click', function() {
      userFields.forEach(field => {
        const span = document.getElementById(field);
        const input = span.querySelector('input');
        userInfo[field] = input.value;
        span.textContent = userInfo[field];
      });
      
      editButton.textContent = 'Editar Dados';
    });
  });
});
