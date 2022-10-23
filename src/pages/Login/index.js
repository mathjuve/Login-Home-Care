import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'

export default function PageLogin() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: "100%", height: "100%" }}
          reziseMode="contain"
        />
      </View>

      <Animatable.View 
      animation='fadeInUp'
      style={styles.containerForm}>
        <Text style={styles.text}>
          Selecione seu perfil abaixo para acessar sua conta:
        </Text>

        <TouchableOpacity style={styles.buttonResponsable}>
          <Text style={styles.buttonTextResponsable}>Responsável</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonProfessional}>
          <Text style={styles.buttonTextProfessional}>Profissional</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  containerLogo: {
    flex: 2,
    backgroundColor: "#006557",
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    flex: 3,
    paddingStart: "10%",
    paddingEnd: "10%",
  },

  text: {
    fontSize: 18,
    color: "#4D5957",
    marginTop: 37,
    marginBottom: 56,
  },

  buttonResponsable: {
    backgroundColor: "#07689F",
    borderRadius: 4,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    bottom: "5%",
  },

  buttonProfessional: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingVertical: 8,
    width: "100%",
    alignItems: "center",
    borderColor: "#07689F",
    borderWidth: 3,
  },
  buttonTextResponsable: {
    fontSize: 18,
    color: "#FFFFFF",
  },

  buttonTextProfessional: {
    fontSize: 18,
    color: "#07689F",
  },
});
