import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";

import WriteHeader from "../components/headers/WriteHeader";
import { writeDocument } from "../api/documents";
import { useUserContext } from "../contexts/UserContext";

const WriteScreen = () => {
  const naviagation = useNavigation();
  const richText = useRef();
  const scrollRef = useRef();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [user, _] = useUserContext();

  const { mutate: writeMutate, isLoading } = useMutation(writeDocument, {
    onSuccess: () => {
      naviagation.navigate("MyDocuments");
    },
    onError: () => {
      console.log("error");
    },
  });

  const onPressAddImage = useCallback(() => {
    // insert URL
    richText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png",
      "background: gray;"
    );
    // insert base64
    // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
  }, []);

  const onSubmit = () => {
    if (isLoading) {
      return;
    }
    console.log("SUBMIT!");
    writeMutate({ title, form: contents, userId: user?.userId });
  };
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
      <RichToolbar
        editor={richText}
        onPressAddImage={onPressAddImage}
        actions={[
          actions.undo,
          actions.redo,
          actions.insertVideo,
          actions.insertImage,
          actions.setStrikethrough,
          // actions.checkboxList,
          actions.insertOrderedList,
          actions.blockquote,
          actions.alignLeft,
          actions.alignCenter,
          actions.alignRight,
          actions.code,
          actions.line,
          // actions.foreColor,
          // actions.hiliteColor,
          // actions.heading1,
          // actions.heading4,
          "insertEmoji",
          "insertHTML",
          "fontSize",
        ]}
      ></RichToolbar>
      <ScrollView
        style={styles.editorWrapper}
        ref={scrollRef}
        nestedScrollEnabled={true}
        keyboardDismissMode={"none"}
      >
        <RichEditor
          style={styles.editor}
          ref={richText}
          initialContentHTML={contents}
          initialHeight={600}
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
  editorWrapper: {
    flex: 1,

    borderWidth: 1,
    borderColor: "red",
  },
  editor: {
    flex: 1,

    borderWidth: 1,
    borderColor: "blue",
  },
});
