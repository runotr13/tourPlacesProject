
import './Card.css';
const Card = ({veri}) => {
    
return (
    <div className='card-container'>
        {veri.map((eleman) =>{
            const{id,title,desc,image} = eleman;
            return(
            <div className="card" key={id}>
            <h2 className="card-title">{title}</h2>
            <div className="card_hover">
                <img src={image} className="card-image" alt="resim"/>
            </div>
            <div className="description">
                <p className="card-description">{desc}</p>
            </div>
            </div>
        )
        })}
    </div>
)
    }

export default Card
