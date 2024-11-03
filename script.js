function showSidebar() {
    const sideNavbar = document.querySelector("#side-nav")
    sideNavbar.style.display = "flex"
}

function hideSidebar() {
    const sideNavbar = document.querySelector("#side-nav")
    sideNavbar.style.display = "none"
}

const memberships = [
    { name: "Junior", desc: "Our Junior Membership offers unlimited access to all kids’ martial arts classes for the month, where young warriors build confidence, learn self-defense, and improve fitness in a fun, supportive environment. Empower your child with skills that last a lifetime!", price: "$25.00/month" },
    { name: "Basic", desc: "1 martial art - 2 sessions per week", price: "$25.00/month" },
    { name: "Intermediate", desc: "1 martial art - 3 sessions per week", price: "$35.00/month" },
    { name: "Advanced", desc: "Any 2 martial arts - 5 sessions per week", price: "$45.00/month" },
    { name: "Elite", desc: "Unlimited classes", price: "$60.00/month" },
    { name: "Private Martial Arts", desc: "Any martial arts", price: "$15.00/hour" },
    { name: "Self-defense Course", desc: "6-week course - 1 hour x 2 sessions per week", price: "$180.00" },
    { name: "Fitness Room Use", desc: "Per visit fee", price: "$6.00/visit" },
    { name: "Personal Fitness Training", desc: "Bob", price: "$35.00/hour" },
]

let currentIndex = 1

const membershipName = document.getElementById("membershipName")
const membershipDesc = document.getElementById("membershipDesc")
const membershipPrice = document.getElementById("membershipPrice")

function displayMembershipInfo(index) {
    membershipName.textContent = memberships[index].name
    membershipDesc.textContent = memberships[index].desc
    membershipPrice.textContent = memberships[index].price
}

displayMembershipInfo(currentIndex)

function nextMembership() {
    currentIndex = (currentIndex + 1) % memberships.length
    animateCarousel("next")
    //setTimeout(() => displayMembershipInfo(currentIndex), 500)
}

function prevMembership() {
    currentIndex = (currentIndex - 1 + memberships.length) % memberships.length
    animateCarousel("previous")
    //setTimeout(() => displayMembershipInfo(currentIndex), 500)
}

function animateCarousel(direction) {
    membershipName.classList.remove("slide-left", "slide-right")
    membershipPrice.classList.remove("slide-left", "slide-right")
    membershipDesc.classList.remove("active")

    if (direction === "next") {
        membershipName.classList.add("slide-left")
        membershipPrice.classList.add("slide-right")
    } else {
        membershipName.classList.add("slide-right")
        membershipPrice.classList.add("slide-left")
    }

    //setTimeout(() => {
    //    membershipDesc.classList.add("active")
    //}, 200)
}


