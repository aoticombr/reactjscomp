﻿import React, { useState } from "react";
import "./SmallBox.css";
import "react-circular-progressbar/dist/styles.css";
import {AnimateSharedLayout} from "framer-motion";
import img from "../../imgs/svg/bag.svg";


// parent Card

const SmallBox = (props:any) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      <div class="col-lg-3 col-6">
          
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{props.valor}</h3>

                <p>{props.titulo}</p>
              </div>
              <div class="icon">
                
              <img src={img} width={'50'} heigth={'50'} />
              </div>
              <a href="#" class="small-box-footer">
              {props.titulo2} <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
    </AnimateSharedLayout>
  );
};

export default SmallBox;
