import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { WebView } from "react-native-webview";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useQuery, useMutation } from "react-query";

import BaseHeader from "../components/headers/BaseHeader";
import { getDocument, deleteDocument } from "../api/documents";
import { MaterialIconButton } from "../components/buttons/IconButton";
import { useUserContext } from "../contexts/UserContext";

const DocumentDetailScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id } = params;

  const [user, _] = useUserContext();

  const { data: contents, isLoading } = useQuery(["Document", id], () =>
    getDocument(id)
  );
  const { mutate: deleteMutate } = useMutation(deleteDocument, {
    onSuccess: () => {
      navigation.navigate("MyDocuments");
    },
    onError: () => {
      console.log("error");
    },
  });

  return (
    <View style={styles.block}>
      <BaseHeader
        leftButtons={
          <MaterialIconButton
            iconName="arrow-back"
            size={24}
            color="#000000"
            onPress={() => navigation.goBack()}
          ></MaterialIconButton>
        }
        title={contents?.title}
        rightButtons={
          <>
            {contents?.user_id === user?.userId && (
              <>
                <MaterialIconButton
                  iconName="delete"
                  size={24}
                  color="#000000"
                  onPress={() => {
                    deleteMutate(id);
                  }}
                ></MaterialIconButton>
                <MaterialIconButton
                  iconName="mode-edit"
                  size={24}
                  color="#000000"
                  onPress={() => {
                    navigation.navigate("Modify", {
                      id: id,
                      documentData: contents,
                    });
                  }}
                ></MaterialIconButton>
              </>
            )}
            <MaterialIconButton
              iconName="search"
              size={24}
              color="#000000"
            ></MaterialIconButton>
          </>
        }
      ></BaseHeader>
      <WebView
        containerStyle={styles.webview}
        source={{ html: contents?.form }}
        scalesPageToFit={false}
      ></WebView>
    </View>
  );
};

export default DocumentDetailScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  webview: {
    flex: 1,
    padding: 8,
    backgroundColor: "#FFFFFF",
  },
});
