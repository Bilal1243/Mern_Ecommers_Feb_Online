import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/api/user",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/user/auth",
        method: "POST",
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/api/user/logout",
        method: "GET",
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/api/user",
      }),
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `/api/user/${id}`,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/api/user/${data.userId}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/api/user/${userId}`,
        method: "DELETE",
      }),
    }),
    updateUserProfile : builder.mutation({
      query : (data)=>({
        url : '/api/user/profile',
        method : 'PUT',
        body : data
      })
    })
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUsersQuery,
  useGetUserDetailsQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUpdateUserProfileMutation
} = userApiSlice;
