import express from "express";
import fetch from "node-fetch";
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const TOKEN = process.env.DISCORD_BOT_TOKEN;


// Função que converte Snowflake → Data de criação
function creationDateFromSnowflake(id) {
  const discordEpoch = 1420070400000;
  return new Date(Number(id) / 4194304 + discordEpoch);
}

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await fetch(`https://discord.com/api/v10/users/${id}`, {
      headers: {
        Authorization: `Bot ${TOKEN}`
      }
    });

    const data = await result.json();

    if (data.message === "Unknown User") {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    // Incluindo data de criação
    const creationDate = creationDateFromSnowflake(id);

    function getAvatarUrl(user) {
        if (!user.avatar) return null;
      
        const isGif = user.avatar.startsWith("a_");
        const ext = isGif ? "gif" : "png";
      
        return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=2048`;
      }
    
      function getBannerUrl(user) {
        if (!user.banner) return null;
      
        const isGif = user.banner.startsWith("a_");
        const ext = isGif ? "gif" : "png";
      
        return `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.${ext}?size=2048`;
      }

      function convertAccentColor(decimal) {
        if (!decimal) return null;
        return "#" + decimal.toString(16).padStart(6, "0");
      }

    return res.json({
      id: data.id,
      username: data.username,
      global_name: data.global_name,
      avatar: data.avatar,
      banner: data.banner,
      accent_color: data.accent_color,
      avatarLink: getAvatarUrl(data),
      bannerLink: getBannerUrl(data),
      flags: data.flags,
      creation_date: creationDate,
      realColor: convertAccentColor(data.accent_color)  
    });

  } catch (err) {
    return res.status(500).json({ error: "Erro interno", details: err });
  }
});

app.listen(3000, () => console.log("API rodando -> http://localhost:3000"));