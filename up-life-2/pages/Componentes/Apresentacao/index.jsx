import Image from 'next/image';
import Link from 'next/link';

import style from '../../../styles/Apresentacao.module.css';
import Profissionais from '../../../public/prof1.png';

const Apresentacao = () =>{
    return  (
        <div className={style.Apresentacao}>
            <div className={style.Container_Agenda}>
                <p>
                    A agenda é disponibilizada para os próximos 10 dias e todos os dias são liberados novos horários. 
                    Caso não encontre vaga, pedimos que tente mais tarde ou contate a Unidade da Hemominas em que deseja comparecer.
                </p>

                <Link href='/Cadastro'><button type="button">Agendar Doação</button></Link>
            </div>

            <div className={style.ImgProf}>
                <Image className={style.Profissionais} src={Profissionais}></Image>
            </div>
            
       </div>
    );
};


export default Apresentacao;