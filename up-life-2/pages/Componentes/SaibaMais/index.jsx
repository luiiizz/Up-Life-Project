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
                        Você tem dúvidas sobre a doação de sangue? Nossa aplicação traz uma seção exclusiva de Perguntas Frequentes, 
                        onde você encontrará respostas claras e detalhadas para as questões mais comuns sobre o processo de doação. 
                    </p>
                </Card>

                <Card>
                    <Image className={style.Ellipse} src={Ellipse2} alt=""/>
                    <label>Doação Urgente</label>
                    <p>
                        Imagine poder salvar vidas com apenas alguns minutos do seu tempo. Em nossa seção "Doações Urgentes", 
                        você encontrará casos de pessoas que necessitam de transfusões de sangue de forma urgente para sobreviver.
                    </p>
                </Card>
                
                <Card>
                    <Image className={style.Ellipse} src={Ellipse3} alt=""/>
                    <label>Como doar sangue</label>
                    <p>
                        Você deseja se tornar um doador de sangue, mas não sabe por onde começar? 
                        Não se preocupe, nossa aplicação oferece um guia completo sobre como doar sangue. 
                    </p>
                </Card>

                <Card>
                    <Image className={style.Ellipse} src={Ellipse4} alt=""/>
                    <label>Assistente Virtual</label>
                    <p>
                        Para tornar sua experiência ainda mais fácil e acessível, disponibilizamos
                        uma assistente virtual pronta para lhe ajudar em todas as etapas do processo de doação. 
                        Nossa assistente virtual está disponível 24h por dia, para responder suas perguntas, fornercer orientações e até mesmo agendar sua próxima doação. 
                    </p>
                </Card>  

                <Card>
                    <Image className={style.Ellipse} src={Ellipse5} alt=""/>
                    <label>Pré-triagem </label>
                    <p>
                        Antes de se tornar um doador, é importante saber se você atende aos critérios necessários para a doação de sangue. 
                        Em nossa seção de "Pré-Triagem", você terá a oportunidade de realizar um questionário simples e rápido para verificar se está apto a doar.
                    </p>
                </Card>
            </div>

    </div>
    )
}


export default SaibaMais;

