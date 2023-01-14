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