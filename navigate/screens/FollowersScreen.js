import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Avatar, Divider, List, Portal, FAB } from 'react-native-paper'

const FollowersScreen = () => {

  const [open, setOpen] = useState( false);

  return (
    <>
    <ScrollView>
      <List.Item
      title = "Ayse Gel"
      description="Vice President"
      left={(props)=><Avatar.Image size={64} source={{uri:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"}}/>}/>
      <Divider/>
      <List.Item
      title = "Ali Gel"
      description="Vice Chairman"
      left={(props)=><Avatar.Image size={64} source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"}}/>}/>
    </ScrollView>
    <Portal>
        <FAB.Group
        fabStyle={styles.fab}
          open={open}
          visible
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', 
              label:"Add",
            onPress: () => console.log('Pressed add') },
            {
              icon: 'delete',
              label: 'Delete',
              onPress: () => console.log('Pressed delete'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={()=>setOpen(prev=>!prev)}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </>
    
  )
}

export default FollowersScreen

const styles = StyleSheet.create({
  fab: {
  
  },
})