import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '@store';
import { selectFootballTeamsLoading } from '@store';
import { fetchFootballTeams } from '@store';

interface RefreshButtonProps {
  onPress?: () => void;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ onPress }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectFootballTeamsLoading);

  const handlePress = () => {
    dispatch(fetchFootballTeams());
    onPress?.();
  };

  return (
    <TouchableOpacity 
      style={[styles.button, loading && styles.buttonDisabled]} 
      onPress={handlePress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <Text style={styles.buttonText}>Обновить</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 10,
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
