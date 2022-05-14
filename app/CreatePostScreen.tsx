import { useState } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";
import { useMutation } from "react-query";
import { AXIOS_CLIENT } from "./axios";
import { PostProps } from "./Post";
import theme from "./theme";

interface FormFieldProps {
  field: keyof PostProps,
  postInput: PostProps,
  setPostInput: (updatedState: PostProps) => void;
}

const FormField = ({ field, postInput, setPostInput }: FormFieldProps) => {
  return (
    <View style={styles.formField}>
      <Text style={styles.formFieldTitle}>{field.charAt(0).toUpperCase() + field.substring(1)}</Text>
      <TextInput style={styles.formFieldInput} onChangeText={(e) => {
        setPostInput({
          ...postInput,
          [field]: e,
        });
      }} />
    </View>
  );
}

export default function CreatePostScreen({ navigation }) {
  const [postInput, setPostInput] = useState<PostProps>({
    author: '',
    body: '',
    title: ''
  });

  const createPostMutation = useMutation<unknown, unknown, PostProps>(postData => {
    return AXIOS_CLIENT.post('/posts', postData);
  }, {
    onSuccess: () => navigation.navigate('Posts')
  });

  const handleSubmit = () => createPostMutation.mutate(postInput);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormField field="title" postInput={postInput} setPostInput={setPostInput} />
        <FormField field="body" postInput={postInput} setPostInput={setPostInput} />
        <FormField field="author" postInput={postInput} setPostInput={setPostInput} />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          Create Post
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.goBack()
        }}>
          Go Back
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 20
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
  form: {
    width: '85%',
    marginHorizontal: 'auto'
  },
  formField: {
    marginBottom: 20,
  },
  formFieldTitle: {
    fontFamily: theme.fonts.title,
    fontSize: 18,
    marginBottom: 8
  },
  formFieldInput: {
    borderWidth: 1,
    borderColor: "#faf",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8
  }
});
