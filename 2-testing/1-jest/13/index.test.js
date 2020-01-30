const callFuncsExceptFirst = (...funcs) => funcs.forEach((func, index) => {
    if (index !== 0) {
        func();
    }
});

describe('«callFuncsExceptFirst» function:', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    const mock3 = jest.fn();

    test('should not call first-argument function', () => {
        callFuncsExceptFirst(mock1);

        expect(mock1).not.toHaveBeenCalled();
    });

    test('should call every function passed as argument one time', () => {
        callFuncsExceptFirst(mock1, mock2, mock3);

        expect(mock2).toHaveBeenCalledTimes(1);
        expect(mock3).toHaveBeenCalledTimes(1);
    });
});
