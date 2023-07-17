import research from "./researchItems.js";

research.forEach((items)=>{

    var resBox = document.querySelector('.research-boxes');
        // item 
        var resItem = document.createElement('div');
        resItem.classList.add('res-items');

            //title
            var title = document.createElement('h4');
            title.textContent = items.name;
            // name/title done
        resItem.appendChild(title);

            // poster
            var posCont = document.createElement('div');
            posCont.classList.add('poster-container');
                // pdf wrapper
                var pdfWrapper = document.createElement('div'); 
                pdfWrapper.classList.add('pdf-wrapper');
                    // iframe:
                    var frame = document.createElement('iframe');
                    frame.classList.add("poster");
                    frame.src= items.pdf;
                    frame.setAttribute('frameborder','0');
                pdfWrapper.appendChild(frame);
            posCont.appendChild(pdfWrapper);
            
        resItem.appendChild(posCont);

            // desc
            var task = document.createElement('div');
            task.classList.add("purpose");
                // p tag
                var desc = document.createElement('p');
                desc.textContent = items.task;

                task.appendChild(desc);

        resItem.appendChild(task);


        resBox.appendChild(resItem);

});