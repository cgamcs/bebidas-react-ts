import { createOpenRouter } from "@openrouter/ai-sdk-provider"

export const openRouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_KEY,
  headers: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "Buscador de Bebidas - API"
  }
})