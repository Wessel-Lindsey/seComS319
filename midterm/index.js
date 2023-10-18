var fileName = location.href.split("/").slice(-1); 

if(fileName == "soundSample.html"){
    fetch("./data.json")
    .then(response => response.json())
    .then(soundClips => loadSoundClips(soundClips))
}
else if(fileName == "index.html"){
    fetch("./data.json")
    .then(response => response.json())
    .then(indexResources => loadIndex(indexResources));
}

function loadSoundClips(soundClips) {

    var mp3Demo1 = document.getElementById("mp3Demo1"); 
    var mp3Demo2 = document.getElementById("mp3Demo2");  
    var mp3Demo3 = document.getElementById("mp3Demo3");
    var mp3Demo4 = document.getElementById("mp3Demo4"); 
    var mp3Demo5 = document.getElementById("mp3Demo5"); 
    var mp3Demo6 = document.getElementById("mp3Demo6"); 
    var mp3Demo7 = document.getElementById("mp3Demo7"); 
    var mp3Demo8 = document.getElementById("mp3Demo8"); 

    var titleDemo1 = document.getElementById("titleDemo1"); 
    var titleDemo2 = document.getElementById("titleDemo2");  
    var titleDemo3 = document.getElementById("titleDemo3");
    var titleDemo4 = document.getElementById("titleDemo4"); 
    var titleDemo5 = document.getElementById("titleDemo5"); 
    var titleDemo6 = document.getElementById("titleDemo6"); 
    var titleDemo7 = document.getElementById("titleDemo7"); 
    var titleDemo8 = document.getElementById("titleDemo8"); 

    var txtDemo1 = document.getElementById("txtDemo1"); 
    var txtDemo2 = document.getElementById("txtDemo2");  
    var txtDemo3 = document.getElementById("txtDemo3");
    var txtDemo4 = document.getElementById("txtDemo4"); 
    var txtDemo5 = document.getElementById("txtDemo5"); 
    var txtDemo6 = document.getElementById("txtDemo6"); 
    var txtDemo7 = document.getElementById("txtDemo7"); 
    var txtDemo8 = document.getElementById("txtDemo8"); 
    
    
    for (var i = 0; i<soundClips.soundSamples.length; i++){
    let title = soundClips.soundSamples[i].title;{}
    let soundSample = soundClips.soundSamples[i].soundSample;
    let text = soundClips.soundSamples[i].text;

    let mp3Demo = document.createElement("div");
        mp3Demo.innerHTML = `<audio controls src= ${soundSample}></audio>`;
    let titleDemo = document.createElement("p");
        titleDemo.innerHTML = `<h3 class="card-text mb-0"> <strong>${title}</strong></h3>`;
    let txtDemo = document.createElement("p");
        txtDemo.innerHTML = `<p class="card-text"> ${text}</p>`;

    if (soundClips.soundSamples[i].title === "Animation Demo") {
            mp3Demo1.appendChild(mp3Demo);
            titleDemo1.appendChild(titleDemo);
            // txtDemo1.appendChild(txtDemo);
        } else if (soundClips.soundSamples[i].title === "Audiobook Adult Nonfiction Demo") {
            mp3Demo2.appendChild(mp3Demo);
            titleDemo2.appendChild(titleDemo);
            // txtDemo2.appendChild(txtDemo);
        } else if (soundClips.soundSamples[i].title === "Audiobook Children Fiction Demo") {
            mp3Demo3.appendChild(mp3Demo);
            titleDemo3.appendChild(titleDemo);
            // txtDemo3.appendChild(txtDemo);
        } else if (soundClips.soundSamples[i].title === "Commercial Demo") {
            mp3Demo4.appendChild(mp3Demo);
            titleDemo4.appendChild(titleDemo);
            // txtDemo4.appendChild(txtDemo);
        } else if (soundClips.soundSamples[i].title === "eLearning Demo") {
            mp3Demo5.appendChild(mp3Demo);
            titleDemo5.appendChild(titleDemo);
            // txtDemo5.appendChild(txtDemo);
        } else if (soundClips.soundSamples[i].title === "Self Development Demo") {
            mp3Demo6.appendChild(mp3Demo);
            titleDemo6.appendChild(titleDemo);
            // txtDemo6.appendChild(txtDemo);
        } else if (soundClips.soundSamples[i].title === "Telephone and IRV Demo") {
            mp3Demo7.appendChild(mp3Demo);
            titleDemo7.appendChild(titleDemo);
            // txtDemo7.appendChild(txtDemo);
        }else if (soundClips.soundSamples[i].title === "Video Game Demo") {
            mp3Demo8.appendChild(mp3Demo);
            titleDemo8.appendChild(titleDemo);
            // txtDemo8.appendChild(txtDemo);
        }


    }

}

function loadIndex(indexResources) {

    var jpegProfile = document.getElementById("jpegProfile");
    var titleProfile = document.getElementById("titleProfile"); 
    var txtProfile = document.getElementById("txtProfile"); 
    
    
    for (var i = 0; i<indexResources.homePage.length; i++){
    let title = indexResources.homePage[i].title;{}
    let pic = indexResources.homePage[i].pic;
    let text = indexResources.homePage[i].text;

    let profilePic = document.createElement("div");
        profilePic.innerHTML = `<img src="${pic}" width="500">`;
    let profileTitle = document.createElement("h1");
        profileTitle.innerHTML = `<h1 class="display-4 fst-italic"> ${title}</h1>`;
    let profileTxt = document.createElement("p");
        profileTxt.innerHTML = `<p class="lead my-3"> ${text}</p>`;

    if (indexResources.homePage[i].title === "Slade Hovick") {
        jpegProfile.appendChild(profilePic);
        titleProfile.appendChild(profileTitle);
        txtProfile.appendChild(profileTxt);
    }

    }

}

