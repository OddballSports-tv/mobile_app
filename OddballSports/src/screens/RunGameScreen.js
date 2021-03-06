// part 1 - imports
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import BocceFrameTable from "../components/BocceFrameTable";
import Score from "../components/Score";
import TimerScreen from "../components/TimerScreen";
import Sounds from "../components/Sounds";

// part 2 - create a component
const RunGameScreen = () => {

  // frame state
  const [frameResults, setFrameResults] = useState([]);

  // game state
  const [gameResults, setGameResults] = useState({
    id: "9423de4a-ad8f-486d-867b-c71339889474",
    teams: {
      team_a: {
        name: "The FCC",
        color: "blue",
        score: 0,
        players: [
          "Alex Gara",
          "Scott Sanville",
          "Player 3",
          "Nick Player"
        ]
      },
      team_b: {
        name: "Hiss of Death",
        color: "magenta",
        score: 0,
        players: [
          "Lydia Gara",
          "Elizabeth Dias",
          "Libby Priveti",
          "Alicia Harvey"
        ]
      }
    },
  });

  return (
    <View>
      <Score
        gameResults={gameResults}
        onChangeGameResults={setGameResults}
        frameResults={frameResults}
      />
      <TimerScreen />
      <Sounds />
      <BocceFrameTable
        gameResults={gameResults}
        onChangeGameResults={setGameResults}
        frameResults={frameResults}
        onChangeFrameResults={setFrameResults}
      />
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({

});

// part 4 - export the component
export default RunGameScreen;