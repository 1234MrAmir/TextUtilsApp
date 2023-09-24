let a = 'Amir';
let b = 'Rehan';
let c= 'Moin';
let d = 'Sameer';
// if we are using default avlue than we can impoert it any name from other file as we have 'ui'
export default a;
// But if we are not using default value than than we have to give same name in imported file.
export {b};
export {c};
export {d};