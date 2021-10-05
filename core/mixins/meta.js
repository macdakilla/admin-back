export default {
    head() {
        return {
            title: (this.seo || {}).title || '',
            meta: [
                {
                    property: 'og:description',
                    content: ((this.seo || {}).ogDescription) ? this.pageMeta.ogDescription : (this.seo || {}).description,
                },
                {
                    property: 'og:title',
                    content: ((this.seo || {}).ogTitle) ? this.pageMeta.ogTitle : (this.seo || {}).title,
                },
                {
                    property: 'og:image',
                    content: (this.seo || {}).ogThumb || (this.pageMeta || {}).ogThumb2x || '',
                },
                {
                    property: 'description',
                    content: (this.seo || {}).description || '',
                },
            ],
        }
    },
}