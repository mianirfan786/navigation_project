import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Platform} from 'react-native'
import { CATEGORIES } from '../data/dummy-data';

export const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItems}
                onPress={() => {
                    props.navigation.navigate({ routeName: 'CategoryMeal' })
                }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>

            
        )
    }
    CategoriesScreen.navigationOptions = {
        title: "eat",
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? 'red' : 'green'
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : 'black'
    }
 
    return (
       <FlatList keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem}  />
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    gridItems:{
        flex:1,
        margin:15,
        height:150,
    }
});

export default CategoriesScreen