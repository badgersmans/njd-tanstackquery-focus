import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { getTopRatedMovies } from '@/api/movies';
import { useQuery } from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListItem';

export default function MovieScreen() {
  const {data: movies, error, isLoading} = useQuery({ 
    queryKey: ['movies'], 
    queryFn: getTopRatedMovies 
  })

  if(isLoading) {
    return <ActivityIndicator />
  }
  if(error) {
    console.log(error)
  }

  return (
    <View>
      <FlatList 
        data={movies}
        renderItem={({item}) => (
          <MovieListItem movie={item} />
        )}
        numColumns={2}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.columnStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 5
  },
  columnStyles: {
    gap: 10
  }
});