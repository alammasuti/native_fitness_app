import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View
        style={{
          backgroundColor: "orange",
          padding: 10,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <View style={styles.kpiBox}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "white", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View style={styles.kpiBox}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {calories.toFixed(2)}
            </Text>
            <Text style={{ color: "white", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View style={styles.kpiBox}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {minutes.toFixed(1)}
            </Text>
            <Text style={{ color: "white", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>
        <FitnessCards />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  kpiBox: {
    borderColor: "black",
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 10,
    width: 120,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D4E917",
  },
});
