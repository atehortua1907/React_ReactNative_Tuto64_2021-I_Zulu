import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading'

export default function UserGuest() {
    return (
        <View>
            <Text>User Guest..</Text>
            <Loading isVisible={true} text="Cagando..."/>
        </View>
    )
}

const styles = StyleSheet.create({})
