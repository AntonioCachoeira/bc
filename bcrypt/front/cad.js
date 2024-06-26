const signup = document.getElementById("signup");

signup.addEventListener("click", () => {
  const nome = document.getElementById("nome1").value;
  const email = document.getElementById("email1").value;
  const senha = document.getElementById("senha1").value;

  const data = {
    nome: nome,
    email: email,
    senha: senha
  };

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resposta) => resposta.json())
    .then((dados) => {
      console.log(dados);
    })
    .catch((err) => {
      console.error("erro de busca de dados", err);
    });
});
