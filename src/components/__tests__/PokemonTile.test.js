import React from "react";
import { shallow, mount } from "enzyme";
import { PokemonTile } from "../PokemonTile";


const testData = {
  name: "Wartortle",
  number: "008",
  image: "https://img.pokemondb.net/artwork/wartortle.jpg",
};

const historyMock = {
  push: jest.fn()
};

describe("PokemonTile", () => {
  let wrapper = null;

  it("Renders without crashing the conrrect Block Element (.PokemonTile)", () => {
    wrapper = shallow(<PokemonTile {...testData} />);
    expect(wrapper.hasClass("PokemonTile")).toBe(true);
  });

  describe("AC", () => {
    beforeEach(() => {
      wrapper = mount(<PokemonTile {...testData} history={historyMock} />);
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

    it("click redirects to correct url", () => {
      wrapper.simulate("click");
      expect(historyMock.push.mock.calls.length).toBe(1);
      expect(historyMock.push.mock.calls[0][0]).toBe(
        "/details/" + testData.name
      );
    });

    afterAll(() => {
      wrapper.unomunt();
    });
  });
});
