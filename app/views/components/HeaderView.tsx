import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface HeaderViewProps {
  hasBack?: boolean;
  hasTitle?: boolean;
  title?: string;
  backgroundColor?: string;
}

const HeaderView = (props: HeaderViewProps) => {
  return (
    <View style={styles.container}>
    
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {}
});
