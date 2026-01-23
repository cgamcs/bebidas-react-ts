import { openRouter } from "../lib/ai"
import { streamText } from "ai"

export default {
  async generateRecipe(prompt: string) {
    try {
      const result = streamText({
        model: openRouter("meta-llama/llama-3.3-70b-instruct:free"),
        prompt,
        maxRetries: 3,
      })

      // Para ver el resultado del stream
      for await (const textPart of result.textStream) {
        console.log(textPart)
      }
    } catch (e) {
      console.error(e)
    }
  },
}