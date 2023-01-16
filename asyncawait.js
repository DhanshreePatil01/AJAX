async function getData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
}

async function processData() {
    try {
        let post = await getData('https://jsonplaceholder.typicode.com/posts/1');
        let user = await getData(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        let comments = await getData(`https://jsonplaceholder.typicode.com/comments?postID=${post.id}`);
           console.log("Data: ",post);
           console.log("Data: ",user);
           console.log("Data: ",comments);

    }
    catch(error){
        console.log(error);
    }
}

processData();