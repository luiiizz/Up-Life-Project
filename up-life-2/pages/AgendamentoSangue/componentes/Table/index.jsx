import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import style from '../../../../styles/AgendamentoSangue.module.css';

const Table = () =>{

    const DonationList = () => {
        const [donations, setDonations] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const token = Cookies.get('token'); // Obter o valor do token do cookie
              if (!token) {
                throw new Error('Token não encontrado no cookie');
              }
      
              const response = await fetch('http://localhost:8000/api/donations/blood-donation', {
                headers: {
                  'Authorization': `Token ${token}`, // Adicionar o token ao cabeçalho de autorização
                },
              });
      
              if (!response.ok) {
                throw new Error('Erro ao fazer a requisição');
              }
      
              const data = await response.json();
              setDonations(data);

              console.log('data');
            } catch (error) {
              console.error('Erro ao fazer a requisição:', error);
            }
          };
      
          fetchData();
        }, []);

        return donations
    };

    const donations = DonationList()
      

    return  (
        <div className={style.Table}>
            
            <div className="card">
                <div className="card-body">

                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Data</th>
                                <th scope="col">Tipo de Sangue</th>
                                <th scope="col">Bolsa</th>
                                <th scope="col">Instituição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations.map((donation) => (
                                <tr key={donation.id}>
                                    <td>{donation.id}</td>
                                    <td>{donation.validation_date}</td>
                                    <td>{donation.blood_type}</td>
                                    <td>Simples 470 ml</td>
                                    <td>Onco-Hematológico</td>
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