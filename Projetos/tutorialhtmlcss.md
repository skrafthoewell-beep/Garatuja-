# <span style="color: yellow;">Web Design com Kraft the Biggest</span>

Você vai aprender durante o curso:

HTML → para estruturar a página
CSS → para definir o visual
JavaScript → de forma básica, para adicionar interatividade

O objetivo é que você consiga montar e estilizar páginas na internet, entendendo como elas funcionam.

Mesmo sendo uma matéria introdutória, ela é muito importante, porque ensina a base do desenvolvimento web.

Não é necessário ter conhecimento prévio — o conteúdo foi pensado para iniciantes.

---

##  <span style="color: red;">Antes de tudo</span>

De preferência, tenha configurado no seu computador um deitor de código e um navegador web atualizado. Optaremos pelo Studio Core como editor de código e o Google Chrome como navegador.

---

## <span style="color: pink;">HTML - HyperText Markup Language (Linguagem de Marcação de Hipertexto)</span>
  

O HTML não é uma linguagem de programação, e sim uma linguagem usada para **organizar o conteúdo de uma página na internet**.

Ele define o que cada elemento é — como títulos, textos e links — para que tudo seja exibido corretamente e também possa ser entendido por qualquer pessoa, incluindo tecnologias de acessibilidade.


<h3> <span style="color: blue;"> Ou seja...</span> </h3>

Html não é linguagem de programação;

Html define textos, links e títulos;

Html garante que tudo seja exibido corretamente;

Html funciona com <span style="color: red;">tags.</span>

<span style="color: red;">Por exemplo: ```<h1>``` → título  ```<p>``` → parágrafo  ```<a>``` → link
Também é possível adicionar atributos nessas tags, que dão mais informações ou controlam o comportamento dos elementos, como class, id e src.</span>

---



<h3> <span style="color: lightgreen;">Acompanha o raciocínio:</span> </h3>

 Quando você está no Word, Docs, Notion ou até mesmo o bloco de notas do su celular, para marcar ou mudar algo visualmente falando, você vai colocar esse texto em negrito, itálico, sublinhado, etc... Isso, meu pequeno gafanhoto é o que fazemos com as <span style="color: red;">tags (etiquetas)</span> no html, basicamente essas tags indicam a marcação desejada, e a sintaxe do html exige que essas <span style="color: red;">tags</span> tenham abertura e fechamento (início e fim) , onde a etiqueta de abertura é escrita entre colchetes angulares `< >` e a etiqueta de fechamento é escrita da mesma forma, mas com uma barra `/` antes do nome da tag, ou seja, depois do primeiro colchete. Por exemplo, para criar um parágrafo em HTML, você usaria a tag `<p>` para abrir o parágrafo e `</p>` para fechá-lo. O texto/conteúdo do parágrafo seria colocado entre essas duas tags.

<h4> <span style="color: lightgreen;"> Mais exemplos:</span>

1. Negrito: ```<strong>teu texto gigantossauricamente bom</strong>```. O que vai aparecer assim: **teu texto gigantossauricamente bom**.
2. Itálico: ```<em>teu texto de novo</em>``` O que vai aparecer: <em>teu texto denovo</em>
3. Colocar cor:  ``<span style="color: purple;">teu texto mais uma vez</span>``. O que vai aparecer:  <span style="color: purple;">teu texto denovo</span>



> **⚠️ Nota Importantíssima:**
>
>### O que VOCÊ **vai** encontrar:

---


Na internet, você vai encontrar diferentes formas de deixar um texto em **negrito** ou *itálico*. Por exemplo, as tags `<b>` e `<i>` fazem isso apenas visualmente.

Porém, as tags `<strong>` e `<em>` são mais recomendadas. Isso porque elas não apenas mudam a aparência, mas também **indicam o significado do texto** (como dar mais importância ou ênfase).

👉 Em resumo:

* `<b>` e `<i>` → só mudam o visual
* `<strong>` e `<em>` → mudam o visual **e o significado**

Por isso, é melhor usar `<strong>` e `<em>`, pois ajudam na **acessibilidade** e facilitam o entendimento do conteúdo, inclusive para leitores de tela.

>
> `<strong>` e `<em>` fazem sentido tanto para leitores sem deficiência quanto para leitores com deficiência, pois indicam a importância do texto, enquanto `<b>` e `<i>` são puramente de formatação visual e podem não ser interpretados corretamente por leitores de tela ou outros dispositivos assistivos.


---

Isso que você viu é o **jeito básico de escrever HTML**. Com ele, já dá para começar a criar páginas, mas existem muitas outras formas e recursos que você vai aprender aos poucos.

Uma boa forma de começar é **pensar antes de sair escrevendo código**:

- Imagine a página que você quer criar
- Desenhe ela no papel (como se fosse um rascunho)
- Identifique o que tem nela:

* título
* texto
* imagem
* links

Depois disso, pense:
**“Qual é a tag certa para cada coisa?”**

Assim você vai perdendo o medo de errar e vai ficar mais acostumado (a) quando for escrever o seu código pra valer.

---

###  <span style="color: orange;">Estrutura básica de um documento html</span>
 
Outro ponto importante a ser abordado é a estrutura básica de um documento HTML. Todo documento HTML deve começar com a declaração do tipo de documento `<!DOCTYPE html>`, que informa ao navegador que o documento é um arquivo HTML5. Em seguida, o documento é estruturado em duas partes principais: o `<head>` e o `<body>`.

O `<head>` é a seção do documento onde são incluídas informações sobre a página, como o título, links para arquivos CSS, scripts JavaScript, meta tags (metainformações), entre outros. O conteúdo do `<head>` não é exibido diretamente na página, mas é essencial para o funcionamento e a aparência da página web.

O `<body>` é a seção do documento onde o conteúdo visível da página é colocado. É aqui que você adiciona os elementos HTML que compõem a estrutura e o conteúdo da página, como títulos, parágrafos, imagens, links etc. O conteúdo do `<body>` é o que os usuários veem quando acessam a página web.

A estrutura básica de um documento HTML pode ser representada da seguinte forma:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
   <meta charset="UTF-8">
   <title>Título da Página</title>
   <!-- Links para arquivos CSS e scripts JavaScript podem ser adicionados aqui -->
</head>
<body>
   <!-- Conteúdo visível da página é adicionado aqui -->
</body>
</html>
```

> **⚠️ Nota:**
>
> Todo o código HTML deve estar dentro da tag `<html>`, que é a raiz do documento. O atributo `lang="pt-BR"` indica o idioma principal da página, o que ajuda os mecanismos de acessibilidade a identificarem o idioma. O elemento `<meta charset="UTF-8">` define a codificação de caracteres do documento como UTF-8, garantindo que caracteres acentuados e outros símbolos sejam exibidos corretamente. O elemento `<title>` define o título da página, que é exibido na aba do navegador e nos resultados de busca.

---

### <span style="color: purple;">Atributos HTML</span>


---

Os atributos em HTML são como **extras** que você adiciona aos elementos da página para dizer como vão funcionar ou se comportar. Eles ficam dentro da parte inicial da tag e são escritos no formato **nome="valor"**. Por exemplo, quando você cria um link usando a tag `<a>`, o atributo `href` diz qual site você vai depois de clicar. Já em uma imagem (`<img>`), o atributo `src` serve para indicar a imagem que vai aparecer. Em resumo, os atributos ajudam a **controlar e personalizar** os elementos da página, tornando o site mais útil e interativo.

Agora, imagine que temos que criar um link para o site do Google em uma página qualquer. Para isso, podemos usar a tag `<a>` (âncora) e o atributo `href` para especificar o URL do Google. Só então teremos:

```html
<a href="https://www.google.com">Visite o Google!</a>
```

O que resultaria em um link que tem como texto "Visite o Google!". Quando o usuário clicar nesse link, ele será redirecionado para a página do Google. O atributo `href` é muito importante para criar links em HTML, e seu valor deve ser um URL válido para garantir que o link funcione corretamente.

---

### <span style="color: red;"> Extra top: Lista de todas as tags HTML</span>

Nestes links, você pode encontrar uma lista completa de todas as tags HTML, juntamente com suas descrições e exemplos de uso: [MDN Web Docs - Elementos HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element) ou [W3Schools - HTML Tags](https://www.w3schools.com/TAGS/default.asp).

---

## <span style="color: orange;"> CSS-Cascading Style Sheets (Folhas de Estilo em Cascata)</span> 

O CSS é uma linguagem de estilo usada para controlar a aparência e o layout de uma página web.
<h3> <span style="color: pink;"> Tá, mas o que o CSS faz?</span> </h3>

 Ele permite que você defina regras de estilo para os elementos HTML, como cores, fontes, margens, espaçamento, entre outros. 
 
 *‼️⚠️ IMPORTANTE*


O CSS fica separado do HTML, o que permite manter **o conteúdo (HTML)** separado da **aparência (CSS)**. Isso deixa o código mais organizado e fácil de mexer depois.

O CSS funciona com **seletores e regras**:

* os seletores escolhem quais elementos serão estilizados
* as regras definem como eles vão aparecer (cor, tamanho, etc.)

Veja o exemplo abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
   <meta charset="UTF-8">
   <title>Exemplo de CSS</title>
   <link rel="stylesheet" href="styles.css">
</head>
<body>
   <h1>Olá, Mundo!</h1>
   <p>Este é um exemplo de CSS.</p>
</body>
</html>
```

Neste exemplo, temos um HTML básico com um título e um parágrafo.

O CSS está em um arquivo separado (`styles.css`) e é conectado ao HTML usando a tag `<link>` dentro do `<head>`.

O conteúdo do arquivo `styles.css` pode ser assim:


```css
/* styles.css */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333333;
  text-align: center;
}

p {
  color: #666666;
  font-size: 18px;
  margin: 20px;
}
```

> **⚠️ Nota:**
>
>No exemplo acima, o CSS está ligado ao HTML pelo arquivo `styles.css`, usando a tag `<link>` dentro do `<head>`.Esse CSS define o estilo do `<body>`, do título `<h1>` e do parágrafo `<p>`, controlando como a página aparece. *O CSS é importante porque permite deixar o site mais bonito, organizado e agradável de usar.*


O resultado do exemplo acima seria uma página web com um fundo cinza claro, um título centralizado em cor escura e um parágrafo com uma cor mais clara, tamanho de fonte maior e margens ao redor do texto. O CSS é uma ferramenta bem eficiente de deixar uma página estéticamente atraente


Se você não usar CSS, a página vai aparecer com o visual do seu navegador, o que convenhamos, não é exatamente a melhor forma de apresentar sua página para visitantes.

Esse estilo automático é chamado de **“user agent stylesheet”**, que nada mais é do que o jeito básico que o navegador usa para mostrar textos, títulos e outros elementos.

👉 Por exemplo:

* Títulos já aparecem maiores
* Links aparecem azuis e sublinhados
* Textos têm uma fonte padrão

O CSS serve para **mudar esse visual padrão** e personalizar a página do seu jeito.

Com CSS, você pode:

* mudar cores
* escolher fontes
* ajustar espaçamentos
* organizar o layout

👉 Em resumo:
Sem CSS → página simples, com aparência básica
Com CSS → página personalizada e mais bonita

Por isso, o CSS é importante para deixar o site mais agradável e profissional para quem usa.

Sem o CSS que escrevemos, teríamos o seguinte resultado:


---

### Sintaxe do CSS

---

A sintaxe do CSS funciona com **regras de estilo**.

Cada regra tem duas partes:

* **seletor** → escolhe qual elemento do HTML será afetado
* **declarações** → definem como esse elemento vai aparecer (cor, tamanho, etc.)

A estrutura básica do CSS é assim:


```css
seletor {
  propriedade: valor;
  propriedade: valor;
  /* ... */
}
```

> **⚠️ Nota:**
>
>O seletor pode ser o nome de uma tag HTML, uma classe, um ID ou a combinação deles.As **propriedades** definem o visual, como `color`, `font-size` e `background-color`.Os **valores** indicam como esse estilo será aplicado, como `red`, `16px` ou `#f0f0f0`.Cada declaração deve terminar com `;`, e o bloco de código é fechado com `}`.


---

### Seletores CSS

---

Os seletores CSS servem para escolher quais elementos do HTML vão receber estilo.

Eles funcionam com base na estrutura da página (a organização dos elementos), permitindo aplicar estilos a elementos específicos ou a grupos deles, usando coisas como tipo, classe, ID ou atributos.

Considere o seguinte código HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
   <meta charset="UTF-8">
   <title>Exemplo de Seletores CSS</title>
   <link rel="stylesheet" href="styles.css">
</head>
<body>
   <h1 class="titulo">Título Principal</h1>
   <p id="paragrafo1">Este é o primeiro parágrafo.</p>
   <p id="paragrafo2">Este é o segundo parágrafo.</p>
   <a href="#" class="link">Este é um link</a>
</body>
</html>
```

Para aplicar estilos a esses elementos usando CSS, podemos usar diferentes tipos de seletores. Por exemplo:

1. Seletor de tipo: para selecionar todos os elementos de um determinado tipo, como `<h1>`, `<p>`, `<a>` etc. Exemplo: `h1 { color: blue; }` aplicaria a cor azul a todos os elementos `<h1>` na página.
2. Seletor de classe: para selecionar elementos com uma classe específica. Exemplo: `.titulo { font-size: 24px; }` aplicaria um tamanho de fonte de 24 pixels a todos os elementos com a classe "titulo".
3. Seletor de ID: para selecionar um elemento com um ID específico. Exemplo: `#paragrafo1 { color: red; }` aplicaria a cor vermelha apenas ao elemento com o ID "paragrafo1".
4. Seletor de atributo: para selecionar elementos com um atributo específico ou um valor de atributo específico. Exemplo: `a[href="#"] { text-decoration: none; }` removeria o sublinhado de todos os links que têm um atributo `href` com o valor "#".
5. Pseudo-classes: para selecionar elementos com base em seu estado ou posição na hierarquia do documento. Exemplo: `p:first-child { font-weight: bold; }` aplicaria negrito ao primeiro parágrafo dentro de seu elemento pai.

A organização dos elementos no HTML (hierarquia) é muito importante para entender como o CSS funciona, porque os estilos seguem essa estrutura.

Por exemplo, imagine um parágrafo dentro de uma seção, que está dentro da parte principal da página. No HTML, isso seria assim:

```html
<main>
  <section>
   <p>Este é um parágrafo dentro de uma seção...</p>
  </section>
</main>
```

Para estilizar os parágrafos dessa estrutura, você pode usar um seletor assim:

```css
main section p {
  color: green;
}
```

Isso aplica a cor verde aos parágrafos que estão dentro de uma `<section>`, que está dentro do `<main>`.

Isso mostra como o CSS usa a estrutura do HTML para aplicar estilos de forma mais específica.


> **⚠️ Nota:**
>
> Os espaços entre os seletores indicam uma relação de “dentro de”.Ou seja, `main section p` seleciona todos os `<p>` que estão dentro de `<section>`, que por sua vez está dentro de `<main>`.Isso permite aplicar estilos de forma mais específica, afetando apenas os elementos que estão nessa estrutura.


Se, no HTML que usamos de exemplo, tivéssemos um parágrafo fora da seção, como:

```html
<main>
  <section>
   <p>Este é um parágrafo dentro de uma seção...</p>
  </section>
  <p>Este é um parágrafo fora da seção...</p>
</main>
```
---
<h3><span style="color: green;">Aqui uma versão para os betinhas</span></h3>
---
O seletor `main section p` aplica a cor verde apenas ao parágrafo que está dentro da `<section>`.
O parágrafo que estiver fora da `<section>` não será afetado.
Isso mostra como o CSS usa a estrutura do HTML para aplicar estilos apenas onde você quiser.
Resultando em algo como:

![Seletores CSS](docs/image-css-selectors.png)
---

### Tipos de Seletores CSS

---
Existem vários tipos de seletores CSS que permitem selecionar elementos HTML de diferentes maneiras. Abaixo está uma tabela com alguns dos tipos de seletores mais comuns. Esta tabela tem o intuito de servir como um guia rápido para entender os diferentes tipos de seletores CSS e como eles funcionam. No entanto, existem muitos outros tipos de seletores CSS; abordaremos esses outros tipos em conteúdos futuros. Por enquanto, foque em entender os tipos de seletores mais comuns listados abaixo, pois eles são os mais utilizados e fundamentais para o aprendizado do CSS.

| Tipo de Seletor               | Exemplo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Descrição |
|------------------------------ | -------------------------------- | --------- |
| Seletor de Tipo               | `nome_elemento { }`              | Seleciona todos os elementos de uma determinada tag, ou seja de um determinado tipo para executar uma ação com essas tags. Exemplo: `p { color: blue; }` seleciona todos os parágrafos e aplica a cor azul. |
| Seletor de Classe             | `.nome_classe { }`               | Seleciona elementos com uma classe específica. Exemplo: `.titulo { font-size: 24px; }` seleciona todos os elementos com a classe "titulo" e aplica um tamanho de fonte de 24 pixels. |
| Seletor de ID                 | `#nome_id { }`                   | Seleciona um elemento com um ID específico. Exemplo: `#paragrafo1 { color: red; }` seleciona o elemento com o ID "paragrafo1" e aplica a cor vermelha. |
| Seletor de Atributo           | `elemento[atributo="valor"] { }` | Seleciona elementos com um atributo específico ou um valor de atributo específico. Exemplo: `a[href="#"] { text-decoration: none; }` seleciona todos os links que têm um atributo `href` com o valor "#" e remove o sublinhado. |
| Pseudo-classes                | `elemento:pseudo-classe { }`     | Seleciona elementos com base em seu estado ou posição na hierarquia do documento. Exemplo: `p:first-child { font-weight: bold; }` seleciona o primeiro parágrafo dentro de seu elemento pai e aplica negrito. |

Seletores de descendentes, filhos e irmãos:

| Tipo de Seletor               | Exemplo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Descrição |
|------------------------------ | -------------------------------- | --------- |
| Seletor de Descendente        | `elemento1 elemento2 { }`        | Seleciona elementos que são descendentes de um elemento específico. Exemplo: `main section p { color: green; }` seleciona todos os parágrafos que estão dentro de uma seção, que por sua vez está dentro do elemento principal `<main>`, e aplica a cor verde. |
| Seletor de Filho              | `elemento1 > elemento2 { }`      | Seleciona elementos que são filhos diretos de um elemento específico. Exemplo: `main > section { background-color: lightgray; }` seleciona todas as seções que são filhos diretos do elemento principal `<main>` e aplica um fundo cinza claro. |
| Seletor de Irmão Adjacente    | `elemento1 + elemento2 { }`      | Seleciona um elemento que é imediatamente precedido por outro elemento específico. Exemplo: `h1 + p { margin-top: 0; }` seleciona o parágrafo que vem imediatamente após um título `<h1>` e remove a margem superior. |
| Seletor de Irmão Generalizado | `elemento1 ~ elemento2 { }`      | Seleciona elementos que são irmãos de um elemento específico, independentemente de sua posição. Exemplo: `h1 ~ p { color: gray; }` seleciona todos os parágrafos que são irmãos de um título `<h1>` e aplica a cor cinza. |

## Recaptulando o conteúdo
Fáceis Analogias:

HTML = estrutura da casa (paredes, portas, janelas)
CSS = decoração (cores, móveis, layout)
JavaScript = comportamento (luz que acende, porta que abre)

Resumo — HTML

Define a estrutura da página
```CSS
p {
  color: red;
}
```

Usa tags como `<p>`, `<h1>`, `<a>` e é focado em significado (semântica), não aparência


## Praticando o uso de HTML e CSS

... [isso é tema para a próxima aula] ... see you Jedi in trainment!