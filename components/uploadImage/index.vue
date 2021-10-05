<template>
    <div class="uploadImages">
        <div class="uploadImages__title" v-if="title">{{ title }}</div>
        <draggable class="uploadImages__list px-0"
                   tag="ul"
                   :draggable="'.uploadImages__item--drag'"
                   v-model="currentItems"
                   group="cars"
                   :animation="200"
                   @start="drag=true"
                   @end="drag=false">
            <li class="uploadImages__item uploadImages__item--drag"
                v-for="(item, index) in currentItems"
                :key="item.src"
                :class="{'uploadImages__item--auto' : true}">
                <v-img class="uploadImages__itemImg"
                       :src="item.src" />
                <v-btn depressed
                       small
                       min-width="20"
                       min-height="20"
                       height="20"
                       class="uploadImages__itemDelete rounded-0 px-0"
                       color="rgba(0,0,0,.7)"
                       @click="removeImage(index)">
                    <v-icon small
                            color="white"
                            class="uploadImages__itemDeleteIcon">
                        mdi-delete
                    </v-icon>
                </v-btn>
            </li>

            <li class="uploadImages__item"
                slot="footer"
                v-if="Array.isArray(items) && items.length < maxCount">
                <v-btn depressed
                       class="uploadImages__itemUpload d-flex align-center justify-center rounded-0"
                       height="100%"
                       :loading="isUploading"
                       @click="openUpload()">
                    <div class="d-flex flex-column">
                        <v-icon>mdi-upload</v-icon>
                        <div class="uploadImages__itemUploadSize" v-if="resolution">{{ resolution }}</div>
                    </div>
                </v-btn>
            </li>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';

    export default {
        name: 'UploadImage',

        components: {
            draggable,
        },

        props: {
            items: {
                type: Array,
            },

            title: {
                type: String,
                default: null,
            },

            maxCount: {
                type: Number,
                default: 99,
            },

            resolution: {
                type: String,
                default: null
            }
        },

        data() {
            return {
                drag: false,
                isUploading: false,
            };
        },

        methods: {
            openUpload() {
                this.isUploading = true;
            },

            removeImage(currIndex) {
                const updateItems = this.items.filter((item, index) => index !== currIndex);
                this.$emit('updateItems', updateItems);
            },
        },

        computed: {
            currentItems: {
                get() {
                    return this.items;
                },
                set(value) {
                    this.$emit('updateItems', value);
                },
            },
        },
    };
</script>

<style lang="scss">
    .uploadImages {
        &__title {
            margin-bottom: 4px;

            color: rgba(0, 0, 0, 0.6);
        }

        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;

            list-style: none;
        }

        &__item {
            position: relative;
            width: 150px;
            height: 100px;
            padding: 2px;
            margin: 2px;

            border: 1px solid $colorGrayEL;
            border-radius: 2px;

            transition: opacity .2s;

            &--drag {
                cursor: move;
            }

            &--auto:after {
                content: 'A';
                position: absolute;
                left: 5px;
                top: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 14px;
                height: 14px;

                background: $colorGreen;
                border-radius: 50%;
                color: $white;
                font-size: 10px;
                line-height: 1.2;
            }

            &.sortable-ghost {
                opacity: .5;
            }
        }

        &__itemImg {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &__itemDelete.v-btn {
            position: absolute;
            top: 0;
            right: 0;

            opacity: 0;

            transition: opacity .12s;
        }

        &__item:hover &__itemDelete {
            opacity: 1;
        }

        &__itemDeleteIcon {
            &:before {
                font-size: 14px;

                transition: color .1s;
            }
        }

        &__itemDelete:hover &__itemDeleteIcon:before {
            color: $colorGrayL;
        }

        &__itemUpload {
            width: 100%;
            height: 100%;
            background: $colorGrayEL;
        }

        &__itemUploadSize {
            margin-top: 5px;

            color: $colorGray;
            font-size: 10px;
        }

        .flip-list-move {
            transition: transform 0.5s;
        }
    }
</style>
