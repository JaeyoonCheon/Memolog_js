import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import BaseTextField from "../components/textfields/BaseTextField";
import BaseButton from "../components/buttons/BaseButton";

const MakeProfileScreen = () => {
  const [nickname, setNickname] = useState("");

  return (
    <View style={styles.block}>
      <View style={styles.profileImageBlock}>
        <TouchableOpacity style={styles.profileImageButton}>
          <View style={styles.profileImage}></View>
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
          <BaseButton label="확인"></BaseButton>
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
