!(function (e, r) {
    'object' == typeof exports && 'undefined' != typeof module
        ? r(
              exports,
              require('core-js/modules/es.function.name.js'),
              require('@babel/runtime-corejs3/core-js/instance/index-of'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('@babel/runtime-corejs3/core-js/object/keys'),
              require('@babel/runtime-corejs3/helpers/esm/slicedToArray'),
              require('@babel/runtime-corejs3/core-js/instance/concat'),
              require('@babel/runtime-corejs3/helpers/esm/classCallCheck'),
              require('@babel/runtime-corejs3/helpers/esm/createClass')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name.js',
              '@babel/runtime-corejs3/core-js/instance/index-of',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              '@babel/runtime-corejs3/core-js/object/keys',
              '@babel/runtime-corejs3/helpers/esm/slicedToArray',
              '@babel/runtime-corejs3/core-js/instance/concat',
              '@babel/runtime-corejs3/helpers/esm/classCallCheck',
              '@babel/runtime-corejs3/helpers/esm/createClass',
          ], r)
        : r(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).convertor = {}),
              null,
              e._indexOfInstanceProperty,
              e._typeof,
              e._Object$keys,
              e._slicedToArray,
              e._concatInstanceProperty,
              e._classCallCheck,
              e._createClass
          );
})(this, function (e, r, t, n, a, l, u, s, o) {
    'use strict';
    function i(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var c = i(t),
        d = i(n),
        f = i(a),
        b = i(l),
        h = i(u),
        m = i(s),
        j = i(o),
        y = (function () {
            function e() {
                m.default(this, e);
            }
            return (
                j.default(e, null, [
                    {
                        key: 'build',
                        value: function (e) {
                            var r, t, n;
                            if (!e || !e.tag) return '';
                            var a,
                                l = p.attributes(e);
                            if (p.isSelfCloseTag(e)) return h.default((a = '<'.concat(e.tag, ' '))).call(a, l, '/>');
                            var u = p.children(e);
                            return h
                                .default(
                                    (r = h
                                        .default((t = h.default((n = '<'.concat(e.tag, ' '))).call(n, l, '>')))
                                        .call(t, u, '</'))
                                )
                                .call(r, e.tag, '>');
                        },
                    },
                    {
                        key: 'unbuild',
                        value: function (e) {
                            if (!e) return {};
                            var r = document.createElement('html');
                            r.innerHTML = e;
                            var t = r.querySelector('body');
                            if (!t) return {};
                            var n = b.default(t.children, 1)[0];
                            return n ? v.node2json(n) : {};
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
        p = (function () {
            function e() {
                m.default(this, e);
            }
            return (
                j.default(e, null, [
                    {
                        key: 'attributes',
                        value: function (e) {
                            if (!e.attributes) return '';
                            var r = '',
                                t = f.default(e.attributes);
                            for (var n in t) {
                                var a;
                                if ({}.hasOwnProperty.call(t, n))
                                    r += h.default((a = ' '.concat(t[n], '="'))).call(a, e.attributes[t[n]], '"');
                            }
                            return r;
                        },
                    },
                    {
                        key: 'children',
                        value: function (e) {
                            if (!e.children) return '';
                            var r = '';
                            for (var t in e.children)
                                ({}.hasOwnProperty.call(e.children, t) &&
                                    ('object' == d.default(e.children[t])
                                        ? (r += y.build(e.children[t]))
                                        : (r += e.children[t])));
                            return r;
                        },
                    },
                    {
                        key: 'isSelfCloseTag',
                        value: function (e) {
                            var r;
                            return c.default((r = y.selfCloseTags)).call(r, e.tag) > -1;
                        },
                    },
                ]),
                e
            );
        })(),
        v = (function () {
            function e() {
                m.default(this, e);
            }
            return (
                j.default(e, null, [
                    {
                        key: 'attributes',
                        value: function (e) {
                            var r = {},
                                t = f.default(e.attributes);
                            for (var n in t)
                                if ({}.hasOwnProperty.call(t, n)) {
                                    var a = t[n],
                                        l = e.attributes[a];
                                    r[l.name] = l.value;
                                }
                            return r;
                        },
                    },
                    {
                        key: 'children',
                        value: function (r) {
                            var t = [];
                            for (var n in r.childNodes)
                                r.childNodes[n].nodeType === Node.ELEMENT_NODE && t.push(e.node2json(r.childNodes[n])),
                                    r.childNodes[n].nodeType === Node.TEXT_NODE && t.push(r.childNodes[n].textContent);
                            return t;
                        },
                    },
                    {
                        key: 'node2json',
                        value: function (r) {
                            return {
                                tag: r.tagName.toLowerCase(),
                                attributes: e.attributes(r),
                                children: e.children(r),
                            };
                        },
                    },
                ]),
                e
            );
        })(),
        k = y;
    (e.json2html = k), Object.defineProperty(e, '__esModule', { value: !0 });
});
