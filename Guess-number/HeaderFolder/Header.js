import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
return(
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{props.title}</Text>
    </View>
);

};

const styles = StyleSheet.create({
headerContainer: {
    width: '100%',
    height: 90,
    padding: 40,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
},
headerText:{
   color: 'white',
   fontSize: 18
}

});

export default Header;