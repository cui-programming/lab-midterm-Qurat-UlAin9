import React, {useState} from 'react';
import { View, Alert } from 'react-native';
import { styles } from '../../styles/styles';
import {Text, Button, TextInput} from '../ui';
import { initialAzkaar } from '../../data/azkaar';
/**
 * Custom/SearchAndAdd
 * Students implement:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - use only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */
export default function SearchAndAdd() {
  const [phrase, setPhrase]= useState('');
  const [items, setItems] = useState(initialAzkaar);

  const handleSearch=()=>{
   const exists = items.some(it =>
      it.phrase.toLowerCase().includes(phrase.toLowerCase())
    );
    Alert.alert(exists ? 'Phrase exists' : 'Not found');

  }
  const handleAdd=()=>{
    const exists = items.some(it =>
      it.phrase.toLowerCase() === phrase.toLowerCase()
    );

    if (exists) {
      Alert.alert('Phrase already exists');
      return;
    }

    const newItem = {
      id: (items.length + 1).toString(),
      phrase,
      count: 0,
    };
    setItems(prev => [...prev, newItem]); // immutable update
    Alert.alert('Phrase added successfully');
  };
    

  

  return (
    <View style={styles.section}>
      {/* TODO: Implement search and add UI here using ui/TextInput and ui/Button */}
      <TextInput placeholder='Enter phrase to Add/Search' value={phrase} onChangeText={(phrase)=>{setPhrase(phrase)}}/>
      <Button title='Search' onPress={handleSearch}/>
      <Button title='Add' onPress={handleAdd}/>
      <Text>Items count: {items.length}</Text>

    </View>
  );
}
