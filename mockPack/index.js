const mockJs = require('mockjs');

//生成一个结果对象
const genResult = (title, data, subtitle) => {
    return {
        title,
        subtitle: subtitle || data,
        arg: data
    };
};

const mockPack = {
    text(min = 1, max = 128) {
        return genResult(`文字【${min}-${max}位中文】`, mockJs.mock(`@cword(${min}, ${max})`));
    },
    name(min = 1, max = 4) {
        return genResult('姓名【1-3位中文】', mockJs.mock(`@cname(${min}, ${max})`));
    },
    email() {
        return genResult('邮箱', mockJs.mock('@email'));
    },
    url() {
        return genResult('URL', mockJs.mock('@url'));
    },
    phone() {
        return genResult('中国大陆电话', mockJs.mock(/^((\d{3}-\d{7,8}((-\d{1,4})?))|(\d{4}-\d{7,8}((-\d{1,4})?))|(\d{11,12}))$/));
    },
    domain() {
        return genResult('域名', mockJs.mock('@domain'));
    },
    ip() {
        return genResult('Ip', mockJs.mock('@ip'));
    },
    date(format = 'yyyy-MM-dd') {
        return genResult('时间', mockJs.mock(`@date(${format})`));
    },
    time(format = 'HH:mm:ss') {
        return genResult('日期', mockJs.mock(`@time(${format})`));
    },
    datetime(format = 'yyyy-MM-dd HH:mm:ss') {
        return genResult('时间日期', mockJs.mock(`@datetime(${format})`));
    },
    currency() {
        return genResult('金额【0-100,000,000 最多两位小数】', mockJs.mock({
            'number|1-10000000.1-2': 1
        }).number.toFixed(2));
    },
    province() {
        return genResult('省份', mockJs.mock('@province'));
    },
    city() {
        return genResult('城市', mockJs.mock('@city'));
    },
    county() {
        return genResult('区县', mockJs.mock('@county'));
    },
    guid() {
        return genResult('Guid', mockJs.mock('@guid').toLowerCase());
    },
    uuid: () => {
        return genResult('uuid', mockJs.mock('@guid').toLowerCase());
    },
    paragraph(min = 1, max = 5) {
        return genResult('英文段落', mockJs.mock(`@paragraph(${min},${max > min ? max : min})`));
    },
    sentence(min = 1) {
        return genResult('英文句子', mockJs.mock(`@sentence(${min})`));
    },
    word(min = 1) {
        return genResult('英文单词', mockJs.mock(`@word(${min})`));
    },
    title(min = 2, max = 5) {
        return genResult('英文标题', mockJs.mock(`@title(${min},${max > min ? max : min})`));
    },
    cparagraph(min = 1) {
        return genResult('中文段落', mockJs.mock(`@csentence(${min})`));
    },
    csentence(min = 1) {
        return genResult('中文句子', mockJs.mock(`@csentence(${min})`));
    },
    cword(min = 1) {
        return genResult('中文单词', mockJs.mock(`@cword(${min})`));
    },
    ctitle(min = 5, max = 10) {
        return genResult('中文标题', mockJs.mock(`@ctitle(${min},${max > min ? max : min})`));
    }
};

module.exports = mockPack;
