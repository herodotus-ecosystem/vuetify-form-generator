import e from 'moment';
import * as t from 'lodash';
import r from 'shortid';
import a from 'sweetalert2';
import o from 'localforage';
String.prototype.format = function(e) {
    var t = function(e, t) {
        return (
            (t = 'object' == typeof t ? t : Array.prototype.slice.call(arguments, 1)),
            e.replace(/\{\{|\}\}|\{(\w+)\}/g, function(e, r) {
                return '{{' == e ? '{' : '}}' == e ? '}' : t[r];
            })
        );
    };
    return t(this, (e = 'object' == typeof e ? e : Array.prototype.slice.call(arguments, 0)));
};
const n = a,
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
        }
    },
    s = {
        getItem: (e) =>
            new Promise((t, r) => {
                o.getItem(e)
                    .then((e) => {
                        t(e);
                    })
                    .catch((e) => {
                        r(e);
                    });
            }),
        setItem: (e, t) =>
            new Promise((r, a) => {
                o.setItem(e, t)
                    .then((e) => {
                        r(e);
                    })
                    .catch((e) => {
                        a(e);
                    });
            }),
        removeItem: (e) =>
            new Promise((t, r) => {
                o.removeItem(e)
                    .then(() => {
                        t();
                    })
                    .catch((e) => {
                        r(e);
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
            new Promise((t, r) => {
                o.key(e)
                    .then((e) => {
                        t(e);
                    })
                    .catch((e) => {
                        r(e);
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
                o.iterate((t, r, a) => {
                    e([t, r, a]);
                })
                    .then((t) => {
                        e(t);
                    })
                    .catch((e) => {
                        t(e);
                    });
            }),
        setDriver: (e) =>
            new Promise((t, r) => {
                t(o.setDriver(e));
            }),
        config: (e) =>
            new Promise((t, r) => {
                t(o.config(e));
            }),
        createInstance: (e) =>
            new Promise((t, r) => {
                t(o.createInstance(e));
            })
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
        isExist: (e) => !(!e || !(e in localStorage))
    },
    l = {
        array: {
            groupBy(e, t) {
                const r = {};
                return (
                    e.forEach(function(e) {
                        const a = t(e);
                        (r[a] = r[a] || []), r[a].push(e);
                    }),
                    Object.keys(r).map(function(e) {
                        return r[e];
                    })
                );
            },
            sort: (e, t) =>
                e.sort(function(e, r) {
                    var a = e[t],
                        o = r[t];
                    return a < o ? -1 : a > o ? 1 : 0;
                }),
            find: (e, t, r) => e.find((e) => e[r] === t[r]),
            remove(e, t, r) {
                const a = e.findIndex((e) => e[r] === t[r]);
                return e.splice(a, 1), e;
            }
        },
        object: {
            isEmpty(e) {
                if (e) {
                    let t = Object.keys(e);
                    return !(t && t.length > 0);
                }
                return !0;
            }
        }
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
    shortid: r,
    tools: l
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
                    activateAscending: 'Activate to sort ascending.'
                },
                sortBy: 'Sort by'
            },
            dataFooter: {
                itemsPerPageText: 'Items per page:',
                itemsPerPageAll: 'All',
                nextPage: 'Next page',
                prevPage: 'Previous page',
                firstPage: 'First page',
                lastPage: 'Last page',
                pageText: '{0}-{1} of {2}'
            },
            datePicker: {
                itemsSelected: '{0} selected',
                nextMonthAriaLabel: 'Next month',
                nextYearAriaLabel: 'Next year',
                prevMonthAriaLabel: 'Previous month',
                prevYearAriaLabel: 'Previous year'
            },
            noDataText: 'No data available',
            carousel: {
                prev: 'Previous visual',
                next: 'Next visual',
                ariaLabel: { delimiter: 'Carousel slide {0} of {1}' }
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
                    currentPage: 'Current Page, Page {0}'
                }
            }
        }
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
                    activateAscending: '点击以升序排列。'
                },
                sortBy: '排序方式'
            },
            dataFooter: {
                itemsPerPageText: '每页数目：',
                itemsPerPageAll: '全部',
                nextPage: '下一页',
                prevPage: '上一页',
                firstPage: '首页',
                lastPage: '尾页',
                pageText: '{0}-{1} 共 {2}'
            },
            datePicker: {
                itemsSelected: '已选择 {0}',
                nextMonthAriaLabel: '下个月',
                nextYearAriaLabel: '明年',
                prevMonthAriaLabel: '前一个月',
                prevYearAriaLabel: '前一年'
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
                    currentPage: '当前页 {0}'
                }
            }
        }
    }
});
class u {
    static get selfCloseTags() {
        return [
            'area',
            'base',
            'br',
            'col',
            'embed',
            'hr',
            'img',
            'input',
            'link',
            'meta',
            'param',
            'source',
            'track',
            'wbr',
            'command',
            'keygen',
            'menuitem'
        ];
    }
    static build(e) {
        if (!e || !e.tag) return '';
        const t = d.attributes(e);
        if (d.isSelfCloseTag(e)) return `<${e.tag} ${t}/>`;
        const r = d.children(e);
        return `<${e.tag} ${t}>${r}</${e.tag}>`;
    }
    static unbuild(e) {
        if (!e) return {};
        const t = document.createElement('html');
        t.innerHTML = e;
        const r = t.querySelector('body');
        if (!r) return {};
        const [a] = r.children;
        return a ? p.node2json(a) : {};
    }
}
class d {
    static attributes(e) {
        if (!e.attributes) return '';
        let t = '';
        const r = Object.keys(e.attributes);
        for (const a in r) ({}.hasOwnProperty.call(r, a) && (t += ` ${r[a]}="${e.attributes[r[a]]}"`));
        return t;
    }
    static children(e) {
        if (!e.children) return '';
        let t = '';
        for (const r in e.children)
            ({}.hasOwnProperty.call(e.children, r) &&
                ('object' == typeof e.children[r] ? (t += u.build(e.children[r])) : (t += e.children[r])));
        return t;
    }
    static isSelfCloseTag(e) {
        return u.selfCloseTags.indexOf(e.tag) > -1;
    }
}
class p {
    static attributes(e) {
        const t = {},
            r = Object.keys(e.attributes);
        for (const a in r)
            if ({}.hasOwnProperty.call(r, a)) {
                const o = r[a],
                    n = e.attributes[o];
                t[n.name] = n.value;
            }
        return t;
    }
    static children(e) {
        const t = [];
        for (const r in e.childNodes)
            e.childNodes[r].nodeType === Node.ELEMENT_NODE && t.push(p.node2json(e.childNodes[r])),
                e.childNodes[r].nodeType === Node.TEXT_NODE && t.push(e.childNodes[r].textContent);
        return t;
    }
    static node2json(e) {
        return { tag: e.tagName.toLowerCase(), attributes: p.attributes(e), children: p.children(e) };
    }
}
const f = u;
var h = Object.freeze({ __proto__: null, json2html: f });
export { h as convertor, g as lib, m as locales };
