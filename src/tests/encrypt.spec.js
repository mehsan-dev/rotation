const { RotationService } = require('../services')

describe("Text Encription", () => {
  const testInput = "ABCD abcd # EFGH efgh $ IJKL ijkl ^ MNOP mnop % QRST qrst * UVWX uvwx & YZ yz";
  const expectedOutput1 = "NOPQ nopq # RSTU rstu $ VWXY vwxy ^ ZABC zabc % DEFG defg * HIJK hijk & LM lm";
  const expectedOutput2 = "GHIJ ghij # KLMN klmn $ OPQR opqr ^ STUV stuv % WXYZ wxyz * ABCD abcd & EF ef";

  beforeEach(async () => {
    const isInputString = typeof testInput === 'string'
    expect(isInputString).toEqual(true);
  });

  it("encrypting text to rot13 cypher", async () => {

    const cypher = RotationService.encrypt(testInput, 13);
    expect(cypher).toEqual(expectedOutput1);
  });

  it("encrypting text to rot6 cypher", async () => {

    const cypher = RotationService.encrypt(testInput, 6);
    expect(cypher).toEqual(expectedOutput2);
  });
});
