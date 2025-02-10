import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

const  cartItems  = [{
  id:"abcd",
   name:"tile", 
   price:"345", 
   image:"https://buildmyplace.com/cdn/shop/collections/LED-High-Bay_190x190.jpg?v=1701882824",
    stock:"34", 
    quantity:"2"
},
{
id:"abcd33",
   name:"tile", 
   price:"345", 
   image:"https://buildmyplace.com/cdn/shop/collections/LED-High-Bay_190x190.jpg?v=1701882824",
    stock:"34", 
    quantity:"2"
},]

const Cart = () => {
  const navigate = useNavigation();


  const incrementHandler = (id, name, price, image, stock, quantity) => {
   console.log("Increasing",id, name, price, image, stock, quantity)
  };

  const decrementHandler = (id, name, price, image, stock, quantity) => {
    console.log("decreasing",id, name, price, image, stock, quantity)
  };
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} /> 

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.length > 0 ? (
            cartItems.map((i, index) => (
              <CartItem
                navigate={navigate}
                key={i.product}
                id={i.product}
                name={i.name}
                stock={i.stock}
                amount={i.price}
                imgSrc={i.image}
                index={index}
                qty={i.quantity}
                incrementhandler={incrementHandler}
                decrementHandler={decrementHandler}
              />
            ))
          ) : (
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              No Items Yet
            </Text>
          )}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>{cartItems.length} Items</Text>
        <Text>
          ₹
          {cartItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          )}
        </Text>
      </View>

      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2} 
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;