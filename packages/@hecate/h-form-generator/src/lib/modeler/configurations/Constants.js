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
        xitemIcon: 'x-itemIcon'
    },
    tags: {
        AlignContent: 'align-content',
        AllowOverflow: 'allow-overflow',
        AutoSelectFirst: 'auto-select-first',
        AmpmInTitle: 'ampm-in-title',
        AppendIcon: 'append-icon',
        AppendOuterIcon: 'append-outer-icon',
        AutoGrow: 'auto-grow',
        BackgroundColor: 'background-color',
        CacheItems: 'cache-items',
        ClearIcon: 'clear-icon',
        DeletableChips: 'deletable-chips',
        DisableLookup: 'disable-lookup',
        FalseValue: 'false-value',
        FirstDayOfWeek: 'first-day-of-week',
        FullWidth: 'full-width',
        HeaderColor: 'header-color',
        HideDetails: 'hide-details',
        HideNoData: 'hide-no-data',
        HideSelected: 'hide-selected',
        IndeterminateIcon: 'indeterminate-icon',
        InverseLabel: 'inverse-label',
        ItemColor: 'item-color',
        ItemDisabled: 'item-disabled',
        ItemText: 'item-text',
        ItemValue: 'item-value',
        LazyValidation: 'lazy-validation',
        LoaderHeight: 'loader-height',
        LocaleFirstDayOfYear: 'locale-first-day-of-year',
        MenuProps: 'menu-props',
        NextIcon: 'next-icon',
        NextMonthAriaLabel: 'next-month-aria-label',
        NextYearAriaLabel: 'next-year-aria-label',
        NoDataText: 'no-data-text',
        NoGutters: 'no-gutters',
        NoFilter: 'no-filter',
        NoResize: 'no-resize',
        NoTitle: 'no-title',
        OffIcon: 'off-icon',
        OnIcon: 'on-icon',
        OpenOnClear: 'open-on-clear',
        PersistentHint: 'persistent-hint',
        PickerDate: 'picker-date',
        PrependIcon: 'prepend-icon',
        PrependInnerIcon: 'prepend-inner-icon',
        PrevIcon: 'prev-icon',
        PrevMonthAriaLabel: 'prev-month-aria-label',
        PrevYearAriaLabel: 'prev-year-aria-label',
        ReturnObject: 'return-object',
        RowHeight: 'row-height',
        SelectedItemsText: 'selected-items-text',
        ShowCurrent: 'show-current',
        ShowWeek: 'show-week',
        SingleLine: 'single-line',
        SmallChips: 'small-chips',
        SoloInverted: 'solo-inverted',
        ThumbColor: 'thumb-color',
        ThumbLabel: 'thumb-label',
        ThumbSize: 'thumb-size',
        TickSize: 'tick-size',
        TrackColor: 'track-color',
        TrackFillCcolor: 'track-fill-color',
        TrueValue: 'true-value',
        UseSeconds: 'use-seconds',
        ValidateOnBlur: 'validate-on-blur',
        YearIcon: 'year-icon'
    },
    class: {
        switch: 'mt-0 pt-0'
    },
    items: {
        contentType: [
            { value: 'application/json', text: 'application/json（默认）' },
            { value: 'application/x-www-form-urlencoded', text: 'application/x-www-form-urlencoded' },
            { value: 'multipart/form-data', text: 'multipart/form-data' },
            { value: 'text/xml', text: 'text/xml' }
        ]
    }
};

export default constants;
