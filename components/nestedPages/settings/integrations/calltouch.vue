<template>
    <v-card-title class="px-0 calltouch">
        <v-col sm="12" class="py-0">
            Calltouch:
        </v-col>
        <v-col sm="12">
            <v-textarea
                filled
                v-model="calltouch.script"
                name="calltouch_script"
                label="Скрипт calltouch"
            ></v-textarea>
        </v-col>
        <v-col sm="12">
            <v-expansion-panels multiple>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Заявка
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-text-field
                            filled
                            v-model="calltouch.order.id"
                            name="calltouch_order_id"
                            label="ID сайта в Calltouch"
                        ></v-text-field>
                        <v-text-field
                            filled
                            v-model="calltouch.order.api"
                            name="calltouch_order_api"
                            label="API-ключ Calltouch (Для POST отправки, не рекомендовано)"
                        ></v-text-field>
                        <div class="settings__switchWrapper py-1" >
                            CALLTOUCH (FRONT):
                            <v-switch
                                dense
                                class="ma-0 ml-4 pt-0"
                                v-model="calltouch.order.front_status"
                                hide-details
                            />
                        </div>
                        <div class="settings__switchWrapper" >
                            CALLTOUCH (BACK):
                            <v-switch
                                dense
                                class="ma-0 ml-4 pt-0"
                                v-model="calltouch.order.back_status"
                                hide-details
                            />
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Обратный звонок
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-text-field
                            filled
                            v-model="calltouch.call.key"
                            name="calltouch_call_key"
                            label="Ключ Calltouch (по умолчанию feedback)"
                        ></v-text-field>
                        <v-text-field
                            filled
                            v-model="calltouch.call.api"
                            name="calltouch_call_api"
                            label="API-ключ Calltouch (Для POST отправки)"
                        ></v-text-field>
                        <div class="settings__switchWrapper py-1" >
                            CALLTOUCH (FRONT):
                            <v-switch
                                dense
                                class="ma-0 ml-4 pt-0"
                                v-model="calltouch.call.front_status"
                                hide-details
                            />
                        </div>
                        <div class="settings__switchWrapper" >
                            CALLTOUCH (BACK):
                            <v-switch
                                dense
                                class="ma-0 ml-4 pt-0"
                                v-model="calltouch.call.back_status"
                                hide-details
                            />
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-card-title>
</template>

<script>
export default {
    name: "calltouch",
    props: {
        calltouch: {
            type: Object,
            default() {
                return {};
            }
        }
    }
}
</script>

<style scoped>

</style>
