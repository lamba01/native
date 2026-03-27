// import AntDesign from "@expo/vector-icons/AntDesign";
// import { Image } from "expo-image";
// import { useState } from "react";
// import {
//   FlatList,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import CustomDropdown from "../../components/CustomDropdown";
// const modalImage = require("../../assets/images/modal-bg.png");
// const mochaimg = require("../../assets/images/mocha.png");
// const categories = ["All Coffee", "Machiato", "Latte", "American"];

// export default function index() {
//   const options = [
//     { label: "Lagos, Nigeria", value: "Lagos, Nigeria" },
//     { label: "Abuja, Nigeria", value: "Abuja, Nigeria" },
//     { label: "Bilzen, Tanjungbalai", value: "Bilzen, Tanjungbalai" },
//   ];
//   const coffeeData = [
//     {
//       id: "1",
//       name: "Caffe Mocha",
//       description: "Deep Foam",
//       price: "$4.53",
//       image: require("../../assets/images/mocha.png"),
//     },
//     {
//       id: "2",
//       name: "Flat White",
//       description: "Espresso",
//       price: "$3.50",
//       image: require("../../assets/images/flatwhite.png"),
//     },
//     {
//       id: "3",
//       name: "Caffe Latte",
//       description: "Milk Foam",
//       price: "$4.00",
//       image: require("../../assets/images/latte.png"),
//     },
//     {
//       id: "4",
//       name: "Americano",
//       description: "Black Coffee",
//       price: "$3.00",
//       image: require("../../assets/images/american.png"),
//     },
//   ];

//   const [location, setLocation] = useState("");
//   const [selected, setSelected] = useState("All Coffee");
//   return (
//     <View style={styles.container}>
//       <View style={styles.minicontainer}>
//         <View>
//           <Text
//             style={{
//               color: "#948b8b",
//               fontSize: 15,
//               fontWeight: 600,
//               paddingVertical: 5,
//             }}
//           >
//             Location
//           </Text>
//         </View>
//         <CustomDropdown
//           options={options}
//           placeholder="Select a location"
//           onSelect={(value) => setLocation(value)}
//         />
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginTop: 20,
//           }}
//         >
//           <TextInput
//             placeholder="Search coffee"
//             returnKeyType="search"
//             style={styles.formstyle}
//             placeholderTextColor="#948b8b"
//           />
//           <View style={styles.filter}>
//             <AntDesign name="control" size={20} color="white" />
//           </View>
//         </View>
//       </View>
//       {/* <Text style={{ color: "white" }}>Hello world</Text>
//       <Link href="/cover" asChild>
//         <Button title="Open Cover" />
//       </Link> */}
//       <View style={styles.maincontainer}>
//         {/* <View style={{ flex: 1, alignItems: "center", width: "100%" }}> */}
//         <ImageBackground
//           source={modalImage}
//           resizeMode="cover"
//           style={{
//             // width: "100%",
//             height: 150,
//             borderRadius: 10,
//             padding: 15,
//             marginTop: -100,
//           }}
//         >
//           <View style={styles.modal}>
//             <Text style={styles.promotext}>Promo</Text>
//             <Text style={styles.buytext}>Buy one get one FREE</Text>
//           </View>
//         </ImageBackground>
//         <View style={styles.selectcoffee}>
//           {categories.map((item) => (
//             <TouchableOpacity
//               key={item}
//               style={[
//                 styles.categoryItem,
//                 selected === item && styles.activeItem,
//               ]}
//               onPress={() => setSelected(item)}
//             >
//               <Text
//                 style={[
//                   styles.categoryText,
//                   selected === item && styles.activeText,
//                 ]}
//               >
//                 {item}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//       <FlatList
//         data={coffeeData}
//         keyExtractor={(item) => item.id}
//         // Vertical // makes it scroll sideways
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ gap: 15, paddingHorizontal: 20 }}
//         renderItem={({ item }) => (
//           <View
//             style={{
//               width: 200,
//               backgroundColor: "#f0f0f0",
//               borderRadius: 10,
//               padding: 10,
//             }}
//           >
//             <Image source={item.image} style={{ width: 150, height: 150 }} />
//             <View style={{ padding: 5 }}>
//               <Text style={{ color: "black", textTransform: "capitalize" }}>
//                 {item.name}
//               </Text>
//               <Text style={{ color: "gray" }}>{item.description}</Text>
//               <View>
//                 <Text style={{ color: "black", fontWeight: 800 }}>
//                   {item.price}
//                 </Text>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//   },
//   minicontainer: {
//     paddingVertical: 70,
//     paddingHorizontal: 20,
//     backgroundColor: "#242424",
//     height: "40%",
//   },
//   maincontainer: {
//     backgroundColor: "white",
//     height: "60%",
//     width: "100%",
//     padding: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//     flexDirection: "column",
//   },
//   formstyle: {
//     borderWidth: 1,
//     borderColor: "#2A2A2A",
//     backgroundColor: "#2A2A2A",
//     borderRadius: 10,
//     padding: 15,
//     width: "85%",
//     color: "white",
//     fontSize: 18,
//   },
//   filter: {
//     backgroundColor: "#9E633E",
//     padding: 15,
//     borderRadius: 10,
//   },
//   selectcoffee: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     gap: 20,
//   },
//   categoryItem: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     backgroundColor: "#f0f0f0",
//   },
//   activeItem: { backgroundColor: "#9E633E" },
//   categoryText: {
//     color: "#666",
//     fontSize: 14,
//   },
//   activeText: {
//     color: "#fff",
//     fontWeight: "600",
//   },
//   modal: {
//     width: "90%",
//     flex: 1,
//     alignItems: "flex-start",
//     // height: 50,
//   },
//   promotext: {
//     backgroundColor: "red",
//     color: "white",
//     padding: 5,
//     borderRadius: 8,
//     fontWeight: 700,
//   },
//   buytext: {
//     color: "white",
//     fontSize: 32,
//     // backgroundColor: "rgba(0, 0, 0, 0.5)",
//     fontWeight: 800,
//   },
// });

import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import { useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomDropdown from "../../components/CustomDropdown";

const modalImage = require("../../assets/images/modal-bg.png");
const categories = ["All Coffee", "Machiato", "Latte", "American"];

const coffeeData = [
  {
    id: "1",
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: "$4.53",
    image: require("../../assets/images/mocha.png"),
  },
  {
    id: "2",
    name: "Flat White",
    description: "Espresso",
    price: "$3.50",
    image: require("../../assets/images/flatwhite.png"),
  },
  {
    id: "3",
    name: "Caffe Latte",
    description: "Milk Foam",
    price: "$4.00",
    image: require("../../assets/images/latte.png"),
  },
  {
    id: "4",
    name: "Americano",
    description: "Black Coffee",
    price: "$3.00",
    image: require("../../assets/images/american.png"),
  },
];

export default function Index() {
  const options = [
    { label: "Lagos, Nigeria", value: "Lagos, Nigeria" },
    { label: "Abuja, Nigeria", value: "Abuja, Nigeria" },
    { label: "Bilzen, Tanjungbalai", value: "Bilzen, Tanjungbalai" },
  ];

  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState("All Coffee");

  return (
    <FlatList
      data={coffeeData}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={{ gap: 15, paddingHorizontal: 20 }}
      contentContainerStyle={{ gap: 15, paddingBottom: 30 }}
      // contentContainerStyle={styles.listContent}
      ListHeaderComponent={
        <>
          {/* Top dark section */}
          <View style={styles.minicontainer}>
            <Text style={styles.locationLabel}>Location</Text>
            <CustomDropdown
              options={options}
              placeholder="Select a location"
              onSelect={(value) => setLocation(value)}
            />
            <View style={styles.searchrow}>
              <TextInput
                placeholder="Search coffee"
                returnKeyType="search"
                style={styles.formstyle}
                placeholderTextColor="#948b8b"
              />
              <View style={styles.filter}>
                <AntDesign name="control" size={20} color="white" />
              </View>
            </View>
          </View>

          {/* White section with promo banner and categories */}
          <View style={styles.maincontainer}>
            <ImageBackground
              source={modalImage}
              resizeMode="cover"
              style={styles.promobanner}
            >
              <View style={styles.modal}>
                <Text style={styles.promotext}>Promo</Text>
                <Text style={styles.buytext}>Buy one get one FREE</Text>
              </View>
            </ImageBackground>

            <View style={styles.selectcoffee}>
              {categories.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.categoryItem,
                    selected === item && styles.activeItem,
                  ]}
                  onPress={() => setSelected(item)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selected === item && styles.activeText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      }
      renderItem={({ item }) => (
        // <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardimage} />
          <View style={styles.cardinfo}>
            <Text style={styles.cardname}>{item.name}</Text>
            <Text style={styles.carddesc}>{item.description}</Text>
            <Text style={styles.cardprice}>{item.price}</Text>
          </View>
          {/* </View> */}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 30,
  },
  minicontainer: {
    paddingTop: 20,
    paddingBottom: 80,
    paddingHorizontal: 20,
    backgroundColor: "#242424",
  },
  locationLabel: {
    color: "#948b8b",
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 5,
  },
  searchrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  formstyle: {
    borderWidth: 1,
    borderColor: "#2A2A2A",
    backgroundColor: "#2A2A2A",
    borderRadius: 10,
    padding: 15,
    width: "85%",
    color: "white",
    fontSize: 18,
  },
  filter: {
    backgroundColor: "#9E633E",
    padding: 15,
    borderRadius: 10,
  },
  maincontainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  promobanner: {
    height: 150,
    borderRadius: 10,
    padding: 15,
    marginTop: -60,
    overflow: "hidden",
  },
  modal: {
    width: "90%",
    flex: 1,
    alignItems: "flex-start",
  },
  promotext: {
    backgroundColor: "red",
    color: "white",
    padding: 5,
    borderRadius: 8,
    fontWeight: "700",
  },
  buytext: {
    color: "white",
    fontSize: 32,
    fontWeight: "800",
  },
  selectcoffee: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
    flexWrap: "wrap",
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  activeItem: {
    backgroundColor: "#9E633E",
  },
  categoryText: {
    color: "#666",
    fontSize: 14,
  },
  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
  card: {
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    flex: 1,
  },
  cardimage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardinfo: {
    flex: 1,
    gap: 4,
  },
  cardname: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  carddesc: {
    color: "gray",
    fontSize: 14,
  },
  cardprice: {
    color: "black",
    fontWeight: "800",
    fontSize: 16,
  },
});
