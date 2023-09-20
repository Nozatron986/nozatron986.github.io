var data = [
    {
        "name": "restaurant1",
        "type": "restaurant",
        "address": {
            "street name": "1 driveway cause",
            "number": "1"
        }
    },
    {
        "name": "sport center1",
        "type": "sport center",
        "address": {
            "street name": "2 driveway cause",
            "number": "1"
        }
    },
    {
        "name": "restaurant2",
        "type": "restaurant",
        "address": {
            "street name": "1 hemmingwood cause",
            "number": "1"
        }
    },
    {
        "name": "sport center2",
        "type": "coffeeshop",
        "address": {
            "street name": "2 hemmingwood cause",
            "number": "1"
        }
    },
    {
        "name": "restaurant3",
        "type": "restaurant",
        "address": {
            "street name": "1 bargley cause",
            "number": "1"
        }
    },
    {
        "name": "sports center3",
        "type": "sport center",
        "address": {
            "street name": "2 bargley cause",
            "number": "1"
        }
    },
    {
        "name": "swimming pool1",
        "type": "swimming pool",
        "address": {
            "street name": "3 driveway cause",
            "number": "1"
        }
    },
    {
        "name": "climbing wall1",
        "type": "climbing wall",
        "address": {
            "street name": "4 driveway cause",
            "number": "1"
        }
    },
    {
        "name": "swimming pool2",
        "type": "swimming pool",
        "address": {
            "street name": "3 hemmingwood cause",
            "number": "1"
        }
    },
    {
        "name": "climbing wall2",
        "type": "climbing wall",
        "address": {
            "street name": "4 hemmingwood cause",
            "number": "1"
        }
    },
    {
        "name": "swimming pool3",
        "type": "swimming pool",
        "address": {
            "street name": "3 bargley cause",
            "number": "1"
        }
    },
    {
        "name": "climbing wall3",
        "type": "climbing wall",
        "address": {
            "street name": "4 bargley cause",
            "number": "1"
        }
    }
]

function change() {
    window.location.href = "index.html";
}

var userCardTemplate = document.querySelector("[data-user-template]")
var userCardContainer = document.querySelector("[data-user-cards-container]")
var searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    var value = e.target.value.toLowerCase();
    users.forEach(user => {
        var isVisible =
            user.name.toLowerCase().includes(value) ||
            user.type.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

users = data.map(user => {
    var card = userCardTemplate.content.cloneNode(true).children[0]
    var header = card.querySelector("[data-header]")
    var body = card.querySelector("[data-body]")
    header.textContent = user.name
    body.textContent = user.type
    userCardContainer.append(card)
    return { name: user.name, type: user.type, element: card }
})
