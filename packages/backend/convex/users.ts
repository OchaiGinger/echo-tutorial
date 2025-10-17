import { query, mutation } from './_generated/server';

export const getMany = query({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query('users').collect();
        return users;
    },
});

export const add = mutation({
    args: {},
    handler: async (ctx,) => {
        const identity = await ctx.auth.getUserIdentity()

        if (identity == null) {
            throw new Error("Not authenticated")
        }

        const orgId = identity.orgId as string

        if (!orgId) {
            throw new Error("No organization ID found")
        }

        const userId = await ctx.db.insert('users', {
            name: "Ginger Ochai"
        })
        return userId
    },
})

export const del = mutation({
    args: {},
    handler: async (ctx) => {
        const firstUser = await ctx.db.query('users').first()
        if (firstUser) {
            await ctx.db.delete(firstUser._id)
        }
    }
})

