import { useState } from "react";


function Card({id, image,info,price,name,removeTour}){
    const [readmore,setReadmore] = useState(false);
    const decription = readmore ? info: `${info.substring(0,200)}....`
    function readmoreHandler(){
        setReadmore(!readmore);   
    }
     
    return(
       <div className="card">
            <img src={image} className="image" alt=""></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {decription}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less`: `read more`}
                    </span>
                </div>
            </div>
            <div className="buttons">
            <button className="btn-red" onClick={()=> removeTour(id)}>Not Interested</button>
            <button className="btn-red">visit</button>
            </div>

       </div>
    );
}
export default Card;