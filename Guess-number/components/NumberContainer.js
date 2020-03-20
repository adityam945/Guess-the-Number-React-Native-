import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const NumberContainer = props => {
    return(
        <View style= {styles.viewContainer}>
               <Text style={ styles.textContainer}> {props.children} </Text>
           </View>
    );
};

const styles = StyleSheet.create({
viewContainer:{
    borderColor: 'orange',
    borderWidth: 2,
    padding:10,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
},
textContainer: {
    color: 'black',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
}
});

export default NumberContainer;