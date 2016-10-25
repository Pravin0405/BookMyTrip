export default function myService() {
    'ngInject';

    var data = [];
    return {
        getData: function () {
            return data;
        },
        setData: function (info) {
            data.push(info);
            console.log(info);
        },
    };
}
