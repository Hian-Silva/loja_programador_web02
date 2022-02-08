
var bodyDrop = document.querySelector('.drop')

function drop(produto, a) {
  bodyDrop.style.display = 'flex'
  //Limpar tudo que tem na div .drop
  bodyDrop.innerHTML = null
  //Dropdown formulário cadastro ou login de usuário
  if (a === 'entrar') {
    //Ao iniciar o drop passa "login" para this.mode
    this.mode = "login"
    //this.bodyCadUser vem de bodyCadUser.js
    bodyDrop.innerHTML += `
      <div class="container-form">
            <a class="iconCloseLoginOrCad" onclick="down()"><i class="fa fa-window-close"></i></a>
            <div class="form-login-or-cad">
    <div class="cad row mt-2 mb-2 w-75">
        <input class="nome form-control" placeholder="Nome" type="text" id="nome" />
    </div>
    <div class="login row mb-2 w-75">
        <input class="form-control" placeholder="E-mail" type="email" id="email" />
    </div>
    <div class="login row mb-2 w-75">
        <input class="form-control" placeholder="Senha" type="password" id="password" />
    </div>
    <div class="cad row mb-2 w-75">
        <input class="form-control" placeholder="Repetir senha" type="password" id="repit-password" />
    </div>
    <div class="cad row mb-2 w-75">
        <input class="form-control" placeholder="CPF" maxlength="11" type="text" id="cpf" />
    </div>
    <div class="cad row mb-2 w-75">
        <input class="form-control" placeholder="CEP" maxlength="8" type="text" id="cep" />
    </div>
    <div class="row mb-2 w-75">
        <button class="btn-login-or-cad btn btn-primary btn-block" onclick="signinOrCad()" id="login-or-cad"></button>
    </div>
    <div class="mb-2 w-75">
        <a class="a-login-or-cad" onclick="metodoCadOrLogin()" id="cad-button"></a>
    </div>
</div>
        </div>
    `
    //Vem de cadUser
    metodoCadOrLogin()
  } else if (a === 'dropCheckOut') {
    bodyDrop.innerHTML += `
      <div class="containerCheckout">
        <a class="iconCloseLoginOrCad" onclick="down()"><i class="fa fa-window-close"></i></a>
        <div class="contentCheckOut">
            <div class="parte-checkout">
                <div class="camisa-checkout">
                    <img class="img-camisa-checkout" src="${produto.urlCor}" >
                    <img class="img-estampa-checkout" src="${produto.urlEstampa}" >
                </div>
                <div class="input-quant-valor">
                    <span>Quantidade </span>
                    <input class="form-control mb-2 ml-2 w-50" onkeyup="soma()" value="${produto.quant}" type="text" id="quantidade">
                    <input class="form-control" type="hidden" id="valor" value="${produto.valor}">
                    <div class="valor-checkout" type="text" id="valor-total">${produto.valor}</div>
                </div>
            </div>
            <div class="parte-checkout">
                <div class="endereco-entrega">
                    <h1>Endereço de entrega</h1>
                    <div>
                        <span class="localidade"></span> - <span class="uf"></span>
                    </div>
                    <div>
                        <span class="logradouro"></span> - <span class="bairro"></span>
                    </div>
                </div>
            </div>
            <div class="parte-checkout">
                <div class="cartao-credito">
                    Nome: <input class="form-control mb-2" id="nome">
                    Número do Cartão: <input class="form-control mb-2" maxlength="16" id="numero" >
                    <div class="row">
                        <div class="col-6">
                            Data de Validade: <input class="form-control mb-2 w-100" maxlength="5" id="validade">
                        </div>
                        <div class="col-6">
                            CVC: <input class="form-control mb-2 w-50" maxlength="3" id="cvc">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-primary mt-2" onclick="finalizar()">Finalizar</button>
    </div>
    `
  }
}

function down() {
  //Os componentes this devem utilizados no dropdown devem ser passados para o estado inicial
  this.mode = "login"
  bodyDrop.style.display = 'none'
}
