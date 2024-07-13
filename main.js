class Swatch
{
    selector = "";
    element;
    checkmarkIcon;
    isChecked = false;

    // Swatch Constructor
    constructor(selector)
    {
        this.selector = selector;
        this.element = document.querySelector(selector);
        this.checkmarkIcon = document.querySelector(`${selector} .Checkmark-Icon`);
        this.isChecked = false;
    }

    checkSwatch()
    {
        // Return early if this swatch is already checked.
        if (this.isChecked)
            return;
        
        this.isChecked = true;
        this.checkmarkIcon.style.visibility = "visible";
        setIDBadgeColor(getStyle(this.element, "backgroundColor"));

        for (let swatch of swatches)
        {
            // Skip this iteration if the swatch's element matches this element.
            if (swatch.element == this.element)
                continue;
            swatch.uncheckSwatch();
        }
    }
    
    uncheckSwatch()
    {
        this.isChecked = false;
        this.checkmarkIcon.style.visibility = "hidden";
    }
}

//#region Variables
let employeeName = "";
let employeeColor = "#ffffff";
const defaultProfilePicPath = "./Assets/Default Profile Pic.png";

const blueSwatch = new Swatch(".Blue-Swatch");
const yellowSwatch = new Swatch(".Yellow-Swatch");
const greenSwatch = new Swatch(".Green-Swatch");
const redSwatch = new Swatch(".Red-Swatch");

const nameField = document.querySelector(".Name-Field");
const swatches = [blueSwatch, yellowSwatch, greenSwatch, redSwatch];

const uploadInput = document.querySelector("#upload-input");
const uploadImageButton = document.querySelector(".Upload-Image-Button");
const imageIcon = document.querySelector(".Image-Icon");
const imageFilename = document.querySelector(".Image-File");
const filename = document.querySelector(".Filename");
const closeButton = document.querySelector(".Close-Button");

const IDBadgeCover = document.querySelector(".ID-Badge-Cover");
const employeeNameTitle = document.querySelector(".Employee-Name");
const employeeProfilePic = document.querySelector(".Employee-Image");
//#endregion

//#region Main
function Main()
{
    parseNameField();
    nameField.addEventListener("keyup", parseNameField);

    swatches.forEach(swatch =>{
        swatch.element.addEventListener("click", function () {swatch.checkSwatch();});
    });

    // Set the blue swatch as the default swatch preference.
    blueSwatch.checkSwatch();

    uploadImageButton.addEventListener("click", uploadImage);
    uploadInput.addEventListener('change', displayEmployeeImage, false);
    closeButton.addEventListener("click", removeImage);
}
//#endregion

function parseNameField()
{
    employeeNameTitle.innerHTML = nameField.value;
}

function uploadImage()
{
    uploadInput.click();
}

/**
 * Display the user's image on the ID Badge card.
 */
function displayEmployeeImage(event)
{
    const files = event.target.files;
    var imageFile = files[0];

    filename.innerHTML = imageFile.name;
    employeeProfilePic.src = URL.createObjectURL(imageFile);

    // Hide the Upload Image button and display the image's filename.
    hideElement(uploadImageButton);
    showElement(imageFilename);

    imageIcon.style.color = "#737373";
    imageFilename.style.opacity = 0.5;
    togglePointerEvents(imageFilename, false);

    invoke(enableImageFilename, 0.25);
}

function setIDBadgeColor(color)
{
    var IDBadgeCoverColor = getStyle(IDBadgeCover, "backgroundColor");
    if (IDBadgeCoverColor == color)
        return;
    
    IDBadgeCover.style.backgroundColor = color;
}

function enableImageFilename()
{
    togglePointerEvents(imageFilename, true);
    imageFilename.style.opacity = 1;
}

function removeImage()
{
    filename.innerHTML = "";
    employeeProfilePic.src = defaultProfilePicPath;
    uploadInput.value = "";
    
    // Show the Upload Image button and hide the image's filename.
    hideElement(imageFilename);
    showElement(uploadImageButton);
}

function showElement(element)
{
    element.style.display = "flex";
}

function hideElement(element)
{
    element.style.display = "none";
}

function togglePointerEvents(element, condition)
{
    element.style.pointerEvents = condition == true ? "auto" : "none";
}

function getStyle(element, styleObj)
{
    return getComputedStyle(element)[styleObj];
}

function invoke(func, seconds)
{
    let invokeMethod = setTimeout(func, seconds * 1000);
}

function invokeRepeating(func, seconds)
{
    let invokeMethod = setInterval(func, seconds * 1000);
}

Main();