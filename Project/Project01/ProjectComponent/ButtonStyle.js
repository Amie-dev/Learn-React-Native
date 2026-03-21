/*

export const StyleDCustomeText=styled.Text`
color:${({color})=>color};
font-size:30;
padding:30;

`
*/
import styled from 'styled-components/native';

export const BtnStyle = styled.TouchableOpacity`
  background-color: ${({ variant }) =>
    variant === 'danger'
      ? 'red'
      : variant === 'secondary'
        ? 'gray'
        : '#3498db'};

  width: 70px;
  padding: 6px;
  border-radius: 8px;
  align-items: center;
  margin: 1px;
`;

export const BtnText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
