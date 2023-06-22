const mapArrToStrings = require("./mapArrToStrings");

describe("mapArrToStrings", () => {
   test("В массиве все значения - числовые", () => {
      expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
   });
   test("В массиве все значения - нечисловые", () => {
      expect(mapArrToStrings([null, undefined, NaN, Infinity])).toEqual([]);
   });
   test("В массиве есть числовые и нечисловые значения", () => {
      expect(
         mapArrToStrings([1, 2, 3, true, false, "hello world", null, undefined, NaN, Infinity])
      ).toEqual(["1", "2", "3"]);
   });
   test("Пустой массив", () => {
      expect(mapArrToStrings([])).toEqual([]);
   });
   test("Отрицание", () => {
      expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3]);
   });
});
