// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (array, name)=>{
    const newArray =array.filter(name2 => name2.toUpperCase() === name.toUpperCase())
    return newArray
}

// have to match first 2 letter

const fuzzyMatch = (array, name) =>{
    const newArray = array.filter(name2 => name2.substring(0,2) === name )
    return newArray
}


const matchName = (array, name1) =>{
    const newArray = array.filter(name2 => {
        
        if (name2.name === name1){
            return name2
        }
        }
    )
    return newArray
}