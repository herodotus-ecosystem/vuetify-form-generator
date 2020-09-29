const constants = {
    /**
     * @koumoul/vjsf 使用的注解。因为是特殊格式，无法使用js object常规的 “.”的方式取值。
     * 定一个常量对象，类似于Java 中的 static final String 方便以后取值。
     * doc：https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/configuration
     */
    annotations: {
        //x-props注释可用于向底层Vuetify组件添加属性
        xprops: 'x-props',
        xslots: 'x-slots',
        xrules: 'x-rules',
        xdisplay: 'x-display',
        xclass: 'x-class',
        xstyle: 'x-style',
        xoptions: 'x-options',
        xfromUrl: 'x-fromUrl',
        xfromData: 'x-fromData',
        xitemKey: 'x-itemKey',
        xitemTitle: 'x-itemTitle',
        xitemIcon: 'x-itemIcon',
    },
    tags: {
        aligncontent: 'align-content',
        autogrow: 'auto-grow',
        fullwidth: 'full-width',
        hidedetails: 'hide-details',
        lazyvalidation: 'lazy-validation',
        nogutters: 'no-gutters',
        noresize: 'no-resize',
        persistenthint: 'persistent-hint',
        singleline: 'single-line',
        soloinverted: 'solo-inverted',
        validateonblur: 'validate-on-blur',
    },
    class: {
        switch: 'mt-0 pt-0',
    },
};

export default constants;
