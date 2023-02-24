import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";

import WriteHeader from "../components/headers/WriteHeader";

const WriteScreen = () => {
  const richText = useRef();
  const scrollRef = useRef();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onSubmit = () => {};
  const onChangeHTML = (html) => {
    setContents(html);
  };

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  // 에디터 스크롤을 위한 커서 조정
  const handleCursorPosition = useCallback((scrollY) => {
    scrollRef.current.scrollTo({
      y: scrollY - 30,
      animated: true,
    });
  }, []);

  return (
    <View style={styles.block}>
      <WriteHeader
        value={title}
        onChangeText={setTitle}
        onSubmit={onSubmit}
      ></WriteHeader>
      <RichToolbar editor={richText}></RichToolbar>
      <ScrollView
        ref={scrollRef}
        nestedScrollEnabled={true}
        keyboardDismissMode={"none"}
      >
        <RichEditor
          style={styles.editor}
          ref={richText}
          initialContentHTML={contents}
          useContainer={true}
          onChange={onChangeHTML}
          onCursorPosition={handleCursorPosition}
        />
      </ScrollView>
    </View>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
  editor: {
    flex: 1,
    marginHorizontal: 4,
    marginTop: 4,
  },
});
