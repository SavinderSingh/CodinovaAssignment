import {Button} from '@rneui/base';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';

interface ButtonViewProps {
  title: string;
  onPress: () => void;
  containerStyle?: object;
  buttonStyle?: object;
  titleStyle?: object;
}

const ButtonView = (props: ButtonViewProps) => {
  const {title, onPress, containerStyle, buttonStyle, titleStyle} = props;
  return (
    <Button
      title={title}
      activeOpacity={0.7}
      onPress={onPress}
      containerStyle={[styles.containerStyle, containerStyle]}
      titleStyle={[styles.titleStyle, titleStyle]}
      buttonStyle={[styles.buttonStyle, buttonStyle]}
    />
  );
};

export default ButtonView;

const styles = StyleSheet.create({
  container: {},
  containerStyle: {
    marginTop: 24,
  },
  buttonStyle: {
    borderRadius: 12,
    height: 48,
    backgroundColor: colors.light.primary,
  },
  titleStyle: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
});
