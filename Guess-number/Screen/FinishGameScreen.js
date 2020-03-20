import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const FinishGameScreen = props => {
    return(
        <View style={styles.container}>
            <Text>
                Game Over
            </Text>
            <Text>
                Number of rounds: {props.roundsNumber}
            </Text>
            <Text>
                Number was: {props.userNumber}
            </Text>
            <Button title="Restart" onPress={props.onRestart} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FinishGameScreen;