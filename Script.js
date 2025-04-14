// Load posts from localStorage
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Function to display posts
function renderPosts() {
  const postsDiv = document.getElementById('posts');
  postsDiv.innerHTML = '';

  posts.forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const title = document.createElement('h2');
    title.textContent = post.title;
    title.onclick = () => alert(post.content);  // View post content on click

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deletePost(index);

    postDiv.appendChild(title);
    postDiv.appendChild(deleteBtn);
    postsDiv.appendChild(postDiv);
  });
}

// Function to add a new post
function addPost(title, content) {
  posts.push({ title, content });
  likes : 0
  localStorage.setItem('posts', JSON.stringify(posts));
  renderPosts();
}

// Function to delete a post
function deletePost(index) {
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));
  renderPosts();
}

// Handle form submission
document.getElementById('blogForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (title && content) {
    addPost(title, content);
    this.reset();
  } else {
    alert('Please fill out both fields.');
  }
});

// Initial render
renderPosts();
// Dark mode toggle button
const toggleBtn = document.getElementById('toggleDarkMode');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
alert("ENSURE YOU ALWAYS MAKE A POST!");
const post = []; // Store your posts here

// Add new post
function addPost(title, content) {
  const newPost = {
    title: title,
    content: content,
  };
  posts.push(newPost);
  displayPosts();
}
// Display posts function
function displayPosts() {
  const postsDiv = document.getElementById('posts');
  postsDiv.innerHTML = ''; // Clear current posts

  posts.forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const title = document.createElement('h2');
    title.textContent = post.title;
    title.onclick = () => alert(post.content); // Show content on click

    const content = document.createElement('p');
    content.textContent = post.content;  // Display the content

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deletePost(index);

    postDiv.appendChild(title);
    postDiv.appendChild(content);  // Append content here
    postDiv.appendChild(deleteBtn);
    postsDiv.appendChild(postDiv);
  });
}
