export default class JSON2HTML {
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

    static build(json) {
        if (!json || !json.tag) return '';
        const attributes = JSON2HTMLBuilder.attributes(json);
        if (JSON2HTMLBuilder.isSelfCloseTag(json)) {
            return `<${json.tag} ${attributes}/>`;
        }
        const children = JSON2HTMLBuilder.children(json);
        return `<${json.tag} ${attributes}>${children}</${json.tag}>`;
    }

    static unbuild(html) {
        if (!html) return {};
        const el = document.createElement('html');
        el.innerHTML = html;
        const body = el.querySelector('body');
        if (!body) return {};
        const [first] = body.children;
        if (!first) return {};
        return JSON2HTMLUnbuilder.node2json(first);
    }
}

class JSON2HTMLBuilder {
    static attributes(json) {
        if (!json.attributes) return '';
        let html = '';
        const keys = Object.keys(json.attributes);
        for (const index in keys) {
            if ({}.hasOwnProperty.call(keys, index)) {
                html += ` ${keys[index]}="${json.attributes[keys[index]]}"`;
            }
        }
        return html;
    }

    static children(json) {
        if (!json.children) return '';
        let html = '';
        for (const index in json.children) {
            if ({}.hasOwnProperty.call(json.children, index)) {
                if (typeof json.children[index] == 'object') {
                    html += JSON2HTML.build(json.children[index]);
                } else {
                    html += json.children[index];
                }
            }
        }
        return html;
    }

    static isSelfCloseTag(json) {
        return JSON2HTML.selfCloseTags.indexOf(json.tag) > -1;
    }
}

class JSON2HTMLUnbuilder {
    static attributes(nodeEl) {
        const attributes = {};
        const keys = Object.keys(nodeEl.attributes);
        for (const index in keys) {
            if ({}.hasOwnProperty.call(keys, index)) {
                const key = keys[index];
                const attribute = nodeEl.attributes[key];
                attributes[attribute.name] = attribute.value;
            }
        }
        return attributes;
    }

    static children(nodeEl) {
        const children = [];
        for (const index in nodeEl.childNodes) {
            if (nodeEl.childNodes[index].nodeType === Node.ELEMENT_NODE) {
                children.push(JSON2HTMLUnbuilder.node2json(nodeEl.childNodes[index]));
            }
            if (nodeEl.childNodes[index].nodeType === Node.TEXT_NODE) {
                children.push(nodeEl.childNodes[index].textContent);
            }
        }
        return children;
    }
    static node2json(nodeEl) {
        return {
            tag: nodeEl.tagName.toLowerCase(),
            attributes: JSON2HTMLUnbuilder.attributes(nodeEl),
            children: JSON2HTMLUnbuilder.children(nodeEl)
        };
    }
}
