import e from 'moment';
import * as t from 'lodash';
import a from 'shortid';
import r from 'sweetalert2';
import o from 'localforage';
String.prototype.format = function (e) {
    var t = function (e, t) {
        return (
            (t = 'object' == typeof t ? t : Array.prototype.slice.call(arguments, 1)),
            e.replace(/\{\{|\}\}|\{(\w+)\}/g, function (e, a) {
                return '{{' == e ? '{' : '}}' == e ? '}' : t[a];
            })
        );
    };
    return t(this, (e = 'object' == typeof e ? e : Array.prototype.slice.call(arguments, 0)));
};
const n = r,
    i = {
        information: (e, t) => n.fire({ position: 'top', title: e, icon: t, timer: 2e3, showConfirmButton: !1 }),
        info(e) {
            this.information(e, 'info');
        },
        error(e) {
            this.information(e, 'error');
        },
        warning(e) {
            this.information(e, 'warning');
        },
        success(e) {
            this.information(e, 'success');
        },
        question(e) {
            this.information(e, 'question');
        },
    },
    s = {
        getItem: (e) =>
            new Promise((t, a) => {
                o.getItem(e)
                    .then((e) => {
                        t(e);
                    })
                    .catch((e) => {
                        a(e);
                    });
            }),
        setItem: (e, t) =>
            new Promise((a, r) => {
                o.setItem(e, t)
                    .then((e) => {
                        a(e);
                    })
                    .catch((e) => {
                        r(e);
                    });
            }),
        removeItem: (e) =>
            new Promise((t, a) => {
                o.removeItem(e)
                    .then(() => {
                        t();
                    })
                    .catch((e) => {
                        a(e);
                    });
            }),
        clear: () =>
            new Promise((e, t) => {
                o.clear()
                    .then(() => {
                        e();
                    })
                    .catch((e) => {
                        t(e);
                    });
            }),
        length: () =>
            new Promise((e, t) => {
                o.length()
                    .then((t) => {
                        e(t);
                    })
                    .catch((e) => {
                        t(e);
                    });
            }),
        key: (e) =>
            new Promise((t, a) => {
                o.key(e)
                    .then((e) => {
                        t(e);
                    })
                    .catch((e) => {
                        a(e);
                    });
            }),
        keys: () =>
            new Promise((e, t) => {
                o.keys()
                    .then((t) => {
                        e(t);
                    })
                    .catch((e) => {
                        t(e);
                    });
            }),
        iterate: () =>
            new Promise((e, t) => {
                o.iterate((t, a, r) => {
                    e([t, a, r]);
                })
                    .then((t) => {
                        e(t);
                    })
                    .catch((e) => {
                        t(e);
                    });
            }),
        setDriver: (e) =>
            new Promise((t, a) => {
                t(o.setDriver(e));
            }),
        config: (e) =>
            new Promise((t, a) => {
                t(o.config(e));
            }),
        createInstance: (e) =>
            new Promise((t, a) => {
                t(o.createInstance(e));
            }),
    },
    c = {
        setObject(e, t) {
            localStorage.setItem(e, JSON.stringify(t));
        },
        getObject(e) {
            let t = localStorage.getItem(e);
            return t ? JSON.parse(t) : null;
        },
        setItem(e, t) {
            localStorage.setItem(e, t);
        },
        getItem: (e) => localStorage.getItem(e),
        removeItem(e) {
            localStorage.removeItem(e);
        },
        clear() {
            localStorage.clear();
        },
        isExist: (e) => !(!e || !(e in localStorage)),
    },
    l = {
        array: {
            groupBy(e, t) {
                const a = {};
                return (
                    e.forEach(function (e) {
                        const r = t(e);
                        (a[r] = a[r] || []), a[r].push(e);
                    }),
                    Object.keys(a).map(function (e) {
                        return a[e];
                    })
                );
            },
            sort: (e, t) =>
                e.sort(function (e, a) {
                    var r = e[t],
                        o = a[t];
                    return r < o ? -1 : r > o ? 1 : 0;
                }),
            find: (e, t, a) => e.find((e) => e[a] === t[a]),
            remove(e, t, a) {
                const r = e.findIndex((e) => e[a] === t[a]);
                return e.splice(r, 1), e;
            },
        },
        object: {
            isEmpty(e) {
                if (e) {
                    let t = Object.keys(e);
                    return !(t && t.length > 0);
                }
                return !0;
            },
        },
    };
e.locale('zh-cn');
var g = Object.freeze({
    __proto__: null,
    notify: i,
    swal: n,
    moment: e,
    storage: s,
    storageSync: c,
    lodash: t,
    shortid: a,
    tools: l,
});
var m = Object.freeze({
    __proto__: null,
    en: {
        $vuetify: {
            badge: 'Badge',
            close: 'Close',
            dataIterator: { noResultsText: 'No matching records found', loadingText: 'Loading items...' },
            dataTable: {
                itemsPerPageText: 'Rows per page:',
                ariaLabel: {
                    sortDescending: 'Sorted descending.',
                    sortAscending: 'Sorted ascending.',
                    sortNone: 'Not sorted.',
                    activateNone: 'Activate to remove sorting.',
                    activateDescending: 'Activate to sort descending.',
                    activateAscending: 'Activate to sort ascending.',
                },
                sortBy: 'Sort by',
            },
            dataFooter: {
                itemsPerPageText: 'Items per page:',
                itemsPerPageAll: 'All',
                nextPage: 'Next page',
                prevPage: 'Previous page',
                firstPage: 'First page',
                lastPage: 'Last page',
                pageText: '{0}-{1} of {2}',
            },
            datePicker: {
                itemsSelected: '{0} selected',
                nextMonthAriaLabel: 'Next month',
                nextYearAriaLabel: 'Next year',
                prevMonthAriaLabel: 'Previous month',
                prevYearAriaLabel: 'Previous year',
            },
            noDataText: 'No data available',
            carousel: {
                prev: 'Previous visual',
                next: 'Next visual',
                ariaLabel: { delimiter: 'Carousel slide {0} of {1}' },
            },
            calendar: { moreEvents: '{0} more' },
            fileInput: { counter: '{0} files', counterSize: '{0} files ({1} in total)' },
            timePicker: { am: 'AM', pm: 'PM' },
            pagination: {
                ariaLabel: {
                    wrapper: 'Pagination Navigation',
                    next: 'Next page',
                    previous: 'Previous page',
                    page: 'Goto Page {0}',
                    currentPage: 'Current Page, Page {0}',
                },
            },
        },
    },
    zh: {
        $vuetify: {
            badge: '徽章',
            close: '关闭',
            dataIterator: { noResultsText: '没有符合条件的结果', loadingText: '加载中……' },
            dataTable: {
                itemsPerPageText: '每页数目：',
                ariaLabel: {
                    sortDescending: '：降序排列。',
                    sortAscending: '：升序排列。',
                    sortNone: '：未排序。',
                    activateNone: '点击以移除排序。',
                    activateDescending: '点击以降序排列。',
                    activateAscending: '点击以升序排列。',
                },
                sortBy: '排序方式',
            },
            dataFooter: {
                itemsPerPageText: '每页数目：',
                itemsPerPageAll: '全部',
                nextPage: '下一页',
                prevPage: '上一页',
                firstPage: '首页',
                lastPage: '尾页',
                pageText: '{0}-{1} 共 {2}',
            },
            datePicker: {
                itemsSelected: '已选择 {0}',
                nextMonthAriaLabel: '下个月',
                nextYearAriaLabel: '明年',
                prevMonthAriaLabel: '前一个月',
                prevYearAriaLabel: '前一年',
            },
            noDataText: '没有数据',
            carousel: { prev: '上一张', next: '下一张', ariaLabel: { delimiter: 'Carousel slide {0} of {1}' } },
            calendar: { moreEvents: '还有 {0} 项' },
            fileInput: { counter: '{0} 个文件', counterSize: '{0} 个文件（共 {1}）' },
            timePicker: { am: 'AM', pm: 'PM' },
            pagination: {
                ariaLabel: {
                    wrapper: '分页导航',
                    next: '下一页',
                    previous: '上一页',
                    page: '转到页面 {0}',
                    currentPage: '当前页 {0}',
                },
            },
        },
    },
});
export { g as lib, m as locales };
