import { StatusBar, View, SafeAreaView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator } from "@react-navigation/native-stack"

import Flex1 from "./components/01-flex/flex1"
import Flex2 from "./components/01-flex/flex2"
import Flex3 from "./components/01-flex/flex3"
import Flex4 from "./components/01-flex/flex4"
import Flex5 from "./components/01-flex/flex5"
import Flex6 from "./components/01-flex/flex6"
import Flex7 from "./components/01-flex/flex7"
import Flex8 from "./components/01-flex/flex8"
import Internal from "./components/02-style-types/01-Internal"
import External from "./components/02-style-types/02-External"
import FlexPractice from "./components/02-style-types/04-flexPractice"
import FlexPractice2 from "./components/02-style-types/05-flexPractice02"
import Position01 from "./components/03-Position/01-position"
import PracticeView from "./components/04-Practice-view/01-practice-view"
import PracticeScrollView from "./components/04-Practice-view/02-practice-scrollview"
import PracticeFlatList from "./components/04-Practice-view/03-practice-flatList"
import FlatListComponent from "./components/05-practice-flatlist-component/flat-list-component"
import ExternalImage from "./components/06-images/external-image"
import LocalImages from "./components/06-images/local-image"
import BackgroundImage from "./components/06-images/background-image"
import Icons from "./components/07-icons/01-icons"
import THighlight from "./components/08-touchable/01-touchable-highlight"
import Prsbl from "./components/08-touchable/02-pressable"
import CustomComponentExample from "./components/08-touchable/03-custom-component-example"
import PracticeCounter from "./components/10-practice/counter"
import CategoryManager from "./components/11-practice-category/category-manager"
import MyAlert from "./components/12-api/myAlert"
import MyDimentions from "./components/12-api/dimentions"
import MyKeyboard from "./components/12-api/keyboard"
import MyLinking from "./components/12-api/linking"
import MyPlatform from "./components/12-api/platform"
import MyShare from "./components/12-api/share"
import MyVibration from "./components/12-api/vibration-debugging"
import Debugging from "./components/13-debuging/debuging"
import StackNavigation from "./components/14-navigation/stack-navigation"
import Index from "./components/00-index"


const Stack = createNativeStackNavigator();

const App= () =>{
    return( 
    /*<SafeAreaView style={{backgroundColor:"white", flex:1}}>
        { /*<Flex1/>
             <Flex2/>
             <Flex3/>
             <Flex4/>
              <Flex5/>
              <Flex6/>
              <Flex7/>
              <Flex8/>
              <Internal/>
               <External/>
               <FlexPractice/>
                <FlexPractice2/>
                <Position01/>
                <PracticeView/>  
               <PracticeScrollView/> 
               <PracticeFlatList/>
               <FlatListComponent/>
              <ExternalImage/> 
              <LocalImages/>
              <RequrieLocalImages/>
              <BackgroundImage/>
              <Icons/>
            <THighlight/>
            <Prsbl/>
            <CustomComponentExample/>
            <PracticeCounter/>
            <CategoryManager/>
            <MyAlert/>
            <MyDimentions/>
            <MyKeyboard/>
            <MyLinking/>
            <MyPlatform/>
            <MyShare/>
             <MyVibration/>
              <Debugging/>
              <StackNavigation/>
              }
          <StatusBar backgroundColor="white" barStyle="dark-content"/>
    </SafeAreaView>
        */ 
       <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Index" component={Index}/>
              <Stack.Screen name="Flex1" component={Flex1}/>
              <Stack.Screen name="Flex2" component={Flex2}/>
              <Stack.Screen name="Flex3" component={Flex3}/>
              <Stack.Screen name="Flex4" component={Flex4}/>
              <Stack.Screen name="Flex5" component={Flex5}/>
              <Stack.Screen name="Flex6" component={Flex6}/>
              <Stack.Screen name="Flex7" component={Flex7}/>
              <Stack.Screen name="Flex8" component={Flex8}/>
              <Stack.Screen name="Internal" component={Internal}/>
          </Stack.Navigator>
       </NavigationContainer>
    
)}

export default App