



// // Create a function for getting a variable value
// function getCurrentThemeMode() {
//     // Get the root element
//     var rootElement = document.querySelector(':root');
    
//     // Get the styles values and properties for the root element
//     var rootValuesAndProperties = getComputedStyle(rootElement);
    
//     // We are using this information to decide which theme to set
//     let currentBgColor =  rootValuesAndProperties.getPropertyValue('--bg-color');
//     let currentPrimaryColor =  rootValuesAndProperties.getPropertyValue('--primary-color');
//     let textColor =  rootValuesAndProperties.getPropertyValue('--text-color');
//     let darkTextColor =  rootValuesAndProperties.getPropertyValue('--dar-text-color');
    
//     changeThemeMode(rootElement, currentBgColor, currentPrimaryColor, textColor, darkTextColor)
// }

// function changeThemeMode(rootElement, currentBgColor, currentPrimaryColor, textColor, darkTextColor) {



//     if (currentBgColor.slice(1,8) == "#F2F2F2"){
//         rootElement.style.setProperty('--bg-color', currentPrimaryColor);
//         rootElement.style.setProperty('--primary-color', currentBgColor);
//         rootElement.style.setProperty('--text-color', 'black');
//     }
//   // Set the value of variable --blue to another value (in this case "lightblue")
// }


// getCurrentThemeMode()
