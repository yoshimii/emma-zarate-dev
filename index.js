window.addEventListener('load', function(){
    let sidebar = document.querySelector('.sidebar');
    let project = document.querySelector('#project-link');
    project.addEventListener('click', (e)=>{
        sidebar.textContent = "Projects";
    })    
let entryPoint = document.querySelector("#projects-div");

axios.get("https://api.github.com/users/yoshimii/repos")
.then((response)=> {
    response.data.forEach(repo => {
        let newRepo = repo;
        entryPoint.appendChild(projectsList(newRepo));
    });
    this.console.log(response);
    
})
// .then((response)=> {
//     response.forEach((element)=>{
//         axios.get(`${element.languages_url}`)
//         .then((response)=> {
//             this.console.log(response);
//         })

//     })
    
    // response.forEach((lang)=> {
    //     let newLang = lang;
    //     // let newLang = document.createElement('div');
    //     // newLang.classList.add('repo-lang');
    //     entryPoint.appendChild(projectsList(newLang));
    // })
// })
.catch((err)=> {
    this.console.log(err);
}) 


function projectsList(repoData, languages) {
    let project = document.createElement('div');
    project.classList.add("project-item");

    let title = document.createElement('div');
    title.classList.add('repo-name');
    title.textContent = "Title: ";

    let repoLink = document.createElement('a');
    repoLink.classList.add('repo-link');
    repoLink.textContent = repoData.name;
    repoLink.setAttribute('href', repoData.html_url);
    repoLink.style.textAlign = "center";
    

    // let repoDesc = document.createElement('div');
    // repoDesc.textContent = `Desc.: ${repoData.description}`;
    
    let repoLangs = document.createElement('div');
    repoLangs.classList.add('repo-lang');
    repoLangs.textContent = `Language: ${repoData.language}`;

    
    project.appendChild(title)
    title.appendChild(repoLink);
    // project.appendChild(repoDesc);
    project.appendChild(repoLangs);

    return project;

}

})
