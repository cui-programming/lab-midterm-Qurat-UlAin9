import {Text, Button, TextInput} from '../ui';
import {View, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../styles/styles';
export default function TeacherMessage(){

const [reply, setReply] = useState('');

  const handleSend = () => {
    if (reply.trim() === '') {
      Alert.alert('Please type a reply first!');
      return;
    }
    Alert.alert('Message sent:', reply);
    setReply('');
  };

    return(
        <View>
            <Text style={styles.heading}>📩 Message from Teacher</Text>
            <Text>Good job! Write your reply below:</Text>
            <TextInput style={styles.input} placeholder="Your reply..." value={reply} onChangeText={setReply} />
            <Button style={styles.button} title="Send" onPress={() => {handleSend}} />
        </View>
        
    )
}