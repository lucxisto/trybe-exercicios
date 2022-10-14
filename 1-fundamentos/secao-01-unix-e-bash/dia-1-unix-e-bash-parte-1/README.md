# Fundamentos
### Seção 1 - Unix & Bash
##### Dia 1 - Unix & Bash - Parte 1

##### Exercicios do dia
1 -  Criação de Arquivos e Diretórios
* Utilizar o Terminal para criar um diretório chamado `unix_tests` utilizando o comando `mkdir`.
* Criar um arquivo de texto com o nome `trybe.txt` usando o comando `touch`.
* Criar uma cópia do arquivo `trybe.txt` com o nome `trybe_backup.txt` usando o comando `cp`.
* Renomear o arquivo `trybe.txt`usando o comando `mv`.
* Dentro de `unix_tests`, criar um novo diretório chamado backup.
* Mover o arquivo trybe_backup.txt para o diretório `backup` também com o comando `mv`.
* Dentro de `unix_tests`, criar um novo diretório chamado `backup2`.
* Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2`.
* Apagar a pasta `backup`com o comando `rmdir`.
* Renomear a pasta `backup2` para `backup`.
* Veja qual o path completo do diretório atual com o comando `pwd` e liste todos os arquivos dentro dele com o comando `ls`.
* Apague o diretório `backup`.
* Limpe o terminal com o comando `clear`.

2 - Manipulação & Busca
* Crie um novo diretório chamado `unix_tests_search` e entre nele utilizando o comando `cd`.
* Na pasta `unix_tests_search`, baixar um arquivo com os nomes de todos os países do mundo utilizando o comando `curl`.
* Mostrar todo o conteúdo do arquivo `countries.txt` na tela com o comando `cat`.
* Mostrar o conteúdo de `countries.txt`, página por página, até encontrar a Zambia com o comando `less`.
* Mostrar novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por Zambia utilizando `/Zambia`.
* Buscar por Brazil no `countries.txt`.
* Buscar novamente por brazil, mas agora utilizando o lower case utilizando o comando `grep -i`.
* Criar um novo arquivo chamado `phrases.txt` e adicionar algumas frases à sua escolha.
* Buscar pelas frases que não contenham a palavra fox com o comando `grep -v`.
* Contar o número de palavras do arquivo `phrases.txt` com o comando `wc -w`.
* Contar o número de linhas do arquivo `phrases.txt` com o comando `wc -l`.
* Criar os arquivos `empty.tbt` e `empty.pdf`.
* Listar todos os arquivos do diretório `unix_tests_search`.
* Listar todos os arquivos que terminem com txt.
* Listar todos os arquivos que terminem com tbt ou txt.
* Acessar o manual do comando `ls` com o comando `man`.