const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const implementation = (url /*, options */) => {
    return Promise.resolve({
        json() {
            return Promise.resolve(`A call to ${url} was successful`);
        },
    });
};

global.fetch = jest.fn(implementation);

class Api {
    async getTodos() {
        const response = await fetch(API_URL);
        const result = await response.json();

        return result;
    }
}

const api = new Api();

describe('«api.getUsers»:', () => {
    test('should send a fetch request and yield data', async () => {
        await expect(api.getTodos()).resolves.toMatchSnapshot();
    });

    test('should call «fetch» function one time', async () => {
        await api.getTodos();

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    test('should send a fetch request to valid url', async () => {
        await api.getTodos();

        expect(fetch).toHaveBeenCalledWith(API_URL);
    });
});
