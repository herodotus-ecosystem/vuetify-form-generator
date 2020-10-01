import { lib } from '@hecate/core';
import { definitions, constants } from '../configurations';

function generateShortId() {
    return lib.shortid.generate();
}

function setDataObjectValues(properties, name, document, panel) {
    let dataObject = {
        configs: {},
        type: 'object',
        properties: {}
    };

    const formId = name + '_' + generateShortId();
    dataObject.configs.formId = formId;
    dataObject.configs.renderKey = +new Date();
    dataObject.configs.name = name;
    dataObject.configs.document = document;
    dataObject.configs.panel = panel;
    dataObject.properties[formId] = lib.lodash.cloneDeep(properties);
    return dataObject;
}

function generate(component) {
    return setDataObjectValues(
        definitions[component.configs.schema].schema,
        component.configs.name,
        component.configs.document,
        definitions[component.configs.schema].index
    );
}

function clone(dataObject) {
    const originalFormId = dataObject.configs.formId;

    // 2.设置对象值
    return setDataObjectValues(
        getSchema(dataObject, originalFormId),
        dataObject.configs.name,
        dataObject.configs.document,
        dataObject.configs.panel
    );
}

function getSchema(dataObject, formId) {
    if (!formId) {
        let schemaFormId = dataObject.configs.formId;
        return dataObject.properties[schemaFormId];
    } else {
        return dataObject.properties[formId];
    }
}

function getAttributes(schema) {
    console.log(constants);
    if (!lib.lodash.isEmpty(schema)) {
        if (lib.lodash.has(constants.annotations.xprops)) {
            return schema[constants.annotations.xprops];
        }
    }
    return {};
}

export { generate, clone, getSchema, getAttributes };
