import e from 'moment';
export { default as moment } from 'moment';
import * as t from 'lodash';
export { t as lodash };
export { default as shortid } from 'shortid';
import r from 'sweetalert2';
import o from 'localforage';
String.prototype.format = function (e) {
    var t = function (e, t) {
        return (
            (t = 'object' == typeof t ? t : Array.prototype.slice.call(arguments, 1)),
            e.replace(/\{\{|\}\}|\{(\w+)\}/g, function (e, r) {
                return '{{' == e ? '{' : '}}' == e ? '}' : t[r];
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
    c = {
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
            new Promise((r, n) => {
                o.setItem(e, t)
                    .then((e) => {
                        r(e);
                    })
                    .catch((e) => {
                        n(e);
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
                o.iterate((t, r, o) => {
                    e([t, r, o]);
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
            }),
    },
    a = {
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
    s = {
        array: {
            groupBy(e, t) {
                const r = {};
                return (
                    e.forEach(function (e) {
                        const o = t(e);
                        (r[o] = r[o] || []), r[o].push(e);
                    }),
                    Object.keys(r).map(function (e) {
                        return r[e];
                    })
                );
            },
            sort: (e, t) =>
                e.sort(function (e, r) {
                    var o = e[t],
                        n = r[t];
                    return o < n ? -1 : o > n ? 1 : 0;
                }),
            find: (e, t, r) => e.find((e) => e[r] === t[r]),
            remove(e, t, r) {
                const o = e.findIndex((e) => e[r] === t[r]);
                return e.splice(o, 1), e;
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
export { i as notify, c as storage, a as storageSync, n as swal, s as tools };
