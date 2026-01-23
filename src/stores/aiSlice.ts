import type { StateCreator } from "zustand"
import AIService from "../services/AIService"

export type AISliceType = {
  recipe: string
  generateRecipe: (prompt: string) => Promise<void>
}

export const CreateAISlice : StateCreator<AISliceType, [], [], AISliceType> = () => ({
  recipe: '',
  generateRecipe: async (prompt) => {
    await AIService.generateRecipe(prompt)
  }
})