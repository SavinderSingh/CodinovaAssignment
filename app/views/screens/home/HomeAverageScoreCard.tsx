import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ProgressCircle from '../../../utils/ProgressCircle';
import { fonts } from '../../../constants/fonts';
import { colors } from '../../../constants/colors';

interface HomeAverageScoreCardProps {}

const HomeAverageScoreCard = (props: HomeAverageScoreCardProps) => {
  const [averageScore, setaverageScore] = useState(40);
  let circleColor = colors.light.percentBelow40;
  if (averageScore <= 40) {
    circleColor = colors.light.percentBelow40;
  } else if (averageScore > 40 && averageScore < 80) {
    circleColor = colors.light.percent40_80;
  } else if (averageScore > 80) {
    circleColor = colors.light.percentAbove80;
  }

  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={averageScore}
        radius={56}
        borderWidth={12}
        color={circleColor}
        shadowColor="#F0F0F0"
        bgColor="#fff">
        <Text style={styles.percentage}>{averageScore}%</Text>
      </ProgressCircle>
    </View>
  );
};

export default HomeAverageScoreCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  percentage: {
    fontSize: 20,
    fontFamily: fonts.extraBold,
    color: colors.light.textDefaultColor,
  },
});
