'use client';
import Image from 'next/image';
import Link from 'next/link';

import style from '../../../styles/Header.module.css';
import Logo from '../../../public/logo.png';

const Header = () =>{
    return  (
        <div className={style.Header}>

            <div className={style.Logo}>
                <Image src={Logo} alt="Logo"/> <label>UpLife</label>
            </div>
            
            <ul className={style.MenuList}>
                
                <li className={style.ItemList}>
                    <a href="#">Como doar</a>
                    </li>
                <li className={style.ItemList}>
                    <a href="#">Hemocentros</a>
                    </li>
                <li className={style.ItemList}>
                    <a href="#">Medicamentos</a>
                    </li>
                
            </ul>
            

           <Link href='/Cadastro'><button type='button' className={style.Botao}>ENTRAR</button></Link>

            
        </div>
    )
};


export default Header;