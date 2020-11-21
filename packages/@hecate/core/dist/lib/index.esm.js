import n from 'moment';
export { default as moment } from 'moment';
import * as t from 'lodash';
export { t as lodash };
export { default as shortid } from 'shortid';
import e from 'sweetalert2';
import r from '@babel/runtime-corejs3/core-js/json/stringify';
import o from '@babel/runtime-corejs3/core-js/instance/keys';
import c from '@babel/runtime-corejs3/core-js/promise';
import i from 'localforage';
import u from '@babel/runtime-corejs3/core-js/instance/splice';
import f from '@babel/runtime-corejs3/core-js/instance/find-index';
import a from '@babel/runtime-corejs3/core-js/instance/find';
import s from '@babel/runtime-corejs3/core-js/instance/sort';
import m from '@babel/runtime-corejs3/core-js/object/keys';
import l from '@babel/runtime-corejs3/core-js/instance/map';
import p from '@babel/runtime-corejs3/core-js/instance/for-each';
require('core-js/modules/es.regexp.exec'), require('core-js/modules/es.string.replace');
var h = require('@babel/runtime-corejs3/core-js/instance/slice'),
    j = require('@babel/runtime-corejs3/helpers/typeof');
String.prototype.format = function(n) {
    var t = function(n, t) {
        return (
            (t = 'object' === j(t) ? t : h(Array.prototype).call(arguments, 1)),
            n.replace(/\{\{|\}\}|\{(\w+)\}/g, function(n, e) {
                return '{{' == n ? '{' : '}}' == n ? '}' : t[e];
            })
        );
    };
    return t(this, (n = 'object' === j(n) ? n : h(Array.prototype).call(arguments, 0)));
};
var b = e,
    g = {
        information: function(n, t) {
            return b.fire({ position: 'top', title: n, icon: t, timer: 2e3, showConfirmButton: !1 });
        },
        info: function(n) {
            this.information(n, 'info');
        },
        error: function(n) {
            this.information(n, 'error');
        },
        warning: function(n) {
            this.information(n, 'warning');
        },
        success: function(n) {
            this.information(n, 'success');
        },
        question: function(n) {
            this.information(n, 'question');
        }
    },
    v = {
        getItem: function(n) {
            return new c(function(t, e) {
                i.getItem(n)
                    .then(function(n) {
                        t(n);
                    })
                    .catch(function(n) {
                        e(n);
                    });
            });
        },
        setItem: function(n, t) {
            return new c(function(e, r) {
                i.setItem(n, t)
                    .then(function(n) {
                        e(n);
                    })
                    .catch(function(n) {
                        r(n);
                    });
            });
        },
        removeItem: function(n) {
            return new c(function(t, e) {
                i.removeItem(n)
                    .then(function() {
                        t();
                    })
                    .catch(function(n) {
                        e(n);
                    });
            });
        },
        clear: function() {
            return new c(function(n, t) {
                i.clear()
                    .then(function() {
                        n();
                    })
                    .catch(function(n) {
                        t(n);
                    });
            });
        },
        length: function() {
            return new c(function(n, t) {
                i.length()
                    .then(function(t) {
                        n(t);
                    })
                    .catch(function(n) {
                        t(n);
                    });
            });
        },
        key: function(n) {
            return new c(function(t, e) {
                i.key(n)
                    .then(function(n) {
                        t(n);
                    })
                    .catch(function(n) {
                        e(n);
                    });
            });
        },
        keys: function() {
            return new c(function(n, t) {
                o(i)
                    .call(i)
                    .then(function(t) {
                        n(t);
                    })
                    .catch(function(n) {
                        t(n);
                    });
            });
        },
        iterate: function() {
            return new c(function(n, t) {
                i.iterate(function(t, e, r) {
                    n([t, e, r]);
                })
                    .then(function(t) {
                        n(t);
                    })
                    .catch(function(n) {
                        t(n);
                    });
            });
        },
        setDriver: function(n) {
            return new c(function(t, e) {
                t(i.setDriver(n));
            });
        },
        config: function(n) {
            return new c(function(t, e) {
                t(i.config(n));
            });
        },
        createInstance: function(n) {
            return new c(function(t, e) {
                t(i.createInstance(n));
            });
        }
    },
    w = {
        setObject: function(n, t) {
            localStorage.setItem(n, r(t));
        },
        getObject: function(n) {
            var t = localStorage.getItem(n);
            return t ? JSON.parse(t) : null;
        },
        setItem: function(n, t) {
            localStorage.setItem(n, t);
        },
        getItem: function(n) {
            return localStorage.getItem(n);
        },
        removeItem: function(n) {
            localStorage.removeItem(n);
        },
        clear: function() {
            localStorage.clear();
        },
        isExist: function(n) {
            return !(!n || !(n in localStorage));
        }
    },
    I = {
        array: {
            groupBy: function(n, t) {
                var e,
                    r = {};
                return (
                    p(n).call(n, function(n) {
                        var e = t(n);
                        (r[e] = r[e] || []), r[e].push(n);
                    }),
                    l((e = m(r))).call(e, function(n) {
                        return r[n];
                    })
                );
            },
            sort: function(n, t) {
                return s(n).call(n, function(n, e) {
                    var r = n[t],
                        o = e[t];
                    return r < o ? -1 : r > o ? 1 : 0;
                });
            },
            find: function(n, t, e) {
                return a(n).call(n, function(n) {
                    return n[e] === t[e];
                });
            },
            remove: function(n, t, e) {
                var r = f(n).call(n, function(n) {
                    return n[e] === t[e];
                });
                return u(n).call(n, r, 1), n;
            }
        },
        object: {
            isEmpty: function(n) {
                if (n) {
                    var t = m(n);
                    return !(t && t.length > 0);
                }
                return !0;
            }
        }
    };
n.locale('zh-cn');
export { g as notify, v as storage, w as storageSync, b as swal, I as tools };
