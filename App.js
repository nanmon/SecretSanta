import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [ count, setCount ] = React.useState(0);
  React.useEffect(() => {
    console.warn('wtf');
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => setCount(c => c + 1)} title={count + ' presses'}/>
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
