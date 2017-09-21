const serverUrl = 'http://localhost:5000';

export const getRoot = () => fetch(`${serverUrl}/root`)
.then(res => res.json())
.then(res => res.root);

export const getListByParentId = id => fetch(`${serverUrl}/nodes/${id}`)
.then(res => res.json())
.then(res => res.nodes);
