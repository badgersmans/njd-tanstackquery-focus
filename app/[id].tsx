import { getMovieById } from '@/api/movies'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export default function MovieDetails() {
  const {id} = useLocalSearchParams()
  const {data: movie, error, isLoading} = useQuery({ 
    queryKey: ['movies', id], 
    queryFn: () => getMovieById(id)
  })

  if(isLoading) {
    return <ActivityIndicator />
  }
  if(error) {
    return <Text>{error.message}</Text>
  }

  return (
    <View>
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600'
  }
})