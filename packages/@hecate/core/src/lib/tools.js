const tools = {
    array: {
        groupBy(array, fn) {
            const groups = {};
            array.forEach(function (o) {
                const group = fn(o);
                groups[group] = groups[group] || [];
                groups[group].push(o);
            });
            return Object.keys(groups).map(function (group) {
                return groups[group];
            });
        },
        sort(array, comparator) {
            return array.sort(function (a, b) {
                var x = a[comparator];
                var y = b[comparator];
                return x < y ? -1 : x > y ? 1 : 0;
            });
        },

        find(array, element, comparator) {
            return array.find((item) => item[comparator] === element[comparator]);
        },
        remove(array, element, comparator) {
            const index = array.findIndex((item) => item[comparator] === element[comparator]);
            array.splice(index, 1);
            return array;
        },
    },
    object: {
        isEmpty(object) {
            if (object) {
                let array = Object.keys(object);
                if (array && array.length > 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        },
    },
};

export default tools;
