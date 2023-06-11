import { useState, useEffect } from 'react';
import Link from 'next/link';
import style from '../../../../styles/Login.module.css';
import Cookies from 'js-cookie';

export default function Form (){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const [error, setError] = useState('');


    // Atualizar estado do formulario
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

    // Enviando dados para API
    const handleForm = async (event) => {
       try{
            event.preventDefault();
            const authHeader = btoa(`${username}:${password}`);
            const headers = {
                Authorization: `Basic ${authHeader}`,
              };

            const response = await fetch(`http://localhost:8000/api/auth/login`,{
                method: 'POST',
                headers: headers,
            })
            const json = await response.json();

            console.log(json);

            if(json.token){
                console.log(json.token);
                console.log(json.user.email);
    
                // Armazena o token retornado em um cookie
                Cookies.set('token', json.token);

                 // Abre uma nova requisição para obter o ID do usuário
                const userResponse = await fetch(`http://localhost:8000/api/auth/user`, {
                    method: 'GET',
                    headers: {
                    Authorization: `Token ${json.token}`,
                    },
                });

                const userJson = await userResponse.json();

                if (userJson.id) {
                    Cookies.set('idUser', userJson.id);
                    Cookies.set('email', userJson.email);
                    Cookies.set('name', userJson.name);
                } else {
                    throw new Error('ID do usuário não encontrado!');
                }
        
                // Define o token no estado para uso posterior
                setToken(json.token);
                setToken(json.user.email);
            }else{ 
                if(json.error){
                    throw new Error('Usuário inválido! '+json.error);
                }else{
                    throw new Error('Usuário inválido!');
                }
            }
            
            console.log(json);
            if(response.status !== 200){
                const errorMessages = Object.keys(json).map(key => `${key}: ${json[key]}`);
                throw new Error(errorMessages.join('\n'));
            }else{
                setError('Acessando...');
                self.location = '/AgendamentoSangue'
            }
       }catch (err){
            setError(err.message);
        }
    }

    return (
        <>
            <form onSubmit={handleForm} name="login" className={style.form_cadastro}>

                <div class="mb-4 mt-5">
                    <label for="username" class="form-label">Usuário</label>
                    <input id="username" type="email" class="form-control" required value={username} onChange={(e) => {handleUsernameChange(e,'username')}}/>
                </div>

                <div class="mb-5">
                    <label for="password" class="form-label">Senha</label>
                    <input id="password" type="password" class="form-control" required value={password} onChange={(e) => {handlePasswordChange(e,'password')}}/>
                </div>

                <div class="d-flex flex-column align-items-center">
                    <button type="submit" class="btn btn-primary">Entrar</button>
                    
                    <div className={style.mensagem}>
                        {error && <p class="mt-5" style={{ color: error.includes('Acessando') ? 'green' : 'red' }}>{error}</p> }
                    </div>

                    <p className={style.cadastrase}> Não possui conta? <Link href='/Cadastro'> Cadastra-se</Link></p>
                </div>
            </form>


        </>
    )
}