import { StyleSheet, View, Text } from "react-native";
import theme from "./theme";

export interface PostProps {
  title: string;
  body: string;
  author: string;
}

export const Post = ({ author, body, title }: PostProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.author}>@{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 8,
    borderColor: '#c7c7c7'
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 18,
    marginBottom: 2
  },
  body: {
    fontFamily: theme.fonts.paragraph,
    fontSize: 14,
    marginBottom: 2
  },
  author: {
    fontFamily: theme.fonts.codeSubtitle,
    fontSize: 14,
    color: '#64809c'
  }
});
