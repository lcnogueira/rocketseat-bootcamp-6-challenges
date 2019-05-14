import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
`;

export const ContentContainer = styled.View`
  background-color: #fff;
  border-radius: 5px;
  margin: 0 20px;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const TextInput = styled.TextInput`
  align-self: stretch;
  border-color: #ddd;
  border-radius: 5px;
  border-width: 1px;
  color: #999;
  font-size: 16px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const Error = styled.Text`
  color: #e37a7a;
  font-size: 14;
  font-weight: bold;
  margin-bottom: 20;
  text-align: center;
`;

export const ButtonContainerView = styled.View`
  flex-direction: row;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  border-radius: 5px;
  padding: 10px 0;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const CancelButton = styled(ButtonContainer)`
  background-color: #dc3545;
  margin-right: 5px;
`;

export const SubmitButton = styled(ButtonContainer)`
  background-color: #007bff;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;
