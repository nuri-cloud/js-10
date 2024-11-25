document.addEventListener("DOMContentLoaded", () => {
    const btnDay = document.querySelector("#btn");
    const btnNight = document.querySelector("#btn1");

    btnDay.addEventListener("click", () => {
        document.body.style.color = "orange";
        btnDay.style.backgroundColor = "orange";
        btnDay.style.color = "white";
    });

    btnNight.addEventListener("click", () => {
        document.body.style.color = "black";
        btnNight.style.backgroundColor = "black";
        btnNight.style.color = "white";
    });

    const input = document.querySelector("#input");
    const root = document.querySelector("#root");

    input.addEventListener("change", () => {
        const text = input.value;
        const newTextElement = document.createElement("div");
        newTextElement.textContent = text;
        root.appendChild(newTextElement);

        input.value = "";
    });
});
