import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "react-query";

import BaseTextField from "../components/textfields/BaseTextField";
import BaseButton from "../components/buttons/BaseButton";
import { makeUserProfile } from "../api/user";
import DefaultImage from "../assets/user.png";

const MakeProfileScreen = () => {
  const navigation = useNavigation();
  const [profileImageURI, setProfileImageURI] = useState(null);
  const [nickname, setNickname] = useState("");

  const { mutate: makeProfileMutate } = useMutation(makeUserProfile, {
    onError: () => {
      setProfileImageURI("");
      setNickname("");
    },
    onSuccess: () => {
      navigation.navigate("MainTab");
    },
  });

  const onPressChangeImage = async () => {
    const image = await launchImageLibrary({
      mediaType: "photo",
      maxWidth: 512,
      maxHeight: 512,
      includeBase64: Platform.OS === "android",
    });

    setProfileImageURI(image.assets[0].uri);
  };
  const onPressConfirm = async () => {
    makeProfileMutate({
      nickname,
      profileImageURI,
    });
  };

  console.log(profileImageURI);
  console.log(!!profileImageURI);

  return (
    <View style={styles.block}>
      <View style={styles.profileImageBlock}>
        <TouchableOpacity
          style={styles.profileImageButton}
          onPress={onPressChangeImage}
        >
          <View style={styles.profileImage}>
            {profileImageURI ? (
              <Image
                style={styles.image}
                source={{ uri: profileImageURI }}
              ></Image>
            ) : (
              <Image style={styles.image} source={DefaultImage}></Image>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.messageBlock}>
        <Text
          style={styles.message}
        >{`사용하실 프로필 이미지와\n닉네임을 입력해주세요`}</Text>
      </View>
      <View style={styles.nicknameBlock}>
        <BaseTextField
          label="닉네임"
          value={nickname}
          onChange={setNickname}
        ></BaseTextField>
        <View style={styles.confirmButton}>
          <BaseButton label="확인" onPress={onPressConfirm}></BaseButton>
        </View>
      </View>
    </View>
  );
};

export default MakeProfileScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profileImageBlock: {
    marginVertical: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImageButton: {},
  profileImage: {
    width: 200,
    height: 200,

    borderRadius: 100,
    borderColor: "#22BCCE",
    borderWidth: 2,
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
  },
  messageBlock: {
    flexGrow: 1,
    marginVertical: 32,
    marginHorizontal: 16,

    justifyContent: "center",
  },
  message: {
    fontSize: 24,
  },
  nicknameBlock: {
    marginHorizontal: 16,
  },
  confirmButton: {
    height: 48,
    marginVertical: 32,
  },
});
