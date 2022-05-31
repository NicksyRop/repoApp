import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Box, Button, Icon, Input } from "native-base";
import { useValidation } from "react-native-form-validator";

const SignIn = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { username, password },
    });

  const _onPressButton = () => {
    validate({
      username: { required: true, minlength: 3, maxlength: 10 },
      password: { required: true, minlength: 6 },
    });
  };
  return (
    <Box alignItems="center">
      <Input
        mx="3"
        variant="rounded"
        placeholder="Username"
        w="90%"
        mt="5"
        value={username}
        onChangeText={(input) => setUsername(input)}
      />
      {isFieldInError("username") &&
        getErrorsInField("username").map((errorMessage) => (
          <Text style={{ color: "#d73a4a" }}>{errorMessage}</Text>
        ))}
      <Input
        mx="3"
        variant="rounded"
        placeholder="Password"
        value={password}
        onChangeText={(input) => setPassword(input)}
        w="90%"
        mt="5"
        secureTextEntry={true}
      />
      {isFieldInError("password") &&
        getErrorsInField("password").map((errorMessage) => (
          <Text style={{ color: "#d73a4a" }}>{errorMessage}</Text>
        ))}
      <Button
        small
        primary
        w="90%"
        style={{ marginTop: 10 }}
        onPress={_onPressButton}
      >
        <Text>Sign In</Text>
        {/* <Text>{getErrorMessages()}</Text> */}
      </Button>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default SignIn;
