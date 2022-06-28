import React from "react";
import { services } from "../../data/services";
import { View, Text } from "react-native";
import { styles } from "./styles";

const ServiceDetailsScreen = ({ route }) => {
  const { serviceId } = route.params;
  const service = services.find((service) => service.id === serviceId);
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.text}>id: {service.id}</Text>
        <Text style={styles.text}>{service.name}</Text>
        <Text style={styles.text}>{service.description}</Text>
        <Text style={styles.text}>${service.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ServiceDetailsScreen;
