!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('moment'),
              require('lodash'),
              require('shortid'),
              require('sweetalert2'),
              require('@babel/runtime-corejs3/core-js/json/stringify'),
              require('@babel/runtime-corejs3/core-js/instance/keys'),
              require('@babel/runtime-corejs3/core-js/promise'),
              require('localforage'),
              require('@babel/runtime-corejs3/core-js/instance/splice'),
              require('@babel/runtime-corejs3/core-js/instance/find-index'),
              require('@babel/runtime-corejs3/core-js/instance/find'),
              require('@babel/runtime-corejs3/core-js/instance/sort'),
              require('@babel/runtime-corejs3/core-js/object/keys'),
              require('@babel/runtime-corejs3/core-js/instance/map'),
              require('@babel/runtime-corejs3/core-js/instance/for-each'),
              require('core-js/modules/es.function.name'),
              require('@babel/runtime-corejs3/core-js/instance/index-of'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('@babel/runtime-corejs3/helpers/esm/slicedToArray'),
              require('@babel/runtime-corejs3/core-js/instance/concat'),
              require('@babel/runtime-corejs3/helpers/esm/classCallCheck'),
              require('@babel/runtime-corejs3/helpers/esm/createClass')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'moment',
              'lodash',
              'shortid',
              'sweetalert2',
              '@babel/runtime-corejs3/core-js/json/stringify',
              '@babel/runtime-corejs3/core-js/instance/keys',
              '@babel/runtime-corejs3/core-js/promise',
              'localforage',
              '@babel/runtime-corejs3/core-js/instance/splice',
              '@babel/runtime-corejs3/core-js/instance/find-index',
              '@babel/runtime-corejs3/core-js/instance/find',
              '@babel/runtime-corejs3/core-js/instance/sort',
              '@babel/runtime-corejs3/core-js/object/keys',
              '@babel/runtime-corejs3/core-js/instance/map',
              '@babel/runtime-corejs3/core-js/instance/for-each',
              'core-js/modules/es.function.name',
              '@babel/runtime-corejs3/core-js/instance/index-of',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              '@babel/runtime-corejs3/helpers/esm/slicedToArray',
              '@babel/runtime-corejs3/core-js/instance/concat',
              '@babel/runtime-corejs3/helpers/esm/classCallCheck',
              '@babel/runtime-corejs3/helpers/esm/createClass',
          ], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              e.moment,
              e.lodash,
              e.shortid,
              e.Swal,
              e._JSON$stringify,
              e._keysInstanceProperty,
              e._Promise,
              e.localForage,
              e._spliceInstanceProperty,
              e._findIndexInstanceProperty,
              e._findInstanceProperty,
              e._sortInstanceProperty,
              e._Object$keys,
              e._mapInstanceProperty,
              e._forEachInstanceProperty,
              null,
              e._indexOfInstanceProperty,
              e._typeof,
              e._slicedToArray,
              e._concatInstanceProperty,
              e._classCallCheck,
              e._createClass
          );
})(this, function (e, t, r, n, a, o, i, c, u, l, s, f, d, m, b, g, p, h, j, v, y, P, x) {
    'use strict';
    function _(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    function I(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return (
            e &&
                Object.keys(e).forEach(function (r) {
                    if ('default' !== r) {
                        var n = Object.getOwnPropertyDescriptor(e, r);
                        Object.defineProperty(
                            t,
                            r,
                            n.get
                                ? n
                                : {
                                      enumerable: !0,
                                      get: function () {
                                          return e[r];
                                      },
                                  }
                        );
                    }
                }),
            (t.default = e),
            Object.freeze(t)
        );
    }
    var k = _(t),
        q = I(r),
        T = _(n),
        w = _(a),
        N = _(o),
        A = _(i),
        S = _(c),
        O = _(u),
        C = _(l),
        L = _(s),
        E = _(f),
        M = _(d),
        D = _(m),
        z = _(b),
        B = _(g),
        F = _(h),
        Y = _(j),
        $ = _(v),
        R = _(y),
        J = _(P),
        G = _(x);
    require('core-js/modules/es.regexp.exec'), require('core-js/modules/es.string.replace');
    var H = require('@babel/runtime-corejs3/core-js/instance/slice'),
        X = require('@babel/runtime-corejs3/helpers/typeof');
    String.prototype.format = function (e) {
        var t = function (e, t) {
            return (
                (t = 'object' === X(t) ? t : H(Array.prototype).call(arguments, 1)),
                e.replace(/\{\{|\}\}|\{(\w+)\}/g, function (e, r) {
                    return '{{' == e ? '{' : '}}' == e ? '}' : t[r];
                })
            );
        };
        return t(this, (e = 'object' === X(e) ? e : H(Array.prototype).call(arguments, 0)));
    };
    var K = w.default,
        Q = {
            information: function (e, t) {
                return K.fire({ position: 'top', title: e, icon: t, timer: 2e3, showConfirmButton: !1 });
            },
            info: function (e) {
                this.information(e, 'info');
            },
            error: function (e) {
                this.information(e, 'error');
            },
            warning: function (e) {
                this.information(e, 'warning');
            },
            success: function (e) {
                this.information(e, 'success');
            },
            question: function (e) {
                this.information(e, 'question');
            },
        },
        U = {
            getItem: function (e) {
                return new S.default(function (t, r) {
                    O.default
                        .getItem(e)
                        .then(function (e) {
                            t(e);
                        })
                        .catch(function (e) {
                            r(e);
                        });
                });
            },
            setItem: function (e, t) {
                return new S.default(function (r, n) {
                    O.default
                        .setItem(e, t)
                        .then(function (e) {
                            r(e);
                        })
                        .catch(function (e) {
                            n(e);
                        });
                });
            },
            removeItem: function (e) {
                return new S.default(function (t, r) {
                    O.default
                        .removeItem(e)
                        .then(function () {
                            t();
                        })
                        .catch(function (e) {
                            r(e);
                        });
                });
            },
            clear: function () {
                return new S.default(function (e, t) {
                    O.default
                        .clear()
                        .then(function () {
                            e();
                        })
                        .catch(function (e) {
                            t(e);
                        });
                });
            },
            length: function () {
                return new S.default(function (e, t) {
                    O.default
                        .length()
                        .then(function (t) {
                            e(t);
                        })
                        .catch(function (e) {
                            t(e);
                        });
                });
            },
            key: function (e) {
                return new S.default(function (t, r) {
                    O.default
                        .key(e)
                        .then(function (e) {
                            t(e);
                        })
                        .catch(function (e) {
                            r(e);
                        });
                });
            },
            keys: function () {
                return new S.default(function (e, t) {
                    A.default(O.default)
                        .call(O.default)
                        .then(function (t) {
                            e(t);
                        })
                        .catch(function (e) {
                            t(e);
                        });
                });
            },
            iterate: function () {
                return new S.default(function (e, t) {
                    O.default
                        .iterate(function (t, r, n) {
                            e([t, r, n]);
                        })
                        .then(function (t) {
                            e(t);
                        })
                        .catch(function (e) {
                            t(e);
                        });
                });
            },
            setDriver: function (e) {
                return new S.default(function (t, r) {
                    t(O.default.setDriver(e));
                });
            },
            config: function (e) {
                return new S.default(function (t, r) {
                    t(O.default.config(e));
                });
            },
            createInstance: function (e) {
                return new S.default(function (t, r) {
                    t(O.default.createInstance(e));
                });
            },
        },
        V = {
            setObject: function (e, t) {
                localStorage.setItem(e, N.default(t));
            },
            getObject: function (e) {
                var t = localStorage.getItem(e);
                return t ? JSON.parse(t) : null;
            },
            setItem: function (e, t) {
                localStorage.setItem(e, t);
            },
            getItem: function (e) {
                return localStorage.getItem(e);
            },
            removeItem: function (e) {
                localStorage.removeItem(e);
            },
            clear: function () {
                localStorage.clear();
            },
            isExist: function (e) {
                return !(!e || !(e in localStorage));
            },
        },
        W = {
            array: {
                groupBy: function (e, t) {
                    var r,
                        n = {};
                    return (
                        B.default(e).call(e, function (e) {
                            var r = t(e);
                            (n[r] = n[r] || []), n[r].push(e);
                        }),
                        z.default((r = D.default(n))).call(r, function (e) {
                            return n[e];
                        })
                    );
                },
                sort: function (e, t) {
                    return M.default(e).call(e, function (e, r) {
                        var n = e[t],
                            a = r[t];
                        return n < a ? -1 : n > a ? 1 : 0;
                    });
                },
                find: function (e, t, r) {
                    return E.default(e).call(e, function (e) {
                        return e[r] === t[r];
                    });
                },
                remove: function (e, t, r) {
                    var n = L.default(e).call(e, function (e) {
                        return e[r] === t[r];
                    });
                    return C.default(e).call(e, n, 1), e;
                },
            },
            object: {
                isEmpty: function (e) {
                    if (e) {
                        var t = D.default(e);
                        return !(t && t.length > 0);
                    }
                    return !0;
                },
            },
        };
    k.default.locale('zh-cn');
    var Z = Object.freeze({
            __proto__: null,
            notify: Q,
            swal: K,
            moment: k.default,
            storage: U,
            storageSync: V,
            lodash: q,
            shortid: T.default,
            tools: W,
        }),
        ee = Object.freeze({
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
        }),
        te = (function () {
            function e() {
                J.default(this, e);
            }
            return (
                G.default(e, null, [
                    {
                        key: 'build',
                        value: function (e) {
                            var t, r, n;
                            if (!e || !e.tag) return '';
                            var a,
                                o = re.attributes(e);
                            if (re.isSelfCloseTag(e)) return R.default((a = '<'.concat(e.tag, ' '))).call(a, o, '/>');
                            var i = re.children(e);
                            return R.default(
                                (t = R.default((r = R.default((n = '<'.concat(e.tag, ' '))).call(n, o, '>'))).call(
                                    r,
                                    i,
                                    '</'
                                ))
                            ).call(t, e.tag, '>');
                        },
                    },
                    {
                        key: 'unbuild',
                        value: function (e) {
                            if (!e) return {};
                            var t = document.createElement('html');
                            t.innerHTML = e;
                            var r = t.querySelector('body');
                            if (!r) return {};
                            var n = $.default(r.children, 1)[0];
                            return n ? ne.node2json(n) : {};
                        },
                    },
                    {
                        key: 'selfCloseTags',
                        get: function () {
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
                                'menuitem',
                            ];
                        },
                    },
                ]),
                e
            );
        })(),
        re = (function () {
            function e() {
                J.default(this, e);
            }
            return (
                G.default(e, null, [
                    {
                        key: 'attributes',
                        value: function (e) {
                            if (!e.attributes) return '';
                            var t = '',
                                r = D.default(e.attributes);
                            for (var n in r) {
                                var a;
                                if ({}.hasOwnProperty.call(r, n))
                                    t += R.default((a = ' '.concat(r[n], '="'))).call(a, e.attributes[r[n]], '"');
                            }
                            return t;
                        },
                    },
                    {
                        key: 'children',
                        value: function (e) {
                            if (!e.children) return '';
                            var t = '';
                            for (var r in e.children)
                                ({}.hasOwnProperty.call(e.children, r) &&
                                    ('object' == Y.default(e.children[r])
                                        ? (t += te.build(e.children[r]))
                                        : (t += e.children[r])));
                            return t;
                        },
                    },
                    {
                        key: 'isSelfCloseTag',
                        value: function (e) {
                            var t;
                            return F.default((t = te.selfCloseTags)).call(t, e.tag) > -1;
                        },
                    },
                ]),
                e
            );
        })(),
        ne = (function () {
            function e() {
                J.default(this, e);
            }
            return (
                G.default(e, null, [
                    {
                        key: 'attributes',
                        value: function (e) {
                            var t = {},
                                r = D.default(e.attributes);
                            for (var n in r)
                                if ({}.hasOwnProperty.call(r, n)) {
                                    var a = r[n],
                                        o = e.attributes[a];
                                    t[o.name] = o.value;
                                }
                            return t;
                        },
                    },
                    {
                        key: 'children',
                        value: function (t) {
                            var r = [];
                            for (var n in t.childNodes)
                                t.childNodes[n].nodeType === Node.ELEMENT_NODE && r.push(e.node2json(t.childNodes[n])),
                                    t.childNodes[n].nodeType === Node.TEXT_NODE && r.push(t.childNodes[n].textContent);
                            return r;
                        },
                    },
                    {
                        key: 'node2json',
                        value: function (t) {
                            return {
                                tag: t.tagName.toLowerCase(),
                                attributes: e.attributes(t),
                                children: e.children(t),
                            };
                        },
                    },
                ]),
                e
            );
        })(),
        ae = te,
        oe = Object.freeze({ __proto__: null, json2html: ae });
    (e.convertor = oe), (e.lib = Z), (e.locales = ee), Object.defineProperty(e, '__esModule', { value: !0 });
});
