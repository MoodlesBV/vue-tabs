<template>
    <div>
        <div class="tabs is-fullwidth">
            <ul>
                <li :class="{ 'is-active': openTab == tab.id }" v-for="tab in tabs" :key="tab.id">
                    <a href="#" @click="setActiveTab(tab)">
                        {{ tab.title }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tabs',
        data() {
            return {
                tabs: this.$children,
                openTab: null
            }
        },
        mounted() {
            this.setActiveTab(this.tabs[0]);
        },
        methods: {
            setActiveTab(tab) {
                this.openTab = tab.id;

                this.tabs.forEach(tabItem => {
                    tabItem.isActive = false;

                    if (tabItem.id == tab.id) {
                        tabItem.isActive = true;
                    }
                });
            }
        }
    }
</script>
