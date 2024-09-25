import React, { useCallback } from "react";
import { View, Button, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerButton = ({ onImagesPicked }) => {
  // Function to open image picker and select images
  const pickImage = useCallback(async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }
    try {
      // Pick multiple images
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
      });

      if (!!result?.assets?.length) {
        // Call the callback function with selected images
        onImagesPicked(result.assets);
      }
    } catch (e) {
      console.error("Image Picker Error", e);
    }
  }, [onImagesPicked]);

  return (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <Button title="Pick Images" onPress={pickImage} />
    </View>
  );
};

export default ImagePickerButton;
