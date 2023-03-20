import { StyleSheet, Platform, View, ScrollView, Text } from "react-native";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import { useMutation, useQueryClient } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from "react-native-image-picker";
import storage from "@react-native-firebase/storage";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import WriteHeader from "../components/headers/WriteHeader";
import { writeDocument } from "../api/documents";
import { useUserContext } from "../contexts/UserContext";

const imgRegex = /<img.*?src=["|'](.*?)["|']/gm;

const WriteScreen = () => {
  const naviagation = useNavigation();
  const queryClient = useQueryClient();

  const richText = useRef();
  const scrollRef = useRef();

  const [isSubmit, setIsSubmit] = useState(false);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  const [user, _] = useUserContext();

  const { mutate: writeMutate, isLoading } = useMutation(writeDocument, {
    onSuccess: () => {
      setIsSubmit(false);
      console.log("Finished!");
      queryClient.invalidateQueries("Documents");
      naviagation.navigate("MyDocuments");
    },
    onError: () => {
      console.log("error");
    },
  });

  const onPressAddImage = useCallback(async () => {
    const image = await launchImageLibrary({
      mediaType: "photo",
      maxWidth: 512,
      maxHeight: 512,
      includeBase64: Platform.OS === "android",
    });

    richText.current?.insertImage(image.assets[0].uri, "image");
  }, [richText]);

  useEffect(() => {
    if (isSubmit === true) {
      const scope = isPrivate ? "private" : "public";

      writeMutate({
        title,
        form: contents,
        userId: user?.userId,
        scope,
        thumbnail_url: thumbnailUrl,
      });
    }
  }, [isSubmit]);

  const onSubmit = async () => {
    const usedImageNodes = contents.match(imgRegex);

    console.log(usedImageNodes);

    try {
      if (usedImageNodes) {
        const usedImages = usedImageNodes.map((x) =>
          x.replace(/.*src="([^"]*)".*/, "$1")
        );
        const imageUrls = [];

        await Promise.all(
          usedImages.map(async (imagePath) => {
            const fileNameRegex = /\/([^/]+)$/;
            const fileName = imagePath.match(fileNameRegex)[1];
            const uploadImageRef = storage().ref(fileName);

            await uploadImageRef.putFile(imagePath);
            const downloadUrl = await uploadImageRef.getDownloadURL();
            imageUrls.push(downloadUrl);

            setContents(contents.replace(imagePath, downloadUrl));
          })
        );

        setThumbnailUrl(imageUrls[0]);
      }
      setIsSubmit(true);
    } catch (e) {
      console.log(e);
    }
  };
  const onChangeHTML = (html) => {
    setContents(html);
  };

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
          originWhitelist={["file://"]}
          allowFileAccess={true}
          allowFileAccessFromFileURLs={true}
        />
        <View style={styles.footer}>
          <BouncyCheckbox
            style={styles.checkbox}
            size={20}
            fillColor="#22BCCE"
            text="비밀글"
            iconStyle={{ borderRadius: 5 }}
            innerIconStyle={{ borderRadius: 5 }}
            textStyle={{ textDecorationLine: "none", fontSize: 12 }}
            textContainerStyle={{ marginLeft: 8 }}
            isChecked={isPrivate}
            onPress={() => setIsPrivate(!isPrivate)}
          ></BouncyCheckbox>
        </View>
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
  testBlock: {
    height: 400,
  },
  editorWrapper: {
    flex: 1,
  },
  editor: {
    flex: 1,
  },
  footer: {
    height: 48,
  },
  checkbox: {
    paddingHorizontal: 12,
    marginVertical: 4,
    alignSelf: "flex-end",
  },
});
