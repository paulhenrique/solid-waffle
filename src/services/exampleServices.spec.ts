import { sum } from "./exampleServices";

test('Should sum a plus b', () => {
  const sumResult = sum(1, 2)
  expect(sumResult).toBe(3);
});