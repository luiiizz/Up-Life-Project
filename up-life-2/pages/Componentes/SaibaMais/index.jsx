import Image from 'next/image';
import Card from './Card';

import style from '../../../styles/SaibaMais.module.css';
import Ellipse1 from '../../../public/saibaMais/Ellipse1.png';
import Ellipse2 from '../../../public/saibaMais/Ellipse2.png';
import Ellipse3 from '../../../public/saibaMais/Ellipse3.png';
import Ellipse4 from '../../../public/saibaMais/Ellipse4.png';
import Ellipse5 from '../../../public/saibaMais/Ellipse5.png';

const SaibaMais = () => {
    return (
        <div className={style.SaibaMais}>
            <h2>Saiba Mais</h2>
            
            <div>
                <Card>
                    <Image className={style.Ellipse} src={Ellipse1} alt=""/>
                    <label>Perguntas frequentes</label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Card>

                <Card>
                    <Image className={style.Ellipse} src={Ellipse2} alt=""/>
                    <label>Doação Urgente</label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Card>
                
                <Card>
                    <Image className={style.Ellipse} src={Ellipse3} alt=""/>
                    <label>Como doar sangue</label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Card>

                <Card>
                    <Image className={style.Ellipse} src={Ellipse4} alt=""/>
                    <label>Como doar medicamentos</label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Card>  

                <Card>
                    <Image className={style.Ellipse} src={Ellipse5} alt=""/>
                    <label>Pré-triagem </label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Card>
            </div>

    </div>
    )
}


export default SaibaMais;

