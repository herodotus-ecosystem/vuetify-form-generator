import { lib, convertor } from '@hecate/core';
import { DataObject } from '../modeler/logic';

function dataObjectToTag(dataObject) {
    if (!lib.lodash.isEmpty(dataObject)) {
        let schema = DataObject.getSchema(dataObject);
        let attributes = DataObject.getAttributes(schema);

        let transform = {};
        transform.tag = schema.tag;
        transform.attributes = {};
        transform.attributes['v-model'] = dataObject.configs.formId;
        transform.attributes['label'] = schema.title;
        Object.assign(transform.attributes, attributes);

        let tag = convertor.json2html.build(transform);
        return lib.lodash.replace(tag, /="true"/g, '');
    }

    return null;
}

function toTag(canvas) {
    let tags = lib.lodash.map(canvas, dataObjectToTag);
    if (!lib.lodash.isEmpty(tags)) {
        return lib.lodash.join(tags, '\n' + '\t'.repeat(7));
    }
    return '';
}

function getDefaultValue(typeName) {
    if (typeName) {
        let type = typeName.toLowerCase();
        switch (type) {
            case 'string':
                return '';
            case 'array':
                return [];
            case 'object':
                return {};
            case 'number':
                return 0;
            case 'boolean':
                return false;
            default:
                return null;
        }
    } else {
        return null;
    }
}

function toData(canvas) {
    let data = {};
    if (!lib.lodash.isEmpty(canvas)) {
        canvas.map((item, index, array) => {
            let formId = item.configs.formId;
            let itemSchema = DataObject.getSchema(item);
            data[formId] = getDefaultValue(itemSchema.type);
        });
    }
    return data;
}

function toCompleteSchema(canvas) {
    const schema = {
        type: 'object',
        properties: {},
    };

    if (!lib.lodash.isEmpty(canvas)) {
        canvas.map((item, index, array) => {
            let formId = item.configs.formId;
            let itemSchema = getSchema(item);
            schema.properties[formId] = itemSchema;
        });
        return schema;
    } else {
        return {};
    }
}

export { toTag, toData, toCompleteSchema };
