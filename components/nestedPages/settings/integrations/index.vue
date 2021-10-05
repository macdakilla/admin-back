<template>
    <div class="integrations">
        <v-card class="px-2 elevation-0 rounded-0">
            <v-card-text class="d-flex flex-column px-4">
                <v-row>
                    <v-col sm="12">
                        <custom :custom="pageData.custom" />
                    </v-col>
                    <v-col sm="8">
                        <calltouch :calltouch="pageData.calltouch" />
                        <roistat :roistat="pageData.roistat" />
                        <yandex :yandex="pageData.yandex" />
                        <callkeeper :callKeeper="pageData.callkeeper" />
                        <comagic :comagic="pageData.comagic" />
                        <facebook-pixel :facebookPixel="pageData.facebookPixel" />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <page-controller :hideCancel="true" @save="save($event)" @cancel="cancel()"/>
    </div>
</template>

<script>
import custom from "./custom";
import calltouch from "./calltouch";
import roistat from "./roistat";
import yandex from "./yandex";
import callkeeper from "./callkeeper";
import facebookPixel from "./facebookPixel";
import comagic from "./comagic";
import PageController from '@/components/pageController/index';

export default {
    name: "index",
    components: {
        custom,
        calltouch,
        roistat,
        yandex,
        callkeeper,
        facebookPixel,
        comagic,
        PageController
    },
    props: {
        pageData: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        save(exitCallback) {
            console.log('save')
        },

        cancel() {
            console.log('cancel');
        }
    },
}
</script>

<style>
.calltouch .v-text-field__details {
    display: none;
}
</style>
<style lang="scss">
.settings {
    &__switchWrapper {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
}
</style>
