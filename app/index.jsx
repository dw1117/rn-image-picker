import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ImagePickerButton from "./components/ImagePickerButton"; // Import the ImagePickerButton component
import ImageCarousel from "./components/ImageCarousel"; // Import the ImageCarousel component

export default function App() {
  const [images, setImages] = useState([]);

  // Callback function to update images when new ones are picked
  const handleImagesPicked = (selectedImages) => {
    setImages((_images) => [..._images, ...selectedImages]);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      {/* Image Picker Button */}
      <ImagePickerButton onImagesPicked={handleImagesPicked} />

      {/* Image Carousel */}
      <ImageCarousel images={images} />
    </SafeAreaView>
  );
}