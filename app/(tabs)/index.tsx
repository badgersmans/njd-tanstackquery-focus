import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { getTopRatedMovies } from '@/api/movies';
import { useQuery } from '@tanstack/react-query';

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
    <View style={styles.container}>
      <FlatList 
        data={movies}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
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