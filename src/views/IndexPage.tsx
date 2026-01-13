import { useAppStore } from "../stores/useAppStore"

function IndexPage() {
  useAppStore((state) => state.categories)

  return (
    <>
      <h1>IndexPage</h1>
    </>
  )
}

export default IndexPage