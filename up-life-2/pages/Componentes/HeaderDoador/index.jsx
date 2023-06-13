'use client';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';

import style from '../../../styles/HeaderDoador.module.css';
import Logo from '../../../public/logo.png';

const HeaderDoador = ({ title, button }) =>{

    function EmDes(){
        alert("Em desenvolvimento!!");
    }

    const handleLogout = () => {
        Cookies.remove('token');
    }
    
    return  (
        <div className={style.HeaderDoador}>

            <div className={style.Logo}>
                <Link href="/" className={style.link}>
                    <Image src={Logo} alt="Logo"/> <label>UpLife</label>
                </Link>
            </div>
            
            <div className={style.titulo}>
                {title}
            </div>

            <ul className={style.MenuList}>
                
                <li className={style.ItemList}>
                    <Link href="/">Ínicio</Link>
                        </li>

                <li className={style.ItemList}>
                   <Link href="/AgendamentoSangue">Minhas Doações</Link>
                    </li>
                
                <li className={style.ItemList}>
                   <Link href="/AgendamentoSangue/novoAgendamento">Nova Doação</Link>
                    </li>
            </ul>

            <div>
                <Link href='/'><button type='button' className={style.Botao} onClick={handleLogout}>Sair</button></Link>
            </div>
            
        </div>
    )
};


export default HeaderDoador;