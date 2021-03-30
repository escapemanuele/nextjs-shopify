import { PrismaClient } from '@prisma/client'
import { GraphQLClient } from 'graphql-request'

const prisma = new PrismaClient();

export const createShopifyGraphql = () => {
    return new GraphQLClient(
        process.env.SHOPIFY_GRAPHQL_ENDPOINT, {
        headers: {
            "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_ACCESS_TOKEN,
        },
    }
    )
}

export const getPrismaClient = () => {
    return prisma
}

export interface Context {
    req: any;
    res: any;
    prisma: PrismaClient;
    shopifyGraphql: GraphQLClient
}

export function createContext(ctx): Context {
    return {
        req: ctx.req,
        res: ctx.res,
        prisma,
        shopifyGraphql: createShopifyGraphql()
    };
}