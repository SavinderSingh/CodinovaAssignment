import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';

export interface HeaderViewProps {
  hasBack?: boolean;
  hasTitle?: boolean;
  title?: string;
  onGoBack?: () => void;
}

const HeaderView = (props: HeaderViewProps) => {
  const {hasBack, hasTitle, title, onGoBack} = props;

  const navigation = useNavigation();

  const _onGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {hasBack && (
        <TouchableOpacity style={styles.leftIconView} onPress={_onGoBack}>
          <Icon name="chevron-back" type="ionicon" />
        </TouchableOpacity>
      )}
      {hasTitle && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
  },
  leftIconView: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: colors.light.textDefaultColor,
  },
});
