import { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { COLORS, NFTData } from "../constants";
import { HomeHeader, Card, FocusedStatusBar } from "../components";
const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const handleSearch = (value) => {
    if (!value.length) {
      return setNftData(NFTData);
    }
    const filteredData = NFTData.filter((i) => {
      return i.name.toLowerCase().includes(value.toLowerCase());
    });
    if (filteredData.length) {
      setNftData(filteredData);
    } else setNftData(NFTData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <Card items={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={{ zIndex: -1, position: "absolute", inset: 0 }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
