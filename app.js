const githubform=document.getElementById("github-form");
const nameInput=document.getElementById("githubname");
const clearLastUsers=document.getElementById("clear-last-users");

const lastUsers=document.getElementById("last-users");
const git=new github();
const ui=new UI();


eventlisteners();


function eventlisteners(){
    githubform.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSurched);
    document.addEventListener("DOMContentLoaded",getAllSearched);

}


function getData(e){
    e.preventDefault();
    let username=nameInput.value.trim();
    if(username===""){
        ui.showerror("kullanıcı bulunamadı");
    }else{
        git.GetGithubData(username)
        .then(response => {
        if(response.user.massage==="Not found"){
            console.log("hata");
        }else{
            ui.addtoUI(username);
            ui.showUserInfo(response.user);
            ui.showrepos(response.repo);
            storage.addseachedusertostorage(username);
        }
    })
        .catch(err => console.log(err));
    }
    ui.clearinout();




    
}


function clearAllSurched(){

    if(confirm("emin misiniz")){
        storage.clearusers();
        ui.clearAll();
    }
    



}

function getAllSearched(e){
    let users=storage.getusersfromstorage();
    let result;
    users.forEach(user=>{
        //<li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
        result+=`<li class="list-group-item">${user}</li>`;
    });
    lastUsers.innerHTML=result;
    
}