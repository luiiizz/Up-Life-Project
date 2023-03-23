import { useState } from 'react'

import Frontend from '../templates/Frontend';
import * as S from './styles';

import Header from '../organisms/Header';
import Apresentacao from '../organisms/Apresentacao';
import SaibaMais from '../organisms/SaibaMais';

function Main() {

  return (<Frontend> 
    
    <S.Container>
      <Header></Header>
      <Apresentacao></Apresentacao>
      {/* <SaibaMais></SaibaMais> */}
    </S.Container>

  </Frontend>
  )
  
}

export default Main;
