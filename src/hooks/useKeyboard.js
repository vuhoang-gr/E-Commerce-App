import {Keyboard} from 'react-native';
import {useState, useEffect} from 'react';

const useKeyboard = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(1);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(0);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return keyboardStatus;
};

export default useKeyboard;
