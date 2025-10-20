import React from 'react';
import { Text as RNText } from 'react-native';
import { styles } from '../../styles/styles';
/**
 * UI/Text
 * A very thin wrapper over React Native's Text.
 * Note: This file exists, but it is NOT exported from 'ui/index.js' on purpose.
 * Students must discover and fix the missing export to use it via barrel import.
 */
export default function Text(props) {
  return <RNText style={styles.text} {...props} />;
}
