import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function StyleSheetStyles() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Write anyThing
      </Text>
    </View>
  )
}

export default StyleSheetStyles

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    color:'white',
    padding:25
  },
  containerText:{
    color:"white",
    backgroundColor:"green",
    padding:25,

  }
})