import { View, Text,  TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { defaultStyle , colors } from '../styles/styles' 
import  Header  from '../components/Header' 
import SearchModal from '../components/SearchModal'
import { Button, Avatar } from 'react-native-paper'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'
import Heading from '../components/Heading' 
const cataegories = [ 
  {
    category: "Nice",
    "_id":"sdjkv"
  },
  {
    category: "Nice",
    "_id":"sdjkb"
  },
  {
    category: "Nice",
    "_id":"sdjka"
  },
  {
    category: "Nice",
    "_id":"sdjkc"
  },
  {
    category: "Nice",
    "_id":"sdjkab"
  },
  {
    category: "Nice", 
    "_id":"sdjkcf"
  },
];

export const products = [{ 
  price: 2345,
  stock:23,
  name: "Tile",
  _id: "abcde",
  images:[{
    url:"https://buildmyplace.com/cdn/shop/collections/LED-High-Bay_190x190.jpg?v=1701882824",
  }, 
],
},  
]; 
const Home = () => {
  

  const [category,setCategory] = useState("");
  const [activeSearch,setActiveSearch] = useState("false");
  const [searchQuery,setSearchQuery] = useState(""); 

  const navigate = useNavigation();

  const categoryButtonHandler = (id) =>{
    setCategory(id);
  }

  const addToCardHandler = (id)=>{
console.log("add to cart", id)
  }
 
  return (
    <> 
   {
    activeSearch && (
      <SearchModal 
      searchQuery={searchQuery} 
      setSearchQuery={setSearchQuery} 
      setActiveSearch={setActiveSearch}   
      products={products}/>  
    )
   }
    <View style={defaultStyle}>    
    {/* Header */}
         <Header /> 
       <View style={{
        paddingTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
       }}>
       <Heading  text1='Our' text2='Products'/>
       {/* Search */}
       <View>
        <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
          <Avatar.Icon
          icon={"magnify"}
          size={50}
          color={"gray"}
          style={{ backgroundColor:colors.color2 , elevation:12}}  />
        </TouchableOpacity>
       </View>
       </View>
       {/* cataegories */}
       <View 
       style={{
        flexDirection: "row",
        height: 80,
       }}>
        <ScrollView contentContainerStyle={{
          alignItems: "center"
        }} horizontal showsHorizontalScrollIndicator={false}>
       {
        cataegories.map((item,index) =>(
          <Button 
          key={item._id}
          style={{
            backgroundColor:category===item._id? "red" : colors.color5,
            borderRadius:100,
            margin: 5,
           }}
           onPress={() => categoryButtonHandler(item._id)}>
          <Text style={{
            fontSize: 12,
            color: category===item._id?  colors.color2 : "gray",
          }}>{item.category}</Text>  
           </Button>
        ))
       }
       </ScrollView>
       </View>
       {/* Productss */}
      
        {/* Products */}

        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

     
    <Footer />
    </>
  )
}

export default Home