import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBr from "@/components/NavBr";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rocketcodebackend.onrender.com/",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return (
    <>
      <ApolloProvider client={client}>
        <NavBr />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
