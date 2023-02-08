interface UserInfo{
    userId:number;
    id:number;
    title:string;
    info:info
    tags:[
        tags
    ]
}

interface tags  {
    name: string;
    value: number
}
interface info{
    desc:string;
    isActive:true
}

let user:UserInfo = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    info: {
     desc: 'delectus aut autem',
     isActive: true
    },
    tags: 
    [
        {
            name: 'my name',
            value: 1000
        }
    ]
}
console.log(user);
