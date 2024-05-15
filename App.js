import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import firebaseApp from './firebaseConfig';
import { getAuth } from 'firebase/auth/web-extension';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Router } from './src';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}
