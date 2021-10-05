<template>
    <v-card class="px-2 elevation-0 rounded-0">
        <v-card-text class="d-flex flex-column px-4">
            <v-row>
                <v-col sm="9">
                    <v-card-title class="px-0">
                        Страница:
                        <v-radio-group
                            v-if="!iframe.isView"
                            class="deviceView"
                            v-model="currentViewWidth"
                        >
                            <v-radio
                                v-for="(device, i) in devices"
                                :key="i"
                                :label="device.label"
                                :value="device.width"
                            />
                            <v-radio
                                :value="'custom'"
                                class="mr-0"
                            />
                            <v-text-field
                                v-model="customViewWidth"
                                :disabled="currentViewWidth !== 'custom'"
                                :label="'Пользовательская'"
                                :rules="rulesCustomWidth"
                                hide-details="auto"
                            ></v-text-field>
                        </v-radio-group>
                    </v-card-title>
                    <transition name="fade">
                        <template v-if="iframe.isView">
                            <div class="settings py-2">
                                <draggable class="settings__list px-0"
                                           tag="ul"
                                           :draggable="'.settings__item--drag'"
                                           v-model="currentItems"
                                           group="cars"
                                           :animation="300"
                                           @start="drag = true"
                                           @end="drag = false">
                                    <settings-component
                                        class="settings__item--drag"
                                        v-for="(item, i) in currentItems"
                                        :key="i"
                                        :item="item"
                                    />
                                </draggable>
                            </div>
                        </template>
                        <template v-else>
                            <div class="preview py-1">
                                <div class="preview__wrapper rounded" :style="{width: iframeWidth}">
                                    <transition name="fade">
                                        <v-overlay
                                            :absolute="true"
                                            :opacity="0.9"
                                            :value="true"
                                            :z-index="1"
                                            v-if="!iframe.isLoaded"
                                        >
                                            <v-progress-circular
                                                indeterminate
                                                size="64"
                                            ></v-progress-circular>
                                        </v-overlay>
                                    </transition>
                                    <iframe
                                        :style="{width: '100%', height: '100%'}"
                                        :src="iframe.src"
                                        @load="loadingIframe"
                                    />
                                </div>
                            </div>
                        </template>
                    </transition>
                </v-col>
                <v-col sm="3">
                    <v-card-title class="px-1">
                        Компоненты:
                    </v-card-title>
                    <v-card class="components px-1 py-2 elevation-0 rounded-0">
                        <v-expansion-panels focusable>
                            <v-expansion-panel v-for="(group, i) in components" :key="i">
                                <v-expansion-panel-header>{{ group.label }}</v-expansion-panel-header>
                                <v-expansion-panel-content class="expansion-panel-content">
                                    <template v-for="(component, index) in group.content">
                                        <custom-component
                                            class="my-2"
                                            :key="index"
                                            @addComponent="addComponent"
                                        >
                                            {{ component }}
                                        </custom-component>
                                    </template>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import UploadImage from '@/components/uploadImage/index';
import Tiny from "@/components/tiny/index";
import customComponent from "@/components/ui-kit/customComponent";
import draggable from 'vuedraggable';
import settingsComponent from "../../../ui-kit/settingsComponent";

export default {
    name: 'Basic',

    components: {
        Tiny,
        UploadImage,
        customComponent,
        settingsComponent,
        draggable
    },

    props: {
        pageData: {
            type: Object,
            required: true,
        },
        items: {
            type: Array,
            default() {
                return [];
            }
        },
        components: {
            type: Object,
            default() {
                return {};
            }
        },
        iframe: {
            type: Object,
            default() {
                return {
                    isLoaded: false,
                    isView: false,
                    src: ''
                }
            }
        }
    },

    data() {
        return {
            testCoords: {x:'',y:''},
            drag: false,
            currentViewWidth: '100%',
            customViewWidth: '',
            rulesCustomWidth: [
                value => !!value,
                value => (value || '').length <= 4,
            ],
            devices: [
                {
                    label: 'Десктоп',
                    width: '100%'
                },
                {
                    label: 'Ноутбук',
                    width: '1024px'
                },
                {
                    label: 'Планшет',
                    width: '768px'
                },
                {
                    label: 'Телефон',
                    width: '425px'
                }
            ],
        };
    },
    watch: {
        currentViewWidth() {
            this.$emit('update:iframe', 'isLoaded', false);
            this.$emit('update:iframe', 'src', `${this.iframe.src}?${Math.random() * 100}=${Math.random() * 100}`);
        }
    },
    computed: {
        iframeWidth() {
              return this.currentViewWidth === 'custom' ? `${this.customViewWidth}px` : this.currentViewWidth;
        },
        currentItems: {
            get() {
                return this.items;
            },
            set(value) {
                this.$emit('updateItems', value);
            },
        },
    },

    methods: {
        coordsMask(value) {
            const ending = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]

            if (value.charAt(1) === '.') {
                return [/[0-9]/, '.', ...ending]
            }

            if (value.charAt(2) === '.') {
                return [/[0-9]/, /[0-9]/, '.', ...ending]
            }

            if (value.length === 3) {
                return [/[0-9]/, /[0-9]/, /[0-9]/, ...ending]
            }

            return [/[0-9]/, /[0-9]/, /[0-9]/, '.', ...ending]
        },
        addComponent() {
            this.$emit('addComponent')
        },
        loadingIframe() {
            this.$emit('update:iframe', 'isLoaded', true);
        }
    },
};
</script>

<style lang="scss">
.deviceView.v-input {
    margin: 0;
    padding: 0;
    .v-input__slot {
        margin-bottom: 0;
    }
    .v-input__control {
        .v-input--radio-group__input {
            flex-direction: row;
            .v-input {
                margin: 0 0 5px 0;
                padding: 0;
                .v-text-field__details {
                    display: none;
                }
            }
            .v-radio {
                margin: 0 10px;
            }
        }
        .v-messages {
            display: none;
        }
    }

}
.settings {
    &__list {
        list-style: none;
    }
    &__item {

    }
}
.components {
    height: 700px;
    overflow-y: auto;
}
.preview {
    display: flex;
    align-items: center;
    justify-content: center;
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 700px;
        overflow: hidden;
        position: relative;
        transition: width 0.3s ease;
        box-shadow: 0 0 6px 0px rgba(0, 0, 0, 0.2);
    }
}
.expansion-panel-content {
    .v-expansion-panel-content__wrap {
        padding: 0 10px 10px;
    }
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
