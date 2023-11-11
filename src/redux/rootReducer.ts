import { baseApi } from './api/baseApi';

export const reducer = {
  // sidebar: sidebarReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
