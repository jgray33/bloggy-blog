console.log("connected")

const commentFormHandler = async (event) => {
    console.log("clicked")
    event.preventDefault()

let comment = document.querySelector("#comment-box").value
let commentID = document.getElementById("commentID")
let post_id = commentID.getAttribute("data-id")

console.log(comment, post_id)

const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({comment, post_id}),
    headers: { "Content-Type": "application/json" },
})
if(response.ok) {
    console.log("Comment posted")
} else {
    console.log("Comment not posted")
}
 
}

document.querySelector(".comment-box").addEventListener("submit", commentFormHandler)