import React from 'react'
import { Text, View } from 'react-native'

function InlineStyles() {
  return (
    <View style={{
      backgroundColor:"red",
      margin:100,
      padding:25,
    }}>
      <Text style={{
        backgroundColor:"black",
        color:"white",
        fontSize:25,
        justifyContent:"center",
        alignContent:'center',
      
      }}>
        Write anyThing
      </Text>
    </View>
  )
}

export default InlineStyles