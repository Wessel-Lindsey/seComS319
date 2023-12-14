import React, {useEffect} from "react";
import axios from 'axios';

// reactstrap components
import {
  Container
} from "reactstrap";

import "assets/css/admin.css";

// core components
import AdminNavbar from "./AdminNavbar.js";
import DefaultFooter from "./AdminFooter.js";

function Admin() {
    // const [messageData, setMessageData] = useState([]);

    useEffect(() =>{ 
      const fetchData = async() => {
        try{
          const response = await axios.get('http://localhost:8081/getMessage');
          // setMessageData(response.data);
          // console.log(response.data);
          // var container = document.getElementById("showData");
          // container.innerHTML = JSON.stringify(response.data, undefined, 2);

          var listDiv = document.getElementById('showData');
          var ul = document.createElement('ul');
          ul.style.cssText ='list-style: none;'
          ul.id = 'list';
          for (var i = 0; i < response.data.length; ++i) {
                var li=document.createElement('li');
                li.innerHTML = 
                `                  
                <div class="boxed">
                  <div class="container_sidebyside">
                    <div>
                      <h3>${response.data[i].Name}</h3>
                      <h6>${response.data[i].Email}</h6>
                      <p>${response.data[i].How_Help}</p>
                      <h6 id="invis" class="invis">${response.data[i]._id}</h6>
                      <h6>Id:${i}</h6>
                    </div>
                      <p>${response.data[i].Notes}</p>                  
                  </div>                  
                </div>
                `
                ul.appendChild(li);                                 
          }
          listDiv.appendChild(ul);

        //   numSoundClips = response.data.length;
        }catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
    }, []);



  return (
    <>
    <AdminNavbar/>
      <div className="wrapper">
        <div className="section">
          <Container>
          <div class ="container_sidebyside" style={{marginTop:"25px", display:"flex", justifyContent: "center",
    alignItems:"flex-start"}}>
            <div class="deleteBox" >
              <button onClick={ () => deleteMethod(document.getElementById('list').childNodes[document.getElementById('idDelete')?.value].childNodes[1].childNodes[1].childNodes[1].childNodes[7].textContent)}>Delete</button>
              <input placeholder="ID#" class="input" type="number" id='idDelete' min={0} step={1}/> 
            </div>
            <div>
              <button onClick={ () => putMethod(document.getElementById('list').childNodes[document.getElementById('idNotes')?.value].childNodes[1].childNodes[1].childNodes[1].childNodes[7].textContent, document.getElementById('notes').value)}>Update Notes</button>
              <input placeholder="ID#" class="input" type="number" id='idNotes' min={0} step={1}/> 
              <input placeholder="Notes" class="input" type="text" id='notes'/> 
            </div>
          </div>
            <div class="scroller">
              <div id="showData"/>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

function refreshPage() {
  window.location.reload(false);
}

function deleteMethod(id) {
  if(id !== null && id !== ""){
    fetch(`http://localhost:8081/removeMessage/${id}`, {
        method: "DELETE",
        headers: { 'content-type': 'application/json' },
    })
        .then(response => response.json())  // Use response.json() instead of response.JSON()
        .then(data => {
            console.log(data);
            refreshPage();
        })
        .catch((err) => console.log("Error:" + err))
  }
};


function putMethod(id, notes) {
  if(id !== null && id !== ""){
    fetch("http://localhost:8081/putMessage", {
      method: "Put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        Id: id,
        Notes: notes
      }), })
        .then(response => response.json())  // Use response.json() instead of response.JSON()
        .then(data => {
            console.log(data);
        })
        .catch((err) => console.log("Error:" + err))
    refreshPage();
  }
};

export default Admin;

