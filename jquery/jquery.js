// function getSiblings(node) {
//     allChildren = node.parentNode.children

//     var array = {
//         length: 0
//     }

//     for (let i = 0; i < allChildren.length; i++) {
//         if (allChildren[i] !== node) {
//             array[array.length] = allChildren[i];
//             array.length += 1
//         }
//     }
//     return array
// }

// function addClass(node,classes){
//     for(let key in classes){
//         if(classes[key]){
//             node.classList.add(key)
//         } else{
//             node.classList.remove(key)            
//         }
//     }
// }

function getSiblings(node) {
    var allChildren = node.parentNode.children

    var array = {
        length: 0
    }

    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
            array[array.length] = allChildren[i];
            array.length += 1
        }
    }
    return array
}

function toogleClass(node, classes) {
    for (let key in classes) {
        var methodName = classes[key] ? 'add' : 'remove'
        node.classList[methodName](key)
    }
}

Node.prototype.getSiblings = function () {
    allChildren = this.parentNode.children

    var array = {
        length: 0
    }

    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== this) {
            array[array.length] = allChildren[i];
            array.length += 1
        }
    }
    return array
}

Node.prototype.toggleClass = function (classes) {
    for (let key in classes) {
        var methodName = classes[key] ? 'add' : 'remove'
        this.classList[methodName](key)
    }
}

window.jQuery = function (nodeOrSeletor) {
    let nodes = {}
    if (typeof nodeOrSeletor === 'string') {
        let temp = document.querySelectorAll(nodeOrSeletor)
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length
    } else if (nodeOrSeletor instanceof Node) {
        nodes = {
            0: nodeOrSeletor,
            length: 1
        }
    }


    nodes.addClass = function (classes) {
        //当classes不是一个数组时，会出错
        if (typeof classes === 'string'){
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].classList.add(classes)
            }
        } else {
            classes.forEach(value => {
                for (let i = 0; i < nodes.length; i++) {
                    nodes[i].classList.add(value)
                }
            })
        }
    } 
    nodes.getText = function () {
        var texts = []
        for (let i = 0; i < nodes.length; i++) {
            texts.push(nodes[i].textContent)
        }
        return texts
    }
    nodes.setText = function (text) {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].textContent = text
        }
    }

    return nodes
}


window.$ = jQuery