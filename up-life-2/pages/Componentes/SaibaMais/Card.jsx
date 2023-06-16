import style from '../../../styles/SaibaMais.module.css';

const Card = ({children, verMais}) => {
    
    return (
        <div className={style.Card2}>
            
            {children}

            {verMais}

        </div>
    )
}


export default Card;