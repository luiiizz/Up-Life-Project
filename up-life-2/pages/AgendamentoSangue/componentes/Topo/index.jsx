import Image from "next/image"
import Link from "next/link";

import style from '../../../../styles/AgendamentoSangue.module.css';

export default function Topo (){
    return (
        <>  

            <div className={style.Topo}>
               <Link href="/AgendamentoSangue"> <Image src="/back.png"
                    width={60}
                    height={60}/>
                </Link>
                
                <div>
                    <Image src="/logo2.png"
                    width={120}
                    height={120}/>
                    <h3>Agendar Doação</h3>
                    <p> <Image class="m-2" src="/schedule.png"
                    width={30}
                    height={30}/>Horários disponiveis para doação: Segunda à sexta das 08h às 15h</p>
                </div>
            </div> 
        </>
    )
}