import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query<any[], void>({
      query: () => "recipes",
    }),
    createRecipes: builder.mutation<any, Partial<any>>({
      query: (newRecipe) => ({
        url: "recipes",
        method: "POST",
        body: newRecipe,
      }),
    }),
    updateRecipes: builder.mutation<any, { id: string; data: Partial<any> }>({
      query: ({ id, data }) => ({
        url: `recipes/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteRecipes: builder.mutation<void, string>({
      query: (id) => ({
        url: `recipes/${id}`,
        method: "DELETE",
      }),
    }),

    getUsers: builder.query<any[], void>({
      query: () => "users",
    }),
    createUsers: builder.mutation<any, Partial<any>>({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useCreateRecipesMutation,
  useUpdateRecipesMutation,
  useDeleteRecipesMutation,
  useGetUsersQuery,
  useCreateUsersMutation,
} = Api;
