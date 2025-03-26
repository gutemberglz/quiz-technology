import { QuestionType } from "@/types/QuestionType";

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "Qual tag é usada para criar um link?",
    type: "option",
    options: [
      { id: 1, value: "<a>" },
      { id: 2, value: "<link>" },
      { id: 3, value: "<img>" },
      { id: 4, value: "<href>" },
    ],
    technology: "html",
    explanation: "A tag <a> é usada para criar um link.",
    correctAnswerId: 1, // A resposta correta é <a>
  },
  {
    id: 2,
    question: "Qual tag é usada para inserir uma imagem?",
    type: "option",
    options: [
      { id: 1, value: "<img>" },
      { id: 2, value: "<image>" },
      { id: 3, value: "<picture>" },
      { id: 4, value: "<photo>" },
    ],
    technology: "html",
    explanation: "A tag <img> é usada para inserir imagens.",
    correctAnswerId: 1, // A resposta correta é <img>
  },
  {
    id: 3,
    question: "Qual atributo define o destino de um link?",
    type: "option",
    options: [
      { id: 1, value: "alt" },
      { id: 2, value: "src" },
      { id: 3, value: "href" },
      { id: 4, value: "action" },
    ],
    technology: "html",
    explanation: "O atributo href define o destino de um link.",
    correctAnswerId: 3, // A resposta correta é href
  },
  {
    id: 4,
    question: "Qual tag é usada para criar um formulário?",
    type: "option",
    options: [
      { id: 1, value: "<button>" },
      { id: 2, value: "<form>" },
      { id: 3, value: "<input>" },
      { id: 4, value: "<textarea>" },
    ],
    technology: "html",
    explanation: "A tag <form> é usada para criar um formulário.",
    correctAnswerId: 2, // A resposta correta é <form>
  },
  {
    id: 5,
    question: "Qual tag é usada para definir um parágrafo?",
    type: "option",
    options: [
      { id: 1, value: "<div>" },
      { id: 2, value: "<p>" },
      { id: 3, value: "<span>" },
      { id: 4, value: "<article>" },
    ],
    technology: "html",
    explanation: "A tag <p> é usada para definir um parágrafo.",
    correctAnswerId: 2, // A resposta correta é <p>
  },
  {
    id: 6,
    question: "Qual tag é usada para criar uma lista ordenada?",
    type: "option",
    options: [
      { id: 1, value: "<ul>" },
      { id: 2, value: "<ol>" },
      { id: 3, value: "<dl>" },
      { id: 4, value: "<li>" },
    ],
    technology: "html",
    explanation: "A tag <ol> é usada para criar uma lista ordenada.",
    correctAnswerId: 2, // A resposta correta é <ol>
  },
  {
    id: 7,
    question: "Qual atributo define o texto alternativo de uma imagem?",
    type: "option",
    options: [
      { id: 1, value: "alt" },
      { id: 2, value: "src" },
      { id: 3, value: "title" },
      { id: 4, value: "href" },
    ],
    technology: "html",
    explanation: "O atributo alt define o texto alternativo de uma imagem.",
    correctAnswerId: 1, // A resposta correta é alt
  },
  {
    id: 8,
    question: "Qual tag é usada para criar uma linha de divisão?",
    type: "option",
    options: [
      { id: 1, value: "<hr>" },
      { id: 2, value: "<br>" },
      { id: 3, value: "<div>" },
      { id: 4, value: "<line>" },
    ],
    technology: "html",
    explanation:
      "A tag <hr> é usada para criar uma linha horizontal (divisão).",
    correctAnswerId: 1, // A resposta correta é <hr>
  },
  {
    id: 9,
    question: "Qual tag é usada para definir o cabeçalho de uma página?",
    type: "option",
    options: [
      { id: 1, value: "<section>" },
      { id: 2, value: "<header>" },
      { id: 3, value: "<footer>" },
      { id: 4, value: "<article>" },
    ],
    technology: "html",
    explanation:
      "A tag <header> é usada para definir o cabeçalho de uma página.",
    correctAnswerId: 2, // A resposta correta é <header>
  },
  {
    id: 10,
    question: "Qual tag é usada para inserir uma lista não ordenada?",
    type: "option",
    options: [
      { id: 1, value: "<ul>" },
      { id: 2, value: "<ol>" },
      { id: 3, value: "<li>" },
      { id: 4, value: "<dl>" },
    ],
    technology: "html",
    explanation: "A tag <ul> é usada para criar uma lista não ordenada.",
    correctAnswerId: 1, // A resposta correta é <ul>
  },
  {
    id: 11,
    question: "Qual tag é usada para exibir conteúdo de citação?",
    type: "option",
    options: [
      { id: 1, value: "<q>" },
      { id: 2, value: "<blockquote>" },
      { id: 3, value: "<cite>" },
      { id: 4, value: "<quote>" },
    ],
    technology: "html",
    explanation:
      "A tag <blockquote> é usada para definir uma citação de longa duração.",
    correctAnswerId: 2, // A resposta correta é <blockquote>
  },
  {
    id: 12,
    question: "Qual tag define o rodapé de uma página?",
    type: "option",
    options: [
      { id: 1, value: "<footer>" },
      { id: 2, value: "<header>" },
      { id: 3, value: "<section>" },
      { id: 4, value: "<div>" },
    ],
    technology: "html",
    explanation: "A tag <footer> é usada para definir o rodapé de uma página.",
    correctAnswerId: 1, // A resposta correta é <footer>
  },
  {
    id: 13,
    question: "Qual atributo define o endereço de uma imagem?",
    type: "option",
    options: [
      { id: 1, value: "src" },
      { id: 2, value: "alt" },
      { id: 3, value: "href" },
      { id: 4, value: "action" },
    ],
    technology: "html",
    explanation: "O atributo src define o caminho para a imagem.",
    correctAnswerId: 1, // A resposta correta é src
  },
  {
    id: 14,
    question: "Qual tag é usada para criar uma área de navegação?",
    type: "option",
    options: [
      { id: 1, value: "<nav>" },
      { id: 2, value: "<menu>" },
      { id: 3, value: "<section>" },
      { id: 4, value: "<aside>" },
    ],
    technology: "html",
    explanation: "A tag <nav> é usada para definir uma área de navegação.",
    correctAnswerId: 1, // A resposta correta é <nav>
  },
  {
    id: 15,
    question: "Qual tag é usada para adicionar uma tabela?",
    type: "option",
    options: [
      { id: 1, value: "<table>" },
      { id: 2, value: "<tr>" },
      { id: 3, value: "<td>" },
      { id: 4, value: "<th>" },
    ],
    technology: "html",
    explanation: "A tag <table> é usada para criar uma tabela.",
    correctAnswerId: 1, // A resposta correta é <table>
  },
  {
    id: 16,
    question: "Qual atributo é usado para adicionar um título a uma tabela?",
    type: "option",
    options: [
      { id: 1, value: "caption" },
      { id: 2, value: "title" },
      { id: 3, value: "header" },
      { id: 4, value: "thead" },
    ],
    technology: "html",
    explanation:
      "O atributo caption é usado para adicionar um título a uma tabela.",
    correctAnswerId: 1, // A resposta correta é caption
  },
  {
    id: 17,
    question: "Qual tag é usada para adicionar uma célula em uma tabela?",
    type: "option",
    options: [
      { id: 1, value: "<td>" },
      { id: 2, value: "<tr>" },
      { id: 3, value: "<th>" },
      { id: 4, value: "<thead>" },
    ],
    technology: "html",
    explanation:
      "A tag <td> é usada para definir uma célula dentro de uma tabela.",
    correctAnswerId: 1, // A resposta correta é <td>
  },
  {
    id: 18,
    question: "Qual tag é usada para inserir uma lista de definições?",
    type: "option",
    options: [
      { id: 1, value: "<dl>" },
      { id: 2, value: "<ol>" },
      { id: 3, value: "<ul>" },
      { id: 4, value: "<li>" },
    ],
    technology: "html",
    explanation: "A tag <dl> é usada para definir uma lista de definições.",
    correctAnswerId: 1, // A resposta correta é <dl>
  },
  {
    id: 19,
    question:
      "Qual propriedade é usada para mudar a cor de fundo de um elemento?",
    type: "option",
    options: [
      { id: 1, value: "background-color" },
      { id: 2, value: "color" },
      { id: 3, value: "border-color" },
      { id: 4, value: "font-color" },
    ],
    technology: "css",
    explanation:
      "A propriedade background-color é usada para mudar a cor de fundo de um elemento.",
    correctAnswerId: 1, // A resposta correta é background-color
  },
  {
    id: 20,
    question: "Qual unidade é relativa ao tamanho da fonte do elemento pai?",
    type: "option",
    options: [
      { id: 1, value: "rem" },
      { id: 2, value: "em" },
      { id: 3, value: "px" },
      { id: 4, value: "%" },
    ],
    technology: "css",
    explanation:
      "A unidade 'em' é relativa ao tamanho da fonte do elemento pai.",
    correctAnswerId: 2, // A resposta correta é em
  },
  {
    id: 21,
    question:
      "Qual propriedade é usada para definir o espaçamento entre as letras?",
    type: "option",
    options: [
      { id: 1, value: "letter-spacing" },
      { id: 2, value: "line-height" },
      { id: 3, value: "word-spacing" },
      { id: 4, value: "text-indent" },
    ],
    technology: "css",
    explanation:
      "A propriedade letter-spacing é usada para definir o espaçamento entre as letras.",
    correctAnswerId: 1, // A resposta correta é letter-spacing
  },
  {
    id: 22,
    question: "Qual propriedade é usada para alterar a largura de uma borda?",
    type: "option",
    options: [
      { id: 1, value: "border-width" },
      { id: 2, value: "border-style" },
      { id: 3, value: "border-color" },
      { id: 4, value: "width" },
    ],
    technology: "css",
    explanation:
      "A propriedade border-width é usada para alterar a largura de uma borda.",
    correctAnswerId: 1, // A resposta correta é border-width
  },
  {
    id: 23,
    question:
      "Qual propriedade CSS é usada para definir a altura de um elemento?",
    type: "option",
    options: [
      { id: 1, value: "height" },
      { id: 2, value: "width" },
      { id: 3, value: "line-height" },
      { id: 4, value: "padding" },
    ],
    technology: "css",
    explanation:
      "A propriedade height é usada para definir a altura de um elemento.",
    correctAnswerId: 1, // A resposta correta é height
  },
  {
    id: 24,
    question: "Qual unidade de medida em CSS é absoluta e não depende da tela?",
    type: "option",
    options: [
      { id: 1, value: "px" },
      { id: 2, value: "em" },
      { id: 3, value: "rem" },
      { id: 4, value: "%" },
    ],
    technology: "css",
    explanation: "A unidade px (pixels) é absoluta e não depende da tela.",
    correctAnswerId: 1, // A resposta correta é px
  },
  {
    id: 25,
    question: "Qual propriedade CSS é usada para adicionar sombra ao texto?",
    type: "option",
    options: [
      { id: 1, value: "box-shadow" },
      { id: 2, value: "text-shadow" },
      { id: 3, value: "shadow" },
      { id: 4, value: "border-shadow" },
    ],
    technology: "css",
    explanation:
      "A propriedade text-shadow é usada para adicionar sombra ao texto.",
    correctAnswerId: 2, // A resposta correta é text-shadow
  },
  {
    id: 26,
    question: "Qual tag é usada para incluir um arquivo CSS externo?",
    type: "option",
    options: [
      { id: 1, value: "<link>" },
      { id: 2, value: "<style>" },
      { id: 3, value: "<css>" },
      { id: 4, value: "<script>" },
    ],
    technology: "css",
    explanation: "A tag <link> é usada para incluir um arquivo CSS externo.",
    correctAnswerId: 1, // A resposta correta é <link>
  },
  {
    id: 27,
    question:
      "Qual propriedade é usada para centralizar o texto em um elemento?",
    type: "option",
    options: [
      { id: 1, value: "text-align" },
      { id: 2, value: "vertical-align" },
      { id: 3, value: "align-items" },
      { id: 4, value: "justify-content" },
    ],
    technology: "css",
    explanation:
      "A propriedade text-align é usada para centralizar o texto em um elemento.",
    correctAnswerId: 1, // A resposta correta é text-align
  },
  {
    id: 28,
    question:
      "Qual propriedade é usada para definir a margem externa de um elemento?",
    type: "option",
    options: [
      { id: 1, value: "margin" },
      { id: 2, value: "padding" },
      { id: 3, value: "border" },
      { id: 4, value: "width" },
    ],
    technology: "css",
    explanation:
      "A propriedade margin é usada para definir a margem externa de um elemento.",
    correctAnswerId: 1, // A resposta correta é margin
  },
  {
    id: 29,
    question:
      "Qual propriedade é usada para mudar o tipo de letra de um texto?",
    type: "option",
    options: [
      { id: 1, value: "font-family" },
      { id: 2, value: "font-size" },
      { id: 3, value: "font-weight" },
      { id: 4, value: "text-decoration" },
    ],
    technology: "css",
    explanation:
      "A propriedade font-family é usada para mudar o tipo de letra de um texto.",
    correctAnswerId: 1, // A resposta correta é font-family
  },
  {
    id: 30,
    question:
      "Qual propriedade CSS é usada para definir a largura de um elemento?",
    type: "option",
    options: [
      { id: 1, value: "width" },
      { id: 2, value: "height" },
      { id: 3, value: "max-width" },
      { id: 4, value: "size" },
    ],
    technology: "css",
    explanation:
      "A propriedade width é usada para definir a largura de um elemento.",
    correctAnswerId: 1, // A resposta correta é width
  },
  {
    id: 31,
    question:
      "Qual valor de display faz um elemento se comportar como um bloco?",
    type: "option",
    options: [
      { id: 1, value: "block" },
      { id: 2, value: "inline" },
      { id: 3, value: "flex" },
      { id: 4, value: "grid" },
    ],
    technology: "css",
    explanation: "O valor block faz o elemento se comportar como um bloco.",
    correctAnswerId: 1, // A resposta correta é block
  },
  {
    id: 32,
    question:
      "Qual valor de display faz um elemento se comportar como uma linha?",
    type: "option",
    options: [
      { id: 1, value: "inline" },
      { id: 2, value: "block" },
      { id: 3, value: "flex" },
      { id: 4, value: "grid" },
    ],
    technology: "css",
    explanation: "O valor inline faz o elemento se comportar como uma linha.",
    correctAnswerId: 1, // A resposta correta é inline
  },
  {
    id: 33,
    question:
      "Qual propriedade é usada para adicionar arredondamento às bordas de um elemento?",
    type: "option",
    options: [
      { id: 1, value: "border-radius" },
      { id: 2, value: "border-style" },
      { id: 3, value: "border-width" },
      { id: 4, value: "border-color" },
    ],
    technology: "css",
    explanation:
      "A propriedade border-radius é usada para adicionar arredondamento às bordas de um elemento.",
    correctAnswerId: 1, // A resposta correta é border-radius
  },
  {
    id: 34,
    question:
      "Qual valor de position faz um elemento se mover em relação à tela?",
    type: "option",
    options: [
      { id: 1, value: "absolute" },
      { id: 2, value: "relative" },
      { id: 3, value: "fixed" },
      { id: 4, value: "static" },
    ],
    technology: "css",
    explanation: "O valor absolute faz o elemento se mover em relação à tela.",
    correctAnswerId: 1, // A resposta correta é absolute
  },
  {
    id: 35,
    question:
      "Qual propriedade CSS é usada para adicionar espaço dentro de um elemento?",
    type: "option",
    options: [
      { id: 1, value: "padding" },
      { id: 2, value: "margin" },
      { id: 3, value: "border" },
      { id: 4, value: "width" },
    ],
    technology: "css",
    explanation:
      "A propriedade padding é usada para adicionar espaço dentro de um elemento.",
    correctAnswerId: 1, // A resposta correta é padding
  },
  {
    id: 36,
    question:
      "Qual valor de position fixa um elemento em relação à janela de visualização?",
    type: "option",
    options: [
      { id: 1, value: "fixed" },
      { id: 2, value: "absolute" },
      { id: 3, value: "relative" },
      { id: 4, value: "static" },
    ],
    technology: "css",
    explanation:
      "O valor fixed faz um elemento ficar fixado em relação à janela de visualização.",
    correctAnswerId: 1, // A resposta correta é fixed
  },
  {
    id: 37,
    question: "Qual método é usado para exibir dados no console do navegador?",
    type: "option",
    options: [
      { id: 1, value: "console.log" },
      { id: 2, value: "alert" },
      { id: 3, value: "document.write" },
      { id: 4, value: "console.print" },
    ],
    technology: "javascript",
    explanation:
      "O método console.log é usado para exibir dados no console do navegador.",
    correctAnswerId: 1, // A resposta correta é console.log
  },
  {
    id: 38,
    question:
      "Qual operador é usado para comparar valores e tipos de dados em JavaScript?",
    type: "option",
    options: [
      { id: 1, value: "===" },
      { id: 2, value: "==" },
      { id: 3, value: "!=" },
      { id: 4, value: "==" },
    ],
    technology: "javascript",
    explanation:
      "O operador '===' compara tanto os valores quanto os tipos de dados.",
    correctAnswerId: 1, // A resposta correta é ===
  },
  {
    id: 39,
    question: "Qual método é usado para converter um valor para uma string?",
    type: "option",
    options: [
      { id: 1, value: "String()" },
      { id: 2, value: "toString()" },
      { id: 3, value: "parseInt()" },
      { id: 4, value: "parseFloat()" },
    ],
    technology: "javascript",
    explanation:
      "O método String() ou toString() pode ser usado para converter um valor em uma string.",
    correctAnswerId: 1, // A resposta correta é String()
  },
  {
    id: 40,
    question: "Qual tipo de dados é representado pela palavra-chave 'null'?",
    type: "option",
    options: [
      { id: 1, value: "Objeto" },
      { id: 2, value: "undefined" },
      { id: 3, value: "número" },
      { id: 4, value: "booleano" },
    ],
    technology: "javascript",
    explanation:
      "null é um valor que representa a ausência de valor e é do tipo objeto.",
    correctAnswerId: 1, // A resposta correta é Objeto
  },
  {
    id: 41,
    question:
      "Qual método em JavaScript é usado para remover o último item de um array?",
    type: "option",
    options: [
      { id: 1, value: "pop()" },
      { id: 2, value: "push()" },
      { id: 3, value: "shift()" },
      { id: 4, value: "unshift()" },
    ],
    technology: "javascript",
    explanation:
      "O método pop() é usado para remover o último item de um array.",
    correctAnswerId: 1, // A resposta correta é pop()
  },
  {
    id: 42,
    question: "Qual é a forma correta de declarar uma variável em JavaScript?",
    type: "option",
    options: [
      { id: 1, value: "let" },
      { id: 2, value: "var" },
      { id: 3, value: "const" },
      { id: 4, value: "all" },
    ],
    technology: "javascript",
    explanation:
      "As palavras-chave let, var e const são usadas para declarar variáveis em JavaScript.",
    correctAnswerId: 4, // A resposta correta é all
  },
  {
    id: 43,
    question: "O que significa o operador '&&' em JavaScript?",
    type: "option",
    options: [
      { id: 1, value: "E lógico" },
      { id: 2, value: "OU lógico" },
      { id: 3, value: "Negação lógica" },
      { id: 4, value: "Operação de comparação" },
    ],
    technology: "javascript",
    explanation: "O operador '&&' representa o 'E lógico' em JavaScript.",
    correctAnswerId: 1, // A resposta correta é E lógico
  },
  {
    id: 44,
    question:
      "Qual método em JavaScript adiciona um item ao final de um array?",
    type: "option",
    options: [
      { id: 1, value: "push()" },
      { id: 2, value: "pop()" },
      { id: 3, value: "unshift()" },
      { id: 4, value: "shift()" },
    ],
    technology: "javascript",
    explanation:
      "O método push() é usado para adicionar um item ao final de um array.",
    correctAnswerId: 1, // A resposta correta é push()
  },
  {
    id: 45,
    question:
      "Qual evento é disparado quando um usuário clica em um elemento HTML?",
    type: "option",
    options: [
      { id: 1, value: "click" },
      { id: 2, value: "hover" },
      { id: 3, value: "focus" },
      { id: 4, value: "load" },
    ],
    technology: "javascript",
    explanation:
      "O evento click é disparado quando um usuário clica em um elemento HTML.",
    correctAnswerId: 1, // A resposta correta é click
  },
  {
    id: 46,
    question:
      "Qual palavra-chave é usada para declarar uma constante em JavaScript?",
    type: "option",
    options: [
      { id: 1, value: "const" },
      { id: 2, value: "let" },
      { id: 3, value: "var" },
      { id: 4, value: "constant" },
    ],
    technology: "javascript",
    explanation:
      "A palavra-chave const é usada para declarar uma constante em JavaScript.",
    correctAnswerId: 1, // A resposta correta é const
  },
  {
    id: 47,
    question:
      "Qual método em JavaScript é usado para converter uma string em um número inteiro?",
    type: "option",
    options: [
      { id: 1, value: "parseInt()" },
      { id: 2, value: "parseFloat()" },
      { id: 3, value: "toString()" },
      { id: 4, value: "Number()" },
    ],
    technology: "javascript",
    explanation:
      "O método parseInt() é usado para converter uma string em um número inteiro.",
    correctAnswerId: 1, // A resposta correta é parseInt()
  },
  {
    id: 48,
    question: "Qual é a maneira correta de definir uma função em JavaScript?",
    type: "option",
    options: [
      { id: 1, value: "function minhaFuncao() {}" },
      { id: 2, value: "def minhaFuncao() {}" },
      { id: 3, value: "function: minhaFuncao() {}" },
      { id: 4, value: "func minhaFuncao() {}" },
    ],
    technology: "javascript",
    explanation:
      "A forma correta de declarar uma função em JavaScript é 'function minhaFuncao() {}'.",
    correctAnswerId: 1, // A resposta correta é function minhaFuncao() {}
  },
  {
    id: 49,
    question:
      "Qual estrutura de repetição é usada para percorrer arrays em JavaScript?",
    type: "option",
    options: [
      { id: 1, value: "for" },
      { id: 2, value: "while" },
      { id: 3, value: "forEach" },
      { id: 4, value: "loop" },
    ],
    technology: "javascript",
    explanation:
      "A estrutura de repetição forEach é usada para percorrer arrays em JavaScript.",
    correctAnswerId: 3, // A resposta correta é forEach
  },
  {
    id: 50,
    question:
      "Qual palavra-chave é usada para criar uma função anônima em JavaScript?",
    type: "option",
    options: [
      { id: 1, value: "function" },
      { id: 2, value: "var" },
      { id: 3, value: "let" },
      { id: 4, value: "const" },
    ],
    technology: "javascript",
    explanation:
      "A palavra-chave 'function' é usada para criar funções anônimas.",
    correctAnswerId: 1, // A resposta correta é function
  },
  {
    id: 51,
    question:
      "Qual é a maneira correta de acessar o valor de uma chave em um objeto JavaScript?",
    type: "option",
    options: [
      { id: 1, value: "obj.chave" },
      { id: 2, value: "obj.[chave]" },
      { id: 3, value: "obj->chave" },
      { id: 4, value: "obj[chave()]" },
    ],
    technology: "javascript",
    explanation:
      "A maneira correta de acessar o valor de uma chave em um objeto é 'obj.chave' ou 'obj[chave]'.",
    correctAnswerId: 1, // A resposta correta é obj.chave
  },
  {
    id: 52,
    question: "O que a palavra-chave 'this' representa dentro de uma função?",
    type: "option",
    options: [
      { id: 1, value: "O objeto global" },
      { id: 2, value: "O objeto que invocou a função" },
      { id: 3, value: "A função em si" },
      { id: 4, value: "A string" },
    ],
    technology: "javascript",
    explanation:
      "A palavra-chave 'this' dentro de uma função se refere ao objeto que invocou a função.",
    correctAnswerId: 2, // A resposta correta é O objeto que invocou a função
  },
  {
    id: 53,
    question:
      "Qual função JavaScript converte um valor para um número de ponto flutuante?",
    type: "option",
    options: [
      { id: 1, value: "parseFloat()" },
      { id: 2, value: "parseInt()" },
      { id: 3, value: "Number()" },
      { id: 4, value: "toFixed()" },
    ],
    technology: "javascript",
    explanation:
      "A função parseFloat() converte um valor para um número de ponto flutuante.",
    correctAnswerId: 1, // A resposta correta é parseFloat()
  },
  {
    id: 54,
    question:
      "Como se chama o processo de transformar uma função em uma expressão?",
    type: "option",
    options: [
      { id: 1, value: "Função anônima" },
      { id: 2, value: "Expressão de função" },
      { id: 3, value: "Callback" },
      { id: 4, value: "Closure" },
    ],
    technology: "javascript",
    explanation:
      "O processo de transformar uma função em uma expressão é chamado de 'Expressão de função'.",
    correctAnswerId: 2, // A resposta correta é Expressão de função
  },
  {
    id: 55,
    question:
      "Qual palavra-chave é usada para declarar uma variável em TypeScript com tipo definido?",
    type: "option",
    options: [
      { id: 1, value: "let" },
      { id: 2, value: "var" },
      { id: 3, value: "const" },
      { id: 4, value: "type" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, usamos 'let', 'var' ou 'const' para declarar variáveis com tipos definidos.",
    correctAnswerId: 3, // A resposta correta é const
  },
  {
    id: 56,
    question: "Como você declara um tipo de variável em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "let idade: number;" },
      { id: 2, value: "let idade = number;" },
      { id: 3, value: "var idade: 'number';" },
      { id: 4, value: "let idade: int;" },
    ],
    technology: "typescript",
    explanation:
      "A sintaxe correta para declarar um tipo de variável em TypeScript é 'let idade: number;'.",
    correctAnswerId: 1, // A resposta correta é let idade: number;
  },
  {
    id: 57,
    question:
      "Como você define um tipo para um parâmetro de função em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "function soma(a: number, b: number): number {}" },
      { id: 2, value: "function soma(a, b: number) {}" },
      { id: 3, value: "function soma(a: number, b: number) -> number {}" },
      { id: 4, value: "function soma(a, b) { return a + b }" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, você pode definir o tipo de um parâmetro de função como 'function soma(a: number, b: number): number {}'.",
    correctAnswerId: 1, // A resposta correta é function soma(a: number, b: number): number {}
  },
  {
    id: 58,
    question: "Como você define um tipo de dado opcional em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "let nome?: string;" },
      { id: 2, value: "let nome: string?;" },
      { id: 3, value: "let nome: string | undefined;" },
      { id: 4, value: "let nome = string;" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, você pode definir um tipo opcional usando o símbolo '?' como em 'let nome?: string;'.",
    correctAnswerId: 1, // A resposta correta é let nome?: string;
  },
  {
    id: 59,
    question: "O que o tipo 'any' faz em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "Aceita qualquer tipo de valor" },
      { id: 2, value: "É usado para tipos específicos" },
      { id: 3, value: "Permite que a variável seja 'null' ou 'undefined'" },
      { id: 4, value: "Declara tipos de dados de função" },
    ],
    technology: "typescript",
    explanation:
      "'any' é um tipo em TypeScript que permite que uma variável aceite qualquer tipo de valor, sem restrições.",
    correctAnswerId: 1, // A resposta correta é Aceita qualquer tipo de valor
  },
  {
    id: 60,
    question:
      "Qual a palavra-chave usada para definir uma interface em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "interface" },
      { id: 2, value: "type" },
      { id: 3, value: "function" },
      { id: 4, value: "class" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, usamos a palavra-chave 'interface' para definir uma interface.",
    correctAnswerId: 1, // A resposta correta é interface
  },
  {
    id: 61,
    question:
      "Qual é a sintaxe correta para herdar de uma classe em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "class Filho extends Pai {}" },
      { id: 2, value: "class Filho > Pai {}" },
      { id: 3, value: "class Filho inherits Pai {}" },
      { id: 4, value: "class Filho: Pai {}" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, usamos a palavra-chave 'extends' para herdar de uma classe. Exemplo: 'class Filho extends Pai {}'.",
    correctAnswerId: 1, // A resposta correta é class Filho extends Pai {}
  },
  {
    id: 62,
    question: "O que significa o tipo 'void' em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "Indica que a função não retorna nenhum valor" },
      { id: 2, value: "Representa uma string vazia" },
      { id: 3, value: "É um tipo numérico" },
      { id: 4, value: "Indica que a variável é de tipo qualquer" },
    ],
    technology: "typescript",
    explanation:
      "'void' é usado em TypeScript para indicar que uma função não retorna nenhum valor.",
    correctAnswerId: 1, // A resposta correta é Indica que a função não retorna nenhum valor
  },
  {
    id: 63,
    question: "Como você define um tipo de dado para uma tupla em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "let tupla: [string, number];" },
      { id: 2, value: "let tupla: (string, number);" },
      { id: 3, value: "let tupla: [string | number];" },
      { id: 4, value: "let tupla: Array<string, number>;" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, tuplas são definidas com a sintaxe '[tipo1, tipo2]'. Exemplo: 'let tupla: [string, number];'.",
    correctAnswerId: 1, // A resposta correta é let tupla: [string, number];
  },
  {
    id: 64,
    question:
      "Como você define um tipo de dados para uma função em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "(x: number, y: number) => number;" },
      { id: 2, value: "(x: number, y: string) => void;" },
      { id: 3, value: "(x: string, y: number): number;" },
      { id: 4, value: "(x, y): number;" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, a sintaxe para definir tipos em funções é '(x: tipo1, y: tipo2) => tipoRetorno'. Exemplo: '(x: number, y: number) => number;'",
    correctAnswerId: 1, // A resposta correta é (x: number, y: number) => number;
  },
  {
    id: 65,
    question: "Como você define um tipo literal em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "let cor: 'vermelho' | 'azul';" },
      { id: 2, value: "let cor: [vermelho, azul];" },
      { id: 3, value: "let cor: string[vermelho, azul];" },
      { id: 4, value: "let cor: (vermelho | azul);" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, usamos a sintaxe 'let cor: 'vermelho' | 'azul';' para definir um tipo literal.",
    correctAnswerId: 1, // A resposta correta é let cor: 'vermelho' | 'azul';
  },
  {
    id: 66,
    question: "Qual é a diferença entre 'interface' e 'type' em TypeScript?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Ambos definem tipos, mas 'type' pode ser mais flexível",
      },
      { id: 2, value: "Interfaces podem ser mescladas, mas 'type' não" },
      { id: 3, value: "Não há diferença entre 'interface' e 'type'" },
      { id: 4, value: "Interfaces são mais eficientes que 'type'" },
    ],
    technology: "typescript",
    explanation:
      "'Interface' e 'type' são usados para definir tipos em TypeScript, mas 'type' é mais flexível, enquanto 'interface' permite mesclar e estender tipos.",
    correctAnswerId: 1, // A resposta correta é Ambos definem tipos, mas 'type' pode ser mais flexível
  },
  {
    id: 67,
    question: "Como você define um tipo de dados para um objeto em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "let obj: { nome: string, idade: number };" },
      { id: 2, value: "let obj: [nome: string, idade: number];" },
      { id: 3, value: "let obj: { string, number };" },
      { id: 4, value: "let obj: { nome: string, idade: number ];" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, um objeto é definido com a sintaxe '{ chave: tipo }'. Exemplo: 'let obj: { nome: string, idade: number };'.",
    correctAnswerId: 1, // A resposta correta é let obj: { nome: string, idade: number };
  },
  {
    id: 68,
    question:
      "Qual método permite iterar sobre os itens de um objeto em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "for...in" },
      { id: 2, value: "forEach()" },
      { id: 3, value: "map()" },
      { id: 4, value: "for...of" },
    ],
    technology: "typescript",
    explanation:
      "Em TypeScript, usamos o loop 'for...in' para iterar sobre as propriedades de um objeto.",
    correctAnswerId: 1, // A resposta correta é for...in
  },
  {
    id: 69,
    question:
      "Qual é a forma correta de definir um tipo genérico em TypeScript?",
    type: "option",
    options: [
      { id: 1, value: "function identity<T>(arg: T): T { return arg; }" },
      { id: 2, value: "function identity(arg: T): T { return arg; }" },
      { id: 3, value: "function identity<T>(arg) { return arg; }" },
      { id: 4, value: "function identity(arg: any) { return arg; }" },
    ],
    technology: "typescript",
    explanation:
      "A sintaxe correta para tipos genéricos em TypeScript é 'function identity<T>(arg: T): T { return arg; }'.",
    correctAnswerId: 1, // A resposta correta é function identity<T>(arg: T): T { return arg; }
  },
  {
    id: 70,
    question: "O que é JSX em React?",
    type: "option",
    options: [
      { id: 1, value: "Uma extensão de sintaxe para JavaScript" },
      { id: 2, value: "Uma biblioteca de UI" },
      { id: 3, value: "Um tipo de dado específico para React" },
      { id: 4, value: "Uma linguagem de programação separada" },
    ],
    technology: "react",
    explanation:
      "JSX é uma extensão de sintaxe para JavaScript que permite escrever elementos HTML dentro do código JavaScript.",
    correctAnswerId: 1, // A resposta correta é Uma extensão de sintaxe para JavaScript
  },
  {
    id: 71,
    question: "O que é um componente em React?",
    type: "option",
    options: [
      { id: 1, value: "Uma função ou classe que retorna elementos JSX" },
      { id: 2, value: "Uma biblioteca externa" },
      { id: 3, value: "Uma variável global" },
      { id: 4, value: "Uma tag HTML personalizada" },
    ],
    technology: "react",
    explanation:
      "Um componente é uma função ou classe que retorna elementos JSX e pode ser reutilizado em diferentes partes da aplicação.",
    correctAnswerId: 1, // A resposta correta é Uma função ou classe que retorna elementos JSX
  },
  {
    id: 72,
    question:
      "Qual função é usada para atualizar o estado de um componente funcional em React?",
    type: "option",
    options: [
      { id: 1, value: "useState()" },
      { id: 2, value: "setState()" },
      { id: 3, value: "useEffect()" },
      { id: 4, value: "componentDidUpdate()" },
    ],
    technology: "react",
    explanation:
      "A função 'useState()' é usada para atualizar o estado de um componente funcional em React.",
    correctAnswerId: 1, // A resposta correta é useState()
  },
  {
    id: 73,
    question:
      "Qual hook é usado para executar efeitos colaterais em componentes funcionais em React?",
    type: "option",
    options: [
      { id: 1, value: "useEffect()" },
      { id: 2, value: "useContext()" },
      { id: 3, value: "useRef()" },
      { id: 4, value: "useReducer()" },
    ],
    technology: "react",
    explanation:
      "O 'useEffect()' é o hook usado para realizar efeitos colaterais, como chamadas de API ou manipulação de DOM, em componentes funcionais.",
    correctAnswerId: 1, // A resposta correta é useEffect()
  },
  {
    id: 74,
    question:
      "Como você passa dados de um componente pai para um componente filho em React?",
    type: "option",
    options: [
      { id: 1, value: "Através de props" },
      { id: 2, value: "Através do estado" },
      { id: 3, value: "Através do localStorage" },
      { id: 4, value: "Através de contextos" },
    ],
    technology: "react",
    explanation:
      "Em React, você passa dados de um componente pai para um componente filho utilizando 'props'.",
    correctAnswerId: 1, // A resposta correta é Através de props
  },
  {
    id: 75,
    question: "O que é o Virtual DOM em React?",
    type: "option",
    options: [
      { id: 1, value: "Uma representação virtual do DOM real" },
      { id: 2, value: "Uma biblioteca externa que acelera o render" },
      { id: 3, value: "Uma tecnologia de armazenamento local" },
      { id: 4, value: "Uma maneira de organizar os arquivos do projeto" },
    ],
    technology: "react",
    explanation:
      "O Virtual DOM é uma representação em memória do DOM real, usado pelo React para otimizar o processo de renderização.",
    correctAnswerId: 1, // A resposta correta é Uma representação virtual do DOM real
  },
  {
    id: 76,
    question: "Como você define uma função de evento em React?",
    type: "option",
    options: [
      { id: 1, value: "function handleClick() {}" },
      { id: 2, value: "const handleClick = () => {}" },
      { id: 3, value: "handleClick() => {}" },
      { id: 4, value: "function handleClick() { return 'clicked'; }" },
    ],
    technology: "react",
    explanation:
      "Em React, uma função de evento pode ser definida de várias formas, sendo uma delas 'const handleClick = () => {}'.",
    correctAnswerId: 2, // A resposta correta é const handleClick = () => {}
  },
  {
    id: 77,
    question: "O que são 'props' em React?",
    type: "option",
    options: [
      { id: 1, value: "Propriedades passadas para componentes filhos" },
      { id: 2, value: "Estados internos de um componente" },
      { id: 3, value: "Funções de manipulação de eventos" },
      { id: 4, value: "Referências a elementos DOM" },
    ],
    technology: "react",
    explanation:
      "Props são as propriedades passadas de um componente pai para um componente filho em React.",
    correctAnswerId: 1, // A resposta correta é Propriedades passadas para componentes filhos
  },
  {
    id: 78,
    question: "Qual é a função de 'key' em uma lista de elementos em React?",
    type: "option",
    options: [
      {
        id: 1,
        value:
          "Ajudar o React a identificar quais itens mudaram, foram adicionados ou removidos",
      },
      { id: 2, value: "Indicar a ordem dos itens na lista" },
      {
        id: 3,
        value: "Estabelecer um identificador único para cada item da lista",
      },
      { id: 4, value: "Definir o estilo de cada item da lista" },
    ],
    technology: "react",
    explanation:
      "'key' é usada para identificar de forma única cada item em uma lista e ajudar o React a otimizar a renderização.",
    correctAnswerId: 1, // A resposta correta é Ajudar o React a identificar quais itens mudaram, foram adicionados ou removidos
  },
  {
    id: 79,
    question: "O que é o estado (state) em React?",
    type: "option",
    options: [
      { id: 1, value: "Dados internos que podem mudar ao longo do tempo" },
      {
        id: 2,
        value: "Propriedades passadas de um componente pai para um filho",
      },
      { id: 3, value: "Funções que alteram a UI" },
      { id: 4, value: "Estrutura de armazenamento no navegador" },
    ],
    technology: "react",
    explanation:
      "O estado (state) em React é um objeto que armazena dados internos de um componente, que podem mudar durante a execução.",
    correctAnswerId: 1, // A resposta correta é Dados internos que podem mudar ao longo do tempo
  },
  {
    id: 80,
    question: "Qual hook é usado para manipular o contexto em React?",
    type: "option",
    options: [
      { id: 1, value: "useContext()" },
      { id: 2, value: "useState()" },
      { id: 3, value: "useRef()" },
      { id: 4, value: "useMemo()" },
    ],
    technology: "react",
    explanation:
      "O hook 'useContext()' é usado para acessar e manipular o contexto em React.",
    correctAnswerId: 1, // A resposta correta é useContext()
  },
  {
    id: 81,
    question: "Qual é a diferença entre 'props' e 'state' em React?",
    type: "option",
    options: [
      {
        id: 1,
        value:
          "Props são imutáveis e passadas de pai para filho, enquanto state é mutável e gerenciado internamente",
      },
      {
        id: 2,
        value:
          "State é usado apenas em componentes funcionais, enquanto props são usados em todos os componentes",
      },
      { id: 3, value: "Props e state são a mesma coisa em React" },
      {
        id: 4,
        value:
          "State é passado de um componente filho para o pai, enquanto props são passadas de pai para filho",
      },
    ],
    technology: "react",
    explanation:
      "Props são imutáveis e passadas de um componente pai para um componente filho, enquanto o state é mutável e gerenciado dentro do componente.",
    correctAnswerId: 1, // A resposta correta é Props são imutáveis e passadas de pai para filho, enquanto state é mutável e gerenciado internamente
  },
  {
    id: 82,
    question:
      "Qual comando é utilizado para criar um componente de classe em React?",
    type: "option",
    options: [
      { id: 1, value: "class NomeComponente extends React.Component {}" },
      { id: 2, value: "function NomeComponente() {}" },
      { id: 3, value: "const NomeComponente = () => {}" },
      { id: 4, value: "React.Component(NomeComponente) {}" },
    ],
    technology: "react",
    explanation:
      "A forma correta de criar um componente de classe é 'class NomeComponente extends React.Component {}'.",
    correctAnswerId: 1, // A resposta correta é class NomeComponente extends React.Component {}
  },
  {
    id: 83,
    question:
      "Como você pode definir propriedades de tipo em TypeScript para um componente React?",
    type: "option",
    options: [
      { id: 1, value: "interface Props { nome: string; }" },
      { id: 2, value: "type Props = { nome: string; }" },
      { id: 3, value: "const Props = { nome: string; }" },
      { id: 4, value: "component Props { nome: string; }" },
    ],
    technology: "react",
    explanation:
      "Em TypeScript, você pode definir propriedades para um componente React utilizando 'interface Props { nome: string; }'.",
    correctAnswerId: 1, // A resposta correta é interface Props { nome: string; }
  },
  {
    id: 84,
    question:
      "Qual é o método correto para consumir dados de uma API em React?",
    type: "option",
    options: [
      { id: 1, value: "Utilizando 'fetch' ou 'axios' dentro do 'useEffect'" },
      { id: 2, value: "Utilizando 'setState' diretamente no componente" },
      { id: 3, value: "Através de props" },
      { id: 4, value: "Chamando diretamente a função no render" },
    ],
    technology: "react",
    explanation:
      "Você pode consumir dados de uma API utilizando 'fetch' ou 'axios' dentro de um hook 'useEffect'.",
    correctAnswerId: 1, // A resposta correta é Utilizando 'fetch' ou 'axios' dentro do 'useEffect'
  },
  {
    id: 85,
    question: "O que é Next.js?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Uma framework React para desenvolvimento de aplicações web",
      },
      { id: 2, value: "Uma biblioteca de componentes para React" },
      { id: 3, value: "Uma ferramenta de compilação para JavaScript" },
      { id: 4, value: "Uma API para integração com back-end" },
    ],
    technology: "nextjs",
    explanation:
      "Next.js é uma framework React que permite o desenvolvimento de aplicações web, oferecendo funcionalidades como renderização no lado do servidor e geração estática de páginas.",
    correctAnswerId: 1, // A resposta correta é Uma framework React para desenvolvimento de aplicações web
  },
  {
    id: 86,
    question: "Qual é a principal característica do Next.js?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Renderização do lado servidor e geração estática de páginas",
      },
      { id: 2, value: "Facilidade de integração com bibliotecas externas" },
      { id: 3, value: "Uso exclusivo de hooks" },
      { id: 4, value: "Desenvolvimento apenas para aplicativos móveis" },
    ],
    technology: "nextjs",
    explanation:
      "A principal característica do Next.js é sua capacidade de fazer renderização no lado do servidor (SSR) e geração estática de páginas (SSG), o que melhora o desempenho e SEO.",
    correctAnswerId: 1, // A resposta correta é Renderização do lado servidor e geração estática de páginas
  },
  {
    id: 87,
    question: "Qual comando é utilizado para criar um novo projeto Next.js?",
    type: "option",
    options: [
      { id: 1, value: "npx create-next-app" },
      { id: 2, value: "npm init next-app" },
      { id: 3, value: "create-next-app" },
      { id: 4, value: "npx init-next" },
    ],
    technology: "nextjs",
    explanation:
      "Para criar um novo projeto Next.js, você pode usar o comando 'npx create-next-app'.",
    correctAnswerId: 1, // A resposta correta é npx create-next-app
  },
  {
    id: 88,
    question: "O que significa SSR em Next.js?",
    type: "option",
    options: [
      { id: 1, value: "Server-side rendering (renderização no lado servidor)" },
      { id: 2, value: "Static site rendering (renderização estática de site)" },
      { id: 3, value: "Single page routing (roteamento de página única)" },
      {
        id: 4,
        value: "Software stack rendering (renderização de pilha de software)",
      },
    ],
    technology: "nextjs",
    explanation:
      "SSR significa 'Server-side rendering', ou renderização no lado servidor, que permite que as páginas sejam renderizadas no servidor antes de serem enviadas para o cliente.",
    correctAnswerId: 1, // A resposta correta é Server-side rendering (renderização no lado servidor)
  },
  {
    id: 89,
    question: "Como você cria uma página em Next.js?",
    type: "option",
    options: [
      { id: 1, value: "Criando um arquivo dentro da pasta 'pages'" },
      { id: 2, value: "Criando um componente na pasta 'components'" },
      { id: 3, value: "Adicionando um arquivo na pasta 'src'" },
      { id: 4, value: "Usando o comando 'next create-page'" },
    ],
    technology: "nextjs",
    explanation:
      "Em Next.js, você cria uma página simplesmente adicionando um arquivo dentro da pasta 'pages'. Cada arquivo dentro dessa pasta se torna uma rota automaticamente.",
    correctAnswerId: 1, // A resposta correta é Criando um arquivo dentro da pasta 'pages'
  },
  {
    id: 90,
    question: "Qual método de renderização é usado por padrão no Next.js?",
    type: "option",
    options: [
      { id: 1, value: "Renderização no lado do servidor (SSR)" },
      { id: 2, value: "Renderização estática (SSG)" },
      { id: 3, value: "Renderização no lado do cliente (CSR)" },
      { id: 4, value: "Renderização híbrida" },
    ],
    technology: "nextjs",
    explanation:
      "Por padrão, Next.js usa renderização no lado do servidor (SSR), mas também suporta outras formas de renderização, como a estática (SSG) e híbrida.",
    correctAnswerId: 1, // A resposta correta é Renderização no lado do servidor (SSR)
  },
  {
    id: 91,
    question: "Qual é o arquivo de configuração principal do Next.js?",
    type: "option",
    options: [
      { id: 1, value: "next.config.js" },
      { id: 2, value: "next.js" },
      { id: 3, value: "config.js" },
      { id: 4, value: "webpack.config.js" },
    ],
    technology: "nextjs",
    explanation:
      "O arquivo de configuração principal do Next.js é o 'next.config.js', onde você pode personalizar diversos aspectos do comportamento da aplicação.",
    correctAnswerId: 1, // A resposta correta é next.config.js
  },
  {
    id: 92,
    question: "Como você define uma rota dinâmica em Next.js?",
    type: "option",
    options: [
      { id: 1, value: "Criando um arquivo com colchetes na pasta 'pages'" },
      { id: 2, value: "Usando o comando 'next route'" },
      { id: 3, value: "Definindo rotas no arquivo 'routes.js'" },
      {
        id: 4,
        value: "Definindo um arquivo de configuração em 'next.config.js'",
      },
    ],
    technology: "nextjs",
    explanation:
      "Em Next.js, para definir uma rota dinâmica, você cria um arquivo com colchetes na pasta 'pages', como '[id].js'.",
    correctAnswerId: 1, // A resposta correta é Criando um arquivo com colchetes na pasta 'pages'
  },
  {
    id: 93,
    question: "O que é o `getStaticProps` em Next.js?",
    type: "option",
    options: [
      {
        id: 1,
        value:
          "Uma função que permite carregar dados de forma estática durante a build",
      },
      { id: 2, value: "Uma função que faz renderização no lado do servidor" },
      { id: 3, value: "Uma função que permite interagir com o banco de dados" },
      { id: 4, value: "Uma função para gerenciar o estado da aplicação" },
    ],
    technology: "nextjs",
    explanation:
      "`getStaticProps` é uma função usada para carregar dados de forma estática durante o processo de build e enviar esses dados para a página.",
    correctAnswerId: 1, // A resposta correta é Uma função que permite carregar dados de forma estática durante a build
  },
  {
    id: 94,
    question: "O que é o `getServerSideProps` em Next.js?",
    type: "option",
    options: [
      {
        id: 1,
        value:
          "Uma função para carregar dados no lado do servidor a cada requisição",
      },
      {
        id: 2,
        value: "Uma função para carregar dados durante a build da aplicação",
      },
      { id: 3, value: "Uma função para fazer renderização no lado do cliente" },
      { id: 4, value: "Uma função para manipulação de eventos no cliente" },
    ],
    technology: "nextjs",
    explanation:
      "`getServerSideProps` é uma função que permite carregar dados no lado do servidor a cada requisição, sendo útil para renderização dinâmica.",
    correctAnswerId: 1, // A resposta correta é Uma função para carregar dados no lado do servidor a cada requisição
  },
  {
    id: 95,
    question: "O que é a funcionalidade de roteamento no Next.js?",
    type: "option",
    options: [
      { id: 1, value: "O roteamento é baseado em arquivos na pasta 'pages'" },
      {
        id: 2,
        value: "O roteamento é configurado manualmente no arquivo 'routes.js'",
      },
      {
        id: 3,
        value: "O roteamento é feito com a ajuda de bibliotecas externas",
      },
      {
        id: 4,
        value:
          "O roteamento é feito com base em URLs configuradas no arquivo de configuração",
      },
    ],
    technology: "nextjs",
    explanation:
      "No Next.js, o roteamento é baseado na estrutura de arquivos dentro da pasta 'pages'. Cada arquivo na pasta gera uma rota automaticamente.",
    correctAnswerId: 1, // A resposta correta é O roteamento é baseado em arquivos na pasta 'pages'
  },
  {
    id: 96,
    question: "Como você pode adicionar uma imagem otimizada em Next.js?",
    type: "option",
    options: [
      { id: 1, value: "Usando o componente <Image> do Next.js" },
      { id: 2, value: "Usando a tag <img> tradicional" },
      { id: 3, value: "Usando o componente <OptimizedImage>" },
      { id: 4, value: "Adicionando imagens diretamente na pasta public" },
    ],
    technology: "nextjs",
    explanation:
      "Para adicionar imagens otimizadas em Next.js, você deve usar o componente <Image> importado do Next.js, que oferece otimização automática.",
    correctAnswerId: 1, // A resposta correta é Usando o componente <Image> do Next.js
  },
  {
    id: 97,
    question: "O que é o `next/link` em Next.js?",
    type: "option",
    options: [
      { id: 1, value: "Uma maneira de adicionar links internos entre páginas" },
      { id: 2, value: "Uma biblioteca externa para navegação" },
      { id: 3, value: "Uma API para comunicação com o back-end" },
      { id: 4, value: "Um método para integrar links de mídia" },
    ],
    technology: "nextjs",
    explanation:
      "`next/link` é um componente usado para adicionar links internos entre páginas em uma aplicação Next.js.",
    correctAnswerId: 1, // A resposta correta é Uma maneira de adicionar links internos entre páginas
  },
  {
    id: 98,
    question: "Como você cria uma página estática com Next.js?",
    type: "option",
    options: [
      { id: 1, value: "Usando o método `getStaticProps`" },
      {
        id: 2,
        value: "Criando uma função de roteamento no arquivo de configuração",
      },
      { id: 3, value: "Usando o método `getServerSideProps`" },
      { id: 4, value: "Utilizando a tag <static>" },
    ],
    technology: "nextjs",
    explanation:
      "Você pode criar uma página estática em Next.js utilizando o método `getStaticProps`, que permite gerar conteúdo estático durante a build.",
    correctAnswerId: 1, // A resposta correta é Usando o método `getStaticProps`
  },
  {
    id: 99,
    question: "O que significa SSG em Next.js?",
    type: "option",
    options: [
      { id: 1, value: "Static Site Generation (Geração de Site Estático)" },
      { id: 2, value: "Single Page Application (Aplicação de Página Única)" },
      { id: 3, value: "Server Side Generation (Geração Lado Servidor)" },
      {
        id: 4,
        value:
          "Software as Service Generation (Geração de Software como Serviço)",
      },
    ],
    technology: "nextjs",
    explanation:
      "SSG significa 'Static Site Generation' (Geração de Site Estático), uma funcionalidade que permite gerar páginas estáticas no momento da build.",
    correctAnswerId: 1, // A resposta correta é Static Site Generation (Geração de Site Estático)
  },
  {
    id: 100,
    question: "O que é o Tailwind CSS?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Uma framework CSS utilitária para criar designs rápidos",
      },
      { id: 2, value: "Uma biblioteca de componentes prontos para uso" },
      { id: 3, value: "Uma ferramenta para compilar código CSS" },
      { id: 4, value: "Uma ferramenta para gerenciamento de pacotes CSS" },
    ],
    technology: "tailwindcss",
    explanation:
      "Tailwind CSS é uma framework utilitária para CSS, permitindo que você construa rapidamente interfaces de usuário com classes de utilitário.",
    correctAnswerId: 1, // A resposta correta é Uma framework CSS utilitária para criar designs rápidos
  },
  {
    id: 101,
    question: "Como você aplica o Tailwind CSS em um projeto?",
    type: "option",
    options: [
      { id: 1, value: "Instalando via npm ou incluindo o CDN no HTML" },
      {
        id: 2,
        value: "Baixando o arquivo CSS e colocando no diretório public",
      },
      { id: 3, value: "Usando o comando 'tailwind start'" },
      { id: 4, value: "Importando o arquivo CSS em um arquivo JavaScript" },
    ],
    technology: "tailwindcss",
    explanation:
      "Você pode aplicar o Tailwind CSS em um projeto instalando-o via npm ou incluindo o CDN diretamente no seu arquivo HTML.",
    correctAnswerId: 1, // A resposta correta é Instalando via npm ou incluindo o CDN no HTML
  },
  {
    id: 102,
    question: "Como você define o tamanho de uma fonte no Tailwind CSS?",
    type: "option",
    options: [
      {
        id: 1,
        value:
          "Usando as classes de tamanho de fonte, como 'text-xs', 'text-sm', etc.",
      },
      {
        id: 2,
        value: "Definindo a propriedade 'font-size' diretamente no CSS",
      },
      {
        id: 3,
        value:
          "Utilizando a propriedade 'font' no arquivo de configuração do Tailwind",
      },
      { id: 4, value: "Usando a classe 'font-size' no arquivo HTML" },
    ],
    technology: "tailwindcss",
    explanation:
      "Em Tailwind CSS, você define o tamanho da fonte usando as classes como 'text-xs', 'text-sm', 'text-lg', etc.",
    correctAnswerId: 1, // A resposta correta é Usando as classes de tamanho de fonte, como 'text-xs', 'text-sm', etc.
  },
  {
    id: 103,
    question:
      "Qual é a classe para adicionar uma borda arredondada no Tailwind CSS?",
    type: "option",
    options: [
      { id: 1, value: "rounded" },
      { id: 2, value: "border-radius" },
      { id: 3, value: "round" },
      { id: 4, value: "radius" },
    ],
    technology: "tailwindcss",
    explanation:
      "No Tailwind CSS, a classe 'rounded' é usada para adicionar bordas arredondadas aos elementos.",
    correctAnswerId: 1, // A resposta correta é rounded
  },
  {
    id: 104,
    question: "Como você aplica margens e preenchimentos no Tailwind CSS?",
    type: "option",
    options: [
      { id: 1, value: "Usando as classes 'm-{valor}' e 'p-{valor}'" },
      {
        id: 2,
        value:
          "Definindo diretamente as propriedades de margem e padding no CSS",
      },
      { id: 3, value: "Usando o comando 'tailwind margin'" },
      {
        id: 4,
        value:
          "Ajustando a propriedade 'spacing' no arquivo de configuração do Tailwind",
      },
    ],
    technology: "tailwindcss",
    explanation:
      "Em Tailwind CSS, você aplica margens com a classe 'm-{valor}' e preenchimentos com a classe 'p-{valor}', onde {valor} pode ser um número ou uma unidade como 'px', 'rem', etc.",
    correctAnswerId: 1, // A resposta correta é Usando as classes 'm-{valor}' e 'p-{valor}'
  },
  {
    id: 105,
    question: "Como você altera a cor do texto no Tailwind CSS?",
    type: "option",
    options: [
      { id: 1, value: "Usando as classes 'text-{cor}'" },
      {
        id: 2,
        value: "Definindo a cor diretamente no arquivo de configuração",
      },
      { id: 3, value: "Usando a classe 'color-text'" },
      { id: 4, value: "Adicionando a cor no arquivo CSS manualmente" },
    ],
    technology: "tailwindcss",
    explanation:
      "Você altera a cor do texto em Tailwind CSS usando as classes 'text-{cor}', onde {cor} pode ser uma cor como 'red-500', 'blue-200', etc.",
    correctAnswerId: 1, // A resposta correta é Usando as classes 'text-{cor}'
  },
  {
    id: 106,
    question: "Qual classe no Tailwind CSS altera a largura de um elemento?",
    type: "option",
    options: [
      { id: 1, value: "w-{tamanho}" },
      { id: 2, value: "width-{tamanho}" },
      { id: 3, value: "size-{tamanho}" },
      { id: 4, value: "flex-{tamanho}" },
    ],
    technology: "tailwindcss",
    explanation:
      "A classe 'w-{tamanho}' é usada no Tailwind CSS para definir a largura de um elemento, onde {tamanho} pode ser valores como 'full', '1/2', '8' e outros.",
    correctAnswerId: 1, // A resposta correta é w-{tamanho}
  },
  {
    id: 107,
    question:
      "Como você faz com que um elemento ocupe toda a altura da tela em Tailwind CSS?",
    type: "option",
    options: [
      { id: 1, value: "Usando a classe 'h-screen'" },
      { id: 2, value: "Usando a classe 'full-height'" },
      { id: 3, value: "Definindo a altura com a propriedade 'height' no CSS" },
      { id: 4, value: "Usando a classe 'height-100'" },
    ],
    technology: "tailwindcss",
    explanation:
      "A classe 'h-screen' faz com que o elemento ocupe toda a altura da tela.",
    correctAnswerId: 1, // A resposta correta é Usando a classe 'h-screen'
  },
  {
    id: 108,
    question: "Como você esconde um elemento responsivamente em Tailwind CSS?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Usando a classe 'hidden' junto com as classes de breakpoint",
      },
      { id: 2, value: "Usando a classe 'display-none'" },
      {
        id: 3,
        value:
          "Definindo a propriedade 'display: none' no arquivo de configuração",
      },
      {
        id: 4,
        value:
          "Aplicando a propriedade 'visibility: hidden' diretamente no CSS",
      },
    ],
    technology: "tailwindcss",
    explanation:
      "Em Tailwind CSS, você pode esconder elementos responsivamente usando a classe 'hidden' e combinando com as classes de breakpoint, como 'sm:hidden', 'lg:hidden', etc.",
    correctAnswerId: 1, // A resposta correta é Usando a classe 'hidden' junto com as classes de breakpoint
  },
  {
    id: 109,
    question: "Como você aplica uma sombra em Tailwind CSS?",
    type: "option",
    options: [
      { id: 1, value: "Usando as classes 'shadow' ou 'shadow-{tamanho}'" },
      { id: 2, value: "Usando a classe 'box-shadow'" },
      {
        id: 3,
        value:
          "Definindo a propriedade 'box-shadow' no arquivo de configuração",
      },
      { id: 4, value: "Adicionando a sombra manualmente no arquivo CSS" },
    ],
    technology: "tailwindcss",
    explanation:
      "Em Tailwind CSS, você aplica uma sombra usando a classe 'shadow' ou 'shadow-{tamanho}', como 'shadow-lg', 'shadow-md', etc.",
    correctAnswerId: 1, // A resposta correta é Usando as classes 'shadow' ou 'shadow-{tamanho}'
  },
  {
    id: 110,
    question: "Como você centraliza um elemento com Tailwind CSS?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Usando as classes 'flex', 'items-center' e 'justify-center'",
      },
      { id: 2, value: "Usando a classe 'center'" },
      { id: 3, value: "Definindo 'text-align: center' no arquivo CSS" },
      { id: 4, value: "Aplicando a propriedade 'align-items: center'" },
    ],
    technology: "tailwindcss",
    explanation:
      "Em Tailwind CSS, para centralizar um elemento, você pode usar as classes 'flex', 'items-center' (alinhamento vertical) e 'justify-center' (alinhamento horizontal).",
    correctAnswerId: 1, // A resposta correta é Usando as classes 'flex', 'items-center' e 'justify-center'
  },
  {
    id: 111,
    question: "Como você aplica uma cor de fundo em Tailwind CSS?",
    type: "option",
    options: [
      { id: 1, value: "Usando a classe 'bg-{cor}'" },
      {
        id: 2,
        value: "Definindo diretamente a propriedade 'background-color' no CSS",
      },
      { id: 3, value: "Usando a classe 'background-{cor}'" },
      { id: 4, value: "Adicionando a cor no arquivo CSS manualmente" },
    ],
    technology: "tailwindcss",
    explanation:
      "Em Tailwind CSS, você aplica a cor de fundo usando a classe 'bg-{cor}', onde {cor} pode ser um nome de cor ou uma escala de cor como 'bg-blue-500'.",
    correctAnswerId: 1, // A resposta correta é Usando a classe 'bg-{cor}'
  },
  {
    id: 112,
    question:
      "Como você define o espaçamento entre os itens de um layout flex em Tailwind CSS?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Usando a classe 'space-x-{valor}' ou 'space-y-{valor}'",
      },
      { id: 2, value: "Usando a propriedade 'gap' no CSS" },
      {
        id: 3,
        value: "Definindo o valor 'justify-spacing' no arquivo de configuração",
      },
      { id: 4, value: "Aplicando a propriedade 'flex-gap' diretamente no CSS" },
    ],
    technology: "tailwindcss",
    explanation:
      "Para definir o espaçamento entre os itens em um layout flex, você pode usar as classes 'space-x-{valor}' (para espaçamento horizontal) ou 'space-y-{valor}' (para espaçamento vertical).",
    correctAnswerId: 1, // A resposta correta é Usando a classe 'space-x-{valor}' ou 'space-y-{valor}'
  },
  {
    id: 113,
    question: "Como você define uma altura mínima em Tailwind CSS?",
    type: "option",
    options: [
      { id: 1, value: "Usando a classe 'min-h-{valor}'" },
      { id: 2, value: "Usando a classe 'min-height'" },
      {
        id: 3,
        value:
          "Definindo a propriedade 'min-height' diretamente no arquivo CSS",
      },
      {
        id: 4,
        value: "Usando a propriedade 'height' no arquivo de configuração",
      },
    ],
    technology: "tailwindcss",
    explanation:
      "A classe 'min-h-{valor}' em Tailwind CSS define uma altura mínima para um elemento, permitindo que ele expanda conforme necessário.",
    correctAnswerId: 1, // A resposta correta é Usando a classe 'min-h-{valor}'
  },
  {
    id: 114,
    question:
      "Como você define o comportamento de exibição de um elemento em Tailwind CSS?",
    type: "option",
    options: [
      { id: 1, value: "Usando as classes 'block', 'inline' ou 'flex'" },
      { id: 2, value: "Definindo a propriedade 'display' diretamente no CSS" },
      { id: 3, value: "Usando a classe 'display-{valor}'" },
      { id: 4, value: "Usando a classe 'visibility-{valor}'" },
    ],
    technology: "tailwindcss",
    explanation:
      "Em Tailwind CSS, você define o comportamento de exibição de um elemento utilizando as classes 'block', 'inline', 'flex' e outras.",
    correctAnswerId: 1, // A resposta correta é Usando as classes 'block', 'inline' ou 'flex'
  },
  {
    id: 115,
    question: "Qual classe você usa para ocultar o texto no Tailwind CSS?",
    type: "option",
    options: [
      { id: 1, value: "invisible" },
      { id: 2, value: "hidden" },
      { id: 3, value: "text-hidden" },
      { id: 4, value: "display-none" },
    ],
    technology: "tailwindcss",
    explanation:
      "Para ocultar o texto sem remover o espaço que ele ocupa, você pode usar a classe 'invisible'. Para ocultar completamente o elemento, usa-se 'hidden'.",
    correctAnswerId: 1, // A resposta correta é invisible
  },
  {
    id: 116,
    question: "O que é o Node.js?",
    type: "option",
    options: [
      {
        id: 1,
        value:
          "Uma plataforma de tempo de execução JavaScript no lado do servidor",
      },
      {
        id: 2,
        value: "Uma biblioteca para manipulação de DOM no lado do cliente",
      },
      { id: 3, value: "Um framework para criação de interfaces de usuário" },
      { id: 4, value: "Uma linguagem de programação" },
    ],
    technology: "nodejs",
    explanation:
      "Node.js é uma plataforma de tempo de execução para JavaScript, permitindo que você execute código JavaScript no lado do servidor.",
    correctAnswerId: 1, // A resposta correta é Uma plataforma de tempo de execução JavaScript no lado do servidor
  },
  {
    id: 117,
    question: "Qual é a função do NPM no Node.js?",
    type: "option",
    options: [
      { id: 1, value: "Gerenciar pacotes e dependências do Node.js" },
      { id: 2, value: "Gerenciar arquivos JavaScript no cliente" },
      { id: 3, value: "Compilar código JavaScript para outras linguagens" },
      { id: 4, value: "Executar código JavaScript no servidor" },
    ],
    technology: "nodejs",
    explanation:
      "O NPM (Node Package Manager) é uma ferramenta para gerenciar pacotes e dependências no Node.js.",
    correctAnswerId: 1, // A resposta correta é Gerenciar pacotes e dependências do Node.js
  },
  {
    id: 118,
    question: "Como você inicializa um novo projeto Node.js?",
    type: "option",
    options: [
      { id: 1, value: "Usando o comando 'npm init'" },
      { id: 2, value: "Usando o comando 'node init'" },
      { id: 3, value: "Criando manualmente um arquivo 'index.js'" },
      { id: 4, value: "Usando o comando 'npm start'" },
    ],
    technology: "nodejs",
    explanation:
      "Para inicializar um novo projeto Node.js, você usa o comando 'npm init', que cria o arquivo 'package.json'.",
    correctAnswerId: 1, // A resposta correta é Usando o comando 'npm init'
  },
  {
    id: 119,
    question: "Como você instala pacotes no Node.js?",
    type: "option",
    options: [
      { id: 1, value: "Usando o comando 'npm install {pacote}'" },
      { id: 2, value: "Usando o comando 'node install {pacote}'" },
      {
        id: 3,
        value: "Baixando o pacote manualmente e referenciando no projeto",
      },
      { id: 4, value: "Usando o comando 'npm get {pacote}'" },
    ],
    technology: "nodejs",
    explanation:
      "Você instala pacotes no Node.js utilizando o comando 'npm install {pacote}', onde {pacote} é o nome do pacote que você deseja instalar.",
    correctAnswerId: 1, // A resposta correta é Usando o comando 'npm install {pacote}'
  },
  {
    id: 120,
    question: "Como você executa um arquivo Node.js?",
    type: "option",
    options: [
      { id: 1, value: "Usando o comando 'node {arquivo}.js'" },
      { id: 2, value: "Usando o comando 'npm run {arquivo}.js'" },
      { id: 3, value: "Usando o comando 'node run {arquivo}.js'" },
      { id: 4, value: "Usando o comando 'npm start {arquivo}.js'" },
    ],
    technology: "nodejs",
    explanation:
      "Para executar um arquivo Node.js, você usa o comando 'node {arquivo}.js', onde {arquivo} é o nome do arquivo JavaScript.",
    correctAnswerId: 1, // A resposta correta é Usando o comando 'node {arquivo}.js'
  },
  {
    id: 121,
    question: "Qual é o módulo padrão para manipulação de arquivos no Node.js?",
    type: "option",
    options: [
      { id: 1, value: "fs" },
      { id: 2, value: "file-system" },
      { id: 3, value: "file" },
      { id: 4, value: "os" },
    ],
    technology: "nodejs",
    explanation:
      "O módulo 'fs' (file system) é utilizado para manipulação de arquivos no Node.js.",
    correctAnswerId: 1, // A resposta correta é fs
  },
  {
    id: 122,
    question:
      "Qual função do módulo 'fs' é utilizada para ler arquivos de forma assíncrona?",
    type: "option",
    options: [
      { id: 1, value: "fs.readFile()" },
      { id: 2, value: "fs.read()" },
      { id: 3, value: "fs.open()" },
      { id: 4, value: "fs.createReadStream()" },
    ],
    technology: "nodejs",
    explanation:
      "A função 'fs.readFile()' é utilizada para ler arquivos de forma assíncrona no Node.js.",
    correctAnswerId: 1, // A resposta correta é fs.readFile()
  },
  {
    id: 123,
    question: "Qual é o principal uso do Express no Node.js?",
    type: "option",
    options: [
      { id: 1, value: "Criar aplicações web e APIs" },
      { id: 2, value: "Compilar código JavaScript" },
      { id: 3, value: "Gerenciar pacotes e dependências" },
      { id: 4, value: "Manipular arquivos de sistema" },
    ],
    technology: "nodejs",
    explanation:
      "O Express é um framework minimalista para criar aplicações web e APIs no Node.js.",
    correctAnswerId: 1, // A resposta correta é Criar aplicações web e APIs
  },
  {
    id: 124,
    question: "Como você cria um servidor HTTP simples no Node.js?",
    type: "option",
    options: [
      { id: 1, value: "Usando o módulo 'http'" },
      { id: 2, value: "Usando o módulo 'express'" },
      { id: 3, value: "Usando o módulo 'server'" },
      { id: 4, value: "Usando o módulo 'net'" },
    ],
    technology: "nodejs",
    explanation:
      "Para criar um servidor HTTP simples no Node.js, você usa o módulo 'http'.",
    correctAnswerId: 1, // A resposta correta é Usando o módulo 'http'
  },
  {
    id: 125,
    question:
      "Qual comando você usa para instalar o Express no seu projeto Node.js?",
    type: "option",
    options: [
      { id: 1, value: "npm install express" },
      { id: 2, value: "npm install --save express" },
      { id: 3, value: "npm add express" },
      { id: 4, value: "npm get express" },
    ],
    technology: "nodejs",
    explanation:
      "Você instala o Express em seu projeto Node.js usando o comando 'npm install express'.",
    correctAnswerId: 1, // A resposta correta é npm install express
  },
  {
    id: 126,
    question: "O que é um callback no Node.js?",
    type: "option",
    options: [
      { id: 1, value: "Uma função passada como argumento para outra função" },
      {
        id: 2,
        value: "Uma função que retorna um valor de uma operação assíncrona",
      },
      { id: 3, value: "Uma função chamada após a execução de um evento" },
      { id: 4, value: "Uma função que cria novas instâncias de objetos" },
    ],
    technology: "nodejs",
    explanation:
      "Um callback no Node.js é uma função passada como argumento para outra função, sendo executada após a conclusão de uma operação.",
    correctAnswerId: 1, // A resposta correta é Uma função passada como argumento para outra função
  },
  {
    id: 127,
    question: "O que significa 'event loop' no Node.js?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Um mecanismo que lida com operações assíncronas e eventos",
      },
      { id: 2, value: "Um loop infinito de execução de código" },
      { id: 3, value: "Uma função para tratar eventos de interface gráfica" },
      { id: 4, value: "Um módulo para manipulação de eventos em arquivos" },
    ],
    technology: "nodejs",
    explanation:
      "O 'event loop' no Node.js é um mecanismo que lida com operações assíncronas e eventos, permitindo a execução de código de maneira não bloqueante.",
    correctAnswerId: 1, // A resposta correta é Um mecanismo que lida com operações assíncronas e eventos
  },
  {
    id: 128,
    question: "Como você manipula erros em funções assíncronas no Node.js?",
    type: "option",
    options: [
      {
        id: 1,
        value:
          "Usando 'try/catch' ou passando erros como argumentos para callbacks",
      },
      { id: 2, value: "Usando 'throw' dentro de callbacks" },
      { id: 3, value: "Usando 'onError()'" },
      { id: 4, value: "Usando 'error()'" },
    ],
    technology: "nodejs",
    explanation:
      "Erros em funções assíncronas podem ser manipulados usando 'try/catch' ou passando erros como argumentos para callbacks.",
    correctAnswerId: 1, // A resposta correta é Usando 'try/catch' ou passando erros como argumentos para callbacks
  },
  {
    id: 129,
    question: "Como você cria variáveis de ambiente no Node.js?",
    type: "option",
    options: [
      { id: 1, value: "Usando o arquivo '.env'" },
      { id: 2, value: "Usando o comando 'node set-env'" },
      { id: 3, value: "Definindo diretamente no código JavaScript" },
      { id: 4, value: "Criando um arquivo 'config.json'" },
    ],
    technology: "nodejs",
    explanation:
      "Variáveis de ambiente podem ser criadas no Node.js utilizando o arquivo '.env'.",
    correctAnswerId: 1, // A resposta correta é Usando o arquivo '.env'
  },
  {
    id: 130,
    question:
      "Qual comando você usa para rodar um servidor Node.js com Express?",
    type: "option",
    options: [
      { id: 1, value: "npm start" },
      { id: 2, value: "node server.js" },
      { id: 3, value: "npm run dev" },
      { id: 4, value: "node app.js" },
    ],
    technology: "nodejs",
    explanation:
      "Para rodar um servidor Node.js com Express, você pode usar o comando 'npm start', que executa o script definido no 'package.json'.",
    correctAnswerId: 1, // A resposta correta é npm start
  },
  {
    id: 131,
    question: "O que é o Express no contexto do Node.js?",
    type: "option",
    options: [
      { id: 1, value: "Um framework para construir aplicações web e APIs" },
      { id: 2, value: "Uma biblioteca para manipulação de arquivos" },
      { id: 3, value: "Uma ferramenta para testar código JavaScript" },
      { id: 4, value: "Um servidor HTTP simples" },
    ],
    technology: "express",
    explanation:
      "O Express é um framework minimalista para construção de aplicações web e APIs no Node.js.",
    correctAnswerId: 1, // A resposta correta é Um framework para construir aplicações web e APIs
  },
  {
    id: 132,
    question: "Qual comando é utilizado para instalar o Express?",
    type: "option",
    options: [
      { id: 1, value: "npm install express" },
      { id: 2, value: "npm install express-framework" },
      { id: 3, value: "npm install --save express" },
      { id: 4, value: "npm add express" },
    ],
    technology: "express",
    explanation:
      "Você instala o Express usando o comando 'npm install express'.",
    correctAnswerId: 1, // A resposta correta é npm install express
  },
  {
    id: 133,
    question: "Como você cria uma aplicação Express simples?",
    type: "option",
    options: [
      { id: 1, value: "Usando 'const app = express();'" },
      { id: 2, value: "Usando 'const app = require('express');'" },
      { id: 3, value: "Usando 'express.createApp()'" },
      { id: 4, value: "Usando 'app.create()'" },
    ],
    technology: "express",
    explanation:
      "A forma correta de criar uma aplicação Express simples é utilizando 'const app = express();'.",
    correctAnswerId: 1, // A resposta correta é Usando 'const app = express();'
  },
  {
    id: 134,
    question:
      "Qual método do Express é usado para responder a requisições HTTP GET?",
    type: "option",
    options: [
      { id: 1, value: "app.get()" },
      { id: 2, value: "app.listen()" },
      { id: 3, value: "app.post()" },
      { id: 4, value: "app.request()" },
    ],
    technology: "express",
    explanation:
      "O método 'app.get()' é utilizado para lidar com requisições HTTP GET no Express.",
    correctAnswerId: 1, // A resposta correta é app.get()
  },
  {
    id: 135,
    question: "Qual é a função do 'next' no Express?",
    type: "option",
    options: [
      { id: 1, value: "Passar o controle para o próximo middleware ou rota" },
      { id: 2, value: "Retornar uma resposta para o cliente" },
      { id: 3, value: "Encerrar a requisição e resposta" },
      { id: 4, value: "Criar uma nova rota" },
    ],
    technology: "express",
    explanation:
      "'next' é uma função que passa o controle para o próximo middleware ou rota no Express.",
    correctAnswerId: 1, // A resposta correta é Passar o controle para o próximo middleware ou rota
  },
  {
    id: 136,
    question: "Como você configura uma rota POST no Express?",
    type: "option",
    options: [
      { id: 1, value: "app.post('/rota', (req, res) => { })" },
      { id: 2, value: "app.get('/rota', (req, res) => { })" },
      { id: 3, value: "app.route('/rota').get((req, res) => { })" },
      { id: 4, value: "app.post('/rota', res.send())" },
    ],
    technology: "express",
    explanation:
      "A forma de configurar uma rota POST no Express é usando 'app.post('/rota', (req, res) => { })'.",
    correctAnswerId: 1, // A resposta correta é app.post('/rota', (req, res) => { })
  },
  {
    id: 137,
    question: "O que é um middleware no Express?",
    type: "option",
    options: [
      { id: 1, value: "Uma função que recebe e processa requisições HTTP" },
      { id: 2, value: "Uma rota definida na aplicação" },
      { id: 3, value: "Uma ferramenta para compilar JavaScript" },
      { id: 4, value: "Uma configuração para o servidor HTTP" },
    ],
    technology: "express",
    explanation:
      "Um middleware no Express é uma função que recebe e processa requisições HTTP antes de enviar uma resposta.",
    correctAnswerId: 1, // A resposta correta é Uma função que recebe e processa requisições HTTP
  },
  {
    id: 138,
    question: "Como você acessa os parâmetros da URL em uma rota Express?",
    type: "option",
    options: [
      { id: 1, value: "Acessando 'req.params'" },
      { id: 2, value: "Acessando 'req.query'" },
      { id: 3, value: "Acessando 'req.body'" },
      { id: 4, value: "Acessando 'req.url'" },
    ],
    technology: "express",
    explanation:
      "Os parâmetros da URL podem ser acessados por meio de 'req.params' no Express.",
    correctAnswerId: 1, // A resposta correta é Acessando 'req.params'
  },
  {
    id: 139,
    question: "Como você acessa o corpo de uma requisição no Express?",
    type: "option",
    options: [
      { id: 1, value: "Acessando 'req.body'" },
      { id: 2, value: "Acessando 'req.params'" },
      { id: 3, value: "Acessando 'req.url'" },
      { id: 4, value: "Acessando 'req.query'" },
    ],
    technology: "express",
    explanation:
      "O corpo de uma requisição pode ser acessado por meio de 'req.body'.",
    correctAnswerId: 1, // A resposta correta é Acessando 'req.body'
  },
  {
    id: 140,
    question:
      "Como você configura o Express para permitir o envio de dados no formato JSON?",
    type: "option",
    options: [
      { id: 1, value: "Usando 'app.use(express.json())'" },
      { id: 2, value: "Usando 'app.use(express.urlencoded())'" },
      { id: 3, value: "Usando 'app.json()'" },
      { id: 4, value: "Usando 'app.use(json())'" },
    ],
    technology: "express",
    explanation:
      "Para permitir o envio de dados no formato JSON, você deve usar 'app.use(express.json())'.",
    correctAnswerId: 1, // A resposta correta é Usando 'app.use(express.json())'
  },
  {
    id: 141,
    question: "Como você define o tipo de conteúdo da resposta no Express?",
    type: "option",
    options: [
      { id: 1, value: "Usando 'res.setHeader()'" },
      { id: 2, value: "Usando 'res.send()'" },
      { id: 3, value: "Usando 'res.contentType()'" },
      { id: 4, value: "Usando 'res.type()'" },
    ],
    technology: "express",
    explanation:
      "Você define o tipo de conteúdo da resposta no Express usando 'res.setHeader()' ou 'res.type()'.",
    correctAnswerId: 1, // A resposta correta é Usando 'res.setHeader()'
  },
  {
    id: 142,
    question: "O que faz o método 'app.listen()' no Express?",
    type: "option",
    options: [
      {
        id: 1,
        value:
          "Inicia o servidor e escuta por requisições em uma porta especificada",
      },
      { id: 2, value: "Define as rotas da aplicação" },
      { id: 3, value: "Cria um banco de dados para a aplicação" },
      { id: 4, value: "Inicia o middleware" },
    ],
    technology: "express",
    explanation:
      "'app.listen()' inicia o servidor Express e começa a escutar as requisições na porta especificada.",
    correctAnswerId: 1, // A resposta correta é Inicia o servidor e escuta por requisições em uma porta especificada
  },
  {
    id: 143,
    question: "Como você envia uma resposta em formato JSON no Express?",
    type: "option",
    options: [
      { id: 1, value: "Usando 'res.json()'" },
      { id: 2, value: "Usando 'res.send()'" },
      { id: 3, value: "Usando 'res.sendFile()'" },
      { id: 4, value: "Usando 'res.render()'" },
    ],
    technology: "express",
    explanation:
      "Para enviar uma resposta em formato JSON no Express, você usa 'res.json()'.",
    correctAnswerId: 1, // A resposta correta é Usando 'res.json()'
  },
  {
    id: 144,
    question: "Como você trata erros em rotas no Express?",
    type: "option",
    options: [
      { id: 1, value: "Usando um middleware de tratamento de erros" },
      { id: 2, value: "Usando 'throw' dentro das rotas" },
      { id: 3, value: "Usando 'res.error()'" },
      { id: 4, value: "Usando 'next()' com um erro como argumento" },
    ],
    technology: "express",
    explanation:
      "Você pode tratar erros no Express usando um middleware de tratamento de erros ou usando 'next()' com um erro como argumento.",
    correctAnswerId: 1, // A resposta correta é Usando um middleware de tratamento de erros
  },
  {
    id: 145,
    question: "Qual é o propósito da função 'app.use()' no Express?",
    type: "option",
    options: [
      { id: 1, value: "Registrar middlewares para todas as rotas" },
      { id: 2, value: "Definir as rotas específicas da aplicação" },
      { id: 3, value: "Iniciar o servidor Express" },
      { id: 4, value: "Encerra a execução de uma rota" },
    ],
    technology: "express",
    explanation:
      "A função 'app.use()' é usada para registrar middlewares que serão executados para todas as rotas da aplicação.",
    correctAnswerId: 1, // A resposta correta é Registrar middlewares para todas as rotas
  },
  {
    id: 146,
    question: "O que é o Git?",
    type: "option",
    options: [
      { id: 1, value: "Um sistema de controle de versão distribuído" },
      { id: 2, value: "Uma ferramenta de construção de software" },
      { id: 3, value: "Um framework para desenvolvimento web" },
      { id: 4, value: "Uma linguagem de programação" },
    ],
    technology: "git",
    explanation:
      "O Git é um sistema de controle de versão distribuído usado para gerenciar o histórico de alterações em projetos de software.",
    correctAnswerId: 1, // A resposta correta é Um sistema de controle de versão distribuído
  },
  {
    id: 147,
    question: "Como você inicializa um repositório Git em um diretório?",
    type: "option",
    options: [
      { id: 1, value: "git init" },
      { id: 2, value: "git start" },
      { id: 3, value: "git new" },
      { id: 4, value: "git create" },
    ],
    technology: "git",
    explanation:
      "O comando 'git init' é usado para inicializar um repositório Git em um diretório.",
    correctAnswerId: 1, // A resposta correta é git init
  },
  {
    id: 148,
    question:
      "Qual comando é usado para adicionar arquivos ao staging area no Git?",
    type: "option",
    options: [
      { id: 1, value: "git add" },
      { id: 2, value: "git commit" },
      { id: 3, value: "git push" },
      { id: 4, value: "git stage" },
    ],
    technology: "git",
    explanation:
      "O comando 'git add' é usado para adicionar arquivos ao staging area no Git.",
    correctAnswerId: 1, // A resposta correta é git add
  },
  {
    id: 149,
    question: "Qual comando você usa para realizar um commit no Git?",
    type: "option",
    options: [
      { id: 1, value: "git commit" },
      { id: 2, value: "git push" },
      { id: 3, value: "git add" },
      { id: 4, value: "git log" },
    ],
    technology: "git",
    explanation:
      "O comando 'git commit' é utilizado para registrar as alterações feitas no repositório.",
    correctAnswerId: 1, // A resposta correta é git commit
  },
  {
    id: 150,
    question:
      "Qual comando é usado para enviar as alterações locais para o repositório remoto no Git?",
    type: "option",
    options: [
      { id: 1, value: "git push" },
      { id: 2, value: "git pull" },
      { id: 3, value: "git fetch" },
      { id: 4, value: "git clone" },
    ],
    technology: "git",
    explanation:
      "O comando 'git push' é utilizado para enviar as alterações locais para o repositório remoto.",
    correctAnswerId: 1, // A resposta correta é git push
  },
  {
    id: 151,
    question: "O que faz o comando 'git clone'?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Cria uma cópia de um repositório remoto em sua máquina local",
      },
      { id: 2, value: "Cria um novo repositório local" },
      { id: 3, value: "Sincroniza os commits locais com o remoto" },
      { id: 4, value: "Exclui um repositório local" },
    ],
    technology: "git",
    explanation:
      "'git clone' cria uma cópia exata de um repositório remoto em sua máquina local.",
    correctAnswerId: 1, // A resposta correta é Cria uma cópia de um repositório remoto em sua máquina local
  },
  {
    id: 152,
    question: "O que faz o comando 'git status'?",
    type: "option",
    options: [
      {
        id: 1,
        value:
          "Exibe o status atual do repositório, incluindo arquivos modificados e não rastreados",
      },
      { id: 2, value: "Exibe o histórico de commits" },
      { id: 3, value: "Mostra as alterações de arquivos na área de stage" },
      { id: 4, value: "Mostra a lista de branches existentes" },
    ],
    technology: "git",
    explanation:
      "O comando 'git status' exibe o status atual do repositório, mostrando arquivos modificados e não rastreados.",
    correctAnswerId: 1, // A resposta correta é Exibe o status atual do repositório, incluindo arquivos modificados e não rastreados
  },
  {
    id: 153,
    question:
      "Qual comando é utilizado para mudar para uma branch diferente no Git?",
    type: "option",
    options: [
      { id: 1, value: "git checkout" },
      { id: 2, value: "git branch" },
      { id: 3, value: "git switch" },
      { id: 4, value: "git update" },
    ],
    technology: "git",
    explanation:
      "'git checkout' ou 'git switch' são usados para mudar de uma branch no Git.",
    correctAnswerId: 1, // A resposta correta é git checkout
  },
  {
    id: 154,
    question:
      "Qual comando é usado para visualizar o histórico de commits no Git?",
    type: "option",
    options: [
      { id: 1, value: "git log" },
      { id: 2, value: "git history" },
      { id: 3, value: "git status" },
      { id: 4, value: "git diff" },
    ],
    technology: "git",
    explanation:
      "'git log' é o comando usado para visualizar o histórico de commits de um repositório.",
    correctAnswerId: 1, // A resposta correta é git log
  },
  {
    id: 155,
    question: "Como você cria uma nova branch no Git?",
    type: "option",
    options: [
      { id: 1, value: "git branch <nome da branch>" },
      { id: 2, value: "git create branch <nome da branch>" },
      { id: 3, value: "git new branch <nome da branch>" },
      { id: 4, value: "git make branch <nome da branch>" },
    ],
    technology: "git",
    explanation:
      "Você cria uma nova branch no Git utilizando 'git branch <nome da branch>'.",
    correctAnswerId: 1, // A resposta correta é git branch <nome da branch>
  },
  {
    id: 156,
    question: "O que faz o comando 'git merge'?",
    type: "option",
    options: [
      { id: 1, value: "Une duas branches no Git" },
      { id: 2, value: "Cria uma nova branch" },
      { id: 3, value: "Apaga uma branch" },
      { id: 4, value: "Muda de branch" },
    ],
    technology: "git",
    explanation:
      "'git merge' é utilizado para unir duas branches no Git, combinando suas mudanças.",
    correctAnswerId: 1, // A resposta correta é Une duas branches no Git
  },
  {
    id: 157,
    question: "Como você exclui uma branch no Git?",
    type: "option",
    options: [
      { id: 1, value: "git branch -d <nome da branch>" },
      { id: 2, value: "git delete branch <nome da branch>" },
      { id: 3, value: "git remove branch <nome da branch>" },
      { id: 4, value: "git branch remove <nome da branch>" },
    ],
    technology: "git",
    explanation:
      "Para excluir uma branch no Git, você utiliza 'git branch -d <nome da branch>'.",
    correctAnswerId: 1, // A resposta correta é git branch -d <nome da branch>
  },
  {
    id: 158,
    question:
      "Qual comando é utilizado para verificar a diferença entre arquivos modificados e o último commit no Git?",
    type: "option",
    options: [
      { id: 1, value: "git diff" },
      { id: 2, value: "git status" },
      { id: 3, value: "git log" },
      { id: 4, value: "git show" },
    ],
    technology: "git",
    explanation:
      "'git diff' é utilizado para mostrar as diferenças entre os arquivos modificados e o último commit no Git.",
    correctAnswerId: 1, // A resposta correta é git diff
  },
  {
    id: 159,
    question: "O que faz o comando 'git pull'?",
    type: "option",
    options: [
      {
        id: 1,
        value: "Baixa as alterações do repositório remoto para o local",
      },
      { id: 2, value: "Envia as alterações locais para o repositório remoto" },
      { id: 3, value: "Exclui um repositório remoto" },
      { id: 4, value: "Cria uma nova branch no repositório remoto" },
    ],
    technology: "git",
    explanation:
      "'git pull' é usado para baixar as alterações feitas no repositório remoto para o repositório local.",
    correctAnswerId: 1, // A resposta correta é Baixa as alterações do repositório remoto para o local
  },
  {
    id: 160,
    question:
      "Qual comando você usa para verificar as configurações de um repositório Git?",
    type: "option",
    options: [
      { id: 1, value: "git config" },
      { id: 2, value: "git settings" },
      { id: 3, value: "git options" },
      { id: 4, value: "git status" },
    ],
    technology: "git",
    explanation:
      "'git config' é o comando usado para verificar as configurações de um repositório Git.",
    correctAnswerId: 1, // A resposta correta é git config
  },
  {
    id: 161,
    question: "Como você reverte um commit no Git?",
    type: "option",
    options: [
      { id: 1, value: "git revert <id do commit>" },
      { id: 2, value: "git undo <id do commit>" },
      { id: 3, value: "git reset <id do commit>" },
      { id: 4, value: "git restore <id do commit>" },
    ],
    technology: "git",
    explanation:
      "'git revert' é utilizado para reverter um commit específico no Git.",
    correctAnswerId: 1, // A resposta correta é git revert <id do commit>
  },
];
