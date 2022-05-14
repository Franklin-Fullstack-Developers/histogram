import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import { AXIOS_CLIENT } from "./axios";
import { Post, PostProps } from "./Post";
import theme from "./theme";

export default function PostsScreen({ navigation }) {
  const { data, isLoading, isError } = useQuery('posts', () => {
    return AXIOS_CLIENT.get('/posts');
  });

  const posts: PostProps[] = data?.data;

  if (isLoading) {
    return <View>Loading posts</View>;
  }

  if (isError) {
    return <View>Could not load posts</View>;
  }

  return (
    <View>
      <View style={styles.posts}>
        <Text style={styles.title}>Posts</Text>

        {posts.map(post => <Post {...post} />)}
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("CreatePost");
        }}>
          Create a Post
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Home");
        }}>
          Go to Home
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  posts: {
    width : '85%',
    marginHorizontal: 'auto',
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: theme.fonts.title
  },
  button: {
    textAlign: 'center',
    width: '85%',
    height: 50,
    marginHorizontal: 'auto',
    backgroundColor: theme.colors.secondary,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: theme.fonts.button,
    color: 'white',
    borderRadius: 20,
    marginTop: 20
  },
});
