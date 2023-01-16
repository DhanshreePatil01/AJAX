function getData(url,callback) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        callback(data);
    });
}

getData('https://jsonplaceholder.typicode.com/posts/1', function(post) {
    getData(`https://jsonplaceholder.typicode.com/users/${post.userId}`, function(user) {
      getData(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`, function(comments) {
        console.log("Entered data in post function: ",post);
      });
    });
  });