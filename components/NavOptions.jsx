import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text style={tw`mt-2 text-lg font-semibold `}>{item.title}</Text>
          </View>
          <Icon
            type="antdesign"
            name="arrowright"
            color="white"
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          />
        </TouchableOpacity>
      )}
      horizontal
      keyExtractor={(item) => item.id}
    />
  );
  S;
};

export default NavOptions;
