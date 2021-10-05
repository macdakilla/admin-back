<template>
  <v-card-title class="px-0 custom">
    <v-col sm="12" class="py-0">
      Пользовательские интерграции:
    </v-col>
    <v-col sm="6" align-self="start">
      <div class="custom__scripts">
        <div class="custom__scriptsItem" v-for="(item, i) in custom.header.scripts">
          <v-row>
            <v-col sm="7">
              <v-textarea
                  rows="3"
                  v-if="item.type === 'script'"
                  filled
                  v-model="item.script"
                  :name="`custom_header_script-${i}`"
                  label="Скрипт header"
              ></v-textarea>
              <v-text-field
                  v-else-if="item.type === 'link'"
                  filled
                  v-model="item.script"
                  :name="`custom_header_script-${i}`"
                  label="Ссылка на скрипт header"
              ></v-text-field>
            </v-col>
            <v-col sm="4">
              <v-select label="Вид вставки скрипта"
                        :items="[{
                                  value: 'script',
                                  text: 'Скрипт'
                              }, {
                                  value: 'link',
                                  text: 'Ссылка'
                              }]"
                        v-model="item.type"
                        dense
                        filled
                        hide-details
              />
            </v-col>
            <v-col sm="1" class="px-0 d-flex justify-center" v-if="custom.header.scripts.length > 1">
              <v-btn
                  fab
                  small
                  elevation="0"
                  @click="removeScript(i)"
              >
                <v-icon dark>
                  mdi-minus
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <v-btn class="custom__control px-2"
               color="secondary"
               :disabled="disableAddBtn"
               @click="addScript">
          <v-icon dark class="mr-1">
            mdi-plus
          </v-icon>
          Добавить скрипт
        </v-btn>
      </div>
    </v-col>
    <v-col sm="6" align-self="start">
      <v-textarea
          filled
          v-model="custom.header.style"
          name="custom_header_style"
          label="Стили header"
      ></v-textarea>
    </v-col>
    <v-col sm="12">
      <v-textarea
          filled
          v-model="custom.footer"
          name="custom_footer"
          label="Footer"
      ></v-textarea>
    </v-col>
  </v-card-title>
</template>

<script>
export default {
  name: "custom",
  props: {
    custom: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    disableAddBtn() {
      let headerScripts = this.custom.header.scripts;
      return headerScripts[headerScripts.length - 1].script === '';
    }
  },
  methods: {
    addScript() {
      this.custom.header.scripts.push({
        script: '',
        type: 'link'
      });
    },
    removeScript(i) {
      this.custom.header.scripts.splice(i, 1);
    }
  }
}
</script>

<style scoped>

</style>
