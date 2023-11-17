import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fonts} from '../../../constants/fonts';
import BaseView from '../../hoc/BaseView';
import {getSalutation} from '../../../utils/DateFormats';
import HomeAverageScoreCard from './HomeAverageScoreCard';
import { colors } from '../../../constants/colors';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <BaseView>
      <View style={styles.container}>
        <Text style={styles.salutation}>{getSalutation()}</Text>
        <HomeAverageScoreCard />
      </View>
    </BaseView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  salutation: {
    fontSize: 20,
    fontFamily: fonts.bold,
    paddingHorizontal: 16,
    color: colors.light.textDefaultColor,
  },
});
