import { useNavigate, useParams } from "react-router-dom";

export default function Member({members, setMembers}) {
    const params = useParams();
    let navigate = useNavigate()
    function getMember(id){
        return members.find(member => member.id === id )
    }
    function deleteMember(){
        navigate('/team')
            setMembers(members.filter(item => item.id !== id)) 
    }
    
    const member = getMember(parseInt(params.memberId, 10))
    const {street, suite, city, zipcode} = member.address;
    const {id} = member
    return (
        <main style={{ padding: "1rem"}}>
            <h2>{member.name}</h2>
            <ul style={{textAlign: 'left'}}>
            <li>username: {member.username}</li>
            <li>Email: {member.email}</li>
            <li>street:{street}</li>
            <li>suite: {suite}</li>
            <li>city: {city}</li>
            <li>zip code: {zipcode}</li>
            </ul>
            <button onClick={() => {navigate('/team')}}>Go to Team</button>
            <button onClick={deleteMember}>Delete Member</button>
            {/* <button onClick={() => {navigate('/team')
                setMembers(members.filter(item => item.id !== id))
            }}>delete member</button> */}
        </main>
    )
}