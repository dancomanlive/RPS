import React, { Component, useState, useEffect, useReducer } from "react";
import { Row, Col, Divider } from "antd";
import { Typography } from "antd";
import "antd/dist/antd.css";

import Player from "./Player";
const { Title } = Typography;

// this fn creates the properties of the objects from the combinations array
const rockPaperScissors = (rounds) => {
  if(rounds === 0) return []
  const throwOptions = ["R", "P", "S"]
  const solutions = []

  const combinations = (solution = '') => {
    if(solution.length === rounds){
      return solutions.push(solution)
    }
    throwOptions.forEach(option => {
      combinations(solution + option)
    })
  }
  combinations()
  return solutions
}

// the values of the properties of the combination array are hard coded for now.
const combinations = [
    {"PPP": [  false,  false,  false   ]},
    {"PPR": [  true,   true,   false   ]},
    {"PPS": [  false,  false,  true    ]},
    {"PRP": [  true,   false,  true    ]},
    {"PRR": [  true,   false,  false   ]},
    {"PRS": [  false,  false,  false   ]},
    {"PSP": [  false,  true,   false   ]},
    {"PSR": [  false,  false,  false   ]},
    {"PSS": [  false,  true,   true    ]},
    {"RPP": [  false,  true,   true    ]},
    {"RPR": [  false,  true,   false   ]},
    {"RPS": [  false,  false,  false   ]},
    {"RRP": [  false,  false,  true    ]},
    {"RRR": [  false,  false,  false   ]},
    {"RRS": [  true,   true,   false   ]},
    {"RSP": [  false,  false,  false   ]},
    {"RSR": [  true,   false,  true    ]},
    {"RSS": [  true,   false,  false   ]},
    {"SPP": [  true,   false,  false   ]},
    {"SPR": [  false,  false,  false   ]},
    {"SPS": [  true,   false,  true    ]},
    {"SRP": [  false,  false,  false   ]},
    {"SRR": [  false,  true,   true    ]},
    {"SRS": [  false,  true,   false   ]},
    {"SSP": [  true,   true,   false   ]},
    {"SSR": [  false,  false,  true    ]},
    {"SSS": [  false,  false,  false   ]}
]

const initialChoices = {
  player1: null,
  player2: null,
  player3: null,
};
 
const choiceReducer = (state, action) => {
  switch (action.type) {
    case 'player1':
      return { ...state, player1: action.value };
    case 'player2':
      return { ...state, player2: action.value };
    case 'player3':
      return { ...state, player3: action.value };
    case 'resetChoices':
      return initialChoices;
    default:
      return state;
  }
}

const initialActiveState = {
  player1: true,
  player2: false,
  player3: false,
};
 
const activeStateReducer = (state, action) => {
  switch (action.type) {
    case 'player1':
      return { ...state, player1: action.value };
    case 'player2':
      return { ...state, player2: action.value };
    case 'player3':
      return { ...state, player3: action.value };
    case 'resetActiveState':
      return initialActiveState;
    default:
      return state;
  }
}

function Controller() {
  const [choice, dispatchChoice] = useReducer(choiceReducer, initialChoices);
  const [active, dispatchActive] = useReducer(activeStateReducer, initialActiveState);
  const [activeGame, setActiveGame] = useState(false)
  const [selected, setSelected] = useState([])


  useEffect(() => {
    if (choice.player1 && choice.player2 && choice.player3) {
      const gameSelection = choice.player1 + choice.player2 + choice.player3
      const game = combinations.filter(combination => combination[gameSelection])
      setSelected(game[0][gameSelection])
      setActiveGame(true)
    }
  }, [choice.player1, choice.player2, choice.player3])


  const choiceUpdate = (player, choice) => {
    if (activeGame) {
      dispatchChoice({type: "resetChoices"})
      setSelected([])
      setActiveGame(false)
    }
    dispatchActive({type: player, value: !active[player]})
    let currentPLayer = player.slice(-1)
    let nextPLayer = ++currentPLayer
    dispatchActive({type: `player${nextPLayer}`, value: !active[`player${nextPLayer}`]})
    dispatchChoice({type: player, value: choice})
    if (nextPLayer > 3) {
      dispatchActive({type: "resetActiveState"})
    }
  };

  return (
    <Row justify="space-around" align="middle">
      <Col className="gutter-row" xs={15} sm={15} md={5} lg={5}>
        <Title level={3}>Player One</Title>
        <Player
          active={active.player1}
          choiceUpdate={(choice) => choiceUpdate("player1", choice)}
          choice={choice.player1}
          status={selected[0]}
        />
      </Col>

      <Col className="gutter-row" xs={15} sm={15} md={5} lg={5}>
        <Title level={3}>Player Two</Title>
        <Player
          active={active.player2}
          choiceUpdate={(choice) => choiceUpdate("player2", choice)}
          choice={choice.player2}
          status={selected[1]}
        />
      </Col>

      <Col className="gutter-row" xs={15} sm={15} md={5} lg={5}>
        <Title level={3}>Player Tree</Title>
        <Player
          active={active.player3}
          choiceUpdate={(choice) => choiceUpdate("player3", choice)}
          choice={choice.player3}
          status={selected[2]}
        />
      </Col>
    </Row>
  );
}

export default Controller;
