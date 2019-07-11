import React from "react";
import PageLoader from "../components/PageLoader";
import PageError from "../components/PageError";
import PokemonsList from "../components/PokemonsList";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const LandingPage = props => {
  const pageQuery = gql`
    {
      pokemons(first: ${props.firstCount}) {
        name
        number
        image
      }
    }
  `;

  return (
    <div className="LandingPage">
      <div className="row">
        <Query query={pageQuery}>
          {({ loading, error, data }) => {
            if (loading) return <PageLoader />;
            if (error) return <PageError />;
            return <PokemonsList list={data.pokemons} />;
          }}
        </Query>
      </div>
    </div>
  );
};


//There are 151 pokenons on api any number above 151 brings 151 results
LandingPage.defaultProps = {
  firstCount: 251
};

export default LandingPage;
