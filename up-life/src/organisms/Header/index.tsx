import * as S from './styles'

import Logo from '../../molecules/Logo'
import Button from '../../atomos/Button'
import Menu from '../Menu'

const Header = () =>{
    return  <S.Box>
            <Logo></Logo>
            <Menu></Menu>
            <Button></Button>
        </S.Box>;
};


export default Header;