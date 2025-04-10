import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Users", "Recipes"],
  endpoints: (builder) => ({
    getRecipes: builder.query<any[], void>({
      query: () => "recipes",
      providesTags: ["Recipes"],
    }),
    getRecipeById: builder.query<any, string>({
      query: (id) => `recipes/${id}`,
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
      invalidatesTags: ["Recipes"],
    }),

    getUsers: builder.query<any[], void>({
      query: () => "users",
      providesTags: ["Users"],
    }),
    createUsers: builder.mutation<
      any,
      { name: string; email: string; password: string }
    >({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeByIdQuery,
  useCreateRecipesMutation,
  useUpdateRecipesMutation,
  useDeleteRecipesMutation,
  useGetUsersQuery,
  useCreateUsersMutation,
} = Api;
