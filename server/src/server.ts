import express from 'express'
import { PrismaClient } from '@prisma/client';

const PORT = 3333;
const app = express()

app.use(express.json())

const prisma = new PrismaClient({
  log: ['query']
});

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  })
  return response.json(games);
})

app.post("/games/:id/ads", (request, response) => {
  const gameId = request.params.id;
  const body = request.body;
  return response.status(201).json(body);
})

app.get('/games/:id/ads', async (request, response) => {
  const gameId: any = request.params.id;
  const ads: any =  await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursEnd: true,
      hoursStart: true,
    },
    where: {
      gameId: gameId
    },
    orderBy: {
      createAt: 'desc',
    }
  })

  return response.json(ads.map((ad: { weekDays: string; }) => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(',')
    }
  }));
})

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })

  return response.json({
    discord: ad.discord,
  });
})

app.listen(PORT, () => {
  console.log("running at: " + PORT)
})