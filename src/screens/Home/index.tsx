import React from "react";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { useAppLocale } from "../../hooks/locale";
import { Button } from "../../components";

import { Container, Title, Subtitle } from "./styles";

const Home: React.FC = () => {
  const { t } = useTranslation(["Home"]);
  const { navigate } = useNavigation();
  const { handleChangeLocale } = useAppLocale();

  return (
    <Container>
      <Title>{t("Home:title")}</Title>

      <Button onPress={() => navigate("Profile")}>
        {t("Home:button_text")}
      </Button>

      <Subtitle>{t("Home:subtitle")}</Subtitle>

      <Button onPress={() => handleChangeLocale("pt-BR")}>
        {t("Home:button_locale.portuguese")}
      </Button>

      <Button onPress={() => handleChangeLocale("en-US")}>
        {t("Home:button_locale.english")}
      </Button>

      <Button onPress={() => handleChangeLocale("es-ES")}>
        {t("Home:button_locale.spanish")}
      </Button>
    </Container>
  );
};

export default Home;
