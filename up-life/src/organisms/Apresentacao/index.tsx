import * as S from './styles'

import ContAgenda from '../ContAgenda'
import ImgProfissionais from '../../molecules/ImgProfissionais';

const Apresentacao = () =>{
    return  <S.Box>
        <ContAgenda></ContAgenda>
        <ImgProfissionais></ImgProfissionais>
    </S.Box>;
};


export default Apresentacao;