# Projeto Parallax

Este é um projeto de uma página web com efeito parallax, desenvolvido utilizando HTML, CSS e JavaScript. O site apresenta múltiplas seções com fundos dinâmicos, uma música de fundo em loop (inicialmente mudo) e botões para navegação vertical.

---

## Funcionalidades

- **Efeito Parallax:** Cada seção utiliza efeitos visuais que proporcionam uma sensação de profundidade ao rolar a página.
- **Música de Fundo:** Reprodução automática e contínua de uma música. A música inicia em modo mudo para evitar reproduções inesperadas.
- **Navegação com Botões de Rolagem:** Botões interativos permitem que o usuário navegue para cima e para baixo entre as seções.

---

## Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **CSS3:** Estilização e implementação dos efeitos parallax (_arquivo: `css/style.css`_).
- **JavaScript:** Funcionalidades de interação, como a rolagem da página (_arquivo: `script/script.js`_).

---

## Estrutura do Projeto

```
Parallax/
│
├── index.html          # Arquivo principal da aplicação
├── css/
│   └── style.css       # Estilos e configurações dos efeitos parallax
├── script/
│   └── script.js       # Lógica JavaScript para funcionalidades de rolagem e interatividade
└── musica/
    └── musica.mp3      # Áudio de fundo da aplicação
```

---

## Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/parallax.git
   ```

2. **Abra o arquivo `index.html`:**

   Você pode abrir o arquivo diretamente no seu navegador ou utilizar um servidor local (por exemplo, o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VS Code) para uma melhor experiência de desenvolvimento.

---

## Personalizações

- **Áudio de Fundo:**  
  Para alterar a música, substitua o arquivo `musica/musica.mp3` ou edite o caminho no elemento `<source>` presente no `index.html`.

- **Estilos e Efeitos:**  
  Modifique o arquivo `css/style.css` para alterar o design, cores e comportamentos dos efeitos parallax.

- **Funcionalidades de Rolagem:**  
  Caso deseje ajustar a lógica dos botões de rolagem, edite o arquivo `script/script.js`.

---

## Considerações

- **Áudio Inicialmente Mudo:**  
  A música de fundo inicia em modo mudo para evitar a reprodução automática sem interação do usuário. Ajuste o atributo `muted` conforme necessário.

- **Compatibilidade:**  
  Certifique-se de que seu navegador suporta os elementos e funcionalidades utilizados (como o `<audio>`).

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Aproveite o projeto e sinta-se à vontade para adaptá-lo conforme suas necessidades!
