import * as React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Loader from './Loader';
import {useSelector} from 'react-redux';
import HeaderView, {HeaderViewProps} from '../components/HeaderView';

interface BaseViewProps {
  hasStatusBar?: boolean;
  hasHeader?: boolean;
  children: React.ReactNode;
  headerProps?: HeaderViewProps;
  backgroundColor?: string;
}

const BaseView: React.FC<BaseViewProps> = ({
  children,
  hasHeader,
  headerProps,
  backgroundColor,
}) => {
  const loader = useSelector(state => state?.home?.loader);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <View style={[styles.container, {backgroundColor}]}>
        {hasHeader && (
          <HeaderView {...headerProps} backgroundColor={backgroundColor} />
        )}
        <View
          style={hasHeader === true ? styles.parent : styles.headerLessParent}>
          {children}
        </View>

        {loader && <Loader isVisible={loader} />}
      </View>
    </SafeAreaView>
  );
};

export default BaseView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  parent: {
    flex: 1,
  },
  headerLessParent: {
    flex: 1,
  },
});
