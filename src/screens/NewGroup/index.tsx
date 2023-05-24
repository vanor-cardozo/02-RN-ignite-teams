import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("players", { group: "Rocket" });
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" onPress={handleNew} style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
