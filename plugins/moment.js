import Vue from 'vue'
import moment from 'moment'

Vue.filter('format_date', function(value) {
    if (value) {
        return moment(String(value)).format('YYYY-MM-DD HH:mm')
    }
});