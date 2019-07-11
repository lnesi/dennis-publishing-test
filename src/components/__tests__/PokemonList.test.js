import React from "react";
import { shallow, mount } from "enzyme";
import PokemonsList from "../PokemonsList";
import PokemonTile from "../PokemonTile";
import { MemoryRouter } from "react-router-dom";
const testData = {
  list: [
    {
      name: "Jon Doe",
      number: "001",
      image: "http://test.com/jhon"
    },
    {
      name: "Jon Doe",
      number: "002",
      image: "http://test.com/jhon"
    },
    {
      name: "Jon Doe",
      number: "003",
      image: "http://test.com/jhon"
    }
  ]
};
describe("PokemonList", () => {
  let wrapper = null;

  it("Renders without crashing the conrrect Block Element (.PokemonList)", () => {
    wrapper = shallow(<PokemonsList {...testData} />);
    expect(wrapper.hasClass("PokemonsList")).toBe(true);
  });

  describe("AC", () => {
    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter>
          <PokemonsList {...testData} />
        </MemoryRouter>
      );
    });
    it("renders the correct amount of PokemonsTiles", () => {
      expect(wrapper.find(".PokemonTile").length).toEqual(3);
    });

    afterAll(() => {
      wrapper.unomunt();
    });
  });
});
