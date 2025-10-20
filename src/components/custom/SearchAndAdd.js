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
    console.log(exists ? 'Phrase exists' : 'Not found');

  }
  const handleAdd=()=>{
    const exists = items.some(it =>
      it.phrase.toLowerCase() === phrase.toLowerCase()
    );

    if (exists) {
      console.log('Phrase already exists');
      return;
    }

    const newItem = {
      id: (items.length + 1).toString(),
      phrase,
      count: 0,
    };
    setItems(prev => [...prev, newItem]); // immutable update
    console.log('Phrase added successfully');
  };
    

  

  return (
  <View style={styles.section}>
    {/* TODO: Implement search and add UI here using ui/TextInput and ui/Button */}
      <View style={styles.rowContainer}>
        <TextInput
          placeholder="Enter phrase to Search"
          value={phrase}
          onChangeText={setPhrase}
          style={styles.halfInput}
        />
        <TextInput
          placeholder="Enter phrase to Add"
          value={phrase}
          onChangeText={setPhrase}
          style={styles.halfInput}
        />
      </View>
      
      <View style={styles.rowContainer}>
        <Button title="Search" onPress={handleSearch} style={styles.halfButton} />
        <Button title="Add" onPress={handleAdd} style={styles.halfButton} />
      </View>
    <Text style={styles.smallText}>Items count: {items.length}</Text>
    {items.map(item => (
      <View key={item.id} style={{paddingVertical:4}}>
        <Text>{item.phrase} — {item.count}</Text>
      </View>
      ))}
  </View>
      
      
  );
}
