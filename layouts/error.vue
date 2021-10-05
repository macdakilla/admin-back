<template>
  <div class="notFound">
    <div class="notFound__container container">
      <div class="notFound__head">
        <svg-icon name="404" class="notFound__img404"/>
      </div>

      <div class="notFound__title">
        Страница не найдена
      </div>

      <btn :to="{name:'index'}" class="notFound__btn">
        Вернуться на главную
      </btn>
    </div>
  </div>
</template>

<script>

    export default {
        name: "error",

        components: {},

        async asyncData({store, params, $axios, app, res}) {
            if (res !== undefined) {
                res.statusCode = 404;
            }

            let breadcrumbs = [
                {
                    path: '/404',
                    name: '404 Ошибка'
                },

            ];
        },

        props: ['error'],

        head() {
            return {
                title: "404 ошибка",
                meta: [
                    {hid: 'description', name: 'description', content: ''},
                    {name: 'og:title', content: ''},
                    {name: 'og:description', content: ''},
                    {name: 'og:image', content: ''},
                ],
            }
        },
    }
</script>
<style lang="scss">
  .notFound {
    padding: 80px 0;

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      text-align: center;
    }

    &__head {
      width: 495px;
      max-width: 100%;
      margin-bottom: 30px;
    }

    &__img404 {
      position: relative;
      width: 450px;
      max-width: 100%;
      padding: 0 60px;

      fill: $colorMain;

      @include below($lg-mobile) {
        width: 420px;
        padding: 0 35px;
      }
    }


    &__title {
      margin-bottom: 30px;

      color: $colorBlack;
      font-size: $fz-h-md;
      font-weight: 700;
    }

    &__btn {
      width: 360px;
      max-width: 100%;
    }
  }
</style>
