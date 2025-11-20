import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.umkmkar',
  appName: 'UMKM KAR',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    compileSdkVersion: 35,
    targetSdkVersion: 35,
  }
};

export default config;
