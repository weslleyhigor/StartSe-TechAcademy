function capturaEnvio(){
    const botaoEnviar = document.querySelector('#enviar');

    botaoEnviar.addEventListener("click", function(){
        const form = document.querySelector('#form');

        const nome  = form.nome.value;
        const tel = form.tel.value;
        const rua = form.rua.value;
        const num = form.num.value;
        const bairro = form.bairro.value;
        const cidade = form.cidade.value;
        const estado = form.estado.value;
        const cep = form.cep.value;

        const table = document.querySelector('#tb-body');
        
        table.innerHTML += `<tr> <td class="tb-nome">${nome}</td> <td class="tb-tel">${tel}</td> <td class="tb-rua">${rua}</td> <td class="tb-num">${num}</td> <td class="tb-bairro">${bairro}</td> <td class="tb-cidade">${cidade}</td> <td class="tb-estado">${estado}</td> <td class="tb-cep">${cep}</td> </tr>`;

    });
};

capturaEnvio();