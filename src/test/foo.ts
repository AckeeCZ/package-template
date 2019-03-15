import foo from 'lib/foo';

describe('Foo', () => {
    test('foos', () => {
        expect(foo()).toEqual(42);
    });
});
