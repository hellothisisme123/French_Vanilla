const concatenate = (a, b) => {
    return parseFloat(`${a}${b}`);    
}

const isObject = (variable) => { //returns true if its an object {} ||| and false if its not
    let str_variable = `${variable}`; //sets str_variable to variable but as a string
    str_variable = str_variable.charAt(0); //sets to the first letter inside str_variable
    if (typeof variable === 'string' || variable instanceof String) { //runs when string
        return false; //is not an object
    }
    if (str_variable != '[') { //runs when object
        return false; //is not an object
    }
    return true; //is an object
}

const random_min_max_int = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const random_rgb = () => { //rgb(r, g, b) :string
    let r = random_min_max_int(0, 255); //random red
    let g = random_min_max_int(0, 255); //random green
    let b = random_min_max_int(0, 255); //random blue
    let output = `rgb(${r}, ${g}, ${b})`; //sets output
    return output;
}

const random_hex = () => { //#abcdef :string
    const hexex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let r1 = hexex[random_min_max_int(0, 15)],   //red 1
        g1 = hexex[random_min_max_int(0, 15)],   //green 1
        b1 = hexex[random_min_max_int(0, 15)],   //blue 1
        r2 = hexex[random_min_max_int(0, 15)],   //red 2
        g2 = hexex[random_min_max_int(0, 15)],   //green 2
        b2 = hexex[random_min_max_int(0, 15)];   //blue 2
    
    let hex = `#${r1}${g1}${b1}${r2}${g2}${b2}`;    //sets output
    return hex;
}

const hex_to_rgb = (hex) => { 
    if (hex.length == 4 || hex.length == 7) { //runs when the hex has a #
        hex = hex.substring(1, 7); //removes the #
    } 

    if (hex.length == 3) { //if 3 letter hex
        hex = hex.split(""); //splits hex into r g b
        for (let i = 0; i < hex.length; i++) { //doubles each component
            hex[i] = hex[i] + hex[i]; //doubles the component
        }
    } else if (hex.length == 6) { //if 6 letter hex
        hex = hex.split(""); //splits into 6 array
        hex[0] = hex[0] + hex[1];  //combines to 1
        hex[1] = hex[2] + hex[3];  //combines to 2
        hex[2] = hex[4] + hex[5];  //combines to 3
        hex = [hex[0], hex[1], hex[2]] //removes unnecessary array items
    }

    for (let i = 0; i < hex.length; i++) {
        hex[i] = parseInt(hex[i], 16);
        // log(hex[i]);
    }

    // log(hex);
    return hex;
}

const insert_mid_string = (string, location, input_txt) => { //inserts a string into the middle of another string
    let a = string.slice(0, -(string.length - location));   //string is the initial string
    let b = string.slice(location, string.length);          //location is the location for the text to be added
    return `${a}${input_txt}${b}`;                          //input_txt is the text thats being added
}

const isNegative = (num) => {
    if (num >= 0) return false; //positive
    if (num < 0)  return true;  //negative
}

const isDivisible = (num, by) => {
    const a = `${(num / by)}`.split('.');   //splits a into an array on the .
    if (a.length == 1) {//when array length is 1
        if (isNaN(a[0])) { //if a is NaN
            console.log('variable is the wrong type')
            return false;                   //if something is broken
        }
        return true;                        //num is divisible by by
    } else if (a.length == 2) {//if array length is 2
        return false;                       //num is not divisible by by
    }
}

const $ = (a) => { //$ function query selector
    return document.querySelector(a);
}

const remove_array_item = (array, item) => { //array is the array //item is the item you delete
    let a; //a
    let b; //b
    let c; //c
    let f; //final

    b = array; 
    a = b.splice(0, item); //splits b into 2 arrays, a and b 
    c = b.splice(1);       //splits b into 2 more arrrays, b and c, b is the node that gets removed
    f = a.concat(c);       //concatinates a and c into f
    
    return f;              //returns f
}
