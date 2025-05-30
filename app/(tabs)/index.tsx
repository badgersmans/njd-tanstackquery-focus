import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { getTopRatedMovies } from '@/api/movies';
import { useEffect, useState } from 'react';

export default function MovieScreen() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getTopRatedMovies();
      console.log(movies)
      setMovies(movies)
    }
    fetchMovies();
  }, [])

  return (
    <View style={styles.container}>
      <Text>sdss</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});