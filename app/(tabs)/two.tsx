import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListItem';
import { getMovieWatchlist } from '@/api/watchlist';

export default function WatchList() {
  const {data: movies, error, isLoading} = useQuery({
    queryKey: ['watchlist'],
    queryFn: getMovieWatchlist
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