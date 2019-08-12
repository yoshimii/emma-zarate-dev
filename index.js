window.addEventListener('load', function(){
    // let sidebar = document.querySelector('.sidebar');
    // let project = document.querySelector('#project-link');
    // project.addEventListener('click', (e)=>{
    //     sidebar.textContent = "Projects";
    //     project.style.color = @purple;
    // })    
// let entryPoint = document.querySelector("#projects-div");

// axios.get("https://api.github.com/users/yoshimii/repos")
// .then((response)=> {
//     response.data.forEach(repo => {
//         let newRepo = repo;
//         entryPoint.appendChild(projectsList(newRepo));
//     });
    
// })
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
// .catch((err)=> {
//     this.console.log(err);
// }) 


function projectsList(repoData, languages) {
    let project = document.createElement('div');
    project.classList.add("project-item");

    let repoName = document.createElement('div');
    repoName.classList.add('repo-name');
    repoName.textContent = repoData.name;

    let repoLink = document.createElement('a');
    repoLink.classList.add('repo-link');
    repoLink.setAttribute('src', repoData.html_url);

    let repoDesc = document.createElement('div');
    repoDesc.textContent = repoData.description;
    
    let repoLangs = document.createElement('div');
    repoLangs.classList.add('repo-lang');
    repoLangs.textContent = languages;

    project.appendChild(repoName);
    project.appendChild(repoDesc);
    project.appendChild(repoLink);
    project.appendChild(repoLangs);

    return project;

}

})
