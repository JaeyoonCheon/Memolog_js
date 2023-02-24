import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";

import WriteHeader from "../components/headers/WriteHeader";

const WriteScreen = () => {
  const richText = useRef();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onSubmit = () => {};
  const onChangeHTML = (html) => {
    setContents(html);
  };

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  return (
    <View style={styles.block}>
      <WriteHeader
        value={title}
        onChangeText={setTitle}
        onSubmit={onSubmit}
      ></WriteHeader>
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
