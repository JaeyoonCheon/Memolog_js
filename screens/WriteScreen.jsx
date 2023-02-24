import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";

import WriteHeader from "../components/headers/WriteHeader";
import { writeDocuments } from "../api/documents";
import { useUserContext } from "../contexts/UserContext";

const WriteScreen = () => {
  const naviagation = useNavigation();
  const richText = useRef();
  const scrollRef = useRef();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [user, _] = useUserContext();

  const { mutate: writeMutate, isLoading } = useMutation(writeDocuments, {
    onSuccess: () => {
      naviagation.navigate("MyDocuments");
    },
    onError: () => {},
  });

  const onSubmit = () => {
    if (isLoading) {
      return;
    }
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
