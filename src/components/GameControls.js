import React from "react";
import { Card } from "antd";
import { Button } from "antd";

import "antd/dist/antd.css";

const GameControls = ({choiceUpdate, isActive}) => {
  return (
    <Card
      title="Controls"
      style={{ width: "300px", height: "250px", alignItems: "center" }}
    >
      <p style={{ alignItems: "center" }}>
        <Button
          type="dashed"
          size="large"
          shape="round"
          block
          onClick={() => choiceUpdate("R")}
          disabled={!isActive}
        >
          Rock
        </Button>
      </p>

      <p style={{ alignItems: "center" }}>
        {" "}
        <Button
          type="dashed"
          size="large"
          shape="round"
          block
          onClick={() => choiceUpdate("P")}
          disabled={!isActive}
        >
          Paper
        </Button>
      </p>

      <p style={{ alignItems: "center" }}>
        <Button
          type="dashed"
          size="large"
          shape="round"
          block
          onClick={() => choiceUpdate("S")}
          disabled={!isActive}
        >
          Scissors
        </Button>
      </p>
    </Card>
  );
};

export default GameControls;
