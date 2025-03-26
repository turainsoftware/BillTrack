const fonts = {
  bold: 'Poppins-Bold',
  italic: 'Poppins-Italic',
  light: 'Poppins-Light',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  semibold: 'Poppins-SemiBold',
  thin: 'Poppins-Thin',
};

const colors = {
  primary: '#FB833F',
  secondary: '#EA6B23',
  backgroundColor: '#121212',
  textSlate: '#4D4D4D',
  border: '#AAAAAA',
};

// Validations
const verifyMobile = number => /^[6-9]\d{9}$/.test(number);

export {fonts, colors, verifyMobile};
