import service1 from "../../src/services/service1"

describe('Service1', () => {
  test('Probando sum', () => {
    const result = service1(3,3)

    expect(result).toEqual(6)
  })
})