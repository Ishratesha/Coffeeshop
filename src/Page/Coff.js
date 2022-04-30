import React from 'react';

const Coff = (props) => {
console.log(props.coffee);
const{name,img, price} = props.coffee;
    return (
        <div className='card' >
            <img className='coffimg' src={img}></img>
            <h4>{name} ----- {price}</h4>
            <button>Buy</button>
              
        </div>
    );
};

export default Coff;