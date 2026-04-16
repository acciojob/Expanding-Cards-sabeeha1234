//your JS code here. If required.
const data = [
    {
        url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=1350&q=80",
        text: "Explore the world"
    },
    {
        url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=1350&q=80",
        text: "Wild Forest"
    },
    {
        url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1350&q=80",
        text: "Sunny Beach"
    },
    {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1353&q=80",
        text: "City on Winter"
    },
    {
        url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=1351&q=80",
        text: "Mountain Cloud"
    }
]
   

const container = document.querySelector(".container")

data.forEach((item, index) => {
    const panel = document.createElement("div")
    panel.classList.add("panel")
    panel.id = `panel-${index + 1}`
    panel.style.backgroundImage = `url(${item.url})`

    if(index === 0){
        panel.classList.add("active")
    }

    const text = document.createElement("div")
    text.classList.add("img-text")
    text.innerText = item.text

    panel.appendChild(text)

    panel.addEventListener("click", () => {
        removeActive()
        panel.classList.add("active")
    })

    container.appendChild(panel)
})

function removeActive(){
    const panels = document.querySelectorAll(".panel")
    panels.forEach(panel => panel.classList.remove("active"))
}