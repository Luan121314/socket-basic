import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ClientComponent from './src/ClientComponent';


export default function App() {
  const [loadClient, setLoadClient] = useState(true);
  return (
    <View style={styles.container} >
      {/* LOAD OR UNLOAD THE CLIENT */}
      <Button title="client" onClick={() => setLoadClient(prevState => !prevState)}>
        STOP CLIENT
      </Button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <ClientComponent /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
