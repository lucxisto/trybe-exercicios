let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//Parte 1
console.log(`O Livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama  '${leitor.livrosFavoritos[0].titulo}'`);

//Parte 2
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

//Parte 3
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`)