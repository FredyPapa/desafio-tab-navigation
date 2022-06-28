import React from "react";
import { services } from "../../data/services";
import { View, FlatList } from "react-native";
import { ServiceItem } from "../../components";
import { styles } from "./styles";

const ServicesScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const filterServices = services.filter(
    (service) => service.categoryId === categoryId
  );

  const onSelected = (item) => {
    navigation.navigate("ServiceDetails", {
      serviceId: item.id,
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <ServiceItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filterServices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ServicesScreen;
