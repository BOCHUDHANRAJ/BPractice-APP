import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import OrderItem from "../../components/OrderItem";
import { useIsFocused } from "@react-navigation/native";
import { Headline } from "react-native-paper";

const orders = [{
    name:"Tiles",
    _id:"ADBSDSD",
    price:"243",
    status:"Fullfilled",
    paymentMethod:"Cod",
  },
  {
    name:"floor", 
    _id:"dhan",
    price:"243",
    status:"Fullfilled", 
    paymentMethod:"Cod",
  },
  {
    name:"bathtub",
    _id:"pink",
    price:"243",
    status:"Fullfilled",
    paymentMethod:"Cod",
  },
  {
    name:"Lighting", 
    _id:"green"
  },]

const AdminOrders = ({ navigation }) => {
  const isFocused = useIsFocused();

  const loading = false;


  

  const updateHandler = (id) => {
    console.log(id);
  };
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
        <Text style={formHeading}>All Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt}
                  address={item._id}
                  admin={true}
                  updateHandler={updateHandler}
                  loading={loading}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default AdminOrders;