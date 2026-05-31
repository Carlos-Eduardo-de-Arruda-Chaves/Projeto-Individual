# Projeto-Individual - Muay Thai

Projeto Individual que possui como objetivo: Desenvolvimento de um website com formulário de cadastro.

# Sobre o Projeto

  O projeto consiste na escolha de um tema pessoal, e com isso, desenvolver um site contendo as disciplinas:
  - **Tecnologia da informação:** Documentação do Projeto, planejamento e versionamento no Git.
  - **Banco de Dados:** Modelo Lógico, relacionamentos, comandos SQL.
  - **Algoritmos:** Variáveis, Funções, Operações Matemáticas, Condicionais, Repetições, Vetores.
  - **Arq. Computacional e Matemática:** Aplicação de cálculos matemáticos.
  - **Introdução aos Sistemas Operacionais:** Utilização de uma VM Linux contendo Banco de dados.
  - **Pesquisa e Inovação:** Contexto, Planejamento, Dashboard e KPIs (Indicadores).
  - **Socioemocional:** aplicar os conceitos trabalhados em aula, demonstrando persistência, mesmo quando houver desafios.

  Assim, colocando em prática o que foi aprendido no primeiro semestre do curso de Ciências da Computação na SPTECH.


  O tema escolhido é a arte marcial **Muay Thai**, e o site tem como objetivo apresentar ao usuário a história, técnicas, benefícios e valores dessa arte marcial, seus níveis de graduação (Kruangs), e meu envolvimento pessoal com essa arte marcial, relatando a importância que o Muai Thay tem para mim. Com isso, o site possui:
  - Tela index.
  - Simulador de luta.
  - Tela de cadastro e login.
  - Registro de treinos.
  - DashBoards e KPIs.
  - Mural de dicas e avisos.
  - Registro de equipe e Kruang.

# DashBoard

  A DashBoard será alimentada com registros de treino, onde o usuário informa o tempo que ele treinou, esse valor será armazenado no banco de dados, e esses dados que alimentará a DashBoard, com o tempo de treino informado, e a data do momento do registro. Assim o usuário poderá ter maior controle e gestão sobre seus treinos.
  
  O projeto abranje a utilização de **HTML**, **CSS**, e validações de formulários em **JavaScript**, **Node.js** e **MySQL**.

# Criação do .env

  Para o correto funcionamento, é necessário ao clonar o repositório, criar um arquivo chamado ".env", segue o exemplo para criação:
  
("--" = comentário)

AMBIENTE_PROCESSO=producao

-- Configurações de conexão com o banco de dados
DB_HOST='seusDadosAqui'

DB_DATABASE='seusDadosAqui'

DB_USER='seusDadosAqui'

DB_PASSWORD='seusDadosAqui'

DB_PORT='seusDadosAqui'

-- Configurações do servidor de aplicação

APP_PORT=8080

APP_HOST=localhost

-- importante: caso sua senha contenha caracteres especiais, insira-a entre 'aspas'

# Autor

  Projeto desenvolvido por **Carlos Eduardo de Arruda Chaves** - Aluno **SPTECH** 2026
