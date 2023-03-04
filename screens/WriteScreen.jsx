import { StyleSheet, Platform, View, ScrollView } from "react-native";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from "react-native-image-picker";
import { utils } from "@react-native-firebase/app";
import storage from "@react-native-firebase/storage";

import WriteHeader from "../components/headers/WriteHeader";
import { writeDocument } from "../api/documents";
import { useUserContext } from "../contexts/UserContext";

const WriteScreen = () => {
  const naviagation = useNavigation();
  const richText = useRef();
  const scrollRef = useRef();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [uploadImages, setUploadImages] = useState([]);
  const [user, _] = useUserContext();

  const { mutate: writeMutate, isLoading } = useMutation(writeDocument, {
    onSuccess: () => {
      naviagation.navigate("MyDocuments");
    },
    onError: () => {
      console.log("error");
    },
  });

  const onPressAddImage = useCallback(async () => {
    const image = await launchImageLibrary(
      {
        mediaType: "photo",
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === "android",
      },
      (res) => {
        console.log(res);
      }
    );

    console.log(image);

    // insert URL
    if (Platform.OS === "ios") {
      richText.current?.insertImage(image.assets[0].uri);
    }
    // insert base64
    if (Platform.OS === "android") {
      // richText.current?.insertImage(
      //   `data:${image.assets[0].type};base64,${image.assets[0].base64}`
      // );
      console.log(image.assets[0].uri.split("file://"));
      console.log(image.assets[0].uri.split("file://")[1]);
      richText.current?.insertImage(image.assets[0].uri);
    }

    setUploadImages([...uploadImages, image.assets[0]]);
  }, [richText]);

  const onSubmit = async () => {
    const imageSet = new Set(uploadImages);
    const uniqueImages = [...imageSet];

    try {
      await Promise.all(
        uniqueImages.map(async (image) => {
          const uploadImageRef = storage().ref(image?.fileName);

          await uploadImageRef.putFile(image.uri);
        })
      );

      writeMutate({ title, form: contents, userId: user?.userId });
    } catch (e) {
      console.log(e);
    }
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
  },
  editor: {
    flex: 1,
  },
});
