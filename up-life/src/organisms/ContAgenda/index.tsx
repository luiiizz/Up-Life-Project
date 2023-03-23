import * as S from './styles'

const Header = () =>{
    return  <S.Box>
        <p>
            A agenda é disponibilizada para os próximos 10 dias e todos os dias são liberados novos horários. 
            Caso não encontre vaga, pedimos que tente mais tarde ou contate a Unidade da Hemominas em que deseja comparecer.
        </p>

        <button type="button">Agendar Doação</button>

        </S.Box>;
};


export default Header;