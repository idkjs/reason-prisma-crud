open ApolloInMemoryCache;

type dataObject = {
  .
  "__typename": string,
  "id": string,
};

/* Create an InMemoryCache */
let inMemoryCache =
  createInMemoryCache(~dataIdFromObject=(obj: dataObject) => obj##id, ());

/* Create an HTTP Link */
let httpLink =
  ApolloLinks.createHttpLink(~uri="http://localhost:4000/api", ());

let instance =
  ReasonApollo.createApolloClient(
    ~link=httpLink,
    ~cache=inMemoryCache,
    ~ssrMode=Js.true_,
    ~connectToDevTools=Js.true_,
    ~queryDeduplication=Js.true_,
    (),
  );