import "jest-canvas-mock";

jest.mock("colorthief", () => {
  return class ColorThief {
    getColor() {
      return [0, 0, 0];
    }
    getPalette() {
      return [[0, 0, 0]];
    }
  };
});
