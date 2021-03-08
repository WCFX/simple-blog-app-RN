import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#5cad87'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
`;

export const ContainerList = styled.View`
  padding: 5px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #eee;
`;

export const List = styled.FlatList`
  flex: 1;
  border: ${StyleSheet.hairlineWidth}px;
  border-radius: 10px;
  border-color: #222;
  width: 90%;
  margin-top: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 8px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  color: #fff;
`;
