
function scrollToTop() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".menu");
  
    menuToggle.addEventListener("change", function() {
      if (menuToggle.checked) {
        menu.style.display = "flex";
      } else {
        menu.style.display = "none";
      }
    });
  });
  

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".appointment-form form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const data = document.getElementById("data").value;
        const hora = document.getElementById("hora").value;
        const servico = document.getElementById("servico").value;
        const profissional = document.getElementById("profissional").value;
        const observacoes = document.getElementById("observacoes").value;

        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Telefone:", telefone);
        console.log("Data:", data);
        console.log("Hora:", hora);
        console.log("Serviço:", servico);
        console.log("Profissional:", profissional);
        console.log("Observações:", observacoes);

        alert("Seu agendamento foi realizado com sucesso!");

        form.reset();
        
    });
});

