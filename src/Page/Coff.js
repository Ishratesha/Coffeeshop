import React from 'react';


const Coff = (props) => {

//console.log(props)
const{name,img, price} = props.coffee;
    return (
        <div className='card' >
            <img className='coffimg' src={img}></img>
            <h4 className='pro-name'>{name} ----- {price}</h4>
            <button
            onClick={()=>props.handleAddToCart(props.coffee)}
            >Buy</button>
              
              
              
        </div>
    );
};

export default Coff;