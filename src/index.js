//实例演示
class jQuery {
    constructor(seletor) {
        let slice = Array.prototype.slice
        //dom节点不是一个数组形式，通过slice.call返回的就是一个数组
        let dom = slice.call(document.querySelectorAll(seletor))
        let len = dom ? dom.length : 0
        for (let i = 0; i < len; i++) {
            //把dom的每个元素都复制到实例的属性里边去
            this[i] = dom[i]
        }
        this.length = len
        this.seletor = seletor || ''
    }
    append(node) {

    }
    addClass(name) {

    }
    html(data) {

    }
}
window.$ = function (seletor) {
// 工厂模式
    return new jQuery(seletor)
}
var $p = $('p')
console.log($p)
console.log($p.addClass)