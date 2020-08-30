function initial() {
    new Vue({
        el: Todolist,
        data: {
            newTask: '',
            lists: [
                '買牛奶', '東西要做不完了啦嗚嗚嗚'
            ]
        },
        methods: {
            addTask: function() {
                this.lists.push(this.newTask); //把清單都push上去
                this.newTask = ''; //將input清空
            },
            remove: function(index) {
                this.lists.splice(index, 1);
            }
        }

    });
}