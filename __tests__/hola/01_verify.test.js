import verify from '../../hola/01_verify';

describe('function must return a correct value', () => {
  test(`verify('---(++++)----')`, () => {
    expect(verify('---(++++)----')).toBe(1);
  });

  test('verify(\'\')', () => {
    expect(verify('')).toBe(1);
  });

  test('verify(\'before ( middle []) after \')', () => {
    expect(verify('before ( middle []) after ')).toBe(1);
  });

  test('verify(\') (\')', () => {
    expect(verify(')(')).toBe(0);
  });

  test('verify(\'<(   >)\')', () => {
    expect(verify('<(   >)')).toBe(0);
  });

  test('verify(\'(  [  <>  ()  ]  <>  )\')', () => {
    expect(verify('(  [  <>  ()  ]  <>  )')).toBe(1);
  });

  test('verify(\'   (      [)\')', () => {
    expect(verify('   (      [)')).toBe(0);
  });
});
