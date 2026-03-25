import { Text, View } from "react-native"
import { Child2 } from "./components/Chid2"
import { Child1 } from "./components/Child1"





export const HomeScreen=()=>{
  return(
    <>
    <View>
      <Text>
        From Home Screen passing Child1 and Child2
      </Text>
    </View>
    <Child1/>
    <Child2/>

    </>
  )
}