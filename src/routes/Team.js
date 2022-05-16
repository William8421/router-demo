import { NavLink, Outlet, useSearchParams } from "react-router-dom";

export default function Team({members}) {
    const [searchParams, setSearchParams] = useSearchParams();
    

  return (
    <div style={{display: 'flex'}}>
        <nav style={{
            borderRight: 'solid 1px',
            padding: '1rem',
        }}>
            <input
            value={searchParams.get('filter') || ''}
            onChange={event => {
                let filter = event.target.value;
                if (filter){
                    setSearchParams({filter})
                } else{
                    setSearchParams({'filter': ''})
                }
            }}
            />
            {members.filter(member => {
                let filter =searchParams.get('filter');
                if(!filter) return true;
                let name = member.name.toLocaleLowerCase()
                return name.startsWith(filter.toLowerCase())
            }).map(member => (
                <NavLink style={({isActive}) => {
                    return {
                        display: 'block',
                        margin: '1rem',
                        textAlign: 'right',
                        color: isActive ? 'red' : ''
                    }}
                }
                to={`/team/${member.id}`}
                key={member.id}
                >{member.name}
                </NavLink>
            ))}
        </nav>
        <Outlet/>
    </div>
  )
}
