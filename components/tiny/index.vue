<template>
    <div class="tiny" :class="{'noBorder': noBorder}">
        <label>
            <span class="tiny__title" v-if="title">{{ title }}</span>

            <textarea :class="randomSelector" ref="code"></textarea>
        </label>
    </div>
</template>

<script>
export default {
    name: "tiny",

    props: {
        noBorder: {
            type: Boolean,
            default: false,
        },

        title: {
            type: String,
            default: null,
        },

        height: {
            type: Number,
            default: 400,
        }
    },

    data() {
        return {
            init: {
                height: this.height,
                plugins: `advlist autolink lists link image charmap
                            searchreplace visualblocks fullscreen
                            print preview anchor insertdatetime media,
                            paste help wordcount
                            table code media image imagetools`,
                toolbar: `undo redo | formatselect | bold italic |
                            alignleft aligncenter alignright |
                            bullist numlist outdent indent | help
                            insertfile  code image |
                            table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol`,
                menubar: 'tools table edit',
                imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
                images_upload_handler: function (blobInfo, success, failure) {
                    success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
                },
            },

            randomSelector: `tiny` + parseInt(Math.random() * 100000000000),
        }
    },

    mounted() {
        if (process.browser) {
            this.$nextTick(() => {
                tinymce.init({
                    selector: `.${this.randomSelector}`,
                    extended_valid_elements: 'script[language|type|src]',
                    /*external_plugins: {
                        'emmet': '/tiny/emmet/plugin.js'
                    },*/
                    ...this.init,
                    setup: function (editor) {
                        async function showSourceEditor() {
                            /*let CodeMirror = await import('codemirror')
                                .then(async module => {
                                    console.log('reg emmet', module.default);
                                    return module.default;
                                })
                                .catch(err => {
                                    console.log('error');
                                });

                            let emmet = await import('@emmetio/codemirror-plugin')
                                .then(async module => {
                                    console.log('reg emmet');
                                    return module.default;
                                })
                                .catch(err => {
                                    console.log('error');
                                });

                            setTimeout(()=> {
                                const textarea = document.querySelector('#codeMirror');
                                console.log('TA: ', textarea);

                                emmet(CodeMirror);

                                if (textarea) {
                                    const cm = CodeMirror.fromTextArea(textarea, {
                                        // lineNumbers: true,
                                        mode : "text/html",
                                        extraKeys: {
                                            'Tab': 'emmetExpandAbbreviation',
                                            'Esc': 'emmetResetAbbreviation',
                                            'Enter': 'emmetInsertLineBreak'
                                        }
                                    });
                                }
                            }, 1000)*/


                            /*editor.windowManager.open({
                                title: 'Redial Demo',
                                body: {
                                    type: 'panel',
                                    items: [{
                                        type: 'htmlpanel',
                                        html: `<!DOCTYPE html>
                                        <html>
                                            <head>
                                                <title>TinyMCE Emmet Plugin</title>
                                            </head>

                                            <body>
                                                <form>
                                                    <textarea id="codeMirror" name="code" class="CodeMirror" autofocus></textarea>
                                                </form>

                                        </body>
                                        </html>`
                                    }]
                                },
                                buttons: [
                                    {
                                        type: 'custom',
                                        name: 'doesnothing',
                                        text: 'Previous',
                                        disabled: true
                                    },
                                    {
                                        type: 'custom',
                                        name: 'uniquename',
                                        text: 'Next',
                                        disabled: true
                                    }
                                ],
                                onChange: function (dialogApi, details) {},
                                onAction: function (dialogApi, details) {}
                            });*/

                        }

                        /* editor.on('init', function () {
                             editor.addShortcut('Ctrl+Alt+E', '', showSourceEditor);
                         });

                         editor.ui.registry.addButton('code_emmet', {
                             icon: 'code',
                             tooltip: 'HTML Editor',
                             onAction: showSourceEditor
                         });

                         editor.ui.registry.addMenuItem('code_emmet', {
                             icon: 'code',
                             text: 'HTML Editor',
                             context: 'tools',
                             onAction: showSourceEditor
                         });*/
                    }
                });
            })
        }
    },

    methods: {},
}
</script>

<style lang="scss">
:root .tiny {
    width: 100%;

    &__title {
        display: block;

        margin-bottom: 4px;
    }

    &.noBorder {
        .tox {
            &.tox-tinymce {
                border: none;
            }
        }
    }
}
</style>
