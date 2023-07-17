import {ScrollView, Text, StyleSheet, View} from 'react-native';
import MenuIcon from '../../components/Icons/MenuIcon';
import NewsCard from '../../components/News/NewsCard';
import {newsData} from '../../data/NewsData';

const News = () => {
  let content = newsData.map(item => (
    <NewsCard key={item.id} title={item.title} content={item.content} />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <MenuIcon color="black" />
        <Text style={styles.screenTitle}>Stock News</Text>
      </View>
      <ScrollView>{content}</ScrollView>
      <View style={{height: 95}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: '#005BEA',
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 28,
    marginBottom: 24,
    paddingLeft: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  searchBar: {
    paddingLeft: 14,
    paddingBottom: 8,
  },
  marketContainer: {
    marginTop: 14,
    marginBottom: 14,
  },
  stockContainer: {
    backgroundColor: '#005BEA',
  },
});

export default News;
