/* Curso de Engenharia de Software - UniEVANGÉLICA
Integrantes: Luiz Henrique Bispo / Lorraynne Annyelly / Carlos Eduardo Cunha / Caíque Oliveira / Iãh Uchoa / Guilherme Moura
Disciplina: Sistemas Gerenciadores de Banco de Dados
Data: 20/03/2023
Orientador: Eduardo Souza*/

'use client';
import Head from 'next/head';
import Link from 'next/link';

import HeaderDoador from '@/pages/Componentes/HeaderDoador';
import Topo from '../componentes/Topo';
import FormEditar from '../componentes/FormEditar';

import style from '../../../styles/AgendamentoSangue.module.css';

function AgendamentoSangue() {

  return (
    <div className={style.AgendamentoSangue}>

      <Head>
        <title>Up Life</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href='/blood.png'></link>
        {/* <!-- Trazendo Bootstrap para projeto --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>

      <HeaderDoador 
        button={ <Link href='/'><button type='button' className={style.botaoNova}>Sair</button></Link>}
      />

      <div class='card mt-4' id={style.card_cadastro}>
        <Topo>Editar Doação</Topo>
        <FormEditar/>
      </div>

    </div>
  )
  
}

export default AgendamentoSangue;