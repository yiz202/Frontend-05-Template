//获得数据
function getRealm() {
    const set = new Set()
    const objects = [
        //Funtion properites
        'eval',
        'isFinite',
        'isNaN',
        'parseFloat',
        'parseInt',
        'encodeURI',
        'encodeURIComponent',
        'decodeURI',
        'decodeURIComponent',
        //Fundamental objects
        'Object',
        'Function',
        'Boolean',
        'Symbol',
        //Error objects
        'Error',
        'EvalError',
        'RangeError',
        'ReferenceError',
        'SyntaxError',
        'TypeError',
        'URIError',
        //Numbers and dates
        'Number',
        'BigInt',
        'Math',
        'Date',
        //Text processing
        'String',
        'RegExp',
        //Indexed collections
        'Array',
        'Int8Array',
        'Uint8Array',
        'Uint8ClampedArray',
        'Int16Array',
        'Uint16Array',
        'Int32Array',
        'Uint32Array',
        'Float32Array',
        'Float64Array',
        'BigInt64Array',
        'BigUint64Array',
        //Keyed collections
        'Map',
        'Set',
        'WeakMap',
        'WeakSet',
        //Structured data
        'ArrayBuffer',
        'SharedArrayBuffer',
        'Atomics',
        'DataView',
        'JSON',
        //Control abstraction objects
        'Promise',
        //Reflection
        'Reflect',
        'Proxy',

    ]
    //forEach() 方法对数组的每个元素执行一次给定的函数。
    objects.forEach(o => set.add(o))
    let realm = {
        id: 'realm',
        children: []
    }
    for (let i = 0; i < objects.length; i++) {
        const key = objects[i]
        const o = window[key]
        let child = {
            id: key,
            children: []
        }
        if (!o) {
            console.log(key)
            continue
        }

        for (let p of Object.getOwnPropertyNames(o)) {
            const d = Object.getOwnPropertyDescriptor(o, p)
            if ((d.value !== null && typeof d.value === 'object') || (typeof d.value === 'function')) {
                if (!set.has(p)) {
                    set.add(p)
                    child.children.push({ id: p, children: [] })
                }
            }
        }
        realm.children.push(child)
    }
    return realm
}

let data = getRealm()
const container = document.getElementById('container')
const width = container.scrollWidth
const height = container.scrollHeight || 2000
//利用数据创建图形
const graph = new G6.TreeGraph({
    container: 'container',
    width,
    height,
    modes: {
        default: [
            {
                type: 'collapse-expand',
                onChange: function onChange(item, collapsed) {
                    const data = item.get('model').data
                    data.collapsed = collapsed
                    return true
                },
            },
            'drag-canvas',
            'zoom-canvas',
        ],
    },
    defaultNode: {
        size: 26,
        anchorPoints: [
            [0, 0.5],
            [1, 0.5],
        ],
    },
    defaultEdge: {
        type: 'cubic-horizontal',
    },
    layout: {
        type: 'compactBox',
        direction: 'LR',
        getId: function getId(d) {
            return d.id
        },
        getHeight: function getHeight() {
            return 16
        },
        getWidth: function getWidth() {
            return 16
        },
        getVGap: function getVGap() {
            return 10
        },
        getHGap: function getHGap() {
            return 100
        },
    },
})

graph.node(function (node) {
    return {
        label: node.id,
        labelCfg: {
            offset: 10,
            position: node.children && node.children.length > 0 ? 'left' : 'right',
        },
    }
})

graph.data(data)
graph.render()
graph.fitView()

if (typeof window !== 'undefined')
    window.onresize = () => {
        if (!graph || graph.get('destroyed')) return
        if (!container || !container.scrollWidth || !container.scrollHeight) return
        graph.changeSize(container.scrollWidth, container.scrollHeight)
    }