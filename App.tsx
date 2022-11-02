import React from 'react'
import { Box, NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems='center' justifyContent='center'>
        Hello Beer!
      </Box>
    </NativeBaseProvider>
  );
}