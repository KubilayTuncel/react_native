import { StatusBar, View, SafeAreaView } from "react-native"
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




const App= () =>{
    return( 
    <SafeAreaView style={{backgroundColor:"white", flex:1}}>
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
        */ }
          <StatusBar backgroundColor="white" barStyle="dark-content"/>
          
          <CategoryManager/>

    </SafeAreaView>
)}

export default App