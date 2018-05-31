<template>
    <div>
        <div class="tabs is-fullwidth" :class="equalWidthTabs">
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
        props: {
            equalWidth: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                tabs: this.$children,
                openTab: null
            }
        },
        computed: {
            equalWidthTabs() {
                if (this.equalWidth) {
                    return ['has-equal-width-tabs'];
                }
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

<style lang="scss">
    .tabs {
        -webkit-overflow-scrolling: touch;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 1rem;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        overflow: hidden;
        overflow-x: auto;
        white-space: nowrap;

        &.has-equal-width-tabs {

            li {
                flex: 1;
            }
        }

        a {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border-bottom-color: #dbdbdb;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            color: #4a4a4a;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-bottom: -1px;
            padding: 0.5em 1em;
            vertical-align: top;
            &:hover {
                border-bottom-color: #363636;
                color: #363636;
            }
        }
        li {
            display: block;
        }
        li.is-active {
            a {
                border-bottom-color: #3273dc;
                color: #3273dc;
            }
        }
        ul {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border-bottom-color: #dbdbdb;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            padding: 0;
            margin: 0;
        }
        ul.is-left {
            padding-right: 0.75em;
        }
        ul.is-center {
            -webkit-box-flex: 0;
            -ms-flex: none;
            flex: none;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            padding-left: 0.75em;
            padding-right: 0.75em;
        }
        ul.is-right {
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            padding-left: 0.75em;
        }
        .icon {
            &:first-child {
                margin-right: 0.5em;
            }
            &:last-child {
                margin-left: 0.5em;
            }
        }
    }
    .tabs.is-centered {
        ul {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }
    }
    .tabs.is-right {
        ul {
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
        }
    }
    .tabs.is-boxed {
        a {
            border: 1px solid transparent;
            border-radius: 4px 4px 0 0;
            &:hover {
                background-color: whitesmoke;
                border-bottom-color: #dbdbdb;
            }
        }
        li.is-active {
            a {
                background-color: white;
                border-color: #dbdbdb;
                border-bottom-color: transparent !important;
            }
        }
    }
    .tabs.is-fullwidth {
        li {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 0;
            flex-shrink: 0;
        }
    }
    .tabs.is-toggle {
        a {
            border-color: #dbdbdb;
            border-style: solid;
            border-width: 1px;
            margin-bottom: 0;
            position: relative;
            &:hover {
                background-color: whitesmoke;
                border-color: #b5b5b5;
                z-index: 2;
            }
        }
        li {
            + {
                li {
                    margin-left: -1px;
                }
            }
            &:first-child {
                a {
                    border-radius: 4px 0 0 4px;
                }
            }
            &:last-child {
                a {
                    border-radius: 0 4px 4px 0;
                }
            }
        }
        li.is-active {
            a {
                background-color: #3273dc;
                border-color: #3273dc;
                color: #fff;
                z-index: 1;
            }
        }
        ul {
            border-bottom: none;
        }
    }
    .tabs.is-toggle.is-toggle-rounded {
        li {
            &:first-child {
                a {
                    border-bottom-left-radius: 290486px;
                    border-top-left-radius: 290486px;
                    padding-left: 1.25em;
                }
            }
            &:last-child {
                a {
                    border-bottom-right-radius: 290486px;
                    border-top-right-radius: 290486px;
                    padding-right: 1.25em;
                }
            }
        }
    }
    .tabs.is-small {
        font-size: 0.75rem;
    }
    .tabs.is-medium {
        font-size: 1.25rem;
    }
    .tabs.is-large {
        font-size: 1.5rem;
    }

</style>
