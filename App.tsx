
import { RootAppNavigationStack } from '@navigations';
import { StatusBar, StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistor, store } from '@store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <StatusBar />
        <AppContent />
      </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

function AppContent() {
  const inserts=useSafeAreaInsets()
  return (
    <View style={[styles.container, {paddingTop:inserts.top}]}>
      <RootAppNavigationStack  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
