import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({post}) => {
  return (
    <View>
      <FlatList
      data={post}
      keyExtractor={(item)=>item.$id}
      renderItem={({item})=>(
        <Text className='text-white'>
            {item.id}
        </Text>
      )}
      horizontal
     
       />
    </View>
  )
}

export default Trending