import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu login"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 24, 
    borderRadius: 8, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '100%',
    maxWidth: 300,
  },
  title: {
    fontSize: 24, 
    marginBottom: 16, 
    textAlign: 'center',
    color: '#1f2937', 
  },
  inputGroup: {
    marginBottom: 16, 
  },
  label: {
    color: '#1f2937', 
    marginBottom: 8, 
  },
  input: {
    width: '100%',
    paddingHorizontal: 12, 
    paddingVertical: 8, 
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4, 
  },
  button: {
    width: '100%',
    backgroundColor: '#3b82f6', 
    paddingVertical: 12, 
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

