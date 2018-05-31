# @moodles/vue-tabs

A simple yet effective tab component for vue.js

### Installation

###### webpack
`npm i --save @moodles/vue-tabs`

###### browser
Grab `vue-tabs.js` from the `dist` folder and include it using a regular `script` tag.

```
<script src="js/vue.js"></script>
<script src="js/vue-tabs.js"></script>
```

### Initialization

###### webpack

```
import { Tabs, Tab } from '@moodles/vue-tabs';

const app = new Vue({
    el: '#app',
    components: {
        'tabs': Tabs,
        'tab': Tab
    }
})
```

###### browser

```
<script src="js/vue.js"></script>
<script src="js/vue-tabs.js"></script>

<script>
    Vue.use(VueTabs);

    var app = new Vue({
        el: '#app',
    });
</script>
```

### Component usage
```
<tabs>
    <tab title="Tab 1">
        Tab 1 content
    </tab>
    <tab title="Tab 2">
        Tab 2 content
    </tab>
    <tab title="Tab 3">
        Tab 3 content
    </tab>
</tabs>
```

###### `Tabs` props

| prop       | type    | default |
| ---------- | ------- | ------- |
| equalWidth | Boolean | `false` |

###### `Tab` props
| prop  | type    | default |
| ----- | ----    | ------- |
| title | String  | `''`    |