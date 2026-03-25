
import {View,Text} from "react-native"
import { HomeScreen } from "./Home"
import {UserContextProvider} from "./useContext"

const AppContent=()=>{
  return(
    <>
    <View>
      <Text>From App Content</Text>
    </View>
    <HomeScreen/>
    </>
  )
}

export const AppUseContext01=()=>{
  return(
    <UserContextProvider>
      <AppContent/>
    </UserContextProvider>
  )
}