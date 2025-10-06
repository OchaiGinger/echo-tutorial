"use client"
import {api} from "@workspace/backend/_generated/api"
import {useQuery} from "convex/react"
export default function Page() {
  const users = useQuery(api.users.getMany)
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello app/widgets</h1>
    {JSON.stringify(users)}
      </div>
    </div>
  )
}
