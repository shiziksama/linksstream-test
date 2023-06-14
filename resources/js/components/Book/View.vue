<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Book details</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" v-model="book.name">
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="form-group">
                                <label>Description</label>
                                <input type="text" class="form-control" v-model="book.author">
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="form-group">
                                <label>Synopis</label>
                                <input type="text" class="form-control" v-model="book.synopsis">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"update-category",
    data(){
        return {
            book:[]
        }
    },
    mounted(){
        this.showBook()
    },
    methods:{
        async showBook(){
            for (let key in this.$store.getters.books) {
                if(this.$store.getters.books[key].id==this.$route.params.id){
                    this.book = this.$store.getters.books[key];
                    break;
                }
            }
        }
    }
}
</script>