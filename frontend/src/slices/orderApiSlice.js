import { apiSlice } from "./apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/api/orders",
        method: "POST",
        body: data,
      }),
    }),
    getOrders: builder.query({
      query: () => ({
        url: "/api/orders",
      }),
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `/api/orders/mine`,
      }),
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `/api/orders/${id}`,
      }),
    }),
    deliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `/api/orders/${orderId}/deliver`,
        method: "PUT",
      }),
    }),
    payOrder: builder.mutation({
      query: (orderId) => ({
        url: `/api/orders/${orderId}/pay`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  useGetOrdersQuery,
  useGetMyOrdersQuery,
  useDeliverOrderMutation,
  usePayOrderMutation,
} = orderApiSlice;
