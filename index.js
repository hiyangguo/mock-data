const alfy = require('alfy');
const mockPack = require('./mockPack/index');
const [node, script, type, ...arg] = process.argv;
const getAllMockData = () => Object.entries(mockPack).filter(([funcName]) => {
    if (!type || type.length === 0) {
        return true;
    }
    return funcName.toUpperCase().includes(type.toUpperCase());
}).map(([funcName, func]) => {
    return func(...arg);
});

alfy.output(getAllMockData());