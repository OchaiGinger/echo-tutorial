"use client"

import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { useMutation, useQuery, Authenticated, Unauthenticated } from "convex/react"
import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  const delUser = useMutation(api.users.del)

  return (
    <>

      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Hello app/web</h1>
          <UserButton />
          <OrganizationSwitcher hidePersonal />
          <Button onClick={() => addUser()}>Add User</Button>
          {JSON.stringify(users)}

          <Button onClick={() => delUser()} className="" variant="destructive">Delete Users</Button>
        </div>
      </div>


    </>
  )
}
