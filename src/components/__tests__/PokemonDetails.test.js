import React from "react";
import { shallow, mount } from "enzyme";
import PokemonDetails from "../PokemonDetails";

const testData = {
  name: "Wartortle",
  number: "008",
  image: "https://img.pokemondb.net/artwork/wartortle.jpg",
  types: ["Water"],
  resistant: ["Fire", "Water", "Ice", "Steel"],
  weaknesses: ["Electric", "Grass"]
};

describe("PokemonDetails", () => {
  let wrapper = null;

  it("Renders without crashing the conrrect Block Element (.PokemonDetails)", () => {
    wrapper = shallow(<PokemonDetails {...testData} />);
    expect(wrapper.hasClass("PokemonDetails")).toBe(true);
  });

  describe("AC", () => {
    beforeEach(() => {
      wrapper = shallow(<PokemonDetails {...testData} />);
    });

    it("has a image ", () => {
      expect(wrapper.find("img").length).toEqual(1);
      expect(wrapper.find("img").prop("src")).toEqual(testData.image);
      expect(wrapper.find("img").prop("alt")).toEqual(testData.name);
    });
    it("has a name ", () => {
      expect(wrapper.find(".name").length).toEqual(1);
      expect(wrapper.find(".name").text()).toEqual(testData.name);
    });

    it("has a number ", () => {
      expect(wrapper.find(".number").length).toEqual(1);
      expect(wrapper.find(".number").text()).toEqual(testData.number);
    });

    it("has a Types list ", () => {
      expect(wrapper.find("ListGroup[title='Types']").length).toEqual(1);
      expect(wrapper.find("ListGroup[title='Types']").props().items).toEqual(testData.types)
    });
    it("has a Resistant list ", () => {
      expect(wrapper.find("ListGroup[title='Resistant']").length).toEqual(1);
      expect(wrapper.find("ListGroup[title='Resistant']").props().items).toEqual(testData.resistant)
    });
    it("has a Weakneses list ", () => {
      expect(wrapper.find("ListGroup[title='Weakneses']").length).toEqual(1);
      expect(wrapper.find("ListGroup[title='Weakneses']").props().items).toEqual(testData.weaknesses)
    });

    afterAll(() => {
      wrapper.unomunt();
    });
  });
});
