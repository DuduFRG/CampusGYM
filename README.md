# Campus Gym Cruz de Pau — Site Institucional

Site institucional profissional para o **Campus Gym**, ginásio localizado em Cruz de Pau, Amora, Seixal — Portugal.

## 🚀 Acesso Rápido (GitHub Pages)

Após publicar no GitHub, ativar GitHub Pages em **Settings → Pages → Deploy from branch → main → / (root)**.

O site ficará disponível em:
```
https://[seu-usuario].github.io/campus-gym/
```

---

## 📁 Estrutura de Ficheiros

```
campus-gym/
├── index.html          # Página principal (one-page)
├── css/
│   └── style.css       # Todos os estilos
├── js/
│   └── main.js         # Animações, cursor, contador, formulário
├── images/
│   └── logo.png        # Logo do Campus Gym (adicionar manualmente)
└── README.md
```

---

## 🖼️ Como Adicionar o Logo

1. Coloque o ficheiro `logo.png` do Campus Gym na pasta `images/`
2. O HTML já aponta para `images/logo.png`
3. Recomendação: fundo transparente (PNG), mínimo 200×200px

---

## ✅ Funcionalidades

- **SEO Completo** — Meta tags, Schema.org LocalBusiness, Open Graph
- **Design Responsivo** — Mobile, tablet e desktop
- **Cursor Personalizado** — Animado em dourado (desktop)
- **Navbar Scroll** — Fundo escuro ao descer a página + link activo
- **Hero Animado** — Título com stagger reveal, grid de fundo com parallax
- **Contadores Animados** — 261 avaliações, 4503 seguidores, etc.
- **Reveal on Scroll** — Todos os elementos entram suavemente
- **Formulário → WhatsApp** — Ao submeter, abre WhatsApp com mensagem pré-preenchida
- **Mapa Google** — Embed com efeito hover colorido
- **Botão WhatsApp Flutuante** — Com animação de pulso
- **Acessibilidade** — `prefers-reduced-motion` respeitado, labels, aria

---

## 🔧 Personalizar

### Alterar cores
No topo de `css/style.css`, editar as variáveis CSS:
```css
:root {
  --claret: #7D1D1D;   /* Vermelho bordô */
  --gold:   #C9A84C;   /* Dourado */
  --coal:   #0D0D0D;   /* Fundo escuro */
}
```

### Adicionar fotos reais
Substituir os placeholders nos cartões `.img-placeholder` por `<img>` tags com fotos reais da academia.

### Formulário de contacto
Para receber os pedidos por e-mail, integrar com:
- [Formspree](https://formspree.io) — grátis, sem backend
- [EmailJS](https://www.emailjs.com) — grátis até 200 e-mails/mês

---

## 📊 SEO — Palavras-chave Alvo

- `ginásio Amora`
- `ginásio Seixal`
- `academia Cruz de Pau`
- `Campus Gym`
- `personal trainer Seixal`
- `fitness Amora`
- `musculação Seixal`

---

## 📞 Dados do Cliente

| Campo | Valor |
|---|---|
| Nome | Campus Gym Cruz de Pau |
| Endereço | Praceta de Mansabá 13A, 2845-020 Amora |
| Telefone | +351 914 762 145 |
| Instagram | @ginasiocampus |
| Google Maps | [Ver localização](https://maps.app.goo.gl/UJfJkPMyfB3w8tUY7) |
| Avaliação | ⭐ 4.9 (261 avaliações) |

---

## 🏗️ Desenvolvido por

**Agência NOOMA** — @agencianooma

---

*Site desenvolvido como proposta/demo comercial.*
