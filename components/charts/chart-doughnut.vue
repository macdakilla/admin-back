<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
    mounted () {
        this.renderChart(this.chartdata, this.options)
    },
    props: {
        chartdata: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }
}
</script>

<style>
</style>
