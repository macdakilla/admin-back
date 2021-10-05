<template>
    <v-card class="iteratorsDc" flat tile>
        <v-card-title class="d-f px-4 py-1">
            <n-link class="iteratorsDc__titleText subheading font-weight-bold mr-auto"
                    :to="{name:'tabs-tab-slug',params:{slug: item.id}}">
                <v-avatar
                    v-if="!hideAvatar"
                    class="mr-2"
                    size="35"
                    color="grey" >
                    <img
                        v-if="item.avatar"
                        :src="item.avatar"
                        :alt="item.name"
                    >
                    <v-icon v-else dark>
                        mdi-account-circle
                    </v-icon>
                </v-avatar>
                {{ item.name }}
            </n-link>

            <div class="iteratorsDc__titleControls">
                <div class="iteratorsDc__titleNumbers mr-8" v-if="item.department">
                    <v-icon small color="grey">mdi-account-circle-outline</v-icon>
                    {{ item.department }}
                </div>

                <div class="iteratorsDc__titleNumbers mr-8" v-if="item.phone">
                    <v-icon small color="grey">mdi-phone</v-icon>
                    {{ item.phone }}
                </div>

                <div class="iteratorsDc__titleNumbers" v-if="item.email">
                    <v-icon small color="grey">mdi-at</v-icon>
                    {{ item.email }}
                </div>

                <div class="iteratorsDc__titleControl">
                    <v-icon small color="grey">mdi-history</v-icon>
                    {{ item.lastLogin }}
                </div>

                <div class="iteratorsDc__titleControlStatus" v-if="!hideStatus">
                    Статус
                    <v-switch
                        dense
                        class="iteratorsDc__titleControl ma-0 ml-2 pt-0"
                        v-model="status"
                        hide-details
                    />
                </div>
            </div>
        </v-card-title>


        <div class="iteratorsDc__bottom px-4 py-2">
            <ul class="iteratorsDc__specs pa-0 mr-6" v-if="Array.isArray(fields) && fields.length">
                <template v-for="(fieldName, index) in fields">
                    <li class="iteratorsDc__specsItem" v-if="item.hasOwnProperty(fieldName)">
                        <div class="iteratorsDc__specsItemContent">
                            <div class="iteratorsDc__specsItemValue">{{ item[fieldName] }}</div>
                        </div>
                    </li>
                </template>
            </ul>

            <div class="iteratorsDc__bottomControls d-flex flex-shrink-0 ml-auto">

                <v-btn icon
                       class="iteratorsDc__bottomControl"
                       title="Редактировать"
                       :to="{name:'tabs-tab-slug',params:{slug: item.id}}">
                    <v-icon class="iteratorsDc__bottomControlIcon">
                        mdi-pencil
                    </v-icon>
                </v-btn>

                <v-btn icon
                       class="iteratorsCar__bottomControl"
                       v-if="!hideOpen"
                       href="https://yandex.ru"
                       rel="nofollow"
                       target="_blank"
                       title="Просмотр">
                    <v-icon class="iteratorsCar__bottomControlIcon">
                        mdi-open-in-new
                    </v-icon>
                </v-btn>

                <action-confirm @apply=""
                                v-if="!hideRemove">
                    <v-btn class="iteratorsDc__bottomControl"

                           icon
                           title="Удалить">
                        <v-icon class="iteratorsDc__bottomControlIcon">
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </action-confirm>
            </div>
        </div>
    </v-card>
</template>

<script>

import ActionConfirm from "@/components/actionConfirm/index";
export default {
    name: 'default',
    components: {ActionConfirm},
    props: {
        item: {
            type: Object,
            required: true,
        },

        fields: {
            type: Array
        },

        hideStatus: {
            type: Boolean,
            default: false,
        },

        hideOpen: {
            type: Boolean,
            default: false,
        },

        hideRemove: {
            type: Boolean,
            default: false,
        },
        hideAvatar: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            status: false,
        };
    },

    methods: {
        updateSelected() {
            this.$emit('update:selected');
        },
    },
};
</script>

<style lang="scss">
.iteratorsDc {

    &__titleText.subheading {
        color: $colorBlack;
    }

    &__titleNumbers {
        font-size: 12px;

        color: $colorGray;
    }


    &__titleControls {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    &__titleControl {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 18px;

        font-size: 12px;
        color: $colorGray;

        .v-icon {
            margin-right: 5px;
        }

        &--icon {
            padding: 3px;

            font-size: 20px;
        }
    }

    &__titleControlStatus {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin-left: 25px;

        color: $colorGray;
        line-height: 1.3;
        font-size: 12px;
    }

    &__info {
        width: 40%;
    }

    &__infoInput {
        .v-label {
            font-size: 14px;
        }

        .v-textarea {
            textarea {
                max-height: 100px;

                line-height: 1.4;
                font-size: 14px;
            }
        }
    }

    &__infoRow {
        width: 100%;
    }

    &__images {
        width: 60%;
    }

    &__bottom {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    &__bottomControls {
        margin-left: auto;
    }

    &__bottomControl {
        width: 36px;
        height: 36px;
        padding: 3px;
        margin-left: 10px;

        font-size: 20px;
        opacity: .8;

        transition: opacity .1s .1s ease;

        &:hover {
            opacity: 1;
        }
    }

    &__specs {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 -10px -6px;
        padding: 0;
        list-style: none;
    }

    &__specsItem {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 10px 6px;

        opacity: .6;
    }

    &__specsItemContent {
        line-height: 1.2;
    }

    &__specsItemIcon {
        margin: 0 5px 0 0;
    }

    &__specsItemValue {
        font-size: 12px;
    }

    &__specsItemTitle {
        margin-bottom: 2px;

        font-size: 10px;
    }


    &__infoModifiers {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        height: 100%;
        padding-top: 16px;
    }

    &__infoModifiersTitle {
        font-size: 14px;
    }

    &__infoModifiersList {
        flex-grow: 1;
        max-height: 92px;
        padding: 5px 0;
        margin-bottom: -1px;

        border-bottom: 1px solid $colorGrayL;
        overflow: auto;
        list-style: none;
    }

    &__infoModifiersItem {
        position: relative;
        margin-bottom: 5px;

        line-height: 1.2;

        &:after {
            content: "\F012C";
            position: absolute;
            right: 100%;
            top: 3px;
            margin-right: 5px;

            color: $colorGreen;
            font: normal normal normal 16px/1 "Material Design Icons";
        }
    }

}
</style>
