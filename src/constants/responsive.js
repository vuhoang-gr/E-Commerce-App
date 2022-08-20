import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const [designWidth, designHeight] = [375, 734];

const scale = {
  scaleWidth(number) {
    return (number * width) / designWidth;
  },
  getHeight: designHeight,
  getWidth: designWidth,
  getCurrentWidth: width,
  getCurrentHeight: height,
  scaleHeight(number) {
    return (number * height) / designHeight;
  },
};

export default scale;
