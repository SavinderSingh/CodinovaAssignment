import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface StudentScoreCardProps {}

const StudentScoreCard = (props: StudentScoreCardProps) => {
  return (
    <View style={styles.container}>
      <Text>StudentScoreCard</Text>
    </View>
  );
};

export default StudentScoreCard;

const styles = StyleSheet.create({
  container: {}
});
