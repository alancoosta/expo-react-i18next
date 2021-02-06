import React from "react";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { useAppLocale } from "../../hooks/locale";
import { Button } from "../../components";

import { Container, Title, Subtitle } from "./styles";

const Profile: React.FC = () => {
  const { t } = useTranslation(["Profile"]);
  const { goBack } = useNavigation();
  const { handleChangeLocale } = useAppLocale();

  return (
    <Container>
      <Title>{t("Profile:title")}</Title>

      <Button onPress={() => goBack()}>{t("Profile:button_text")}</Button>

      <Subtitle>{t("Profile:subtitle")}</Subtitle>

      <Button onPress={() => handleChangeLocale("pt-BR")}>
        {t("Profile:button_locale.portuguese")}
      </Button>

      <Button onPress={() => handleChangeLocale("en-US")}>
        {t("Profile:button_locale.english")}
      </Button>
    </Container>
  );
};

export default Profile;
