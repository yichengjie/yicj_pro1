/**
 * Created by Administrator on 2015/10/31.
 */
new Vue({
    el: '#demo',
    data: {
        n: 0
    },
    methods: {
        onClick: function (e) {
            console.log(e.target.tagName) // "A"
            console.log(e.targetVM === this) // true
        }
    }
})