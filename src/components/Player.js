import React from "react";
import GameControls from "./GameControls";
import DecisionBox from "./DecisionBox";

const Player = ({choiceUpdate, active, status, choice}) => {
  let glowEffect = {};
  if (active) {
    glowEffect = {
      "-webkit-box-shadow": "0 0 20px blue",
      "-moz-box-shadow": "0 0 20px blue",
      "box-shadow": "0 0 20px blue",
    };
  }

  return (
    <div style={glowEffect}>
      <GameControls choiceUpdate={choiceUpdate} isActive={active} />
      <DecisionBox choice={choice} status={status} />
    </div>
  );
};

export default Player;
