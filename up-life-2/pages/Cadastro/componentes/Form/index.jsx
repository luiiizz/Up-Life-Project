import { useState } from 'react';
import Link from 'next/link';
import style from '../../../../styles/Cadastro.module.css';

export default function Form (){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:'',
        password2:'',
    })

    const [error, setError] = useState('');


    // Atualizar estado do formulario
    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    // Enviando dados para API
    const handleForm = async (event) => {
       try{
            event.preventDefault();
            const response = await fetch(`http://localhost:8000/api/auth/signup`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)  
            })
            const json = await response.json();
            
            console.log(json);
            if(response.status !== 201){
                const errorMessages = Object.keys(json).map(key => `${key}: ${json[key]}`);
                throw new Error(errorMessages.join('\n'));
            }else{
                setError('Usuário cadastrado com sucesso');
            }
       }catch (err){
            setError(err.message);
        }
    }
    return (
        <>
            <form onSubmit={handleForm} name="cadastro" className={style.form_cadastro}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nome do usuário</label>
                    <input  id="nome" type="text" class="form-control" required value={formData.name} onChange={(e) => {handleFormEdit(e,'name')}}/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input id="email" type="email" class="form-control" required value={formData.email} onChange={(e) => {handleFormEdit(e,'email')}}/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input type="password" class="form-control" required value={formData.password} onChange={(e) => {handleFormEdit(e,'password')}}/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirmar senha</label>
                    <input type="password" class="form-control" required value={formData.password2} onChange={(e) => {handleFormEdit(e,'password2')}}/>
                </div>
                
                <div class="d-flex flex-column align-items-center">
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                    
                    <div className={style.mensagem}>
                        {error && <p style={{ color: error.includes('sucesso') ? 'green' : 'red' }}>{error.replace('.', '! ')}</p> }
                    </div>

                    <p className={style.cadastrase}> Já possui conta? <Link href='/Login'> Login</Link></p>
                </div>
            </form>


        </>
    )
}