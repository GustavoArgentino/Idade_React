import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');

  const apenasnumeros = (text) => {
    const formattedText = text.replace(/[^0-9]/g, '');
    setAge(formattedText);
  };

  const handleGreet = () => {
    const ageValue = parseInt(age);

    if (ageValue >= 0 && ageValue <= 12) {
      setCategory('Criança');
    } else if (ageValue >= 13 && ageValue <= 17) {
      setCategory('Adolescente');
    } else if (ageValue >= 18 && ageValue <= 20) {
      setCategory('Jovem');
    } else if (ageValue >= 21 && ageValue <= 60) {
      setCategory('Adulto');
    } else if (ageValue > 60) {
      setCategory('Idoso');
    } else {
      setCategory('Idade inválida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoria de Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={apenasnumeros}
        value={age}
        keyboardType="numeric" 
      />
      <Button title="Verificar" onPress={handleGreet} />
      <Text style={styles.category}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  category: {
    marginTop: 20,
    fontSize: 18,
  },
});