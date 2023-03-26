import Image from "next/image"
import Link from "next/link";

import style from '../../../../styles/Cadastro.module.css';

export default function Topo (){
    return (
        <>  

            <div className={style.Topo}>
               <Link href="/"> <Image src="/back.png"
                    width={60}
                    height={60}/>
                </Link>
                
                <div>
                    <Image src="/logo2.png"
                    width={120}
                    height={120}/>
                    <h3>Cadastro</h3>
                </div>
            </div> 
        </>
    )
}