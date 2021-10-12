import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'

export const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            <Button title="Meal Details" onPress={()=>{
                props.navigation.navigate({routeName:'MealDetails'})
            }} />
            <Button title="Go to Back" onPress={() => {
                props.navigation.goBack();
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

export default CategoryMealsScreen