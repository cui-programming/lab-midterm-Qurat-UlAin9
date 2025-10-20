import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { styles } from '../../styles/styles';

export default function TextInput(props) {
  return <RNTextInput style={styles.input} {...props} />;
}
