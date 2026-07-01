# Nexus Vital — Landing Page Premium

## 📋 Objetivo do Projeto

Landing page premium desenvolvida para apresentar o método **Nexus Vital**, uma consultoria voltada para pessoas com fibromialgia. O design foi pensado para transmitir confiança, acolhimento e profissionalismo, com visual limpo e sofisticado.

**Importante:** Este é um protótipo visual. Os textos são meramente ilustrativos e não constituem promessas de cura ou resultados garantidos.

## 📁 Estrutura de Pastas
/
├── index.html # Estrutura completa da landing page
├── style.css # Estilos (design system, layout, responsividade, animações)
├── script.js # Interações (menu mobile, scroll reveal, FAQ accordion, scroll suave)
├── README.md # Documentação do projeto
│
├── assets/
│ ├── images/ # Imagens e ilustrações
│ ├── icons/ # Ícones personalizados (SVG)
│ └── fonts/ # Fontes locais (caso não use CDN)

text

## 🛠 Tecnologias Utilizadas

- **HTML5** semântico e acessível
- **CSS3** com Custom Properties, Flexbox, Grid, Glassmorphism, Animações
- **JavaScript Vanilla** (sem frameworks ou bibliotecas)
- **Phosphor Icons** (CDN leve para ícones)
- **Google Fonts** (Inter + Playfair Display)

## 🎨 Design System

| Elemento         | Descrição                                         |
|------------------|---------------------------------------------------|
| Paleta           | Branco, Azul Escuro, Verde Suave, Cinza Claro     |
| Tipografia       | Inter (corpo) + Playfair Display (títulos)        |
| Estilo           | Clean, minimalista, premium, glassmorphism       |
| Animações        | Fade In, Slide Up (Intersection Observer)         |
| Responsividade   | Mobile First — celular, tablet, notebook, ultrawide |

## ✏️ Como Editar

1. **Alterar conteúdo textual:** Edite o arquivo `index.html`. As seções estão comentadas para fácil localização.
2. **Modificar cores:** As variáveis de cor estão no topo do arquivo `style.css` (bloco `:root`).
3. **Ajustar número do WhatsApp:** Substitua `+55 14 98809-5118` no HTML pelo número desejado.
4. **Adicionar imagens reais:** Substitua os placeholders pelas imagens na pasta `assets/images/`.
5. **Customizar animações:** Ajuste os parâmetros no `script.js` (threshold, rootMargin do Intersection Observer).

## 🚀 Como Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Faça upload de todos os arquivos mantendo a estrutura de pastas.
3. Vá em **Settings > Pages**.
4. Em **Source**, selecione `main` (ou a branch principal) e a pasta `/root`.
5. Clique em **Save**.
6. O site ficará disponível em `https://seuusuario.github.io/nome-do-repositorio/`.

## 📱 Preview Responsivo

O layout se adapta automaticamente para:
- 📱 Smartphones (até 640px)
- 📱 Tablets (até 1024px)
- 💻 Notebooks e desktops
- 🖥 Monitores ultrawide

## ⚠️ Avisos

- Este projeto é um **protótipo visual**.
- Textos sobre saúde são **genéricos e ilustrativos**.
- Sempre consulte um profissional de saúde para informações médicas.
