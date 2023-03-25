'use client';
import Image from 'next/image';
import * as S from './styles';
import Logo from '../../../../public/logo.png';

const Header = () =>{
    return  <S.Box>

            <S.Logo>
                <Image src={Logo} alt="Logo"/> <label>UpLife</label>
            </S.Logo>
            
            <S.MenuList>
                <S.ItemList>
                    <a href="#">Pré-triagem</a>
                    </S.ItemList>
                <S.ItemList>
                    <a href="#">Como doar</a>
                    </S.ItemList>
                <S.ItemList>
                    <a href="#">Hemocentros</a>
                    </S.ItemList>
                <S.ItemList>
                    <a href="#">Medicamentos</a>
                    </S.ItemList>
                
            </S.MenuList>
            

            <S.Botao>
                ENTRAR
            </S.Botao>
            
        </S.Box>;
};


export default Header;