async function showBlogs() {
    try {
        const response = await axios('/getBlogs');
        const blogs = response.data;

        const blogsContainer = document.getElementById('allBlogsContainer');
        blogsContainer.innerHTML = '<h3>All Blogs</h3>';

        blogs.forEach(blog => {
            if(blog.status==="Approved"){
                blogsContainer.innerHTML += `
                    <div class="blog">
                        <h4>Title: ${blog.title}</h4>
                        <p>content: ${blog.content}</p>
                        <p>category: ${blog.category}</p>
                    </div>`;
                }
            });
    } catch (error) {
        console.error(error);
    }
}
showBlogs();  
