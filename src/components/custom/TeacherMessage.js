import {Text, Button, TextInput} from '../ui';
import {View, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../styles/styles';
export default function TeacherMessage(){

const [reply, setReply] = useState('');

  const handleSend = () => {
    if (reply.trim() === '') {
      Alert('Please type a reply first!');
      
    }

    Alert('Message sent:', reply);
    setReply('');
  };

    return(
        <View>
            <Text style={styles.headerText}> Message from Teacher</Text>
            <Text style={styles.text}>Good job! Write your reply below:</Text>
            <TextInput style={styles.input} placeholder="Your reply..." value={reply} onChangeText={setReply} />
            <Button style={styles.button} title="Send" onPress={() => {handleSend}} />
        </View>
        
    )
}