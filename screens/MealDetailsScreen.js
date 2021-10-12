import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'

export const MealDetailsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Meal Details Screen</Text>
           <Button title="go back parent" onPress={() => {
               props.navigation.popToTop()
           }} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default MealDetailsScreen