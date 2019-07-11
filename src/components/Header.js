import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
const StyledDiv = styled.div`
  margin-bottom: 10px;
`;
const StyledImage = styled.img`
  max-height: 100px;
`;

const Header = props => (
  <StyledDiv className="row">
    <div className="col text-center">
      <Link to="/">
        <StyledImage src="/static/images/logo.jpg" />
      </Link>
    </div>
  </StyledDiv>
);

export default withRouter(Header);
