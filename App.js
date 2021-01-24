import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

export default function App() {
  const [secretNumber, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guessedNumber, setValue] = useState('');
  const [result, setResult] = useState('Guess a number between 1-100');
  const [total, setTotal] = useState(0);

  const checkGuess = () =>{
    const newTotal = total + 1;
    setTotal(newTotal);

    if (guessedNumber == secretNumber) {
      Alert.alert('You guessed the number in ' + newTotal + ' guesses')
      setNumber(Math.floor(Math.random() * 100) + 1);
      setResult('Guess a number between 1-100');
      setTotal(0);
      setValue('');
    } else if (guessedNumber > secretNumber) {
      setResult('Your guess ' + guessedNumber + ' is too high');
    } else {
      setResult('Your guess ' + guessedNumber + ' is too low');
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result}</Text>
      <TextInput style={styles.textInput}
        onChangeText={guessedNumber => setValue(guessedNumber)} 
        value={guessedNumber}
        keyboardType={'numeric'}
      />
      <Button color="#000" onPress={checkGuess} title="MAKE A GUESS" />   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',  
  },
  text: {
    fontSize: 18,
  },
  textInput: {
    height: 40, 
    width: "30%", 
    borderColor: '#808080', 
    borderWidth: 2, 
    margin: 5,
    fontSize: 18,    
  },  
});
