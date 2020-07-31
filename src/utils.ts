export const generateID = () => (Date.now() + Math.floor((1.0 + Math.random()) * 1000000000000)).toString(36);
