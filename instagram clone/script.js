const posts = [
  {
    username: "Mabrook",
    media: "./image/love.jpg",
    likes: 123_987,
    message: "we after the best services",
    time: "2 HOURS AGO"
  },
  {
    username: "Aquad",
    media: "./image/biz_logo.jpg",
    likes: 123_987,
    message: "check out our new project",
    time: "2 MINUTES AGO"
  },
  {
    username: "Catts",
    media: "./image/koala.jpg",
    likes: 123_987,
    message: "lol! javascript is superb",
    time: "11 HOURS AGO"
  },
  {
    username: "Catts",
    media: "./image/koala.jpg",
    likes: 123_987,
    message: "lol! javascript is superb",
    time: "11 HOURS AGO"
  },
  {
    username: "Catts",
    media: "./image/koala.jpg",
    likes: 123_987,
    message: "lol! javascript is superb",
    time: "11 HOURS AGO"
  }
  
      


       
]

let post_container = document.querySelector(".post_container");

window.onload = () => {
  posts.forEach(post => {
    post_container.innerHTML += `
        <div class="post">
          <div class="top">
            <div class="dp">
              <img width="25px" src="co.png" alt="">
              <div class="profile_name">${post.username}</div>
            </div>
            <img width="20px" src="dot.png" alt="">
          </div>
          <img width="100%" src="${post.media}" alt="">
          <div class="reactions">
            <div class="reaction_panel">
              <div class="lcs">
                <img width="20px" src="love.png" alt="">
                <img width="20px" src="comment.png" alt="">
                <img width="20px" src="nav.png" alt="">
              </div>
              <img width="20px" src="user.png" alt="">
            </div>
            <div class="post_texts">
              <div class="likes"><b>${post.likes}Likes</b></div>
              <div class="message"><b>${post.message}</b>super hero</div>
              <div class="time">${post.time}</div>
            </div>
            <div class="comment">
              <img width="20px" src="smile.png" alt="">
              <input type="text" id="comment_text" placeholder="Add a comment">
              <button class="post_button">post</button>
            </div>
          </div>
        </div>
    

    
    
    `
  })
  
}

function float() {
  var add_post_container =document.querySelector(".add_post_container")
  add_post_container.style.display = "block";
}