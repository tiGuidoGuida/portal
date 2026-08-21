# AVA Hospitalar — Ambiente Virtual de Aprendizagem

Este repositório contém o código-fonte de uma plataforma moderna de **AVA (Ambiente Virtual de Aprendizagem)** corporativo, desenvolvido sob medida para uso interno de colaboradores hospitalares. 

O sistema foi estruturado com foco em altíssima usabilidade (UI/UX), acessibilidade (A11y), responsividade completa e facilidade de manutenção de dados.

---

## 🚀 Tecnologias Utilizadas

A plataforma foi construída sem dependências pesadas ou frameworks complexos para garantir carregamento instantâneo no servidor interno do hospital:

*   **HTML5 Semântico:** Estrutura robusta de marcação focada em acessibilidade.
*   **CSS3 Vanilla (Custom Properties):** Design System corporativo completo utilizando flexbox, grid e variáveis CSS para paleta de cores.
*   **JavaScript Moderno (ES6+):** Injeção dinâmica de componentes de UI (Sidebar, Faixa Institucional, Rodapé), filtros avançados de pesquisa e manipulação do player de vídeo.
*   **Lucide-like SVG Icons:** Ícones vetoriais embutidos diretamente no código, dispensando o carregamento de fontes de ícones externas.

---

## 🎨 Identidade Visual e UI/UX

*   **Cor Base:** Verde Petróleo/Turquesa Escuro (`#0b5860`), transmitindo tecnologia, saúde, higiene e profissionalismo.
*   **Acessibilidade Teclado/Leitores:** Focus trap ativo em modais e navegação por teclado fluida.
*   **Clique Amplo:** Cards inteiramente clicáveis que melhoram expressivamente a usabilidade em dispositivos móveis.
*   **Layout com Sidebar Premium:** Navegação lateral fixa no desktop que se transforma em menu off-canvas responsivo no celular.
*   **Faixa Institucional Superior:** As marcas do **Instituto Alpha** e do **Hospital** dispostas no topo absoluto de todas as páginas.

---

## 📁 Estrutura de Pastas

```
ava-project/
├── index.html                 # Painel Principal (Home)
├── recep.html                 # Setor: Recepção
├── triagem.html               # Setor: Triagem
├── med_cli.html               # Setor: Atendimento Médico
├── med.html                   # Setor: Medicação
├── emg.html                   # Setor: Emergência
├── med_inf.html               # Setor: Medicação Infantil
├── obs.html                   # Setor: Observação
├── suporte.html               # Setor: Suporte
├── README.md                  # Manual do Repositório (Este arquivo)
└── assets/
    ├── css/
    │   └── style.css          # Estilos gerais e responsividade (Design System)
    ├── js/
    │   ├── data.js            # Cadastro/Banco de dados de vídeos e setores
    │   └── app.js             # Lógica de renderização, filtros, modais e UI
    └── img/
        ├── logo-alpha.png     # Logotipo do Instituto Alpha
        └── logo-hospital.png  # Brasão/Logotipo do Hospital
```

---

## ⚙️ Como Atualizar ou Adicionar Treinamentos

Toda a exibição de cards, tags, contadores e filtros é **100% dinâmica** e controlada por dados. Para alterar os treinamentos, você **não precisa editar os arquivos HTML**.

Abra o arquivo [`assets/js/data.js`](assets/js/data.js) e altere a lista correspondente ao ID do setor. 

### Exemplo de Cadastro de Vídeo:
```javascript
{
  id: 1, // ID incremental único dentro do array
  titulo: "Atendimento Recepção", // Nome amigável que aparecerá no card
  descricao: "Treinamento prático sobre o fluxo completo de recepção.", // Resumo da aula
  categoria: "Sistemas", // Categoria para auto-gerar filtros (ex: Sistemas, Prontuário, Procedimentos)
  youtube: "https://www.youtube.com/watch?v=zmBRNFT0HVU", // Link do YouTube ou ID (zmBRNFT0HVU)
  destaque: false // Define se exibe estrela de destaque (True/False)
}
```

*   **Tratamento de Vídeos "Em Breve":** Se um treinamento ainda não tiver vídeo disponível, deixe o campo `youtube` vazio (`youtube: ""`). A plataforma mostrará automaticamente a miniatura do Instituto Alpha como placeholder e exibirá um aviso elegante ao usuário ao invés de abrir um player quebrado.

---

## 💻 Como Executar Localmente

### 1. Diretamente no Navegador (file://)
Você pode abrir o arquivo `index.html` em qualquer navegador dando dois cliques sobre ele.
*Nota: Devido a restrições do protocolo `file:///` no YouTube, a reprodução de alguns vídeos pode ser bloqueada localmente. Para testes completos de reprodução, use um servidor local conforme abaixo.*

### 2. Usando um Servidor Web Local (Recomendado)
Se você utiliza o VS Code, pode usar a extensão **Live Server**.
Se tiver o **Node.js** instalado, rode na raiz da pasta:
```bash
npx http-server -p 8080
```
Acesse `http://localhost:8080` no seu navegador.

---

## 🧑‍💻 Créditos

Desenvolvido por **Luiz Henrique**.
© 2026 Instituto Alpha & Hospital Parceiro. Todos os direitos reservados.
