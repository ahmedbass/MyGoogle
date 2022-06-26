import SearchHeader from "../components/SearchHeader";
import Head from "next/head";
import MockSearchResults from "../data/MockSearchResults";
import SearchResults from "../components/SearchResults";

const SearchPage = (props) => {
  console.log({ props });
  return (
    <div>
      <Head>
        <title>{props.query.q} - My Google Search</title>
      </Head>
      <SearchHeader />
      <SearchResults results={props.results} />
    </div>
  );
};
export default SearchPage;

export async function getServerSideProps(context) {
  const useMockData = context.query.useMock === "true";
  console.log({ useMockData });

  const data = useMockData
    ? MockSearchResults[Math.floor(Math.random() * MockSearchResults.length)]
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.DEV_API_KEY}&cx=${
          process.env.CONTEXT_KEY
        }&q=${context.query.q}&${context.query.type && "searchType=" + context.query.type}`
      ).then((res) => res.json());

  return {
    props: {
      query: context.query,
      results: data,
    },
  };
}
