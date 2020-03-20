import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './HeaderFolder/Header';
import StartGameScreen from './Screen/StartGameScreen';
import MainGameScreen from './Screen/MainGameScreen';
import FinishGameSceen from './Screen/FinishGameScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);

    const restartGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
    };

    const startGameHandler = goalNumber => {
        setUserNumber(goalNumber);
        setGuessRounds(0);
    };

    const finishGameHandler = numOfRounds => {
        setUserNumber(numOfRounds);
    };

    let content = <StartGameScreen onStartGame ={startGameHandler} />;

    if (userNumber && guessRounds == 0) {
        content = ( 
        <MainGameScreen userChoice={userNumber} onFinishGame={finishGameHandler} />
            ); 
    }else if (guessRounds > 0) {
        content = (
        <FinishGameSceen  roundsNumber={guessRounds} userNumber={userNumber} onRestart={restartGameHandler} />
        );
    }

  return (
    <View style= {styles.container}>
       <Header title="Guess"/>
       {content}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});






