# Angular Card List App

Este é um aplicativo Angular que exibe uma lista de cards com imagens, títulos e descrições. Os usuários podem pesquisar os cartões por título ou descrição e excluir cartões individualmente.

## Alterações no Projeto

### Adição de Cores para os Tipos de Cartões

- Cada tipo de card agora possui uma cor de fundo correspondente: "Paisagem" (azul), "Flor" (vermelho) e "Pizza" (bege).
- As classes CSS `.paisagem`, `.flor` e `.pizza` foram adicionadas para aplicar essas cores aos tipos de cartões.

### Estilização dos Componentes

- Estilos CSS foram adicionados para os componentes `AppComponent`, `CardComponent` e `CardListComponent`.
- Foram utilizadas convenções e metodologias conhecidas, como BEM (Block Element Modifier) e CSS Grid Layout, para manter uma estrutura organizada e escalável.

### Atualização da Arquitetura de Estilos

- Os estilos CSS foram organizados em arquivos separados para cada componente, seguindo uma arquitetura de estilo modular.
- Cada componente possui seu próprio arquivo `.css` que contém os estilos específicos para aquele componente.

## Como Executar o Projeto

1. Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. No terminal, navegue até o diretório do projeto.
4. Instale as dependências do projeto executando o comando `npm install`.
5. Inicie o servidor de desenvolvimento executando o comando `ng serve`.
6. Abra o navegador e acesse `http://localhost:4200` para visualizar o aplicativo.

## Estrutura do Projeto

- `src/app/card`: Contém o componente `CardComponent` e seus arquivos relacionados.
- `src/app/card-list`: Contém o componente `CardListComponent` e seus arquivos relacionados.
- `src/app/services`: Contém o serviço `CardService` para obter dados de cartões.
- Outros arquivos e diretórios padrão do Angular.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).


## AngularCardList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
