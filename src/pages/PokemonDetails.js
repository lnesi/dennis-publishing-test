import React from "react";
import PageLoader from "../components/PageLoader";
import PageError from "../components/PageError";
import PokemonDetails from "../components/PokemonDetails";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";

const PokemonDetailsPage = props => {
  const pageQuery = gql`
    query getPokemon($name: String!) {
      pokemon(name: $name) {
        name
        number
        image
        types
        resistant
        weaknesses
      }
    }
  `;
  return (
    <div className="PokemonDetailPage">
      <div className="row">
        <Query query={pageQuery} variables={{ name: props.match.params.name }}>
          {({ loading, error, data }) => {
            if (loading) return <PageLoader />;
            if (error) return <PageError />;
            return <PokemonDetails {...data.pokemon} />;
          }}
        </Query>
      </div>
    </div>
  );
};

export default withRouter(PokemonDetailsPage);
