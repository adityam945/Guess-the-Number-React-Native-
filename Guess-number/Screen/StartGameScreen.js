import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert
    } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import constants from '../components/constants';
import Input from '../components/Input';


const StartGameScreen = props => {

   const [numberInput, setnumberInput] = useState('');
   const [start, setStart] = useState(false);
   const [goalNumber, setGoalNumber] = useState();

   const numberInputHandler = inputText => {
       setnumberInput(inputText.replace(/[^0-9]/g, '')) //if anyting other than no 0-9 is addedd g-globally replace by'' (means blank)
   };

   const resetNumberInput = () =>{
       setnumberInput('');
       setStart("false");
   };

   const startGameHandler = () =>{
       const nonNumberCheck = parseInt(numberInput);
       if(isNaN(nonNumberCheck)|| nonNumberCheck <= 0 || nonNumberCheck > 99) //NaN- not a number
       {
           Alert.alert('Enter valid Number', 
            'Enter number between 1 to 99',
             [{text: 'Okay', style: 'destructive', onPress: resetNumberInput }]
             );
           return ;
       }
     setStart(true);
     setGoalNumber(nonNumberCheck);
     setnumberInput('');
     Keyboard.dismiss();
   };
   
   let confirmedOutput;

   if (start) {
       confirmedOutput = (
        <View style={styles.viewWidthContainer}>
           <Card style={styles.summaryContainer}>
           <Text style={{fontWeight:'bold'}}>Chosen Number:</Text>
           <NumberContainer >{goalNumber}</NumberContainer>
           <Button title="START GAME"  onPress={() => props.onStartGame(goalNumber)} />
           </Card>
           </View>
       );
   }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
       <View style = {styles.screen}>
           <Text style={styles.title}>Start Game</Text>
           <Card style={styles.inputContainer}>
               <Text>Select a number</Text>
               <Input style={styles.input} blurOnSubmit
                autoCapitalize ='none' 
                autoCorrect={false} 
                keyboardType="number-pad" 
                maxLength={2}
                onChangeText = {numberInputHandler}
                value={numberInput}
                />
               <View style={styles.buttonContainer}>
                   <View style={styles.buttonSize}>
                       <Button 
                       title= "Reset" 
                       onPress={resetNumberInput}
                       color= {constants.color2}/>
                   </View>
                   <View style={styles.buttonSize}>
                       <Button 
                         title= "Start"
                         onPress={startGameHandler} 
                         color= {constants.color3}/>
                   </View>
               </View>
               </Card>
               {confirmedOutput}
       </View>
       </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10

    },
    title:{
        fontSize:20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        
    }, 
    buttonContainer:{
        flexDirection : 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    buttonSize:{
        width: 100
    },
    input:{
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
     marginTop: 20,
     alignItems: 'center',
     //backgroundColor:'black'
     
    },
    viewWidthContainer: {
        width:'60%',
    },
});

export default StartGameScreen;