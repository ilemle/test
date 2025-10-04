import { RootAppNavigationStack } from '@navigations';
import { StatusBar, StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
function App() {

  return (
    <SafeAreaProvider>
      <StatusBar />
      <AppContent />
    </SafeAreaProvider>
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
