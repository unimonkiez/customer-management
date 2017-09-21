const serverUrl = 'http://localhost:5000';

/* START OF FOR DEVELOPMENT - NO NEED FOR PYTHON SERVER */
// export const getRoot = () => ({
//     then: cb => {
//         setTimeout(() => {
//             cb('root');
//         }, 500);
//         return {
//             catch(cb2) {}
//         }
//     }
// });
// let counter = 0;
// export const getListByParentId = id => ({
//     then: cb => {
//         setTimeout(() => {
//             cb([++counter, ++counter]);
//         }, 500);
//         return {
//             catch(cb2) { }
//         }
//     }
// });
/* END OF FOR DEVELOPMENT - NO NEED FOR PYTHON SERVER */

export const getRoot = () => fetch(`${serverUrl}/root`)
.then(res => res.json())
.then(res => res.root);

export const getListByParentId = id => fetch(`${serverUrl}/nodes/${id}`)
.then(res => res.json())
.then(res => res.nodes);
