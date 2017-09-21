const serverUrl = 'http://localhost:5000';

export const getRoot = () => fetch(`${serverUrl}/root`).then(res => res.json());
export const getListByParentId = id => fetch(`${serverUrl}/nodes/${id}`).then(res => res.json());
