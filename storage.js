class storage{
    static getusersfromstorage(){
        let users;

        if(localStorage.getItem("searched")===null){
            users=[];
        }else{
            users=JSON.parse(localStorage.getItem("searched"));
        }

        return users;
    }

    static addseachedusertostorage(username){
        let users=this.getusersfromstorage();

        if(users.indexOf(username)==-1){
            users.push(username);
        }

        localStorage.setItem("searched",JSON.stringify(users));

    }

    static clearusers(){

        localStorage.removeItem("searched");

    }
}