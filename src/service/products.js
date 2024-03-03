import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl:'http://localhost:4000/products'}),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => {
        return `/`
      }
    }),
    deleteProducts : builder.mutation({
      query: ( id) => {
        return {
          url : `/${id}`,
          method : "DELETE"
        }
      },
    }),
    addProducts : builder.mutation({
        query : (newProducts) =>{
          return {
            url : "/",
            method : "POST",
            body : newProducts
          }
        }
    })
  }),
})
export const {useAddProductsMutation,useLazyGetAllProductsQuery,useGetAllProductsQuery,useDeleteProductsMutation} = productsApi