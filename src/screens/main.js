import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {setMessage} from '../redux/reducer';
import {sagaActions} from '../redux/sagaActions';
// import {setMessage} from '../redux/actions';

const Main = () => {
  const message = useAppSelector(state => state.message.message);
  const dispatch = useAppDispatch();
  const setMessageDispatch = data => dispatch(setMessage(data));
  const [text, onChangeText] = useState('Enter Text');

  return (
    <View style={styles.page}>
      <Text style={styles.message}>{message}</Text>
      <TextInput
        style={styles.input}
        placeholder={text}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setMessageDispatch(text)}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => dispatch({type: sagaActions.FETCH_WORD_SAGA})}>
        <Text style={styles.buttonText}>Random Word</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  message: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0096FF',
    paddingBottom: 100,
  },
  input: {
    marginVertical: 15,
    borderWidth: 2,
    width: '70%',
    borderRadius: 20,
    height: '18%',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#AAC4FF',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: '18%',
    marginBottom: 10,
  },
  button2: {
    backgroundColor: '#6F38C5',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: '18%',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Main;
