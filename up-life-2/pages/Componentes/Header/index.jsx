'use client';
import Image from 'next/image';
import Link from 'next/link';

import style from '../../../styles/Header.module.css';
import Logo from '../../../public/logo.png';

const Header = () =>{

    function EmDes(){
        alert("Em desenvolvimento!!");
    }
    
    return  (
        <div className={style.Header}>

            <div className={style.Logo}>
                <Image src={Logo} alt="Logo"/> <label>UpLife</label>
            </div>
            
            <ul className={style.MenuList}>
                
                <li className={style.ItemList}>
                    <Link href="/"> <a href="#">Ínicio</a></Link>
                        </li>

                <li className={style.ItemList}>
                   <Link href="/ComoDoar"> <a href="#">Como doar</a></Link>
                    </li>
                <li className={style.ItemList} onClick={EmDes}>
                    <a href="#">Hemocentros</a>
                    </li>
                <li className={style.ItemList} onClick={EmDes}>
                    <a href="#">Medicamentos</a>
                    </li>
                
            </ul>
            

           <Link href='/Cadastro'><button type='button' className={style.Botao}>ENTRAR</button></Link>

            
        </div>
    )
};


export default Header;