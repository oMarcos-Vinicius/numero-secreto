# numero-secreto
Aprendendo consumo de API de reconhecimento de voz | Alura.com

<h1>Módulo 01: Aplicando estilos no JavaScript</h1>

<h2>01. Apresentação</h2>
<p>[00:00] Guilherme: Olá, meu nome é Guilherme Lima, e eu serei o seu instrutor neste curso de reconhecimento de voz com JavaScript. E para isso, para mostrar o que vamos construir nesse jogo, eu tenho a presença da Moni. Oi, Moni, tudo bem?</p>

<p>[00:13] Moni: Olá, gente, olá, estudante. Olá, Gui. Hoje que vamos tirar uma luta de quem acerta o número secreto.</p>

<p>[00:19] Guilherme: Isso aí. E eu quero mostrar o projeto que vamos desenvolver na prática, funcionando. Um jogo, a Moni contra a minha pessoa.</p>

<p>[00:30] Guilherme: Então, vamos lá, a sacada é o seguinte, eu vou atualizar minha página, e o computador vai escolher um número secreto, e eu vou falar, vou dar um chute, um palpite do que o computador escolheu, e se eu acertar, que provavelmente não vai acontecer, porque é um número de 1 a 1000, inicialmente é muito difícil, se eu acertar, ele vai dar uma mensagem que eu acertei, se eu errar, ele vai dar uma dica, só que eu vou passar a minha vez para a Moni. Vou mostrar para vocês agora. Vamos lá, Moni, valendo, a partir de agora só vamos falar a sequência dos números. Vamos lá.</p>

<p>
    [01:03] Guilherme: 500.
    
    [01:06] Moni: 600.
    
    [01:10] Guilherme: 800.
    
    [01:13] Moni: 700.
    
    [01:16] Guilherme: 750.
    
    [01:19] Moni: 725.
    
    [01:21] Guilherme: 740.
    
    [01:24] Moni: 745.
</p>

<p>[01:29] Guilherme: Eu sempre perco nesse jogo, é inacreditável. Todas as vezes que eu joguei, eu perdi. E essa é a sacada do jogo, vamos fazer esse reconhecimento de voz, vai criar várias validações diferentes. Por exemplo, se eu falo o meu nome, vou atualizar, e falo: “Guilherme”.</p>

<p>[01:45] Guilherme: Ele reconhece o “Guilherme” e vai começar a escrever tudo que eu estou falando. Mas essa não é a ideia. Vamos ver como vamos criar esse projeto, e vamos publicar esse projeto também, para que o mundo inteiro possa jogar. Vamos começar criando o script da nossa estrutura com HTML, vai criar os estilos, e eu vou mostrar formas para você estilizar esse projeto, para ficar com a sua cara, utilizando fontes diferentes, tamanho de textos, cores, e vamos focar em modularizar o nosso código com o JavaScript.</p>

<p>[02:17] Guilherme: Então, vamos criar um código apenas para fazer o sorteio dos números, um código para reconhecer a voz e fazer as validações, para saber, por exemplo, se eu falo um número maior do que o permitido, para ele mostrar e exibir umas mensagens também.</p>

<p>[02:30] Guilherme: Então, essa é a ideia do nosso jogo, Moni, muito obrigado pela sua presença, e você venceu de novo, Moni. Testamos algumas vezes antes, e a Moni venceu todas também, a Moni é a campeã do jogo de sortear número secreto com reconhecimento de voz com JavaScript.</p>

<p>[02:43] Guilherme: Moni, muito obrigado. E eu te espero no próximo vídeo.</p>

<h2>02. Preparando o ambiente</h2>

<p>É muito bom receber você neste curso de reconhecimento de voz com JavaScript.</p>

<p>Espero que seja uma experiência de aprendizado incrível e que possamos vencer todos os desafios juntos. Neste curso, vamos criar um projeto do zero, indo do HTML, CSS até o JavaScript.</p>

<p>Porém, se você quiser focar seus estudos apenas no JavaScript e não desenvolver o HTML e CSS, você pode seguir direto para a aula 2 em diante.</p>

<p>
    Ambiente de desenvolvimento
    Nesse curso, vamos utilizar o VSCode como editor de código, o GitHub e a Vercel.
</p>

<p>Em caso de dúvida na instalação ou durante o curso, conte sempre com o fórum da Alura!</p>

<p>
    Vamos começar?
    
    :)
</p>

<h2>03. Iniciando o projeto</h2>

<p>[00:00] Vamos iniciar os nossos estudos? Vamos começar o nosso projeto do zero. Vou criar uma pasta, clicando com o botão direito e selecionando “Nova pasta”, e vou chamar essa pasta de “numero-secreto”. Vou usar o Visual Studio Code para manipular, escrever todo o nosso código, e vou abrir essa pasta.</p>

<p>[00:18] Repara que essa pasta não tem nenhum arquivo, vamos criar tudo do zero. Para isso, eu vou utilizar um atalho do “Rodando no Terminal”, para ele criar dois arquivos, o “index.html” e o “style.css”.</p>

<p>[00:31] Então, com “Ctrl + J”, ou “command + J”, eu vou escrever touch index.html style.css, quando eu der um “Enter”, ele vai criar esses dois arquivos para mim. “Ctrl + J” para minimizarmos o nosso terminal, e “Ctrl + B” para minimizar a lateral.</p>

<p>[00:54] Vou abrir o “index.html”, vou colocar uma exclamação e “enter”, para ele gerar o nosso código base, vou alterar o idioma para PT-BR, português do Brasil, e vou passar como title o nome title Número Secreto title. E dentro, eu vou passar um h1 Acerte o número secreto h1, por exemplo.</p>

<p>[01:20] Vou usar o Live Server para conseguir ficar visualizando as alterações que eu faço. Então, se você não tem o Live Server instalado, é só clicar na aba de extensões, eu vou pesquisar como “live server”, ele já aparece, é só instalar. E como eu já tenho instalado, clicando com o botão direito em cima do “index.htm”, “Abrir com Live Server”, e ele vai abrir uma página escrito “Acerte o número secreto”.</p>

<p>[01:49] Repara que esse texto está com alguma estilização, só por conta desse h1 que colocamos, e eu não quero isso, eu quero que tenha um comportamento parecido em todos os navegadores. Para isso, eu vou utilizar um “reset css cdn”, para inserirmos um link para ele tirar algumas estilizações que os navegadores já colocam.</p>

<p>[02:12] E nesse primeiro link do CDN JS já tem cdnjs.cloudfare, vou clicar no segundo ícone, que é o “Copy link tag”. Clicando nele, voltando no nosso projeto, vou dar um “Enter”, ele vai ficar na linha 7, e colei todo aquele link dentro do nosso “index.html”. Se voltarmos na nossa aplicação, repara que ele já tirou toda aquele estilização, e era isso mesmo que eu queria.</p>

<p>[02:39] Outra coisa, agora que já fizemos o reset do CSS, eu quero linkar o nosso arquivo style que criamos. Então, link:css, e ele coloca link rel:”stylesheet” href=”style.css”, que é o arquivo que geramos. E essa é uma ordem importante. Se colocarmos o link do reset depois do “style.css”, vamos perder todos os nossos estilos. Então, primeiro o reset CSS, depois o nosso link.</p>

<p>[03:06] Para o nosso jogo, o que precisamos passar de informação interessante? Eu quero falar que o número secreto está entre 0 e 100, por exemplo, então, eu vou passar um h3 O número secreto está entre 0 e 100, só que tem um ponto interessante, esse valor 0 e esse valor 100, eu quero conseguir manipular depois com o JavaScrpt. Então, eu vou escrever span antes do 0 e 100, e vou colocar span 0, e vou tirar o 100 do lugar, e vou colocar também span 100, então h3 O número secreto está entre span 0 e span 100.</p>

<p>[03:47] E para eu conseguir manipular esses valores, vou passar um ID para ele, então, dentro do primeiro span 0, eu vou escrever id=”menor-valor”, e no 100 eu vou passar mais um span, que eu vou colocar de um id=”maior-valor”, então span id=”maior-valor” 100.</p>

<p>[04:05] Se formos na nossa aplicação, temos “Acerte o número secreto”, “O número secreto está entre 0 e 100”.</p>

<p>[04:10] O que eu quero fazer agora, é preparar a mensagem que a pessoa vai falar. Então, ela vai dar um chute. Então, vamos pensar em todos os casos. Pedimos um valor entre 0 e 100, se a pessoa falar, por exemplo, “Guilherme”, ou se você falar o seu nome, vai aparecer o seu nome escrito, depois quando fizermos o reconhecimento da fala. Então, precisamos passar alguma mensagem.</p>

<p>[04:30] Então, eu vou criar um ID que eu vou chamar de chute, e vou colocar uma classe chamada div id=”chute” class=”mensagem”, e repara que eu fiz com dois atalhos, #chute.mensagem. Vamos deixar o ID para o nosso JavaScript, e a classe para manipular o CSS.</p>

<p>[04:58] Já temos a nossa classe, eu vou acessar, e a primeira coisa que vamos falar é reconhecer a mensagem que a pessoa vai falar. Então, por exemplo, vou escrever uma div Você disse:, e vou passar embaixo mais uma tag span, e vou passar uma classe para conseguirmos manipular esse span, então span class=”box”> 20, vou deixar uma caixa de 20.</p>

<p>[05:25] E para finalizar, vamos pensar que a pessoa errou o valor, falou um valor menor ou maior. Então, vou passar mais uma div O número secreto é maior. E eu quero fazer algo diferente, quando eu falo que o número secreto é maior, vamos supor, que o número secreto escolhido foi 80, e eu falei 20, o número secreto é maior, eu quero que apareça um sinal de maior mesmo, uma flecha para cima. Para isso, vamos utilizar mais um link, que vai ser o “font-awesome”. Então, vou colocar “font awesome cdn” na barra de busca, e no primeiro link, vamos copiá-lo, exatamente como fizemos no “reset css”, “Copy link tag”, vou na parte de cima, e na linha 8 eu vou dar um “Ctrl + V”.</p>

<p>[06:22] Então, ficou a linha 7 com o reset, a linha 8 com “fonte-awesome”, e a linha 9 com o “style.css”. E eu quero colocar um símbolo, quero colocar o sinal de maior, então, eu vou colocar na barra de busca “front awesome”, e vou clicar no link “ícone”, e vou pesquisar “Arrow”, ou “up arrow”, algo desse tipo.</p>

<p>[06:56] E aparecem algumas opções. Então, vou escolher uma seta para cima, para falar que o número secreto é maior. Você pode escolher a que você achar mais legal. Então, vou escolher o “up long”. Se você gostou de outro, pode usar outro. Então, selecionei o ícone que quero usar, clico no quadrado onde mostra o HTML, volto no nosso código, e coloco dentro da nossa div de maior aquele i class=”fa-solid fa-up-long”></.</p>

<p>[07:28] E se voltamos na nossa aplicação, está a seta de maior. Quando o for o menor, eu quero que ele mostre o sinal de menor. Já preciso copiar agora? Não, vamos fazer toda essa manipulação com o JavaScript.</p>

<p>[07:41] Ficou legal, acho que a estrutura da nossa aplicação está legal, só que o nosso projeto está bem feio. Na sequência, vamos deixar esse projeto com uma cara bem mais bonita</p>

<h2>04. Escolhendo fontes e cores</h2>
<p>[00:00] Nosso projeto está bem simples na parte visual. E antes de estilizarmos ele todo, eu quero escolher uma fonte diferente, e quais cores eu vou usar nesse projeto.</p>

<p>[00:10] Para isso, eu vou no Google Fonts, “fonts.google.com”, e vou pesquisar uma fonte, e eu quero que você escolha a fonte que você achar legal para esse projeto. E você pode escolher a fonte que você quiser, você pode customizar o seu projeto da forma que você achar que vai ficar bonito.</p>

<p>[00:33] Eu vou utilizar a fonte clássica, o “Montserrat” mesmo, vou selecioná-la, cliquei nela uma vez, aparece a minha fonte, vou selecionar o peso dela, e com tudo selecionado, vou clicar no “View select families”, e eu quero importar no CSS essa fonte, então, selecionei a opção “@import”, e não “link”, e vou copiar todo esse trecho de código @import url, não vou copiar o style, porque já vamos estar no nosso CSS.</p>

<p>[01:16] Vou voltar na nossa aplicação, abrindo o nosso “Style.css”, a nossa primeira linha vai ser a linha da nossa fonte. Eu quero escolher algumas cores para o nosso projeto. Então, eu vou utilizar as variáveis do CSS, :root {, vou colocar embaixo --font-family:, e vou passar o import da nossa fonte que estamos utilizando.</p>

<p>[01:50] E no código do Google Fonts, ele até nos mostra para utilizarmos o ’Montserrat’, sans-serif;. Então, embaixo de onde fazemos o import, temos o font-family. Então, vou colocar a fonte --font-family: ‘Montserrat’, sans-serif;.</p>

<p>[02:11] Além disso, eu quero colocar duas cores para essa aplicação, que é o necessário para o que vamos utilizar. Vamos ter a cor primária, então --primary-color: ;, e vamos ter a cor secundária.</p>

<p>[02:30] Ao invés da cor secundária, podemos usar uma cor de fundo, acho que vai ficar mais legal, vou usar --bg-color: ;. Então, vamos ter uma cor de fundo e uma cor primária. Isso é suficiente para a nossa aplicação.</p>

<p>[02:44] E para escolher essas cores, vamos no Color Hunt, que vai ter um monte de paleta maravilhosa para escolhermos, e podemos escolher uma cor meio pastel, uma cor neon, uma coisa bem chamativa, uma cor vintage. Eu vou pesquisar algumas cores, vou na aba “Cold”, e acho que tem algumas legais.</p>

<p>[03:06] Eu vou usar o azul #0AA1DO. Lembrando que você é livre, não precisa usar a mesma cor que eu. Se você quiser usar uma cor neon, parecendo uma festa, pode ser, não tem problema. Clicando na cor, ele já copia, eu volto no código, e ela vai ser a minha cor de fundo, então eu vou colocar --bg-color: #0AA1DO.</p>

<p>[03:26] E na cor primária, eu vou usar uma cor oposta dessa, vou usar um branco. Volto para o código, --primary-colo: #E8F9FD. O que eu preciso fazer agora, é colocar essas cores na nossa aplicação, e isso vamos fazer na sequência.</p>

>05. Para saber mais: estilos
<p>Nosso primeiro desafio foi estruturar e estilizar o projeto com fontes e cores personalizados e, para isso, utilizamos os seguintes sites:</p>

>Google fonts
<p>O Google Fonts uma importante ferramenta para quem busca facilidade na hora de criar ou editar um website, em relação às fontes do texto, que conta com mais de 800 fontes livres licenciadas.</p>

>Cores
<p>O Color Hunt uma coleção aberta de paletas de cores. Essa ferramenta atende a milhares de esquemas de cores para muitos propósitos diferentes de design e arte. As paletas de cores são usadas por desenvolvedores web, artistas, ilustradores e pessoas com áreas de atuação diferentes.</p>

> Adobe Color
<p>Outro site com muitas paletas de cores legais e personalizáveis é o Adobe Color. Nele você vê uma roda de cores que pode ser usada para gerar paleta de cores.</p>
<p>Já escolheu as cores e fontes? Então vamos estilzar nosso projeto!</p>

<h2>06. Aplicando cores e posicionando elementos</h2>

<p>[00:00] Agora que já escolhemos as cores da nossa aplicação, e já selecionamos a fonte que queremos utilizar, vamos aplicar esses recursos no nosso código, para que ele fique bem bonito, o nosso jogo fique bem maravilhoso. Vamos lá.</p>

<p>[00:11] Primeira coisa que eu vou fazer, é selecionar a tag body {, para aplicarmos essas nossas cores. E vamos começar com a cor de fundo, background color, e repara que eu digitei “back”, e não apareceu. Eu estou utilizando uma outra extensão do PostCSS, não é o que eu quero, eu quero utilizar o CSS, então, colocamos o CSS e ele vai nos auxiliar a escrever algumas tags do CSS.</p>

<p>[00:36] Então, vamos lá, primeira coisa, background-color: var(--bg-color), e se voltarmos na nossa página, já tem o azul que eu selecionei.</p>

<p>[00:50] Além do background color, eu vou precisar de uma cor de fundo para os nossos códigos, para as nossas cores, dos nossos textos, então, vou colocar color: var(--primary-color), e se voltamos na nossa página, já está com as cores diferentes também.</p>

<p>[01:10] Então, eu quero que ele tenha o tamanho mínimo da nossa janela, então, vou colocar min-height: 100vh;. E eu quero também posicionar todos os meus elementos no centro, repara que todos eles estão no canto, e eu quero colocar no centro da nossa tela. Então, para isso, vou utilizar o display: flex;, para nos auxiliar nessa tarefa. Vou colocar uma direção flex-direction: column;, e vou utilizar align-items: center;, e também o justify-content: center;.</p>

<p>[01:54] Vamos dar uma olhada para ver como está ficando, e está ficando melhor, já não está no canto tudo esmagado. Vamos colocar também o texto sempre centralizado. Então, text-align: center, para garantirmos que tudo vai estar no centro. Vou usar um margin: 0, e para finalizar, vamos colocar a nossa fonte, font-family: var(--font-family). E voltamos na nossa aplicação, e já aparece com o layout bem mais agradável.</p>

<p>[02:29] Agora que já temos as nossas cores e as nossas fontes, vamos começar a estilizar os nossos próximos passos da nossa aplicação. Vou começar com h1, que é esse “Acerte o número secreto”. Então, vou selecioná-lo, h1 {, vou colocar um font-size 5em;, e vamos voltar na aplicação, e está muito grande. Vou colocar um pouco menor, para 4em, vamos ver se fica melhor. E está melhor.</p>

<p>[03:01] Vou colocar um font-size nesse “O número secreto está entre 0 e 100”. Se voltarmos no nosso código, vemos que ele é o nosso h3, então, vamos lá. Vou dar um “Enter”, h3 {, e embaixo font-size: 2em, para vermos como fica. Como eu estava com o zoom na tela, eu vou aumentar o nosso h1 para 5em.</p>

<p>[03:47] Se percebermos, esse “O número secreto está entre 0 e 100” está bem grudado, vamos dar alguma margem. Então, vou colocar margin=top: 20px, para ela afastar um pouco.</p>

<p>[04:02] Vamos ver o que falta estilizarmos. Esse “Você disse: 20” e “O número secreto é maior ou menor”, precisamos dar uma mexida neles também. Então, temos uma classe mensagem, vamos mexer nela no nosso CSS. Então, vou criar .mensagem {, e embaixo font-size: 1.5em;, e vou colocar também uma margem superior, para ele não ficar tão grudado, de 40px, então margin-top: 40px, só para vermos como fica.</p>

<p>[04:39] Já dá para ter uma visualização melhor. O que eu quero fazer agora, é colocar uma borda no número. A mensagem que a pessoa fala ficar dentro de um quadrado. Então, vamos fazer isso. No nosso HTML colocamos uma classe chamada box, vamos pegar essa nossa classe. Então, vou colocar .box {, na linha 36, e vamos começar a estilizá-la na linha 37, então, ela vai ter uma borda. Aliás, tem um artigo muito legal sobre borda com CSS, que eu vou deixar nas atividades do “Para saber mais”. Então, vou colocar border: 2px solid var(--primary-color), vou passar uma cor para ele também. Vamos ver.</p>

<p>[05:37] Ficou um quadrado pegando tudo que está em volta, não é isso que eu quero, vamos colocar um display para ele, um display: inline-block, e já deu um espaço para colocarmos todo o conteúdo dentro dessa nossa caixa. Vou colocar uma font-size: 4em, porque queremos dar destaque para esse número que a pessoa vai falar.</p>
<p>[05:53] Só que se você observar, repara que ele está bem grudado dos lados. Vamos arrumar esse padding dele. Então padding: 10px;, e já vou colocar uma margin: 20px;. E se voltamos para a nossa aplicação, ficou legal.</p>

<p>[06:22] E ficou legal, gostei. Esse layout é suficiente para o queremos fazer. Então, criamos o HTML do zero, criou o CSS, importou cores, importou a nossa fonte, e agora, vamos partir para o JavaScript.</p>

<h2>08. Para saber mais: bordas CSS</h2>

<p>Durante a aula, usamos a propriedade CSS chamada border, para adicionar a borda em volta de um elemento.</p>

<p>Essa propriedade pode ser usada para definir os valores de largura da borda, estilo da borda e cor da borda.</p>

<p>E caso você queira saber mais sobre bordas CSS, nós temos o artigo “CSS Border: estilizando com bordas seus elementos CSS” e o Alura+ de mesmo nome feitos pelo instrutor Luan Alves.</p>

<h1>Módulo 02. Aplicando a Função Math.random</h1>

<h2>02. Numero aleatório com Math.random</h2>

<p>[00:00] Agora que já aplicamos fontes e alteramos os estilos da nossa aplicação, do nosso jogo, eu quero começar a dar vida para ele com JavaScript. Vamos lá?</p>

<p>[00:11] Então, voltando no nosso código, eu quero criar uma pasta para manter todos os nossos códigos JS. Então, eu vou clicar no segundo ícone de pastas, e vou escrever “app”, e vou criar o nosso primeiro arquivo JavaScript. Esse primeiro arquivo, eu quero manter todo o nosso código relacionado ao sorteio dos números. Então, para não termos um arquivo JavaScript só, muito grande, com muitas linhas, para dar difícil manutenção, ou pensando até no futuro, outras pessoas vão trabalhar nesse projeto, eu quero dividir essa aplicação em alguns arquivos do JavaScript separados.</p>

<p>[00:45] Então, o primeiro vai ser para sortear um número, vou escrever “sortearNumero.js”, e temos o nosso primeiro arquivo. Para conseguirmos linkar o nosso projeto, que é HTML CSS, com esse arquivo JavaScript, vamos precisar ir na nossa “index.html”, na linha 23, e vou escrever script src=”app/sortearNumero.js”>.</p>

<p>[01:14] Se eu vou no “sortearNumero.js”, e coloco cl, e dou um “enter”, ele abre o console.log, e eu vou escrever console.log(‘estou aqui’). Vou na nossa aplicação, clicar com o botão direito em “inspecionar”, e repara que se eu for no console, vai aparecer a mensagem “estou aqui” no nosso console.</p>

<p>[01:33] Eu quero sortear um número secreto, e tem um ponto muito interessante que eu quero trabalhar junto com vocês. Como conseguimos sortear um número secreto que seja de verdade aleatório. Eu não quero escolher um número, vou jogar com o meu irmão, com a minha prima, com a minha irmã, e de repente, aparece um número que eu já sei qual é, e eu vou sempre ganhar, não é isso.</p>

<p>[01:56] Toda vez que eu atualizar a página, eu quero que seja de verdade um número que o computador vai selecionar, um número secreto que ele vai gerar para nós. Para isso, tem uma função no JavaScript chamada Math Random, vamos pesquisa-la. E clicando no primeiro link do “developer.mozilla”, ele nos diz que a função Math.random() retorna um número pseudo-aleatório.</p>

<p>[02:25] Por que ele fala pseudo-aleatório? Porque ele utiliza alguns recursos do computador, para conseguir gerar esse número. Não é totalmente aleatório, ele usa o timer, usa o delta, um monte de coisa maluca, que não faz sentido para nós agora, só que queremos um número que seja pseudo-aleatório.</p>

<p>[02:41] Então, ele fala que o Math.random() gera um número pseudo-aleatório no intervalo de 0 e 1, ou seja, de 0 (inclusivo), mas não incluindo o 1. Esse 0 vai incluir, então, ele pode ser de 0 a alguma coisa, só que o 1 ele não vai, então, ele vai de 0. um monte de números, até deixar o 1 de fora, exclusivo. Vamos ver isso na prática.</p>

<p>[03:06] No console.log, eu quero rodar alguns códigos com você, para entendermos. Então, se eu digitar Math.random(), coloco abre e fecha parênteses porque é uma função, quando eu ou um “Enter” nisso, ele gerou um número 0.9652640 e vários números, se eu fizer de novo, ele gera outro número. E temos um monte de números depois do ponto decimal. Então, se eu fizer um Math.random() * 10, ele vai gerar um número entre 0 e 9, nunca vai aparecer o 10, porque o número 1 seria exclusivo.</p>

<p>[03:46] Mas eu quero um número entre 0 e 100, por exemplo. Se eu colocar 0 e 100, ele vai gerar um número, repara que está aparecendo 94, 26, 80, 89, 3, 71, só que eu não quero toda essa parte decimal. Depois do ponto, o resto não faz sentido para mim. Então, eu vou usar o Math.random(), e vou transformar esse número que ele gerou em um número inteiro. Então, vou fazer parseInt(Math.random() * 100), e agora temos 23, 33, 40, 95, 52, 31 e assim por diante. Isso fica muito legal, quero usar isso.</p>

<p>[04:32] Só que temos um ponto também, repara que ele vai gerar um número entre 0 e 99, para eu conseguir de fato um número até 101, eu posso colocar mais 1. Mas não vamos entrar nesse problema agora, porque essa manipulação do menor valor e do maior valor, vamos tratar com bastante carinho na sequência.</p>

<p>[04:49] Então, vamos gerar só esse número aleatório, para ver se está dando certo. Então, vou criar uma constante no nosso “sortearNumero.js”, que vou chamar de const numeroSecreto = gerarNumeroAleatorio(). E agora, eu vou criar essa nossa função, então vou escrever function gerarNumeroAleatorio() {, não vou passar parâmetro, e o que eu quero fazer, é retornar aquele conteúdo que tínhamos, return parseInt(MAth.random() * 100), e quero exibir esse número aleatório no console, console.log(numeroSecreto).</p>

<p>[05:43] Vamos voltar no nosso código, e só de atualizar a página, já aparece 47, eu atualizo de novo, e aparece 26, 86, só que podemos passar uma mensagem, para ficar melhor. Então, falar console.log(‘Número Secreto:’, numeroSecreto), e aparece “Número Secreto: 97”, 91, 73, 27.</p>

<p>[06:08] Está do jeito que eu queria. O que eu quero fazer na sequência, é de alguma forma conseguir manipular qual vai ser o menor valor, e qual vai ser o maior valor que utilizamos nesse nosso span. E colocar esses valores de maior e menor, para que sejam exibidos na tela do nosso projeto.</p>

<h2>03. Manipulando menor e maior valor</h2>

<p>[00:00] Na nossa aplicação vamos ter um número secreto entre 0 e 100, só que eu quero que esse valor seja facilmente manipulado. E conforme alteramos esse valor do lado do JavaScript, ele altere na aplicação também, e ele faça o sorteio com base nesses valores que estamos selecionando.</p>

<p>[00:18] Para isso, eu vou criar uma constante const menorValor = 1, e outra const maiorValor = 100, por exemplo. Então, eu quero alterar esses valores, e ele já alterar esses valores que estão aparecendo na tela da aplicação.</p>

<p>[00:43] Só que antes, temos que pensar que quando fizermos o sorteio do número maior ou menor, esse número vai precisar estar dentro desses valores que colocamos. Por exemplo, se eu coloco de 1 a 10, eu quero que o número secreto seja até o valor entre 1 e 10, então, vamos precisar alterar, no lugar de multiplicar por 100, vamos multiplicar pelo maior valor, então return parseInt(Math.random() * maiorValor).</p>

<p>[01:06] Só que eu quero que seja o maior valor, e eu quero que esse maior valor seja inclusivo, ou seja, quando formos sortear um número entre 1 e 10, eu quero que realmente seja 1 e 10. E se eu deixar o maior valor só multiplicando Math.random(), não vamos ver o último valor inclusivo.</p>

<p>[01:25] Então, eu vou colocar return parseInt(MAth.random() * maiorValor + 1). Agora, sempre vamos ter um número entre 1 e 10 para conseguir fazer essa conta.</p>

<p>[01:34] Então, se eu mudar, por exemplo, para 1000, ele vai fazer o sorteio do maior valor até mil. Repara que já alterou para 708, 895, 380. Só que temos um problema, eu alterei no código entre 1 e 1000, e na tela da aplicação, ele está mostrando entre 0 e 100, não é bem isso que eu quero. Eu quero que esse menorValor e maiorValor sejam exibidos na tela. Como vamos fazer isso?</p>

<p>[01:57] Vamos fazer uma manipulação buscando esses elementos. Se observarmos na nossa “index”, temos um span com ID do menor valor, que é zero, e o maior valor que é 100. Vamos alterar isso. Então, primeira coisa, vou criar uma constante const elementoMenorValor = document.getElementById(‘menor-valor’). E eu quero alterar o conteúdo dessa tag.</p>

<p>[02:36] Então, vou pegar elementoMenorValor.innerHTML = menorValor. Se eu fizer isso, ele já alterou o 1, mas ele não alterou o 100, por exemplo. Então, se eu alterar para 10, por exemplo, e ele vai alterar para 10 também. Isso que eu quero. Só que eu quero esse mesmo comportamento para o maior valor. Então, vamos lá, const elementoMaiorValor = document.getElementById(‘maior-valor’), se formos na “index”, temos o maior valor também como um span.</p>

<p>[03:17] Então, vou fazer um processo bem parecido, vou pegar elementoMaiorValor.innerHTML = maiorValor, dessa forma, ele vai colocar entre 1 e 100, entre 1 e 1000. Se eu colocar, por exemplo, um número entre 50 e 5500, ele já vai alterar, e isso está muito legal.</p>

<p>[03:42] E se observarmos, repara que o valor sorteado já vai estar nesse range também. Eu vou salvar entre 100 e 5500, e vou alterar, eu quero entre 1 e 1000, por exemplo, e o range está em 516, 36, 171. Conseguimos fazer com que esse número de maior valor e menor valor seja modificado, com base nessas nossas duas variáveis.</p>

<p>[04:09] Nosso próximo desafio é conseguir manipular o chute da pessoa. E não vamos utilizar um input, vamos utilizar reconhecimento de fala. E é isso que vamos aprender na sequência</p>.

<h1>Módulo 03: Definindo a voz com webspeech</h1>
<h2>02. Web speech API</h2>

<p>[00:00] Agora que o nosso projeto já escolhe um número secreto, e o nosso layout visual já está mais legal, o que eu quero fazer é ligar o nosso microfone, para falarmos um valor e o nosso programa reconheça aquilo que estamos falando. Para isso, vamos utilizar uma interface chamada Web Speech API, e eu quero que você abra a documentação junto comigo.</p>

<p>[00:21] Então, vou digitar “web speech api”, e no segundo link dos resultados, “developer.mozilla.org”, “Web Speech API”, uma API de fala. E ele fala algo bem legal sobre essa API. Essa API permite que incorporemos dados de voz em nossos aplicativos web, ou seja, existem duas funcionalidades muito importantes. Existe um que reconhece a fala, que é esse SpeechRecongnition, e tem um capaz de falar aquilo que está lendo, com base nos dados, que é esse SpeechSynthesis.</p>

<p>[00:55] Vamos utilizar apenas o reconhecimento de fala, o primeiro exemplo. Eu até recomendo, que por mais que seja em inglês, que você coloque em um tradutor essa página, e dê uma olhada também, para você entender um pouco mais sobre as propriedades, os parâmetros.</p>

<p>[01:13] E na parte de baixo tem uma parte importante, que eu quero mostrar para vocês, que é a “Browser compatibility”, ou seja, é a compatibilidade dos navegadores. E eu recomendo que você utilize o Chrome para fazer esse reconhecimento de voz. Então, tem todos os navegadores, os que estão mais habilitados a esse tipo de reconhecimento dessa API que vamos utilizar, e o Chrome tem bastante coisa, tem compatibilidade em quase tudo. Então, vamos utilizar o Google Chrome para fazer esse nosso exemplo.</p>

<p>[01:41] E na parte de cima, quando abrimos esse Web Speech API, tem “Para mais detalhes de como utilizar esses recursos, veja Using the Web Speech API”, vou clicar nesse link, e quero você clique junto comigo.</p>

<p>[01:56] “Usando o Web Speech API”, ele fala sobre o reconhecimento de voz, o reconhecimento de fala, ele diz na documentação que é acessado com base no contexto da nossa fala, em uma entrada de áudio, por meio de um serviço de reconhecimento de fala padrão que navegador tem, que essa API fornece para nós, ele vai conseguir identificar exatamente aquilo que estamos falando. Então, na nossa aplicação, no nosso jogo, vou falar um número 850, por exemplo, e ele vai entender e vai colocar aquele número também na tela. E é justamente isso que queremos para a nossa aplicação.</p>

<p>[02:32] Então, como vimos, se “scrollarmos” um pouco para entender como ele usa, ele até tem um exemplo demonstrativo, não vamos investir muito tempo nisso, depois se você quiser dar uma olhada no código também do exemplo. Mais uma vez ele reforça o uso do navegador, então, como eu havia dito anteriormente, o Chrome oferece um suporte a reconhecimento de fala com a maioria das propriedades dessa API.</p>

<p>[02:58] Então, podemos incluí-las no nosso código, para conseguirmos utilizar e alimentar esses objetos. E qualquer implementação futura dessa API de reconhecimento, vamos conseguir oferecer suporte para a nossa aplicação também.</p>

<p>[03:14] Para isso, ele fala que você vai precisar utilizar JavaScript, e vai ter esse suporte do Chrome. E é justamente essa linha que vamos precisar. E eu quero que você preste bastante atenção, porque vamos fazer alguns copy paste. Então, o primeiro que vamos fazer, é para conseguirmos utilizar implementações futuras, e o nosso projeto continue funcionando, vamos copiar as duas primeiras linhas, o var SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;. Então, selecionando e dando um “Ctrl + C”, vamos na nossa aplicação, e vamos criar um local para conseguirmos fazer esse reconhecimento de fala.</p>

<p>[03:54] Então, vou clicar em “app”, e vamos criar um novo aplicativo, porque não queremos colocar o sortearNumero como as configurações de reconhecimento de fala. Então, vou colocar “reconhecimentoDeVoz.js”, e vou colocar as duas linhas que eu copiei aqui dentro dele. Eu vou colocar na frente window também, porque assim que o nosso projeto abrir, assim que a nossa aplicação começar a funcionar, eu já quero ter essa configuração de reconhecimento de voz ativa, então window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;.</p>

<p>[04:36] Então, coloquei essa linha, esse nosso código JavaScript ainda não está vinculado com o nosso HTML, vamos precisar fazer isso. Então, no final da página HTML, eu vou colocar script src=”app/reconhecimentoDeVoz.js”></script>, agora temos o reconhecimento de voz já configurado para conseguirmos utilizar.</p>

<p>[04:58] Depois, o que vamos precisar é de uma instância para conseguirmos utilizar esse reconhecimento e controlar as informações. Vamos ver que quando falamos alguma coisa e o microfone liga, existem diversos parâmetros e configurações que podemos utilizar. Para isso, vamos precisar de uma instância, até a documentação fala, que eu acho muito interessante, que é o var recognition = new SpeechRecognition().</p>

<p>[05:22] Então, vou copiar esse linha, vou colocar na linha 3 do nosso código. E no lugar do var, vou colocar uma const, e agora, eu quero começar o reconhecimento de voz. E tem um ponto importante, o reconhecimento de voz, eu quero que seja configurado para a nossa língua padrão, que é o português do Brasil. Então, vou pegar recongnition.lang = ‘pt-Br’, e vou começar o reconhecimento de voz, recognition.start(), escrevam “start” corretamente, porque eu já sofri com isso, não quero que vocês sofram também.</p>

<p>[06:10] Dei um recognition.start(), quando eu volto na nossa aplicação e atualizo, começou um microfone. Se no seu não começou, é só você ir no ícone do microfone e falar que permite que essa aplicação do servidor localhost:5500 tenha acesso ao microfone. Você coloca para permitir, dá um “Done” e ele já está reconhecendo.</p>

<p>[06:30] Estamos com o nosso microfone ligado, mas não estamos vendo nada diferente ainda. Mas o nosso microfone está ligado. Na sequência, vamos aprender como conseguimos pegar as informações que estamos falando, e exibir no console. É isso que vamos ver a seguir.</p>

<h2>03. Para saber mais: como funciona a Web Speech API</h2>

<p>A Web Speech API foi lançada no final de 2012, e possibilita que as pessoas desenvolvedoras da Web forneçam recursos de entrada de fala e saída de texto para fala em um navegador da Web. Normalmente, esses recursos não estão disponíveis ao usar o software padrão de reconhecimento de fala ou leitor de tela.</p>

<p>Esta API cuida da privacidade dos usuários. Então, antes de permitir que o site acesse a voz via microfone, o usuário deve conceder permissão declaradamente. O curioso é que a solicitação de permissão é a mesma da API getUserMedia, embora não precise da webcam. Se a página que executa essa API usa o protocolo HTTPS, o navegador solicita a permissão apenas uma vez, caso contrário, sempre vai solicitar quando um novo processo é iniciado.</p>

<p>Outro recurso interessante da Web Speech API é que ela permite especificar um objeto gramatical. Você pode pensar nisso como um conjunto de regras para definir um idioma. A vantagem de usar uma gramática é que ela geralmente leva a melhores resultados devido à restrição das possibilidades da linguagem.</p>

<p>A Web Speech API define uma interface complexa, chamada SpeechRecognition e você poder ler mais sobre ela aqui.</p>

<p>Também recomendo a leitura desse artigo para se aprofundar mais ainda no assunto.</p>

<h2>04. Exibindo a mensagem no console</h2>

<p>[00:00] Agora que o nosso microfone está ligado quando o nosso programa roda, eu quero pegar essa mensagem que estamos falando, e colocar no console para ser exibido.</p>

<p>[00:10] O que vamos precisar fazer para isso acontecer? Vamos criar um evento, que assim que falamos, vamos exibir a nossa mensagem no console. Para isso, vamos utilizar o recognition.addEventListener(‘result’, onSpeak), ou seja, quando o nosso reconhecimento de voz começar, eu quero pegar tudo que está em result, e vou criar uma função call-back, para que ela seja executada, então, vou chamar de onSpeak.</p>

<p>[00:44] Essa função onSpeak vai exibir tudo que eu estou falando no console. Então, vou criar a função function onSpeak(e) {, quando falarmos, tudo vai estar salvo em algum evento, então, vou passar o valor e, que vai estar salvo, e vou colocar console.log(e).</p>

<p>[01:07] Vou parar de rodar a nossa aplicação, vou falar a palavra “Guilherme”, se você quiser falar o seu nome, também acho que fica legal. Então, vou rodar, vou falar “Guilherme”, e depois vamos ver o que acontece no console. Vamos lá, “Guilherme”.</p>

<p>[01:33] Eu falei “Guilherme” e apareceu esse SpeechRecognitionEvent, um monte de coisas. Quando eu clico para abrir toda essa função, olha o tanto de coisa que tem desse SpeechRecognition, tem um monte de coisas.</p>

<p>[01:50] Nós colocamos no nosso código que queremos o português brasileiro, queremos falar 830 e apareceu realmente o valor 830. Vou fazer de novo, vou falar “Guilherme”, e ele colocou que estamos utilizando o dicionário, a língua oficial como pt-Br, português do Brasil, e tem um monte de coisas.</p>

<p>[02:10] Aonde está o que falamos? Está em results, no plural. Vou clicar nele, temos um array zero, tem outro array zero, que quando eu entro de novo, tem transcript: “Guilherme”.</p>

<p>[02:25] Vou falar outra coisa, vou falar 850, por exemplo. Ele reconheceu alguma coisa, vamos em results, tem o 0 e o 0, e está lá transcript: “850”.</p>

<p>[02:44] O que eu quero fazer é pegar realmente esse 850 e exibir só ele, eu não preciso de todas essas informações e configurações do reconhecimento de fala. Então, primeira coisa que vamos fazer, vai ser pegar realmente só o que está em result. Como fazemos isso?</p>

<p>[03:00] Como estamos no nosso evento, se eu colocar evento.results, no plural, ele vai reconhecer o que eu falei. Ele já mudou, então ele trouxe SpeechRecongnitionResultList, temos um array 0, depois tem outro 0, e depois ele entra nas coisas que eu falei. Ele só reconheceu “aqui ó”, que é o que eu estava falando na hora.</p>

<p>[03:25] Então, eu vou colocar duas arrays 0 para vermos o que acontece. Então console.log(e.results[0][0]), para ele ir acessando. E vou falar “Guilherme”.</p>

<p>[03:37] E quando eu falei, repara que ele trouxe menos propriedades do que antes, estamos diminuindo, e ele trouxe transcript: “Guilherme”. Como eu faço agora, para acessar esse transcript? Não temos mais nenhum array, não precisa acessar nenhum outro elemento. Se eu colocar .transcript, é para ele trazer só o meu nome. Vamos ver.</p>

<p>[03:56] Vou colocar console.log(e.results[0][0].transcript), vou falar “Guilherme”, e ele trouxe só o “Guilherme”. Que legal. Só que “Guilherme” não faz muito sentido para o nosso projeto, porque eu quero adivinhar um número, e não um nome, estávamos chutando o nome. Então, eu vou falar alguns números para testarmos: “558”.</p>

<p>[04:20] Ele trouxe “558”. Vou falar “36”, e ele trouxe também. Está funcionando da forma que queremos. Só que tem um ponto interessante, o número que falamos na nossa aplicação, está sendo exibido no console, só que quando estivermos rodando na nossa aplicação, não vamos olhar no console, não faz muito sentido. Eu quero que esse número apareça embaixo do “Você disse:” que colocamos na nossa aplicação. E é isso que vamos fazer na sequência.</p>