/**
 * Created by Administrator on 2015/10/31.
 */

var demo = new Vue({
    el: '#demo',
    data: {
        parentMsg: 'Hello',
        items: [
            { childMsg: 'Foo' },
            { childMsg: 'Bar' }
        ]
    }
})