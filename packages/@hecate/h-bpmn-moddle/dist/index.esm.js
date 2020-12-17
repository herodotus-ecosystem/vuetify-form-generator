import 'core-js/modules/es.function.name.js';
import e from '@babel/runtime-corejs3/helpers/esm/typeof';
import 'vuetify/lib';
import n from 'vue-runtime-helpers/dist/normalize-component.mjs';
var i = n(
    {
        render: function () {
            var e = this.$createElement;
            return (this._self._c || e)('div');
        },
        staticRenderFns: [],
    },
    undefined,
    { name: 'HBpmnModdle' },
    undefined,
    false,
    undefined,
    !1,
    void 0,
    void 0,
    void 0
);
(i.install = function (e) {
    e.component(i.name, i);
}),
    null != ('undefined' == typeof window ? 'undefined' : e(window)) && window.Vue && i.install(window.Vue);
export { i as HBpmnModdle };
