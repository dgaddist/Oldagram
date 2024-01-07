import { posts } from "./data.js";

document.addEventListener("click", function (event) {
  if (event.target.dataset.heart) {
    handleLikeClick(event.target.dataset.heart);
  }
});

function handleLikeClick(postId) {
  const targetPostObj = posts.filter(function (post) {
    return post.uuid === postId;
  })[0];

  if (targetPostObj.isLiked) {
    targetPostObj.likes--;
  } else {
    targetPostObj.likes++;
  }
  targetPostObj.isLiked = !targetPostObj.isLiked;
  render();
}

document.addEventListener("dblclick", function (e) {
  if (e.target.dataset.post) {
    handlePostClick(e.target.dataset.post);
  }
});

function handlePostClick(postId) {
  const targetPostObj = posts.filter(function (post) {
    return post.uuid === postId;
  })[0];

  if (targetPostObj.isPostLiked) {
    targetPostObj.likes--;
  } else {
    targetPostObj.likes++;
  }
  targetPostObj.isPostLiked = !targetPostObj.isPostLiked;
  render();
}

function getFeedHtml() {
  let feedHtml = ``;

  posts.forEach(function (post) {
    feedHtml += `
        <div class="vangogh-container">
          <div class="container-user">
            <img
              class="user-icon"
              src="${post.avatar}"
              alt="vangogh avatar"
            />
            <div>
              <h1 class="username-text">${post.name}</h1>
              <h2 class="location-text">${post.location}</h2>
            </div>
          </div>
          <img
            class="post-image"
            src="${post.post}"
            alt="vangogh post"
            id="image-1"
            data-post="${post.uuid}"
          />
          <div class="icons">
            <img
              class="heart-icon"
              src="./images/icon-heart.png"
              alt="heart icon"
              data-heart="${post.uuid}"
            />
            <img
              class="comment-icon"
              src="./images/icon-comment.png"
              alt="comment icon"
               data-comment="${post.uuid}"
            />
            <img class="dm-icon" src="./images/icon-dm.png" alt="DM icon"
             data-dm="${post.uuid}" />
          </div>
          <h3 class="like-count">${post.likes}</h3>
          <p class="username-caption">
            ${post.username}
            <span class="caption">${post.comment}</span>
          </p>
        </div>`;
  });
  return feedHtml;
}

function render() {
  const feed = document.getElementById("feed");
  feed.innerHTML = getFeedHtml();
}
render();
