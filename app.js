const App = {
    data() {
        return {
            title:'Моя первая страница на Vue.js.' +
                ' Добавьте свой текст!)',
            placeholderString: 'Введите текст',
            inputValue: '',
            post: ['Сегодня 18.01.2021, это мой первый проект.',
                'По-моему неплохо получилось=)'],
            counter: 0,
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewPost() {
            if (this.inputValue !== '') {
                this.post.push(this.inputValue)
                this.inputValue = ''
            }
        },

        //removePost(idx) {
            //this.post.splice(idx, 1)
        //},

    }//
}


Vue.createApp(App).mount('#app')