import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';

const Avatar = (props) => {

  const { source="", name="", size=0, backgroundColor='#BDBDBD', containerStyle={}, fontStyle={}} = props;

  return (
    <View style={[styles.container,{width:size,height:size,backgroundColor:backgroundColor,borderRadius:size/2},containerStyle]}>
        {
        source
          ?
          <Image source={source?.uri? source : {uri:source}} style={{width:'100%',height:'100%'}} />
          :
          <Text style={[styles.name,fontStyle]}>{name}</Text>
        }
    </View>
  )
}

export default Avatar;
