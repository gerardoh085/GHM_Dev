import robotics from "./robotics-items.js";

robotics.forEach((item)=>{
    
    // video boxes:
    var vidBox = document.querySelector(".video-boxes");

    var vidItems = document.createElement("div");
    vidItems.classList.add("video-item");
    
    // name
    var proj_name = document.createElement("h4");
    proj_name.textContent = item.name;
    vidItems.appendChild(proj_name);
    
    // video container
    var vidCon = document.createElement("div");
    vidCon.classList.add("vid-container");
        // video element/tag
        var vidTag = document.createElement("video");
        vidTag.classList.add("videos");
        vidTag.setAttribute("controls",'');

            // source tag/element
            var source = document.createElement("source");
            source.src = item.video;
            source.setAttribute("type","video/mp4");
            
            vidTag.appendChild(source);

        vidCon.appendChild(vidTag);


    vidItems.appendChild(vidCon);
    // description
    var desc = document.createElement("div");
    desc.classList.add("desc");
        var descItem = document.createElement("p");
        descItem.textContent = item.description;
    desc.appendChild(descItem);
    
    vidItems.appendChild(desc);


    vidBox.appendChild(vidItems);


});






