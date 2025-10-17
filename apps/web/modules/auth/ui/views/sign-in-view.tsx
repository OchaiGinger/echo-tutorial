import { SignIn } from "@clerk/nextjs"
export const SigInView = () => {
  return (
    <div>
      <SignIn routing="hash" />
    </div>
  )
}

