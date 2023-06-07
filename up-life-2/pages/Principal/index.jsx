/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Henrique Bispo 
DATA: 26/03/2023 */

'use client';
import Head from 'next/head';

import style from '../../styles/Principal.module.css';
import Header from '../Componentes/Header';
import Apresentacao from '../Componentes/Apresentacao';
import SaibaMais from '../Componentes/SaibaMais';


function Principal() {

  return (
    <div className={style.Principal}>

      <Head>
        <title>Up Life</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href='blood.png'></link>
        {/* <!-- Trazendo Bootstrap para projeto --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>

      <Header></Header>
      <Apresentacao></Apresentacao>
      <SaibaMais></SaibaMais>

    </div>
  )
  
}

export default Principal;
