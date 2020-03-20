import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = props => {
    return(
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    card:{
        shadowColor: 'black',         //shadow... components on iOS and elevation for android
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.3,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;