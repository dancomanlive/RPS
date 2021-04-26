import React from "react";
import { Card } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const choiceMap = {
  S: "Scissors",
  P: "Paper",
  R: "Rock",
};
const statusMap = {
  true: "Win",
  false: "Lose",
};

const DecisionBox = (props) => {
  return (
    <Card
      title="Decision Box"
      style={{
        width: "300px",
        height: "250px",
        alignItems: "center",
        marginTop: "15px",
      }}
      bodyStyle={{ textAlign: "center" }}
    >
      <Title level={1} type="warning">
        {choiceMap[props.choice]}
      </Title>
      <Title level={2} mark type="secondary">
        {statusMap[props.status]}
      </Title>
    </Card>
  );
};

export default DecisionBox;
