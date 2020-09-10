function initial() {
    new Vue({
        el: Todolist,
        data: {
            newTask: '',
            lists: [
                '買牛奶', '東西要做不完了啦嗚嗚嗚'
            ],
            certain:'確定',
        },
        methods: {
            addTask: function() {
                if (this.newTask) {
                    this.lists.push(this.newTask); //把清單都push上去
                    this.newTask = '';
                }
                else{alert('不可輸入空白');}
                //將input清空
            },
            remove: function(index) {
                this.lists.splice(index, 1);
            }
        }

    });
}