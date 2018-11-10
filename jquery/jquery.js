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

window.Node2 = function (nodeOrSeletor) {
    let node
    if (typeof nodeOrSeletor === 'string') {
        node = document.querySelectorAll(nodeOrSeletor)
    } else {
        node = nodeOrSeletor
    }

    return {
        getSiblings: function () {
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
        },
        toogleClass: function () {
            for (let key in classes) {
                var methodName = classes[key] ? 'add' : 'remove'
                node.classList[methodName](key)
            }
        }
    }
}