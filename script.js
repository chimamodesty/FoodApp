function fixPrice() {
    let food = document.getElementById('whichFood').value;
    let price;
    if (food == "Varieties of food") {
        price = '';
    } else if (food == "Akpu and Egusi soup") {
        price = "#1800 a plate";
    } else if (food == "Akpu and Bitterleaf soup") {
        price = "#1500 a plate";
    } else if (food == "Akpu and oha soup") {
        price = "#1600 a plate";
    } else if (food == "Akpu and ofe nsala") {
        price = "#2000 a plate";
    } else if (food == "Rice and Stew") {
        price = "#1400 a plate";
    } else if (food == "Rice and ofe akwu") {
        price = "#1700 a plate";
    } else if (food == "Jollof rice and chicken") {
        price = "#1900 a plate";
    } else {
        price = "food not available";
    }

    document.getElementById('div').innerHTML = price;
}