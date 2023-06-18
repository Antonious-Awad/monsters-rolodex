import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = (props) => {
  
    
  let { monsters } = props;
  return(
    <div className="card-list">
    {
      monsters.map(index=>{
        return(
          <Card monster={index}/>
        )
      })
    }
    </div>
  );
}

export default CardList