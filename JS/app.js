

let input = 'Ac789'

let codes = [
    {name: 'Alfa', lowCase: 'a', upperCase: 'A'},
    {name: 'Bravo', lowCase: 'b', upperCase: 'B'},
    {name: 'Charlie', lowCase: 'c', upperCase: 'C'},
    {name: 'Delta', lowCase: 'd', upperCase: 'D'},
    {name: 'Echo', lowCase: 'e', upperCase: 'E'},
    {name: 'Foxtrot', lowCase: 'f', upperCase: 'F'},
    {name: 'Golf', lowCase: 'g', upperCase: 'G'},
    {name: 'Hotel', lowCase: 'h', upperCase: 'H'},
    {name: 'India', lowCase: 'i', upperCase: 'I'},
    {name: 'Juliett', lowCase: 'j', upperCase: 'J'},
    {name: 'Kilo', lowCase: 'k', upperCase: 'K'},
    {name: 'Lima', lowCase: 'l', upperCase: 'L'},
    {name: 'Mike', lowCase: 'm', upperCase: 'M'},
    {name: 'November', lowCase: 'n', upperCase: 'N'},
    {name: 'Oscar', lowCase: 'o', upperCase: 'O'},
    {name: 'Papa', lowCase: 'p', upperCase: 'P'},
    {name: 'Quebec', lowCase: 'q', upperCase: 'Q'},
    {name: 'Romeo', lowCase: 'r', upperCase: 'R'},
    {name: 'Sierra', lowCase: 's', upperCase: 'S'},
    {name: 'Tango', lowCase: 't', upperCase: 'T'},
    {name: 'Uniform', lowCase: 'u', upperCase: 'U'},
    {name: 'Victor', lowCase: 'v', upperCase: 'V'},
    {name: 'Whiskey', lowCase: 'w', upperCase: 'W'},
    {name: 'X-ray', lowCase: 'x', upperCase: 'X'},
    {name: 'Yankee', lowCase: 'y', upperCase: 'Y'},
    {name: 'Zulu', lowCase: 'z', upperCase: 'Z'},
    {name: 'Zero', number: '0'},
    {name: 'One', number: '1'},
    {name: 'Two', number: '2'},
    {name: 'Three', number: '3'},
    {name: 'Four', number: '4'},
    {name: 'Five', number: '5'},
    {name: 'Six', number: '6'},
    {name: 'Seven', number: '7'},
    {name: 'Eight', number: '8'},
    {name: 'Nine', number: '9'},
]


function translate(input){
    
    let translation = "";
    
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < codes.length; j++){
            if(input[i] == codes[j].lowCase){
                translation += codes[j].name + " ";
            }else if(input[i] == codes[j].upperCase){
                translation += codes[j].name + " ";
            }else if(input[i] == codes[j].number){
                translation += codes[j].name + " ";
            }else{
                continue;
            }
        }
    }

    return translation;
}

console.log(translate(input));
