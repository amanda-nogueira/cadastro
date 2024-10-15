function buscarEndereco() {
    let cep = document.getElementById('cep').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            document.getElementById('logradouro').value = dados.logradouro
            document.getElementById('bairro').value = dados.bairro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('uf').value = dados.uf
            document.getElementById('ddd').value = dados.ddd;
        
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error))
}

function salvar(){
    nome = frmCadastro.txtname.value
    telefone = frmCadastro.txttel.value
    if(frmCadastro.txtname.value === ""){
        alert('Preencha o campo NOME')
        frmCadastro.txtnome.focus()
    }else if(frmCadastro.txttel.value === ""){
        alert('Preencha o campo NOME')
        frmCadastro.txttel.focus()
    }else{
        return mensagem()
    }
    let mensagem = 'Cadastro realizado com sucesso!'
}

function limpar(){
    document.getElementById('nome').innerHTML = 'nome'
}