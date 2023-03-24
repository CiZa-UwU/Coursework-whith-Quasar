import { createHttpLink, InMemoryCache } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

export /* async */ function getClientOptions(/* {app, router, ...} */ options) {
  const httpLink = createHttpLink({
    uri: "https://endless-wasp-39.hasura.app/v1/graphql", //Наша БД
  });
  const authLink = setContext((_, { headers }) => {
    const token = sessionStorage.getItem("token");
    if(token === ""){ 
      return {
        headers: {
          ...headers //Пустые заголовки
        },
      }
    }
    else {
      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : "", //Заголовки с авторизацией
        },
      };
    }
  });

  return Object.assign( // соединяем ссылки хасуры и клерка
    // General options.
    {
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    }
    // Specific Quasar mode options.
    // process.env.MODE === "spa"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "ssr"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "pwa"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "bex"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "cordova"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "capacitor"
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.MODE === "electron"
    //   ? {
    //       //
    //     }
    //   : {},
    // // dev/prod options.
    // process.env.DEV
    //   ? {
    //       //
    //     }
    //   : {},
    // process.env.PROD
    //   ? {
    //       //
    //     }
    //   : {},
    // // For ssr mode, when on server.
    // process.env.MODE === "ssr" && process.env.SERVER
    //   ? {
    //       ssrMode: true,
    //     }
    //   : {},
    // // For ssr mode, when on client.
    // process.env.MODE === "ssr" && process.env.CLIENT
    //   ? {
    //       ssrForceFetchDelay: 100,
    //     }
    //   : {}
  );
}


