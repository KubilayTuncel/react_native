import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Debugging = () => {
  let toplam = 0;
  for (let i = 0; i <= 10; i++) {
    toplam += i;
  }

  console.log(toplam);
  return (
    <View>
      <Text>Debugging icin debuging modunda json dosyasi olusturmak icin run kismina tiklayip  reactnative seciyoruz. 
        daha sonra debugn in exponet i seciyoruz ve sonra play butonuna basiyoruz. Önemli olan lustrulan vscode laucnh json file
        i mevcut projemizin icerisinde olusmasini saglamaliyiz. Sonra telefonu degunging modu almaliyiz bunun icin terminalde
        m butonuna basip toggle menuyü aciyoruz ve debug modunu aciyoruz. ve play tusuna basiyoruz.</Text>
    </View>
  )
}

export default Debugging

const styles = StyleSheet.create({})