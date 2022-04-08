


interface Profile {
    name:string
    image:string
    age:number
}

interface ProfilesProps {
    Profiles: Array<Profile>
}




const ListUser=(props:ProfilesProps)=>{
    return(
        <div>
            {props.Profiles.map((e, indexedDB)=>{

            })}
        </div>
    )
}