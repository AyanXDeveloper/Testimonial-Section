const userReviews = [
    {
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat labore ipsa perferendis commodi blanditiis obcaecati officia maxime magni vero. Voluptas, doloremque quaerat libero voluptate recusandae sit odit, ut obcaecati adipisci alias harum placeat eos cupiditate.",
        img : "./square-image.jpg",
        name : "Eva Watson",
        position : "CEO, Teedrobe"
    },
    {
        review: "Quaerat labore ipsa perferendis commodi blanditiis obcaecati officia maxime magni vero.Voluptas, ut obcaecati adipisci alias harum placeat eos cupiditate, lorem ipsum dolor sit amet, consectetur adipisicing elit, doloremque quaerat libero voluptate recusandae sit odit.",
        img : "./square-image (1).jpg",
        name : "John Doe",
        position : "Manager"
    },
    {
        review: "Alias harum placeat eos cupiditate, quaerat labore ipsa officia maxime magni vero perferendis commodi blanditiis obcaecati. Voluptas, ut obcaecati adipisci, lorem ipsum dolor sit amet, doloremque quaerat libero voluptate recusandae sit odit consectetur adipisicing elit,",
        img : "./square-image (2).jpg",
        name : "Ayan Zaveri",
        position : "Web Developer"
    },
]

const review = document.getElementById('review');
const img = document.getElementById('img');
const name = document.getElementById('name');
const position = document.getElementById('position');

let index = 0

const updateReview = () => {
    review.innerText = userReviews[index].review
    img.src = userReviews[index].img
    name.innerText = userReviews[index].name
    position.innerText = userReviews[index].position
}

const nextHandler = () => {
    if (index == userReviews.length - 1) {
        index = 0
    } else {
        index++
    }

    updateReview()
}

const prevHandler = () => {
    if (index == 0) {
        index = userReviews.length - 1
    } else {
        index--
    }

    updateReview()
}
updateReview()