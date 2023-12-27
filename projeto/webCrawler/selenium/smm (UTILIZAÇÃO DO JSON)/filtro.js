var tabs = document.querySelectorAll(".teste-filtro ul button");


tabs.forEach((tab)=>{
    tab.addEventListener("click", ()=> {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        tab.className += " active";
        var moreNews = document.getElementById("app-start");
        moreNews.style.display = "none";
        var tabval = tab.id;
        if(tabval == "undesper"){
            document.getElementById("app").innerHTML = `${despeData.map(function(desper){
                return `
                        <div class="noticias float-child style="position: absolute;">
                            <a class="imagem" href="${desper.href}">
                                <img class="noticia-img grid-item" src="${desper.img}">
                                <p class="title">${desper.title}</p>
                            </a>
                            <p class="text">${desper.text}</p>
                            <a class="under" style="background-image:url(./images/unidos.PNG); background-color: #ffdcf5;">
                                <p class="text-right">UNIDOS CONTRA DSPRDCIO</p>
                            </a>
                        </div>
                `
            }).join('')}`
        }else if(tabval == "good"){
            document.getElementById("app").innerHTML = `${desperGood.map(function(desper){
                return `
                        <div class="noticias float-child style="position: absolute;">
                            <a class="imagem" href="${desper.href}">
                                <img class="noticia-img grid-item" style="background-image: ${desper.img}; background-position: center; background-size: cover;">
                                <p class="title">${desper.title}</p>
                            </a>
                            <a class="under" style="background-image:url(./images/togood.PNG); background-color: #b6e5dd;">
                                <p class="text-right">UNIDOS CONTRA DSPRDCIO</p>
                            </a>
                        </div>
                `
            }).join('')}`
        }else if(tabval == "all"){
            document.getElementById("app").innerHTML = ""
            let x = 0;
            let y = 0;
            for (let i = 0; i < (despeData.length + desperGood.length); i++) {
                if(i%2 == 1){
                document.getElementById("app").innerHTML += 
                    `<div class="noticias float-child style="position: absolute;">
                        <a class="imagem" href="${despeData[y].href}">
                            <img class="noticia-img grid-item" src="${despeData[y].img}">
                            <p class="title">${despeData[y].title}</p>
                        </a>
                        <p class="text">${despeData[y].text}</p>
                        <a class="under" style="background-image:url(./images/unidos.PNG); background-color: #ffdcf5;">
                            <p class="text-right">UNIDOS CONTRA DSPRDCIO</p>
                        </a>
                    </div>
                    `
                    y++;
                }else{   
                    document.getElementById("app").innerHTML += 
                        `
                        <div class="noticias float-child style="position: absolute;">
                        <a class="imagem" href="${desperGood[x].href}">
                            <img class="noticia-img grid-item" style="background-image: ${desperGood[x].img}; background-position: center; background-size: cover;">
                            <p class="title">${desperGood[x].title}</p>
                        </a>
                        <a class="under" style="background-image:url(./images/togood.PNG); background-color: #b6e5dd;">
                            <p class="text-right">UNIDOS CONTRA DSPRDCIO</p>
                        </a>
                    </div>
                        `
                    x++;
                }
            }
        }
    })
})