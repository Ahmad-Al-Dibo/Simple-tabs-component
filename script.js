
let active_name = "active";

let tabs = document.querySelectorAll(".tab");


function control_content(targets_to_active, targets_to_deactive, display_type = "block"){
    const t = targets_to_active, s = targets_to_deactive;
    
    for (let i = 0; i < s.length; i++){
        const element_value = s[i].replace(/\./g, "")
        document.querySelector(`.${element_value}`).style.display = "none"
    }
     for (let i = 0; i < t.length; i++){
        const element_value = t[i].replace(/\./g, "")
        document.querySelector(`.${element_value}`).style.display =  display_type
    }

    return true
}

document.addEventListener("DOMContentLoaded",
    () => {
        tabs[0].classList.add(active_name);
        control_content([".content1"], [".content2", ".content3", ".content4"], "flex")
    }
)


tabs.forEach(
    (tab) => {
        tab.addEventListener("click", 
            (e) => {
                let target = e.target;
                if(target.classList.contains("tab")){
                    tabs.forEach((tab)=>{
                        tab.classList.remove(active_name);
                    })
                }
                target.classList.add(active_name);
                if (target.id === "tab1"){
                    control_content([".content1"], ["content2", "content3", ".content4"], "flex")
                }
                if (target.id === "tab2"){
                    control_content([".content2"], [".content1", ".content3", ".content4"], "flex")
                }
                if (target.id === "tab3"){
                    control_content([".content3"], [".content2", ".content1", ".content4"], "flex")
                }
                if (target.id === "tab4"){
                    control_content([".content4"], [".content1", ".content2", ".content3"], "flex");
                }
            }
        )
    }
)