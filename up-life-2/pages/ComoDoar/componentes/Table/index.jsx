
import style from '../../../../styles/ComoDoar.module.css';

const Table = () =>{
    return  (
        <div className={style.Table}>
            
            <div className="card">
                <div className="card-body">

                    <table class="table caption-top">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Requisitos para doar:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td> Não estar em jejum</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>  
                                <td>Ter entre 16 e 69 anos </td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td>Pesar no mínimo 50kg</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td>Não estar grávida ou amamentando</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td>Não ter feito uso de drogas injetáveis</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>  
                                <td>Estar em boas condições de saúde e se sentir bem</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td>Não ter consumido bebida alcoólica nas últimas 24 horas</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td>Não ter feito tatuagem ou piercing nos últimos 12 meses</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td>Não ter recebido transfusão de sangue nos últimos 12 meses</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td>Não ter tido relações sexuais sem preservativo nos últimos 12 meses</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td>Não ter tido doença de Chagas, hepatite B e C, AIDS (HIV), sífilis, malária, ...</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td>Apresentar um documento oficial com foto (RG, carteira de motorista, carteira de trabalho, ...</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card mt-2">
                <div className="card-body">

                    <table class="table caption-top">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tempo estimado para intervalo de doação:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td> Homens - 60 dias (máximo de 04 doações nos últimos 12 meses).</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>  
                                <td>Mulheres - 90 dias (máximo de 03 doações nos últimos 12 meses).</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card mt-2">
                <div className="card-body">

                    <table class="table caption-top">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">O que fazer Pós-doação:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td> Descansar por alguns minutos.</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td> Não fumar nas próximas duas horas.</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td> Evitar o consumo de bebidas alcoólicas no mesmo dia.</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>  
                                <td> Manter-se hidratado, bebendo líquidos como água ou sucos.</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td> Evitar esforços físicos intensos e exposição prolongada ao sol.</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td> Evitar dirigir por pelo menos 30 minutos, caso tenha se sentido tonto ou fraco após a doação.</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card mt-2">
                <div className="card-body">

                    <table class="table caption-top">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Sintomas e o que fazer ao apresentar características pós-doação:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>  
                                <td> Fraqueza: Descansar, beber líquidos e comer alimentos leves e saudáveis.</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td> Náuseas: Descansar e beber líquidos em pequenas quantidades até se sentir melhor.</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>
                                <td> Tontura: Sentar-se ou deitar-se com a cabeça entre os joelhos até a tontura passar.</td>
                            </tr>
                            <tr>
                                <th scope="row" className={style.ponto}>.</th>  
                                <td> Palidez: Descansar, elevar as pernas e cobrir-se com um cobertor até recuperar a cor normal.</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            
       </div>
    );
};


export default Table;