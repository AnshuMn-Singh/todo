const person = {
    name: 'Anshuman',
    address: {
        line1: '1',
        city: 'hyd',
        country: 'india',
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript(){
    return (
        <div>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{ person.printProfile() }</div>
        </div>
    )
}