import React from 'react';
import { Text, Pressable } from 'react-native';



/**
 * Minimal UI Button (no styling).
 * Students will style this via 'styles/styles.js'.
 * 
 * import { styles } from '../../styles/styles';
 * style={[styles.buttonContainer, style]}
 * style={styles.buttonText}
 * import Text from './Text';
 */
export default function Button({ onPress,title, children, style, ...rest }) {
  return (
    <Pressable onPress={onPress}  {...rest}>
      <Text >{title || children}</Text>
    </Pressable>
  );
}
