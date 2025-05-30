import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { getTopRatedMovies } from '@/api/movies';
import { useInfiniteQuery } from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListItem';

export default function MovieScreen() {
  const {data, error, isLoading, fetchNextPage} = useInfiniteQuery({ 
    queryKey: ['movies'], 
    queryFn: ({pageParam}) => getTopRatedMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  })

  if(isLoading) {
    return <ActivityIndicator />
  }
  if(error) {
    console.log(error)
  }

  console.log(data)
  const movies = data?.pages.flat();

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
        onEndReached={() => {
          fetchNextPage()
        }}
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