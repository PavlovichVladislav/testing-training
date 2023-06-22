const square = require("./square");

describe("square", () => {
   let mockValue;
   // перед каждым тестом
   beforeEach(() => {
      // например, мы каким - то образом изменили БД
   });
   // один раз перед всеми тестами
   beforeAll(() => {});
   test("Корректное значение", () => {
      expect(square(2)).toBe(4);
      expect(square(2)).toBeLessThan(5);
      expect(square(2)).toBeGreaterThan(3);
      expect(square(2)).not.toBeUndefined();
   });
   test("Ожидается, что Math.pow() вызовется один раз", () => {
      const spyMathPow = jest.spyOn(Math, "pow");
      square(2);
      expect(spyMathPow).toBeCalledTimes(1);
   });
   test("Ожидается, что Math.pow() не вызовется", () => {
      const spyMathPow = jest.spyOn(Math, "pow");
      square(1);
      expect(spyMathPow).toBeCalledTimes(0);
   });
   afterEach(() => {
      // после тестов необходимо почистить БД,
      // например, мы добавляли пользователей

      // здесь мы очищаем моки, если этого не сделать, то тест выше упадёт,
      // несмотря на то, что выглядит он верным, т.к. моки накапливаются 
      // во всех тестах
      jest.clearAllMocks();
   });
   afterAll(() => {
      // какие - то общие действи очистки
   });
});
