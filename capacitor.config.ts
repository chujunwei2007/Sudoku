import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'com.example.sudoku',
  appName: '数独',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
