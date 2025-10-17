"use client"

import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { useMutation, useQuery, Authenticated, Unauthenticated } from "convex/react"
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  const delUser = useMutation(api.users.del)

  return (
    <>
    <Authenticated>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Hello app/web</h1>
          <UserButton/>
          <Button onClick={() => addUser()}>Add User</Button>
          {JSON.stringify(users)}

          <Button onClick={() => delUser()} className="" variant="destructive">Delete Users</Button>
        </div>
      </div>
    </Authenticated>
    <Unauthenticated>
      <p>Must be signed in!</p>
      <SignInButton>Sign in!</SignInButton>
    </Unauthenticated>
    </>
  )
}
