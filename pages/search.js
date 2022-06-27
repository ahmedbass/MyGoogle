import SearchHeader from "../components/SearchHeader";
import Head from "next/head";
import MockSearchResults from "../data/MockSearchResults";
import SearchResults from "../components/SearchResults";
import Pagination from "../components/Pagination";
import SearchResultsImages from "../components/SearchResultsImages";
import Router from "next/router";

const SearchPage = (props) => {
  console.log({ props });

  if (!props.query?.q) {
    Router.push("/");
    return;
  }

  let renderElement;
  if (props.results.error) {
    renderElement = (
      <p className="text-center m-10 text-red-500 font-bold">
        Oops... {props.results.error.message}
      </p>
    );
  } else if (!props.results?.items?.length) {
    renderElement = <p className="text-center m-10 text-red-500 font-bold">No results found!</p>;
  } else if (props.results.queries?.request[0]?.searchType === "image") {
    renderElement = <SearchResultsImages results={props.results} />;
  } else {
    renderElement = <SearchResults results={props.results} />;
  }

  return (
    <div>
      <Head>
        <title>{props.query.q} - My Google Search</title>
      </Head>
      <SearchHeader />

      {renderElement}

      {props.results?.queries && (
        <div className="mx-5 lg:mx-44 mt-3">
          <Pagination currentReq={props.results?.queries?.request[0]} />
        </div>
      )}
    </div>
  );
};
export default SearchPage;

export async function getServerSideProps(context) {
  console.log(context.query, "<query!");
  if (!context.query.q) return { props: {} };

  const useMockData = context.query.useMock === "true";
  console.log({ useMockData });

  const getMockData = () => {
    const filtered = MockSearchResults.filter(
      (result) => (result.queries?.request[0]?.searchType || "") === (context.query?.type || "")
    );
    return filtered[Math.floor(Math.random() * filtered.length)];
  };

  const getRealData = async () =>
    await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.DEV_API_KEY}&cx=${
        process.env.CONTEXT_KEY
      }&q=${context.query.q}&${context.query.type && "searchType=" + context.query.type}&start=${
        context.query.start || 1
      }`
    ).then((res) => res.json());

  const data = (useMockData ? getMockData() : await getRealData()) || [];

  return {
    props: {
      query: context.query,
      results: data,
    },
  };
}
