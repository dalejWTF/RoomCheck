import React from "react";
import { View, Text } from "react-native";

import Carousel from "../components/Carousel";
import { data } from "../data/data";


const Home = ({navigation}) => {
    return(
        <View>
            <Carousel data= {data}/>
        </View>
    )
}

export default Home