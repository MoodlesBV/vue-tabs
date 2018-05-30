/**
 * @author Moodles
 * @author Jannick Berkhout (jannick@moodles.nl)
 * @version 1.0.5
 * @description A simple yet effective tab component for vue.js
 */

import Tabs from './components/Tabs.vue';
import Tab  from './components/Tab.vue';

export { Tabs, Tab };

window.VueTabs = {
    install: function(Vue, options) {
        Vue.component('Tabs', Tabs);
        Vue.component('Tab', Tab);
    }
}