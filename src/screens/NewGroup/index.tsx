import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { groupCreate } from "@storage/group/groupCreate";

import { AppError } from "@utils/AppError";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Nova Turma", "Informe o nome da turma");
      }
      await groupCreate(group);
      navigation.navigate("players", { group: group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Turma", error.message);
      } else {
        Alert.alert("Nova Turma", "Não foi possível criar uma nova turma");
        console.log(error);
      }
    }
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
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" onPress={handleNew} style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
