import React,{useState,useEffect} from 'react';
import Coff from './Coff';

const Coffee = () => {
    const [coffees, setcoffees] = useState([]);
    
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setcoffees(data));
    }, [])

    
    return (
        <div className='shop-container'>
            <div className='coffees-con'>
                    
                    {
                        coffees.map(coffee =><Coff coffee={coffee}>

                        </Coff>)
                    }
            </div>
            <div className='order'>

            </div>
            
        </div>
    );
};

export default Coffee;