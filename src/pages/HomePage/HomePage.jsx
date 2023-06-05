import { Subtitle, Title, Text } from './HomePage.styled';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <Title>Welcome to the Phonebook App!</Title>
      <Text>C, R, U, D</Text>
      <Text>r, e, p, e</Text>
      <Text>e, m, d, l</Text>
      <Text>a, o, a, e</Text>
      <Text>t, v, t, t</Text>
      <Text>e, e, e, e</Text>
      <Subtitle>your contacts...</Subtitle>
    </div>
  );
}
