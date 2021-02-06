import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;

  border-radius: 8px;
  overflow: hidden;
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ["#7300da", "#39adcc"],
  start: { x: 0, y: 0.5 },
  end: { x: 0, y: 1 },
})`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
`;
