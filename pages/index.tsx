import React from "react";
import {
  Parallax,
  ContainerWrapper,
  MainRaisedWrapper,
} from "../components/utils";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import FrontPageCategories from "../components/Home/FrontPageCategories";
import NoContainerLayout from "../components/Structure/Layouts/NoContainerLayout";
import { manageProducts } from "../graphql-shopify/product/functions";
import {
  getPrismaClient,
  createShopifyGraphql,
} from "../graphql-shopify/context";
import QUERY_GET_PRODUCTS, {
  GetAllProductsQueryType,
} from "../graphql-shopify/product/queries/QUERY_GET_PRODUCTS";
import { InferGetStaticPropsType } from "next";
import QUERY_GET_COLLECTIONS, {
  QueryGetCollectionsType,
} from "../graphql-shopify/category/queries/QUERY_GET_COLLECTIONS";
import { categoriesFromPrisma } from "../graphql-shopify/category/functions";
import { Collection } from "../generated/shopify.model";
import { NexusGenObjects } from "../generated/nexus-typegen";

const Home = ({
  products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Parallax image="/images/la-mosca-nera.jpg">
        <ContainerWrapper>
          {/* <Button
            color="success"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
          >
            <i className="fas fa-play" />
            Ripara/modifica i tuoi abiti
          </Button> */}
        </ContainerWrapper>
      </Parallax>
      <MainRaisedWrapper>
        <ContainerWrapper>
          {categories && categories.length && (
            <FrontPageCategories categories={categories} />
          )}
          {products && <FeaturedProducts products={products} />}
        </ContainerWrapper>
      </MainRaisedWrapper>
    </>
  );
};

export async function getStaticProps() {
  const graphqlClient = createShopifyGraphql();
  const prismaClient = getPrismaClient();

  const productsData = await graphqlClient.request<GetAllProductsQueryType>(
    QUERY_GET_PRODUCTS,
    {
      query: "tag:featured",
    }
  );

  const featuredProducts = await manageProducts(productsData.products);

  let frontCategories: Array<NexusGenObjects["Category"]> = [];

  const prismaFrontCategories = await prismaClient.category.findMany({
    where: { front: true },
  });

  if (prismaFrontCategories.length > 0) {
    const collectionsData = await graphqlClient.request<
      QueryGetCollectionsType
    >(QUERY_GET_COLLECTIONS, { first: 250 });
    let shopifyCollections: Collection[] = [];
    if (collectionsData?.collections?.edges?.length) {
      shopifyCollections = collectionsData.collections.edges.map((x) => x.node);
    }

    frontCategories = categoriesFromPrisma(
      prismaFrontCategories,
      shopifyCollections
    );
  }

  return {
    props: {
      products: featuredProducts,
      categories: frontCategories,
    },
  };
}

Home.Layout = NoContainerLayout;

export default Home;
