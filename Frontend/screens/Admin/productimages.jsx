import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import ImageCard from "../../components/ImageCard";
import { Avatar, Button } from "react-native-paper"; 


const ProductImages = ({ navigation, route }) => {
  const [images] = useState(route.params.images); 
  const [productId] = useState(route.params.id);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  

  const deleteHandler = (imageId) => {
   
  };

  const submitHandler = () => {
   
  };

  const loading = false;

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Images</Text>
      </View>

      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 40,
            minHeight: 400,
          }}
        >
          {images.map((i) => (
            <ImageCard
              key={i._id}
              src={i.url}
              id={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <Image
          style={{
            backgroundColor: colors.color2,
            width: 100,
            height: 100,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{ uri: image }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("camera", { updateProduct: true })
            }
          >
            <Avatar.Icon
              icon={"camera"}
              style={{
                backgroundColor: colors.color2,
                margin: 10,
              }}
              size={30}
              color={colors.color3}
            />
          </TouchableOpacity>
        </View>

        <Button
          style={{
            backgroundColor: colors.color1,
            padding: 6,
          }}
          textColor={colors.color2}
          loading={loading}
          onPress={submitHandler}
          disabled={!imageChanged}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default ProductImages;