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
        AlignContent: 'align-content',
        AppendIcon: 'append-icon',
        AppendOuterIcon: 'append-outer-icon',
        AutoGrow: 'auto-grow',
        BackgroundColor: 'background-color',

        ClearIcon: 'clear-icon',
        FullWidth: 'full-width',
        HideDetails: 'hide-details',
        LazyValidation: 'lazy-validation',
        LoaderHeight: 'loader-height',
        NoGutters: 'no-gutters',
        NoResize: 'no-resize',
        PersistentHint: 'persistent-hint',
        PrependIcon: 'prepend-icon',
        PrependInnerIcon: 'prepend-inner-icon',
        InverseLabel: 'inverse-label',
        SingleLine: 'single-line',
        SoloInverted: 'solo-inverted',
        ThumbColor: 'thumb-color',
        ThumbLabel: 'thumb-label',
        ThumbSize: 'thumb-size',
        TickSize: 'tick-size',
        TrackColor: 'track-color',
        TrackFillCcolor: 'track-fill-color',
        ValidateOnBlur: 'validate-on-blur',
    },
    class: {
        switch: 'mt-0 pt-0',
    },
};

export default constants;
