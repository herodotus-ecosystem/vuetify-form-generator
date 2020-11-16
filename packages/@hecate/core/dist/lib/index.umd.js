!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('moment'),
              require('lodash'),
              require('shortid'),
              require('sweetalert2'),
              require('localforage')
          )
        : 'function' == typeof define && define.amd
        ? define(['exports', 'moment', 'lodash', 'shortid', 'sweetalert2', 'localforage'], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).lib = {}),
              e.moment,
              e.lodash,
              e.shortid,
              e.Swal,
              e.localForage
          );
})(this, function (e, t, r, o, n, i) {
    'use strict';
    function a(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    function c(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return (
            e &&
                Object.keys(e).forEach(function (r) {
                    if ('default' !== r) {
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        Object.defineProperty(
                            t,
                            r,
                            o.get
                                ? o
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
    var l = a(t),
        s = c(r),
        f = a(o),
        u = a(n),
        m = a(i);
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
    const d = u.default,
        h = {
            information: (e, t) => d.fire({ position: 'top', title: e, icon: t, timer: 2e3, showConfirmButton: !1 }),
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
        g = {
            getItem: (e) =>
                new Promise((t, r) => {
                    m.default
                        .getItem(e)
                        .then((e) => {
                            t(e);
                        })
                        .catch((e) => {
                            r(e);
                        });
                }),
            setItem: (e, t) =>
                new Promise((r, o) => {
                    m.default
                        .setItem(e, t)
                        .then((e) => {
                            r(e);
                        })
                        .catch((e) => {
                            o(e);
                        });
                }),
            removeItem: (e) =>
                new Promise((t, r) => {
                    m.default
                        .removeItem(e)
                        .then(() => {
                            t();
                        })
                        .catch((e) => {
                            r(e);
                        });
                }),
            clear: () =>
                new Promise((e, t) => {
                    m.default
                        .clear()
                        .then(() => {
                            e();
                        })
                        .catch((e) => {
                            t(e);
                        });
                }),
            length: () =>
                new Promise((e, t) => {
                    m.default
                        .length()
                        .then((t) => {
                            e(t);
                        })
                        .catch((e) => {
                            t(e);
                        });
                }),
            key: (e) =>
                new Promise((t, r) => {
                    m.default
                        .key(e)
                        .then((e) => {
                            t(e);
                        })
                        .catch((e) => {
                            r(e);
                        });
                }),
            keys: () =>
                new Promise((e, t) => {
                    m.default
                        .keys()
                        .then((t) => {
                            e(t);
                        })
                        .catch((e) => {
                            t(e);
                        });
                }),
            iterate: () =>
                new Promise((e, t) => {
                    m.default
                        .iterate((t, r, o) => {
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
                    t(m.default.setDriver(e));
                }),
            config: (e) =>
                new Promise((t, r) => {
                    t(m.default.config(e));
                }),
            createInstance: (e) =>
                new Promise((t, r) => {
                    t(m.default.createInstance(e));
                }),
        },
        p = {
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
        y = {
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
    l.default.locale('zh-cn'),
        Object.defineProperty(e, 'moment', {
            enumerable: !0,
            get: function () {
                return l.default;
            },
        }),
        (e.lodash = s),
        Object.defineProperty(e, 'shortid', {
            enumerable: !0,
            get: function () {
                return f.default;
            },
        }),
        (e.notify = h),
        (e.storage = g),
        (e.storageSync = p),
        (e.swal = d),
        (e.tools = y),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
