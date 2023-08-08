document.addEventListener('DOMContentLoaded', function() {
  const institutionInput = document.getElementById('institution-input');
  const institutionOptions = document.getElementById('institution-options');
  
  const institutions = [
    "Universidade Federal de Uberlândia (UFU)",
    "Universidade de Uberaba (Uniube)",
    "Faculdade Politécnica de Uberlândia (FPU)",
    "Faculdade Católica de Uberlândia (FACIG)",
    "Faculdade Pitágoras de Uberlândia",
    "Faculdade Unitri",
    "Centro Universitário do Triângulo (UNIT)",
    "Instituto Federal do Triângulo Mineiro (IFTM)",
    "Escola Técnica de Saúde de Uberlândia (ETSU)",
    "Escola Superior de Educação Física de Uberlândia (ESEF-Uberlândia)",
    "Colégio Nacional",
    "Colégio Diocesano Santo Tomás de Aquino (DIOCESANO)",
    "Colégio Objetivo",
    "Colégio Marista"
  ];
  
  institutionInput.addEventListener('input', function() {
    const searchText = institutionInput.value.toLowerCase();
    const filteredOptions = institutions.filter(option => option.toLowerCase().includes(searchText));
    
    institutionOptions.innerHTML = '';
    filteredOptions.forEach(option => {
      const li = document.createElement('li');
      li.textContent = option;
      li.addEventListener('click', function() {
        institutionInput.value = option;
        institutionOptions.innerHTML = '';
      });
      institutionOptions.appendChild(li);
    });
  });
});
