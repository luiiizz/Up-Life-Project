import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import moment from 'moment';
import 'moment-timezone';
import Link from 'next/link';

import style from '../../../../styles/AgendamentoSangue.module.css';

export default function Form (){

    //Coletar dados do usuário
    const UserData = () => {
        const [user, setUser] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const token = Cookies.get('token');
              if (!token) {
                throw new Error('Token não encontrado no cookie');
              }
      
              const response = await fetch('http://localhost:8000/api/auth/user', {
                headers: {
                  'Authorization': `Token ${token}`,
                },
              });
      
              if (!response.ok) {
                throw new Error('Erro ao fazer a requisição');
              }
      
              const data = await response.json();
              setUser(data);
            } catch (error) {
              console.error('Erro ao fazer a requisição:', error);
            }
          };
      
          fetchData();
        }, []);
      
        return user;
      };
    

    // Montando formulario para enviar ao backend
    const [formData, setFormData] = useState({
        bag_id: '1',
        blood_type: ' ',
        quantity: '1',
        expiry_date: '',
        validation_date: '',
        recipient:'1',
        donor: '',
        bag_type: '1',
    });

    console.log(formData);

    const [error, setMsg] = useState('');
    const usuario = Cookies.get('usuario');

    // Variaveis não coletadas do formulario
    const user = UserData();
    const idUser = user.id;
    const expiryDate = moment().add(2, 'years').format('YYYY-MM-DD');

    // Atualizar estado do formulario
    const handleFormEdit = (event, name) => {

        // Valida de segunda a sexta
        if(name === 'validation_date'){
                var dataSelecionada = new Date(event.target.value);
                var diaSemana = dataSelecionada.getDay();
            
                // 0 = Domingo, 0 = Segunda-feira, ..., 5 = Sábado
                if (diaSemana === 5 || diaSemana === 6) {
                alert("Selecione uma data entre segunda e sexta-feira.");
                event.target.value = ''; // Limpar o valor do campo
                }
        }
        // Concatenando data e horario
        if (name === 'validation_date') {
            if(!formData.horario) {
                formData.horario = '08:00';
            }
            setFormData({
              ...formData,
              expiry_date: expiryDate,
              donor: idUser,
              validation_date: event.target.value + ' ' + formData.horario
            });
        } else if (name === 'horario') {
            setFormData({
              ...formData,
              expiry_date: expiryDate,
              donor: idUser,
              horario: event.target.value,
              validation_date: formData.validation_date.split(' ')[0] + ' ' + event.target.value,
            });
        } else {
            setFormData({
              ...formData,
              expiry_date: expiryDate,
              donor: idUser,
              [name]: event.target.value,
            });
        }
    }

    // Enviando dados para API
    const handleForm = async (event) => {
       try{
        
            event.preventDefault();

            const token = Cookies.get('token');
            if (!token) {
            throw new Error('Token não encontrado no cookie');
            }
            
            const response = await fetch(`http://localhost:8000/api/donations/blood-donation/`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Token ' + token
                },
                body: JSON.stringify(formData)  
            })
            const json = await response.json();
            
            console.log(json);
            if(response.status !== 201){
                const errorMessages = Object.keys(json).map(key => `${key}: ${json[key]}`);
                throw new Error(errorMessages.join('\n'));
            }else{
                setMsg('Agendamento realizado com sucesso!');
                self.location = '/AgendamentoSangue'
            }
       }catch (err){
            setMsg(err.message);
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
                    <label for="validation_date" class="form-label">Data</label>
                    <input  id="validation_date" type="date" class="form-control" required value={moment(formData.validation_date).format('YYYY-MM-DD')} onChange={(e) => {handleFormEdit(e,'validation_date')}}/>
                </div>

                <div class="mb-3">
                    <label for="horario" class="form-label">Horário</label>
                    <input  id="horario" type="time" class="form-control" min="08:00" max="15:00" required value={formData.horario} onChange={(e) => {handleFormEdit(e,'horario')}}/>
                </div>

                <div class="mb-3">
                    <label for="blood_type" class="form-label">Tipo de Sangue</label>
                    <select id="blood_type" class="form-control" value={formData.blood_type} onChange={(e) => {handleFormEdit(e,'blood_type')}}>
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