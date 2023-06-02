
import style from '../../../../styles/ComoDoar.module.css';

const Table = () =>{
    return  (
        <div className={style.Table}>
            
            <div className="card">
                <div className="card-body">

                    <table class="table caption-top">
                        <caption>Lista de requisitos</caption>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Requsito</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td> Não estar em jejum</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Ter entre 16 e 69 anos </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Pesar no mínimo 50kg</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Não estar grávida ou amamentando</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Não ter feito uso de drogas injetáveis</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Estar em boas condições de saúde e se sentir bem</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Não ter consumido bebida alcoólica nas últimas 24 horas</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Não ter feito tatuagem ou piercing nos últimos 12 meses</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Não ter recebido transfusão de sangue nos últimos 12 meses</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Não ter tido relações sexuais sem preservativo nos últimos 12 meses</td>
                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td>Não ter tido doença de Chagas, hepatite B e C, AIDS (HIV), sífilis, malária, ...</td>
                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td>Apresentar um documento oficial com foto (RG, carteira de motorista, carteira de trabalho, ...</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            
       </div>
    );
};


export default Table;