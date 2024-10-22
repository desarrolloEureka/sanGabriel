import React from 'react';
import { Image, View } from 'react-native';
import SplashHook from '../../containers/begin/SplashHook';

const Splash = () => {
  const { } = SplashHook();

  return (
    <View>
      <Image
        source={require('../../../assets/splash.png')}
        style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
      />
    </View>
  );
};

export default Splash;