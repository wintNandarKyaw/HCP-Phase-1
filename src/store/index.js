import { defineStore } from "pinia";
import { ref } from "vue";
export const useBlogStore = defineStore('blogStore',()=>{
    const blogs =ref([
        {
            id:1,
            title:"What is Pinia?",
            content:"Pinia is Lorem ipsum dolor sit amot consectetur adisidicing elit."
        },
        {
            id:2,
            title:"What is Vuex?",
            content:"Vuex is Lorem ipsum dolor sit amot consectetur adisidicing elit."
        }
    ])
    function addBlog(formData){
        blogs.value.push(formData)
    }
    function deleteBlog(id){
        blogs.value =blogs.value.filter(blog => blog.id != id)
    }
    return {blogs, addBlog,deleteBlog}
})