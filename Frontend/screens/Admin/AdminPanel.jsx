import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ButtonBox from "../../components/ButtonBox";
import ProductListHeading from "../../components/ProductListHeading"; 
import ProductListItem from "../../components/ProductListItem";
import Chart from "../../components/Chart";  

export const products = [{ 
  price: 2345,
  stock:23,
  name: "Tile", 
  category:"Tile",
  _id: "abcde",
  images:[{
    url:"https://buildmyplace.com/cdn/shop/collections/LED-High-Bay_190x190.jpg?v=1701882824",
  }, 
],
},
{ 
  price: 23456,
  stock:23,
  name: "Tile2", 
  category:"Tile2",
  _id: "abcde",
  images:[{
    url:"https://buildmyplace.com/cdn/shop/collections/LED-High-Bay_190x190.jpg?v=1701882824",
  }, 
],
},  
]; 
const AdminPanel = ({navigation}) => {
  const loading=false;

  const navigationHandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("categories");
        break;
      case "All Orders":
        navigation.navigate("adminorders");
        break;
      case "Product":
        navigation.navigate("newproduct");
        break;

      default:
        navigation.navigate("adminorders");
        break;
    }
  };

  

  const deleteProductHandler = (id) => {
    console.log("Deleteproducts"); 
  };


  return (
    <View style={defaultStyle}>
    <Header back={true} />
    {/* Heading */}
    <View style={{ paddingTop: 70, marginBottom: 20 }}>
      <Text style={formHeading}>Admin Panel</Text>
    </View>

    {loading ? (
      <Loader />
    ) : (
      <>
        <View
          style={{
            backgroundColor: colors.color3,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
        </View>

        <Chart inStock={12} outOfStock={24} />

        <View>
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              justifyContent: "space-between",
            }}
          >
            <ButtonBox
              icon={"plus"}
              text={"Product"}
              handler={navigationHandler}
            />

            <ButtonBox
              icon={"format-list-bulleted-square"}
              text={"All Orders"}
              handler={navigationHandler}
              reverse={true}
            />
            <ButtonBox
              icon={"plus"}
              text={"Category"}
              handler={navigationHandler}
            />
          </View>
        </View>

        <ProductListHeading />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {
              products.map((item, index) => (
                <ProductListItem
                  navigate={navigation}
                  deleteHandler={deleteProductHandler}
                  key={item._id}
                  id={item._id}  
                  i={index}
                  price={item.price}
                  stock={item.stock}
                  name={item.name}
                  category={item.category?.category}
                  imgSrc={item.images[0].url}
                />
              ))}
          </View>
        </ScrollView>
      </>
    )}
  </View>
  )
}

export default AdminPanel