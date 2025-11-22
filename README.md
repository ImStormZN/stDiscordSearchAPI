# 🔍 Discord Search API

Uma API poderosa e simples para buscar dados públicos de usuários do Discord usando seus IDs (Snowflakes).  
Esse backend foi criado para alimentar o projeto **stDiscordSearch**, permitindo obter avatar, banner, cores, flags e outras informações detalhadas do usuário.

---

## 🚀 Tecnologias Utilizadas
- Node.js
- Express.js
- Axios
- Dotenv
- Cors
- Discord REST API v10

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/ImStormZN/stDiscordSearchAPI
cd stDiscordSearchAPI
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo **.env**:

```env
TOKEN=SEU_TOKEN_DO_BOT_AQUI
PORT=3000
```

⚠️ **IMPORTANTE:**  
- Nunca exponha seu `.env` no GitHub.  
- Adicione no `.gitignore` antes de commitar.

---

## ▶️ Executando o servidor

```bash
node server.js
```

ou

```bash
npm run start
```

A API rodará em:

```
https://stdiscordsearchapi.onrender.com/
```

---

## 📌 Rotas

### 🔎 GET `/user/:id`  
Retorna informações públicas do usuário.

**Exemplo:**  
```
GET https://stdiscordsearchapi.onrender.com/user/123456789012345678
```

### 📥 Resposta:

```json
{
  "id": "123456789012345678",
  "username": "StormZN",
  "global_name": "Storm",
  "avatar": "a_0293ac0asfd.gif",
  "banner": null,
  "accent_color": 16761035,
  "bio": "Full-stack developer.",
  "flags": 512
}
```

---

## 🛡 Segurança
- O token NUNCA é enviado ao cliente.
- Todas requisições ao Discord usam Bearer Token.
- `.env` é ignorado e não sobe para o repositório.

---

## 🌐 Deploy
Recomendações:
- Vercel (com adapter para Node)
- Railway (recomendado)
- Render
- Fly.io

---

## 📄 Licença
MIT License.

---

# 🎯 Autor
**StormZN**  
Projeto criado com foco em estudo e utilidade real para comunidade Discord.
