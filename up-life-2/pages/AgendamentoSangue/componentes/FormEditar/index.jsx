import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import moment from 'moment';
import 'moment-timezone';
import Link from 'next/link';
import { useRouter } from 'next/router';

import style from '../../../../styles/AgendamentoSangue.module.css';

export default function Form (){
    const router = useRouter();
    const { id } = router.query;

    // Montando formulario para enviar ao backend
    const [formData, setFormData] = useState({
        donation_type: 'SAN',
        scheduled_date: '',
        recipient:'1',
        donor: '',
    });

    useEffect(() => {
        // Função para buscar os dados do agendamento com base no ID
        const fetchAppointment = async () => {
            const token = Cookies.get('token');
            if (!token) {
                throw new Error('Token não encontrado no cookie');
            }
          try {
            const response = await fetch(`http://localhost:8000/api/donations/donation-appointment/${id}/`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Token ' + token
              },
            });
      
            if (response.ok) {
              const appointmentData = await response.json();
              appointmentData.scheduled_date = moment(appointmentData.scheduled_date, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
              setFormData(appointmentData);
            } else {
              throw new Error('Falha ao buscar os dados do agendamento');
            }
          } catch (error) {
            console.error(error);
          }
        };
      
        if (id) {
          fetchAppointment();
        }
      }, [id]);

    console.log(formData);

    const [error, setMsg] = useState('');
    const usuario = Cookies.get('usuario');

    // Variaveis não coletadas do formulario 
    const idUser = Cookies.get('idUser');

    // Atualizar estado do formulario
    const handleFormEdit = (event, name) => {

        // Valida de segunda a sexta
        if(name === 'scheduled_date'){
                var dataSelecionada = new Date(event.target.value);
                var diaSemana = dataSelecionada.getDay();
            
                // 0 = Domingo, 0 = Segunda-feira, ..., 5 = Sábado
                if (diaSemana === 5 || diaSemana === 6) {
                alert("Selecione uma data entre segunda e sexta-feira.");
                event.target.value = ''; // Limpar o valor do campo
                }
        }
        // Concatenando data e horario
        if (name === 'scheduled_date') {
            if(!formData.horario) {
                formData.horario = '08:00';
            }
            setFormData({
              ...formData,
              donor: idUser,
              scheduled_date: event.target.value + ' ' + formData.horario
            });
        } else if (name === 'horario') {
            setFormData({
              ...formData,
              donor: idUser,
              horario: event.target.value,
              scheduled_date: formData.scheduled_date.split(' ')[0] + ' ' + event.target.value,
            });
        } else {
            setFormData({
              ...formData,
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
            console.log(formData, token);

            const response = await fetch(`http://localhost:8000/api/donations/donation-appointment/${id}/`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Token ' + token
                },
                body: JSON.stringify(formData)  
            })
            const json = await response.json();
            
            if(response.status !== 200){
                const errorMessages = Object.keys(json).map(key => `${key}: ${json[key]}`);
                throw new Error(errorMessages.join('\n'));
            }else{
                setMsg('Agendamento atualizado com sucesso!');
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
                    <label for="scheduled_date" class="form-label">Data</label>
                    <input  id="scheduled_date" type="date" class="form-control" required value={moment(formData.scheduled_date).format('YYYY-MM-DD')}  onChange={(e) => {handleFormEdit(e,'scheduled_date')}}/>
                </div>

                <div class="mb-3">
                    <label for="horario" class="form-label">Horário</label>
                    <input  id="horario" type="time" class="form-control" min="08:00" max="15:00" required value={moment(formData.scheduled_date, 'YYYY-MM-DD HH:mm:ss').format('HH:mm:ss')} onChange={(e) => {handleFormEdit(e,'horario')}}/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Local</label>
                    <input id="email" type="email" class="form-control bg-white" required value='Instituto Onco-Hematológico de Anápolis' disabled/>
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