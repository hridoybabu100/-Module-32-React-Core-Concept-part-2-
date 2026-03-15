export default function Friend ({friend}){ 
    console.log(friend);
    
    return(
        <div className="card">
            <p>Body : {friend.body} </p>
            <p>ID : {friend.id} </p>
            <p>Title : {friend.title} </p>
            <p>User ID : {friend.userId} </p>
        </div>
    )
}