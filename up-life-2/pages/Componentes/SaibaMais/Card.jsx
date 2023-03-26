import style from '../../../styles/SaibaMais.module.css';

const Card = ({children}) => {
    function EmDes(){
        alert("Em desenvolvimento!!");
    }
    return (
        <div className={style.Card2}>
            
            {children}

            <button className="btn btn-danger ver-mais" type="button" onClick={EmDes}>Ver mais</button>
        </div>
    )
}


export default Card;