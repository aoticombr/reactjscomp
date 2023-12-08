import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card

export const Card = (props:any) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard(props:any) {
  const Png = props.param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: props.param.color.backGround,
        boxShadow: props.param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={props.setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={props.param.barValue}
          text={`${props.param.barValue}%`}
        />
        <span>{props.param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${props.param.value}</span>
        <span>{props.param.title}</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard(props:any) {
  console.log('param.series............');
  console.log(props.param.series[0].data_x);
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
         // format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "string",
        categories: props.param.series[0].data_y,
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: props.param.color.backGround,
        boxShadow: props.param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={props.setExpanded} />
      </div>
        <span>{props.param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={props.param.series} type="area" />
      </div>
      <span>{props.param.title2}</span>
    </motion.div>
  );
}

export default Card;
