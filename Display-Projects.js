import projects from "./project-items.js";


// get project items class (html)

/* 

<div class="project-items">
    <h4>Super Cool Project</h4>
    <div class="image-container">
        <div class="display-image">
            <img class="project-images" src="./images/pexels-asim-alnamat-362993.jpg" alt="">
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam earum recusandae quam sit, praesentium molestias
            laudantium laboriosam molestiae odit inventore reprehenderit
            maiores architecto eaque magni, iusto error beatae sint nulla!
        </p>
        <div class="github-link">
            <a href="https://github.com/gerardoh085" target="_blank" rel="noopener noreferrer">
                <svg class="svg-image icon-bell" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
            </a>
        </div>
    </div>
</div>

*/


// container to append .project-items

projects.forEach((items)=>{
    var projectContainer = document.querySelector('.project-boxes');

    // project item box
    var project_items = document.createElement('div');
    project_items.classList.add('project-items');

    // name
    var proj_name = document.createElement("h4");
    proj_name.textContent = items.name;

    project_items.appendChild(proj_name);

    
        // image-container:
        var image_container = document.createElement('div');
        image_container.classList.add('image-container');
        

            // create div for displaying image:
            var image_display = document.createElement('div');
            image_display.classList.add('display-image');

            // get image:
            var imageEL = document.createElement('img');
            imageEL.classList.add('project-images');
            imageEL.src = items.image;

            image_display.appendChild(imageEL);

        image_container.appendChild(image_display);
        
            // p tag:

            var p = document.createElement('p');
            p.textContent = "Skills: " + items.skills;
        
        image_container.appendChild(p);
            // div
            var links = document.createElement('div');
            links.classList.add('github-link');
                // a tag
                var aElem = document.createElement('a');
                    aElem.href = items.github;
                    aElem.target= "_blank";
                    // svg 
                    var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svgEl.classList.add('svg-image');
                    svgEl.classList.add("icon-bell");
                    svgEl.setAttribute("viewBox", "0 0 24 24");
                        // path
                        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        path.setAttribute('d', "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z");

                    svgEl.appendChild(path);
                aElem.appendChild(svgEl);
            links.appendChild(aElem);
        image_container.appendChild(links);

                // var aEl = document.createElement('a');
                // aEl.href = items.github;

                //     var svgEl = document.createElement('svg');
                //     links.classList.add('svg-image');
                //     links.classList.add('icon-bell');
                //     svgEl.setAttribute("xmlns","http://www.w3.org/2000/svg");
                //     svgEl.setAttribute("viewBox","0 0 24 24");
                        
                //         // path
                //         var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                //         path.setAttribute("d", "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z")

                //     svgEl.appendChild(path);

                // aEl.appendChild(svgEl);


            // links.appendChild(aEl);


        // image_container.appendChild(links);

        // append image container to project items
        project_items.appendChild(image_container);

    // last step:
    //append project items to container 
    projectContainer.appendChild(project_items);

});