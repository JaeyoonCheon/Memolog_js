import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import CardList from '../components/CardList';

const MyDocumentsScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('date');
  const [items, setItems] = useState([
    {label: '날짜순', value: 'date'},
    {label: '제목순', value: 'title'},
  ]);

  return (
    <View style={styles.block}>
      <View style={styles.toolbar}>
        <View style={styles.sort}>
          <Text>날짜순</Text>
        </View>
        <View 
            style={styles.view}>
          <MaterialIcons
            name="grid-view"
            color="#000000"
            size={20}></MaterialIcons>
            <MaterialIcons
              name="list"
              color="#000000"
              size={20}></MaterialIcons>
        </View>
      </View>
      <View style={styles.itemsWrapper}>
        <View style={styles.items}>
          <CardList></CardList>
        </View>
      </View>
    </View>
  );
};

export default MyDocumentsScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  toolbar: {
    width:"100%",
    height:50,
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"space-between"
  },
  sort: {
    height: 32,
    width: 100,
    alignItems:"center",
    justifyContent:"center",

    borderWidth:1,
    borderColor:"#000111",
    borderRadius:15
  },
  view: {
    flexDirection:"row"
  },
  itemsWrapper: {
    flex: 1,
    marginTop: 32,
    marginHorizontal: 16,
  },
  items: {
    flex: 1,

    borderWidth: 1,
    borderColor: 'blue',
  },
});
