import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {NewsCardParams} from '../../models/componentsModel';

const NewsCard: React.FC<NewsCardParams> = ({title, content}) => {
  return (
    <TouchableHighlight
      underlayColor="#E5E5E5"
      onPress={() => console.log(title)}>
      <View style={styles.newsWrapper}>
        <Text>{title}</Text>
        <Text>{content}...</Text>
      </View>
    </TouchableHighlight>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  newsWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 2,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});
