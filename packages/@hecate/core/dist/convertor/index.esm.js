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
            'menuitem'
        ];
    }
    static build(t) {
        if (!t || !t.tag) return '';
        const r = e.attributes(t);
        if (e.isSelfCloseTag(t)) return `<${t.tag} ${r}/>`;
        const n = e.children(t);
        return `<${t.tag} ${r}>${n}</${t.tag}>`;
    }
    static unbuild(t) {
        if (!t) return {};
        const e = document.createElement('html');
        e.innerHTML = t;
        const n = e.querySelector('body');
        if (!n) return {};
        const [s] = n.children;
        return s ? r.node2json(s) : {};
    }
}
class e {
    static attributes(t) {
        if (!t.attributes) return '';
        let e = '';
        const r = Object.keys(t.attributes);
        for (const n in r) ({}.hasOwnProperty.call(r, n) && (e += ` ${r[n]}="${t.attributes[r[n]]}"`));
        return e;
    }
    static children(e) {
        if (!e.children) return '';
        let r = '';
        for (const n in e.children)
            ({}.hasOwnProperty.call(e.children, n) &&
                ('object' == typeof e.children[n] ? (r += t.build(e.children[n])) : (r += e.children[n])));
        return r;
    }
    static isSelfCloseTag(e) {
        return t.selfCloseTags.indexOf(e.tag) > -1;
    }
}
class r {
    static attributes(t) {
        const e = {},
            r = Object.keys(t.attributes);
        for (const n in r)
            if ({}.hasOwnProperty.call(r, n)) {
                const s = r[n],
                    i = t.attributes[s];
                e[i.name] = i.value;
            }
        return e;
    }
    static children(t) {
        const e = [];
        for (const n in t.childNodes)
            t.childNodes[n].nodeType === Node.ELEMENT_NODE && e.push(r.node2json(t.childNodes[n])),
                t.childNodes[n].nodeType === Node.TEXT_NODE && e.push(t.childNodes[n].textContent);
        return e;
    }
    static node2json(t) {
        return { tag: t.tagName.toLowerCase(), attributes: r.attributes(t), children: r.children(t) };
    }
}
const n = t;
export { n as json2html };
