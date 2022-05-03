import React from 'react';
import { HiOutlineLocationMarker} from "react-icons/hi";
import { MdOutlineLocalCafe } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";
const Thridpart = () => {
    return (
        <div>
            <div class="grid-container">
  <div class="grid-item"><HiOutlineLocationMarker/>
  <h2>Our outlets</h2>
  <p>Our cafe location</p>
  </div>
  <div class="grid-item"><MdOutlineLocalCafe/><br/>
  Qulity of our coffees
  </div>
  <div class="grid-item"><BsCupStraw/><br/>
  Our coffee delivary services
  </div> 
  </div>
        </div>
    );
};

export default Thridpart;