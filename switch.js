switch (prompt("What is the waether like?")){
    case "rainy":
        console.log("bring umbrella with you");
        break;
    
    case "sunny":
        console.log("dress lightly");
        break;

    case "cloudy":
        console.log("run forest run");
        break;
    default:
        console.log("unknown weather type!");
        break;
}