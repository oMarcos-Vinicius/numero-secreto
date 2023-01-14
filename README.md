# numero-secreto
Aprendendo consumo de API de reconhecimento de voz | Alura.com

<h1>Módulo 01: Aplicando estilos no JavaScript</h1>

>01. Apresentação
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

>02. Preparando o ambiente

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

>03. Iniciando o projeto

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

>04. Escolhendo fontes e cores
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

<h2>Google fonts</h2>
<p>O Google Fonts uma importante ferramenta para quem busca facilidade na hora de criar ou editar um website, em relação às fontes do texto, que conta com mais de 800 fontes livres licenciadas.</p>
<h2>Cores</h2>
<p>O Color Hunt uma coleção aberta de paletas de cores. Essa ferramenta atende a milhares de esquemas de cores para muitos propósitos diferentes de design e arte. As paletas de cores são usadas por desenvolvedores web, artistas, ilustradores e pessoas com áreas de atuação diferentes.</p>
<h2>Adobe Color</h2>
<p>Outro site com muitas paletas de cores legais e personalizáveis é o Adobe Color. Nele você vê uma roda de cores que pode ser usada para gerar paleta de cores.</p>
<p>Já escolheu as cores e fontes? Então vamos estilzar nosso projeto!</p>

>06. Aplicando cores e posicionando elementos

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

>08. Para saber mais: bordas CSS

<p>Durante a aula, usamos a propriedade CSS chamada border, para adicionar a borda em volta de um elemento.</p>

<p>Essa propriedade pode ser usada para definir os valores de largura da borda, estilo da borda e cor da borda.</p>

<p>E caso você queira saber mais sobre bordas CSS, nós temos o artigo “CSS Border: estilizando com bordas seus elementos CSS” e o Alura+ de mesmo nome feitos pelo instrutor Luan Alves.</p>
