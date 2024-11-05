function showSidebar() {
    const sideNavbar = document.querySelector("#side-nav")
    sideNavbar.style.display = "flex"
}

function hideSidebar() {
    const sideNavbar = document.querySelector("#side-nav")
    sideNavbar.style.display = "none"
}

const memberships = [
    { name: "Junior", desc: "Our Junior Membership offers unlimited access to all kids’ martial arts classes for the month, where young warriors build confidence, learn self-defense, and improve fitness in a fun, supportive environment. Empower your child with skills that last a lifetime!", price: "£25.00/month" },
    { name: "Basic", desc: "Our Basic Membership provides focused training in one martial art style with two sessions per week, giving you the perfect balance of skill-building, self-defense, and fitness over the course of the month. Ideal for beginners and those looking to strengthen their foundations!", price: "£25.00/month" },
    { name: "Intermediate", desc: "The Intermediate Membership offers dedicated training in one martial art style with three sessions per week, helping you sharpen your skills, improve fitness, and gain deeper mastery over the course of a month. Perfect for those ready to take their practice to the next level!", price: "£35.00/month" },
    { name: "Advanced", desc: "Our Advanced Membership unlocks access to two martial arts styles with five sessions per week, providing intensive training, advanced techniques, and enhanced fitness for those committed to mastering their craft. Achieve peak performance and elevate your skills all month long!", price: "£45.00/month" },
    { name: "Elite", desc: "The Elite Membership grants you unlimited access to all martial arts classes for the entire month, allowing you to train as much as you want across any style. Ideal for dedicated practitioners aiming for comprehensive skill development, peak fitness, and mastery without limits!", price: "£60.00/month" },
    { name: "Private Martial Arts", desc: "Our Private Martial Arts Sessions offer personalized, one-on-one training by the hour, tailored to your specific goals and skill level. Perfect for targeted improvement, focused technique refinement, or a customized approach to martial arts and self-defense!", price: "£15.00/hour" },
    { name: "Self-defense Course", desc: "Our Six-Week Self-Defense Course provides two one-hour sessions per week, equipping you with essential self-defense skills and strategies for real-world situations. Gain confidence, improve awareness, and learn effective techniques in just six weeks!", price: "£180.00" },
    { name: "Fitness Room Use", desc: "Our Fitness Room Access allows you to use our state-of-the-art fitness area with a convenient per-visit fee. Perfect for those looking to boost their fitness routine with high-quality equipment and a motivating atmosphere, no commitment needed!", price: "£6.00/visit" },
    { name: "Personal Fitness Training", desc: "Our Hourly Fitness Training sessions with a personal trainer offer customized workouts tailored to your individual goals and fitness level. Experience personalized guidance and support to maximize your results, all while enjoying one-on-one attention for the ultimate fitness experience!", price: "£35.00/hour" },
]

let currentIndex = 0

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
    //animateCarousel("next")
    displayMembershipInfo(currentIndex)
}

function prevMembership() {
    currentIndex = (currentIndex - 1 + memberships.length) % memberships.length
    //animateCarousel("previous")
    displayMembershipInfo(currentIndex)
}

function openHourlySchedule(day) {
    const wholeDay = day.closest(".schedule-card")
    const hourlySchedule = wholeDay.querySelector(".hourly-schedule");

    // Toggle visibility by changing display and max-height
    if (hourlySchedule.style.display === 'none' || hourlySchedule.style.display === '') {
        hourlySchedule.style.display = 'block';  // Show the bottom div
        hourlySchedule.style.maxHeight = hourlySchedule.scrollHeight + "px";  // Expand it smoothly
    } else {
        hourlySchedule.style.maxHeight = '0';  // Collapse it smoothly
        setTimeout(() => {
            hourlySchedule.style.display = 'none';  // Hide the bottom div after collapsing
        }, 300);  // Wait for the transition to complete before hiding
    }
}
