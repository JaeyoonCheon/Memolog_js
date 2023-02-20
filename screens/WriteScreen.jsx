import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";

import BaseHeader from "../components/headers/BaseHeader";

const WriteScreen = () => {
  const richText = useRef();

  const [contents, setContents] = useState("");

  const onChangeHTML = (html) => {
    setContents(html);
    console.log(contents);
  };

  return (
    <View style={styles.block}>
      <BaseHeader
        leftButtons={
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="#000000"
          ></MaterialIcons>
        }
        rightButtons={
          <MaterialIcons name="check" size={24} color="#000000"></MaterialIcons>
        }
      ></BaseHeader>
      <RichToolbar editor={richText}></RichToolbar>
      <RichEditor
        ref={richText}
        initialContentHTML={
          "Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>"
        }
        onChange={onChangeHTML}
      />
    </View>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
});
