declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

export interface Response<T> {
  serverCode: string;
  serverMsg: string;
  results: T;
}
