const nove = document.getElementById("nove")
const pmoplace = document.getElementById("pmoplace")
const ytchannel = document.getElementById("ytchannel")
const tiktok = document.getElementById("ttprofile")
const github = document.getElementById("github")
const website = document.getElementById("websites")
const social = document.getElementById("socials")
const stuffs = document.getElementById("stuff")

let websites = [nove, pmoplace]
let socials = [ytchannel, tiktok, github]

nove.addEventListener('click', () => {
    window.location.href = "https://nove.tnc.lol/"
})

pmoplace.addEventListener('click', () => {
    window.location.href = "https://keith1r0blox.github.io/pmoplace/"
})

ytchannel.addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/@Keith1asdasd"
})

tiktok.addEventListener('click', () => {
    window.location.href = "https://www.tiktok.com/@crunchypee43"
})

github.addEventListener('click', () => {
    window.location.href = "https://github.com/Keith1R0blox"
})






function hidestuffs(elements) {
    elements.forEach(element => {
        element.classList.add("animate-display-down");
        element.style.display = "none";
    })
}

function showstuffs(elements) {
    elements.forEach(element => {
        element.style.display = "block"
        element.classList.remove("animate-display-up");
        void element.offsetWidth;
        element.classList.add("animate-display-up");
    })
}

website.addEventListener("click", () => {
    hidestuffs(socials)
    showstuffs(websites)
})

social.addEventListener("click", () => {
    hidestuffs(websites)
    showstuffs(socials)
})

stuffs.addEventListener("click", () => {
    showstuffs(socials)
    showstuffs(websites)
})