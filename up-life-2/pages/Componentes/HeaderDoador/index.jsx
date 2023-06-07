'use client';
import Image from 'next/image';
import Link from 'next/link';

import style from '../../../styles/HeaderDoador.module.css';
import Logo from '../../../public/logo.png';

const HeaderDoador = ({ title, button }) =>{

    function EmDes(){
        alert("Em desenvolvimento!!");
    }
    
    return  (
        <div className={style.HeaderDoador}>

            <div className={style.Logo}>
                <Image src={Logo} alt="Logo"/> <label>UpLife</label>
            </div>
            
            <div className={style.titulo}>
                {title}
            </div>
            
            <div className={style.botao}>
                {button}
            </div>
            
        </div>
    )
};


export default HeaderDoador;