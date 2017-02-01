    window.onload = function () {
        let list = $('list')
        let addlist = $('add2list')
        addlist.addEventListener('click', function () {
            let todotings = $('todotings').value
            let todotime = $('todotime').value
            if (!todotings || !todotime) {
                let tip = new tips('有东西没填', 2000)
                tip.show()
                return
            }
            list.appendChild()
        })
    }
    class todolist {
        constructor(todo, time) {
            this.todo = todo
            this.time = time
        }
        init(todo,time){
           let li = document.createElement('li')
        }
    }
    class tips {
        constructor(content, lasttime) {
            this.content = content || ''
            this.lasttime = lasttime || 1000
        }
        show() {
            let div = document.createElement('div'),
                tipscontainer = document.getElementsByClassName('tipscontainer')[0],
                timer
            div.setAttribute('class', 'tips')
            div.innerHTML = '<span>' + this.content + '</span>'
            div.addEventListener('click', function () {
                this.remove()
                timer = null
            })
            timer = setTimeout(function () {
                div.remove()
            }, this.lasttime);
            if (tipscontainer.childElementCount >= 5) {
                tipscontainer.removeChild(tipscontainer.lastElementChild)
            }
            tipscontainer.appendChild(div)
        }
    }
    let $ = (id) => {
        return document.getElementById(id)
    }