import { useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

import style from '../../../../styles/AgendamentoSangue.module.css';

export default function Form (){
    const [formData, setFormData] = useState({
        usuario: '',
        data: '',
        horario:'',
        tipo:'',
    })

    const [error, setError] = useState('');
    const usuario = Cookies.get('usuario');


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
                    <label for="usuario" class="form-label">Usuário</label>
                    <input  id="usuario" type="text" class="form-control bg-white" required value={usuario} disabled/>
                </div>

                <div class="mb-3">
                    <label for="data" class="form-label">Data</label>
                    <input  id="data" type="date" class="form-control" required value={formData.data} onChange={(e) => {handleFormEdit(e,'data')}}/>
                </div>

                <div class="mb-3">
                    <label for="nome" class="form-label">Horário</label>
                    <input  id="nome" type="time" class="form-control" required value={formData.horario} onChange={(e) => {handleFormEdit(e,'horario')}}/>
                </div>

                <div class="mb-3">
                    <label for="tipo" class="form-label">Tipo de Sangue</label>
                    <select id="tipo" class="form-control" required>
                        <option value="">Selecione:</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="">NÃO SEI</option>
                    </select>
                    {/* <input  id="nome" type="text" class="form-control" required value={formData.tipo} onChange={(e) => {handleFormEdit(e,'tipo')}}/> */}
                </div>


                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Local</label>
                    <input id="email" type="email" class="form-control bg-white" required value='IOHA' disabled/>
                </div>

                <Link href='https://www.google.com/maps/dir/-16.2723068,-48.9706812/Instituto+Onco-Hematol%C3%B3gico+de+An%C3%A1polis+-+R.+Washington+de+Carvalho,+155+-+St.+Central,+An%C3%A1polis+-+GO,+75020-120/@-16.2999667,-48.9765712,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x935ea464caa13103:0xf0d155f62ea25a6e!2m2!1d-48.950455!2d-16.328304?entry=ttu'> Confira a localização</Link>

                
                <div class="d-flex flex-column align-items-center">
                    <button type="submit" class="btn btn-primary">Agendar</button>
                    
                    <div className={style.mensagem}>
                        {error && <p style={{ color: error.includes('sucesso') ? 'green' : 'red' }}>{error.replace('.', '! ')}</p> }
                    </div>
                </div>
            </form>


        </>
    )
}