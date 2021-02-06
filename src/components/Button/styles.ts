import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;

  border-radius: 8px;
  overflow: hidden;

  margin: 8px 0;
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ["#7300da", "#39adcc"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
`;
