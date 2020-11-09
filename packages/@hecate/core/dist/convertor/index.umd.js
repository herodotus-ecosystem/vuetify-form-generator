!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(exports)
        : 'function' == typeof define && define.amd
        ? define(['exports'], t)
        : t(((e = 'undefined' != typeof globalThis ? globalThis : e || self).convertor = {}));
})(this, function (e) {
    'use strict';
    class t {
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
                'menuitem',
            ];
        }
        static build(e) {
            if (!e || !e.tag) return '';
            const t = n.attributes(e);
            if (n.isSelfCloseTag(e)) return `<${e.tag} ${t}/>`;
            const r = n.children(e);
            return `<${e.tag} ${t}>${r}</${e.tag}>`;
        }
        static unbuild(e) {
            if (!e) return {};
            const t = document.createElement('html');
            t.innerHTML = e;
            const n = t.querySelector('body');
            if (!n) return {};
            const [s] = n.children;
            return s ? r.node2json(s) : {};
        }
    }
    class n {
        static attributes(e) {
            if (!e.attributes) return '';
            let t = '';
            const n = Object.keys(e.attributes);
            for (const r in n) ({}.hasOwnProperty.call(n, r) && (t += ` ${n[r]}="${e.attributes[n[r]]}"`));
            return t;
        }
        static children(e) {
            if (!e.children) return '';
            let n = '';
            for (const r in e.children)
                ({}.hasOwnProperty.call(e.children, r) &&
                    ('object' == typeof e.children[r] ? (n += t.build(e.children[r])) : (n += e.children[r])));
            return n;
        }
        static isSelfCloseTag(e) {
            return t.selfCloseTags.indexOf(e.tag) > -1;
        }
    }
    class r {
        static attributes(e) {
            const t = {},
                n = Object.keys(e.attributes);
            for (const r in n)
                if ({}.hasOwnProperty.call(n, r)) {
                    const s = n[r],
                        i = e.attributes[s];
                    t[i.name] = i.value;
                }
            return t;
        }
        static children(e) {
            const t = [];
            for (const n in e.childNodes)
                e.childNodes[n].nodeType === Node.ELEMENT_NODE && t.push(r.node2json(e.childNodes[n])),
                    e.childNodes[n].nodeType === Node.TEXT_NODE && t.push(e.childNodes[n].textContent);
            return t;
        }
        static node2json(e) {
            return { tag: e.tagName.toLowerCase(), attributes: r.attributes(e), children: r.children(e) };
        }
    }
    const s = t;
    (e.json2html = s), Object.defineProperty(e, '__esModule', { value: !0 });
});
