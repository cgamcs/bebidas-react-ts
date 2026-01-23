import type { StateCreator } from "zustand"

export type AISliceType = {
  recipe: string
}

export const CreateAISlice : StateCreator<AISliceType, [], [], AISliceType> = () => ({
  recipe: ''
})