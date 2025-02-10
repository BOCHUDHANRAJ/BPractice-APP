import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity, 
  } from "react-native";
  import React, { useRef, useState } from "react";
  import { colors, defaultStyle } from "../styles/styles";
  import Header from "../components/Header";
  import Carousel from "react-native-snap-carousel";
  import { Avatar, Button } from "react-native-paper";
  import { Toast } from "react-native-toast-message/lib/src/Toast";

const SLIDER_WIDTH = Dimensions.get("window").width; 
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ( { route: {Params}}) => {
 const isCarousel = useRef(null);
 const name ="dhanraj";
 const price = 4555;
 const stock = 20;
 const Description = "my name is dhanraj iam a full stack developer working on app on both react and node";
 const [quantity,setQuantity] = useState(1);
 const incrementQty = () =>{
    if(stock <= quantity) return
    setQuantity((prev) => prev +1)
 }
 const decrementQty = () =>{
    if(quantity <= 1) return
    setQuantity((prev) => prev - 1)
 }
 const images = [{
  id:"ASDadsad",
  url:"https://buildmyplace.com/cdn/shop/collections/LED-High-Bay_190x190.jpg?v=1701882824", 
 },
 {
    id:"ASDadsadee",
    url:"https://buildmyplace.com/cdn/shop/collections/LED-High-Bay_190x190.jpg?v=1701882824", 
   }]

   const addToCardHandler = () =>{
    if(stock===0) return  Toast.show({
        type:"error",
        text1:"Out of stock",
    });
    Toast.show({
        type:"success",
        text1:"Add to cart",
    });
   }
    return (
    <View style={{
        ...defaultStyle,
        padding:0,
        backgroundColor:colors.color1,
    }}>
        <Header back={true} />

        {/* Carousel */}
      <Carousel layout="default" sliderWidth={SLIDER_WIDTH} itemWidth={ITEM_WIDTH } ref={isCarousel}
      data={images}
      renderItem={CarouselCardItem}
      />
      <View style={{
        backgroundColor:colors.color2,
        padding:35,
        flex:1,
        marginTop: -380,

      }}>
        <Text numberOfLines={2} style={{
            fontSize: 25,

        }}>{name}</Text>
         <Text  style={{
            fontSize: 18,
            fontWeight:"800",

        }}>${price}</Text>

<Text  style={{
            letterSpacing:1,
            lineHeight:20,
            marginVertical:15

        }} numberOfLines={18}>{Description}</Text>
        
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal:5,
        }}>
            <Text style={{
                color:colors.color3,
                fontWeight:"100"
            }}>Quantity</Text>

            <View style={{
                width:80,
                flexDirection:'row',
                justifyContent:"space-between",
                alignItems:"center",
            }}>
          <TouchableOpacity onPress={decrementQty}>
            <Avatar.Icon icon={"minus"} size={20} style={{borderRadius: 5,backgroundColor:colors.color5,height:25,width:25,}} />
          </TouchableOpacity>
          <Text style={{
            backgroundColor:colors.color4,height:25,width:25,textAlignVertical:"center",textAlign:"center",borderWidth:1,borderRadius:5,borderColor:colors.color5,
          }}>{quantity}</Text>
           <TouchableOpacity onPress={incrementQty}>
            <Avatar.Icon icon={"plus"} size={20} style={{borderRadius: 5,backgroundColor:colors.color5,height:25,width:25,}} />
          </TouchableOpacity>
            </View>

        </View>


        <TouchableOpacity activeOpacity={0.9} onPress={addToCardHandler}>
            <Button  icon={"cart"} style={Style.btn} textColor={colors.color2}>
                Add to Cart
            </Button>
        </TouchableOpacity>
         
      </View>
    </View>
  )
}

const CarouselCardItem = ( { item,index }) =>(
    <View style={Style.container} key={index}>
        <Image source={{ uri:item.url }} style={ Style.image } />
    </View>
);

    const Style = StyleSheet.create({
        container:{
            backgroundColor: colors.color1,
            width: ITEM_WIDTH,
            paddingVertical: 40,
            height: 380,
        },
        image:{
            width:ITEM_WIDTH,
            resizeMode: "contain", 
            height:250
        },
        btn:{
            backgroundColor:colors.color3,
            borderRadius:100,
            padding:5,
            marginVertical:35
        }

    })

export default ProductDetails