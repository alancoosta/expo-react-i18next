import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "../../components";
import { Container, Title, Subtitle } from "./styles";

const Profile: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Seja bem vinda(o)</Title>

      <Button onPress={() => navigate("Home")}>Navegar para Home</Button>

      <Subtitle>Aprovei bastante nosso conteúdos</Subtitle>
    </Container>
  );
};

export default Profile;
