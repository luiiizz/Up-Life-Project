import { useState } from 'react'

import Frontend from '../templates/Frontend';
import * as S from './styles';

import Header from '../organisms/Header';
import SaibaMais from '../organisms/SaibaMais';
import Apresentacao from '../organisms/Apresentacao';

function Main() {

  return (<Frontend> 
    <Header></Header>
    <Apresentacao></Apresentacao>
  </Frontend>
  )
  
}

export default Main;
