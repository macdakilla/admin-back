<template>
    <component v-bind="linkProps">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: "variableLink",

        props: {
            to: {
                type: String,
                required: true
            }
        },
        computed: {
            linkProps() {
                if (typeof this.to === 'string') {
                    if (this.to.match(/^(http(s)?|ftp):\/\//)) {
                        return {
                            is: 'a',
                            href: this.to,
                            target: '_blank',
                            rel: 'noopener'
                        }
                    }
                    return {
                        is: 'router-link',
                        to: this.to
                    }
                }
            }
        }
    }
</script>
