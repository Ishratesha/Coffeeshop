import React,{useState,useEffect} from 'react';
import Cart from './Cart';
import Coff from './Coff';
import './coffee.css'
const Coffee = () => {
    const [coffees, setcoffees] = useState([]);
    const [cart, setCart] =useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setcoffees(data));
    }, [])

    const handleAddToCart =(coffee) =>{
        
        const newCart =[...cart,coffee];
        setCart(newCart)
    }
    
    return (
        <div className='shop-container'>
            <div className='products-container'>
                    
                    {
                        coffees.map(coffee =><Coff 
                         key ={coffee.key}
                        coffee={coffee}
                        handleAddToCart={handleAddToCart}>
                        </Coff>)
                    }
            </div>
            <div className='cart-container'>
          
                           
                <h4>Order Summary</h4>
                <h4></h4>
                 <h4>Order Item {cart.length}</h4>
            </div>
            
        </div>
    );
};

export default Coffee;