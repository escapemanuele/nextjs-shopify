import { gql } from "graphql-request";
import { extendType, objectType } from "nexus";
import { NexusGenFieldTypeNames, NexusGenObjects } from "../../generated/nexus-typegen";
import { Collection } from '../../generated/shopify.model'
import { categoriesFromPrisma } from "../category/functions";

export const Category = objectType({
    name: 'Category',
    definition(t) {
        t.model.id();
        t.string('title');
        t.string('description');
        t.string('image');
        t.string('handle');
        t.list.field('products', {
            type: 'Product'
        })
    }
})

export const CategoryQuery = extendType({
    type: 'Query',
    definition: t => {
        t.nonNull.list.field('frontCategories', {
            type: 'Category',
            async resolve(parent, args, ctx) {

                let frontCategories: Array<NexusGenObjects["Category"]> = []

                const prismaCategories = await ctx.prisma.category.findMany({ where: { front: true } })
                if (prismaCategories.length > 0) {

                    const shopifyCategories: Collection[] = await ctx.shopifyClient.collection.fetchAll();

                    frontCategories = categoriesFromPrisma(prismaCategories, shopifyCategories)
                }

                return frontCategories
            }
        })
    }
})