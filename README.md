# YouTube Music Home - Clone Frontend

Clone moderno, responsivo e de alta fidelidade visual da **página inicial do YouTube Music** ([music.youtube.com](https://music.youtube.com/)), desenvolvido com base na análise arquitetural e visual da plataforma (usando conceitos do repositório `REA`).

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado (v18+)

### Iniciar o Servidor Local
Na pasta `d:\Clonagem\youtubemusic`:

```bash
npm start
```
Ou diretamente:
```bash
node server.mjs
```

Acesse no navegador:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## ✨ Recursos Implementados

1. **Barra de Navegação Superior (Top Navbar)**:
   - Botão hambúrguer para expandir/recolher a barra lateral.
   - Logo oficial do YouTube Music em vetor SVG.
   - Campo de pesquisa inteligente com resultados dinâmicos em tempo real e filtro por músicas/artistas.
   - Botões de Transmitir (Cast), Notificações e Avatar de Usuário.

2. **Menu Lateral Fixo (Sidebar Drawer)**:
   - Links principais: Início (ativo), Explorar, Biblioteca e Assinar.
   - Transição suave entre modo expandido (com nomes e playlists) e modo compacto (mini-rail de ícones).
   - Seção de playlists recentes e botão para criar nova playlist.

3. **Nuvem de Chips de Humor & Gênero (Mood Chips)**:
   - Filtros: `Tudo`, `Para relaxar`, `Energia`, `Treino`, `Foco`, `Viagem`.
   - Ao clicar em um chip, as seções e cartões filtram e reorganizam o conteúdo instantaneamente com animação suave.

4. **Grade de Escolhas Rápidas (Quick Picks)**:
   - Layout em grid 4 linhas x N colunas idêntico ao YouTube Music original.
   - Miniaturas, título, artista, álbum e ações rápidas (tocar, adicionar à fila).

5. **Carrosséis de Conteúdo (Shelves)**:
   - Seções: *"Ouvir novamente"*, *"Seus mixes favoritos"* e *"Sucessos do momento"*.
   - Botões circulares para rolagem horizontal suave para a esquerda/direita.
   - Cartões com capa em alta definição, título, artista e sobreposição com botão de reproduzir ao passar o mouse.
   - Equalizador animado em tempo real no cartão que está tocando no momento.

6. **Player de Áudio Persistente (Bottom Player Bar)**:
   - Linha de progresso no topo da barra com scrubbing interativo (clique ou arraste para qualquer segundo da música).
   - Indicador de tempo decorrido e duração total (`0:00 / 3:35`).
   - Controles de reprodução: Ordem aleatória (Shuffle), Faixa anterior, Tocar/Pausar com botão circular em destaque, Próxima faixa e Repetir.
   - Botões de feedback: Curtir (Like) e Não curtir (Dislike) com notificações flutuantes (*Toast*).
   - Controle de volume com slider e botão de Mudo.

7. **Painéis Laterais Retráteis (Drawers)**:
   - **Letra da Música (Lyrics)**: Letras com sincronização de tempo tipo karaokê, destacando em tempo real a linha cantada e permitindo clicar na linha para ir direto àquele ponto da música!
   - **Fila de Reprodução (Queue)**: Exibe as próximas músicas na sequência, permitindo trocar de música com um clique.

8. **Motor de Áudio Procedural (Web Audio API)**:
   - Não depende de arquivos MP3 externos quebrados. Cada música possui progressões de acordes e frequências sintetizadas em tempo real com som ambiente suave (synthwave, lofi e chill beats).

9. **Atalhos de Teclado**:
   - `Espaço`: Tocar / Pausar
   - `Seta Direita` / `Seta Esquerda`: Avançar / Retroceder 5 segundos
   - `M`: Ativar / Desativar mudo

---

## 🎨 Paleta e Estilo (Design System)
- **Fundo**: Preto profundo `#030303` com cartões em `#212121` e superfícies elevadas `#161616`.
- **Destaque**: Vermelho assinatura `#ff0000` / `#ff3333`.
- **Efeitos**: Vidro fosco (*glassmorphism*) na barra de navegação e no player inferior com `backdrop-filter: blur(24px)`.
- **Tipografia**: Google Fonts (`Roboto` & `Inter`).
