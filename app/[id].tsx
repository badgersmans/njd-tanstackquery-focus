import { getMovieById } from '@/api/movies'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { addMovieToWatchlist } from '@/api/watchlist';

export default function MovieDetails() {
  const {id} = useLocalSearchParams()
  const client = useQueryClient()
  const {data: movie, error, isLoading} = useQuery({ 
    queryKey: ['movies', id], 
    queryFn: () => getMovieById(id)
  })

  const {mutate} = useMutation({
    mutationFn: () => addMovieToWatchlist(id),
    onSuccess: () => {
      client.invalidateQueries(['watchlist'])
    }
  })

  if(isLoading) {
    return <ActivityIndicator />
  }
  if(error) {
    return <Text>{error.message}</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: movie.title}} />
      <Image source={{uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}} style={styles.image}/>

      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>{movie.title}</Text>
          <TouchableOpacity onPress={() => mutate()}>
            <MaterialIcons name="playlist-add" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  overview: {
    fontSize: 16,
    marginVertical: 10
  },
  image: {
    width: '100%',
    aspectRatio: 3/2
  }
})