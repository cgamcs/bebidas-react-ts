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
        prompt,
        maxRetries: 3,
      })

      return result.textStream
    } catch (e) {
      console.error(e)
    }
  },
}
