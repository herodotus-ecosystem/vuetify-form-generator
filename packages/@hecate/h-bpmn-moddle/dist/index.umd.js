!(function (e, n) {
    'object' == typeof exports && 'undefined' != typeof module
        ? n(
              exports,
              require('core-js/modules/es.function.name.js'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('vuetify/lib'),
              require('vue-runtime-helpers/dist/normalize-component.mjs')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name.js',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'vuetify/lib',
              'vue-runtime-helpers/dist/normalize-component.mjs',
          ], n)
        : n(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              null,
              e._typeof,
              e.Vuetify,
              e.__vue_normalize__
          );
})(this, function (e, n, i, t, o) {
    'use strict';
    function u(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var d = u(i),
        r = { name: 'HBpmnModdle' },
        f = u(o).default(
            {
                render: function () {
                    var e = this.$createElement;
                    return (this._self._c || e)('div');
                },
                staticRenderFns: [],
            },
            undefined,
            r,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        );
    (f.install = function (e) {
        e.component(f.name, f);
    }),
        null != ('undefined' == typeof window ? 'undefined' : d.default(window)) && window.Vue && f.install(window.Vue),
        (e.HBpmnModdle = f),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
