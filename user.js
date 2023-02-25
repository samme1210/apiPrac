const postsListEl = document.querySelector('.post-list')
let id = localStorage.getItem("id")

async function renderPosts(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    console.log(postsData)
    postsListEl.innerHTML = postsData.map((post) => postHTML(post)).join('');
}

function onSearchChange(event) {
    let id = event.target.value;
    renderPosts(id)
}

function postHTML(post) {
    return `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}

renderPosts(id);