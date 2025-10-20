import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native'; // You may switch Text to ui/Text later
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';
import {Button} from '../ui';

/**
 * Custom/TasbihList
 * Renders a FlatList of azkaar with their counts.
 * NOTE: Increment/Decrement buttons are intentionally NOT implemented.
 * Students will add + and - controls using UI/Button and update state accordingly.
 */
export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  // HINT ONLY (do not complete): you will need handlers like increment(id) / decrement(id)
    
  const increment = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, count: item.count + 1  } : item
      )
    );
  };

 
  const decrement = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, count: Math.max(0, item.count - 1) }
          : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      {/* TODO: Add increment/decrement buttons here using ui/Button */}
      <Button style={[styles.button, { backgroundColor: 'green' }]} title="+" onPress={() => {increment(item.id)}} />
      <Button style={[styles.button, { backgroundColor: 'red' }]} title="-" onPress={() => {decrement(item.id)}} />
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={[styles.headerText ]}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}
