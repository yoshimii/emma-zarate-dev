window.addEventListener('load', function(){
    let sidebar = document.querySelector('.sidebar');
    let project = document.querySelector('#project-link');
    project.addEventListener('click', (e)=>{
        sidebar.textContent = "Projects";
        project.style.color = @purple;
    })    


})
