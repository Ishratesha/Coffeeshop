import React from 'react';
import ln from '../assets/landpic.png';
const Landingpage = () => {
    return (
        
            
               
               
                <div >
             
                    
                    <div className='container-land'>
                         <div className='text-land'>
                    <h1>Good Coffee will always Find the audience </h1>
                    <h3>We provide a variety of uniques and best Coffee</h3>
                    <button><a href="/coffees">Shop Now </a></button>
                   </div>
                    <div> <img className='landpic'src={ln}></img> </div>
                    </div>
                    
            </div>
        
    );
};

export default Landingpage;