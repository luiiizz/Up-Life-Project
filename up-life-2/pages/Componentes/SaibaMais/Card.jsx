import style from '../../../styles/SaibaMais.module.css';

const Card = ({children}) => {
    return (
        <div className={style.Card2}>
            
            {children}

            <button className="btn btn-danger ver-mais" type="button" >Ver mais</button>
        </div>
    )
}


export default Card;