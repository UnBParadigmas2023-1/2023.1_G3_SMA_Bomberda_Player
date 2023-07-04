# Bomberda Player

**Disciplina**: FGA0210 - PARADIGMAS DE PROGRAMAÇÃO - T01 <br>
**Nro do Grupo**: 03<br>
**Paradigma**: Sistemas Multiagentes<br>

## Alunos
| Matrícula | Aluno |
| :-: | -- |
|18/0030264|Antonio Igor Carvalho|
|18/0098021|Antonio Rangel Chaves|
|18/0149687|Daniel Porto de Souza|
|18/0042238|João Gabriel de Campos de Matos|
|18/0124498|Kess Jhones Gomes Tavares|
|18/0024868|Mateus Moreira Lima|
|18/0132385|Vitor Diniz Pagani Vieira Ribeiro|
|18/0145363|Yan Andrade de Sena|
|18/0078640|Yuri Alves bacarias|

## Sobre 
Regras do jogo:
1. O objetivo da agente é chegar no tesouro ou matar o inimigo
2. A agente pode colocar bomba para destruir obstáculos ou inimigos
3. A caixa só pode ser destruída por uma bomba
4. Os inimigos só podem destruídos com uma bomba e derrotam a agente caso se encontrem
5. O piso frágil só pode ser atravessado uma vez
6. Caso a agente passe por cima de um piso frágil, um buraco é criado, impossibilitando a passagem
7. As paredes não podem ser atravessadas ou destruídas com bombas


## Screenshots
Adicione 2 ou mais screenshots do projeto em termos de interface e/ou funcionamento.

## Instalação 
**Linguagens**: Python <br>
**Tecnologias**: Mesa, Selenium, Make, Git <br>

- Clonando o repositório:
  
 Para clonar o reposótorio, basta exucutar o seguinte comando na linha de comando:
 > $ git clone https://github.com/UnBParadigmas2023-1/2023.1_G3_SMA_Bomberda_Player.git

 - Construindo a aplicação:

 Dentro do diretório do reopositório, para construir a a imagem da aplicação, bastar executar o seguinte comando:
 > $ make build

 - Informando o navegador:

 O projeto usa os navegadores Firefox ou Chrome. Por isso, é preciso definir uma variável ambiente para informar qual será utilizado.

   Para usar o Firefox:
 > $ export BROWSER=firefox

   Para usar o Chrome:
 > $ export BROWSER=chrome

 - Iniciando a aplicação:

 Dentro do diretório do repositório rode o seguinte comando para iniciar aplicação;
 > $ make run

## Uso 
1 - Após executar o make run, a tela inicial do jogo irá aparecer no terminal
![image](https://github.com/UnBParadigmas2023-1/2023.1_G3_SMA_Bomberda_Player/assets/57496213/0c845212-caf4-48c7-bbe5-959c46067365)

2 - Vamos começar pela opção 1, que é jogar as fases já prontas. Ao selecionar essa opção o navegador irá iniciar e a fase fica visível. A agente heroína irá se movimentar sozinha para cumprir o objetivo de chegar ao tesouro.
![image](https://github.com/UnBParadigmas2023-1/2023.1_G3_SMA_Bomberda_Player/assets/57496213/50a76c24-ffdb-4f0b-bb36-1489f8528e4d)

3 - Na opção 2 é possível criar uma fase customizada. 

3.1 - O primeiro passo para criar uma fase customizada é necessário criar um arquivo .txt com a organização do mapa, cada objeto da fase listado abaixo representa um caractere que deve ser colocado no arquivo .txt:
| Objeto | Cacactere |
| :-: | -- |
| Piso   | símbolo ' ' (space) |
| Parede | símbolo '#' |
| Piso Frágil | símbolo 'x' |
| Buraco | símbolo 'X' |
| Caixa | símbolo '$' |
| Player | símbolo '@' |
| Inimigo | símbolo 'E' |
| Tesouro | símbolo '.' |

3.2 - O arquivo .txt pode ser salvo na raiz do projeto, ou colocado em uma pasta. Para facilitar é recomendado salvar na raiz do projeto, pois será necessário passar o caminho para o arquivo .txt durante a execução. Se ele for salvo na raiz, basta digitar o nome do arquivo .txt da fase customizada.

3.3 - Execute o projeto com ```make run```

3.4 - Escolha a opção fase customizada
![image](https://github.com/UnBParadigmas2023-1/2023.1_G3_SMA_Bomberda_Player/assets/57496213/9d176917-82aa-404b-85be-219e4c09484b)

3.5 - Digite o caminho para o arquivo .txt da sua fase customizada, caso ele esteja na raiz, basta digitar o nome do mesmo e apertar enter.

3.6 - O navegador irá iniciar e o jogo começa na fase customizada
![image](https://github.com/UnBParadigmas2023-1/2023.1_G3_SMA_Bomberda_Player/assets/57496213/e1881aa8-be7b-476a-a7d2-f316a6b2d29a)

## Vídeo
Adicione 1 ou mais vídeos com a execução do projeto.
Procure: 
(i) Introduzir o projeto;
(ii) Mostrar passo a passo o código, explicando-o, e deixando claro o que é de terceiros, e o que é contribuição real da equipe;
(iii) Apresentar particularidades do Paradigma, da Linguagem, e das Tecnologias, e
(iV) Apresentar lições aprendidas, contribuições, pendências, e ideias para trabalhos futuros.
OBS: TODOS DEVEM PARTICIPAR, CONFERINDO PONTOS DE VISTA.
TEMPO: +/- 15min

## Participações
Apresente, brevemente, como cada membro do grupo contribuiu para o projeto.
|Nome do Membro | Contribuição | Significância da Contribuição para o Projeto (Excelente/Boa/Regular/Ruim/Nula) |
| -- | -- | -- |
| Antonio Igor Carvalho | Participei da implementação da model e agentes, implementação do algoritmo BFS (Breadth-first search), correção de um pequeno erro no algoritmo de colocar as bombas, implementação da continuidade de fases quando o héroi conclui o mapa. | Muito Boa | 
| Antonio Rangel Chaves | | | 
| Daniel Porto de Souza | Configuração do ambiente, implementação do fluxo inicial, configuração e implementação do web-scraping, implementação inicial da model e dos agentes e implementação da lógica de pegar o tesouro e usar a bomba | Excelente | 
| João Gabriel de Campos de Matos | | | 
| Kess Jhones Gomes Tavares |Auxilio na implementação inicial da model e dos agentes| Regular |
| Mateus Moreira Lima | | |
| Vitor Diniz Pagani Vieira Ribeiro | Participei da implementação inicial da model e dos agentes, também participei da implementação do BFS para o agente encontrar o melhor caminho em direção ao tesouro e participei da correção do bug para atualizar o mapa após a explosão do bomba. | Regular | 
| Yan Andrade de Sena | Implementação inicial da model | Regular | 
| Yuri Alves Bacarias | implementação da model, alteração das fases para adequação ao projeto contruido,correção de pequenos bugs nos mapas | regular | 

## Outros 
Quaisquer outras informações sobre o projeto podem ser descritas aqui. Não esqueça, entretanto, de informar sobre:
### Lições Aprendidas

|Nome do Membro | Lições Aprendidas | 
| -- | -- |
| Antonio Igor Carvalho | Nunca tinha mexido com web scraping, é algo novo para mim e vi que não é algo fora do normal, pode ser feito. A utilização do paradigma utilizando python com o Mesa foi interessante após entender como funcionava. | 
| Antonio Rangel Chaves | |  
| Daniel Porto de Souza | Fazer web scraping é bem divertido, dá pra faer muita coisa com o selenium. Sempre soube que o python é uma linguagem muito poderosa mas confesso que tinha uma certa resitência em usar. Gostei de me aprofundar mais na linguagem.|  
| João Gabriel de Campos de Matos | |
| Kess Jhones Gomes Tavares | Como funciona o paradigma multiagente, um pouco de web scraping e aplicação de algoritmos de EDA em contextos diferentes |
| Mateus Moreira Lima | |
| Vitor Diniz Pagani Vieira Ribeiro | |
| Yan Andrade de Sena | Aprendi um pouco de python e também sobre o paradigmas multiagentes. Não cheguei a me aprofundar muito sobre o selenium |
| Yuri Alves Bacarias | Aprofundei nos conhecimentos de python, achei interessante a parte do scraping |

### Percepções

|Nome do Membro | Percepções | 
| -- | -- |
| Antonio Igor Carvalho | Um paradigma bem interessante, e ainda com a junção de web scraping foi um escopo no qual eu nunca tinha utilizado | 
| Antonio Rangel Chaves | |  
| Daniel Porto de Souza | Esse paradigma foi interessante de se estudar. Uma nova forma de se resolver problemas complexos que geralmente não possuem uma solução em ordem polinomial além de estimular muito a criatividade |  
| João Gabriel de Campos de Matos | |
| Kess Jhones Gomes Tavares |Multiagentes pode ser utilizado para resolver problemas complexos |
| Mateus Moreira Lima | |
| Vitor Diniz Pagani Vieira Ribeiro | |
| Yan Andrade de Sena | Achei muito legal e interessante a implementação em um jogo (como se fosse uma IA jogando) |
| Yuri Alves Bacarias | Um paradigma complexo mas achei um dos melhores na diciplina |

### Contribuições 

|Nome do Membro | Contribuições | 
| -- | -- |
| Antonio Igor Carvalho | Implementação de um algoritmo que soluciona certas fases do jogo. | 
| Antonio Rangel Chaves | |  
| Daniel Porto de Souza | O projeto, utiliza do SMA para solucionar o game Bomberda, o qual se trata de uma ferramenta para exercitar fundamentos estudados nas disciplinas de IA. Isso pode servir de auxílio para estudantes e entusiastas. |  
| João Gabriel de Campos de Matos | |
| Kess Jhones Gomes Tavares |Auxlio com a linguagem e ideias de como implementar a lógica para o controle do herói  |
| Mateus Moreira Lima | |
| Vitor Diniz Pagani Vieira Ribeiro | |
| Yan Andrade de Sena | Ajudei na lógica de importação do mapa no grid e como seria a utilização de um grid |
| Yuri Alves Bacarias | correção de bugs dos mapas, adequação do mesmo ao projeto. Auxilio no implementação da logica do heroi |

### Fragilidades

|Nome do Membro | Fragilidades | 
| -- | -- |
| Antonio Igor Carvalho | Acredito que poderia ser considerado a recriação do jogo utilizando as ferramentas que o MESA proporciona | 
| Antonio Rangel Chaves | |  
| Daniel Porto de Souza | O escopo desse seria melhor abordado utilizando uma orietação a objetivos. O comportamental pode limitar um pouco as soluções |  
| João Gabriel de Campos de Matos | |
| Kess Jhones Gomes Tavares | Documentação pouco amigavel do MESA, e ter dedicado mais tempo para o aprendizado do paradigma |
| Mateus Moreira Lima | |
| Vitor Diniz Pagani Vieira Ribeiro | |
| Yan Andrade de Sena | Acredito que seja a falta de conhecimento de python por minha parte |
| Yuri Alves Bacarias | A documentção do MESA complexa |

### Trabalhos Futuros.

|Nome do Membro | Trabalhos Futuros | 
| -- | -- |
| Antonio Igor Carvalho | Implementar a solução de fases quando o inimigo estiver presente | 
| Antonio Rangel Chaves | |  
| Daniel Porto de Souza | Como trabalhos futuros, pode-se pensar desde incluir novos mapas mais desafiadores, até utilizar mais as ferramentas do MESA para, por exemplo, ilustrar graficamente o processo de decisão que o sistema realiza antes de executar o game.|  
| João Gabriel de Campos de Matos | |
| Kess Jhones Gomes Tavares |Cria um agente que observe o úsuario e consiga gerar novos mapas |
| Mateus Moreira Lima | |
| Vitor Diniz Pagani Vieira Ribeiro | |
| Yan Andrade de Sena | Implementar também o inimigo e também talvez implementar um algoritmo de Djikstra para fazer o personagem montar o melhor caminho possível para chegar no tesouro |
| Yuri Alves Bacarias | Continuar o projeto com a criação da logica do inimigo, para passar de todas 100 fases existentes |

## Fontes
[Mesa: Agent-based modeling in Python 3+](https://mesa.readthedocs.io/en/stable/)

[Bomberda](http://algo2.iti.kit.edu/plan/bomberda/index.html)

[Selenium](https://www.selenium.dev/pt-br/documentation/)
