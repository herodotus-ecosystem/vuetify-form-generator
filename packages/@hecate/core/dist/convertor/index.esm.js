import 'core-js/modules/es.function.name.js';
import e from '@babel/runtime-corejs3/core-js/instance/index-of';
import r from '@babel/runtime-corejs3/helpers/esm/typeof';
import t from '@babel/runtime-corejs3/core-js/object/keys';
import n from '@babel/runtime-corejs3/helpers/esm/slicedToArray';
import a from '@babel/runtime-corejs3/core-js/instance/concat';
import o from '@babel/runtime-corejs3/helpers/esm/classCallCheck';
import i from '@babel/runtime-corejs3/helpers/esm/createClass';
var l = (function () {
        function e() {
            o(this, e);
        }
        return (
            i(e, null, [
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
                {
                    key: 'build',
                    value: function (e) {
                        var r, t, n;
                        if (!e || !e.tag) return '';
                        var o,
                            i = c.attributes(e);
                        if (c.isSelfCloseTag(e)) return a((o = '<'.concat(e.tag, ' '))).call(o, i, '/>');
                        var l = c.children(e);
                        return a((r = a((t = a((n = '<'.concat(e.tag, ' '))).call(n, i, '>'))).call(t, l, '</'))).call(
                            r,
                            e.tag,
                            '>'
                        );
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
                        var a = n(t.children, 1)[0];
                        return a ? u.node2json(a) : {};
                    },
                },
            ]),
            e
        );
    })(),
    c = (function () {
        function n() {
            o(this, n);
        }
        return (
            i(n, null, [
                {
                    key: 'attributes',
                    value: function (e) {
                        if (!e.attributes) return '';
                        var r = '',
                            n = t(e.attributes);
                        for (var o in n) {
                            var i;
                            if ({}.hasOwnProperty.call(n, o))
                                r += a((i = ' '.concat(n[o], '="'))).call(i, e.attributes[n[o]], '"');
                        }
                        return r;
                    },
                },
                {
                    key: 'children',
                    value: function (e) {
                        if (!e.children) return '';
                        var t = '';
                        for (var n in e.children)
                            ({}.hasOwnProperty.call(e.children, n) &&
                                ('object' == r(e.children[n]) ? (t += l.build(e.children[n])) : (t += e.children[n])));
                        return t;
                    },
                },
                {
                    key: 'isSelfCloseTag',
                    value: function (r) {
                        var t;
                        return e((t = l.selfCloseTags)).call(t, r.tag) > -1;
                    },
                },
            ]),
            n
        );
    })(),
    u = (function () {
        function e() {
            o(this, e);
        }
        return (
            i(e, null, [
                {
                    key: 'attributes',
                    value: function (e) {
                        var r = {},
                            n = t(e.attributes);
                        for (var a in n)
                            if ({}.hasOwnProperty.call(n, a)) {
                                var o = n[a],
                                    i = e.attributes[o];
                                r[i.name] = i.value;
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
                        return { tag: r.tagName.toLowerCase(), attributes: e.attributes(r), children: e.children(r) };
                    },
                },
            ]),
            e
        );
    })(),
    s = l;
export { s as json2html };
