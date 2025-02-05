# AmigoSecret
# ChallengeAmigoSecreto # Sistema de Gerenciamento de Amigos

Este projeto é um sistema simples para gerenciar uma lista de amigos, permitindo adicionar novos amigos, limpar o campo de entrada e sortear um amigo da lista.

## Funcionalidades

- **Adicionar Amigo**: Permite adicionar o nome de um amigo à lista, desde que o nome inserido seja válido (não vazio).
- **Limpar Campo**: Após adicionar um amigo, o campo de entrada é limpo automaticamente para permitir uma nova inserção.
- **Sortear Amigo**: Permite sortear um amigo aleatoriamente da lista e exibir o resultado na interface.

## Estrutura do Código

O código é composto por três funções principais:

1. **adicionarAmigo**: 
   - Obtém o valor do campo de entrada, remove os espaços em branco ao redor do valor (usando `trim()`), e verifica se o valor não é uma string vazia.
   - Adiciona o nome do amigo à lista (`listaAmigo`) e exibe o nome na interface.
   - Chama a função `campoLimpo` para limpar o campo de entrada.

2. **campoLimpo**: 
   - Limpa o valor do campo de entrada, garantindo que o campo fique pronto para uma nova inserção.

3. **sortearAmigo**: 
   - Seleciona um amigo aleatoriamente da lista (`listaAmigo`) e exibe o nome sorteado na interface.


