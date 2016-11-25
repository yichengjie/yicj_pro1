/**
 * Created by Administrator on 2015/10/31.
 */
new Vue({
    el: '#demo',
    data: {
        msg      : 'hi!',
        checked  : true,
        picked   : 'one',
        selected : 'two',
        multiSelect: ['one', 'three'],
        myOptions :[
            { text: 'A', value: 'a' },
            { text: 'B', value: 'b' }
        ]
    }
})