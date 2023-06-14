<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Books</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                </tr>
                            </thead>
                            <tbody v-if="books.length > 0">
                                <tr v-for="(book,key) in books" :key="key">
                                    <td>{{ book.id }}</td>
                                    <td> <router-link :to='{name:"BookView",params:{id:book.id}}' class="btn btn-success">{{ book.name }}</router-link></td>
                                    <td>{{ book.author }}</td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Books Found.</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="pagination">
                            
                            <button v-if="prev!=0" v-on:click="this.getBooks(prev)">{{prev}}</button>
                            <button v-if="next!=0" v-on:click="this.getBooks(next)">{{next}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"books",
    data(){
        return {
            books:[],
            prev:0,
            next:2,
        }
    },
    mounted(){
        this.getBooks(1)
    },
    methods:{
        async getBooks(page){
            await this.$store.dispatch("getBooks", page);
            this.books = this.$store.getters.books;
            this.prev=page-1;
            this.next=page+1;
            if(this.next>Math.ceil(this.$store.getters.pagination.total/this.$store.getters.pagination.per_page)){
                this.next=0;
            }
        }
    }
}
</script>