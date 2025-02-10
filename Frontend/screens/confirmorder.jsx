import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { useNavigation } from "@react-navigation/native"; 
import { Button } from "react-native-paper";

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
const ConfirmOrder = () => {
  const navigate = useNavigation();

  

  const [itemsPrice] = useState(
    cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
  );
  const [shippingCharges] = useState(itemsPrice > 10000 ? 0 : 200);
  const [tax] = useState(Number((0.18 * itemsPrice).toFixed()));
  const [totalAmount] = useState(itemsPrice + shippingCharges + tax);
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      {/* Heading */}
      <Heading
        containerStyle={{
          paddingTop: 70,
        }}
        text1="Confirm"
        text2="Order"
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView>
          {cartItems.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              price={i.price}
              image={i.image}
              name={i.name}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>

      <PriceTag heading={"Subtotal"} value={itemsPrice} />
      <PriceTag heading={"Shipping"} value={shippingCharges} />
      <PriceTag heading={"Tax"} value={tax} />
      <PriceTag heading={"Total"} value={totalAmount} />

      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment")
        }
      >
        <Button
          style={{ 
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon={"chevron-right"}
        >
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};
const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>₹{value}</Text>
  </View>
);

export default ConfirmOrder;