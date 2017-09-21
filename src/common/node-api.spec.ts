import * as NodeApi from './node-api';

const mockFetch = ({
    fail = undefined,
    success = {}
} = {}) => {
    const orignalFetch = global['fetch'];
    const fetchMock = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
            if (fail) {
                reject(fail);
            } else {
                resolve({
                    json: () => success
                });
            }
        });
    });

    global['fetch'] = fetchMock;

    const restoreFetch = () => {
        global['fetch'] = orignalFetch;
    };

    return {
        restore: restoreFetch,
        mock: fetchMock
    };
};

describe('Node api', () => {
    describe('has function getRoot', () => {
        test('calls http://localhost:5000/root', async () => {
            const { restore, mock: fetchMock } = mockFetch();
            await NodeApi.getRoot();
            expect(fetchMock.mock.calls[0][0]).toBe('http://localhost:5000/root');
            restore();
        });
        test('returns object given by fetch directly', async () => {
            const expectedRes = {};
            const { restore, mock: fetchMock } = mockFetch({ success: expectedRes });
            const actualRes = await NodeApi.getRoot();
            expect(actualRes).toBe(expectedRes);
            restore();
        });
    });
    describe('has function getListByParentId', () => {
        test('calls http://localhost:5000/root', async () => {
            const { restore, mock: fetchMock } = mockFetch();
            const parentId = '123-321';
            await NodeApi.getListByParentId(parentId);
            expect(fetchMock.mock.calls[0][0]).toBe(`http://localhost:5000/nodes/${parentId}`);
            restore();
        });
        test('returns object given by fetch directly', async () => {
            const expectedRes = {};
            const { restore, mock: fetchMock } = mockFetch({ success: expectedRes });
            const actualRes = await NodeApi.getListByParentId('');
            expect(actualRes).toBe(expectedRes);
            restore();
        });
    });
});