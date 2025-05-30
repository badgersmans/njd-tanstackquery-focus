import { Image, Pressable, StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

const BASE_URL = `https://image.tmdb.org/t/p/w500`

export default function MovieListItem({movie}) {
  const imageSource = `${BASE_URL}${movie.poster_path}`

  return (
    <Link href={`${movie.id}`} style={styles.container} asChild>
      <Pressable>
        <Image source={{uri: imageSource}} style={styles.image} />
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    // padding: 10
  },
  title: {
    // fontSize: 16,
  },
  image: {
    width: '100%',
    aspectRatio: 3/5,
    borderRadius: 20
  }
})