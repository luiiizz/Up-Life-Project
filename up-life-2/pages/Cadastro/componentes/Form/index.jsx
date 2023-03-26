import Image from "next/image"
import style from '../../../../styles/Cadastro.module.css';

export default function Form (){

    function exibirInformacoes() {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        
        const informacoes = document.getElementById("informacoes");
        informacoes.innerHTML = `Cadastrado com sucesso!!`;
    }

    return (
        <>
            <form name="cadastro" className={style.form_cadastro}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nome do usuário</label>
                    <input  id="nome"  name="nome" type="text" class="form-control" required/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input id="email" name="email" type="email" class="form-control" required/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">CPF</label>
                    <input  name="cpf" type="number" class="form-control" required/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input type="password" class="form-control" required/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirmar senha</label>
                    <input type="password" class="form-control" required/>
                </div>

                <button type="submit" class="btn btn-primary" onClick={exibirInformacoes}>Cadastrar</button>
            </form>

            <div id="informacoes" className={style.sucesso}>

            </div>


        </>
    )
}