# atividade_grupo2COMEÇO DO CÓDIGO


INICIO.HTML:
<!DOCTYPE html>

Explicação:

Fala para o navegador:

“Isso aqui é um site HTML5 moderno.”

Sem isso, o navegador pode interpretar errado.

<html lang="pt-BR">

Explicação:

Começa o HTML do site.

lang="pt-BR" informa que o idioma do site é português do Brasil.

HEAD (CABEÇA DO SITE)
<head>

Explicação:

Parte invisível do site.

Aqui ficam:

configurações
título
conexão com CSS
meta tags
<meta charset="UTF-8">

Explicação:

Permite usar:

acentos
ç
caracteres especiais

Sem isso:
palavras podem aparecer quebradas.

<meta name="viewport" content="width=device-width, initial-scale=1.0">

Explicação:

Faz o site funcionar corretamente no celular.

Sem isso:
o site pode ficar pequeno ou desconfigurado.

<title>InnoWave - Tecnologia Inteligente para Empresas</title>

Explicação:

Define o nome da aba do navegador.

<link rel="stylesheet" href="style.css">

Explicação:

Conecta o arquivo CSS ao HTML.

style.css controla:

cores
tamanhos
animações
aparência do site

Sem CSS:
o site fica simples e sem estilo.

</head>

Explicação:

Fecha a parte HEAD.

BODY (CORPO DO SITE)
<body>

Explicação:

Tudo que aparece para o usuário fica dentro do BODY.

FUNDO
<div class="binary-bg"></div>

Explicação:

div é uma caixa.

class="binary-bg" provavelmente cria:

fundo tecnológico
animações
efeito binário

A aparência vem do CSS.

CABEÇALHO
<header class="topbar">

Explicação:

Cria a barra superior do site.

Normalmente contém:

logo
menu
relógio
LOGO
<div class="logo">

Explicação:

Caixa da logo.

<span>INNO</span>WAVE

Explicação:

span altera apenas uma parte do texto.

Exemplo:

INNO com uma cor
WAVE com outra
MENU
<nav class="menu">

Explicação:

Área de navegação do site.

<a href="inicio.html" class="nav-link">Início</a>

Explicação:

a cria um link.

href="inicio.html":
quando clicar, abre a página início.

class="nav-link":
CSS estiliza o botão.

Os outros links funcionam igual:

sobre.html
servicos.html
contato.html
avaliacoes.html

Cada um leva para uma página diferente.

RELÓGIO
<div class="relogio"></div>

Explicação:

Caixa vazia.

O JavaScript provavelmente coloca a hora nela.

</header>

Explicação:

Fecha o cabeçalho.

HERO SECTION
<section class="hero hero-bg">

Explicação:

Cria a área principal do site.

Geralmente é a primeira grande seção visual.

CONTEÚDO PRINCIPAL
<div class="hero-content">

Explicação:

Caixa que guarda:

título
texto
botões
TÍTULO PRINCIPAL
<h1>
Tecnologia Inteligente para Empresas
</h1>

Explicação:

h1 é o título mais importante da página.

PARÁGRAFO
<p>

Explicação:

Cria um texto normal.

BOTÕES
<div class="hero-buttons">

Explicação:

Caixa que organiza os botões.

BOTÃO SERVIÇOS
<a href="servicos.html" class="btn neon-btn">

Explicação:

Botão que leva para a página de serviços.

Classes:

btn = estilo base do botão
neon-btn = efeito neon
BOTÃO CONTATO
<a href="contato.html" class="btn glass-btn">

Explicação:

Botão que leva para contato.

glass-btn provavelmente usa efeito vidro.

</section>

Explicação:

Fecha a seção principal.

NOVA SEÇÃO
<section class="section">

Explicação:

Cria outra parte do site.

TÍTULO DA SEÇÃO
<div class="section-title">
<h2>Tecnologias do Futuro</h2>

Explicação:

h2 cria um subtítulo importante.

CARDS
<div class="cards">

Explicação:

Caixa que organiza os cards.

CARD
<div class="feature-card">

Explicação:

Cria um card de informação.

<h3>Inteligência Artificial</h3>

Explicação:

Título do card.

<p>
Sistemas inteligentes...
</p>

Explicação:

Descrição do card.

Os outros cards funcionam da mesma forma:

automação
segurança
BOTÃO WHATSAPP
<a href="https://wa.me/5511999999999"

Explicação:

Abre o WhatsApp.

class="whatsapp-btn"

Explicação:

Classe usada para estilizar o botão.

target="_blank">

Explicação:

Abre em nova aba.

<span>💬</span>

Explicação:

Mostra o símbolo do botão.

RODAPÉ
<footer class="footer">

Explicação:

Parte final do site.

© 2026 InnoWave

Explicação:

Texto do rodapé.

JAVASCRIPT
<script src="script.js"></script>

Explicação:

Conecta o JavaScript ao HTML.

JavaScript controla:

animações
relógio
interações
efeitos
FINAL
</body>
</html>

Explicação:

Fecha o corpo e termina o HTML.

RESUMO

HTML:
estrutura do site.

CSS:
aparência do site.

JavaScript:
funcionalidades e interações.














CONTATO.HTML;

COISAS NOVAS DESSE HTML
FORMULÁRIO
<form class="contact-form"
      onsubmit="return validarFormulario(this)">

Explicação:

form cria um formulário.

Formulários servem para:

login
cadastro
contato
envio de dados
ONSUBMIT
onsubmit="return validarFormulario(this)"

Explicação:

Executa uma função JavaScript quando o formulário for enviado.

VALIDARFORMULARIO
validarFormulario(this)

Explicação:

Chama uma função chamada:

validarFormulario

Essa função provavelmente verifica:

se os campos estão vazios
se o email está correto
se tudo foi preenchido
THIS
this

Explicação:

this representa o próprio formulário atual.

RETURN
return

Explicação:

Retorna um valor.

No formulário:

true → envia
false → bloqueia
INPUT
<input type="text">

Explicação:

input cria um campo para digitar.

TYPE="TEXT"
type="text"

Explicação:

Aceita texto normal.

Exemplo:

nome
cidade
sobrenome
PLACEHOLDER
placeholder="Seu nome"

Explicação:

Texto temporário dentro do campo.

Ele some quando o usuário começa a digitar.

TYPE="EMAIL"
<input type="email">

Explicação:

Campo específico para email.

O navegador verifica automaticamente se:

existe @
formato parece email
TEXTAREA
<textarea></textarea>

Explicação:

Campo grande de texto.

Usado para:

mensagens
comentários
descrições

Diferente do input:
permite várias linhas.

BUTTON
<button>

Explicação:

Cria um botão clicável.

ENVIAR FORMULÁRIO

Quando o botão está dentro do form,
ele envia o formulário automaticamente.

PAGE-CONTAINER
<section class="page-container">

Explicação:

Classe usada para organizar a página inteira.

Provavelmente controla:

largura
espaçamento
alinhamento
PAGE-TITLE
class="page-title"

Explicação:

Classe usada para estilizar o título da página.

CONTACT-FORM
class="contact-form"

Explicação:

Classe usada para estilizar o formulário.

Provavelmente altera:

tamanho dos campos
bordas
espaçamento
cores












AVALIACOES.HTML



# COMEÇO DO HTML

```html id="cm5b1n"
<!DOCTYPE html>
```

Explicação:

Informa ao navegador que o site usa HTML5.

---

```html id="gv0xqs"
<html lang="pt-BR">
```

Explicação:

Começa o documento HTML.

`lang="pt-BR"` define o idioma como português do Brasil.

---

# HEAD

```html id="g2sygr"
<head>
```

Explicação:

Área de configurações invisíveis do site.

---

```html id="j3brtr"
<meta charset="UTF-8">
```

Explicação:

Permite usar:

* acentos
* ç
* caracteres especiais

---

```html id="6pmhsh"
<meta name="viewport"
      content="width=device-width, initial-scale=1.0">
```

Explicação:

Faz o site funcionar corretamente em celulares.

---

```html id="qz6q6t"
<title>Avaliações - InnoWave</title>
```

Explicação:

Nome da aba do navegador.

---

# CSS

```html id="d3qj93"
<link rel="stylesheet"
      href="style.css">
```

Explicação:

Conecta o CSS ao HTML.

O CSS controla:

* aparência
* cores
* fontes
* animações
* layout

---

```html id="2s3z5p"
</head>
```

Explicação:

Fecha o HEAD.

---

# BODY

```html id="5sr0pi"
<body>
```

Explicação:

Tudo que aparece no site fica dentro do BODY.

---

# FUNDO

```html id="xg6sjf"
<div class="binary-bg"></div>
```

Explicação:

Cria um fundo tecnológico.

A aparência vem do CSS.

---

# HEADER

```html id="k8ok1l"
<header class="topbar">
```

Explicação:

Cria a barra superior do site.

---

# LOGO

```html id="9k42ns"
<div class="logo">
```

Explicação:

Caixa da logo.

---

```html id="dd70ya"
<span>INNO</span>WAVE
```

Explicação:

`span` altera apenas parte do texto.

Exemplo:

* INNO com uma cor
* WAVE com outra

---

# MENU

```html id="vb6pr9"
<nav class="menu">
```

Explicação:

Área de navegação do site.

---

# LINKS

```html id="lf2f63"
<a href="inicio.html"
   class="nav-link">
```

Explicação:

Cria um link.

`href` define para onde vai.

`class="nav-link"` aplica estilo CSS.

---

# ACTIVE

```html id="tlnddk"
class="nav-link active"
```

Explicação:

`active` mostra qual página está aberta atualmente.

Nesse caso:
Avaliações.

---

# RELÓGIO

```html id="z0kh2m"
<div class="relogio"></div>
```

Explicação:

Caixa onde o JavaScript provavelmente mostra a hora.

---

```html id="ej1q5l"
</header>
```

Explicação:

Fecha o cabeçalho.

---

# SECTION

```html id="npz0lk"
<section class="page-container">
```

Explicação:

Cria a área principal da página.

---

# TÍTULO

```html id="9gs96u"
<h1 class="page-title">
```

Explicação:

`h1` é o título principal da página.

---

```html id="k8fr1q"
Avaliações de Clientes
```

Explicação:

Texto do título.

---

# CONTAINER DAS AVALIAÇÕES

```html id="c87x5n"
<div id="avaliacoes"
     class="review-container">
```

Explicação:

Container que guarda todas as avaliações.

---

# ID

```html id="e7jlwm"
id="avaliacoes"
```

Explicação:

Identificador único.

JavaScript pode usar esse ID para adicionar novas avaliações.

---

# REVIEW-CARD

```html id="0zhgq5"
<div class="review-card">
```

Explicação:

Cria um card individual de avaliação.

---

# STARS

```html id="ljlwm3"
<div class="stars">
★★★★★
</div>
```

Explicação:

Mostra as estrelas da nota.

---

# H3

```html id="xtul3p"
<h3>
TechSolutions LTDA
</h3>
```

Explicação:

Título menor.

Mostra o nome da empresa.

---

# P

```html id="z3w8y4"
<p>
“A InnoWave automatizou completamente nossos processos internos.”
</p>
```

Explicação:

Parágrafo da avaliação.

---

# SPAN

```html id="rl4b1j"
<span class="review-user">
```

Explicação:

Mostra o cargo da pessoa.

---

```html id="n3oy6u"
— Diretor Executivo
```

Explicação:

Texto do cargo.

---

# SEGUNDO CARD

```html id="d4q99x"
<div class="review-card">
```

Explicação:

Outro card de avaliação.

Funciona igual ao primeiro.

---

# SECTION-TITLE

```html id="1f74gw"
<div class="section-title margin-top">
```

Explicação:

Título da nova seção.

`margin-top` adiciona espaço acima.

---

# H2

```html id="otmqv5"
<h2>
Faça Sua Avaliação
</h2>
```

Explicação:

Subtítulo da página.

---

# FORM

```html id="b58c25"
<form class="contact-form"
      onsubmit="return enviarAvaliacao(this)">
```

Explicação:

Cria o formulário de avaliação.

---

# ONSUBMIT

```html id="7zvq0n"
onsubmit="return enviarAvaliacao(this)"
```

Explicação:

Quando enviar:
executa a função JavaScript:

```javascript id="4uc8mx"
enviarAvaliacao()
```

---

# INPUT NOME

```html id="v33mj0"
<input type="text"
       id="nome"
       placeholder="Seu nome"
       required>
```

Explicação:

Campo para digitar nome.

---

# TYPE="TEXT"

```html id="5g2n2h"
type="text"
```

Explicação:

Aceita texto comum.

---

# PLACEHOLDER

```html id="b1vnjd"
placeholder="Seu nome"
```

Explicação:

Texto temporário dentro do campo.

---

# REQUIRED

```html id="dxx33w"
required
```

Explicação:

Campo obrigatório.

---

# INPUT EMPRESA

```html id="jlwmam"
<input type="text"
       id="empresa"
```

Explicação:

Campo para nome da empresa.

---

# SELECT

```html id="ztlb4w"
<select class="rating-select"
        id="nota"
        required>
```

Explicação:

Cria uma lista de opções.

---

# OPTION

```html id="yyqf4i"
<option value="">
Escolha a nota
</option>
```

Explicação:

Primeira opção do select.

---

# VALUE

```html id="rw1kh6"
value="★★★★★"
```

Explicação:

Valor salvo quando o usuário escolhe essa opção.

---

# TEXTAREA

```html id="g0mng6"
<textarea id="mensagem"
          placeholder="Digite sua avaliação..."
          required></textarea>
```

Explicação:

Campo grande para escrever a avaliação.

---

# BUTTON

```html id="6hkr5r"
<button class="btn neon-btn">
```

Explicação:

Botão de enviar avaliação.

---

# CLASSES DO BOTÃO

```html id="r6oqm3"
btn neon-btn
```

Explicação:

* `btn` = estilo base
* `neon-btn` = efeito neon

---

# FOOTER

```html id="2d1v5q"
<footer class="footer">
```

Explicação:

Rodapé do site.

---

```html id="q7gw7m"
© 2026 InnoWave
```

Explicação:

Texto do rodapé.

---

# WHATSAPP

```html id="w1n1ga"
<a href="https://wa.me/5511999999999"
```

Explicação:

Abre conversa no WhatsApp.

---

# TARGET

```html id="0l5frx"
target="_blank"
```

Explicação:

Abre em nova aba.

---

# JAVASCRIPT

```html id="z6w1i8"
<script src="script.js"></script>
```

Explicação:

Conecta o JavaScript ao HTML.

JavaScript pode:

* adicionar avaliações
* atualizar relógio
* criar animações
* validar formulário

---

# FINAL

```html id="7zjlwm"
</body>
</html>
```

Explicação:

Fecha o BODY e termina o HTML.








SOBRE.HTML;
# COMEÇO DO HTML

```html id="zru9gv"
<!DOCTYPE html>
```

Explicação:

Define que o site usa HTML5.

---

```html id="n2p1m8"
<html lang="pt-BR">
```

Explicação:

Inicia o HTML.

`lang="pt-BR"` define o idioma como português do Brasil.

---

# HEAD

```html id="w4l0h2"
<head>
```

Explicação:

Parte de configurações do site.

---

```html id="x1k9d7"
<meta charset="UTF-8">
```

Explicação:

Permite usar caracteres especiais:

* ç
* acentos
* símbolos

---

```html id="l5c2qt"
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Explicação:

Adapta o site para celulares e tablets.

---

```html id="m7v3fk"
<title>Sobre - InnoWave</title>
```

Explicação:

Nome da aba do navegador.

---

# CSS

```html id="p8d0wy"
<link rel="stylesheet" href="style.css">
```

Explicação:

Conecta o CSS ao HTML.

O CSS controla:

* cores
* layout
* animações
* aparência

---

```html id="f4k7zs"
</head>
```

Explicação:

Fecha o HEAD.

---

# BODY

```html id="q2t6xc"
<body>
```

Explicação:

Tudo que aparece visualmente fica dentro do BODY.

---

# FUNDO

```html id="c1m8ar"
<div class="binary-bg"></div>
```

Explicação:

Cria um fundo tecnológico.

A classe `binary-bg` provavelmente adiciona:

* animações
* efeitos futuristas
* fundo digital

---

# HEADER

```html id="u5j9bn"
<header class="topbar">
```

Explicação:

Cria o cabeçalho superior do site.

---

# LOGO

```html id="e6x0hp"
<div class="logo">
```

Explicação:

Caixa da logo.

---

```html id="k8q3lo"
<span>INNO</span>WAVE
```

Explicação:

`span` altera apenas parte do texto.

Exemplo:

* INNO com destaque
* WAVE com outro estilo

---

# MENU

```html id="r3v7mf"
<nav class="menu">
```

Explicação:

Área de navegação do site.

---

# LINKS

```html id="b0z6qt"
<a href="inicio.html" class="nav-link">
```

Explicação:

Cria um link clicável.

`href` define para onde o link vai.

---

# RELÓGIO

```html id="t4y2xn"
<div class="relogio"></div>
```

Explicação:

Área onde o JavaScript provavelmente mostra a hora.

---

```html id="g7f1me"
</header>
```

Explicação:

Fecha o cabeçalho.

---

# SECTION

```html id="y9u4kd"
<section class="page-container">
```

Explicação:

Cria a área principal da página.

---

# H1

```html id="d5r8pl"
<h1 class="page-title">
A História da InnoWave
</h1>
```

Explicação:

Título principal da página.

`page-title` estiliza o título com CSS.

---

# FEATURE-CARD

```html id="j2m0vx"
<div class="feature-card big-card">
```

Explicação:

Cria um card grande de conteúdo.

---

# DUAS CLASSES

```html id="o6k3fr"
class="feature-card big-card"
```

Explicação:

O elemento possui duas classes:

* `feature-card`
* `big-card`

Isso permite juntar estilos diferentes.

---

# PARÁGRAFOS

```html id="a8w1tn"
<p>
...
</p>
```

Explicação:

Cria blocos de texto.

Cada `<p>` representa um parágrafo.

---

# TEXTO SOBRE A EMPRESA

Os parágrafos explicam:

* origem da empresa
* missão
* significado do nome
* tecnologias usadas
* objetivos da empresa

---

# NOME INNOWAVE

```html id="s4c7xp"
“Inno”
```

Explicação:

Vem de inovação.

---

```html id="l1d9mb"
“Wave”
```

Explicação:

Significa onda.

Representa:
“nova onda tecnológica”.

---

# WHATSAPP

```html id="n6f2qy"
<a href="https://wa.me/5511999999999"
```

Explicação:

Cria botão que abre conversa no WhatsApp.

---

# TARGET BLANK

```html id="h8k5wr"
target="_blank"
```

Explicação:

Abre o WhatsApp em nova aba.

---

# SPAN

```html id="p3v1zu"
<span>💬</span>
```

Explicação:

Mostra o símbolo do botão.

---

# FOOTER

```html id="x7m4jd"
<footer class="footer">
```

Explicação:

Cria o rodapé do site.

---

```html id="q9r2fc"
© 2026 InnoWave
```

Explicação:

Texto do rodapé.

---

# JAVASCRIPT

```html id="w1t8kn"
<script src="script.js"></script>
```

Explicação:

Conecta o JavaScript ao HTML.

O JavaScript pode controlar:

* relógio
* animações
* efeitos
* interações

---

# FINAL

```html id="v5n7lp"
</body>
</html>
```

Explicação:

Fecha o BODY e termina o documento HTML.




SERVICOS.HTML


# COMEÇO DO HTML

```html id="j7m2xp"
<!DOCTYPE html>
```

Explicação:

Define que o documento usa HTML5.

---

```html id="k4t8nv"
<html lang="pt-BR">
```

Explicação:

Inicia o HTML.

`lang="pt-BR"` define o idioma como português do Brasil.

---

# HEAD

```html id="z6p1fr"
<head>
```

Explicação:

Área de configurações do site.

---

```html id="u8c3yw"
<meta charset="UTF-8">
```

Explicação:

Permite usar:

* acentos
* ç
* caracteres especiais

---

```html id="x2r7md"
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Explicação:

Faz o site funcionar corretamente em celulares.

---

```html id="p9v5lt"
<title>Serviços - InnoWave</title>
```

Explicação:

Define o nome da aba do navegador.

---

# CSS

```html id="n4q8he"
<link rel="stylesheet" href="style.css">
```

Explicação:

Conecta o CSS ao HTML.

---

```html id="c1k6bz"
</head>
```

Explicação:

Fecha o HEAD.

---

# BODY

```html id="d7m0xq"
<body>
```

Explicação:

Tudo que aparece no site fica dentro do BODY.

---

# FUNDO

```html id="s5t9wr"
<div class="binary-bg"></div>
```

Explicação:

Cria o fundo tecnológico do site.

---

# HEADER

```html id="q8n3vu"
<header class="topbar">
```

Explicação:

Cria a barra superior do site.

---

# LOGO

```html id="y1p7lc"
<div class="logo">
```

Explicação:

Caixa da logo.

---

```html id="h6w2ft"
<span>INNO</span>WAVE
```

Explicação:

`span` altera apenas parte do texto.

---

# MENU

```html id="b4r9mx"
<nav class="menu">
```

Explicação:

Área de navegação.

---

# LINKS

```html id="t7k5zs"
<a href="inicio.html" class="nav-link">
```

Explicação:

Cria links clicáveis para outras páginas.

---

# RELÓGIO

```html id="m3v8qn"
<div class="relogio"></div>
```

Explicação:

Área onde o JavaScript provavelmente mostra a hora.

---

```html id="r9p4wy"
</header>
```

Explicação:

Fecha o cabeçalho.

---

# SECTION PRINCIPAL

```html id="f2k7xd"
<section class="page-container">
```

Explicação:

Cria a área principal da página.

---

# TÍTULO

```html id="w5m1cv"
<h1 class="page-title">
Nossos Serviços
</h1>
```

Explicação:

Título principal da página.

---

# CARDS

```html id="u3n8qt"
<div class="cards">
```

Explicação:

Container que organiza todos os cards de serviços.

---

# COMENTÁRIOS HTML

```html id="a7r4lz"
<!-- IA -->
```

Explicação:

Comentário usado apenas para organização.

O navegador ignora.

---

# FEATURE-CARD + SERVICE-CARD

```html id="v6p9mw"
<div class="feature-card service-card">
```

Explicação:

Cria um card de serviço.

O elemento possui duas classes:

* `feature-card`
* `service-card`

---

# IMG

```html id="g2x5tn"
<img src="..."
     alt="Inteligência Artificial">
```

Explicação:

Mostra uma imagem.

---

# SRC

```html id="n8w3qy"
src="https://..."
```

Explicação:

Define o endereço da imagem.

---

# ALT

```html id="k1m7vp"
alt="Inteligência Artificial"
```

Explicação:

Texto alternativo da imagem.

Serve para:

* acessibilidade
* SEO
* caso a imagem não carregue

---

# SERVICE-CONTENT

```html id="c4t8zr"
<div class="service-content">
```

Explicação:

Caixa que guarda:

* título
* descrição do serviço

---

# H3

```html id="x9p2lv"
<h3>Inteligência Artificial</h3>
```

Explicação:

Título menor do card.

---

# P

```html id="m5w6qn"
<p>
Desenvolvimento de soluções inteligentes...
</p>
```

Explicação:

Descrição do serviço.

---

# OUTROS CARDS

Os próximos cards funcionam exatamente igual.

Mudam apenas:

* imagem
* título
* descrição

---

# SERVIÇOS MOSTRADOS

## AUTOMAÇÃO

```html id="q3r7ty"
Automação Empresarial
```

Explicação:

Automatiza tarefas repetitivas.

---

## CYBER SECURITY

```html id="w8n4pl"
Cyber Security
```

Explicação:

Segurança digital.

---

## CLOUD COMPUTING

```html id="t1v9mk"
Cloud Computing
```

Explicação:

Serviços em nuvem.

---

## DESENVOLVIMENTO WEB

```html id="f7x2zc"
Desenvolvimento Web
```

Explicação:

Criação de sites e sistemas web.

---

## BIG DATA

```html id="n6m8qr"
Big Data & Analytics
```

Explicação:

Análise de grandes volumes de dados.

---

## CHATBOTS

```html id="u4w1kp"
Chatbots Inteligentes
```

Explicação:

Bots automáticos com IA.

---

## INFRAESTRUTURA

```html id="y9t5vn"
Infraestrutura Tecnológica
```

Explicação:

Servidores, redes e sistemas corporativos.

---

# FECHAMENTO DOS CARDS

```html id="p2r8lx"
</div>
```

Explicação:

Fecha os containers dos cards.

---

# WHATSAPP

```html id="c8n3qt"
<a href="https://wa.me/5518999999999"
```

Explicação:

Abre conversa no WhatsApp.

---

# TARGET BLANK

```html id="m7v1zr"
target="_blank"
```

Explicação:

Abre em nova aba.

---

# EMOJI

```html id="x5p9wk"
💬
```

Explicação:

Ícone visual do botão.

---

# FOOTER

```html id="d3t6qy"
<footer class="footer">
```

Explicação:

Rodapé do site.

---

```html id="f8m2vn"
© 2026 InnoWave
```

Explicação:

Texto do rodapé.

---

# JAVASCRIPT

```html id="z1w7pk"
<script src="script.js"></script>
```

Explicação:

Conecta o JavaScript ao HTML.

JavaScript pode controlar:

* relógio
* animações
* interações
* efeitos

---

# FINAL

```html id="r4n8tx"
</body>
</html>
```

Explicação:

Fecha o BODY e termina o HTML.




JAVA SCRIPT



# RELÓGIO

```javascript id="g1r8mk"
function atualizarRelogio() {
```

Explicação:

Cria uma função chamada:

```javascript id="d5x2pt"
atualizarRelogio
```

Função = bloco de código reutilizável.

---

# NEW DATE

```javascript id="v7m4qc"
const agora = new Date();
```

Explicação:

Pega:

* data atual
* hora atual do computador

---

# CONST

```javascript id="k9p1zs"
const
```

Explicação:

Cria uma variável que não pode ser alterada.

---

# GETHOURS

```javascript id="m3w8tx"
agora.getHours()
```

Explicação:

Pega as horas atuais.

Exemplo:
14

---

# GETMINUTES

```javascript id="u6r2fy"
agora.getMinutes()
```

Explicação:

Pega os minutos atuais.

---

# GETSECONDS

```javascript id="b1n7qd"
agora.getSeconds()
```

Explicação:

Pega os segundos atuais.

---

# STRING

```javascript id="x4v9pk"
String()
```

Explicação:

Transforma valor em texto.

---

# PADSTART

```javascript id="t8m5zr"
padStart(2, '0')
```

Explicação:

Completa números com zero.

Exemplo:

* 5 vira 05
* 9 vira 09

---

# TEMPLATE STRING

```javascript id="q2r6wx"
`${horas}:${minutos}:${segundos}`
```

Explicação:

Junta variáveis dentro de texto.

Resultado:

```javascript id="j7k3vn"
14:32:09
```

---

# QUERYSELECTORALL

```javascript id="p4x8tm"
document.querySelectorAll('.relogio')
```

Explicação:

Procura todos elementos com classe:

```javascript id="n6w1qy"
.relogio
```

---

# FOREACH

```javascript id="r9m2vc"
forEach(rel => {
```

Explicação:

Repete para cada elemento encontrado.

---

# INNERHTML

```javascript id="f5t7pk"
rel.innerHTML
```

Explicação:

Altera o HTML interno do elemento.

---

# SETINTERVAL

```javascript id="y1v4zn"
setInterval(atualizarRelogio, 1000);
```

Explicação:

Executa a função a cada:
1000 milissegundos = 1 segundo.

---

# MENU ATIVO

```javascript id="l8m3qx"
function marcarLinkAtivo() {
```

Explicação:

Função que marca qual página está aberta.

---

# WINDOW.LOCATION

```javascript id="d2t9wk"
window.location.pathname
```

Explicação:

Pega o endereço atual da página.

---

# SPLIT

```javascript id="c7r1pz"
split('/')
```

Explicação:

Divide texto usando `/`.

---

# POP

```javascript id="m5v8qt"
pop()
```

Explicação:

Pega o último item.

Exemplo:

```javascript id="q9x4lf"
/pasta/inicio.html
```

vira:

```javascript id="s3w7nm"
inicio.html
```

---

# CLASSLIST

```javascript id="u1r6zk"
classList
```

Explicação:

Controla classes CSS.

---

# REMOVE

```javascript id="v8p2mt"
classList.remove('active')
```

Explicação:

Remove a classe active.

---

# ADD

```javascript id="g4n9wy"
classList.add('active')
```

Explicação:

Adiciona a classe active.

---

# GETATTRIBUTE

```javascript id="h7x3qv"
getAttribute('href')
```

Explicação:

Pega o valor do atributo href.

---

# ANIMAÇÃO DOS CARDS

```javascript id="k2m8pr"
function animarAoScroll() {
```

Explicação:

Cria animação quando o usuário rola a página.

---

# INTERSECTIONOBSERVER

```javascript id="q5v1xt"
new IntersectionObserver()
```

Explicação:

Detecta quando elemento aparece na tela.

---

# ENTRIES

```javascript id="p8w4zn"
entries
```

Explicação:

Lista dos elementos observados.

---

# ISINTERSECTING

```javascript id="x3m7qt"
entry.isIntersecting
```

Explicação:

Verifica se o elemento apareceu na tela.

---

# STYLE

```javascript id="n1v5pk"
style.opacity
```

Explicação:

Muda transparência.

---

# OPACITY

```javascript id="z6t2wr"
opacity = '1'
```

Explicação:

Elemento totalmente visível.

---

# TRANSLATEY

```javascript id="j9r4qx"
translateY(40px)
```

Explicação:

Move elemento no eixo vertical.

---

# TRANSITION

```javascript id="u4m8zn"
transition = 'all 0.8s ease'
```

Explicação:

Cria animação suave.

---

# THRESHOLD

```javascript id="y7p3wk"
threshold:0.2
```

Explicação:

A animação ativa quando 20% do elemento aparece.

---

# PARTÍCULAS

```javascript id="m2v6qt"
function criarParticulas() {
```

Explicação:

Função que cria partículas animadas.

---

# QUERYSELECTOR

```javascript id="w5x1pr"
document.querySelector('.hero-bg')
```

Explicação:

Pega o primeiro elemento com classe:

```javascript id="n8q4zt"
.hero-bg
```

---

# IF

```javascript id="k3m7vx"
if(!hero) return;
```

Explicação:

Se o elemento não existir:
a função para.

---

# FOR

```javascript id="c6t2wp"
for(let i = 0; i < 80; i++)
```

Explicação:

Repete 80 vezes.

---

# LET

```javascript id="p1v9qk"
let
```

Explicação:

Cria variável que pode mudar.

---

# CREATEELEMENT

```javascript id="x8m4zr"
document.createElement('div')
```

Explicação:

Cria uma nova div pelo JavaScript.

---

# CLASSNAME

```javascript id="g5t1qn"
particula.className = 'particula'
```

Explicação:

Adiciona classe CSS ao elemento.

---

# MATH.RANDOM

```javascript id="v2w8pk"
Math.random()
```

Explicação:

Gera número aleatório.

---

# APPENDCHILD

```javascript id="j4m6qt"
hero.appendChild(particula)
```

Explicação:

Adiciona a partícula dentro do elemento hero.

---

# CREATEELEMENT STYLE

```javascript id="u9p3wr"
document.createElement('style')
```

Explicação:

Cria CSS pelo JavaScript.

---

# KEYFRAMES

```javascript id="z1m7qx"
@keyframes flutuar
```

Explicação:

Cria animação CSS.

---

# POINTER-EVENTS

```javascript id="n4v2pk"
pointer-events:none;
```

Explicação:

Impede partículas de atrapalharem cliques.

---

# ENVIAR AVALIAÇÃO

```javascript id="f8t5wr"
function enviarAvaliacao(form){
```

Explicação:

Função que envia avaliação.

---

# GETELEMENTBYID

```javascript id="k6m1qt"
document.getElementById('nome')
```

Explicação:

Pega elemento pelo ID.

---

# VALUE

```javascript id="q3v8pk"
nome.value
```

Explicação:

Pega o valor digitado.

---

# TRIM

```javascript id="x7m4wr"
trim()
```

Explicação:

Remove espaços vazios.

---

# ALERT

```javascript id="u2p9qt"
alert()
```

Explicação:

Mostra mensagem na tela.

---

# RETURN FALSE

```javascript id="n5v1pk"
return false;
```

Explicação:

Impede o formulário de recarregar a página.

---

# PREPEND

```javascript id="j8m6wr"
container.prepend(card)
```

Explicação:

Adiciona elemento no começo.

---

# SETTIMEOUT

```javascript id="p4v2qt"
setTimeout(() => {
```

Explicação:

Executa algo depois de um tempo.

---

# RESET

```javascript id="y9m5pk"
form.reset()
```

Explicação:

Limpa o formulário.

---

# SMOOTH SCROLL

```javascript id="w1v8qt"
scrollIntoView({
behavior:'smooth'
})
```

Explicação:

Faz rolagem suave até elemento.

---

# PREVENTDEFAULT

```javascript id="x6m3wr"
e.preventDefault()
```

Explicação:

Impede comportamento padrão do link.

---

# WINDOW.ONLOAD

```javascript id="q2v7pk"
window.onload = () => {
```

Explicação:

Executa código quando o site termina de carregar.

---

# CONSOLE.LOG

```javascript id="m8t4wr"
console.log()
```

Explicação:

Mostra mensagem no console do navegador.

---

# %C

```javascript id="z5v1qt"
'%c✅ InnoWave carregado!'
```

Explicação:

Permite estilizar mensagem do console.

---

# RESUMO

Esse JavaScript controla:

* relógio
* menu ativo
* animações
* partículas
* avaliações
* scroll suave
* efeitos visuais
* interações do site







STYLE.CSS




# IMPORTAÇÃO DE FONTE

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
```

Explicação:

Importa a fonte Orbitron do Google Fonts.

---

# SELETOR UNIVERSAL

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
```

Explicação:

`*` seleciona TODOS os elementos.

---

# MARGIN

```css
margin:0;
```

Explicação:

Remove espaços externos.

---

# PADDING

```css
padding:0;
```

Explicação:

Remove espaços internos.

---

# BOX-SIZING

```css
box-sizing:border-box;
```

Explicação:

Faz largura e altura incluírem padding e borda.

Facilita o layout.

---

# BODY

```css
body{
```

Explicação:

Estiliza o corpo do site.

---

# FONT-FAMILY

```css
font-family:'Orbitron', sans-serif;
```

Explicação:

Define a fonte principal do site.

---

# BACKGROUND

```css
background:#050816;
```

Explicação:

Cor de fundo escura.

---

# COLOR

```css
color:#fff;
```

Explicação:

Cor padrão do texto = branco.

---

# OVERFLOW-X

```css
overflow-x:hidden;
```

Explicação:

Impede rolagem horizontal.

---

# FUNDO BINÁRIO

```css
.binary-bg{
```

Explicação:

Classe do fundo tecnológico.

---

# POSITION FIXED

```css
position:fixed;
```

Explicação:

Elemento fica preso na tela.

---

# TOP E LEFT

```css
top:0;
left:0;
```

Explicação:

Posiciona no canto superior esquerdo.

---

# WIDTH E HEIGHT

```css
width:100%;
height:100%;
```

Explicação:

Ocupa a tela inteira.

---

# Z-INDEX

```css
z-index:-1;
```

Explicação:

Coloca o fundo atrás dos elementos.

---

# OVERFLOW

```css
overflow:hidden;
```

Explicação:

Esconde partes que ultrapassam.

---

# RADIAL-GRADIENT

```css
radial-gradient(
    circle at center,
    #06131f,
    #02040a 70%
);
```

Explicação:

Cria degradê circular.

---

# KEYFRAMES

```css
@keyframes matrixMove
```

Explicação:

Cria animação chamada:
matrixMove

---

# TRANSFORM

```css
transform:
translateY(-50%)
rotate(-12deg);
```

Explicação:

Move e gira elemento.

---

# HEADER

```css
.topbar{
```

Explicação:

Barra superior do site.

---

# DISPLAY FLEX

```css
display:flex;
```

Explicação:

Organiza elementos lado a lado.

---

# JUSTIFY-CONTENT

```css
justify-content:space-between;
```

Explicação:

Cria espaço entre elementos.

---

# ALIGN-ITEMS

```css
align-items:center;
```

Explicação:

Centraliza verticalmente.

---

# BORDER-BOTTOM

```css
border-bottom:1px solid #00f5ff33;
```

Explicação:

Linha inferior.

---

# BACKDROP-FILTER

```css
backdrop-filter:blur(10px);
```

Explicação:

Aplica desfoque no fundo.

---

# POSITION STICKY

```css
position:sticky;
```

Explicação:

Header fica grudado no topo.

---

# LOGO

```css
.logo{
```

Explicação:

Estilo da logo.

---

# MENU

```css
.menu{
```

Explicação:

Área dos links.

---

# GAP

```css
gap:25px;
```

Explicação:

Espaço entre elementos.

---

# TEXT-DECORATION

```css
text-decoration:none;
```

Explicação:

Remove sublinhado dos links.

---

# HOVER

```css
.menu a:hover
```

Explicação:

Estilo quando mouse passa em cima.

---

# TEXT-SHADOW

```css
text-shadow:0 0 10px #00f5ff;
```

Explicação:

Cria brilho no texto.

---

# RELÓGIO

```css
.relogio{
```

Explicação:

Estilo do relógio.

---

# BORDER-RADIUS

```css
border-radius:15px;
```

Explicação:

Arredonda cantos.

---

# BOX-SHADOW

```css
box-shadow:
0 0 10px #00f5ff;
```

Explicação:

Cria brilho neon.

---

# INSET

```css
inset 0 0 10px #00f5ff;
```

Explicação:

Brilho interno.

---

# HERO

```css
.hero{
```

Explicação:

Seção principal do site.

---

# MIN-HEIGHT

```css
min-height:90vh;
```

Explicação:

Altura mínima:
90% da tela.

---

# TEXT-ALIGN

```css
text-align:center;
```

Explicação:

Centraliza texto.

---

# HERO-CONTENT

```css
.hero-content{
```

Explicação:

Caixa do conteúdo principal.

---

# MAX-WIDTH

```css
max-width:900px;
```

Explicação:

Largura máxima.

---

# FONT-SIZE

```css
font-size:65px;
```

Explicação:

Tamanho da fonte.

---

# LINE-HEIGHT

```css
line-height:1.8;
```

Explicação:

Espaçamento entre linhas.

---

# BOTÕES

```css
.hero-buttons{
```

Explicação:

Área dos botões.

---

# FLEX-WRAP

```css
flex-wrap:wrap;
```

Explicação:

Quebra linha se faltar espaço.

---

# BTN

```css
.btn{
```

Explicação:

Estilo base dos botões.

---

# CURSOR

```css
cursor:pointer;
```

Explicação:

Cursor vira mãozinha.

---

# NEON-BTN

```css
.neon-btn{
```

Explicação:

Botão neon.

---

# SCALE

```css
scale(1.05);
```

Explicação:

Aumenta tamanho.

---

# GLASS-BTN

```css
.glass-btn{
```

Explicação:

Botão transparente.

---

# SECTIONS

```css
.section,
.page-container{
```

Explicação:

Define espaçamento das seções.

---

# GRID

```css
display:grid;
```

Explicação:

Cria layout em grade.

---

# GRID-TEMPLATE-COLUMNS

```css
grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));
```

Explicação:

Cria colunas automáticas responsivas.

---

# FEATURE-CARD

```css
.feature-card{
```

Explicação:

Card futurista.

---

# POSITION RELATIVE

```css
position:relative;
```

Explicação:

Permite posicionar elementos internos.

---

# BEFORE

```css
.feature-card::before
```

Explicação:

Cria elemento antes do conteúdo.

---

# CONTENT

```css
content:'';
```

Explicação:

Obrigatório no ::before.

---

# HOVER CARD

```css
.feature-card:hover
```

Explicação:

Efeito ao passar mouse.

---

# FORMULÁRIO

```css
.contact-form{
```

Explicação:

Estilo do formulário.

---

# FLEX-DIRECTION

```css
flex-direction:column;
```

Explicação:

Organiza itens em coluna.

---

# OUTLINE

```css
outline:none;
```

Explicação:

Remove borda padrão ao clicar.

---

# RESIZE

```css
resize:none;
```

Explicação:

Impede redimensionar textarea.

---

# FOOTER

```css
.footer{
```

Explicação:

Rodapé do site.

---

# MEDIA QUERY

```css
@media(max-width:900px)
```

Explicação:

CSS aplicado em telas pequenas.

---

# FLEX-DIRECTION COLUMN

```css
flex-direction:column;
```

Explicação:

Empilha elementos verticalmente.

---

# REVIEW-CONTAINER

```css
.review-container{
```

Explicação:

Container das avaliações.

---

# REVIEW-CARD

```css
.review-card{
```

Explicação:

Card individual da avaliação.

---

# LINEAR-GRADIENT

```css
linear-gradient(
135deg,
#0d111f,
#08111d
);
```

Explicação:

Cria degradê diagonal.

---

# STARS

```css
.stars{
```

Explicação:

Estilo das estrelas.

---

# DISPLAY BLOCK

```css
display:block;
```

Explicação:

Elemento ocupa linha inteira.

---

# SELECT

```css
.rating-select{
```

Explicação:

Estilo do campo select.

---

# SERVICE-CARD

```css
.service-card{
```

Explicação:

Card de serviços com imagem.

---

# OBJECT-FIT

```css
object-fit:cover;
```

Explicação:

Imagem preenche espaço sem deformar.

---

# FILTER

```css
filter:
brightness(1.2);
```

Explicação:

Aumenta brilho da imagem.

---

# WHATSAPP BUTTON

```css
.whatsapp-btn{
```

Explicação:

Botão flutuante do WhatsApp.

---

# POSITION FIXED

```css
position:fixed;
```

Explicação:

Botão fica preso na tela.

---

# BORDER-RADIUS 50%

```css
border-radius:50%;
```

Explicação:

Transforma em círculo.

---

# ANIMATION

```css
animation:
pulseWhats 2s infinite,
floatWhats 4s ease-in-out infinite;
```

Explicação:

Aplica duas animações infinitas.

---

# PULSEWHATS

```css
@keyframes pulseWhats
```

Explicação:

Animação de pulsação.

---

# FLOATWHATS

```css
@keyframes floatWhats
```

Explicação:

Animação flutuando para cima e baixo.
