export interface AppTheme {
  fonts: {
    title: string;
    subtitle: string;
    codeSubtitle: string;
    paragraph: string;
    button: string;
  },
  colors: {
    primary: string;
    secondary: string;
  }
}

const theme: AppTheme = {
  fonts: {
    title: 'ReadexPro_700Bold',
    subtitle: 'ReadexPro_600SemiBold',
    codeSubtitle: 'FiraCode_600SemiBold',
    paragraph: 'ReadexPro_400Regular',
    button: 'ReadexPro_600SemiBold'
  },
  colors: {
    primary: '#6C0BA1',
    secondary: '#9710E0'
  }
};

export default theme;
