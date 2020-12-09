import * as WebBrowser from "expo-web-browser";
import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Text, View } from "./Themed";

export default function ButtonDefault({
  path,
  title,
  icon,
  styleCustom,
}: {
  path: string;
  title: string;
  icon: string;
  styleCustom: object;
}) {
  const handleHelpPress = useCallback(() => {
    //WebBrowser.openBrowserAsync(path);
  }, [path, WebBrowser]);
  return (
    <View>
      <View style={[styles.container, styleCustom]}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleHelpPress}
        >
          <MaterialIcons
            name={icon || "location-on"}
            size={24}
            color="#3bc9f5"
          />
          <Text style={[styles.homeScreenFilename, styles.codeHighlightText]}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "#3784a6",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
    alignItems: "flex-start",
    width: 290,
  },
  codeHighlightText: {
    color: "#3bc9f5",
  },
  homeScreenFilename: {
    marginVertical: 7,
    fontSize: 25,
    marginHorizontal: 8,
    color: "#3784a6",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
});
