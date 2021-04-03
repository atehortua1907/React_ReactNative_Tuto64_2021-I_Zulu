import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Login() {    
    return (        
        <ScrollView>
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizaMode="contain"
                style={styles.image}
            />
            <View style={styles.container}>
                <Text>Login Form</Text>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider}/>
        </ScrollView>
    )
}

function CreateAccount(props){
    const navigation = useNavigation()
    return(
        <Text 
            style={styles.register}
            onPress={()=> navigation.navigate("register")}
        >
            ¿Aún no tienes una cuenta?{" "}
            <Text style={styles.btnregister}>
                Registrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image:{
        height:350,
        width: "100%",
        marginBottom: 20
    },
    container:{
        marginHorizontal: 40
    },
    divider: {
        backgroundColor: "#442484",
        margin: 40
    },
    register:{
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    btnregister:{
        color: "#442484",
        fontWeight: "bold"
    }
})
