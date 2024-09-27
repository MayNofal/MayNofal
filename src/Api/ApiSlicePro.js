import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



 export const ProApiSlice=createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
endpoints:(builder)=>({
    getProducts:builder.query({
       query:()=>'/products',     
    }),
    getCategory:builder.query({
        query:()=>'/category',     
     }),
     getTrend:builder.query({
        query:()=>'/trend',     
     }),
     getItems:builder.query({
      query:()=>'/shopping',     
   }),
}),


})
export  const {useGetProductsQuery,useGetCategoryQuery,useGetTrendQuery,useGetItemsQuery}=ProApiSlice;