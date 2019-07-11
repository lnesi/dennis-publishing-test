import React from "react";
import PageLoader from "../components/PageLoader";
import PageError from "../components/PageError";
import PokemonsList from "../components/PokemonsList";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
const pageQuery = gql`
  {
    pokemons(first: 151) {
      name
      number
      image
    }
  }
`;

const LandingPage = props => {
  return (
    <div className="LandingPage">
      <div class="row">
        <Query query={pageQuery}>
          {({ loading, error, data }) => {
            if (loading) return <PageLoader />;
            if (error) return <PageError />;
            return <PokemonsList data={data} />;
          }}
        </Query>
      </div>
    </div>
  );
};

export default LandingPage;
