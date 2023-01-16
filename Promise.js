function getData(url) {
    return fetch(url)
    .then(response => response.json());
}

getData('https://jsonplaceholder.typicode.com/posts/1')
    .then(post => {
        return getData(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
           .then(user => {
              return getData(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                .then(comments => {
                console.log("Data is: ",post,user,comments);
            });
        });
});