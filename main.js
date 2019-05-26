document.getElementById('btn-add').addEventListener('click', function() {
    var inputElement = document.getElementById('todo')
    if (inputElement.value != '') {
        var newItem = document.createElement('li')
        newItem.innerText = inputElement.value
        var newBtn = document.createElement('button')
        newBtn.innerText = 'Done'
        newBtn.addEventListener('click', function() {
            newBtn.parentNode.removeChild(newItem)
            newBtn.parentNode.removeChild(newBtn)
        })
        var container = document.getElementById('container')
        container.prepend(newBtn)
        container.prepend(newItem)
        inputElement.value = ''
    }
} )