import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';
import concert from "./assets/concert.png";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);
const ticketPrice = 99.99;



export default function App() {
  const [ticketCost, setTicketCost] = useState(0);
  const [numOfTickets, setNumOfTickets] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ticket Vault</Text>
      <TextInput onChangeText={text => setNumOfTickets(text)} style={styles.numOfTickets} placeholder='Number of Tickets'></TextInput>
      <Pressable style={styles.button} onPress={calculatePrice} >
        <Text style={styles.buttonText}>Find The Cost</Text>
      </Pressable>
      <Text style={styles.ticketCost}>Ticket Cost: {ticketCost}</Text>
      <Image style={styles.concertImage} source={concert}></Image>
      <StatusBar style="auto" />
    </View>
  );

  function calculatePrice(){
    setTicketCost(ticketPrice * numOfTickets)
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  header: {
    fontSize: 38,
    fontWeight: 'bold',
    paddingBottom: 25,
    marginTop: 75
  },
  button: {
    backgroundColor: '#f98b88',
    marginTop: 25,
    width: 225,
   
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  numOfTickets: {
    
    borderColor: 'black',
    borderWidth: 2,
    width: 225,
    fontSize: 25,

  },
  ticketCost: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,

    },

  concertImage: {
    marginTop: 125
  }
  
});
