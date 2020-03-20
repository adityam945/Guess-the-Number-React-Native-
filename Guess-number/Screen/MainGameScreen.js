import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card'; 

const numberGenerate = (minimium, maximum, dump) => {
    minimium =Math.ceil(minimium);
    maximum =Math.floor(maximum);
    const randomNumber = Math.floor(Math.random() * (maximum - minimium)) + minimium;
    if (randomNumber === dump) {
        return numberGenerate(minimium, maximum, dump);
    }
    else {
        return randomNumber;
    }
};

const MainGameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        numberGenerate(1, 100, props.userChoice));

        const [rounds, setRounds] = useState(0);
        const currentLow = useRef(1);
        const currentHigh = useRef(100);

        const {userChoice, onFinishGame } = props;

        useEffect(  () => {
            if (currentGuess === userChoice){
                onFinishGame(rounds);
            }
        }, [currentGuess, userChoice, onFinishGame]
        );
        
        const nextGuessHandler = direction => {
         if((direction === 'Lower' && currentGuess < props.userChoice)|| 
         (direction === 'Greater' && currentGuess > props.userChoice)){
           Alert.alert('Ah! Ah!','There was mistake by your side :)',
            [
                {text:'Sorry', style: 'cancel'}
        ]);
        return;
         }
         if(direction === 'Lower'){
             currentHigh.current = currentGuess;
         }
         else{
             currentLow.current = currentGuess;
         }
         const nextNumber = numberGenerate(
            currentLow.current, 
            currentHigh.current, 
            currentGuess
            );
         setCurrentGuess(nextNumber);
         setRounds(curRounds => curRounds + 1);
        };


    return (
     <View style={styles.mainContainer}>
         <Text>Present Number</Text>
         <NumberContainer>
             {currentGuess}
         </NumberContainer>
         <Card style={styles.cardContainer}>  
             <Button title="Lower" onPress={nextGuessHandler.bind(this, 'Lower')} />
             <Button title="Higher" onPress={nextGuessHandler.bind(this, 'Greater')} />
         </Card>
     </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:15,
        alignItems:'center'
    },
    cardContainer:{
        flexDirection:'row',
        padding: 15,
        justifyContent: 'space-around',
        marginTop: 18,
        width:300,
        maxWidth: '80%'
    }
});

export default MainGameScreen;