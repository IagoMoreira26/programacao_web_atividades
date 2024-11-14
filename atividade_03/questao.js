const botao = document.querySelector("#btn");
const resultados = document.getElementById("resultados");

botao.addEventListener("click", async () => {
  const cep = document.getElementById("cep").value;
  if (cep.length != 8) {
    alert("CEP inválido");
    return;
  }
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  geraResultado(data);
});

function geraResultado(data) {
  if (data.erro) {
    resultados.innerHTML = `
        <h2 class="container_titulo_resultado">Resultado</h2>
        <div class="resultado_item">
          <p>CEP não encontrado</p>
        </div>
      `;
    return;
  }
  resultados.innerHTML = `
      <h2 class="container_titulo_resultado">Resultado</h2>
      <div class="resultado_item">
        <p><strong>CEP:</strong> ${data.cep} </p>
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro} </p>
        <p><strong>Cidade:</strong> ${data.localidade} </p>
        <p><strong>Estado:</strong> ${data.estado} </p>
      </div>
    `;
}
