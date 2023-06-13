import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import 'moment/locale/pt-br';
import style from '../../../../styles/AgendamentoSangue.module.css';
import Excluir from '../../../../public/excluir.png';
import Editar from '../../../../public/editar.png';

const Table = () =>{

    const DonationList = () => {
        const [donations, setDonations] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const token = Cookies.get('token'); // Obter o valor do token do cookie
              const idUser = Cookies.get('idUser');

              if (!token) {
                throw new Error('Token não encontrado no cookie');
              }
      
              const response = await fetch(`http://localhost:8000/api/donations/donation-appointment/donor/${idUser}`, {
                headers: {
                  'Authorization': `Token ${token}`, // Adicionar o token ao cabeçalho de autorização
                },
              });
      
              if (!response.ok) {
                throw new Error('Erro ao fazer a requisição');
              }
      
              const data = await response.json();
              setDonations(data);

              console.log(data);
            } catch (error) {
              console.error('Erro ao fazer a requisição:', error);
            }
          };
      
          fetchData();
        }, []);

        return donations
    };

    const donations = DonationList();


    const handleDelete = (id) => {
      const confirmed = window.confirm('Tem certeza de que deseja excluir este registro?');
      const token = Cookies.get('token');

      if (confirmed) {
        axios.delete(`http://localhost:8000/api/donations/donation-appointment/${id}/`, {
          headers: {
            'Authorization': `Token ${token}`
          }
        })
          .then(() => {
            alert('Excluído com sucesso!');
            self.location = '/AgendamentoSangue'
            // Faça qualquer ação adicional após a exclusão, como recarregar os dados ou atualizar a interface.
          })
          .catch((error) => {
            alert('Ocorreu um erro ao excluir o registro.');
            console.error(error);
          });
      }
    };

    const router = useRouter();

    const handleEdit = (id) => {
      router.push(`/AgendamentoSangue/editarAgendamento/${id}`);
    };

    return  (
        <div className={style.Table}>
            
            <div className="card mt-4">
                <div className="card-body">

                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Data</th>
                                <th scope="col">Horario</th>
                                <th scope="col">Instituição</th>
                                <th scope="col">Doador</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations.map((donation) => (
                                <tr key={donation.id}>
                                    <td>{donation.id}</td>
                                    <td>{moment(donation.scheduled_date, 'DD/MM/YYYY HH:mm:ss').format('L')}</td>
                                    <td>{moment(donation.scheduled_date, 'DD/MM/YYYY HH:mm:ss').format('LT')}</td>
                                    <td>Instituto Onco-Hematológico de Anápolis</td>
                                    <td>{Cookies.get('name')}</td>
                                    <td><Image className={style.lixeira} src={Editar} height={27} onClick={() => handleEdit(donation.id)}/></td>
                                    <td><Image className={style.lixeira} src={Excluir} height={27} onClick={() => handleDelete(donation.id)}></Image></td>
                                </tr>
                            ))}
                                
                        </tbody>
                    </table>
                </div>
            </div>
            
       </div>
    );
};


export default Table;