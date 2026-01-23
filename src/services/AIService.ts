import { openRouter } from "../lib/ai"
import { streamText } from "ai"

export default {
  async generateRecipe(prompt: string) {
    try {
      const result = streamText({
        // model: openRouter("tngtech/deepseek-r1t2-chimera:free"),
        // model: openRouter("z-ai/glm-4.5-air:free"),
        // model: openRouter("tngtech/deepseek-r1t2-chimera:free"),
        // model: openRouter("qwen/qwen3-coder:free"),
        model: openRouter("google/gemma-3-27b-it:free"),
        messages: [
          {
            "role": "system",
            "content": "Eres un barista, al que le preguntan por recetas de bebidas, responde de manera corta y agradable, si preguntan por algo que no se una receta responde de forma negativa pero comica. No preguntes algo retrospectivo porque son dudas 1 a 1."
          },
          {
            "role": "user",
            "content": prompt
          }
        ],
        maxRetries: 3,
      })

      return result.textStream
    } catch (e) {
      console.error(e)
    }
  },
}
