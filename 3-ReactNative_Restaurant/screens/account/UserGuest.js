import React from 'react'
import { StyleSheet, ScrollView, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'


export default function UserGuest() {
    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizaMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
            <Text style={styles.description}>
                ¿Como describirias tu mejor restaurante? busca y visualiza los mejores restaurantes de
                una forma sencilla, vote cuál te ha gustado más y comenta como ha sido tu experiencia.
            </Text>
            <Button
                buttonStyle={styles.button}
                title="Ver tu perfil"
                onPress={()=>{console.log("Click")}}
            />

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 30
    },
    image: {
        height:350,
        width:"100%",
        marginBottom: 10,
        textAlign: "center"
    },
    title: {
        fontWeight:"bold",
        fontSize:19,
        marginVertical:10,
        textAlign:"center"   
    },
    description: {
        textAlign: "justify",
        marginBottom: 20,
        color: "#a65273"
    },
    button:{
        backgroundColor: "#442484"
    }
})
