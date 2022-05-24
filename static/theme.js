function setTheme() {
    let isDark = localStorage.getItem("dark")
    let body = document.body;



    if (isDark === 'true') {


        body.classList.toggle("dark-mode");

        themeModeButton = document.getElementById("mode-btn")
        themeModeButton.textContent = 'الوضع المضيء'

        localStorage.setItem("dark", true)
            
    }else{
        localStorage.setItem("dark", false)

    }

}
document.getElementById("mode-btn").addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
    mode = document.getElementById("mode-btn")
    if (mode.textContent == 'الوضع الداكن') {

        mode.textContent = 'الوضع المضيء'
        localStorage.setItem("dark", true)
        
    } else {
        mode.textContent = 'الوضع الداكن'
        localStorage.setItem("dark", false)
    }

})
setTheme()