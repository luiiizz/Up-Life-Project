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
                <Link href="/" className={style.link}>
                    <Image src={Logo} alt="Logo"/> <label>UpLife</label>
                </Link>
            </div>
            
            <ul className={style.MenuList}>
                
                <li className={style.ItemList}>
                    <Link href="/">Ínicio</Link>
                        </li>

                <li className={style.ItemList}>
                   <Link href="/ComoDoar">Como doar</Link>
                    </li>
                    
                <li className={style.ItemList} onClick={EmDes}>
                    <Link href="/">Hemocentro</Link>
                    </li>

                <li className={style.ItemList} onClick={EmDes}>
                    <Link href="/">Campanhas</Link>
                    </li>
                
            </ul>
            

           <Link href='/Login'><button type='button' className={style.Botao}>Entrar</button></Link>

            
        </div>
    )
};


export default Header;