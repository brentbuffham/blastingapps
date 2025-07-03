// Description: This file contains the main functions for the Kirra App
// Author: Brent Buffham
// Last Modified: "20250703.1520WST"
const buildVersion = "20250703.1520AWST"; //Backwards Compatible Date Format AWST = Australian Western Standard Time
//-----------------------------------------
// Using SweetAlert Library Create a popup that gets input from the user.
function updatePopup() {
	console.log("function updatePopup()");
	Swal.fire({
		showCancelButton: false,
		confirmButtonText: "Ok",
		html: `
		<svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70" height="70" viewBox="-40 0 200 200" stroke-width="3" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
		<path
			d="M7.53,64.77c-0.36-1.36-0.38-3.99,0.08-5.34c-0.98-2.51-2.88-8.13-2.22-10.9c1.77-5.81-0.07-16.1-0.95-24.92C3.55,18.78,6.31,4.11,7.61,2.26c6.24-5.37,24.76,22.67,29.81,29.81c1.57-0.17,1.91,1.72,1.78,2.93c1.87,2.82,3.54,4.3,7.03,4.17c2.71,0.61,9.25,1.73,11.56,3.31c3.57-1.82,10.55,1.6,12.57-3.03c1.23-0.82,4.4-3.07,3.94-4.96c2.19-1.04,4.21-5.39,5.03-7.5c1.7-4.14,5.96-7.51,8.29-11.14c5.21-6.14,15.78-27.02,20.71-8.09c2.32,9.62,3.98,22.54,1.38,32.15c0.51,1.33,0.58,4.5,0.59,5.92c0.89,1.69,0.82,4.84,0.2,6.61c0.38,2.52-0.66,5.62-2.47,7.4c0.17,1.03,0.2,2.67-0.49,3.55c0,0,3.21,2.42,4.04,4.54c0.84,2.12-0.59,9.51-1.18,12.53c1.32,1.57,2.75,4.67,2.17,6.81c3.3,5.31-0.68,4.27,1.38,8.48c0.69,2.34-0.51,4.65,1.09,6.71c-0.28,1.05-1.39,3.81-1.58,4.93c0.84,2.71-1.41,6.85-2.96,8.97c0,0,0.39,3.85,0.39,3.85c-4.86,1.62-1.02,2.56-4.83,5.13c-3.52,19.49-28.37,34.55-46.94,37.28c-9.52,0.18-23.4-3.44-29-11.64c-3.47-1.2-9.42-2.81-11.05-6.51c-0.68-1.05-4.4-2.51-3.75-4.24c-1.39,0.33-2.04-1.83-2.47-2.76c-3.42,0.24-3.99-8.32-3.55-10.75c0,0-1.68-3.16-1.68-3.16c0.5-1.06,0.12-1.99-0.69-2.66c0.66-1.83,0.58-1.44-1.18-1.87c-0.19-1.23,0.33-2.6-0.69-3.45c0.13-1.01-0.33-2.69-0.8-3.55c-1.65-1.36-1.5-5.44-2.56-7.3c-3.32-1.31-2.49-3.65,0.2-5.23c0.49-1.42-0.47-3.32-1.38-4.34c2.56-1.71-0.74-3.32,1.48-6.41c0.99-2.71,2.11-0.41-0.3-3.85c0.28-2.86,2.84-3.43,3.06-6.9c0.46-1.74-0.61-4.26-1.78-5.52c3.46-0.9,1.88-1.16,1.28-3.65l2.81-3" />
		<path d="M60.64,124.58c1.69,0.63,4,0.19,5.21-1.41c-1.74,0.78-4.01,1.14-4.83-0.99c3.43-2.98-6.5-3.52,1.55,1.73" />
		<path d="M51.44,124.77c-1.56,0.79-4.74,0.05-5.89-2.37c1.6,1.38,3.9,2.71,4.71-0.18c-3.32-3.58,5.44-3.26,2.3,1.74" />
		<path d="M42.74,86.54c-3.68-8.21-9.86-10.1-12.32-6.32c-1.16,1.72-1.56,3.14-2.92,3.74" />
		<path d="M41.19,87.3c0,0-1.04,0.11-2.33,0.63c-1.29,0.52-5.01,0.78-6.4-0.06c-1.39-0.83-2.55-3.2-2.55-3.2" />
		<path d="M72.65,83.88c0,0,0.7-1.47,0.93-2.36c0.22-0.89,0.9-4.5,4.52-4.59c3.62-0.09,5.07,2.18,5.95,3.48s3.41,2.52,3.41,2.52" />
		<path d="M74.1,84.9c2.28,3.42,7.74,2.49,9.25-1.12" />
		<path
			d="M34.46,114.13c1.38,2.59,0.42,5.7,0.55,9.02s6.39,9.58,11.88,10.5c15.33-0.88,26.05,3.26,34.02-13.86c1.31-4.15,4.28-5.58,7.4-7.96c-0.51,2.55-4.26,8.65-5.62,10.91c-1.51,5.29-4.92,13.59-8.8,17.57c-1.11,7.93-2.1,17.62-11.76,19.38c-12.37,1.23-15.89-4.36-15.83-16.05c-2.76-2.08-5.87-7.81-6.95-11.02" />
		<path d="M68.11,149.19c-2.23,4.57-6.63,5.95-11.39,5.32c-3.31-0.23-5.85-2.22-6.95-5.32" />
		<path
			d="M40.3,41.79l0.25,2.02c0.1,0.81-0.53,1.53-1.35,1.53h-1.72l0.71,1.99c0.21,0.58,0.2,1.21-0.03,1.77l-0.25,0.63c-0.25,0.62-0.91,0.97-1.56,0.84c-1.28-0.27-3.16-0.65-3.01-0.5c0.14,0.14,0.77,1.41,1.25,2.38c0.33,0.67,0.27,1.47-0.16,2.09l0,0c-0.31,0.45-0.81,0.74-1.35,0.79L29.2,55.7l0,0c0.57,0.8,0.27,1.93-0.63,2.34l-1.37,0.62l0,0c1.07,0.44,1.13,1.92,0.11,2.46l-0.11,0.06l0,0c1.01,0.72,0.8,2.28-0.37,2.71l-0.08,0.03h0c0.76,0.63,0.57,1.85-0.35,2.21l-1.35,0.53h0c0.93,0.97,1.12,2.43,0.48,3.61l-0.24,0.44c-0.46,0.85-0.86,1.74-1.19,2.65l-1.34,3.7c-0.45,1.24-1.14,2.38-2.04,3.35l-3.23,3.49l-3.33,3.99" />
		<path
			d="M9.75,67.53l4.97-1.74c0.73-0.25,1.29-0.85,1.49-1.6l0.24-0.87c0.25-0.91,0.84-1.69,1.64-2.18l1.78-1.1c1.17-0.72,2.16-1.7,2.88-2.87l1.62-2.6c0.45-0.73,0.99-1.4,1.59-2.01l1.39-1.39c0.33-0.33,0.59-0.73,0.75-1.17l0.79-2.14c0.28-0.76,0.87-1.35,1.63-1.64l0.55-0.21c1.57-0.59,2.65-2.03,2.8-3.7l0.42-4.67" />
		<path
			d="M70.4,44.82l0.99,2.07c0.39,0.81,0.87,1.58,1.43,2.28c0.33,0.42,0.74,0.88,1.06,1.23c0.3,0.33,0.72,0.5,1.16,0.5c0.82-0.01,2.16,0.22,2.46,1.68l0,0l6.54,1.31c0.53,0.11,0.97,0.48,1.16,0.99v0c0.13,0.36,0.45,0.63,0.83,0.69l1.12,0.19c1.15,0.19,2.17,0.86,2.8,1.84l0.64,0.99c0.24,0.38,0.55,0.71,0.91,0.98l1.58,1.18c0.55,0.41,0.99,0.95,1.29,1.57l0.73,1.55c0.3,0.63,0.7,1.2,1.18,1.7c0.77,0.79,2.03,2.05,2.74,2.76c0.34,0.34,0.78,0.58,1.26,0.67c0.42,0.08,0.97,0.19,1.49,0.27c1.24,0.2,2.47-0.38,3.11-1.47l0.87-1.47" />
		<path d="M78.02,45.64c2.43,2.96,7.99,2.96,7.99,2.96s-2.66-2.88-2.07-5.7c0.59-2.81-2-2.29-3.4-3.77c-1.41-1.48,1.11-10.65,1.11-10.65s-5.55,7.4-5.87,9.54" />
		<path
			d="M96.96,28.48c0.83,1.43,1.78,2.22,1.48,5.25s-2.74,5.4-2.74,5.4s-1.04,1.18-1.63,2.66c-0.59,1.48-0.15,5.4-0.67,6.44c-0.52,1.04-1.18,1.41-2.29,1.41c-1.11,0-4.22,0-5.1-1.04c-0.89-1.04-2.07-4.59-2.07-5.7c0-1.11,1.63-1.85,1.63-1.85s-0.74-1.29-0.59-2.51c0.15-1.22,1.09-2.72,2.49-3.25c1.4-0.53,3.65-1.18,4.61-2.59s-0.81-2.74-0.67-4.22C91.56,27,94.44,25,94.44,25" />
		<path d="M14.88,39.54c0.15-0.56,0.71-0.9,1.28-0.76l2.7,0.64c0.54,0.13,1.08-0.18,1.26-0.7l0.76-2.27c0.03-0.09,0.05-0.17,0.05-0.26l0.29-4.23" />
		<path
			d="M18.24,26.66c0.73-0.95,2.05-1.23,3.09-0.64l2.92,1.63c0.29,0.16,0.56,0.35,0.82,0.55l2.55,2.05c1.65,1.32,2.43,3.45,2.02,5.53l-0.59,2.96c-0.05,0.27-0.12,0.52-0.22,0.78c-0.47,1.28-1.94,5.31-2.01,5.31c-0.03,0-0.44,0.92-0.87,1.92c-0.38,0.88-1.64,0.85-1.98-0.05l0,0c-0.34-0.93-2.13-0.98-2,0c0.73,5.26-1.19,4.42-1.44,3.98c-0.25-0.44-0.36-1.56-0.86-3.16c-0.33-1.08-2.04-1.75-2.22-0.64l0.14,0.86c0.5,2.45-1.01,1.49-1.74,0.15c0,0-0.61-4.26-2.02-3.44" />
		<path d="M48.95,81.34c0.27-8.42-0.2-14.05-10.13-14.1c4.07,2.81,4.72,2.2-0.96,2.55c3.59,2.44,5.86,3.03,0,3c0,0,4.88,3.48,4.88,3.48" />
		<path d="M66.51,81.81c-1.86-6.59-4.51-15.84,4.95-15.53c0,0-2.46,3.33-2.46,3.33c4.6-1.37,6.17-4.41,3.86,2.48c3.07-2.83,3.5-3.2,2.27,1.22c-0.8,1.5-3.99,2.59-3.99,2.59" />
		<path d="M56.2,113.69c-10.45-1.63-14.35,2.61-9.02,13.24c1.03,1.95,6.8,4.29,9.02,4.29c2.22,0,9.97-4.36,11.09-10.8c0.49-2.79-1.41-7.53-4.59-7.17c-3.18,0.36-5.19,0.59-5.19,0.59" />
		<path d="M46.88,133.66c0,0,1.11,3.25,1.11,3.25c1.59,4.52,4.14,12.99,10.28,12.28c5.26,0.91,7.22-1.96,8.58-6.51c0.93-2.57,3.04-8.51,3.57-11.14" />
		<path d="M14.63,91.57l-2,3.48c2.78-0.79,3.25-1.37,1.55,1.63c0,0,3.55-2,3.55-2s-4.07,10.36-3.55,9.84c0.52-0.52,3.25-3.92,3.25-3.92l-0.37,8.88l3.99-5.4c-0.06,2.42-6.63,14.46,0,7.47c0.1,1.2-2.39,6.04,0.52,5.84c0.44-0.15-0.37,6.21,0,5.84c5.11-8.5,2.1-0.16,7.91-3.43" />
		<path
			d="M92.23,66.42l2.81,6.88c-1.71,2.48,0.02,3.07,1.63,4.51c-2.6,4.51,2.76,3.87-1.48,7.84c1.93,3.51,6.42,7.84,10.21,9.25c-4.4,2.3-2.16,2.64,0,5.55c0,0-2.81,4.29-2.81,4.29c0.84,2.23,1.99,3.22-1.11,3.99c0,0,2.07,2,1.85,2s-6.21,0-6.21,0l1.33,3.25c-2.8,1.8-4.5,1.5-1.48,4.66c-2.16-0.37-4.47-2.5-1.48,1.16" />
		<path d="M42.74,90.17c0,0-1.63,3.66-2.51,4.96c-0.89,1.29-3.95,3.37-5.77,4.22c-1.82,0.84-3.6,1.58-4.96,2.29s-3.77,2.24-4.51,1.04c-0.74-1.21-1.48-9.69-0.74-11.1c0.74-1.41,1.92,4.62,4.14,4.84c0.59,0.08,0.81,0.82,1.52,0.85s1.74,0.07,1.74,0.07" />
		<path d="M74.92,91.57c0,0,1.8,4.66,3.18,6.73c1.38,2.07,3.25,4.04,4.29,4.81s3.06,1.7,4.07,1.7c1.01,0,0.91-1.58,1.63-2.15c0.72-0.57,2.22-2.74,2.22-3.77c0-1.04-1.23-2.01-0.89-3.03c0.35-1.02,1.85-1.87,0.89-2.62c-0.96-0.76-4.29,2.18-4.29,2.18" />
		<path d="M38.02,82.31c0,1.37-1.11,2.48-2.48,2.48c-1.37,0-2.48-1.11-2.48-2.48c0-1.37,1.11-2.48,2.48-2.48" />
		<path d="M77.98,78.29c1.37,0,2.48,1.11,2.48,2.48c0,1.37-1.11,2.48-2.48,2.48s-2.48-1.11-2.48-2.48" />
		<path d="M39.21,82.75c0,2.21-1.79,4.01-4.01,4.01c-2.21,0-4.01-1.79-4.01-4.01c0-2.21,1.79-4.01,4.01-4.01" />
		<path d="M78.23,77.22c2.21,0,4.01,1.79,4.01,4.01c0,2.21-1.79,4.01-4.01,4.01c-2.21,0-4.01-1.79-4.01-4.01" />
		<path d="M65.76,119.94c0,0-0.8-2.02-2.61-2.63c-1.81-0.61-4.99-0.91-6.88-0.92s-3.11,0.63-4.16,0c-1.05-0.63-1.66-1.39-1.66-1.39" />
		</svg>
			<br>
				    <label class="labelWhite18">Update - NEW FEATURES:                           </label>
					<hr>
				<div style="max-height: 200px; overflow-y: auto; border: 1px solid #ccc; padding: 10px;">
					<label class="labelWhite15">    ✅ Load Multiple GeoTIFFs and convert from WGS                 </label>
					<br><label class="labelWhite15">✅ Drawings to IndexDB for large files                         </label>
					<br><label class="labelWhite15">✅ Load multiple Surfaces and change colors                   </label>
					<br><label class="labelWhite15">✅ Improved Decimation of Surfaces                             </label>
					<br><label class="labelWhite15">✅ Drawing Optimised - Pixel Distance culling                  </label>
					<br><label class="labelWhite15">✅ Image Show/Hide/Remove/Transparency                          </label>
					<br><label class="labelWhite15">✅ Delete All Images/Surfaces to cleanup DB                      </label>
					<br><label class="labelWhite15">✅ Fixed State UI/UX issues                                     </label>
					<br><label class="labelWhite15">✅ Tree View - Context Menu - Delete & Properties               </label>
	                <br><label class="labelWhite15">✅ Tree View - Color Change                                     </label>
					<br><label class="labelWhite15">✅ ⭐ Proximity Duplicate hole check and resolve                 </label>
					<br><label class="labelWhite15">✅ Critical bug fix to restore loading from local files         </label>
					<br><label class="labelWhite15">✅ Added support for OBJ and other surface formats              </label>
					<br><label class="labelWhite15">✅ Improved user interaction for drawing tools                  </label>
					<br><label class="labelWhite15">✅ Added a radii warning dialog                                 </label>
					<br><label class="labelWhite15">✅ Pattern bug fixes, duplicate hole search, polygon selection  </label>
					<hr>
					<br><label class="labelWhite18">New & Existing Issues                              </label>
					<br><label class="labelWhite12c">🐞 Voronoi Display Lag with large blasts          </label>
					<br><label class="labelWhite12c">🐞 Surface Display - fixed                         </label>
				</div>
				<br><br>
				<a href="https://www.buymeacoffee.com/BrentBuffham">
	          <img src="https://img.buymeacoffee.com/button-api/?text=Buy Brent a coffee&emoji=&slug=BrentBuffham&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" alt="Buy me a coffee" />
	        </a>
	        <br>
	        <a href="mailto:blastingapps.xyz@gmail.com?subject=Bug%20Report%20or%20Feature%20request&body=
	          Application%20the%20issue%20or%20request%20is%20about:%0D%0A%0D%0A
	          Description%20of%20the%20bug%20or%20feature:%0D%0A%0D%0A
	          Steps%20to%20reproduce%20the%20bug%20or%20create%20the%20feature:%0D%0A%0D%0A
	          Expected%20result:%0D%0A%0D%0A
	          Actual%20result:%0D%0A%0D%0A
	        ">
	          <button class="button-bug">Report Bug / Request Feature</button>
	        </a>
	        <br>
	        <label class="labelWhite12c">Version: Build ${buildVersion}</label>
		  `,
		customClass: { container: "custom-popup-container", title: "swal2-title", confirmButton: "confirm", content: "swal2-content", htmlContainer: "swal2-html-container", icon: "swal2-icon" }
	}).then((result) => {
		if (result.isConfirmed) {
		}
	});
}

// Separate function for Voronoi initialization
function initializeVoronoiControls() {
	const voronoiBoundarySwitch = document.getElementById("voronoiBoundarySwitch");
	if (voronoiBoundarySwitch) {
		voronoiBoundarySwitch.addEventListener("change", function () {
			useToeLocation = voronoiBoundarySwitch.checked;
			drawData(points, selectedHole);
		});
	}

	const voronoiMetricDropdown = document.getElementById("voronoiSelect");
	if (voronoiMetricDropdown) {
		voronoiMetricDropdown.addEventListener("change", function () {
			drawData(points, selectedHole);
		});
	}

	const voronoiLegendDropdown = document.getElementById("voronoiLegendSelect");
	if (voronoiLegendDropdown) {
		voronoiLegendDropdown.addEventListener("change", function () {
			isVoronoiLegendFixed = voronoiLegendDropdown.value === "fixed";
			drawData(points, selectedHole);
		});
	}
}

// Separate function for preferences initialization
function initializePreferences() {
	try {
		loadViewControlsSliderValues();
		setupAutoSavePreferences();
		console.log("✅ Preferences loaded successfully");
	} catch (error) {
		console.error("❌ Error loading preferences:", error);
	}
}
// Add this temporarily to debug
function debugPreferences() {
	console.log("Checking preference controls:");
	console.log("fontSlider:", document.getElementById("fontSlider"));
	console.log("snapToleranceSlider:", document.getElementById("snapToleranceSlider"));
	console.log("elevation:", document.getElementById("elevation"));

	// Test localStorage
	console.log("LocalStorage test:", localStorage.getItem("fontSize"));
}

// Call this in your consolidated DOMContentLoaded
//------------------------------------------
const canvas = document.getElementById("canvas");
const padding = 10; // add 10 pixels of padding

const uiVersionElement = document.getElementById("htmlUIVersion");
const htmlUIVersion = uiVersionElement ? uiVersionElement.value : "1"; // Default to "1" if not found

//get the menubar --var from the css
const menubarSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--menubar-size"));
const canvasBorderWidth2X = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--canvas-border")) * 2;
const canvasContainerMargin = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--canvas-container-margin"));

// Existing canvas setup logic that you want to make conditional
if (htmlUIVersion === "1") {
	// Get the screen size and calculate the dimensions based on the desired ratio
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const canvasWidth = Math.round(screenWidth);
	const canvasHeight = Math.round(screenHeight);

	const canvasAdjustWidth = 40; //was 40 for kirra.html and styles.css;
	const canvasAdjustHeight = 0.12; //was 0.12 for kirra.html and styles.css;
	// Set the dimensions of the canvas and its container
	canvas.width = document.documentElement.clientWidth - canvasAdjustWidth;
	canvas.height = document.documentElement.clientHeight - document.documentElement.clientHeight * canvasAdjustHeight;
} else {
	//Do nothing
}

const timeChartObject = document.getElementById("timeChart");
let statusMessage = "";
const resizeRight = document.getElementById("resizeHandleRight");
let isResizingRight = false;
const resizeLeft = document.getElementById("resizeHandleLeft");
let isResizingLeft = false;

const ctx = canvas.getContext("2d");
let scale = 5; // adjust the scale to fit the points in the canvas
let fontSize = document.getElementById("fontSlider").value;
let points = [];
let dxfEntities = [];
let countPoints = points.length;
let sumMeters = 0;
let currentScale = scale; // declare a variable to store the current scale
let currentFontSize = fontSize; // declare a variable to store the current fontsize
let toeScale = document.getElementById("toeSlider").value;
let holeScale = document.getElementById("holeSlider").value;
let deltaX = 0;
let deltaY = 0;
let centroidX = 0;
let centroidY = 0;
let centroidZ = 0;
let firstPointInLine = null;
// Variable to store the "fromHole" ID during connector mode
let fromHoleStore = null;
let isAddingConnector = false;
let isAddingMultiConnector = false;
let isAddingHole = false;
let isAddingPattern = false;
let isDeletingHole = false;
let isMovingCanvas = false;
let isDragging = false;
let isModifyingKAD = false;
let entityName; // Define entityName outside the function to persist between calls
let createNewEntity = true; // Flag to create a new entity
// Variables to store the initial mouse position during canvas movement
let initialMouseX = 0;
let initialMouseY = 0;
// Add current mouse tracking for interactive previews
let currentMouseCanvasX = 0;
let currentMouseCanvasY = 0;
let currentMouseCanvasZ = document.getElementById("drawingElevation").value;
let currentMouseWorldX = 0;
let currentMouseWorldY = 0;
let currentMouseWorldZ = document.getElementById("drawingElevation").value;
// Surfaces
let allAvailableSurfaces = [];
let intervalAmount = document.getElementById("intervalSlider").value;
let firstMovementSize = document.getElementById("firstMovementSlider").value;
let connectAmount = document.getElementById("connectSlider").value;
let contourLevel = 0;
let contourUpdatePending = false;
let minX;
let minY;
let worldX = null;
let worldY = null;
let contourLines = [];
let contourLinesArray = [];
let directionArrows = [];
let epsilon = 1;
let holeTimes = {};
let deleteRenumberStart = document.getElementById("deleteRenumberStart").value;
let firstSelectedHole = null;
let secondSelectedHole = null;
let selectedHole = null;
let isBlastNameEditing = false;
let isHoleEditing = false;
let isSelectionPointerActive = false;
let polyPointsX = [];
let polyPointsY = [];
let isPolygonSelectionActive = false;
let useToeLocation = false;
let selectedVoronoiMetric = "powderFactor"; // default
// Add these variables near the top (around line 190)
let lastKADDrawPoint = null; // Store the last drawn point from any KAD tool
let isVoronoiLegendFixed = false;
let isBearingToolActive = false;
// Add this declaration around line 99 (after bearingToolSelectedHole declaration)
let bearingToolSelectedHole = null;
let moveToolSelectedHole = null; // Add this declaration
let bearingToolStartAngle = 0;
let bearingToolStartMouseAngle = 0;
let isDraggingBearing = false;
let rulerStartPoint = null;
let rulerEndPoint = null;
let rulerProtractorPoints = []; // For 3-point bearing measurement
let isRulerActive = false;
let isRulerProtractorActive = false;
let isLengthPopupEditing = false;
let isDisplayingContours = false;
let isDisplayingSlopeTriangles = false;
let isDisplayingReliefTriangles = false;
let isDisplayingDirectionArrows = false;
let isTypeEditing = false;
let fixToeLocation = false;
//drawing tool booleans
let isDrawingPoint = false;
let isDrawingLine = false;
let isDrawingCircle = false;
let isDrawingPoly = false;
let isDrawingText = false;
//delete tool booleans
let isDeletingKAD = false;
//modify tool booleans
let isModifyingPoint = false;
//offset tool booleans
let isOffsetLinePoly = false;
//Record Measurements booleans
let isMeasureRecording = false;
// PolyLine select for use in tools
let selectedVertices = [];
let isSelectingPolyline = false;
//has selected multiple holes
let hasSelectedMultipleHoles = false;
let isMultiHoleSelectionEnabled = false; // Selection mode is false if single ONLY hole selection on each click and true when each click adds a hole to the selection.  It does not indicate that selection is active or inactive.
let isMoveToolActive = false;
let isMovingHole = false;
let holeToMove = null;

let maxEdgeLength = 15;
let clickedHole; // Declare clickedHole outside the event listener
let timingWindowHolesSelected = [];
let selectedMultipleHoles = [];
let isPlaying = false; // To track whether the animation is playing
let animationInterval; // To store the interval ID for the animation
let playSpeed = 1; // Default play speed
//COLOURS
let noneColor = "rgba(0, 0, 0, 0)";
let darkModeEnabled = document.body.classList.contains("dark-mode");
let transparentFillColor = darkModeEnabled ? "rgba(0, 128, 255, 0.3)" : "rgba(128, 255, 0, 0.3)";
let fillColor = darkModeEnabled ? "lightgrey" : "darkgrey";
let strokeColor = darkModeEnabled ? "white" : "black";
let textFillColor = darkModeEnabled ? "white" : "black";
let depthColor = darkModeEnabled ? "blue" : "cyan";
let angleDipColor = darkModeEnabled ? "darkcyan" : "orange";

///////////////////////////
//DEVELOPER MODE BUTTON
const developerModeCheckbox = document.getElementById("developerMode");
let developerModeEnabled = false;
developerModeCheckbox.addEventListener("change", function () {
	developerModeEnabled = developerModeCheckbox.checked;
	console.log("Developer mode enabled:", developerModeEnabled);
});
///////////////////////////

//Switches
const addConnectorButton = document.getElementById("addConnectorButton");
const addMultiConnectorButton = document.getElementById("addMultiConnectorButton");
const addPatternSwitch = document.getElementById("addPatternSwitch");
const addHoleSwitch = document.getElementById("addHoleSwitch");
// const editAngleSwitch = document.getElementById("editAngleButton");
// const editBearingSwitch = document.getElementById("editBearingButton");
// const editEastingSwitch = document.getElementById("editEastingButton");
// const editNorthingSwitch = document.getElementById("editNorthingButton");
// const editElevationSwitch = document.getElementById("editElevationButton");
// const editLengthSwitch = document.getElementById("editLengthButton");
const editLengthPopupSwitch = document.getElementById("editLengthPopupButton");
const editHoleTypePopupSwitch = document.getElementById("editHoleTypePopupButton");
const editTypeSwitch = document.getElementById("editHoleTypePopupButton");
const editBlastNameSwitch = document.getElementById("editBlastNameButton");
// const editDiameterSwitch = document.getElementById("editDiameterButton");
const deleteHoleSwitch = document.getElementById("deleteHoleSwitch");
const modifyKADSwitch = document.getElementById("modifyKADDraw");
const offsetLinePolySwitch = document.getElementById("offsetLinePolyDraw");
const selectionModeButton = document.getElementById("selectionModeButton");
const editHolesToggle = document.getElementById("editHolesToggle"); //required to be true if holes are to be finetuned

// Drawing Switch Event Listeners
const addPointDraw = document.getElementById("addPointDraw");
const addLineDraw = document.getElementById("addLineDraw");
const addCircleDraw = document.getElementById("addCircleDraw");
const addPolyDraw = document.getElementById("addPolyDraw");
const addTextDraw = document.getElementById("addTextDraw");
// Delete Drawing Switch Event Listeners
const deleteKADDraw = document.getElementById("deleteKADDraw");
//Record Measurements Switch Event Listeners
const measuredLengthSwitch = document.getElementById("measuredLengthSwitch");
const measuredMassSwitch = document.getElementById("measuredMassSwitch");
const measuredCommentSwitch = document.getElementById("measuredCommentSwitch");

//switch Options - Do not in clude in switches array
const renumberStartListener = document.getElementById("deleteRenumberStart");
const renumberHoles = document.getElementById("renumberHoles");
let isRenumberingHoles = false;

const switches = [addConnectorButton, addMultiConnectorButton, addPatternSwitch, addHoleSwitch, editLengthPopupSwitch, editTypeSwitch, editBlastNameSwitch, deleteHoleSwitch, modifyKADSwitch, offsetLinePolySwitch, editHoleTypePopupSwitch, addPointDraw, addLineDraw, addCircleDraw, addPolyDraw, addTextDraw, deleteKADDraw, measuredLengthSwitch, measuredMassSwitch, measuredCommentSwitch, selectionModeButton, editHolesToggle];

const booleans = [
	isAddingConnector,
	isAddingMultiConnector,
	isAddingHole,
	isAddingPattern,
	isDeletingHole,
	isMovingCanvas,
	isDragging,
	isBlastNameEditing,
	isHoleEditing,
	isLengthPopupEditing,
	isDisplayingContours,
	isDisplayingSlopeTriangles,
	isDisplayingReliefTriangles,
	isDisplayingDirectionArrows,
	isTypeEditing,
	isDrawingPoint,
	isDrawingLine,
	isDrawingCircle,
	isDrawingPoly,
	isDrawingText,
	isDeletingKAD,
	isPlaying,
	isModifyingPoint,
	isOffsetLinePoly,
	isMeasureRecording,
	isMultiHoleSelectionEnabled //check this
];

// Boolean set to False
function setAllBoolsToFalse() {
	isAddingConnector = false;
	isAddingMultiConnector = false;
	isAddingHole = false;
	isAddingPattern = false;
	isDeletingHole = false;
	isMovingCanvas = false;
	isDragging = false;
	isBlastNameEditing = false;
	isHoleEditing = false;
	isLengthPopupEditing = false;
	isDisplayingContours = false;
	isDisplayingSlopeTriangles = false;
	isDisplayingReliefTriangles = false;
	isDisplayingDirectionArrows = false;
	isTypeEditing = false;
	isDrawingPoint = false;
	isDrawingLine = false;
	isDrawingCircle = false;
	isDrawingPoly = false;
	isDrawingText = false;
	isDeletingKAD = false;
	isPlaying = false;
	isModifyingPoint = false;
	isOffsetLinePoly = false;
	isMeasureRecording = false;
	isMultiHoleSelectionEnabled = false;
	isMoveToolActive = false;
	isMovingHole = false;

	// CRITICAL FIX: Remove move tool event listeners when deactivating
	canvas.removeEventListener("mousedown", handleMoveToolMouseDown);
	canvas.removeEventListener("touchstart", handleMoveToolMouseDown);
	canvas.removeEventListener("mousemove", handleMoveToolMouseMove);
	canvas.removeEventListener("touchmove", handleMoveToolMouseMove);
	canvas.removeEventListener("mouseup", handleMoveToolMouseUp);
	canvas.removeEventListener("touchend", handleMoveToolMouseUp);

	// Also clear move tool state variables
	moveToolSelectedHole = null;
	isDraggingHole = false;

	// Remove bearing tool listeners too
	canvas.removeEventListener("mousedown", handleBearingToolMouseDown);
	canvas.removeEventListener("mousemove", handleBearingToolMouseMove);
	canvas.removeEventListener("mouseup", handleBearingToolMouseUp);
	canvas.removeEventListener("touchstart", handleBearingToolMouseDown);
	canvas.removeEventListener("touchmove", handleBearingToolMouseMove);
	canvas.removeEventListener("touchend", handleBearingToolMouseUp);

	// Clear bearing tool state
	bearingToolSelectedHole = null;
	isDraggingBearing = false;
}

// Function 2: Reset all switches and toggles
function resetAllSwitchesAndToggles() {
	// Reset all switches
	const allSwitches = ["addConnectorSwitch", "addMultiConnectorSwitch", "addHoleSwitch", "addPatternSwitch", "deleteHoleSwitch", "renumberHoles", "editBlastNameSwitch", "editHoleSwitch", "editLengthPopupSwitch", "editTypePopupSwitch", "selectionModeSwitch", "measuredLengthSwitch", "measuredMassSwitch", "measuredCommentSwitch"];

	allSwitches.forEach((switchId) => {
		const switchElement = document.getElementById(switchId);
		if (switchElement) {
			switchElement.checked = false;
		}
	});

	// Reset display options toggles
	allToggles.forEach((toggle) => {
		if (toggle) {
			toggle.checked = false;
		}
	});
}

// Function 3: Reset all selected stores and state variables
function resetAllSelectedStores() {
	fromHoleStore = null;
	selectedHole = null;
	firstSelectedHole = null;
	secondSelectedHole = null;
	selectedMultipleHoles = [];
	clickedHole = null;
	timingWindowHolesSelected = [];

	// Reset pattern tool variables
	selectedPolygon = null;
	selectedPolyline = null;
	patternStartPoint = null;
	patternEndPoint = null;
	patternReferencePoint = null;

	// Reset line tool variables
	lineStartPoint = null;
	lineEndPoint = null;

	// Reset poly line tool variables
	polylineStartPoint = null;
	polylineEndPoint = null;

	// Reset any other state variables
	blastNameValue = "";
	currentEntityName = "";

	console.log("🧹 All selected stores and pattern states reset");
}
// Update resetFloatingToolbarButtons to only clear floating toolbar related bools
function resetFloatingToolbarButtons(excluding) {
	// Clear only floating toolbar tool states
	isSelectionPointerActive = false;
	isPolygonSelectionActive = false;
	isHolesAlongPolyLineActive = false;
	isHolesAlongLineActive = false;
	isMoveToolActive = false;
	isBearingToolActive = false;
	isRulerActive = false;
	isRulerProtractorActive = false;

	// ALSO clear connector tool states when switching floating toolbar tools
	isAddingConnector = false;
	isAddingMultiConnector = false;

	// CRITICAL: Remove move and bearing tool listeners when switching away
	if (excluding !== "moveToTool") {
		canvas.removeEventListener("mousedown", handleMoveToolMouseDown);
		canvas.removeEventListener("touchstart", handleMoveToolMouseDown);
		canvas.removeEventListener("mousemove", handleMoveToolMouseMove);
		canvas.removeEventListener("touchmove", handleMoveToolMouseMove);
		canvas.removeEventListener("mouseup", handleMoveToolMouseUp);
		canvas.removeEventListener("touchend", handleMoveToolMouseUp);
		moveToolSelectedHole = null;
		isDraggingHole = false;
	}

	if (excluding !== "bearingTool") {
		canvas.removeEventListener("mousedown", handleBearingToolMouseDown);
		canvas.removeEventListener("mousemove", handleBearingToolMouseMove);
		canvas.removeEventListener("mouseup", handleBearingToolMouseUp);
		canvas.removeEventListener("touchstart", handleBearingToolMouseDown);
		canvas.removeEventListener("touchmove", handleBearingToolMouseMove);
		canvas.removeEventListener("touchend", handleBearingToolMouseUp);
		bearingToolSelectedHole = null;
		isDraggingBearing = false;
	}
	// Set all tool checkboxes to false except the excluded one
	selectPointerTool.checked = excluding === "selectPointerTool";
	selectByPolygonTool.checked = excluding === "selectByPolygonTool";
	moveToTool.checked = excluding === "moveToTool";
	tieConnectTool.checked = excluding === "tieConnectTool";
	tieConnectMultiTool.checked = excluding === "tieConnectMultiTool";
	bearingTool.checked = excluding === "bearingTool";
	rulerTool.checked = excluding === "rulerTool";
	rulerProtractorTool.checked = excluding === "rulerProtractorTool";
	patternInPolygonTool.checked = excluding === "patternInPolygonTool";
	holesAlongLineTool.checked = excluding === "holesAlongLineTool";
	holesAlongPolyLineTool.checked = excluding === "holesAlongPolyLineTool";

	// ALSO uncheck connector buttons when switching floating toolbar tools
	if (excluding !== "tieConnectTool") {
		addConnectorButton.checked = false;
	}
	if (excluding !== "tieConnectMultiTool") {
		addMultiConnectorButton.checked = false;
	}

	// Set only the excluded tool's active state to true
	isSelectionPointerActive = excluding === "selectPointerTool";
	isPolygonSelectionActive = excluding === "selectByPolygonTool";
	isPatternInPolygonActive = excluding === "patternInPolygonTool";
	isHolesAlongLineActive = excluding === "holesAlongLineTool";
	isHolesAlongPolyLineActive = excluding === "holesAlongPolyLineTool";
	isMoveToolActive = excluding === "moveToTool";
	isBearingToolActive = excluding === "bearingTool";
	isRulerActive = excluding === "rulerTool";
	isRulerProtractorActive = excluding === "rulerProtractorTool";

	// Reset floating toolbar tool-specific state variables
	rulerStartPoint = null;
	rulerEndPoint = null;
	rulerProtractorPoints = [];
	bearingToolSelectedHole = null;
	isDraggingBearing = false;
	isDraggingHole = false;

	// Reset selection-related variables for floating toolbar tools
	firstSelectedHole = null;
	secondSelectedHole = null;

	// Remove connector event listeners when switching away from connector tools
	if (excluding !== "tieConnectTool" && excluding !== "tieConnectMultiTool") {
		canvas.removeEventListener("click", handleConnectorClick);
		canvas.removeEventListener("touchstart", handleConnectorClick);
	}

	// Force redraw to update button states
	drawData(points, selectedHole);
}

// Master function to reset everything
function resetAppToDefaults() {
	setAllBoolsToFalse();
	resetAllSwitchesAndToggles();
	resetAllSelectedStores();
	resetFloatingToolbarButtons("none");
	console.log("App reset to defaults: booleans, switches, toggles, and stores cleared");
}

// Buttons
document.getElementById("deletePointButton").addEventListener("click", deleteSelectedPoint);
document.getElementById("deleteObjectButton").addEventListener("click", deleteSelectedObject);
document.getElementById("deleteAllButton").addEventListener("click", deleteSelectedAll);
document.getElementById("fileInput").addEventListener("change", handleFileUpload);
document.getElementById("fileInputDXF").addEventListener("change", handleDXFUpload);
document.getElementById("fileInputMeasured").addEventListener("change", handleMeasuredUpload);
document.getElementById("fileInputSurface").addEventListener("change", handleSurfaceUpload);
document.getElementById("fileInputGeotiff").addEventListener("change", handleGeotiffUpload);
document.getElementById("helpButton").addEventListener("click", openHelp);
document.getElementById("zoomInButton").addEventListener("click", zoomIn);
document.getElementById("zoomOutButton").addEventListener("click", zoomOut);
// document.getElementById("resetZoomButton").addEventListener("click", resetZoom);
document.getElementById("deleteHoleButton").addEventListener("click", deleteSelectedHoles);
document.getElementById("deletePatternButton").addEventListener("click", deleteSelectedPattern);
document.getElementById("deleteAllPatternsButton").addEventListener("click", deleteSelectedAllPatterns);

const displayHoleId = document.getElementById("display1"); //holeID
const displayHoleLength = document.getElementById("display2"); //holeLength
const displayHoleDiameter = document.getElementById("display2A"); //holeDiameter
const displayHoleAngle = document.getElementById("display3"); //holeAngle
const displayHoleDip = document.getElementById("display4"); //holeDip
const displayHoleBearing = document.getElementById("display5"); //holeBearing
const displayHoleSubdrill = document.getElementById("display5B"); //subdrill
const displayConnectors = document.getElementById("display5A"); //connectors
const displayDelays = document.getElementById("display6"); //delays
const displayTimes = document.getElementById("display6A"); //times only
const displayContours = document.getElementById("display8"); //contours
const displaySlope = document.getElementById("display8A"); //slope
const displayRelief = document.getElementById("display8B"); //relief
const displayFirstMovements = document.getElementById("display8C"); //direction
const displayXLocation = document.getElementById("display9"); //xlocation
const displayYLocation = document.getElementById("display10"); //ylocation
const displayElevation = document.getElementById("display11"); //zlocation
const displayHoleType = document.getElementById("display12"); //holeType
const displayMLength = document.getElementById("display13"); //holeLength
const displayMMass = document.getElementById("display14"); //holeMass
const displayMComment = document.getElementById("display15"); //holeComment
const displayVaronoiCells = document.getElementById("display16"); //voronoi

// after const option16 = …
const allToggles = [displayHoleId, displayHoleLength, displayHoleDiameter, displayHoleAngle, displayHoleDip, displayHoleBearing, displayHoleSubdrill, displayConnectors, displayDelays, displayTimes, displayContours, displaySlope, displayRelief, displayFirstMovements, displayXLocation, displayYLocation, displayElevation, displayHoleType, displayMLength, displayMMass, displayMComment, displayVaronoiCells];

allToggles.forEach((opt) => {
	if (opt)
		opt.addEventListener("change", () => {
			// assuming drawData is your main render function
			drawData(points, selectedHole);
		});
});

const holeCountRadio = document.getElementById("holeCountRadio");
const measuredMassRadio = document.getElementById("measuredMassRadio");

//create holeCountRadio and measureMassRadio Listener
document.getElementById("measuredMassRadio")?.addEventListener("change", timeChart);
document.getElementById("holeCountRadio")?.addEventListener("change", timeChart);

// Add event listeners for mouse down, move, and up events
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mouseup", handleMouseUp);
// Add event listeners for touch start, move, and end events
canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
canvas.addEventListener("touchend", handleTouchEnd, { passive: false });

// Event listener for the language dropdown
document.getElementById("languageSelect").addEventListener("change", function () {
	const selectedLanguage = this.value;
	updateTranslations(selectedLanguage);
});

// Function to update translations
function updateTranslations(language) {
	// Use the inline translations object
	const langTranslations = translations[language]?.translation;

	if (langTranslations) {
		// Update the text content of elements in the DOM with null checks
		const titleElement = document.querySelector("title");
		if (titleElement) titleElement.textContent = langTranslations.title;

		const helpButton = document.querySelector("#helpButton");
		if (helpButton) helpButton.title = langTranslations.help_button;

		const zoomInButton = document.querySelector("#zoomInButton");
		if (zoomInButton) zoomInButton.title = langTranslations.zoom_in_button;

		const zoomOutButton = document.querySelector("#zoomOutButton");
		if (zoomOutButton) zoomOutButton.title = langTranslations.zoom_out_button;

		const buttonGoBack = document.querySelector("#buttonGoBack");
		if (buttonGoBack) buttonGoBack.title = langTranslations.go_back_button;

		const languageSelect = document.querySelector("#languageSelect");
		if (languageSelect) languageSelect.title = langTranslations.select_language;

		const darkModeToggle = document.querySelector("#dark-mode-toggle");
		if (darkModeToggle) darkModeToggle.placeholder = langTranslations.dark_mode;

		// Display option tooltips
		const display1Label = document.querySelector("label[for='display1']");
		if (display1Label) display1Label.title = langTranslations.display_hole_id_title;

		const display2Label = document.querySelector("label[for='display2']");
		if (display2Label) display2Label.title = langTranslations.display_hole_length_title;

		const display2ALabel = document.querySelector("label[for='display2A']");
		if (display2ALabel) display2ALabel.title = langTranslations.display_hole_diameter_title;

		const display3Label = document.querySelector("label[for='display3']");
		if (display3Label) display3Label.title = langTranslations.display_angle_title;

		const display4Label = document.querySelector("label[for='display4']");
		if (display4Label) display4Label.title = langTranslations.display_dip_title;

		const display5Label = document.querySelector("label[for='display5']");
		if (display5Label) display5Label.title = langTranslations.display_bearing_title;

		const display5BLabel = document.querySelector("label[for='display5B']");
		if (display5BLabel) display5BLabel.title = langTranslations.display_subdrill_title;

		const display5ALabel = document.querySelector("label[for='display5A']");
		if (display5ALabel) display5ALabel.title = langTranslations.display_ties_title;

		const display6Label = document.querySelector("label[for='display6']");
		if (display6Label) display6Label.title = langTranslations.display_connectors_title;

		const display6ALabel = document.querySelector("label[for='display6A']");
		if (display6ALabel) display6ALabel.title = langTranslations.display_times_only_title;

		const display8Label = document.querySelector("label[for='display8']");
		if (display8Label) display8Label.title = langTranslations.display_contours_title;

		const display8ALabel = document.querySelector("label[for='display8A']");
		if (display8ALabel) display8ALabel.title = langTranslations.display_slope_title;

		const display8BLabel = document.querySelector("label[for='display8B']");
		if (display8BLabel) display8BLabel.title = langTranslations.display_relief_title;

		const display8CLabel = document.querySelector("label[for='display8C']");
		if (display8CLabel) display8CLabel.title = langTranslations.display_direction_title;

		const display9Label = document.querySelector("label[for='display9']");
		if (display9Label) display9Label.title = langTranslations.display_xlocation_title;

		const display10Label = document.querySelector("label[for='display10']");
		if (display10Label) display10Label.title = langTranslations.display_ylocation_title;

		const display11Label = document.querySelector("label[for='display11']");
		if (display11Label) display11Label.title = langTranslations.display_zlocation_title;

		const display12Label = document.querySelector("label[for='display12']");
		if (display12Label) display12Label.title = langTranslations.display_hole_type_title;

		const display13Label = document.querySelector("label[for='display13']");
		if (display13Label) display13Label.title = langTranslations.display_measure_title;

		const display14Label = document.querySelector("label[for='display14']");
		if (display14Label) display14Label.title = langTranslations.display_mass_title;

		const display15Label = document.querySelector("label[for='display15']");
		if (display15Label) display15Label.title = langTranslations.display_comment_title;

		const display16Label = document.querySelector("label[for='display16']");
		if (display16Label) display16Label.title = langTranslations.display_voronoi_title;

		// Left panel sections
		const openOrImportAcc = document.querySelector("#openOrImportAcc span");
		if (openOrImportAcc) openOrImportAcc.textContent = langTranslations.open_import;

		// File input icon button titles
		const fileInputBtns = document.querySelectorAll(".file-import-btn");
		fileInputBtns.forEach((btn) => {
			const target = btn.getAttribute("data-target");
			if (target === "fileInput") btn.title = langTranslations.file_holes_kad_title;
			if (target === "fileInputCustomCSV") btn.title = langTranslations.custom_csv_title;
			if (target === "fileInputDXF") btn.title = langTranslations.file_dxf_title;
			if (target === "fileInputMeasured") btn.title = langTranslations.measured_values_title;
			if (target === "fileInputSurface") btn.title = langTranslations.file_surface_title;
			if (target === "fileInputGeotiff") btn.title = langTranslations.file_geotiff_title;
		});

		// File input alt text
		const fileInputImgs = document.querySelectorAll(".file-import-btn img");
		fileInputImgs.forEach((img) => {
			const alt = img.getAttribute("alt");
			if (alt === "Load Holes & KAD") img.alt = langTranslations.load_holes_kad_alt;
			if (alt === "Load CSV") img.alt = langTranslations.load_csv_alt;
			if (alt === "Load DXF") img.alt = langTranslations.load_dxf_alt;
			if (alt === "Load Measured Values") img.alt = langTranslations.load_measured_alt;
			if (alt === "Load Surface") img.alt = langTranslations.load_surface_alt;
			if (alt === "Load Geotiff") img.alt = langTranslations.load_geotiff_alt;
		});

		const plusorminusHolesAcc = document.querySelector("#plusorminusHolesAcc span");
		if (plusorminusHolesAcc) plusorminusHolesAcc.textContent = langTranslations.plus_minus_holes;

		const addPatternLabel = document.querySelector("#addPatternLabel");
		if (addPatternLabel) addPatternLabel.textContent = langTranslations.add_pattern_label;

		const addHoleLabel = document.querySelector("#addHoleLabel");
		if (addHoleLabel) addHoleLabel.textContent = langTranslations.add_hole_label;

		const deleteHoleLabel = document.querySelector("#deleteHoleLabel");
		if (deleteHoleLabel) deleteHoleLabel.textContent = langTranslations.delete_label;

		const deleteHoleButton = document.querySelector("#deleteHoleButton");
		if (deleteHoleButton) deleteHoleButton.textContent = langTranslations.delete_hole_button;

		const deletePatternButton = document.querySelector("#deletePatternButton");
		if (deletePatternButton) deletePatternButton.textContent = langTranslations.delete_pattern_button;

		const deleteAllPatternsButton = document.querySelector("#deleteAllPatternsButton");
		if (deleteAllPatternsButton) deleteAllPatternsButton.textContent = langTranslations.delete_all_patterns_button;

		const renumberHolesLabel = document.querySelector("label[for='renumberHoles']");
		if (renumberHolesLabel) renumberHolesLabel.textContent = langTranslations.renumber_holes_label;

		const deleteRenumberStartLabel = document.querySelector("label[for='deleteRenumberStart']");
		if (deleteRenumberStartLabel) deleteRenumberStartLabel.textContent = langTranslations.delete_renumber_start_label;

		const editHolesAcc = document.querySelector("#editHolesAcc span");
		if (editHolesAcc) editHolesAcc.textContent = langTranslations.edit_holes;

		const editBlastNameLabel = document.querySelector("#editBlastNameLabel");
		if (editBlastNameLabel) editBlastNameLabel.textContent = langTranslations.edit_blast_name_label;

		const editLengthPopupLabel = document.querySelector("#editLengthPopupLabel");
		if (editLengthPopupLabel) editLengthPopupLabel.textContent = langTranslations.edit_length_popup_label;

		const editHoleTypePopupLabel = document.querySelector("#editHoleTypePopupLabel");
		if (editHoleTypePopupLabel) editHoleTypePopupLabel.textContent = langTranslations.edit_hole_type_popup_label;

		const selectionModeLabels = document.querySelectorAll("#selectionModeLabel");
		selectionModeLabels.forEach((label, index) => {
			if (index === 0) label.textContent = langTranslations.allow_holes_edited;
			if (index === 1) label.textContent = langTranslations.selection_mode_label;
		});

		const holeEastingLabel = document.querySelector("#holeEastingLabel");
		if (holeEastingLabel) holeEastingLabel.textContent = langTranslations.hole_easting_label;

		const holeNorthingLabel = document.querySelector("#holeNorthingLabel");
		if (holeNorthingLabel) holeNorthingLabel.textContent = langTranslations.hole_northing_label;

		const holeElevationLabel = document.querySelector("#holeElevationLabel");
		if (holeElevationLabel) holeElevationLabel.textContent = langTranslations.hole_elevation_label;

		const holeDiameterLabel = document.querySelector("#holeDiameterLabel");
		if (holeDiameterLabel) holeDiameterLabel.textContent = langTranslations.hole_diameter_label;

		const holeLengthLabel = document.querySelector("#holeLengthLabel");
		if (holeLengthLabel) holeLengthLabel.textContent = langTranslations.hole_length_label;

		const holeAngleLabel = document.querySelector("#holeAngleLabel");
		if (holeAngleLabel) holeAngleLabel.textContent = langTranslations.hole_angle_label;

		const holeBearingLabel = document.querySelector("#holeBearingLabel");
		if (holeBearingLabel) holeBearingLabel.textContent = langTranslations.hole_bearing_label;

		const holeSubdrillLabel = document.querySelector("#holeSubdrillLabel");
		if (holeSubdrillLabel) holeSubdrillLabel.textContent = langTranslations.hole_subdrill_label;

		const recordActualsAcc = document.querySelector("#recordActualsAcc span");
		if (recordActualsAcc) recordActualsAcc.textContent = langTranslations.record_actuals;

		const recordLengthPopupLabel = document.querySelector("#recordLengthPopupLabel");
		if (recordLengthPopupLabel) recordLengthPopupLabel.textContent = langTranslations.record_length_popup_label;

		const editMassPopupLabel = document.querySelector("#editMassPopupLabel");
		if (editMassPopupLabel) editMassPopupLabel.textContent = langTranslations.record_mass_popup_label;

		const recordCommentPopupLabel = document.querySelector("#recordCommentPopupLabel");
		if (recordCommentPopupLabel) recordCommentPopupLabel.textContent = langTranslations.record_comment_popup_label;

		const viewControlsAcc = document.querySelector("#viewControlsAcc span");
		if (viewControlsAcc) viewControlsAcc.textContent = langTranslations.view_controls;

		const fontLabel = document.querySelector("#fontLabel");
		if (fontLabel) fontLabel.textContent = langTranslations.font_size_label;

		const connLabel = document.querySelector("#connLabel");
		if (connLabel) connLabel.textContent = langTranslations.tie_size_label;

		const toeLabel = document.querySelector("#toeLabel");
		if (toeLabel) toeLabel.textContent = langTranslations.toe_size_label;

		const holeLabel = document.querySelector("#holeLabel");
		if (holeLabel) holeLabel.textContent = langTranslations.hole_adjust_label;

		const intervalLabel = document.querySelector("#intervalLabel");
		if (intervalLabel) intervalLabel.textContent = langTranslations.interval_label;

		const firstMovementLabel = document.querySelector("#firstMovementLabel");
		if (firstMovementLabel) firstMovementLabel.textContent = langTranslations.first_movement_label;

		const snapToleranceLabel = document.querySelector("#snapToleranceLabel");
		if (snapToleranceLabel) snapToleranceLabel.textContent = langTranslations.snap_tolerance_label;

		const outputfilesAcc = document.querySelector("#outputfilesAcc span");
		if (outputfilesAcc) outputfilesAcc.textContent = langTranslations.output_files;

		const label_saveHoles = document.querySelector("#label_saveHoles");
		if (label_saveHoles) label_saveHoles.textContent = langTranslations.save_holes_label;

		const saveHoles = document.querySelector("#saveHoles");
		if (saveHoles) saveHoles.textContent = langTranslations.save_holes_button;

		const label_saveKAD = document.querySelector("#label_saveKAD");
		if (label_saveKAD) label_saveKAD.textContent = langTranslations.save_kad_label;

		const saveKAD = document.querySelector("#saveKAD");
		if (saveKAD) saveKAD.textContent = langTranslations.save_kad_button;

		const label_saveAll = document.querySelector("#label_saveAll");
		if (label_saveAll) label_saveAll.textContent = langTranslations.save_all_label;

		const saveAll = document.querySelector("#saveAll");
		if (saveAll) saveAll.textContent = langTranslations.save_all_button;

		const label_saveMeasures = document.querySelector("#label_saveMeasures");
		if (label_saveMeasures) label_saveMeasures.textContent = langTranslations.save_measures_label;

		const saveMeasures = document.querySelector("#saveMeasures");
		if (saveMeasures) saveMeasures.textContent = langTranslations.save_measures_button;

		const label_exportHolesDXF = document.querySelector("#label_exportHolesDXF");
		if (label_exportHolesDXF) label_exportHolesDXF.textContent = langTranslations.export_holes_dxf_label;

		const exportHolesDXF = document.querySelector("#exportHolesDXF");
		if (exportHolesDXF) exportHolesDXF.textContent = langTranslations.export_holes_dxf_button;

		const label_exportDrawingDXF = document.querySelector("#label_exportDrawingDXF");
		if (label_exportDrawingDXF) label_exportDrawingDXF.textContent = langTranslations.export_drawing_dxf_label;

		const exportDrawingDXF = document.querySelector("#exportDrawingDXF");
		if (exportDrawingDXF) exportDrawingDXF.textContent = langTranslations.export_drawing_dxf_button;

		const label_saveIREDES = document.querySelector("#label_saveIREDES");
		if (label_saveIREDES) label_saveIREDES.textContent = langTranslations.export_epiroc_label;

		const saveIREDES = document.querySelector("#saveIREDES");
		if (saveIREDES) saveIREDES.textContent = langTranslations.export_epiroc_button;

		const label_saveAQM = document.querySelector("#label_saveAQM");
		if (label_saveAQM) label_saveAQM.textContent = langTranslations.export_minestar_label;

		const saveAQM = document.querySelector("#saveAQM");
		if (saveAQM) saveAQM.textContent = langTranslations.export_minestar_button;

		const aboutAcc = document.querySelector("#aboutAcc span");
		if (aboutAcc) aboutAcc.textContent = langTranslations.about_title;

		const developerModeLabel = document.querySelector("label[for='developerMode']");
		if (developerModeLabel) developerModeLabel.textContent = langTranslations.developer_mode;

		const connectorsAcc = document.querySelector("#connectorsAcc span");
		if (connectorsAcc) connectorsAcc.textContent = langTranslations.connectors;

		const singleTie = document.querySelector("#singleTie");
		if (singleTie) singleTie.textContent = langTranslations.single_tie_label;

		const multiTie = document.querySelector("#multiTie");
		if (multiTie) multiTie.textContent = langTranslations.multi_tie_label;

		const delayLabel = document.querySelector("#delayLabel");
		if (delayLabel) delayLabel.textContent = langTranslations.delay_label;

		const connectorColor = document.querySelector("#connectorColor");
		if (connectorColor) connectorColor.textContent = langTranslations.color_label;

		const connectLabel = document.querySelector("#connectLabel");
		if (connectLabel) connectLabel.textContent = langTranslations.connect_distance_label;

		const animateAcc = document.querySelector("#animateAcc span");
		if (animateAcc) animateAcc.textContent = langTranslations.animate_firing;

		const play = document.querySelector("#play");
		if (play) play.textContent = langTranslations.play_button;

		const stop = document.querySelector("#stop");
		if (stop) stop.textContent = langTranslations.stop_button;

		const timeWindowAcc = document.querySelector("#timeWindowAcc span");
		if (timeWindowAcc) timeWindowAcc.textContent = langTranslations.time_window;

		const timeRangeLabel = document.querySelector("#timeRangeLabel");
		if (timeRangeLabel) timeRangeLabel.textContent = langTranslations.time_range_label;

		const timeOffsetLabel = document.querySelector("#timeOffsetLabel");
		if (timeOffsetLabel) timeOffsetLabel.textContent = langTranslations.time_offset_label;

		const holeCountLabel = document.querySelector("#holeCountLabel");
		if (holeCountLabel) holeCountLabel.textContent = langTranslations.hole_count_label;

		const measuredMassLabel = document.querySelector("#measuredMassLabel");
		if (measuredMassLabel) measuredMassLabel.textContent = langTranslations.measured_mass_label;

		const drawingTools = document.querySelector("#drawingTools span");
		if (drawingTools) drawingTools.textContent = langTranslations.drawing_tools;

		const elevationName = document.querySelector("#elevationName");
		if (elevationName) elevationName.textContent = langTranslations.elevation_label;

		const colorLabel = document.querySelector("#colorLabel");
		if (colorLabel) colorLabel.textContent = langTranslations.drawing_color_label;

		const lineWidthLabel = document.querySelector("#lineWidthLabel");
		if (lineWidthLabel) lineWidthLabel.textContent = langTranslations.line_width_label;

		const pointDraw = document.querySelector("#pointDraw");
		if (pointDraw) pointDraw.textContent = langTranslations.point_draw_label;

		const lineDraw = document.querySelector("#lineDraw");
		if (lineDraw) lineDraw.textContent = langTranslations.line_draw_label;

		const polyDraw = document.querySelector("#polyDraw");
		if (polyDraw) polyDraw.textContent = langTranslations.poly_draw_label;

		const circleDraw = document.querySelector("#circleDraw");
		if (circleDraw) circleDraw.textContent = langTranslations.circle_draw_label;

		const drawingRadiusLabel = document.querySelector("#drawingRadiusLabel");
		if (drawingRadiusLabel) drawingRadiusLabel.textContent = langTranslations.drawing_radius_label;

		const textDraw = document.querySelector("#textDraw");
		if (textDraw) textDraw.textContent = langTranslations.text_draw_label;

		const textLabel = document.querySelector("#textLabel");
		if (textLabel) textLabel.textContent = langTranslations.text_label;

		const commonMath1 = document.querySelector("#commonMath1");
		if (commonMath1) commonMath1.textContent = langTranslations.common_math_label;

		const commonMath2 = document.querySelector("#commonMath2");
		if (commonMath2) commonMath2.innerHTML = langTranslations.common_math_examples;

		const createRadiiFromBlastHoles = document.querySelector("#createRadiiFromBlastHoles");
		if (createRadiiFromBlastHoles) createRadiiFromBlastHoles.textContent = langTranslations.create_radii_button;

		const radiiStepsLabel = document.querySelector("#radiiStepsLabel");
		if (radiiStepsLabel) radiiStepsLabel.textContent = langTranslations.radii_steps_label;

		const drawingPolygonRadiusLabel = document.querySelector("#drawingPolygonRadiusLabel");
		if (drawingPolygonRadiusLabel) drawingPolygonRadiusLabel.textContent = langTranslations.drawing_polygon_radius_label;

		const drawingRemovalAcc = document.querySelector("#drawingRemovalAcc span");
		if (drawingRemovalAcc) drawingRemovalAcc.textContent = langTranslations.drawing_removal;

		const pointDeleteLabel = document.querySelector("#pointDeleteLabel");
		if (pointDeleteLabel) pointDeleteLabel.textContent = langTranslations.drawing_delete_label;

		const deletePointButton = document.querySelector("#deletePointButton");
		if (deletePointButton) deletePointButton.textContent = langTranslations.delete_point_button;

		const deleteObjectButton = document.querySelector("#deleteObjectButton");
		if (deleteObjectButton) deleteObjectButton.textContent = langTranslations.delete_object_button;

		const deleteAllButton = document.querySelector("#deleteAllButton");
		if (deleteAllButton) deleteAllButton.textContent = langTranslations.delete_all_button;

		const voronoiOptionsAcc = document.querySelector("#voronoiOptionsAcc span");
		if (voronoiOptionsAcc) voronoiOptionsAcc.textContent = langTranslations.voronoi_options;

		const voronoiLabel = document.querySelector("#voronoiLabel");
		if (voronoiLabel) voronoiLabel.textContent = langTranslations.voronoi_display_label;

		const voronoiLegendLabel = document.querySelector("#voronoiLegendLabel");
		if (voronoiLegendLabel) voronoiLegendLabel.textContent = langTranslations.voronoi_legend_label;

		const voronoiBoundaryLabel = document.querySelector("#voronoiBoundaryLabel");
		if (voronoiBoundaryLabel) voronoiBoundaryLabel.textContent = langTranslations.voronoi_boundary_label;

		// Update select options
		const voronoiSelect = document.querySelector("#voronoiSelect");
		if (voronoiSelect) {
			const options = voronoiSelect.querySelectorAll("option");
			options.forEach((option) => {
				switch (option.value) {
					case "powderFactor":
						option.textContent = langTranslations.powder_factor;
						break;
					case "mass":
						option.textContent = langTranslations.mass;
						break;
					case "volume":
						option.textContent = langTranslations.volume;
						break;
					case "area":
						option.textContent = langTranslations.area;
						break;
					case "measuredLength":
						option.textContent = langTranslations.measured_length;
						break;
					case "designedLength":
						option.textContent = langTranslations.designed_length;
						break;
					case "holeFiringTime":
						option.textContent = langTranslations.hole_firing_time;
						break;
					case "heelanVibration":
						option.textContent = langTranslations.heelan_vibration;
						break;
					case "unknown":
						option.textContent = langTranslations.unknown;
						break;
				}
			});
		}

		// Update legend select options
		const voronoiLegendSelect = document.querySelector("#voronoiLegendSelect");
		if (voronoiLegendSelect) {
			const options = voronoiLegendSelect.querySelectorAll("option");
			options.forEach((option) => {
				switch (option.value) {
					case "minmax":
						option.textContent = langTranslations.min_max;
						break;
					case "fixed":
						option.textContent = langTranslations.fixed;
						break;
				}
			});
		}

		const buymeaCoffeeLabel = document.querySelector("#buymeacoffeelabel");
		if (buymeaCoffeeLabel) buymeaCoffeeLabel.textContent = langTranslations.buy_coffee_alt;

		const bugButton = document.querySelector("#bugButton");
		if (bugButton) bugButton.textContent = langTranslations.report_bug_button;

		// Floating toolbar
		const dragLabel = document.querySelector("#dragLabel");
		if (dragLabel) dragLabel.textContent = langTranslations.drag_label;

		const selectLabel = document.querySelector("#selectLabel");
		if (selectLabel) selectLabel.textContent = langTranslations.select_label;

		const selectPointerLabel = document.querySelector("label[for='selectPointer']");
		if (selectPointerLabel) selectPointerLabel.title = langTranslations.select_pointer;

		const selectByPolygonLabel = document.querySelector("label[for='selectByPolygon']");
		if (selectByPolygonLabel) selectByPolygonLabel.title = langTranslations.select_by_polygon;

		const createLabel = document.querySelector("#createLabel");
		if (createLabel) createLabel.textContent = langTranslations.create_label;

		const patternInPolygonLabel = document.querySelector("label[for='patternInPolygonTool']");
		if (patternInPolygonLabel) patternInPolygonLabel.title = langTranslations.pattern_in_polygon;

		const holesAlongLineLabel = document.querySelector("label[for='holesAlongLineTool']");
		if (holesAlongLineLabel) holesAlongLineLabel.title = langTranslations.holes_along_line;

		const holesAlongPolyLineLabel = document.querySelector("label[for='holesAlongPolyLineTool']");
		if (holesAlongPolyLineLabel) holesAlongPolyLineLabel.title = langTranslations.holes_along_polyline;

		const modifyLabel = document.querySelector("#modifyLabel");
		if (modifyLabel) modifyLabel.textContent = langTranslations.modify_label;

		const moveToLabel = document.querySelector("label[for='moveToTool']");
		if (moveToLabel) moveToLabel.title = langTranslations.move_to;

		const bearingToolLabel = document.querySelector("label[for='bearingTool']");
		if (bearingToolLabel) bearingToolLabel.title = langTranslations.hole_bearing;

		const assignSurfaceLabel = document.querySelector("label[for='assignSurfaceTool']");
		if (assignSurfaceLabel) assignSurfaceLabel.title = langTranslations.assign_surface;

		const assignGradeLabel = document.querySelector("label[for='assignGradeTool']");
		if (assignGradeLabel) assignGradeLabel.title = langTranslations.assign_grade;

		const connectLabelFloating = document.querySelector("#floating-toolbar #connectLabel");
		if (connectLabelFloating) connectLabelFloating.textContent = langTranslations.connect_label;

		const tieConnectLabel = document.querySelector("label[for='tieConnectTool']");
		if (tieConnectLabel) tieConnectLabel.title = langTranslations.tie_connect;

		const tieConnectMultiLabel = document.querySelector("label[for='tieConnectMultiTool']");
		if (tieConnectMultiLabel) tieConnectMultiLabel.title = langTranslations.tie_connect_multi;

		const floatingConnectorColor = document.querySelector("#floatingConnectorColor");
		if (floatingConnectorColor) floatingConnectorColor.title = langTranslations.connector_color;

		const measureLabel = document.querySelector("#measureLabel");
		if (measureLabel) measureLabel.textContent = langTranslations.measure_label;

		const rulerLabel = document.querySelector("label[for='rulerTool']");
		if (rulerLabel) rulerLabel.title = langTranslations.ruler;

		const rulerProtractorLabel = document.querySelector("label[for='rulerProtractorTool']");
		if (rulerProtractorLabel) rulerProtractorLabel.title = langTranslations.ruler_protractor;

		const viewLabel = document.querySelector("#viewLabel");
		if (viewLabel) viewLabel.textContent = langTranslations.view_label;

		const resetViewLabel = document.querySelector("label[for='resetViewTool']");
		if (resetViewLabel) resetViewLabel.title = langTranslations.reset_view;
	} else {
		console.error("Translations for language ", language, " not found.");
	}
}

function getDarkModeSettings() {
	// Add safety checks for all elements
	const darkModeToggle = document.getElementById("darkModeToggle");
	const body = document.body;
	const sidenavLeft = document.getElementById("sidenavLeft");
	const canvas = document.getElementById("canvas");

	// Check if all required elements exist
	if (!darkModeToggle || !body || !sidenavLeft || !canvas) {
		console.warn("⚠️ Dark mode elements not ready yet, skipping...");
		return;
	}

	darkModeEnabled = localStorage.getItem("darkMode") === "true";

	if (darkModeEnabled) {
		darkModeToggle.checked = true;
		body.classList.add("dark-mode");
		sidenavLeft.classList.add("dark-mode");
		canvas.classList.add("dark-canvas");
	} else {
		darkModeToggle.checked = false;
		body.classList.remove("dark-mode");
		sidenavLeft.classList.remove("dark-mode");
		canvas.classList.remove("dark-canvas");
	}
	// Update color variables based on dark mode
	updateColorsForDarkMode();
}

document.getElementById("buttonGoBack").addEventListener("click", function () {
	Swal.fire({
		title: "Leave Kirra 2D?",
		html: `
			<div class="labelWhite18" style="margin-bottom: 15px;">
				You might lose unsaved data.
			</div>
			<div class="labelWhite18" style="margin-bottom: 15px;">
				Make sure to save any important work before leaving.
			</div>
			<div class="labelWhite15" style="text-align: left;">
				<strong>Consider saving your work first:</strong>
				<ul style="margin: 20px 0; padding-left: 20px;">
					<li>Save holes to CSV file</li>
					<li>Save drawing to KAD file</li>
					<li>Export your current work</li>
				</ul>
			</div>
		`,
		icon: "warning",
		showCancelButton: true,
		confirmButtonText: "Leave anyway",
		cancelButtonText: "Stay and save",
		reverseButtons: true,
		width: "500px",
		customClass: {
			popup: "custom-popup-container",
			confirmButton: "confirm",
			cancelButton: "cancel"
		},
		buttonsStyling: false // This disables default SweetAlert2 button styling so your CSS takes over
	}).then((result) => {
		if (result.isConfirmed) {
			window.location.href = "index.html";
		}
	});
});

// Tie Connect Tool event listener
const tieConnectTool = document.getElementById("tieConnectTool");
tieConnectTool.addEventListener("change", function () {
	if (this.checked) {
		resetFloatingToolbarButtons("tieConnectTool");
		// Activate the right side nav "tie in one by one" switch
		addConnectorButton.checked = true;
		// Trigger the change event to activate the functionality
		addConnectorButton.dispatchEvent(new Event("change"));
	} else {
		// Important: Handle unchecked state
		resetFloatingToolbarButtons("none");
		addConnectorButton.checked = false;
		// Make sure we redraw the data
		drawData(points, selectedHole);
	}
});

// Tie Connect Multi Tool event listener
const tieConnectMultiTool = document.getElementById("tieConnectMultiTool");
tieConnectMultiTool.addEventListener("change", function () {
	if (this.checked) {
		resetFloatingToolbarButtons("tieConnectMultiTool");
		// Activate the right side nav "tie in in a line" switch
		addMultiConnectorButton.checked = true;
		// Trigger the change event to activate the functionality
		addMultiConnectorButton.dispatchEvent(new Event("change"));
	} else {
		// Important: Handle unchecked state
		resetFloatingToolbarButtons("none");
		addMultiConnectorButton.checked = false;
		// Make sure we redraw the data
		drawData(points, selectedHole);
	}
});

//Selection Mode
selectionModeButton.addEventListener("change", function () {
	if (this.checked) {
		//set all the other switches to false
		switches.forEach((switchElement) => {
			if (switchElement && switchElement !== editHolesToggle) {
				switchElement.checked = false;
				console.log("switchElements set to false when turning on: " + switchElement.id);
			}
		});
		selectionModeButton.checked = true;
		isMultiHoleSelectionEnabled = true;

		if (selectedHole && !selectedMultipleHoles.includes(selectedHole)) {
			selectedMultipleHoles.push(selectedHole);
			selectedHole = null;
		}

		console.log("selectionModeButton.addEventListener checked");
	} else {
		console.log("selectionModeButton.addEventListener unchecked");
		isMultiHoleSelectionEnabled = false;
		selectionModeButton.checked = false;
		selectedMultipleHoles = [];
		switches.forEach((switchElement) => {
			if (switchElement) {
				switchElement.checked = false;
				console.log("switchElements set to false when turning off: " + switchElement.id);
			}
		});

		drawData(points, selectedHole);
	}
});
function setMultipleSelectionModeToFalse() {
	// resetFloatingToolbarButtons("none");
	isMultiHoleSelectionEnabled = false;
	selectedMultipleHoles = [];
	timingWindowHolesSelected = [];
	console.log("selectionModeSettings set to false");
}

//Resizing the Navbar on the right
resizeRight.addEventListener("mousedown", function () {
	isResizingRight = true;

	document.addEventListener("mousemove", handleMouseMove);
	document.addEventListener("mouseup", handleMouseUp);
});
//Resizing the Navbar on the left
resizeLeft.addEventListener("mousedown", function () {
	isResizingLeft = true;

	document.addEventListener("mousemove", handleMouseMove);
	document.addEventListener("mouseup", handleMouseUp);
});
renumberHoles.addEventListener("click", function () {
	isRenumberingHoles = this.checked;
});
renumberStartListener.addEventListener("change", function () {
	deleteRenumberStart = parseInt(this.value);
});

measuredLengthSwitch.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetFloatingToolbarButtons("none");
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		isMeasureRecording = true;
		measuredLengthSwitch.checked = true;
		document.getElementById("display13").checked = true; // Set display mode to hole Length
		canvas.addEventListener("click", handleMeasuredLengthClick);
		canvas.addEventListener("touchstart", handleMeasuredLengthClick);
		drawData(points, selectedHole);
	} else {
		isMeasureRecording = false;
		canvas.removeEventListener("click", handleMeasuredLengthClick);
		canvas.removeEventListener("touchstart", handleMeasuredLengthClick);
		measuredMassSwitch.checked = false;
		measuredCommentSwitch.checked = false;
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		drawData(points, selectedHole);
	}
});
measuredMassSwitch.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetFloatingToolbarButtons("none");
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		isMeasureRecording = true;
		measuredMassSwitch.checked = true;
		document.getElementById("display14").checked = true; // Set display mode to hole Length
		canvas.addEventListener("click", handleMeasuredMassClick);
		canvas.addEventListener("touchstart", handleMeasuredMassClick);
		drawData(points, selectedHole);
	} else {
		isMeasureRecording = false;
		canvas.removeEventListener("click", handleMeasuredMassClick);
		canvas.removeEventListener("touchstart", handleMeasuredMassClick);
		measuredLengthSwitch.checked = false;
		measuredCommentSwitch.checked = false;
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		drawData(points, selectedHole);
	}
});
measuredCommentSwitch.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetFloatingToolbarButtons("none");
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		isMeasureRecording = true;
		measuredCommentSwitch.checked = true;
		document.getElementById("display15").checked = true; // Set display mode to hole Length
		canvas.addEventListener("click", handleMeasuredCommentClick);
		canvas.addEventListener("touchstart", handleMeasuredCommentClick);
		drawData(points, selectedHole);
	} else {
		isMeasureRecording = false;
		canvas.removeEventListener("click", handleMeasuredCommentClick);
		canvas.removeEventListener("touchstart", handleMeasuredCommentClick);
		measuredMassSwitch.checked = false;
		measuredLengthSwitch.checked = false;
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		drawData(points, selectedHole);
	}
});

addPointDraw.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		resetFloatingToolbarButtons("rulerTool", "bearingTool");
		isDrawingPoint = true;
		addPointDraw.checked = true;
		createNewEntity = true; // ← ADD THIS LINE
		lastKADDrawPoint = null; // Reset preview line when tool is activated
		//Add event listeners
		canvas.addEventListener("click", handleKADPointClick);
		canvas.addEventListener("touchstart", handleKADPointClick);
	} else {
		isDrawingPoint = false;
		canvas.removeEventListener("click", handleKADPointClick);
		canvas.removeEventListener("touchstart", handleKADPointClick);
		createNewEntity = true;
		drawData(points, selectedHole);
	}
});
addLineDraw.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		resetFloatingToolbarButtons("rulerTool", "bearingTool");
		isDrawingLine = true;
		addLineDraw.checked = true;
		createNewEntity = true; // ← ADD THIS LINE
		createNewEntity = true; // ← ADD THIS LINE
		lastKADDrawPoint = null; // Reset preview line when tool is activated
		canvas.addEventListener("click", handleKADLineClick);
		canvas.addEventListener("touchstart", handleKADLineClick);
	} else {
		isDrawingLine = false;
		canvas.removeEventListener("click", handleKADLineClick);
		canvas.removeEventListener("touchstart", handleKADLineClick);
		createNewEntity = true;
		drawData(points, selectedHole);
	}
});
addPolyDraw.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		resetFloatingToolbarButtons("rulerTool", "bearingTool");
		isDrawingPoly = true;
		addPolyDraw.checked = true;
		createNewEntity = true; // ← ADD THIS LINE
		lastKADDrawPoint = null; // Reset preview line when tool is activated
		canvas.addEventListener("click", handleKADPolyClick);
		canvas.addEventListener("touchstart", handleKADPolyClick);
	} else {
		isDrawingPoly = false;
		canvas.removeEventListener("click", handleKADPolyClick);
		canvas.removeEventListener("touchstart", handleKADPolyClick);
		createNewEntity = true;
		drawData(points, selectedHole);
	}
});
addCircleDraw.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		resetFloatingToolbarButtons("rulerTool", "bearingTool");
		isDrawingCircle = true;
		addCircleDraw.checked = true;
		createNewEntity = true; // ← ADD THIS LINE
		lastKADDrawPoint = null; // Reset preview line when tool is activated
		canvas.addEventListener("click", handleKADCircleClick);
		canvas.addEventListener("touchstart", handleKADCircleClick);
	} else {
		isDrawingCircle = false;
		canvas.removeEventListener("click", handleKADCircleClick);
		canvas.removeEventListener("touchstart", handleKADCircleClick);
		createNewEntity = true;
		drawData(points, selectedHole);
	}
});
addTextDraw.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		resetFloatingToolbarButtons("rulerTool", "bearingTool");
		isDrawingText = true;
		addTextDraw.checked = true;
		createNewEntity = true; // ← ADD THIS LINE
		lastKADDrawPoint = null; // Reset preview line when tool is activated
		canvas.addEventListener("click", handleKADTextClick);
		canvas.addEventListener("touchstart", handleKADTextClick);
	} else {
		isDrawingText = false;
		canvas.removeEventListener("click", handleKADTextClick);
		canvas.removeEventListener("touchstart", handleKADTextClick);
		createNewEntity = true;
		drawData(points, selectedHole);
	}
});

deleteKADDraw.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		resetFloatingToolbarButtons("selectPointer", "selectByPolyhon");
		isDeletingKAD = true;
		deleteKADDraw.checked = true;
		canvas.addEventListener("click", getClickedPoint);
		canvas.addEventListener("touchstart", getClickedPoint);
	} else {
		isDeletingKAD = false;
		canvas.removeEventListener("click", getClickedPoint);
		canvas.removeEventListener("touchstart", getClickedPoint);
		drawData(points, selectedHole);
	}
});

addConnectorButton.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		resetFloatingToolbarButtons("tieConnectTool");
		isAddingConnector = true;
		addConnectorButton.checked = true;
		isPolygonSelectionActive = false;
		isSelectionPointerActive = false;
		selectedMultipleHoles = [];
		selectByPolygonTool.checked = false;
		selectPointerTool.checked = false;

		document.getElementById("display5A").checked = true;
		canvas.addEventListener("click", handleConnectorClick);
		canvas.addEventListener("touchstart", handleConnectorClick);
		drawData(points, selectedHole);
	} else {
		isAddingConnector = false;
		canvas.removeEventListener("click", handleConnectorClick);
		canvas.removeEventListener("touchstart", handleConnectorClick);
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		drawData(points, selectedHole);
	}
});
addMultiConnectorButton.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		resetAllSelectedStores();
		resetAllSwitchesAndToggles();
		setMultipleSelectionModeToFalse();
		resetFloatingToolbarButtons("tieConnectMultiTool");

		addMultiConnectorButton.checked = true;
		isAddingMultiConnector = true;

		isPolygonSelectionActive = false;
		isSelectionPointerActive = false;
		selectedMultipleHoles = [];
		selectByPolygonTool.checked = false;
		selectPointerTool.checked = false;

		document.getElementById("display5A").checked = true;
		canvas.addEventListener("click", handleConnectorClick);
		canvas.addEventListener("touchstart", handleConnectorClick);
		drawData(points, selectedHole);
	} else {
		isAddingMultiConnector = false;
		canvas.removeEventListener("click", handleConnectorClick);
		canvas.removeEventListener("touchstart", handleConnectorClick);
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		drawData(points, selectedHole);
	}
});

deleteHoleSwitch.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		deleteHoleSwitch.checked = true;
		isDeletingHole = true;
		isAddingPattern = false;
		isAddingHole = false;
		document.getElementById("display1").checked = true;
		canvas.addEventListener("click", handleHoleDeletingClick);
		canvas.addEventListener("touchstart", handleHoleDeletingClick);
		if (points.length > 0) {
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;
		}
		drawData(points, selectedHole);
	} else {
		isDeletingHole = false;
		canvas.removeEventListener("click", handleHoleDeletingClick);
		canvas.removeEventListener("touchstart", handleHoleDeletingClick);
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		if (points.length > 0) {
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;
		}
		drawData(points, selectedHole);
	}
});
addHoleSwitch.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		setMultipleSelectionModeToFalse();
		addHoleSwitch.checked = true;
		isAddingHole = true;
		isAddingPattern = false;
		document.getElementById("display1").checked = true;
		canvas.addEventListener("click", handleHoleAddingClick);
		canvas.addEventListener("touchstart", handleHoleAddingClick);
		const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
		holeTimes = calculateTimes(points);
		const result = recalculateContours(points, deltaX, deltaY);
		contourLinesArray = result.contourLinesArray;
		directionArrows = result.directionArrows;
		drawData(points, selectedHole);
	} else {
		isAddingHole = false;
		canvas.removeEventListener("click", handleHoleAddingClick);
		canvas.removeEventListener("touchstart", handleHoleAddingClick);
		deleteHoleSwitch.disabled = false;
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		if (points.length > 0) {
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;
		}
		drawData(points, selectedHole);
	}
});
addPatternSwitch.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		setMultipleSelectionModeToFalse();
		addPatternSwitch.checked = true;
		isAddingPattern = true;
		isAddingHole = false;
		document.getElementById("display1").checked = true;
		canvas.addEventListener("click", handlePatternAddingClick);
		canvas.addEventListener("touchstart", handlePatternAddingClick);
		if (points === null) {
			points = [];
		}
		if (points.length > 0) {
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;
		}
		drawData(points, selectedHole);
	} else {
		isAddingPattern = false;
		canvas.removeEventListener("click", handlePatternAddingClick);
		canvas.removeEventListener("touchstart", handlePatternAddingClick);
		deleteHoleSwitch.disabled = false;
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		if (points === null) {
			points = [];
		}
		if (points.length > 0) {
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;
		}
		drawData(points, selectedHole);
	}
});

editHoleTypePopupSwitch.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		//setSelectionModeToFalse();
		isTypeEditing = true;
		editHoleTypePopupSwitch.checked = true;
		document.getElementById("display12").checked = true;
		canvas.addEventListener("click", handleHoleTypeEditClick);
		canvas.addEventListener("touchstart", handleHoleTypeEditClick);
		drawData(points, selectedHole);
	} else {
		isTypeEditing = false;
		canvas.removeEventListener("click", handleHoleTypeEditClick);
		canvas.removeEventListener("touchstart", handleHoleTypeEditClick);
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		drawData(points, selectedHole);
	}
});

editBlastNameSwitch.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		setMultipleSelectionModeToFalse();
		editBlastNameSwitch.checked = true;
		isBlastNameEditing = true;

		canvas.addEventListener("click", handleBlastNameClick);
		canvas.addEventListener("touchstart", handleBlastNameClick);
		drawData(points, selectedHole);
	} else {
		isBlastNameEditing = false;
		canvas.removeEventListener("click", handleBlastNameClick);
		canvas.removeEventListener("touchstart", handleBlastNameClick);
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		drawData(points, selectedHole);
	}
});

editLengthPopupSwitch.addEventListener("change", function () {
	if (this.checked) {
		switches.forEach((switchElement) => {
			if (switchElement) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		//setSelectionModeToFalse();
		editLengthPopupSwitch.checked = true;
		isLengthPopupEditing = true;
		document.getElementById("display2").checked = true;
		canvas.addEventListener("click", handleHoleLengthEditClick);
		canvas.addEventListener("touchstart", handleHoleLengthEditClick);
		drawData(points, selectedHole);
	} else {
		isLengthPopupEditing = false;
		canvas.removeEventListener("click", handleHoleLengthEditClick);
		canvas.removeEventListener("touchstart", handleHoleLengthEditClick);
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		drawData(points, selectedHole);
	}
});

/// Event listener for the edit hole Easting switch
// All previous slider enabling toggles/switches will be grouped into one switch
// isHoleEditing will be used to determine if the hole is being edited
editHolesToggle.addEventListener("change", function () {
	if (this.checked) {
		console.log("editHolesToggle checked");
		isHoleEditing = true;
		//use the set all switches to false function
		booleans.forEach((bool) => {
			if (bool !== isHoleEditing || boll != isMultiHoleSelectionEnabled) bool = false;
		});
		//turn all the switches off
		switches.forEach((switchElement) => {
			if (switchElement && (switchElement !== selectionModeButton || switchElement !== editHolesToggle)) switchElement.checked = false;
		});
		//turn on the editholes toggle
		editHolesToggle.checked = true;
		//attach all the event listeners to the canvas
		canvas.addEventListener("click", handleHoleEditingSelection);
		canvas.addEventListener("touchstart", handleHoleEditingSelection);

		//draw the canvas
		drawData(points, selectedHole);
	} else {
		console.log("editHolesToggle unchecked");
		isHoleEditing = false;
		//remove all the event listeners from the canvas
		canvas.removeEventListener("click", handleHoleEditingSelection);
		canvas.removeEventListener("touchstart", handleHoleEditingSelection);
		//turn off the editholes toggle
		editHolesToggle.checked = false;
		//reset the selected hole
		selectedHole = null;
		firstSelectedHole = null;
		secondSelectedHole = null;
		fromHoleStore = null;
		clickedHole = null;
		if (points.length > 0) {
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength); // Recalculate triangles
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;

			// directionArrows now contains the arrow data for later drawing
		}
		drawData(points, selectedHole);
	}
});

const holeEastingSlider = document.getElementById("holeEastingSlider");
holeEastingSlider.addEventListener("input", function () {
	if (isHoleEditing) {
		let newHoleEasting = parseFloat(holeEastingSlider.value);
		holeEastingLabel.textContent = "Hole Easting (X): " + newHoleEasting.toFixed(2) + "mE";

		if (selectedHole) {
			const index = points.findIndex((point) => point === selectedHole);
			if (index !== -1) {
				clickedHole = points[index];
				// Use calculateHoleGeometry with mode 4 (easting)
				calculateHoleGeometry(clickedHole, newHoleEasting, 4);
				drawData(points, selectedHole);
			}
		} else if (selectedMultipleHoles) {
			// Calculate the average easting of all selected holes
			let sumEasting = selectedMultipleHoles.reduce((sum, hole) => sum + hole.startXLocation, 0);
			let averageEasting = sumEasting / selectedMultipleHoles.length;
			let eastingDelta = newHoleEasting - averageEasting;

			selectedMultipleHoles.forEach((hole) => {
				// Apply the delta to each hole's current position
				let newHoleX = hole.startXLocation + eastingDelta;
				calculateHoleGeometry(hole, newHoleX, 4);
			});
			drawData(points, null);
		}

		// Recalculate dependent data structures if necessary
		if (points.length > 0) {
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;
		}
	}
});

const holeNorthingSlider = document.getElementById("holeNorthingSlider");
holeNorthingSlider.addEventListener("input", function () {
	if (isHoleEditing) {
		let newHoleNorthing = parseFloat(holeNorthingSlider.value);
		holeNorthingLabel.textContent = "Hole Northing (Y): " + newHoleNorthing.toFixed(2) + "mN";

		if (selectedHole) {
			const index = points.findIndex((point) => point === selectedHole);
			if (index !== -1) {
				clickedHole = points[index];
				// Use calculateHoleGeometry with mode 5 (northing)
				calculateHoleGeometry(clickedHole, newHoleNorthing, 5);
				drawData(points, selectedHole);
			}
		} else if (selectedMultipleHoles) {
			// Calculate the average northing of all selected holes
			let sumNorthing = selectedMultipleHoles.reduce((sum, hole) => sum + hole.startYLocation, 0);
			let averageNorthing = sumNorthing / selectedMultipleHoles.length;
			let northingDelta = newHoleNorthing - averageNorthing;

			selectedMultipleHoles.forEach((hole) => {
				// Apply the delta to each hole's current position
				let newHoleY = hole.startYLocation + northingDelta;
				calculateHoleGeometry(hole, newHoleY, 5);
			});
			drawData(points, null);
		}

		// Recalculate dependent data structures if necessary
		if (points.length > 0) {
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;
		}
	}
});

// Access the slider element and add an event listener to track changes
const holeElevationSlider = document.getElementById("holeElevationSlider");
holeElevationSlider.addEventListener("input", function () {
	if (isHoleEditing) {
		let newHoleElevation = parseFloat(holeElevationSlider.value);
		holeElevationLabel.textContent = "Hole Elevation (Z): " + newHoleElevation.toFixed(2) + "m";

		if (selectedHole) {
			// Update the easting of the individual selected hole
			const index = points.findIndex((point) => point === selectedHole);
			if (fixToeLocation == true) {
				if (index !== -1) {
					points[index].startZLocation = newHoleElevation;
					// Assuming endZLocation should also be updated based on the new easting
					points[index].endZLocation += newHoleElevation - points[index].startZLocation;
					calculateHoleGeometry(points[index], points[index].length, 1);
					// Redraw the updated data
					drawData(points, selectedHole);
				}
			} else {
				if (index !== -1) {
					// Calculate the original delta between startZLocation and endZLocation
					let originalDeltaZ = points[index].endZLocation - points[index].startZLocation;

					// Update startZLocation
					points[index].startZLocation = newHoleElevation;

					// Update endZLocation based on the new startZLocation and original delta
					points[index].endZLocation = newHoleElevation + originalDeltaZ;

					// Redraw the updated data
					drawData(points, selectedHole);
				}
			}
		} else if (selectedMultipleHoles) {
			// Update the elevation of multiple selected holes
			let sumElevation = selectedMultipleHoles.reduce((sum, hole) => sum + hole.startZLocation, 0);
			let averageElevation = sumElevation / selectedMultipleHoles.length;
			let elevationDelta = newHoleElevation - averageElevation;

			selectedMultipleHoles.forEach((hole) => {
				hole.startZLocation += elevationDelta;
				// Assuming endZLocation should also be updated based on the new elevation
				hole.endZLocation += elevationDelta;
			});

			// Redraw the updated data for multiple holes
			drawData(points, null); // Pass null as the selected hole might not be relevant
		}

		// Recalculate dependent data structures if necessary
		if (points.length > 0) {
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength); // Recalculate triangles
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;

			// directionArrows now contains the arrow data for later drawing
		}
	}
});

const holeLengthSlider = document.getElementById("holeLengthSlider");
holeLengthSlider.addEventListener("input", function () {
	if (isHoleEditing) {
		let newHoleLength = parseFloat(holeLengthSlider.value);
		if (selectedHole) {
			const index = points.findIndex((point) => point === selectedHole);
			if (index !== -1) {
				clickedHole = points[index];
				holeLengthLabel.textContent = "Hole Length : " + parseFloat(newHoleLength).toFixed(1) + "m";
				calculateHoleGeometry(clickedHole, newHoleLength, 1);
				drawData(points, selectedHole);
			}
		}
		if (selectedMultipleHoles != null) {
			selectedMultipleHoles.forEach((hole) => {
				holeLengthLabel.textContent = "Hole Length : " + parseFloat(newHoleLength).toFixed(1) + "m";
				calculateHoleGeometry(hole, newHoleLength, 1);
				drawData(points, selectedHole);
			});
		}
	}
});

const holeAngleSlider = document.getElementById("holeAngleSlider");
holeAngleSlider.addEventListener("input", function () {
	if (isHoleEditing) {
		let newHoleAngle = parseFloat(holeAngleSlider.value);
		if (selectedHole) {
			const index = points.findIndex((point) => point === selectedHole);
			if (index !== -1) {
				clickedHole = points[index];
				holeAngleLabel.textContent = "Hole Angle : " + parseFloat(newHoleAngle).toFixed(0) + "\u00B0";
				calculateHoleGeometry(clickedHole, newHoleAngle, 2);

				// Update hole length slider to reflect the new calculated length
				const newLength = clickedHole.holeLengthCalculated;
				holeLengthSlider.value = newLength;
				holeLengthLabel.textContent = "Hole Length : " + parseFloat(newLength).toFixed(1) + "m";

				drawData(points, selectedHole);
			}
		}
		if (selectedMultipleHoles != null) {
			selectedMultipleHoles.forEach((hole) => {
				holeAngleLabel.textContent = "Hole Angle : " + parseFloat(newHoleAngle).toFixed(0) + "\u00B0";
				calculateHoleGeometry(hole, newHoleAngle, 2);
				drawData(points, selectedHole);
			});

			// For multiple holes, use the first hole's length for the slider display
			if (selectedMultipleHoles.length > 0) {
				const newLength = selectedMultipleHoles[0].holeLengthCalculated;
				holeLengthSlider.value = newLength;
				holeLengthLabel.textContent = "Hole Length : " + parseFloat(newLength).toFixed(1) + "m";
			}
		}
	}
});

const holeDiameterSlider = document.getElementById("holeDiameterSlider");
holeDiameterSlider.addEventListener("input", function () {
	if (isHoleEditing) {
		let newHoleDiameter = parseFloat(holeDiameterSlider.value);
		if (selectedHole) {
			const index = points.findIndex((point) => point === selectedHole);
			if (index !== -1) {
				clickedHole = points[index];
				holeDiameterLabel.textContent = "Hole Diameter : " + parseFloat(newHoleDiameter).toFixed(0) + "mm";
				calculateHoleGeometry(clickedHole, newHoleDiameter, 7);
				drawData(points, selectedHole);
			}
		}
		if (selectedMultipleHoles != null) {
			selectedMultipleHoles.forEach((hole) => {
				holeDiameterLabel.textContent = "Hole Diameter : " + parseFloat(newHoleDiameter).toFixed(0) + "mm";
				calculateHoleGeometry(hole, newHoleDiameter, 7);
				drawData(points, selectedHole);
			});
		}
	}
});

const holeBearingSlider = document.getElementById("holeBearingSlider");
holeBearingSlider.addEventListener("input", function () {
	if (isHoleEditing) {
		let newHoleBearing = parseFloat(holeBearingSlider.value);
		if (selectedHole) {
			const index = points.findIndex((point) => point === selectedHole);
			if (index !== -1) {
				clickedHole = points[index];
				//console.log("clickedHole - " + "Hole Bearing : " + newHoleBearing + "\u00B0");
				holeBearingLabel.textContent = "Hole Bearing : " + parseFloat(newHoleBearing).toFixed(1) + "\u00B0";

				// Calculate endXYZ and draw points
				calculateHoleGeometry(clickedHole, newHoleBearing, 3);
				drawData(points, selectedHole);
			}
		}
		if (selectedMultipleHoles != null) {
			selectedMultipleHoles.forEach((hole) => {
				//console.log("clickedHole - " + "Hole Bearing : " + newHoleBearing + "\u00B0");
				holeBearingLabel.textContent = "Hole Bearing : " + parseFloat(newHoleBearing).toFixed(1) + "\u00B0";

				// Calculate endXYZ and draw points
				calculateHoleGeometry(hole, newHoleBearing, 3);
				drawData(points, selectedHole);
			});
		}
	}
});

const holeSubdrillSlider = document.getElementById("holeSubdrillSlider");
holeSubdrillSlider.addEventListener("input", function () {
	if (isHoleEditing) {
		let newHoleSubdrill = parseFloat(holeSubdrillSlider.value);
		if (selectedHole) {
			const index = points.findIndex((point) => point === selectedHole);
			if (index !== -1) {
				clickedHole = points[index];
				holeSubdrillLabel.textContent = "Hole Subdrill : " + parseFloat(newHoleSubdrill).toFixed(1) + "m";
				calculateHoleGeometry(clickedHole, newHoleSubdrill, 8);

				// Update hole length slider to reflect the new calculated length
				const newLength = clickedHole.holeLengthCalculated;
				holeLengthSlider.value = newLength;
				holeLengthLabel.textContent = "Hole Length : " + parseFloat(newLength).toFixed(1) + "m";

				drawData(points, selectedHole);
			}
		}
		if (selectedMultipleHoles != null) {
			selectedMultipleHoles.forEach((hole) => {
				holeSubdrillLabel.textContent = "Hole Subdrill : " + parseFloat(newHoleSubdrill).toFixed(1) + "m";
				calculateHoleGeometry(hole, newHoleSubdrill, 8);
				drawData(points, selectedHole);
			});

			// For multiple holes, use the first hole's length for the slider display
			if (selectedMultipleHoles.length > 0) {
				const newLength = selectedMultipleHoles[0].holeLengthCalculated;
				holeLengthSlider.value = newLength;
				holeLengthLabel.textContent = "Hole Length : " + parseFloat(newLength).toFixed(1) + "m";
			}
		}
	}
});

function resizeChart() {
	if (Array.isArray(holeTimes) && timeChartObject) {
		// Check if the chart has been created by Plotly
		const chart = document.getElementById("timeChart");
		if (chart && chart._fullLayout) {
			const newWidth = document.documentElement.clientWidth;
			// Use the string ID instead of the DOM element
			Plotly.relayout("timeChart", {
				width: newWidth
			});
		} else {
			console.warn("resizeChart skipped: timeChart not yet initialized by Plotly");
		}
	} else {
		console.warn("resizeChart skipped: invalid holeTimes or timeChartObject");
	}
}

// Add event listener for window resize
window.addEventListener("resize", resizeChart);
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
		this.classList.toggle("active");
		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
			resizeChart(); // Call the resizeChart function to adjust the chart layout
			timeChart();
			//Plotly.relayout("timeChart", {
			//	width: newWidthRight - 50
			//});
		}
	});
}

const voronoiMetricDropdown = document.getElementById("voronoiSelect");
if (voronoiMetricDropdown) {
	voronoiMetricDropdown.addEventListener("change", function (e) {
		selectedVoronoiMetric = e.target.value;
		drawData(points, selectedHole); // Redraw with the new metric
	});
}

function isIOS() {
	const userAgent = navigator.userAgent.toLowerCase();
	return /iphone|ipad|ipod/.test(userAgent);
}
document.getElementById("saveKAD").addEventListener("click", function () {
	exportKADFile(mapData);
});
document.getElementById("saveHoles").addEventListener("click", function () {
	if (isIOS()) {
		const csv = convertPointsTo14ColumnCSV();

		// Create a Blob with the CSV data
		const blob = new Blob([csv], {
			type: "text/csv;charset=utf-8"
		});

		// Create a URL for the Blob
		const url = URL.createObjectURL(blob);

		// Create an anchor element with the download link
		const link = document.createElement("a");
		link.href = url;
		link.download = "KIRRA14_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";
		link.textContent = "Click here to download";

		// Append the link to the document
		document.body.appendChild(link);

		// Programmatically trigger the click event on the link
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	} else {
		const csv = convertPointsTo14ColumnCSV();

		// Create an invisible anchor element
		const link = document.createElement("a");
		link.style.display = "none";

		// Set the CSV data as the "href" attribute
		link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);

		// Prompt the user to save the file
		// Name the file "blastingapps_output" with today's date and time
		link.download = "KIRRA14_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";

		// Append the link to the document
		document.body.appendChild(link);

		// Programmatically trigger the click event on the link
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	}
});

document.getElementById("saveAll").addEventListener("click", function () {
	if (isIOS()) {
		const csv = convertPointsToAllDataCSV();

		// Create a Blob with the CSV data
		const blob = new Blob([csv], {
			type: "text/csv;charset=utf-8"
		});

		// Create a URL for the Blob
		const url = URL.createObjectURL(blob);

		// Create an anchor element with the download link
		const link = document.createElement("a");
		link.href = url;
		link.download = "KIRRA_ALL_output_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";
		link.textContent = "Click here to download";

		// Append the link to the document
		document.body.appendChild(link);

		// Programmatically trigger the click event on the link
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	} else {
		const csv = convertPointsToAllDataCSV();

		// Create an invisible anchor element
		const link = document.createElement("a");
		link.style.display = "none";

		// Set the CSV data as the "href" attribute
		link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);

		// Prompt the user to save the file
		// Name the file "blastingapps_output" with today's date and time
		link.download = "KIRRA_ALL_output_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";

		// Append the link to the document
		document.body.appendChild(link);

		// Programmatically trigger the click event on the link
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	}
});
document.getElementById("saveIREDES").addEventListener("click", function () {
	saveIREDESPopup();
});
document.getElementById("saveAQM").addEventListener("click", function () {
	saveAQMPopup();
});
document.getElementById("saveMeasures").addEventListener("click", function () {
	if (isIOS()) {
		const csv = convertPointsToActualDataCSV();

		// Create a Blob with the CSV data
		const blob = new Blob([csv], {
			type: "text/csv;charset=utf-8"
		});

		// Create a URL for the Blob
		const url = URL.createObjectURL(blob);

		// Create an anchor element with the download link
		const link = document.createElement("a");
		link.href = url;
		link.download = "KIRRA_MEASURED_output_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";
		link.textContent = "Click here to download";

		// Append the link to the document
		document.body.appendChild(link);

		// Programmatically trigger the click event on the link
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	} else {
		const csv = convertPointsToActualDataCSV();

		// Create an invisible anchor element
		const link = document.createElement("a");
		link.style.display = "none";

		// Set the CSV data as the "href" attribute
		link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);

		// Prompt the user to save the file
		// Name the file "blastingapps_output" with today's date and time
		link.download = "KIRRA_MEASURED_output_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";

		// Append the link to the document
		document.body.appendChild(link);

		// Programmatically trigger the click event on the link
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	}
});
document.getElementById("exportHolesDXF").addEventListener("click", function () {
	const dxf = exportHolesDXF(points);
	const filename = "KIRRA_HOLES_DXF_" + new Date().toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "_") + ".dxf";
	downloadDXF(dxf, filename);
});

document.getElementById("exportDrawingDXF").addEventListener("click", function () {
	const dxf = exportKADDXF();
	const filename = "KIRRA_DRAWING_DXF_" + new Date().toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "_") + ".dxf";
	downloadDXF(dxf, filename);
});

function downloadDXF(content, filename) {
	if (isIOS()) {
		const blob = new Blob([content], { type: "text/dxf;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	} else {
		const link = document.createElement("a");
		link.style.display = "none";
		link.href = "data:text/dxf;charset=utf-8," + encodeURIComponent(content);
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
}

// Function to check if the mouse is inside the canvas
function isMouseInside(mouseX, mouseY, canvas) {
	const rect = canvas.getBoundingClientRect(); // Get the bounding rectangle of the canvas
	return mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom;
}
const canvasContainer = document.querySelector(".canvas-container");

canvasContainer.addEventListener(
	"wheel",
	function (event) {
		const mouseX = event.clientX;
		const mouseY = event.clientY;
		const isMouseInsideCanvas = isMouseInside(mouseX, mouseY, canvas);

		if (isMouseInsideCanvas) {
			event.preventDefault();
			const wheelDelta = event.deltaY;

			const zoomFactor = wheelDelta > 0 ? 0.95 : 1.05;

			// Calculate the mouse position in canvas coordinates
			const canvasRect = canvas.getBoundingClientRect();
			const canvasX = mouseX - canvasRect.left;
			const canvasY = mouseY - canvasRect.top;

			// Calculate the center of the canvas
			const centerX = canvasRect.width / 2;
			const centerY = canvasRect.height / 2;
			//make the canvas center the value of 0,0
			//const canvasCenterX = centerX - canvasX;
			//const canvasCenterY = centerY - canvasY;

			// Calculate the delta between the mouse position and the canvas center
			const deltaX = canvasX - centerX;
			const deltaY = canvasY - centerY;
			// Calculate the delta between the mouse position and the canvas center in negative on the left and positive on the right
			// and negative on the top and positive on the bottom
			//const deltaX = canvasCenterX - centerX;
			//const deltaY = canvasCenterY - centerY;

			// Calculate the position offsets from the center of the canvas
			const offsetX = canvasX - canvasRect.width / 2;
			const offsetY = canvasY - canvasRect.height / 2;

			// Calculate the new scale
			currentScale *= zoomFactor;
			currentFontSize = Math.min(Math.max(currentFontSize * zoomFactor, 0), 100);

			// Adjust the centroid position based on the offsets and zoom direction
			if (deltaX < 0 && deltaY < 0) {
				// console.log("Delta X: " + deltaX + " Delta Y: " + deltaY);
				// console.log("Upper Left Quadrant: Mouse is above and to the left of the canvas center");
				centroidX -= (offsetX / currentScale) * (1 - zoomFactor);
				centroidY += (offsetY / currentScale) * (1 - zoomFactor);
			} else if (deltaX < 0 && deltaY > 0) {
				// console.log("Delta X: " + deltaX + " Delta Y: " + deltaY);
				// console.log("Lower Left Quadrant: Mouse is below and to the left of the canvas center");
				centroidX -= (offsetX / currentScale) * (1 - zoomFactor);
				centroidY += (offsetY / currentScale) * (1 - zoomFactor);
			} else if (deltaX > 0 && deltaY < 0) {
				// console.log("Delta X: " + deltaX + " Delta Y: " + deltaY);
				// console.log("Upper Right Quadrant: Mouse is above and to the right of the canvas center");
				centroidX -= (offsetX / currentScale) * (1 - zoomFactor);
				centroidY += (offsetY / currentScale) * (1 - zoomFactor);
			} else if (deltaX > 0 && deltaY > 0) {
				// console.log("Delta X: " + deltaX + " Delta Y: " + deltaY);
				// console.log("Lower Right Quadrant: Mouse is below and to the right of the canvas center");
				centroidX -= (offsetX / currentScale) * (1 - zoomFactor);
				centroidY += (offsetY / currentScale) * (1 - zoomFactor);
			} else {
				// console.log("Delta X: " + deltaX + " Delta Y: " + deltaY);
				// console.log("Center: Mouse is in the center region of the canvas");
				centroidX -= (offsetX / currentScale) * (1 - zoomFactor);
				centroidY -= (offsetY / currentScale) * (1 - zoomFactor);
			}

			// Ensure the currentScale does not go below a minimum value
			currentScale = Math.max(currentScale, 0.000001);

			drawData(points, selectedHole);
		}
	},
	{
		passive: false
	}
);

// Access the slider element and add an event listener to track changes
const toeSlider = document.getElementById("toeSlider");
toeSlider.addEventListener("input", function () {
	// Calculate the toe size in meters by using the slider value directly
	const toeSizeInMeters = parseFloat(this.value);

	// Update the label with the calculated toe size
	toeLabel.textContent = "Toe Size: " + toeSizeInMeters.toFixed(2) + "m";

	// Call the drawData function with the updated toe size in meters
	drawData(points, selectedHole, toeSizeInMeters);
});
const holeSlider = document.getElementById("holeSlider");
holeSlider.addEventListener("input", function () {
	////console.log('Slider value:', this.value);
	holeScale = document.getElementById("holeSlider").value;
	holeLabel.textContent = "Hole Adjust : " + parseFloat(holeScale).toFixed(1);
	drawData(points, selectedHole);
});
// Access the slider element and add an event listener to track changes
const connSlider = document.getElementById("connSlider");
connSlider.addEventListener("input", function () {
	////console.log('Connector value:', this.value);
	connScale = document.getElementById("connSlider").value;
	connLabel.textContent = "Tie Size : " + parseFloat(connScale).toFixed(1);
	drawData(points, selectedHole);
});
const fontSlider = document.getElementById("fontSlider");
fontSlider.min = "0";
fontSlider.max = "100";
fontSlider.addEventListener("input", function () {
	currentFontSize = this.value;
	currentFontSize = document.getElementById("fontSlider").value;
	fontLabel.textContent = "Font Size : " + currentFontSize + "px";
	drawData(points, selectedHole);
});
// Access the slider element and add an event listener to track changes
const intervalSlider = document.getElementById("intervalSlider");
intervalSlider.addEventListener("input", function () {
	intervalAmount = document.getElementById("intervalSlider").value;
	intervalLabel.textContent = "Interval : " + intervalAmount + "ms";
	const result = recalculateContours(points, deltaX, deltaY);
	contourLinesArray = result.contourLinesArray;
	directionArrows = result.directionArrows;

	// directionArrows now contains the arrow data for later drawing

	drawData(points, selectedHole);
});
// Access the slider element and add an event listener to track changes
const firstMovementSlider = document.getElementById("firstMovementSlider");
firstMovementSlider.addEventListener("input", function () {
	firstMovementSize = document.getElementById("firstMovementSlider").value;
	firstMovementLabel.textContent = "First Movement Size : " + firstMovementSize;
	const result = recalculateContours(points, deltaX, deltaY);
	contourLinesArray = result.contourLinesArray;
	directionArrows = result.directionArrows;

	// directionArrows now contains the arrow data for later drawing

	drawData(points, selectedHole);
});
//snap tolerance - UPDATED TO USE PIXELS
const snapToleranceSlider = document.getElementById("snapToleranceSlider");
snapToleranceSlider.addEventListener("input", function () {
	snapRadiusPixels = parseFloat(this.value);
	document.getElementById("snapToleranceLabel").textContent = "Snap Tolerance: " + snapRadiusPixels + "px";

	// Save to localStorage
	localStorage.setItem("snapRadiusPixels", snapRadiusPixels);
});

// Access the slider element and add an event listener to track changes
const connectSlider = document.getElementById("connectSlider");
connectSlider.addEventListener("input", function () {
	connectAmount = document.getElementById("connectSlider").value;
	connectLabel.textContent = "Connect Distance : " + connectAmount + "m";
});

const timeSlider = document.getElementById("timeRange");
timeSlider.addEventListener("input", function () {
	timeRange = document.getElementById("timeRange").value;
	timeRangeLabel.textContent = "Time window :" + timeRange + "ms";
	timeChart();
	Plotly.relayout("timeChart", {
		width: newWidthRight - 50,
		yaxis: {
			autorange: true // Adjust the y-axis range to fit the data
		}
	});
});

// Access the slider element and add an event listener to track changes
const timeOffsetSlider = document.getElementById("timeOffset");
timeOffsetSlider.addEventListener("input", function () {
	timeOffset = document.getElementById("timeOffset").value;
	timeOffsetLabel.textContent = "Time Offset : " + timeOffset + "ms";
	timeChart();
	Plotly.relayout("timeChart", {
		width: newWidthRight - 50,
		yaxis: {
			autorange: true // Adjust the y-axis range to fit the data
		}
	});
});

//floating connector color
const floatingConnectorColor = document.getElementById("floatingConnectorColor");
floatingConnectorColor.addEventListener("change", function () {
	floatingConnectorColor.jscolor.fromString(floatingConnectorColor.value);
});
//Color Wells not sliders but JScolor buttons
const connectorColor = document.getElementById("connectorColor");
connectorColor.addEventListener("change", function () {
	connectorColor.jscolor.fromString(connectorColor.value);
});
const drawingColor = document.getElementById("drawingColor");
drawingColor.addEventListener("change", function () {
	drawingColor.jscolor.fromString(drawingColor.value);
});

const connectorDelay = document.getElementById("delay");
connectorDelay.addEventListener("change", function () {
	connectorDelay.value = parseFloat(connectorDelay.value);
});
const floatingDelay = document.getElementById("floatingDelay");
floatingDelay.addEventListener("change", function () {
	floatingDelay.value = parseFloat(floatingDelay.value);
});

let drawingZValue = 0.0;
//Numbers like elevation and circle radius and polygon radius
const drawingElevation = document.getElementById("drawingElevation");
drawingElevation.addEventListener("change", function () {
	drawingZValue = parseFloat(drawingElevation.value);
});
const lineThickness = document.getElementById("drawingLineWidth");
lineThickness.addEventListener("change", function () {
	lineThickness.value = parseFloat(lineThickness.value);
});
const circleRadius = document.getElementById("drawingRadius");
circleRadius.addEventListener("change", function () {
	circleRadius.value = parseFloat(circleRadius.value);
});
const polygonRadius = document.getElementById("drawingPolygonRadius");
polygonRadius.addEventListener("change", function () {
	polygonRadius.value = parseFloat(polygonRadius.value);
});
const radiiSteps = document.getElementById("radiiSteps");
radiiSteps.addEventListener("change", function () {
	radiiSteps.value = parseInt(radiiSteps.value);
});
const drawingText = document.getElementById("drawingText");
drawingText.addEventListener("change", function () {
	drawingText.value = String(drawingText.value);
});

// Create array of options and their corresponding flags
const optionConfigs = [
	{ option: displayHoleId },
	{ option: displayHoleLength },
	{ option: displayHoleDiameter },
	{ option: displayHoleAngle },
	{ option: displayHoleDip },
	{ option: displayHoleBearing },
	{ option: displayHoleSubdrill },
	{ option: displayConnectors },
	{ option: displayDelays },
	{ option: displayTimes },
	{ option: displayContours, flag: "isDisplayingContours" },
	{ option: displaySlope, flag: "isDisplayingSlopeTriangles" },
	{ option: displayRelief, flag: "isDisplayingReliefTriangles" },
	{ option: displayFirstMovements, flag: "isDisplayingDirectionArrows" },
	{ option: displayXLocation },
	{ option: displayYLocation },
	{ option: displayElevation },
	{ option: displayHoleType },
	{ option: displayMLength },
	{ option: displayMMass },
	{ option: displayMComment },
	{ option: displayVaronoiCells }
];

// Add event listeners programmatically
optionConfigs.forEach((config) => {
	if (config.option) {
		config.option.addEventListener("change", function () {
			if (config.flag) {
				window[config.flag] = true;
			}

			// Calculate contours when contours display is turned on
			if (config.option === displayContours && displayContours.checked) {
				const result = recalculateContours(points, 0, 0);
				contourLinesArray = result.contourLinesArray;
				directionArrows = result.directionArrows;
			}

			drawData(points, selectedHole);
		});
	}
});

let touchStartTime;
let touchDuration;
const longPressDuration = 200; // Adjust this duration as needed
let isTouchDragging = false;
let longPressTimeout;
let isUpdatingSelectionFromMove = false;
let newWidthRight = 350;
let newWidthLeft = 350;

function handleMouseDown(event) {
	// Ignore right-clicks - they're handled by contextmenu event
	// BUT preserve move tool functionality completely
	if (event.button === 2) {
		// Only ignore if not in move tool mode
		if (!isMoveToolActive) return;
	}

	touchStartTime = Date.now();
	touchDuration = 0; // Reset touch duration on touch start

	// Set a timeout to trigger a long press event
	longPressTimeout = setTimeout(() => {
		isDragging = true; // Set isDragging to true after 500ms
	}, longPressDuration);

	// Convert to canvas coordinates (consistent with handleMouseMove)
	const rect = canvas.getBoundingClientRect();
	lastMouseX = event.clientX - rect.left;
	lastMouseY = event.clientY - rect.top;
	// Block tool-specific behaviors only if tools are dragging
	if (isDraggingBearing || isDraggingHole) return;
}

function handleMouseMove(event) {
	const rect = canvas.getBoundingClientRect();
	const mouseX = event.clientX - rect.left;
	const mouseY = event.clientY - rect.top;

	// Update global mouse tracking for interactive previews
	currentMouseCanvasX = mouseX;
	currentMouseCanvasY = mouseY;
	// Convert to world coordinates
	currentMouseWorldX = (mouseX - canvas.width / 2) / currentScale + centroidX;
	currentMouseWorldY = -(mouseY - canvas.height / 2) / currentScale + centroidY;

	if (isDragging && !isDraggingBearing && !isDraggingHole) {
		deltaX = mouseX - lastMouseX;
		deltaY = mouseY - lastMouseY;
		centroidX -= deltaX / currentScale;
		centroidY += deltaY / currentScale;
		lastMouseX = mouseX;
		lastMouseY = mouseY;
	} else {
		lastMouseX = mouseX;
		lastMouseY = mouseY;
	}

	if (isResizingRight) {
		newWidthRight = window.innerWidth - event.clientX;
		Plotly.relayout("timeChart", {
			width: newWidthRight - 50
		});
		document.getElementById("sidenavRight").style.width = newWidthRight + "px";
	}
	if (isResizingLeft) {
		newWidthLeft = event.clientX;
		document.getElementById("sidenavLeft").style.width = newWidthLeft + "px";
	}

	// If in selection mode and there's a selection, prevent getMultipleClickedHoles from re-evaluating during this move
	if (isMultiHoleSelectionEnabled && selectedMultipleHoles.length > 0) {
		isUpdatingSelectionFromMove = true; // Flag to prevent re-evaluating selection during mouse move
	}

	drawData(points, selectedHole);

	isUpdatingSelectionFromMove = false; // Reset the flag after drawData
}

function handleMouseUp(event) {
	isDragging = false;
	clearTimeout(longPressTimeout); // Clear the long press timeout
	// Block tool-specific behaviors only if tools are dragging
	if (isDraggingBearing || isDraggingHole) return;
	//touchDuration = Date.now() - touchStartTime;

	if (isAddingHole && touchDuration <= longPressDuration) {
		// Short click behavior
		touchStartX = event.clientX;
		touchStartY = event.clientY;
		addHolePopup();
	}
	if (isAddingPattern && touchDuration <= longPressDuration) {
		touchStartX = event.clientX;
		touchStartY = event.clientY;
		// Log the values of worldX and worldY
	}
	if (isDrawingPoint && touchDuration <= longPressDuration) {
		touchStartX = event.clientX;
		touchStartY = event.clientY;
		// Log the values of worldX and worldY
	}
	if (isDrawingLine && touchDuration <= longPressDuration) {
		touchStartX = event.clientX;
		touchStartY = event.clientY;
		// Log the values of worldX and worldY
	}
	if (isDrawingPoly && touchDuration <= longPressDuration) {
		touchStartX = event.clientX;
		touchStartY = event.clientY;
		// Log the values of worldX and worldY
	}
	if (isDrawingCircle && touchDuration <= longPressDuration) {
		touchStartX = event.clientX;
		touchStartY = event.clientY;
		// Log the values of worldX and worldY
	}
	if (isDrawingText && touchDuration <= longPressDuration) {
		touchStartX = event.clientX;
		touchStartY = event.clientY;
		// Log the values of worldX and worldY
	}
	isResizingRight = false;
	drawData(points, selectedHole);
	document.removeEventListener("mousemove", handleMouseMove);
	document.removeEventListener("mouseup", handleMouseUp);
	isResizingLeft = false;
	document.removeEventListener("mousemove", handleMouseMove);
	document.removeEventListener("mouseup", handleMouseUp);
}

// Rest of the code for touch events is unchanged

function handleTouchStart(event) {
	touchStartTime = Date.now();
	touchDuration = 0; // Reset touch duration on touch start

	// Set a timeout to trigger a long press event
	longPressTimeout = setTimeout(() => {
		isTouchDragging = true; // Set isTouchDragging to true after 500ms
	}, longPressDuration);

	// Continue handling the touch start event as before
	if (event.touches.length === 1) {
		if (!isDraggingBearing && !isDraggingHole) {
			isTouchDragging = true;
		}
		touchStartX = event.touches[0].clientX;
		touchStartY = event.touches[0].clientY;
	} else if (event.touches.length === 2) {
		// Pinch
		initialPinchDistance = null;
		initialScale = currentScale;
		initialFontSize = currentFontSize;
	}
}

function handleTouchEnd(event) {
	// Clear the long press timeout
	clearTimeout(longPressTimeout);

	// Only set isTouchDragging to false on touch end
	isTouchDragging = false;

	touchDuration = Date.now() - touchStartTime;
	// Block tool-specific behaviors if tools are dragging
	if (isDraggingBearing || isDraggingHole) return;

	if (isAddingHole && touchDuration <= longPressDuration) {
		touchStartX = event.changedTouches[0].clientX;
		touchStartY = event.changedTouches[0].clientY;
		addHolePopup();
	}
	if (event.touches.length === 1) {
		initialPinchDistance = null;
		initialScale = currentScale;
		initialFontSize = currentFontSize;
	}
	if (isAddingPattern && touchDuration <= longPressDuration) {
		touchStartX = event.changedTouches[0].clientX;
		touchStartY = event.changedTouches[0].clientY;
	}
	if (isDrawingPoint && touchDuration <= longPressDuration) {
		touchStartX = event.changedTouches[0].clientX;
		touchStartY = event.changedTouches[0].clientY;
	}
	if (isDrawingLine && touchDuration <= longPressDuration) {
		touchStartX = event.changedTouches[0].clientX;
		touchStartY = event.changedTouches[0].clientY;
	}
	if (isDrawingPoly && touchDuration <= longPressDuration) {
		touchStartX = event.changedTouches[0].clientX;
		touchStartY = event.changedTouches[0].clientY;
	}
	if (isDrawingCircle && touchDuration <= longPressDuration) {
		touchStartX = event.changedTouches[0].clientX;
		touchStartY = event.changedTouches[0].clientY;
	}
	if (isDrawingText && touchDuration <= longPressDuration) {
		touchStartX = event.changedTouches[0].clientX;
		touchStartY = event.changedTouches[0].clientY;
	}
}

function handleTouchMove(event) {
	if (event.touches.length === 1 && isTouchDragging && !isDraggingBearing && !isDraggingHole) {
		// Only do canvas panning if tools aren't dragging
		event.preventDefault();
		let touchX = event.touches[0].clientX;
		let touchY = event.touches[0].clientY;
		deltaX = touchX - touchStartX;
		deltaY = touchY - touchStartY;
		touchStartX = touchX;
		touchStartY = touchY;
		centroidX -= deltaX / currentScale;
		centroidY += deltaY / currentScale;
		drawData(points, selectedHole);
	} else if (event.touches.length === 2) {
		event.preventDefault();

		deltaX = event.touches[0].clientX - event.touches[1].clientX;
		deltaY = event.touches[0].clientY - event.touches[1].clientY;
		const currentPinchDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

		if (initialPinchDistance === null) {
			initialPinchDistance = currentPinchDistance;
		} else {
			const pinchDelta = currentPinchDistance - initialPinchDistance;
			currentScale = initialScale + pinchDelta * 0.05;
			currentScale = Math.max(currentScale, 0.000001);
			currentFontSize = initialFontSize * (currentScale / initialScale);

			drawData(points, selectedHole);
		}
	}
}

async function handleFileUpload(event) {
	const file = event.target.files[0];
	if (!file) return;

	const reader = new FileReader();

	reader.onload = async function (event) {
		const data = event.target.result;

		if (file.name.endsWith(".kad") || file.name.endsWith(".KAD") || file.name.endsWith(".txt") || file.name.endsWith(".TXT")) {
			parseKADFile(data);
			drawData(points, selectedHole);
		} else if (file.name.endsWith(".csv") || file.name.endsWith(".CSV")) {
			try {
				points = parseCSV(data);

				// Calculate centroid
				let sumX = 0;
				let sumY = 0;
				for (let i = 0; i < points.length; i++) {
					sumX += points[i].startXLocation;
					sumY += points[i].startYLocation;
				}
				centroidX = sumX / points.length;
				centroidY = sumY / points.length;

				// Recalculate contours and triangles
				const result = recalculateContours(points, deltaX, deltaY);
				contourLinesArray = result.contourLinesArray;
				directionArrows = result.directionArrows;
				const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
				drawData(points, selectedHole);
				countPoints = points.length;
			} catch (error) {
				console.error("Error during CSV handling:", error);
				fileFormatPopup(error);
			}
		}
	};

	reader.readAsText(file);
	debouncedUpdateTreeView(); // Use debounced version
}

let randomHex = Math.floor(Math.random() * 16777215).toString(16);

// DUPLICATE ID DETECTION AND RESOLUTION SYSTEM
// Enhanced duplicate checking that handles all ID formats
function checkAndResolveDuplicateHoleIDs(points, actionType = "import") {
	const duplicateReport = {
		hasDuplicates: false,
		duplicates: [],
		resolved: [],
		errors: []
	};

	// Group holes by entity name
	const entitiesMap = new Map();

	points.forEach((hole, index) => {
		if (!entitiesMap.has(hole.entityName)) {
			entitiesMap.set(hole.entityName, []);
		}
		entitiesMap.get(hole.entityName).push({ hole, originalIndex: index });
	});

	// Check each entity for duplicate IDs
	entitiesMap.forEach((holes, entityName) => {
		const idMap = new Map();

		holes.forEach(({ hole, originalIndex }) => {
			const holeID = hole.holeID.toString(); // Convert to string for comparison

			if (idMap.has(holeID)) {
				// Duplicate found!
				duplicateReport.hasDuplicates = true;

				const existingHole = idMap.get(holeID);
				const duplicateInfo = {
					entityName,
					holeID,
					existing: { hole: existingHole.hole, index: existingHole.originalIndex },
					duplicate: { hole, index: originalIndex }
				};

				duplicateReport.duplicates.push(duplicateInfo);
			} else {
				idMap.set(holeID, { hole, originalIndex });
			}
		});
	});

	// If duplicates found, resolve them
	if (duplicateReport.hasDuplicates) {
		console.warn("🚨 DUPLICATE HOLE IDs DETECTED:", duplicateReport.duplicates.length, "conflicts found");

		// Show user dialog for resolution strategy
		const resolution = showDuplicateResolutionDialog(duplicateReport, actionType);

		switch (resolution.strategy) {
			case "auto-renumber":
				resolveDuplicatesAutoRenumber(points, duplicateReport);
				break;
			case "keep-first":
				resolveDuplicatesKeepFirst(points, duplicateReport);
				break;
			case "keep-last":
				resolveDuplicatesKeepLast(points, duplicateReport);
				break;
			case "manual":
				// Let user manually resolve - return for manual handling
				return duplicateReport;
			case "abort":
				throw new Error("Import aborted due to duplicate hole IDs");
		}
	}

	return duplicateReport;
}

//Keep this function as it is, it is used to show the duplicate resolution dialog
function showDuplicateResolutionDialog(duplicateReport, actionType) {
	const duplicateCount = duplicateReport.duplicates.length;
	const entitiesAffected = [...new Set(duplicateReport.duplicates.map((d) => d.entityName))];

	let message = "🚨 CRITICAL: Duplicate Hole IDs Detected!\n\n";
	message += "Found " + duplicateCount + " duplicate hole ID conflicts\n";
	message += "Affected blasts: " + entitiesAffected.join(", ") + "\n\n";
	message += "Duplicate holes can cause data corruption and calculation errors.\n\n";
	message += "Resolution options:\n";
	message += "1. AUTO-RENUMBER: Auto-assign new unique IDs\n";
	message += "2. KEEP FIRST: Remove duplicate holes, keep original\n";
	message += "3. KEEP LAST: Remove original holes, keep duplicates\n";
	message += "4. ABORT: Cancel " + actionType + " operation\n\n";
	message += "Choose resolution (1-4):";

	const choice = prompt(message);

	switch (choice) {
		case "1":
			return { strategy: "auto-renumber" };
		case "2":
			return { strategy: "keep-first" };
		case "3":
			return { strategy: "keep-last" };
		case "4":
		case null:
			return { strategy: "abort" };
		default:
			alert("Invalid choice. Aborting operation.");
			return { strategy: "abort" };
	}
}

// Enhanced auto-renumbering that handles all ID formats
function resolveDuplicatesAutoRenumber(points, duplicateReport) {
	// For each entity, analyze existing ID patterns and generate appropriate new IDs
	const entitiesMap = new Map();

	// Group points by entity and analyze ID patterns
	points.forEach((hole) => {
		if (!entitiesMap.has(hole.entityName)) {
			entitiesMap.set(hole.entityName, {
				holes: [],
				numericIDs: [],
				alphaIDs: [],
				maxNumeric: 0,
				maxAlphaRow: "A",
				maxAlphaNum: 0
			});
		}
		const entity = entitiesMap.get(hole.entityName);
		entity.holes.push(hole);

		const holeID = hole.holeID.toString();

		// Check if it's purely numeric
		const numericMatch = holeID.match(/^(\d+)$/);
		if (numericMatch) {
			const num = parseInt(numericMatch[1]);
			entity.numericIDs.push(num);
			entity.maxNumeric = Math.max(entity.maxNumeric, num);
		}
		// Check if it's alphanumeric (like A1, B2, AA1, etc.)
		else {
			const alphaMatch = holeID.match(/^([A-Z]+)(\d+)$/);
			if (alphaMatch) {
				const letters = alphaMatch[1];
				const number = parseInt(alphaMatch[2]);
				entity.alphaIDs.push({ letters, number, full: holeID });

				// Track highest letter combination and number
				if (letters.localeCompare(entity.maxAlphaRow) > 0) {
					entity.maxAlphaRow = letters;
					entity.maxAlphaNum = number;
				} else if (letters === entity.maxAlphaRow) {
					entity.maxAlphaNum = Math.max(entity.maxAlphaNum, number);
				}
			}
		}
	});

	// Renumber duplicates using appropriate format
	duplicateReport.duplicates.forEach((duplicate) => {
		const entity = entitiesMap.get(duplicate.entityName);
		const oldID = duplicate.duplicate.hole.holeID.toString();
		let newID;

		// Determine what format to use for the new ID
		const numericMatch = oldID.match(/^(\d+)$/);
		const alphaMatch = oldID.match(/^([A-Z]+)(\d+)$/);

		if (numericMatch) {
			// Generate new numeric ID
			newID = (++entity.maxNumeric).toString();
		} else if (alphaMatch) {
			// Generate new alphanumeric ID
			entity.maxAlphaNum++;
			newID = entity.maxAlphaRow + entity.maxAlphaNum;
		} else {
			// Fallback: use numeric
			newID = (++entity.maxNumeric).toString();
		}

		// Update the hole ID
		duplicate.duplicate.hole.holeID = newID;

		// Update fromHoleID references if they point to this hole
		points.forEach((hole) => {
			if (hole.fromHoleID === duplicate.entityName + ":::" + oldID) {
				hole.fromHoleID = duplicate.entityName + ":::" + newID;
			}
		});

		duplicateReport.resolved.push({
			entityName: duplicate.entityName,
			oldID: oldID,
			newID: newID,
			action: "renumbered"
		});

		console.log("🔧 Renumbered duplicate hole:", duplicate.entityName + ":" + oldID, "→", newID);
	});
}

function resolveDuplicatesKeepFirst(points, duplicateReport) {
	// Remove duplicate holes (keep the first occurrence)
	const indicesToRemove = [];

	duplicateReport.duplicates.forEach((duplicate) => {
		indicesToRemove.push(duplicate.duplicate.index);

		duplicateReport.resolved.push({
			entityName: duplicate.entityName,
			holeID: duplicate.holeID,
			action: "removed-duplicate"
		});

		console.log("🗑️ Removed duplicate hole:", duplicate.entityName + ":" + duplicate.holeID);
	});

	// Remove holes in reverse order to maintain indices
	indicesToRemove
		.sort((a, b) => b - a)
		.forEach((index) => {
			points.splice(index, 1);
		});
}

function resolveDuplicatesKeepLast(points, duplicateReport) {
	// Remove original holes (keep the duplicate/last occurrence)
	const indicesToRemove = [];

	duplicateReport.duplicates.forEach((duplicate) => {
		indicesToRemove.push(duplicate.existing.index);

		duplicateReport.resolved.push({
			entityName: duplicate.entityName,
			holeID: duplicate.holeID,
			action: "removed-original"
		});

		console.log("🗑️ Removed original hole:", duplicate.entityName + ":" + duplicate.holeID);
	});

	// Remove holes in reverse order to maintain indices
	indicesToRemove
		.sort((a, b) => b - a)
		.forEach((index) => {
			points.splice(index, 1);
		});
}

// Enhanced unique ID validation for any format
function validateUniqueHoleID(entityName, holeID, excludeHole = null) {
	const holeIDStr = holeID.toString();

	const existing = points.find((hole) => hole.entityName === entityName && hole.holeID.toString() === holeIDStr && hole !== excludeHole);

	if (existing) {
		const newID = generateUniqueHoleID(entityName, holeIDStr);
		console.warn("🚨 Duplicate hole ID detected:", entityName + ":" + holeIDStr, "→ Auto-assigned:", newID);
		return newID;
	}

	return holeIDStr;
}
// Enhanced unique ID generation for any format
function generateUniqueHoleID(entityName, baseID) {
	const baseIDStr = baseID.toString();

	// Analyze existing IDs in this entity
	const existingIDs = new Set();
	let maxNumeric = 0;
	let maxAlphaRow = "A";
	let maxAlphaNum = 0;

	points.forEach((hole) => {
		if (hole.entityName === entityName) {
			const holeID = hole.holeID.toString();
			existingIDs.add(holeID);

			// Track numeric IDs
			const numericMatch = holeID.match(/^(\d+)$/);
			if (numericMatch) {
				maxNumeric = Math.max(maxNumeric, parseInt(numericMatch[1]));
			}

			// Track alphanumeric IDs
			const alphaMatch = holeID.match(/^([A-Z]+)(\d+)$/);
			if (alphaMatch) {
				const letters = alphaMatch[1];
				const number = parseInt(alphaMatch[2]);

				if (letters.localeCompare(maxAlphaRow) > 0) {
					maxAlphaRow = letters;
					maxAlphaNum = number;
				} else if (letters === maxAlphaRow) {
					maxAlphaNum = Math.max(maxAlphaNum, number);
				}
			}
		}
	});

	// Determine format of base ID and generate appropriate new ID
	const numericMatch = baseIDStr.match(/^(\d+)$/);
	const alphaMatch = baseIDStr.match(/^([A-Z]+)(\d+)$/);

	if (numericMatch) {
		// Generate next numeric ID
		return (maxNumeric + 1).toString();
	} else if (alphaMatch) {
		// Generate next alphanumeric ID in same pattern
		const letters = alphaMatch[1];
		let newID;

		// Try incrementing the number first
		for (let num = 1; num <= maxAlphaNum + 10; num++) {
			newID = letters + num;
			if (!existingIDs.has(newID)) {
				return newID;
			}
		}

		// If that fails, increment the letter
		const nextLetter = incrementLetter(letters);
		return nextLetter + "1";
	} else {
		// Fallback: generate numeric ID
		return (maxNumeric + 1).toString();
	}
}

function parseCSV(data) {
	if (!points || !Array.isArray(points)) points = [];
	randomHex = Math.floor(Math.random() * 16777215).toString(16);

	const lines = data.split("\n");
	let minX = Infinity;
	let minY = Infinity;

	const supportedLengths = [4, 7, 9, 12, 14, 20, 25, 30];
	const warnings = [];

	let blastNameValue = "BLAST_" + randomHex;

	for (let i = 0; i < lines.length; i++) {
		const rawLine = lines[i].trim();
		if (rawLine === "") continue;

		const values = rawLine.split(",");
		const len = values.length;

		if (values.every((v) => v.trim() === "")) continue;
		if (!supportedLengths.includes(len)) {
			warnings.push("Line " + (i + 1) + " skipped: unsupported column count (" + len + ")");
			continue;
		}

		let entityName = blastNameValue;
		let holeID, startX, startY, startZ, endX, endY, endZ;
		let holeDiameter = 0,
			holeType = "Undefined",
			fromHoleID = "",
			delay = 0,
			color = "red";
		let measuredLength = 0,
			measuredLengthTimeStamp = "09/05/1975 00:00:00";
		let measuredMass = 0,
			measuredMassTimeStamp = "09/05/1975 00:00:00";
		let measuredComment = "None",
			measuredCommentTimeStamp = "09/05/1975 00:00:00";
		let subdrill = 0;

		if (len === 30) {
			entityName = values[0];
			holeID = values[2];
			startX = parseFloat(values[3]);
			startY = parseFloat(values[4]);
			startZ = parseFloat(values[5]);
			endX = parseFloat(values[6]);
			endY = parseFloat(values[7]);
			endZ = parseFloat(values[8]);
			// Note: We'll ignore the saved calculated values and recalculate using calculateHoleGeometry
			subdrill = parseFloat(values[12]);
			holeDiameter = parseFloat(values[15]);
			holeType = values[16];
			fromHoleID = values[17];
			delay = parseInt(values[18]);
			color = values[19].replace(/\r$/, "");
			measuredLength = parseFloat(values[24]);
			measuredLengthTimeStamp = values[25];
			measuredMass = parseFloat(values[26]);
			measuredMassTimeStamp = values[27];
			measuredComment = values[28];
			measuredCommentTimeStamp = values[29];
		} else if (len === 14) {
			entityName = values[0];
			holeID = values[2];
			startX = parseFloat(values[3]);
			startY = parseFloat(values[4]);
			startZ = parseFloat(values[5]);
			endX = parseFloat(values[6]);
			endY = parseFloat(values[7]);
			endZ = parseFloat(values[8]);
			holeDiameter = parseFloat(values[9]);
			holeType = values[10];
			fromHoleID = values[11];
			delay = parseInt(values[12]);
			color = values[13].replace(/\r$/, "");
		} else if (len === 12) {
			holeID = values[0];
			startX = parseFloat(values[1]);
			startY = parseFloat(values[2]);
			startZ = parseFloat(values[3]);
			endX = parseFloat(values[4]);
			endY = parseFloat(values[5]);
			endZ = parseFloat(values[6]);
			holeDiameter = parseFloat(values[7]);
			holeType = values[8];
			fromHoleID = values[9].includes(":::") ? values[9] : blastNameValue + ":::" + values[9];
			delay = parseInt(values[10]);
			color = values[11].replace(/\r$/, "");
		} else if (len === 9) {
			holeID = values[0];
			startX = parseFloat(values[1]);
			startY = parseFloat(values[2]);
			startZ = parseFloat(values[3]);
			endX = parseFloat(values[4]);
			endY = parseFloat(values[5]);
			endZ = parseFloat(values[6]);
			holeDiameter = parseFloat(values[7]);
			holeType = values[8];
			fromHoleID = blastNameValue + ":::" + holeID;
		} else if (len === 7) {
			holeID = values[0];
			startX = parseFloat(values[1]);
			startY = parseFloat(values[2]);
			startZ = parseFloat(values[3]);
			endX = parseFloat(values[4]);
			endY = parseFloat(values[5]);
			endZ = parseFloat(values[6]);
			fromHoleID = blastNameValue + ":::" + holeID;
		} else if (len === 4) {
			holeID = values[0];
			startX = parseFloat(values[1]);
			startY = parseFloat(values[2]);
			startZ = parseFloat(values[3]);
			endX = startX;
			endY = startY;
			endZ = startZ;
			fromHoleID = blastNameValue + ":::" + holeID;
		}

		// Calculate basic hole properties using the same logic as calculateHoleGeometry
		const dx = endX - startX;
		const dy = endY - startY;
		const dz = endZ - startZ;
		const length = Math.sqrt(dx * dx + dy * dy + dz * dz);

		const epsilon = 1e-10;
		const magnitude = Math.sqrt(dx * dx + dy * dy + dz * dz);
		const dotProduct = dz;
		const normalizedDotProduct = magnitude < epsilon ? 0 : dotProduct / magnitude;

		const angle = 180 - Math.acos(normalizedDotProduct) * (180 / Math.PI);
		const bearing = (450 - Math.atan2(dy, dx) * (180 / Math.PI)) % 360;

		if (!isNaN(startX) && !isNaN(startY) && !isNaN(startZ) && !isNaN(endX) && !isNaN(endY) && !isNaN(endZ)) {
			// Create the hole object with initial values
			const hole = {
				entityName,
				entityType: "hole",
				holeID,
				startXLocation: startX,
				startYLocation: startY,
				startZLocation: startZ,
				endXLocation: endX,
				endYLocation: endY,
				endZLocation: endZ,
				gradeXLocation: endX, // Will be recalculated
				gradeYLocation: endY, // Will be recalculated
				gradeZLocation: endZ, // Will be recalculated
				subdrillAmount: subdrill,
				subdrillLength: 0, // Will be recalculated
				benchHeight: 0, // Will be recalculated
				holeDiameter,
				holeType,
				fromHoleID,
				timingDelayMilliseconds: delay,
				colorHexDecimal: color,
				holeLengthCalculated: length,
				holeAngle: angle,
				holeBearing: bearing,
				measuredLength,
				measuredLengthTimeStamp,
				measuredMass,
				measuredMassTimeStamp,
				measuredComment,
				measuredCommentTimeStamp
			};

			// Add to points array first
			points.push(hole);

			// Calculate proper benchHeight and grade positions for ALL holes (not just when subdrill !== 0)
			if (len !== 4) {
				// Only skip for 4-point holes (which are just collar coordinates)
				const cosAngle = Math.cos(angle * (Math.PI / 180));
				if (Math.abs(cosAngle) > 1e-9) {
					// Calculate benchHeight from the Z difference minus subdrill
					hole.benchHeight = Math.abs(startZ - endZ) - subdrill;

					// Use calculateHoleGeometry to recalculate all derived positions
					// First recalculate based on the existing length to set up grade positions
					calculateHoleGeometry(hole, length, 1); // Mode 1 = length recalculation

					// If there's subdrill, also update that
					if (subdrill !== 0) {
						calculateHoleGeometry(hole, subdrill, 8); // Mode 8 = subdrill recalculation
					}
				} else {
					// For horizontal holes, handle specially
					hole.benchHeight = Math.abs(startZ - endZ);
					hole.gradeXLocation = endX;
					hole.gradeYLocation = endY;
					hole.gradeZLocation = endZ - subdrill;
				}
			}

			minX = Math.min(minX, startX);
			minY = Math.min(minY, startY);
		}
	}

	if (warnings.length > 0) {
		console.warn("parseCSV warnings:\n" + warnings.join("\n"));
	}
	// CRITICAL: Check for duplicate hole IDs after parsing
	const duplicateCheck = checkAndResolveDuplicateHoleIDs(points, "CSV import");

	if (duplicateCheck.hasDuplicates) {
		console.log("Resolved", duplicateCheck.resolved.length, "duplicate hole ID conflicts");

		// Show summary to user
		let summary = "Duplicate hole IDs resolved:\n\n";
		duplicateCheck.resolved.forEach((resolution) => {
			if (resolution.action === "renumbered") {
				summary += "• " + resolution.entityName + ":" + resolution.oldID + " → " + resolution.newID + "\n";
			} else {
				summary += "• " + resolution.entityName + ":" + resolution.holeID + " (" + resolution.action + ")\n";
			}
		});

		alert(summary);
	}
	holeTimes = calculateTimes(points);
	drawData(points, selectedHole);
	return points;
}

async function handleDXFUpload(event) {
	const file = event.target.files[0];
	if (!file) return;

	const reader = new FileReader();
	reader.onload = function (e) {
		const dxfContent = e.target.result;
		try {
			const parser = new DxfParser();
			const dxf = parser.parseSync(dxfContent);
			parseDXFtoKadMaps(dxf);
		} catch (error) {
			console.error("DXF parsing failed:", error);
			alert("Error parsing DXF file.");
		}
	};
	reader.readAsText(file);
	debouncedUpdateTreeView(); // Use debounced version
}
// Add this helper function to generate unique entity names
function getUniqueEntityName(baseName, entityType) {
	// If baseName doesn't exist in the map, use it as-is
	if (!allKADDrawingsMap.has(baseName)) {
		return baseName;
	}

	// Otherwise, increment until we find a unique name
	let counter = 1;
	let uniqueName = baseName + "_" + counter;

	while (allKADDrawingsMap.has(uniqueName)) {
		counter++;
		uniqueName = baseName + "_" + counter;
	}

	console.log("⚠️ Entity name collision avoided: '" + baseName + "' → '" + uniqueName + "'");
	return uniqueName;
}

function parseDXFtoKadMaps(dxf) {
	// 1) seed counters so we never collide with existing entries
	var counts = { point: 0, line: 0, poly: 0, circle: 0, text: 0 };

	// 2) kirra.js centroid offsets
	var offsetX = 0; //centroidX || 0;
	var offsetY = 0; //centroidY || 0;

	// 3) raw DXF color or bright-red fallback, but return as "#RRGGBB"
	function getColor(idx) {
		// pick the DXF color (decimal) or default grey
		var dec = idx != null && idx >= 0 ? idx : 0x777777;
		// convert to hex, pad to 6 digits, uppercase if you like
		var hex = dec.toString(16).padStart(6, "0").toUpperCase();
		return "#" + hex;
	}

	// 4) iterate over every entity
	dxf.entities.forEach(function (ent) {
		var t = ent.type.toUpperCase();
		var color = getColor(ent.color);

		// POINT or VERTEX
		if (t === "POINT" || t === "VERTEX") {
			var x = (ent.position && ent.position.x != null ? ent.position.x : ent.x) - offsetX;
			var y = (ent.position && ent.position.y != null ? ent.position.y : ent.y) - offsetY;
			var z = (ent.position && ent.position.z != null ? ent.position.z : ent.z) || 0;
			if (x == null || y == null) {
				console.warn("POINT/VERTEX missing coords:", ent);
			} else {
				// FIXED: Use unique name generation
				var baseName = ent.name || "pointEntity_" + ++counts.point;
				var name = getUniqueEntityName(baseName, "point");

				allKADDrawingsMap.set(name, {
					entityName: name,
					entityType: "point",
					data: [
						{
							entityName: name,
							entityType: "point",
							pointID: 1,
							pointXLocation: x,
							pointYLocation: y,
							pointZLocation: z,
							color: color
						}
					]
				});
			}
		}
		// INSERT → single point
		else if (t === "INSERT") {
			if (!ent.position) {
				console.warn("INSERT missing position:", ent);
			} else {
				var xi = ent.position.x - offsetX;
				var yi = ent.position.y - offsetY;
				var zi = ent.position.z || 0;

				// FIXED: Use unique name generation
				var baseNameI = ent.name || "pointEntity_" + ++counts.point;
				var nameI = getUniqueEntityName(baseNameI, "point");

				allKADDrawingsMap.set(nameI, {
					entityName: nameI,
					entityType: "point",
					data: [
						{
							entityName: nameI,
							entityType: "point",
							pointID: 1,
							pointXLocation: xi,
							pointYLocation: yi,
							pointZLocation: zi,
							color: color
						}
					]
				});
			}
		} else if (t === "LINE") {
			var v = ent.vertices;
			if (!v || v.length < 2) {
				console.warn("LINE missing vertices:", ent);
			} else {
				// FIXED: Use unique name generation
				var baseNameL = ent.name || "lineEntity_" + ++counts.line;
				var nameL = getUniqueEntityName(baseNameL, "line");

				allKADDrawingsMap.set(nameL, {
					entityName: nameL,
					entityType: "line",
					data: [
						{
							entityName: nameL,
							entityType: "line",
							pointID: 1,
							pointXLocation: v[0].x - offsetX,
							pointYLocation: v[0].y - offsetY,
							pointZLocation: v[0].z || 0,
							lineWidth: 1,
							color: color,
							closed: false
						},
						{
							entityName: nameL,
							entityType: "line",
							pointID: 2,
							pointXLocation: v[1].x - offsetX,
							pointYLocation: v[1].y - offsetY,
							pointZLocation: v[1].z || 0,
							lineWidth: 1,
							color: color,
							closed: false
						}
					]
				});
			}
		}
		// LWPOLYLINE or POLYLINE → poly (closed) or line (open)
		else if (t === "LWPOLYLINE" || t === "POLYLINE") {
			var verts = ent.vertices || ent.controlPoints || [];
			if (!verts.length) {
				console.warn("POLYLINE missing vertices:", ent);
			} else {
				var isClosed = !!(ent.closed || ent.shape);
				var entityType = isClosed ? "poly" : "line";
				var nameP;
				if (isClosed) {
					// FIXED: Use unique name generation
					var baseNameP = ent.name || "polyEntity_" + ++counts.poly;
					nameP = getUniqueEntityName(baseNameP, "poly");
				} else {
					// FIXED: Use unique name generation
					var baseNameP = ent.name || "lineEntity_" + ++counts.line;
					nameP = getUniqueEntityName(baseNameP, "line");
				}

				allKADDrawingsMap.set(nameP, {
					entityName: nameP,
					entityType: entityType,
					data: []
				});
				var dataP = allKADDrawingsMap.get(nameP).data;
				verts.forEach(function (v, i) {
					dataP.push({
						entityName: nameP,
						entityType: entityType,
						pointID: i + 1,
						pointXLocation: v.x - offsetX,
						pointYLocation: v.y - offsetY,
						pointZLocation: v.z || 0,
						lineWidth: 1,
						color: color,
						closed: false
					});
				});
				// close if flagged
				if (isClosed) {
					var v0p = verts[0];
					dataP.push({
						entityName: nameP,
						entityType: entityType,
						pointID: dataP.length + 1,
						pointXLocation: v0p.x - offsetX,
						pointYLocation: v0p.y - offsetY,
						pointZLocation: v0p.z || 0,
						lineWidth: 1,
						color: color,
						closed: true
					});
				}
			}
		}
		// CIRCLE
		else if (t === "CIRCLE") {
			if (!ent.center) {
				console.warn("CIRCLE missing center:", ent);
			} else {
				// FIXED: Use unique name generation
				var baseNameC = ent.name || "circleEntity_" + ++counts.circle;
				var nameC = getUniqueEntityName(baseNameC, "circle");

				allKADDrawingsMap.set(nameC, {
					entityName: nameC,
					entityType: "circle",
					data: [
						{
							entityName: nameC,
							entityType: "circle",
							pointID: 1,
							pointXLocation: ent.center.x - offsetX,
							pointYLocation: ent.center.y - offsetY,
							pointZLocation: ent.center.z || 0,
							radius: ent.radius,
							lineWidth: 1,
							color: color
						}
					]
				});
			}
		}
		// ELLIPSE sampled as closed polygon
		else if (t === "ELLIPSE") {
			if (!ent.center) {
				console.warn("ELLIPSE missing center:", ent);
			} else {
				// FIXED: Use unique name generation
				var baseNameE = ent.name || "polyEntity_" + ++counts.poly;
				var nameE = getUniqueEntityName(baseNameE, "poly");

				allKADDrawingsMap.set(nameE, {
					entityName: nameE,
					entityType: "poly",
					data: []
				});
				var dataE = allKADDrawingsMap.get(nameE).data;
				var segs = 64;
				for (var i = 0; i < segs; i++) {
					var ang = ent.startAngle + (ent.endAngle - ent.startAngle) * (i / (segs - 1));
					var px = ent.center.x + ent.xRadius * Math.cos(ang) - offsetX;
					var py = ent.center.y + ent.yRadius * Math.sin(ang) - offsetY;
					var closed = true;
					dataE.push({
						entityName: nameE,
						entityType: "poly",
						pointID: i + 1,
						pointXLocation: px,
						pointYLocation: py,
						pointZLocation: ent.center.z || 0,
						lineWidth: 1,
						color: color,
						closed: closed
					});
				}
				// close loop
				dataE.push(Object.assign({}, dataE[0], { pointID: dataE.length + 1 }));
			}
		}
		// TEXT or MTEXT
		else if (t === "TEXT" || t === "MTEXT") {
			var pos = ent.startPoint || ent.position;
			if (!pos) {
				console.warn("TEXT missing position:", ent);
			} else {
				// FIXED: Use unique name generation
				var baseNameT = ent.name || "textEntity_" + ++counts.text;
				var nameT = getUniqueEntityName(baseNameT, "text");

				allKADDrawingsMap.set(nameT, {
					entityName: nameT,
					entityType: "text",
					data: [
						{
							entityName: nameT,
							entityType: "text",
							pointID: 1,
							pointXLocation: pos.x - offsetX,
							pointYLocation: pos.y - offsetY,
							pointZLocation: pos.z || 0,
							text: ent.text,
							color: color
						}
					]
				});
			}
		}
		// anything else → skip
		else {
			console.warn("Unsupported DXF entity:", ent.type);
		}
	});

	console.log("Appended to KAD maps:", { drawings: allKADDrawingsMap });
	// Trigger a debounced save to persist the newly loaded data
	debouncedSaveKAD();
	// Frame the newly loaded data correctly on the canvas
	zoomToFitAll();
}

function handleGeotiffUpload(event) {
	const file = event.target.files[0];
	if (file) {
		loadGeoTIFF(file);
		updateStatusMessage("Loading geotiff: " + file.name);
	}
	debouncedUpdateTreeView(); // Use debounced version
}

function handleSurfaceUpload(event) {
	const file = event.target.files[0];
	if (!file) return;

	updateStatusMessage("Loading surface: " + file.name);

	// If it's an OBJ file, check for MTL first
	if (file.name.toLowerCase().endsWith(".obj")) {
		loadOBJWithMTL(file, event.target.files);
	} else {
		loadPointCloudFile(file);
	}
	debouncedUpdateTreeView(); // Use debounced version
}

// ENHANCED: Update OBJ loading to pass texture data
async function loadOBJWithMTL(objFile, allFiles) {
	try {
		const objContent = await readFileAsText(objFile);
		const baseName = objFile.name.replace(/\.obj$/i, "");

		// Look for MTL file
		let mtlContent = null;
		for (const file of allFiles) {
			if (file.name.toLowerCase() === baseName.toLowerCase() + ".mtl") {
				mtlContent = await readFileAsText(file);
				updateStatusMessage("Found material file: " + file.name);
				break;
			}
		}

		// Parse OBJ (with or without MTL)
		const objData = parseOBJFile(objContent, mtlContent);

		// Create surface using existing method
		if (objData.points && objData.points.length > 0) {
			if (objData.points.length > 10000) {
				showDecimationWarning(objData.points, objFile.name, objData);
			} else {
				processSurfacePoints(objData.points, objFile.name, objData);
			}
		}
	} catch (error) {
		// If anything fails, use normal OBJ loading
		loadPointCloudFile(objFile);
	}
}
async function handleMeasuredUpload(event) {
	// Measured data format: EntityName,EntityType,PointID,MeasuredLength,MeasuredLengthTimeStamp,MeasuredMass,MeasuredMassTimeStamp,MeasuredComment,MeasuredCommentTimeStamp

	if (!event.target.files[0].name.endsWith(".csv")) {
		fileFormatPopup("1");
		return;
	}
	if (points.length === 0) {
		fileFormatPopup("2");
		return;
	}

	const file = event.target.files[0];
	if (!file) return;

	const reader = new FileReader();
	reader.onload = function (e) {
		const fileContent = e.target.result;
		const lines = fileContent.split("\n").filter((line) => line.trim().length > 0);

		// Skip header if present
		const header = lines[0].toLowerCase();
		const startIndex = header.includes("entityname") ? 1 : 0;

		for (let i = startIndex; i < lines.length; i++) {
			const cols = lines[i].split(",");
			if (cols.length < 9) continue; // Skip malformed lines

			const entityName = cols[0].trim();
			const holeID = cols[2].trim();

			// Find matching point
			const point = points.find((p) => p.entityName === entityName && p.holeID === holeID);
			if (point) {
				point.measuredLength = parseFloat(cols[3]) || 0;
				point.measuredLengthTimeStamp = cols[4].trim() || "09/05/1975 00:00:00";
				point.measuredMass = parseFloat(cols[5]) || 0;
				point.measuredMassTimeStamp = cols[6].trim() || "09/05/1975 00:00:00";
				point.measuredComment = cols[7].trim();
				point.measuredCommentTimeStamp = cols[8].trim() || "09/05/1975 00:00:00";
			}
		}

		drawData(points, selectedHole); // Redraw to reflect updated values
	};

	reader.readAsText(file);
	debouncedUpdateTreeView(); // Use debounced version
}

function fileFormatPopup(error) {
	console.log("File format error");
	Swal.fire({
		title: `Error ${error}`,
		showCancelButton: false,
		confirmButtonText: "Ok",
		icon: "error",
		html: `
		  <label class="labelWhite18">This could be related to the data structure or file.</label><br>
		  <label class="labelWhite18">Or there are NO blasts or Holes yet, if so ignore.</label><br>
		  <label class="labelWhite18">Only files with 4, 7, 9, and 14 columns are Accepted</label><br>
		  <label class="labelWhite12">Column Order and Types are important.</label><br>
		  `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		}
	}).then((result) => {
		if (result.isConfirmed) {
			//console.log("Confirmed");
			return; // Exit the function
		}
	});
	return; // Exit the function
}
// Create a Map for each entity type to store entities by name

let allKADDrawingsMap = new Map();

function parseKADFile(fileData) {
	const dataLines = fileData.split("\n");
	let minX = Infinity;
	let minY = Infinity;
	let pointID, pointXLocation, pointYLocation, pointZLocation, text, radius, color, closed;

	// Parse the kad file data
	for (let i = 0; i < dataLines.length; i++) {
		const row = dataLines[i].split(",");
		const entityName = row[0];
		const entityType = row[1];

		// Parsing logic for different entity types
		switch (entityType) {
			case "point":
				if (!allKADDrawingsMap.has(entityName)) {
					allKADDrawingsMap.set(entityName, {
						entityName: entityName,
						entityType: "point", // Keep original entityType for identification
						data: []
					});
				}
				pointID = row[2]; // Id of the point
				pointXLocation = parseFloat(row[3]); // X value of the point
				pointYLocation = parseFloat(row[4]); // Y value of the point
				pointZLocation = parseFloat(row[5]); // Z value of the point
				pointDiameter = parseFloat(row[6]); // Diameter of the point
				color = (row[7] || "#FF0000").replace(/\r$/, ""); // Stroke color of the point - default to red if missing

				allKADDrawingsMap.get(entityName).data.push({
					pointID: pointID,
					pointXLocation: pointXLocation,
					pointYLocation: pointYLocation,
					pointZLocation: pointZLocation,
					pointDiameter: pointDiameter,
					color: color,
					connected: false, // Points are never connected
					closed: false // Points are never closed
				});
				break;
			case "poly":
				// Create an empty entity object if it doesn't exist
				if (!allKADDrawingsMap.has(entityName)) {
					allKADDrawingsMap.set(entityName, {
						entityName: entityName, // Store the entityName
						entityType: entityType,
						data: []
					});
				}
				pointID = row[2]; // Id of the point
				pointXLocation = parseFloat(row[3]); // X value of the point
				pointYLocation = parseFloat(row[4]); // Y value of the point
				pointZLocation = parseFloat(row[5]); // Z value of the point
				lineWidth = parseFloat(row[6]); // Width of the line
				color = (row[7] || "#FF0000").replace(/\r$/, ""); // color - default to red if missing
				closed = String(row[8]).trim().toLowerCase() === "true";
				allKADDrawingsMap.get(entityName).data.push({
					entityName: entityName,
					entityType: entityType,
					pointID: pointID,
					pointXLocation: pointXLocation,
					pointYLocation: pointYLocation,
					pointZLocation: pointZLocation,
					lineWidth: lineWidth,
					color: color,
					closed: closed
				});
				break;
			case "line":
				// Put lines into allKADDrawingsMap instead of allKADDrawingsMap
				if (!allKADDrawingsMap.has(entityName)) {
					allKADDrawingsMap.set(entityName, {
						entityName: entityName, // Store the entityName
						entityType: "poly", // Lines are now poly entities
						data: []
					});
				}
				pointID = row[2]; // Id of the point
				pointXLocation = parseFloat(row[3]); // X value of the point
				pointYLocation = parseFloat(row[4]); // Y value of the point
				pointZLocation = parseFloat(row[5]); // Z value of the point
				lineWidth = parseFloat(row[6]); // Width of the line
				color = (row[7] || "#FF0000").replace(/\r$/, ""); // color - default to red if missing
				allKADDrawingsMap.get(entityName).data.push({
					entityName: entityName,
					entityType: "poly", // Changed from "line" to "poly"
					pointID: pointID,
					pointXLocation: pointXLocation,
					pointYLocation: pointYLocation,
					pointZLocation: pointZLocation,
					lineWidth: lineWidth,
					color: color,
					closed: false // Lines are open polygons
				});
				break;
			case "circle":
				// Put circles into allKADDrawingsMap instead of kadCirclesMap
				if (!allKADDrawingsMap.has(entityName)) {
					allKADDrawingsMap.set(entityName, {
						entityName: entityName,
						entityType: "circle", // Keep original entityType for identification
						data: []
					});
				}
				pointID = row[2]; // Id of the point
				pointXLocation = parseFloat(row[3]); // X value of the point
				pointYLocation = parseFloat(row[4]); // Y value of the point
				pointZLocation = parseFloat(row[5]); // Z value of the point
				radius = parseFloat(row[6]); // Radius of the circle in meters
				lineWidth = parseFloat(row[7]) || 1; // Width of the line - default to 1 if missing
				color = (row[8] || "#FF0000").replace(/\r$/, ""); // color - default to red if missing

				allKADDrawingsMap.get(entityName).data.push({
					entityName: entityName,
					entityType: "circle",
					pointID: pointID,
					pointXLocation: pointXLocation,
					pointYLocation: pointYLocation,
					pointZLocation: pointZLocation,
					radius: radius,
					lineWidth: lineWidth,
					color: color
				});
				break;

			case "text":
				// Put text into allKADDrawingsMap instead of kadTextsMap
				if (!allKADDrawingsMap.has(entityName)) {
					allKADDrawingsMap.set(entityName, {
						entityName: entityName,
						entityType: "text",
						data: []
					});
				}
				pointID = row[2];
				pointXLocation = parseFloat(row[3]);
				pointYLocation = parseFloat(row[4]);
				pointZLocation = parseFloat(row[5]);
				text = row[6] || ""; // Default to empty string if missing
				color = (row[7] || "#FF0000").replace(/\r$/, ""); // Default to black if missing

				allKADDrawingsMap.get(entityName).data.push({
					entityName: entityName,
					entityType: "text",
					pointID: pointID,
					pointXLocation: pointXLocation,
					pointYLocation: pointYLocation,
					pointZLocation: pointZLocation,
					text: text,
					color: color
				});
				break;

			default:
				break;
		}
	}
	// Simplified centroid calculation using only the unified maps
	let sumX = 0;
	let sumY = 0;
	let count = 0;

	// Points map (if still using separately)
	for (let [key, value] of allKADDrawingsMap) {
		for (let i = 0; i < value.data.length; i++) {
			sumX += value.data[i].pointXLocation;
			sumY += value.data[i].pointYLocation;
			count++;
		}
	}

	// Unified polygon map (contains lines, polygons, circles, text)
	for (let [key, value] of allKADDrawingsMap) {
		for (let i = 0; i < value.data.length; i++) {
			sumX += value.data[i].pointXLocation;
			sumY += value.data[i].pointYLocation;
			count++;
		}
	}

	centroidX = sumX / count;
	centroidY = sumY / count;

	console.log(allKADDrawingsMap);
	// save to IndexedDB
	debouncedSaveKAD();
	debouncedUpdateTreeView(); // Use debounced version
}
let mapData = [allKADDrawingsMap];

function exportKADFile() {
	// First, check if we have data to export
	if (!allKADDrawingsMap || allKADDrawingsMap.size === 0) {
		alert("No data to export. Please add some drawings first.");
		return;
	}

	console.log("Exporting KAD data, map size:", allKADDrawingsMap.size);

	// Prepare the CSV content for .kad file
	let csvContentKAD = "";
	let csvContentTXT = "";

	try {
		// Directly iterate through the allKADDrawingsMap
		for (const [entityName, entityData] of allKADDrawingsMap.entries()) {
			// Log each entity we're processing
			console.log(`Processing entity: ${entityName}, type: ${entityData.entityType}`);

			if (!entityData || !entityData.entityType) {
				console.warn(`Skipping invalid entity: ${entityName}`);
				continue;
			}

			if (entityData.entityType.trim() === "point") {
				for (const point of entityData.data) {
					const csvLine = `${entityName},${entityData.entityType},${point.pointID},${point.pointXLocation},${point.pointYLocation},${point.pointZLocation},${point.pointDiameter || 1},${point.color}\n`;
					csvContentKAD += csvLine;
					csvContentTXT += csvLine;
				}
			} else if (entityData.entityType.trim() === "poly") {
				for (let i = 0; i < entityData.data.length; i++) {
					const polygon = entityData.data[i];
					const isLast = i === entityData.data.length - 1;
					const csvLine = `${entityName},${entityData.entityType},${polygon.pointID},${polygon.pointXLocation},${polygon.pointYLocation},${polygon.pointZLocation},${polygon.lineWidth},${polygon.color},${isLast ? "1" : "0"}\n`;
					csvContentKAD += csvLine;
					csvContentTXT += csvLine;
				}
			} else if (entityData.entityType.trim() === "line") {
				for (const entityLine of entityData.data) {
					const csvLine = `${entityName},${entityData.entityType},${entityLine.pointID},${entityLine.pointXLocation},${entityLine.pointYLocation},${entityLine.pointZLocation},${entityLine.lineWidth},${entityLine.color}\n`;
					csvContentKAD += csvLine;
					csvContentTXT += csvLine;
				}
			} else if (entityData.entityType.trim() === "circle") {
				for (const circle of entityData.data) {
					const csvLine = `${entityName},${entityData.entityType},${circle.pointID},${circle.pointXLocation},${circle.pointYLocation},${circle.pointZLocation},${circle.radius},${circle.lineWidth},${circle.color}\n`;
					csvContentKAD += csvLine;
					csvContentTXT += csvLine;
				}
			} else if (entityData.entityType.trim() === "text") {
				for (const text of entityData.data) {
					const csvLine = `${entityName},${entityData.entityType},${text.pointID},${text.pointXLocation},${text.pointYLocation},${text.pointZLocation},${text.text},${text.color}\n`;
					csvContentKAD += csvLine;
					csvContentTXT += csvLine;
				}
			}
		}
	} catch (error) {
		console.error("Error generating KAD export:", error);
		alert("Error exporting KAD file: " + error.message);
		return;
	}

	// If we generated any content, create and download the files
	if (csvContentKAD) {
		// Create a Blob with the CSV content for .kad file
		const blobKAD = new Blob([csvContentKAD], {
			type: "text/csv"
		});

		// Create a Blob with the CSV content for .txt file
		const blobTXT = new Blob([csvContentTXT], {
			type: "text/plain"
		});

		// Create temporary anchor elements to trigger the download for both files
		const aKAD = document.createElement("a");
		const aTXT = document.createElement("a");

		// Set the content for the anchor elements
		aKAD.href = URL.createObjectURL(blobKAD);
		aKAD.download = "KAD_EXPORT" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".kad";

		aTXT.href = URL.createObjectURL(blobTXT);
		aTXT.download = "TXT_EXPORT" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".txt";

		// Simulate clicks on both anchor elements to trigger the downloads
		aKAD.click();
		aTXT.click();

		console.log("KAD export completed successfully");
	} else {
		alert("No data to export. Please add some drawings first.");
	}
}
function getNearestNeighborDistancesByAggregation(points, mode, useToeLocation) {
	// Step 1: Compute nearest neighbor distances for each point
	const nearestDistances = points.map((pt, idx) => {
		let minDist = Infinity;
		for (let j = 0; j < points.length; j++) {
			if (j === idx) continue;
			const otherPt = points[j];

			const dx = useToeLocation ? otherPt.endXLocation - pt.endXLocation : otherPt.startXLocation - pt.startXLocation;
			const dy = useToeLocation ? otherPt.endYLocation - pt.endYLocation : otherPt.startYLocation - pt.startYLocation;
			const dist = Math.sqrt(dx * dx + dy * dy);
			if (dist < minDist) minDist = dist;
		}
		return minDist;
	});
	// Step 2: Determine the distance to use based on the mode
	let chosenDistance;
	if (mode === "min") {
		chosenDistance = Math.min(...nearestDistances);
	} else if (mode === "max") {
		chosenDistance = Math.max(...nearestDistances);
	} else if (mode === "average" || mode === "mean") {
		const sum = nearestDistances.reduce((a, b) => a + b, 0);
		chosenDistance = sum / nearestDistances.length;
	} else if (mode === "mode") {
		// Find the most common value (rounded to nearest cm for stability)
		const freq = {};
		let maxFreq = 0,
			modeValue = nearestDistances[0];
		nearestDistances.forEach((d) => {
			const rounded = Math.round(d * 100); // round to cm
			freq[rounded] = (freq[rounded] || 0) + 1;
			if (freq[rounded] > maxFreq) {
				maxFreq = freq[rounded];
				modeValue = rounded / 100;
			}
		});
		chosenDistance = modeValue;
	} else {
		console.warn("Unknown mode for getRadiiBlastHolesPolygon:", mode, "Defaulting to  min.");
		chosenDistance = Math.min(...nearestDistances);
	}
	return chosenDistance;
}

/**
 * Get the unioned polygon of circles around blast holes, with radius based on nearest neighbor distances.
 * @param {Array} points - Array of points, each with startXLocation, startYLocation, startZLocation, endXLocation, endYLocation, endZLocation.
 * @param {number} percentDistance - Percentage to scale the chosen distance metric.
 * @param {number} steps - Number of steps for circle polygonization.
 * @param {string} mode - One of "min", "max", "average", "mode" (statistical mode of distances).
 * @returns {Array} Array of {x, y, z} points representing the unioned polygon.
 */
function getRadiiBlastHolesPolygon(points, percentDistance, steps, mode = "min") {
	const scale = 100000; // Clipper uses integers; scale meters to avoid precision loss

	// Step 2: Use the helper function to determine distance
	const chosenDistance = getNearestNeighborDistancesByAggregation(points, mode);

	// Step 3: Calculate the radius to use
	const radius = chosenDistance * (percentDistance / 100);

	// Step 4: Build circle polygons for each point
	const circlePolygons = points.map((pt) => {
		const centerX = pt.endXLocation;
		const centerY = pt.endYLocation;
		const centerZ = pt.endZLocation;
		const path = [];
		for (let i = 0; i < steps; i++) {
			const angle = (i / steps) * Math.PI * 2;
			const x = centerX + radius * Math.cos(angle);
			const y = centerY + radius * Math.sin(angle);
			const z = centerZ; // keep flat for now
			path.push({ X: Math.round(x * scale), Y: Math.round(y * scale), Z: z });
		}
		return path;
	});

	// Step 5: Perform union using clipper-lib
	const cpr = new ClipperLib.Clipper();
	cpr.AddPaths(circlePolygons, ClipperLib.PolyType.ptSubject, true);

	const solution = new ClipperLib.Paths();
	const succeeded = cpr.Execute(ClipperLib.ClipType.ctUnion, solution, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);

	if (!succeeded || solution.length === 0) {
		console.warn("Clipper union failed or returned empty result.");
		return [];
	}

	// Step 6: Return the unioned polygon as an array of {x, y, z}
	return solution[0].map((pt) => {
		const realX = pt.X / scale;
		const realY = pt.Y / scale;
		// Nearest Z from original centers
		let nearestZ = 0;
		let minDist = Infinity;
		points.forEach((p) => {
			const dx = p.startXLocation - realX;
			const dy = p.startYLocation - realY;
			const dist = dx * dx + dy * dy;
			if (dist < minDist) {
				minDist = dist;
				nearestZ = p.startZLocation;
			}
		});
		return { x: realX, y: realY, z: nearestZ };
	});
}

document.getElementById("createRadiiFromBlastHoles").addEventListener("click", function () {
	// Get the values from the input fields
	const radius = parseFloat(document.getElementById("drawingPolygonRadius").value);
	const lineWidth = parseFloat(document.getElementById("drawingLineWidth").value);
	const color = getJSColorHexDrawing();
	const steps = parseInt(document.getElementById("radiiSteps").value);
	const union = true;
	const addToMaps = true;

	// Check if the radius is a valid number
	if (isNaN(radius) || radius <= 0) {
		alert("Please enter a valid radius.");
		return;
	}
	// Check if the line width is a valid number
	if (isNaN(lineWidth) || lineWidth <= 0) {
		alert("Please enter a valid line width.");
		return;
	}

	// Determine which holes to process
	let targetHoles = points;
	let datasetDescription = "all holes";

	if (selectedMultipleHoles && selectedMultipleHoles.length > 0) {
		targetHoles = selectedMultipleHoles;
		datasetDescription = "selected holes";
	} else if (selectedHole) {
		targetHoles = [selectedHole];
		datasetDescription = "selected hole";
	}

	// Add performance warning for large number of holes
	if (targetHoles.length > 1000) {
		Swal.fire({
			title: "Performance Warning",
			html: `
				<div style="text-align: center;">
					<p><strong>⚠️ Large Dataset Detected</strong></p>
					<hr style="border-color: #555; margin: 15px 0;">
					
					<p><strong>Processing:</strong> ${targetHoles.length} ${datasetDescription}</p>
					<p><strong>Steps:</strong> ${steps}</p>
					
					<hr style="border-color: #555; margin: 15px 0;">
					
					<p style="color: #f39c12;"><strong>Warning:</strong><br>
					This may take significant time and could cause<br>
					the browser to become unresponsive.</p>
					
					<hr style="border-color: #555; margin: 15px 0;">
					
					<p><strong>Recommendations:</strong></p>
					<p style="text-align: left; margin: 0 auto; display: inline-block;">
						• Reduce steps (current: ${steps})<br>
						• Process smaller sections<br>
						• Save work before continuing
					</p>
				</div>
			`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Ok",
			cancelButtonText: "Cancel",
			customClass: {
				container: "custom-popup-container",
				title: "swal2-title",
				confirmButton: "confirm",
				cancelButton: "cancel",
				content: "swal2-content",
				htmlContainer: "swal2-html-container"
			}
		}).then((result) => {
			if (result.isConfirmed) {
				// Show progress message
				updateStatusMessage("Processing radii polygons for " + targetHoles.length + " " + datasetDescription + "... This may take a while.");

				// Use setTimeout to allow UI to update before processing
				setTimeout(() => {
					try {
						const polygon = getRadiiPolygons(targetHoles, steps, radius, union, addToMaps, color, lineWidth, useToeLocation);
						drawData(points, selectedHole);
						updateStatusMessage("Radii polygons created successfully for " + targetHoles.length + " " + datasetDescription + ".");
					} catch (error) {
						console.error("Error creating radii polygons:", error);
						updateStatusMessage("Error creating radii polygons. Please try with fewer holes or reduced steps.");
						Swal.fire({
							title: "Error",
							html: `
								<div style="text-align: center;">
									<p><strong>Failed to create radii polygons.</strong></p>
									<hr style="border-color: #555; margin: 15px 0;">
									<p><strong>Try:</strong></p>
									<p style="text-align: left; margin: 0 auto; display: inline-block;">
										• Reducing steps<br>
										• Processing fewer holes<br>
										• Refreshing browser
									</p>
								</div>
							`,
							icon: "error",
							customClass: {
								container: "custom-popup-container",
								confirmButton: "confirm"
							}
						});
					}
				}, 100);
			}
		});
	} else if (targetHoles.length > 500) {
		// Medium warning for 500-1000 holes
		Swal.fire({
			title: "Performance Notice",
			html: `
				<div style="text-align: center;">
					<p><strong>Medium Dataset</strong></p>
					<hr style="border-color: #555; margin: 15px 0;">
					
					<p><strong>Processing:</strong> ${targetHoles.length} ${datasetDescription}</p>
					<p><strong>Steps:</strong> ${steps}</p>
					
					<hr style="border-color: #555; margin: 15px 0;">
					
					<p><strong>Note:</strong><br>Processing may take a few moments.</p>
				</div>
			`,
			icon: "info",
			showCancelButton: true,
			confirmButtonText: "Ok",
			cancelButtonText: "Cancel",
			customClass: {
				container: "custom-popup-container",
				title: "swal2-title",
				confirmButton: "confirm",
				cancelButton: "cancel",
				content: "swal2-content",
				htmlContainer: "swal2-html-container"
			}
		}).then((result) => {
			if (result.isConfirmed) {
				processRadiiPolygons(targetHoles, steps, radius, union, addToMaps, color, lineWidth, datasetDescription);
				debouncedUpdateTreeView(); // Use debounced version
			}
		});
	} else {
		// Process normally for smaller datasets
		processRadiiPolygons(targetHoles, steps, radius, union, addToMaps, color, lineWidth, datasetDescription);
		debouncedUpdateTreeView(); // Use debounced version
	}
});

// Helper function to process radii polygons
function processRadiiPolygons(targetHoles, steps, radius, union, addToMaps, color, lineWidth, datasetDescription) {
	try {
		updateStatusMessage("Creating radii polygons for " + targetHoles.length + " " + datasetDescription + "...");
		const polygon = getRadiiPolygons(targetHoles, steps, radius, union, addToMaps, color, lineWidth, useToeLocation);
		drawData(points, selectedHole);
		updateStatusMessage("Radii polygons created successfully for " + targetHoles.length + " " + datasetDescription + ".");
		Swal.fire({
			title: "Success",
			html: `
				<div style="text-align: center;">
					<p><strong>Radii polygons created successfully for ${targetHoles.length} ${datasetDescription}.</strong></p>
					<p><strong>Zoom or Scroll to see the results.</strong></p>
					<p><strong>The radii is at ${radius}m from the hole(s).</strong></p>
				</div>
			`,
			icon: "success",
			customClass: {
				container: "custom-popup-container",
				confirmButton: "confirm"
			}
		}).then(() => {
			//save the drawing using douncedSave
			debouncedSaveKAD();
			debouncedUpdateTreeView(); // Use debounced version
		});
	} catch (error) {
		console.error("Error creating radii polygons:", error);
		updateStatusMessage("Error creating radii polygons.");
		Swal.fire({
			title: "Error",
			html: `
				<div style="text-align: center;">
					<p><strong>Failed to create radii polygons.</strong></p>
					<hr style="border-color: #555; margin: 15px 0;">
					<p><strong>Error:</strong><br>${error.message || "Unknown error occurred"}</p>
				</div>
			`,
			icon: "error",
			customClass: {
				container: "custom-popup-container",
				confirmButton: "confirm"
			}
		});
	}
}

// Convert hex color (e.g., #FF0000) to a DXF color index (1-255, never 0 or 256)
function getColorInteger(hex) {
	// Remove the '#' character if present
	if (hex.startsWith("#")) {
		hex = hex.slice(1);
	}
	// Parse the hex string as an integer
	const intValue = parseInt(hex, 16);
	const r = (intValue >> 16) & 0xff;
	const g = (intValue >> 8) & 0xff;
	const b = intValue & 0xff;

	// Basic mapping for common colors
	if (r === 255 && g === 0 && b === 0) return 1; // red
	if (r === 255 && g === 255 && b === 0) return 2; // yellow
	if (r === 0 && g === 255 && b === 0) return 3; // green
	if (r === 0 && g === 255 && g === 255) return 4; // cyan
	if (r === 0 && g === 0 && b === 255) return 5; // blue
	if (r === 255 && g === 0 && b === 255) return 6; // magenta
	if (r === 255 && g === 255 && g === 255) return 7; // white

	// For other colors, approximate to 8-255 (never 0 or 256)
	const gray = Math.round((r + g + b) / 3);
	const index = Math.max(8, Math.min(255, Math.round((gray / 255) * 247) + 8));
	console.log("Color index:", index);
	return index;
}

/**
 * Exports map data to a DXF (Drawing Exchange Format) string and creates a Blob for download.
 *
 * The function iterates through the provided map data and converts supported entities
 * (point, line, poly, circle, text) into their corresponding DXF representations.
 * Each entity is added to the DXF content string, which is then used to create a Blob.
 *
 * @param {Array<Map<string, Object>>} mapData - An array of Map objects, where each Map contains
 *   entity names as keys and entity data objects as values. Each entity data object should have:
 *   - {string} entityType - The type of the entity ("point", "line", "poly", "circle", "text").
 *   - {Array<Object>} data - An array of entity-specific data objects.
 *
 * Entity data object structure varies by entityType:
 *   - "point": { pointXLocation, pointYLocation, pointZLocation, color }
 *   - "line": { pointXLocation, pointYLocation, pointZLocation, pointXTarget, pointYTarget, pointZTarget, color }
 *   - "poly": { pointXLocation, pointYLocation, pointZLocation, color }
 *   - "circle": { pointXLocation, pointYLocation, pointZLocation, radius, color }
 *   - "text": { pointXLocation, pointYLocation, pointZLocation, text, color }
 *
 * @returns {void}
 */
function exportKADDXF() {
	let dxf = "0\nSECTION\n2\nHEADER\n0\nENDSEC\n";
	dxf += "0\nSECTION\n2\nTABLES\n0\nENDSEC\n";
	dxf += "0\nSECTION\n2\nBLOCKS\n0\nENDSEC\n";
	dxf += "0\nSECTION\n2\nENTITIES\n";

	const allMaps = [allKADDrawingsMap];

	for (const map of allMaps) {
		for (const [entityName, entityData] of map.entries()) {
			const type = entityData.entityType.trim();
			const data = entityData.data;

			data.forEach((item, index) => {
				//get the first color of the first point in the item
				let color = 1;
				color = typeof item.color === "string" ? getColorInteger(item.color) : 1; // default to red if no color is provided
				if (type === "point") {
					dxf += "0\nPOINT\n8\n" + entityName + "\n";
					dxf += "10\n" + item.pointXLocation + "\n20\n" + item.pointYLocation + "\n30\n" + item.pointZLocation + "\n";
					dxf += "62\n" + color + "\n";
				} else if (type === "line") {
					if (index < data.length - 1) {
						const next = data[index + 1];
						dxf += "0\nLINE\n8\n" + entityName + "\n";
						dxf += "10\n" + item.pointXLocation + "\n20\n" + item.pointYLocation + "\n30\n" + item.pointZLocation + "\n";
						dxf += "11\n" + next.pointXLocation + "\n21\n" + next.pointYLocation + "\n31\n" + next.pointZTarget + "\n";
						dxf += "62\n" + color + "\n";
					}
				} else if (type === "poly") {
					if (index === 0 && data.length > 1) {
						dxf += "0\nPOLYLINE\n8\n" + entityName + "\n66\n1\n70\n1\n";
						dxf += "62\n" + color + "\n";
						data.forEach((pt) => {
							dxf += "0\nVERTEX\n8\n" + entityName + "\n";
							dxf += "10\n" + pt.pointXLocation + "\n20\n" + pt.pointYLocation + "\n30\n" + pt.pointZLocation + "\n";
						});
						dxf += "0\nSEQEND\n8\n" + entityName + "\n";
					}
				} else if (type === "circle") {
					dxf += "0\nCIRCLE\n8\n" + entityName + "\n";
					dxf += "10\n" + item.pointXLocation + "\n20\n" + item.pointYLocation + "\n30\n" + item.pointZLocation + "\n";
					dxf += "40\n" + item.radius + "\n";
					dxf += "62\n" + color + "\n";
				} else if (type === "text") {
					dxf += "0\nTEXT\n8\n" + entityName + "\n";
					dxf += "10\n" + item.pointXLocation + "\n20\n" + item.pointYLocation + "\n30\n" + item.pointZLocation + "\n";
					dxf += "40\n0.5\n"; // text height
					dxf += "50\n0.0\n"; // rotation
					dxf += "1\n" + item.text + "\n";
					dxf += "62\n" + color + "\n";
				}
			});
		}
	}

	dxf += "0\nENDSEC\n0\nEOF\n";
	return dxf;
}

/**
 * Exports an array of hole objects as a DXF file, drawing a collar circle, track line, and point for each hole.
 *
 * For each point in the input array:
 * - Draws a circle at the start coordinates (if holeDiameter is provided and > 0) on the "Collar" layer named after the point's holeID.
 * - Draws a line from the start to end coordinates on the "Track" layer named after the point's holeID.
 * - Draws text at the start coordinates on a layer named after the point's holeID
 *
 * The resulting DXF content is offered as a file download in the browser.
 *
 * @param {Array<Object>} points - Array of hole objects to export. Each object should have the following properties:
 *   @param {number} points[].startXLocation - X coordinate of the hole start.
 *   @param {number} points[].startYLocation - Y coordinate of the hole start.
 *   @param {number} points[].startZLocation - Z coordinate of the hole start.
 *   @param {number} points[].endXLocation - X coordinate of the hole end.
 *   @param {number} points[].endYLocation - Y coordinate of the hole end.
 *   @param {number} points[].endZLocation - Z coordinate of the hole end.
 *   @param {number} [points[].holeDiameter] - Diameter of the collar circle (optional).
 *   @param {string} points[].holeID - Name of the layer for the point entity.
 */
function exportHolesDXF(points) {
	let dxf = "0\nSECTION\n2\nHEADER\n0\nENDSEC\n";
	dxf += "0\nSECTION\n2\nTABLES\n0\nENDSEC\n";
	dxf += "0\nSECTION\n2\nBLOCKS\n0\nENDSEC\n";
	dxf += "0\nSECTION\n2\nENTITIES\n";

	points.forEach((point) => {
		const layerName = point.holeID;

		if (point.holeDiameter && point.holeDiameter > 0) {
			const radius = point.holeDiameter / 1000 / 2;
			dxf += "0\nCIRCLE\n8\n" + layerName + "\n";
			dxf += "10\n" + point.startXLocation + "\n20\n" + point.startYLocation + "\n30\n" + point.startZLocation + "\n";
			dxf += "40\n" + radius + "\n";
		}

		dxf += "0\nLINE\n8\n" + layerName + "\n";
		dxf += "10\n" + point.startXLocation + "\n20\n" + point.startYLocation + "\n30\n" + point.startZLocation + "\n";
		dxf += "11\n" + point.endXLocation + "\n21\n" + point.endYLocation + "\n31\n" + point.endZLocation + "\n";

		dxf += "0\nTEXT\n8\n" + layerName + "\n";
		dxf += "10\n" + point.startXLocation + "\n20\n" + point.startYLocation + "\n30\n" + point.startZLocation + "\n";
		dxf += "40\n0.5\n"; // Text height (0.5m)
		dxf += "50\n0.0\n"; // Text rotation (0°)
		dxf += "1\n" + point.holeID + "\n";
	});

	dxf += "0\nENDSEC\n0\nEOF\n";
	return dxf;
}

function convertPointsTo14ColumnCSV() {
	let csv = "";

	// Add the CSV header if needed
	//const header = "holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,holeDiameter, holeType,fromHoleID,timingDelayMilliseconds,colorHexDecimal,holeLengthCalculated,holeAngle,holeBearing";
	//csv += header + "\n";

	// Iterate over the points array and convert each object to a CSV row
	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		const row = `${point.entityName},${point.entityType},${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.holeDiameter},${point.holeType},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colorHexDecimal}`; //,${point.holeLengthCalculated},${point.holeAngle},${point.holeBearing}`;
		csv += row + "\n";
	}

	return csv;
}

function convertPointsTo12ColumnCSV() {
	let csv = "";

	// Add the CSV header if needed
	//const header = "holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,holeDiameter, holeType,fromHoleID,timingDelayMilliseconds,colorHexDecimal,holeLengthCalculated,holeAngle,holeBearing";
	//csv += header + "\n";

	// Iterate over the points array and convert each object to a CSV row
	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		const row = `${point.entityName},${point.entityType},${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.holeDiameter},${point.holeType},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colorHexDecimal}`; //,${point.holeLengthCalculated},${point.holeAngle},${point.holeBearing}`;
		csv += row + "\n";
	}

	return csv;
}

function convertPointsToAllDataCSV() {
	let csv = "";
	/* STRUCTURE OF THE POINTS ARRAY
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
        entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colorHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp
    */
	// Add the CSV header if needed
	const header = "entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colorHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp";
	csv += header + "\n";
	const decimalPlaces = 4;
	// Iterate over the points array and convert each object to a CSV row
	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		const row = `${point.entityName},${point.entityType},${point.holeID},${point.startXLocation.toFixed(decimalPlaces)},${point.startYLocation.toFixed(decimalPlaces)},${point.startZLocation},${point.endXLocation.toFixed(decimalPlaces)},${point.endYLocation.toFixed(decimalPlaces)},${point.endZLocation.toFixed(decimalPlaces)},${point.gradeXLocation.toFixed(decimalPlaces)},${point.gradeYLocation.toFixed(decimalPlaces)},${point.gradeZLocation.toFixed(
			decimalPlaces
		)},${point.subdrillAmount.toFixed(decimalPlaces)},${point.subdrillLength.toFixed(decimalPlaces)},${point.benchHeight.toFixed(decimalPlaces)},${point.holeDiameter.toFixed(decimalPlaces)},${point.holeType},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colorHexDecimal},${point.holeLengthCalculated.toFixed(decimalPlaces)},${point.holeAngle.toFixed(decimalPlaces)},${point.holeBearing.toFixed(decimalPlaces)},${point.holeTime},${point.measuredLength.toFixed(decimalPlaces)},${
			point.measuredLengthTimeStamp
		},${point.measuredMass.toFixed(decimalPlaces)},${point.measuredMassTimeStamp},${point.measuredComment},${point.measuredCommentTimeStamp}`;
		csv += row + "\n";
	}

	return csv;
}
//Exports the measured values to a CSV file
function convertPointsToActualDataCSV() {
	if (!points || !Array.isArray(points) || points.length === 0) return;

	let csv = "";

	// Add the CSV header if needed
	const header = "entityName,entityType,holeID,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp";
	csv += header + "\n";

	// Iterate over the points array and convert each object to a CSV row
	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		const row = `${point.entityName},${point.entityType},${point.holeID},${point.measuredLength},${point.measuredLengthTimeStamp},${point.measuredMass},${point.measuredMassTimeStamp},${point.measuredComment},${point.measuredCommentTimeStamp}`;
		csv += row + "\n";
	}

	return csv;
}

function convertPointsToAQMCSV(points, fileNameValue, blastName, patternName, materialType, instructionValue, useHoleTypeAsInstruction, writeIngoreColumn, columnOrderArray) {
	if (!points || !Array.isArray(points) || points.length === 0) return;

	let aqm = "";
	let material = materialType;
	let pattern = patternName;
	let blast = blastName;
	let instruction = instructionValue;
	let fileName = fileNameValue;
	let columns = columnOrderArray; // 11 possible columns

	// Iterate over the points array and convert each object to an AQM row
	for (let i = 0; i < points.length; i++) {
		const point = points[i];

		let columnOrder = []; // Initialize the column order for each row

		let toeX = parseFloat(point.endXLocation.toFixed(4));
		let toeY = parseFloat(point.endYLocation.toFixed(4));
		let toeZ = parseFloat(point.endZLocation.toFixed(4));
		// Iterate over the columns and map them to their corresponding values
		for (let j = 0; j < columns.length; j++) {
			if (columns[j] === "Pattern") {
				columnOrder.push(pattern);
			} else if (columns[j] === "Blast") {
				columnOrder.push(blast);
			} else if (columns[j] === "Name") {
				columnOrder.push(point.holeID);
			} else if (columns[j] === "Easting") {
				columnOrder.push(toeX); // Assuming 'toeX' holds the Easting value
			} else if (columns[j] === "Northing") {
				columnOrder.push(toeY); // Assuming 'toeY' holds the Northing value
			} else if (columns[j] === "Elevation") {
				columnOrder.push(toeZ); // Assuming 'toeZ' holds the Elevation value
			} else if (columns[j] === "Angle") {
				columnOrder.push(point.holeAngle);
			} else if (columns[j] === "Azimuth") {
				let azimuth = parseFloat(((point.holeBearing - 180) % 360).toFixed(1));
				if (azimuth < 0) {
					azimuth += 360;
				}
				columnOrder.push(azimuth);
			} else if (columns[j] === "Diameter") {
				columnOrder.push(point.holeDiameter);
			} else if (columns[j] === "Material Type") {
				columnOrder.push(material);
			} else if (columns[j] === "Instruction") {
				if (useHoleTypeAsInstruction) {
					columnOrder.push(point.holeType);
				} else {
					columnOrder.push(instruction);
				}
			} else if (columns[j] === "Ignore") {
				if (writeIngoreColumn) {
					columnOrder.push("ignored");
				} else {
					//do nothing
				}

				// Default to an empty string for unknown columns
			}
		}

		// Join the column values to create a row and add it to the AQM string
		const row = columnOrder.join(",");
		aqm += row + "\n";
	}

	return aqm;
}

//-----------------------------------------------------------------------------//
// ----------------------// START IREDES EPIROC SECTION //---------------------//
//-----------------------------------------------------------------------------//

/**
 * Using SweetAlert Library Create a popup that gets input from the user.
 * @param {object[]} points - The points to convert
 * @param {string} filename - The filename to use
 * @param {string} planID - The plan ID to use
 * @param {string} siteID - The site ID to use
 * @param {boolean} holeOptions - Whether the hole options are on
 * @param {boolean} mwd - Whether the mwd is on
 * @param {string} chksumType - The type of checksum to calculate
 * @returns {void}
 */
function saveIREDESPopup() {
	let blastName = points[0].entityName;
	//console.log("Points" + points);
	console.log("blastName: " + blastName);
	Swal.fire({
		title: "Export IREDES file?",
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
      <div class="button-container-2col">
      <label class="labelWhite18" for="fileName">File Name</label>
      <input type="text" id="fileName" placeholder="File Name" value="${blastName}_XML"/>
			<label class="labelWhite18" for="planID">Drill Plan ID</label>
			<input type="text" id="planID" placeholder="Plan ID" value="${blastName}"/>
			<label class="labelWhite18" for="SiteID">Site ID</label>
			<input type="text" id="siteID" placeholder="Site ID" value="SiteName"/>
	        <label class="labelWhite18" for="holeOptions">Hole Options On (required for mwd)</label>
      		<input type="checkbox" id="holeOptions" name="holeOptions" value="1" checked="true">
	        <label class="labelWhite18" for="mwdOn">Set Measure While Drilling On</label>
      		<input type="checkbox" id="mwdOn" name="mwdOn" value="1" checked="true">
      		<label class="labelWhite18">Checksum Type:</label>
				<select id="chksumValue">
					<option value="CRC32-DECIMAL" selected>CRC32 Decimal (Epiroc)</option>
					<option value="CRC32-HEXBINARY">HexBinary (XSD Spec)</option>
					<option value="ZERO">Zero</option>
					<option value="NONE">None</option>
					<!-- <option value="MD5">MD5</option> -->
					<!-- <option value="SHA1">SHA1</option> -->
					<!-- <option value="SHA256">SHA256</option> -->
				</select>
      </div>
			<label class="labelWhite12">This is an XML file in the format of an Epiroc Drill Plan Export</label>
        `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		}
	}).then((result) => {
		if (result.isConfirmed) {
			// Get user input values
			const fileNameInput = document.getElementById("fileName");
			const fileNameValue = fileNameInput.value;

			const planIDInput = document.getElementById("planID");
			const planIDValue = planIDInput.value;

			const siteIDInput = document.getElementById("siteID");
			const siteIDValue = siteIDInput.value;

			const holeOptionsInput = document.getElementById("holeOptions");
			const holeOptionsValue = holeOptionsInput.checked ? true : false;

			const mwdInput = document.getElementById("mwdOn");
			const mwdValue = mwdInput.checked ? true : false;

			const chksumInput = document.getElementById("chksumValue");
			const chksumValue = chksumInput.value;

			if (fileNameValue === "") {
				// Show an alert to the user with a customized error button
				Swal.fire({
					title: "File Name is Null or Invalid",
					icon: "error",
					showCancelButton: false,
					confirmButtonText: "Error",
					customClass: {
						container: "custom-popup-container",
						title: "swal2-title",
						confirmButton: "cancel",
						//cancelButton: "cancel",
						content: "swal2-content",
						htmlContainer: "swal2-html-container",
						icon: "swal2-icon"
					}
				});
				return; // Exit the function
			}

			if (planIDValue === "") {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid Plan ID",
					text: "Please enter a Drill Plan ID.",
					icon: "error"
				});
				return; // Exit the function
			}
			//site Id checks
			if (siteIDValue === "") {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid Site ID",
					text: "Please enter a Site ID.",
					icon: "error"
				});
				return; // Exit the function
			}

			// Generate the XML content using the convertPointsToIREDESXML function
			const xmlContent = convertPointsToIREDESXML(points, fileNameValue, planIDValue, siteIDValue, holeOptionsValue, mwdValue, chksumValue);

			if (isIOS()) {
				// Create a Blob with the XML data
				const blob = new Blob([xmlContent], {
					type: "text/xml;charset=utf-8"
				});

				// Create a URL for the Blob
				const url = URL.createObjectURL(blob);

				// Create an anchor element with the download link
				const link = document.createElement("a");
				link.href = url;

				link.download = fileNameValue + ".xml";
				link.textContent = "Click here to download";

				// Append the link to the document
				document.body.appendChild(link);

				// Programmatically trigger the click event on the link
				link.click();

				// Remove the link from the document
				document.body.removeChild(link);
			} else {
				// Create an invisible anchor element
				const link = document.createElement("a");
				link.style.display = "none";

				// Set the XML content as the "href" attribute
				link.href = "data:text/xml;charset=utf-8," + encodeURIComponent(xmlContent);
				link.download = fileNameValue + ".xml";

				// Append the link to the document
				document.body.appendChild(link);

				// Programmatically trigger the click event on the link
				link.click();

				// Remove the link from the document
				document.body.removeChild(link);
			}
		}
	});
}
//COMPLETED: Implement the IREDES XML file generation and checksum calculation on the Checksum CRC32 function
/*
<xsd:element name="ChkSum" type="xsd:hexBinary">
<xsd:annotation> 
<xsd:documentation>Check sum including all data Objects in the Data Set  Checksum is calculated over the ENTIRE XML file ready to send using the value string  "0" as ChkSum value. After calculating the checksum the resulting value is written into the ChkSum tag thereby replacing the "0" string. Thereafter the Data Set is issued. Interpretation is done in reverse order also using "0" as a defined value of the ChkSum tag for checksum validation. The algorithm is: CRC32</xsd:documentation>
</xsd:annotation> 
</xsd:element>
*/

/**
 * Convert the points to an IREDES XML file
 * @param {object[]} points - The points to convert
 * @param {string} filename - The filename to use
 * @param {string} planID - The plan ID to use
 * @param {string} siteID - The site ID to use
 */
function convertPointsToIREDESXML(points, filename, planID, siteID, holeOptions, mwd, chksumType) {
	if (!points || !Array.isArray(points) || points.length === 0) return;
	const now = new Date();
	//convert now to the computer time zone
	now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
	let iredesPoints = [];
	points.forEach((point) => {
		iredesPoints.push({
			holeID: point.holeID,
			startXLocation: point.startXLocation,
			startYLocation: point.startYLocation,
			startZLocation: point.startZLocation,
			endXLocation: point.endXLocation,
			endYLocation: point.endYLocation,
			endZLocation: point.endZLocation,
			holeDiameter: point.holeDiameter,
			holeType: point.holeType
		});
	});
	iredesPoints.sort((a, b) => a.holeID.localeCompare(b.holeID));

	// Format the date as YYYY-MM-DDTHH:mm:ss
	const formattedDate = now.toISOString().slice(0, 19);
	let notes = "Notes";
	const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Generated by Kirra - https://blastingapps.com/kirra.html -->\n`;
	let xml = `${xmlHeader}<DRPPlan xmlns:IR="http://www.iredes.org/xml" IRVersion="V 1.0" IRDownwCompat="V 1.0" DRPPlanDownwCompat="V 1.0" DRPPlanVersion="V 1.0" xmlns="http://www.iredes.org/xml/DrillRig">\n`;

	// General Header
	xml += `  <IR:GenHead>\n`;
	xml += `    <IR:FileCreateDate>${formattedDate}</IR:FileCreateDate>\n`;
	xml += `    <IR:IRversion DownwCompat="V 1.0">V 1.0</IR:IRversion>\n`;
	xml += `  </IR:GenHead>\n`;
	xml += `  <IR:PlanId>${planID}</IR:PlanId>\n`;
	xml += `  <IR:PlanName>${planID}</IR:PlanName>\n`;
	xml += `  <IR:Comment>${notes}</IR:Comment>\n`;
	xml += `  <IR:Project>${siteID}(Site)</IR:Project>\n`;
	xml += `  <IR:WorkOrder>${siteID}(WorkOrder)</IR:WorkOrder>\n`;

	// Drill Position Plan
	xml += `  <DrillPosPlan IRVersion="V 1.0" IRDownwCompat="V 1.0">\n`;
	xml += `    <IR:GenHead>\n`;
	xml += `      <IR:FileCreateDate>${formattedDate}</IR:FileCreateDate>\n`;
	xml += `      <IR:IRversion DownwCompat="V 1.0">V 1.0</IR:IRversion>\n`;
	xml += `    </IR:GenHead>\n`;
	xml += `    <IR:PlanId>${planID}</IR:PlanId>\n`;
	xml += `    <IR:PlanName>${planID}</IR:PlanName>\n`;
	xml += `    <IR:Comment>${notes}</IR:Comment>\n`;
	xml += `    <IR:Project>${siteID}(Site)</IR:Project>\n`;
	xml += `    <IR:WorkOrder>${siteID}(WorkOrder)</IR:WorkOrder>\n`;

	// Position Data
	xml += `    <PositionData>\n`;
	xml += `      <Coordsystem>\n`;
	xml += `        <IR:CoordSysName>local</IR:CoordSysName>\n`;
	xml += `        <IR:TMatrix>\n`;
	xml += `          <IR:Col>\n`;
	xml += `            <IR:x>1.000</IR:x>\n`;
	xml += `            <IR:y>0.000</IR:y>\n`;
	xml += `            <IR:z>0.000</IR:z>\n`;
	xml += `            <IR:w>0.000</IR:w>\n`;
	xml += `          </IR:Col>\n`;
	xml += `          <IR:Col>\n`;
	xml += `            <IR:x>0.000</IR:x>\n`;
	xml += `            <IR:y>1.000</IR:y>\n`;
	xml += `            <IR:z>0.000</IR:z>\n`;
	xml += `            <IR:w>0.000</IR:w>\n`;
	xml += `          </IR:Col>\n`;
	xml += `          <IR:Col>\n`;
	xml += `            <IR:x>0.000</IR:x>\n`;
	xml += `            <IR:y>0.000</IR:y>\n`;
	xml += `            <IR:z>1.000</IR:z>\n`;
	xml += `            <IR:w>0.000</IR:w>\n`;
	xml += `          </IR:Col>\n`;
	xml += `        </IR:TMatrix>\n`;
	xml += `        <IR:CsysType>L</IR:CsysType>\n`;
	xml += `      </Coordsystem>\n`;
	xml += `      <PlanIdRef />\n`;
	xml += `      <Bearing>0.000</Bearing>\n`;
	xml += `    </PositionData>\n`;
	xml += `  </DrillPosPlan>\n`;

	// DrillPlan
	xml += `  <DrillPlan>\n`;
	xml += `    <NumberOfHoles>${iredesPoints.length}</NumberOfHoles>\n`;

	// Holes
	for (let i = 0; i < iredesPoints.length; i++) {
		const iredesPoint = iredesPoints[i];
		xml += `    <Hole>\n`;
		xml += `      <HoleId>${iredesPoint.holeID.trim()}</HoleId>\n`;
		xml += `      <HoleName>${iredesPoint.holeID.trim()}</HoleName>\n`;
		xml += `      <StartPoint>\n`;
		xml += `        <IR:PointX>${iredesPoint.startYLocation}</IR:PointX>\n`;
		xml += `        <IR:PointY>${iredesPoint.startXLocation}</IR:PointY>\n`;
		xml += `        <IR:PointZ>${iredesPoint.startZLocation}</IR:PointZ>\n`;
		xml += `      </StartPoint>\n`;
		xml += `      <EndPoint>\n`;
		xml += `        <IR:PointX>${iredesPoint.endYLocation}</IR:PointX>\n`;
		xml += `        <IR:PointY>${iredesPoint.endXLocation}</IR:PointY>\n`;
		xml += `        <IR:PointZ>${iredesPoint.endZLocation}</IR:PointZ>\n`;
		xml += `      </EndPoint>\n`;
		xml += `      <TypeOfHole>${iredesPoint.holeType.trim()}</TypeOfHole>\n`;
		xml += `      <DrillBitDia>${iredesPoint.holeDiameter}</DrillBitDia>\n`;
		xml += `      <MwdOn>${mwd ? "1" : "0"}</MwdOn>\n`;
		xml += `      <HoleOptions xmlns:opt="opt">\n`;
		xml += `        <opt:HoleData>\n`;
		xml += `          <ExtendedHoleStatus>${iredesPoint.measuredLength ? "Drilled" : "Undrilled"}</ExtendedHoleStatus>\n`;
		xml += `        </opt:HoleData>\n`;
		xml += `      </HoleOptions>\n`;
		xml += `    </Hole>\n`;
	}

	// Placeholder for the checksum with the string "0"
	const checksumPlaceholder = "0";

	// Closing the XML
	xml += `    <EquipmentData xmlns="">\n`;
	xml += `      <IR:OptionData />\n`;
	xml += `    </EquipmentData>\n`;
	xml += `  </DrillPlan>\n`;
	xml += `  <IR:GenTrailer>\n`;
	xml += `    <IR:FileCloseDate>${formattedDate}</IR:FileCloseDate>\n`;
	xml += `    <IR:ChkSum>${checksumPlaceholder}</IR:ChkSum>\n`;
	xml += `  </IR:GenTrailer>\n`;
	xml += `</DRPPlan>`;

	// Step 1: Calculate CRC32 checksum with "0" as the initial checksum
	let checksum = crc32(xml.replace(/<IR:ChkSum>0<\/IR:ChkSum>/, "<IR:ChkSum>0</IR:ChkSum>"), chksumType);

	// Step 2: Replace checksum in XML, format as needed
	if (chksumType === "CRC32-DECIMAL") {
		xml = xml.replace(/<IR:ChkSum>0<\/IR:ChkSum>/, `<IR:ChkSum>${checksum}</IR:ChkSum>`);
	} else if (chksumType === "CRC32-HEXBINARY") {
		xml = xml.replace(/<IR:ChkSum>0<\/IR:ChkSum>/, `<IR:ChkSum>${checksum.toString(16).toUpperCase()}</IR:ChkSum>`);
	} else if (chksumType === "NONE") {
		xml = xml.replace(/<IR:ChkSum>0<\/IR:ChkSum>/, `<IR:ChkSum> </IR:ChkSum>`);
	} else {
	}

	return xml;
}

/**
 * Calculate the CRC32 checksum of a string
 * @param {string} str - The string to calculate the checksum of
 * @param {string} chksumType - The type of checksum to calculate
 * @returns {string} - The checksum in the specified format
 */
function crc32(str, chksumType) {
	const table = new Uint32Array(256);
	for (let i = 256; i--; ) {
		let tmp = i;
		for (let k = 8; k--; ) {
			tmp = tmp & 1 ? 3988292384 ^ (tmp >>> 1) : tmp >>> 1;
		}
		table[i] = tmp;
	}

	let crc = 0xffffffff;
	for (let i = 0, l = str.length; i < l; i++) {
		crc = (crc >>> 8) ^ table[(crc ^ str.charCodeAt(i)) & 255];
	}

	crc = crc >>> 0; // Ensure unsigned

	// Format depending on chksumType
	if (chksumType === "CRC32-HEXBINARY") {
		return crc.toString(16).toUpperCase();
	} else {
		return crc;
	}
}
/**
 * Validate the IREDES XML file
 * @param {string} xmlContent - The XML content to validate
 * @returns {object} - An object containing the validation result
 * @returns {boolean} valid - Whether the checksum is valid
 * @returns {string} originalChecksum - The original checksum
 * @returns {string} calculatedChecksum - The calculated checksum
 * @returns {string} error - The error message if the checksum is invalid
 */
function validateIREDESXML(xmlContent) {
	// Extract the checksum from the XML
	const checksumMatch = xmlContent.match(/<IR:ChkSum>([^<]+)<\/IR:ChkSum>/);
	if (!checksumMatch) {
		return { valid: false, error: "No checksum found in XML" };
	}

	const originalChecksum = checksumMatch[1];

	// Replace the checksum with "0" for validation
	const xmlForValidation = xmlContent.replace(/<IR:ChkSum>[^<]+<\/IR:ChkSum>/, "<IR:ChkSum>0</IR:ChkSum>");

	// Calculate the checksum of the modified XML
	const calculatedChecksum = crc32(xmlForValidation);

	// Compare checksums (handle both decimal and hex formats)
	let isValid = false;
	if (originalChecksum === calculatedChecksum) {
		isValid = true; // Decimal match
	} else if (originalChecksum.toUpperCase() === parseInt(calculatedChecksum, 10).toString(16).toUpperCase()) {
		isValid = true; // Hex match
	} else if (parseInt(originalChecksum, 16).toString(10) === calculatedChecksum) {
		isValid = true; // Original was hex, calculated is decimal
	}

	return {
		valid: isValid,
		originalChecksum: originalChecksum,
		calculatedChecksum: calculatedChecksum,
		error: isValid ? null : "Checksum validation failed"
	};
}

//-----------------------------------------------------------------------------//
// ----------------------// END IREDES EPIROC SECTION //-----------------------//
//-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
// ----------------------// ALTERNATE CHECKSUMS //-----------------------------//
//-----------------------------------------------------------------------------//
function decimalChecksum(str) {
	let checksum = 0;
	for (let i = 0; i < str.length; i++) {
		checksum += str.charCodeAt(i);
	}
	return checksum;
}
function calculateMD5Checksum(data) {
	const hash = CryptoJS.MD5(data);
	return hash.toString();
}

function calculateSHA1Checksum(data) {
	const hash = CryptoJS.SHA1(data);
	return hash.toString();
}

function calculateSHA256Checksum(data) {
	const hash = CryptoJS.SHA256(data);
	return hash.toString();
}

//-----------------------------------------------------------------------------//
// ----------------------// END ALTERNATE CHECKSUMS //-------------------------//
//-----------------------------------------------------------------------------//

function calculateTimes(points) {
	if (!points || !Array.isArray(points) || points.length === 0) return;

	//console.log("Calculating times...");
	try {
		const surfaces = {};
		holeTimes = {};

		// Build initial structures for surfaces and hole times
		for (let i = 0; i < points.length; i++) {
			const point = points[i];
			if (point.entityName && point.holeID && !isNaN(point.timingDelayMilliseconds)) {
				const combinedHoleID = `${point.entityName}:::${point.holeID}`;
				const combinedFromHoleID = point.fromHoleID;
				surfaces[combinedFromHoleID + ">=|=<" + combinedHoleID] = {
					time: 0,
					delay: point.timingDelayMilliseconds
				};

				holeTimes[combinedHoleID] = null;
			} else {
				console.log("Invalid point data:", point);
			}
		}

		// Calculate times for each surface
		for (let i = 0; i < points.length; i++) {
			const point = points[i];
			const combinedHoleID = `${point.entityName}:::${point.holeID}`;
			const combinedFromHoleID = point.fromHoleID;
			if (combinedFromHoleID === combinedHoleID) {
				if (holeTimes[combinedHoleID] === null || point.timingDelayMilliseconds < holeTimes[combinedHoleID]) {
					holeTimes[combinedHoleID] = point.timingDelayMilliseconds;
				}
				updateSurfaceTimes(combinedHoleID, point.timingDelayMilliseconds, surfaces, holeTimes);
			}
		}

		// Log the final state of surfaces and holeTimes for debugging
		//console.log("Final Surfaces:", surfaces);
		//console.log("Final Hole Times:", holeTimes);

		// Create a result array from the holeTimes object
		const result = [];
		for (const combinedHoleID in holeTimes) {
			result.push([combinedHoleID, holeTimes[combinedHoleID]]);
		}

		// Update points with hole times
		for (const [combinedHoleID, time] of result) {
			const [entityName, holeID] = combinedHoleID.split(":::");
			const pointIndex = points.findIndex((p) => p.entityName === entityName && p.holeID === holeID);
			if (pointIndex !== -1) {
				points[pointIndex].holeTime = time;
			}
		}

		return result;
	} catch (err) {
		console.log("Error in calculateTimes:", err);
	}
}

function updateSurfaceTimes(combinedHoleID, time, surfaces, holeTimes, visited = new Set()) {
	visited.add(combinedHoleID);
	for (const id in surfaces) {
		const [fromHoleID, toHoleID] = id.split(">=|=<");
		if (fromHoleID === combinedHoleID) {
			const surface = surfaces[id];
			const delay = surface.delay;
			if (!isNaN(delay)) {
				const toTime = parseInt(time) + parseInt(delay);
				if (!visited.has(toHoleID) && (toTime < surface.time || surface.time === 0)) {
					surface.time = toTime;
					holeTimes[toHoleID] = toTime;
					updateSurfaceTimes(toHoleID, toTime, surfaces, holeTimes, visited);
				}
			} else {
				console.log("Invalid delay:", delay, "for surface:", id);
			}
		}
	}
	visited.delete(combinedHoleID);
}

function delaunayContours(contourData, contourLevel, maxEdgeLength) {
	// Only do the expensive calculation if contours or direction arrows are being displayed
	// if (!displayContours.checked && !displayFirstMovements.checked) {
	//     return { contourLines: [], directionArrows: [] };
	// }

	if (!points || !Array.isArray(points) || points.length === 0) return;

	const factor = 1.6;
	const minAngleThreshold = 5;
	const surfaceAreaThreshold = 0.1;

	if (!points || !Array.isArray(points) || points.length === 0) return;
	// Filter out points where holeTime is null
	const filteredContourData = contourData.filter((point) => point.holeTime !== null);

	if (filteredContourData.length < 3) return;

	// Helper function to get average distance to N nearest neighbors for a specific point
	function getLocalAverageDistance(targetPoint, allPoints, neighborCount = 6) {
		const distances = [];

		for (let i = 0; i < allPoints.length; i++) {
			if (allPoints[i] === targetPoint) continue; // Skip self

			const dx = targetPoint.x - allPoints[i].x;
			const dy = targetPoint.y - allPoints[i].y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			distances.push(distance);
		}

		// Sort distances and take the closest N neighbors
		distances.sort((a, b) => a - b);
		const nearestDistances = distances.slice(0, Math.min(neighborCount, distances.length));

		// Return average of nearest neighbors
		return nearestDistances.length > 0 ? nearestDistances.reduce((sum, dist) => sum + dist, 0) / nearestDistances.length : maxEdgeLength;
	}

	// Cache for local averages to improve performance
	const localAverageCache = new Map();
	function getCachedLocalAverage(point) {
		if (!localAverageCache.has(point)) {
			localAverageCache.set(point, getLocalAverageDistance(point, filteredContourData, 6));
		}
		return localAverageCache.get(point);
	}

	// Compute Delaunay triangulation
	const delaunay = d3.Delaunay.from(filteredContourData.map((point) => [point.x, point.y]));
	const triangles = delaunay.triangles; // Access the triangles property directly

	if (!triangles || triangles.length === 0) return;

	const contourLines = [];
	directionArrows = []; // Initialize an array to store the arrows

	for (let i = 0; i < triangles.length; i += 3) {
		const contourLine = [];

		const p1 = contourData[triangles[i]];
		const p2 = contourData[triangles[i + 1]];
		const p3 = contourData[triangles[i + 2]];

		// Get cached local average distances for each vertex of the triangle
		const p1LocalAvg = getCachedLocalAverage(p1);
		const p2LocalAvg = getCachedLocalAverage(p2);
		const p3LocalAvg = getCachedLocalAverage(p3);

		// Use the average of the three vertices' local averages
		const triangleLocalAverage = (p1LocalAvg + p2LocalAvg + p3LocalAvg) / 3;

		// Create adaptive max edge length for this specific triangle
		const adaptiveMaxEdgeLength = Math.min(maxEdgeLength, triangleLocalAverage * factor);

		// Calculate the centroid of the triangle (average of x, y coordinates)
		const centroidX = (p1.x + p2.x + p3.x) / 3;
		const centroidY = (p1.y + p2.y + p3.y) / 3;

		// Calculate the vector representing the slope (using Z differences)
		// We'll calculate two vectors: p1->p2 and p1->p3 to get a slope direction
		const v1X = p2.x - p1.x;
		const v1Y = p2.y - p1.y;
		const v1Z = p2.z - p1.z; // Time difference between p1 and p2

		const v2X = p3.x - p1.x;
		const v2Y = p3.y - p1.y;
		const v2Z = p3.z - p1.z; // Time difference between p1 and p3

		// Now we calculate the cross product of these two vectors to get the slope normal
		const slopeX = v1Y * v2Z - v1Z * v2Y;
		const slopeY = v1Z * v2X - v1X * v2Z;
		const slopeZ = v1X * v2Y - v1Y * v2X;

		// Normalize the slope vector (we don't care about the Z component for 2D projection)
		const slopeLength = Math.sqrt(slopeX * slopeX + slopeY * slopeY);
		const normSlopeX = slopeX / slopeLength;
		const normSlopeY = slopeY / slopeLength;

		// Calculate the end point for the arrow based on the normalized slope
		const arrowLength = 2; // Arrow length
		const arrowEndX = centroidX - normSlopeX * firstMovementSize;
		const arrowEndY = centroidY - normSlopeY * firstMovementSize;

		// Get the triangle's surface area
		const surfaceArea = Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);

		// Check if triangle passes the local adaptive filtering
		let trianglePassesFilter = true;

		// Calculate edge lengths and check against adaptive limit
		const edge1Length = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
		const edge2Length = Math.sqrt(Math.pow(p3.x - p2.x, 2) + Math.pow(p3.y - p2.y, 2));
		const edge3Length = Math.sqrt(Math.pow(p1.x - p3.x, 2) + Math.pow(p1.y - p3.y, 2));

		if (edge1Length > adaptiveMaxEdgeLength || edge2Length > adaptiveMaxEdgeLength || edge3Length > adaptiveMaxEdgeLength) {
			trianglePassesFilter = false;
		}

		// Optional: Add angle check to reject very acute triangles
		if (trianglePassesFilter) {
			// Calculate angles using law of cosines
			const edge1Squared = edge1Length * edge1Length;
			const edge2Squared = edge2Length * edge2Length;
			const edge3Squared = edge3Length * edge3Length;

			const angle1 = Math.acos(Math.max(-1, Math.min(1, (edge2Squared + edge3Squared - edge1Squared) / (2 * edge2Length * edge3Length)))) * (180 / Math.PI);
			const angle2 = Math.acos(Math.max(-1, Math.min(1, (edge1Squared + edge3Squared - edge2Squared) / (2 * edge1Length * edge3Length)))) * (180 / Math.PI);
			const angle3 = Math.acos(Math.max(-1, Math.min(1, (edge1Squared + edge2Squared - edge3Squared) / (2 * edge1Length * edge2Length)))) * (180 / Math.PI);

			const minAngle = Math.min(angle1, angle2, angle3);

			// Reject triangles with very acute angles (likely bridging triangles)
			if (minAngle < minAngleThreshold) {
				trianglePassesFilter = false;
			}
		}

		// Only process triangles that pass the adaptive filtering
		if (trianglePassesFilter) {
			if (surfaceArea > surfaceAreaThreshold) {
				// Store the arrow (start at the centroid, end at the calculated slope direction)
				directionArrows.push([centroidX, centroidY, arrowEndX, arrowEndY, "goldenrod", firstMovementSize]);
			}

			// Process the contour lines with adaptive edge length filtering
			for (let j = 0; j < 3; j++) {
				const p1 = contourData[triangles[i + j]];
				const p2 = contourData[triangles[i + ((j + 1) % 3)]];

				// Calculate distance between p1 and p2
				const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

				// Use adaptive edge length instead of global maxEdgeLength
				if (distance <= adaptiveMaxEdgeLength && ((p1.z < contourLevel && p2.z >= contourLevel) || (p1.z >= contourLevel && p2.z < contourLevel))) {
					const point = interpolate(p1, p2, contourLevel);
					contourLine.push(point);
				}
			}

			if (contourLine.length === 2) {
				contourLines.push(contourLine);
			}
		}
	}

	const interval = 1; // Keep every arrow
	directionArrows = directionArrows.filter((arrow, index) => index % interval === 0);

	// Optional: Log some statistics for debugging
	// console.log("Contour generation completed:");
	// console.log("- Total contour lines:", contourLines.length);
	// console.log("- Direction arrows:", directionArrows.length);
	// console.log("- Cache size:", localAverageCache.size);

	// Return both contour lines and the newly created arrows
	return { contourLines, directionArrows };
}

function interpolate(p1, p2, contourLevel) {
	const t = (contourLevel - p1.z) / (p2.z - p1.z);
	return {
		x: p1.x + t * (p2.x - p1.x),
		y: p1.y + t * (p2.y - p1.y)
	};
}

function simplifyLine(line, epsilon) {
	if (line.length <= 2) return line;

	const firstPoint = line[0];
	const lastPoint = line[line.length - 1];
	const lineDistSq = (lastPoint.x - firstPoint.x) ** 2 + (lastPoint.y - firstPoint.y) ** 2;

	const { maxDist, maxDistPoint } = line.slice(1, -1).reduce(
		(result, point, i) => {
			const distSq = pointToLineDistanceSq(point, firstPoint, lastPoint, lineDistSq);
			if (distSq > result.maxDist) {
				return {
					maxDist: distSq,
					maxDistPoint: {
						index: i + 1,
						point
					}
				};
			}
			return result;
		},
		{
			maxDist: 0,
			maxDistPoint: {
				index: 0,
				point: null
			}
		}
	);

	if (Math.sqrt(maxDist) > epsilon) {
		const left = simplifyLine(line.slice(0, maxDistPoint.index + 1), epsilon);
		const right = simplifyLine(line.slice(maxDistPoint.index), epsilon);

		return left.slice(0, left.length - 1).concat(right);
	} else {
		return [firstPoint, lastPoint];
	}
}
// NEW: Pixel distance simplification function
function simplifyByPxDist(points, pxThreshold = 5) {
	if (!points || points.length < 2) return points;

	const pxThresholdSq = pxThreshold * pxThreshold;
	const simplified = [points[0]]; // Always keep first point

	let lastKeptPoint = points[0];
	let [lastKeptX, lastKeptY] = worldToCanvas(lastKeptPoint.pointXLocation, lastKeptPoint.pointYLocation);

	for (let i = 1; i < points.length; i++) {
		const currentPoint = points[i];
		const [currentX, currentY] = worldToCanvas(currentPoint.pointXLocation, currentPoint.pointYLocation);

		const dx = currentX - lastKeptX;
		const dy = currentY - lastKeptY;

		// Keep point if distance is significant OR if it's the last point
		if (dx * dx + dy * dy >= pxThresholdSq || i === points.length - 1) {
			simplified.push(currentPoint);
			lastKeptPoint = currentPoint;
			lastKeptX = currentX;
			lastKeptY = currentY;
		}
	}

	return simplified;
}
//NEW: Add this hybrid simplification function that is WAY TOO AGGRESSIVE. - DO NOT USE.
function hybridSimplify(points, currentScale, isPolygon = false) {
	if (!points || points.length < 3) return points;

	const pxDistThresholdSq = 5 * 5; // pixel threshold squared
	const epsilon = 0.05 / currentScale; // RDP simplification tolerance

	// Convert to canvas coordinates for pixel distance calculations
	const canvasPoints = points.map((p) => {
		const [x, y] = worldToCanvas(p.pointXLocation, p.pointYLocation);
		return { ...p, _cx: x, _cy: y };
	});

	// Detect closed & small polygon/shape - preserve important small features
	const isClosed = isPolygon && points.length > 2;

	if (isClosed) {
		// Calculate approximate area in world coordinates
		let area = 0;
		for (let i = 0; i < points.length - 1; i++) {
			const p1 = points[i];
			const p2 = points[i + 1];
			area += p1.pointXLocation * p2.pointYLocation - p2.pointXLocation * p1.pointYLocation;
		}
		// If area is very small, preserve the shape without simplification
		if (Math.abs(area / 2) < 5 / currentScale) {
			return points;
		}
	}

	// Step 1: Pixel distance pre-filter - but keep consecutive points
	const pxFiltered = [canvasPoints[0]];
	for (let i = 1; i < canvasPoints.length; i++) {
		const current = canvasPoints[i];
		const previous = pxFiltered[pxFiltered.length - 1];
		const dx = current._cx - previous._cx;
		const dy = current._cy - previous._cy;

		// Keep point if pixel distance is significant OR if it's the last point
		if (dx * dx + dy * dy >= pxDistThresholdSq || i === canvasPoints.length - 1) {
			pxFiltered.push(current);
		}
	}

	// Step 2: Apply RDP only if we have enough points and they're not too simplified already
	if (pxFiltered.length < 3) {
		return points; // Return original if too few points
	}

	// Remove canvas coordinates before RDP
	const worldFiltered = pxFiltered.map((p) => {
		const { _cx, _cy, ...worldPoint } = p;
		return worldPoint;
	});

	const rdpSimplified = simplifyLine(worldFiltered, epsilon);
	return rdpSimplified;
}

function pointToLineDistanceSq(point, lineStart, lineEnd, lineDistSq) {
	const t = ((point.x - lineStart.x) * (lineEnd.x - lineStart.x) + (point.y - lineStart.y) * (lineEnd.y - lineStart.y)) / lineDistSq;

	if (t < 0) {
		return (lineStart.x - point.x) ** 2 + (lineStart.y - point.y) ** 2;
	} else if (t > 1) {
		return (lineEnd.x - point.x) ** 2 + (lineEnd.y - point.y) ** 2;
	} else {
		const projX = lineStart.x + t * (lineEnd.x - lineStart.x);
		const projY = lineStart.y + t * (lineEnd.y - lineStart.y);
		return (point.x - projX) ** 2 + (point.y - projY) ** 2;
	}
}

/**
 * Function to generate a Delaunay triangulation from a set of 2D points, and
 * filter out triangles with edges that are longer than a specified maximum edge length.
 * @param {Array} points the set of 2D points to triangulate
 * @param {number} maxEdgeLength the maximum edge length to allow
 * @returns {Array} an array of triangles, where each triangle is an array of 3 points,
 * each point being an array of 3 numbers (x, y, z)
 */
function delaunayTriangles(points, maxEdgeLength) {
	// Only do the expensive calculation if slope or relief triangles are being displayed
	if (!displaySlope.checked && !displayRelief.checked) {
		return { resultTriangles: [], reliefTriangles: [] };
	}

	if (!points || !Array.isArray(points) || points.length < 3) {
		return { resultTriangles: [], reliefTriangles: [] };
	}

	const factor = 1.6;
	const minAngleThreshold = 5;
	if (!points || !Array.isArray(points) || points.length < 3) {
		return { resultTriangles: [], reliefTriangles: [] };
	}
	let resultTriangles = [];
	let reliefTriangles = [];
	try {
		const getX = (point) => parseFloat(point.startXLocation);
		const getY = (point) => parseFloat(point.startYLocation);

		// Helper function to get average distance to N nearest neighbors for a specific point
		function getLocalAverageDistance(targetPoint, allPoints, neighborCount = 6) {
			const distances = [];

			for (let i = 0; i < allPoints.length; i++) {
				if (allPoints[i] === targetPoint) continue; // Skip self

				const dx = getX(targetPoint) - getX(allPoints[i]);
				const dy = getY(targetPoint) - getY(allPoints[i]);
				const distance = Math.sqrt(dx * dx + dy * dy);
				distances.push(distance);
			}

			// Sort distances and take the closest N neighbors
			distances.sort((a, b) => a - b);
			const nearestDistances = distances.slice(0, Math.min(neighborCount, distances.length));

			// Return average of nearest neighbors
			return nearestDistances.length > 0 ? nearestDistances.reduce((sum, dist) => sum + dist, 0) / nearestDistances.length : maxEdgeLength;
		}

		// Cache for local averages to improve performance
		const localAverageCache = new Map();
		function getCachedLocalAverage(point) {
			if (!localAverageCache.has(point)) {
				localAverageCache.set(point, getLocalAverageDistance(point, points, 6));
			}
			return localAverageCache.get(point);
		}

		// Construct the Delaunay triangulation object
		const delaunay = Delaunator.from(points, getX, getY);

		// Helper function to calculate the squared distance between two points
		function distanceSquared(p1, p2) {
			const dx = p1[0] - p2[0];
			const dy = p1[1] - p2[1];
			return dx * dx + dy * dy;
		}

		for (let i = 0; i < delaunay.triangles.length; i += 3) {
			const p1Index = delaunay.triangles[i];
			const p2Index = delaunay.triangles[i + 1];
			const p3Index = delaunay.triangles[i + 2];

			const p1 = points[p1Index];
			const p2 = points[p2Index];
			const p3 = points[p3Index];

			// Get cached local average distances for each vertex of the triangle
			const p1LocalAvg = getCachedLocalAverage(p1);
			const p2LocalAvg = getCachedLocalAverage(p2);
			const p3LocalAvg = getCachedLocalAverage(p3);

			// Use the average of the three vertices' local averages
			const triangleLocalAverage = (p1LocalAvg + p2LocalAvg + p3LocalAvg) / 3;

			// Create adaptive max edge length for this specific triangle
			// You can adjust the 1.8 multiplier to be more or less restrictive
			const adaptiveMaxEdgeLength = Math.min(maxEdgeLength, triangleLocalAverage * factor);

			// Calculate squared edge lengths
			const edge1Squared = distanceSquared([getX(p1), getY(p1)], [getX(p2), getY(p2)]);
			const edge2Squared = distanceSquared([getX(p2), getY(p2)], [getX(p3), getY(p3)]);
			const edge3Squared = distanceSquared([getX(p3), getY(p3)], [getX(p1), getY(p1)]);

			// Use the adaptive max edge length for this triangle
			const maxEdgeLengthSquared = adaptiveMaxEdgeLength ** 2;

			// Check if all edge lengths are within the adaptive limit
			if (edge1Squared <= maxEdgeLengthSquared && edge2Squared <= maxEdgeLengthSquared && edge3Squared <= maxEdgeLengthSquared) {
				// Optional: Add angle check to reject very acute triangles (bridging triangles)
				const edge1 = Math.sqrt(edge1Squared);
				const edge2 = Math.sqrt(edge2Squared);
				const edge3 = Math.sqrt(edge3Squared);

				// Calculate angles using law of cosines
				const angle1 = Math.acos(Math.max(-1, Math.min(1, (edge2Squared + edge3Squared - edge1Squared) / (2 * edge2 * edge3)))) * (180 / Math.PI);
				const angle2 = Math.acos(Math.max(-1, Math.min(1, (edge1Squared + edge3Squared - edge2Squared) / (2 * edge1 * edge3)))) * (180 / Math.PI);
				const angle3 = Math.acos(Math.max(-1, Math.min(1, (edge1Squared + edge2Squared - edge3Squared) / (2 * edge1 * edge2)))) * (180 / Math.PI);

				const minAngle = Math.min(angle1, angle2, angle3);

				// Only accept triangles with reasonable angles (reject very acute triangles)
				// You can adjust the 12 degree minimum angle threshold
				if (minAngle >= minAngleThreshold) {
					// Add the triangle to the result
					resultTriangles.push([
						[getX(p1), getY(p1), p1.startZLocation], // [x, y, z] of point 1
						[getX(p2), getY(p2), p2.startZLocation], // [x, y, z] of point 2
						[getX(p3), getY(p3), p3.startZLocation] // [x, y, z] of point 3
					]);

					reliefTriangles.push([
						[getX(p1), getY(p1), p1.holeTime], // [x, y, z] of point 1
						[getX(p2), getY(p2), p2.holeTime], // [x, y, z] of point 2
						[getX(p3), getY(p3), p3.holeTime] // [x, y, z] of point 3
					]);
				}
			}
		}

		// // Optional: Log some statistics for debugging
		// console.log("Triangulation completed:");
		// console.log("- Total triangles generated:", resultTriangles.length);
		// console.log("- Cache size:", localAverageCache.size);

		return { resultTriangles, reliefTriangles };
	} catch (err) {
		console.log("Error in delaunayTriangles:", err);
		return { resultTriangles: [], reliefTriangles: [] };
	}
}

// function delaunayTriangles(points, maxEdgeLength) {
// 	if (!points || !Array.isArray(points) || points.length < 3) {
// 		return { resultTriangles: [], reliefTriangles: [] };
// 	}
// 	let resultTriangles = [];
// 	let reliefTriangles = [];
// 	try {
// 		const getX = (point) => parseFloat(point.startXLocation);
// 		const getY = (point) => parseFloat(point.startYLocation);

// 		// Construct the Delaunay triangulation object
// 		const delaunay = Delaunator.from(points, getX, getY);

// 		// Helper function to calculate the squared distance between two points
// 		function distanceSquared(p1, p2) {
// 			const dx = p1[0] - p2[0];
// 			const dy = p1[1] - p2[1];
// 			return dx * dx + dy * dy;
// 		}

// 		for (let i = 0; i < delaunay.triangles.length; i += 3) {
// 			const p1Index = delaunay.triangles[i];
// 			const p2Index = delaunay.triangles[i + 1];
// 			const p3Index = delaunay.triangles[i + 2];

// 			const p1 = points[p1Index];
// 			const p2 = points[p2Index];
// 			const p3 = points[p3Index];

// 			// Calculate squared edge lengths
// 			const edge1Squared = distanceSquared([getX(p1), getY(p1)], [getX(p2), getY(p2)]);
// 			const edge2Squared = distanceSquared([getX(p2), getY(p2)], [getX(p3), getY(p3)]);
// 			const edge3Squared = distanceSquared([getX(p3), getY(p3)], [getX(p1), getY(p1)]);

// 			// Check if all edge lengths are less than or equal to the maxEdgeLength squared
// 			if (edge1Squared <= maxEdgeLength ** 2 && edge2Squared <= maxEdgeLength ** 2 && edge3Squared <= maxEdgeLength ** 2) {
// 				// Add the triangle to the result if the condition is met

// 				resultTriangles.push([
// 					[getX(p1), getY(p1), p1.startZLocation], // [x, y, z] of point 1
// 					[getX(p2), getY(p2), p2.startZLocation], // [x, y, z] of point 2
// 					[getX(p3), getY(p3), p3.startZLocation] // [x, y, z] of point 3
// 				]);

// 				reliefTriangles.push([
// 					[getX(p1), getY(p1), p1.holeTime], // [x, y, z] of point 1
// 					[getX(p2), getY(p2), p2.holeTime], // [x, y, z] of point 2
// 					[getX(p3), getY(p3), p3.holeTime] // [x, y, z] of point 3
// 				]);
// 			}
// 		}
// 		//console.log("Triangles", resultTriangles);
// 		//console.log("Relief Triangles", reliefTriangles);
// 		return { resultTriangles, reliefTriangles };
// 	} catch (err) {
// 		console.log(err);
// 		return { resultTriangles: [], reliefTriangles: [] };
// 	}
// }
//Delaunay triangulation helper function
function getDelaunayFromPoints(points, useToeLocation) {
	try {
		return d3.Delaunay.from(
			points,
			function (p) {
				return useToeLocation ? parseFloat(p.endXLocation) : parseFloat(p.startXLocation);
			},
			function (p) {
				return useToeLocation ? parseFloat(p.endYLocation) : parseFloat(p.startYLocation);
			}
		);
	} catch (err) {
		console.log("Error in getDelaunayFromPoints:", err);
	}
}

//Voronoi Diagram
function getVoronoiMetrics(points, useToeLocation) {
	try {
		if (!points || points.length === 0) {
			console.warn("No points to calculate Voronoi metrics");
			return [];
		}

		const delaunay = getDelaunayFromPoints(points, useToeLocation);

		const margin = 10; // optional
		const xExtent = useToeLocation ? [Math.min(...points.map((p) => parseFloat(p.endXLocation))), Math.max(...points.map((p) => parseFloat(p.endXLocation)))] : [Math.min(...points.map((p) => parseFloat(p.startXLocation))), Math.max(...points.map((p) => parseFloat(p.startXLocation)))];
		const yExtent = useToeLocation ? [Math.min(...points.map((p) => parseFloat(p.endYLocation))), Math.max(...points.map((p) => parseFloat(p.endYLocation)))] : [Math.min(...points.map((p) => parseFloat(p.startYLocation))), Math.max(...points.map((p) => parseFloat(p.startYLocation)))];

		const voronoi = delaunay.voronoi([xExtent[0] - margin, yExtent[0] - margin, xExtent[1] + margin, yExtent[1] + margin]);

		const voronoiResults = [];

		for (let i = 0; i < points.length; i++) {
			const polygon = voronoi.cellPolygon(i);
			if (!polygon) continue;

			// Area using shoelace formula
			let area = 0;
			for (let j = 0; j < polygon.length; j++) {
				const [x1, y1] = polygon[j];
				const [x2, y2] = polygon[(j + 1) % polygon.length];
				area += x1 * y2 - x2 * y1;
			}
			area = Math.abs(area / 2); // in m² if coords are meters

			const p = points[i];
			const length = parseFloat(p.measuredLength || p.benchHeight || 1);
			const measuredLength = parseFloat(p.measuredLength || 0);
			const designedLength = parseFloat(p.holeLengthCalculated || 0);
			const holeFiringTime = parseFloat(p.holeTime || 0);
			const mass = parseFloat(p.measuredMass || 0);
			const volume = area * length;
			const powderFactor = volume > 0 ? mass / volume : null;
			//Add more metrics here

			voronoiResults.push({
				index: i,
				point: p,
				polygon: polygon,
				area: area,
				length: length,
				measuredLength: measuredLength,
				designedLength: designedLength,
				holeFiringTime: holeFiringTime,
				volume: volume,
				mass: mass,
				powderFactor: powderFactor
				//add a scaled heelan vibration calculation here
			});
		}

		//console.log("Returning Voronoi Metrics", voronoiResults);
		return voronoiResults;
	} catch (err) {
		console.log("Error in getVoronoiMetrics:", err);
		return [];
	}
}

// All legends now use a cool-to-hot gradient: blue (cool, small) -> cyan -> green -> yellow -> red (hot, large)

function getPFColor(pf, min, max) {
	// Map PF to a visible spectrum (violet -> blue -> green -> yellow -> orange -> red)
	//console.log("Getting PF Color", pf, min, max);
	let ratio;
	let r, g, b;
	if (!isVoronoiLegendFixed) {
		const minPF = min;
		const maxPF = max;
		ratio = Math.min(Math.max((pf - minPF) / (maxPF - minPF), 0), 1);
		// Interpolate from violet (148,0,211) -> blue (0,0,255) -> cyan (0,255,255) -> green (0,255,0) -> yellow (255,255,0) -> red (255,0,0)
		if (ratio < 0.2) {
			// Violet (148,0,211) to Blue (0,0,255)
			const t = ratio / 0.2;
			r = Math.round(148 * (1 - t));
			g = 0;
			b = Math.round(211 * (1 - t) + 255 * t);
		} else if (ratio < 0.4) {
			// Blue (0,0,255) to Cyan (0,255,255)
			const t = (ratio - 0.2) / 0.2;
			r = 0;
			g = Math.round(255 * t);
			b = 255;
		} else if (ratio < 0.6) {
			// Cyan (0,255,255) to Green (0,255,0)
			const t = (ratio - 0.4) / 0.2;
			r = 0;
			g = 255;
			b = Math.round(255 * (1 - t));
		} else if (ratio < 0.8) {
			// Green (0,255,0) to Yellow (255,255,0)
			const t = (ratio - 0.6) / 0.2;
			r = Math.round(255 * t);
			g = 255;
			b = 0;
		} else {
			// Yellow (255,255,0) to Red (255,0,0)
			const t = (ratio - 0.8) / 0.2;
			r = 255;
			g = Math.round(255 * (1 - t));
			b = 0;
		}
	} else {
		// Fixed spectrum: min=0, max=3, 0=violet, 0.2=blue, 0.4=cyan, 0.6=green, 0.8=yellow, 1=red
		const minPF = 0.0;
		const maxPF = 3.0;
		ratio = Math.min(Math.max((pf - minPF) / (maxPF - minPF), 0), 1);
		if (ratio < 0.2) {
			// Violet (148,0,211) to Blue (0,0,255)
			const t = ratio / 0.2;
			r = Math.round(148 * (1 - t));
			g = 0;
			b = Math.round(211 * (1 - t) + 255 * t);
		} else if (ratio < 0.4) {
			// Blue (0,0,255) to Cyan (0,255,255)
			const t = (ratio - 0.2) / 0.2;
			r = 0;
			g = Math.round(255 * t);
			b = 255;
		} else if (ratio < 0.6) {
			// Cyan (0,255,255) to Green (0,255,0)
			const t = (ratio - 0.4) / 0.2;
			r = 0;
			g = 255;
			b = Math.round(255 * (1 - t));
		} else if (ratio < 0.8) {
			// Green (0,255,0) to Yellow (255,255,0)
			const t = (ratio - 0.6) / 0.2;
			r = Math.round(255 * t);
			g = 255;
			b = 0;
		} else {
			// Yellow (255,255,0) to Red (255,0,0)
			const t = (ratio - 0.8) / 0.2;
			r = 255;
			g = Math.round(255 * (1 - t));
			b = 0;
		}
	}

	return `rgb(${r},${g},${b})`;
}

function getAreaColor(area, min, max) {
	// Map area to a cool-to-hot gradient (blue-cyan-green-yellow-red)

	const minColor = min;
	const maxColor = max;
	const ratio = Math.min(Math.max((area - minColor) / (maxColor - minColor), 0), 1);

	let r, g, b;
	if (ratio < 0.25) {
		const t = ratio / 0.25;
		r = 0;
		g = Math.round(255 * t);
		b = 255;
	} else if (ratio < 0.5) {
		const t = (ratio - 0.25) / 0.25;
		r = 0;
		g = 255;
		b = Math.round(255 * (1 - t));
	} else if (ratio < 0.75) {
		const t = (ratio - 0.5) / 0.25;
		r = Math.round(255 * t);
		g = 255;
		b = 0;
	} else {
		const t = (ratio - 0.75) / 0.25;
		r = 255;
		g = Math.round(255 * (1 - t));
		b = 0;
	}
	return `rgb(${r},${g},${b})`;
}

function getLengthColor(length, min, max) {
	// Map length to a cool-to-hot gradient (blue-cyan-green-yellow-red)
	const minColor = min;
	const maxColor = max;
	const ratio = Math.min(Math.max((length - minColor) / (maxColor - minColor), 0), 1);

	let r, g, b;
	if (ratio < 0.25) {
		const t = ratio / 0.25;
		r = 0;
		g = Math.round(255 * t);
		b = 255;
	} else if (ratio < 0.5) {
		const t = (ratio - 0.25) / 0.25;
		r = 0;
		g = 255;
		b = Math.round(255 * (1 - t));
	} else if (ratio < 0.75) {
		const t = (ratio - 0.5) / 0.25;
		r = Math.round(255 * t);
		g = 255;
		b = 0;
	} else {
		const t = (ratio - 0.75) / 0.25;
		r = 255;
		g = Math.round(255 * (1 - t));
		b = 0;
	}
	return `rgb(${r},${g},${b})`;
}
function getHoleFiringTimeColor(holeFiringTime, min, max) {
	// Color scale: lime green (min) to red (max)
	const minColor = min;
	const maxColor = max;
	const ratio = Math.min(Math.max((holeFiringTime - minColor) / (maxColor - minColor), 0), 1);

	// Lime green: rgb(0, 150, 0), Red: rgb(200, 0, 0)
	const r = Math.round(50 + (255 - 50) * ratio);
	const g = Math.round(255 - 255 * ratio);
	const b = Math.round(50 - 50 * ratio);

	return `rgb(${r},${g},${b})`;
}

function getMassColor(mass, min, max) {
	// Cool to hot: blue (min) -> cyan -> green -> yellow -> red (max)
	const minColor = min;
	const maxColor = max;
	const ratio = Math.min(Math.max((mass - minColor) / (maxColor - minColor), 0), 1);

	// Interpolate through blue -> cyan -> green -> yellow -> red
	let r, g, b;
	if (ratio < 0.25) {
		// Blue (0,0,255) to Cyan (0,255,255)
		const t = ratio / 0.25;
		r = 0;
		g = Math.round(255 * t);
		b = 255;
	} else if (ratio < 0.5) {
		// Cyan (0,255,255) to Green (0,255,0)
		const t = (ratio - 0.25) / 0.25;
		r = 0;
		g = 255;
		b = Math.round(255 * (1 - t));
	} else if (ratio < 0.75) {
		// Green (0,255,0) to Yellow (255,255,0)
		const t = (ratio - 0.5) / 0.25;
		r = Math.round(255 * t);
		g = 255;
		b = 0;
	} else {
		// Yellow (255,255,0) to Red (255,0,0)
		const t = (ratio - 0.75) / 0.25;
		r = 255;
		g = Math.round(255 * (1 - t));
		b = 0;
	}
	return `rgb(${r},${g},${b})`;
}

function getVolumeColor(volume, min, max) {
	const minColor = min;
	const maxColor = max;
	const ratio = Math.min(Math.max((volume - minColor) / (maxColor - minColor), 0), 1);

	// Cool to hot: blue (min) -> cyan -> green -> yellow -> red (max)
	let r, g, b;
	if (ratio < 0.25) {
		// Blue (0,0,255) to Cyan (0,255,255)
		const t = ratio / 0.25;
		r = 0;
		g = Math.round(255 * t);
		b = 255;
	} else if (ratio < 0.5) {
		// Cyan (0,255,255) to Green (0,255,0)
		const t = (ratio - 0.25) / 0.25;
		r = 0;
		g = 255;
		b = Math.round(255 * (1 - t));
	} else if (ratio < 0.75) {
		// Green (0,255,0) to Yellow (255,255,0)
		const t = (ratio - 0.5) / 0.25;
		r = Math.round(255 * t);
		g = 255;
		b = 0;
	} else {
		// Yellow (255,255,0) to Red (255,0,0)
		const t = (ratio - 0.75) / 0.25;
		r = 255;
		g = Math.round(255 * (1 - t));
		b = 0;
	}
	return `rgb(${r},${g},${b})`;
}

//Draw function for Powderfactor
function drawVoronoiMetric(metrics, metricName, getColorForMetric) {
	const ctx = canvas.getContext("2d");

	for (let cell of metrics) {
		// Skip if the cell doesn't have a polygon or the metric is null/undefined
		if (!cell.polygon || cell[metricName] == null) continue;

		const color = getColorForMetric(cell[metricName]);

		ctx.beginPath();
		ctx.moveTo(cell.polygon[0][0], cell.polygon[0][1]);
		for (let j = 1; j < cell.polygon.length; j++) {
			ctx.lineTo(cell.polygon[j][0], cell.polygon[j][1]);
		}
		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	}
}

//using resultTriangles from delaunayTriangles function create a boundingpolygon
function createBlastBoundaryPolygon(triangles) {
	let blastBoundaryPolygon = [];

	if (triangles && triangles.length > 0) {
		// Extract all vertices from triangles
		let vertices = triangles.flat().map((point) => ({ x: point[0], y: point[1] }));

		// Compute convex hull
		if (vertices.length > 0) {
			try {
				const hull = d3.polygonHull(vertices.map((v) => [v.x, v.y]));

				if (hull && hull.length > 0) {
					blastBoundaryPolygon = hull.map((point) => ({ x: point[0], y: point[1] }));
				}
			} catch (error) {
				console.error("Error computing convex hull:", error);
				// Optionally, fall back to a simpler method or return an empty polygon
				blastBoundaryPolygon = [];
			}
		}
	}

	return blastBoundaryPolygon;
}

/**
 * Generates polygons representing circles around given points, optionally performing a union of these circles.
 *
 * @param {Array<Object>} points - An array of objects, each with `startXLocation`, `startYLocation`, and `startZLocation` properties, representing the center of a circle.
 * @param {number} steps - The number of steps to use when generating the circle polygon. Higher values result in smoother circles.
 * @param {number} radius - The radius of the circles.
 * @param {boolean} union - If true, performs a union of all the circle polygons using the ClipperLib library.
 * @param {boolean} addToMaps - If true, adds the generated polygons to the `allKADDrawingsMap`.
 * @returns {Array<Array<Object>>} An array of polygons. Each polygon is an array of points, where each point is an object with `x`, `y`, and `z` properties.  Returns an empty array if the Clipper union fails.
 */
function getRadiiPolygons(points, steps, radius, union, addToMaps, color, lineWidth, useToeLocation) {
	const scale = 100000;
	const rawPolygons = [];

	// Generate circle polygons
	points.forEach((pt) => {
		const cx = useToeLocation ? pt.endXLocation : pt.startXLocation;
		const cy = useToeLocation ? pt.endYLocation : pt.startYLocation;
		const z = useToeLocation ? pt.endZLocation : pt.startZLocation;

		const poly = [];
		for (let i = 0; i < steps; i++) {
			const angle = (i / steps) * Math.PI * 2;
			const x = cx + radius * Math.cos(angle);
			const y = cy + radius * Math.sin(angle);
			poly.push({ x: x, y: y, z: z });
		}

		rawPolygons.push(poly);
	});

	if (!union) {
		if (addToMaps) {
			rawPolygons.forEach((polygon) => {
				entityName = (useToeLocation ? "RAD-END" : "RAD-SRT") + Math.random().toString(36).substring(2, 6);
				allKADDrawingsMap.set(entityName, {
					entityType: "poly",
					data: polygon.map((pt) => ({
						entityName: entityName,
						pointXLocation: pt.x,
						pointYLocation: pt.y,
						pointZLocation: pt.z,
						pointID: "",
						lineWidth: 5,
						color: 1,
						closed: true,
						entityType: "poly"
					}))
				});
			});
		}
		return rawPolygons; // each point includes x, y, z
	}

	// Convert for ClipperLib union
	const clipperPolys = rawPolygons.map((poly) =>
		poly.map((pt) => ({
			X: Math.round(pt.x * scale),
			Y: Math.round(pt.y * scale)
		}))
	);

	const cpr = new ClipperLib.Clipper();
	cpr.AddPaths(clipperPolys, ClipperLib.PolyType.ptSubject, true);

	const solution = new ClipperLib.Paths();
	const succeeded = cpr.Execute(ClipperLib.ClipType.ctUnion, solution, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);

	if (!succeeded || solution.length === 0) {
		if (!clipperUnionWarned) {
			console.warn("Clipper union failed.");
			clipperUnionWarned = true;
		}
		return [];
	}
	// Interpolate Z using nearest original point
	const unionedPolygons = solution.map((path) =>
		path.map((pt) => {
			const realX = pt.X / scale;
			const realY = pt.Y / scale;

			let nearestZ = 0;
			let minDist = Infinity;

			points.forEach((p) => {
				const dx = useToeLocation ? p.endXLocation - realX : p.startXLocation - realX;
				const dy = useToeLocation ? p.endYLocation - realY : p.startYLocation - realY;
				const dist = dx * dx + dy * dy;
				if (dist < minDist) {
					minDist = dist;
					nearestZ = useToeLocation ? p.endZLocation : p.startZLocation;
				}
			});

			return { x: realX, y: realY, z: nearestZ };
		})
	);

	if (addToMaps) {
		unionedPolygons.forEach((polygon) => {
			entityName = (useToeLocation ? "RAD-END" : "RAD-SRT") + Math.random().toString(36).substring(2, 6);
			//add pointID to each point starting from 1 to nth
			let pointID = 1;
			polygon.forEach((pt) => {
				pt.pointID = pointID;
				pointID++;
			});
			allKADDrawingsMap.set(entityName, {
				entityType: "poly",
				data: polygon.map((pt) => ({
					entityName: entityName,
					pointXLocation: pt.x,
					pointYLocation: pt.y,
					pointZLocation: pt.z,
					pointID: pt.pointID,
					lineWidth: lineWidth || 5,
					color: color || 1,
					closed: true,
					entityType: "poly"
				}))
			});
		});
	}

	return unionedPolygons; // includes x, y, z
}

function clipVoronoiCells(voronoiMetrics) {
	const scale = 100000;
	const allClippedCells = []; // Changed variable name for clarity

	// --- Your existing logic to calculate contractedPolygons ---
	const nearest = getNearestNeighborDistancesByAggregation(points, "mode", useToeLocation);
	const expand = nearest * 1.5;
	const contract = expand * 0.65;
	//----------------------getRadiiPolygons(points, steps, radius, union, addToMaps, color, lineWidth, useToeLocation)
	const unionedPolygons = getRadiiPolygons(points, 36, expand, true, false, "red", 1, useToeLocation);
	//----------------------
	const simplifiedPolygons = unionedPolygons.map((polygon) => simplifyPolygon(polygon, 0.1, true));
	const contractedPolygons = simplifiedPolygons.map((polygon) => offsetPolygonClipper(polygon, -contract));
	// --- End of your existing logic ---

	const clipPathPolygons = contractedPolygons; // These are the actual geometric polygons
	/*
    console.log("nearest:", nearest);
    console.log("expand:", expand);
    console.log("unionedPolygons:", unionedPolygons);
    console.log("simplifiedPolygons:", simplifiedPolygons);
    console.log("contract:", contract);
    console.log("contractedPolygons:", contractedPolygons);
    console.log("clipPathPolygons for iteration:", clipPathPolygons);
	*/

	for (let cell of voronoiMetrics) {
		if (!cell.polygon || cell.polygon.length < 3) continue;

		const subjPath = cell.polygon.map((p) => ({
			X: Math.round((p.x || p[0]) * scale),
			Y: Math.round((p.y || p[1]) * scale)
		}));

		let cellSuccessfullyClippedAndAdded = false;
		// Iterate through each of your boundary polygons
		for (const currentBoundaryPolygon of clipPathPolygons) {
			if (!currentBoundaryPolygon || currentBoundaryPolygon.length < 3) continue;

			// Convert the current boundary polygon to Clipper format
			const clipperSingleClipPath = currentBoundaryPolygon.map((p) => ({
				X: Math.round(p.x * scale),
				Y: Math.round(p.y * scale)
			}));

			const clipper = new ClipperLib.Clipper();
			clipper.AddPath(subjPath, ClipperLib.PolyType.ptSubject, true);
			clipper.AddPath(clipperSingleClipPath, ClipperLib.PolyType.ptClip, true); // Use only ONE clip path here

			const solution = new ClipperLib.Paths();
			const success = clipper.Execute(ClipperLib.ClipType.ctIntersection, solution, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);

			if (success && solution.length > 0 && solution[0].length > 0) {
				// Check solution[0] for valid polygon
				const clippedResultPolygon = solution[0].map((pt) => ({
					x: pt.X / scale,
					y: pt.Y / scale
				}));

				const area = Math.abs(
					clippedResultPolygon.reduce((acc, curr, i, arr) => {
						const next = arr[(i + 1) % arr.length];
						return acc + curr.x * next.y - next.x * curr.y;
					}, 0) / 2
				);
				const volume = area * cell.length;
				const powderFactor = volume > 0 ? cell.mass / volume : null;

				allClippedCells.push({
					...cell,
					polygon: clippedResultPolygon,
					area,
					volume,
					powderFactor
				});
				cellSuccessfullyClippedAndAdded = true;
				break; // Important: Cell is clipped by this boundary, no need to check others
			}
		}
		// If cellSuccessfullyClippedAndAdded is false here, the cell was not inside any of the boundaries.
	}
	return allClippedCells;
}

function simplifyPolygon(polygon, tolerance, forceClose) {
	if (!polygon || polygon.length < 3) return polygon;

	const scale = 100000;
	const scaledPath = polygon.map((p) => ({
		X: Math.round((p.x || p[0]) * scale),
		Y: Math.round((p.y || p[1]) * scale)
	}));

	const c = new ClipperLib.Clipper();
	const cleaned = ClipperLib.Clipper.CleanPolygon(scaledPath, tolerance * scale);

	if (!cleaned || cleaned.length < 3) return polygon;

	const simplified = cleaned.map((p) => ({
		x: p.X / scale,
		y: p.Y / scale
	}));

	if (forceClose && simplified.length > 0) {
		simplified.push({ ...simplified[0] });
	}

	return simplified;
}

function offsetPolygonClipper(polygon, offsetMeters) {
	if (!polygon || polygon.length < 3) return [];

	const scale = 100000; // ClipperLib works in integers, scale up for precision

	// Convert to Clipper path format
	const path = polygon.map((p) => ({
		X: Math.round(p.x * scale),
		Y: Math.round(p.y * scale)
	}));

	// Initialize and execute offset
	const co = new ClipperLib.ClipperOffset();
	co.AddPath(path, ClipperLib.JoinType.jtMiter, ClipperLib.EndType.etClosedPolygon);

	const offsetPaths = [];
	co.Execute(offsetPaths, offsetMeters * scale);

	// Convert back to float points
	if (offsetPaths.length === 0) return [];
	return offsetPaths[0].map((p) => ({
		x: p.X / scale,
		y: p.Y / scale
	}));
}

function drawBlastBoundary(polygon, strokeColor) {
	//convert wold coords to screen cords
	const screenCoords = polygon.map((point) => {
		const x = (point.x - centroidX) * currentScale + canvas.width / 2;
		const y = (-point.y + centroidY) * currentScale + canvas.height / 2;
		return { x, y };
	});

	ctx.beginPath();
	ctx.moveTo(screenCoords[0].x, screenCoords[0].y);
	for (let i = 1; i < screenCoords.length; i++) {
		ctx.lineTo(screenCoords[i].x, screenCoords[i].y);
	}
	ctx.closePath();
	ctx.strokeStyle = strokeColor;
	ctx.lineWidth = 2;
	ctx.stroke();
}

function offsetPolygonMathematical(polygon, offset) {
	const result = [];
	const n = polygon.length;
	const quadrantRads = [];

	for (let i = 0; i < n; i++) {
		const dx = polygon[(i + 1) % n].x - polygon[i].x;
		const dy = polygon[(i + 1) % n].y - polygon[i].y;
		const dist = Math.sqrt(dx * dx + dy * dy);

		let angle = 0;
		if (dist > 0) {
			if (dy >= 0 && dx >= 0) {
				angle = Math.PI / 2 - Math.asin(dx / dist);
			} else if (dy < 0 && dx >= 0) {
				angle = Math.PI / 2 - Math.acos(dy / dist);
			} else if (dy < 0 && dx < 0) {
				angle = (3 * Math.PI) / 2 - Math.asin(-dx / dist);
			} else {
				angle = (3 * Math.PI) / 2 - Math.acos(-dy / dist);
			}
		}
		quadrantRads.push(angle);
	}

	const offsetSegments = [];
	for (let i = 0; i < n; i++) {
		const theta = quadrantRads[i];
		const dx = offset * -Math.sin(theta);
		const dy = offset * Math.cos(theta);

		const p1 = {
			x: polygon[i].x + dx,
			y: polygon[i].y + dy
		};
		const p2 = {
			x: polygon[(i + 1) % n].x + dx,
			y: polygon[(i + 1) % n].y + dy
		};
		offsetSegments.push([p1, p2]);
	}

	for (let i = 0; i < n; i++) {
		const [p1a, p1b] = offsetSegments[i];
		const [p2a, p2b] = offsetSegments[(i + 1) % n];

		const denom = -(p2b.x - p2a.x) * -Math.sin(quadrantRads[i]) - Math.cos(quadrantRads[i]) * (p2b.y - p2a.y);

		if (denom === 0) {
			result.push(p1b); // fallback
			continue;
		}

		const s = Math.cos(quadrantRads[(i + 1) % n]) * (p2b.y - p2a.y) - (p2b.x - p2a.x) * Math.sin(quadrantRads[(i + 1) % n]);
		const t = s / denom;

		const x = p1b.x + Math.cos(quadrantRads[i]) * t;
		const y = p1b.y + Math.sin(quadrantRads[i]) * t;
		result.push({ x: x, y: y });
	}

	return result;
}

// FIXED: Much faster getAverageDistance function
function getAverageDistance(points) {
	if (!points || !Array.isArray(points) || points.length < 2) return 1;

	// For large datasets, use sampling to avoid O(n²) performance
	if (points.length > 1000) {
		// Sample every Nth point to keep it manageable
		const sampleSize = Math.min(500, Math.floor(points.length / 10));
		const step = Math.floor(points.length / sampleSize);
		const sampledPoints = [];

		for (let i = 0; i < points.length; i += step) {
			sampledPoints.push(points[i]);
		}

		// Use the sampled points for calculation
		return getAverageDistanceSmall(sampledPoints);
	}

	// For small datasets, use the original algorithm
	return getAverageDistanceSmall(points);
}

// Helper function for small datasets
function getAverageDistanceSmall(points) {
	let total = 0;
	let count = 0;

	for (let i = 0; i < points.length; i++) {
		let minDist = Infinity;

		for (let j = 0; j < points.length; j++) {
			if (i === j) continue;

			const dx = points[i].startXLocation - points[j].startXLocation;
			const dy = points[i].startYLocation - points[j].startYLocation;
			const dist = Math.sqrt(dx * dx + dy * dy);

			if (dist < minDist) {
				minDist = dist;
			}
		}

		if (minDist < Infinity) {
			total += minDist;
			count++;
		}
	}

	return count > 0 ? total / count : 1;
}

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
/*** CODE TO DRAW POINTS FROM KAD DATA ***/
function drawKADPoints(x, y, z, strokeColor) {
	ctx.beginPath();
	ctx.arc(x, y, 2, 0, 2 * Math.PI);
	ctx.strokeStyle = strokeColor;
	ctx.fillStyle = strokeColor;
	ctx.stroke();
	ctx.fill();
}
//Draws an open polyline from the kadLinesArray
function drawKADLines(sx, sy, ex, ey, sz, ez, lineWidth, strokeColor) {
	ctx.beginPath();
	ctx.moveTo(sx, sy);
	ctx.lineTo(ex, ey);
	ctx.strokeStyle = strokeColor;
	ctx.lineWidth = lineWidth;
	ctx.stroke();
}

function drawKADPolys(sx, sy, ex, ey, sz, ez, lineWidth, strokeColor, isClosed) {
	ctx.beginPath();
	ctx.moveTo(sx, sy);
	ctx.lineTo(ex, ey);
	ctx.strokeStyle = strokeColor;
	ctx.lineWidth = lineWidth;
	ctx.stroke();
	if (isClosed) {
		ctx.closePath();
	}
}
function drawAllKADSelectionVisuals() {
	if (!isSelectionPointerActive || !selectedKADObject) return;

	if (selectedKADObject.entityType === "circle") {
		// Highlight circles with a ring
		drawCircleSelection(selectedKADObject);
	} else if (selectedKADObject.entityType === "text") {
		// Highlight text with a box
		drawTextSelection(selectedKADObject);
	} else if (selectedKADObject.entityType === "point") {
		// Highlight points with a larger circle
		drawPointSelection(selectedKADObject);
	} else {
		// Use existing polygon selection for lines/polygons
		drawKADPolyUnified(selectedKADObject);
	}
}
// Unified drawing function for both lines and polygons
function drawKADPolyUnified(points) {
	if (points.length < 1) return;

	let currentPath = [];

	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		currentPath.push(point);

		// Check if this is the end of a path (closed or last point)
		const isLastPoint = i === points.length - 1;
		const isClosedPolygon = point.closed === true;

		if (isLastPoint || isClosedPolygon) {
			// Draw the accumulated path
			if (currentPath.length === 1) {
				// Single point - draw as dot
				const [x, y] = worldToCanvas(currentPath[0].pointXLocation, currentPath[0].pointYLocation);
				drawKADPoints(x, y, currentPath[0].pointZLocation, currentPath[0].color);
			} else if (currentPath.length >= 2) {
				// Multiple points - draw as polyline/polygon
				drawPolyPath(currentPath, isClosedPolygon);
			}

			// Reset for next path
			currentPath = [];
		}
	}
}

// Helper function to draw a path of connected points
function drawPolyPath(pathPoints, closed) {
	if (pathPoints.length < 2) return;

	const lineWidth = pathPoints[0].lineWidth || 1;
	const strokeColor = pathPoints[0].color || "#FF0000";

	ctx.strokeStyle = strokeColor;
	ctx.lineWidth = lineWidth;
	ctx.beginPath();

	// Start at first point
	const [startX, startY] = worldToCanvas(pathPoints[0].pointXLocation, pathPoints[0].pointYLocation);
	ctx.moveTo(startX, startY);

	// Draw to subsequent points
	for (let i = 1; i < pathPoints.length; i++) {
		const [x, y] = worldToCanvas(pathPoints[i].pointXLocation, pathPoints[i].pointYLocation);
		ctx.lineTo(x, y);
	}

	// Close if it's a polygon
	if (closed) {
		ctx.closePath();
	}

	ctx.stroke();
}

// Add this to your drawData function
function drawPolygonSelection(ctx) {
	if (!isPolygonSelectionActive || polyPointsX.length < 2) return;

	ctx.beginPath();
	for (let i = 0; i < polyPointsX.length; i++) {
		const [x, y] = worldToCanvas(polyPointsX[i], polyPointsY[i]);
		if (i === 0) {
			ctx.moveTo(x, y);
		} else {
			ctx.lineTo(x, y);
		}
	}

	// Close the polygon by connecting back to first point
	if (polyPointsX.length >= 2) {
		const [firstX, firstY] = worldToCanvas(polyPointsX[0], polyPointsY[0]);
		ctx.lineTo(firstX, firstY);
	}

	ctx.strokeStyle = "rgba(200, 0, 200, 0.5)";
	ctx.lineWidth = 1;
	ctx.stroke();

	// Draw vertices
	for (let i = 0; i < polyPointsX.length; i++) {
		const [x, y] = worldToCanvas(polyPointsX[i], polyPointsY[i]);
		ctx.beginPath();
		ctx.arc(x, y, 4, 0, Math.PI * 2);
		ctx.fillStyle = "rgba(255, 0, 255, 0.6)";
		ctx.fill();
	}
}

// Enhanced KAD preview function - FIXED VERSION
function drawKADPreviewLine(ctx) {
	// Check which tools are active
	const isPointActive = addPointDraw.checked;
	const isLineActive = addLineDraw.checked;
	const isCircleActive = addCircleDraw.checked;
	const isPolyActive = addPolyDraw.checked;
	const isTextActive = addTextDraw.checked;
	const isPolygonSelectionActive_local = isPolygonSelectionActive;

	const anyToolActive = isPointActive || isLineActive || isCircleActive || isPolyActive || isTextActive || isPolygonSelectionActive_local;

	if (!anyToolActive) return;

	// Skip if mouse is at origin (not moved yet)
	if (currentMouseWorldX === 0 && currentMouseWorldY === 0) return;

	let previewStartX = null;
	let previewStartY = null;
	let previewColor = "rgba(255, 255, 255, 0.7)"; // Default white
	let previewStyle = [5, 5]; // Default dash pattern
	let shouldDraw = false;

	// Handle polygon selection first (it has its own tracking)
	if (isPolygonSelectionActive_local && polyPointsX.length > 0) {
		previewStartX = polyPointsX[polyPointsX.length - 1];
		previewStartY = polyPointsY[polyPointsY.length - 1];
		previewColor = "rgba(255, 0, 255, 0.7)"; // Magenta for polygon selection
		previewStyle = [5, 5];
		shouldDraw = true;
	}
	// For other tools, use lastKADDrawPoint if available
	else if (lastKADDrawPoint) {
		previewStartX = lastKADDrawPoint.x;
		previewStartY = lastKADDrawPoint.y;
		shouldDraw = true;

		// Set colors and styles for different tools
		if (isLineActive) {
			previewColor = "rgba(0, 255, 255, 0.7)"; // Cyan for lines
			previewStyle = [8, 4];
		} else if (isCircleActive) {
			previewColor = "rgba(255, 165, 0, 0.7)"; // Orange for circles
			previewStyle = [6, 3];
		} else if (isPointActive) {
			previewColor = "rgba(255, 255, 0, 0.7)"; // Yellow for points
			previewStyle = [4, 2];
		} else if (isTextActive) {
			previewColor = "rgba(0, 255, 0, 0.7)"; // Green for text
			previewStyle = [10, 5];
		} else if (isPolyActive) {
			previewColor = "rgba(255, 100, 255, 0.7)"; // Purple for polygons
			previewStyle = [7, 3];
		}
	}

	// Show tool indicators for ALL active tools (even if no previous point)
	const [mouseCanvasX, mouseCanvasY] = worldToCanvas(currentMouseWorldX, currentMouseWorldY);

	if (isPointActive) {
		ctx.beginPath();
		ctx.arc(mouseCanvasX, mouseCanvasY, 4, 0, Math.PI * 2);
		ctx.fillStyle = "rgba(255, 255, 0, 0.6)"; // Yellow for points
		ctx.fill();
	} else if (isCircleActive) {
		ctx.beginPath();
		ctx.arc(mouseCanvasX, mouseCanvasY, 4, 0, Math.PI * 2);
		ctx.fillStyle = "rgba(255, 165, 0, 0.6)"; // Orange for circles
		ctx.fill();
	} else if (isTextActive) {
		ctx.beginPath();
		ctx.arc(mouseCanvasX, mouseCanvasY, 4, 0, Math.PI * 2);
		ctx.fillStyle = "rgba(0, 255, 0, 0.6)"; // Green for text
		ctx.fill();
	} else if (isLineActive) {
		// Show crosshair for line tool
		ctx.beginPath();
		ctx.setLineDash([2, 2]);
		ctx.strokeStyle = "rgba(0, 255, 255, 0.8)"; // Cyan for lines
		ctx.lineWidth = 1;
		// Draw crosshair
		ctx.moveTo(mouseCanvasX - 6, mouseCanvasY);
		ctx.lineTo(mouseCanvasX + 6, mouseCanvasY);
		ctx.moveTo(mouseCanvasX, mouseCanvasY - 6);
		ctx.lineTo(mouseCanvasX, mouseCanvasY + 6);
		ctx.stroke();
		ctx.setLineDash([]);
	} else if (isPolyActive) {
		// Show square for polygon tool
		ctx.beginPath();
		ctx.rect(mouseCanvasX - 3, mouseCanvasY - 3, 6, 6);
		ctx.strokeStyle = "rgba(255, 100, 255, 0.8)"; // Purple for polygons
		ctx.lineWidth = 1;
		ctx.stroke();
	}

	// Draw preview line if we have a start point
	if (shouldDraw) {
		const [startCanvasX, startCanvasY] = worldToCanvas(previewStartX, previewStartY);

		// Draw the preview line
		ctx.beginPath();
		ctx.setLineDash(previewStyle);
		ctx.strokeStyle = previewColor;
		ctx.lineWidth = 2;
		ctx.moveTo(startCanvasX, startCanvasY);
		ctx.lineTo(mouseCanvasX, mouseCanvasY);
		ctx.stroke();
		ctx.setLineDash([]);

		// Draw a small indicator at the start point
		ctx.beginPath();
		ctx.arc(startCanvasX, startCanvasY, 3, 0, Math.PI * 2);
		ctx.fillStyle = previewColor;
		ctx.fill();
	}
}
// Function to update the last KAD draw point when user draws something
function updateLastKADDrawPoint(x, y) {
	lastKADDrawPoint = { x: x, y: y };
}
// Simplified test version of the KAD preview function
function drawKADTESTPreviewLine(ctx) {
	// Simple test: just check if any tool is active and draw a line
	const anyToolActive = addPointDraw.checked || addLineDraw.checked || addCircleDraw.checked || addPolyDraw.checked || addTextDraw.checked || isPolygonSelectionActive;

	if (!anyToolActive) return;

	// Use mouse coordinates (they're 0 by default, not null)
	if (currentMouseWorldX === 0 && currentMouseWorldY === 0) return;

	// For testing, let's always use the center of the canvas as start point
	const testStartX = centroidX;
	const testStartY = centroidY;

	// Convert to canvas coordinates
	const [startCanvasX, startCanvasY] = worldToCanvas(testStartX, testStartY);
	const [mouseCanvasX, mouseCanvasY] = worldToCanvas(currentMouseWorldX, currentMouseWorldY);

	// Draw a bright red test line
	ctx.beginPath();
	ctx.setLineDash([10, 10]);
	ctx.strokeStyle = "rgba(255, 0, 0, 1.0)"; // Bright red
	ctx.lineWidth = 3;
	ctx.moveTo(startCanvasX, startCanvasY);
	ctx.lineTo(mouseCanvasX, mouseCanvasY);
	ctx.stroke();
	ctx.setLineDash([]);

	// Draw a circle at mouse position for debugging
	ctx.beginPath();
	ctx.arc(mouseCanvasX, mouseCanvasY, 5, 0, Math.PI * 2);
	ctx.fillStyle = "rgba(255, 0, 0, 1.0)";
	ctx.fill();
}

// Fix the drawKADCircles function around line 6450:
function drawKADCircles(x, y, z, radius, lineWidth, strokeColor) {
	ctx.strokeStyle = strokeColor;
	ctx.beginPath();
	// Convert radius from world units to screen pixels
	const radiusInPixels = radius * currentScale;
	ctx.arc(x, y, radiusInPixels, 0, 2 * Math.PI);
	ctx.lineWidth = lineWidth;
	ctx.stroke();
}
// Also update the drawKADTexts function to handle multiline calculations
function drawKADTexts(x, y, z, text, color) {
	//ctx.fillStyle = color;
	ctx.font = parseInt(currentFontSize - 2) + "px Roboto";
	drawMultilineText(ctx, text, x, y, currentFontSize, "left", color, color, false);
	// // Split the text into lines for multiline support
	// const lines = text.split("\n");
	// const lineHeight = parseInt(currentFontSize - 2) + 4;

	// // Draw each line with proper vertical offset
	// for (let i = 0; i < lines.length; i++) {
	// 	const line = lines[i];
	// 	const yOffset = y + i * lineHeight;
	// 	ctx.fillText(line, x, yOffset);
	// }
}
/*** CODE TO DRAW POINTS FROM CSV DATA ***/
function drawTrack(lineStartX, lineStartY, lineEndX, lineEndY, gradeX, gradeY, strokeColor, subdrillAmount) {
	ctx.lineWidth = 1;

	if (subdrillAmount < 0) {
		// NEGATIVE SUBDRILL: Draw only from start to toe (bypass grade)
		// Use 20% opacity for the entire line since it represents "over-drilling"
		ctx.beginPath();
		ctx.strokeStyle = strokeColor;
		ctx.moveTo(lineStartX, lineStartY);
		ctx.lineTo(lineEndX, lineEndY);
		ctx.stroke();
		// Draw from grade to toe (subdrill portion - red)
		ctx.beginPath();
		ctx.strokeStyle = "rgba(255, 0, 0, 0.2)"; // Red line (full opacity)
		ctx.moveTo(lineEndX, lineEndY);
		ctx.lineTo(gradeX, gradeY);
		ctx.stroke();
		// Draw grade marker with 20% opacity
		ctx.beginPath();
		ctx.arc(gradeX, gradeY, 3, 0, 2 * Math.PI);
		ctx.fillStyle = `rgba(255, 0, 0, 0.2)`; // Red marker with 20% opacity
		ctx.fill();
	} else {
		// POSITIVE SUBDRILL: Draw from start to grade (dark), then grade to toe (red)

		// Draw from start to grade point (bench drill portion - dark)
		ctx.beginPath();
		ctx.strokeStyle = strokeColor; // Dark line (full opacity)
		ctx.moveTo(lineStartX, lineStartY);
		ctx.lineTo(gradeX, gradeY);
		ctx.stroke();

		// Draw from grade to toe (subdrill portion - red)
		ctx.beginPath();
		ctx.strokeStyle = "rgba(255, 0, 0, 1.0)"; // Red line (full opacity)
		ctx.moveTo(gradeX, gradeY);
		ctx.lineTo(lineEndX, lineEndY);
		ctx.stroke();

		// Draw grade marker (full opacity)
		ctx.beginPath();
		ctx.arc(gradeX, gradeY, 3, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba(255, 0, 0, 1.0)"; // Red marker (full opacity)
		ctx.fill();
	}
}
function drawHoleToe(x, y, fillColor, strokeColor, radius) {
	ctx.beginPath();
	// Use the toeSizeInMeters directly to set the radius
	ctx.lineWidth = 1;
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fillStyle = fillColor;
	ctx.strokeStyle = strokeColor;
	ctx.stroke();
	ctx.fill();
}
function drawHole(x, y, radius, fillColor, strokeColor) {
	ctx.strokeStyle = strokeColor;
	ctx.fillStyle = strokeColor;
	ctx.lineWidth = 1;
	ctx.beginPath();
	const minRadius = 1.5;
	const drawRadius = radius > minRadius ? radius : minRadius;
	ctx.arc(x, y, drawRadius, 0, 2 * Math.PI);
	ctx.fill(); // fill the circle with the fill color
	ctx.stroke(); // draw the circle border with the stroke color
}
function drawDummy(x, y, radius, strokeColor) {
	ctx.strokeStyle = strokeColor;
	ctx.lineWidth = 2; // Adjust the line width as needed
	ctx.beginPath();
	ctx.moveTo(x - radius, y - radius);
	ctx.lineTo(x + radius, y + radius);
	ctx.moveTo(x - radius, y + radius);
	ctx.lineTo(x + radius, y - radius);
	ctx.stroke();
}
function drawNoDiameterHole(x, y, sideLength, strokeColor) {
	ctx.strokeStyle = strokeColor;
	ctx.lineWidth = 2; // Adjust the line width as needed
	const halfSide = sideLength / 2;
	ctx.beginPath();
	ctx.moveTo(x - halfSide, y - halfSide);
	ctx.lineTo(x + halfSide, y - halfSide);
	ctx.lineTo(x + halfSide, y + halfSide);
	ctx.lineTo(x - halfSide, y + halfSide);
	ctx.closePath(); // Close the path to form a square
	ctx.stroke();
}
function drawHiHole(x, y, radius, fillColor, strokeColor) {
	ctx.strokeStyle = strokeColor;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fillStyle = fillColor;
	ctx.fill(); // fill the circle with the fill color
	ctx.lineWidth = 5;
	ctx.stroke(); // draw the circle border with the stroke color
}
function drawExplosion(x, y, spikes, outerRadius, innerRadius, color1, color2) {
	let rotation = (Math.PI / 2) * 3;
	let step = Math.PI / spikes;
	let start = rotation;

	// Start the drawing path
	ctx.beginPath();
	ctx.moveTo(x, y - outerRadius);
	for (let i = 0; i < spikes; i++) {
		ctx.lineTo(x + Math.cos(start) * outerRadius, y - Math.sin(start) * outerRadius);
		start += step;

		ctx.lineTo(x + Math.cos(start) * innerRadius, y - Math.sin(start) * innerRadius);
		start += step;
	}
	ctx.lineTo(x, y - outerRadius);
	ctx.closePath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = color1;
	ctx.stroke();
	ctx.fillStyle = color2;
	ctx.fill();
}
function drawHexagon(x, y, sideLength, fillColor, strokeColor) {
	ctx.strokeStyle = strokeColor;
	ctx.beginPath();
	const rotationAngleRadians = (Math.PI / 180) * 30;
	for (let i = 0; i < 6; i++) {
		const angle = rotationAngleRadians + (Math.PI / 3) * i;
		const offsetX = sideLength * Math.cos(angle);
		const offsetY = sideLength * Math.sin(angle);

		if (i === 0) {
			ctx.moveTo(x + offsetX, y + offsetY);
		} else {
			ctx.lineTo(x + offsetX, y + offsetY);
		}
	}

	ctx.closePath();
	ctx.fillStyle = fillColor;
	ctx.fill(); // fill the hexagon with the fill color
	ctx.lineWidth = 5;
	ctx.stroke(); // draw the hexagon border with the stroke color
}
function drawText(x, y, text, color) {
	ctx.font = parseInt(currentFontSize - 2) + "px Arial";
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);
}
function drawRightAlignedText(x, y, text, color) {
	ctx.font = parseInt(currentFontSize - 2) + "px Arial";
	const textWidth = ctx.measureText(text).width;
	ctx.fillStyle = color;
	// Draw the text at an x position minus the text width for right alignment
	drawText(x - textWidth, y, text, color);
}
function drawMultilineText(ctx, text, x, y, lineHeight = 16, alignment = "left", textColor, boxColor, showBox = false) {
	if (!text) return; //if no text, return
	if (!ctx) return; //if no context, return
	const lines = text.split("\n");
	//calculate the text width of the widest line NOT the the entire sting.
	let textWidth = 0;
	for (let i = 0; i < lines.length; i++) {
		const lineWidth = ctx.measureText(lines[i]).width;
		if (lineWidth > textWidth) {
			textWidth = lineWidth;
		}
	}
	//colorise the text
	ctx.fillStyle = textColor;
	for (let i = 0; i < lines.length; i++) {
		if (alignment == "left") {
			ctx.fillText(lines[i], x, y + i * lineHeight);
		} else if (alignment == "right") {
			ctx.fillText(lines[i], x - textWidth, y + i * lineHeight);
		} else if (alignment == "center") {
			// Center each line individually based on its own width
			const lineWidth = ctx.measureText(lines[i]).width;
			ctx.fillText(lines[i], x - lineWidth / 2, y + i * lineHeight);
		}
	}

	if (showBox) {
		//colorise the box
		//ctx.fillStyle = boxColor;
		ctx.strokeStyle = boxColor;
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.roundRect(x - 5 - textWidth / 2, y - 6 - lineHeight / 2, textWidth + 10, lines.length * lineHeight + 6, 4);
		ctx.stroke();
	}
}
function drawDirectionArrow(startX, startY, endX, endY, fillColor, strokeColor, connScale) {
	try {
		// Set up the arrow parameters
		var arrowWidth = (firstMovementSize / 4) * currentScale; // Width of the arrowhead
		var arrowLength = 2 * (firstMovementSize / 4) * currentScale; // Length of the arrowhead
		var tailWidth = arrowWidth * 0.7; // Width of the tail (adjust as needed)
		const angle = Math.atan2(endY - startY, endX - startX); // Angle of the arrow

		// Set the stroke and fill colors
		ctx.strokeStyle = strokeColor; // Stroke color (black outline)
		ctx.fillStyle = fillColor; // Fill color (goldenrod)

		// Begin drawing the arrow as a single path
		ctx.beginPath();

		// Move to the start point of the arrow
		ctx.moveTo(startX + (tailWidth / 2) * Math.sin(angle), startY - (tailWidth / 2) * Math.cos(angle)); // Top-left corner of the tail

		// Draw to the end point of the tail (top-right corner)
		ctx.lineTo(endX - arrowLength * Math.cos(angle) + (tailWidth / 2) * Math.sin(angle), endY - arrowLength * Math.sin(angle) - (tailWidth / 2) * Math.cos(angle));

		// Draw the right base of the arrowhead
		ctx.lineTo(endX - arrowLength * Math.cos(angle) + arrowWidth * Math.sin(angle), endY - arrowLength * Math.sin(angle) - arrowWidth * Math.cos(angle));

		// Draw the tip of the arrowhead
		ctx.lineTo(endX, endY);

		// Draw the left base of the arrowhead
		ctx.lineTo(endX - arrowLength * Math.cos(angle) - arrowWidth * Math.sin(angle), endY - arrowLength * Math.sin(angle) + arrowWidth * Math.cos(angle));

		// Draw back to the bottom-right corner of the tail
		ctx.lineTo(endX - arrowLength * Math.cos(angle) - (tailWidth / 2) * Math.sin(angle), endY - arrowLength * Math.sin(angle) + (tailWidth / 2) * Math.cos(angle));

		// Draw to the bottom-left corner of the tail
		ctx.lineTo(startX - (tailWidth / 2) * Math.sin(angle), startY + (tailWidth / 2) * Math.cos(angle));

		ctx.closePath();
		ctx.fill(); // Fill the arrow with color
		ctx.stroke(); // Outline the arrow with a stroke
	} catch (error) {
		console.error("Error while drawing arrow:", error);
	}
}
function drawArrow(startX, startY, endX, endY, color, connScale) {
	//console.log(`Drawing arrow from (${startX}, ${startY}) to (${endX}, ${endY}) with color ${color}`);
	try {
		// Set up the arrow parameters
		var arrowWidth = (connScale / 4) * currentScale;
		var arrowLength = 2 * (connScale / 4) * currentScale;

		// Calculate the angle of the line
		const angle = Math.atan2(startX - endX, startY - endY); // Calculate the angle of the line (reversed)

		ctx.strokeStyle = color;
		ctx.fillStyle = color;

		// Draw the line
		ctx.beginPath();
		ctx.moveTo(parseInt(startX), parseInt(startY));
		ctx.lineTo(parseInt(endX), parseInt(endY));
		ctx.lineWidth = 2;
		ctx.stroke();

		// Draw the arrowhead
		if (endX == startX && endY == startY) {
			var size = (connScale / 4) * currentScale; // Change this value to adjust the size of the house shape
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(endX, endY); // Apex of the house
			ctx.lineTo(endX - size / 2, endY + size); // Bottom left corner
			ctx.lineTo(endX - size / 2, endY + 1.5 * size);
			ctx.lineTo(endX + size / 2, endY + 1.5 * size); // Bottom right corner
			ctx.lineTo(endX + size / 2, endY + size); // Bottom right corner
			ctx.closePath(); // Close the shape
			ctx.stroke(); // Draw the outline
		} else {
			ctx.beginPath();
			ctx.moveTo(parseInt(endX), parseInt(endY));
			ctx.lineTo(endX - arrowLength * Math.cos((Math.PI / 2) * 3 - angle) - arrowWidth * Math.sin((Math.PI / 2) * 3 - angle), endY - arrowLength * Math.sin((Math.PI / 2) * 3 - angle) + arrowWidth * Math.cos((Math.PI / 2) * 3 - angle));
			ctx.lineTo(endX - arrowLength * Math.cos((Math.PI / 2) * 3 - angle) + arrowWidth * Math.sin((Math.PI / 2) * 3 - angle), endY - arrowLength * Math.sin((Math.PI / 2) * 3 - angle) - arrowWidth * Math.cos((Math.PI / 2) * 3 - angle));
			ctx.closePath();
			ctx.fill();
		}
	} catch (error) {
		console.error("Error while drawing arrow:", error);
	}
}
function drawArrowDelayText(startX, startY, endX, endY, color, text) {
	// Calculate the angle of the text and the midpoint of the line
	const angle = Math.atan2(endY - startY, endX - startX);
	const midX = (startX + endX) / 2;
	const midY = (startY + endY) / 2;

	// Save the current canvas state and apply transformations
	ctx.save();
	ctx.translate(midX, midY);
	ctx.rotate(angle);

	// Draw the text along the line
	ctx.fillStyle = color;
	ctx.font = parseInt(currentFontSize - 2) + "px Arial";
	ctx.fillText(text, -currentFontSize, -3);

	// Restore the canvas state
	ctx.restore();
}
function drawDelauanySlopeMap(triangles, centroid, strokeColor) {
	if (!triangles || !Array.isArray(triangles) || triangles.length === 0) return;
	ctx.strokeStyle = strokeColor;
	ctx.fillStyle = fillColor;
	ctx.lineWidth = 1;
	console.log("drawDelauanySlopeMap: " + triangles.length);
	for (let i = 0; i < triangles.length; i++) {
		const triangle = triangles[i];
		const tAX = triangle[0][0];
		const tAY = triangle[0][1];
		const tAZ = triangle[0][2];
		const tBX = triangle[1][0];
		const tBY = triangle[1][1];
		const tBZ = triangle[1][2];
		const tCX = triangle[2][0];
		const tCY = triangle[2][1];
		const tCZ = triangle[2][2];

		const edge1 = {
			x: tBX - tAX,
			y: tBY - tAY,
			z: tBZ - tAZ
		};
		const edge2 = {
			x: tCX - tAX,
			y: tCY - tAY,
			z: tCZ - tAZ
		};
		const edge3 = {
			x: tCX - tBX,
			y: tCY - tBY,
			z: tCZ - tBZ
		};

		// Calculate the maximum absolute slope angle for this triangle
		//const slopeAngles = [Math.abs(getEdgeSlopeAngle(triangle[0], triangle[1])), Math.abs(getEdgeSlopeAngle(triangle[1], triangle[2])), Math.abs(getEdgeSlopeAngle(triangle[2], triangle[0]))];
		//let maxSlopeAngle = Math.max(...slopeAngles);

		let maxSlopeAngle = getDipAngle(triangle);

		// Create a triangle array
		const aAX = (tAX - centroid.x) * currentScale + canvas.width / 2;
		const aAY = (-tAY + centroid.y) * currentScale + canvas.height / 2;
		const aAZ = tAZ;
		const aBX = (tBX - centroid.x) * currentScale + canvas.width / 2;
		const aBY = (-tBY + centroid.y) * currentScale + canvas.height / 2;
		const aBZ = tBZ;
		const aCX = (tCX - centroid.x) * currentScale + canvas.width / 2;
		const aCY = (-tCY + centroid.y) * currentScale + canvas.height / 2;
		const aCZ = tCZ;

		// Define the minimum and maximum RGB values (rgb(50, 50, 50) and rgb(200, 200, 200))
		const minRGB = [225, 225, 225];
		const maxRGB = [100, 100, 100];

		// Calculate the RGB values based on maxSlopeAngle using linear interpolation
		const r = Math.round(minRGB[0] + (maxRGB[0] - minRGB[0]) * (maxSlopeAngle / 50));
		const g = Math.round(minRGB[1] + (maxRGB[1] - minRGB[1]) * (maxSlopeAngle / 50));
		const b = Math.round(minRGB[2] + (maxRGB[2] - minRGB[2]) * (maxSlopeAngle / 50));

		const ir = 255 - Math.round(minRGB[0] + (maxRGB[0] - minRGB[0]) * (maxSlopeAngle / 50));
		const ig = 255 - Math.round(minRGB[1] + (maxRGB[1] - minRGB[1]) * (maxSlopeAngle / 50));
		const ib = 255 - Math.round(minRGB[2] + (maxRGB[2] - minRGB[2]) * (maxSlopeAngle / 50));

		// Define the color ranges and corresponding RGB values
		let triangleFillColor;
		if (maxSlopeAngle >= 0 && maxSlopeAngle < 5) {
			// Cornflower blue for angles in the range [0, 4)
			triangleFillColor = "rgb(51, 139, 255)";
		} else if (maxSlopeAngle >= 5 && maxSlopeAngle < 7) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(0, 102, 204)";
		} else if (maxSlopeAngle >= 7 && maxSlopeAngle < 9) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(0, 204, 204)";
		} else if (maxSlopeAngle >= 9 && maxSlopeAngle < 12) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(102, 204, 0)";
		} else if (maxSlopeAngle >= 12 && maxSlopeAngle < 15) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(204, 204, 0)";
		} else if (maxSlopeAngle >= 15 && maxSlopeAngle < 17) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(255, 128, 0)";
		} else if (maxSlopeAngle >= 17 && maxSlopeAngle < 20) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(255, 0, 0)";
		} else {
			// Default to grey for all other angles
			triangleFillColor = "rgb(153, 0, 76)";
		}

		// Combine the calculated RGB values into the final fill color
		// triangleFillColor = `rgb(${r}, ${g}, ${b})`;
		const triangleStrokeColor = `rgb(${r}, ${g}, ${b})`;
		// Invert the color by subtracting each channel value from 255
		const invertedColor = `rgb(${ir}, ${ig}, ${ib})`;

		ctx.strokeStyle = triangleStrokeColor;
		ctx.fillStyle = triangleFillColor;
		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.moveTo(aAX, aAY);
		ctx.lineTo(aBX, aBY);
		ctx.lineTo(aCX, aCY);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();

		ctx.lineWidth = 1;
	}
}
function drawDelauanyBurdenRelief(triangles, centroid, strokeColor) {
	if (!triangles || !Array.isArray(triangles) || triangles.length === 0) return;
	ctx.strokeStyle = strokeColor;
	ctx.lineWidth = 1;
	//console.log("drawDelauanyBurdenRelief: " + triangles.length);
	// const reliefResults = delaunayContourBurdenRelief(triangles, 20, 0);
	// console.log("Relief Results:", reliefResults);
	for (let i = 0; i < triangles.length; i++) {
		const triangle = triangles[i];
		const tAX = triangle[0][0];
		const tAY = triangle[0][1];
		const tAZ = triangle[0][2];
		const tBX = triangle[1][0];
		const tBY = triangle[1][1];
		const tBZ = triangle[1][2];
		const tCX = triangle[2][0];
		const tCY = triangle[2][1];
		const tCZ = triangle[2][2];

		// Find the earliest and latest times
		const earliestTime = Math.min(tAZ, tBZ, tCZ);
		const latestTime = Math.max(tAZ, tBZ, tCZ);

		// Calculate the time difference
		const timeDifference = latestTime - earliestTime; // ms

		// Determine which points correspond to the earliest and latest times
		let p1, p2;
		if (earliestTime === tAZ) {
			p1 = { x: tAX, y: tAY };
		} else if (earliestTime === tBZ) {
			p1 = { x: tBX, y: tBY };
		} else {
			p1 = { x: tCX, y: tCY };
		}

		if (latestTime === tAZ) {
			p2 = { x: tAX, y: tAY };
		} else if (latestTime === tBZ) {
			p2 = { x: tBX, y: tBY };
		} else {
			p2 = { x: tCX, y: tCY };
		}

		// Calculate the distance between the two points (earliest and latest)
		const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

		// Calculate burden relief in ms/m
		const burdenRelief = timeDifference / distance;

		//console.log("Time Difference (ms):", timeDifference);
		//console.log("Distance (m):", distance);
		//console.log("Burden Relief (ms/m):", burdenRelief);

		// Color mapping based on timing relief (adjust values as needed)
		let triangleFillColor;
		if (burdenRelief < 4) {
			triangleFillColor = "rgb(75, 20, 20)"; // fast
		} else if (burdenRelief < 7) {
			triangleFillColor = "rgb(255, 40, 40)";
		} else if (burdenRelief < 10) {
			triangleFillColor = "rgb(255, 120, 50)"; //
		} else if (burdenRelief < 13) {
			triangleFillColor = "rgb(255, 255, 50)"; //
		} else if (burdenRelief < 16) {
			triangleFillColor = "rgb(50, 255, 70)"; //
		} else if (burdenRelief < 19) {
			triangleFillColor = "rgb(50, 255, 200)"; //
		} else if (burdenRelief < 22) {
			triangleFillColor = "rgb(50, 230, 255)"; //
		} else if (burdenRelief < 25) {
			triangleFillColor = "rgb(50, 180, 255)"; //
		} else if (burdenRelief < 30) {
			triangleFillColor = "rgb(50, 100, 255)"; //
		} else if (burdenRelief < 40) {
			triangleFillColor = "rgb(50, 0, 255)"; //
		} else {
			triangleFillColor = "rgb(75, 0, 150)"; // slow
		}

		ctx.fillStyle = triangleFillColor;

		// Draw triangle
		const aAX = (tAX - centroid.x) * currentScale + canvas.width / 2;
		const aAY = (-tAY + centroid.y) * currentScale + canvas.height / 2;
		const aBX = (tBX - centroid.x) * currentScale + canvas.width / 2;
		const aBY = (-tBY + centroid.y) * currentScale + canvas.height / 2;
		const aCX = (tCX - centroid.x) * currentScale + canvas.width / 2;
		const aCY = (-tCY + centroid.y) * currentScale + canvas.height / 2;

		ctx.beginPath();
		ctx.moveTo(aAX, aAY);
		ctx.lineTo(aBX, aBY);
		ctx.lineTo(aCX, aCY);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	}
}
function drawReliefLegend(strokecolor) {
	//draw a legend at the bottom of the screen in the center
	//the legend should be for the drawDelauanyTriangles function

	const legend0to4 = "rgb(75, 20, 20)"; // fast
	const legend4to7 = "rgb(255, 40, 40)";
	const legend7to10 = "rgb(255, 120, 50)"; //
	const legend10to13 = "rgb(255, 255, 50)"; //
	const legend13to16 = "rgb(50, 255, 70)"; //
	const legend16to19 = "rgb(50, 255, 200)"; //
	const legend19to22 = "rgb(50, 230, 255)"; //
	const legend22to25 = "rgb(50, 180, 255)"; //
	const legend25to30 = "rgb(50, 100, 255)"; //
	const legend30to40 = "rgb(50, 0, 255)"; //
	const legend40above = "rgb(75, 0, 150)"; // slow

	//draw the legend
	ctx.beginPath();
	ctx.fill();

	ctx.font = "14px Roboto";
	ctx.fontWeight = "bold";
	ctx.fillStyle = strokecolor;
	ctx.fillText("Legend Relief", 10, canvas.height / 2 - 70);
	ctx.fillText("0ms/m - 4ms/m", 10, canvas.height / 2 - 40);
	ctx.fillText("4ms/m - 7ms/m", 10, canvas.height / 2 - 10);
	ctx.fillText("7ms/m - 10ms/m", 10, canvas.height / 2 + 20);
	ctx.fillText("10ms/m - 13ms/m", 10, canvas.height / 2 + 50);
	ctx.fillText("13ms/m - 16ms/m", 10, canvas.height / 2 + 80);
	ctx.fillText("16ms/m - 19ms/m", 10, canvas.height / 2 + 110);
	ctx.fillText("19ms/m - 22ms/m", 10, canvas.height / 2 + 140);
	ctx.fillText("22ms/m - 25ms/m", 10, canvas.height / 2 + 170);
	ctx.fillText("25ms/m - 30ms/m", 10, canvas.height / 2 + 200);
	ctx.fillText("30ms/m - 40ms/m", 10, canvas.height / 2 + 230);
	ctx.fillText("40ms/m above", 10, canvas.height / 2 + 260);
	ctx.fillStyle = legend0to4;
	ctx.fillRect(130, canvas.height / 2 - 55, 20, 20);
	ctx.fillStyle = legend4to7;
	ctx.fillRect(130, canvas.height / 2 - 25, 20, 20);
	ctx.fillStyle = legend7to10;
	ctx.fillRect(130, canvas.height / 2 + 5, 20, 20);
	ctx.fillStyle = legend10to13;
	ctx.fillRect(130, canvas.height / 2 + 35, 20, 20);
	ctx.fillStyle = legend13to16;
	ctx.fillRect(130, canvas.height / 2 + 65, 20, 20);
	ctx.fillStyle = legend16to19;
	ctx.fillRect(130, canvas.height / 2 + 95, 20, 20);
	ctx.fillStyle = legend19to22;
	ctx.fillRect(130, canvas.height / 2 + 125, 20, 20);
	ctx.fillStyle = legend22to25;
	ctx.fillRect(130, canvas.height / 2 + 155, 20, 20);
	ctx.fillStyle = legend25to30;
	ctx.fillRect(130, canvas.height / 2 + 185, 20, 20);
	ctx.fillStyle = legend30to40;
	ctx.fillRect(130, canvas.height / 2 + 215, 20, 20);
	ctx.fillStyle = legend40above;
	ctx.fillRect(130, canvas.height / 2 + 245, 20, 20);
	ctx.stroke();
}
function drawTriangleAngleText(triangle, centroid, strokeColor) {
	if (!triangle || !Array.isArray(triangle) || triangle.length !== 3) return;
	const triangleCentroid = calculateTriangleCentroid(triangle);
	let maxSlopeAngle = getDipAngle(triangle);
	drawText((triangleCentroid.x - centroid.x) * currentScale + canvas.width / 2, (-triangleCentroid.y + centroid.y) * currentScale + canvas.height / 2, parseFloat(maxSlopeAngle).toFixed(1), strokeColor);
}
function drawTriangleBurdenReliefText(triangle, centroid, strokeColor) {
	if (!triangle || !Array.isArray(triangle) || triangle.length !== 3) return;
	const triangleCentroid = calculateTriangleCentroid(triangle);
	let burdenRelief = getBurdenRelief(triangle);
	drawText((triangleCentroid.x - centroid.x) * currentScale + canvas.width / 2, (-triangleCentroid.y + centroid.y) * currentScale + canvas.height / 2, parseFloat(burdenRelief).toFixed(1), strokeColor);
}
function getAngleBetweenEdges(edge1, edge2) {
	const dotProduct = edge1.x * edge2.x + edge1.y * edge2.y + edge1.z * edge2.z;
	const magEdge1 = Math.sqrt(edge1.x * edge1.x + edge1.y * edge1.y + edge1.z * edge1.z);
	const magEdge2 = Math.sqrt(edge2.x * edge2.x + edge2.y * edge2.y + edge2.z * edge2.z);
	const epsilon = 1e-6; // Tolerance for checking if magnitude is close to zero

	if (Math.abs(magEdge1) < epsilon || Math.abs(magEdge2) < epsilon) {
		// Handle the case where either edge is degenerate (magnitude close to zero)
		return 0;
	}

	let angle = Math.acos(dotProduct / (magEdge1 * magEdge2));
	return (angle * 180) / Math.PI;
}

function calculateTriangleCentroid(triangle) {
	const tAX = triangle[0][0];
	const tAY = triangle[0][1];
	const tAZ = triangle[0][2];
	const tBX = triangle[1][0];
	const tBY = triangle[1][1];
	const tBZ = triangle[1][2];
	const tCX = triangle[2][0];
	const tCY = triangle[2][1];
	const tCZ = triangle[2][2];

	const triangleCentroid = {
		x: (tAX + tBX + tCX) / 3,
		y: (tAY + tBY + tCY) / 3,
		z: (tAZ + tBZ + tCZ) / 3
	};
	return triangleCentroid;
}
function getDipAngle(triangle) {
	const edge1 = [triangle[1][0] - triangle[0][0], triangle[1][1] - triangle[0][1], triangle[1][2] - triangle[0][2]];
	const edge2 = [triangle[2][0] - triangle[0][0], triangle[2][1] - triangle[0][1], triangle[2][2] - triangle[0][2]];

	// Calculate the normal vector of the triangle's plane
	const normalVector = [edge1[1] * edge2[2] - edge1[2] * edge2[1], edge1[2] * edge2[0] - edge1[0] * edge2[2], edge1[0] * edge2[1] - edge1[1] * edge2[0]];

	// Calculate the dot product with the vertical direction (0, 0, 1)
	const dotProduct = normalVector[0] * 0 + normalVector[1] * 0 + normalVector[2] * 1;
	const magNormal = Math.sqrt(normalVector[0] ** 2 + normalVector[1] ** 2 + normalVector[2] ** 2);

	const epsilon = 1e-6; // Tolerance for checking if magnitude is close to zero
	if (Math.abs(magNormal) < epsilon) {
		// Handle degenerate case
		return 0;
	}

	const angleRadians = Math.acos(dotProduct / magNormal);
	const angleDegrees = (angleRadians * 180) / Math.PI;

	// Calculate the dip angle between the dot product and the horizontal plane (0 degrees)
	const dipAngle = 180 - angleDegrees;

	return dipAngle;
}

function getEdgeSlopeAngle(p1, p2) {
	const dx = p2[0] - p1[0];
	const dy = p2[1] - p1[1];
	const dz = p2[2] - p1[2]; // Consider the z-axis difference for vertical deviation
	const slopeAngleRadians = Math.atan2(dz, Math.sqrt(dx * dx + dy * dy));
	const slopeAngleDegrees = (slopeAngleRadians * 180) / Math.PI;
	return slopeAngleDegrees;
}

function getAngleBetweenPoints(p1, p2) {
	// Calculate the inferred point p3
	const p3 = [p1[0], p1[1], p2[2]];

	// Calculate the edges
	const edge1 = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
	const edge2 = [p3[0] - p1[0], p3[1] - p1[1], p3[2] - p1[2]];

	// Calculate the angle between the edges
	const angleRadians = Math.acos((edge1[0] * edge2[0] + edge1[1] * edge2[1] + edge1[2] * edge2[2]) / (vectorMagnitude(edge1) * vectorMagnitude(edge2)));

	// Convert the angle to degrees
	const angleDegrees = (angleRadians * 180) / Math.PI;

	return angleDegrees;
}

function vectorMagnitude(vector) {
	return Math.sqrt(vector[0] ** 2 + vector[1] ** 2 + vector[2] ** 2);
}

function getBurdenRelief(triangle) {
	const tAX = triangle[0][0];
	const tAY = triangle[0][1];
	const tAZ = triangle[0][2];
	const tBX = triangle[1][0];
	const tBY = triangle[1][1];
	const tBZ = triangle[1][2];
	const tCX = triangle[2][0];
	const tCY = triangle[2][1];
	const tCZ = triangle[2][2];
	// Find the earliest and latest times
	const earliestTime = Math.min(tAZ, tBZ, tCZ);
	const latestTime = Math.max(tAZ, tBZ, tCZ);

	// Calculate the time difference
	const timeDifference = latestTime - earliestTime; // ms

	// Determine which points correspond to the earliest and latest times
	let p1, p2;
	if (earliestTime === tAZ) {
		p1 = { x: tAX, y: tAY };
	} else if (earliestTime === tBZ) {
		p1 = { x: tBX, y: tBY };
	} else {
		p1 = { x: tCX, y: tCY };
	}

	if (latestTime === tAZ) {
		p2 = { x: tAX, y: tAY };
	} else if (latestTime === tBZ) {
		p2 = { x: tBX, y: tBY };
	} else {
		p2 = { x: tCX, y: tCY };
	}

	// Calculate the distance between the two points (earliest and latest)
	const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

	// Calculate burden relief in ms/m
	const burdenRelief = timeDifference / distance;

	//console.log("Time Difference (ms):", timeDifference);
	//console.log("Distance (m):", distance);
	//console.log("Burden Relief (ms/m):", burdenRelief);
	return burdenRelief;
}

function drawMousePosition(x, y) {
	ctx.strokeStyle = strokeColor;
	ctx.beginPath();
	ctx.rect(x - 7, y - 7, 14, 14);
	ctx.lineWidth = 1;
	ctx.stroke();
}

function getClickedHole(clickX, clickY) {
	// Add null check at the very beginning
	if (!points || points.length === 0) {
		return null; // No holes to check
	}

	// Adjust the click coordinates based on the current scale and centroid
	const adjustedX = (clickX - canvas.width / 2) / currentScale + centroidX;
	const adjustedY = -(clickY - canvas.height / 2) / currentScale + centroidY; // Invert the Y-coordinate
	// Calculate the distance threshold based on the scale factor

	//Create a constant called thresold set it to  (10/(currentScale/2).  If the value of thresold is less than 0.1 then set it to 0.1 else if it is greater than 2 set it to 2 else set it to 10/currentScale/2
	let threshold = 10 / (currentScale / 2);
	if (threshold > 0.2 && threshold <= 1.5) {
		10 / (currentScale / 2);
	} else if (threshold > 1.5) {
		threshold = 1.5;
	} else if (threshold < 0.2) {
		threshold = 0.2;
	}

	//keep an existing selection while the Move tool is active
	if (!isMultiHoleSelectionEnabled && !isMoveToolActive) {
		selectedMultipleHoles = [];
		drawData(points, selectedHole);
	}

	for (let i = 0; i < points.length; i++) {
		let point = points[i];
		let holeX = point.startXLocation;
		let holeY = point.startYLocation;
		let currentEntity = point.entity;

		let distance = Math.sqrt(Math.pow(holeX - adjustedX, 2) + Math.pow(holeY - adjustedY, 2));
		if (distance > threshold) {
			selectedHole = null; // Reset the selected hole ID
		}
	}
	if (isAddingConnector || isAddingMultiConnector) {
		// Loop through the points array to find the clicked hole
		for (let i = 0; i < points.length; i++) {
			let point = points[i];
			let holeX = point.startXLocation;
			let holeY = point.startYLocation;

			// Calculate the distance between the clicked point and the hole
			let distance = Math.sqrt(Math.pow(holeX - adjustedX, 2) + Math.pow(holeY - adjustedY, 2));

			// Check if the distance is within the threshold
			if (distance <= threshold) {
				//Remove this if statement if the if & if else doesn't work
				if (firstSelectedHole == null) {
					firstSelectedHole = point;
					secondSelectedHole = null;
				} else if (secondSelectedHole == null && firstSelectedHole != point && point != null) {
					secondSelectedHole = point;
					firstSelectedHole = null;
				} else {
					firstSelectedHole = null;
					secondSelectedHole = point;
				}
				return point; // Return the clicked hole
			}
		}
		//calculateTimes(points);
	} else if (!isMultiHoleSelectionEnabled && isMeasureRecording) {
		for (let i = 0; i < points.length; i++) {
			let point = points[i];
			let holeX = point.startXLocation;
			let holeY = point.startYLocation;

			let distance = Math.sqrt(Math.pow(holeX - adjustedX, 2) + Math.pow(holeY - adjustedY, 2));

			if (distance <= threshold) {
				selectedHole = point; // Update the selected hole ID

				//

				drawData(points, selectedHole);
				return point; // Return the clicked hole
			}
		}
	} else if (!isMultiHoleSelectionEnabled && (isSelectionPointerActive || isPolygonSelectionActive || isHoleEditing || isLengthPopupEditing || isDeletingHole || isBlastNameEditing || isBearingToolActive || isMoveToolActive)) {
		for (let i = 0; i < points.length; i++) {
			let point = points[i];
			let holeX = point.startXLocation;
			let holeY = point.startYLocation;
			let holeXEnd = point.endXLocation;
			let holeYEnd = point.endYLocation;

			let distance = Math.sqrt(Math.pow(holeX - adjustedX, 2) + Math.pow(holeY - adjustedY, 2));

			if (distance <= threshold) {
				selectedHole = point; // Update the selected hole ID
				// Update slider attributes here
				let holeNorthingSlider = document.getElementById("holeNorthingSlider");
				let holeEastingSlider = document.getElementById("holeEastingSlider");
				let holeElevationSlider = document.getElementById("holeElevationSlider");
				let holeLengthSlider = document.getElementById("holeLengthSlider");
				let holeDiameterSlider = document.getElementById("holeDiameterSlider");
				let holeAngleSlider = document.getElementById("holeAngleSlider");
				let holeBearingSlider = document.getElementById("holeBearingSlider");
				let holeSubdrillSlider = document.getElementById("holeSubdrillSlider");

				// Update slider attributes here

				holeEastingSlider.min = point.startXLocation - 20;
				holeEastingSlider.max = point.startXLocation + 20;
				holeEastingSlider.step = 0.1;

				holeNorthingSlider.min = point.startYLocation - 20;
				holeNorthingSlider.max = point.startYLocation + 20;
				holeNorthingSlider.step = 0.1;
				// Update slider attributes here

				holeElevationSlider.min = point.startZLocation - 20;
				holeElevationSlider.max = point.startZLocation + 20;
				holeElevationSlider.step = 0.1;

				//Length
				holeLengthSlider.step = 0.1;

				// Update slider attributes here
				holeAngleSlider.step = 1;

				// Update slider attributes here
				holeDiameterSlider.step = 1;

				// Update slider attributes here
				holeBearingSlider.step = 0.5;
				holeSubdrillSlider.step = 0.1;

				holeEastingSlider.value = point.startXLocation;
				holeNorthingSlider.value = point.startYLocation;
				holeElevationSlider.value = point.startZLocation;
				holeLengthSlider.value = point.holeLengthCalculated;
				holeDiameterSlider.value = point.holeDiameter;
				holeAngleSlider.value = point.holeAngle;
				holeBearingSlider.value = point.holeBearing;
				holeSubdrillSlider.value = point.subdrillAmount;

				holeEastingLabel.textContent = "Hole Easting (X) : " + parseFloat(point.startXLocation).toFixed(2) + "mE";
				holeNorthingLabel.textContent = "Hole Northing (Y): " + parseFloat(point.startYLocation).toFixed(2) + "mN";
				holeElevationLabel.textContent = "Hole Elevation (Z) : " + parseFloat(point.startZLocation).toFixed(2) + "m";
				holeDiameterLabel.textContent = "Hole Diameter: " + parseFloat(point.holeDiameter).toFixed(0) + "mm";
				holeLengthLabel.textContent = "Hole Length: " + parseFloat(point.holeLengthCalculated).toFixed(1) + "m";
				holeAngleLabel.textContent = "Hole Angle: " + parseFloat(point.holeAngle).toFixed(0) + "\u00B0";
				holeBearingLabel.textContent = "Hole Bearing: " + parseFloat(point.holeBearing).toFixed(1) + "\u00B0";
				holeSubdrillLabel.textContent = "Hole Subdrill: " + parseFloat(point.subdrillAmount).toFixed(1) + "m";
				drawData(points, selectedHole);
				return point; // Return the clicked hole
			}
		}
		if (isDisplayingContours) {
			try {
				const result = recalculateContours(points, deltaX, deltaY);
				contourLinesArray = result.contourLinesArray;
				directionArrows = result.directionArrows;
			} catch (error) {
				console.warn("Error calculating contour lines:", error);
			}

			// directionArrows now contains the arrow data for later drawing
		}
		if (isDisplayingSlopeTriangles) {
			try {
				[resultTriangles, reliefTriangles] = delaunayTriangles(points, maxEdgeLength);
			} catch (error) {
				console.warn("Error calculating Delaunay triangles:", error);
			}
		}
		if (isDisplayingReliefTriangles) {
			try {
				[resultTriangles, reliefTriangles] = delaunayTriangles(points, maxEdgeLength);
			} catch (error) {
				console.warn("Error calculating Delaunay triangles:", error);
			}
		}
		if (isDisplayingDirectionArrows) {
			try {
				const result = recalculateContours(points, deltaX, deltaY);
				contourLinesArray = result.contourLinesArray;
				directionArrows = result.directionArrows;
			} catch (error) {
				console.warn("Error calculating contour lines:", error);
			}
		}
		// If no hole is clicked or found within the threshold
		// Reset only the firstSelectedHole
		firstSelectedHole = null;
	}
	return null; // Return null if no hole is clicked
}

function getMultipleClickedHoles(clickX, clickY) {
	if (!isMultiHoleSelectionEnabled) {
		return selectedMultipleHoles;
	}

	// Prevent selection modification if called during a mouse move that's not intended to change selection
	if (isUpdatingSelectionFromMove) {
		return selectedMultipleHoles;
	}

	const adjustedX = (clickX - canvas.width / 2) / currentScale + centroidX;
	const adjustedY = -(clickY - canvas.height / 2) / currentScale + centroidY;
	let threshold = Math.max(Math.min(10 / (currentScale / 2), 1.5), 0.2);

	let holesWithinThreshold = [];
	for (let i = 0; i < points.length; i++) {
		let point = points[i];
		let distance = Math.sqrt((point.startXLocation - adjustedX) ** 2 + (point.startYLocation - adjustedY) ** 2);
		if (distance < threshold) {
			holesWithinThreshold.push(point);
		}
	}

	holesWithinThreshold.forEach((hole) => {
		if (!selectedMultipleHoles.includes(hole)) {
			selectedMultipleHoles.push(hole);
		} else {
			selectedMultipleHoles = selectedMultipleHoles.filter((h) => h !== hole);
			// Add UI feedback for deselection here
		}
		drawData(points, selectedHole);
	});

	let eastingSum = 0;
	let northingSum = 0;
	let elevationSum = 0;
	let lengthSum = 0;
	let diameterSum = 0;
	let angleSum = 0;
	let bearingSum = 0;
	let eastingAverage = 0;
	let northingAverage = 0;
	let elevationAverage = 0;
	let lengthAverage = 0;
	let diameterAverage = 0;
	let angleAverage = 0;
	let bearingAverage = 0;
	let subdrillSum = 0;
	let subdrillAverage = 0;

	if (isMultiHoleSelectionEnabled && (isHoleEditing || isPolygonSelectionActive || isSelectionPointerActive || isDeletingHole || isBlastNameEditing)) {
		console.log("Selected Multiple Holes: ", selectedMultipleHoles);
		selectedMultipleHoles.forEach((hole) => {
			// Average the values of the selected holes in the selectedMultipleHoles array
			// Update slider attributes with the averaged values for each attribute
			// Update the UI labels with the averaged values for each attribute
			//console.log(selectedMultipleHoles);
			eastingSum += parseFloat(hole.startXLocation);
			northingSum += parseFloat(hole.startYLocation);
			elevationSum += parseFloat(hole.startZLocation);
			lengthSum += parseFloat(hole.holeLengthCalculated);
			diameterSum += parseFloat(hole.holeDiameter);
			angleSum += parseFloat(hole.holeAngle);
			bearingSum += parseFloat(hole.holeBearing);
			subdrillSum += parseFloat(hole.subdrillAmount);
			//console.log("Sums: \n   ", eastingSum, "\n   y", northingSum, "\n   z", elevationSum, "\n   l", lengthSum, "\n   d", diameterSum, "\n   a", angleSum, "\n   b", bearingSum);
			//console.log("Length: " + selectedMultipleHoles.length);

			eastingAverage = selectedMultipleHoles.length > 1 ? parseFloat(eastingSum) / parseInt(selectedMultipleHoles.length) : parseFloat(eastingSum);
			northingAverage = selectedMultipleHoles.length > 1 ? parseFloat(northingSum) / parseInt(selectedMultipleHoles.length) : parseFloat(northingSum);
			elevationAverage = selectedMultipleHoles.length > 1 ? parseFloat(elevationSum) / parseInt(selectedMultipleHoles.length) : parseFloat(elevationSum);
			lengthAverage = selectedMultipleHoles.length > 1 ? parseFloat(lengthSum) / parseInt(selectedMultipleHoles.length) : parseFloat(lengthSum);
			diameterAverage = selectedMultipleHoles.length > 1 ? parseFloat(diameterSum) / parseInt(selectedMultipleHoles.length) : parseFloat(diameterSum);
			angleAverage = selectedMultipleHoles.length > 1 ? parseFloat(angleSum) / parseInt(selectedMultipleHoles.length) : parseFloat(angleSum);
			bearingAverage = selectedMultipleHoles.length > 1 ? parseFloat(bearingSum) / parseInt(selectedMultipleHoles.length) : parseFloat(bearingSum);
			subdrillAverage = selectedMultipleHoles.length > 1 ? parseFloat(subdrillSum) / parseInt(selectedMultipleHoles.length) : parseFloat(subdrillSum);

			//console.log("Averages: \n   x", eastingAverage, "\n   y", northingAverage, "\n   z", elevationAverage, "\n   l", lengthAverage, "\n   d", diameterAverage, "\n   a", angleAverage, "\n   b", bearingAverage);

			holeEastingLabel.textContent = "Hole Easting av(X) : " + parseFloat(eastingAverage).toFixed(2) + "mE";
			holeNorthingLabel.textContent = "Hole Northing av(Y): " + parseFloat(northingAverage).toFixed(2) + "mN";
			holeElevationLabel.textContent = "Hole Elevation av(Z) : " + parseFloat(elevationAverage).toFixed(2) + "m";
			holeDiameterLabel.textContent = "Hole Diameter: " + parseFloat(diameterAverage).toFixed(0) + "mm";
			holeLengthLabel.textContent = "Hole Length: " + parseFloat(lengthAverage).toFixed(1) + "m";
			holeAngleLabel.textContent = "Hole Angle: " + parseFloat(angleAverage).toFixed(0) + "\u00B0";
			holeBearingLabel.textContent = "Hole Bearing: " + parseFloat(bearingAverage).toFixed(1) + "\u00B0";
			holeSubdrillLabel.textContent = "Hole Subdrill: " + parseFloat(subdrillAverage).toFixed(1) + "m";
			//set the min max range to a value either side the average value
			holeEastingSlider.min = eastingAverage - 20;
			holeEastingSlider.max = eastingAverage + 20;
			holeNorthingSlider.min = northingAverage - 20;
			holeNorthingSlider.max = northingAverage + 20;
			holeElevationSlider.min = elevationAverage - 20;
			holeElevationSlider.max = elevationAverage + 20;
			//set the value of the slider
			holeEastingSlider.value = eastingAverage;
			holeNorthingSlider.value = northingAverage;
			holeElevationSlider.value = elevationAverage;
			holeLengthSlider.value = lengthAverage;
			holeDiameterSlider.value = diameterAverage;
			holeAngleSlider.value = angleAverage;
			holeBearingSlider.value = bearingAverage;
			holeSubdrillSlider.value = subdrillAverage;
			//console.log("Averages 2: \n   x", eastingAverage, "\n   y", northingAverage, "\n   z", elevationAverage, "\n   l", lengthAverage, "\n   d", diameterAverage, "\n   a", angleAverage, "\n   b", bearingAverage);
		});
	}

	return selectedMultipleHoles;
}

// New function to handle averaging and slider updates
function updateSelectionAveragesAndSliders(selectedHoles) {
	if (!selectedHoles || selectedHoles.length === 0) return;

	let eastingSum = 0;
	let northingSum = 0;
	let elevationSum = 0;
	let lengthSum = 0;
	let diameterSum = 0;
	let angleSum = 0;
	let bearingSum = 0;
	let subdrillSum = 0;

	// Calculate sums
	selectedHoles.forEach((hole) => {
		eastingSum += parseFloat(hole.startXLocation);
		northingSum += parseFloat(hole.startYLocation);
		elevationSum += parseFloat(hole.startZLocation);
		lengthSum += parseFloat(hole.holeLengthCalculated);
		diameterSum += parseFloat(hole.holeDiameter);
		angleSum += parseFloat(hole.holeAngle);
		bearingSum += parseFloat(hole.holeBearing);
		subdrillSum += parseFloat(hole.subdrillAmount);
	});

	// Calculate averages
	const count = selectedHoles.length;
	const eastingAverage = count > 1 ? eastingSum / count : eastingSum;
	const northingAverage = count > 1 ? northingSum / count : northingSum;
	const elevationAverage = count > 1 ? elevationSum / count : elevationSum;
	const lengthAverage = count > 1 ? lengthSum / count : lengthSum;
	const diameterAverage = count > 1 ? diameterSum / count : diameterSum;
	const angleAverage = count > 1 ? angleSum / count : angleSum;
	const bearingAverage = count > 1 ? bearingSum / count : bearingSum;
	const subdrillAverage = count > 1 ? subdrillSum / count : subdrillSum;

	// Update labels
	holeEastingLabel.textContent = "Hole Easting av(X) : " + parseFloat(eastingAverage).toFixed(2) + "mE";
	holeNorthingLabel.textContent = "Hole Northing av(Y): " + parseFloat(northingAverage).toFixed(2) + "mN";
	holeElevationLabel.textContent = "Hole Elevation av(Z) : " + parseFloat(elevationAverage).toFixed(2) + "m";
	holeDiameterLabel.textContent = "Hole Diameter: " + parseFloat(diameterAverage).toFixed(0) + "mm";
	holeLengthLabel.textContent = "Hole Length: " + parseFloat(lengthAverage).toFixed(1) + "m";
	holeAngleLabel.textContent = "Hole Angle: " + parseFloat(angleAverage).toFixed(0) + "\u00B0";
	holeBearingLabel.textContent = "Hole Bearing: " + parseFloat(bearingAverage).toFixed(1) + "\u00B0";
	holeSubdrillLabel.textContent = "Hole Subdrill: " + parseFloat(subdrillAverage).toFixed(1) + "m";

	// Update slider ranges
	holeEastingSlider.min = eastingAverage - 20;
	holeEastingSlider.max = eastingAverage + 20;
	holeNorthingSlider.min = northingAverage - 20;
	holeNorthingSlider.max = northingAverage + 20;
	holeElevationSlider.min = elevationAverage - 20;
	holeElevationSlider.max = elevationAverage + 20;

	// Update slider values
	holeEastingSlider.value = eastingAverage;
	holeNorthingSlider.value = northingAverage;
	holeElevationSlider.value = elevationAverage;
	holeLengthSlider.value = lengthAverage;
	holeDiameterSlider.value = diameterAverage;
	holeAngleSlider.value = angleAverage;
	holeBearingSlider.value = bearingAverage;
	holeSubdrillSlider.value = subdrillAverage;
}

const colorConnectorElement = document.getElementById("connectorColor");
const floatingConnectorColorElement = document.getElementById("floatingConnectorColor");
const colorDrawingElement = document.getElementById("drawingColor");
function getJSColorHexDrawing() {
	// Get the JSColor instance from the element
	const jsColorInstance = colorDrawingElement.jscolor;
	// Get the color value
	const colorHex = jsColorInstance.toHEXString(); // This will get the color in HEX format, e.g., "#FF0000"
	return colorHex;
}
// Use jscolor.ready to ensure pickers are initialized before adding event handlers
jscolor.ready(function () {
	if (colorConnectorElement && colorConnectorElement.jscolor && floatingConnectorColorElement && floatingConnectorColorElement.jscolor) {
		// Sync from the main color picker to the floating one
		colorConnectorElement.jscolor.option("onInput", function () {
			// 'this' refers to the jscolor instance that triggered the event
			floatingConnectorColorElement.jscolor.fromString(this.toHEXString());
		});

		// Sync from the floating color picker to the main one
		floatingConnectorColorElement.jscolor.option("onInput", function () {
			colorConnectorElement.jscolor.fromString(this.toHEXString());
		});
	}
});

function getJSColorHex() {
	// Try floating first, then main
	if (floatingConnectorColorElement && floatingConnectorColorElement.jscolor) {
		return floatingConnectorColorElement.jscolor.toHEXString();
	}
	if (colorConnectorElement && colorConnectorElement.jscolor) {
		return colorConnectorElement.jscolor.toHEXString();
	}
	return "#FF0000"; // Default fallback
}

const delayElement = document.getElementById("delay");
const floatingDelayElement = document.getElementById("floatingDelay");

delayElement.addEventListener("input", function () {
	floatingDelayElement.value = this.value;
});

floatingDelayElement.addEventListener("input", function () {
	delayElement.value = this.value;
});

function getDelayValue() {
	// Return the floating delay if it exists and has a value, otherwise use main delay
	if (floatingDelayElement && floatingDelayElement.value) {
		return parseInt(floatingDelayElement.value);
	}
	if (delayElement && delayElement.value) {
		return parseInt(delayElement.value);
	}
	return 0; // Default fallback value
}

function handleConnectorClick(event) {
	// Get the click/touch coordinates relative to the canvas
	const rect = canvas.getBoundingClientRect();
	const clickX = event.clientX - rect.left;
	const clickY = event.clientY - rect.top;
	const clickedHole = getClickedHole(clickX, clickY);
	if (isAddingConnector) {
		if (clickedHole) {
			if (!fromHoleStore) {
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
				// TODO: Update UI or provide feedback for selecting fromHole
			} else {
				selectedHole = clickedHole;
				const delay = getDelayValue();
				const clickedHoleIndex = points.findIndex((point) => point === clickedHole);

				if (clickedHoleIndex !== -1) {
					// Use the new combined format for fromHoleID
					points[clickedHoleIndex].fromHoleID = `${fromHoleStore.entityName}:::${fromHoleStore.holeID}`;
					points[clickedHoleIndex].timingDelayMilliseconds = delay;
					points[clickedHoleIndex].colorHexDecimal = getJSColorHex();
				}
				fromHoleStore = null;
				const result = recalculateContours(points, deltaX, deltaY);
				contourLinesArray = result.contourLinesArray;
				directionArrows = result.directionArrows;

				// directionArrows now contains the arrow data for later drawing

				drawData(points, selectedHole);
			}
		}
	} else if (isAddingMultiConnector) {
		if (clickedHole) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
				// TODO: Update UI or provide feedback for selecting fromHole
			} else {
				const selectedHole = clickedHole;
				const pointsInLine = getPointsInLine(fromHoleStore, selectedHole);
				if (pointsInLine.length > 0) {
					connectPointsInLine(pointsInLine);
				}
				// Reset the fromHole and exit add connector mode
				fromHoleStore = null;

				const result = recalculateContours(points, deltaX, deltaY);
				contourLinesArray = result.contourLinesArray;
				directionArrows = result.directionArrows;

				// directionArrows now contains the arrow data for later drawing

				drawData(points, selectedHole);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
	}
}

function getPointsInLine(startPoint, endPoint, tolerance) {
	const pointsInLine = [];
	tolerance = connectAmount;
	const dx = endPoint.startXLocation - startPoint.startXLocation;
	const dy = endPoint.startYLocation - startPoint.startYLocation;
	const length = Math.sqrt(dx * dx + dy * dy);
	const dirX = dx / length;
	const dirY = dy / length;

	for (const point of points) {
		if (point !== startPoint && point !== endPoint) {
			const vecX = point.startXLocation - startPoint.startXLocation;
			const vecY = point.startYLocation - startPoint.startYLocation;
			const dotProduct = vecX * dirX + vecY * dirY;
			if (dotProduct >= 0 && dotProduct <= length) {
				const distanceToLine = Math.abs(vecX * dirY - vecY * dirX);
				if (distanceToLine <= tolerance) {
					pointsInLine.push(point);
				}
			}
		}
	}

	// Add start and end points to the array
	pointsInLine.unshift(startPoint);
	pointsInLine.push(endPoint);

	return pointsInLine;
}

function connectPointsInLine(pointsInLine) {
	// Sort points based on distance from the fromHoleStore
	pointsInLine.sort((a, b) => {
		const distanceA = calculateDistance(fromHoleStore, a);
		const distanceB = calculateDistance(fromHoleStore, b);
		return distanceA - distanceB;
	});

	let previousHoleID = `${fromHoleStore.entityName}:::${fromHoleStore.holeID}`;

	// Connect each point to the previous point
	for (let i = 1; i < pointsInLine.length; i++) {
		const point = pointsInLine[i];
		const pointIndex = points.findIndex((p) => p === point);

		if (pointIndex !== -1) {
			points[pointIndex].fromHoleID = previousHoleID;
			points[pointIndex].timingDelayMilliseconds = getDelayValue();
			points[pointIndex].colorHexDecimal = getJSColorHex();
		}

		previousHoleID = `${point.entityName}:::${point.holeID}`;
	}
}

// Function to calculate the distance between two points
function calculateDistance(point1, point2) {
	const dx = point2.startXLocation - point1.startXLocation;
	const dy = point2.startYLocation - point1.startYLocation;
	return Math.sqrt(dx * dx + dy * dy);
}

let selectedPoint = null;

function getClickedPointInMap(map, clickX, clickY) {
	const adjustedX = (clickX - canvas.width / 2) / currentScale + centroidX;
	const adjustedY = -(clickY - canvas.height / 2) / currentScale + centroidY;
	let threshold = 10 / (currentScale / 2);
	let closestPoint = null;
	let minDistance = threshold;

	// Iterate over the keys of the map
	for (const entityName of map.keys()) {
		const entity = map.get(entityName);
		for (const point of entity.data) {
			const distance = Math.sqrt(Math.pow(point.pointXLocation - adjustedX, 2) + Math.pow(point.pointYLocation - adjustedY, 2));

			if (distance <= threshold && distance < minDistance) {
				closestPoint = point;
				minDistance = distance;
			}
		}
	}
	drawData(points, selectedHole);
	return closestPoint;
}

function getClickedPoint(event) {
	// get the values from clicking in the canvas
	const rect = canvas.getBoundingClientRect();
	let clickX = event.clientX - rect.left;
	let clickY = event.clientY - rect.top;
	if (isNaN(event.clientX - rect.left) || isNaN(event.clientY - rect.top)) {
		// Handle the case when the values are NaN
		clickX = event.changedTouches[0].clientX - rect.left;
		clickY = event.changedTouches[0].clientY - rect.top;
	} else {
		// Proceed with the calculation using the valid values
		clickX = event.clientX - rect.left;
		clickY = event.clientY - rect.top;
	}
	// SNAPPIN SNAP CODE:
	const snapResult = canvasToWorldWithSnap(clickX, clickY);
	worldX = snapResult.worldX;
	worldY = snapResult.worldY;

	// Show snap feedback if snapped
	if (snapResult.snapped) {
		updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
		setTimeout(() => updateStatusMessage(""), 1500);
	}

	if (isDeletingKAD) {
		selectedPoint = getClickedPointInMap(allKADDrawingsMap, clickX, clickY);
		drawData(points, selectedHole);
		return selectedPoint;
	}
	// if (isDeletingLine) {
	// 	selectedPoint = getClickedPointInMap(allKADDrawingsMap, clickX, clickY);
	// 	drawData(points, selectedHole);
	// 	return selectedPoint;
	// }
	// if (isDeletingPoly) {
	// 	selectedPoint = getClickedPointInMap(allKADDrawingsMap, clickX, clickY);
	// 	drawData(points, selectedHole);
	// 	return selectedPoint;
	// }
	// if (isDeletingText) {
	// 	selectedPoint = getClickedPointInMap(allKADDrawingsMap, clickX, clickY);
	// 	drawData(points, selectedHole);
	// 	return selectedPoint;
	// }
	// if (isDeletingCircle) {
	// 	selectedPoint = getClickedPointInMap(allKADDrawingsMap, clickX, clickY);
	// 	drawData(points, selectedHole);
	// 	return selectedPoint;
	// }
	drawData(points, selectedHole);
	// If none of the flags match, return null
	return null;
}

function offsetObjectWithSelectedPoint(map, selectedPoint, direction, offsetAmount, checkForCrossover = false, extendIfNecessary = false) {
	if (selectedPoint) {
		const entityName = selectedPoint.entityName;
		const entityType = selectedPoint.entityType;

		// Create a new entity for the offset polyline
		const newEntity = {
			entityName: `${entityName}_offset`, // Modify this as needed
			entityType: entityType,
			data: []
		};

		let prevPoint = null;

		// Offset and check for crossovers if needed
		for (const point of selectedPoint.data) {
			let offsetX = point.pointXLocation;
			let offsetY = point.pointYLocation;

			if (direction === "right") {
				offsetX += offsetAmount;
			} else if (direction === "left") {
				offsetX -= offsetAmount;
			} else if (direction === "up") {
				offsetY -= offsetAmount;
			} else if (direction === "down") {
				offsetY += offsetAmount;
			}

			if (checkForCrossover && prevPoint) {
				// Check for crossover and shorten the segment if needed
				const distance = Math.sqrt(Math.pow(offsetX - prevPoint.pointXLocation, 2) + Math.pow(offsetY - prevPoint.pointYLocation, 2));

				if (distance > offsetAmount) {
					const ratio = offsetAmount / distance;
					offsetX = prevPoint.pointXLocation + (offsetX - prevPoint.pointXLocation) * ratio;
					offsetY = prevPoint.pointYLocation + (offsetY - prevPoint.pointYLocation) * ratio;
				}
			}

			// Add the offset point to the new entity
			newEntity.data.push({
				entityName: newEntity.entityName,
				entityType: newEntity.entityType,
				pointID: point.pointID, // Preserve point ID or modify as needed
				pointXLocation: offsetX,
				pointYLocation: offsetY,
				pointZLocation: point.pointZLocation,
				lineWidth: point.lineWidth,
				color: point.color
			});

			if (extendIfNecessary && prevPoint) {
				const distance = Math.sqrt(Math.pow(offsetX - prevPoint.pointXLocation, 2) + Math.pow(offsetY - prevPoint.pointYLocation, 2));

				if (distance > offsetAmount) {
					// Extend the line segment if points get further away after offsetting
					newEntity.data.push({
						entityName: newEntity.entityName,
						entityType: newEntity.entityType,
						pointID: point.pointID, // Preserve point ID or modify as needed
						pointXLocation: offsetX,
						pointYLocation: offsetY,
						pointZLocation: point.pointZLocation,
						lineWidth: point.lineWidth,
						color: point.color
					});
				}
			}

			prevPoint = point;
		}

		// Add the new entity to the appropriate map (line or poly)
		if (entityType === "poly") {
			allKADDrawingsMap.set(newEntity.entityName, newEntity);
		} else if (entityType === "line") {
			allKADDrawingsMap.set(newEntity.entityName, newEntity);
		}

		// Redraw the canvas or perform any other necessary updates
		drawData(points, selectedHole);

		// Return the newly created entity if needed
		return newEntity;
	}
}

function deleteSelectedPoint() {
	if (selectedPoint && isDeletingKAD) {
		deletePointInMap(allKADDrawingsMap, selectedPoint);
	}
}
// Helper function to determine entity type from selected point
function getEntityTypeFromSelectedPoint(selectedPoint) {
	// Find which entity this point belongs to
	for (const [entityName, entity] of allKADDrawingsMap.entries()) {
		const foundPoint = entity.data.find((point) => point.pointID === selectedPoint.pointID && point.pointXLocation === selectedPoint.pointXLocation && point.pointYLocation === selectedPoint.pointYLocation);

		if (foundPoint) {
			return entity.entityType;
		}
	}
	return null;
}
function deleteSelectedObject() {
	if (selectedPoint && isDeletingKAD) {
		deleteObjectInMap(allKADDrawingsMap, selectedPoint);
		// ADD THIS: Save after delete
		debouncedSaveKAD();
	}
}

function deleteSelectedAll() {
	if (selectedPoint && isDeletingKAD) {
		// Determine entity type from the selected point
		const entityType = getEntityTypeFromSelectedPoint(selectedPoint);
		if (entityType) {
			deleteAllOfType(allKADDrawingsMap, entityType);
			// ADD THIS: Save after delete all of type
			debouncedSaveKAD();
		}
	}
}

// Enhanced function to delete only specific entity types and clear selection
function deleteAllOfType(map, entityType) {
	const entitiesToDelete = [];
	let shouldClearSelection = false;

	// Find all entities of the specified type
	for (const [entityName, entity] of map.entries()) {
		if (entity.entityType === entityType) {
			entitiesToDelete.push(entityName);

			// Check if the selected point belongs to this entity
			if (selectedPoint && entity.data.some((point) => point.pointID === selectedPoint.pointID && point.pointXLocation === selectedPoint.pointXLocation && point.pointYLocation === selectedPoint.pointYLocation)) {
				shouldClearSelection = true;
			}
		}
	}

	// Delete them
	entitiesToDelete.forEach((entityName) => {
		map.delete(entityName);
		console.log(`Deleted ${entityType} entity: ${entityName}`);
	});

	// Clear selection if the selected point was deleted
	if (shouldClearSelection) {
		selectedPoint = null;
		selectedKADObject = null; // Clear this too if it exists
		selectedKADPolygon = null; // And this one
	}

	updateStatusMessage(`Deleted ${entitiesToDelete.length} ${entityType} entities`);
	drawData(points, selectedHole);
	setTimeout(() => updateStatusMessage(""), 2000);
}
function deletePointInMap(map, pointToDelete) {
	for (const [entityName, entity] of map) {
		const dataIndex = entity.data.findIndex((point) => {
			return point.pointID === pointToDelete.pointID && point.pointXLocation === pointToDelete.pointXLocation && point.pointYLocation === pointToDelete.pointYLocation;
		});

		if (dataIndex !== -1) {
			entity.data.splice(dataIndex, 1);
			updateStatusMessage(`Deleted point ${pointToDelete.pointID} from ${entity.entityType}`);

			// If entity has no more points, delete the entire entity
			if (entity.data.length === 0) {
				map.delete(entityName);
				updateStatusMessage(`Deleted empty ${entity.entityType} entity: ${entityName}`);
			}

			selectedPoint = null;
			drawData(points, selectedHole);
			setTimeout(() => updateStatusMessage(""), 2000);
			// ADD THIS: Save after delete point
			debouncedSaveKAD();
			break;
		}
	}
}

function deleteObjectInMap(map, pointToDelete) {
	for (const [entityName, entity] of map) {
		const foundPoint = entity.data.find((point) => point.pointID === pointToDelete.pointID && point.pointXLocation === pointToDelete.pointXLocation && point.pointYLocation === pointToDelete.pointYLocation);

		if (foundPoint) {
			map.delete(entityName);
			updateStatusMessage(`Deleted ${entity.entityType} entity: ${entityName}`);
			selectedPoint = null;
			drawData(points, selectedHole);
			setTimeout(() => updateStatusMessage(""), 2000);
			// ADD THIS: Save after delete object
			debouncedSaveKAD();
			break;
		}
	}
}

function deleteAllInMap(map) {
	map.clear();
	selectedPoint = null;
	drawData(points, selectedHole);
	// ADD THIS: Save after delete all in map
	debouncedSaveKAD();
}

function deleteSelectedHoles() {
	let holesWereActuallyDeleted = false; // To track if the points array was modified

	if (isDeletingHole) {
		const entitiesToRenumber = new Set(); // Store unique entity names that need renumbering

		if (selectedMultipleHoles.length > 0) {
			console.log(`Processing deletion for ${selectedMultipleHoles.length} selected holes.`);
			const originalPointsLength = points.length;

			// Create a Set of hole references for efficient filtering
			const holesToDeleteReferences = new Set(selectedMultipleHoles);

			points = points.filter((point) => {
				if (holesToDeleteReferences.has(point)) {
					//console.log("Deleting Hole ID:", point.holeID, "in:", point.entityName);
					if (isRenumberingHoles) {
						entitiesToRenumber.add(point.entityName);
					}
					return false; // Exclude this point (effectively deleting it)
				}
				return true; // Keep this point
			});

			if (points.length < originalPointsLength) {
				holesWereActuallyDeleted = true;
			}

			// Clear selections after processing
			selectedMultipleHoles = [];
			selectedHole = null; // Ensure single selection is also cleared
		} else if (selectedHole !== null) {
			//console.log("Processing deletion for single Hole ID:", selectedHole.holeID, "in:", selectedHole.entityName);
			const holeToRemove = selectedHole; // Cache before selectedHole is nulled
			const originalPointsLength = points.length;

			points = points.filter((point) => point !== holeToRemove);

			if (points.length < originalPointsLength) {
				holesWereActuallyDeleted = true;
				if (isRenumberingHoles) {
					entitiesToRenumber.add(holeToRemove.entityName);
				}
			}
			// Clear selection after processing
			selectedHole = null;
		}

		if (holesWereActuallyDeleted) {
			// Perform renumbering for all affected entities if enabled
			if (isRenumberingHoles) {
				entitiesToRenumber.forEach((entityName) => {
					// deleteRenumberStart is expected to be globally available and set appropriately
					//console.log("Renumbering for Entity:", entityName, "starting at:", deleteRenumberStart);
					renumberHolesFunction(deleteRenumberStart, entityName);
				});
			}

			// Reset fromHoleStore as selections involving it are now gone
			fromHoleStore = null;

			// Note: Original intermediate recalculations and drawData(points, null) call
			// are omitted here because refreshPoints() handles these operations comprehensively.
		}
	}

	refreshPoints(); // This function will save changes, reload points, recalculate all necessary data, and redraw.
}

//function to delete holes that have the same entity name in both the points array and the map
function deleteSelectedPattern() {
	if (isDeletingHole) {
		if (selectedHole !== null) {
			// find the selected holeIDs entityName
			let entityNameToDelete = points.find((point) => point === selectedHole).entityName;

			// Remove holes with the same entityName from kadHolesMap
			for (const [entityName, entity] of kadHolesMap) {
				if (entityName === entityNameToDelete) {
					kadHolesMap.delete(entityName);
				}
			}

			// Remove holes with the same entityName from the points array
			points = points.filter((point) => point.entityName !== entityNameToDelete);

			// Reset the selected holeID
			selectedHole = null;
			// Reset the fromHoleStore
			fromHoleStore = null;
			// Recalculate contour lines
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength); // Recalculate triangles
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;

			// directionArrows now contains the arrow data for later drawing

			drawData(points, selectedHole);
		} else {
			drawData(points, selectedHole);
		}
	}
	refreshPoints();
}

//function to delete All Entities in the kadHolesMap and all the Entityies in the points array
function deleteSelectedAllPatterns() {
	console.log("🚨 deleteSelectedAllPatterns called!");
	console.log("isDeletingHole:", isDeletingHole);
	console.log("selectedHole:", selectedHole);
	console.log("selectedMultipleHoles:", selectedMultipleHoles);
	console.log("Stack trace:", new Error().stack);
	if (isDeletingHole) {
		if (selectedHole !== null || selectedMultipleHoles.length > 0) {
			// Remove all holes from kadHolesMap
			//kadHolesMap.clear();

			// Remove all holes from the points array
			points = [];

			// Reset the selected holeID
			selectedHole = null;
			// Reset the fromHoleStore
			fromHoleStore = null;
			// Recalculate contour lines
			const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength); // Recalculate triangles
			holeTimes = calculateTimes(points);
			const result = recalculateContours(points, deltaX, deltaY);
			contourLinesArray = result.contourLinesArray;
			directionArrows = result.directionArrows;

			// directionArrows now contains the arrow data for later drawing

			drawData(points, selectedHole);
		} else {
			drawData(points, selectedHole);
		}
	}
}

function handleHoleDeletingClick(event) {
	if (isDeletingHole) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole && !isMultiHoleSelectionEnabled) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
			} else {
				drawData(points, selectedHole);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
		// Get the clicked hole or holes
		const multipleClickedHoles = getMultipleClickedHoles(clickX, clickY);
		if (multipleClickedHoles.length > 0 && isMultiHoleSelectionEnabled) {
			selectedMultipleHoles = [...multipleClickedHoles]; // Update the selection
			drawData(points, selectedHole); // You might need to modify this function to handle multiple selected holes
		}
	}
}

function renumberHolesFunction(startNumber, selectedEntityName) {
	//console.log("Renumbering holes for Entity:", selectedEntityName);

	const oldToNewHoleIDMap = new Map();

	// Renumber holes and keep track of old to new IDs
	points.forEach((point) => {
		if (point.entityName === selectedEntityName) {
			oldToNewHoleIDMap.set(point.holeID, startNumber);
			point.holeID = startNumber++;
		}
	});

	// Update fromHoleID references
	points.forEach((point) => {
		if (point.fromHoleID) {
			const [entity, oldHoleID] = point.fromHoleID.split(":::");
			if (entity === selectedEntityName && oldToNewHoleIDMap.has(oldHoleID)) {
				point.fromHoleID = `${entity}:::${oldToNewHoleIDMap.get(oldHoleID)}`;
			}
		}
	});
	refreshPoints();
	drawData(points, selectedHole);
}

function handleHoleAddingClick(event) {
	if (isAddingHole) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		let clickX = event.clientX - rect.left;
		let clickY = event.clientY - rect.top;

		if (isNaN(event.clientX - rect.left) || isNaN(event.clientY - rect.top)) {
			// Handle the case when the values are NaN
			clickX = event.changedTouches[0].clientX - rect.left;
			clickY = event.changedTouches[0].clientY - rect.top;
		} else {
			// Proceed with the calculation using the valid values
			clickX = event.clientX - rect.left;
			clickY = event.clientY - rect.top;
		}
		// SNAPPIN SNAP:
		const snapResult = canvasToWorldWithSnap(clickX, clickY);
		worldX = snapResult.worldX;
		worldY = snapResult.worldY;

		// Show snap feedback if snapped
		if (snapResult.snapped) {
			updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
			setTimeout(() => updateStatusMessage(""), 1500);
		}
	} else {
		worldX = null;
		worldY = null;
	}
}

function handleKADPointClick(event) {
	if (isDrawingPoint) {
		// get the values from clicking in the canvas
		const rect = canvas.getBoundingClientRect();
		let clickX = event.clientX - rect.left;
		let clickY = event.clientY - rect.top;
		if (isNaN(event.clientX - rect.left) || isNaN(event.clientY - rect.top)) {
			// Handle the case when the values are NaN
			clickX = event.changedTouches[0].clientX - rect.left;
			clickY = event.changedTouches[0].clientY - rect.top;
		} else {
			// Proceed with the calculation using the valid values
			clickX = event.clientX - rect.left;
			clickY = event.clientY - rect.top;
		}
		// SNAPPIN SNAP:
		const snapResult = canvasToWorldWithSnap(clickX, clickY);
		worldX = snapResult.worldX;
		worldY = snapResult.worldY;

		// Show snap feedback if snapped
		if (snapResult.snapped) {
			updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
			setTimeout(() => updateStatusMessage(""), 1500);
		}
		addKADPoint();
		debouncedUpdateTreeView();
	} else {
		worldX = null;
		worldY = null;
		lastKADDrawPoint = null; // Reset when switching tools
		//save the drawing using douncedSave
		debouncedUpdateTreeView(); // Use debounced version
		debouncedSaveKAD();
	}
}
function addKADPoint() {
	if (isDrawingPoint) {
		const color = getJSColorHexDrawing();
		const entityType = "point";

		// Use the same entity management as lines/polygons
		const pointID = allKADDrawingsMap.has(entityName) ? allKADDrawingsMap.get(entityName).data.length + 1 : 1;
		const pointXLocation = worldX;
		const pointYLocation = worldY;
		const pointZLocation = drawingZValue || document.getElementById("drawingElevation").value || 0;

		// Create new entity name if needed (like other tools)
		if (createNewEntity) {
			entityName = "pointObject" + (allKADDrawingsMap.size + 1);
			createNewEntity = false; // Set to false after creating new entity
		}

		const pointObject = {
			entityName: entityName,
			entityType: entityType,
			pointID: pointID,
			pointXLocation: pointXLocation,
			pointYLocation: pointYLocation,
			pointZLocation: pointZLocation,
			color: color,
			connected: false,
			closed: false
		};

		// Create the entity if it doesn't exist
		if (!allKADDrawingsMap.has(entityName)) {
			allKADDrawingsMap.set(entityName, {
				entityName: entityName,
				entityType: entityType,
				data: []
			});
		}

		allKADDrawingsMap.get(entityName).data.push(pointObject);

		drawData(points, selectedHole);
		debouncedSaveKAD();
		debouncedUpdateTreeView();
		console.log("Added point", pointID, "to", entityName);
	}
}

function handleKADLineClick(event) {
	if (isDrawingLine) {
		// get the values from clicking in the canvas
		const rect = canvas.getBoundingClientRect();
		let clickX = event.clientX - rect.left;
		let clickY = event.clientY - rect.top;
		if (isNaN(event.clientX - rect.left) || isNaN(event.clientY - rect.top)) {
			// Handle the case when the values are NaN
			clickX = event.changedTouches[0].clientX - rect.left;
			clickY = event.changedTouches[0].clientY - rect.top;
		} else {
			// Proceed with the calculation using the valid values
			clickX = event.clientX - rect.left;
			clickY = event.clientY - rect.top;
		}
		// SNAPPIN SNAP:
		const snapResult = canvasToWorldWithSnap(clickX, clickY);
		worldX = snapResult.worldX;
		worldY = snapResult.worldY;

		// Show snap feedback if snapped
		if (snapResult.snapped) {
			updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
			setTimeout(() => updateStatusMessage(""), 1500);
		}
		addKADLine();
		debouncedUpdateTreeView(); // Use debounced version
	} else {
		worldX = null;
		worldY = null;
		lastKADDrawPoint = null; // Reset when switching tools
		//save the drawing using douncedSave
		debouncedSaveKAD();
	}
}
// Around line 8361, replace addKADLine:
function addKADLine() {
	if (isDrawingLine) {
		const entityType = "line";
		const pointID = allKADDrawingsMap.has(entityName) ? allKADDrawingsMap.get(entityName).data.length + 1 : 1; // Changed map
		const pointXLocation = worldX;
		const pointYLocation = worldY;
		const pointZLocation = drawingZValue || document.getElementById("drawingElevation").value || 0;
		const lineWidth = document.getElementById("drawingLineWidth").value;
		const color = getJSColorHexDrawing();

		if (createNewEntity) {
			entityName = "lineObject" + (allKADDrawingsMap.size + 1); // Changed map
			createNewEntity = false;
		}

		const lineObject = {
			entityName: entityName,
			entityType: entityType,
			pointID: pointID,
			pointXLocation: pointXLocation,
			pointYLocation: pointYLocation,
			pointZLocation: pointZLocation,
			lineWidth: lineWidth,
			color: color,
			closed: false // Added: lines are open
		};

		// Add to allKADDrawingsMap instead
		if (!allKADDrawingsMap.has(entityName)) {
			allKADDrawingsMap.set(entityName, {
				name: entityName,
				entityType: entityType,
				data: []
			});
		}
		allKADDrawingsMap.get(entityName).data.push(lineObject); // Changed map
		updateLastKADDrawPoint(pointXLocation, pointYLocation);
	}
	drawData(points, selectedHole);
	debouncedSaveKAD();
	debouncedUpdateTreeView();
}

function handleKADPolyClick(event) {
	if (isDrawingPoly) {
		// get the values from clicking in the canvas
		const rect = canvas.getBoundingClientRect();
		let clickX = event.clientX - rect.left;
		let clickY = event.clientY - rect.top;
		if (isNaN(event.clientX - rect.left) || isNaN(event.clientY - rect.top)) {
			// Handle the case when the values are NaN
			clickX = event.changedTouches[0].clientX - rect.left;
			clickY = event.changedTouches[0].clientY - rect.top;
		} else {
			// Proceed with the calculation using the valid values
			clickX = event.clientX - rect.left;
			clickY = event.clientY - rect.top;
		}
		// SNAPPIN SNAP:
		const snapResult = canvasToWorldWithSnap(clickX, clickY);
		worldX = snapResult.worldX;
		worldY = snapResult.worldY;

		// Show snap feedback if snapped
		if (snapResult.snapped) {
			updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
			setTimeout(() => updateStatusMessage(""), 1500);
		}

		addKADPoly();
	} else {
		worldX = null;
		worldY = null;
		lastKADDrawPoint = null; // Reset when switching tools
		//save the drawing using douncedSave
		debouncedSaveKAD();
		debouncedUpdateTreeView();
	}
}
// Function to add a point to the allKADDrawingsMap
function addKADPoly() {
	if (isDrawingPoly) {
		// Create a new point object or use the existing one
		const entityType = "poly";
		const pointID = allKADDrawingsMap.has(entityName) ? allKADDrawingsMap.get(entityName).data.length + 1 : 1;
		const pointXLocation = worldX;
		const pointYLocation = worldY;
		const pointZLocation = drawingZValue || document.getElementById("drawingElevation").value || 0;
		const lineWidth = document.getElementById("drawingLineWidth").value;
		const color = getJSColorHexDrawing();
		const closed = true; // Default to closed polygon

		if (createNewEntity) {
			entityName = "polyObject" + (allKADDrawingsMap.size + 1);
			createNewEntity = false; // Set the flag to false after creating a new entity
		}

		const polyObject = {
			entityName: entityName,
			entityType: entityType,
			pointID: pointID,
			pointXLocation: pointXLocation,
			pointYLocation: pointYLocation,
			pointZLocation: pointZLocation,
			lineWidth: lineWidth,
			color: color,
			closed: closed // Set to true if the polygon is closed
		};

		// Add the point to allKADDrawingsMap
		if (!allKADDrawingsMap.has(entityName)) {
			allKADDrawingsMap.set(entityName, {
				name: entityName,
				entityType: entityType,
				data: []
			});
		}
		allKADDrawingsMap.get(entityName).data.push(polyObject);
		// Add this line to update the last draw point
		updateLastKADDrawPoint(pointXLocation, pointYLocation);
	}
	drawData(points, selectedHole);
	debouncedSaveKAD();
	debouncedUpdateTreeView();
	console.log("allKADDrawingsMap: ", allKADDrawingsMap);
}

function handleKADCircleClick(event) {
	if (isDrawingCircle) {
		// get the values from clicking in the canvas
		const rect = canvas.getBoundingClientRect();
		let clickX = event.clientX - rect.left;
		let clickY = event.clientY - rect.top;
		if (isNaN(event.clientX - rect.left) || isNaN(event.clientY - rect.top)) {
			// Handle the case when the values are NaN
			clickX = event.changedTouches[0].clientX - rect.left;
			clickY = event.changedTouches[0].clientY - rect.top;
		} else {
			// Proceed with the calculation using the valid values
			clickX = event.clientX - rect.left;
			clickY = event.clientY - rect.top;
		}
		// SNAPPIN SNAP:
		const snapResult = canvasToWorldWithSnap(clickX, clickY);
		worldX = snapResult.worldX;
		worldY = snapResult.worldY;

		// Show snap feedback if snapped
		if (snapResult.snapped) {
			updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
			setTimeout(() => updateStatusMessage(""), 1500);
		}

		addKADCircle();
	} else {
		worldX = null;
		worldY = null;
		lastKADDrawPoint = null; // Reset when switching tools
		//save the drawing using douncedSave
		debouncedSaveKAD();
	}
}
function addKADCircle() {
	if (isDrawingCircle) {
		const color = getJSColorHexDrawing();
		const radius = circleRadius.value;
		const entityType = "circle";

		// Use the same entity management as other tools
		const pointID = allKADDrawingsMap.has(entityName) ? allKADDrawingsMap.get(entityName).data.length + 1 : 1;
		const pointXLocation = worldX;
		const pointYLocation = worldY;
		const pointZLocation = drawingZValue || document.getElementById("drawingElevation").value || 0;
		const lineWidth = document.getElementById("drawingLineWidth").value;

		// Create new entity name if needed (like other tools)
		if (createNewEntity) {
			entityName = "circleObject" + (allKADDrawingsMap.size + 1);
			createNewEntity = false; // Set to false after creating new entity
		}

		const circleObject = {
			entityName: entityName,
			entityType: entityType,
			pointID: pointID,
			pointXLocation: pointXLocation,
			pointYLocation: pointYLocation,
			pointZLocation: pointZLocation,
			radius: radius,
			lineWidth: lineWidth,
			color: color,
			connected: false,
			closed: false
		};

		// Create the entity if it doesn't exist
		if (!allKADDrawingsMap.has(entityName)) {
			allKADDrawingsMap.set(entityName, {
				entityName: entityName,
				entityType: entityType,
				data: []
			});
		}

		allKADDrawingsMap.get(entityName).data.push(circleObject);

		drawData(points, selectedHole);
		debouncedSaveKAD();
		debouncedUpdateTreeView();
		console.log("Added circle", pointID, "to", entityName);
	}
}
function handleKADTextClick(event) {
	if (isDrawingText) {
		// get the values from clicking in the canvas
		const rect = canvas.getBoundingClientRect();
		let clickX = event.clientX - rect.left;
		let clickY = event.clientY - rect.top;
		if (isNaN(event.clientX - rect.left) || isNaN(event.clientY - rect.top)) {
			// Handle the case when the values are NaN
			clickX = event.changedTouches[0].clientX - rect.left;
			clickY = event.changedTouches[0].clientY - rect.top;
		} else {
			// Proceed with the calculation using the valid values
			clickX = event.clientX - rect.left;
			clickY = event.clientY - rect.top;
		}
		// SNAPPIN SNAP:
		const snapResult = canvasToWorldWithSnap(clickX, clickY);
		worldX = snapResult.worldX;
		worldY = snapResult.worldY;

		// Show snap feedback if snapped
		if (snapResult.snapped) {
			updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
			setTimeout(() => updateStatusMessage(""), 1500);
		}

		addKADText();
	} else {
		worldX = null;
		worldY = null;
		lastKADDrawPoint = null; // Reset when switching tools
		//save the drawing using douncedSave
		debouncedSaveKAD();
	}
}

// Enhanced function to evaluate calculations with user-friendly error handling
async function processTextCalculationWithValidation(text) {
	if (text.startsWith("=")) {
		try {
			const expression = text.substring(1); // Remove '='
			const calculatedValue = eval(expression);

			// Check if result is valid
			if (isNaN(calculatedValue) || !isFinite(calculatedValue)) {
				throw new Error("Result is not a valid number");
			}

			return calculatedValue.toString(); // Return the result as a string
		} catch (error) {
			// Show user-friendly error popup
			const result = await showCalculationErrorPopup(text, error.message);
			return result; // Will be either corrected text or original
		}
	}
	return text; // Return original text if not a calculation
}

// Show calculation error popup with helpful feedback
function showCalculationErrorPopup(originalText, errorMessage) {
	return new Promise((resolve) => {
		// Generate helpful error message
		let helpfulMessage = "Unknown calculation error";
		let suggestions = "";

		if (errorMessage.includes("Unexpected token")) {
			helpfulMessage = "Invalid mathematical expression";
			suggestions = "• Check for typos in operators (+, -, *, /)<br>• Make sure parentheses are balanced<br>• Use only numbers and basic math operators";
		} else if (errorMessage.includes("not defined")) {
			helpfulMessage = "Unknown variable or function";
			suggestions = "• Only use numbers and basic math operators (+, -, *, /, ())<br>• Variables and custom functions are not supported";
		} else if (errorMessage.includes("not a valid number")) {
			helpfulMessage = "Calculation result is invalid";
			suggestions = "• Check for division by zero<br>• Ensure the result is a finite number";
		} else {
			suggestions = "• Use format: =5+3 or =10*2<br>• Only basic math operators are supported<br>• Check for syntax errors";
		}

		Swal.fire({
			title: "Calculation Error",
			showCancelButton: true,
			showDenyButton: true,
			confirmButtonText: "Fix It",
			denyButtonText: "As Text",
			cancelButtonText: "Cancel",
			icon: "error",
			html: `
				<div style="text-align: center;">
					<label class="labelWhite16"><strong>Formula:</strong> ${originalText}</label><br><br>
					<label class="labelWhite14"><strong>Error:</strong> ${helpfulMessage}</label><br><br>
					<label class="labelWhite12"><strong>Suggestions:</strong></label><br>
					<div style="text-align: left; margin: 10px 20px;">
						<label class="labelWhite10">${suggestions}</label>
					</div><br>
					<label class="labelWhite12"><strong>Examples:</strong></label><br>
					<label class="labelWhite10">=5+3 → 8</label><br>
					<label class="labelWhite10">=10*2.5 → 25</label><br>
					<label class="labelWhite10">=(100+50)/2 → 75</label>
				</div>
			`,
			customClass: {
				container: "custom-popup-container",
				title: "swal2-title",
				confirmButton: "confirm",
				denyButton: "deny", // Use deny styling for "Use As Text"
				cancelButton: "cancel",
				content: "swal2-content",
				htmlContainer: "swal2-html-container",
				icon: "swal2-icon"
			}
		}).then((result) => {
			if (result.isConfirmed) {
				// User wants to fix it - keep the text field focused for editing
				resolve(null); // Signal to not save and let user edit
			} else if (result.isDenied) {
				// User wants to use as regular text (remove the = sign)
				resolve(originalText.substring(1)); // Remove = and store as plain text
			} else {
				// User cancelled - don't save anything
				resolve(null);
			}
		});
	});
}

async function addKADText() {
	console.log("=== addKADText() called ===");
	console.log("createNewEntity:", createNewEntity);
	console.log("current entityName:", entityName);
	console.log("isDrawingText:", isDrawingText);

	if (isDrawingText) {
		// Get the text value from the input field
		let text = document.getElementById("drawingText").value.trim();

		// Check if text is blank and warn user
		if (text === "") {
			const result = await Swal.fire({
				title: "No Text Entered",
				icon: "warning",
				html: `<div style="text-align: left;">Please enter some text before placing it on the canvas.</div>`,
				showCancelButton: true,
				confirmButtonText: "Enter Text",
				cancelButtonText: "Cancel"
			});

			if (result.isConfirmed) {
				return; // Let user enter text
			} else {
				// Exit text mode if cancelled
				isDrawingText = false;
				document.getElementById("addTextDraw").checked = false;
				return;
			}
		}

		const color = getJSColorHexDrawing();
		const entityType = "text";

		// Use the same entity management as other tools
		const pointID = allKADDrawingsMap.has(entityName) ? allKADDrawingsMap.get(entityName).data.length + 1 : 1;
		const pointXLocation = worldX;
		const pointYLocation = worldY;
		const pointZLocation = drawingZValue || document.getElementById("drawingElevation").value || 0;

		console.log("Before entity creation check:");
		console.log("  createNewEntity:", createNewEntity);
		console.log("  entityName:", entityName);
		console.log("  allKADDrawingsMap.has(entityName):", allKADDrawingsMap.has(entityName));

		// Create new entity name if needed (like other tools)
		if (createNewEntity) {
			console.log("Creating new entity...");
			entityName = "textObject" + (allKADDrawingsMap.size + 1);
			createNewEntity = false; // Set to false after creating new entity
			console.log("New entityName:", entityName);
		} else {
			console.log("Using existing entityName:", entityName);
		}

		const textObject = {
			entityName: entityName,
			entityType: entityType,
			pointID: pointID,
			pointXLocation: pointXLocation,
			pointYLocation: pointYLocation,
			pointZLocation: pointZLocation,
			text: text,
			color: color,
			connected: false,
			closed: false
		};

		// Create the entity if it doesn't exist
		if (!allKADDrawingsMap.has(entityName)) {
			console.log("Creating new map entry for:", entityName);
			allKADDrawingsMap.set(entityName, {
				entityName: entityName,
				entityType: entityType,
				data: []
			});
		} else {
			console.log("Using existing map entry for:", entityName);
			console.log("Existing entity type:", allKADDrawingsMap.get(entityName).entityType);
		}

		allKADDrawingsMap.get(entityName).data.push(textObject);

		drawData(points, selectedHole);
		debouncedUpdateTreeView();
		console.log("Added text", pointID, "to", entityName);
		console.log("Final entity type:", allKADDrawingsMap.get(entityName).entityType);
		debouncedSaveKAD();
	}
}
// Using SweetAlert Library Create a popup that gets input from the user.
//Add a column selections system to be able to select the manny attributes of the AQM file
//Ignore, Angle, Azimuth, Instruction, Diameter, Material Type, Name, Blast, Pattern, Easting, Northing, Elevation
//Eleven Possible columns
function saveAQMPopup() {
	const savedAQMPopupSettings = JSON.parse(localStorage.getItem("savedAQMPopupSettings")) || {};
	let blastNameFromPoints = points[0].entityName;
	console.log("blastName: " + blastNameFromPoints);
	Swal.fire({
		title: "Export AQM file?",
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
            <div class="button-container-2col">
                <label class="labelWhite15" for="fileName">File Name</label>
                <input type="text" id="fileName" value="${blastNameFromPoints}_AQM" placeholder="File Name"/>
				<label class="labelWhite15" for="blastName">Blast Name</label>
                <input type="text" id="blastName" value="${blastNameFromPoints}" placeholder="Blast Name"/>
				<label class="labelWhite15" for="patternName">Pattern Name</label>
                <input type="text" id="patternName" value="${blastNameFromPoints}" placeholder="Pattern Name"/>
				<label class="labelWhite15" for="materialType">Material Type</label>
				<input type="text" id="materialType" placeholder="Material Type" value="Material"/>
				<label class="labelWhite15" for="Instruction">Instruction</label>
				<input type="text" id="instruction" placeholder="Instruction" value="Instruction" />
            </div>
			<label class="labelWhite12">AQM file outputs Select the column order below:</label><br>
			<div class="button-container-2col">
				<label class="labelWhite12">Use hole type as instruction:</label>
				<input type="checkbox" id="useHoleTypeAsInstruction" name="useHoleTypeAsInstruction" value="useHoleTypeAsInstruction">
				<label class="labelWhite12">Write Ignore Columns:</label>
				<input type="checkbox" id="writeIgnoreColumn" name="writeIgnoreColumn" value="writeIgnoreColumn" checked="true">
				<label class="labelWhite12">Column 1:</label>
				<select id="column1Dropdown">
					<option value="Angle">Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast" selected>Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern" selected>Pattern</option>
				</select>
				<label class="labelWhite12">Column 2:</label>
				<select id="column2Dropdown">
					<option value="Angle">Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast" selected>Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
				<label class="labelWhite12">Column 3:</label>
				<select id="column3Dropdown">
					<option value="Angle">Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast">Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name" selected>Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
				<label class="labelWhite12">Column 4:</label>
				<select id="column4Dropdown">
					<option value="Angle">Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast">Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting" selected>Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
				<label class="labelWhite12">Column 5:</label>
				<select id="column5Dropdown">
					<option value="Angle">Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast">Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing" selected>Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
				<label class="labelWhite12">Column 6:</label>
				<select id="column6Dropdown">
					<option value="Angle">Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast">Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation" selected>Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
				<label class="labelWhite12">Column 7:</label>
				<select id="column7Dropdown">
					<option value="Angle" selected>Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast">Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
				<label class="labelWhite12">Column 8:</label>
				<select id="column8Dropdown">	
					<option value="Angle">Angle</option>
					<option value="Azimuth" selected>Azimuth</option>
					<option value="Blast">Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
				<label class="labelWhite12">Column 9:</label>
				<select id="column9Dropdown">
					<option value="Angle">Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast">Blast</option>
					<option value="Diameter" selected>Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
				<label class="labelWhite12">Column 10:</label>
				<select id="column10Dropdown">
					<option value="Angle">Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast">Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction" selected>Instruction</option>
					<option value="Material Type">Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
				<label class="labelWhite12">Column 11:</label>
				<select id="column11Dropdown">
					<option value="Angle">Angle</option>
					<option value="Azimuth">Azimuth</option>
					<option value="Blast">Blast</option>
					<option value="Diameter">Diameter</option>
					<option value="Easting">Easting</option>
					<option value="Elevation">Elevation</option>
					<option value="Ignore">Ignore</option>
					<option value="Instruction">Instruction</option>
					<option value="Material Type" selected>Material Type</option>
					<option value="Name">Name</option>
					<option value="Northing">Northing</option>
					<option value="Pattern">Pattern</option>
				</select>
			</div>
        `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		},
		preConfirm: () => {
			// Get user input values
			const fileNameInput = document.getElementById("fileName");
			const blastNameInput = document.getElementById("blastName");
			const patternNameInput = document.getElementById("patternName");
			const materialTypeInput = document.getElementById("materialType");
			const instructionInput = document.getElementById("instruction");
			const useHoleTypeAsInstructionInput = document.getElementById("useHoleTypeAsInstruction");
			const writeIgnoreColumnInput = document.getElementById("writeIgnoreColumn");
			const column1Dropdown = document.getElementById("column1Dropdown");
			const column2Dropdown = document.getElementById("column2Dropdown");
			const column3Dropdown = document.getElementById("column3Dropdown");
			const column4Dropdown = document.getElementById("column4Dropdown");
			const column5Dropdown = document.getElementById("column5Dropdown");
			const column6Dropdown = document.getElementById("column6Dropdown");
			const column7Dropdown = document.getElementById("column7Dropdown");
			const column8Dropdown = document.getElementById("column8Dropdown");
			const column9Dropdown = document.getElementById("column9Dropdown");
			const column10Dropdown = document.getElementById("column10Dropdown");
			const column11Dropdown = document.getElementById("column11Dropdown");

			const fileNameValue = fileNameInput.value;
			const blastName = blastNameInput.value;
			const patternName = patternNameInput.value;
			const materialType = materialTypeInput.value;
			const instruction = instructionInput.value;
			const useHoleTypeAsInstruction = useHoleTypeAsInstructionInput.checked;
			const writeIgnoreColumn = writeIgnoreColumnInput.checked;

			const column1Value = column1Dropdown.value;
			const column2Value = column2Dropdown.value;
			const column3Value = column3Dropdown.value;
			const column4Value = column4Dropdown.value;
			const column5Value = column5Dropdown.value;
			const column6Value = column6Dropdown.value;
			const column7Value = column7Dropdown.value;
			const column8Value = column8Dropdown.value;
			const column9Value = column9Dropdown.value;
			const column10Value = column10Dropdown.value;
			const column11Value = column11Dropdown.value;

			// Create the column order array
			let columnOrderArray = [column1Value, column2Value, column3Value, column4Value, column5Value, column6Value, column7Value, column8Value, column9Value, column10Value, column11Value];
			// Save the selected settings to localStorage
			savedAQMPopupSettings.fileNameValue = fileNameValue;
			savedAQMPopupSettings.blastName = blastName;
			savedAQMPopupSettings.patternName = patternName;
			savedAQMPopupSettings.materialType = materialType;
			savedAQMPopupSettings.instruction = instruction;
			savedAQMPopupSettings.useHoleTypeAsInstruction = useHoleTypeAsInstruction;
			savedAQMPopupSettings.writeIgnoreColumn = writeIgnoreColumn;
			savedAQMPopupSettings.columnOrderArray = columnOrderArray;
			localStorage.setItem("savedAQMPopupSettings", JSON.stringify(savedAQMPopupSettings));
		}
	}).then((result) => {
		if (result.isConfirmed) {
			// Get user input values
			const fileNameInput = document.getElementById("fileName");
			const fileNameValue = fileNameInput.value;
			const blastNameInput = document.getElementById("blastName");
			const blastName = blastNameInput.value;
			const patternNameInput = document.getElementById("patternName");
			const patternName = patternNameInput.value;
			const materialTypeInput = document.getElementById("materialType");
			const materialType = materialTypeInput.value;
			const instructionInput = document.getElementById("instruction");
			const instruction = instructionInput.value;
			if (fileNameValue === "") {
				// Show an alert to the user with a customized error button
				Swal.fire({
					title: "File Name is Null or Invalid",
					icon: "error",
					showCancelButton: false,
					confirmButtonText: "Error",
					customClass: {
						container: "custom-popup-container",
						title: "swal2-title",
						confirmButton: "cancel",
						content: "swal2-content",
						htmlContainer: "swal2-html-container",
						icon: "swal2-icon"
					}
				});
				return; // Exit the function
			}
			let useHoleTypeAsInstruction = document.getElementById("useHoleTypeAsInstruction").checked;
			let writeIgnoreColumn = document.getElementById("writeIgnoreColumn").checked;
			// Get selected values from the dropdowns
			const column1Dropdown = document.getElementById("column1Dropdown");
			const column2Dropdown = document.getElementById("column2Dropdown");
			const column3Dropdown = document.getElementById("column3Dropdown");
			const column4Dropdown = document.getElementById("column4Dropdown");
			const column5Dropdown = document.getElementById("column5Dropdown");
			const column6Dropdown = document.getElementById("column6Dropdown");
			const column7Dropdown = document.getElementById("column7Dropdown");
			const column8Dropdown = document.getElementById("column8Dropdown");
			const column9Dropdown = document.getElementById("column9Dropdown");
			const column10Dropdown = document.getElementById("column10Dropdown");
			const column11Dropdown = document.getElementById("column11Dropdown");
			const column1Value = column1Dropdown.value;
			const column2Value = column2Dropdown.value;
			const column3Value = column3Dropdown.value;
			const column4Value = column4Dropdown.value;
			const column5Value = column5Dropdown.value;
			const column6Value = column6Dropdown.value;
			const column7Value = column7Dropdown.value;
			const column8Value = column8Dropdown.value;
			const column9Value = column9Dropdown.value;
			const column10Value = column10Dropdown.value;
			const column11Value = column11Dropdown.value;
			// Create the column order array
			let columnOrderArray = [column1Value, column2Value, column3Value, column4Value, column5Value, column6Value, column7Value, column8Value, column9Value, column10Value, column11Value];
			// Convert the points to a CSV string using the selected column orders
			let aqm = convertPointsToAQMCSV(points, fileNameValue, blastName, patternName, materialType, instruction, useHoleTypeAsInstruction, writeIgnoreColumn, columnOrderArray);
			if (isIOS()) {
				// Create a Blob with the XML data
				const blob = new Blob([aqm], {
					type: "text/csv;charset=utf-8"
				});
				// Create a URL for the Blob
				const url = URL.createObjectURL(blob);
				// Create an anchor element with the download link
				const link = document.createElement("a");
				link.href = url;
				link.download = fileNameValue + ".aqm";
				link.textContent = "Click here to download";
				// Append the link to the document
				document.body.appendChild(link);
				// Programmatically trigger the click event on the link
				link.click();
				// Remove the link from the document
				document.body.removeChild(link);
			} else {
				// Create an invisible anchor element
				const link = document.createElement("a");
				link.style.display = "none";

				// Set the XML content as the "href" attribute
				link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(aqm);
				link.download = fileNameValue + ".aqm";

				// Append the link to the document
				document.body.appendChild(link);

				// Programmatically trigger the click event on the link
				link.click();

				// Remove the link from the document
				document.body.removeChild(link);
			}
		}
	});
	// Populate form fields with saved settings
	const fileNameInput = document.getElementById("fileName");
	const blastNameInput = document.getElementById("blastName");
	const patternNameInput = document.getElementById("patternName");
	const materialTypeInput = document.getElementById("materialType");
	const instructionInput = document.getElementById("instruction");
	const useHoleTypeAsInstructionInput = document.getElementById("useHoleTypeAsInstruction");
	const writeIgnoreColumnInput = document.getElementById("writeIgnoreColumn");
	const column1Dropdown = document.getElementById("column1Dropdown");
	const column2Dropdown = document.getElementById("column2Dropdown");
	const column3Dropdown = document.getElementById("column3Dropdown");
	const column4Dropdown = document.getElementById("column4Dropdown");
	const column5Dropdown = document.getElementById("column5Dropdown");
	const column6Dropdown = document.getElementById("column6Dropdown");
	const column7Dropdown = document.getElementById("column7Dropdown");
	const column8Dropdown = document.getElementById("column8Dropdown");
	const column9Dropdown = document.getElementById("column9Dropdown");
	const column10Dropdown = document.getElementById("column10Dropdown");
	const column11Dropdown = document.getElementById("column11Dropdown");
	// Add more dropdown elements as needed

	fileNameInput.value = savedAQMPopupSettings.fileNameValue || "";
	blastNameInput.value = savedAQMPopupSettings.blastName || "";
	patternNameInput.value = savedAQMPopupSettings.patternName || "";
	materialTypeInput.value = savedAQMPopupSettings.materialType || "";
	instructionInput.value = savedAQMPopupSettings.instruction || "";
	useHoleTypeAsInstructionInput.checked = savedAQMPopupSettings.useHoleTypeAsInstruction || false;
	writeIgnoreColumnInput.checked = savedAQMPopupSettings.writeIgnoreColumn || true;
	column1Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[0] : "Pattern";
	column2Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[1] : "Blast";
	column3Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[2] : "Name";
	column4Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[3] : "Easting";
	column5Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[4] : "Northing";
	column6Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[5] : "Elevation";
	column7Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[6] : "Angle";
	column8Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[7] : "Azimuth";
	column9Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[8] : "Diameter";
	column10Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[9] : "Instruction";
	column11Dropdown.value = savedAQMPopupSettings.columnOrderArray ? savedAQMPopupSettings.columnOrderArray[10] : "Material Type";
	// Set values for more dropdowns as needed
}

// Using SweetAlert Library Create a popup that gets input from the user.
// Updated addHolePopup function with proper field handling
function addHolePopup() {
	let blastNameValue = "Added_hole_" + new Date().getTime();
	//Retrieve the last entered values from local storage
	let savedAddHolePopupSettings = JSON.parse(localStorage.getItem("savedAddHolePopupSettings")) || {};
	let lastValues = {
		blastName: savedAddHolePopupSettings.blastName || blastNameValue,
		useCustomHoleID: savedAddHolePopupSettings.useCustomHoleID !== undefined ? savedAddHolePopupSettings.useCustomHoleID : false,
		useGradeZ: savedAddHolePopupSettings.useGradeZ !== undefined ? savedAddHolePopupSettings.useGradeZ : false,
		customHoleID: savedAddHolePopupSettings.customHoleID || "",
		elevation: savedAddHolePopupSettings.elevation || 0,
		gradeZ: savedAddHolePopupSettings.gradeZ || 0,
		diameter: savedAddHolePopupSettings.diameter || 115,
		type: savedAddHolePopupSettings.type || "Production",
		length: savedAddHolePopupSettings.length || 0,
		subdrill: savedAddHolePopupSettings.subdrill || 0,
		angle: savedAddHolePopupSettings.angle || 0,
		bearing: savedAddHolePopupSettings.bearing || 0
	};

	// Calculate default length if using grade Z
	const defaultLength = lastValues.useGradeZ ? Math.abs((lastValues.elevation - lastValues.gradeZ + lastValues.subdrill) / Math.cos(lastValues.angle * (Math.PI / 180))) : lastValues.length;

	// Calculate default grade if using length
	const defaultGradeZ = !lastValues.useGradeZ ? lastValues.elevation - (lastValues.length - lastValues.subdrill) * Math.cos(lastValues.angle * (Math.PI / 180)) : lastValues.gradeZ;

	Swal.fire({
		title: "Add a hole to the Pattern?",
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
		<div class="button-container-2col">
			<label class="labelWhite18" for="blastName">Blast Name</label>
			<input type="text3" id="blastName" placeholder="Blast Name" value="${lastValues.blastName}" />
		  	<label class="labelWhite18" for="useCustomHoleID">Use Custom Hole ID</label>
		  	<input type="checkbox" id="useCustomHoleID" name="useCustomHoleID" ${lastValues.useCustomHoleID ? "checked" : ""}>
            <label class="labelWhite18" for="useGradeZ">Use Grade Z</label>
		  	<input type="checkbox" id="useGradeZ" name="useGradeZ" ${lastValues.useGradeZ ? "checked" : ""}>
		  	<label class="labelWhite18" for="customHoleID">Hole ID</label>
		  	<input type="text3" id="customHoleID" placeholder="Custom Hole ID" value="${lastValues.customHoleID}" />
		  	<label class="labelWhite18" for="elevation">Start Z</label>
		  	<input type="number3" id="elevation" placeholder="Elevation" value="${lastValues.elevation}" inputmode="decimal" pattern="[0-9]*"/>
            <label class="labelWhite18" for="gradeZ">Grade Z</label>
		  	<input type="number3" id="gradeZ" placeholder="Grade Z" value="${defaultGradeZ}" inputmode="decimal" pattern="[0-9]*" ${!lastValues.useGradeZ ? "disabled" : ""}/>
			<label class="labelWhite18" for="diameter">Diameter</label>
			<input type="number3" id="diameter" name="diameter" placeholder="Diameter" value="${lastValues.diameter}" step=1 min="0" max="1000" inputmode="decimal" pattern="[0-9]*"/>
			<label class="labelWhite18" for="type">Type</label>
			<input type="text3" id="type" name="type" placeholder="Type" value="${lastValues.type}"/>
		  	<label class="labelWhite18" for="length">Length</label>
		  	<input type="number3" id="length" placeholder="Length" value="${defaultLength}" inputmode="decimal" pattern="[0-9]*" ${lastValues.useGradeZ ? "disabled" : ""}/>
            <label class="labelWhite18" for="subdrill">Subdrill</label>
		  	<input type="number3" id="subdrill" placeholder="Subdrill" value="${lastValues.subdrill}" inputmode="decimal" pattern="[0-9]*"/>
		  	<label class="labelWhite18" for="angle">Angle</label>
		  	<input type="number3" id="angle" placeholder="Angle" value="${lastValues.angle}" min="0" max="60" inputmode="decimal" pattern="[0-9]*"/>
		  	<label class="labelWhite18" for="bearing">Bearing</label>
		  	<input type="number3" id="bearing" placeholder="Bearing" value="${lastValues.bearing}" inputmode="decimal" pattern="[0-9]*"/>
		  </div>
	  `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		},
		didOpen: () => {
			// Add event listeners after the popup is opened
			const useGradeZCheckbox = document.getElementById("useGradeZ");
			const gradeZInput = document.getElementById("gradeZ");
			const lengthInput = document.getElementById("length");
			const elevationInput = document.getElementById("elevation");
			const angleInput = document.getElementById("angle");
			const subdrillInput = document.getElementById("subdrill");

			// Function to update fields based on checkbox state
			function updateFieldsBasedOnUseGradeZ() {
				const useGradeZ = useGradeZCheckbox.checked;

				// Enable/disable fields
				gradeZInput.disabled = !useGradeZ;
				lengthInput.disabled = useGradeZ;

				// Update calculations
				if (useGradeZ) {
					// Calculate length from grade
					const elevation = parseFloat(elevationInput.value) || 0;
					const gradeZ = parseFloat(gradeZInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedLength = Math.abs((elevation - gradeZ + subdrill) / Math.cos(angleRad));
					lengthInput.value = calculatedLength.toFixed(2);
				} else {
					// Calculate grade from length
					const elevation = parseFloat(elevationInput.value) || 0;
					const length = parseFloat(lengthInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedGradeZ = elevation - (length - subdrill) * Math.cos(angleRad);
					gradeZInput.value = calculatedGradeZ.toFixed(2);
				}
			}

			// Add event listeners for changes
			useGradeZCheckbox.addEventListener("change", updateFieldsBasedOnUseGradeZ);
			gradeZInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			lengthInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			elevationInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			angleInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			subdrillInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);

			// Initial update
			updateFieldsBasedOnUseGradeZ();
		}
	}).then((result) => {
		if (result.isConfirmed) {
			const useCustomHoleID = document.getElementById("useCustomHoleID").checked;
			const useGradeZ = document.getElementById("useGradeZ").checked;
			const customHoleID = document.getElementById("customHoleID").value;

			const blastNameInput = document.getElementById("blastName");
			const blastNameValue = blastNameInput.value;
			if (blastNameValue === null || blastNameValue === "") {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid Blast Name",
					showCancelButton: true,
					showConfirmButton: false,
					html: `<label class="labelWhite18">Error parsing Blast Name</label>`,
					customClass: {
						container: "custom-popup-container",
						title: "swal2-title",
						cancelButton: "Try Again",
						content: "swal2-content",
						htmlContainer: "swal2-html-container",
						icon: "error"
					}
				});
				return; // Exit the function
			}

			//diameter checks
			const diameterInput = document.getElementById("diameter");
			const diameterValue = parseFloat(diameterInput.value);
			if (isNaN(diameterValue) || diameterValue < 0 || diameterValue > 1000) {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid Diameter",
					text: "Please enter an diameter between 0 and 1000 millimeters.",
					icon: "error",
					customClass: {
						container: "custom-popup-container",
						popup: "custom-popup-container"
					}
				});
				return; // Exit the function
			}
			//type checks which is only text
			const typeInput = document.getElementById("type");
			const typeValue = typeInput.value;
			if (typeValue === null || typeValue === "") {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid Type",
					text: "Please enter a Type.",
					icon: "error",
					customClass: {
						container: "custom-popup-container",
						popup: "custom-popup-container"
					}
				});
				return; // Exit the function
			}
			const elevationInput = document.getElementById("elevation");
			const elevationValue = parseFloat(elevationInput.value);
			if (isNaN(elevationValue) || elevationValue < -20000 || elevationValue > 20000) {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid Elevation",
					text: "Please enter an elevation between -20000 and 20000 meters.",
					icon: "error",
					customClass: {
						container: "custom-popup-container",
						popup: "custom-popup-container"
					}
				});
				return; // Exit the function
			}
			const gradeZInput = document.getElementById("gradeZ");
			const gradeZValue = parseFloat(gradeZInput.value);
			if (isNaN(gradeZValue) || gradeZValue < -20000 || gradeZValue > 20000) {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid Grade Z",
					text: "Please enter an grade Z between -20000 and 20000 meters.",
					icon: "error",
					customClass: {
						container: "custom-popup-container",
						popup: "custom-popup-container"
					}
				});
				return; // Exit the function
			}
			const lengthInput = document.getElementById("length");
			const lengthValue = parseFloat(lengthInput.value);
			if (isNaN(lengthValue) || lengthValue < 0 || lengthValue > 100) {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid length",
					text: "Please enter an length between 0 and 100 meters.",
					icon: "error",
					customClass: {
						container: "custom-popup-container",
						popup: "custom-popup-container"
					}
				});
				return; // Exit the function
			}

			const subdrillInput = document.getElementById("subdrill");
			const subdrillValue = parseFloat(subdrillInput.value);
			if (isNaN(subdrillValue) || subdrillValue < 0 || subdrillValue > 100) {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid subdrill",
					text: "Please enter an subdrill between 0 and 100 meters.",
					icon: "error",
					customClass: {
						container: "custom-popup-container",
						popup: "custom-popup-container"
					}
				});
				return; // Exit the function
			}

			const angleInput = document.getElementById("angle");
			const angleValue = parseFloat(angleInput.value);

			if (isNaN(angleValue) || angleValue < 0 || angleValue > 60) {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid Angle",
					text: "Please enter an angle between 0 and 60 degrees.",
					icon: "error",
					customClass: {
						container: "custom-popup-container",
						popup: "custom-popup-container"
					}
				});
				return; // Exit the function
			}
			const bearingInput = document.getElementById("bearing");
			const bearingValue = parseFloat(bearingInput.value);

			if (isNaN(bearingValue) || bearingValue < 0 || bearingValue > 360) {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid Bearing",
					text: "Please enter an bearing between 0 and 360 degrees.",
					icon: "error",
					customClass: {
						container: "custom-popup-container",
						popup: "custom-popup-container"
					}
				});
				return; // Exit the function
			}

			lastValues = {
				blastName: blastNameValue,
				useCustomHoleID: useCustomHoleID,
				useGradeZ: useGradeZ,
				customHoleID: customHoleID,
				elevation: elevationValue,
				gradeZ: gradeZValue,
				diameter: diameterValue,
				type: typeValue,
				length: lengthValue,
				subdrill: subdrillValue,
				angle: angleValue,
				bearing: bearingValue
			};
			localStorage.setItem("savedAddHolePopupSettings", JSON.stringify(lastValues));

			// PROXIMITY CHECK: Check for nearby holes before adding
			const proximityHoles = checkHoleProximity(parseFloat(worldX), parseFloat(worldY), parseFloat(diameterValue), points);

			if (proximityHoles.length > 0) {
				const newHoleInfo = {
					entityName: blastNameValue,
					holeID: useCustomHoleID ? customHoleID : (points.length + 1).toString(),
					x: parseFloat(worldX),
					y: parseFloat(worldY),
					diameter: parseFloat(diameterValue)
				};

				showProximityWarning(proximityHoles, newHoleInfo).then((proximityResult) => {
					if (proximityResult.isConfirmed) {
						// User chose to continue - add the hole
						addHole(useCustomHoleID, useGradeZ, blastNameValue, useCustomHoleID ? customHoleID : points.length + 1, parseFloat(worldX), parseFloat(worldY), parseFloat(elevationValue), parseFloat(gradeZValue), parseFloat(diameterValue), typeValue, parseFloat(lengthValue), parseFloat(subdrillValue), parseFloat(angleValue), parseFloat(bearingValue));
					} else if (proximityResult.isDenied) {
						// User chose to skip - don't add this hole
						console.log("Skipped hole due to proximity");
					}
					// If proximityResult.isDismissed (cancel), do nothing
				});
			} else {
				// No proximity issues - add the hole normally
				addHole(useCustomHoleID, useGradeZ, blastNameValue, useCustomHoleID ? customHoleID : points.length + 1, parseFloat(worldX), parseFloat(worldY), parseFloat(elevationValue), parseFloat(gradeZValue), parseFloat(diameterValue), typeValue, parseFloat(lengthValue), parseFloat(subdrillValue), parseFloat(angleValue), parseFloat(bearingValue));
			}
		} else {
			worldX = null;
			worldY = null;
		}
	});
}

function handlePatternAddingClick(event) {
	if (isAddingPattern) {
		// Get the click/touch coordinates relative to the canvas
		//const rect = canvas.getBoundingClientRect();
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		let clickX = event.clientX - rect.left;
		let clickY = event.clientY - rect.top;

		if (isNaN(event.clientX - rect.left) || isNaN(event.clientY - rect.top)) {
			// Handle the case when the values are NaN
			clickX = event.changedTouches[0].clientX - rect.left;
			clickY = event.changedTouches[0].clientY - rect.top;
		} else {
			// Proceed with the calculation using the valid values
			clickX = event.clientX - rect.left;
			clickY = event.clientY - rect.top;
		}
		// SNAPPIN SNAP:
		const snapResult = canvasToWorldWithSnap(clickX, clickY);
		worldX = snapResult.worldX;
		worldY = snapResult.worldY;

		// Show snap feedback if snapped
		if (snapResult.snapped) {
			updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
			setTimeout(() => updateStatusMessage(""), 1500);
		}
		addPatternPopup(parseFloat(worldX.toFixed(3)), parseFloat(worldY.toFixed(3)));
		//console.log("worldX: " + worldX + " worldY: " + worldY);
	} else {
		worldX = null;
		worldY = null;
	}
}

function addPatternPopup(worldX, worldY) {
	//Retrieve the last entered values from local storage
	let savedAddPatternPopupSettings = JSON.parse(localStorage.getItem("savedAddPatternPopupSettings")) || {};
	let lastValues = {
		blastName: savedAddPatternPopupSettings.blastName || blastNameValue,
		nameTypeIsNumerical: savedAddPatternPopupSettings.nameTypeIsNumerical || true,
		rowOrientation: savedAddPatternPopupSettings.rowOrientation || 90.0,
		x: savedAddPatternPopupSettings.x || worldX,
		y: savedAddPatternPopupSettings.y || worldY,
		z: savedAddPatternPopupSettings.z || 100,
		useGradeZ: savedAddPatternPopupSettings.useGradeZ || false,
		gradeZ: savedAddPatternPopupSettings.gradeZ || 94,
		diameter: savedAddPatternPopupSettings.diameter || 115,
		type: savedAddPatternPopupSettings.type || "Production",
		angle: savedAddPatternPopupSettings.angle || 0,
		bearing: savedAddPatternPopupSettings.bearing || 180,
		length: savedAddPatternPopupSettings.length || 6.2,
		subdrill: savedAddPatternPopupSettings.subdrill || 0,
		spacingOffset: savedAddPatternPopupSettings.spacingOffset || 0.5,
		burden: savedAddPatternPopupSettings.burden || 3.0,
		spacing: savedAddPatternPopupSettings.spacing || 3.3,
		rows: savedAddPatternPopupSettings.rows || 6,
		holesPerRow: savedAddPatternPopupSettings.holesPerRow || 10
	};

	// Show loading spinner while the popup is created
	Swal.showLoading();

	// Create the SweetAlert popup
	Swal.fire({
		title: "Add a Pattern?",
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
        <div class="button-container-2col">
          <label class="labelWhite18" for="blastName">Blast Name</label>
          <input type="text3" id="blastName" name="blastName" placeholder="Blast Name" value="${lastValues.blastName}"/>
          <label class="labelWhite18" for="nameTypeIsNumerical">Numerical Names</label>
          <input type="checkbox" id="nameTypeIsNumerical" name="nameTypeIsNumerical" ${lastValues.nameTypeIsNumerical ? "checked" : ""}>
          
          <label class="labelWhite18" for="rowOrientation">Orientation</label>
          <input type="number3" id="rowOrientation" name="rowOrientation" placeholder="rowOrientation" value="${lastValues.rowOrientation}" step=0.1 min="0" max="359.999" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="x">Start X</label>
          <input type="number3" id="x" name="x" placeholder="X" value="${worldX}" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="y">Start Y</label>
          <input type="number3" id="y" name="y" placeholder="Y" value="${worldY}" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="z">Start Z</label>
          <input type="number3" id="z" name="z" placeholder="Z" value="${lastValues.z}" inputmode="decimal" pattern="[0-9]*"/>
          
          <label class="labelWhite18" for="useGradeZ">Use Grade Z</label>
          <input type="checkbox" id="useGradeZ" name="useGradeZ" ${lastValues.useGradeZ ? "checked" : ""}>
          
          <label class="labelWhite18" for="gradeZ">Grade Z</label>
          <input type="number3" id="gradeZ" placeholder="Grade Z" value="${lastValues.gradeZ}" inputmode="decimal" pattern="[0-9]*" ${!lastValues.useGradeZ ? "disabled" : ""}/>
          
          <label class="labelWhite18" for="diameter">Diameter</label>
          <input type="number3" id="diameter" name="diameter" placeholder="Diameter" value="${lastValues.diameter}" step=1 min="0" max="1000" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="type">Type</label>
          <input type="text3" id="type" name="type" placeholder="Type" value="${lastValues.type}"/>
          <label class="labelWhite18" for="angle">Angle</label>
          <input type="number3" id="angle" name="angle" placeholder="Angle" value="${lastValues.angle}" step="1" min="0" max="60" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="bearing">Bearing</label>
          <input type="number3" id="bearing" name="bearing" placeholder="Bearing" value="${lastValues.bearing}" step=0.1 min="0" max="359.999" inputmode="decimal" pattern="[0-9]*"/>
          
          <label class="labelWhite18" for="length">Length</label>
          <input type="number3" id="length" name="length" placeholder="Length" value="${lastValues.length}" inputmode="decimal" pattern="[0-9]*" ${lastValues.useGradeZ ? "disabled" : ""}/>
          
          <label class="labelWhite18" for="subdrill">Subdrill</label>
          <input type="number3" id="subdrill" name="subdrill" placeholder="Subdrill" value="${lastValues.subdrill}" step="0.1" min="0.0" max="100" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="spacingOffset">Offset</label>
          <input type="number3" id="spacingOffset" name="spacingOffset" placeholder="SpacingOffset" value="${lastValues.spacingOffset}" step="0.1" min="-1.0" max="1.0" inputmode="decimal" pattern="[0-9]*"/>
          <div class="labelWhite12" id="infolabel1" name="infolabel1">Offset Information: </div> 
          <div class="labelWhite12" id="infolabel2" name="infolabel2">Staggered = -0.5 or 0.5, Square = -1, 0, 1</div> 
          <label class="labelWhite18" for="burden">Burden</label>
          <input type="number3" id="burden" name="burden" placeholder="Burden" value="${lastValues.burden}" step="0.1" min="0.1" max="50" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="spacing">Spacing</label>
          <input type="number3" id="spacing" name="spacing" placeholder="Spacing" value="${lastValues.spacing}" step="0.1" min="0.1" max="50" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="rows">Rows</label>
          <input type="number3" id="rows" name="rows" placeholder="Rows" value="${lastValues.rows}" step="1" min="1" max="500" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="holesPerRow">Holes Per Row</label>
          <input type="number3" id="holesPerRow" name="holesPerRow" placeholder="Per Row" value="${lastValues.holesPerRow}" step="1" min="1" max="500" inputmode="decimal" pattern="[0-9]*"/>
        </div>
      `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		},
		didOpen: () => {
			// Get references to form elements
			const useGradeZCheckbox = document.getElementById("useGradeZ");
			const gradeZInput = document.getElementById("gradeZ");
			const lengthInput = document.getElementById("length");
			const zInput = document.getElementById("z");
			const angleInput = document.getElementById("angle");
			const subdrillInput = document.getElementById("subdrill");

			// Function to update fields based on checkbox state
			function updateFieldsBasedOnUseGradeZ() {
				const useGradeZ = useGradeZCheckbox.checked;

				// Enable/disable fields
				gradeZInput.disabled = !useGradeZ;
				lengthInput.disabled = useGradeZ;

				// Update calculations
				if (useGradeZ) {
					// Calculate length from grade
					const collarZ = parseFloat(zInput.value) || 0;
					const gradeZ = parseFloat(gradeZInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedLength = Math.abs((collarZ - gradeZ + subdrill) / Math.cos(angleRad));
					lengthInput.value = calculatedLength.toFixed(2);
				} else {
					// Calculate grade from length
					const collarZ = parseFloat(zInput.value) || 0;
					const length = parseFloat(lengthInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedGradeZ = collarZ - (length - subdrill) * Math.cos(angleRad);
					gradeZInput.value = calculatedGradeZ.toFixed(2);
				}
			}

			// Add event listeners for changes
			useGradeZCheckbox.addEventListener("change", updateFieldsBasedOnUseGradeZ);
			gradeZInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			lengthInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			zInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			angleInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			subdrillInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);

			// Initial update
			updateFieldsBasedOnUseGradeZ();
		}
	})
		.then((result) => {
			if (result.isConfirmed) {
				// Retrieve values from the input fields
				const entityName = document.getElementById("blastName").value;
				const offset = document.getElementById("spacingOffset").value;
				const nameTypeIsNumerical = document.getElementById("nameTypeIsNumerical").checked;
				const rowOrientation = parseFloat(document.getElementById("rowOrientation").value);
				const useGradeZ = document.getElementById("useGradeZ").checked;
				const x = parseFloat(document.getElementById("x").value);
				const y = parseFloat(document.getElementById("y").value);
				const z = parseFloat(document.getElementById("z").value);
				const gradeZ = parseFloat(document.getElementById("gradeZ").value);
				const diameter = parseFloat(document.getElementById("diameter").value);
				const type = document.getElementById("type").value;
				const angle = parseFloat(document.getElementById("angle").value);
				const bearing = parseFloat(document.getElementById("bearing").value);
				const length = parseFloat(document.getElementById("length").value);
				const subdrill = parseFloat(document.getElementById("subdrill").value);
				const burden = parseFloat(document.getElementById("burden").value);
				const spacing = parseFloat(document.getElementById("spacing").value);
				const rows = parseInt(document.getElementById("rows").value);
				const holesPerRow = parseInt(document.getElementById("holesPerRow").value);

				// Input validation
				if (entityName === null || entityName === "") {
					Swal.fire({
						title: "Invalid Blast Name",
						text: "Please enter a Blast Name.",
						icon: "error"
					});
					return;
				}
				// [Rest of your validation checks here]

				// Save settings to localStorage
				lastValues = {
					blastName: entityName,
					offset: offset,
					nameTypeIsNumerical: nameTypeIsNumerical,
					useGradeZ: useGradeZ,
					rowOrientation: rowOrientation,
					x: x,
					y: y,
					z: z,
					gradeZ: gradeZ,
					diameter: diameter,
					type: type,
					angle: angle,
					bearing: bearing,
					length: length,
					subdrill: subdrill,
					burden: burden,
					spacing: spacing,
					rows: rows,
					holesPerRow: holesPerRow
				};
				localStorage.setItem("savedAddPatternPopupSettings", JSON.stringify(lastValues));

				// Use the obtained values to add the pattern
				addPattern(offset, entityName, nameTypeIsNumerical, useGradeZ, rowOrientation, x, y, z, gradeZ, diameter, type, angle, bearing, length, subdrill, burden, spacing, rows, holesPerRow);
			}
		})
		.finally(() => {
			// Hide the loading spinner when the popup is closed
			Swal.hideLoading();
		});
}

// Same Space Checker
function checkHoleProximity(newX, newY, newDiameter, existingPoints) {
	// Use 0.1m for dummy holes or holes with no diameter
	const checkDiameter = newDiameter || 0.1;
	const minDistance = checkDiameter / 1000; // Convert mm to meters, 1 diameter minimum

	const proximityHoles = [];

	for (let i = 0; i < existingPoints.length; i++) {
		const existingHole = existingPoints[i];
		const existingDiameter = existingHole.holeDiameter || 0.1;
		const existingMinDistance = existingDiameter / 1000;

		// Calculate distance between hole centers
		const distance = Math.sqrt(Math.pow(newX - existingHole.startXLocation, 2) + Math.pow(newY - existingHole.startYLocation, 2));

		// Check if holes are too close (less than 1 diameter apart)
		const combinedMinDistance = Math.max(minDistance, existingMinDistance);
		if (distance < combinedMinDistance) {
			proximityHoles.push({
				hole: existingHole,
				distance: distance,
				requiredDistance: combinedMinDistance
			});
		}
	}

	return proximityHoles;
}

// Function to show proximity warning and get user decision
function showProximityWarning(proximityHoles, newHoleInfo) {
	const holeList = proximityHoles.map((ph) => `• ${ph.hole.entityName}:${ph.hole.holeID} (${ph.distance.toFixed(3)}m apart, need ${ph.requiredDistance.toFixed(3)}m)`).join("\n");

	return Swal.fire({
		title: "Hole Proximity Warning",
		html: `
			<div style="text-align: left; max-height: 300px; overflow-y: auto;">
				<p><strong>New hole would be too close to existing holes:</strong></p>
				<p>New hole: ${newHoleInfo.entityName}:${newHoleInfo.holeID} at (${newHoleInfo.x.toFixed(3)}, ${newHoleInfo.y.toFixed(3)})</p>
				<br>
				<p><strong>Conflicting holes:</strong></p>
				<pre style="font-size: 12px; color: #ff6b6b;">${holeList}</pre>
				<br>
				<p><strong>Options:</strong></p>
				<ul style="text-align: left;">
					<li><strong>Continue:</strong> Add this hole and continue adding others</li>
					<li><strong>Skip:</strong> Skip this hole and continue with pattern</li>
					<li><strong>Cancel:</strong> Cancel the entire operation</li>
				</ul>
			</div>
		`,
		icon: "warning",
		showCancelButton: true,
		showDenyButton: true,
		confirmButtonText: "Continue",
		denyButtonText: "Skip",
		cancelButtonText: "Cancel",
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			denyButton: "deny",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container"
		}
	});
}

// Update the addPattern function to fix the reference point issue
function addPattern(offset, entityName, nameTypeIsNumerical, useGradeZ, rowOrientation, x, y, z, gradeZ, diameter, type, angle, bearing, length, subdrill, burden, spacing, rows, holesPerRow) {
	let entityType = "hole";
	let useGradeToCalcLength = useGradeZ;
	let startXLocation = parseFloat(x);
	let startYLocation = parseFloat(y);
	let startZLocation = parseFloat(z);
	//useLength to calc gradeZ if useGreadeToCalcLength is false
	let gradeZLocation = useGradeToCalcLength ? parseFloat(gradeZ) : parseFloat(startZLocation - (length - subdrill) * Math.cos(angle * (Math.PI / 180)));
	let holeLength = useGradeToCalcLength ? parseFloat(startZLocation - (gradeZLocation - subdrill) * Math.cos(angle * (Math.PI / 180))) : parseFloat(length);
	let holeDiameter = parseFloat(diameter);
	let holeType = type;
	let holeAngle = parseFloat(angle);
	let holeBearing = parseFloat(bearing);
	let subdrillAmount = parseFloat(subdrill);
	let patternburden = parseFloat(burden);
	let patternspacing = parseFloat(spacing);
	let patternrows = parseInt(rows);
	let patternholesPerRow = parseInt(holesPerRow);
	let patternoffset = parseFloat(offset);
	let patternnameTypeIsNumerical = nameTypeIsNumerical;
	let patternrowOrientation = parseFloat((90 - rowOrientation) * (Math.PI / 180));

	// FIXED: Store the reference point (pattern origin) separately
	let referenceX = startXLocation;
	let referenceY = startYLocation;

	let currentLetter = "A"; // Initialize the current letter
	let currentRow = 1; // Initialize the current row number

	for (let i = 0; i < patternrows; i++) {
		for (let j = 0; j < patternholesPerRow; j++) {
			// FIXED: Calculate position relative to the reference point (pattern origin)
			const relativeX = j * patternspacing;
			const relativeY = i * patternburden;

			// Apply offset for staggered patterns
			let offsetX = 0;
			if (i % 2 === 1) {
				// Odd rows get offset
				offsetX = patternoffset * patternspacing;
			}

			// Calculate final position with rotation around the reference point
			const rotatedX = (relativeX + offsetX) * Math.cos(patternrowOrientation) - relativeY * Math.sin(patternrowOrientation);
			const rotatedY = (relativeX + offsetX) * Math.sin(patternrowOrientation) + relativeY * Math.cos(patternrowOrientation);

			// Translate to the reference point
			const finalX = referenceX + rotatedX;
			const finalY = referenceY + rotatedY;

			let holeID;
			// Initialize points as an empty array if it's null
			if (points === null) {
				points = [];
			}

			const useCustomHoleID = false;

			if (patternnameTypeIsNumerical) {
				holeID = currentLetter + currentRow; // Generate the hole ID
				addHole(useCustomHoleID, useGradeZ, entityName, points.length + 1, parseFloat(finalX), parseFloat(finalY), parseFloat(startZLocation), parseFloat(gradeZLocation), parseFloat(holeDiameter), holeType, parseFloat(holeLength), parseFloat(subdrillAmount), parseFloat(holeAngle), parseFloat(holeBearing));
			} else {
				holeID = currentLetter + (j + 1); // Generate the hole ID
				addHole(useCustomHoleID, useGradeZ, entityName, holeID, parseFloat(finalX), parseFloat(finalY), parseFloat(startZLocation), parseFloat(gradeZLocation), parseFloat(holeDiameter), holeType, parseFloat(holeLength), parseFloat(subdrillAmount), parseFloat(holeAngle), parseFloat(holeBearing));
			}
		}

		// Increment the current letter and row number
		if (currentLetter === "Z") {
			currentLetter = "AA"; // Move to double letters
		} else if (currentLetter === "ZZ") {
			currentLetter = "AAA"; // Move to triple letters if needed
		} else {
			currentLetter = incrementLetter(currentLetter); // Increment the current letter
		}

		currentRow++;
	}

	// Reset the pattern adding state
	isAddingPattern = false;
	//make the switch off
	addPatternSwitch.checked = false;
	//updateCentroids();
	resetZoom();
	drawData(points, selectedHole);
}

function incrementLetter(str) {
	// Helper function to increment letters
	const lastIndex = str.length - 1;
	let carry = false;
	const newStr = str
		.split("")
		.reverse()
		.map((char, index) => {
			if (index === 0 || carry) {
				if (char === "Z") {
					carry = true;
					return "A";
				} else {
					carry = false;
					return String.fromCharCode(char.charCodeAt(0) + 1);
				}
			} else {
				return char;
			}
		})
		.reverse()
		.join("");
	if (carry) {
		return "A" + newStr;
	}
	return newStr;
}

function editHoleLengthPopup() {
	Swal.fire({
		title: `Edit the length of hole. Hole: ${selectedHole.holeID} ?`,
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
		<div class="button-container-2col">
            <label class="labelWhite18" for="length">Length</label>
            <input type="number" id="length" placeholder="Length" value="0" inputmode="decimal" pattern="[0-9]*"/>
        </div>
	  `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		}
	}).then((result) => {
		if (result.isConfirmed) {
			const lengthInput = document.getElementById("length");
			const lengthValue = parseFloat(lengthInput.value);
			if (isNaN(lengthValue) || lengthValue < 0 || lengthValue > 100) {
				// Show an alert to the user
				Swal.fire({
					title: "Invalid length",
					text: "Please enter an length between 0 and 100 meters.",
					icon: "error"
				});
				return; // Exit the function
			} else if (selectedHole) {
				// Use the obtained values to add the hole
				const index = points.findIndex((point) => point === selectedHole);
				if (index !== -1) {
					clickedHole = points[index];
					//console.log("clickedHole - " + "Hole Length : " + newHoleLength + "m");
					holeLengthLabel.textContent = "Hole Length : " + parseFloat(lengthValue).toFixed(1) + "m";

					// Calculate endXYZ and draw points
					calculateHoleGeometry(clickedHole, lengthValue, 1);
					drawData(points, selectedHole);
				}
			}
		}
	});
}

function setMeasuredDate() {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// measure tool for Length
function measuredLengthPopup() {
	Swal.fire({
		title: `Record the measured length of hole. Hole: ${selectedHole.holeID} ?`,
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
		<div class="button-container-2col">
            <label class="labelWhite18" for="length">Length</label>
            <input type="number" id="length" placeholder="Length" value="0" inputmode="decimal" pattern="[0-9]*"/>
        </div>
	  `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		}
	}).then((result) => {
		if (result.isConfirmed) {
			const lengthInput = document.getElementById("length");
			const lengthValue = parseFloat(lengthInput.value);
			if (selectedHole) {
				console.log("selectedHole: " + selectedHole.holeID + " | Hole Length : " + lengthValue + "m");
				const index = points.findIndex((point) => point === selectedHole);
				if (index !== -1) {
					clickedHole = points[index];
					//set the pointstype to the new value
					clickedHole.measuredLength = parseFloat(lengthValue);
					clickedHole.measuredLengthTimeStamp = setMeasuredDate();

					console.log("The Hole " + clickedHole.holeID + " Length is : " + clickedHole.measuredLength + " @ " + clickedHole.measuredLengthTimeStamp);

					drawData(points, selectedHole);
				}
			}
		}
	});
}
// measure tool for Mass
function measuredMassPopup() {
	Swal.fire({
		title: `Record the measured mass of hole (kg/lb) Hole: ${selectedHole.holeID} ?`,
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
		<div class="button-container-2col">
            <label class="labelWhite18" for="mass">Mass</label>
            <input type="number" id="mass" placeholder="Mass" value="0" inputmode="decimal" pattern="[0-9]*"/>
        </div>
	  `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		}
	}).then((result) => {
		if (result.isConfirmed) {
			const massInput = document.getElementById("mass");
			const massValue = massInput.value;
			if (selectedHole) {
				// Use the obtained values to add the hole
				const index = points.findIndex((point) => point === selectedHole);
				if (index !== -1) {
					clickedHole = points[index];
					//set the pointstype to the new value
					clickedHole.measuredMass = massValue;
					clickedHole.measuredMassTimeStamp = setMeasuredDate();

					console.log("The Hole " + clickedHole.holeID + " Mass is : " + clickedHole.measuredMass + " @ " + clickedHole.measuredMassTimeStamp);

					drawData(points, selectedHole);
				}
			}
		}
	});
}
// measure tool for Mass
function measuredCommentPopup() {
	if (selectedHole) {
		// Use the obtained values to add the hole
		const index = points.findIndex((point) => point === selectedHole);
		if (index !== -1) {
			clickedHole = points[index];
		}
	}

	let lastValue = clickedHole.measuredComment;

	Swal.fire({
		title: `Record a comment on the hole "${selectedHole.holeID}" ?`,
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
			<div class="button-container-2col">
				<label class="labelWhite18" for="type">Record Comment</label>
				<input type="text3" id="comment" placeholder="Comment" value="${lastValue}" inputmode="text" autofocus/>
			</div>
		  `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		}
	}).then((result) => {
		if (result.isConfirmed) {
			const commentInput = document.getElementById("comment");
			const commentValue = commentInput.value;
			if (selectedHole) {
				// Use the obtained values to add the hole
				const index = points.findIndex((point) => point === selectedHole);
				if (index !== -1) {
					clickedHole = points[index];
					//set the pointstype to the new value
					clickedHole.measuredComment = commentValue;
					clickedHole.measuredCommentTimeStamp = setMeasuredDate();

					console.log("The Hole " + clickedHole.holeID + " Comment is : " + clickedHole.measuredComment + " @ " + clickedHole.measuredCommentTimeStamp);

					drawData(points, selectedHole);
				}
			}
		}
	});
}
function handleBlastNameClick(event) {
	if (isBlastNameEditing) {
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole && editBlastNameSwitch.checked == false) {
			if (!fromHoleStore) {
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
			} else {
				drawData(points, selectedHole);
			}
		}
		if (clickedHole && editBlastNameSwitch.checked == true) {
			editBlastNamePopup(selectedHole);
		}
	}

	clickedHole = null;
	fromHoleStore = null;
	selectedHole = null;
	isBlastNameEditing = false;
	editBlastNameSwitch.checked = false;
	drawData(points, selectedHole);
	debouncedUpdateTreeView(); // Use debounced version
}

function editBlastNamePopup(selectedHole) {
	if (selectedHole) {
		const index = points.findIndex((point) => point === selectedHole);
		if (index !== -1) {
			clickedHole = points[index];
			blastNameValue = clickedHole.entityName;
		}
	}
	let allHoleBlastNamesValue = true;
	Swal.fire({
		title: "Edit Blast Name",
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
        <div class="button-container-2col">
            <label class="labelWhite18" for="blastName">Blast Name</label>
            <input type="text" id="blastName" placeholder="Blast Name" value="${blastNameValue}" inputmode="text" autofocus />
            <br>
			<label class="labelWhite15" for="allHoleBlastNames">Apply to all holes with the same name</label>
            <input type="checkbox" id="allHoleBlastNames" name="allHoleBlastNames" checked>
        </div>
        `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		}
	}).then((result) => {
		if (result.isConfirmed) {
			const blastNameInput = document.getElementById("blastName");
			blastNameValue = blastNameInput.value.trim();
			const allHoleBlastNames = document.getElementById("allHoleBlastNames").checked;
			allHoleBlastNamesValue = allHoleBlastNames;
			const index = points.findIndex((point) => point === selectedHole);
			if (index !== -1) {
				drawData(points, selectedHole);
				// Get the current entity name before any changes
				let currentEntityName = points[index].entityName;

				if (allHoleBlastNamesValue === false) {
					// Update only the selected hole
					console.log("Before:point.fromHoleID : " + points[index].fromHoleID);
					points[index].entityName = blastNameValue;

					// Only update fromHoleID if the part before ::: matches the old blast name
					const [beforeColon, afterColon] = points[index].fromHoleID.split(":::");
					if (beforeColon === currentEntityName) {
						points[index].fromHoleID = blastNameValue + ":::" + afterColon;
						console.log("Updated fromHoleID for single hole");
					} else {
						console.log("fromHoleID not updated (before ::: doesn't match old blast name)");
					}
					console.log("After:point.fromHoleID : " + points[index].fromHoleID);
				}
				if (allHoleBlastNamesValue === true) {
					// Update all holes with the same current entity name
					points.forEach((point) => {
						if (point.entityName === currentEntityName) {
							console.log("Before:point.fromHoleID : " + point.fromHoleID);
							point.entityName = blastNameValue;

							// Only update fromHoleID if the part before ::: matches the old blast name
							const [beforeColon, afterColon] = point.fromHoleID.split(":::");
							if (beforeColon === currentEntityName) {
								point.fromHoleID = blastNameValue + ":::" + afterColon;
								console.log("Updated fromHoleID for hole: " + point.holeID);
							} else {
								console.log("fromHoleID not updated for hole " + point.holeID + " (before ::: doesn't match old blast name)");
							}
							console.log("After:point.fromHoleID : " + point.fromHoleID);
						}
					});
				}

				// ADD THIS: Check for duplicate hole IDs after renaming
				if (typeof checkAndResolveDuplicateHoleIDs === "function") {
					checkAndResolveDuplicateHoleIDs(points);
					console.log("Checked and resolved any duplicate hole IDs");
				}

				// Update tree view if available
				if (typeof updateTreeView === "function") {
					debouncedUpdateTreeView(); // Use debounced version
				}

				// Save changes to DB if available
				if (typeof savePointsToDB === "function") {
					savePointsToDB();
				}
			}
			drawData(points, selectedHole);
		}
	});
}
// Using SweetAlert Library Create a popup that gets input from the user.
function editHoleTypePopup() {
	if (selectedHole) {
		// Use the obtained values to add the hole
		const index = points.findIndex((point) => point === selectedHole);
		if (index !== -1) {
			clickedHole = points[index];
		}
	}

	let lastValue = clickedHole.holeType;

	Swal.fire({
		title: `Edit the Type of hole "${selectedHole.holeID}" ?`,
		showCancelButton: true,
		confirmButtonText: "Confirm",
		cancelButtonText: "Cancel",
		html: `
		<div class="button-container-2col">
            <label class="labelWhite18" for="type">Type of Hole</label>
            <input type="text3" id="type" placeholder="Type" value="${lastValue}" inputmode="text" autofocus/>
        </div>
	  `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		}
	}).then((result) => {
		if (result.isConfirmed) {
			const typeInput = document.getElementById("type");
			const typeValue = typeInput.value;
			if (selectedHole) {
				// Use the obtained values to add the hole
				const index = points.findIndex((point) => point === selectedHole);
				if (index !== -1) {
					clickedHole = points[index];
					//set the pointstype to the new value
					clickedHole.holeType = typeValue;

					drawData(points, selectedHole);
					debouncedUpdateTreeView(); // Use debounced version
				}
			}
		}
	});
}

/**
 * Add hole to the points array popup using sweetalert and then draw the points
 * @param {boolean} useCustomHoleID - If true, use the custom hole ID
 * @param {boolean} useGradeZ - If true, use grade Z instead of length
 * @param {string} entityName - The name of the entity
 * @param {number} holeID - The ID of the hole
 * @param {number} startXLocation - The X location of the start of the hole
 * @param {number} startYLocation - The Y location of the start of the hole
 * @param {number} startZLocation - The Z location of the start of the hole
 * @param {number} gradeZLocation - The Z location of the grade of the hole
 * @param {number} diameter - The diameter of the hole
 * @param {string} type - The type of the hole
 * @param {number} length - The length of the hole
 * @param {number} subdrill - The subdrill of the hole
 * @param {number} angle - The angle of the hole
 */
function addHole(useCustomHoleID, useGradeZ, entityName, holeID, startXLocation, startYLocation, startZLocation, gradeZLocation, diameter, type, length, subdrill, angle, bearing) {
	if (typeof entityName === "string" && entityName.trim() !== "") {
		entityName = entityName.trim();
	} else {
		entityName = "undefined";
	}
	const entityType = "hole";

	// Initialize points as an empty array if it's null
	if (points === null) {
		points = [];
	}

	let newHoleID = null;
	if (useCustomHoleID === true) {
		// CRITICAL: Check for duplicate hole ID before using the custom ID
		const originalHoleID = holeID.toString();
		newHoleID = validateUniqueHoleID(entityName, originalHoleID);

		if (newHoleID !== originalHoleID) {
			console.warn("🚨 Duplicate hole ID detected during addHole:", entityName + ":" + originalHoleID, "→ Auto-assigned:", newHoleID);
		}
	} else if (useCustomHoleID === false) {
		if (points !== null) {
			newHoleID = points.length + 1;
		} else {
			newHoleID = 1;
		}
	} else {
		newHoleID = 9999;
	}

	// Parse values first
	startXLocation = parseFloat(startXLocation);
	startYLocation = parseFloat(startYLocation);
	startZLocation = parseFloat(startZLocation);
	let holeDiameter = parseFloat(diameter);
	let holeType = type;
	let holeLengthCalculated = parseFloat(length);
	let subdrillAmount = parseFloat(subdrill);
	let holeAngle = parseFloat(angle);
	let holeBearing = parseFloat(bearing);

	// Handle NaN values
	if (isNaN(holeAngle)) {
		holeAngle = 0;
	}
	if (isNaN(holeBearing)) {
		holeBearing = 0;
	}

	// Calculate length from gradeZ if length is null and useGradeZ is true
	if (useGradeZ && isNaN(holeLengthCalculated) && !isNaN(parseFloat(gradeZLocation))) {
		let deltaZ = startZLocation - parseFloat(gradeZLocation);
		holeLengthCalculated = Math.abs(deltaZ / Math.cos(holeAngle * (Math.PI / 180)));
	}

	// Calculate gradeZLocation from length - subdrill if gradeZLocation is null
	if (useGradeZ && isNaN(parseFloat(gradeZLocation)) && !isNaN(holeLengthCalculated)) {
		gradeZLocation = startZLocation - (holeLengthCalculated - subdrillAmount) * Math.cos(holeAngle * (Math.PI / 180));
	}

	// Set default length to 0 if both length and gradeZ are null
	if (isNaN(holeLengthCalculated)) {
		holeLengthCalculated = 0;
	}

	// Calculate subdrill length
	let subdrillLength = holeAngle > 0 ? subdrillAmount / Math.sin((90 - holeAngle) * (Math.PI / 180)) : subdrillAmount;

	// Calculate total length including subdrill
	let totalLength = holeLengthCalculated + subdrillLength;

	// Calculate end locations using the total length (includes subdrill)
	let endXLocation = parseFloat(startXLocation + totalLength * Math.cos((90 - angle) * (Math.PI / 180)) * Math.cos(((450 - bearing) % 360) * (Math.PI / 180)));
	let endYLocation = parseFloat(startYLocation + totalLength * Math.cos((90 - angle) * (Math.PI / 180)) * Math.sin(((450 - bearing) % 360) * (Math.PI / 180)));
	let endZLocation = parseFloat(startZLocation - totalLength * Math.cos(angle * (Math.PI / 180)));

	// Calculate grade locations using only hole length (no subdrill)
	let gradeXLocation = parseFloat(startXLocation + holeLengthCalculated * Math.cos((90 - angle) * (Math.PI / 180)) * Math.cos(((450 - bearing) % 360) * (Math.PI / 180)));
	let gradeYLocation = parseFloat(startYLocation + holeLengthCalculated * Math.cos((90 - angle) * (Math.PI / 180)) * Math.sin(((450 - bearing) % 360) * (Math.PI / 180)));
	gradeZLocation = parseFloat(startZLocation - holeLengthCalculated * Math.cos(angle * (Math.PI / 180)));

	// Check if endXLocation, endYLocation, or endZLocation is NaN
	if (isNaN(endXLocation)) {
		endXLocation = startXLocation;
	}
	if (isNaN(endYLocation)) {
		endYLocation = startYLocation;
	}
	if (isNaN(endZLocation)) {
		endZLocation = startZLocation;
	}

	// Check if gradeXLocation, gradeYLocation, or gradeZLocation is NaN
	if (isNaN(gradeXLocation)) {
		gradeXLocation = startXLocation;
	}
	if (isNaN(gradeYLocation)) {
		gradeYLocation = startYLocation;
	}
	if (isNaN(gradeZLocation)) {
		gradeZLocation = startZLocation;
	}

	let toHoleCombinedID = entityName.toString() + ":::" + newHoleID.toString();
	let timingDelayMilliseconds = 0;
	let colorHexDecimal = "red";
	let measuredLength = 0;
	let measuredLengthTimeStamp = "09/05/1975 00:00:00";
	let measuredMass = 0;
	let measuredMassTimeStamp = "09/05/1975 00:00:00";
	let measuredComment = "None";
	let measuredCommentTimeStamp = "09/05/1975 00:00:00";

	let benchHeight = holeLengthCalculated * Math.cos(holeAngle * (Math.PI / 180));

	// PROXIMITY CHECK: Check for nearby holes before adding
	const proximityHoles = checkHoleProximity(startXLocation, startYLocation, holeDiameter, points);

	if (proximityHoles.length > 0) {
		// Show warning and get user decision
		const newHoleInfo = {
			entityName: entityName,
			holeID: newHoleID.toString(),
			x: startXLocation,
			y: startYLocation,
			diameter: holeDiameter
		};

		showProximityWarning(proximityHoles, newHoleInfo).then((result) => {
			if (result.isConfirmed) {
				// User chose to continue - add the hole
				addHoleToPoints(
					entityName,
					entityType,
					newHoleID,
					startXLocation,
					startYLocation,
					startZLocation,
					endXLocation,
					endYLocation,
					endZLocation,
					gradeXLocation,
					gradeYLocation,
					gradeZLocation,
					subdrillAmount,
					subdrillLength,
					benchHeight,
					holeDiameter,
					holeType,
					holeLengthCalculated,
					holeAngle,
					holeBearing,
					toHoleCombinedID,
					timingDelayMilliseconds,
					colorHexDecimal,
					measuredLength,
					measuredLengthTimeStamp,
					measuredMass,
					measuredMassTimeStamp,
					measuredComment,
					measuredCommentTimeStamp
				);
			} else if (result.isDenied) {
				// User chose to skip - don't add this hole but continue
				console.log("Skipped hole due to proximity: " + newHoleID);
			}
			// If result.isDismissed (cancel), do nothing - operation is cancelled
		});

		return; // Exit early, let the promise handle the result
	}

	// No proximity issues - add the hole normally
	addHoleToPoints(entityName, entityType, newHoleID, startXLocation, startYLocation, startZLocation, endXLocation, endYLocation, endZLocation, gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter, holeType, holeLengthCalculated, holeAngle, holeBearing, toHoleCombinedID, timingDelayMilliseconds, colorHexDecimal, measuredLength, measuredLengthTimeStamp, measuredMass, measuredMassTimeStamp, measuredComment, measuredCommentTimeStamp);

	if (isAddingHole && !isAddingPattern) {
		debouncedUpdateTreeView();
		drawData(points, selectedHole);
	}
}

// Helper function to actually add the hole to points array
function addHoleToPoints(entityName, entityType, newHoleID, startXLocation, startYLocation, startZLocation, endXLocation, endYLocation, endZLocation, gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter, holeType, holeLengthCalculated, holeAngle, holeBearing, toHoleCombinedID, timingDelayMilliseconds, colorHexDecimal, measuredLength, measuredLengthTimeStamp, measuredMass, measuredMassTimeStamp, measuredComment, measuredCommentTimeStamp) {
	points.push({
		entityName: entityName,
		entityType: entityType,
		holeID: newHoleID.toString(),
		startXLocation: startXLocation,
		startYLocation: startYLocation,
		startZLocation: startZLocation,
		endXLocation: endXLocation,
		endYLocation: endYLocation,
		endZLocation: endZLocation,
		gradeXLocation: gradeXLocation,
		gradeYLocation: gradeYLocation,
		gradeZLocation: gradeZLocation,
		subdrillAmount: subdrillAmount,
		subdrillLength: subdrillLength,
		benchHeight: benchHeight,
		holeDiameter: holeDiameter,
		holeType: holeType,
		holeLengthCalculated: holeLengthCalculated,
		holeAngle: holeAngle,
		holeBearing: holeBearing,
		fromHoleID: toHoleCombinedID.toString(),
		timingDelayMilliseconds: timingDelayMilliseconds,
		colorHexDecimal: colorHexDecimal.toString(),
		measuredLength: measuredLength,
		measuredLengthTimeStamp: measuredLengthTimeStamp,
		measuredMass: measuredMass,
		measuredMassTimeStamp: measuredMassTimeStamp,
		measuredComment: measuredComment,
		measuredCommentTimeStamp: measuredCommentTimeStamp
	});

	//console.log("Added Hole: " + newHoleID);
}

function handleMeasuredLengthClick(event) {
	if (isMeasureRecording) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;
		//const measuredLengthTimeStamp = formatDate(new Date().toLocaleString());

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);
		// console.log("ClickedX = " + clickX);
		// console.log("ClickedY = " + clickY);
		// console.log("ClickedHole = " + clickedHole.holeID);
		if (clickedHole && measuredLengthSwitch.checked == false) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
			}
		} else if (clickedHole && measuredLengthSwitch.checked == true) {
			measuredLengthPopup();
		}
	}
}
function handleMeasuredMassClick(event) {
	if (isMeasureRecording) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;
		//const measuredMassTimeStamp = formatDate(new Date().toLocaleString());

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);
		// console.log("ClickedX = " + clickX);
		// console.log("ClickedY = " + clickY);
		// console.log("ClickedHole = " + clickedHole);
		if (clickedHole && measuredMassSwitch.checked == false) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
			}
		} else if (clickedHole && measuredMassSwitch.checked == true) {
			measuredMassPopup();
		}
	}
}
function handleMeasuredCommentClick(event) {
	if (isMeasureRecording) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;
		//const measuredCommentTimeStamp = formatDate(new Date().toLocaleString());

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);
		// console.log("ClickedX = " + clickX);
		// console.log("ClickedY = " + clickY);
		// console.log("ClickedHole = " + clickedHole);
		if (clickedHole && measuredCommentSwitch.checked == false) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
			}
		} else if (clickedHole && measuredCommentSwitch.checked == true) {
			measuredCommentPopup();
		}
	}
}

function handleHoleTypeEditClick(event) {
	if (isTypeEditing) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole && editHoleTypePopupSwitch.checked == false) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
			}
		} else if (clickedHole && editHoleTypePopupSwitch.checked == true) {
			editHoleTypePopup();
		}
	}
}

function handleHoleLengthEditClick(event) {
	if (isLengthPopupEditing) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);
		drawData(points, selectedHole);

		if (clickedHole && editLengthPopupSwitch.checked == false) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
			} else {
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		} else if (clickedHole && editLengthPopupSwitch.checked == true) {
			editHoleLengthPopup();
		}
		const multipleClickedHoles = getMultipleClickedHoles(clickX, clickY);
		if (multipleClickedHoles.length > 0 && isMultiHoleSelectionEnabled && editLengthPopupSwitch.checked == false) {
			selectedMultipleHoles = [...multipleClickedHoles]; // Update the selection
			drawData(points, selectedHole); // You might need to modify this function to handle multiple selected holes
			debouncedUpdateTreeView();
		}
	}
}

// Enhanced selection system that works with both holes and KAD objects
function handleSelection(event) {
	if (isSelectionPointerActive) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Try holes first
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole && !isMultiHoleSelectionEnabled) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				selectedKADPolygon = null; // Clear polygon selection when hole selected
				selectedKADObject = null; // Clear KAD object selection when hole selected
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
				return;
			} else {
				selectedKADPolygon = null; // Clear polygon selection when hole selected
				selectedKADObject = null; // Clear KAD object selection when hole selected
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
				return;
			}
		}

		// Get multiple clicked holes for selection mode
		const multipleClickedHoles = getMultipleClickedHoles(clickX, clickY);
		if (multipleClickedHoles.length > 0 && isMultiHoleSelectionEnabled) {
			selectedMultipleHoles = [...multipleClickedHoles]; // Update the selection
			selectedKADPolygon = null; // Clear polygon selection when holes selected
			selectedKADObject = null; // Clear KAD object selection when holes selected
			drawData(points, selectedHole);
			debouncedUpdateTreeView();
			return;
		}

		// If no holes clicked, try KAD objects and polygons
		if (!clickedHole && multipleClickedHoles.length === 0) {
			// Convert to world coordinates for polygon detection
			const worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
			const worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;

			// First try other KAD objects (points, lines, circles, text) - but NO left-click editing
			const clickedKADObject = getClickedKADObject(clickX, clickY);
			if (clickedKADObject) {
				selectedKADObject = clickedKADObject; // Store selected KAD object
				updateStatusMessage("Selected " + clickedKADObject.entityType + " (Right-click to edit)");
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
				return;
			}
			// Nothing was clicked - clear both selections
			selectedKADPolygon = null;
			selectedKADObject = null;
		}

		// Nothing was clicked - clear polygon selection
		selectedKADPolygon = null;
		selectedKADObject = null;
		drawData(points, selectedHole);
	}
}

function handleHoleEditingSelection(event) {
	if (isHoleEditing || selectPointerTool.checked) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole && !isMultiHoleSelectionEnabled) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHole = clickedHole;
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
			} else {
				drawData(points, selectedHole);
				debouncedUpdateTreeView();
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
		// Get the clicked hole or holes
		const multipleClickedHoles = getMultipleClickedHoles(clickX, clickY);
		if (multipleClickedHoles.length > 0 && isMultiHoleSelectionEnabled) {
			selectedMultipleHoles = [...multipleClickedHoles]; // Update the selection
			drawData(points, selectedHole); // You might need to modify this function to handle multiple selected holes
			debouncedUpdateTreeView();
		}
	}
}

function recalculateContours(points, deltaX, deltaY) {
	// Only recalculate if contours or direction arrows are being displayed
	if (!displayContours.checked && !displayFirstMovements.checked) {
		return { contourLinesArray: [], directionArrows: [] };
	}

	try {
		const contourData = [];
		holeTimes = calculateTimes(points);
		timeChart();

		// Prepare contour data
		for (let i = 0; i < holeTimes.length; i++) {
			const [entityName, holeID] = holeTimes[i][0].split(":::");
			const time = holeTimes[i][1];

			const point = points.find((p) => p.entityName === entityName && p.holeID === holeID);

			if (point) {
				contourData.push({
					x: point.startXLocation,
					y: point.startYLocation,
					z: time
				});
			}
		}

		if (contourData.length === 0) {
			throw new Error("No valid contour data points found.");
		}

		const maxHoleTime = Math.max(...contourData.map((point) => point.z));

		// Calculate contour lines and store them in contourLinesArray
		contourLinesArray = [];
		directionArrows = [];
		let interval = maxHoleTime < 350 ? 25 : maxHoleTime < 700 ? 100 : 250;
		interval = parseInt(intervalAmount);

		// Iterate over contour levels
		for (let contourLevel = 0; contourLevel <= maxHoleTime; contourLevel += interval) {
			const { contourLines, directionArrows } = delaunayContours(contourData, contourLevel, maxEdgeLength);
			const epsilon = 1; // Adjust this value to control the level of simplification
			const simplifiedContourLines = contourLines.map((line) => simplifyLine(line, epsilon));
			contourLinesArray.push(simplifiedContourLines);

			//console.log("contourLinesArray: ", contourLinesArray);
			//console.log("directionArrows: ", directionArrows);
		}
		// Return both contour lines
		return { contourLinesArray, directionArrows };
	} catch (err) {
		console.error(err);
	}
}

function calculateHoleGeometry(clickedHole, newValue, modeLAB) {
	const index = points.findIndex((point) => point.holeID === clickedHole.holeID && point.entityName === clickedHole.entityName);
	if (index === -1) {
		return; // Hole not found
	}

	// Work directly on the original hole object instead of creating a copy
	let hole = points[index];

	// Destructure for easier access
	let { startXLocation: startX, startYLocation: startY, startZLocation: startZ, holeAngle, holeBearing, benchHeight, subdrillAmount } = hole;

	const radBearing = ((450 - holeBearing) % 360) * (Math.PI / 180);

	if (modeLAB === 1) {
		// Length
		const newLength = parseFloat(newValue);
		hole.holeLengthCalculated = newLength;

		const radAngle = holeAngle * (Math.PI / 180);
		const cosAngle = Math.cos(radAngle);
		const sinAngle = Math.sin(radAngle);

		if (Math.abs(cosAngle) > 1e-9) {
			const subdrillLength = subdrillAmount / cosAngle;
			const newBenchDrillLength = newLength - subdrillLength;
			hole.benchHeight = newBenchDrillLength * cosAngle;
		}

		// Recalculate everything based on the new length
		const newTotalVerticalDrop = newLength * cosAngle;
		hole.endZLocation = startZ - newTotalVerticalDrop;
		const horizontalProjection = newLength * sinAngle;
		hole.endXLocation = startX + horizontalProjection * Math.cos(radBearing);
		hole.endYLocation = startY + horizontalProjection * Math.sin(radBearing);

		hole.gradeZLocation = startZ - hole.benchHeight;
		const benchDrillLength = hole.benchHeight / (Math.abs(cosAngle) > 1e-9 ? cosAngle : 1);
		const horizontalProjectionToGrade = benchDrillLength * sinAngle;
		hole.gradeXLocation = startX + horizontalProjectionToGrade * Math.cos(radBearing);
		hole.gradeYLocation = startY + horizontalProjectionToGrade * Math.sin(radBearing);
	} else if (modeLAB === 2) {
		// Angle
		const newAngle = parseFloat(newValue);
		hole.holeAngle = newAngle;
		const radAngle = newAngle * (Math.PI / 180);
		const cosAngle = Math.cos(radAngle);
		const sinAngle = Math.sin(radAngle);

		if (Math.abs(cosAngle) > 1e-9) {
			hole.holeLengthCalculated = (benchHeight + subdrillAmount) / cosAngle;
		} // For horizontal holes, length is independent

		hole.gradeZLocation = startZ - benchHeight;
		const benchDrillLength = Math.abs(cosAngle) > 1e-9 ? benchHeight / cosAngle : 0; // No bench drop for horizontal
		const horizontalProjectionToGrade = benchDrillLength * sinAngle;
		hole.gradeXLocation = startX + horizontalProjectionToGrade * Math.cos(radBearing);
		hole.gradeYLocation = startY + horizontalProjectionToGrade * Math.sin(radBearing);

		const horizontalProjectionOfHoleLength = hole.holeLengthCalculated * sinAngle;
		hole.endXLocation = startX + horizontalProjectionOfHoleLength * Math.cos(radBearing);
		hole.endYLocation = startY + horizontalProjectionOfHoleLength * Math.sin(radBearing);
		hole.endZLocation = startZ - hole.holeLengthCalculated * cosAngle;
	} else if (modeLAB === 3) {
		// Bearing
		const newBearing = parseFloat(newValue);
		hole.holeBearing = newBearing;
		const newRadBearing = ((450 - newBearing) % 360) * (Math.PI / 180);
		const radAngle = holeAngle * (Math.PI / 180);
		const cosAngle = Math.cos(radAngle);
		const sinAngle = Math.sin(radAngle);

		const benchDrillLength = Math.abs(cosAngle) > 1e-9 ? benchHeight / cosAngle : 0;
		const horizontalProjectionToGrade = benchDrillLength * sinAngle;
		hole.gradeXLocation = startX + horizontalProjectionToGrade * Math.cos(newRadBearing);
		hole.gradeYLocation = startY + horizontalProjectionToGrade * Math.sin(newRadBearing);

		const horizontalProjectionOfHoleLength = hole.holeLengthCalculated * sinAngle;
		hole.endXLocation = startX + horizontalProjectionOfHoleLength * Math.cos(newRadBearing);
		hole.endYLocation = startY + horizontalProjectionOfHoleLength * Math.sin(newRadBearing);

		// FIX: Add the missing endZLocation calculation
		hole.endZLocation = startZ - hole.holeLengthCalculated * cosAngle;
	} else if (modeLAB === 4) {
		// Easting (X) - Simple delta shift
		const deltaX = newValue - hole.startXLocation;
		hole.startXLocation = newValue;
		hole.gradeXLocation += deltaX;
		hole.endXLocation += deltaX;
	} else if (modeLAB === 5) {
		// Northing (Y) - Simple delta shift
		const deltaY = newValue - hole.startYLocation;
		hole.startYLocation = newValue;
		hole.gradeYLocation += deltaY;
		hole.endYLocation += deltaY;
	} else if (modeLAB === 6) {
		// Elevation (Z)
		const deltaZ = newValue - hole.startZLocation;
		hole.startZLocation = newValue;
		hole.gradeZLocation += deltaZ;
		hole.endZLocation += deltaZ;
	} else if (modeLAB === 7) {
		// Diameter
		hole.holeDiameter = newValue;
	} else if (modeLAB === 8) {
		// Subdrill Amount
		const newSubdrillAmount = parseFloat(newValue);

		if (isNaN(newSubdrillAmount)) {
			console.warn("Invalid subdrill amount:", newValue);
			return;
		}
		hole.subdrillAmount = newSubdrillAmount;

		const radAngle = holeAngle * (Math.PI / 180);
		const cosAngle = Math.cos(radAngle);
		const sinAngle = Math.sin(radAngle);

		if (Math.abs(cosAngle) > 1e-9) {
			hole.holeLengthCalculated = (benchHeight + newSubdrillAmount) / cosAngle;
		}

		const horizontalProjectionOfHoleLength = hole.holeLengthCalculated * sinAngle;
		hole.endXLocation = startX + horizontalProjectionOfHoleLength * Math.cos(radBearing);
		hole.endYLocation = startY + horizontalProjectionOfHoleLength * Math.sin(radBearing);
		hole.endZLocation = startZ - hole.holeLengthCalculated * cosAngle;
	}
	debouncedUpdateTreeView(); // Use debounced version
	// No need to reassign points[index] since we're working on the original object
}

function timeChart() {
	const chart = document.getElementById("timeChart");
	// If no holeTimes data, create a blank chart instead of returning
	if (!Array.isArray(holeTimes) || holeTimes.length === 0) {
		const layout = {
			title: {
				text: "Time Window Chart - No Data",
				xanchor: "right",
				font: { size: 10 }
			},
			plot_bgcolor: noneColor,
			paper_bgcolor: noneColor,
			font: { color: textFillColor },
			modebar: {
				orientation: "v",
				bgcolor: noneColor,
				color: "rgba(255, 0, 0, 0.4)",
				activecolor: "red",
				position: "left"
			},
			margin: { l: 5, r: 50, b: 25, t: 25, pad: 2 },
			xaxis: {
				title: { text: "milliseconds (ms)", font: { size: 10 } },
				showgrid: true,
				range: [0, 100]
			},
			yaxis: {
				title: { text: "Holes Firing", font: { size: 10 } },
				showgrid: true,
				range: [0, 10]
			},
			height: 380,
			width: chart.offsetWidth - 50,
			annotations: [
				{
					text: "Load holes and connect them to see timing data",
					xref: "paper",
					yref: "paper",
					x: 0.5,
					y: 0.5,
					xanchor: "center",
					yanchor: "middle",
					showarrow: false,
					font: { size: 12, color: textFillColor }
				}
			]
		};

		Plotly.react("timeChart", [], layout, {
			responsive: true,
			displayModeBar: true,
			modeBarButtonsToRemove: ["lasso2d", "hoverClosestCartesian", "hoverCompareCartesian", "toggleSpikelines"],
			modeBarButtons: [["select2d", "zoomIn2d", "zoomOut2d", "autoScale2d", "resetScale2d", "toImage", "pan2d"]]
		});

		return; // Exit early after creating blank chart
	}

	const times = holeTimes.map((time) => time[1]);
	const maxTime = Math.max(...times);
	const timeRange = parseInt(document.getElementById("timeRange").value);
	const timeOffset = parseInt(document.getElementById("timeOffset").value);
	const numBins = Math.ceil(maxTime / timeRange);
	const binStart = -timeOffset;

	const measuredMassRadio = document.getElementById("measuredMassRadio");
	const holeCountRadio = document.getElementById("holeCountRadio");
	let useMass;
	useMass = useMass ? holeCountRadio?.checked : measuredMassRadio?.checked || false;

	let counts = Array(numBins).fill(0);
	let massSum = Array(numBins).fill(0);
	let validMassCount = 0;

	for (let point of points) {
		const binIndex = Math.floor((point.holeTime - binStart) / timeRange);
		if (binIndex >= 0 && binIndex < numBins) {
			counts[binIndex]++;
			const mass = Number(point.measuredMass);
			if (useMass && !isNaN(mass) && isFinite(mass)) {
				massSum[binIndex] += mass;
				validMassCount++;
			}
		}
	}

	const fallbackToCount = useMass && validMassCount < 2;
	const yValues = useMass && !fallbackToCount ? massSum : counts;

	const binEdges = Array(numBins)
		.fill(0)
		.map((_, index) => index * timeRange + binStart);

	const binCenters = binEdges.map((edge) => edge + timeRange / 2);
	const xTickInterval = Math.ceil(numBins / 10); // label ~5 ticks
	const tickvals = binCenters.filter((_, i) => i % xTickInterval === 0);
	const ticktext = tickvals.map((center) => center - timeRange / 2 + "–" + (center + timeRange / 2));

	const holeIDs = Array(numBins).fill(null);

	for (const point of points) {
		const binIndex = Math.floor((point.holeTime - binStart) / timeRange);
		if (binIndex >= 0 && binIndex < numBins) {
			holeIDs[binIndex] = holeIDs[binIndex] || [];
			holeIDs[binIndex].push(point.entityName + ":" + point.holeID);
		}
	}

	const entityholeIDTexts = holeIDs.map((bin) => {
		if (!bin) return "";
		return bin
			.map((combinedID) => {
				const [entityName, holeID] = combinedID.split(":");
				const point = points.find((p) => p.entityName === entityName && p.holeID === holeID);
				return point ? point.entityName + ":" + point.holeID : "";
			})
			.filter(Boolean)
			.join(", ");
	});

	const hoverText = entityholeIDTexts.map((text, index) => {
		const totalMass = useMass && !fallbackToCount && massSum[index] ? massSum[index].toFixed(1) + " kg" : "";
		return totalMass ? text + "<br>Mass: " + totalMass : text;
	});

	const defaultColor = Array(numBins).fill("red");

	const currentLayout = chart?._fullLayout;
	const newYLabel = useMass && !fallbackToCount ? "Total Measured Mass (kg)" : "Holes Firing";
	const currentYLabel = currentLayout?.yaxis?.title?.text;
	const preserveYRange = currentYLabel === newYLabel;

	const maxYValue = Math.max(...yValues) + 1;

	const layout = {
		title: {
			text: "Time Window Chart",
			xanchor: "right",
			font: { size: 10 }
		},
		plot_bgcolor: noneColor,
		paper_bgcolor: noneColor,
		font: { color: textFillColor },
		modebar: {
			orientation: "v",
			bgcolor: noneColor,
			color: "rgba(255, 0, 0, 0.4)",
			activecolor: "red",
			position: "left"
		},
		margin: { l: 5, r: 50, b: 25, t: 25, pad: 2 },
		xaxis: {
			title: { text: "milliseconds (ms)", font: { size: 10 } },
			showgrid: true,
			rangeslider: { visible: true, thickness: 0.1 },
			tickvals: "auto", //tickvals, // if you want bin ranges
			ticktext: "~s" //ticktext, //if you want bin ranges
		},
		yaxis: {
			title: { text: newYLabel, font: { size: 10 } },
			showgrid: true,
			automargin: true,
			range: preserveYRange && currentLayout ? [...currentLayout.yaxis.range] : [0, maxYValue - 0.5]
		},
		height: 380,
		width: chart.offsetWidth - 50 // ✅ dynamic width based on container,
	};

	const data = [
		{
			x: binCenters,
			y: yValues,
			type: "bar",
			width: timeRange, // 🔧 match bin width
			marker: { color: defaultColor },
			text: hoverText,
			textposition: "none", // ✅ disables labels drawn on bars
			//hoverinfo: "text+y",
			hovertemplate: "Bin: %{x} ms<br>" + (useMass && !fallbackToCount ? "Mass" : "Value") + ": %{y}<extra></extra>"
		}
	];

	Plotly.react("timeChart", data, layout, {
		responsive: true,
		displayModeBar: true,
		modeBarButtonsToRemove: ["lasso2d", "hoverClosestCartesian", "hoverCompareCartesian", "toggleSpikelines"],
		modeBarButtons: [["select2d", "zoomIn2d", "zoomOut2d", "autoScale2d", "resetScale2d", "toImage", "pan2d"]]
	});

	// ✅ Clear previously registered listeners
	chart.removeAllListeners?.("plotly_selected");
	chart.removeAllListeners?.("plotly_click");
	chart.removeAllListeners?.("plotly_deselect");

	let lastClickedIndex = null;

	chart.on("plotly_selected", function (eventData) {
		const selectedPoints = eventData?.points?.map((p) => p.pointNumber) || [];
		const newColors = defaultColor.map((color, index) => (selectedPoints.includes(index) ? "lime" : color));
		Plotly.restyle("timeChart", { "marker.color": [newColors] });

		timingWindowHolesSelected = selectedPoints
			.flatMap((index) => {
				return holeIDs[index]
					? holeIDs[index].map((combinedID) => {
							const [entityName, holeID] = combinedID.split(":");
							return points.find((p) => p.entityName === entityName && p.holeID === holeID);
					  })
					: [];
			})
			.filter(Boolean);

		drawData(points, selectedHole);
	});

	chart.on("plotly_click", function (data) {
		const clickedIndex = data.points?.[0]?.pointIndex;
		if (clickedIndex == null) return;

		const currentColors = data.points[0].data.marker.color.slice();
		if (lastClickedIndex !== null) currentColors[lastClickedIndex] = "red";
		currentColors[clickedIndex] = "lime";

		Plotly.restyle("timeChart", { "marker.color": [currentColors] });
		lastClickedIndex = clickedIndex;

		timingWindowHolesSelected = holeIDs[clickedIndex]
			? holeIDs[clickedIndex]
					.map((combinedID) => {
						const [entityName, holeID] = combinedID.split(":");
						return points.find((p) => p.entityName === entityName && p.holeID === holeID);
					})
					.filter(Boolean)
			: [];

		drawData(points, selectedHole);
	});

	chart.on("plotly_deselect", function () {
		Plotly.restyle("timeChart", { "marker.color": [defaultColor] });
		timingWindowHolesSelected = [];
		lastClickedIndex = null;
		drawData(points, selectedHole);
	});
}

// Function to update the play speed
function updatePlaySpeed() {
	const playSpeedInput = document.getElementById("playSpeed");

	playSpeed = parseFloat(playSpeedInput.value);
}
// Add click event listener to the "Play" button
const playButton = document.getElementById("play");

playButton.addEventListener("click", () => {
	refreshPoints();
	updatePlaySpeed(); // Update play speed
	const maxTime = Math.max(...holeTimes.map((time) => time[1])); // Get the max time
	isPlaying = true;
	// Clear previous animation interval before starting a new one
	clearInterval(animationInterval);

	let currentTime = 0;
	let lastFrameTime = performance.now(); // Track real-world time
	const frameRate = 60; // 60 FPS
	const frameInterval = 1000 / frameRate; // ~16.67ms per frame

	play.textContent = "Playing at " + parseFloat(playSpeed).toFixed(3) + "x speed";

	// Start the animation loop at 60fps
	animationInterval = setInterval(() => {
		const now = performance.now();
		const realTimeElapsed = now - lastFrameTime; // Real milliseconds elapsed
		const blastTimeToAdvance = realTimeElapsed * playSpeed; // Scale by playSpeed

		currentTime += blastTimeToAdvance;
		lastFrameTime = now;

		if (currentTime <= maxTime + playSpeed * 100) {
			// Give some buffer at the end
			timingWindowHolesSelected = points.filter((point) => point.holeTime <= currentTime);
			drawData(points, timingWindowHolesSelected);
		} else {
			stopButton.click();
			clearInterval(animationInterval);
		}
	}, frameInterval); // Run at consistent 60fps
});

// Add click event listener to the "Stop" button
const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
	clearInterval(animationInterval); // Stop the ongoing animation
	isPlaying = false;
	timingWindowHolesSelected = []; // Reset the selected holes array
	//drawData(points, timingWindowHolesSelected); // Call drawPoints to reset the highlights
});

// Add input event listener to the playSpeed input range
const playSpeedInput = document.getElementById("playSpeed");
playSpeedInput.addEventListener("input", updatePlaySpeed);

function drawLegend(strokecolor) {
	//draw a legend at the bottom of the screen in the center
	//the legend should be for the drawDelauanyTriangles function
	//the legend should display the roundedAngleDip Ranges and there colors
	const legend0to5 = "rgb(51, 139, 255)";
	const legend5to7 = "rgb(0, 102, 204)";
	const legend7to9 = "rgb(0, 204, 204)";
	const legend9to12 = "rgb(102, 204, 0)";
	const legend12to15 = "rgb(204, 204, 0)";
	const legend15to17 = "rgb(255, 128, 0)";
	const legend17to20 = "rgb(255, 0, 0)";
	const legend20above = "rgb(153, 0, 76)";
	//draw the legend
	ctx.beginPath();
	ctx.fill();
	ctx.font = "14px Roboto";
	ctx.fontWeight = "bold";
	ctx.fillStyle = strokecolor;
	ctx.fillText("Legend Slope", 10, canvas.height / 2 - 70);
	ctx.fillText("0\u00B0-5\u00B0", 10, canvas.height / 2 - 40);
	ctx.fillText("5\u00B0-7\u00B0", 10, canvas.height / 2 - 10);
	ctx.fillText("7\u00B0-9\u00B0", 10, canvas.height / 2 + 20);
	ctx.fillText("9\u00B0-12\u00B0", 10, canvas.height / 2 + 50);
	ctx.fillText("12\u00B0-15\u00B0", 10, canvas.height / 2 + 80);
	ctx.fillText("15\u00B0-17\u00B0", 10, canvas.height / 2 + 110);
	ctx.fillText("17\u00B0-20\u00B0", 10, canvas.height / 2 + 140);
	ctx.fillText("20\u00B0+", 10, canvas.height / 2 + 170);
	ctx.fillStyle = legend0to5;
	ctx.fillRect(60, canvas.height / 2 - 55, 20, 20);
	ctx.fillStyle = legend5to7;
	ctx.fillRect(60, canvas.height / 2 - 25, 20, 20);
	ctx.fillStyle = legend7to9;
	ctx.fillRect(60, canvas.height / 2 + 5, 20, 20);
	ctx.fillStyle = legend9to12;
	ctx.fillRect(60, canvas.height / 2 + 35, 20, 20);
	ctx.fillStyle = legend12to15;
	ctx.fillRect(60, canvas.height / 2 + 65, 20, 20);
	ctx.fillStyle = legend15to17;
	ctx.fillRect(60, canvas.height / 2 + 95, 20, 20);
	ctx.fillStyle = legend17to20;
	ctx.fillRect(60, canvas.height / 2 + 125, 20, 20);
	ctx.fillStyle = legend20above;
	ctx.fillRect(60, canvas.height / 2 + 155, 20, 20);
	ctx.stroke();
}

function worldToCanvas(x, y) {
	return [(x - centroidX) * currentScale + canvas.width / 2, (-y + centroidY) * currentScale + canvas.height / 2];
}

// Helper to fetch display options once
function getDisplayOptions() {
	return {
		holeID: document.getElementById("display1").checked,
		holeLen: document.getElementById("display2").checked,
		holeDia: document.getElementById("display2A").checked,
		holeAng: document.getElementById("display3").checked,
		holeDip: document.getElementById("display4").checked,
		holeBea: document.getElementById("display5").checked,
		holeSubdrill: document.getElementById("display5B").checked,
		connector: document.getElementById("display5A").checked,
		delayValue: document.getElementById("display6").checked,
		initiationTime: document.getElementById("display6A").checked,
		contour: document.getElementById("display8").checked,
		slopeMap: document.getElementById("display8A").checked,
		burdenRelief: document.getElementById("display8B").checked,
		firstMovement: document.getElementById("display8C").checked,
		xValue: document.getElementById("display9").checked,
		yValue: document.getElementById("display10").checked,
		zValue: document.getElementById("display11").checked,
		holeType: document.getElementById("display12").checked,
		measuredLength: document.getElementById("display13").checked,
		measuredMass: document.getElementById("display14").checked,
		measuredComment: document.getElementById("display15").checked,
		voronoiPF: document.getElementById("display16").checked
	};
}

// Build hole map for quick lookup by entityName and holeID
function buildHoleMap(points) {
	const map = new Map();
	if (points && Array.isArray(points) && points.length > 0) {
		for (const pt of points) {
			map.set(pt.entityName + ":::" + pt.holeID, pt);
		}
	}
	return map;
}

let drawMouseLines = true; //used to debug mouse location

function drawMouseCrossHairs(mouseX, mouseY, snapRadiusPixels, showSnapRadius = true, showMouseLines = true) {
	//draw a vertical lin the height of the canvas at the mouse x location and draw a line the width of the canvas at the y location of the mouse. it should be color grey at 50% opacity
	if (showMouseLines) {
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.moveTo(mouseX, 0);
		ctx.lineTo(mouseX, canvas.height);
		ctx.strokeStyle = darkModeEnabled ? "rgba(200, 200, 200, 0.6)" : "rgba(100, 100, 100, 0.6)";
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.moveTo(0, mouseY);
		ctx.lineTo(canvas.width, mouseY);
		ctx.strokeStyle = darkModeEnabled ? "rgba(200, 200, 200, 0.6)" : "rgba(100, 100, 100, 0.6)";
		ctx.stroke();
		ctx.closePath();
	}
	if (showSnapRadius && snapRadiusPixels > 0) {
		// Draw the snapping radius circle
		ctx.beginPath();
		ctx.arc(mouseX, mouseY, snapRadiusPixels, 0, 2 * Math.PI);
		ctx.strokeStyle = darkModeEnabled ? "rgba(200, 200, 200, 0.6)" : "rgba(100, 100, 100, 0.6)";
		ctx.stroke();
		ctx.closePath();
	}
}

// Main draw function
function drawData(points, selectedHole) {
	if (canvas) {
		// For UI version 2, this is ESSENTIAL.
		// For UI version 1, it adds robustness if its display size could ever change.
		if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
		}
	}

	if (ctx) {
		clearCanvas();
		ctx.imageSmoothingEnabled = false;

		const displayOptions = getDisplayOptions();
		let holeMap = new Map();
		if (points && Array.isArray(points) && points.length > 0) {
			holeMap = buildHoleMap(points);
		}

		// Draw background images FIRST (bottom layer)
		drawBackgroundImage();

		// Draw surfaces SECOND
		drawSurface();

		// Highlight single selected point if needed
		if (selectedPoint !== null) {
			const [x, y] = worldToCanvas(selectedPoint.pointXLocation, selectedPoint.pointYLocation);
			drawHiHole(x, y, 10, "rgba(255, 102, 255, 0.3)", "rgba(255, 0, 255, 0.6)");
		}

		// In drawData function, replace the drawing logic with:
		for (const [name, entity] of allKADDrawingsMap.entries()) {
			if (developerModeEnabled && entity.entityType === "point") {
				// Draw points - FIX: Remove extra parameters
				entity.data.forEach((point) => {
					const screenX = (point.pointXLocation - centroidX) * currentScale + canvas.width / 2;
					const screenY = -(point.pointYLocation - centroidY) * currentScale + canvas.height / 2;
					drawKADPoints(screenX, screenY, point.pointZLocation, point.color); // ← Remove pointDiameter and 1
				});
			} else if (entity.entityType === "point") {
				// Apply pixel distance simplification to points for performance
				const originalPoints = entity.data;
				const simplifiedPoints = simplifyByPxDist(originalPoints, 3); // Slightly smaller threshold for points

				for (const pointData of simplifiedPoints) {
					const [x, y] = worldToCanvas(pointData.pointXLocation, pointData.pointYLocation);
					drawKADPoints(x, y, pointData.pointZLocation, pointData.color);
				}
			} else if (entity.entityType === "circle") {
				// Draw circles
				entity.data.forEach((circle) => {
					const screenX = (circle.pointXLocation - centroidX) * currentScale + canvas.width / 2;
					const screenY = -(circle.pointYLocation - centroidY) * currentScale + canvas.height / 2;
					drawKADCircles(screenX, screenY, circle.pointZLocation, circle.radius, circle.lineWidth, circle.color);
				});
			} else if (entity.entityType === "text") {
				// Draw text - Fix the property name
				entity.data.forEach((textData) => {
					if (textData && textData.text) {
						const screenX = (textData.pointXLocation - centroidX) * currentScale + canvas.width / 2;
						const screenY = -(textData.pointYLocation - centroidY) * currentScale + canvas.height / 2;
						drawKADTexts(screenX, screenY, textData.pointZLocation, textData.text, textData.color); // ← Change textValue to text and strokeColor to color
					}
				});
			} else if (developerModeEnabled && (entity.entityType === "line" || entity.entityType === "poly")) {
				// --- Developer Mode: Full quality, no simplification ---
				const points = entity.data;
				if (points.length < 2) continue;

				// Draw all segments without any simplification
				for (let i = 0; i < points.length - 1; i++) {
					const currentPoint = points[i]; // FIRST point of segment
					const nextPoint = points[i + 1]; // SECOND point of segment

					const [sx, sy] = worldToCanvas(currentPoint.pointXLocation, currentPoint.pointYLocation);
					const [ex, ey] = worldToCanvas(nextPoint.pointXLocation, nextPoint.pointYLocation);

					// Use FIRST point properties
					drawKADPolys(sx, sy, ex, ey, currentPoint.pointZLocation, nextPoint.pointZLocation, currentPoint.lineWidth, currentPoint.color, false);
				}

				// Handle closing segment for polygons
				const isClosed = entity.entityType === "poly";
				if (isClosed && points.length > 2) {
					const firstPoint = points[0];
					const lastPoint = points[points.length - 1];
					const [sx, sy] = worldToCanvas(lastPoint.pointXLocation, lastPoint.pointYLocation);
					const [ex, ey] = worldToCanvas(firstPoint.pointXLocation, firstPoint.pointYLocation);

					// Use last point properties for closing segment
					drawKADPolys(sx, sy, ex, ey, lastPoint.pointZLocation, firstPoint.pointZLocation, lastPoint.lineWidth, lastPoint.color, false);
				}
			} else if (!developerModeEnabled && (entity.entityType === "line" || entity.entityType === "poly")) {
				// --- Pixel-distance simplification for performance ---
				const originalPoints = entity.data;
				if (originalPoints.length < 2) continue;

				// Simplify by pixel distance
				let pointThreshold = 2;
				if (currentScale > 1) {
					pointThreshold = 2;
				} else {
					pointThreshold = 1;
				}

				const simplifiedPoints = simplifyByPxDist(originalPoints, pointThreshold);

				// Draw the simplified line/polygon
				for (let i = 0; i < simplifiedPoints.length - 1; i++) {
					const currentPoint = simplifiedPoints[i];
					const nextPoint = simplifiedPoints[i + 1];

					const [sx, sy] = worldToCanvas(currentPoint.pointXLocation, currentPoint.pointYLocation);
					const [ex, ey] = worldToCanvas(nextPoint.pointXLocation, nextPoint.pointYLocation);

					// Use FIRST point properties
					drawKADPolys(sx, sy, ex, ey, currentPoint.pointZLocation, nextPoint.pointZLocation, currentPoint.lineWidth, currentPoint.color, false);
				}

				// Handle closing segment for polygons
				const isClosed = entity.entityType === "poly";
				if (isClosed && simplifiedPoints.length > 2) {
					const firstPoint = simplifiedPoints[0];
					const lastPoint = simplifiedPoints[simplifiedPoints.length - 1];
					const [sx, sy] = worldToCanvas(lastPoint.pointXLocation, lastPoint.pointYLocation);
					const [ex, ey] = worldToCanvas(firstPoint.pointXLocation, firstPoint.pointYLocation);

					// Use last point properties for closing segment
					drawKADPolys(sx, sy, ex, ey, lastPoint.pointZLocation, firstPoint.pointZLocation, lastPoint.lineWidth, lastPoint.color, false);
				}
			}
		}

		// VORONOI PF & OVERLAYS
		const tri = delaunayTriangles(points, maxEdgeLength);
		const blastBoundaryPolygon = createBlastBoundaryPolygon(tri.resultTriangles);
		const offsetBoundaryPolygon = offsetPolygonClipper(blastBoundaryPolygon, getAverageDistance(points) / 2);

		// Voronoi Powder Factor
		if (displayOptions.voronoiPF) {
			// console.log("DEBUG: VORONOI PF");
			switch (selectedVoronoiMetric) {
				case "powderFactor":
					// console.log("Drawing Powder Factor");
					//get the min and max values for the PF if isVoronoiLegendFixed is false
					let minPF, maxPF, intervalPF, deltaPF;

					if (!isVoronoiLegendFixed) {
						// console.log("DEBUG: VORONOI PF NOT FIXED");
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.powderFactor).filter((v) => v != null && !isNaN(v));
						minPF = 0; //values.length > 0 ? Math.min(...values) : 0;
						maxPF = values.length > 0 ? Math.max(...values) : 3;
						if (maxPF - minPF > 0) {
							deltaPF = maxPF - minPF;
							intervalPF = deltaPF / 4;
						} else {
							minPF = 0;
							maxPF = 1;
							intervalPF = 0.2;
						}
					} else {
						// console.log("DEBUG: VORONOI PF FIXED");
						minPF = 0;
						maxPF = 3;
						if (maxPF - minPF > 0) {
							deltaPF = maxPF - minPF;
							intervalPF = deltaPF > 0 ? Math.ceil(deltaPF / 10) : 0.5;
						} else {
							minPF = 0;
							maxPF = 1;
							intervalPF = 0.2;
						}
					}
					drawVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getPFColor(value, minPF, maxPF), "Legend Powder Factor", minPF, maxPF, intervalPF);
					break;
				case "mass":
					// console.log("Drawing Mass");
					let minMass, maxMass, intervalMass, deltaMass;

					if (!isVoronoiLegendFixed) {
						// console.log("DEBUG: VORONOI MASS NOT FIXED");
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.mass).filter((v) => v != null && !isNaN(v));
						minMass = values.length > 0 ? Math.min(...values) : 0;
						maxMass = values.length > 0 ? Math.max(...values) : 500;
						if (maxMass - minMass > 0) {
							deltaMass = maxMass - minMass;
							intervalMass = deltaMass / 4;
						} else {
							minMass = 0;
							maxMass = 1;
							intervalMass = 0.2;
						}
					} else {
						// console.log("DEBUG: VORONOI MASS FIXED");
						minMass = 0;
						maxMass = 1000;
						if (maxMass - minMass > 0) {
							deltaMass = maxMass - minMass;
							intervalMass = deltaMass > 0 ? Math.ceil(deltaMass / 10) : 250;
						} else {
							minMass = 0;
							maxMass = 1;
							intervalMass = 0.2;
						}
					}
					drawVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getMassColor(value, minMass, maxMass), "Legend Mass", minMass, maxMass, intervalMass);
					break;
				case "volume": {
					// console.log("Drawing Volume");
					let minVol, maxVol, intervalVol, deltaVol;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.volume).filter((v) => v != null && !isNaN(v));
						minVol = values.length > 0 ? Math.min(...values) : 0;
						maxVol = values.length > 0 ? Math.max(...values) : 100;
						if (maxVol - minVol > 0) {
							deltaVol = maxVol - minVol;
							intervalVol = deltaVol / 10;
						} else {
							minVol = 0;
							maxVol = 1;
							intervalVol = 0.2;
						}
					} else {
						minVol = 0;
						maxVol = 5000;
						if (maxVol - minVol > 0) {
							deltaVol = maxVol - minVol;
							intervalVol = 500;
						} else {
							minVol = 0;
							maxVol = 1;
							intervalVol = 0.2;
						}
					}
					drawVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getVolumeColor(value, minVol, maxVol), "Legend Volume", minVol, maxVol, intervalVol);
					break;
				}
				case "area": {
					// console.log("Drawing Area");
					let minArea, maxArea, intervalArea, deltaArea;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.area).filter((v) => v != null && !isNaN(v));
						minArea = values.length > 0 ? Math.min(...values) : 0;
						maxArea = values.length > 0 ? Math.max(...values) : 100;
						if (maxArea - minArea > 0) {
							deltaArea = maxArea - minArea;
							intervalArea = deltaArea / 10;
						} else {
							minArea = 0;
							maxArea = 1;
							intervalArea = 0.2;
						}
					} else {
						minArea = 0;
						maxArea = 500;
						if (maxArea - minArea > 0) {
							deltaArea = maxArea - minArea;
							intervalArea = 50;
						} else {
							minArea = 0;
							maxArea = 1;
							intervalArea = 0.2;
						}
					}
					drawVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getAreaColor(value, minArea, maxArea), "Legend Area", minArea, maxArea, intervalArea);
					break;
				}
				case "measuredLength": {
					// console.log("Drawing Measured Length");
					let minMLen, maxMLen, intervalMLen, deltaMLen;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.measuredLength).filter((v) => v != null && !isNaN(v));
						minMLen = values.length > 0 ? Math.min(...values) : 0;
						maxMLen = values.length > 0 ? Math.max(...values) : 50;
						if (maxMLen - minMLen > 0) {
							deltaMLen = maxMLen - minMLen;
							intervalMLen = deltaMLen / 10;
						} else if (maxMLen > 0) {
							minMLen = 0;
							maxMLen = maxMLen;
							intervalMLen = (maxMLen - minMLen) / 10;
						} else {
							minMLen = 0;
							maxMLen = 1;
							intervalMLen = 0.2;
						}
					} else {
						minMLen = 0;
						maxMLen = 50;
						if (maxMLen - minMLen > 0) {
							deltaMLen = maxMLen - minMLen;
							intervalMLen = 5;
						} else if (maxMLen > 0) {
							minMLen = 0;
							maxMLen = maxMLen;
							intervalMLen = (maxMLen - minMLen) / 10;
						} else {
							minMLen = 0;
							maxMLen = 1;
							intervalMLen = 0.2;
						}
					}
					drawVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getLengthColor(value, minMLen, maxMLen), "Legend Measured Length", minMLen, maxMLen, intervalMLen);
					break;
				}
				case "designedLength": {
					// console.log("Drawing Designed Length");
					let minDLen, maxDLen, intervalDLen, deltaDLen;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.designedLength).filter((v) => v != null && !isNaN(v));
						minDLen = values.length > 0 ? Math.min(...values) : 0;
						maxDLen = values.length > 0 ? Math.max(...values) : 50;
						if (maxDLen - minDLen > 0) {
							deltaDLen = maxDLen - minDLen;
							intervalDLen = deltaDLen / 10;
						} else if (maxDLen > 0) {
							minDLen = 0;
							maxDLen = maxDLen;
							intervalDLen = (maxDLen - minDLen) / 10;
						} else {
							minDLen = 0;
							maxDLen = 1;
							intervalDLen = 0.2;
						}
					} else {
						minDLen = 0;
						maxDLen = 50;
						if (maxDLen - minDLen > 0) {
							deltaDLen = maxDLen - minDLen;
							intervalDLen = 5;
						} else if (maxDLen > 0) {
							minDLen = 0;
							maxDLen = maxDLen;
							intervalDLen = (maxDLen - minDLen) / 10;
						} else {
							minDLen = 0;
							maxDLen = 1;
							intervalDLen = 0.2;
						}
					}
					drawVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getLengthColor(value, minDLen, maxDLen), "Legend Designed Length", minDLen, maxDLen, intervalDLen);
					break;
				}
				case "holeFiringTime": {
					// console.log("Drawing Hole Firing Time");
					let minHTime, maxHTime, intervalHTime, deltaHTime;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const holeTimes = clippedCells.map((c) => c.holeFiringTime).filter((t) => t != null && !isNaN(t));
						minHTime = holeTimes.length > 0 ? Math.min(...holeTimes) : 0;
						maxHTime = holeTimes.length > 0 ? Math.max(...holeTimes) : 5000;
						if (maxHTime - minHTime > 0) {
							deltaHTime = maxHTime - minHTime;
							intervalHTime = deltaHTime / 10;
						} else {
							minHTime = 0;
							maxHTime = 1;
							intervalHTime = 0.5;
						}
					} else {
						minHTime = 0;
						maxHTime = 5000;
						if (maxHTime - minHTime > 0) {
							deltaHTime = maxHTime - minHTime;
							intervalHTime = deltaHTime > 0 ? Math.ceil(deltaHTime / 10) : 1000;
						} else {
							minHTime = 0;
							maxHTime = 1;
							intervalHTime = 0.5;
						}
					}
					drawVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getHoleFiringTimeColor(value, minHTime, maxHTime), "Legend Hole Firing Time", minHTime, maxHTime, intervalHTime);
					break;
				}
			}
		}

		// Slope Map
		if (displayOptions.slopeMap) {
			const centroid = { x: centroidX, y: centroidY };
			const { resultTriangles } = delaunayTriangles(points, maxEdgeLength);
			drawDelauanySlopeMap(resultTriangles, centroid, strokeColor);
			for (const triangle of resultTriangles) {
				drawTriangleAngleText(triangle, centroid, strokeColor);
			}
			drawLegend(strokeColor);
		}

		// Burden Relief
		if (displayOptions.burdenRelief) {
			const centroid = { x: centroidX, y: centroidY };
			const { reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
			drawDelauanyBurdenRelief(reliefTriangles, centroid, strokeColor);
			for (const triangle of reliefTriangles) {
				drawTriangleBurdenReliefText(triangle, centroid, strokeColor);
			}
			drawReliefLegend(strokeColor);
		}

		// First Movement Direction Arrows
		if (displayOptions.firstMovement) {
			connScale = document.getElementById("connSlider").value;
			for (const arrow of directionArrows) {
				const [startX, startY] = worldToCanvas(arrow[0], arrow[1]);
				const [endX, endY] = worldToCanvas(arrow[2], arrow[3]);
				drawDirectionArrow(startX, startY, endX, endY, arrow[4], strokeColor, arrow[5]);
			}
		}

		// Contour Lines
		if (displayOptions.contour) {
			ctx.lineWidth = 3;
			ctx.strokeStyle = "magenta";
			for (const contourLines of contourLinesArray) {
				for (const line of contourLines) {
					const [startX, startY] = worldToCanvas(line[0].x, line[0].y);
					const [endX, endY] = worldToCanvas(line[1].x, line[1].y);
					ctx.beginPath();
					ctx.moveTo(startX, startY);
					ctx.lineTo(endX, endY);
					ctx.stroke();
				}
			}
		}

		// Main hole loop
		ctx.lineWidth = 1;
		ctx.strokeStyle = strokeColor;
		ctx.font = parseInt(currentFontSize) + "px Arial";
		if (points && Array.isArray(points) && points.length > 0) {
			for (const point of points) {
				const [x, y] = worldToCanvas(point.startXLocation, point.startYLocation);
				const [gradeX, gradeY] = worldToCanvas(point.gradeXLocation, point.gradeYLocation);
				const [lineEndX, lineEndY] = worldToCanvas(point.endXLocation, point.endYLocation);

				toeSizeInMeters = document.getElementById("toeSlider").value;
				connScale = document.getElementById("connSlider").value;

				// Draw collar-to-toe track if angled
				if (point.holeAngle > 0) {
					drawTrack(x, y, lineEndX, lineEndY, gradeX, gradeY, strokeColor, point.subdrillAmount);
				}

				// Highlight selected holes for animation/time window selection
				handleHoleHighlighting(point, x, y);

				// Draw toe if hole length is not zero
				if (parseFloat(point.holeLengthCalculated).toFixed(1) != 0.0) {
					const radiusInPixels = toeSizeInMeters * currentScale;
					drawHoleToe(lineEndX, lineEndY, transparentFillColor, strokeColor, radiusInPixels);
				}

				// Calculate text offsets
				const textOffset = parseInt((point.holeDiameter / 1000) * holeScale * currentScale);
				const leftSideToe = parseInt(lineEndX) - textOffset;
				const rightSideToe = parseInt(lineEndX) + textOffset;
				const leftSideCollar = parseInt(x) - textOffset;
				const rightSideCollar = parseInt(x) + textOffset;
				const topSideToe = parseInt(lineEndY - textOffset);
				const middleSideToe = parseInt(lineEndY + textOffset + parseInt(currentFontSize / 4));
				const bottomSideToe = parseInt(lineEndY + textOffset + parseInt(currentFontSize));
				const topSideCollar = parseInt(y - textOffset);
				const middleSideCollar = parseInt(y + parseInt(currentFontSize / 2));
				const bottomSideCollar = parseInt(y + textOffset + parseInt(currentFontSize));

				// Draw text/labels based on displayOptions
				drawHoleTextsAndConnectors(point, x, y, lineEndX, lineEndY, {
					leftSideToe,
					rightSideToe,
					leftSideCollar,
					rightSideCollar,
					topSideToe,
					middleSideToe,
					bottomSideToe,
					topSideCollar,
					middleSideCollar,
					bottomSideCollar,
					holeMap,
					displayOptions
				});

				// Draw main hole geometry, with selection highlight logic
				drawHoleMainShape(point, x, y, selectedHole);

				// Font slider/label only needs to be updated once, after loop
			}
		}
		// After all other drawing operations but before font updates
		if (isPolygonSelectionActive) {
			drawPolygonSelection(ctx);
		}
		// Add preview lines right after polygon selection
		drawKADPreviewLine(ctx);

		// Holes Displayed Count
		ctx.fillStyle = "red";
		ctx.font = "12px Arial";
		if (!points || !Array.isArray(points) || points.length < 1) {
			ctx.fillText("Holes Displayed: 0", 10, canvas.height - 65);
		} else {
			ctx.fillText("Holes Displayed: " + points.length, 10, canvas.height - 65);
		}
		// Use lastMouseX and lastMouseY if available, otherwise default to 0
		const mouseX = typeof lastMouseX !== "undefined" ? lastMouseX : 0;
		const mouseY = typeof lastMouseY !== "undefined" ? lastMouseY : 0;
		// Convert canvas (mouse) coordinates to world coordinates
		const worldX = (mouseX - canvas.width / 2) / currentScale + centroidX;
		const worldY = -(mouseY - canvas.height / 2) / currentScale + centroidY;
		ctx.fillText("Mouse Location: [x] " + mouseX + " [y] " + mouseY + " [scale] 1:" + currentScale.toFixed(4), 10, canvas.height - 55);
		ctx.fillText("World Location: [x] " + worldX.toFixed(2) + " [y] " + worldY.toFixed(2), 10, canvas.height - 45);
		ctx.fillStyle = "blue";
		ctx.fillText("Version: Build: " + buildVersion, 10, canvas.height - 35);

		if (drawMouseLines) {
			drawMouseCrossHairs(mouseX, mouseY, snapRadiusPixels, true, true);
		}
		// Draw active rulers (completed measurements)
		if (isRulerActive && rulerStartPoint && rulerEndPoint) {
			drawRuler(rulerStartPoint.x, rulerStartPoint.y, rulerEndPoint.x, rulerEndPoint.y);
		}
		// Draw live ruler while measuring (full ruler that follows mouse)
		if (isRulerActive && rulerStartPoint && !rulerEndPoint) {
			// Convert canvas mouse coordinates to world coordinates
			const worldMouseX = (mouseX - canvas.width / 2) / currentScale + centroidX;
			const worldMouseY = -(mouseY - canvas.height / 2) / currentScale + centroidY;

			// Draw the full ruler from start point to mouse position
			drawRuler(rulerStartPoint.x, rulerStartPoint.y, worldMouseX, worldMouseY);
		}
		// Draw completed bearing measurement
		if (isRulerProtractorActive && rulerProtractorPoints.length === 3) {
			drawProtractor(rulerProtractorPoints[0].x, rulerProtractorPoints[0].y, rulerProtractorPoints[1].x, rulerProtractorPoints[1].y, rulerProtractorPoints[2].x, rulerProtractorPoints[2].y);
		}

		// Draw live bearing measurement preview
		if (isRulerProtractorActive && rulerProtractorPoints.length > 0 && rulerProtractorPoints.length < 3) {
			const worldMouseX = (mouseX - canvas.width / 2) / currentScale + centroidX;
			const worldMouseY = -(mouseY - canvas.height / 2) / currentScale + centroidY;

			if (rulerProtractorPoints.length === 1) {
				// After first click - show line from center to mouse
				drawProtractor(rulerProtractorPoints[0].x, rulerProtractorPoints[0].y, worldMouseX, worldMouseY, rulerProtractorPoints[0].x, rulerProtractorPoints[0].y); // Same point for p3
			} else if (rulerProtractorPoints.length === 2) {
				// After second click - show both legs with live second leg
				drawProtractor(rulerProtractorPoints[0].x, rulerProtractorPoints[0].y, rulerProtractorPoints[1].x, rulerProtractorPoints[1].y, worldMouseX, worldMouseY);
			}
		}
		// Add this line at the end of the drawData function, just before the final closing brace
		drawPatternInPolygonVisual();
		drawPatternOnPolylineVisual();
		drawKADPolygonSelectionVisuals();
		drawHolesAlongLineVisuals();
		drawKADSelectionVisuals();
		drawSurfaceLegend();
		drawMultilineText(ctx, statusMessage, canvas.width / 2, 16, 16, "center", strokeColor, strokeColor, true);
		// Update font slider and label after loop (once)
		fontSlider.value = currentFontSize;
		fontLabel.textContent = "Font Size: " + parseFloat(currentFontSize).toFixed(1) + "px";
		if (printMode) {
			drawPrintBoundary(ctx);
		}
	} else {
		// Handle missing context
		return;
	}
}

function drawVoronoiLegendAndCells(points, selectedVoronoiMetric, getColorForMetric, legendLabel, minValue, maxValue, step) {
	const legendX = 10,
		legendY = canvas.height / 2 - 70,
		gradientWidth = 20,
		gradientHeight = 160;
	ctx.fillStyle = strokeColor;
	ctx.font = "14px Roboto";
	ctx.fontWeight = "bold";
	ctx.fillText(legendLabel || "Legend " + selectedVoronoiMetric, legendX, legendY - 15);

	// Create gradient for legend
	const gradient = ctx.createLinearGradient(0, legendY, 0, legendY + gradientHeight);
	const stops = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0];
	stops.forEach(function (stop) {
		const value = minValue + stop * (maxValue - minValue);
		const color = getColorForMetric(value);
		if (typeof color !== "string" || color.includes("NaN")) {
			// fallback or skip this color stop
		} else {
			gradient.addColorStop(stop, color);
		}
	});
	ctx.fillStyle = gradient;
	ctx.fillRect(legendX + 50, legendY, gradientWidth, gradientHeight);

	ctx.fillStyle = "darkgrey";
	ctx.textAlign = "left";
	ctx.textBaseline = "middle";
	// Draw tick marks and labels
	for (let v = minValue; v <= maxValue; v += step) {
		const y = legendY + ((v - minValue) / (maxValue - minValue)) * gradientHeight;
		ctx.strokeStyle = "#aaa";
		ctx.beginPath();
		ctx.moveTo(legendX + 50 + gradientWidth, y);
		ctx.lineTo(legendX + 50 + gradientWidth + 8, y);
		ctx.stroke();
		ctx.fillText(v.toFixed(1), legendX, y);
	}

	const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
	//modes available: min, max, average, mode

	const clippedCells = clipVoronoiCells(voronoiMetrics);

	for (const cell of clippedCells) {
		const value = cell[selectedVoronoiMetric];
		if (!cell.polygon || value == null) continue;
		ctx.beginPath();
		for (let j = 0; j < cell.polygon.length; j++) {
			const pt = cell.polygon[j];
			const [x, y] = worldToCanvas(pt.x !== undefined ? pt.x : pt[0], pt.y !== undefined ? pt.y : pt[1]);
			if (j === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		ctx.closePath();
		ctx.fillStyle = getColorForMetric(value);
		ctx.fill();
		ctx.strokeStyle = "#222";
		ctx.lineWidth = 1;
		ctx.stroke();
	}
}

// === Helper: Draw hole labels, connectors, delay text, etc. ===
function drawHoleTextsAndConnectors(point, x, y, lineEndX, lineEndY, ctxObj) {
	const { leftSideToe, rightSideToe, leftSideCollar, rightSideCollar, topSideToe, middleSideToe, bottomSideToe, topSideCollar, middleSideCollar, bottomSideCollar, holeMap, displayOptions } = ctxObj;

	if (displayOptions.holeID) {
		drawText(rightSideCollar, topSideCollar, point.holeID, textFillColor);
	}
	if (displayOptions.holeDia) {
		drawText(rightSideCollar, middleSideCollar, parseFloat(point.holeDiameter).toFixed(0), "green");
	}
	if (displayOptions.holeLen) {
		drawText(rightSideCollar, bottomSideCollar, parseFloat(point.holeLengthCalculated).toFixed(1), depthColor);
	}
	if (displayOptions.holeAng) {
		drawRightAlignedText(leftSideCollar, topSideCollar, parseFloat(point.holeAngle).toFixed(0), angleDipColor);
	}
	if (displayOptions.holeDip) {
		drawRightAlignedText(leftSideToe, topSideToe, 90 - parseFloat(point.holeAngle).toFixed(0), angleDipColor);
	}
	if (displayOptions.holeBea) {
		drawRightAlignedText(leftSideToe, bottomSideToe, parseFloat(point.holeBearing).toFixed(1), "red");
	}
	if (displayOptions.holeSubdrill) {
		drawRightAlignedText(leftSideToe, bottomSideToe, parseFloat(point.subdrillAmount).toFixed(1), "blue");
	}
	if (displayOptions.initiationTime) {
		drawRightAlignedText(leftSideCollar, middleSideCollar, point.holeTime, "red");
	}
	if (displayOptions.connector && point.fromHoleID) {
		const [splitEntityName, splitFromHoleID] = point.fromHoleID.split(":::");
		const fromHole = holeMap.get(splitEntityName + ":::" + splitFromHoleID);
		if (fromHole) {
			const [startX, startY] = worldToCanvas(fromHole.startXLocation, fromHole.startYLocation);
			const connColor = point.colorHexDecimal;
			try {
				drawArrow(startX, startY, x, y, connColor, connScale);
			} catch (error) {
				console.error("Error drawing arrow:", error);
			}
		}
	}
	if (displayOptions.delayValue && point.fromHoleID) {
		const [splitEntityName, splitFromHoleID] = point.fromHoleID.split(":::");
		const fromHole = holeMap.get(splitEntityName + ":::" + splitFromHoleID);
		if (fromHole) {
			const [startX, startY] = worldToCanvas(fromHole.startXLocation, fromHole.startYLocation);
			const connColor = point.colorHexDecimal;
			const pointDelay = point.timingDelayMilliseconds;
			drawArrowDelayText(startX, startY, x, y, connColor, pointDelay);
		}
	}
	if (displayOptions.xValue) {
		drawRightAlignedText(leftSideCollar, topSideCollar, parseFloat(point.startXLocation).toFixed(2), textFillColor);
	}
	if (displayOptions.yValue) {
		drawRightAlignedText(leftSideCollar, middleSideCollar, parseFloat(point.startYLocation).toFixed(2), textFillColor);
	}
	if (displayOptions.zValue) {
		drawRightAlignedText(leftSideCollar, bottomSideCollar, parseFloat(point.startZLocation).toFixed(2), textFillColor);
	}
	if (displayOptions.holeType) {
		drawText(rightSideCollar, middleSideCollar, point.holeType, "green");
	}
	if (displayOptions.measuredLength) {
		drawRightAlignedText(leftSideCollar, bottomSideToe, point.measuredLength, "#FF4400");
	}
	if (displayOptions.measuredMass) {
		drawRightAlignedText(leftSideCollar, topSideToe, point.measuredMass, "#FF6600");
	}
	if (displayOptions.measuredComment) {
		drawText(rightSideCollar, middleSideCollar, point.measuredComment, "#FF8800");
	}
}

function drawConnectStadiumZone(sx, sy, endX, endY, connectAmount) {
	// Only draw stadium zone if multi-connector tool is active
	if (isAddingMultiConnector) {
		// Convert world coordinates to canvas coordinates
		const [canvasStartX, canvasStartY] = worldToCanvas(sx, sy);
		const [canvasEndX, canvasEndY] = worldToCanvas(endX, endY);

		// connectAmount is already in meters, so just multiply by currentScale
		const radiusPx = connectAmount * currentScale;

		// Calculate the line vector and perpendicular vector
		const dx = canvasEndX - canvasStartX;
		const dy = canvasEndY - canvasStartY;
		const length = Math.sqrt(dx * dx + dy * dy);

		// Avoid division by zero
		if (length < 1) return;

		// Normalize the direction vector
		const dirX = dx / length;
		const dirY = dy / length;

		// Get perpendicular vector (for width)
		const perpX = -dirY;
		const perpY = dirX;

		// Calculate the four corners of the rectangle
		const corner1X = canvasStartX + perpX * radiusPx;
		const corner1Y = canvasStartY + perpY * radiusPx;
		const corner2X = canvasStartX - perpX * radiusPx;
		const corner2Y = canvasStartY - perpY * radiusPx;
		const corner3X = canvasEndX - perpX * radiusPx;
		const corner3Y = canvasEndY - perpY * radiusPx;
		const corner4X = canvasEndX + perpX * radiusPx;
		const corner4Y = canvasEndY + perpY * radiusPx;
		// Set stadium zone color with transparency
		ctx.strokeStyle = "rgba(0, 255, 0, 0.4)";
		ctx.fillStyle = "rgba(0, 255, 0, 0.15)";
		ctx.lineWidth = 2;
		ctx.setLineDash([5, 5]); // Set dashed line with 5px gap and 5px dash

		// Draw the stadium shape (rounded rectangle)
		ctx.beginPath();

		// Start at the center of the first semicircle
		ctx.arc(canvasStartX, canvasStartY, radiusPx, Math.atan2(perpY, perpX), Math.atan2(-perpY, -perpX), false);

		// Line to second corner
		ctx.lineTo(corner3X, corner3Y);

		// Second semicircle
		ctx.arc(canvasEndX, canvasEndY, radiusPx, Math.atan2(-perpY, -perpX), Math.atan2(perpY, perpX), false);

		// Line back to first corner
		ctx.lineTo(corner1X, corner1Y);

		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		// CRITICAL: Reset line dash back to solid line
		ctx.setLineDash([]);
	}
}

// === Helper: Draw main hole, highlight if selected ===
function drawHoleMainShape(point, x, y, selectedHole) {
	const diameterPx = parseInt((point.holeDiameter / 1000) * currentScale * holeScale);

	let highlightType = null;
	let highlightColor1 = null,
		highlightColor2 = null,
		highlightText = null;

	// Check if we're in connector mode
	if (isAddingConnector || isAddingMultiConnector) {
		// First selected hole in connector mode (using fromHoleStore)
		if (fromHoleStore && fromHoleStore === point) {
			highlightType = "first";
			highlightColor1 = "rgba(0, 255, 0, 0.2)";
			highlightColor2 = "rgba(0, 190, 0, .8)";
			highlightText = "1st Selected Hole: " + point.holeID + " in: " + point.entityName + " (Select second hole)";
			drawConnectStadiumZone(point.startXLocation, point.startYLocation, currentMouseWorldX, currentMouseWorldY, connectAmount);
		}
		// Second selected hole in connector mode (using firstSelectedHole/secondSelectedHole)
		else if (firstSelectedHole && firstSelectedHole === point) {
			highlightType = "first";
			highlightColor1 = "rgba(0, 255, 0, 0.2)";
			highlightColor2 = "rgba(0, 190, 0, .8)";
			highlightText = "1st Selected Hole: " + point.holeID + " in: " + point.entityName;
		} else if (secondSelectedHole && secondSelectedHole === point) {
			highlightType = "second";
			highlightColor1 = "rgba(255, 255, 0, 0.2)";
			highlightColor2 = "rgba(255, 200, 0, .8)";
			highlightText = "2nd Selected Hole: " + point.holeID + " in: " + point.entityName + " (Click to connect)";
		}
	}
	// Regular selection highlighting (NOT in connector mode)
	else if (selectedHole != null && selectedHole === point) {
		highlightType = "selected";
		highlightColor1 = "rgba(255, 0, 150, 0.2)";
		highlightColor2 = "rgba(255, 0, 150, .8)";
		highlightText = "Editing Selected Hole: " + selectedHole.holeID + " in: " + selectedHole.entityName + " with Single Selection Mode \nEscape key to clear Selection";
	}
	// Multiple selection highlighting
	else if (selectedMultipleHoles != null && selectedMultipleHoles.find((p) => p.entityName === point.entityName && p.holeID === point.holeID)) {
		highlightType = "multi";
		highlightColor1 = "rgba(255, 0, 150, 0.2)";
		highlightColor2 = "rgba(255, 0, 150, .8)";
		if (point === selectedMultipleHoles[0]) {
			highlightText = "Editing Selected Holes: {" + selectedMultipleHoles.map((h) => h.holeID).join(",") + "} \nEscape key to clear Selection";
		} else {
			highlightText = "";
		}
	}

	// Draw highlight, if any
	if (highlightType) {
		drawHiHole(x, y, 10 + parseInt((point.holeDiameter / 900) * holeScale * currentScale), highlightColor1, highlightColor2);
		ctx.fillStyle = highlightColor2;
		ctx.font = "12px Arial";
		drawMultilineText(ctx, highlightText, 2, 20, 16, "left", highlightColor2, highlightColor1, false);
	}

	// Draw main hole/track shape (dummy, missing, or real)
	ctx.lineWidth = 1;
	ctx.strokeStyle = strokeColor;
	if (parseFloat(point.holeLengthCalculated).toFixed(1) == 0.0) {
		drawDummy(x, y, parseInt(0.2 * holeScale * currentScale), strokeColor);
	} else if (point.holeDiameter == 0) {
		drawNoDiameterHole(x, y, 10, strokeColor);
	} else {
		drawHole(x, y, diameterPx, fillColor, strokeColor);
	}
}

// === Helper: Handle Highlighting for Animation/Time Window ===
function handleHoleHighlighting(point, x, y) {
	if (isPlaying && timingWindowHolesSelected != null && timingWindowHolesSelected.find((p) => p.entityName === point.entityName && p.holeID === point.holeID)) {
		drawHiHole(x, y, 10 + parseInt((point.holeDiameter / 400) * holeScale * currentScale), "rgba(255, 150, 0, 0.7)", "rgba(200, 200, 0, 0.7)");
	}
	if (!isPlaying && timingWindowHolesSelected != null && timingWindowHolesSelected.find((p) => p.entityName === point.entityName && p.holeID === point.holeID)) {
		drawHiHole(x, y, 10 + parseInt((point.holeDiameter / 500) * holeScale * currentScale), "rgba(0, 255, 0, 0.5)", "rgba(0, 255, 0, 0.7)");
	}
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	const canvasX = evt.clientX - rect.left;
	const canvasY = evt.clientY - rect.top;

	// Store canvas coordinates (consistent with handleMouseMove)
	lastMouseX = canvasX;
	lastMouseY = canvasY;

	return {
		x: canvasX,
		y: canvasY
	};
}

function openHelp() {
	window.open("kirrausermanual.html");
}

function zoomIn() {
	currentScale += 1; // increase the current scale by 1
	currentFontSize += 1;
	drawData(points, selectedHole);
}

function zoomOut() {
	currentScale = Math.max(0.25, currentScale - 1); // decrease the current scale by 0.25, but not below 1
	currentFontSize -= 1;
	drawData(points, selectedHole);
}
function getHoleBoundaries() {
	if (!points || points.length === 0) {
		return null;
	}

	let minX = Infinity,
		maxX = -Infinity,
		minY = Infinity,
		maxY = -Infinity;

	for (const point of points) {
		if (point.startXLocation < minX) minX = point.startXLocation;
		if (point.startXLocation > maxX) maxX = point.startXLocation;
		if (point.startYLocation < minY) minY = point.startYLocation;
		if (point.startYLocation > maxY) maxY = point.startYLocation;
	}

	return { minX, maxX, minY, maxY };
}
function getKADBoundaries() {
	let minX = Infinity,
		maxX = -Infinity,
		minY = Infinity,
		maxY = -Infinity;

	if (allKADDrawingsMap.size === 0) {
		return null;
	}

	for (const entity of allKADDrawingsMap.values()) {
		if (entity.data && Array.isArray(entity.data)) {
			for (const point of entity.data) {
				if (point.pointXLocation < minX) minX = point.pointXLocation;
				if (point.pointXLocation > maxX) maxX = point.pointXLocation;
				if (point.pointYLocation < minY) minY = point.pointYLocation;
				if (point.pointYLocation > maxY) maxY = point.pointYLocation;
			}
		}
	}
	return { minX, maxX, minY, maxY };
}

function zoomToFitAll() {
	const holeBoundaries = getHoleBoundaries();
	const kadBoundaries = getKADBoundaries();
	const surfaceBoundaries = getSurfaceBoundaries(); // NEW
	const imageBoundaries = getImageBoundaries(); // NEW

	let minX = Infinity,
		maxX = -Infinity,
		minY = Infinity,
		maxY = -Infinity;

	// Include hole boundaries
	if (holeBoundaries) {
		minX = Math.min(minX, holeBoundaries.minX);
		maxX = Math.max(maxX, holeBoundaries.maxX);
		minY = Math.min(minY, holeBoundaries.minY);
		maxY = Math.max(maxY, holeBoundaries.maxY);
	}

	// Include KAD drawing boundaries
	if (kadBoundaries) {
		minX = Math.min(minX, kadBoundaries.minX);
		maxX = Math.max(maxX, kadBoundaries.maxX);
		minY = Math.min(minY, kadBoundaries.minY);
		maxY = Math.max(maxY, kadBoundaries.maxY);
	}

	// NEW: Include surface boundaries
	if (surfaceBoundaries) {
		minX = Math.min(minX, surfaceBoundaries.minX);
		maxX = Math.max(maxX, surfaceBoundaries.maxX);
		minY = Math.min(minY, surfaceBoundaries.minY);
		maxY = Math.max(maxY, surfaceBoundaries.maxY);
	}

	// NEW: Include background image boundaries
	if (imageBoundaries) {
		minX = Math.min(minX, imageBoundaries.minX);
		maxX = Math.max(maxX, imageBoundaries.maxX);
		minY = Math.min(minY, imageBoundaries.minY);
		maxY = Math.max(maxY, imageBoundaries.maxY);
	}

	if (minX === Infinity) {
		// Just set defaults without calling resetZoom()
		currentScale = scale;
		currentFontSize = fontSize;
		updateCentroids();
		drawData(points, selectedHole);
		return;
	}

	centroidX = minX + (maxX - minX) / 2;
	centroidY = minY + (maxY - minY) / 2;

	const dataWidth = maxX - minX;
	const dataHeight = maxY - minY;

	if (dataWidth === 0 || dataHeight === 0) {
		currentScale = 1;
	} else {
		const scaleX = (canvas.width * 0.9) / dataWidth;
		const scaleY = (canvas.height * 0.9) / dataHeight;
		currentScale = Math.min(scaleX, scaleY);
	}
	drawData(points, selectedHole);
}
// REPLACE the entire function:
function getSurfaceBoundaries() {
	if (loadedSurfaces.size === 0) return null;

	let minX = Infinity,
		maxX = -Infinity,
		minY = Infinity,
		maxY = -Infinity;

	loadedSurfaces.forEach((surface) => {
		if (surface.points && surface.points.length > 0) {
			surface.points.forEach((point) => {
				if (point.x < minX) minX = point.x;
				if (point.x > maxX) maxX = point.x;
				if (point.y < minY) minY = point.y;
				if (point.y > maxY) maxY = point.y;
			});
		}
	});

	if (minX === Infinity) return null;
	return { minX, maxX, minY, maxY };
}

// REPLACE the entire function:
function getImageBoundaries() {
	if (loadedImages.size === 0) return null;

	let minX = Infinity,
		maxX = -Infinity,
		minY = Infinity,
		maxY = -Infinity;

	loadedImages.forEach((image) => {
		if (image.bbox && image.bbox.length >= 4) {
			// image.bbox is [minX, minY, maxX, maxY] format
			if (image.bbox[0] < minX) minX = image.bbox[0];
			if (image.bbox[2] > maxX) maxX = image.bbox[2];
			if (image.bbox[1] < minY) minY = image.bbox[1];
			if (image.bbox[3] > maxY) maxY = image.bbox[3];
		}
	});

	if (minX === Infinity) return null;
	return { minX, maxX, minY, maxY };
}
function resetZoom() {
	currentScale = scale; // reset the current scale to the original scale
	currentFontSize = fontSize;

	//calculate the centroids from the data in the maps and points
	updateCentroids();
	drawData(points, selectedHole);
	zoomToFitAll();
}
///SAVE and LOAD POINTS ARRAY TO LOCAL STORAGE /////////////////////////////////
function saveHolesToLocalStorage(points) {
	if (points !== null) {
		/* STRUCTURE OF THE POINTS ARRAY
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
        entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colorHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp
    */
		const lines = points.map((point) => {
			return `${point.entityName},${point.entityType},${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.gradeXLocation},${point.gradeYLocation},${point.gradeZLocation},${point.subdrillAmount},${point.subdrillLength},${point.benchHeight},${point.holeDiameter},${point.holeType},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colorHexDecimal},${point.holeLengthCalculated},${point.holeAngle},${point.holeBearing},${point.initiationTime},${point.measuredLength},${point.measuredLengthTimeStamp},${point.measuredMass},${point.measuredMassTimeStamp},${point.measuredComment},${point.measuredCommentTimeStamp}\n`;
		});

		const csvString = lines.join("\n");
		const pointsMap = new Map();

		localStorage.setItem("kirraDataPoints", csvString);

		for (const entity of pointsMap.values()) {
			// console.log(entity);
		}
	}
	console.log("Points saved to local storage");
	console.log(points);
}

function refreshPoints() {
	saveHolesToLocalStorage(points);
	const playSpeedInput = document.getElementById("playSpeed");
	if (points.length > 1000) {
		playSpeedInput.max = 50;
	} else {
		playSpeedInput.max = 15;
	}
	// Clear the current points array
	points = [];
	// console.log("Points array cleared - RefreshPoints()");

	// Load points from local storage
	const csvString = localStorage.getItem("kirraDataPoints");
	if (csvString) {
		points = parseCSV(csvString);

		// CRITICAL: Validate data integrity after reload
		const duplicateCheck = checkAndResolveDuplicateHoleIDs(points, "data reload");
		if (duplicateCheck.hasDuplicates) {
			console.warn("🚨 Data corruption detected during reload - duplicates resolved automatically");
			// Save the corrected data back to localStorage
			saveHolesToLocalStorage(points);
		}

		//updateCentroids();
		holeTimes = calculateTimes(points);
		const result = recalculateContours(points, deltaX, deltaY);
		contourLinesArray = result.contourLinesArray;
		directionArrows = result.directionArrows;

		// directionArrows now contains the arrow data for later drawing

		const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength); // Recalculate triangles

		drawData(points, selectedHole);

		// Debugging: Log the points array for each entity
		const pointsMap = new Map();
		for (const point of points) {
			if (!pointsMap.has(point.entityName)) {
				pointsMap.set(point.entityName, { entityName: point.entityName, data: [] });
			}
			pointsMap.get(point.entityName).data.push(point);
		}
		for (const entity of pointsMap.values()) {
			// console.log(entity);
		}
		debouncedUpdateTreeView(); // Use debounced version
		return points;
	}
	return null;
}

// Use this function whenever you need to refresh the state and redraw the canvas
// For example, after deleting a hole or renumbering holes:
// refreshPoints();

function loadHolesFromLocalStorage() {
	// Initialize points as an empty array if it's null
	if (points === null) {
		points = [];
	}
	/* STRUCTURE OF THE POINTS ARRAY
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
        entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colorHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp
    */
	const csvString = localStorage.getItem("kirraDataPoints");
	//console.log(csvString);
	if (csvString) {
		points = parseCSV(csvString);
		//console.log(points);
		updateCentroids();
		holeTimes = calculateTimes(points);
		const result = recalculateContours(points, deltaX, deltaY);
		contourLinesArray = result.contourLinesArray;
		directionArrows = result.directionArrows;

		// directionArrows now contains the arrow data for later drawing

		const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength); // Recalculate triangles
		drawData(points, selectedHole);
		//console.log the points array in a blob for each entityname
		const pointsMap = new Map();
		for (const point of points) {
			if (!pointsMap.has(point.entityName)) {
				pointsMap.set(point.entityName, { entityName: point.entityName, data: [] });
			}
			pointsMap.get(point.entityName).data.push(point);
		}
		for (const entity of pointsMap.values()) {
			//console.log(entity);
		}
		console.log("///////////////////POINTS DATA ON LOAD//////////////");
		console.log(points);
		return points;
	}
	return null;
}

// --- IndexedDB & Local Storage Management ---

let db;
const DB_NAME = "Kirra2D-DATABASE";
const STORE_NAME = "KADDRAWINGS";
const SURFACE_STORE_NAME = "KADSURFACE";
const IMAGE_STORE_NAME = "KADIMAGES";

// Define all required stores - THIS WAS MISSING
const REQUIRED_STORES = [STORE_NAME, SURFACE_STORE_NAME, IMAGE_STORE_NAME];

// Start with a higher version that you'll use going forward
const DB_VERSION = 5; // Set this higher than your current version

async function initDB() {
	return new Promise((resolve, reject) => {
		// Open without version to get current state
		const initialRequest = indexedDB.open(DB_NAME);

		initialRequest.onsuccess = (event) => {
			const db = event.target.result;
			const currentVersion = db.version;
			const existingStores = Array.from(db.objectStoreNames);
			const missingStores = REQUIRED_STORES.filter((store) => !existingStores.includes(store));

			console.log("Current version: " + currentVersion);
			console.log("Existing stores: " + existingStores);
			console.log("Missing stores: " + missingStores);

			if (missingStores.length === 0) {
				// All good, use this connection
				resolve(db);
			} else {
				// Need to upgrade
				db.close();

				const upgradeRequest = indexedDB.open(DB_NAME, currentVersion + 1);

				upgradeRequest.onsuccess = () => resolve(upgradeRequest.result);
				upgradeRequest.onerror = () => reject(upgradeRequest.error);

				upgradeRequest.onupgradeneeded = (event) => {
					const upgradeDb = event.target.result;
					console.log("Upgrading database - creating missing stores");

					missingStores.forEach((storeName) => {
						console.log(`Creating store: ${storeName}`);
						const store = upgradeDb.createObjectStore(storeName, { keyPath: "id" });

						if (storeName === SURFACE_STORE_NAME || storeName === IMAGE_STORE_NAME) {
							store.createIndex("name", "name", { unique: false });
							store.createIndex("type", "type", { unique: false });
						}
					});
				};
			}
		};

		initialRequest.onerror = () => reject(initialRequest.error);

		// Handle new database creation
		initialRequest.onupgradeneeded = (event) => {
			const db = event.target.result;
			console.log("Creating new database with all stores");

			REQUIRED_STORES.forEach((storeName) => {
				console.log(`Creating store: ${storeName}`);
				const store = db.createObjectStore(storeName, { keyPath: "id" });

				if (storeName === SURFACE_STORE_NAME || storeName === IMAGE_STORE_NAME) {
					store.createIndex("name", "name", { unique: false });
					store.createIndex("type", "type", { unique: false });
				}
			});
		};
	});
}

let saveTimeout;
//Staged Saving for large files as these can't be save on the instantquit of a window close.
function debouncedSaveKAD() {
	// Clear any existing pending save
	clearTimeout(saveTimeout);
	// Set a new save to trigger after 2 seconds
	saveTimeout = setTimeout(() => {
		console.log("Auto-saving KAD drawings to DB...");
		// Only save if DB is initialized
		if (db) {
			saveKADToDB(allKADDrawingsMap);
		} else {
			console.log("DB not ready, skipping auto-save");
		}
	}, 2000);
}
function saveKADToDB(mapData) {
	if (!db) {
		console.error("DB not initialized. Cannot save.");
		return;
	}

	const transaction = db.transaction([STORE_NAME], "readwrite");
	const store = transaction.objectStore(STORE_NAME);
	let request;

	if (mapData.size === 0) {
		request = store.delete("kadDrawingData"); // ✅ Use consistent record key
	} else {
		const dataToStore = Array.from(mapData.entries());
		request = store.put({ id: "kadDrawingData", data: dataToStore }); // ✅ Proper object format
	}

	request.onerror = (event) => {
		console.error("Error saving KAD data to IndexedDB:", event.target.error);
	};
}

function loadKADFromDB() {
	return new Promise((resolve, reject) => {
		if (!db) {
			console.error("DB not initialized. Cannot load.");
			return reject("DB not initialized");
		}
		const transaction = db.transaction([STORE_NAME], "readonly");
		const store = transaction.objectStore(STORE_NAME);
		const request = store.get("kadDrawingData"); // ✅ Use same record key

		request.onsuccess = (event) => {
			const result = event.target.result;
			if (result && result.data && result.data.length > 0) {
				allKADDrawingsMap = new Map(result.data); // ✅ Access the data property
				console.log("✅ //-- LOADED UNIFIED DRAWING OBJECTS FROM IndexedDB --//");
				debouncedUpdateTreeView();
				drawData(points, selectedHole);
				resolve(true);
			} else {
				resolve(false);
			}
		};

		request.onerror = (event) => {
			console.error("Error loading KAD data from IndexedDB:", event.target.error);
			reject(event.target.error);
		};
	});
}
// REPLACE this function to accept surfaceId parameter:
async function saveSurfaceToDB(surfaceId) {
	return new Promise((resolve, reject) => {
		try {
			const surface = loadedSurfaces.get(surfaceId);
			if (!db || !surface || !surface.points || !surface.triangles) {
				reject(new Error("Missing database or surface data"));
				return;
			}

			const transaction = db.transaction([SURFACE_STORE_NAME], "readwrite");
			const store = transaction.objectStore(SURFACE_STORE_NAME);

			const surfaceRecord = {
				id: surfaceId,
				name: surface.name,
				type: "triangulated",
				points: surface.points,
				triangles: surface.triangles,
				visible: surface.visible,
				gradient: surface.gradient,
				transparency: surface.transparency ?? 1.0, // Add this line
				savedAt: new Date().toISOString()
			};

			const request = store.put(surfaceRecord);

			request.onsuccess = () => {
				console.log("✅ Surface " + surface.name + " saved (" + surface.points.length + " points)");
				debouncedUpdateTreeView();
				resolve(surfaceRecord);
			};

			request.onerror = () => reject(request.error);
			transaction.onerror = () => reject(transaction.error);
		} catch (error) {
			reject(error);
		}
	});
}
// Load a specific surface into the multi-surface system
async function loadSurfaceIntoMemory(surfaceId) {
	try {
		if (!db) return null;

		const transaction = db.transaction([SURFACE_STORE_NAME], "readonly");
		const store = transaction.objectStore(SURFACE_STORE_NAME);
		const request = store.get(surfaceId);

		return new Promise((resolve) => {
			request.onsuccess = () => {
				const surfaceData = request.result;
				if (surfaceData) {
					loadedSurfaces.set(surfaceData.id, {
						id: surfaceData.id,
						name: surfaceData.name,
						points: surfaceData.points,
						triangles: surfaceData.triangles,
						visible: surfaceData.visible !== false,
						gradient: surfaceData.gradient || "default",
						transparency: surfaceData.transparency ?? 1.0 // Add this line
					});
					console.log("✅ Surface " + surfaceData.name + " loaded into memory");
				}
				resolve(surfaceData);
			};
			request.onerror = () => resolve(null);
		});
	} catch (error) {
		console.error("Error loading surface into memory:", error);
		return null;
	}
}

async function loadAllSurfacesIntoMemory() {
	try {
		if (!db) return;

		const transaction = db.transaction([SURFACE_STORE_NAME], "readonly");
		const store = transaction.objectStore(SURFACE_STORE_NAME);
		const request = store.getAll();

		return new Promise((resolve) => {
			request.onsuccess = () => {
				const surfaces = request.result || [];
				surfaces.forEach((surfaceData) => {
					loadedSurfaces.set(surfaceData.id, {
						id: surfaceData.id,
						name: surfaceData.name,
						points: surfaceData.points,
						triangles: surfaceData.triangles,
						visible: surfaceData.visible !== false,
						gradient: surfaceData.gradient || "default",
						transparency: surfaceData.transparency ?? 1.0 // Add this line
					});
				});
				console.log("📊 Loaded " + loadedSurfaces.size + " surfaces into memory");
				resolve();
			};
			request.onerror = () => resolve();
		});
	} catch (error) {
		console.error("Error loading surfaces:", error);
	}
}

// Surface visibility management
function setSurfaceVisibility(surfaceId, visible) {
	const surface = loadedSurfaces.get(surfaceId);
	if (surface) {
		surface.visible = visible;
		console.log("👁️ Surface " + surface.name + " visibility: " + visible);
		drawData(points, selectedHole);
	}
}

function toggleSurfaceVisibility(surfaceId) {
	const surface = loadedSurfaces.get(surfaceId);
	if (surface) {
		surface.visible = !surface.visible;
		setSurfaceVisibility(surfaceId, surface.visible);
	}
}

// Delete surface from IndexedDB
async function deleteSurfaceFromDB(surfaceId) {
	try {
		if (!db) {
			console.log("❌ Cannot delete surface - database not available");
			return;
		}

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([SURFACE_STORE_NAME], "readwrite");
			const store = transaction.objectStore(SURFACE_STORE_NAME);
			const request = store.delete(surfaceId);

			request.onsuccess = () => {
				console.log("✅ Surface " + surfaceId + " deleted from IndexedDB");
				debouncedUpdateTreeView();
				resolve();
			};

			request.onerror = () => {
				console.error("❌ Failed to delete surface " + surfaceId + ": ," + request.error);
				reject(request.error);
			};

			transaction.onerror = () => {
				console.error("❌ Transaction failed for deleting surface " + surfaceId + ": ," + transaction.error);
				reject(transaction.error);
			};
		});
	} catch (error) {
		console.error("Error deleting surface:", error);
		throw error;
	}
}

// Delete all surfaces from IndexedDB
async function deleteAllSurfacesFromDB() {
	try {
		if (!db) {
			console.log("❌ Cannot delete surfaces - database not available");
			return;
		}

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([SURFACE_STORE_NAME], "readwrite");
			const store = transaction.objectStore(SURFACE_STORE_NAME);
			const request = store.clear();

			request.onsuccess = () => {
				console.log("✅ All surfaces deleted from IndexedDB");
				debouncedUpdateTreeView();
				resolve();
			};

			request.onerror = () => {
				console.error("❌ Failed to delete all surfaces:", request.error);
				reject(request.error);
			};
		});
	} catch (error) {
		console.error("Error deleting all surfaces:", error);
		throw error;
	}
}

// Delete all images from IndexedDB (useful for cleanup)
async function deleteAllImagesFromDB() {
	try {
		if (!db) return;

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([IMAGE_STORE_NAME], "readwrite");
			const store = transaction.objectStore(IMAGE_STORE_NAME);
			const request = store.clear();

			request.onsuccess = () => {
				console.log("✅ All images deleted from IndexedDB");
				debouncedUpdateTreeView();
				resolve();
			};

			request.onerror = () => {
				console.error("❌ Failed to delete all images:", request.error);
				reject(request.error);
			};
		});
	} catch (error) {
		console.error("Error deleting all images:", error);
		throw error;
	}
}

// REPLACE this function to accept imageId parameter:
async function saveImageToDB(imageId) {
	try {
		const image = loadedImages.get(imageId);
		if (!db || !image || !image.canvas) {
			throw new Error("Missing database or image data");
		}

		// Create blob from canvas
		const blob = await new Promise((resolve, reject) => {
			image.canvas.toBlob((result) => {
				if (result) resolve(result);
				else reject(new Error("Failed to create blob"));
			});
		});

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([IMAGE_STORE_NAME], "readwrite");
			const store = transaction.objectStore(IMAGE_STORE_NAME);

			const imageRecord = {
				id: imageId,
				name: image.name,
				type: image.type || "imagery",
				bbox: image.bbox,
				blob: blob,
				visible: image.visible,
				transparency: image.transparency,
				savedAt: new Date().toISOString()
			};

			const request = store.put(imageRecord);
			request.onsuccess = () => {
				debouncedUpdateTreeView();
				resolve(imageRecord);
			};
			request.onerror = () => reject(request.error);
			transaction.onerror = () => reject(transaction.error);
		});
	} catch (error) {
		console.error("Error saving image:", error);
		throw error;
	}
}

// Load image from IndexedDB

// Load a specific image into the multi-image system
async function loadImageIntoMemory(imageId) {
	try {
		if (!db) return null;

		const transaction = db.transaction([IMAGE_STORE_NAME], "readonly");
		const store = transaction.objectStore(IMAGE_STORE_NAME);
		const request = store.get(imageId);

		return new Promise((resolve) => {
			request.onsuccess = async () => {
				const imageData = request.result;
				if (imageData) {
					// Convert blob back to canvas
					const img = new Image();
					const canvas = document.createElement("canvas");
					const ctx = canvas.getContext("2d");

					img.onload = () => {
						canvas.width = img.width;
						canvas.height = img.height;
						ctx.drawImage(img, 0, 0);

						loadedImages.set(imageId, {
							id: imageId,
							name: imageData.name,
							canvas: canvas,
							bbox: imageData.bbox,
							type: imageData.type,
							visible: imageData.visible !== false,
							transparency: imageData.transparency || 1.0
						});

						console.log("✅ Image " + imageData.name + " loaded into memory");
						resolve(imageData);
					};

					img.src = URL.createObjectURL(imageData.blob);
				} else {
					resolve(null);
				}
			};
			request.onerror = () => resolve(null);
		});
	} catch (error) {
		console.error("Error loading image into memory:", error);
		return null;
	}
}

// Replace your current loadAllImagesIntoMemory function with this:
async function loadAllImagesIntoMemory() {
	try {
		if (!db) return;

		const transaction = db.transaction([IMAGE_STORE_NAME], "readonly");
		const store = transaction.objectStore(IMAGE_STORE_NAME);
		const request = store.getAll();

		return new Promise((resolve) => {
			request.onsuccess = async () => {
				const images = request.result || [];

				// Load each image into memory
				for (const imageData of images) {
					const img = new Image();
					const canvas = document.createElement("canvas");
					const ctx = canvas.getContext("2d");

					await new Promise((imgResolve) => {
						img.onload = () => {
							canvas.width = img.width;
							canvas.height = img.height;
							ctx.drawImage(img, 0, 0);

							loadedImages.set(imageData.id, {
								id: imageData.id,
								name: imageData.name,
								canvas: canvas,
								bbox: imageData.bbox,
								type: imageData.type,
								visible: imageData.visible !== false,
								transparency: imageData.transparency || 1.0
							});

							imgResolve();
						};
						img.onerror = () => imgResolve(); // Continue even if image fails
						img.src = URL.createObjectURL(imageData.blob);
					});
				}

				console.log("🖼️ Loaded " + loadedImages.size + " images into memory");
				resolve();
			};
			request.onerror = () => {
				console.error("Failed to load images from database");
				resolve();
			};
		});
	} catch (error) {
		console.error("Error loading images into memory:", error);
	}
}
// Image visibility management
function setImageVisibility(imageId, visible) {
	const image = loadedImages.get(imageId);
	if (image) {
		image.visible = visible;
		console.log("👁️ Image " + image.name + " visibility: " + visible);
		drawData(points, selectedHole);
	}
}

function toggleImageVisibility(imageId) {
	const image = loadedImages.get(imageId);
	if (image) {
		image.visible = !image.visible;
		setImageVisibility(imageId, image.visible);
	}
}

// Delete image from IndexedDB
async function deleteImageFromDB(imageId) {
	try {
		if (!db) {
			console.log("❌ Cannot delete image - database not available");
			return;
		}

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([IMAGE_STORE_NAME], "readwrite");
			const store = transaction.objectStore(IMAGE_STORE_NAME);
			const request = store.delete(imageId);

			request.onsuccess = () => {
				debouncedUpdateTreeView();
				console.log(`✅ Image "${imageId}" deleted from IndexedDB`);
				resolve();
			};

			request.onerror = () => {
				console.error("❌ Failed to delete image " + imageId + ": ," + request.error);
				reject(request.error);
			};

			transaction.onerror = () => {
				console.error("❌ Transaction failed for deleting image " + imageId + ": ," + transaction.error);
				reject(transaction.error);
			};
		});
	} catch (error) {
		console.error("Error deleting image:", error);
		throw error;
	}
}
// Delete all images from IndexedDB (useful for cleanup)
async function deleteAllImagesFromDB() {
	try {
		if (!db) return;

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([IMAGE_STORE_NAME], "readwrite");
			const store = transaction.objectStore(IMAGE_STORE_NAME);
			const request = store.clear();

			request.onsuccess = () => {
				debouncedUpdateTreeView();
				console.log("✅ All images deleted from IndexedDB");
				resolve();
			};

			request.onerror = () => {
				console.error("❌ Failed to delete all images:", request.error);
				reject(request.error);
			};
		});
	} catch (error) {
		console.error("Error deleting all images:", error);
		throw error;
	}
}

// Call in console if needed: deleteAllImagesFromDB()

// Debug function - add temporarily to check what's in the database
async function debugDatabaseContents() {
	try {
		if (!db) {
			console.log("Database not initialized");
			return;
		}

		// Check surfaces
		const surfaceTransaction = db.transaction([SURFACE_STORE_NAME], "readonly");
		const surfaceStore = surfaceTransaction.objectStore(SURFACE_STORE_NAME);
		const surfaceRequest = surfaceStore.getAll();

		surfaceRequest.onsuccess = () => {
			console.log("🔍 Surfaces in database:", surfaceRequest.result.length);
			surfaceRequest.result.forEach((surface) => {
				console.log("  - Surface:", surface.name, "Points:", surface.points?.length, "Triangles:", surface.triangles?.length);
			});
		};

		// Check images
		const imageTransaction = db.transaction([IMAGE_STORE_NAME], "readonly");
		const imageStore = imageTransaction.objectStore(IMAGE_STORE_NAME);
		const imageRequest = imageStore.getAll();

		imageRequest.onsuccess = () => {
			console.log("🔍 Images in database:", imageRequest.result.length);
			imageRequest.result.forEach((image) => {
				console.log("  - Image:", image.name, "Type:", image.type, "Bbox:", image.bbox);
			});
		};
	} catch (error) {
		console.error("Error checking database contents:", error);
	}
}
function checkAndPromptForStoredData() {
	const pointsData = localStorage.getItem("kirraDataPoints");

	if (!db) {
		// Fallback for when DB fails to initialize
		if (pointsData) showPopup(false);
		return;
	}

	const transaction = db.transaction([STORE_NAME], "readonly");
	const store = transaction.objectStore(STORE_NAME);
	const request = store.get("kadDrawingData");

	request.onsuccess = (event) => {
		const kadData = event.target.result;
		// FIX: Check for kadData.data instead of kadData.length
		if (pointsData || (kadData && kadData.data && kadData.data.length > 0)) {
			showPopup(true); // Pass flag indicating DB is available
			debouncedUpdateTreeView();
		}
	};

	request.onerror = (event) => {
		console.error("Could not check for KAD data in IndexedDB.", event.target.error);
		if (pointsData) showPopup(false); // Fallback to just loading points
	};
}

async function showPopup(isDBReady) {
	const userDecision = confirm("Do you want to pick up from where you left off?\n\nPress OK to continue or Cancel to start fresh.");

	if (userDecision === true) {
		points = loadHolesFromLocalStorage();

		if (isDBReady) {
			try {
				await loadKADFromDB();
				await loadAllSurfacesIntoMemory(); // Just this one call
				await loadAllImagesIntoMemory(); // Just this one call
			} catch (err) {
				console.error("Failed to load data from DB.", err);
			}
		}

		zoomToFitAll();
		debouncedUpdateTreeView();
	} else {
		clearLoadedData();
		loadedSurfaces.clear();
		loadedImages.clear();
		debouncedUpdateTreeView();
		zoomToFitAll();
	}
}

// Listen for changes in the kirraDataPoints key
window.addEventListener("storage", function (event) {
	if (event.key === "kirraDataPoints") {
		console.log("kirraDataPoints changed");
	} else {
		console.log("kirraDataPoints not changed");
	}
});

// Replace the entire updateCentroids function with this simplified version:
function updateCentroids() {
	// Calculate centroid of points
	let sumX = 0;
	let sumY = 0;
	let records = 0;

	// Include hole points
	if (points !== null) {
		for (let i = 0; i < points.length; i++) {
			sumX += points[i].startXLocation;
			sumY += points[i].startYLocation;
			records++;
		}
	}

	// Include all KAD objects (everything is now in allKADDrawingsMap)
	if (allKADDrawingsMap.size > 0) {
		for (const entity of allKADDrawingsMap.values()) {
			for (const dataPoint of entity.data) {
				sumX += dataPoint.pointXLocation;
				sumY += dataPoint.pointYLocation;
				records++;
			}
		}
	}

	// Include surface points in centroid calculation
	if (loadedSurfaces.size > 0) {
		loadedSurfaces.forEach((surface) => {
			if (surface.points && surface.points.length > 0) {
				for (const point of surface.points) {
					sumX += point.x;
					sumY += point.y;
					records++;
				}
			}
		});
	}

	if (records > 0) {
		centroidX = sumX / records;
		centroidY = sumY / records;
	}
}

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const sidenavLeft = document.getElementById("sidenavLeft");
const sidenavRight = document.getElementById("sidenavRight");
// Check if dark mode preference exists in local storage
const darkModePref = localStorage.getItem("darkMode");
if (darkModePref === "true") {
	body.classList.add("dark-mode");
	sidenavLeft.classList.add("dark-mode");
	sidenavRight.classList.add("dark-mode");
	canvas.classList.add("dark-canvas");
	darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", () => {
	if (darkModeToggle.checked) {
		body.classList.add("dark-mode");
		sidenavLeft.classList.add("dark-mode");
		sidenavRight.classList.add("dark-mode");
		canvas.classList.add("dark-canvas");
		localStorage.setItem("darkMode", "true");
	} else {
		body.classList.remove("dark-mode");
		sidenavLeft.classList.remove("dark-mode");
		sidenavRight.classList.remove("dark-mode");
		canvas.classList.remove("dark-canvas");
		localStorage.setItem("darkMode", "false");
	}
	darkModeEnabled = document.body.classList.contains("dark-mode");
	transparentFillColor = darkModeEnabled ? "rgba(0, 128, 255, 0.3)" : "rgba(128, 255, 0, 0.3)";
	fillColor = darkModeEnabled ? "darkgrey" : "lightgrey";
	strokeColor = darkModeEnabled ? "white" : "black";
	textFillColor = darkModeEnabled ? "white" : "black";
	depthColor = darkModeEnabled ? "cyan" : "blue";
	angleDipColor = darkModeEnabled ? "orange" : "darkorange";
	if (Array.isArray(holeTimes)) {
		timeChart();
	}
	drawData(points, selectedHole);
});
function endKadTools() {
	// Check if any KAD drawing tool is active
	const anyKADToolActive = addPointDraw.checked || addLineDraw.checked || addCircleDraw.checked || addPolyDraw.checked || addTextDraw.checked;

	if (anyKADToolActive) {
		// Cancel current tool entirely
		addPointDraw.checked = false;
		addLineDraw.checked = false;
		addCircleDraw.checked = false;
		addPolyDraw.checked = false;
		addTextDraw.checked = false;

		// Reset states
		createNewEntity = true;
		lastKADDrawPoint = null;

		// Update drawing flags
		isDrawingPoint = false;
		isDrawingLine = false;
		isDrawingCircle = false;
		isDrawingPoly = false;
		isDrawingText = false;

		updateStatusMessage("Drawing tools cancelled");
		setTimeout(() => {
			updateStatusMessage("");
		}, 1500);

		// Redraw to clear any preview lines/indicators
		drawData(points, selectedHole);
	}

	// Also handle polygon selection escape
	if (isPolygonSelectionActive) {
		isPolygonSelectionActive = false;
		polyPointsX = [];
		polyPointsY = [];
		updateStatusMessage("Polygon selection cancelled");
		setTimeout(() => {
			updateStatusMessage("");
		}, 1500);
		drawData(points, selectedHole);
	}
}

function findClosestKadPoint(worldPoint, snapDistance) {
	let closestPoint = null;
	let minDistance = snapDistance;

	for (const [name, entity] of allKADDrawingsMap.entries()) {
		if (entity.entityType === "line" || entity.entityType === "poly") {
			for (let i = 0; i < entity.data.length; i++) {
				const pt = entity.data[i];
				const dx = pt.pointXLocation - worldPoint.x;
				const dy = pt.pointYLocation - worldPoint.y;
				const dist = Math.sqrt(dx * dx + dy * dy);

				if (dist < minDistance) {
					minDistance = dist;
					closestPoint = {
						entityName: name,
						pointIndex: i,
						point: pt
					};
				}
			}
		}
	}
	return closestPoint;
}

/// VERY SURE THIS DOES NOT GET CALLED.
function handleKADModificationClick(event) {
	// Get the mouse position in world coordinates
	const [worldX, worldY] = canvasToWorld(event.offsetX, event.offsetY);

	// Find the closest KAD entity using our new unified function
	selectedKADPoint = getClickedKADEntity(worldX, worldY);

	if (selectedKADPoint) {
		const entity = selectedKADPoint.entity;
		console.log("DEBUG: entity object:", entity);
		console.log("DEBUG: entity.entityName:", entity.entityName);
		console.log("DEBUG: entity.entityType:", entity.entityType);
		console.log("DEBUG: entity.data:", entity.data);

		console.log("SUCCESS: Modification target found:", entity.entityName);
		updateStatusMessage("Selected entity: " + entity.entityName + " (Right-click to edit)");

		// For lines, points, circles, text - set selectedKADObject (used by highlighting)
		selectedKADObject = {
			entityName: entity.entityName,
			entityType: entity.entityType,
			pointXLocation: selectedKADPoint.clickedX,
			pointYLocation: selectedKADPoint.clickedY,
			// Add other properties as needed by existing code
			...entity.data[0] // Copy properties from first point
		};
		console.log("DEBUG: selectedKADObject created:", selectedKADObject);
		//selectedKADPolygon = null; // Clear the other variable
	} else {
		console.log("No modifiable KAD entity found at click location.");
		updateStatusMessage("");
		// Clear both legacy variables
		selectedKADPolygon = null;
		selectedKADObject = null;
	}

	// Redraw to show highlighting
	drawData(points, selectedHole);
}
/// VERY SURE THIS ABOVE DOES NOT GET CALLED.

window.onload = function () {
	// --- Dark Mode Setup ---
	darkModeEnabled = localStorage.getItem("darkMode") === "true";
	if (darkModeEnabled) {
		darkModeToggle.checked = true;
		body.classList.add("dark-mode");
		sidenavLeft.classList.add("dark-mode");
		canvas.classList.add("dark-canvas");
	} else {
		darkModeToggle.checked = false;
		body.classList.remove("dark-mode");
		sidenavLeft.classList.remove("dark-mode");
		canvas.classList.remove("dark-canvas");
	}
	// ADD WELCOME MESAGES.
	const messages = ["Welcome to Kirra2D!", "Support the development.", "Buy Brent a coffee\nhttps://buymeacoffee.com/brentbuffham"];

	messages.forEach((msg, index) => {
		const delay = 1000 + index * 3000;

		setTimeout(() => {
			updateStatusMessage(msg);

			// 🔄 Clear the last message 4 seconds after it's shown
			if (index === messages.length - 1) {
				setTimeout(() => updateStatusMessage(""), 4000);
			}
		}, delay);
	});

	// --- Key Listeners ---
	document.addEventListener("keydown", (event) => {
		// Escape Key to reset tools
		if (event.key === "Escape") {
			console.log("Escape pressed - resetting all");
			resetAllSelectedStores();
			endKadTools();
			if (isPolygonSelectionActive) {
				polyPointsX = [];
				polyPointsY = [];
				isPolygonSelectionActive = false;
			}
			if (isPatternInPolygonActive) {
				selectedPolygon = null;
				patternStartPoint = null;
				patternEndPoint = null;
				patternReferencePoint = null;
				patternPolygonStep = 0;
				updateStatusMessage("Pattern tool reset - select polygon to start");
			} else if (isHolesAlongLineActive) {
				lineStartPoint = null;
				lineEndPoint = null;
				holesLineStep = 0;
				updateStatusMessage("Holes along line tool reset\nClick to set start point");
			} else if (isHolesAlongPolyLineActive) {
				selectedPolyline = null;
				polylineStartPoint = null;
				polylineEndPoint = null;
				polylineStep = 0;
				updateStatusMessage("Step 1: Click on an existing line,\npolyline, or polygon edge to select it.");
			} else if (isRulerActive) {
				rulerStartPoint = null;
				rulerEndPoint = null;
				updateStatusMessage("Ruler tool reset\nClick to set start point");
			} else if (isRulerProtractorActive) {
				rulerProtractorPoints = [];
				updateStatusMessage("Protractor tool reset\nClick to set center point");
			}
			selectedKADPolygon = null;
			drawData(points, selectedHole);
		}
		// Shift Key for multi-select
		if (event.key === "Shift") {
			document.getElementById("selectionModeButton").checked = true;
			isMultiHoleSelectionEnabled = true;
		}
	});

	document.addEventListener("keyup", (event) => {
		if (event.key === "Shift") {
			document.getElementById("selectionModeButton").checked = false;
			isMultiHoleSelectionEnabled = false;
		}
	});

	///-------CRITICAL IMPORTANT --------///
	// This code is critical and must be called before any other database operations.
	// It is responsible for initializing the database and loading the stored data.
	// If the database is not initialized, the application will not work correctly.
	// This code should be called only once during application initialization,
	// typically in window.onload or similar startup code, not inside event handlers.
	// This placement means the database initialization would run every time certain keys
	// are pressed, which is inefficient and could cause issues with multiple database
	initDB()
		.then((database) => {
			db = database; // ✅ Set the global db variable
			console.log("✅ Database initialized successfully");
			checkAndPromptForStoredData();
		})
		.catch((err) => {
			console.error("Failed to initialize database. Falling back to Local Storage.", err);
			if (localStorage.getItem("kirraDataPoints")) {
				showPopup(false);
			}
		});

	// --- Final UI Setup ---
	// This appears to be incomplete/legacy code for database loading functionality.
	// The fileInput and loadButton elements are already handled by the file import grid system
	// at the top of the file (see file-import-btn event listeners). This code block seems to be
	// an unfinished attempt to add a separate "Load" button for database operations, but was
	// never completed. The actual file loading is handled by the icon-based file import buttons
	// in the left sidebar panel, not by this loadButton. This code block can likely be removed
	// as it serves no current purpose and the loadButton element doesn't exist in the HTML.
	// const fileInput = document.getElementById("fileInput");
	// const loadButton = document.getElementById("loadButton");
	// if (loadButton && fileInput) {
	// 	loadButton.addEventListener("click", () => {
	// 		fileInput.click();
	// 	});
	// }

	updateColorsForDarkMode();
	clearCanvas();
};

// Add this helper function to centralize color updates
function updateColorsForDarkMode() {
	transparentFillColor = darkModeEnabled ? "rgba(0, 128, 255, 0.3)" : "rgba(128, 255, 0, 0.3)";
	fillColor = darkModeEnabled ? "lightgrey" : "darkgrey";
	strokeColor = darkModeEnabled ? "white" : "black";
	textFillColor = darkModeEnabled ? "white" : "black";
	depthColor = darkModeEnabled ? "blue" : "cyan";
	angleDipColor = darkModeEnabled ? "darkcyan" : "orange";

	console.log("🎨 Colors updated for dark mode:", darkModeEnabled);
}

window.addEventListener("beforeunload", function () {
	saveHolesToLocalStorage(points);
});
function getKADBoundaries() {
	let minX = Infinity;
	let maxX = -Infinity;
	let minY = Infinity;
	let maxY = -Infinity;

	if (allKADDrawingsMap.size === 0) {
		return null;
	}

	for (const entity of allKADDrawingsMap.values()) {
		if (entity.data && Array.isArray(entity.data)) {
			for (const point of entity.data) {
				if (point.pointXLocation < minX) minX = point.pointXLocation;
				if (point.pointXLocation > maxX) maxX = point.pointXLocation;
				if (point.pointYLocation < minY) minY = point.pointYLocation;
				if (point.pointYLocation > maxY) maxY = point.pointYLocation;
			}
		}
	}

	return { minX, maxX, minY, maxY };
}

function clearLoadedData() {
	// Clear hole data
	localStorage.removeItem("kirraDataPoints");
	points = [];

	// Clear KAD data from IndexedDB
	if (db) {
		const transaction = db.transaction([STORE_NAME], "readwrite");
		const store = transaction.objectStore(STORE_NAME);
		store.clear(); // Clears all data in the object store
	}
	allKADDrawingsMap.clear();

	// Reset other states if necessary
	selectedHole = null;
	selectedPoint = null;
	//...

	// Redraw the empty canvas
	drawData(points, selectedHole);
}
window.addEventListener("resize", () => {
	if (htmlUIVersion === "1") {
		canvas.width = document.documentElement.clientWidth - canvasAdjustWidth;
		canvas.height = document.documentElement.clientHeight - document.documentElement.clientHeight * canvasAdjustHeight;
	} else {
		//drawing will handle
	}
	if (Array.isArray(holeTimes)) {
		timeChart();
	}
	saveHolesToLocalStorage(points); // For smaller hole data
	// // Only save to DB if it's initialized
	// if (db) {
	// 	saveKADToDB(allKADDrawingsMap);
	// }
	drawData(points, selectedHole);
});

let isMobile = false;
// Check if the device is a mobile device
//const isMobile = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isMobileQuery = window.matchMedia("(max-width: 768px)");
if (isMobileQuery.matches) {
	isMobile = true;
} else {
	isMobile = false;
}
function updateFloatingToolbarPosition(sidebarOpen) {
	const toolbar = document.getElementById("floating-toolbar");
	if (!toolbar) return;

	// Only adjust on desktop (not mobile)
	if (!isMobile) {
		if (sidebarOpen) {
			toolbar.classList.add("sidebar-open");
		} else {
			toolbar.classList.remove("sidebar-open");
		}
	}
}

function openNavLeft() {
	console.log(isMobile);
	const sidenavHeight = 350;
	const screenHeight = window.innerHeight;
	const margin = screenHeight - sidenavHeight;

	if (isMobile) {
		body.style.bottom = `${margin}px`;
		body.style.transition = "0.5s";
		sidenavLeft.style.left = "0px";
		sidenavLeft.style.top = "60%";
		sidenavLeft.style.width = "100%";
		sidenavLeft.style.height = "350px";
	} else {
		body.style.marginLeft = "315px";
		body.style.transition = "0.5s";
		sidenavLeft.style.width = "300px";
		sidenavLeft.style.paddingLeft = "5px";
		sidenavLeft.style.paddingRight = "0px";
		sidenavLeft.style.margin = "0px";
	}

	// Update floating toolbar position
	updateFloatingToolbarPosition(true);
}

function closeNavLeft() {
	if (isMobile) {
		body.style.marginBottom = "0px";
		body.style.transition = "0.5s";
		sidenavLeft.style.left = "-5px";
		sidenavLeft.style.top = "-5px";
		sidenavLeft.style.width = "0px";
		sidenavLeft.style.height = "0px";
	} else {
		body.style.marginLeft = "0px";
		body.style.transition = "0.5s";
		sidenavLeft.style.width = "0px";
		sidenavLeft.style.padding = "0px";
		sidenavLeft.style.margin = "0px";
	}

	// Update floating toolbar position
	updateFloatingToolbarPosition(false);
}

function openNavRight() {
	if (isMobile) {
		const sidenavHeight = 350; // Change this value to match the actual height of the sidenav
		const screenHeight = window.innerHeight;
		const margin = screenHeight - sidenavHeight;

		body.style.marginBottom = `${margin}px`;
		body.style.transition = "0.5s";
		sidenavRight.style.right = "0px";
		sidenavRight.style.top = "60%";
		sidenavRight.style.width = "100%";
		sidenavRight.style.height = "350px";
		//resize the timechart
		Plotly.relayout("timeChart", {
			width: 280
		});
	} else {
		body.style.marginRight = "315px"; // Push body to the left
		body.style.transition = "0.5s";
		sidenavRight.style.width = "300px";
		sidenavRight.style.right = "0";
		sidenavRight.style.paddingLeft = "0px";
		sidenavRight.style.paddingRight = "5px";
		sidenavRight.style.margin = "0px";
		//resize the timechart
		timeChart();
		newWidthRight = 315;
		resizeChart();
	}
}

function closeNavRight() {
	if (isMobile) {
		body.style.marginBottom = "0%"; // Push body down
		body.style.transition = "0.5s";
		sidenavRight.style.right = "-5px";
		sidenavRight.style.top = "-5px";
		sidenavRight.style.width = "0px";
		sidenavRight.style.height = "0px";
	} else {
		body.style.marginRight = "0px"; // Reset the margin to default
		body.style.transition = "0.5s";
		sidenavRight.style.width = "0px";
		sidenavRight.style.padding = "0px";
		sidenavRight.style.margin = "0px";
	}
}

const toolbar = document.getElementById("floating-toolbar");

let isDraggingTools = false;
let offsetX, offsetY;

toolbar.addEventListener("mousedown", (e) => {
	// Check if the click target is a button or label (toolbar button)
	const isButton = e.target.closest("label.icon-button") || e.target.closest('input[type="checkbox"]') || e.target.closest('input[type="button"]') || e.target.closest('input[type="number2"]') || e.target.closest('input[type="range"]');

	// Only start dragging if we're not clicking on a button
	if (!isButton) {
		isDraggingTools = true;
		offsetX = e.clientX - toolbar.getBoundingClientRect().left;
		offsetY = e.clientY - toolbar.getBoundingClientRect().top;
		toolbar.style.transition = "none"; // Disable smooth transition during dragging
	}
});

document.addEventListener("mousemove", (e) => {
	if (isDraggingTools) {
		const x = e.clientX - offsetX;
		const y = e.clientY - offsetY;
		toolbar.style.left = `${x}px`;
		toolbar.style.top = `${y}px`;
	}
});

document.addEventListener("mouseup", () => {
	isDraggingTools = false;
	toolbar.style.transition = ""; // Re-enable smooth transition
});

// Add event listeners for the floating toolbar buttons
const selectPointerTool = document.getElementById("selectPointer");
const selectByPolygonTool = document.getElementById("selectByPolygon");
const resetViewTool = document.getElementById("resetViewTool");
const moveToTool = document.getElementById("moveToTool");
const bearingTool = document.getElementById("bearingTool");
const rulerTool = document.getElementById("rulerTool");
const rulerProtractorTool = document.getElementById("rulerProtractorTool");

//---------------MOVE TOOL---------------//
// --- Move Tool State ---

let isDraggingHole = false;
let dragStartX = 0,
	dragStartY = 0;
let dragStartWorldX = 0,
	dragStartWorldY = 0;
let dragInitialPositions = [];

// Store the previous tool state to restore it when move tool is deactivated
let previousToolState = {
	isSelectionPointerActive: false,
	isPolygonSelectionActive: false,
	selectionMode: false
};
// Helper function to remove all canvas listeners
function removeAllCanvasListenersKeepDefault() {
	// Default canvas handlers not required to be removed fixed with a flag in function for dragging
	//canvas.removeEventListener("mousedown", handleMouseDown);
	//canvas.removeEventListener("mousemove", handleMouseMove);
	//canvas.removeEventListener("mouseup", handleMouseUp);
	// canvas.removeEventListener("touchstart", handleTouchStart);
	// canvas.removeEventListener("touchmove", handleTouchMove);
	// canvas.removeEventListener("touchend", handleTouchEnd);

	// Selection tool handlers
	canvas.removeEventListener("click", handleSelection);
	canvas.removeEventListener("touchstart", handleSelection);
	canvas.removeEventListener("click", selectInsidePolygon);
	canvas.removeEventListener("dblclick", completePolygonSelection);
	canvas.removeEventListener("touchstart", selectInsidePolygonTouch);
	canvas.removeEventListener("mousemove", handlePolygonMouseMove);

	// Move tool handlers
	canvas.removeEventListener("mousedown", handleMoveToolMouseDown);
	canvas.removeEventListener("mousemove", handleMoveToolMouseMove);
	canvas.removeEventListener("mouseup", handleMoveToolMouseUp);
	canvas.removeEventListener("touchstart", handleMoveToolMouseDown);
	canvas.removeEventListener("touchmove", handleMoveToolMouseMove);
	canvas.removeEventListener("touchend", handleMoveToolMouseUp);

	// Bearing tool handlers
	canvas.removeEventListener("mousedown", handleBearingToolMouseDown);
	canvas.removeEventListener("mousemove", handleBearingToolMouseMove);
	canvas.removeEventListener("mouseup", handleBearingToolMouseUp);
	canvas.removeEventListener("touchstart", handleBearingToolMouseDown);
	canvas.removeEventListener("touchmove", handleBearingToolMouseMove);
	canvas.removeEventListener("touchend", handleBearingToolMouseUp);
}

//------------------------- MOVE TO TOOL START------------//
// --- Move Tool Activation ---
moveToTool.addEventListener("change", function () {
	if (this.checked) {
		// Store current selection BEFORE clearing anything
		const preservedMultipleSelection = [...selectedMultipleHoles];
		const preservedSingleSelection = selectedHole;

		resetFloatingToolbarButtons("moveToTool");
		// DON'T remove all canvas listeners - keep the main mouse tracking
		removeAllCanvasListenersKeepDefault();

		// Store current state to restore later
		previousToolState = {
			isSelectionPointerActive: isSelectionPointerActive,
			isPolygonSelectionActive: isPolygonSelectionActive,
			selectionMode: isMultiHoleSelectionEnabled
		};

		// Disable other tools
		isSelectionPointerActive = false;
		isPolygonSelectionActive = false;

		// Restore preserved selections AFTER reset
		selectedMultipleHoles = preservedMultipleSelection;
		selectedHole = preservedSingleSelection;

		isMoveToolActive = true;
		moveToolSelectedHole = null;
		isDraggingHole = false;
		canvas.addEventListener("mousedown", handleMoveToolMouseDown);
		canvas.addEventListener("touchstart", handleMoveToolMouseDown);
		updateStatusMessage("Move Tool Activated\nSelect a hole and drag to move");
	} else {
		resetFloatingToolbarButtons("none");

		// Remove move tool listeners
		canvas.removeEventListener("mousedown", handleMoveToolMouseDown);
		canvas.removeEventListener("touchstart", handleMoveToolMouseDown);
		canvas.removeEventListener("mousemove", handleMoveToolMouseMove);
		canvas.removeEventListener("touchmove", handleMoveToolMouseMove);
		canvas.removeEventListener("mouseup", handleMoveToolMouseUp);
		canvas.removeEventListener("touchend", handleMoveToolMouseUp);

		// Clear move tool state
		isMoveToolActive = false;
		isDraggingHole = false;
		moveToolSelectedHole = null;

		// Restore default canvas handlers for all tools to work properly
		canvas.addEventListener("mousedown", handleMouseDown);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseup", handleMouseUp);
		canvas.addEventListener("touchstart", handleTouchStart);
		canvas.addEventListener("touchmove", handleTouchMove);
		canvas.addEventListener("touchend", handleTouchEnd);

		updateStatusMessage("");
		// Restore selection tool listeners if they were active
		if (previousToolState.isSelectionPointerActive) {
			isSelectionPointerActive = true;
			canvas.addEventListener("click", handleSelection);
			canvas.addEventListener("touchstart", handleSelection);
		}
		if (previousToolState.isPolygonSelectionActive) {
			isPolygonSelectionActive = true;
			canvas.addEventListener("click", selectInsidePolygon);
			canvas.addEventListener("touchstart", selectInsidePolygonTouch);
			canvas.addEventListener("mousemove", handlePolygonMouseMove);
		}

		// Restore ruler tools if they were active
		if (isRulerActive) {
			canvas.addEventListener("click", handleRulerClick);
		}
		if (isRulerProtractorActive) {
			canvas.addEventListener("click", handleRulerProtractorClick);
		}

		// Restore previous tool state
		isMultiHoleSelectionEnabled = previousToolState.selectionMode;

		drawData(points, selectedHole);
	}
});

// Handle move tool mouse down - start dragging if holes are selected
function handleMoveToolMouseDown(event) {
	event.preventDefault();
	event.stopPropagation();

	const clientX = event.clientX || (event.touches && event.touches[0].clientX);
	const clientY = event.clientY || (event.touches && event.touches[0].clientY);

	const rect = canvas.getBoundingClientRect();
	const clickX = clientX - rect.left;
	const clickY = clientY - rect.top;

	// First priority: Use existing selections without checking for clicked holes
	if (selectedMultipleHoles && selectedMultipleHoles.length > 0) {
		// Use multiple selected holes - start dragging immediately
		moveToolSelectedHole = selectedMultipleHoles;
		isDraggingHole = true;
		dragStartX = clientX;
		dragStartY = clientY;
		dragInitialPositions = selectedMultipleHoles.map((hole) => ({
			hole: hole,
			x: hole.startXLocation,
			y: hole.startYLocation
		}));
		canvas.addEventListener("mousemove", handleMoveToolMouseMove);
		canvas.addEventListener("touchmove", handleMoveToolMouseMove);
		canvas.addEventListener("mouseup", handleMoveToolMouseUp);
		canvas.addEventListener("touchend", handleMoveToolMouseUp);
	} else if (selectedHole) {
		// Use single selected hole - start dragging immediately
		moveToolSelectedHole = [selectedHole];
		isDraggingHole = true;
		dragStartX = clientX;
		dragStartY = clientY;
		dragInitialPositions = [{ hole: selectedHole, x: selectedHole.startXLocation, y: selectedHole.startYLocation }];
		canvas.addEventListener("mousemove", handleMoveToolMouseMove);
		canvas.addEventListener("touchmove", handleMoveToolMouseMove);
		canvas.addEventListener("mouseup", handleMoveToolMouseUp);
		canvas.addEventListener("touchend", handleMoveToolMouseUp);
	} else {
		// No existing selections - check if we clicked on a hole to select it
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			// No holes selected but clicked on a hole - select it and start dragging
			selectedHole = clickedHole;
			moveToolSelectedHole = [clickedHole];
			isDraggingHole = true;
			dragStartX = clientX;
			dragStartY = clientY;
			dragInitialPositions = [{ hole: clickedHole, x: clickedHole.startXLocation, y: clickedHole.startYLocation }];
			canvas.addEventListener("mousemove", handleMoveToolMouseMove);
			canvas.addEventListener("touchmove", handleMoveToolMouseMove);
			canvas.addEventListener("mouseup", handleMoveToolMouseUp);
			canvas.addEventListener("touchend", handleMoveToolMouseUp);
			drawData(points, selectedHole);
		} else {
			// Clicked empty space with no holes selected - clear selection
			selectedHole = null;
			selectedMultipleHoles = [];
			moveToolSelectedHole = null;
			drawData(points, selectedHole);
		}
	}
}

// Handle move tool mouse move - move holes
function handleMoveToolMouseMove(event) {
	if (!isDraggingHole || !moveToolSelectedHole) return;

	event.preventDefault();
	event.stopPropagation();

	const clientX = event.clientX || (event.touches && event.touches[0].clientX);
	const clientY = event.clientY || (event.touches && event.touches[0].clientY);

	// Calculate movement delta
	const deltaX = (clientX - dragStartX) / currentScale;
	const deltaY = -(clientY - dragStartY) / currentScale;

	// Move all selected holes
	dragInitialPositions.forEach(({ hole, x, y }) => {
		calculateHoleGeometry(hole, parseFloat(x) + deltaX, 4); // Parameter 4 for X position
		calculateHoleGeometry(hole, parseFloat(y) + deltaY, 5); // Parameter 5 for Y position
	});

	// Add this near the top with other flags (around line 77):
	let disableContourThrottling = false; // Temporary flag to disable throttling

	// Then modify the throttling section (around lines 11420-11434):
	// Throttle contour recalculation for better performance
	if (disableContourThrottling || !contourUpdatePending) {
		if (!disableContourThrottling) {
			contourUpdatePending = true;
		}

		const updateContours = () => {
			if (points.length > 0) {
				holeTimes = calculateTimes(points);

				// Initialize contours on data load
				const result = recalculateContours(points, 0, 0);
				contourLinesArray = result.contourLinesArray;
				directionArrows = result.directionArrows;

				timeChart();
			}
			if (!disableContourThrottling) {
				contourUpdatePending = false;
			}
		};

		if (disableContourThrottling) {
			updateContours();
		} else {
			requestAnimationFrame(updateContours);
		}
	}

	drawData(points, selectedHole);
}

// Handle move tool mouse up - stop dragging
function handleMoveToolMouseUp(event) {
	if (isDraggingHole) {
		isDraggingHole = false;
		canvas.removeEventListener("mousemove", handleMoveToolMouseMove);
		canvas.removeEventListener("touchmove", handleMoveToolMouseMove);
		canvas.removeEventListener("mouseup", handleMoveToolMouseUp);
		canvas.removeEventListener("touchend", handleMoveToolMouseUp);

		// Save changes and recalculate everything
		if (moveToolSelectedHole) {
			saveHolesToLocalStorage(points);

			// Recalculate everything after holes are moved
			if (points.length > 0) {
				// Recalculate triangulation
				const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);

				// Recalculate hole times
				holeTimes = calculateTimes(points);

				// Recalculate contours
				const result = recalculateContours(points, 0, 0);
				contourLinesArray = result.contourLinesArray;
				directionArrows = result.directionArrows;
			}
		}

		drawData(points, selectedHole);
	}
}
//---------------END OF MOVE TOOL---------------//

//---------------BEARING TOOL---------------//
// Add event listener for the bearing tool
bearingTool.addEventListener("change", function () {
	if (this.checked) {
		// Store current selection BEFORE clearing anything
		const preservedMultipleSelection = [...selectedMultipleHoles];
		const preservedSingleSelection = selectedHole;

		resetFloatingToolbarButtons("bearingTool");
		removeAllCanvasListenersKeepDefault();

		// Disable other tools
		isSelectionPointerActive = false;
		isPolygonSelectionActive = false;

		// Restore preserved selections AFTER reset
		selectedMultipleHoles = preservedMultipleSelection;
		selectedHole = preservedSingleSelection;

		isBearingToolActive = true;
		bearingToolSelectedHole = null;
		isDraggingBearing = false;
		canvas.addEventListener("mousedown", handleBearingToolMouseDown);
		canvas.addEventListener("touchstart", handleBearingToolMouseDown);
		updateStatusMessage("Bearing Tool Activated\nSelect a hole and drag to rotate\nHold 'F' for focus mode");
		// Add keydown listener for F key
		document.addEventListener("keydown", handleBearingToolKeyDown);
		document.addEventListener("keyup", handleBearingToolKeyUp);
	} else {
		// REPLACE THIS ENTIRE ELSE BLOCK WITH THE NEW CODE:
		resetFloatingToolbarButtons("none");

		// Remove bearing tool listeners
		canvas.removeEventListener("mousedown", handleBearingToolMouseDown);
		canvas.removeEventListener("touchstart", handleBearingToolMouseDown);
		canvas.removeEventListener("mousemove", handleBearingToolMouseMove);
		canvas.removeEventListener("touchmove", handleBearingToolMouseMove);
		canvas.removeEventListener("mouseup", handleBearingToolMouseUp);
		canvas.removeEventListener("touchend", handleBearingToolMouseUp);

		// Remove key listeners
		document.removeEventListener("keydown", handleBearingToolKeyDown);
		document.removeEventListener("keyup", handleBearingToolKeyUp);

		// Restore default canvas handlers for all tools to work properly
		canvas.addEventListener("mousedown", handleMouseDown);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseup", handleMouseUp);
		canvas.addEventListener("touchstart", handleTouchStart);
		canvas.addEventListener("touchmove", handleTouchMove);
		canvas.addEventListener("touchend", handleTouchEnd);

		// Restore ruler protractor click handler if it was active
		if (isRulerProtractorActive) {
			canvas.addEventListener("click", handleRulerProtractorClick);
		}

		drawData(points, selectedHole);
		updateStatusMessage("");
	}
});

// Track F key state
let isFocusModeActive = false;

// Handle F key press for focus mode
function handleBearingToolKeyDown(event) {
	if (event.key === "f" || event.key === "F") {
		isFocusModeActive = true;
	}
}

function handleBearingToolKeyUp(event) {
	if (event.key === "f" || event.key === "F") {
		isFocusModeActive = false;
	}
}

// Handle bearing tool mouse down - start dragging if holes are selected
function handleBearingToolMouseDown(event) {
	event.preventDefault();
	event.stopPropagation();

	const clientX = event.clientX || (event.touches && event.touches[0].clientX);
	const clientY = event.clientY || (event.touches && event.touches[0].clientY);

	const rect = canvas.getBoundingClientRect();
	const clickX = clientX - rect.left;
	const clickY = clientY - rect.top;

	// First priority: Use existing selections without checking for clicked holes
	if (selectedMultipleHoles && selectedMultipleHoles.length > 0) {
		// Use multiple selected holes - start dragging immediately
		bearingToolSelectedHole = selectedMultipleHoles;
		isDraggingBearing = true;
		canvas.addEventListener("mousemove", handleBearingToolMouseMove);
		canvas.addEventListener("touchmove", handleBearingToolMouseMove);
		canvas.addEventListener("mouseup", handleBearingToolMouseUp);
		canvas.addEventListener("touchend", handleBearingToolMouseUp);
	} else if (selectedHole) {
		// Use single selected hole - start dragging immediately
		bearingToolSelectedHole = [selectedHole];
		isDraggingBearing = true;
		canvas.addEventListener("mousemove", handleBearingToolMouseMove);
		canvas.addEventListener("touchmove", handleBearingToolMouseMove);
		canvas.addEventListener("mouseup", handleBearingToolMouseUp);
		canvas.addEventListener("touchend", handleBearingToolMouseUp);
	} else {
		// No existing selections - check if we clicked on a hole to select it
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			// No holes selected but clicked on a hole - select it and start dragging
			selectedHole = clickedHole;
			bearingToolSelectedHole = [clickedHole];
			isDraggingBearing = true;
			canvas.addEventListener("mousemove", handleBearingToolMouseMove);
			canvas.addEventListener("touchmove", handleBearingToolMouseMove);
			canvas.addEventListener("mouseup", handleBearingToolMouseUp);
			canvas.addEventListener("touchend", handleBearingToolMouseUp);
			drawData(points, selectedHole);
		} else {
			// Clicked empty space with no holes selected - clear selection
			selectedHole = null;
			selectedMultipleHoles = [];
			bearingToolSelectedHole = null;
			drawData(points, selectedHole);
		}
	}
}
// Handle bearing tool mouse move - rotate bearing
function handleBearingToolMouseMove(event) {
	if (!isDraggingBearing || !bearingToolSelectedHole) return;

	event.preventDefault();
	event.stopPropagation();

	const clientX = event.clientX || (event.touches && event.touches[0].clientX);
	const clientY = event.clientY || (event.touches && event.touches[0].clientY);

	const rect = canvas.getBoundingClientRect();
	const clickX = clientX - rect.left;
	const clickY = clientY - rect.top;
	// SNAPPIN SNAP:
	const snapResult = canvasToWorldWithSnap(clickX, clickY);
	worldX = snapResult.worldX;
	worldY = snapResult.worldY;

	// Show snap feedback if snapped
	if (snapResult.snapped) {
		updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
		setTimeout(() => updateStatusMessage(""), 1500);
	}

	if (isFocusModeActive) {
		// Focus mode: Each hole points to mouse location (original behavior)
		bearingToolSelectedHole.forEach((hole) => {
			const eastingDiff = worldX - parseFloat(hole.startXLocation);
			const northingDiff = worldY - parseFloat(hole.startYLocation);

			let newBearing = Math.atan2(eastingDiff, northingDiff) * (180 / Math.PI);
			if (newBearing < 0) newBearing += 360;

			calculateHoleGeometry(hole, newBearing, 3);
		});
	} else {
		// Default mode: All holes get same bearing based on first hole
		const firstHole = bearingToolSelectedHole[0];
		const eastingDiff = worldX - parseFloat(firstHole.startXLocation);
		const northingDiff = worldY - parseFloat(firstHole.startYLocation);

		let newBearing = Math.atan2(eastingDiff, northingDiff) * (180 / Math.PI);
		if (newBearing < 0) newBearing += 360;

		// Apply the same bearing to all selected holes
		bearingToolSelectedHole.forEach((hole) => {
			calculateHoleGeometry(hole, newBearing, 3);
		});
	}

	drawData(points, selectedHole);
}

// Handle bearing tool mouse up - stop dragging
function handleBearingToolMouseUp(event) {
	if (isDraggingBearing) {
		isDraggingBearing = false;
		canvas.removeEventListener("mousemove", handleBearingToolMouseMove);
		canvas.removeEventListener("touchmove", handleBearingToolMouseMove);
		canvas.removeEventListener("mouseup", handleBearingToolMouseUp);
		canvas.removeEventListener("touchend", handleBearingToolMouseUp);

		// Save changes
		if (bearingToolSelectedHole) {
			saveHolesToLocalStorage(points);
		}

		drawData(points, selectedHole);
	}
}

//---------------END OF BEARING TOOL---------------//

//---------------SELECTION TOOLS---------------//
selectPointerTool.addEventListener("change", function () {
	if (this.checked) {
		isSelectionPointerActive = true;
		isPolygonSelectionActive = false;
		//selectedKADPolygon = null;
		// Uncheck the other buttons
		resetFloatingToolbarButtons("selectPointerTool");
		endKadTools();
		// Remove conflicting listeners
		removeAllCanvasListenersKeepDefault();

		// Restore default canvas handlers
		canvas.addEventListener("mousedown", handleMouseDown);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseup", handleMouseUp);
		canvas.addEventListener("touchstart", handleTouchStart);
		canvas.addEventListener("touchmove", handleTouchMove);
		canvas.addEventListener("touchend", handleTouchEnd);

		// Enable point selection mode
		canvas.addEventListener("click", handleSelection);
		canvas.addEventListener("touchstart", handleSelection);
		updateStatusMessage("Point selection mode enabled\nShift to select multiple.\n Escape to clear selection.");
		drawData(points, selectedHole);
	} else {
		isSelectionPointerActive = false;
		// Disable point selection mode
		canvas.removeEventListener("click", handleSelection);
		canvas.removeEventListener("touchstart", handleSelection);
		drawData(points, selectedHole);
		updateStatusMessage("");
	}
});

// Update the function to properly check and handle KAD tools
function kadContextMenu(e) {
	e.preventDefault(); // Prevent context menu

	// Check if any KAD drawing tool is active
	const anyKADToolActive = addPointDraw.checked || addLineDraw.checked || addCircleDraw.checked || addPolyDraw.checked || addTextDraw.checked;

	if (anyKADToolActive) {
		// Start a new object within the same tool
		createNewEntity = true; // This will create a new entity name on next click
		lastKADDrawPoint = null; // Reset preview line

		// Show status message
		updateStatusMessage("Starting new object - continue drawing");

		// Brief visual feedback
		setTimeout(() => {
			updateStatusMessage("");
		}, 1500);

		// Redraw to clear any preview lines
		drawData(points, selectedHole);
	}
}

///-----------------------------RIGHT CLICK STUFF GOES HERE-----------------------------//

// Add this function near your other menu functions
function closeAllContextMenus() {
	// Find all elements that could be context menus
	const existingMenus = document.querySelectorAll('.context-menu, [style*="position: absolute"][style*="background"], div[onclick]');

	existingMenus.forEach((menu) => {
		// Check if it looks like a context menu (has background and position styling)
		const style = menu.style;
		if (style.position === "absolute" && (style.background || style.backgroundColor) && document.body.contains(menu)) {
			try {
				document.body.removeChild(menu);
				console.log("🗑️ Removed existing context menu");
				debouncedUpdateTreeView(); // Use debounced version
			} catch (error) {
				// Menu already removed
			}
		}
	});
}

//-------CONTEXT MENU FOR KAD DRAWING TOOLS and surfaces and holes ------///
// ENHANCED: Update context menu to handle ALL entity types including poly
canvas.addEventListener("contextmenu", function (e) {
	e.preventDefault();
	closeAllContextMenus(); // Close any existing menus first
	// Prevent right-click from triggering drag behavior
	isDragging = false;
	clearTimeout(longPressTimeout);

	const anyKADToolActive = addPointDraw.checked || addLineDraw.checked || addCircleDraw.checked || addPolyDraw.checked || addTextDraw.checked;

	const rect = canvas.getBoundingClientRect();
	const clickX = e.clientX - rect.left;
	const clickY = e.clientY - rect.top;

	// If a KAD tool is active, handle new object creation
	if (anyKADToolActive) {
		kadContextMenu(e);
		return;
	}

	// For holes: Check multiple selection first, then single hole
	if (selectedMultipleHoles && selectedMultipleHoles.length > 1) {
		showMultipleHolePropertyEditor(selectedMultipleHoles);
		debouncedUpdateTreeView(); // Use debounced version
		return;
	}

	const clickedHole = getClickedHole(clickX, clickY);
	if (clickedHole) {
		showHolePropertyEditor(clickedHole);
		debouncedUpdateTreeView(); // Use debounced version
		return;
	}

	// ENHANCED: For KAD objects - handle ALL types including poly - BUT ONLY if they are selected
	if (isSelectionPointerActive || isPolygonSelectionActive) {
		const clickedKADObject = getClickedKADObject(clickX, clickY);
		if (clickedKADObject) {
			// Check if the clicked object is actually the selected one
			const isClickedObjectSelected = isKADObjectSelected(clickedKADObject);
			if (isClickedObjectSelected) {
				showKADPropertyEditor(clickedKADObject);
				debouncedUpdateTreeView(); // Use debounced version
				return;
			}
		}
	}
	// 1. Check for Surfaces FIRST (highest priority)
	const clickedSurfaceId = isPointInSurface(clickX, clickY); // Now returns surface ID

	if (clickedSurfaceId) {
		showSurfaceContextMenu(clickX, clickY, clickedSurfaceId); // Pass surface ID
		return; // Exit early - don't check for image
	}

	// 2. Check for background image ONLY if not on surface - FIXED to identify specific image
	let clickedImageId = null;
	for (const [imageId, image] of loadedImages.entries()) {
		if (image.visible && isPointInBackgroundImage(clickX, clickY, image)) {
			clickedImageId = imageId;
			break; // Found the clicked image, stop searching
		}
	}

	if (clickedImageId) {
		console.log("✅ Showing IMAGE menu for:", clickedImageId);
		showImageContextMenu(clickX, clickY, clickedImageId); // Pass specific image ID
		return; // Exit early
	}

	// 3. Default case - no special context menu needed
	console.log("✅ No menu - empty area");
});

function isClickOnSelectedPolygon(worldX, worldY, selectedPolygon) {
	if (!selectedPolygon || !allKADDrawingsMap.has(selectedPolygon.entityName)) {
		return null;
	}

	const entity = allKADDrawingsMap.get(selectedPolygon.entityName);
	const points = entity.data;
	const tolerance = getSnapToleranceInWorldUnits(); // Adjust click tolerance based on zoom

	// Check if click is on any point of the selected polygon
	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		const dx = worldX - point.pointXLocation;
		const dy = worldY - point.pointYLocation;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance <= tolerance) {
			// Return the clicked point with metadata - USE DYNAMIC VALUES
			return {
				...point,
				mapType: "allKADDrawingsMap", // ← Use unified map name
				entityType: entity.entityType, // ← Use actual entity type from data
				entityName: entity.entityName // ← Add entity name for consistency
			};
		}
	}

	// Check if click is on any segment of the selected polygon
	for (let i = 0; i < points.length; i++) {
		const point1 = points[i];
		const point2 = points[(i + 1) % points.length]; // Wrap around to first point

		// Calculate distance from click point to line segment
		const segmentDistance = distanceToLineSegment(worldX, worldY, point1.pointXLocation, point1.pointYLocation, point2.pointXLocation, point2.pointYLocation);

		if (segmentDistance <= tolerance) {
			// Return the first point of the segment with metadata - USE DYNAMIC VALUES
			return {
				...point1,
				mapType: "allKADDrawingsMap", // ← Use unified map name
				entityType: entity.entityType, // ← Use actual entity type from data
				entityName: entity.entityName // ← Add entity name for consistency
			};
		}
	}

	return null;
}

// Helper function to calculate distance from point to line segment
function distanceToLineSegment(px, py, x1, y1, x2, y2) {
	const dx = x2 - x1;
	const dy = y2 - y1;
	const length = dx * dx + dy * dy;

	if (length === 0) {
		// Points are the same, return distance to point
		const dpx = px - x1;
		const dpy = py - y1;
		return Math.sqrt(dpx * dpx + dpy * dpy);
	}

	// Calculate parameter t for closest point on line segment
	const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / length));

	// Calculate closest point on segment
	const closestX = x1 + t * dx;
	const closestY = y1 + t * dy;

	// Return distance to closest point
	const dcx = px - closestX;
	const dcy = py - closestY;
	return Math.sqrt(dcx * dcx + dcy * dcy);
}

// ENHANCED: Fix getClickedKADObject to return specific element information
function getClickedKADObject(clickX, clickY) {
	const worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
	const worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;

	if (allKADDrawingsMap && allKADDrawingsMap.size > 0) {
		const tolerance = 10 / (currentScale / 2);
		let closestMatch = null;
		let minDistance = tolerance;

		// Iterate through all entities
		for (const [entityName, entity] of allKADDrawingsMap.entries()) {
			// For single-point entities (points, circles, text)
			if (entity.entityType === "point" || entity.entityType === "circle" || entity.entityType === "text") {
				for (let i = 0; i < entity.data.length; i++) {
					const point = entity.data[i];
					const distance = Math.sqrt(Math.pow(point.pointXLocation - worldX, 2) + Math.pow(point.pointYLocation - worldY, 2));

					if (distance <= tolerance && distance < minDistance) {
						closestMatch = {
							...point,
							mapType: "allKADDrawingsMap",
							entityName: entityName,
							entityType: entity.entityType,
							elementIndex: i,
							segmentIndex: i,
							selectionType: "point"
						};
						minDistance = distance;
					}
				}
			}
			// For multi-point entities (lines and polygons) - prioritize SEGMENTS over vertices
			else if (entity.entityType === "line" || entity.entityType === "poly") {
				const points = entity.data;
				if (points.length < 2) continue;

				// FIRST: Check segments (higher priority than vertices)
				const numSegments = entity.entityType === "poly" ? points.length : points.length - 1;

				for (let i = 0; i < numSegments; i++) {
					const point1 = points[i];
					const point2 = points[(i + 1) % points.length]; // Wrap for polygons

					// Calculate distance from click to line segment
					const segmentDistance = pointToLineSegmentDistance(worldX, worldY, point1.pointXLocation, point1.pointYLocation, point2.pointXLocation, point2.pointYLocation);

					if (segmentDistance <= tolerance && segmentDistance < minDistance) {
						// Find the closest point on the segment for the clicked location
						const closestPoint = getClosestPointOnLineSegment(worldX, worldY, point1.pointXLocation, point1.pointYLocation, point2.pointXLocation, point2.pointYLocation);

						closestMatch = {
							...point1, // Use first point's properties as base
							mapType: "allKADDrawingsMap",
							entityName: entityName,
							entityType: entity.entityType,
							elementIndex: i,
							segmentIndex: i, // This is the specific segment clicked
							selectionType: "segment",
							clickedX: closestPoint.x,
							clickedY: closestPoint.y
						};
						minDistance = segmentDistance;
					}
				}

				// SECOND: Check vertices (lower priority, only if no segment found)
				if (!closestMatch) {
					for (let i = 0; i < points.length; i++) {
						const point = points[i];
						const distance = Math.sqrt(Math.pow(point.pointXLocation - worldX, 2) + Math.pow(point.pointYLocation - worldY, 2));

						if (distance <= tolerance && distance < minDistance) {
							closestMatch = {
								...point,
								mapType: "allKADDrawingsMap",
								entityName: entityName,
								entityType: entity.entityType,
								elementIndex: i,
								segmentIndex: i,
								selectionType: "vertex"
							};
							minDistance = distance;
						}
					}
				}
			}
		}

		return closestMatch;
	}

	return null;
}
// Helper function to check if a clicked KAD object is currently selected
function isKADObjectSelected(clickedObject) {
	if (!clickedObject) return false;

	// Check against selectedKADObject
	if (selectedKADObject) {
		return selectedKADObject.entityName === clickedObject.entityName && selectedKADObject.elementIndex === clickedObject.elementIndex && selectedKADObject.entityType === clickedObject.entityType;
	}

	// Check against selectedKADPolygon (backward compatibility)
	if (selectedKADPolygon && clickedObject.entityType === "poly") {
		return selectedKADPolygon.entityName === clickedObject.entityName;
	}

	return false;
}
// Multiple Hole Property Editor
function showMultipleHolePropertyEditor(holes) {
	if (!holes || holes.length === 0) return;

	// Calculate current averages with proper fallbacks
	let delaySum = 0;
	let uniqueDelays = new Set();
	let uniqueDelayColors = new Set();
	let uniqueHoleTypes = new Set();

	holes.forEach((hole) => {
		// Get current delay with fallback to connector delay
		const currentDelay = hole.holeDelay !== undefined ? hole.holeDelay : hole.timingDelayMilliseconds || 0;
		const currentColor = hole.holeDelayColor || hole.colorHexDecimal || "#FF0000";
		const currentType = hole.holeType || "Production";

		delaySum += parseFloat(currentDelay);
		uniqueDelays.add(currentDelay);
		uniqueDelayColors.add(currentColor);
		uniqueHoleTypes.add(currentType);
	});

	const avgDelay = delaySum / holes.length;
	const firstDelayColor = Array.from(uniqueDelayColors)[0];
	const firstHoleType = Array.from(uniqueHoleTypes)[0];

	// Show different values indicator if not all holes have the same value
	const delayPlaceholder = uniqueDelays.size > 1 ? "Multiple values" : "";
	const colorNote = uniqueDelayColors.size > 1 ? " (Multiple colors)" : "";
	const typeNote = uniqueHoleTypes.size > 1 ? " (Multiple types)" : "";

	Swal.fire({
		title: `Edit Multiple Holes (${holes.length} selected)`,
		html: `
            <div class="button-container-2col">
                <label class="labelWhite12">Delay:</label>
                <input type="number" id="editMultipleHoleDelay" value="${avgDelay.toFixed(1)}" min="-1000" max="1000" step="1" class="swal2-input" placeholder="${delayPlaceholder}">
                
                <label class="labelWhite12">Delay Color${colorNote}:</label>
                <input type="button" id="editMultipleHoleDelayColor" name="editMultipleHoleDelayColor" data-jscolor="{value:'${firstDelayColor}'}" title="Delay Color" class="swal2-input">
                
                <label class="labelWhite12">Hole Type${typeNote}:</label>
                <select id="editMultipleHoleType" class="swal2-select">
                    <option value="" ${uniqueHoleTypes.size > 1 ? "selected" : ""}>-- Keep current values --</option>
                    <option value="Production" ${uniqueHoleTypes.size === 1 && firstHoleType === "Production" ? "selected" : ""}>Production</option>
                    <option value="Trim" ${uniqueHoleTypes.size === 1 && firstHoleType === "Trim" ? "selected" : ""}>Trim</option>
                    <option value="Buffer" ${uniqueHoleTypes.size === 1 && firstHoleType === "Buffer" ? "selected" : ""}>Buffer</option>
                </select>
                
                <div style="grid-column: 1 / -1; margin-top: 10px; font-size: 0.9em; color: #888;">
                    Note: Empty fields will preserve existing values for each hole.
                </div>
            </div>
        `,
		showCancelButton: true,
		confirmButtonText: "Apply",
		cancelButtonText: "Cancel",
		customClass: {
			container: "custom-popup-container",
			popup: "swal2-popup",
			title: "swal2-title",
			content: "swal2-content",
			confirmButton: "confirm",
			cancelButton: "cancel"
		},
		didOpen: () => {
			// Initialize JSColor after the dialog opens
			jscolor.install();
		}
	}).then((result) => {
		// Clear any dragging states when dialog closes
		isDragging = false;
		clearTimeout(longPressTimeout);

		if (result.isConfirmed) {
			const newDelay = document.getElementById("editMultipleHoleDelay").value;
			const delayColorElement = document.getElementById("editMultipleHoleDelayColor");
			const newDelayColor = delayColorElement.jscolor ? delayColorElement.jscolor.toHEXString() : delayColorElement.value;
			const newHoleType = document.getElementById("editMultipleHoleType").value;

			// Track if any timing-related properties were changed
			let timingChanged = false;

			holes.forEach((hole) => {
				if (newDelay !== "") {
					hole.holeDelay = parseFloat(newDelay);
					// Also update connector property for backward compatibility
					if (hole.timingDelayMilliseconds !== undefined) {
						hole.timingDelayMilliseconds = hole.holeDelay;
					}
					timingChanged = true;
				}
				if (newDelayColor !== "") {
					hole.holeDelayColor = newDelayColor;
					// Also update connector property for backward compatibility
					if (hole.colorHexDecimal !== undefined) {
						hole.colorHexDecimal = newDelayColor;
					}
					timingChanged = true; // Color changes affect visual timing display
				}
				if (newHoleType !== "") {
					hole.holeType = newHoleType;
				}
			});

			// ** RECALCULATE TIMING AND CONTOURS IF TIMING CHANGED **
			if (timingChanged) {
				// Always recalculate timing calculations after delay changes
				holeTimes = calculateTimes(points);

				// Update timing chart display
				timeChart();

				// Recalculate contours if they're being displayed
				const result = recalculateContours(points, 0, 0);
				if (result) {
					contourLinesArray = result.contourLinesArray;
					directionArrows = result.directionArrows;
				}
			}

			// Update selection averages and sliders since we're editing the selected holes
			updateSelectionAveragesAndSliders(holes);

			drawData(points, selectedHole); // Redraw

			const statusMessage = timingChanged ? `Updated ${holes.length} holes - Timings recalculated` : `Updated ${holes.length} holes`;
			updateStatusMessage(statusMessage);
			setTimeout(() => updateStatusMessage(""), 3000);
		}
	});
}

function jsColorPaletteForPicker() {
	// This function sets the default color palette for the color picker
	jscolor.presets.default = {
		format: "rgb",
		palette: ["#990000", "#FF0000", "#FFAA00", "#CCCC00", "#FFF000", "#00ff00", "#00bb00", "#00bbff", "#0055FF", "#aa00ff", "#F1F1F1", "#E3E3E3", "#C6C6C6", "#7F7F7F", "#555555", "#393939", "#1C1C1C", "#00FFFF", "#006699", "#FF00FF"]
	};
}

// Hole Property Editor
function showHolePropertyEditor(hole) {
	// Get current values with proper fallbacks
	const currentDelay = hole.holeDelay !== undefined ? hole.holeDelay : hole.timingDelayMilliseconds || 0;
	const currentColor = hole.holeDelayColor || hole.colorHexDecimal || "#FF0000";
	const currentType = hole.holeType || "Production";

	Swal.fire({
		title: `Edit Hole ${hole.holeID}`,
		html: `
            <div class="button-container-2col">
                <label class="labelWhite12">Delay:</label>
                <input type="number" id="editHoleDelay" value="${currentDelay}" min="-1000" max="1000" step="1" class="swal2-input">
                
                <label class="labelWhite12">Delay Color:</label>
                <input type="button" id="editHoleDelayColor" name="editHoleDelayColor" data-jscolor="{value:'${currentColor}'}" title="Delay Color" class="swal2-input">
                
                <label class="labelWhite12">Hole Type:</label>
                <select id="editHoleType" class="swal2-select">
                    <option value="Production" ${currentType === "Production" ? "selected" : ""}>Production</option>
                    <option value="Trim" ${currentType === "Trim" ? "selected" : ""}>Trim</option>
                    <option value="Buffer" ${currentType === "Buffer" ? "selected" : ""}>Buffer</option>
                </select>
            </div>
        `,
		showCancelButton: true,
		confirmButtonText: "Apply",
		cancelButtonText: "Cancel",
		customClass: {
			container: "custom-popup-container",
			popup: "swal2-popup",
			title: "swal2-title",
			content: "swal2-content",
			confirmButton: "confirm",
			cancelButton: "cancel"
		},
		didOpen: () => {
			// Initialize JSColor after the dialog opens
			jscolor.install();
		}
	}).then((result) => {
		// Clear any dragging states when dialog closes
		isDragging = false;
		clearTimeout(longPressTimeout);

		if (result.isConfirmed) {
			const delayColorElement = document.getElementById("editHoleDelayColor");

			// Update hole properties
			hole.holeDelay = parseFloat(document.getElementById("editHoleDelay").value);
			hole.holeDelayColor = delayColorElement.jscolor ? delayColorElement.jscolor.toHEXString() : delayColorElement.value;
			hole.holeType = document.getElementById("editHoleType").value;

			// Also update connector properties if they exist (for backward compatibility)
			if (hole.timingDelayMilliseconds !== undefined) {
				hole.timingDelayMilliseconds = hole.holeDelay;
			}
			if (hole.colorHexDecimal !== undefined) {
				hole.colorHexDecimal = hole.holeDelayColor;
			}

			// ** RECALCULATE TIMING AND CONTOURS **
			// Always recalculate timing calculations after delay changes
			holeTimes = calculateTimes(points);

			// Update timing chart display
			timeChart();

			// Recalculate contours if they're being displayed
			const result = recalculateContours(points, 0, 0);
			if (result) {
				contourLinesArray = result.contourLinesArray;
				directionArrows = result.directionArrows;
			}

			// Update selection averages and sliders if hole is part of current selection
			if (selectedMultipleHoles && selectedMultipleHoles.length > 0) {
				// Check if this hole is in the current selection
				const isInSelection = selectedMultipleHoles.some((selectedHole) => selectedHole.holeID === hole.holeID && selectedHole.entityName === hole.entityName);

				if (isInSelection) {
					updateSelectionAveragesAndSliders(selectedMultipleHoles);
				}
			} else if (selectedHole === hole) {
				// If this is the currently selected single hole, update its display
				updateSelectionAveragesAndSliders([hole]);
			}

			drawData(points, selectedHole); // Redraw
			updateStatusMessage(`Hole ${hole.holeID} updated - Timings recalculated`);
			setTimeout(() => updateStatusMessage(""), 3000);
		}
	});
}

// ENHANCED: Unified KAD Property Editor with line/poly conversion
function showKADPropertyEditor(kadObject) {
	const isMultiElement = kadObject.entityType === "line" || kadObject.entityType === "poly" || kadObject.entityType === "point" || kadObject.entityType === "circle" || kadObject.entityType === "text";

	const entity = getEntityFromKADObject(kadObject);
	const hasMultipleElements = entity && entity.data.length > 1;

	// Determine if this is a line/poly (they share the same dialog)
	const isLineOrPoly = kadObject.entityType === "line" || kadObject.entityType === "poly";

	const title = hasMultipleElements ? `Edit ${kadObject.entityType.toUpperCase()} - Element ${kadObject.elementIndex + 1}` : `Edit ${kadObject.entityType.toUpperCase()}`;

	const currentColor = kadObject.color || "#FF0000";

	// Build the HTML based on entity type
	let htmlContent = `
            <div class="button-container-2col">
                <label class="labelWhite12">Color:</label>
                <input type="button" id="editKADColor" name="editKADColor" data-jscolor="{value:'${currentColor}'}" title="Object Color" class="swal2-input">
    `;

	// Add specific fields based on entity type
	if (isLineOrPoly) {
		htmlContent += `
                <label class="labelWhite12">Line Width:</label>
                <input type="number" id="editLineWidth" value="${kadObject.lineWidth || 1}" min="0.1" max="10" step="0.1" class="swal2-input">
            
            <label class="labelWhite12">Type:</label>
            <div style="grid-column: 1 / -1;">
                <label><input type="radio" id="editTypeLine" name="editType" value="line" ${kadObject.entityType === "line" ? "checked" : ""}> Open (Line)</label>
                <label><input type="radio" id="editTypePoly" name="editType" value="poly" ${kadObject.entityType === "poly" ? "checked" : ""}> Closed (Polygon)</label>
            </div>
        `;
	} else if (kadObject.entityType === "circle") {
		htmlContent += `
                <label class="labelWhite12">Radius:</label>
                <input type="number" id="editRadius" value="${kadObject.radius || 1}" min="0.1" max="100" step="0.1" class="swal2-input">
        `;
	} else if (kadObject.entityType === "text") {
		htmlContent += `
                <label class="labelWhite12">Text:</label>
                <input type="text" id="editText" value="${kadObject.text || ""}" class="swal2-input">
        `;
	}

	htmlContent += `</div>`;

	Swal.fire({
		title: title,
		html: htmlContent,
		showCancelButton: true,
		showDenyButton: hasMultipleElements, // Only show for multi-element objects
		confirmButtonText: hasMultipleElements ? "All" : "Apply",
		denyButtonText: "This",
		cancelButtonText: "Cancel",
		customClass: {
			container: "custom-popup-container",
			popup: "swal2-popup",
			title: "swal2-title",
			content: "swal2-content",
			confirmButton: "confirm",
			denyButton: "deny",
			cancelButton: "cancel"
		},
		didOpen: () => {
			// Initialize JSColor after the popup opens
			jsColorPaletteForPicker();
			jscolor.install();
		}
	}).then((result) => {
		if (result.isConfirmed || result.isDenied) {
			const colorElement = document.getElementById("editKADColor");
			const selectedColor = colorElement.jscolor ? colorElement.jscolor.toHEXString() : colorElement.value;

			const newProperties = {
				color: selectedColor,
				lineWidth: document.getElementById("editLineWidth")?.value,
				radius: document.getElementById("editRadius")?.value,
				text: document.getElementById("editText")?.value
			};

			// Handle line/poly conversion
			if (isLineOrPoly) {
				const newType = document.querySelector('input[name="editType"]:checked')?.value;
				if (newType && newType !== kadObject.entityType) {
					convertLinePolyType(kadObject, newType);
				}
			}

			// Apply property changes
			const scope = result.isConfirmed ? "all" : "element";
			updateKADObjectProperties(kadObject, newProperties, scope);

			//Save the modifications
			debouncedSaveKAD();
		}
	});
}

// NEW: Function to convert between line and poly
function convertLinePolyType(kadObject, newType) {
	const entity = getEntityFromKADObject(kadObject);
	if (!entity) return;

	// Update entity type
	entity.entityType = newType;

	// Update all data points to reflect the new type
	entity.data.forEach((point) => {
		point.entityType = newType;
		if (newType === "poly") {
			point.closed = true;
		} else {
			point.closed = false;
		}
	});

	updateStatusMessage(`Converted ${kadObject.entityName} to ${newType}`);
	debouncedUpdateTreeView(); // ✅ ADDED: Update tree view swatches
	setTimeout(() => updateStatusMessage(""), 2000);
}

// ENHANCED: Update properties function with element-specific support
function updateKADObjectProperties(kadObject, newProperties, scope = "all") {
	const map = allKADDrawingsMap;
	const entity = map.get(kadObject.entityName);

	if (entity) {
		if (scope === "element") {
			// Update only THIS specific element
			const elementIndex = kadObject.elementIndex;

			if (elementIndex !== undefined && elementIndex < entity.data.length) {
				const item = entity.data[elementIndex];

				// Update only the specific properties that were provided
				if (newProperties.color) item.color = newProperties.color;
				if (newProperties.lineWidth) item.lineWidth = parseFloat(newProperties.lineWidth);
				if (newProperties.radius) item.radius = parseFloat(newProperties.radius);
				if (newProperties.text) item.text = newProperties.text;

				updateStatusMessage(`Updated element ${elementIndex + 1} of ${kadObject.entityType} ${kadObject.entityName}`);
			}
		} else {
			// Update ALL elements in the entity
			entity.data.forEach((item) => {
				if (newProperties.color) item.color = newProperties.color;
				if (newProperties.lineWidth) item.lineWidth = parseFloat(newProperties.lineWidth);
				if (newProperties.radius) item.radius = parseFloat(newProperties.radius);
				if (newProperties.text) item.text = newProperties.text;
			});

			updateStatusMessage(`Updated all elements in ${kadObject.entityType} ${kadObject.entityName}`);
		}

		drawData(points, selectedHole); // Redraw
		debouncedUpdateTreeView(); // ✅ ADDED: Update tree view swatches
		setTimeout(() => updateStatusMessage(""), 2000);
	} else {
		console.error("Entity not found:", kadObject.entityName, "in unified map");
	}
}

// Helper to update KAD object in map
function updateKADObjectInMap(kadObject) {
	const map = window[kadObject.mapType]; // Get the map (, etc.)
	const entity = map.get(kadObject.entityName);

	if (entity) {
		// Find and update the specific object
		const objectIndex = entity.data.findIndex((item) => item.pointID === kadObject.pointID && item.pointXLocation === kadObject.pointXLocation && item.pointYLocation === kadObject.pointYLocation);

		if (objectIndex !== -1) {
			entity.data[objectIndex] = kadObject;
		}
	}
}

// Update showSurfaceContextMenu to accept and use specific surface ID
function showSurfaceContextMenu(x, y, surfaceId = null) {
	// Get the specific surface if ID provided, otherwise first visible surface
	const surface = surfaceId ? loadedSurfaces.get(surfaceId) : Array.from(loadedSurfaces.values()).find((s) => s.visible);

	if (!surface) return;
	const menu = document.createElement("div");
	menu.className = "context-menu";
	menu.style.position = "absolute";
	menu.style.left = x + "px";
	menu.style.top = y + "px";

	// Use dynamic colors based on current theme
	const isDarkMode = document.body.classList.contains("dark-mode") || window.matchMedia("(prefers-color-scheme: dark)").matches;

	const backgroundColor = isDarkMode ? "#2d2d2d" : "#ffffff";
	const borderColor = isDarkMode ? "#555555" : "#cccccc";
	const textColor = isDarkMode ? "#ffffff" : "#000000";
	const hoverColor = isDarkMode ? "#ff0000" : "#ff0000";

	menu.style.backgroundColor = backgroundColor;
	menu.style.border = "1px solid " + borderColor;
	menu.style.borderRadius = "8px";
	menu.style.padding = "4px";
	menu.style.boxShadow = isDarkMode ? "0 2px 8px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.15)";
	menu.style.zIndex = "10000";
	menu.style.color = textColor;
	menu.style.minWidth = "180px";

	// Toggle visibility option
	const toggleOption = document.createElement("div");

	// Get surface info - need to find which surface this context menu is for
	const surfaceEntries = Array.from(loadedSurfaces.entries());
	const firstSurface = surfaceEntries.length > 0 ? surfaceEntries[0][1] : null;

	toggleOption.textContent = firstSurface && firstSurface.visible ? "Hide Surface" : "Show Surface";
	toggleOption.style.padding = "8px 12px";
	toggleOption.style.cursor = "pointer";
	toggleOption.style.color = textColor;
	toggleOption.onmouseover = () => {
		toggleOption.style.backgroundColor = hoverColor;
	};
	toggleOption.onmouseout = () => {
		toggleOption.style.backgroundColor = backgroundColor;
	};
	toggleOption.onclick = (e) => {
		e.stopPropagation();

		// Toggle visibility of first surface (or all surfaces if preferred)
		if (firstSurface) {
			setSurfaceVisibility(surfaceEntries[0][0], !firstSurface.visible);
		}

		drawData(points, selectedHole);
		safeRemoveMenu(menu);
	};

	// Remove surface option (enhanced with DB deletion)
	const removeOption = document.createElement("div");
	removeOption.textContent = "Remove Surface";
	removeOption.style.padding = "8px 12px";
	removeOption.style.cursor = "pointer";
	removeOption.style.color = textColor;
	removeOption.onmouseover = () => {
		removeOption.style.backgroundColor = hoverColor;
	};
	removeOption.onmouseout = () => {
		removeOption.style.backgroundColor = backgroundColor;
	};
	removeOption.onclick = async (e) => {
		e.stopPropagation();

		try {
			// Remove the first surface from database and memory
			if (firstSurface) {
				const surfaceId = surfaceEntries[0][0];
				await deleteSurfaceFromDB(surfaceId);
				loadedSurfaces.delete(surfaceId);
			}

			drawData(points, selectedHole);
			debouncedUpdateTreeView(); // Update tree view
			console.log("✅ Surface removed from both memory and database");
		} catch (error) {
			console.error("❌ Error removing surface:", error);

			// Still clear from memory even if DB delete fails
			if (firstSurface) {
				loadedSurfaces.delete(surfaceEntries[0][0]);
			}
			drawData(points, selectedHole);
		}

		safeRemoveMenu(menu);
	};

	// Delete all surfaces option (fixed)
	const deleteOption = document.createElement("div");
	deleteOption.textContent = "Delete All Surfaces";
	deleteOption.style.padding = "8px 12px";
	deleteOption.style.cursor = "pointer";
	deleteOption.style.color = textColor;
	deleteOption.onmouseover = () => {
		deleteOption.style.backgroundColor = hoverColor;
	};
	deleteOption.onmouseout = () => {
		deleteOption.style.backgroundColor = backgroundColor;
	};
	deleteOption.onclick = async (e) => {
		e.stopPropagation();

		try {
			await deleteAllSurfacesFromDB();

			loadedSurfaces.delete(surfaceId);

			drawData(points, selectedHole);
			console.log("✅ All surfaces deleted from database and memory");
		} catch (error) {
			console.error("❌ Error deleting all surfaces:", error);
		}

		safeRemoveMenu(menu);
	};

	// NEW: Transparency slider (like image menu)
	const transparencyOption = document.createElement("div");
	transparencyOption.textContent = "Transparency:";
	transparencyOption.appendChild(document.createElement("br"));
	transparencyOption.style.padding = "8px 12px";

	const slider = document.createElement("input");
	slider.type = "range";
	slider.min = "0";
	slider.max = "100";

	// Get current transparency from first surface or default
	const currentTransparency = firstSurface ? firstSurface.transparency ?? 1.0 : 1.0;
	slider.value = Math.round(currentTransparency * 100);
	slider.style.width = "95%";
	slider.style.margin = "8px auto 0";
	slider.style.display = "block";

	slider.onclick = (e) => e.stopPropagation();
	slider.oninput = (e) => {
		e.stopPropagation();
		const newTransparency = slider.value / 100;

		// Update transparency for the specific surface or all surfaces
		if (firstSurface) {
			firstSurface.transparency = newTransparency;
		}

		drawData(points, selectedHole);
	};

	transparencyOption.appendChild(slider);

	// Legend toggle option
	const legendOption = document.createElement("div");
	legendOption.textContent = showSurfaceLegend ? "Hide Legend" : "Show Legend";
	legendOption.style.padding = "8px 12px";
	legendOption.style.cursor = "pointer";
	legendOption.style.color = textColor;
	legendOption.onmouseover = () => {
		legendOption.style.backgroundColor = hoverColor;
	};
	legendOption.onmouseout = () => {
		legendOption.style.backgroundColor = backgroundColor;
	};
	legendOption.onclick = (e) => {
		e.stopPropagation();
		showSurfaceLegend = !showSurfaceLegend;
		drawData(points, selectedHole);
		safeRemoveMenu(menu);
	};

	// Gradient submenu (keep existing code but fix menu removal)
	const gradientOption = document.createElement("div");
	gradientOption.textContent = "Color Gradient ▶";
	gradientOption.style.padding = "8px 12px";
	gradientOption.style.cursor = "pointer";
	gradientOption.style.color = textColor;
	gradientOption.style.position = "relative";

	// Create gradient submenu
	const gradientSubmenu = document.createElement("div");
	gradientSubmenu.style.position = "absolute";
	gradientSubmenu.style.left = "100%";
	gradientSubmenu.style.top = "0";
	gradientSubmenu.style.backgroundColor = backgroundColor;
	gradientSubmenu.style.border = "1px solid " + borderColor;
	gradientSubmenu.style.borderRadius = "8px";
	gradientSubmenu.style.padding = "4px";
	gradientSubmenu.style.boxShadow = isDarkMode ? "0 2px 8px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.15)";
	gradientSubmenu.style.minWidth = "150px";
	gradientSubmenu.style.display = "none";

	const gradients = [
		{ name: "Default", value: "default" },
		{ name: "Viridis 🌈", value: "viridis" },
		{ name: "Turbo 🔥", value: "turbo" },
		{ name: "Parula 🔵", value: "parula" },
		{ name: "Cividis 🔵", value: "cividis" },
		{ name: "Terrain 🟢", value: "terrain" }
	];

	// FIXED: Context menu gradient selection in showSurfaceContextMenu
	gradients.forEach((gradient) => {
		const gradientItem = document.createElement("div");
		gradientItem.textContent = gradient.name;
		gradientItem.style.padding = "6px 10px";
		gradientItem.style.cursor = "pointer";
		gradientItem.style.color = textColor;

		// Mark current selection based on THIS surface's gradient
		const surfaceUsesThisGradient = (surface.gradient || "default") === gradient.value;

		if (surfaceUsesThisGradient) {
			gradientItem.style.backgroundColor = hoverColor;
			gradientItem.textContent = "✓ " + gradient.name;
		}

		gradientItem.onmouseover = () => {
			if (!surfaceUsesThisGradient) {
				gradientItem.style.backgroundColor = hoverColor;
			}
		};
		gradientItem.onmouseout = () => {
			if (!surfaceUsesThisGradient) {
				gradientItem.style.backgroundColor = backgroundColor;
			}
		};

		// CRITICAL FIX: Only update the clicked surface, not all visible surfaces
		gradientItem.onclick = () => {
			// Set gradient on ONLY the clicked surface
			surface.gradient = gradient.value;

			// Update in database
			saveSurfaceToDB(surface.id || surfaceId).catch((err) => console.error("Failed to save surface gradient:", err));

			console.log("Updated gradient for surface '" + (surface.name || surface.id || surfaceId) + "' to: " + gradient.value);
			drawData(points, selectedHole);
			document.body.removeChild(menu);
		};

		gradientSubmenu.appendChild(gradientItem);
	});

	gradientOption.onmouseover = () => {
		gradientOption.style.backgroundColor = hoverColor;
		gradientSubmenu.style.display = "block";
	};
	gradientOption.onmouseout = () => {
		gradientOption.style.backgroundColor = backgroundColor;
		// Keep submenu visible when hovering over it
		setTimeout(() => {
			if (!gradientSubmenu.matches(":hover") && !gradientOption.matches(":hover")) {
				gradientSubmenu.style.display = "none";
			}
		}, 100);
	};

	gradientOption.appendChild(gradientSubmenu);
	// Add all options to menu
	menu.appendChild(toggleOption);
	menu.appendChild(removeOption);
	menu.appendChild(deleteOption);
	menu.appendChild(transparencyOption);
	menu.appendChild(legendOption);
	menu.appendChild(gradientOption);
	document.body.appendChild(menu);

	// Remove menu when clicking elsewhere
	setTimeout(() => {
		document.addEventListener("click", function removeMenu() {
			safeRemoveMenu(menu);
			document.removeEventListener("click", removeMenu);
		});
	}, 0);
}

// Add this helper function near your other menu functions
function safeRemoveMenu(menu) {
	try {
		if (menu && document.body.contains(menu)) {
			document.body.removeChild(menu);
		}
	} catch (error) {
		// Menu already removed or not found - ignore
		console.log("Menu already removed");
	}
}

// Update the polygon tool event listener to properly handle conflicts
selectByPolygonTool.addEventListener("change", function () {
	if (this.checked) {
		// Uncheck the other buttons
		resetFloatingToolbarButtons("selectByPolygonTool");
		endKadTools();
		isPolygonSelectionActive = true;
		selectedHole = null;
		isDraggingHole = false;

		// Remove conflicting listeners
		removeAllCanvasListenersKeepDefault();

		// Restore default canvas handlers
		canvas.addEventListener("mousedown", handleMouseDown);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseup", handleMouseUp);
		canvas.addEventListener("touchstart", handleTouchStart);
		canvas.addEventListener("touchmove", handleTouchMove);
		canvas.addEventListener("touchend", handleTouchEnd);

		// Add polygon selection listeners
		canvas.addEventListener("click", selectInsidePolygon);
		canvas.addEventListener("dblclick", completePolygonSelection);
		canvas.addEventListener("touchstart", selectInsidePolygonTouch);
		canvas.addEventListener("mousemove", handlePolygonMouseMove);

		// Clear any existing selection
		polyPointsX = [];
		polyPointsY = [];
		selectedMultipleHoles = [];
		updateStatusMessage("Polygon selection mode enabled\nClick to encircle holes.\nDouble-click to complete selection.");
	} else {
		isPolygonSelectionActive = false;

		// Remove polygon listeners
		canvas.removeEventListener("click", selectInsidePolygon);
		canvas.removeEventListener("dblclick", completePolygonSelection);
		canvas.removeEventListener("touchstart", selectInsidePolygonTouch);
		canvas.removeEventListener("mousemove", handlePolygonMouseMove);

		// Clear polygon points
		polyPointsX = [];
		polyPointsY = [];
		drawData(points, selectedHole);
		updateStatusMessage("");
	}
});

function selectInsidePolygon(event) {
	if (!isPolygonSelectionActive) return;

	const rect = canvas.getBoundingClientRect();
	const clickX = event.clientX - rect.left;
	const clickY = event.clientY - rect.top;

	// SNAPPIN SNAP:
	const snapResult = canvasToWorldWithSnap(clickX, clickY);
	worldX = snapResult.worldX;
	worldY = snapResult.worldY;

	// Show snap feedback if snapped
	if (snapResult.snapped) {
		updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
		setTimeout(() => updateStatusMessage(""), 1500);
	}

	// Remove right-click completion - now handled by double-click

	// Left click - add point to polygon
	polyPointsX.push(worldX);
	polyPointsY.push(worldY);

	// If this is the first point, duplicate it for the moving point
	if (polyPointsX.length === 1) {
		polyPointsX.push(worldX);
		polyPointsY.push(worldY);
	} else {
		// Update the last point (moving point)
		polyPointsX[polyPointsX.length - 1] = worldX;
		polyPointsY[polyPointsY.length - 1] = worldY;
	}

	drawData(points, selectedHole);
}

// Improved point-in-polygon test
function isPointInPolygon(x, y, polyX, polyY) {
	let inside = false;
	const nvert = polyX.length;

	for (let i = 0, j = nvert - 1; i < nvert; j = i++) {
		// Convert polygon coordinates to match hole coordinates
		if (polyY[i] > y != polyY[j] > y && x < ((polyX[j] - polyX[i]) * (y - polyY[i])) / (polyY[j] - polyY[i]) + polyX[i]) {
			inside = !inside;
		}
	}

	return inside;
}

// Create a new touch handler for polygon selection
function selectInsidePolygonTouch(event) {
	if (!isPolygonSelectionActive) return;

	event.preventDefault(); // Prevent default touch behavior

	const rect = canvas.getBoundingClientRect();
	const touch = event.touches[0] || event.changedTouches[0];
	const clickX = touch.clientX - rect.left;
	const clickY = touch.clientY - rect.top;

	// SNAPPIN SNAP:
	const snapResult = canvasToWorldWithSnap(clickX, clickY);
	worldX = snapResult.worldX;
	worldY = snapResult.worldY;

	// Show snap feedback if snapped
	if (snapResult.snapped) {
		updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
		setTimeout(() => updateStatusMessage(""), 1500);
	}

	// Two finger tap to finish polygon and select holes
	if (event.touches.length >= 2) {
		if (polyPointsX.length >= 3) {
			// Clear existing selection
			selectedMultipleHoles = [];

			// Check ALL holes against the polygon
			points.forEach((point) => {
				if (!point) return;

				// Get hole coordinates
				const holeX = point.startXLocation;
				const holeY = point.startYLocation;

				// console.log("Checking hole:", point.holeID, "at:", holeX, holeY, "against polygon with points:", polyPointsX.length);

				if (isPointInPolygon(holeX, holeY, polyPointsX, polyPointsY)) {
					selectedMultipleHoles.push(point);
					// console.log("Selected hole:", point.holeID);
				}
			});

			// Update averages and sliders after selection
			if (selectedMultipleHoles.length > 0) {
				updateSelectionAveragesAndSliders(selectedMultipleHoles);
			}

			console.log("Total holes selected:", selectedMultipleHoles.length);
		}

		// Clear the polygon after selection
		polyPointsX = [];
		polyPointsY = [];
		drawData(points, selectedHole);
		return;
	}

	// Single finger tap - add point to polygon
	polyPointsX.push(worldX);
	polyPointsY.push(worldY);

	// If this is the first point, duplicate it for the moving point
	if (polyPointsX.length === 1) {
		polyPointsX.push(worldX);
		polyPointsY.push(worldY);
	} else {
		// Update the last point (moving point)
		polyPointsX[polyPointsX.length - 1] = worldX;
		polyPointsY[polyPointsY.length - 1] = worldY;
	}

	drawData(points, selectedHole);
}

// New function to complete polygon selection with double-click
function completePolygonSelection(event) {
	if (!isPolygonSelectionActive) return;

	event.preventDefault();

	if (polyPointsX.length >= 3) {
		// Clear existing selection
		selectedMultipleHoles = [];

		// Check ALL holes against the polygon
		points.forEach((point) => {
			if (!point) return;

			// Get hole coordinates
			const holeX = point.startXLocation;
			const holeY = point.startYLocation;

			// Debug log the coordinates we're checking
			//console.log("Checking hole:", point.holeID, "at:", holeX, holeY, "against polygon with points:", polyPointsX.length);

			if (isPointInPolygon(holeX, holeY, polyPointsX, polyPointsY)) {
				selectedMultipleHoles.push(point);
				//console.log("Selected hole:", point.holeID);
			}
		});

		// Update averages and sliders after selection
		if (selectedMultipleHoles.length > 0) {
			updateSelectionAveragesAndSliders(selectedMultipleHoles);
		}

		console.log("Total holes selected:", selectedMultipleHoles.length);
		updateStatusMessage("Selected " + selectedMultipleHoles.length + " holes inside polygon");

		// Brief status message, then clear
		setTimeout(() => updateStatusMessage(""), 2000);
	} else {
		updateStatusMessage("Need at least 3 points to complete polygon selection");
		setTimeout(() => updateStatusMessage(""), 2000);
	}

	// Clear the polygon after selection
	polyPointsX = [];
	polyPointsY = [];
	drawData(points, selectedHole);
}

// Add mouse move handler for live polygon preview
function handlePolygonMouseMove(event) {
	if (!isPolygonSelectionActive || polyPointsX.length === 0) return;

	const rect = canvas.getBoundingClientRect();
	const mouseX = event.clientX - rect.left;
	const mouseY = event.clientY - rect.top;

	// Convert mouse coordinates to world coordinates
	const worldX = (mouseX - canvas.width / 2) / currentScale + centroidX;
	const worldY = -(mouseY - canvas.height / 2) / currentScale + centroidY;

	// Update the last point (moving point)
	if (polyPointsX.length > 0) {
		polyPointsX[polyPointsX.length - 1] = worldX;
		polyPointsY[polyPointsY.length - 1] = worldY;
		drawData(points, selectedHole);
	}
}

//use the same function for the resetView in the resetViewTool
resetViewTool.addEventListener("change", function () {
	if (this.checked) {
		resetZoom();
		drawData(points, selectedHole);
		resetViewTool.checked = false;
	}
});

//---------------- CUSTOM STRUCTURED CSV IMPORTER ----------------//
fileInputCustomCSV.addEventListener("change", function () {
	const file = this.files[0];
	if (file && file.name.toLowerCase().endsWith(".csv")) {
		Papa.parse(file, {
			skipEmptyLines: true,
			complete: (results) => showCsvImportModal(results.data, file.name),
			error: (error) => Swal.fire("Error", "Could not parse the CSV file: " + error.message, "error")
		});
	} else if (file) {
		Swal.fire("Invalid File", "Please select a valid .csv file.", "warning");
		this.value = ""; // Reset the file input
	}
});

/**
 * Displays a SweetAlert2 modal to configure the CSV import, with a layout that matches the AQM exporter.
 * @param {Array<Array<string>>} csvData - The parsed data from PapaParse.
 * @param {string} fileName - The name of the imported file.
 *  STRUCTURE OF THE POINTS ARRAY
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
        entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colorHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp
*/

function showCsvImportModal(csvData, fileName) {
	if (!csvData || csvData.length === 0) {
		Swal.fire("Empty File", "The selected CSV file is empty or could not be read.", "warning");
		return;
	}

	const headerRowForPreview = csvData[0];
	const columnOptions = headerRowForPreview.map((header, index) => '<option value="' + (index + 1) + '">Col ' + (index + 1) + ": " + header + "</option>").join("");
	const ignoreOption = '<option value="0">-- calculate --</option>';

	const modalFields = [
		{ name: "entityName", label: "Blast Name" },
		{ name: "holeID", label: "Hole ID*" },
		{ name: "startXLocation", label: "Start X(mE)*" },
		{ name: "startYLocation", label: "Start Y(mN)*" },
		{ name: "startZLocation", label: "Start Z(mRL)*" },
		{ name: "endXLocation", label: "End X(mE)" },
		{ name: "endYLocation", label: "End Y(mN)" },
		{ name: "endZLocation", label: "End Z(mRL)" },
		{ name: "gradeXLocation", label: "Grade X(mE)" },
		{ name: "gradeYLocation", label: "Grade Y(mN)" },
		{ name: "gradeZLocation", label: "Grade Z(mRL)" },
		{ name: "holeDiameter", label: "Diameter" },
		{ name: "subdrillAmount", label: "Subdrill(m)" },
		{ name: "benchHeight", label: "Bench Height(m)" },
		{ name: "holeType", label: "Hole Type" },
		{ name: "holeLengthCalculated", label: "Hole Length" },
		{ name: "holeBearing", label: "Hole Bearing" },
		{ name: "holeAngle", label: "Hole Angle/Dip" },
		{ name: "initiationTime", label: "Initiation Time" },
		{ name: "fromHoleID", label: "From Hole ID" },
		{ name: "timingDelayMilliseconds", label: "Timing Delay" },
		{ name: "colorHexDecimal", label: "Tie color" },
		{ name: "measuredLength", label: "Measured Length" },
		{ name: "measuredMass", label: "Measured Mass" },
		{ name: "measuredComment", label: "Measured Comment" }
	];

	const mappingHtml = modalFields.map((field) => '<label class="labelWhite12" for="swal-col-' + field.name + '">' + field.label + '</label><select id="swal-col-' + field.name + '" style="font-size: 12px; height: 26px; padding: 3px 6px; width: 120px; border-radius: 4px; background-color: #fff; color: #000; border: 1px solid #999; appearance: none; box-sizing: border-box;">' + ignoreOption + columnOptions + "</select>").join("");

	Swal.fire({
		title: "Import CSV: Map Columns",
		html: `
		<label class = "labelWhite12">Header rows to skip</label>
		<input type="number" id="swal-header-rows" class="swal2-input" value="1" min="0" style="max-width: 80px; height: 30px; border-radius: 5px;"><br><br>
		
		<label class="labelWhite12">Column Detection:</label><br>
		<div style="text-align: left; margin: 10px 0;">
			<label style="color: #fff; font-size: 12px; margin-right: 15px;">
				<input type="radio" name="column-detection" value="auto" id="radio-auto" checked style="margin-right: 5px;">
				Auto detect columns
			</label>
			<label style="color: #fff; font-size: 12px; margin-right: 15px;">
				<input type="radio" name="column-detection" value="last" id="radio-last" style="margin-right: 5px;">
				Use last used column order
			</label>
			<label style="color: #fff; font-size: 12px;">
				<input type="radio" name="column-detection" value="manual" id="radio-manual" style="margin-right: 5px;">
				Manual - don't detect columns
			</label>
		</div><hr>
		
		<label class="labelWhite12">Duplicate Handling:</label><br>
		<div style="text-align: left; margin: 10px 0;">
			<label style="color: #fff; font-size: 12px; margin-right: 15px;">
				<input type="radio" name="duplicate-handling" value="update-blast-hole" id="radio-update-blast-hole" checked style="margin-right: 5px;">
				Update existing holes (by Blast Name + Hole ID)
			</label>
			<label style="color: #fff; font-size: 12px; margin-right: 15px;">
				<input type="radio" name="duplicate-handling" value="update-location" id="radio-update-location" style="margin-right: 5px;">
				Update existing holes (by X,Y location)
			</label>
			<label style="color: #fff; font-size: 12px;">
				<input type="radio" name="duplicate-handling" value="skip" id="radio-skip" style="margin-right: 5px;">
				Skip duplicates - do not update
			</label>
		</div><hr>
		
		<label class="labelWhite12">Select the column order below:</label><hr>
		<div class="button-container-6col">
			${mappingHtml}
		</div><hr>
		<label class="labelWhite12">Angle convention:</label>
		<select id="swal-col-angle_convention" class="swal2-select">
			<option value="angle" selected>Angle (0° = vertical)</option>
			<option value="dip">Dip (90° = vertical)</option>
		</select>
        <br>
		<label class="labelWhite12">Diameter is in:</label>
		<select id="swal-col-diameter_unit" class="swal2-select">
			<option value="mm" selected>mm</option>
			<option value="m">m</option>
			<option value="in">in</option>
			<option value="ft">ft</option>
		</select>
        <br>
		<label class="labelWhite12">Data Preview</label>
		<div id="csv-preview" style="text-align: left; width: 750px; height: 200px; font-family: monospace; font-size: 12px; overflow: auto; background-color: #333; border: 1px solid #555; border-radius: 4px; color: #ddd; margin-top: 5px;">
			<table id="preview-table" style="width: 100%; border-collapse: collapse;">
				<thead>
					<tr id="preview-headers" style="background-color: #444; position: sticky; top: 0;">
					</tr>
				</thead>
				<tbody id="preview-body">
				</tbody>
			</table>
		</div>
		`,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			htmlContainer: "swal2-html-container"
		},
		width: "800px",
		showCancelButton: true,
		confirmButtonText: "Import",
		didOpen: () => {
			// Get saved column order from localStorage (with error handling)
			let savedColumnOrder = {};
			try {
				savedColumnOrder = JSON.parse(localStorage.getItem("csvColumnOrder") || "{}");
			} catch (e) {
				console.warn("Error parsing saved column order:", e);
				savedColumnOrder = {};
			}

			// Auto-mapping keywords
			const mappingKeywords = {
				entityName: ["blast", "pattern", "blastname", "patternname"],
				holeID: ["id", "holeid", "holeno", "name", "holename", "pointid", "no"],
				startXLocation: ["x", "cx", "easting", "startx", "start easting", "start east", "start x"],
				startYLocation: ["y", "cy", "northing", "starty", "start northing", "start north", "start y"],
				startZLocation: ["z", "cz", "rl", "collar", "elevation", "zcoord", "startz", "start elevation", "start z"],
				endXLocation: ["endx", "toex", "end easting", "end east", "tx", "end x", "toeX"],
				endYLocation: ["endy", "toey", "end northing", "end north", "ty", "end y", "toeY"],
				endZLocation: ["endz", "toerl", "end elevation", "tz", "end z", "toeZ"],
				holeDiameter: ["diameter", "dia", "diam", "holediameter", "hole diameter"],
				subdrillAmount: ["subdrill", "subdrill amount", "sub drill amount", "sub drill"],
				benchHeight: ["bench", "benchheight", "bench height"],
				holeType: ["type", "holetype", "hole type", "material type", "materialtype"],
				holeLengthCalculated: ["length", "holelength", "hole length"],
				holeBearing: ["bearing", "azimuth", "azi", "bea", "heading", "holebearing", "hole bearing"],
				holeAngle: ["angle", "dip", "mast angle", "holeangle", "hole angle"],
				initiationTime: ["initiation", "initiationtime", "initiation time", "firing time", "firingtime"]
			};

			const headerRow = headerRowForPreview.map((h) =>
				String(h || "")
					.toLowerCase()
					.replace(/[^a-z0-9]/g, "")
			);

			// Function to update the data preview
			const updatePreview = () => {
				const headerCount = parseInt(document.getElementById("swal-header-rows").value, 10) || 0;
				const previewHeaders = document.getElementById("preview-headers");
				const previewBody = document.getElementById("preview-body");

				if (!previewHeaders || !previewBody) return;

				// Clear existing content
				previewHeaders.innerHTML = "";
				previewBody.innerHTML = "";

				// Add headers
				if (csvData.length > 0) {
					csvData[0].forEach((header, index) => {
						const th = document.createElement("th");
						th.textContent = "Col " + (index + 1) + ": " + header;
						th.style.cssText = "padding: 4px 8px; border: 1px solid rgb(80,80,80); background-color: rgb(50,50,50); color: #ffffff; font-size: 11px;";
						previewHeaders.appendChild(th);
					});
				}

				// Add preview rows
				csvData.slice(headerCount, headerCount + 5).forEach((row) => {
					const tr = document.createElement("tr");
					row.forEach((cell) => {
						const td = document.createElement("td");
						td.textContent = cell || "";
						td.style.cssText = "padding: 2px 8px; border: 1px solid rgb(80,80,80); font-size: 11px; color: #ffffff; background-color: rgb(40,40,40);";
						tr.appendChild(td);
					});
					previewBody.appendChild(tr);
				});
			};

			// Function to apply auto-detection
			const applyAutoDetection = () => {
				modalFields.forEach((field) => {
					const selectEl = document.getElementById("swal-col-" + field.name);
					if (!selectEl) return;

					const keywords = mappingKeywords[field.name] || [];
					const colIndex = headerRow.findIndex((header) => keywords.some((kw) => header.includes(kw)));
					if (colIndex !== -1) {
						selectEl.value = colIndex + 1;
					} else {
						selectEl.value = "0"; // Reset to "-- calculate --"
					}
				});
			};

			// Function to apply last used settings
			const applyLastUsed = () => {
				if (Object.keys(savedColumnOrder).length > 0) {
					modalFields.forEach((field) => {
						const selectEl = document.getElementById("swal-col-" + field.name);
						if (!selectEl) return;

						if (savedColumnOrder[field.name]) {
							// Check if the saved column index is valid for current CSV
							const savedIndex = parseInt(savedColumnOrder[field.name], 10);
							if (savedIndex > 0 && savedIndex <= headerRowForPreview.length) {
								selectEl.value = savedColumnOrder[field.name];
							} else {
								selectEl.value = "0";
							}
						} else {
							selectEl.value = "0";
						}
					});

					// Apply saved settings
					const angleConventionEl = document.getElementById("swal-col-angle_convention");
					const diameterUnitEl = document.getElementById("swal-col-diameter_unit");
					const headerRowsEl = document.getElementById("swal-header-rows");

					if (savedColumnOrder.angle_convention && angleConventionEl) {
						angleConventionEl.value = savedColumnOrder.angle_convention;
					}
					if (savedColumnOrder.diameter_unit && diameterUnitEl) {
						diameterUnitEl.value = savedColumnOrder.diameter_unit;
					}
					if (savedColumnOrder.headerRows && headerRowsEl) {
						headerRowsEl.value = savedColumnOrder.headerRows;
						updatePreview(); // Update preview with new header count
					}
				} else {
					// No saved settings, fall back to auto-detection
					applyAutoDetection();
				}
			};

			// Function to reset all to manual (no detection)
			const applyManual = () => {
				modalFields.forEach((field) => {
					const selectEl = document.getElementById("swal-col-" + field.name);
					if (selectEl) {
						selectEl.value = "0"; // Reset to "-- calculate --"
					}
				});
			};

			// Set up radio button event listeners
			const radioAuto = document.getElementById("radio-auto");
			const radioLast = document.getElementById("radio-last");
			const radioManual = document.getElementById("radio-manual");

			if (radioAuto) {
				radioAuto.addEventListener("change", function () {
					if (this.checked) {
						applyAutoDetection();
					}
				});
			}

			if (radioLast) {
				radioLast.addEventListener("change", function () {
					if (this.checked) {
						applyLastUsed();
					}
				});
			}

			if (radioManual) {
				radioManual.addEventListener("change", function () {
					if (this.checked) {
						applyManual();
					}
				});
			}

			// Check if we have saved settings to enable "last used" option
			if (Object.keys(savedColumnOrder).length === 0) {
				if (radioLast) {
					radioLast.disabled = true;
					const labelLast = document.querySelector('label[for="radio-last"]');
					if (labelLast) {
						labelLast.style.opacity = "0.5";
						labelLast.title = "No previous column mapping found";
					}
				}
			}

			// Set up header rows input listener
			const headerRowsEl = document.getElementById("swal-header-rows");
			if (headerRowsEl) {
				headerRowsEl.addEventListener("input", updatePreview);
			}

			// Initialize preview and apply initial detection
			updatePreview();
			applyAutoDetection();
		},
		preConfirm: () => {
			const order = {};
			const headerRowsEl = document.getElementById("swal-header-rows");
			const angleConventionEl = document.getElementById("swal-col-angle_convention");
			const diameterUnitEl = document.getElementById("swal-col-diameter_unit");

			order.headerRows = headerRowsEl ? headerRowsEl.value : "1";
			order.angle_convention = angleConventionEl ? angleConventionEl.value : "angle";
			order.diameter_unit = diameterUnitEl ? diameterUnitEl.value : "mm";

			// Get duplicate handling option
			const duplicateHandling = document.querySelector('input[name="duplicate-handling"]:checked');
			order.duplicate_handling = duplicateHandling ? duplicateHandling.value : "update-blast-hole";

			modalFields.forEach((field) => {
				const selectEl = document.getElementById("swal-col-" + field.name);
				order[field.name] = selectEl ? selectEl.value : "0";
			});

			// Save the column order to localStorage for future use
			try {
				localStorage.setItem("csvColumnOrder", JSON.stringify(order));
			} catch (e) {
				console.warn("Error saving column order to localStorage:", e);
			}

			return order;
		}
	}).then((result) => {
		if (result.isConfirmed) {
			try {
				const importedPoints = processCsvData(csvData, result.value, fileName);
				if (importedPoints && importedPoints.length > 0) {
					// Recalculate everything after import
					let sumX = 0,
						sumY = 0;
					points.forEach((p) => {
						sumX += p.startXLocation;
						sumY += p.startYLocation;
					});
					centroidX = sumX / points.length;
					centroidY = sumY / points.length;

					// Recalculate hole times and update the chart
					holeTimes = calculateTimes(points);
					timeChart();

					drawData(points, null);
					Swal.fire({
						title: "Successful Import",
						text: "Imported " + importedPoints.length + " holes",
						icon: "success",
						customClass: {
							container: "custom-popup-container",
							confirmButton: "confirm",
							confirmButtonText: "OK"
						}
					});
				} else {
					Swal.fire({
						title: "Failed Import",
						text: "No valid holes could be imported. Please check your column mapping and file format.",
						icon: "error",
						customClass: {
							container: "custom-popup-container",
							showCancelButton: true,
							showConfirmButton: false,
							cancelButton: "cancel"
						}
					});
				}
			} catch (error) {
				console.error("Import error:", error);
				Swal.fire({
					title: "Import Error",
					text: "An error occurred during import: " + error.message,
					icon: "error",
					customClass: {
						container: "custom-popup-container",
						showCancelButton: true,
						showConfirmButton: false,
						cancelButton: "cancel"
					}
				});
			}
		}
		document.getElementById("fileInputCustomCSV").value = "";
	});
}

function processCsvData(data, columnOrder, fileName) {
	const entityName = fileName.split(".")[0] || "Imported_Blast_" + Math.floor(Math.random() * 16777215).toString(16);
	const headerRows = parseInt(columnOrder.headerRows, 10) || 0;
	const angleConvention = columnOrder.angle_convention || "angle";
	const diameterUnit = columnOrder.diameter_unit || "mm";
	const duplicateHandling = columnOrder.duplicate_handling || "update-blast-hole";

	const addedHoles = [];
	const updatedHoles = [];
	const duplicateWarnings = [];
	const locationTolerance = 0.01; // 1cm tolerance for location matching

	// Skip header rows and process data
	data.slice(headerRows).forEach((row, index) => {
		const getValue = (colName) => {
			const colIndex = columnOrder[colName];
			if (colIndex !== undefined && colIndex !== null && colIndex !== "" && colIndex !== "0") {
				const val = row[parseInt(colIndex, 10) - 1]; // Convert to 0-based index
				return val !== undefined && val !== null ? String(val).trim() : undefined;
			}
			return undefined;
		};

		// Check mandatory fields first
		const holeID = getValue("holeID");
		const startX = parseFloat(getValue("startXLocation"));
		const startY = parseFloat(getValue("startYLocation"));
		const startZ = parseFloat(getValue("startZLocation"));

		// Validate mandatory fields (HoleID, Start X, Start Y, Start Z)
		if (!holeID || isNaN(startX) || isNaN(startY) || isNaN(startZ)) {
			console.warn("Skipping row " + (index + headerRows + 1) + ": Missing mandatory fields (HoleID, Start X, Start Y, Start Z)");
			return;
		}

		// Get entity name for this hole
		const holeEntityName = getValue("entityName") || entityName;

		// Check for duplicates in existing points array
		let existingHoleIndex = -1;
		let duplicateType = "";

		if (duplicateHandling === "update-blast-hole") {
			// Check for duplicate by blast name + hole ID
			existingHoleIndex = points.findIndex((p) => p.entityName === holeEntityName && p.holeID === holeID);
			if (existingHoleIndex !== -1) {
				duplicateType = "Blast Name + Hole ID";
			}
		} else if (duplicateHandling === "update-location") {
			// Check for duplicate by location (within tolerance)
			existingHoleIndex = points.findIndex((p) => Math.abs(p.startXLocation - startX) < locationTolerance && Math.abs(p.startYLocation - startY) < locationTolerance);
			if (existingHoleIndex !== -1) {
				duplicateType = "Location (X,Y)";
			}
		} else if (duplicateHandling === "skip") {
			// Check for any type of duplicate to skip
			const blastHoleDupe = points.findIndex((p) => p.entityName === holeEntityName && p.holeID === holeID);
			const locationDupe = points.findIndex((p) => Math.abs(p.startXLocation - startX) < locationTolerance && Math.abs(p.startYLocation - startY) < locationTolerance);

			if (blastHoleDupe !== -1 || locationDupe !== -1) {
				duplicateWarnings.push({
					row: index + headerRows + 1,
					holeID: holeID,
					entityName: holeEntityName,
					type: blastHoleDupe !== -1 ? "Blast Name + Hole ID" : "Location",
					action: "Skipped"
				});
				return; // Skip this hole
			}
		}

		// Handle fromHoleID - default to entityName:::holeID format
		let fromHoleID = getValue("fromHoleID");
		if (!fromHoleID) {
			fromHoleID = holeEntityName + ":::" + holeID;
		} else if (!fromHoleID.includes(":::")) {
			// If fromHoleID provided but doesn't have entity prefix, add it
			fromHoleID = holeEntityName + ":::" + fromHoleID;
		}

		// Handle initiation time vs timing delay
		const initiationTimeValue = parseFloat(getValue("initiationTime"));
		const timingDelayValue = parseFloat(getValue("timingDelayMilliseconds"));
		let finalTimingDelay = 0;
		let finalFromHoleID = fromHoleID;

		if (!isNaN(initiationTimeValue)) {
			// If initiation time is provided
			if (isNaN(timingDelayValue) && !getValue("fromHoleID")) {
				// No connection details provided, set hole to connect to itself
				finalFromHoleID = holeEntityName + ":::" + holeID;
				finalTimingDelay = initiationTimeValue;
			} else {
				// Use timing delay if provided, otherwise use initiation time
				finalTimingDelay = !isNaN(timingDelayValue) ? timingDelayValue : initiationTimeValue;
			}
		} else if (!isNaN(timingDelayValue)) {
			finalTimingDelay = timingDelayValue;
		}

		// Create or update point object
		let point;
		let isUpdate = false;

		if (existingHoleIndex !== -1 && duplicateHandling !== "skip") {
			// Update existing hole
			point = points[existingHoleIndex];
			isUpdate = true;
			duplicateWarnings.push({
				row: index + headerRows + 1,
				holeID: holeID,
				entityName: holeEntityName,
				type: duplicateType,
				action: "Updated"
			});
		} else {
			// Create new hole
			point = {
				entityName: holeEntityName,
				entityType: "hole",
				holeID: holeID,
				startXLocation: startX,
				startYLocation: startY,
				startZLocation: startZ,
				endXLocation: startX, // Default to start location for dummy holes
				endYLocation: startY,
				endZLocation: startZ,
				gradeXLocation: startX,
				gradeYLocation: startY,
				gradeZLocation: startZ,
				subdrillAmount: 0,
				subdrillLength: 0,
				benchHeight: 10, // Default bench height
				holeDiameter: 0, // Default to 0 (will determine hole type)
				holeType: getValue("holeType") || "Production",
				fromHoleID: finalFromHoleID,
				timingDelayMilliseconds: finalTimingDelay,
				colorHexDecimal: getValue("colorHexDecimal") || "red",
				holeLengthCalculated: 0,
				holeAngle: 0, // Default to vertical
				holeBearing: 0, // Default to North
				initiationTime: !isNaN(initiationTimeValue) ? initiationTimeValue : 0,
				measuredLength: parseFloat(getValue("measuredLength")) || 0,
				measuredLengthTimeStamp: "09/05/1975 00:00:00",
				measuredMass: parseFloat(getValue("measuredMass")) || 0,
				measuredMassTimeStamp: "09/05/1975 00:00:00",
				measuredComment: getValue("measuredComment") || "None",
				measuredCommentTimeStamp: "09/05/1975 00:00:00"
			};
		}

		// Update point properties (for both new and existing holes)
		if (!isUpdate) {
			point.startXLocation = startX;
			point.startYLocation = startY;
			point.startZLocation = startZ;
		}

		// Handle diameter with unit conversion
		const diameterValue = parseFloat(getValue("holeDiameter"));
		if (!isNaN(diameterValue) && diameterValue > 0) {
			switch (diameterUnit) {
				case "m":
					point.holeDiameter = diameterValue * 1000; // Convert to mm
					break;
				case "in":
					point.holeDiameter = diameterValue * 25.4; // Convert to mm
					break;
				case "ft":
					point.holeDiameter = diameterValue * 304.8; // Convert to mm
					break;
				default: // mm
					point.holeDiameter = diameterValue;
			}
		}

		// Handle subdrill amount
		const subdrillValue = parseFloat(getValue("subdrillAmount"));
		if (!isNaN(subdrillValue)) {
			point.subdrillAmount = subdrillValue;
		}

		// Handle bench height
		const benchHeightValue = parseFloat(getValue("benchHeight"));
		if (!isNaN(benchHeightValue)) {
			point.benchHeight = benchHeightValue;
		}

		// Determine hole geometry based on available data
		const providedEndX = getValue("endXLocation");
		const providedEndY = getValue("endYLocation");
		const providedEndZ = getValue("endZLocation");
		const providedLength = getValue("holeLengthCalculated");
		const providedAngle = getValue("holeAngle");
		const providedBearing = getValue("holeBearing");

		// Check what data we have to determine hole type and calculations
		const hasEndCoords = providedEndX !== undefined && providedEndY !== undefined && providedEndZ !== undefined;
		const hasLengthAngleBearing = providedLength !== undefined && providedAngle !== undefined && providedBearing !== undefined;
		const hasLength = providedLength !== undefined;
		const hasDiameter = point.holeDiameter > 0;

		if (hasEndCoords) {
			// CASE: End coordinates provided - calculate everything from coordinates
			point.endXLocation = parseFloat(providedEndX);
			point.endYLocation = parseFloat(providedEndY);
			point.endZLocation = parseFloat(providedEndZ);

			const dx = point.endXLocation - point.startXLocation;
			const dy = point.endYLocation - point.startYLocation;
			const dz = point.endZLocation - point.startZLocation;
			const magnitude = Math.sqrt(dx * dx + dy * dy + dz * dz);

			point.holeLengthCalculated = magnitude;

			if (magnitude > 1e-10) {
				// Calculate angle (0° = vertical down)
				point.holeAngle = Math.acos(-dz / magnitude) * (180 / Math.PI);
				// Calculate bearing (0° = North, clockwise)
				point.holeBearing = (450 - Math.atan2(dy, dx) * (180 / Math.PI)) % 360;
			}

			// Calculate bench height (vertical distance minus subdrill)
			point.benchHeight = Math.abs(dz) - point.subdrillAmount;
		} else if (hasLengthAngleBearing) {
			// CASE: Length, Angle, and Bearing provided
			const length = parseFloat(providedLength);
			let angle = parseFloat(providedAngle);
			const bearing = parseFloat(providedBearing);

			// Handle angle convention conversion
			if (angleConvention === "dip") {
				// Convert dip (90° = vertical) to angle (0° = vertical)
				angle = 90 - angle;
			}

			point.holeLengthCalculated = length;
			point.holeAngle = angle;
			point.holeBearing = bearing;

			// Calculate bench height if not provided
			if (isNaN(benchHeightValue)) {
				const radAngle = angle * (Math.PI / 180);
				const cosAngle = Math.cos(radAngle);
				point.benchHeight = length * Math.abs(cosAngle) - point.subdrillAmount;
			}
		} else if (hasLength) {
			// CASE: Only length provided (angle defaults to vertical, bearing to North)
			const length = parseFloat(providedLength);
			let angle = parseFloat(providedAngle) || 0; // Default to vertical
			const bearing = parseFloat(providedBearing) || 0; // Default to North

			// Handle angle convention conversion
			if (angleConvention === "dip" && !isNaN(parseFloat(providedAngle))) {
				angle = 90 - angle;
			}

			point.holeLengthCalculated = length;
			point.holeAngle = angle;
			point.holeBearing = bearing;

			// Calculate bench height if not provided
			if (isNaN(benchHeightValue)) {
				const radAngle = angle * (Math.PI / 180);
				const cosAngle = Math.cos(radAngle);
				point.benchHeight = length * Math.abs(cosAngle) - point.subdrillAmount;
			}
		} else {
			// CASE: Only mandatory fields (4 columns) - DUMMY HOLE
			// Keep defaults: length = 0, angle = 0, bearing = 0
			// End coordinates same as start coordinates
			point.holeLengthCalculated = 0;
			point.holeAngle = 0;
			point.holeBearing = 0;
			point.benchHeight = 0;
		}

		// Calculate subdrillLength based on angle
		// subdrillLength = subdrillAmount for vertical holes
		// subdrillLength = subdrillAmount / cos(angle) for angled holes
		if (point.subdrillAmount > 0) {
			const radAngle = point.holeAngle * (Math.PI / 180);
			const cosAngle = Math.cos(radAngle);
			if (Math.abs(cosAngle) > 1e-9) {
				point.subdrillLength = point.subdrillAmount / cosAngle;
			} else {
				// Horizontal hole case
				point.subdrillLength = point.subdrillAmount;
			}
		}

		// Determine hole drawing style based on available data:
		// - If only 4 columns (ID, X, Y, Z): Dummy hole
		// - If no diameter: No Diameter Hole
		// - If has diameter: Regular Hole
		let holeDrawStyle = "Dummy"; // Default for 4-column files

		if (point.holeLengthCalculated > 0) {
			if (hasDiameter) {
				holeDrawStyle = "Hole"; // Regular hole with diameter
			} else {
				holeDrawStyle = "NoDiameterHole"; // Hole without diameter
			}
		}

		// Store the draw style for reference (not part of standard structure but useful)
		point.drawStyle = holeDrawStyle;

		if (isUpdate) {
			updatedHoles.push(point);
		} else {
			addedHoles.push(point);
			points.push(point);
		}
	});

	// Calculate geometry for holes that have length/angle/bearing data
	const allHolesToProcess = duplicateHandling !== "skip" ? points : addedHoles;
	allHolesToProcess.forEach((point) => {
		if (point.holeLengthCalculated > 0 && !isNaN(point.holeAngle) && !isNaN(point.holeBearing)) {
			// Use calculateHoleGeometry to ensure consistent calculations
			calculateHoleGeometry(point, point.holeLengthCalculated, 1); // Mode 1 = Length
		}
	});

	// Show duplicate warnings if any
	if (duplicateWarnings.length > 0) {
		const warningMessage = duplicateWarnings.map((w) => "Row " + w.row + ": " + w.entityName + ":::" + w.holeID + " (" + w.type + ") - " + w.action).join("\n");

		console.warn("Duplicate holes found:\n" + warningMessage);

		// Show warning to user
		Swal.fire({
			title: "Duplicate Holes Detected",
			text: "Found " + duplicateWarnings.length + " duplicate holes. Check console for details.",
			icon: "warning",
			customClass: {
				container: "custom-popup-container"
			}
		});
	}

	// Calculate total processed holes (new + updated)
	const totalProcessedHoles = addedHoles.length + updatedHoles.length;

	console.log("Imported " + totalProcessedHoles + " holes:");
	console.log("- Dummy holes: " + addedHoles.filter((h) => h.drawStyle === "Dummy").length);
	console.log("- No Diameter holes: " + addedHoles.filter((h) => h.drawStyle === "NoDiameterHole").length);
	console.log("- Regular holes: " + addedHoles.filter((h) => h.drawStyle === "Hole").length);
	console.log("- Updated existing holes: " + updatedHoles.length);
	console.log("- Skipped duplicates: " + duplicateWarnings.filter((w) => w.action === "Skipped").length);

	// Return all processed holes (new + updated) so the success message shows correct count
	return [...addedHoles, ...updatedHoles];
}
//---------------- END CUSTOM STRUCTURED CSV IMPORTER ----------------//

//---------------- START RULER TOOL ----------------//
// Add these global variables for ruler functionality (around line 80)

// Helper function to format numbers to 2 decimal places
function formatTo2Decimals(num) {
	return parseFloat(num).toFixed(2);
}

// Helper function to format numbers to 1 decimal place
function formatTo1Decimal(num) {
	return parseFloat(num).toFixed(1);
}

// Convert the Java paintRuler function
function drawRuler(startX, startY, endX, endY) {
	const xl = startX - endX;
	const yl = startY - endY;
	const d = Math.sqrt(Math.pow(xl, 2) + Math.pow(yl, 2));

	// Calculate the angle of the line (bearing from start to end)
	const lineAngle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI;

	// Convert world coordinates to canvas coordinates
	const canvasStartX = (startX - centroidX) * currentScale + canvas.width / 2;
	const canvasStartY = -(startY - centroidY) * currentScale + canvas.height / 2;
	const canvasEndX = (endX - centroidX) * currentScale + canvas.width / 2;
	const canvasEndY = -(endY - centroidY) * currentScale + canvas.height / 2;

	// Draw main ruler line
	ctx.beginPath();
	ctx.moveTo(canvasStartX, canvasStartY);
	ctx.lineTo(canvasEndX, canvasEndY);
	ctx.strokeStyle = "#008B8B";
	ctx.lineWidth = 2;
	ctx.stroke();

	// Draw distance text
	ctx.fillStyle = "#008B8B";
	ctx.font = "12px Arial";
	ctx.fillText("   " + formatTo2Decimals(d) + "m", canvasEndX, canvasEndY - 5);

	// Draw meter increments (perpendicular tick marks)
	for (let i = 0; i <= d; i++) {
		// Calculate position along the line
		const ratio = i / d;
		const tickX = startX + ratio * (endX - startX);
		const tickY = startY + ratio * (endY - startY);

		// Calculate perpendicular offset (0.2m each side)
		const perpAngle = ((lineAngle + 90) * Math.PI) / 180;
		const tick1X = tickX + 0.2 * Math.cos(perpAngle);
		const tick1Y = tickY + 0.2 * Math.sin(perpAngle);
		const tick2X = tickX - 0.2 * Math.cos(perpAngle);
		const tick2Y = tickY - 0.2 * Math.sin(perpAngle);

		// Convert to canvas coordinates
		const canvasTick1X = (tick1X - centroidX) * currentScale + canvas.width / 2;
		const canvasTick1Y = -(tick1Y - centroidY) * currentScale + canvas.height / 2;
		const canvasTick2X = (tick2X - centroidX) * currentScale + canvas.width / 2;
		const canvasTick2Y = -(tick2Y - centroidY) * currentScale + canvas.height / 2;

		ctx.beginPath();
		ctx.moveTo(canvasTick1X, canvasTick1Y);
		ctx.lineTo(canvasTick2X, canvasTick2Y);
		ctx.strokeStyle = "#008B8B";
		ctx.lineWidth = 1;
		ctx.stroke();
	}

	// Draw half-meter increments (shorter tick marks)
	for (let i = 0.5; i < d; i += 1) {
		// Calculate position along the line
		const ratio = i / d;
		const tickX = startX + ratio * (endX - startX);
		const tickY = startY + ratio * (endY - startY);

		// Calculate perpendicular offset (0.1m each side)
		const perpAngle = ((lineAngle + 90) * Math.PI) / 180;
		const tick1X = tickX + 0.1 * Math.cos(perpAngle);
		const tick1Y = tickY + 0.1 * Math.sin(perpAngle);
		const tick2X = tickX - 0.1 * Math.cos(perpAngle);
		const tick2Y = tickY - 0.1 * Math.sin(perpAngle);

		// Convert to canvas coordinates
		const canvasTick1X = (tick1X - centroidX) * currentScale + canvas.width / 2;
		const canvasTick1Y = -(tick1Y - centroidY) * currentScale + canvas.height / 2;
		const canvasTick2X = (tick2X - centroidX) * currentScale + canvas.width / 2;
		const canvasTick2Y = -(tick2Y - centroidY) * currentScale + canvas.height / 2;

		ctx.beginPath();
		ctx.moveTo(canvasTick1X, canvasTick1Y);
		ctx.lineTo(canvasTick2X, canvasTick2Y);
		ctx.strokeStyle = "#008B8B";
		ctx.lineWidth = 1;
		ctx.stroke();
	}
}
// Convert the Java paintAngleMeasure function
function drawProtractor(p1X, p1Y, p2X, p2Y, p3X, p3Y) {
	// Don't draw anything if p2 and p3 are the same as p1 (first click only)
	if (p2X === p1X && p2Y === p1Y && p3X === p1X && p3Y === p1Y) {
		return;
	}

	// Calculate distances
	const d1 = Math.sqrt(Math.pow(p2X - p1X, 2) + Math.pow(p2Y - p1Y, 2));
	const d2 = Math.sqrt(Math.pow(p3X - p1X, 2) + Math.pow(p3Y - p1Y, 2));

	// Calculate bearings (North = 0°, East = 90°)
	const bearing1 = (90 - (Math.atan2(p2Y - p1Y, p2X - p1X) * 180) / Math.PI + 360) % 360;
	const bearing2 = (90 - (Math.atan2(p3Y - p1Y, p3X - p1X) * 180) / Math.PI + 360) % 360;

	// Calculate angle between the two lines
	let angle = Math.abs(bearing1 - bearing2);
	if (angle > 180) angle = 360 - angle;

	// Convert to canvas coordinates
	const canvasP1X = (p1X - centroidX) * currentScale + canvas.width / 2;
	const canvasP1Y = -(p1Y - centroidY) * currentScale + canvas.height / 2;
	const canvasP2X = (p2X - centroidX) * currentScale + canvas.width / 2;
	const canvasP2Y = -(p2Y - centroidY) * currentScale + canvas.height / 2;
	const canvasP3X = (p3X - centroidX) * currentScale + canvas.width / 2;
	const canvasP3Y = -(p3Y - centroidY) * currentScale + canvas.height / 2;

	// Draw lines
	ctx.strokeStyle = "#008B8B";
	ctx.lineWidth = 1;

	// First line (center to p2)
	if (d1 > 0) {
		ctx.beginPath();
		ctx.moveTo(canvasP1X, canvasP1Y);
		ctx.lineTo(canvasP2X, canvasP2Y);
		ctx.stroke();

		// Text for first line
		ctx.fillStyle = "rgba(95, 158, 160, 0.2)";
		ctx.font = "12px Arial";
		const text1 = formatTo2Decimals(d1) + "m " + formatTo1Decimal(bearing1) + "°";
		const textWidth1 = ctx.measureText(text1).width;
		ctx.fillRect(canvasP2X + 5, canvasP2Y - 20, textWidth1 + 4, 16);
		ctx.strokeStyle = "#008B8B";
		ctx.strokeRect(canvasP2X + 5, canvasP2Y - 20, textWidth1 + 4, 16);
		ctx.fillStyle = "#008B8B";
		ctx.fillText(text1, canvasP2X + 7, canvasP2Y - 8);
	}

	// Second line (center to p3) - only if p3 is different from p1
	if (d2 > 0 && !(p3X === p1X && p3Y === p1Y)) {
		ctx.strokeStyle = "#008B8B";
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(canvasP1X, canvasP1Y);
		ctx.lineTo(canvasP3X, canvasP3Y);
		ctx.stroke();

		// Text for second line
		ctx.fillStyle = "rgba(95, 158, 160, 0.2)";
		ctx.font = "12px Arial";
		const text2 = formatTo2Decimals(d2) + "m " + formatTo1Decimal(bearing2) + "°";
		const textWidth2 = ctx.measureText(text2).width;
		ctx.fillRect(canvasP3X + 5, canvasP3Y - 20, textWidth2 + 4, 16);
		ctx.strokeStyle = "#008B8B";
		ctx.strokeRect(canvasP3X + 5, canvasP3Y - 20, textWidth2 + 4, 16);
		ctx.fillStyle = "#008B8B";
		ctx.fillText(text2, canvasP3X + 7, canvasP3Y - 8);

		// Angle text at center point (only when we have both lines)
		const text3 = formatTo1Decimal(angle) + "° / " + formatTo1Decimal(360 - angle) + "°";
		const textWidth3 = ctx.measureText(text3).width;
		ctx.fillStyle = "rgba(95, 158, 160, 0.2)";
		ctx.fillRect(canvasP1X + 5, canvasP1Y - 40, textWidth3 + 4, 16);
		ctx.strokeStyle = "#008B8B";
		ctx.strokeRect(canvasP1X + 5, canvasP1Y - 40, textWidth3 + 4, 16);
		ctx.fillStyle = "#008B8B";
		ctx.fillText(text3, canvasP1X + 7, canvasP1Y - 28);

		// Draw arc between the lines
		const arcRadius = (Math.min(d1, d2) / 3) * currentScale;
		if (arcRadius > 5) {
			// Calculate the actual angles of the lines in canvas coordinates
			const angle1 = Math.atan2(canvasP2Y - canvasP1Y, canvasP2X - canvasP1X);
			const angle2 = Math.atan2(canvasP3Y - canvasP1Y, canvasP3X - canvasP1X);

			// Calculate the difference between angles
			let angleDiff = angle2 - angle1;

			// Normalize to [-π, π]
			while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
			while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

			// Always draw the smaller arc (interior angle)
			let startAngle, endAngle, counterClockwise;

			if (Math.abs(angleDiff) <= Math.PI) {
				// The direct path is the smaller arc
				startAngle = angle1;
				endAngle = angle2;
				counterClockwise = angleDiff > 0;
			} else {
				// The direct path is the larger arc, so we need to go the other way
				startAngle = angle2;
				endAngle = angle1;
				counterClockwise = angleDiff < 0;
			}

			ctx.beginPath();
			ctx.arc(canvasP1X, canvasP1Y, arcRadius, startAngle, endAngle, counterClockwise);
			ctx.strokeStyle = "#FF0000"; // Red for arc
			ctx.lineWidth = 2;
			ctx.stroke();
		}
	}
}
// Add event listeners for the ruler tools
rulerTool.addEventListener("change", function () {
	if (this.checked) {
		resetFloatingToolbarButtons("rulerTool");
		// Disable other tools
		switches.forEach((switchElement) => {
			if (switchElement && switchElement !== this) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		isRulerActive = true;
		rulerStartPoint = null;
		rulerEndPoint = null;
		canvas.addEventListener("click", handleRulerClick);
		updateStatusMessage("Ruler Tool Activated\nSelect 2 points to measure distance\nChange tool to remove.");
	} else {
		isRulerActive = false;
		rulerStartPoint = null;
		rulerEndPoint = null;
		canvas.removeEventListener("click", handleRulerClick);
		drawData(points, selectedHole);
		updateStatusMessage("");
	}
});
//Protractor Tool addlistener
rulerProtractorTool.addEventListener("change", function () {
	if (this.checked) {
		resetFloatingToolbarButtons("rulerProtractorTool");
		// Disable other tools
		switches.forEach((switchElement) => {
			if (switchElement && switchElement !== this) switchElement.checked = false;
		});
		setAllBoolsToFalse();
		isRulerProtractorActive = true;
		rulerProtractorPoints = [];
		canvas.addEventListener("click", handleRulerProtractorClick);
		updateStatusMessage("Protractor Tool Activated\nSelect 3 points to measure bearing\nChange tool to remove.");
	} else {
		isRulerProtractorActive = false;
		rulerProtractorPoints = [];
		canvas.removeEventListener("click", handleRulerProtractorClick);
		drawData(points, selectedHole);
		updateStatusMessage("");
	}
});

// Handle ruler clicks
function handleRulerClick(event) {
	const rect = canvas.getBoundingClientRect();
	const clickX = event.clientX - rect.left;
	const clickY = event.clientY - rect.top;
	// SNAPPIN SNAP:
	const snapResult = canvasToWorldWithSnap(clickX, clickY);
	worldX = snapResult.worldX;
	worldY = snapResult.worldY;

	// Show snap feedback if snapped
	if (snapResult.snapped) {
		updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
		setTimeout(() => updateStatusMessage(""), 1500);
	}

	if (!rulerStartPoint) {
		// First click - set start point, ruler will now follow mouse
		rulerStartPoint = { x: worldX, y: worldY };
		rulerEndPoint = null;
	} else if (!rulerEndPoint) {
		// Second click - lock in the end point, measurement is complete
		rulerEndPoint = { x: worldX, y: worldY };
	} else {
		// Third click - start new measurement
		rulerStartPoint = { x: worldX, y: worldY };
		rulerEndPoint = null;
	}
	drawData(points, selectedHole);
}
// Handle ruler bearing clicks (3 points)
function handleRulerProtractorClick(event) {
	const rect = canvas.getBoundingClientRect();
	const clickX = event.clientX - rect.left;
	const clickY = event.clientY - rect.top;
	// SNAPPIN SNAP:
	const snapResult = canvasToWorldWithSnap(clickX, clickY);
	worldX = snapResult.worldX;
	worldY = snapResult.worldY;

	// Show snap feedback if snapped
	if (snapResult.snapped) {
		updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
		setTimeout(() => updateStatusMessage(""), 1500);
	}

	rulerProtractorPoints.push({ x: worldX, y: worldY });

	if (rulerProtractorPoints.length > 3) {
		// Start new measurement after 3 points
		rulerProtractorPoints = [{ x: worldX, y: worldY }];
	}

	drawData(points, selectedHole);
}

//----------------- END RULER TOOLS --------------------//
// Add these tool references after the existing ones
const patternInPolygonTool = document.getElementById("patternInPolygonTool");
const holesAlongLineTool = document.getElementById("holesAlongLineTool");
const holesAlongPolyLineTool = document.getElementById("holesAlongPolyLineTool");

// Add state variables for the new tools
let isPatternInPolygonActive = false;
let isHolesAlongLineActive = false;
let isHolesAlongPolyLineActive = false;

// Pattern in Polygon Tool state
let patternPolygonStep = 0; // 0=select polygon, 1=select start point, 2=select end point, 3=select reference point
let selectedPolygon = null;
let patternStartPoint = null;
let patternEndPoint = null;
let patternReferencePoint = null;
// KAD Polygon selection for editing
let selectedKADPolygon = null; // Keep selectedKADPolygon for backward compatibility
let selectedKADObject = null; // For all KAD objects (points, lines, circles, text)

// Holes Along Line Tool state
let holesLineStep = 0; // 0=select start point, 1=select end point
let lineStartPoint = null;
let lineEndPoint = null;

// Holes Along PolyLine Tool state
let lastClickTime = null;
// Add state variables for the polyline tool
let polylineStep = 0; // 0=select line/polygon, 1=select start point, 2=select end point
let selectedPolyline = null;
let polylineStartPoint = null;
let polylineEndPoint = null;

//---------------PATTERN IN POLYGON TOOL---------------//
patternInPolygonTool.addEventListener("change", function () {
	if (this.checked) {
		setAllBoolsToFalse();
		setMultipleSelectionModeToFalse();
		resetAllSwitchesAndToggles();
		removeAllCanvasListenersKeepDefault();
		resetFloatingToolbarButtons("patternInPolygonTool");

		endKadTools();
		isPatternInPolygonActive = true;
		patternPolygonStep = 0;
		selectedPolygon = null;
		patternStartPoint = null;
		patternEndPoint = null;
		patternReferencePoint = null;

		canvas.addEventListener("click", handlePatternInPolygonClick);
		canvas.addEventListener("touchstart", handlePatternInPolygonClick);

		updateStatusMessage("Step 1: Click on a polygon to select it");
	} else {
		resetFloatingToolbarButtons("none");
		isPatternInPolygonActive = false;
		patternPolygonStep = 0;

		// CRITICAL: Clear all selection state to prevent old selections from appearing
		selectedPolygon = null;
		patternStartPoint = null;
		patternEndPoint = null;
		patternReferencePoint = null;

		canvas.removeEventListener("click", handlePatternInPolygonClick);
		canvas.removeEventListener("touchstart", handlePatternInPolygonClick);

		// Reset cursor
		canvas.style.cursor = "default";

		// Restore default canvas handlers
		canvas.addEventListener("mousedown", handleMouseDown);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseup", handleMouseUp);
		canvas.addEventListener("touchstart", handleTouchStart);
		canvas.addEventListener("touchmove", handleTouchMove);
		canvas.addEventListener("touchend", handleTouchEnd);

		updateStatusMessage("");
		drawData(points, selectedHole);
	}
});
function handlePatternInPolygonClick(event) {
	event.preventDefault();
	event.stopPropagation();

	const clientX = event.clientX || (event.touches && event.touches[0].clientX);
	const clientY = event.clientY || (event.touches && event.touches[0].clientY);

	const rect = canvas.getBoundingClientRect();
	const clickX = clientX - rect.left;
	const clickY = clientY - rect.top;

	// SNAPPIN SNAP:
	const snapResult = canvasToWorldWithSnap(clickX, clickY);
	worldX = snapResult.worldX;
	worldY = snapResult.worldY;

	// Show snap feedback if snapped
	if (snapResult.snapped) {
		updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
		setTimeout(() => updateStatusMessage(""), 1500);
	}

	switch (patternPolygonStep) {
		case 0: // Select polygon
			const clickedEntityInfo = getClickedKADEntity(worldX, worldY);
			if (clickedEntityInfo && clickedEntityInfo.entity.entityType === "poly") {
				selectedPolygon = clickedEntityInfo.entity; // ← Extract just the entity
				patternPolygonStep = 1;
				updateStatusMessage("Step 2: Click to select pattern start point");
			} else {
				updateStatusMessage("No polygon found.\nStep 1: Click on a polygon to select it");
			}
			break;

		case 1: // Select start point
			patternStartPoint = { x: worldX, y: worldY };
			patternPolygonStep = 2;
			updateStatusMessage("Step 3: Click to select pattern\nend point (for orientation)");
			console.log("Pattern start point set to:", worldX.toFixed(2), worldY.toFixed(2));
			break;

		case 2: // Select end point
			patternEndPoint = { x: worldX, y: worldY };
			patternPolygonStep = 3;
			updateStatusMessage("Step 4: Click to select reference point");
			console.log("Pattern end point set to:", worldX.toFixed(2), worldY.toFixed(2));
			break;

		case 3: // Select reference point
			patternReferencePoint = { x: worldX, y: worldY };
			updateStatusMessage("Reference point selected");
			console.log("Pattern reference point set to:", worldX.toFixed(2), worldY.toFixed(2));
			showPatternInPolygonPopup();
			// Dont deactivate the tool here - let the popup handle it
			// patternInPolygonTool.checked = false;
			// patternInPolygonTool.dispatchEvent(new Event("change")); // ← THIS IS THE PROBLEM!
			break;
	}

	drawData(points, selectedHole);
}
//---------------HOLES ALONG POLYLINE TOOL---------------//
holesAlongPolyLineTool.addEventListener("change", function () {
	if (this.checked) {
		setAllBoolsToFalse();
		setMultipleSelectionModeToFalse();
		resetAllSwitchesAndToggles();
		removeAllCanvasListenersKeepDefault();
		resetFloatingToolbarButtons("holesAlongPolyLineTool");

		endKadTools();
		isHolesAlongPolyLineActive = true;
		polylineStep = 0;
		selectedPolyline = null;
		polylineStartPoint = null;
		polylineEndPoint = null;

		canvas.addEventListener("click", handleHolesAlongPolyLineClick);
		canvas.addEventListener("touchstart", handleHolesAlongPolyLineClick);

		// Set cursor to indicate selection mode
		canvas.style.cursor = "crosshair";

		updateStatusMessage("Step 1: Click on an existing line,\npolyline, or polygon edge to select it.");
	} else {
		resetFloatingToolbarButtons("none");
		isHolesAlongPolyLineActive = false;
		polylineStep = 0;

		// CRITICAL: Clear all selection state to prevent old selections from appearing
		selectedPolyline = null;
		polylineStartPoint = null;
		polylineEndPoint = null;

		canvas.removeEventListener("click", handleHolesAlongPolyLineClick);
		canvas.removeEventListener("touchstart", handleHolesAlongPolyLineClick);

		// Reset cursor
		canvas.style.cursor = "default";

		// Restore default canvas handlers
		canvas.addEventListener("mousedown", handleMouseDown);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseup", handleMouseUp);
		canvas.addEventListener("touchstart", handleTouchStart);
		canvas.addEventListener("touchmove", handleTouchMove);
		canvas.addEventListener("touchend", handleTouchEnd);

		updateStatusMessage("");
		drawData(points, selectedHole);
	}
});
// Updated click handler with multi-step process
function handleHolesAlongPolyLineClick(event) {
	if (!isHolesAlongPolyLineActive) return;

	event.preventDefault();
	event.stopPropagation();

	const clientX = event.clientX || (event.touches && event.touches[0].clientX);
	const clientY = event.clientY || (event.touches && event.touches[0].clientY);

	const rect = canvas.getBoundingClientRect();
	const clickX = clientX - rect.left;
	const clickY = clientY - rect.top;

	// SNAPPIN SNAP:
	const snapResult = canvasToWorldWithSnap(clickX, clickY);
	worldX = snapResult.worldX;
	worldY = snapResult.worldY;

	// Show snap feedback if snapped
	if (snapResult.snapped) {
		updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
		setTimeout(() => updateStatusMessage(""), 1500);
	}

	switch (polylineStep) {
		case 0: // Select line/polygon
			// Try to find a clicked line first
			const clickedLine = getClickedLine(worldX, worldY, 1.0);

			if (clickedLine) {
				selectedPolyline = {
					type: "line",
					vertices: clickedLine.points.map((point) => ({
						x: point.pointXLocation,
						y: point.pointYLocation
					})),
					entity: clickedLine.entity
				};
				polylineStep = 1;
				updateStatusMessage("Step 2: Click on a vertex or point along the line to set the start point.");
				console.log("Selected line with", selectedPolyline.vertices.length, "vertices");
				break;
			}

			// Try to find a clicked polygon
			const clickedPolygon = getClickedKADEntity(worldX, worldY);

			// Fix the polygon selection part
			if (clickedPolygon) {
				selectedPolyline = {
					type: "polygon",
					vertices: clickedPolygon.entity.data.map((point) => ({
						x: point.pointXLocation,
						y: point.pointYLocation
					})),
					entity: clickedPolygon.entity
				};
				polylineStep = 1;
				updateStatusMessage("Step 2: Click on a vertex of the polygon to set the start point.");
				console.log("Selected polygon with", selectedPolyline.vertices.length, "vertices");
				break;
			}

			updateStatusMessage("No line or polygon found. Step 1: Click on an existing line, polyline, or polygon edge.");
			break;

		case 1: // Select start point
			polylineStartPoint = findClosestVertex(worldX, worldY, selectedPolyline.vertices);
			if (polylineStartPoint) {
				polylineStep = 2;
				updateStatusMessage("Step 3: Click on another vertex along the line to set the end point.");
				console.log("Start point set at:", polylineStartPoint);
			} else {
				updateStatusMessage("Click closer to a vertex on the selected line/polygon.");
			}
			break;

		case 2: // Select end point
			polylineEndPoint = findClosestVertex(worldX, worldY, selectedPolyline.vertices);
			if (polylineEndPoint) {
				console.log("End point set at:", polylineEndPoint);

				// Create path from start to end point - now with polygon awareness
				const isPolygon = selectedPolyline.type === "polygon";
				const pathVertices = createPathBetweenVertices(selectedPolyline.vertices, polylineStartPoint, polylineEndPoint, isPolygon);

				if (pathVertices.length >= 2) {
					// Pass the polygon type and original vertices to the popup for reverse handling
					showHolesAlongPolylinePopup(pathVertices, selectedPolyline);
				} else {
					updateStatusMessage("Invalid path between selected points. Please try again.");
					polylineStep = 1;
					polylineStartPoint = null;
					polylineEndPoint = null;
				}

				// DON'T deactivate the tool here - let the popup handle it
				// holesAlongPolyLineTool.checked = false;
				// holesAlongPolyLineTool.dispatchEvent(new Event("change"));
			} else {
				updateStatusMessage("Click closer to a vertex on the selected line/polygon.");
			}
			break;
	}

	drawData(points, selectedHole);
}
//---------------HOLES ALONG LINE TOOL---------------//
holesAlongLineTool.addEventListener("change", function () {
	if (this.checked) {
		setAllBoolsToFalse();
		setMultipleSelectionModeToFalse();
		resetAllSwitchesAndToggles();
		removeAllCanvasListenersKeepDefault();
		resetFloatingToolbarButtons("holesAlongLineTool");

		endKadTools();
		isHolesAlongLineActive = true;
		holesLineStep = 0;
		lineStartPoint = null;
		lineEndPoint = null;

		canvas.addEventListener("click", handleHolesAlongLineClick);
		canvas.addEventListener("touchstart", handleHolesAlongLineClick);

		updateStatusMessage("Step 1: Click to select line start point");
	} else {
		resetFloatingToolbarButtons("none");
		isHolesAlongLineActive = false;
		holesLineStep = 0;

		// Clear line points to remove visual feedback
		lineStartPoint = null;
		lineEndPoint = null;

		canvas.removeEventListener("click", handleHolesAlongLineClick);
		canvas.removeEventListener("touchstart", handleHolesAlongLineClick);

		// Restore default canvas handlers
		canvas.addEventListener("mousedown", handleMouseDown);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseup", handleMouseUp);
		canvas.addEventListener("touchstart", handleTouchStart);
		canvas.addEventListener("touchmove", handleTouchMove);
		canvas.addEventListener("touchend", handleTouchEnd);

		updateStatusMessage("");
		drawData(points, selectedHole);
	}
});
function handleHolesAlongLineClick(event) {
	event.preventDefault();
	event.stopPropagation();

	const clientX = event.clientX || (event.touches && event.touches[0].clientX);
	const clientY = event.clientY || (event.touches && event.touches[0].clientY);

	const rect = canvas.getBoundingClientRect();
	const clickX = clientX - rect.left;
	const clickY = clientY - rect.top;

	// SNAPPIN SNAP:
	const snapResult = canvasToWorldWithSnap(clickX, clickY);
	worldX = snapResult.worldX;
	worldY = snapResult.worldY;

	// Show snap feedback if snapped
	if (snapResult.snapped) {
		updateStatusMessage("Snapped to " + snapResult.snapTarget.description);
		setTimeout(() => updateStatusMessage(""), 1500);
	}

	switch (holesLineStep) {
		case 0: // Select start point
			lineStartPoint = { x: worldX, y: worldY };
			holesLineStep = 1;
			updateStatusMessage("Step 2: Click to select line end point");
			break;

		case 1: // Select end point
			lineEndPoint = { x: worldX, y: worldY };
			showHolesAlongLinePopup();
			break;
	}

	drawData(points, selectedHole);
}
// Helper function to update status messages
function updateStatusMessage(message) {
	// You can display this in a status bar or console
	//console.log(message);
	statusMessage = message;
	// If you have a status element in your HTML, update it:
	// document.getElementById("statusMessage").textContent = message;
}
// Enhanced snapping function for CAD vertices and hole points
function findNearestSnapPoint(worldX, worldY, tolerance = getSnapToleranceInWorldUnits()) {
	let closestPoint = null;
	let minDistance = tolerance;
	let snapType = null;

	console.log("Searching for snap points near:", worldX.toFixed(2), worldY.toFixed(2), "tolerance:", tolerance);

	// Search CAD vertices from allKADDrawingsMap
	if (typeof allKADDrawingsMap !== "undefined" && allKADDrawingsMap && allKADDrawingsMap.size > 0) {
		console.log("Searching", allKADDrawingsMap.size, "polygons for vertices");
		allKADDrawingsMap.forEach((entity, key) => {
			if (entity.data && entity.data.length > 0) {
				console.log("Polygon", key, "has", entity.data.length, "vertices");
				entity.data.forEach((point, pointIndex) => {
					const vertexX = point.pointXLocation;
					const vertexY = point.pointYLocation;
					const distance = Math.sqrt(Math.pow(worldX - vertexX, 2) + Math.pow(worldY - vertexY, 2));
					console.log("Polygon vertex", pointIndex, "at", vertexX.toFixed(2), vertexY.toFixed(2), "distance:", distance.toFixed(2));
					if (distance < minDistance) {
						minDistance = distance;
						closestPoint = { x: vertexX, y: vertexY };
						snapType = "CAD Polygon Vertex";
						console.log("Found closer CAD polygon vertex, distance:", distance.toFixed(2));
					}
				});
			}
		});
	} else {
		console.log("No allKADDrawingsMap found or empty");
	}

	// Search CAD vertices from allKADDrawingsMap
	if (typeof allKADDrawingsMap !== "undefined" && allKADDrawingsMap && allKADDrawingsMap.size > 0) {
		console.log("Searching", allKADDrawingsMap.size, "lines for vertices");
		allKADDrawingsMap.forEach((entity, key) => {
			if (entity.data && entity.data.length > 0) {
				console.log("Line", key, "has", entity.data.length, "vertices");
				entity.data.forEach((point, pointIndex) => {
					const vertexX = point.pointXLocation;
					const vertexY = point.pointYLocation;
					const distance = Math.sqrt(Math.pow(worldX - vertexX, 2) + Math.pow(worldY - vertexY, 2));
					console.log("Line vertex", pointIndex, "at", vertexX.toFixed(2), vertexY.toFixed(2), "distance:", distance.toFixed(2));
					if (distance < minDistance) {
						minDistance = distance;
						closestPoint = { x: vertexX, y: vertexY };
						snapType = "CAD Line Vertex";
						console.log("Found closer CAD line vertex, distance:", distance.toFixed(2));
					}
				});
			}
		});
	} else {
		console.log("No allKADDrawingsMap found or empty");
	}

	// Search hole collar points
	if (points && points.length > 0) {
		console.log("Searching", points.length, "holes for snap points");
		points.forEach((hole, holeIndex) => {
			// Collar point
			if (hole.startXLocation !== undefined && hole.startYLocation !== undefined) {
				const collarDistance = Math.sqrt(Math.pow(worldX - hole.startXLocation, 2) + Math.pow(worldY - hole.startYLocation, 2));
				if (collarDistance < minDistance) {
					minDistance = collarDistance;
					closestPoint = { x: hole.startXLocation, y: hole.startYLocation };
					snapType = "Hole Collar (" + hole.holeID + ")";
					console.log("Found closer hole collar, distance:", collarDistance.toFixed(2));
				}
			}

			// Grade point (if exists)
			if (hole.gradeXLocation !== undefined && hole.gradeYLocation !== undefined) {
				const gradeDistance = Math.sqrt(Math.pow(worldX - hole.gradeXLocation, 2) + Math.pow(worldY - hole.gradeYLocation, 2));
				if (gradeDistance < minDistance) {
					minDistance = gradeDistance;
					closestPoint = { x: hole.gradeXLocation, y: hole.gradeYLocation };
					snapType = "Hole Grade (" + hole.holeID + ")";
					console.log("Found closer hole grade, distance:", gradeDistance.toFixed(2));
				}
			}

			// Toe point (calculated from hole geometry)
			if (hole.endXLocation !== undefined && hole.endYLocation !== undefined) {
				const toeDistance = Math.sqrt(Math.pow(worldX - hole.endXLocation, 2) + Math.pow(worldY - hole.endYLocation, 2));
				if (toeDistance < minDistance) {
					minDistance = toeDistance;
					closestPoint = { x: hole.endXLocation, y: hole.endYLocation };
					snapType = "Hole Toe (" + hole.holeID + ")";
					console.log("Found closer hole toe, distance:", toeDistance.toFixed(2));
				}
			}
		});
	} else {
		console.log("No holes found or points array is empty");
	}

	if (closestPoint) {
		console.log("SNAP FOUND:", snapType, "at", closestPoint.x.toFixed(2), closestPoint.y.toFixed(2), "distance:", minDistance.toFixed(2));
	} else {
		console.log("No snap points found within tolerance");
	}

	return closestPoint ? { point: closestPoint, type: snapType, distance: minDistance } : null;
}
// Helper function to find the closest vertex to a click point (keep original for compatibility)
function findClosestVertex(clickX, clickY, vertices, tolerance = getSnapToleranceInWorldUnits()) {
	let closestVertex = null;
	let minDistance = tolerance;

	vertices.forEach((vertex, index) => {
		const distance = Math.sqrt(Math.pow(clickX - vertex.x, 2) + Math.pow(clickY - vertex.y, 2));
		if (distance < minDistance) {
			minDistance = distance;
			closestVertex = { ...vertex, index: index };
		}
	});

	return closestVertex;
}
// Helper function to create a path between two vertices
// Now properly handles polygons as closed shapes
function createPathBetweenVertices(vertices, startVertex, endVertex, isPolygon = false) {
	const startIndex = startVertex.index;
	const endIndex = endVertex.index;

	if (startIndex === endIndex) {
		return [startVertex];
	}

	let pathVertices = [];

	if (!isPolygon) {
		// For open polylines/lines - original logic
		if (startIndex < endIndex) {
			for (let i = startIndex; i <= endIndex; i++) {
				pathVertices.push(vertices[i]);
			}
		} else {
			for (let i = startIndex; i >= endIndex; i--) {
				pathVertices.push(vertices[i]);
			}
		}
	} else {
		// For polygons - handle as closed loop
		const totalVertices = vertices.length;

		// Calculate forward path distance (going from start to end in forward direction)
		let forwardDistance;
		if (endIndex >= startIndex) {
			forwardDistance = endIndex - startIndex;
		} else {
			forwardDistance = totalVertices - startIndex + endIndex;
		}

		// Calculate backward path distance (going from start to end in backward direction)
		let backwardDistance;
		if (startIndex >= endIndex) {
			backwardDistance = startIndex - endIndex;
		} else {
			backwardDistance = startIndex + (totalVertices - endIndex);
		}

		// Choose the shorter path by default (can be overridden by reverse option)
		let useForwardPath = forwardDistance <= backwardDistance;

		if (useForwardPath) {
			// Forward path around the polygon
			let currentIndex = startIndex;
			while (true) {
				pathVertices.push(vertices[currentIndex]);
				if (currentIndex === endIndex) break;

				currentIndex = (currentIndex + 1) % totalVertices;

				// Safety check to prevent infinite loop
				if (pathVertices.length > totalVertices) break;
			}
		} else {
			// Backward path around the polygon
			let currentIndex = startIndex;
			while (true) {
				pathVertices.push(vertices[currentIndex]);
				if (currentIndex === endIndex) break;

				currentIndex = (currentIndex - 1 + totalVertices) % totalVertices;

				// Safety check to prevent infinite loop
				if (pathVertices.length > totalVertices) break;
			}
		}

		console.log("Polygon path created:", {
			startIndex: startIndex,
			endIndex: endIndex,
			forwardDistance: forwardDistance,
			backwardDistance: backwardDistance,
			usedForwardPath: useForwardPath,
			pathLength: pathVertices.length
		});
	}

	return pathVertices;
}
function toRadians(degrees) {
	return (degrees * Math.PI) / 180;
}
function toDegrees(radians) {
	return (radians * 180) / Math.PI;
}
function toBearing(degrees) {
	return (degrees + 90) % 360;
}
function generatePatternInPolygon(patternSettings) {
	if (!selectedPolygon || !patternStartPoint || !patternEndPoint || !patternReferencePoint) {
		console.error("Missing pattern data");
		return;
	}

	// Initialize points array if it's null
	if (points === null) {
		points = [];
	}

	console.log("Generating pattern in polygon. REF X:[" + patternReferencePoint.x + ", " + patternReferencePoint.y + "]");

	// Extract pattern settings
	const { blastName, burden, spacing, spacingOffset, collarZ, gradeZ, subdrill, angle, bearing, diameter, type, startNumber, nameTypeIsNumerical, useGradeZ, length, patternType } = patternSettings;

	// Calculate the orientation angle from start to end point
	const dx = patternEndPoint.x - patternStartPoint.x;
	const dy = patternEndPoint.y - patternStartPoint.y;

	// Calculate orientation (bearing from first to second point)
	// Corrected for world coordinates where +Y is North
	let orientation = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;

	console.log("Line bearing (Start to End):", orientation.toFixed(2) + "°");

	// Get polygon vertices - FIX: Convert from entity.data to vertices format
	const polygonVertices = selectedPolygon.data.map((point) => ({
		x: point.pointXLocation,
		y: point.pointYLocation
	}));

	console.log("Polygon vertices:", polygonVertices.length); // Debug log

	// Find polygon bounds
	let minX = Infinity,
		maxX = -Infinity,
		minY = Infinity,
		maxY = -Infinity;
	polygonVertices.forEach((vertex) => {
		const x = vertex.x;
		const y = vertex.y;
		minX = Math.min(minX, x);
		maxX = Math.max(maxX, x);
		minY = Math.min(minY, y);
		maxY = Math.max(maxY, y);
	});

	// Calculate polygon dimensions
	const polygonWidth = maxX - minX;
	const polygonHeight = maxY - minY;
	const polygonDiagonal = Math.sqrt(polygonWidth * polygonWidth + polygonHeight * polygonHeight);

	// Use the reference point as pattern origin
	const patternOriginX = patternReferencePoint.x;
	const patternOriginY = patternReferencePoint.y;
	console.log("Pattern in polygon. ORIGIN  X:[" + patternOriginX + ", " + patternOriginY + "]");

	// Store original points count to identify new holes
	const originalPointsCount = points.length;

	// Generate the pattern grid
	const rowBearing = orientation;
	const columnBearing = (orientation + 90) % 360;

	console.log("Row bearing:", rowBearing.toFixed(2) + "°");
	console.log("Column bearing:", columnBearing.toFixed(2) + "°");

	const rowRadians = toRadians(rowBearing);
	const columnRadians = toRadians(columnBearing);

	// Calculate grid extents based on polygon size
	const bufferFactor = 10.0;
	const maxDistance = polygonDiagonal * bufferFactor;

	// NEW APPROACH: Create a grid centered at (0,0) mathematically
	// Calculate number of rows and columns - make sure they're odd numbers to have a center point
	const numRows = Math.ceil(maxDistance / burden);
	const numCols = Math.ceil(maxDistance / spacing);

	const halfRows = Math.floor(numRows / 2);
	const halfCols = Math.floor(numCols / 2);

	// NEW: Find the grid point closest to (0,0)
	// In a perfect grid with odd numbers of rows/columns, this would be (0,0)
	// But with staggering or even numbers, we need to find it

	let centerGridX = 0;
	let centerGridY = 0;
	let minDistToCenter = Infinity;

	// Iterate through a small section of the grid around the center to find the point closest to (0,0)
	for (let i = -1; i <= 1; i++) {
		for (let k = -1; k <= 1; k++) {
			// Apply staggering if needed
			let colOffset = k * spacing;
			const isStaggered = patternType === "staggered" || (patternType === undefined && spacingOffset !== 0);
			if (isStaggered && i % 2 !== 0) {
				colOffset += spacingOffset * spacing;
			}

			// Calculate unrotated grid point
			const gridX = colOffset;
			const gridY = i * burden;

			// Calculate distance to origin
			const distToCenter = Math.sqrt(gridX * gridX + gridY * gridY);

			if (distToCenter < minDistToCenter) {
				minDistToCenter = distToCenter;
				centerGridX = gridX;
				centerGridY = gridY;
			}
		}
	}

	// Calculate grid-to-ref translation
	const gridXOffset = -centerGridX;
	const gridYOffset = -centerGridY;

	console.log(`Grid adjustment: Found center grid point at (${centerGridX.toFixed(2)}, ${centerGridY.toFixed(2)}), applying offset (${gridXOffset.toFixed(2)}, ${gridYOffset.toFixed(2)})`);

	console.log("Pattern parameters:", {
		origin: `${patternOriginX.toFixed(2)}, ${patternOriginY.toFixed(2)}`,
		rowBearing: rowBearing.toFixed(2) + "°",
		columnBearing: columnBearing.toFixed(2) + "°",
		polygonDiagonal: polygonDiagonal.toFixed(2),
		maxDistance: maxDistance.toFixed(2),
		numRows,
		numCols,
		patternType: patternType || (spacingOffset === 0 ? "square" : "staggered")
	});

	let currentLetter = "A";
	let holeCounter = startNumber;
	let refPointHolePlaced = false;

	// Generate grid of holes - using row/col indices directly for better naming control
	for (let i = -halfRows; i <= halfRows; i++) {
		const rowHoles = [];

		for (let k = -halfCols; k <= halfCols; k++) {
			// Apply staggering if needed
			let colOffset = k * spacing;
			const isStaggered = patternType === "staggered" || (patternType === undefined && spacingOffset !== 0);
			if (isStaggered && i % 2 !== 0) {
				colOffset += spacingOffset * spacing;
			}

			// Apply grid adjustment to center properly
			const adjustedColOffset = colOffset + gridXOffset;
			const adjustedRowOffset = i * burden + gridYOffset;

			// Calculate position using row and column bearings (same as original code)
			// Move along column direction (perpendicular to row)
			const yFromColumn = adjustedRowOffset * Math.sin(columnRadians);
			const xFromColumn = adjustedRowOffset * Math.cos(columnRadians);

			// Move along row direction
			const yFromRow = adjustedColOffset * Math.sin(rowRadians);
			const xFromRow = adjustedColOffset * Math.cos(rowRadians);

			// Combine both movements and translate to reference point
			const holeX = patternOriginX + xFromColumn + xFromRow;
			const holeY = patternOriginY + yFromColumn + yFromRow;

			// NEW: Check if this is the reference point hole
			const isRefPoint = Math.abs(adjustedColOffset) < 0.001 && Math.abs(adjustedRowOffset) < 0.001;
			if (isRefPoint) {
				refPointHolePlaced = true;
				console.log("Reference point hole will be placed at grid position");
			}

			// Check if hole is inside polygon
			if (isPointInPolygonVertices(holeX, holeY, polygonVertices)) {
				// Create hole ID based on naming convention - keeping same naming logic
				let holeID;
				if (nameTypeIsNumerical) {
					holeID = holeCounter++;
				} else {
					// For alphabetical naming, we need the proper row letter and column number
					// Adjust row index to be positive (0 to numRows)
					const rowIndex = i + halfRows;

					// Calculate row letter
					let rowLetter = "A";
					for (let l = 0; l < rowIndex; l++) {
						if (rowLetter === "Z") {
							rowLetter = "AA";
						} else if (rowLetter === "ZZ") {
							rowLetter = "AAA";
						} else {
							rowLetter = incrementLetter(rowLetter);
						}
					}

					// Column number is k + halfCols + 1 (to start at 1 not 0)
					const colNumber = k + halfCols + 1;

					holeID = rowLetter + colNumber;
				}

				// Add hole using existing addHole function - with true for useCustomHoleID
				addHole(true, useGradeZ, blastName, holeID, holeX, holeY, collarZ, gradeZ, diameter, type, length, subdrill, angle, bearing);

				rowHoles.push({ x: holeX, y: holeY, id: holeID });
			}
		}

		// We don't need to increment letters here - they're handled per-row in the ID generation
	}

	// Check if reference point hole was placed
	if (!refPointHolePlaced) {
		console.warn("No hole was placed at the reference point - grid adjustment failed");
	}

	const holesAdded = points.length - originalPointsCount;
	console.log(`Generated pattern in polygon with ${holesAdded} holes`);

	// Rest of the function remains unchanged
	if (holesAdded === 0) {
		Swal.fire({
			title: "No Holes Generated",
			text: "No holes were generated in the polygon. Please check your pattern settings and polygon shape.",
			icon: "warning",
			showCancelButton: true,
			showConfirmButton: false,
			confirmButtonText: "OK",
			cancelButtonText: "Close",
			customClass: {
				container: "custom-popup-container",
				popup: "custom-popup-container",
				title: "swal2-title",
				content: "swal2-content",
				confirmButton: "confirm",
				cancelButton: "cancel"
			}
		});
	} else {
		Swal.fire({
			title: "Pattern Generated",
			text: `Successfully generated ${holesAdded} holes in the polygon.`,
			icon: "success",
			showCancelButton: false,
			showConfirmButton: true,
			confirmButtonText: "OK",
			cancelButtonText: "Close",
			customClass: {
				container: "custom-popup-container",
				popup: "custom-popup-container",
				title: "swal2-title",
				content: "swal2-content",
				confirmButton: "confirm",
				cancelButton: "cancel"
			}
		});
	}
	// Update display
	drawData(points, selectedHole);
	saveHolesToLocalStorage(points);
}
// Function to show holes along line popup
function showHolesAlongLinePopup() {
	let blastNameValue = "LinePattern_" + Date.now();
	// Retrieve the last entered values from local storage
	let savedHolesAlongLineSettings = JSON.parse(localStorage.getItem("savedHolesAlongLineSettings")) || {};
	let lastValues = {
		blastName: savedHolesAlongLineSettings.blastName || blastNameValue,
		spacing: savedHolesAlongLineSettings.spacing || 3.0,
		collarZ: savedHolesAlongLineSettings.collarZ || 0,
		gradeZ: savedHolesAlongLineSettings.gradeZ || -10,
		subdrill: savedHolesAlongLineSettings.subdrill || 1,
		angle: savedHolesAlongLineSettings.angle || 0,
		bearing: savedHolesAlongLineSettings.bearing || 180,
		diameter: savedHolesAlongLineSettings.diameter || 115,
		type: savedHolesAlongLineSettings.type || "Production",
		startNumber: savedHolesAlongLineSettings.startNumber || 1,
		nameTypeIsNumerical: savedHolesAlongLineSettings.nameTypeIsNumerical !== undefined ? savedHolesAlongLineSettings.nameTypeIsNumerical : true,
		useGradeZ: savedHolesAlongLineSettings.useGradeZ !== undefined ? savedHolesAlongLineSettings.useGradeZ : true,
		useLineBearing: savedHolesAlongLineSettings.useLineBearing !== undefined ? savedHolesAlongLineSettings.useLineBearing : true,
		length: savedHolesAlongLineSettings.length || 10
	};

	// Calculate default length if using grade Z
	const defaultLength = lastValues.useGradeZ ? Math.abs((lastValues.collarZ - lastValues.gradeZ + lastValues.subdrill) / Math.cos(lastValues.angle * (Math.PI / 180))) : lastValues.length;

	// Calculate default grade if using length
	const defaultGradeZ = !lastValues.useGradeZ ? lastValues.collarZ - (lastValues.length - lastValues.subdrill) * Math.cos(lastValues.angle * (Math.PI / 180)) : lastValues.gradeZ;

	// Show loading spinner while the popup is created
	Swal.showLoading();

	// Update the bearing calculation in showHolesAlongLinePopup:
	// Calculate line bearing for display
	let lineBearing = 0;
	if (lineStartPoint && lineEndPoint) {
		const dx = lineEndPoint.x - lineStartPoint.x;
		const dy = lineEndPoint.y - lineStartPoint.y;
		// In world coordinates: North = 0°, East = 90°, South = 180°, West = 270°
		// Since +Y is North in world coordinates, we need to use atan2(dx, dy) not atan2(dy, dx)
		lineBearing = ((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360;
	}
	const perpBearing = (lineBearing + 90) % 360;

	// Create the SweetAlert popup
	Swal.fire({
		title: "Generate Holes Along Line",
		showCancelButton: true,
		confirmButtonText: "OK",
		cancelButtonText: "Cancel",
		html: `
        <div class="button-container-2col">
          <label class="labelWhite18" for="blastName">Blast Name</label>
          <input type="text3" id="blastName" name="blastName" placeholder="Blast Name" value="${lastValues.blastName}"/>
          <label class="labelWhite18" for="nameTypeIsNumerical">Numerical Names</label>
          <input type="checkbox" id="nameTypeIsNumerical" name="nameTypeIsNumerical" ${lastValues.nameTypeIsNumerical ? "checked" : ""}>
          <label class="labelWhite18" for="startNumber">Starting Hole Number</label>
          <input type="number3" id="startNumber" name="startNumber" placeholder="Start Number" value="${lastValues.startNumber}" step="1" min="1" max="9999" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="spacing">Spacing (m)</label>
          <input type="number3" id="spacing" name="spacing" placeholder="Spacing" value="${lastValues.spacing}" step="0.1" min="0.1" max="50" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="collarZ">Collar Elevation (m)</label>
          <input type="number3" id="collarZ" name="collarZ" placeholder="Collar Z" value="${lastValues.collarZ}" step="0.1" min="-1000" max="5000" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="useGradeZ">Use Grade Z</label>
          <input type="checkbox" id="useGradeZ" name="useGradeZ" ${lastValues.useGradeZ ? "checked" : ""}>
          <label class="labelWhite18" for="gradeZ">Grade Elevation (m)</label>
          <input type="number3" id="gradeZ" name="gradeZ" placeholder="Grade Z" value="${defaultGradeZ}" step="0.1" min="-1000" max="5000" inputmode="decimal" pattern="[0-9]*" ${!lastValues.useGradeZ ? "disabled" : ""}>
          <label class="labelWhite18" for="length">Length (m)</label>
          <input type="number3" id="length" name="length" placeholder="Length" value="${defaultLength}" step="0.1" min="0.1" max="1000" inputmode="decimal" pattern="[0-9]*" ${lastValues.useGradeZ ? "disabled" : ""}>
          <label class="labelWhite18" for="subdrill">Subdrill (m)</label>
          <input type="number3" id="subdrill" name="subdrill" placeholder="Subdrill" value="${lastValues.subdrill}" step="0.1" min="-50" max="50" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="angle">Hole Angle (° from vertical)</label>
          <input type="number3" id="angle" name="angle" placeholder="Angle" value="${lastValues.angle}" step="1" min="0" max="60" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="useLineBearing">Bearings are 90° to Row</label>
		<input type="checkbox" id="useLineBearing" name="useLineBearing" ${lastValues.useLineBearing ? "checked" : ""}>
		<label class="labelWhite18" for="bearing">Hole Bearing (°)</label>
		<input type="number3" id="bearing" name="bearing" placeholder="Bearing" value="${lastValues.bearing}" step="0.1" min="0" max="359.999" inputmode="decimal" pattern="[0-9]*" ${lastValues.useLineBearing ? "disabled" : ""}>
		<div class="labelWhite12" style="text-align: center;">Row Bearing: ${lineBearing.toFixed(1)}°</div>
		<div class="labelWhite12" style="text-align: right;">Directions: N=0°, E=90°, S=180°, W=270°</div>
		<div class="labelWhite12" style="text-align: center;">Perpendicular Bearing: ${perpBearing.toFixed(1)}°</div>
		<div></div>
          <label class="labelWhite18" for="diameter">Diameter (mm)</label>
          <input type="number3" id="diameter" name="diameter" placeholder="Diameter" value="${lastValues.diameter}" step="1" min="1" max="1000" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="type">Hole Type</label>
          <input type="text3" id="type" name="type" placeholder="Type" value="${lastValues.type}"/>
        </div>
      `,
		customClass: {
			container: "custom-popup-container",
			popup: "custom-popup-container",
			title: "swal2-title",
			content: "swal2-content",
			confirmButton: "confirm",
			cancelButton: "cancel"
		},
		didOpen: () => {
			// Add event listeners after the popup is opened
			const useGradeZCheckbox = document.getElementById("useGradeZ");
			const gradeZInput = document.getElementById("gradeZ");
			const lengthInput = document.getElementById("length");
			const collarZInput = document.getElementById("collarZ");
			const angleInput = document.getElementById("angle");
			const subdrillInput = document.getElementById("subdrill");
			const useLineBearingCheckbox = document.getElementById("useLineBearing");
			const bearingInput = document.getElementById("bearing");

			// Function to update fields based on checkbox state
			function updateFieldsBasedOnUseGradeZ() {
				const useGradeZ = useGradeZCheckbox.checked;

				// Enable/disable fields
				gradeZInput.disabled = !useGradeZ;
				lengthInput.disabled = useGradeZ;

				// Update calculations
				if (useGradeZ) {
					// Calculate length from grade
					const collarZ = parseFloat(collarZInput.value) || 0;
					const gradeZ = parseFloat(gradeZInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedLength = Math.abs((collarZ - gradeZ + subdrill) / Math.cos(angleRad));
					lengthInput.value = calculatedLength.toFixed(2);
				} else {
					// Calculate grade from length
					const collarZ = parseFloat(collarZInput.value) || 0;
					const length = parseFloat(lengthInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedGradeZ = collarZ - (length - subdrill) * Math.cos(angleRad);
					gradeZInput.value = calculatedGradeZ.toFixed(2);
				}
			}

			// Function to handle line bearing checkbox
			function updateBearingField() {
				bearingInput.disabled = useLineBearingCheckbox.checked;
			}

			// Add event listeners for changes
			useGradeZCheckbox.addEventListener("change", updateFieldsBasedOnUseGradeZ);
			gradeZInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			lengthInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			collarZInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			angleInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			subdrillInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			useLineBearingCheckbox.addEventListener("change", updateBearingField);

			// Initial update
			updateFieldsBasedOnUseGradeZ();
			updateBearingField();

			// Hide the loading spinner when the popup is ready
			Swal.hideLoading();
		}
	})
		.then((result) => {
			if (result.isConfirmed) {
				// Retrieve values from the input fields
				const blastName = document.getElementById("blastName").value;
				const nameTypeIsNumerical = document.getElementById("nameTypeIsNumerical").checked;
				const useGradeZ = document.getElementById("useGradeZ").checked;
				const useLineBearing = document.getElementById("useLineBearing").checked;
				const startNumber = parseInt(document.getElementById("startNumber").value);
				const spacing = parseFloat(document.getElementById("spacing").value);
				const collarZ = parseFloat(document.getElementById("collarZ").value);
				const gradeZ = parseFloat(document.getElementById("gradeZ").value);
				const length = parseFloat(document.getElementById("length").value);
				const subdrill = parseFloat(document.getElementById("subdrill").value);
				const angle = parseFloat(document.getElementById("angle").value);
				const bearing = parseFloat(document.getElementById("bearing").value);
				const diameter = parseFloat(document.getElementById("diameter").value);
				const type = document.getElementById("type").value;

				// Validation checks
				if (!blastName || blastName.trim() === "") {
					Swal.fire({
						title: "Invalid Blast Name",
						text: "Please enter a Blast Name.",
						icon: "error",
						customClass: {
							container: "custom-popup-container",
							popup: "custom-popup-container"
						}
					});
					return;
				}

				if (isNaN(spacing) || spacing <= 0) {
					Swal.fire({
						title: "Invalid Spacing",
						text: "Please enter a positive spacing value.",
						icon: "error",
						customClass: {
							container: "custom-popup-container",
							popup: "custom-popup-container"
						}
					});
					return;
				}

				// Save values to localStorage
				const newValues = {
					blastName: blastName,
					nameTypeIsNumerical: nameTypeIsNumerical,
					startNumber: startNumber,
					spacing: spacing,
					collarZ: collarZ,
					gradeZ: gradeZ,
					length: length,
					subdrill: subdrill,
					angle: angle,
					bearing: bearing,
					diameter: diameter,
					type: type,
					useGradeZ: useGradeZ,
					useLineBearing: useLineBearing
				};
				localStorage.setItem("savedHolesAlongLineSettings", JSON.stringify(newValues));

				// Generate the holes along the line
				generateHolesAlongLine({
					blastName: blastName,
					nameTypeIsNumerical: nameTypeIsNumerical,
					useGradeZ: useGradeZ,
					useLineBearing: useLineBearing,
					startNumber: startNumber,
					spacing: spacing,
					collarZ: collarZ,
					gradeZ: gradeZ,
					length: length,
					subdrill: subdrill,
					angle: angle,
					bearing: bearing - 90,
					diameter: diameter,
					type: type
				});
			}
		})
		.finally(() => {
			// Reset tool
			debouncedUpdateTreeView(); // Use debounced version
			holesAlongLineTool.checked = false;
			holesAlongLineTool.dispatchEvent(new Event("change"));
		});
}
// Update the generateHolesAlongLine function to correctly apply the bearing:
function generateHolesAlongLine(params) {
	if (!lineStartPoint || !lineEndPoint) {
		console.error("Missing line points");
		return;
	}

	console.log("Generating holes along line...");
	console.log("Start:", lineStartPoint);
	console.log("End:", lineEndPoint);
	console.log("Parameters:", params);

	// Initialize points array if it's null
	if (points === null) {
		points = [];
		console.log("Initialized empty points array");
	}

	// Calculate line length and direction
	const dx = lineEndPoint.x - lineStartPoint.x;
	const dy = lineEndPoint.y - lineStartPoint.y;
	const lineLength = Math.sqrt(dx * dx + dy * dy);
	const unitX = dx / lineLength;
	const unitY = dy / lineLength;

	// Calculate line bearing in world coordinates
	// In world coordinates: North = 0°, East = 90°, South = 180°, West = 270°
	// Since +Y is North in world coordinates, we need to use atan2(dx, dy) not atan2(dy, dx)
	const lineBearing = ((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360;
	console.log("Line bearing:", lineBearing.toFixed(2) + "°");

	// Generate holes along the line
	const numHoles = Math.floor(lineLength / params.spacing) + 1;
	const entityName = params.blastName || "LinePattern_" + Date.now();
	const originalPointsCount = points.length;

	// Calculate hole bearing based on user preference
	// If "Bearing are 90° to Row" is checked, set bearing perpendicular to line
	const holeBearing = params.useLineBearing ? (lineBearing + 90) % 360 : params.bearing;
	console.log("Using hole bearing:", holeBearing.toFixed(2) + "°");

	// Generate holes starting from the first point
	for (let i = 0; i < numHoles; i++) {
		const distanceAlongLine = i * params.spacing;
		const holeX = lineStartPoint.x + unitX * distanceAlongLine;
		const holeY = lineStartPoint.y + unitY * distanceAlongLine;

		// Calculate hole ID
		let holeID;
		if (params.nameTypeIsNumerical) {
			holeID = params.startNumber + i;
		} else {
			// Use alphabetical naming like A1, A2, etc.
			const letter = String.fromCharCode(65 + Math.floor(i / 26));
			const number = (i % 26) + 1;
			holeID = letter + number;
		}

		// Add hole to points array with correct bearing
		addHole(
			true, // useCustomHoleID - always true for pattern generation
			params.useGradeZ, // useGradeZ from params
			entityName,
			holeID, // holeID
			holeX, // startX
			holeY, // startY
			params.collarZ, // startZ
			params.gradeZ, // gradeZ
			params.diameter, // diameter
			params.type, // holeType
			params.length, // length
			params.subdrill, // subdrill
			params.angle, // angle
			holeBearing // bearing - use calculated bearing perpendicular to line if useLineBearing is true
		);
	}

	// Redraw
	debouncedUpdateTreeView(); // Use debounced version
	drawData(points, selectedHole);
	saveHolesToLocalStorage(points);

	const holesAdded = points.length - originalPointsCount;
	console.log("Generated " + holesAdded + " holes along line.");

	// Show success/failure message with custom styling
	if (holesAdded === 0) {
		Swal.fire({
			title: "No Holes Generated",
			text: "No holes were generated along the line. Please check your line and spacing settings.",
			icon: "warning",
			showCancelButton: true,
			showConfirmButton: false,
			confirmButtonText: "OK",
			cancelButtonText: "Close",
			customClass: {
				container: "custom-popup-container",
				popup: "custom-popup-container",
				title: "swal2-title",
				content: "swal2-content",
				confirmButton: "confirm",
				cancelButton: "cancel"
			}
		});
	} else {
		Swal.fire({
			title: "Line Pattern Generated",
			text: `Successfully generated ${holesAdded} holes along the line.`,
			icon: "success",
			showCancelButton: false,
			showConfirmButton: true,
			confirmButtonText: "OK",
			customClass: {
				container: "custom-popup-container",
				popup: "custom-popup-container",
				title: "swal2-title",
				content: "swal2-content",
				confirmButton: "confirm",
				cancelButton: "cancel"
			}
		});
	}
}
/**
 * Finds the KAD entity (line or poly) closest to a world coordinate click.
 * This function unifies the logic for selecting both open and closed polylines.
 * @param {number} worldX The x-coordinate of the click in world units.
 * @param {number} worldY The y-coordinate of the click in world units.
 * @returns {object|null} The selected entity object or null if nothing is found.
 */
function getClickedKADEntity(worldX, worldY) {
	if (allKADDrawingsMap.size === 0) return null;

	const tolerance = getSnapToleranceInWorldUnits();
	const candidateEntities = [];

	// Check each line or poly entity
	for (const [name, entity] of allKADDrawingsMap.entries()) {
		const points = entity.data;
		if (points.length < 1) continue;

		let minDistance = Infinity;
		let clickedVertex = null;
		let clickedSegment = null;
		const isClosed = entity.entityType === "poly";

		// For single-point entities (points, circles, text), only check the point
		if (entity.entityType === "point" || entity.entityType === "circle" || entity.entityType === "text") {
			const point = points[0]; // These entities have only one point
			const distance = Math.sqrt(Math.pow(worldX - point.pointXLocation, 2) + Math.pow(worldY - point.pointYLocation, 2));

			if (distance <= tolerance) {
				candidateEntities.push({
					entity: entity,
					minDistance: distance,
					selectionType: "point",
					clickedVertex: {
						index: 0,
						x: point.pointXLocation,
						y: point.pointYLocation,
						distance: distance
					},
					clickedSegment: null
				});
			}
			continue; // Skip to next entity
		}
		if (entity.entityType === "line") {
			// For lines, check vertices first (higher priority)
			for (let i = 0; i < points.length; i++) {
				const point = points[i];
				const distance = Math.sqrt(Math.pow(worldX - point.pointXLocation, 2) + Math.pow(worldY - point.pointYLocation, 2));
			}
		}
		if (entity.entityType === "poly") {
			// For polygons, check vertices first (higher priority)
			for (let i = 0; i < points.length; i++) {
				const point = points[i];
				const distance = Math.sqrt(Math.pow(worldX - point.pointXLocation, 2) + Math.pow(worldY - point.pointYLocation, 2));
			}
		}

		// If no vertex found, check segments
		if (!clickedVertex) {
			const numSegments = isClosed ? points.length : points.length - 1;
			for (let i = 0; i < numSegments; i++) {
				const p1 = points[i];
				const p2 = points[(i + 1) % points.length]; // Wraps around for closed polys

				const distance = pointToLineSegmentDistance(worldX, worldY, p1.pointXLocation, p1.pointYLocation, p2.pointXLocation, p2.pointYLocation);

				if (distance <= tolerance && distance < minDistance) {
					minDistance = distance;
					clickedSegment = {
						startIndex: i,
						endIndex: (i + 1) % points.length,
						startPoint: { x: p1.pointXLocation, y: p1.pointYLocation },
						endPoint: { x: p2.pointXLocation, y: p2.pointYLocation },
						distance: distance
					};
				}
			}
		}

		// If we found a vertex or segment, add this entity as a candidate
		if (clickedVertex || clickedSegment) {
			candidateEntities.push({
				entity: entity,
				minDistance: minDistance,
				selectionType: clickedVertex ? "vertex" : "segment",
				clickedVertex: clickedVertex,
				clickedSegment: clickedSegment
			});
		}
	}

	if (candidateEntities.length === 0) {
		console.log("No KAD entities found near click location");
		return null;
	}

	// Sort by distance (closest first)
	candidateEntities.sort((a, b) => a.minDistance - b.minDistance);
	const selected = candidateEntities[0];

	console.log("Found", candidateEntities.length, "entities near click.");
	console.log("Selected entity:", selected.entity.entityName, "by", selected.selectionType, "at distance:", selected.minDistance.toFixed(3));

	// Determine the snap point
	let snappedX = worldX;
	let snappedY = worldY;

	if (selected.clickedVertex) {
		snappedX = selected.clickedVertex.x;
		snappedY = selected.clickedVertex.y;
	} else if (selected.clickedSegment) {
		const seg = selected.clickedSegment;
		const closestPoint = getClosestPointOnLineSegment(worldX, worldY, seg.startPoint.x, seg.startPoint.y, seg.endPoint.x, seg.endPoint.y);
		snappedX = closestPoint.x;
		snappedY = closestPoint.y;
	}

	return {
		entity: selected.entity,
		clickedX: snappedX,
		clickedY: snappedY,
		selectionType: selected.selectionType,
		clickedVertex: selected.clickedVertex,
		clickedSegment: selected.clickedSegment
	};
}
// Helper function to get closest point on line segment (add if not exists)
function getClosestPointOnLineSegment(px, py, x1, y1, x2, y2) {
	const A = px - x1;
	const B = py - y1;
	const C = x2 - x1;
	const D = y2 - y1;

	const dot = A * C + B * D;
	const lenSq = C * C + D * D;

	if (lenSq === 0) {
		return { x: x1, y: y1 };
	}

	let t = dot / lenSq;
	t = Math.max(0, Math.min(1, t));

	return {
		x: x1 + t * C,
		y: y1 + t * D
	};
}
//Add this helper function for point-in-polygon detection
function isPointInPolygonVertices(x, y, vertices) {
	let inside = false;
	for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
		if (vertices[i].y > y !== vertices[j].y > y && x < ((vertices[j].x - vertices[i].x) * (y - vertices[i].y)) / (vertices[j].y - vertices[i].y) + vertices[i].x) {
			inside = !inside;
		}
	}
	return inside;
}
// Add this new function to detect clicked lines
function getClickedLine(worldX, worldY, tolerance = getSnapToleranceInWorldUnits()) {
	if (allKADDrawingsMap.size === 0) return null;

	// Check each line entity
	for (const entity of allKADDrawingsMap.values()) {
		const linePoints = entity.data;
		if (linePoints.length < 2) continue; // Need at least 2 points for a line

		// Check each line segment
		for (let i = 0; i < linePoints.length - 1; i++) {
			const p1 = linePoints[i];
			const p2 = linePoints[i + 1];

			// Calculate distance from click point to line segment
			const distance = pointToLineSegmentDistance(worldX, worldY, p1.pointXLocation, p1.pointYLocation, p2.pointXLocation, p2.pointYLocation);

			if (distance <= tolerance) {
				console.log("Found line:", entity);
				return {
					entity: entity,
					points: linePoints,
					segmentIndex: i,
					startPoint: { x: p1.pointXLocation, y: p1.pointYLocation },
					endPoint: { x: p2.pointXLocation, y: p2.pointYLocation }
				};
			}
		}
	}

	return null;
}
// Helper function for point-to-line-segment distance (add if not exists)
function pointToLineSegmentDistance(px, py, x1, y1, x2, y2) {
	const A = px - x1;
	const B = py - y1;
	const C = x2 - x1;
	const D = y2 - y1;

	const dot = A * C + B * D;
	const lenSq = C * C + D * D;

	if (lenSq === 0) {
		// Line segment is actually a point
		return Math.sqrt(A * A + B * B);
	}

	let t = dot / lenSq;

	// Clamp t to [0, 1] to stay on the line segment
	t = Math.max(0, Math.min(1, t));

	const projection_x = x1 + t * C;
	const projection_y = y1 + t * D;

	const dx = px - projection_x;
	const dy = py - projection_y;

	return Math.sqrt(dx * dx + dy * dy);
}

// Add this new function for the pattern in polygon popup
function showPatternInPolygonPopup() {
	let blastNameValue = "PolygonPattern_" + Date.now();
	// Retrieve the last entered values from local storage
	let savedPatternInPolygonSettings = JSON.parse(localStorage.getItem("savedPatternInPolygonSettings")) || {};
	let lastValues = {
		blastName: savedPatternInPolygonSettings.blastName || blastNameValue,
		burden: savedPatternInPolygonSettings.burden || 3.0,
		spacing: savedPatternInPolygonSettings.spacing || 3.3,
		spacingOffset: savedPatternInPolygonSettings.spacingOffset || 0.5,
		collarZ: savedPatternInPolygonSettings.collarZ || 0,
		gradeZ: savedPatternInPolygonSettings.gradeZ || -10,
		subdrill: savedPatternInPolygonSettings.subdrill || 1,
		angle: savedPatternInPolygonSettings.angle || 0,
		bearing: savedPatternInPolygonSettings.bearing || 180,
		diameter: savedPatternInPolygonSettings.diameter || 115,
		type: savedPatternInPolygonSettings.type || "Production",
		startNumber: savedPatternInPolygonSettings.startNumber || 1,
		nameTypeIsNumerical: savedPatternInPolygonSettings.nameTypeIsNumerical || true,
		useGradeZ: savedPatternInPolygonSettings.useGradeZ !== undefined ? savedPatternInPolygonSettings.useGradeZ : true,
		length: savedPatternInPolygonSettings.length || 10
	};

	// Calculate default length if using grade Z
	const defaultLength = lastValues.useGradeZ ? Math.abs((lastValues.collarZ - lastValues.gradeZ + lastValues.subdrill) / Math.cos(lastValues.angle * (Math.PI / 180))) : lastValues.length;

	// Calculate default grade if using length
	const defaultGradeZ = !lastValues.useGradeZ ? lastValues.collarZ - (lastValues.length - lastValues.subdrill) * Math.cos(lastValues.angle * (Math.PI / 180)) : lastValues.gradeZ;

	// Show loading spinner while the popup is created
	Swal.showLoading();

	// Create the SweetAlert popup
	Swal.fire({
		title: "Generate Pattern in Polygon",
		showCancelButton: true,
		confirmButtonText: "OK",
		cancelButtonText: "Cancel",
		html: `
        <div class="button-container-2col">
          <label class="labelWhite18" for="blastName">Blast Name</label>
          <input type="text3" id="blastName" name="blastName" placeholder="Blast Name" value="${lastValues.blastName}"/>
          <label class="labelWhite18" for="nameTypeIsNumerical">Numerical Names</label>
          <input type="checkbox" id="nameTypeIsNumerical" name="nameTypeIsNumerical" ${lastValues.nameTypeIsNumerical ? "checked" : ""}>
          <label class="labelWhite18" for="startNumber">Starting Hole Number</label>
          <input type="number3" id="startNumber" name="startNumber" placeholder="Start Number" value="${lastValues.startNumber}" step="1" min="1" max="9999" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="burden">Burden (m)</label>
          <input type="number3" id="burden" name="burden" placeholder="Burden" value="${lastValues.burden}" step="0.1" min="0.1" max="50" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="spacing">Spacing (m)</label>
          <input type="number3" id="spacing" name="spacing" placeholder="Spacing" value="${lastValues.spacing}" step="0.1" min="0.1" max="50" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="spacingOffset">Offset</label>
          <input type="number3" id="spacingOffset" name="spacingOffset" placeholder="SpacingOffset" value="${lastValues.spacingOffset}" step="0.1" min="-1.0" max="1.0" inputmode="decimal" pattern="[0-9]*"/>
          <div class="labelWhite12" id="infolabel1" name="infolabel1">Offset Information: </div> 
          <div class="labelWhite12" id="infolabel2" name="infolabel2">Staggered = -0.5 or 0.5, Square = -1, 0, 1</div>
          <label class="labelWhite18" for="collarZ">Collar Elevation (m)</label>
          <input type="number3" id="collarZ" name="collarZ" placeholder="Collar Z" value="${lastValues.collarZ}" step="0.1" min="-1000" max="5000" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="useGradeZ">Use Grade Z</label>
          <input type="checkbox" id="useGradeZ" name="useGradeZ" ${lastValues.useGradeZ ? "checked" : ""}>
          <label class="labelWhite18" for="gradeZ">Grade Elevation (m)</label>
          <input type="number3" id="gradeZ" name="gradeZ" placeholder="Grade Z" value="${defaultGradeZ}" step="0.1" min="-1000" max="5000" inputmode="decimal" pattern="[0-9]*" ${!lastValues.useGradeZ ? "disabled" : ""}>
          <label class="labelWhite18" for="length">Length (m)</label>
          <input type="number3" id="length" name="length" placeholder="Length" value="${defaultLength}" step="0.1" min="0.1" max="1000" inputmode="decimal" pattern="[0-9]*" ${lastValues.useGradeZ ? "disabled" : ""}>
          <label class="labelWhite18" for="subdrill">Subdrill (m)</label>
          <input type="number3" id="subdrill" name="subdrill" placeholder="Subdrill" value="${lastValues.subdrill}" step="0.1" min="-50" max="50" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="angle">Hole Angle (° from vertical)</label>
          <input type="number3" id="angle" name="angle" placeholder="Angle" value="${lastValues.angle}" step="1" min="0" max="60" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="bearing">Hole Bearing (°)</label>
          <input type="number3" id="bearing" name="bearing" placeholder="Bearing" value="${lastValues.bearing}" step="0.1" min="0" max="359.999" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="diameter">Diameter (mm)</label>
          <input type="number3" id="diameter" name="diameter" placeholder="Diameter" value="${lastValues.diameter}" step="1" min="1" max="1000" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="type">Hole Type</label>
          <input type="text3" id="type" name="type" placeholder="Type" value="${lastValues.type}"/>
        </div>
      `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		},
		didOpen: () => {
			// Add event listeners after the popup is opened
			const useGradeZCheckbox = document.getElementById("useGradeZ");
			const gradeZInput = document.getElementById("gradeZ");
			const lengthInput = document.getElementById("length");
			const collarZInput = document.getElementById("collarZ");
			const angleInput = document.getElementById("angle");
			const subdrillInput = document.getElementById("subdrill");

			// Function to update fields based on checkbox state
			function updateFieldsBasedOnUseGradeZ() {
				const useGradeZ = useGradeZCheckbox.checked;

				// Enable/disable fields
				gradeZInput.disabled = !useGradeZ;
				lengthInput.disabled = useGradeZ;

				// Update calculations
				if (useGradeZ) {
					// Calculate length from grade
					const collarZ = parseFloat(collarZInput.value) || 0;
					const gradeZ = parseFloat(gradeZInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedLength = Math.abs((collarZ - gradeZ + subdrill) / Math.cos(angleRad));
					lengthInput.value = calculatedLength.toFixed(2);
				} else {
					// Calculate grade from length
					const collarZ = parseFloat(collarZInput.value) || 0;
					const length = parseFloat(lengthInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedGradeZ = collarZ - (length - subdrill) * Math.cos(angleRad);
					gradeZInput.value = calculatedGradeZ.toFixed(2);
				}
			}

			// Add event listeners for changes
			useGradeZCheckbox.addEventListener("change", updateFieldsBasedOnUseGradeZ);
			gradeZInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			lengthInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			collarZInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			angleInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			subdrillInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);

			// Initial update
			updateFieldsBasedOnUseGradeZ();
		}
	})
		.then((result) => {
			if (result.isConfirmed) {
				// Retrieve values from the input fields
				const blastName = document.getElementById("blastName").value;
				const nameTypeIsNumerical = document.getElementById("nameTypeIsNumerical").checked;
				const useGradeZ = document.getElementById("useGradeZ").checked;
				const startNumber = parseInt(document.getElementById("startNumber").value);
				const burden = parseFloat(document.getElementById("burden").value);
				const spacing = parseFloat(document.getElementById("spacing").value);
				const spacingOffset = parseFloat(document.getElementById("spacingOffset").value);
				const collarZ = parseFloat(document.getElementById("collarZ").value);
				const gradeZ = parseFloat(document.getElementById("gradeZ").value);
				const length = parseFloat(document.getElementById("length").value);
				const subdrill = parseFloat(document.getElementById("subdrill").value);
				const angle = parseFloat(document.getElementById("angle").value);
				const bearing = parseFloat(document.getElementById("bearing").value);
				const diameter = parseFloat(document.getElementById("diameter").value);
				const type = document.getElementById("type").value;

				// Validation checks
				if (!blastName || blastName.trim() === "") {
					Swal.fire({
						title: "Invalid Blast Name",
						text: "Please enter a Blast Name.",
						icon: "error"
					});
					return;
				}

				if (isNaN(spacingOffset) || spacingOffset < -1 || spacingOffset > 1) {
					Swal.fire({
						title: "Invalid Offset",
						text: "Please enter an offset between -1 and 1.",
						icon: "error"
					});
					return;
				}

				if (isNaN(burden) || burden < 0.1 || burden > 50) {
					Swal.fire({
						title: "Invalid Burden",
						text: "Please enter burden between 0.1 and 50 meters.",
						icon: "error"
					});
					return;
				}

				if (isNaN(spacing) || spacing < 0.1 || spacing > 50) {
					Swal.fire({
						title: "Invalid Spacing",
						text: "Please enter spacing between 0.1 and 50 meters.",
						icon: "error"
					});
					return;
				}

				// Save values to localStorage
				const newValues = {
					blastName: blastName,
					nameTypeIsNumerical: nameTypeIsNumerical,
					startNumber: startNumber,
					burden: burden,
					spacing: spacing,
					spacingOffset: spacingOffset,
					collarZ: collarZ,
					gradeZ: gradeZ,
					length: length,
					subdrill: subdrill,
					angle: angle,
					bearing: bearing,
					diameter: diameter,
					type: type,
					useGradeZ: useGradeZ
				};
				localStorage.setItem("savedPatternInPolygonSettings", JSON.stringify(newValues));

				// Initialize points array if it's null
				if (points === null) {
					points = [];
				}

				// Generate the pattern
				generatePatternInPolygon({
					blastName: blastName,
					nameTypeIsNumerical: nameTypeIsNumerical,
					useGradeZ: useGradeZ,
					startNumber: startNumber,
					burden: burden,
					spacing: spacing,
					spacingOffset: spacingOffset,
					collarZ: collarZ,
					gradeZ: gradeZ,
					length: length,
					subdrill: subdrill,
					angle: angle,
					bearing: bearing,
					diameter: diameter,
					type: type,
					patternType: spacingOffset === 0 ? "square" : "staggered"
				});
			}
		})
		.finally(() => {
			// Hide the loading spinner when the popup is closed
			Swal.hideLoading();
			debouncedUpdateTreeView(); // Use debounced version
			// Reset tool
			patternInPolygonTool.checked = false;
			patternInPolygonTool.dispatchEvent(new Event("change"));
		});
}
function drawPatternInPolygonVisual() {
	if (!isPatternInPolygonActive) return;

	// Draw selected polygon outline in bright color
	if (selectedPolygon) {
		ctx.strokeStyle = "#00FF00"; // Bright green
		ctx.lineWidth = 3;
		ctx.setLineDash([]);

		const polygonPoints = selectedPolygon.data; // ← Just use .data, not .points || .data
		if (polygonPoints && polygonPoints.length > 0) {
			ctx.beginPath();
			polygonPoints.forEach((point, index) => {
				const x = point.pointXLocation || point.x;
				const y = point.pointYLocation || point.y;
				const [canvasX, canvasY] = worldToCanvas(x, y);

				if (index === 0) {
					ctx.moveTo(canvasX, canvasY);
				} else {
					ctx.lineTo(canvasX, canvasY);
				}
			});
			ctx.closePath();
			ctx.stroke();

			// Draw vertices as small circles
			polygonPoints.forEach((point) => {
				const x = point.pointXLocation || point.x;
				const y = point.pointYLocation || point.y;
				const [canvasX, canvasY] = worldToCanvas(x, y);
				ctx.fillStyle = "#FF0000";
				ctx.beginPath();
				ctx.arc(canvasX, canvasY, 4, 0, 2 * Math.PI);
				ctx.fill();
			});
		}
	}

	// Draw start point (bright green)
	if (patternStartPoint) {
		const [startX, startY] = worldToCanvas(patternStartPoint.x, patternStartPoint.y);
		ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
		ctx.beginPath();
		ctx.arc(startX, startY, 6, 0, 2 * Math.PI);
		ctx.fill();

		// Add label
		ctx.fillStyle = strokeColor; // Use strokeColor instead of hardcoded color
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.fillText("START", startX + 12, startY - 8);
		// Draw interactive preview line to mouse cursor when start point is set but end point isn't
		if (!patternEndPoint) {
			ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
			ctx.lineWidth = 1;
			ctx.setLineDash([5, 5]);
			ctx.beginPath();
			ctx.moveTo(startX, startY);
			ctx.lineTo(currentMouseCanvasX, currentMouseCanvasY);
			ctx.stroke();
			ctx.setLineDash([]);
			// Show preview distance
			const dx = currentMouseWorldX - patternStartPoint.x;
			const dy = currentMouseWorldY - patternStartPoint.y;
			const previewLength = Math.sqrt(dx * dx + dy * dy);

			const midX = (startX + currentMouseCanvasX) / 2;
			const midY = (startY + currentMouseCanvasY) / 2;

			//const [startX, startY] = worldToCanvas(patternStartPoint.x, patternStartPoint.y);
			const [mouseX, mouseY] = [currentMouseCanvasX, currentMouseCanvasY];

			// Draw preview line (already in your code)
			// ...
			const lineLength = Math.sqrt(dx * dx + dy * dy);

			if (lineLength > 5) {
				const midX = (startX + currentMouseCanvasX) / 2;
				const midY = (startY + currentMouseCanvasY) / 2;

				// Normalized line direction vector
				const dirX = dx / lineLength;
				const dirY = -dy / lineLength;

				// Perpendicular vector (-90° from line direction)
				const perpX = dirY;
				const perpY = -dirX;

				const arrowLength = 50;
				const arrowWidth = 24;
				const arrowOffset = 40;

				// Base point of the arrow (center of base)
				const baseX = midX + perpX * arrowOffset;
				const baseY = midY + perpY * arrowOffset;

				// Tip of the arrow (move further left)
				const tipX = baseX + perpX * arrowLength;
				const tipY = baseY + perpY * arrowLength;

				// Perpendicular to arrow direction (same as line dir!)
				const sideX = dirX * (arrowWidth / 2);
				const sideY = dirY * (arrowWidth / 2);

				// Base left/right points
				const leftX = baseX + sideX;
				const leftY = baseY + sideY;
				const rightX = baseX - sideX;
				const rightY = baseY - sideY;

				// Draw arrow
				ctx.beginPath();
				ctx.moveTo(tipX, tipY); // Tip
				ctx.lineTo(leftX, leftY); // Left corner of base
				ctx.lineTo(rightX, rightY); // Right corner of base
				ctx.closePath();

				ctx.fillStyle = "#00ff00";
				ctx.globalAlpha = 0.3;
				ctx.fill();
				ctx.lineWidth = 2;
				ctx.strokeStyle = "#009900";
				ctx.globalAlpha = 1.0;
				ctx.stroke();
			}

			ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
			ctx.fillRect(midX - 30, midY - 15, 60, 20);
			ctx.strokeStyle = strokeColor;
			ctx.lineWidth = 1;
			ctx.strokeRect(midX - 30, midY - 15, 60, 20);

			ctx.fillStyle = strokeColor;
			ctx.font = "12px Roboto";
			ctx.fontWeight = "bold";
			ctx.textAlign = "center";
			ctx.fillText(previewLength.toFixed(2) + "m", midX, midY);
			ctx.textAlign = "left";
		}
	}

	// Draw end point (bright red)
	if (patternEndPoint) {
		const [endX, endY] = worldToCanvas(patternEndPoint.x, patternEndPoint.y);
		ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
		ctx.beginPath();
		ctx.arc(endX, endY, 6, 0, 2 * Math.PI);
		ctx.fill();

		// Add label
		ctx.fillStyle = strokeColor; // Use strokeColor instead of hardcoded color
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.fillText("END", endX + 12, endY - 8);
	}

	// Draw reference point (magenta)
	if (patternReferencePoint) {
		const [refX, refY] = worldToCanvas(patternReferencePoint.x, patternReferencePoint.y);
		ctx.fillStyle = "rgba(255, 0, 255, 0.6)";
		ctx.beginPath();
		ctx.arc(refX, refY, 6, 0, 2 * Math.PI);
		ctx.fill();

		// Add label
		ctx.fillStyle = strokeColor; // Use strokeColor instead of hardcoded color
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.fillText("REF", refX + 12, refY - 8);
	}

	// Draw line from start to end to show spacing direction
	if (patternStartPoint && patternEndPoint) {
		const [startX, startY] = worldToCanvas(patternStartPoint.x, patternStartPoint.y);
		const [endX, endY] = worldToCanvas(patternEndPoint.x, patternEndPoint.y);

		// Draw the main line
		ctx.strokeStyle = "rgba(0, 255, 0, 0.8)";
		ctx.lineWidth = 1;
		ctx.setLineDash([10, 5]);
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(endX, endY);
		ctx.stroke();
		ctx.setLineDash([]);

		// Calculate and display line length
		const dx = patternEndPoint.x - patternStartPoint.x;
		const dy = patternEndPoint.y - patternStartPoint.y;
		const lineLength = Math.sqrt(dx * dx + dy * dy);

		// Display length at midpoint of line
		const midX = (startX + endX) / 2;
		const midY = (startY + endY) / 2;

		ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
		ctx.fillRect(midX - 30, midY - 15, 60, 20);
		ctx.strokeStyle = strokeColor;
		ctx.lineWidth = 1;
		ctx.strokeRect(midX - 30, midY - 15, 60, 20);

		ctx.fillStyle = strokeColor;
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.textAlign = "center";
		ctx.fillText(lineLength.toFixed(2) + "m", midX, midY);
		ctx.textAlign = "left"; // Reset text alignment
	}

	// Show snap preview when hovering (if mouse position is available)
	// This would need mouse tracking which could be added as an enhancement
}
// Add this function to draw polyline selection visuals
function drawPatternOnPolylineVisual() {
	if (!isHolesAlongPolyLineActive) return;

	// Add safety checks
	if (!selectedPolyline || !selectedPolyline.vertices || !Array.isArray(selectedPolyline.vertices)) {
		console.log("Can't draw along Polyline as there is no selectedPolyline, vertices or array");
		return;
	}

	// Draw selected polyline in bright color
	if (selectedPolyline) {
		ctx.strokeStyle = "#00FF00"; // Bright green
		ctx.lineWidth = 3;
		ctx.setLineDash([]);

		ctx.beginPath();
		selectedPolyline.vertices.forEach((vertex, index) => {
			const [canvasX, canvasY] = worldToCanvas(vertex.x, vertex.y);
			if (index === 0) {
				ctx.moveTo(canvasX, canvasY);
			} else {
				ctx.lineTo(canvasX, canvasY);
			}
		});

		// Close polygon if it's a polygon type
		if (selectedPolyline.type === "polygon") {
			ctx.closePath();
		}

		ctx.stroke();

		// Draw vertices as small circles
		selectedPolyline.vertices.forEach((vertex) => {
			const [canvasX, canvasY] = worldToCanvas(vertex.x, vertex.y);
			ctx.fillStyle = "#FF0000";
			ctx.beginPath();
			ctx.arc(canvasX, canvasY, 4, 0, 2 * Math.PI);
			ctx.fill();
		});
	}

	// Draw start point (bright blue)
	if (polylineStartPoint) {
		const [startX, startY] = worldToCanvas(polylineStartPoint.x, polylineStartPoint.y);
		ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
		ctx.beginPath();
		ctx.arc(startX, startY, 3, 0, 2 * Math.PI);
		ctx.fill();

		// Add label
		ctx.fillStyle = "rgba(0, 255, 0, 1)";
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.fillText("START", startX + 12, startY - 8);
	}

	// Draw end point (bright red)
	if (polylineEndPoint) {
		const [endX, endY] = worldToCanvas(polylineEndPoint.x, polylineEndPoint.y);
		ctx.fillStyle = "rgba(255, 0, 0, 0.6)";
		ctx.beginPath();
		ctx.arc(endX, endY, 3, 0, 2 * Math.PI);
		ctx.fill();

		// Add label
		ctx.fillStyle = "rgba(255, 0, 0,1)";
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.fillText("END", endX + 12, endY - 8);
	}
}
// Function to draw KAD polygon selection visuals
function drawKADPolygonSelectionVisuals() {
	if (!selectedKADPolygon || !isSelectionPointerActive) return;

	// Draw selected polygon outline in bright color
	ctx.strokeStyle = "#00FF00"; // Bright green like pattern tool
	ctx.lineWidth = 3;
	ctx.setLineDash([]);

	const polygonPoints = selectedKADPolygon.points || selectedKADPolygon.data;
	if (polygonPoints && polygonPoints.length > 0) {
		ctx.beginPath();
		polygonPoints.forEach((point, index) => {
			const x = point.pointXLocation || point.x;
			const y = point.pointYLocation || point.y;
			const [canvasX, canvasY] = worldToCanvas(x, y);

			if (index === 0) {
				ctx.moveTo(canvasX, canvasY);
			} else {
				ctx.lineTo(canvasX, canvasY);
			}
		});
		ctx.closePath();
		ctx.stroke();

		// Draw vertices as small red circles like pattern tool
		polygonPoints.forEach((point) => {
			const x = point.pointXLocation || point.x;
			const y = point.pointYLocation || point.y;
			const [canvasX, canvasY] = worldToCanvas(x, y);
			ctx.fillStyle = "#FF0000";
			ctx.beginPath();
			ctx.arc(canvasX, canvasY, 4, 0, 2 * Math.PI);
			ctx.fill();
		});
	}
}
// NEW: Helper function to calculate exact text dimensions (matches drawKADTexts)
function calculateTextDimensions(text) {
	if (!text) return { width: 0, height: 0, lines: [] };

	// Set the same font as drawKADTexts
	ctx.font = parseInt(currentFontSize - 2) + "px Roboto";

	const lines = text.split("\n");
	const lineHeight = currentFontSize; // Same as drawMultilineText

	// Calculate the width of the widest line (same logic as drawMultilineText)
	let maxWidth = 0;
	for (let i = 0; i < lines.length; i++) {
		const lineWidth = ctx.measureText(lines[i]).width;
		if (lineWidth > maxWidth) {
			maxWidth = lineWidth;
		}
	}

	const totalHeight = lines.length * lineHeight;

	return {
		width: maxWidth,
		height: totalHeight,
		lineHeight: lineHeight,
		lines: lines,
		numLines: lines.length
	};
}
// ENHANCED: Fix segment highlighting to show only the clicked segment
function drawKADSelectionVisuals() {
	if (!selectedKADObject || !isSelectionPointerActive) return;

	const tolerance = 5;
	const entity = getEntityFromKADObject(selectedKADObject);
	if (!entity) return;

	// Common selection styling
	ctx.strokeStyle = "#00FF00"; // Bright green
	ctx.lineWidth = 3;
	ctx.setLineDash([]);
	ctx.fillStyle = "#FF0000"; // Red for vertices/points

	switch (selectedKADObject.entityType) {
		case "point":
			// Highlight the selected point with extra emphasis
			const [px, py] = worldToCanvas(selectedKADObject.pointXLocation, selectedKADObject.pointYLocation);

			ctx.strokeStyle = "#FFFF00"; // Yellow for selected element
			ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.arc(px, py, tolerance + 3, 0, 2 * Math.PI);
			ctx.stroke();

			// Draw all other points in the entity with standard highlighting
			ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
			ctx.lineWidth = 2;
			entity.data.forEach((point, index) => {
				if (index !== selectedKADObject.elementIndex) {
					const [opx, opy] = worldToCanvas(point.pointXLocation, point.pointYLocation);
					ctx.beginPath();
					ctx.arc(opx, opy, tolerance, 0, 2 * Math.PI);
					ctx.stroke();
				}
			});
			break;

		case "line":
			// Draw ALL segments first with standard highlighting
			entity.data.forEach((point, index) => {
				if (index > 0) {
					const [prevX, prevY] = worldToCanvas(entity.data[index - 1].pointXLocation, entity.data[index - 1].pointYLocation);
					const [x, y] = worldToCanvas(point.pointXLocation, point.pointYLocation);

					ctx.strokeStyle = "#00FF00"; // Green for non-selected segments
					ctx.lineWidth = 2;
					ctx.beginPath();
					ctx.moveTo(prevX, prevY);
					ctx.lineTo(x, y);
					ctx.stroke();
				}
			});

			// Then highlight ONLY the selected segment
			if (selectedKADObject.selectionType === "segment") {
				const segmentIndex = selectedKADObject.segmentIndex;
				if (segmentIndex < entity.data.length - 1) {
					const point1 = entity.data[segmentIndex];
					const point2 = entity.data[segmentIndex + 1];
					const [x1, y1] = worldToCanvas(point1.pointXLocation, point1.pointYLocation);
					const [x2, y2] = worldToCanvas(point2.pointXLocation, point2.pointYLocation);

					ctx.strokeStyle = "#FFFF00"; // Yellow for selected segment
					ctx.lineWidth = 5;
					ctx.beginPath();
					ctx.moveTo(x1, y1);
					ctx.lineTo(x2, y2);
					ctx.stroke();
				}
			}

			// Draw all vertices
			entity.data.forEach((point) => {
				const [x, y] = worldToCanvas(point.pointXLocation, point.pointYLocation);
				ctx.fillStyle = "#FF0000";
				ctx.beginPath();
				ctx.arc(x, y, 4, 0, 2 * Math.PI);
				ctx.fill();
			});
			break;

		case "poly":
			const polygonPoints = entity.data;

			// Draw ALL segments first with standard highlighting
			for (let i = 0; i < polygonPoints.length; i++) {
				const point1 = polygonPoints[i];
				const point2 = polygonPoints[(i + 1) % polygonPoints.length];
				const [x1, y1] = worldToCanvas(point1.pointXLocation, point1.pointYLocation);
				const [x2, y2] = worldToCanvas(point2.pointXLocation, point2.pointYLocation);

				ctx.strokeStyle = "#00FF00"; // Green for non-selected segments
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(x1, y1);
				ctx.lineTo(x2, y2);
				ctx.stroke();
			}

			// Then highlight ONLY the selected segment
			if (selectedKADObject.selectionType === "segment") {
				const segmentIndex = selectedKADObject.segmentIndex;
				const point1 = polygonPoints[segmentIndex];
				const point2 = polygonPoints[(segmentIndex + 1) % polygonPoints.length];
				const [x1, y1] = worldToCanvas(point1.pointXLocation, point1.pointYLocation);
				const [x2, y2] = worldToCanvas(point2.pointXLocation, point2.pointYLocation);

				ctx.strokeStyle = "#FFFF00"; // Yellow for selected segment
				ctx.lineWidth = 5;
				ctx.beginPath();
				ctx.moveTo(x1, y1);
				ctx.lineTo(x2, y2);
				ctx.stroke();
			}

			// Draw all vertices
			polygonPoints.forEach((point) => {
				const [x, y] = worldToCanvas(point.pointXLocation, point.pointYLocation);
				ctx.fillStyle = "#FF0000";
				ctx.beginPath();
				ctx.arc(x, y, 4, 0, 2 * Math.PI);
				ctx.fill();
			});
			break;

		case "circle":
			// [Circle highlighting code remains the same]
			const [cx, cy] = worldToCanvas(selectedKADObject.pointXLocation, selectedKADObject.pointYLocation);

			ctx.strokeStyle = "#FFFF00"; // Yellow for selected element
			ctx.lineWidth = 4;
			const radiusCanvas = selectedKADObject.radius * currentScale;
			ctx.beginPath();
			ctx.arc(cx, cy, radiusCanvas, 0, 2 * Math.PI);
			ctx.stroke();

			ctx.fillStyle = "#FF0000";
			ctx.beginPath();
			ctx.arc(cx, cy, 4, 0, 2 * Math.PI);
			ctx.fill();

			// Other circles...
			ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
			ctx.lineWidth = 2;
			entity.data.forEach((circle, index) => {
				if (index !== selectedKADObject.elementIndex) {
					const [ocx, ocy] = worldToCanvas(circle.pointXLocation, circle.pointYLocation);
					const oradiusCanvas = circle.radius * currentScale;
					ctx.beginPath();
					ctx.arc(ocx, ocy, oradiusCanvas + 5, 0, 2 * Math.PI);
					ctx.stroke();
				}
			});
			break;

		case "text":
			// [Text highlighting code from previous fix]
			const [tx, ty] = worldToCanvas(selectedKADObject.pointXLocation, selectedKADObject.pointYLocation);
			const textDimensions = calculateTextDimensions(selectedKADObject.text || "Text");

			ctx.strokeStyle = "#FFFF00";
			ctx.lineWidth = 4;

			const rectX = tx - 5;
			const rectY = ty - textDimensions.lineHeight + 2;
			const rectWidth = textDimensions.width + 10;
			const rectHeight = textDimensions.height + 6;

			ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

			ctx.fillStyle = "#FF0000";
			ctx.beginPath();
			ctx.arc(tx, ty, 4, 0, 2 * Math.PI);
			ctx.fill();

			// Other text elements...
			ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
			ctx.lineWidth = 2;
			entity.data.forEach((textData, index) => {
				if (index !== selectedKADObject.elementIndex) {
					const [otx, oty] = worldToCanvas(textData.pointXLocation, textData.pointYLocation);
					const otherTextDimensions = calculateTextDimensions(textData.text || "Text");

					const otherRectX = otx - 5;
					const otherRectY = oty - otherTextDimensions.lineHeight + 2;
					const otherRectWidth = otherTextDimensions.width + 10;
					const otherRectHeight = otherTextDimensions.height + 6;

					ctx.strokeRect(otherRectX, otherRectY, otherRectWidth, otherRectHeight);
				}
			});
			break;
	}
}
function getEntityFromKADObject(kadObject) {
	// Everything is now in the unified map
	return allKADDrawingsMap.get(kadObject.entityName);
}
function drawHolesAlongLineVisuals() {
	// Only draw visuals if holes along line tool is active
	if (!isHolesAlongLineActive) return;

	// Draw start point (bright blue) when selected
	if (lineStartPoint) {
		const [startX, startY] = worldToCanvas(lineStartPoint.x, lineStartPoint.y);
		ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
		ctx.beginPath();
		ctx.arc(startX, startY, 5, 0, 2 * Math.PI);
		ctx.fill();

		// Add label
		ctx.fillStyle = "rgba(0, 255, 0, 1)";
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.fillText("START", startX + 10, startY - 10);

		// Draw interactive preview line to mouse cursor when start point is set but end point isn't
		if (!lineEndPoint && holesLineStep === 1) {
			ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
			ctx.lineWidth = 1;
			ctx.setLineDash([5, 5]);
			ctx.beginPath();
			ctx.moveTo(startX, startY);
			ctx.lineTo(currentMouseCanvasX, currentMouseCanvasY);
			ctx.stroke();
			ctx.setLineDash([]);

			// Show preview distance
			const dx = currentMouseWorldX - lineStartPoint.x;
			const dy = currentMouseWorldY - lineStartPoint.y;
			const previewLength = Math.sqrt(dx * dx + dy * dy);

			const midX = (startX + currentMouseCanvasX) / 2;
			const midY = (startY + currentMouseCanvasY) / 2;

			ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
			ctx.fillRect(midX - 30, midY - 15, 60, 20);
			ctx.strokeStyle = strokeColor;
			ctx.lineWidth = 1;
			ctx.strokeRect(midX - 30, midY - 15, 60, 20);

			ctx.fillStyle = strokeColor;
			ctx.font = "12px Roboto";
			ctx.fontWeight = "bold";
			ctx.textAlign = "center";
			ctx.fillText(previewLength.toFixed(2) + "m", midX, midY);
			ctx.textAlign = "left";
		}
	}

	// Draw end point (bright red/orange) when selected
	if (lineEndPoint) {
		const [endX, endY] = worldToCanvas(lineEndPoint.x, lineEndPoint.y);
		ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
		ctx.beginPath();
		ctx.arc(endX, endY, 5, 0, 2 * Math.PI);
		ctx.fill();

		// Add label
		ctx.fillStyle = "rgba(255, 0, 0, 1)";
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.fillText("END", endX + 10, endY - 10);
	}

	// Draw line connecting start and end points when both are selected
	if (lineStartPoint && lineEndPoint) {
		const [startX, startY] = worldToCanvas(lineStartPoint.x, lineStartPoint.y);
		const [endX, endY] = worldToCanvas(lineEndPoint.x, lineEndPoint.y);

		// Draw the main line
		ctx.strokeStyle = "rgba(0, 255, 0, 0.8)";
		ctx.lineWidth = 1;
		ctx.setLineDash([10, 5]);
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(endX, endY);
		ctx.stroke();
		ctx.setLineDash([]);

		// Calculate and display line length
		const dx = lineEndPoint.x - lineStartPoint.x;
		const dy = lineEndPoint.y - lineStartPoint.y;
		const lineLength = Math.sqrt(dx * dx + dy * dy);

		// Display length at midpoint of line
		const midX = (startX + endX) / 2;
		const midY = (startY + endY) / 2;

		ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
		ctx.fillRect(midX - 30, midY - 15, 60, 20);
		ctx.strokeStyle = strokeColor;
		ctx.lineWidth = 1;
		ctx.strokeRect(midX - 30, midY - 15, 60, 20);

		ctx.fillStyle = strokeColor;
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.textAlign = "center";
		ctx.fillText(lineLength.toFixed(2) + "m", midX, midY);
		ctx.textAlign = "left"; // Reset text alignment
	}
}
// Add this new function to generate holes along a polyline or polygon edge
function generateHolesAlongPolyline(params, vertices) {
	if (!vertices || vertices.length < 2) {
		console.error("Not enough vertices to generate holes");
		return;
	}

	console.log("Generating holes along polyline with", vertices.length, "vertices");
	console.log("Parameters:", params);

	// Initialize points array if it's null
	if (points === null) {
		points = [];
		// console.log("Initialized empty points array");
	}

	const entityName = params.blastName || "PolylinePattern_" + Date.now();
	const originalPointsCount = points.length;
	let holeCounter = params.startNumber || 1;
	let currentLetter = "A";

	// Calculate total length of the polyline for progress tracking
	let totalLength = 0;
	for (let i = 0; i < vertices.length - 1; i++) {
		const dx = vertices[i + 1].x - vertices[i].x;
		const dy = vertices[i + 1].y - vertices[i].y;
		totalLength += Math.sqrt(dx * dx + dy * dy);
	}

	// Process each segment of the polyline
	let accumulatedLength = 0;
	let nextHoleDistance = 0;

	for (let i = 0; i < vertices.length - 1; i++) {
		const startPoint = vertices[i];
		const endPoint = vertices[i + 1];

		// Calculate segment properties
		const dx = endPoint.x - startPoint.x;
		const dy = endPoint.y - startPoint.y;
		const segmentLength = Math.sqrt(dx * dx + dy * dy);
		const unitX = dx / segmentLength;
		const unitY = dy / segmentLength;

		// Calculate segment bearing in world coordinates
		// In world coordinates: North = 0°, East = 90°, South = 180°, West = 270°
		const segmentBearing = ((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360;

		// Calculate hole bearing based on user preference
		const holeBearing = params.useLineBearing ? (segmentBearing + 90) % 360 : params.bearing;

		// Place holes along this segment
		let distanceAlongSegment = nextHoleDistance;

		while (distanceAlongSegment < segmentLength) {
			// Calculate hole position
			const holeX = startPoint.x + unitX * distanceAlongSegment;
			const holeY = startPoint.y + unitY * distanceAlongSegment;

			// Calculate hole ID
			let holeID;
			if (params.nameTypeIsNumerical) {
				holeID = holeCounter++;
			} else {
				// Use alphabetical naming like A1, A2, etc.
				const number = holeCounter % 26 || 26;
				if (number === 1 && holeCounter > 1) {
					// Increment letter when we wrap around
					if (currentLetter === "Z") {
						currentLetter = "AA";
					} else if (currentLetter.endsWith("Z")) {
						currentLetter = currentLetter.substring(0, currentLetter.length - 1) + "AA";
					} else {
						currentLetter = String.fromCharCode(currentLetter.charCodeAt(currentLetter.length - 1) + 1);
					}
				}
				holeID = currentLetter + number;
				holeCounter++;
			}

			// Add hole
			addHole(
				true, // useCustomHoleID
				params.useGradeZ, // useGradeZ
				entityName,
				holeID,
				holeX,
				holeY,
				params.collarZ,
				params.gradeZ,
				params.diameter,
				params.type,
				params.length,
				params.subdrill,
				params.angle,
				holeBearing
			);

			// Move to next hole position
			distanceAlongSegment += params.spacing;
		}

		// Calculate remaining distance for the next segment
		nextHoleDistance = distanceAlongSegment - segmentLength;
		accumulatedLength += segmentLength;
	}

	// Redraw
	drawData(points, selectedHole);
	saveHolesToLocalStorage(points);

	const holesAdded = points.length - originalPointsCount;
	// console.log("Generated " + holesAdded + " holes along polyline");

	// Show success/failure message with custom styling
	if (holesAdded === 0) {
		Swal.fire({
			title: "No Holes Generated",
			text: "No holes were generated along the polyline. Please check your settings.",
			icon: "warning",
			showCancelButton: true,
			showConfirmButton: false,
			confirmButtonText: "OK",
			cancelButtonText: "Close",
			customClass: {
				container: "custom-popup-container",
				popup: "custom-popup-container",
				title: "swal2-title",
				content: "swal2-content",
				confirmButton: "confirm",
				cancelButton: "cancel"
			}
		});
	} else {
		Swal.fire({
			title: "Polyline Pattern Generated",
			text: `Successfully generated ${holesAdded} holes along the polyline.`,
			icon: "success",
			showCancelButton: false,
			showConfirmButton: true,
			confirmButtonText: "OK",
			customClass: {
				container: "custom-popup-container",
				popup: "custom-popup-container",
				title: "swal2-title",
				content: "swal2-content",
				confirmButton: "confirm",
				cancelButton: "cancel"
			}
		});
	}
}
// SHOW HOLES ALONG POLYLINE POPUP
// Add this function to show the popup for polyline hole generation
function showHolesAlongPolylinePopup(vertices) {
	let blastNameValue = "PolylinePattern_" + Date.now();
	// Retrieve the last entered values from local storage
	let savedHolesAlongPolylineSettings = JSON.parse(localStorage.getItem("savedHolesAlongPolylineSettings")) || {};
	let lastValues = {
		blastName: savedHolesAlongPolylineSettings.blastName || blastNameValue,
		spacing: savedHolesAlongPolylineSettings.spacing || 3.0,
		collarZ: savedHolesAlongPolylineSettings.collarZ || 0,
		gradeZ: savedHolesAlongPolylineSettings.gradeZ || -10,
		subdrill: savedHolesAlongPolylineSettings.subdrill || 1,
		angle: savedHolesAlongPolylineSettings.angle || 0,
		bearing: savedHolesAlongPolylineSettings.bearing || 180,
		diameter: savedHolesAlongPolylineSettings.diameter || 115,
		type: savedHolesAlongPolylineSettings.type || "Production",
		startNumber: savedHolesAlongPolylineSettings.startNumber || 1,
		nameTypeIsNumerical: savedHolesAlongPolylineSettings.nameTypeIsNumerical !== undefined ? savedHolesAlongPolylineSettings.nameTypeIsNumerical : true,
		useGradeZ: savedHolesAlongPolylineSettings.useGradeZ !== undefined ? savedHolesAlongPolylineSettings.useGradeZ : true,
		useLineBearing: savedHolesAlongPolylineSettings.useLineBearing !== undefined ? savedHolesAlongPolylineSettings.useLineBearing : true,
		length: savedHolesAlongPolylineSettings.length || 10,
		reverseDirection: savedHolesAlongPolylineSettings.reverseDirection !== undefined ? savedHolesAlongPolylineSettings.reverseDirection : false
	};

	// Calculate default length if using grade Z
	const defaultLength = lastValues.useGradeZ ? Math.abs((lastValues.collarZ - lastValues.gradeZ + lastValues.subdrill) / Math.cos(lastValues.angle * (Math.PI / 180))) : lastValues.length;

	// Calculate default grade if using length
	const defaultGradeZ = !lastValues.useGradeZ ? lastValues.collarZ - (lastValues.length - lastValues.subdrill) * Math.cos(lastValues.angle * (Math.PI / 180)) : lastValues.gradeZ;

	// Show loading spinner while the popup is created
	Swal.showLoading();

	// Create the SweetAlert popup
	Swal.fire({
		title: "Generate Holes Along Polyline",
		showCancelButton: true,
		confirmButtonText: "OK",
		cancelButtonText: "Cancel",
		html: `
        <div class="button-container-2col">
          <label class="labelWhite18" for="blastName">Blast Name</label>
          <input type="text3" id="blastName" placeholder="Blast Name" value="${lastValues.blastName}"/>
          <label class="labelWhite18" for="nameTypeIsNumerical">Numerical Names</label>
          <input type="checkbox" id="nameTypeIsNumerical" name="nameTypeIsNumerical" ${lastValues.nameTypeIsNumerical ? "checked" : ""}>
          <label class="labelWhite18" for="startNumber">Starting Hole Number</label>
          <input type="number3" id="startNumber" name="startNumber" placeholder="Start Number" value="${lastValues.startNumber}" step="1" min="1" max="9999" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="spacing">Spacing (m)</label>
          <input type="number3" id="spacing" name="spacing" placeholder="Spacing" value="${lastValues.spacing}" step="0.1" min="0.1" max="50" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="collarZ">Collar Elevation (m)</label>
          <input type="number3" id="collarZ" name="collarZ" placeholder="Collar Z" value="${lastValues.collarZ}" step="0.1" min="-1000" max="5000" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="useGradeZ">Use Grade Z</label>
          <input type="checkbox" id="useGradeZ" name="useGradeZ" ${lastValues.useGradeZ ? "checked" : ""}>
          <label class="labelWhite18" for="gradeZ">Grade Elevation (m)</label>
          <input type="number3" id="gradeZ" name="gradeZ" placeholder="Grade Z" value="${defaultGradeZ}" step="0.1" min="-1000" max="5000" inputmode="decimal" pattern="[0-9]*" ${!lastValues.useGradeZ ? "disabled" : ""}>
          <label class="labelWhite18" for="length">Length (m)</label>
          <input type="number3" id="length" name="length" placeholder="Length" value="${defaultLength}" step="0.1" min="0.1" max="1000" inputmode="decimal" pattern="[0-9]*" ${lastValues.useGradeZ ? "disabled" : ""}>
          <label class="labelWhite18" for="subdrill">Subdrill (m)</label>
          <input type="number3" id="subdrill" name="subdrill" placeholder="Subdrill" value="${lastValues.subdrill}" step="0.1" min="-50" max="50" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="angle">Hole Angle (° from vertical)</label>
          <input type="number3" id="angle" name="angle" placeholder="Angle" value="${lastValues.angle}" step="1" min="0" max="60" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="useLineBearing">Bearings are 90° to Segment</label>
          <input type="checkbox" id="useLineBearing" name="useLineBearing" ${lastValues.useLineBearing ? "checked" : ""}>
          <label class="labelWhite18" for="bearing">Hole Bearing (°)</label>
          <input type="number3" id="bearing" name="bearing" placeholder="Bearing" value="${lastValues.bearing}" step="0.1" min="0" max="359.999" inputmode="decimal" pattern="[0-9]*" ${lastValues.useLineBearing ? "disabled" : ""}>
          <div class="labelWhite12" style="text-align: center;">Selected ${vertices.length} points</div>
          <div class="labelWhite12" style="text-align: right;">Directions: N=0°, E=90°, S=180°, W=270°</div>
          <label class="labelWhite18" for="diameter">Diameter (mm)</label>
          <input type="number3" id="diameter" name="diameter" placeholder="Diameter" value="${lastValues.diameter}" step="1" min="1" max="1000" inputmode="decimal" pattern="[0-9]*"/>
          <label class="labelWhite18" for="type">Hole Type</label>
		  <input type="text3" id="type" name="type" placeholder="Type" value="${lastValues.type}"/>
          <label class="labelWhite18" for="reverseDirection">Reverse Direction</label>
          <input type="checkbox" id="reverseDirection" name="reverseDirection">
    	</div>
      `,
		customClass: {
			container: "custom-popup-container",
			popup: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		},
		didOpen: () => {
			// Add event listeners after the popup is opened
			const useGradeZCheckbox = document.getElementById("useGradeZ");
			const gradeZInput = document.getElementById("gradeZ");
			const lengthInput = document.getElementById("length");
			const collarZInput = document.getElementById("collarZ");
			const angleInput = document.getElementById("angle");
			const subdrillInput = document.getElementById("subdrill");
			const useLineBearingCheckbox = document.getElementById("useLineBearing");
			const bearingInput = document.getElementById("bearing");

			// Function to update fields based on checkbox state
			function updateFieldsBasedOnUseGradeZ() {
				const useGradeZ = useGradeZCheckbox.checked;

				// Enable/disable fields
				gradeZInput.disabled = !useGradeZ;
				lengthInput.disabled = useGradeZ;

				// Update calculations
				if (useGradeZ) {
					// Calculate length from grade
					const collarZ = parseFloat(collarZInput.value) || 0;
					const gradeZ = parseFloat(gradeZInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedLength = Math.abs((collarZ - gradeZ + subdrill) / Math.cos(angleRad));
					lengthInput.value = calculatedLength.toFixed(2);
				} else {
					// Calculate grade from length
					const collarZ = parseFloat(collarZInput.value) || 0;
					const length = parseFloat(lengthInput.value) || 0;
					const subdrill = parseFloat(subdrillInput.value) || 0;
					const angle = parseFloat(angleInput.value) || 0;
					const angleRad = angle * (Math.PI / 180);

					const calculatedGradeZ = collarZ - (length - subdrill) * Math.cos(angleRad);
					gradeZInput.value = calculatedGradeZ.toFixed(2);
				}
			}

			// Function to handle line bearing checkbox
			function updateBearingField() {
				bearingInput.disabled = useLineBearingCheckbox.checked;
			}

			// Add event listeners for changes
			useGradeZCheckbox.addEventListener("change", updateFieldsBasedOnUseGradeZ);
			gradeZInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			lengthInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			collarZInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			angleInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			subdrillInput.addEventListener("input", updateFieldsBasedOnUseGradeZ);
			useLineBearingCheckbox.addEventListener("change", updateBearingField);

			// Initial update
			updateFieldsBasedOnUseGradeZ();
			updateBearingField();

			// Hide the loading spinner when the popup is ready
			Swal.hideLoading();
		}
	}).then((result) => {
		if (result.isConfirmed) {
			// Retrieve values from the input fields
			const params = {
				blastName: document.getElementById("blastName").value,
				nameTypeIsNumerical: document.getElementById("nameTypeIsNumerical").checked,
				useGradeZ: document.getElementById("useGradeZ").checked,
				useLineBearing: document.getElementById("useLineBearing").checked,
				startNumber: parseInt(document.getElementById("startNumber").value),
				spacing: parseFloat(document.getElementById("spacing").value),
				collarZ: parseFloat(document.getElementById("collarZ").value),
				gradeZ: parseFloat(document.getElementById("gradeZ").value),
				length: parseFloat(document.getElementById("length").value),
				subdrill: parseFloat(document.getElementById("subdrill").value),
				angle: parseFloat(document.getElementById("angle").value),
				bearing: parseFloat(document.getElementById("bearing").value),
				diameter: parseFloat(document.getElementById("diameter").value),
				type: document.getElementById("type").value,
				reverseDirection: document.getElementById("reverseDirection").checked
			};
			// Reverse the vertices if checkbox is checked
			let finalVertices = vertices;
			if (params.reverseDirection) {
				finalVertices = [...vertices].reverse(); // Create a reversed copy
			}
			// Save values to localStorage
			localStorage.setItem("savedHolesAlongPolylineSettings", JSON.stringify(params));

			// Generate the holes along the polyline
			generateHolesAlongPolyline(params, finalVertices);
		}

		// Clear selection
		selectedVertices = [];
		debouncedUpdateTreeView(); // Use debounced version
		drawData(points, selectedHole);
		// Add tool deactivation here if it's missing:
		holesAlongPolyLineTool.checked = false;
		holesAlongPolyLineTool.dispatchEvent(new Event("change"));
	});
}

///----------------- ASSIGN HOLE START Z TO A SURFACE TOOL and ASSIGN HOLE GRADE Z to a surface -----------------///
// WITH this multi-surface system:
let loadedSurfaces = new Map(); // Map<surfaceId, {id, name, points, triangles, visible, gradient}>

const assignSurfaceToHolesTool = document.getElementById("assignSurfaceTool");
const assignGradeToHolesTool = document.getElementById("assignGradeTool");
let showSurfaceLegend = true; // Add legend visibility control
let currentGradient = "default"; // Default gradient
// Add these variables near your other surface variables
let surfaceTransparency = 1.0; // Default fully opaque (same as image.transparency pattern)

//IMPORTANT - THIS IS THE FUNCTION THAT ASSIGNS THE HOLE TO THE SURFACE
function assignHoleToSurface(hole) {
	const surfaceZ = interpolateZFromSurface(hole.startXLocation, hole.startYLocation);
	if (surfaceZ !== null) {
		hole.startZLocation = surfaceZ;
		hole.gradeZLocation = surfaceZ + hole.length; // Adjust grade accordingly
		// console.log("Assigned hole: " + hole.holeID + " to surface elevation: " + surfaceZ.toFixed(2) + "m");
	}
}
// NEW: Check if click point is actually on a surface triangle
function isPointInSurface(x, y) {
	// Check all loaded surfaces
	if (loadedSurfaces.size === 0) {
		return null; // Changed from false to null
	}

	// Convert canvas coordinates to world coordinates
	const worldX = (x - canvas.width / 2) / currentScale + centroidX;
	const worldY = -(y - canvas.height / 2) / currentScale + centroidY;

	// Check if point is inside any triangle of any visible surface
	for (let [surfaceId, surface] of loadedSurfaces) {
		if (!surface.visible || !surface.triangles || surface.triangles.length === 0) {
			continue;
		}

		// Check if point is inside any triangle
		for (let triangle of surface.triangles) {
			if (isPointInTriangle(worldX, worldY, triangle.vertices)) {
				return surfaceId; // Return the specific surface ID
			}
		}
	}

	return null; // Changed from false to null
}
// Determines if a point is inside a triangle using barycentric coordinates.
function isPointInTriangle(x, y, vertices) {
	const [v0, v1, v2] = vertices;
	const denom = (v1.y - v2.y) * (v0.x - v2.x) + (v2.x - v1.x) * (v0.y - v2.y);
	const a = ((v1.y - v2.y) * (x - v2.x) + (v2.x - v1.x) * (y - v2.y)) / denom;
	const b = ((v2.y - v0.y) * (x - v2.x) + (v0.x - v2.x) * (y - v2.y)) / denom;
	const c = 1 - a - b;
	return a >= 0 && b >= 0 && c >= 0;
}
// Interpolates the Z value of a point inside a triangle using barycentric coordinates.
function interpolateZInTriangle(x, y, vertices) {
	const [v0, v1, v2] = vertices;
	const denom = (v1.y - v2.y) * (v0.x - v2.x) + (v2.x - v1.x) * (v0.y - v2.y);
	const a = ((v1.y - v2.y) * (x - v2.x) + (v2.x - v1.x) * (y - v2.y)) / denom;
	const b = ((v2.y - v0.y) * (x - v2.x) + (v0.x - v2.x) * (y - v2.y)) / denom;
	const c = 1 - a - b;
	return a * v0.z + b * v1.z + c * v2.z;
}

// Interpolates the Z value of a point on the surface.
function interpolateZFromSurface(x, y, surfaceId = null) {
	// If surfaceId is specified, only check that surface
	if (surfaceId) {
		const surface = loadedSurfaces.get(surfaceId);
		if (surface && surface.visible && surface.triangles && surface.triangles.length > 0) {
			for (const triangle of surface.triangles) {
				if (isPointInTriangle(x, y, triangle.vertices)) {
					return interpolateZInTriangle(x, y, triangle.vertices);
				}
			}
		}
		return null; // Point not on specified surface
	}

	// Original behavior: Find triangle containing point (x, y) from all loaded surfaces
	for (let [surfaceId, surface] of loadedSurfaces) {
		if (!surface.visible || !surface.triangles || surface.triangles.length === 0) {
			continue;
		}

		for (const triangle of surface.triangles) {
			if (isPointInTriangle(x, y, triangle.vertices)) {
				return interpolateZInTriangle(x, y, triangle.vertices);
			}
		}
	}
	return null; // Point not on surface
}

// Loads a point cloud file and processes it.
function loadPointCloudFile(file) {
	const reader = new FileReader();

	// Show loading progress
	updateStatusMessage("Loading surface file: " + file.name + "...");

	reader.onload = function (e) {
		const content = e.target.result;
		const fileExtension = file.name.split(".").pop().toLowerCase();

		let points;

		try {
			switch (fileExtension) {
				case "obj":
					points = parseOBJFile(content);
					break;
				case "xyz":
					points = parseXYZFile(content);
					break;
				case "asc":
					points = parseASCFile(content);
					break;
				case "txt":
					points = parseTXTFile(content);
					break;
				case "csv":
					points = parseCSVPointCloud(content);
					break;
				case "ply":
					points = parsePLYFile(content);
					break;
				case "pts":
					points = parsePTSFile(content);
					break;
				default:
					// Default to the existing parser for backward compatibility
					points = parsePointCloudData(content);
			}

			if (points && points.length > 0) {
				// Check if decimation is needed for performance
				if (points.length > 10000) {
					showDecimationWarning(points, file.name);
				} else {
					processSurfacePoints(points, file.name);
				}
			} else {
				updateStatusMessage("No valid points found in: " + file.name);
			}
		} catch (error) {
			console.error("Error parsing surface file:", error);
			updateStatusMessage("Error loading surface file: " + error.message);
		}
	};
	reader.readAsText(file);
}

// Process surface points with progress indication
function processSurfacePoints(points, fileName) {
	updateStatusMessage("Creating surface from " + points.length.toLocaleString() + " points...");

	// Use setTimeout to allow UI update before processing
	setTimeout(async () => {
		// Make this async
		try {
			createSurfaceFromPoints(points, fileName, false);

			// ADD SURFACE SAVE HERE
			try {
				await saveSurfaceToDB(fileName || "surface_" + Date.now());
				// console.log("✅ Surface saved from processSurfacePoints:", fileName);
			} catch (saveError) {
				console.error("❌ Failed to save surface from processSurfacePoints:", saveError);
			}

			updateStatusMessage("Surface loaded: " + fileName + " (" + points.length.toLocaleString() + " points)");
		} catch (error) {
			console.error("Error creating surface:", error);
			updateStatusMessage("Error creating surface: " + error.message);
		}
	}, 100);
}
// Enhanced OBJ parser
function parseOBJFile(content) {
	const lines = content.split("\n");
	const points = [];

	lines.forEach((line) => {
		const trimmedLine = line.trim();
		if (trimmedLine.startsWith("v ")) {
			// Only vertex lines
			const parts = trimmedLine.split(/\s+/);
			if (parts.length >= 4) {
				const x = parseFloat(parts[1]);
				const y = parseFloat(parts[2]);
				const z = parseFloat(parts[3]);

				if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
					points.push({ x, y, z });
				}
			}
		}
	});

	return points;
}
// XYZ parser (space-delimited X Y Z format)
function parseXYZFile(content) {
	const lines = content.split("\n");
	const points = [];

	lines.forEach((line) => {
		const parts = line.trim().split(/\s+/);
		if (parts.length >= 3) {
			const x = parseFloat(parts[0]);
			const y = parseFloat(parts[1]);
			const z = parseFloat(parts[2]);

			if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
				points.push({ x, y, z });
			}
		}
	});

	return points;
}
// ASC parser (ASCII grid format, commonly used in GIS)
function parseASCFile(content) {
	const lines = content.split("\n");
	const points = [];

	// Parse header information
	let ncols, nrows, xllcorner, yllcorner, cellsize, nodata_value;
	let headerLines = 0;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim().toLowerCase();
		if (line.startsWith("ncols")) {
			ncols = parseInt(line.split(/\s+/)[1]);
			headerLines++;
		} else if (line.startsWith("nrows")) {
			nrows = parseInt(line.split(/\s+/)[1]);
			headerLines++;
		} else if (line.startsWith("xllcorner") || line.startsWith("xllcenter")) {
			xllcorner = parseFloat(line.split(/\s+/)[1]);
			headerLines++;
		} else if (line.startsWith("yllcorner") || line.startsWith("yllcenter")) {
			yllcorner = parseFloat(line.split(/\s+/)[1]);
			headerLines++;
		} else if (line.startsWith("cellsize")) {
			cellsize = parseFloat(line.split(/\s+/)[1]);
			headerLines++;
		} else if (line.startsWith("nodata_value")) {
			nodata_value = parseFloat(line.split(/\s+/)[1]);
			headerLines++;
		} else if (line.length > 0 && !isNaN(parseFloat(line.split(/\s+/)[0]))) {
			break; // End of header, start of data
		}
	}

	// Parse elevation data
	for (let row = 0; row < nrows; row++) {
		const lineIndex = headerLines + row;
		if (lineIndex < lines.length) {
			const values = lines[lineIndex].trim().split(/\s+/);
			for (let col = 0; col < ncols && col < values.length; col++) {
				const z = parseFloat(values[col]);
				if (!isNaN(z) && z !== nodata_value) {
					const x = xllcorner + col * cellsize;
					const y = yllcorner + (nrows - 1 - row) * cellsize; // Flip Y coordinate
					points.push({ x, y, z });
				}
			}
		}
	}

	return points;
}
// PLY parser (ASCII format)
function parsePLYFile(content) {
	const lines = content.split("\n");
	const points = [];
	let inHeader = true;
	let vertexCount = 0;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();

		if (inHeader) {
			if (line.startsWith("element vertex")) {
				vertexCount = parseInt(line.split(" ")[2]);
			} else if (line === "end_header") {
				inHeader = false;
			}
		} else if (vertexCount > 0) {
			const parts = line.split(/\s+/);
			if (parts.length >= 3) {
				const x = parseFloat(parts[0]);
				const y = parseFloat(parts[1]);
				const z = parseFloat(parts[2]);

				if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
					points.push({ x, y, z });
					vertexCount--;
				}
			}
		}
	}

	return points;
}
// PTS parser (point count + XYZ + intensity)
function parsePTSFile(content) {
	const lines = content.split("\n");
	const points = [];

	// First line might be point count
	let startIndex = 0;
	if (lines[0] && !isNaN(parseInt(lines[0].trim()))) {
		startIndex = 1;
	}

	for (let i = startIndex; i < lines.length; i++) {
		const parts = lines[i].trim().split(/\s+/);
		if (parts.length >= 3) {
			const x = parseFloat(parts[0]);
			const y = parseFloat(parts[1]);
			const z = parseFloat(parts[2]);

			if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
				points.push({ x, y, z });
			}
		}
	}

	return points;
}
// TXT parser (flexible text format)
function parseTXTFile(content) {
	const lines = content.split("\n");
	const points = [];

	lines.forEach((line) => {
		// Skip comment lines and empty lines
		const trimmedLine = line.trim();
		if (trimmedLine.length === 0 || trimmedLine.startsWith("#") || trimmedLine.startsWith("//")) {
			return;
		}

		// Try different delimiters: space, tab, comma
		let parts = trimmedLine.split(/\s+/);
		if (parts.length < 3) {
			parts = trimmedLine.split("\t");
		}
		if (parts.length < 3) {
			parts = trimmedLine.split(",");
		}

		if (parts.length >= 3) {
			const x = parseFloat(parts[0]);
			const y = parseFloat(parts[1]);
			const z = parseFloat(parts[2]);

			if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
				points.push({ x, y, z });
			}
		}
	});

	return points;
}
// CSV parser specifically for point clouds
function parseCSVPointCloud(content) {
	const lines = content.split("\n");
	const points = [];
	let hasHeader = false;

	// Check if first line looks like a header
	const firstLine = lines[0].trim();
	if (firstLine.toLowerCase().includes("x") || firstLine.toLowerCase().includes("y") || firstLine.toLowerCase().includes("z")) {
		hasHeader = true;
	}

	const startIndex = hasHeader ? 1 : 0;

	for (let i = startIndex; i < lines.length; i++) {
		const parts = lines[i].trim().split(",");
		if (parts.length >= 3) {
			const x = parseFloat(parts[0]);
			const y = parseFloat(parts[1]);
			const z = parseFloat(parts[2]);

			if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
				points.push({ x, y, z });
			}
		}
	}

	return points;
}
// Add this to track the current surface name
window.currentSurfaceName = null;

function createSurfaceFromPoints(points, surfaceName = null, autoSave = true) {
	const surfaceId = surfaceName || "surface_" + Date.now();

	// Create triangles in LOCAL variable (not global)
	const triangles = [];
	const coords = points.flatMap((p) => [p.x, p.y]);
	const delaunay = new Delaunator(coords);

	for (let i = 0; i < delaunay.triangles.length; i += 3) {
		const p1 = points[delaunay.triangles[i]];
		const p2 = points[delaunay.triangles[i + 1]];
		const p3 = points[delaunay.triangles[i + 2]];

		// ✅ Push to LOCAL triangles array
		triangles.push({
			vertices: [p1, p2, p3],
			minZ: Math.min(p1.z, p2.z, p3.z),
			maxZ: Math.max(p1.z, p2.z, p3.z)
		});
	}

	// ✅ Add complete surface to the Map
	loadedSurfaces.set(surfaceId, {
		id: surfaceId,
		name: surfaceName || surfaceId,
		points: points,
		triangles: triangles,
		visible: true,
		gradient: "default"
	});

	updateCentroids();
	drawData(points, selectedHole);

	if (autoSave) {
		saveSurfaceToDB(surfaceId).catch((err) => console.error("Failed to save surface:", err));
	}
}
// Keep the decimation warning (optional enhancement)
function showDecimationWarning(points, fileName) {
	const pointCount = points.length;

	Swal.fire({
		title: "Large Point Cloud Detected",
		showCancelButton: true,
		confirmButtonText: "Load All",
		cancelButtonText: "Decimate",
		icon: "warning",
		html: `
            <div style="text-align: center;">
                <label class="labelWhite16"><strong>${fileName}</strong></label><br>
                <label class="labelWhite14">Contains ${pointCount.toLocaleString()} points</label><br><br>
                <label class="labelWhite12">⚠️ Large point clouds may cause performance issues</label><br>
                <label class="labelWhite12">Recommended: Decimate to ~5,000 points for better performance</label>
            </div>
        `,
		customClass: {
			container: "custom-popup-container",
			title: "swal2-title",
			confirmButton: "confirm",
			cancelButton: "cancel",
			content: "swal2-content",
			htmlContainer: "swal2-html-container",
			icon: "swal2-icon"
		}
	}).then(async (result) => {
		// Make this async
		if (result.isConfirmed) {
			createSurfaceFromPoints(points, fileName, false);

			// ADD SURFACE SAVE HERE
			try {
				await saveSurfaceToDB(fileName || "surface_full_" + Date.now());
				// console.log("✅ Full surface saved from decimation dialog:", fileName);
			} catch (saveError) {
				console.error("❌ Failed to save full surface:", saveError);
			}
		} else if (result.dismiss === Swal.DismissReason.cancel) {
			const decimatedPoints = decimatePointCloud(points, 5000);
			createSurfaceFromPoints(decimatedPoints, fileName, false);

			// ADD DECIMATED SURFACE SAVE HERE
			try {
				await saveSurfaceToDB(fileName ? fileName + "_decimated" : "surface_decimated_" + Date.now());
				// console.log("✅ Decimated surface saved from decimation dialog:", fileName);
			} catch (saveError) {
				console.error("❌ Failed to save decimated surface:", saveError);
			}
		}
	});
}
function decimatePointCloud(points, targetCount) {
	if (points.length <= targetCount) return points;

	const step = Math.floor(points.length / targetCount);
	const decimatedPoints = [];

	for (let i = 0; i < points.length; i += step) {
		decimatedPoints.push(points[i]);
	}

	return decimatedPoints;
}
// Add this simple canvasToWorld function (without snapping)
function canvasToWorld(canvasX, canvasY) {
	const worldX = (canvasX - canvas.width / 2) / currentScale + centroidX;
	const worldY = -(canvasY - canvas.height / 2) / currentScale + centroidY;
	return [worldX, worldY];
}
// Load a specific image into the multi-image system
async function loadImageIntoMemory(imageId) {
	try {
		if (!db) return null;

		const transaction = db.transaction([IMAGE_STORE_NAME], "readonly");
		const store = transaction.objectStore(IMAGE_STORE_NAME);
		const request = store.get(imageId);

		return new Promise((resolve) => {
			request.onsuccess = async () => {
				const imageData = request.result;
				if (imageData) {
					// Convert blob back to canvas
					const img = new Image();
					const canvas = document.createElement("canvas");
					const ctx = canvas.getContext("2d");

					img.onload = () => {
						canvas.width = img.width;
						canvas.height = img.height;
						ctx.drawImage(img, 0, 0);

						loadedImages.set(imageId, {
							id: imageId,
							name: imageData.name,
							canvas: canvas,
							bbox: imageData.bbox,
							type: imageData.type,
							visible: imageData.visible !== false,
							transparency: imageData.transparency || 1.0
						});

						// console.log("✅ Image " + imageData.name + " loaded into memory");
						resolve(imageData);
					};

					img.src = URL.createObjectURL(imageData.blob);
				} else {
					resolve(null);
				}
			};
			request.onerror = () => resolve(null);
		});
	} catch (error) {
		console.error("Error loading image into memory:", error);
		return null;
	}
}

// Image visibility management
function setImageVisibility(imageId, visible) {
	const image = loadedImages.get(imageId);
	if (image) {
		image.visible = visible;
		// console.log("👁️ Image " + image.name + " visibility: " + visible);
		drawData(points, selectedHole);
	}
}

function toggleImageVisibility(imageId) {
	const image = loadedImages.get(imageId);
	if (image) {
		image.visible = !image.visible;
		setImageVisibility(imageId, image.visible);
	}
}
function drawSurface() {
	if (loadedSurfaces.size === 0) return;

	loadedSurfaces.forEach((surface) => {
		if (!surface.visible || !surface.triangles || surface.triangles.length === 0) return;

		// Calculate THIS surface's elevation range only
		let surfaceMinZ = Infinity;
		let surfaceMaxZ = -Infinity;

		surface.points.forEach((point) => {
			if (point.z < surfaceMinZ) surfaceMinZ = point.z;
			if (point.z > surfaceMaxZ) surfaceMaxZ = point.z;
		});

		// CRITICAL: Pass surface-specific min/max, transparency, AND gradient
		surface.triangles.forEach((triangle) => {
			// Fix line 20344 - Surface drawing function
			drawTriangleWithGradient(triangle, surfaceMinZ, surfaceMaxZ, ctx, surface.transparency ?? 1.0, surface.gradient || "default");
		});
	});
}
// FIXED: Enhanced drawSurfaceLegend function to use surface-specific gradients
function drawSurfaceLegend() {
	// Check if any surfaces are visible and have legend enabled
	if (!showSurfaceLegend || loadedSurfaces.size === 0) return;

	// Get all visible surfaces
	const visibleSurfaces = Array.from(loadedSurfaces.values()).filter((surface) => surface.visible && surface.points && surface.points.length > 0);

	if (visibleSurfaces.length === 0) return;

	// Group surfaces by gradient type
	const surfacesByGradient = {};
	visibleSurfaces.forEach((surface) => {
		const gradient = surface.gradient || "default";
		if (!surfacesByGradient[gradient]) {
			surfacesByGradient[gradient] = [];
		}
		surfacesByGradient[gradient].push(surface);
	});

	// Legend dimensions and base position
	const legendWidth = 20;
	const legendHeight = 200;
	const legendSpacing = 140; // Space between multiple legends
	let legendIndex = 0;

	// Draw a legend for each unique gradient
	Object.entries(surfacesByGradient).forEach(([gradientType, surfaces]) => {
		// Calculate combined elevation range for all surfaces using this gradient
		let minZ = Infinity;
		let maxZ = -Infinity;

		surfaces.forEach((surface) => {
			surface.points.forEach((point) => {
				if (point.z < minZ) minZ = point.z;
				if (point.z > maxZ) maxZ = point.z;
			});
		});

		if (maxZ - minZ < 0.001) return; // Skip legend for flat surfaces

		// Position this legend
		const legendX = canvas.width - legendWidth - 60 - legendIndex * legendSpacing;
		const legendY = 50;
		const steps = 50;

		// Draw color gradient using the specific gradient type
		for (let i = 0; i < steps; i++) {
			const ratio = i / (steps - 1);
			const y = legendY + legendHeight - (i * legendHeight) / steps;
			const height = legendHeight / steps + 1;

			// FIXED: Pass the gradient parameter
			ctx.fillStyle = elevationToColor(minZ + ratio * (maxZ - minZ), minZ, maxZ, gradientType);
			ctx.fillRect(legendX, y, legendWidth, height);
		}

		// Draw elevation labels
		ctx.fillStyle = strokeColor;
		ctx.font = "12px Roboto";
		ctx.fontWeight = "bold";
		ctx.textAlign = "left";

		const labelCount = 5;
		for (let i = 0; i < labelCount; i++) {
			const ratio = i / (labelCount - 1);
			const elevation = minZ + ratio * (maxZ - minZ);
			const y = legendY + legendHeight - ratio * legendHeight;

			// Draw tick mark
			ctx.beginPath();
			ctx.moveTo(legendX + legendWidth, y);
			ctx.lineTo(legendX + legendWidth + 5, y);
			ctx.stroke();

			// Draw elevation text
			ctx.fillText(elevation.toFixed(1) + "m", legendX + legendWidth + 8, y + 4);
		}

		// Draw title
		ctx.font = "14px Arial";
		ctx.textAlign = "center";
		ctx.fillText("Elevation", legendX + legendWidth / 2, legendY - 20);

		// Draw gradient name and surface info
		ctx.font = "10px Arial";
		const gradientNames = {
			default: "Default",
			viridis: "Viridis",
			turbo: "Turbo",
			parula: "Parula",
			cividis: "Cividis",
			terrain: "Terrain"
		};

		// FIXED: Use the surface's gradient instead of global currentGradient
		const gradientName = gradientNames[gradientType] || "Default";
		ctx.fillText(gradientName, legendX + legendWidth / 2, legendY + legendHeight + 20);

		// If multiple surfaces, show which surfaces use this gradient
		if (Object.keys(surfacesByGradient).length > 1) {
			ctx.font = "9px Arial";
			const surfaceNames = surfaces.map((s) => s.name || s.id).join(", ");
			const maxNameLength = 20;
			const displayName = surfaceNames.length > maxNameLength ? surfaceNames.substring(0, maxNameLength) + "..." : surfaceNames;
			ctx.fillText(displayName, legendX + legendWidth / 2, legendY + legendHeight + 35);
		}

		legendIndex++;
	});

	// Reset text alignment
	ctx.textAlign = "left";
}
// Color gradient functions
function getViridisColor(ratio) {
	const colors = [
		[68, 1, 84], // Dark purple
		[59, 82, 139], // Blue-purple
		[33, 144, 140], // Teal
		[92, 200, 99], // Green
		[253, 231, 37] // Yellow
	];
	return interpolateColors(colors, ratio);
}

function getTurboColor(ratio) {
	const colors = [
		[48, 18, 59], // Dark purple
		[50, 136, 189], // Blue
		[94, 201, 98], // Green
		[253, 231, 37], // Yellow
		[240, 21, 22] // Red
	];
	return interpolateColors(colors, ratio);
}

function getParulaColor(ratio) {
	const colors = [
		[53, 42, 135], // Dark blue
		[15, 92, 221], // Blue
		[18, 125, 216], // Light blue
		[7, 156, 207], // Cyan
		[21, 177, 180], // Teal
		[89, 189, 140], // Green
		[170, 194, 97], // Yellow-green
		[249, 251, 14] // Yellow
	];
	return interpolateColors(colors, ratio);
}

function getCividisColor(ratio) {
	const colors = [
		[0, 32, 76], // Dark blue
		[0, 52, 102], // Blue
		[39, 90, 129], // Light blue
		[92, 125, 147], // Gray-blue
		[150, 159, 157], // Gray
		[206, 187, 158], // Beige
		[254, 230, 206] // Light yellow
	];
	return interpolateColors(colors, ratio);
}

function getTerrainColor(ratio) {
	const colors = [
		[0, 68, 27], // Dark green (low elevation)
		[35, 132, 67], // Green
		[65, 174, 118], // Light green
		[120, 198, 121], // Pale green
		[186, 228, 179], // Very pale green
		[120, 85, 45], // Brown (mid elevation)
		[160, 118, 74], // Light brown
		[200, 200, 200], // Gray (high elevation)
		[255, 255, 255] // White (peaks)
	];
	return interpolateColors(colors, ratio);
}

function interpolateColors(colors, ratio) {
	const scaledRatio = ratio * (colors.length - 1);
	const index = Math.floor(scaledRatio);
	const localRatio = scaledRatio - index;

	if (index >= colors.length - 1) {
		const [r, g, b] = colors[colors.length - 1];
		return `rgb(${r}, ${g}, ${b})`;
	}

	const [r1, g1, b1] = colors[index];
	const [r2, g2, b2] = colors[index + 1];

	const r = Math.round(r1 + (r2 - r1) * localRatio);
	const g = Math.round(g1 + (g2 - g1) * localRatio);
	const b = Math.round(b1 + (b2 - b1) * localRatio);

	return `rgb(${r}, ${g}, ${b})`;
}

// Updated elevationToColor function to accept gradient parameter
function elevationToColor(z, minZ, maxZ, gradient = "default") {
	// Check if the surface is flat (no elevation variation)
	if (maxZ - minZ < 0.001) {
		// Very small tolerance for floating point comparison
		return "rgb(255, 165, 0)"; // Orange for flat surfaces
	}

	const ratio = (z - minZ) / (maxZ - minZ);

	// Apply selected gradient (now surface-specific)
	switch (gradient) {
		case "viridis":
			return getViridisColor(ratio);
		case "turbo":
			return getTurboColor(ratio);
		case "parula":
			return getParulaColor(ratio);
		case "cividis":
			return getCividisColor(ratio);
		case "terrain":
			return getTerrainColor(ratio);
		default:
			// Original blue->cyan->green->yellow->red spectrum
			if (ratio < 0.25) {
				return `rgb(0, ${Math.floor(ratio * 4 * 255)}, 255)`;
			} else if (ratio < 0.5) {
				return `rgb(0, 255, ${Math.floor(255 - (ratio - 0.25) * 4 * 255)})`;
			} else if (ratio < 0.75) {
				return `rgb(${Math.floor((ratio - 0.5) * 4 * 255)}, 255, 0)`;
			} else {
				return `rgb(255, ${Math.floor(255 - (ratio - 0.75) * 4 * 255)}, 0)`;
			}
	}
}

// Updated drawTriangleWithGradient function to accept surface-specific gradient
function drawTriangleWithGradient(triangle, surfaceMinZ, surfaceMaxZ, targetCtx = ctx, alpha = 1.0, gradient = "default") {
	const showWireFrame = false;
	const [p1, p2, p3] = triangle.vertices;

	// Convert to canvas coordinates
	const [x1, y1] = worldToCanvas(p1.x, p1.y);
	const [x2, y2] = worldToCanvas(p2.x, p2.y);
	const [x3, y3] = worldToCanvas(p3.x, p3.y);

	// Save context state
	targetCtx.save();

	// Set transparency for THIS surface only
	targetCtx.globalAlpha = alpha;

	// Check if we have texture data (future enhancement)
	if (surfaceTextureData && surfaceTextureData.hasTextures) {
		// For now, use a different color scheme for textured surfaces
		targetCtx.beginPath();
		targetCtx.moveTo(x1, y1);
		targetCtx.lineTo(x2, y2);
		targetCtx.lineTo(x3, y3);
		targetCtx.closePath();

		// Use elevation coloring but with different palette for textured surfaces
		const avgZ = (p1.z + p2.z + p3.z) / 3;
		targetCtx.fillStyle = elevationToColor(avgZ, surfaceMinZ, surfaceMaxZ, gradient);
		targetCtx.fill();

		if (showWireFrame) {
			targetCtx.strokeStyle = "rgba(0, 0, 0, 0.05)";
			targetCtx.lineWidth = 0.1;
			targetCtx.stroke();
		}
		targetCtx.restore();
		return;
	}

	// Check if THIS surface is flat (using surface-specific min/max)
	if (surfaceMaxZ - surfaceMinZ < 0.001) {
		// Flat surface - use solid orange color
		targetCtx.beginPath();
		targetCtx.moveTo(x1, y1);
		targetCtx.lineTo(x2, y2);
		targetCtx.lineTo(x3, y3);
		targetCtx.closePath();
		targetCtx.fillStyle = "rgba(255, 165, 0, 0.7)"; // Semi-transparent orange
		targetCtx.fill();

		// Add wireframe edges
		if (showWireFrame) {
			targetCtx.strokeStyle = "rgba(0, 0, 0, 0.1)";
			targetCtx.lineWidth = 0.1;
			targetCtx.stroke();
		}
		targetCtx.restore();
		return;
	}

	// Create gradient based on elevation for non-flat surfaces
	const canvasGradient = targetCtx.createLinearGradient(x1, y1, x3, y3);

	// Map Z values to colors using THIS surface's elevation range AND gradient
	const color1 = elevationToColor(p1.z, surfaceMinZ, surfaceMaxZ, gradient);
	const color2 = elevationToColor(p2.z, surfaceMinZ, surfaceMaxZ, gradient);
	const color3 = elevationToColor(p3.z, surfaceMinZ, surfaceMaxZ, gradient);

	canvasGradient.addColorStop(0, color1);
	canvasGradient.addColorStop(0.5, color2);
	canvasGradient.addColorStop(1, color3);

	// Draw triangle
	targetCtx.beginPath();
	targetCtx.moveTo(x1, y1);
	targetCtx.lineTo(x2, y2);
	targetCtx.lineTo(x3, y3);
	targetCtx.closePath();
	targetCtx.fillStyle = canvasGradient;
	targetCtx.fill();

	// Add wireframe edges
	if (showWireFrame) {
		targetCtx.strokeStyle = "rgba(0, 0, 0, 0.1)";
		targetCtx.lineWidth = 0.1;
		targetCtx.stroke();
	}

	// Restore context state
	targetCtx.restore();
}
// ADD: Global variable for texture data
let surfaceTextureData = null;
// Add this function near other surface-related functions
function getAllVisibleSurfaces() {
	const visibleSurfaces = [];
	if (loadedSurfaces && loadedSurfaces.size > 0) {
		for (const [surfaceId, surface] of loadedSurfaces.entries()) {
			if (surface.visible && surface.triangles && surface.triangles.length > 0) {
				visibleSurfaces.push({
					id: surfaceId,
					name: surface.name || `Surface ${surfaceId}`
				});
			}
		}
	}
	return visibleSurfaces;
}
// Helper function to assign holes to surface elevation (with proper geometry calculation)
function assignHoleToSurfaceElevation(hole, targetElevation, type) {
	if (type === "collar") {
		// Keep toe fixed, adjust collar to target elevation
		// Calculate the required vertical drop from collar to toe
		const verticalDrop = targetElevation - hole.gradeZLocation;

		// For angled holes, calculate the required hole length
		const radAngle = hole.holeAngle * (Math.PI / 180);
		const cosAngle = Math.cos(radAngle);

		if (Math.abs(cosAngle) > 1e-9) {
			const newLength = Math.abs(verticalDrop) / cosAngle;
			hole.startZLocation = targetElevation;

			// Use calculateHoleGeometry to properly recalculate all geometry
			calculateHoleGeometry(hole, newLength, 1); // mode 1 = Length
		}
	} else if (type === "grade") {
		// Keep collar fixed, adjust toe to target elevation
		// Calculate the required bench height
		const newBenchHeight = hole.startZLocation - targetElevation;

		// Update bench height and recalculate geometry
		hole.benchHeight = newBenchHeight;

		// Calculate new hole length based on bench height and subdrill
		const radAngle = hole.holeAngle * (Math.PI / 180);
		const cosAngle = Math.cos(radAngle);

		if (Math.abs(cosAngle) > 1e-9) {
			const newLength = (newBenchHeight + hole.subdrillAmount) / cosAngle;

			// Use calculateHoleGeometry to properly recalculate all geometry
			calculateHoleGeometry(hole, newLength, 1); // mode 1 = Length
		}
	}
}

// Updated surface assignment functions - NO NEW FUNCTIONS
assignSurfaceTool.addEventListener("change", function () {
	if (this.checked) {
		resetFloatingToolbarButtons("assignSurfaceTool");

		// Check if surface is available
		const visibleSurfaces = getAllVisibleSurfaces();
		if (visibleSurfaces.length === 0) {
			// No surface available - show dialog with proper styling
			Swal.fire({
				title: "No Surface Loaded",
				html: `
					<div class="button-container-2col">
						<div class="labelWhite12">No surface is loaded or visible.</div>
						<div></div>
						<div class="labelWhite12">Set collar elevation to:</div>
						<input type="number" id="surfaceElevation" value="286" step="0.1" class="swal2-input" style="width: 80px; text-align: center;"> mZ
					</div>
				`,
				showCancelButton: true,
				confirmButtonText: "OK",
				cancelButtonText: "Cancel",
				customClass: {
					container: "custom-popup-container",
					popup: "custom-popup-container",
					title: "swal2-title",
					content: "swal2-content",
					confirmButton: "confirm",
					cancelButton: "cancel"
				},
				preConfirm: () => {
					const elevation = parseFloat(document.getElementById("surfaceElevation").value);
					if (isNaN(elevation)) {
						Swal.showValidationMessage("Please enter a valid elevation");
						return false;
					}
					return elevation;
				}
			}).then((result) => {
				if (result.isConfirmed) {
					assignHolesToFixedElevation(result.value, "collar");
				}
				// Deselect tool
				this.checked = false;
				resetFloatingToolbarButtons("none");
			});
			return;
		}

		// Multiple surfaces available - ask which one to use
		if (visibleSurfaces.length > 1) {
			const surfaceOptions = visibleSurfaces.map((surface) => `<option value="${surface.id}">${surface.name}</option>`).join("");

			Swal.fire({
				title: "Select Surface",
				html: `
					<div class="button-container-2col">
						<div class="labelWhite12">Multiple surfaces are visible. Select which surface to use:</div>
						<div></div>
						<select id="surfaceSelect" class="swal2-input">
							${surfaceOptions}
						</select>
						<div></div>
					</div>
				`,
				showCancelButton: true,
				confirmButtonText: "Use Surface",
				cancelButtonText: "Cancel",
				customClass: {
					container: "custom-popup-container",
					popup: "custom-popup-container",
					title: "swal2-title",
					content: "swal2-content",
					confirmButton: "confirm",
					cancelButton: "cancel"
				},
				preConfirm: () => {
					return document.getElementById("surfaceSelect").value;
				}
			}).then((result) => {
				if (result.isConfirmed) {
					const selectedSurfaceId = result.value;

					// Surface is available - proceed with surface assignment
					if (selectedMultipleHoles && selectedMultipleHoles.length > 0) {
						let assignedCount = 0;
						selectedMultipleHoles.forEach((hole) => {
							const surfaceZ = interpolateZFromSurface(hole.startXLocation, hole.startYLocation, selectedSurfaceId);
							if (surfaceZ !== null) {
								assignHoleToSurfaceElevation(hole, surfaceZ, "collar");
								assignedCount++;
							}
						});

						// Show success message
						const surface = loadedSurfaces.get(selectedSurfaceId);
						const surfaceName = surface ? surface.name || `Surface ${selectedSurfaceId}` : "selected surface";

						Swal.fire({
							title: "Surface Assignment Complete",
							text: `Successfully adjusted ${assignedCount} holes to ${surfaceName} elevation.`,
							icon: "success",
							showCancelButton: false,
							showConfirmButton: true,
							confirmButtonText: "OK",
							customClass: {
								container: "custom-popup-container",
								popup: "custom-popup-container",
								title: "swal2-title",
								content: "swal2-content",
								confirmButton: "confirm",
								cancelButton: "cancel"
							}
						});

						updateStatusMessage("Select next tool\n to continue");
					} else {
						updateStatusMessage("Click on holes to assign surface elevation.");
						canvas.addEventListener("click", handleAssignSurfaceClick);
					}
				}
				// Deselect tool
				this.checked = false;
				resetFloatingToolbarButtons("none");
			});
			return;
		}

		// Single surface available - proceed directly with first surface
		const surfaceId = visibleSurfaces[0].id;
		if (selectedMultipleHoles && selectedMultipleHoles.length > 0) {
			let assignedCount = 0;
			selectedMultipleHoles.forEach((hole) => {
				const surfaceZ = interpolateZFromSurface(hole.startXLocation, hole.startYLocation, surfaceId);
				if (surfaceZ !== null) {
					assignHoleToSurfaceElevation(hole, surfaceZ, "collar");
					assignedCount++;
				}
			});

			// Show success message
			Swal.fire({
				title: "Surface Assignment Complete",
				text: `Successfully adjusted ${assignedCount} holes to surface elevation.`,
				icon: "success",
				showCancelButton: false,
				showConfirmButton: true,
				confirmButtonText: "OK",
				customClass: {
					container: "custom-popup-container",
					popup: "custom-popup-container",
					title: "swal2-title",
					content: "swal2-content",
					confirmButton: "confirm",
					cancelButton: "cancel"
				}
			});

			// Deselect tool
			this.checked = false;
			resetFloatingToolbarButtons("none");
			updateStatusMessage("Select next tool\n to continue");
		} else {
			updateStatusMessage("Click on holes to assign surface elevation.");
			canvas.addEventListener("click", handleAssignSurfaceClick);
		}
	} else {
		resetFloatingToolbarButtons("none");
		updateStatusMessage("Select next tool\n to continue");
		canvas.removeEventListener("click", handleAssignSurfaceClick);
	}
});
// Helper function to assign holes to a fixed elevation (updated)
function assignHolesToFixedElevation(elevation, type) {
	let assignedCount = 0;

	if (selectedMultipleHoles && selectedMultipleHoles.length > 0) {
		selectedMultipleHoles.forEach((hole) => {
			assignHoleToSurfaceElevation(hole, elevation, type);
			assignedCount++;
		});

		// Show success message with proper styling
		Swal.fire({
			title: "Elevation Assignment Complete",
			text: `Successfully adjusted ${assignedCount} holes to ${elevation}mZ ${type} elevation.`,
			icon: "success",
			showCancelButton: false,
			showConfirmButton: true,
			confirmButtonText: "OK",
			customClass: {
				container: "custom-popup-container",
				popup: "custom-popup-container",
				title: "swal2-title",
				content: "swal2-content",
				confirmButton: "confirm",
				cancelButton: "cancel"
			}
		});
	} else {
		updateStatusMessage("No holes selected for elevation assignment.");
	}

	drawData(points, selectedHole);
}

// Update click handlers - simplified version
function handleAssignSurfaceClick(event) {
	// Check if we have pre-selected holes (this shouldn't happen since we only add this listener when no holes are selected)
	if (selectedMultipleHoles && selectedMultipleHoles.length > 0) {
		// This case is already handled in the main event listener
		return;
	}

	const rect = canvas.getBoundingClientRect();
	const clickX = event.clientX - rect.left;
	const clickY = event.clientY - rect.top;

	// Find clicked hole using canvas coordinates
	const clickedHole = getClickedHole(clickX, clickY);
	if (clickedHole) {
		const surfaceZ = interpolateZFromSurface(clickedHole.startXLocation, clickedHole.startYLocation);
		if (surfaceZ !== null) {
			assignHoleToSurfaceElevation(clickedHole, surfaceZ, "collar");
			updateStatusMessage("Adjusted hole " + clickedHole.holeID + "\nCollar at " + surfaceZ.toFixed(2) + "m, length now " + clickedHole.holeLengthCalculated.toFixed(2) + "m");
			drawData(points, selectedHole);
		} else {
			updateStatusMessage("Hole " + clickedHole.holeID + " is not on the surface.");
		}
	} else {
		updateStatusMessage("No hole found at click location.");
	}
}

function handleAssignGradeClick(event) {
	// Check if we have pre-selected holes (this shouldn't happen since we only add this listener when no holes are selected)
	if (selectedMultipleHoles && selectedMultipleHoles.length > 0) {
		// This case is already handled in the main event listener
		return;
	}

	const rect = canvas.getBoundingClientRect();
	const clickX = event.clientX - rect.left;
	const clickY = event.clientY - rect.top;

	// Find clicked hole using canvas coordinates
	const clickedHole = getClickedHole(clickX, clickY);
	if (clickedHole) {
		const surfaceZ = interpolateZFromSurface(clickedHole.startXLocation, clickedHole.startYLocation);
		if (surfaceZ !== null) {
			assignHoleToSurfaceElevation(clickedHole, surfaceZ, "grade");
			updateStatusMessage("Adjusted hole " + clickedHole.holeID + "\nToe at " + surfaceZ.toFixed(2) + "m, length now " + clickedHole.holeLengthCalculated.toFixed(2) + "m");
			drawData(points, selectedHole);
		} else {
			updateStatusMessage("Hole " + clickedHole.holeID + " is not on the surface.");
		}
	} else {
		updateStatusMessage("No hole found at click location.");
	}
}
// Fixed save function (around line 18158)
function saveViewControlsSliderValues() {
	// View control sliders
	localStorage.setItem("fontSize", fontSlider.value);
	localStorage.setItem("connSize", connSlider.value);
	localStorage.setItem("toeSize", toeSlider.value);
	localStorage.setItem("holeSize", holeSlider.value);
	localStorage.setItem("intervalSize", intervalSlider.value);
	localStorage.setItem("firstMovementSize", firstMovementSlider.value);

	// Connection controls
	localStorage.setItem("delay", connectorDelay.value);
	localStorage.setItem("connectorColor", connectorColor.jscolor.toHEXString());
	localStorage.setItem("connectSlider", connectSlider.value);
	localStorage.setItem("floatingDelay", floatingDelay.value);
	localStorage.setItem("floatingConnectorColor", floatingConnectorColor.jscolor.toHEXString());

	// Drawing controls
	localStorage.setItem("drawingColor", drawingColor.jscolor.toHEXString());
	localStorage.setItem("lineThickness", lineThickness.value);
	localStorage.setItem("drawingRadius", circleRadius.value);
	localStorage.setItem("drawingText", drawingText.value);
	localStorage.setItem("drawingPolygonRadius", polygonRadius.value);
	localStorage.setItem("radiiSteps", radiiSteps.value);
	localStorage.setItem("snapRadiusPixels", snapRadiusPixels);
	console.log("View controls saved to localStorage");
}

// Fixed load function with null checks
function loadViewControlsSliderValues() {
	// View control sliders with defaults
	if (localStorage.getItem("fontSize")) fontSlider.value = localStorage.getItem("fontSize");
	if (localStorage.getItem("connSize")) connSlider.value = localStorage.getItem("connSize");
	if (localStorage.getItem("toeSize")) toeSlider.value = localStorage.getItem("toeSize");
	if (localStorage.getItem("holeSize")) holeSlider.value = localStorage.getItem("holeSize");
	if (localStorage.getItem("intervalSize")) intervalSlider.value = localStorage.getItem("intervalSize");
	if (localStorage.getItem("firstMovementSize")) firstMovementSlider.value = localStorage.getItem("firstMovementSize");
	if (localStorage.getItem("snapRadiusPixels")) snapRadiusPixels = parseFloat(localStorage.getItem("snapRadiusPixels"));
	// Connection controls
	if (localStorage.getItem("delay")) connectorDelay.value = localStorage.getItem("delay");
	if (localStorage.getItem("connectorColor")) connectorColor.jscolor.fromString(localStorage.getItem("connectorColor"));
	if (localStorage.getItem("connectSlider")) connectSlider.value = localStorage.getItem("connectSlider");
	if (localStorage.getItem("floatingDelay")) floatingDelay.value = localStorage.getItem("floatingDelay");
	if (localStorage.getItem("floatingConnectorColor")) floatingConnectorColor.jscolor.fromString(localStorage.getItem("floatingConnectorColor"));
	// Drawing controls
	if (localStorage.getItem("drawingColor")) drawingColor.jscolor.fromString(localStorage.getItem("drawingColor"));
	if (localStorage.getItem("drawingRadius")) circleRadius.value = localStorage.getItem("drawingRadius");
	if (localStorage.getItem("drawingText")) drawingText.value = localStorage.getItem("drawingText");
	if (localStorage.getItem("drawingPolygonRadius")) polygonRadius.value = localStorage.getItem("drawingPolygonRadius");
	if (localStorage.getItem("radiiSteps")) radiiSteps.value = localStorage.getItem("radiiSteps");
	if (localStorage.getItem("lineThickness")) lineThickness.value = localStorage.getItem("lineThickness");

	console.log("View controls loaded from localStorage");
}
// Auto-save when any control changes (add after the load function)
function setupAutoSavePreferences() {
	// View control sliders
	fontSlider.addEventListener("input", saveViewControlsSliderValues);
	connSlider.addEventListener("input", saveViewControlsSliderValues);
	toeSlider.addEventListener("input", saveViewControlsSliderValues);
	holeSlider.addEventListener("input", saveViewControlsSliderValues);
	intervalSlider.addEventListener("input", saveViewControlsSliderValues);
	firstMovementSlider.addEventListener("input", saveViewControlsSliderValues);
	snapToleranceSlider.addEventListener("input", saveViewControlsSliderValues);
	// Connection controls
	connectorDelay.addEventListener("input", saveViewControlsSliderValues);
	connectSlider.addEventListener("input", saveViewControlsSliderValues);
	floatingConnectorColor.addEventListener("input", saveViewControlsSliderValues);
	floatingDelay.addEventListener("input", saveViewControlsSliderValues);

	// Drawing controls
	circleRadius.addEventListener("input", saveViewControlsSliderValues);
	drawingText.addEventListener("input", saveViewControlsSliderValues);
	polygonRadius.addEventListener("input", saveViewControlsSliderValues);
	radiiSteps.addEventListener("input", saveViewControlsSliderValues);

	// Color pickers (these need special handling)
	connectorColor.addEventListener("input", function () {
		setTimeout(saveViewControlsSliderValues, 100); // Small delay for jscolor
	});
	drawingColor.addEventListener("input", function () {
		setTimeout(saveViewControlsSliderValues, 100); // Small delay for jscolor
	});
	lineThickness.addEventListener("input", saveViewControlsSliderValues);
}

//--------------------GLOBAL SNAPPING SNAP SELECT ------------------------//
// Global snapping configuration
let snapRadiusPixels = 10; // Default value in pixels
let snapEnabled = true; // Global snap toggle
let snapHighlight = null; // Store the current snap target for visual feedback

// Initialize snap radius from localStorage
if (localStorage.getItem("snapRadiusPixels")) {
	snapRadiusPixels = parseFloat(localStorage.getItem("snapRadiusPixels"));
} else if (localStorage.getItem("snapRadius") || localStorage.getItem("snapTolerance")) {
	// Migrate old meter-based snap to pixel-based (convert 1m to ~10 pixels as default)
	snapRadiusPixels = 10;
	localStorage.setItem("snapRadiusPixels", snapRadiusPixels);
}

// Update slider to match loaded value
if (document.getElementById("snapToleranceSlider")) {
	document.getElementById("snapToleranceSlider").min = 2; // Minimum 2 pixels
	document.getElementById("snapToleranceSlider").max = 50; // Maximum 50 pixels
	document.getElementById("snapToleranceSlider").step = 1; // 1 pixel increments
	document.getElementById("snapToleranceSlider").value = snapRadiusPixels;
	document.getElementById("snapToleranceLabel").textContent = "Snap Tolerance: " + snapRadiusPixels + "px";
}

// Single event listener for snap tolerance
document.getElementById("snapToleranceSlider")?.addEventListener("input", function () {
	snapRadiusPixels = parseFloat(this.value);
	// console.log("Snap Tolerance updated: " + snapRadiusPixels + "px");
	updateStatusMessage("Snap Tolerance: " + snapRadiusPixels + "px");
	setTimeout(() => updateStatusMessage(""), 1500);

	// Update all labels consistently
	document.getElementById("snapToleranceLabel").textContent = "Snap Tolerance: " + snapRadiusPixels + "px";

	// Save to localStorage
	localStorage.setItem("snapRadiusPixels", snapRadiusPixels);
});

// Helper function to convert pixel tolerance to world coordinates for current zoom
function getSnapToleranceInWorldUnits() {
	return snapRadiusPixels / currentScale;
}

// All possible snap targets and their priorities
const SNAP_PRIORITIES = {
	HOLE_COLLAR: 1, // Highest priority
	HOLE_GRADE: 2,
	HOLE_TOE: 3,
	KAD_POINT: 4,
	KAD_LINE_VERTEX: 5,
	KAD_POLYGON_VERTEX: 6,
	KAD_CIRCLE_CENTER: 7,
	KAD_TEXT_POSITION: 8,
	SURFACE_POINT: 9 // Lowest priority
};

// Enhanced global snapping function
function snapToNearestPoint(rawWorldX, rawWorldY, searchRadius = getSnapToleranceInWorldUnits()) {
	if (!snapEnabled) {
		return {
			worldX: rawWorldX,
			worldY: rawWorldY,
			worldZ: drawingZValue || document.getElementById("drawingElevation")?.value || 0, // Use current drawing elevation
			snapped: false,
			snapTarget: null
		};
	}

	// Search all possible snap targets
	const snapCandidates = [];

	// 1. Search holes (collar, grade, toe)
	if (points && points.length > 0) {
		points.forEach((hole) => {
			// Hole collar (start)
			const collarDist = Math.sqrt(Math.pow(hole.startXLocation - rawWorldX, 2) + Math.pow(hole.startYLocation - rawWorldY, 2));
			if (collarDist <= searchRadius) {
				snapCandidates.push({
					distance: collarDist,
					point: { x: hole.startXLocation, y: hole.startYLocation, z: hole.startZLocation },
					type: "HOLE_COLLAR",
					priority: SNAP_PRIORITIES.HOLE_COLLAR,
					description: `Hole ${hole.holeID} collar`
				});
			}

			// Hole grade
			const gradeDist = Math.sqrt(Math.pow(hole.gradeXLocation - rawWorldX, 2) + Math.pow(hole.gradeYLocation - rawWorldY, 2));
			if (gradeDist <= searchRadius) {
				snapCandidates.push({
					distance: gradeDist,
					point: { x: hole.gradeXLocation, y: hole.gradeYLocation, z: hole.gradeZLocation },
					type: "HOLE_GRADE",
					priority: SNAP_PRIORITIES.HOLE_GRADE,
					description: `Hole ${hole.holeID} grade`
				});
			}

			// Hole toe (end)
			const toeDist = Math.sqrt(Math.pow(hole.endXLocation - rawWorldX, 2) + Math.pow(hole.endYLocation - rawWorldY, 2));
			if (toeDist <= searchRadius) {
				snapCandidates.push({
					distance: toeDist,
					point: { x: hole.endXLocation, y: hole.endYLocation, z: hole.endZLocation },
					type: "HOLE_TOE",
					priority: SNAP_PRIORITIES.HOLE_TOE,
					description: `Hole ${hole.holeID} toe`
				});
			}
		});
	}

	// 2. Search ALL KAD Objects in unified map
	if (allKADDrawingsMap && allKADDrawingsMap.size > 0) {
		allKADDrawingsMap.forEach((entity) => {
			entity.data.forEach((dataPoint) => {
				const dist = Math.sqrt(Math.pow(dataPoint.pointXLocation - rawWorldX, 2) + Math.pow(dataPoint.pointYLocation - rawWorldY, 2));
				if (dist <= searchRadius) {
					// Determine type based on entity type
					let snapType = "KAD_POINT";
					let priority = SNAP_PRIORITIES.KAD_POINT;

					if (entity.entityType === "point") {
						snapType = "KAD_POINT";
						priority = SNAP_PRIORITIES.KAD_POINT;
					} else if (entity.entityType === "poly") {
						snapType = "KAD_POLYGON_VERTEX";
						priority = SNAP_PRIORITIES.KAD_POLYGON_VERTEX;
					} else if (entity.entityType === "circle") {
						snapType = "KAD_CIRCLE_CENTER";
						priority = SNAP_PRIORITIES.KAD_CIRCLE_CENTER;
					} else if (entity.entityType === "text") {
						snapType = "KAD_TEXT_POSITION";
						priority = SNAP_PRIORITIES.KAD_TEXT_POSITION;
					}

					snapCandidates.push({
						distance: dist,
						point: { x: dataPoint.pointXLocation, y: dataPoint.pointYLocation, z: dataPoint.pointZLocation },
						type: snapType,
						priority: priority,
						description: `${entity.entityType} ${dataPoint.pointID || "item"}`
					});
				}
			});
		});
	}

	// 7. Search Surface Points (from all loaded surfaces)
	if (loadedSurfaces && loadedSurfaces.size > 0) {
		for (const [surfaceId, surface] of loadedSurfaces.entries()) {
			if (surface.visible && surface.points && surface.points.length > 0) {
				surface.points.forEach((surfacePoint, index) => {
					const dist = Math.sqrt(Math.pow(surfacePoint.x - rawWorldX, 2) + Math.pow(surfacePoint.y - rawWorldY, 2));
					if (dist <= searchRadius) {
						snapCandidates.push({
							distance: dist,
							point: { x: surfacePoint.x, y: surfacePoint.y, z: surfacePoint.z },
							type: "SURFACE_POINT",
							priority: SNAP_PRIORITIES.SURFACE_POINT,
							description: `${surface.name} point ${index}`
						});
					}
				});
			}
		}
	}

	// 8. Surface Interpolation (if surface is available)
	if (loadedSurfaces && loadedSurfaces.size > 0) {
		for (const [surfaceId, surface] of loadedSurfaces.entries()) {
			if (surface.visible && surface.points && surface.points.length > 0) {
				surface.points.forEach((surfacePoint, index) => {
					const dist = Math.sqrt(Math.pow(surfacePoint.x - rawWorldX, 2) + Math.pow(surfacePoint.y - rawWorldY, 2));
					if (dist <= searchRadius) {
						snapCandidates.push({
							distance: dist,
							point: { x: surfacePoint.x, y: surfacePoint.y, z: surfacePoint.z },
							type: "SURFACE_POINT",
							priority: SNAP_PRIORITIES.SURFACE_POINT,
							description: `${surface.name} point ${index}`
						});
					}
				});
			}
		}
	}

	// Find the best snap candidate (highest priority, then closest 2D distance)
	if (snapCandidates.length > 0) {
		snapCandidates.sort((a, b) => {
			if (a.priority !== b.priority) {
				return a.priority - b.priority;
			}
			return a.distance - b.distance;
		});

		const bestCandidate = snapCandidates[0];

		return {
			worldX: bestCandidate.point.x,
			worldY: bestCandidate.point.y,
			worldZ: bestCandidate.point.z || drawingElevation || 0, // Use snapped point's Z or fallback
			snapped: true,
			snapTarget: bestCandidate
		};
	}

	// No snap target found - use raw coordinates or the elevation value
	return {
		worldX: rawWorldX,
		worldY: rawWorldY,
		worldZ: drawingZValue || document.getElementById("drawingElevation").value || 0,
		snapped: false,
		snapTarget: null
	};
}

// Convert canvas coordinates to world coordinates with snapping
function canvasToWorldWithSnap(canvasX, canvasY) {
	// Convert to raw world coordinates first
	const rawWorldX = (canvasX - canvas.width / 2) / currentScale + centroidX;
	const rawWorldY = -(canvasY - canvas.height / 2) / currentScale + centroidY;

	// Apply snapping
	return snapToNearestPoint(rawWorldX, rawWorldY);
}

// Enhanced mouse move handler with snap preview
function handleMouseMoveWithSnap(event) {
	const rect = canvas.getBoundingClientRect();
	const mouseX = event.clientX - rect.left;
	const mouseY = event.clientY - rect.top;
	const mouseZ = drawingZValue || document.getElementById("drawingElevation").value || 0;

	// Update global mouse tracking
	currentMouseCanvasX = mouseX;
	currentMouseCanvasY = mouseY;
	currentMouseCanvasZ = mouseZ;

	// Get snapped coordinates for preview
	const snapResult = canvasToWorldWithSnap(mouseX, mouseY, mouseZ);
	currentMouseWorldX = snapResult.worldX;
	currentMouseWorldY = snapResult.worldY;
	currentMouseWorldZ = snapResult.worldZ;

	// Store snap target for visual feedback
	snapHighlight = snapResult.snapped ? snapResult.snapTarget : null;
	// Update elevation field when snapping to a Z value
	if (snapResult.snapped && snapResult.worldZ !== undefined) {
		document.getElementById("drawingElevation").value = snapResult.worldZ;
		drawingZValue = snapResult.worldZ;
		currentMouseWorldZ = snapResult.worldZ;
	}
	// Existing mouse move logic...
	if (isDragging && !isDraggingBearing && !isDraggingHole) {
		deltaX = mouseX - lastMouseX;
		deltaY = mouseY - lastMouseY;
		centroidX -= deltaX / currentScale;
		centroidY += deltaY / currentScale;
		lastMouseX = mouseX;
		lastMouseY = mouseY;
	} else {
		lastMouseX = mouseX;
		lastMouseY = mouseY;
	}

	// ... rest of existing mouse move logic ...
	drawData(points, selectedHole);
}

// Visual feedback for snap highlights
function drawSnapHighlight() {
	if (!snapHighlight || !snapEnabled) return;

	// Convert world coordinates to canvas
	const [snapX, snapY] = worldToCanvas(snapHighlight.point.x, snapHighlight.point.y);

	// Draw snap indicator
	ctx.save();
	ctx.strokeStyle = "#00ff00"; // Bright green
	ctx.lineWidth = 2;
	ctx.fillStyle = "rgba(0, 255, 0, 0.3)";

	// Draw crosshair
	const size = 8;
	ctx.beginPath();
	ctx.moveTo(snapX - size, snapY);
	ctx.lineTo(snapX + size, snapY);
	ctx.moveTo(snapX, snapY - size);
	ctx.lineTo(snapX, snapY + size);
	ctx.stroke();

	// Draw circle
	ctx.beginPath();
	ctx.arc(snapX, snapY, size * 0.7, 0, 2 * Math.PI);
	ctx.stroke();

	// Enhanced tooltip with Z value
	ctx.font = "10px Arial";
	ctx.fillStyle = "#00ff00";
	const zText = snapHighlight.point.z ? ` (${snapHighlight.point.z.toFixed(2)}m RL)` : "";
	ctx.fillText(snapHighlight.description + zText, snapX + 12, snapY - 8);

	ctx.restore();
}

// Settings for snap configuration
function addSnapSettings() {
	// Add to the UI settings panel
	const snapSettings = `
        <div class="setting-group">
            <label class="labelWhite12">Snap Settings:</label>
            <div class="setting-row">
                <label class="labelWhite10">Enable Snapping:</label>
                <input type="checkbox" id="snapEnabled" ${snapEnabled ? "checked" : ""}>
            </div>
            <div class="setting-row">
                <label class="labelWhite10">Snap Radius:</label>
                <input type="number" id="snapRadius" value="${snapRadius}" min="1" max="50" step="0.5">
                <label class="labelWhite10">meters</label>
            </div>
        </div>
    `;

	// Add event listeners for snap settings
	document.getElementById("snapEnabled")?.addEventListener("change", (e) => {
		snapEnabled = e.target.checked;
		localStorage.setItem("snapEnabled", snapEnabled);
	});

	document.getElementById("snapRadius")?.addEventListener("change", (e) => {
		snapRadius = parseFloat(e.target.value);
		localStorage.setItem("snapRadius", snapRadius);
	});
}

///------------  GEOTIFF STUFF GOES HERE ------------///

// NEW: Interpolate elevation from GeoTIFF raster data
function interpolateZFromRaster(worldX, worldY, rasterSurface) {
	const bbox = rasterSurface.bbox;
	const width = rasterSurface.width;
	const height = rasterSurface.height;
	const elevationData = rasterSurface.rasterData;

	// Check if point is within raster bounds
	if (worldX < bbox[0] || worldX > bbox[2] || worldY < bbox[1] || worldY > bbox[3]) {
		return null;
	}

	// Convert world coordinates to pixel coordinates
	const pixelX = ((worldX - bbox[0]) / (bbox[2] - bbox[0])) * width;
	const pixelY = ((bbox[3] - worldY) / (bbox[3] - bbox[1])) * height; // Y is flipped

	// Get integer pixel coordinates for bilinear interpolation
	const x1 = Math.floor(pixelX);
	const y1 = Math.floor(pixelY);
	const x2 = Math.min(x1 + 1, width - 1);
	const y2 = Math.min(y1 + 1, height - 1);

	// Get the four surrounding elevation values
	const z11 = elevationData[y1 * width + x1];
	const z12 = elevationData[y2 * width + x1];
	const z21 = elevationData[y1 * width + x2];
	const z22 = elevationData[y2 * width + x2];

	// Check for nodata values
	if (z11 === -9999 || z12 === -9999 || z21 === -9999 || z22 === -9999) {
		return null;
	}

	// Bilinear interpolation
	const fx = pixelX - x1;
	const fy = pixelY - y1;

	const z1 = z11 * (1 - fx) + z21 * fx;
	const z2 = z12 * (1 - fx) + z22 * fx;
	const z = z1 * (1 - fy) + z2 * fy;

	return z;
}

// Enhanced loadGeoTIFF function
async function loadGeoTIFF(file) {
	try {
		updateStatusMessage("Reading GeoTIFF file...");

		const arrayBuffer = await file.arrayBuffer();
		const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
		const image = await tiff.getImage();
		const rasters = await image.readRasters();

		// Get geospatial info
		const bbox = image.getBoundingBox();
		const width = image.getWidth();
		const height = image.getHeight();
		const bandCount = image.getSamplesPerPixel();

		// console.log(`GeoTIFF Info: ${width}x${height}, ${bandCount} bands`);

		// Check if coordinates are in WGS84 (lat/lon)
		if (isLikelyWGS84(bbox)) {
			// Ask user for projection
			const result = await promptForProjection(bbox);
			if (result.transformed) {
				// Use transformed bbox
				await processGeoTIFF(rasters, result.bbox, width, height, bandCount, file.name);
			} else {
				updateStatusMessage("Coordinate transformation cancelled. GeoTIFF not loaded.");
			}
		} else {
			// Use original bbox
			await processGeoTIFF(rasters, bbox, width, height, bandCount, file.name);
		}
	} catch (error) {
		console.error("Error loading GeoTIFF:", error);
		updateStatusMessage("Error loading GeoTIFF: " + error.message);
	}
}

// Function to process GeoTIFF based on bbox type
async function processGeoTIFF(rasters, bbox, width, height, bandCount, surfaceName) {
	// Determine if this is imagery (RGB) or elevation data
	if (bandCount >= 3) {
		// RGB/RGBA imagery - create background image
		await createImageSurface(rasters, bbox, width, height, bandCount, surfaceName);
	} else {
		// Single band - likely elevation data
		await createElevationSurface(rasters[0], bbox, width, height, surfaceName);
	}
}
// NEW: Create elevation surface with raster data for interpolation
async function createElevationSurface(elevationData, bbox, width, height, surfaceName) {
	try {
		const imageId = imageName || "image_" + Date.now();
		loadedImages.set(imageId, {
			id: imageId,
			name: imageName || imageId,
			canvas: canvas,
			bbox: bbox,
			type: "elevation", // or whatever type
			visible: true,
			transparency: 0.7
		});

		// Then save to DB:
		saveSurfaceToDB(imageId);

		// Also create point cloud for visualization (sampled)
		const points = [];
		const sampleRate = Math.max(1, Math.floor(Math.sqrt(width * height) / 1000));

		for (let y = 0; y < height; y += sampleRate) {
			for (let x = 0; x < width; x += sampleRate) {
				const elevation = elevationData[y * width + x];
				if (elevation !== null && !isNaN(elevation) && elevation !== -9999) {
					const worldX = bbox[0] + (x / width) * (bbox[2] - bbox[0]);
					const worldY = bbox[3] - (y / height) * (bbox[3] - bbox[1]);

					points.push({
						x: worldX,
						y: worldY,
						z: elevation
					});
				}
			}
		}

		// Create triangulated surface for visualization using existing function
		createSurfaceFromPoints(points, surfaceName, true);

		updateStatusMessage(`Elevation surface loaded: ${points.length} points + full raster interpolation`);
	} catch (error) {
		console.error("Error creating elevation surface:", error);
		updateStatusMessage("Error creating elevation surface: " + error.message);
	}
}

// NEW: Create image surface (background imagery)
// Fix the createImageSurface function
async function createImageSurface(rasters, bbox, width, height, bandCount, surfaceName) {
	try {
		// Create canvas for the image
		const imageCanvas = document.createElement("canvas");
		imageCanvas.width = width;
		imageCanvas.height = height;
		const imageCtx = imageCanvas.getContext("2d");

		// Create ImageData
		const imageData = imageCtx.createImageData(width, height);
		const data = imageData.data;

		// Convert raster data to RGBA
		for (let i = 0; i < width * height; i++) {
			const pixelIndex = i * 4;

			// RGB bands
			data[pixelIndex] = rasters[0][i]; // Red
			data[pixelIndex + 1] = rasters[1][i]; // Green
			data[pixelIndex + 2] = rasters[2][i]; // Blue
			data[pixelIndex + 3] = bandCount >= 4 ? rasters[3][i] : 255; // Alpha
		}

		// Put image data on canvas
		imageCtx.putImageData(imageData, 0, 0);

		// Generate unique ID for this image
		const imageId = "image_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);

		// Store in the new loadedImages Map instead of backgroundImage global
		loadedImages.set(imageId, {
			id: imageId,
			name: surfaceName || imageId,
			canvas: imageCanvas,
			bbox: bbox,
			type: "imagery",
			visible: true,
			transparency: 1.0
		});

		// CRITICAL: Update centroids to include GeoTIFF extents
		updateCentroidsWithBBox(bbox);

		// Update display
		drawData(points, selectedHole);

		// SAVE TO DATABASE - Pass the imageId instead of name
		try {
			await saveImageToDB(imageId);
			// console.log("✅ Image saved to database:", surfaceName);
		} catch (saveError) {
			console.error("❌ Failed to save image to database:", saveError);
		}

		// Update tree view to show new image
		debouncedUpdateTreeView();

		setTimeout(() => {
			updateStatusMessage("Background image loaded: " + surfaceName + " (" + width + "x" + height + ")");
			setTimeout(() => {
				updateStatusMessage("");
			}, 3000);
		}, 0);
	} catch (error) {
		console.error("Error creating image surface:", error);
		updateStatusMessage("Error creating image surface: " + error.message);
	}
}

// Add this new helper function
function updateCentroidsWithBBox(bbox) {
	// Call regular updateCentroids first
	updateCentroids();

	// If there's no data yet, use the bbox directly
	if (centroidX === 0 && centroidY === 0) {
		centroidX = (bbox[0] + bbox[2]) / 2;
		centroidY = (bbox[1] + bbox[3]) / 2;
		// console.log("Centering view on GeoTIFF extent:", { centroidX, centroidY });
	}
}

// NEW: Background image support
// WITH this multi-image system:
let loadedImages = new Map(); // Map<imageId, {id, name, canvas, bbox, type, visible, transparency}>

function drawBackgroundImage() {
	if (loadedImages.size === 0) return;

	loadedImages.forEach((image) => {
		if (!image.visible || !image.canvas) return;

		// Draw this image
		const bbox = image.bbox;
		if (bbox && bbox.length >= 4) {
			// Convert world coordinates to canvas coordinates
			const [x1, y1] = worldToCanvas(bbox[0], bbox[3]); // Top-left
			const [x2, y2] = worldToCanvas(bbox[2], bbox[1]); // Bottom-right

			ctx.save();
			// Fix line 21643 in drawBackgroundImage function
			ctx.globalAlpha = image.transparency !== undefined && image.transparency !== null ? image.transparency : 1.0;

			ctx.drawImage(image.canvas, x1, y1, x2 - x1, y2 - y1);
			ctx.restore();
			// Debug rectangle - FIX: Use canvas.width and canvas.height
			ctx.strokeStyle = "red";
			ctx.lineWidth = 1;
			ctx.strokeRect(Math.min(x1, x2), Math.min(y1, y2), Math.abs(x2 - x1), Math.abs(y2 - y1));

			ctx.restore();
		}
	});
}

// Context menu for the GeoTIFF image
function showImageContextMenu(x, y, imageId = null) {
	// Get the specific image if ID provided, otherwise first visible image
	const image = imageId ? loadedImages.get(imageId) : Array.from(loadedImages.values()).find((img) => img.visible);

	if (!image) return;

	if (!image) return;
	const menu = document.createElement("div");
	menu.className = "context-menu";
	menu.style.position = "absolute";
	menu.style.left = x + "px";
	menu.style.top = y + "px";

	// Use dynamic colors based on current theme
	const isDarkMode = document.body.classList.contains("dark-mode") || window.matchMedia("(prefers-color-scheme: dark)").matches;

	const backgroundColor = isDarkMode ? "#2d2d2d" : "#ffffff";
	const borderColor = isDarkMode ? "#555555" : "#cccccc";
	const textColor = isDarkMode ? "#ffffff" : "#000000";
	const hoverColor = isDarkMode ? "#ff0000" : "#ff0000";

	menu.style.backgroundColor = backgroundColor;
	menu.style.border = "1px solid " + borderColor;
	menu.style.borderRadius = "8px";
	menu.style.padding = "4px";
	menu.style.boxShadow = isDarkMode ? "0 2px 8px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.15)";
	menu.style.zIndex = "10000";
	menu.style.color = textColor;
	menu.style.minWidth = "180px";

	// Toggle visibility option
	const toggleOption = document.createElement("div");
	toggleOption.textContent = image.visible ? "Hide Image" : "Show Image";
	toggleOption.style.padding = "8px 12px";
	toggleOption.style.cursor = "pointer";
	toggleOption.style.color = textColor;
	toggleOption.onmouseover = () => {
		toggleOption.style.backgroundColor = hoverColor;
	};
	toggleOption.onmouseout = () => {
		toggleOption.style.backgroundColor = backgroundColor;
	};
	//Update visibility toggle to only affect the clicked image
	toggleOption.onclick = (e) => {
		e.stopPropagation();

		// FIXED: Toggle visibility of ONLY the clicked image
		if (imageId && loadedImages.has(imageId)) {
			const targetImage = loadedImages.get(imageId);
			if (targetImage) {
				targetImage.visible = !targetImage.visible;
				// console.log("Toggled visibility for image '" + (targetImage.name || imageId) + "' to: " + targetImage.visible);
			}
		} else {
			// Fallback: Toggle the image object we already have
			image.visible = !image.visible;
			// console.log("Toggled visibility for image '" + (image.name || "unknown") + "' to: " + image.visible);
		}

		drawData(points, selectedHole);
		safeRemoveMenu(menu);
	};

	// Remove image option
	const removeOption = document.createElement("div");
	removeOption.textContent = "Remove Image";
	removeOption.style.padding = "8px 12px";
	removeOption.style.cursor = "pointer";
	removeOption.style.color = textColor;
	removeOption.onmouseover = () => {
		removeOption.style.backgroundColor = hoverColor;
	};
	removeOption.onmouseout = () => {
		removeOption.style.backgroundColor = backgroundColor;
	};

	//Update remove option to only remove the clicked image
	removeOption.onclick = async (e) => {
		e.stopPropagation();

		try {
			// FIXED: Remove ONLY the clicked image
			if (imageId && loadedImages.has(imageId)) {
				await deleteImageFromDB(imageId);
				loadedImages.delete(imageId);
				// console.log("✅ Removed specific image:", imageId);
			} else {
				// Fallback: Remove the image object we already have
				const fallbackImageId = Array.from(loadedImages.entries()).find(([id, img]) => img === image)?.[0];
				if (fallbackImageId) {
					await deleteImageFromDB(fallbackImageId);
					loadedImages.delete(fallbackImageId);
					// console.log("✅ Removed fallback image:", fallbackImageId);
				}
			}

			drawData(points, selectedHole);
		} catch (error) {
			console.error("Error removing image:", error);
			drawData(points, selectedHole);
		}

		// Now safely remove menu
		safeRemoveMenu(menu);
	};
	//delere all images from DB
	const deleteOption = document.createElement("div");
	deleteOption.textContent = "Delete All Images";
	deleteOption.style.padding = "8px 12px";
	deleteOption.style.cursor = "pointer";
	deleteOption.style.color = textColor;
	deleteOption.onmouseover = () => {
		deleteOption.style.backgroundColor = hoverColor;
	};
	deleteOption.onmouseout = () => {
		deleteOption.style.backgroundColor = backgroundColor;
	};
	// Fix the "Delete All Images" context menu option
	deleteOption.onclick = async (e) => {
		e.stopPropagation();

		try {
			// Clear database AND memory
			await deleteAllImagesFromDB();

			// CRITICAL FIX: Clear the loadedImages Map
			loadedImages.clear();

			// Update tree view and redraw
			debouncedUpdateTreeView();
			drawData(points, selectedHole);

			// console.log("✅ All images deleted from database and memory");
		} catch (error) {
			console.error("Error deleting all images:", error);
		}

		safeRemoveMenu(menu);
	};

	// Try simplifying to just a slider first to see if that works
	const transparencyOption = document.createElement("div");
	transparencyOption.textContent = "Transparency:";
	transparencyOption.appendChild(document.createElement("br")); // Add line break here
	transparencyOption.style.padding = "8px 12px";

	// Create slider
	const slider = document.createElement("input");
	slider.type = "range";
	slider.min = "0";
	slider.max = "100";
	slider.value = Math.round((image.transparency || 1) * 100);
	slider.style.width = "95%"; // Make it take up most of the width
	slider.style.margin = "8px auto 0"; // Add space above
	slider.style.display = "block"; // Make it block level

	slider.onclick = (e) => e.stopPropagation();
	// UPDATE Update transparency slider to only affect the clicked image
	slider.oninput = () => {
		const newTransparency = slider.value / 100;

		// FIXED: Apply to ONLY the specific image, not all images
		if (imageId && loadedImages.has(imageId)) {
			const targetImage = loadedImages.get(imageId);
			if (targetImage) {
				targetImage.transparency = newTransparency;
				//console.log("Updated transparency for image '" + (targetImage.name || imageId) + "' to: " + newTransparency);
			}
		} else {
			// Fallback: Apply to the image object we already have
			image.transparency = newTransparency;
			//console.log("Updated transparency for image '" + (image.name || "unknown") + "' to: " + newTransparency);
		}

		drawData(points, selectedHole);
	};

	transparencyOption.appendChild(slider);
	menu.appendChild(toggleOption);
	menu.appendChild(removeOption);
	menu.appendChild(deleteOption);
	menu.appendChild(transparencyOption);
	document.body.appendChild(menu);

	// Remove menu when clicking elsewhere
	setTimeout(() => {
		document.addEventListener("click", function removeMenu() {
			if (document.body.contains(menu)) {
				document.body.removeChild(menu);
			}
			document.removeEventListener("click", removeMenu);
		});
	}, 0);
}
// REPLACE this function to accept image parameter:
function isPointInBackgroundImage(canvasX, canvasY, image = null) {
	// If no specific image provided, check all visible images
	if (!image) {
		return Array.from(loadedImages.values()).some((img) => img.visible && isPointInBackgroundImage(canvasX, canvasY, img));
	}

	if (!image || !image.canvas || !image.visible) return false;

	const bbox = image.bbox;
	if (!bbox || bbox.length < 4) return false;

	// Convert canvas coordinates to world coordinates
	const [worldX, worldY] = canvasToWorld(canvasX, canvasY);

	// Check if point is within image bounds
	return worldX >= bbox[0] && worldX <= bbox[2] && worldY >= bbox[1] && worldY <= bbox[3];
}

///------------  GEOTIFF STUFF ENDS HERE ------------///

///------------ PROJECTION COORDINATES USING PROJ4 GOES HERE ----------------///
// For future conversions using PROJ4. That is if a user uploads a latlon geotiff ask them to convert.
// Convert should allow aeither a custom proj4 or one from the epsg.io site.
async function loadEPSGCode(epsgCode) {
	try {
		const url = `https://epsg.io/${epsgCode}.proj4`;
		const response = await fetch(url);
		if (!response.ok) throw new Error("Failed to fetch EPSG definition");

		const proj4def = await response.text();
		proj4.defs(`EPSG:${epsgCode}`, proj4def.trim());

		console.log(`Loaded EPSG:${epsgCode} →`, proj4def.trim());
	} catch (err) {
		console.error("Error loading EPSG:", err);
	}
}
// Top 100 most commonly used EPSG codes worldwide
const top100EPSGCodes = [
	{ code: "4326", name: "WGS 84" },
	{ code: "3857", name: "WGS 84 / Pseudo-Mercator" },
	{ code: "4269", name: "NAD83" },
	{ code: "4267", name: "NAD27" },
	{ code: "32633", name: "WGS 84 / UTM zone 33N" },
	{ code: "32634", name: "WGS 84 / UTM zone 34N" },
	{ code: "32635", name: "WGS 84 / UTM zone 35N" },
	{ code: "32636", name: "WGS 84 / UTM zone 36N" },
	{ code: "32637", name: "WGS 84 / UTM zone 37N" },
	{ code: "32638", name: "WGS 84 / UTM zone 38N" },
	{ code: "32639", name: "WGS 84 / UTM zone 39N" },
	{ code: "32640", name: "WGS 84 / UTM zone 40N" },
	{ code: "32641", name: "WGS 84 / UTM zone 41N" },
	{ code: "32642", name: "WGS 84 / UTM zone 42N" },
	{ code: "32643", name: "WGS 84 / UTM zone 43N" },
	{ code: "32644", name: "WGS 84 / UTM zone 44N" },
	{ code: "32645", name: "WGS 84 / UTM zone 45N" },
	{ code: "32646", name: "WGS 84 / UTM zone 46N" },
	{ code: "32647", name: "WGS 84 / UTM zone 47N" },
	{ code: "32648", name: "WGS 84 / UTM zone 48N" },
	{ code: "32649", name: "WGS 84 / UTM zone 49N" },
	{ code: "32650", name: "WGS 84 / UTM zone 50N" },
	{ code: "32651", name: "WGS 84 / UTM zone 51N" },
	{ code: "32652", name: "WGS 84 / UTM zone 52N" },
	{ code: "32653", name: "WGS 84 / UTM zone 53N" },
	{ code: "32654", name: "WGS 84 / UTM zone 54N" },
	{ code: "32655", name: "WGS 84 / UTM zone 55N" },
	{ code: "32656", name: "WGS 84 / UTM zone 56N" },
	{ code: "32657", name: "WGS 84 / UTM zone 57N" },
	{ code: "32658", name: "WGS 84 / UTM zone 58N" },
	{ code: "32659", name: "WGS 84 / UTM zone 59N" },
	{ code: "32660", name: "WGS 84 / UTM zone 60N" },
	{ code: "32701", name: "WGS 84 / UTM zone 1S" },
	{ code: "32702", name: "WGS 84 / UTM zone 2S" },
	{ code: "32703", name: "WGS 84 / UTM zone 3S" },
	{ code: "32704", name: "WGS 84 / UTM zone 4S" },
	{ code: "32705", name: "WGS 84 / UTM zone 5S" },
	{ code: "32706", name: "WGS 84 / UTM zone 6S" },
	{ code: "32707", name: "WGS 84 / UTM zone 7S" },
	{ code: "32708", name: "WGS 84 / UTM zone 8S" },
	{ code: "32709", name: "WGS 84 / UTM zone 9S" },
	{ code: "32710", name: "WGS 84 / UTM zone 10S" },
	{ code: "32711", name: "WGS 84 / UTM zone 11S" },
	{ code: "32712", name: "WGS 84 / UTM zone 12S" },
	{ code: "32713", name: "WGS 84 / UTM zone 13S" },
	{ code: "32714", name: "WGS 84 / UTM zone 14S" },
	{ code: "32715", name: "WGS 84 / UTM zone 15S" },
	{ code: "32716", name: "WGS 84 / UTM zone 16S" },
	{ code: "32717", name: "WGS 84 / UTM zone 17S" },
	{ code: "32718", name: "WGS 84 / UTM zone 18S" },
	{ code: "32719", name: "WGS 84 / UTM zone 19S" },
	{ code: "32720", name: "WGS 84 / UTM zone 20S" },
	{ code: "32721", name: "WGS 84 / UTM zone 21S" },
	{ code: "32722", name: "WGS 84 / UTM zone 22S" },
	{ code: "32723", name: "WGS 84 / UTM zone 23S" },
	{ code: "32724", name: "WGS 84 / UTM zone 24S" },
	{ code: "32725", name: "WGS 84 / UTM zone 25S" },
	{ code: "32726", name: "WGS 84 / UTM zone 26S" },
	{ code: "32727", name: "WGS 84 / UTM zone 27S" },
	{ code: "32728", name: "WGS 84 / UTM zone 28S" },
	{ code: "32729", name: "WGS 84 / UTM zone 29S" },
	{ code: "32730", name: "WGS 84 / UTM zone 30S" },
	{ code: "32731", name: "WGS 84 / UTM zone 31S" },
	{ code: "32732", name: "WGS 84 / UTM zone 32S" },
	{ code: "32733", name: "WGS 84 / UTM zone 33S" },
	{ code: "32734", name: "WGS 84 / UTM zone 34S" },
	{ code: "32735", name: "WGS 84 / UTM zone 35S" },
	{ code: "32736", name: "WGS 84 / UTM zone 36S" },
	{ code: "32737", name: "WGS 84 / UTM zone 37S" },
	{ code: "32738", name: "WGS 84 / UTM zone 38S" },
	{ code: "32739", name: "WGS 84 / UTM zone 39S" },
	{ code: "32740", name: "WGS 84 / UTM zone 40S" },
	{ code: "32741", name: "WGS 84 / UTM zone 41S" },
	{ code: "32742", name: "WGS 84 / UTM zone 42S" },
	{ code: "32743", name: "WGS 84 / UTM zone 43S" },
	{ code: "32744", name: "WGS 84 / UTM zone 44S" },
	{ code: "32745", name: "WGS 84 / UTM zone 45S" },
	{ code: "32746", name: "WGS 84 / UTM zone 46S" },
	{ code: "32747", name: "WGS 84 / UTM zone 47S" },
	{ code: "32748", name: "WGS 84 / UTM zone 48S" },
	{ code: "32749", name: "WGS 84 / UTM zone 49S" },
	{ code: "32750", name: "WGS 84 / UTM zone 50S" },
	{ code: "32751", name: "WGS 84 / UTM zone 51S" },
	{ code: "32752", name: "WGS 84 / UTM zone 52S" },
	{ code: "32753", name: "WGS 84 / UTM zone 53S" },
	{ code: "32754", name: "WGS 84 / UTM zone 54S" },
	{ code: "32755", name: "WGS 84 / UTM zone 55S" },
	{ code: "32756", name: "WGS 84 / UTM zone 56S" },
	{ code: "32757", name: "WGS 84 / UTM zone 57S" },
	{ code: "32758", name: "WGS 84 / UTM zone 58S" },
	{ code: "32759", name: "WGS 84 / UTM zone 59S" },
	{ code: "32760", name: "WGS 84 / UTM zone 60S" },
	{ code: "2154", name: "RGF93 / Lambert-93" },
	{ code: "25832", name: "ETRS89 / UTM zone 32N" },
	{ code: "25833", name: "ETRS89 / UTM zone 33N" },
	{ code: "3035", name: "ETRS89 / LAEA Europe" },
	{ code: "3395", name: "WGS 84 / World Mercator" },
	{ code: "4277", name: "OSGB 1936" },
	{ code: "27700", name: "OSGB 1936 / British National Grid" },
	{ code: "2180", name: "ETRS89 / Poland CS92" },
	{ code: "3003", name: "Monte Mario / Italy zone 1" },
	{ code: "3004", name: "Monte Mario / Italy zone 2" },
	{ code: "31370", name: "Belge 1972 / Belgian Lambert 72" },
	{ code: "28992", name: "Amersfoort / RD New" },
	{ code: "2056", name: "CH1903+ / LV95" },
	{ code: "5514", name: "S-JTSK / Krovak East North" },
	{ code: "102100", name: "WGS 1984 Web Mercator Auxiliary Sphere" }
];
//function to cache a list of common world EPSG codes.
// NOT IN USE - USE THE TOP100EPSGCodes ARRAY ABOVE
function getTop100EPSGCodesFromWeb(codesEPSG) {
	// Cache for storing EPSG codes to avoid repeated API calls
	const epsgCache = new Map();

	// Function to fetch EPSG definitions from web and cache them
	function fetchEPSGDefinitions() {
		return new Promise(function (resolve, reject) {
			updateStatusMessage("Loading coordinate system definitions...");

			let loadedCount = 0;
			const totalCount = codesEPSG.length;

			codesEPSG.forEach(function (epsg) {
				if (!epsgCache.has(epsg.code)) {
					const url = "https://epsg.io/" + epsg.code + ".proj4";
					fetch(url)
						.then(function (response) {
							if (response.ok) {
								return response.text();
							}
							throw new Error("Failed to fetch EPSG:" + epsg.code);
						})
						.then(function (proj4def) {
							epsgCache.set(epsg.code, proj4def.trim());
							proj4.defs("EPSG:" + epsg.code, proj4def.trim());
						})
						.catch(function (error) {
							console.warn("Failed to load EPSG:" + epsg.code, error);
						})
						.finally(function () {
							loadedCount++;
							if (loadedCount === totalCount) {
								updateStatusMessage("Coordinate system definitions loaded");
								resolve(codesEPSG);
							}
						});
				} else {
					loadedCount++;
					if (loadedCount === totalCount) {
						updateStatusMessage("Coordinate system definitions loaded");
						resolve(top100EPSGCodes);
					}
				}
			});
		});
	}

	// Return the cached list or fetch if needed
	if (epsgCache.size === 0) {
		return fetchEPSGDefinitions();
	} else {
		return Promise.resolve(top100EPSGCodes);
	}
}

// Add this function to detect if coordinates are likely WGS84
function isLikelyWGS84(bbox) {
	// WGS84 coordinates typically range from -180 to 180 for longitude
	// and -90 to 90 for latitude
	return bbox[0] >= -180 && bbox[0] <= 180 && bbox[2] >= -180 && bbox[2] <= 180 && bbox[1] >= -90 && bbox[1] <= 90 && bbox[3] >= -90 && bbox[3] <= 90;
}

// Prompt user for projection details
async function promptForProjection(bbox) {
	// Common Australian UTM zones
	const commonEPSGCodes = top100EPSGCodes;

	// Build dropdown options
	const dropdownOptions = commonEPSGCodes.map((item) => `<option value="${item.code}">${item.code} - ${item.name}</option>`).join("");

	return new Promise((resolve) => {
		Swal.fire({
			title: "Coordinate System Conversion Required",
			html: `
                <div style="text-align: left; margin-bottom: 15px;">
                    <p class="labelWhite15">The GeoTIFF appears to use WGS84 (latitude/longitude) coordinates:</p>
                    <pre style="background:#ccc; padding:5px; border-radius:3px; color:#444; font-size:12px;">${bbox[0].toFixed(6) + ", " + bbox[1].toFixed(6) + " to " + bbox[2].toFixed(6) + ", " + bbox[3].toFixed(6)}</pre>
                    <p class="labelWhite15">Kirra2D uses meters East(X)/North(Y). Please select a target coordinate system:</p>
                </div>
                <div class="button-container-2col">
                    <div class="labelWhite15">EPSG Code:</div>
                    <select id="epsgCode" class="swal2-select">
                        <option value="">Select EPSG Code</option>
                        ${dropdownOptions}
                    </select>
                    
                    <div class="labelWhite15">Or Custom Proj4:</div>
                    <textarea id="customProj4" class="swal2-input" placeholder="+proj=utm +zone=50 +south +datum=WGS84 +units=m +no_defs" style="height:60px; width:50%;"></textarea>
                </div>
            `,
			showCancelButton: true,
			focusConfirm: false,
			confirmButtonText: "Transform",
			cancelButtonText: "Cancel",
			customClass: {
				container: "custom-popup-container",
				popup: "custom-popup-container",
				title: "swal2-title",
				confirmButton: "confirm",
				cancelButton: "cancel",
				content: "swal2-content",
				htmlContainer: "swal2-html-container"
			},
			preConfirm: async () => {
				const epsgCode = document.getElementById("epsgCode").value;
				const customProj4 = document.getElementById("customProj4").value;

				try {
					let sourceDef = "+proj=longlat +datum=WGS84 +no_defs";
					let targetDef = "";

					if (epsgCode) {
						await loadEPSGCode(epsgCode);
						targetDef = `EPSG:${epsgCode}`;
					} else if (customProj4) {
						targetDef = customProj4;
					} else {
						Swal.showValidationMessage("Please select an EPSG code or provide a custom Proj4 definition");
						return false;
					}

					// Transform the bounding box
					const ll = proj4(sourceDef, targetDef, [bbox[0], bbox[1]]);
					const ur = proj4(sourceDef, targetDef, [bbox[2], bbox[3]]);

					console.log("Transformed coordinates:", { ll, ur });

					return {
						transformed: true,
						bbox: [ll[0], ll[1], ur[0], ur[1]],
						epsgCode: epsgCode || null,
						customProj4: customProj4 || null
					};
				} catch (error) {
					Swal.showValidationMessage(`Transformation error: ${error.message}`);
					return false;
				}
			}
		}).then((result) => {
			if (result.isConfirmed && result.value) {
				resolve(result.value);
			} else {
				resolve({ transformed: false });
			}
		});
	});
}

///------------ END OF PROJECTION COORDINATES USING PROJ4 GOES HERE ----------------///

// File import icon button handlers
document.addEventListener("DOMContentLoaded", function () {
	// Add click handlers for all file import icon buttons
	const fileImportButtons = document.querySelectorAll(".file-import-btn");

	fileImportButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const targetId = this.getAttribute("data-target");
			const fileInput = document.getElementById(targetId);
			if (fileInput) {
				fileInput.click();
			}
		});
	});
});

//----REPLACEMENT OPTION FOR PRINTING----///

///------------------ PRINT TEMPLATE SYSTEM ------------------///

//KEEP
// Print template configuration
let printMode = false;
let printOrientation = "landscape"; // 'landscape' or 'portrait'
let printPaperSize = "A4"; // 'A4', 'A3', 'A2', 'A1', 'A0'
let currentBlastName = points.length > 0 ? [...new Set(points.map((p) => p.entityName))].join(", ") : "Unnamed Blast";
let isPrinting = false;
//KEEP
// Paper size ratios (width:height)
const paperRatios = {
	A4: { width: 297, height: 210 },
	A3: { width: 420, height: 297 },
	A2: { width: 594, height: 420 },
	A1: { width: 841, height: 594 },
	A0: { width: 1189, height: 841 }
};
//KEEP
// Add this with your other event listeners
document.getElementById("addPrintPreviewToggle").addEventListener("change", function () {
	togglePrintMode();
});
//KEEP
function changePaperSize() {
	const paperSizeSelect = document.getElementById("paperSize");
	if (paperSizeSelect) {
		printPaperSize = paperSizeSelect.value;
		if (printMode) {
			drawData(points, selectedHole); // Redraw with new paper size
		}
	}
}
//KEEP
function changeOrientation() {
	const orientationSelect = document.getElementById("orientation");
	if (orientationSelect) {
		printOrientation = orientationSelect.value;
		if (printMode) {
			drawData(points, selectedHole); // Redraw with new orientation
		}
	}
}
//KEEP
function togglePrintMode() {
	printMode = !printMode;

	// Sync the checkbox state
	const toggle = document.getElementById("addPrintPreviewToggle");
	if (toggle) toggle.checked = printMode;

	if (printMode) {
		updateStatusMessage("Print Preview Mode ON - Position elements within the print boundary");
	} else {
		updateStatusMessage("Print Preview Mode OFF");
	}

	drawData(points, selectedHole); // Redraw with/without print boundary
	// After your drawData call, add:
}
//KEEP
// Calculate print-safe boundary on canvas
function getPrintBoundary() {
	if (!printMode) return null;

	const paper = paperRatios[printPaperSize];
	const aspectRatio = printOrientation === "landscape" ? paper.width / paper.height : paper.height / paper.width;

	// Calculate boundary that fits in canvas with margins
	const canvasMargin = 50; // pixels
	const availableWidth = canvas.width - canvasMargin * 2;
	const availableHeight = canvas.height - canvasMargin * 2;

	let boundaryWidth, boundaryHeight;

	if (availableWidth / availableHeight > aspectRatio) {
		// Canvas is wider than needed - fit by height
		boundaryHeight = availableHeight;
		boundaryWidth = boundaryHeight * aspectRatio;
	} else {
		// Canvas is taller than needed - fit by width
		boundaryWidth = availableWidth;
		boundaryHeight = boundaryWidth / aspectRatio;
	}

	return {
		x: (canvas.width - boundaryWidth) / 2,
		y: (canvas.height - boundaryHeight) / 2,
		width: boundaryWidth,
		height: boundaryHeight,
		marginPercent: 0.1 // 10% margin inside boundary
	};
}
//KEEP
function drawPrintBoundary(ctx) {
	if (!printMode) return;

	const boundary = getPrintBoundary();
	if (!boundary) return;

	ctx.save();

	// Only draw boundaries in preview mode, not when actually printing
	if (!isPrinting) {
		// Add this flag
		// Draw outer boundary (paper edge)
		ctx.strokeStyle = "#ff0000";
		ctx.lineWidth = 2;
		ctx.setLineDash([10, 5]);
		ctx.strokeRect(boundary.x, boundary.y, boundary.width, boundary.height);

		// Draw inner boundary (print-safe area)
		const margin = boundary.width * boundary.marginPercent;
		ctx.strokeStyle = "#0066cc";
		ctx.lineWidth = 1;
		ctx.setLineDash([5, 3]);
		ctx.strokeRect(boundary.x + margin, boundary.y + margin, boundary.width - margin * 2, boundary.height - margin * 2);
	}

	ctx.restore();
}
function printToPDF() {
	printCanvasHiRes();
}

// These are now declared with 'let' in the global scope to allow resizing.
let printCanvas = document.createElement("canvas");
let printCtx = printCanvas.getContext("2d");

// This is the complete, robust printing system.
function printCanvasHiRes() {
	if (!points || points.length === 0) {
		Swal.fire("No Data", "No blast data available for printing", "warning");
		return;
	}

	// Show a loading indicator for better user experience
	Swal.fire({
		title: "Generating High-Resolution PDF",
		text: "Please wait, this may take a moment...",
		allowOutsideClick: false,
		didOpen: () => {
			Swal.showLoading();
		}
	});

	// Use a short delay to ensure the browser has time to process before we
	// try to convert the canvas to an image. This avoids race conditions.
	setTimeout(() => {
		try {
			const dpi = 300;
			const mmToPx = dpi / 25.4;

			const paperSizes = {
				A4: { width: 210, height: 297 },
				A3: { width: 297, height: 420 },
				A2: { width: 420, height: 594 },
				A1: { width: 594, height: 841 },
				A0: { width: 841, height: 1189 }
			};

			const paperSize = paperSizes[printPaperSize] || paperSizes["A4"];
			const isLandscape = printOrientation === "landscape";

			const pageWidth = isLandscape ? paperSize.height : paperSize.width;
			const pageHeight = isLandscape ? paperSize.width : paperSize.height;

			// Safety check for maximum canvas size to prevent browser errors
			const MAX_CANVAS_SIDE = 16384; // Most browsers support up to 16384px
			if (pageWidth * mmToPx > MAX_CANVAS_SIDE || pageHeight * mmToPx > MAX_CANVAS_SIDE) {
				throw new Error(`The selected paper size (${printPaperSize}) creates an image too large for the browser to handle.`);
			}

			// Resize the canvas and get a new context (resizing wipes the old one)
			printCanvas.width = pageWidth * mmToPx;
			printCanvas.height = pageHeight * mmToPx;
			printCtx = printCanvas.getContext("2d");

			printCtx.imageSmoothingEnabled = true;
			printCtx.imageSmoothingQuality = "high";
			printCtx.fillStyle = "white";
			printCtx.fillRect(0, 0, printCanvas.width, printCanvas.height);

			const margin = pageWidth * mmToPx * 0.05;
			const headerHeight = pageHeight * mmToPx * 0.1;
			const footerHeight = pageHeight * mmToPx * 0.05;

			const printArea = {
				x: margin,
				y: margin + headerHeight,
				width: printCanvas.width - 2 * margin,
				height: printCanvas.height - headerHeight - footerHeight - 2 * margin
			};

			printHeader(printCtx, margin, margin, printCanvas.width - 2 * margin, headerHeight);
			printFooter(printCtx, margin, printCanvas.height - footerHeight - margin, printCanvas.width - 2 * margin, footerHeight);

			// This is the key function that correctly scales and draws your data
			drawDataForPrinting(printCtx, printArea);

			// --- PDF Generation ---
			const imgData = printCanvas.toDataURL("image/png", 1.0);

			if (!imgData || imgData.length < 100 || imgData === "data:,") {
				throw new Error("The browser failed to generate the canvas image. This can happen if the image is too large or memory is low.");
			}

			const { jsPDF } = window.jspdf;
			const orientation = isLandscape ? "l" : "p";
			const pdf = new jsPDF(orientation, "mm", printPaperSize.toLowerCase());

			pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
			pdf.save("kirra-blast-" + new Date().toISOString().split("T")[0] + ".pdf");

			Swal.close();
		} catch (error) {
			console.error("PDF Generation Error:", error);
			Swal.fire({
				icon: "error",
				title: "PDF Creation Failed",
				html: `Could not generate the PDF. This usually happens if the paper size is too large for the browser.<br><br><b>Suggestion:</b> Try a smaller paper size (like A4 or A3).<br><br><small>Error: ${error.message}</small>`
			});
		}
	}, 250); // 250ms delay
}

// Replace your existing drawDataForPrinting function with this one.
function drawDataForPrinting(printCtx, printArea) {
	// --- NEW WYSIWYG LOGIC ---

	// 1. Get the on-screen print preview boundary. This is what the user is looking at.
	const screenBoundary = getPrintBoundary();
	if (!screenBoundary) {
		// This error will be caught by the Swal popup in the calling function.
		throw new Error("Print Preview Mode must be active to generate a WYSIWYG print.");
	}

	// 2. Convert the on-screen boundary to world coordinates to find out what data is visible.
	// We use the screen's canvas dimensions, scale, and center point (centroid) to do this.
	const world_x1 = (screenBoundary.x - canvas.width / 2) / currentScale + centroidX;
	const world_y1 = -(screenBoundary.y + screenBoundary.height - canvas.height / 2) / currentScale + centroidY; // World coords are Y-up
	const world_x2 = (screenBoundary.x + screenBoundary.width - canvas.width / 2) / currentScale + centroidX;
	const world_y2 = -(screenBoundary.y - canvas.height / 2) / currentScale + centroidY;

	const minX = world_x1;
	const maxX = world_x2;
	const minY = world_y1;
	const maxY = world_y2;

	// 3. Calculate the correct scale to fit this specific world view into the PDF's printArea.
	const dataWidth = maxX - minX;
	const dataHeight = maxY - minY;
	if (dataWidth <= 0 || dataHeight <= 0) return; // Nothing to print

	const scaleX = printArea.width / dataWidth;
	const scaleY = printArea.height / dataHeight;
	const printScale = Math.min(scaleX, scaleY);

	const scaledWidth = dataWidth * printScale;
	const scaledHeight = dataHeight * printScale;
	const offsetX = printArea.x + (printArea.width - scaledWidth) / 2;
	const offsetY = printArea.y + (printArea.height - scaledHeight) / 2;

	const printCentroidX = minX + dataWidth / 2;
	const printCentroidY = minY + dataHeight / 2;

	// This is our temporary, print-specific coordinate conversion function
	function worldToPrint(worldX, worldY) {
		const x = (worldX - printCentroidX) * printScale + offsetX + scaledWidth / 2;
		const y = -(worldY - printCentroidY) * printScale + offsetY + scaledHeight / 2;
		return [x, y];
	}

	// --- TEMPORARY GLOBAL OVERRIDES ---
	const original_currentScale = currentScale;
	const original_centroidX = centroidX;
	const original_centroidY = centroidY;
	const original_canvas_width = canvas.width;
	const original_canvas_height = canvas.height;
	const original_worldToCanvas = window.worldToCanvas;
	const original_imageVisible = imageVisible;
	const original_surfaceVisible = surfaceVisible;

	// Temporarily set the globals to our new print-specific values
	currentScale = printScale;
	centroidX = printCentroidX;
	centroidY = printCentroidY;
	canvas.width = printCanvas.width;
	canvas.height = printCanvas.height;
	window.worldToCanvas = worldToPrint;
	imageVisible = false;
	surfaceVisible = false;

	// --- CALL THE DRAWING ENGINE ---
	printData(points, selectedHole);

	// --- RESTORE GLOBALS ---
	currentScale = original_currentScale;
	centroidX = original_centroidX;
	centroidY = original_centroidY;
	canvas.width = original_canvas_width;
	canvas.height = original_canvas_height;
	window.worldToCanvas = original_worldToCanvas;
	imageVisible = original_imageVisible;
	surfaceVisible = original_surfaceVisible;
}
//----------------- REPLICATION OF THE UX Canvas but for High Resolution Printing ------------------///
function printVoronoiMetric(metrics, metricName, getColorForMetric) {
	for (let cell of metrics) {
		// Skip if the cell doesn't have a polygon or the metric is null/undefined
		if (!cell.polygon || cell[metricName] == null) continue;

		const color = getColorForMetric(cell[metricName]);

		printCtx.beginPath();
		printCtx.moveTo(cell.polygon[0][0], cell.polygon[0][1]);
		for (let j = 1; j < cell.polygon.length; j++) {
			printCtx.lineTo(cell.polygon[j][0], cell.polygon[j][1]);
		}
		printCtx.closePath();
		printCtx.fillStyle = color;
		printCtx.fill();
	}
}
function printBlastBoundary(polygon, color) {
	//convert wold coords to screen cords
	const screenCoords = polygon.map((point) => {
		const x = (point.x - centroidX) * currentScale + printCanvas.width / 2;
		const y = (-point.y + centroidY) * currentScale + printCanvas.height / 2;
		return { x, y };
	});

	printCtx.beginPath();
	printCtx.moveTo(screenCoords[0].x, screenCoords[0].y);
	for (let i = 1; i < screenCoords.length; i++) {
		printCtx.lineTo(screenCoords[i].x, screenCoords[i].y);
	}
	printCtx.closePath();
	printCtx.strokeStyle = color;
	printCtx.lineWidth = 2;
	printCtx.stroke();
}
function printKADPoints(x, y, z, color) {
	printCtx.beginPath();
	printCtx.arc(x, y, 2, 0, 2 * Math.PI);
	printCtx.strokeStyle = color;
	printCtx.fillStyle = color;
	printCtx.stroke();
	printCtx.fill();
}
function printKADLines(sx, sy, ex, ey, sz, ez, lineWidth, color) {
	printCtx.beginPath();
	printCtx.moveTo(sx, sy);
	printCtx.lineTo(ex, ey);
	printCtx.strokeStyle = color;
	printCtx.lineWidth = lineWidth;
	printCtx.stroke();
}
function printKADPolys(sx, sy, ex, ey, sz, ez, lineWidth, color, isClosed) {
	printCtx.beginPath();
	printCtx.moveTo(sx, sy);
	printCtx.lineTo(ex, ey);
	printCtx.strokeStyle = color;
	printCtx.lineWidth = lineWidth;
	printCtx.stroke();
	if (isClosed) {
		printCtx.closePath();
	}
}
function printKADCircles(x, y, z, radius, lineWidth, strokeColor) {
	printCtx.strokeStyle = strokeColor;
	printCtx.beginPath();
	// Convert radius from world units to screen pixels
	const radiusInPixels = radius * currentScale;
	printCtx.arc(x, y, radiusInPixels, 0, 2 * Math.PI);
	printCtx.lineWidth = lineWidth;
	printCtx.stroke();
}
function printKADTexts(x, y, z, text, color) {
	//printCtx.fillStyle = color;
	printCtx.font = parseInt(currentFontSize - 2) + "px Roboto";
	printMultilineText(printCtx, text, x, y, currentFontSize, "left", color, color, false);
}
function printTrack(lineStartX, lineStartY, lineEndX, lineEndY, gradeX, gradeY, color, subdrillAmount) {
	printCtx.lineWidth = 1;
	const printColor = "black";

	if (subdrillAmount < 0) {
		// NEGATIVE SUBDRILL: Draw only from start to toe (bypass grade)
		// Use 20% opacity for the entire line since it represents "over-drilling"
		printCtx.beginPath();
		printCtx.strokeStyle = printColor;
		printCtx.moveTo(lineStartX, lineStartY);
		printCtx.lineTo(lineEndX, lineEndY);
		printCtx.stroke();
		// Draw from grade to toe (subdrill portion - red)
		printCtx.beginPath();
		printCtx.strokeStyle = "rgba(255, 0, 0, 0.2)"; // Red line (full opacity)
		printCtx.moveTo(lineEndX, lineEndY);
		printCtx.lineTo(gradeX, gradeY);
		printCtx.stroke();
		// Draw grade marker with 20% opacity
		printCtx.beginPath();
		printCtx.arc(gradeX, gradeY, 3, 0, 2 * Math.PI);
		printCtx.fillStyle = `rgba(255, 0, 0, 0.2)`; // Red marker with 20% opacity
		printCtx.fill();
	} else {
		// POSITIVE SUBDRILL: Draw from start to grade (dark), then grade to toe (red)

		// Draw from start to grade point (bench drill portion - dark)
		printCtx.beginPath();
		printCtx.strokeStyle = printColor; // Dark line (full opacity)
		printCtx.moveTo(lineStartX, lineStartY);
		printCtx.lineTo(gradeX, gradeY);
		printCtx.stroke();

		// Draw from grade to toe (subdrill portion - red)
		printCtx.beginPath();
		printCtx.strokeStyle = "rgba(255, 0, 0, 1.0)"; // Red line (full opacity)
		printCtx.moveTo(gradeX, gradeY);
		printCtx.lineTo(lineEndX, lineEndY);
		printCtx.stroke();

		// Draw grade marker (full opacity)
		printCtx.beginPath();
		printCtx.arc(gradeX, gradeY, 3, 0, 2 * Math.PI);
		printCtx.fillStyle = "rgba(255, 0, 0, 1.0)"; // Red marker (full opacity)
		printCtx.fill();
	}
}
function printHoleToe(x, y, fillColor, strokeColor, radius) {
	printCtx.beginPath();
	// Use the toeSizeInMeters directly to set the radius
	printCtx.lineWidth = 1;
	printCtx.arc(x, y, radius, 0, 2 * Math.PI);
	printCtx.fillStyle = fillColor;
	printCtx.strokeStyle = "black";
	printCtx.stroke();
	printCtx.fill();
}
function printHole(x, y, radius, strokeColor) {
	printCtx.strokeStyle = "black";
	printCtx.fillStyle = "black";
	printCtx.lineWidth = 1;
	printCtx.beginPath();
	const minRadius = 1.5;
	const drawRadius = radius > minRadius ? radius : minRadius;
	printCtx.arc(x, y, drawRadius, 0, 2 * Math.PI);
	printCtx.fill(); // fill the circle with the fill color
	printCtx.stroke(); // draw the circle border with the stroke color
}
function printDummy(x, y, radius, strokeColor) {
	printCtx.strokeStyle = "black";
	printCtx.lineWidth = 2; // Adjust the line width as needed
	printCtx.beginPath();
	printCtx.moveTo(x - radius, y - radius);
	printCtx.lineTo(x + radius, y + radius);
	printCtx.moveTo(x - radius, y + radius);
	printCtx.lineTo(x + radius, y - radius);
	printCtx.stroke();
}
function printNoDiameterHole(x, y, sideLength, strokeColor) {
	printCtx.strokeStyle = "black";
	printCtx.lineWidth = 2; // Adjust the line width as needed
	const halfSide = sideLength / 2;
	printCtx.beginPath();
	printCtx.moveTo(x - halfSide, y - halfSide);
	printCtx.lineTo(x + halfSide, y - halfSide);
	printCtx.lineTo(x + halfSide, y + halfSide);
	printCtx.lineTo(x - halfSide, y + halfSide);
	printCtx.closePath(); // Close the path to form a square
	printCtx.stroke();
}
function printHiHole(x, y, radius, fillColor, strokeColor) {
	printCtx.strokeStyle = strokeColor;
	printCtx.beginPath();
	printCtx.arc(x, y, radius, 0, 2 * Math.PI);
	printCtx.fillStyle = fillColor;
	printCtx.fill(); // fill the circle with the fill color
	printCtx.lineWidth = 5;
	printCtx.stroke(); // draw the circle border with the stroke color
}
function printText(x, y, text, color) {
	printCtx.font = parseInt(currentFontSize - 2) + "px Arial";
	printCtx.fillStyle = color;
	printCtx.fillText(text, x, y);
}
function printRightAlignedText(x, y, text, color) {
	printCtx.font = parseInt(currentFontSize - 2) + "px Arial";
	const textWidth = printCtx.measureText(text).width;
	printCtx.fillStyle = color;
	// Draw the text at an x position minus the text width for right alignment
	printText(x - textWidth, y, text, color);
}
function printMultilineText(printCtx, text, x, y, lineHeight = 16, alignment = "left", textColor, boxColor, showBox = false) {
	if (!text) return; //if no text, return
	if (!printCtx) return; //if no context, return
	const lines = text.split("\n");
	//calculate the text width of the widest line NOT the the entire sting.
	let textWidth = 0;
	for (let i = 0; i < lines.length; i++) {
		const lineWidth = printCtx.measureText(lines[i]).width;
		if (lineWidth > textWidth) {
			textWidth = lineWidth;
		}
	}
	//colorise the text
	printCtx.fillStyle = textColor;
	for (let i = 0; i < lines.length; i++) {
		if (alignment == "left") {
			printCtx.fillText(lines[i], x, y + i * lineHeight);
		} else if (alignment == "right") {
			printCtx.fillText(lines[i], x - textWidth, y + i * lineHeight);
		} else if (alignment == "center") {
			// Center each line individually based on its own width
			const lineWidth = printCtx.measureText(lines[i]).width;
			printCtx.fillText(lines[i], x - lineWidth / 2, y + i * lineHeight);
		}
	}

	if (showBox) {
		printCtx.strokeStyle = boxColor;
		printCtx.lineWidth = 1;
		printCtx.beginPath();
		printCtx.roundRect(x - 5 - textWidth / 2, y - 6 - lineHeight / 2, textWidth + 10, lines.length * lineHeight + 6, 4);
		printCtx.stroke();
	}
}
function printDirectionArrow(startX, startY, endX, endY, fillColor, strokeColor, connScale) {
	try {
		// Set up the arrow parameters
		var arrowWidth = (firstMovementSize / 4) * currentScale; // Width of the arrowhead
		var arrowLength = 2 * (firstMovementSize / 4) * currentScale; // Length of the arrowhead
		var tailWidth = arrowWidth * 0.7; // Width of the tail (adjust as needed)
		const angle = Math.atan2(endY - startY, endX - startX); // Angle of the arrow

		// Set the stroke and fill colors
		printCtx.strokeStyle = "black"; // Stroke color (black outline)
		printCtx.fillStyle = fillColor; // Fill color (goldenrod)

		// Begin drawing the arrow as a single path
		printCtx.beginPath();

		// Move to the start point of the arrow
		printCtx.moveTo(startX + (tailWidth / 2) * Math.sin(angle), startY - (tailWidth / 2) * Math.cos(angle)); // Top-left corner of the tail

		// Draw to the end point of the tail (top-right corner)
		printCtx.lineTo(endX - arrowLength * Math.cos(angle) + (tailWidth / 2) * Math.sin(angle), endY - arrowLength * Math.sin(angle) - (tailWidth / 2) * Math.cos(angle));

		// Draw the right base of the arrowhead
		printCtx.lineTo(endX - arrowLength * Math.cos(angle) + arrowWidth * Math.sin(angle), endY - arrowLength * Math.sin(angle) - arrowWidth * Math.cos(angle));

		// Draw the tip of the arrowhead
		printCtx.lineTo(endX, endY);

		// Draw the left base of the arrowhead
		printCtx.lineTo(endX - arrowLength * Math.cos(angle) - arrowWidth * Math.sin(angle), endY - arrowLength * Math.sin(angle) + arrowWidth * Math.cos(angle));

		// Draw back to the bottom-right corner of the tail
		printCtx.lineTo(endX - arrowLength * Math.cos(angle) - (tailWidth / 2) * Math.sin(angle), endY - arrowLength * Math.sin(angle) + (tailWidth / 2) * Math.cos(angle));

		// Draw to the bottom-left corner of the tail
		printCtx.lineTo(startX - (tailWidth / 2) * Math.sin(angle), startY + (tailWidth / 2) * Math.cos(angle));

		printCtx.closePath();
		printCtx.fill(); // Fill the arrow with color
		printCtx.stroke(); // Outline the arrow with a stroke
	} catch (error) {
		console.error("Error while drawing arrow:", error);
	}
}
function printArrow(startX, startY, endX, endY, color, connScale) {
	//console.log(`Drawing arrow from (${startX}, ${startY}) to (${endX}, ${endY}) with color ${color}`);
	try {
		// Set up the arrow parameters
		var arrowWidth = (connScale / 4) * currentScale;
		var arrowLength = 2 * (connScale / 4) * currentScale;

		// Calculate the angle of the line
		const angle = Math.atan2(startX - endX, startY - endY); // Calculate the angle of the line (reversed)

		printCtx.strokeStyle = color;
		printCtx.fillStyle = color;

		// Draw the line
		printCtx.beginPath();
		printCtx.moveTo(parseInt(startX), parseInt(startY));
		printCtx.lineTo(parseInt(endX), parseInt(endY));
		printCtx.lineWidth = 2;
		printCtx.stroke();

		// Draw the arrowhead
		if (endX == startX && endY == startY) {
			var size = (connScale / 4) * currentScale; // Change this value to adjust the size of the house shape
			printCtx.fillStyle = color;
			printCtx.beginPath();
			printCtx.moveTo(endX, endY); // Apex of the house
			printCtx.lineTo(endX - size / 2, endY + size); // Bottom left corner
			printCtx.lineTo(endX - size / 2, endY + 1.5 * size);
			printCtx.lineTo(endX + size / 2, endY + 1.5 * size); // Bottom right corner
			printCtx.lineTo(endX + size / 2, endY + size); // Bottom right corner
			printCtx.closePath(); // Close the shape
			printCtx.stroke(); // Draw the outline
		} else {
			printCtx.beginPath();
			printCtx.moveTo(parseInt(endX), parseInt(endY));
			printCtx.lineTo(endX - arrowLength * Math.cos((Math.PI / 2) * 3 - angle) - arrowWidth * Math.sin((Math.PI / 2) * 3 - angle), endY - arrowLength * Math.sin((Math.PI / 2) * 3 - angle) + arrowWidth * Math.cos((Math.PI / 2) * 3 - angle));
			printCtx.lineTo(endX - arrowLength * Math.cos((Math.PI / 2) * 3 - angle) + arrowWidth * Math.sin((Math.PI / 2) * 3 - angle), endY - arrowLength * Math.sin((Math.PI / 2) * 3 - angle) - arrowWidth * Math.cos((Math.PI / 2) * 3 - angle));
			printCtx.closePath();
			printCtx.fill();
		}
	} catch (error) {
		console.error("Error while printing arrow:", error);
	}
}
function printArrowDelayText(startX, startY, endX, endY, color, text) {
	// Calculate the angle of the text and the midpoint of the line
	const angle = Math.atan2(endY - startY, endX - startX);
	const midX = (startX + endX) / 2;
	const midY = (startY + endY) / 2;

	// Save the current printCanvas state and apply transformations
	printCtx.save();
	printCtx.translate(midX, midY);
	printCtx.rotate(angle);

	// Draw the text along the line
	printCtx.fillStyle = color;
	printCtx.font = parseInt(currentFontSize - 2) + "px Arial";
	printCtx.fillText(text, -currentFontSize, -3);

	// Restore the printCanvas state
	printCtx.restore();
}
function printDelauanySlopeMap(triangles, centroid, strokeColor) {
	if (!triangles || !Array.isArray(triangles) || triangles.length === 0) return;
	printCtx.strokeStyle = "black";
	printCtx.fillStyle = fillColor;
	printCtx.lineWidth = 1;
	console.log("drawDelauanySlopeMap: " + triangles.length);
	for (let i = 0; i < triangles.length; i++) {
		const triangle = triangles[i];
		const tAX = triangle[0][0];
		const tAY = triangle[0][1];
		const tAZ = triangle[0][2];
		const tBX = triangle[1][0];
		const tBY = triangle[1][1];
		const tBZ = triangle[1][2];
		const tCX = triangle[2][0];
		const tCY = triangle[2][1];
		const tCZ = triangle[2][2];

		const edge1 = {
			x: tBX - tAX,
			y: tBY - tAY,
			z: tBZ - tAZ
		};
		const edge2 = {
			x: tCX - tAX,
			y: tCY - tAY,
			z: tCZ - tAZ
		};
		const edge3 = {
			x: tCX - tBX,
			y: tCY - tBY,
			z: tCZ - tBZ
		};

		let maxSlopeAngle = getDipAngle(triangle);

		// Create a triangle array
		const aAX = (tAX - centroid.x) * currentScale + printCanvas.width / 2;
		const aAY = (-tAY + centroid.y) * currentScale + printCanvas.height / 2;
		const aAZ = tAZ;
		const aBX = (tBX - centroid.x) * currentScale + printCanvas.width / 2;
		const aBY = (-tBY + centroid.y) * currentScale + printCanvas.height / 2;
		const aBZ = tBZ;
		const aCX = (tCX - centroid.x) * currentScale + printCanvas.width / 2;
		const aCY = (-tCY + centroid.y) * currentScale + printCanvas.height / 2;
		const aCZ = tCZ;

		// Define the minimum and maximum RGB values (rgb(50, 50, 50) and rgb(200, 200, 200))
		const minRGB = [225, 225, 225];
		const maxRGB = [100, 100, 100];

		// Calculate the RGB values based on maxSlopeAngle using linear interpolation
		const r = Math.round(minRGB[0] + (maxRGB[0] - minRGB[0]) * (maxSlopeAngle / 50));
		const g = Math.round(minRGB[1] + (maxRGB[1] - minRGB[1]) * (maxSlopeAngle / 50));
		const b = Math.round(minRGB[2] + (maxRGB[2] - minRGB[2]) * (maxSlopeAngle / 50));

		const ir = 255 - Math.round(minRGB[0] + (maxRGB[0] - minRGB[0]) * (maxSlopeAngle / 50));
		const ig = 255 - Math.round(minRGB[1] + (maxRGB[1] - minRGB[1]) * (maxSlopeAngle / 50));
		const ib = 255 - Math.round(minRGB[2] + (maxRGB[2] - minRGB[2]) * (maxSlopeAngle / 50));

		// Define the color ranges and corresponding RGB values
		let triangleFillColor;
		if (maxSlopeAngle >= 0 && maxSlopeAngle < 5) {
			// Cornflower blue for angles in the range [0, 4)
			triangleFillColor = "rgb(51, 139, 255)";
		} else if (maxSlopeAngle >= 5 && maxSlopeAngle < 7) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(0, 102, 204)";
		} else if (maxSlopeAngle >= 7 && maxSlopeAngle < 9) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(0, 204, 204)";
		} else if (maxSlopeAngle >= 9 && maxSlopeAngle < 12) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(102, 204, 0)";
		} else if (maxSlopeAngle >= 12 && maxSlopeAngle < 15) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(204, 204, 0)";
		} else if (maxSlopeAngle >= 15 && maxSlopeAngle < 17) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(255, 128, 0)";
		} else if (maxSlopeAngle >= 17 && maxSlopeAngle < 20) {
			// Green for angles in the range [7, 10]
			triangleFillColor = "rgb(255, 0, 0)";
		} else {
			// Default to grey for all other angles
			triangleFillColor = "rgb(153, 0, 76)";
		}

		// Combine the calculated RGB values into the final fill color
		// triangleFillColor = `rgb(${r}, ${g}, ${b})`;
		const triangleStrokeColor = `rgb(${r}, ${g}, ${b})`;
		// Invert the color by subtracting each channel value from 255
		const invertedColor = `rgb(${ir}, ${ig}, ${ib})`;

		printCtx.strokeStyle = triangleStrokeColor;
		printCtx.fillStyle = triangleFillColor;
		printCtx.lineWidth = 1;

		printCtx.beginPath();
		printCtx.moveTo(aAX, aAY);
		printCtx.lineTo(aBX, aBY);
		printCtx.lineTo(aCX, aCY);
		printCtx.closePath();
		printCtx.stroke();
		printCtx.fill();

		printCtx.lineWidth = 1;
	}
}
function printDelauanyBurdenRelief(triangles, centroid, strokeColor) {
	if (!triangles || !Array.isArray(triangles) || triangles.length === 0) return;
	printCtx.strokeStyle = "black";
	printCtx.lineWidth = 1;
	//console.log("drawDelauanyBurdenRelief: " + triangles.length);
	// const reliefResults = delaunayContourBurdenRelief(triangles, 20, 0);
	// console.log("Relief Results:", reliefResults);
	for (let i = 0; i < triangles.length; i++) {
		const triangle = triangles[i];
		const tAX = triangle[0][0];
		const tAY = triangle[0][1];
		const tAZ = triangle[0][2];
		const tBX = triangle[1][0];
		const tBY = triangle[1][1];
		const tBZ = triangle[1][2];
		const tCX = triangle[2][0];
		const tCY = triangle[2][1];
		const tCZ = triangle[2][2];

		// Find the earliest and latest times
		const earliestTime = Math.min(tAZ, tBZ, tCZ);
		const latestTime = Math.max(tAZ, tBZ, tCZ);

		// Calculate the time difference
		const timeDifference = latestTime - earliestTime; // ms

		// Determine which points correspond to the earliest and latest times
		let p1, p2;
		if (earliestTime === tAZ) {
			p1 = { x: tAX, y: tAY };
		} else if (earliestTime === tBZ) {
			p1 = { x: tBX, y: tBY };
		} else {
			p1 = { x: tCX, y: tCY };
		}

		if (latestTime === tAZ) {
			p2 = { x: tAX, y: tAY };
		} else if (latestTime === tBZ) {
			p2 = { x: tBX, y: tBY };
		} else {
			p2 = { x: tCX, y: tCY };
		}

		// Calculate the distance between the two points (earliest and latest)
		const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

		// Calculate burden relief in ms/m
		const burdenRelief = timeDifference / distance;

		//console.log("Time Difference (ms):", timeDifference);
		//console.log("Distance (m):", distance);
		//console.log("Burden Relief (ms/m):", burdenRelief);

		// Color mapping based on timing relief (adjust values as needed)
		let triangleFillColor;
		if (burdenRelief < 4) {
			triangleFillColor = "rgb(75, 20, 20)"; // fast
		} else if (burdenRelief < 7) {
			triangleFillColor = "rgb(255, 40, 40)";
		} else if (burdenRelief < 10) {
			triangleFillColor = "rgb(255, 120, 50)"; //
		} else if (burdenRelief < 13) {
			triangleFillColor = "rgb(255, 255, 50)"; //
		} else if (burdenRelief < 16) {
			triangleFillColor = "rgb(50, 255, 70)"; //
		} else if (burdenRelief < 19) {
			triangleFillColor = "rgb(50, 255, 200)"; //
		} else if (burdenRelief < 22) {
			triangleFillColor = "rgb(50, 230, 255)"; //
		} else if (burdenRelief < 25) {
			triangleFillColor = "rgb(50, 180, 255)"; //
		} else if (burdenRelief < 30) {
			triangleFillColor = "rgb(50, 100, 255)"; //
		} else if (burdenRelief < 40) {
			triangleFillColor = "rgb(50, 0, 255)"; //
		} else {
			triangleFillColor = "rgb(75, 0, 150)"; // slow
		}

		printCtx.fillStyle = triangleFillColor;

		// Draw triangle
		const aAX = (tAX - centroid.x) * currentScale + printCanvas.width / 2;
		const aAY = (-tAY + centroid.y) * currentScale + printCanvas.height / 2;
		const aBX = (tBX - centroid.x) * currentScale + printCanvas.width / 2;
		const aBY = (-tBY + centroid.y) * currentScale + printCanvas.height / 2;
		const aCX = (tCX - centroid.x) * currentScale + printCanvas.width / 2;
		const aCY = (-tCY + centroid.y) * currentScale + printCanvas.height / 2;

		printCtx.beginPath();
		printCtx.moveTo(aAX, aAY);
		printCtx.lineTo(aBX, aBY);
		printCtx.lineTo(aCX, aCY);
		printCtx.closePath();
		printCtx.stroke();
		printCtx.fill();
	}
}
function printReliefLegend(strokecolor) {
	//draw a legend at the bottom of the screen in the center
	//the legend should be for the drawDelauanyTriangles function

	const legend0to4 = "rgb(75, 20, 20)"; // fast
	const legend4to7 = "rgb(255, 40, 40)";
	const legend7to10 = "rgb(255, 120, 50)"; //
	const legend10to13 = "rgb(255, 255, 50)"; //
	const legend13to16 = "rgb(50, 255, 70)"; //
	const legend16to19 = "rgb(50, 255, 200)"; //
	const legend19to22 = "rgb(50, 230, 255)"; //
	const legend22to25 = "rgb(50, 180, 255)"; //
	const legend25to30 = "rgb(50, 100, 255)"; //
	const legend30to40 = "rgb(50, 0, 255)"; //
	const legend40above = "rgb(75, 0, 150)"; // slow

	//draw the legend
	printCtx.beginPath();
	printCtx.fill();

	printCtx.font = "14px Roboto";
	printCtx.fontWeight = "bold";
	printCtx.fillStyle = "black";
	printCtx.fillText("Legend Relief", 10, printCanvas.height / 2 - 70);
	printCtx.fillText("0ms/m - 4ms/m", 10, printCanvas.height / 2 - 40);
	printCtx.fillText("4ms/m - 7ms/m", 10, printCanvas.height / 2 - 10);
	printCtx.fillText("7ms/m - 10ms/m", 10, printCanvas.height / 2 + 20);
	printCtx.fillText("10ms/m - 13ms/m", 10, printCanvas.height / 2 + 50);
	printCtx.fillText("13ms/m - 16ms/m", 10, printCanvas.height / 2 + 80);
	printCtx.fillText("16ms/m - 19ms/m", 10, printCanvas.height / 2 + 110);
	printCtx.fillText("19ms/m - 22ms/m", 10, printCanvas.height / 2 + 140);
	printCtx.fillText("22ms/m - 25ms/m", 10, printCanvas.height / 2 + 170);
	printCtx.fillText("25ms/m - 30ms/m", 10, printCanvas.height / 2 + 200);
	printCtx.fillText("30ms/m - 40ms/m", 10, printCanvas.height / 2 + 230);
	printCtx.fillText("40ms/m above", 10, printCanvas.height / 2 + 260);
	printCtx.fillStyle = legend0to4;
	printCtx.fillRect(130, printCanvas.height / 2 - 55, 20, 20);
	printCtx.fillStyle = legend4to7;
	printCtx.fillRect(130, printCanvas.height / 2 - 25, 20, 20);
	printCtx.fillStyle = legend7to10;
	printCtx.fillRect(130, printCanvas.height / 2 + 5, 20, 20);
	printCtx.fillStyle = legend10to13;
	printCtx.fillRect(130, printCanvas.height / 2 + 35, 20, 20);
	printCtx.fillStyle = legend13to16;
	printCtx.fillRect(130, printCanvas.height / 2 + 65, 20, 20);
	printCtx.fillStyle = legend16to19;
	printCtx.fillRect(130, printCanvas.height / 2 + 95, 20, 20);
	printCtx.fillStyle = legend19to22;
	printCtx.fillRect(130, printCanvas.height / 2 + 125, 20, 20);
	printCtx.fillStyle = legend22to25;
	printCtx.fillRect(130, printCanvas.height / 2 + 155, 20, 20);
	printCtx.fillStyle = legend25to30;
	printCtx.fillRect(130, printCanvas.height / 2 + 185, 20, 20);
	printCtx.fillStyle = legend30to40;
	printCtx.fillRect(130, printCanvas.height / 2 + 215, 20, 20);
	printCtx.fillStyle = legend40above;
	printCtx.fillRect(130, printCanvas.height / 2 + 245, 20, 20);
	printCtx.stroke();
}
function printTriangleAngleText(triangle, centroid, strokeColor) {
	if (!triangle || !Array.isArray(triangle) || triangle.length !== 3) return;
	const triangleCentroid = calculateTriangleCentroid(triangle);
	let maxSlopeAngle = getDipAngle(triangle);

	// FIX: Use worldToCanvas and printText to draw on the correct (print) canvas
	const [x, y] = worldToCanvas(triangleCentroid.x, triangleCentroid.y);
	printText(x, y, parseFloat(maxSlopeAngle).toFixed(1), "black");
}
function printTriangleBurdenReliefText(triangle, centroid, strokeColor) {
	if (!triangle || !Array.isArray(triangle) || triangle.length !== 3) return;
	const triangleCentroid = calculateTriangleCentroid(triangle);
	let burdenRelief = getBurdenRelief(triangle);

	// FIX: Use worldToCanvas and printText to draw on the correct (print) canvas
	const [x, y] = worldToCanvas(triangleCentroid.x, triangleCentroid.y);
	printText(x, y, parseFloat(burdenRelief).toFixed(1), "black");
}
function printLegend(strokecolor) {
	const legend0to5 = "rgb(51, 139, 255)";
	const legend5to7 = "rgb(0, 102, 204)";
	const legend7to9 = "rgb(0, 204, 204)";
	const legend9to12 = "rgb(102, 204, 0)";
	const legend12to15 = "rgb(204, 204, 0)";
	const legend15to17 = "rgb(255, 128, 0)";
	const legend17to20 = "rgb(255, 0, 0)";
	const legend20above = "rgb(153, 0, 76)";
	//draw the legend
	printCtx.beginPath();
	printCtx.fill();
	printCtx.font = "14px Roboto";
	printCtx.fontWeight = "bold";
	printCtx.fillStyle = strokecolor;
	printCtx.fillText("Legend Slope", 10, printCanvas.height / 2 - 70);
	printCtx.fillText("0\u00B0-5\u00B0", 10, printCanvas.height / 2 - 40);
	printCtx.fillText("5\u00B0-7\u00B0", 10, printCanvas.height / 2 - 10);
	printCtx.fillText("7\u00B0-9\u00B0", 10, printCanvas.height / 2 + 20);
	printCtx.fillText("9\u00B0-12\u00B0", 10, printCanvas.height / 2 + 50);
	printCtx.fillText("12\u00B0-15\u00B0", 10, printCanvas.height / 2 + 80);
	printCtx.fillText("15\u00B0-17\u00B0", 10, printCanvas.height / 2 + 110);
	printCtx.fillText("17\u00B0-20\u00B0", 10, printCanvas.height / 2 + 140);
	printCtx.fillText("20\u00B0+", 10, printCanvas.height / 2 + 170);
	printCtx.fillStyle = legend0to5;
	printCtx.fillRect(60, printCanvas.height / 2 - 55, 20, 20);
	printCtx.fillStyle = legend5to7;
	printCtx.fillRect(60, printCanvas.height / 2 - 25, 20, 20);
	printCtx.fillStyle = legend7to9;
	printCtx.fillRect(60, printCanvas.height / 2 + 5, 20, 20);
	printCtx.fillStyle = legend9to12;
	printCtx.fillRect(60, printCanvas.height / 2 + 35, 20, 20);
	printCtx.fillStyle = legend12to15;
	printCtx.fillRect(60, printCanvas.height / 2 + 65, 20, 20);
	printCtx.fillStyle = legend15to17;
	printCtx.fillRect(60, printCanvas.height / 2 + 95, 20, 20);
	printCtx.fillStyle = legend17to20;
	printCtx.fillRect(60, printCanvas.height / 2 + 125, 20, 20);
	printCtx.fillStyle = legend20above;
	printCtx.fillRect(60, printCanvas.height / 2 + 155, 20, 20);
	printCtx.stroke();
}
//ENGINE
// Replace your existing printData function with this one
function printData(points, selectedHole) {
	// This resizing logic can cause issues, we handle it in the print setup.
	// if (printCanvas) {
	// 	if (printCanvas.width !== printCanvas.clientWidth || printCanvas.height !== printCanvas.clientHeight) {
	// 		printCanvas.width = printCanvas.clientWidth;
	// 		printCanvas.height = printCanvas.clientHeight;
	// 	}
	// }

	if (printCtx) {
		// FIX: Do NOT clear the canvas here. The print setup already prepared it with a
		// white background. This function was likely clearing the main screen canvas by mistake.
		// clearCanvas();

		printCtx.imageSmoothingEnabled = false;
		const displayOptions = getDisplayOptions();
		let holeMap = new Map();
		if (points && Array.isArray(points) && points.length > 0) {
			holeMap = buildHoleMap(points);
		}
		// Draw background image FIRST (bottom layer)
		printBackgroundImage();
		// Draw surface triangles SECOND
		printSurface();

		// In printData function, replace the printing logic with:
		for (const [name, entity] of allKADDrawingsMap.entries()) {
			if (developerModeEnabled && entity.entityType === "point") {
				// Draw points - FIX: Remove extra parameters
				entity.data.forEach((point) => {
					const screenX = (point.pointXLocation - centroidX) * currentScale + printCanvas.width / 2;
					const screenY = -(point.pointYLocation - centroidY) * currentScale + printCanvas.height / 2;
					printKADPoints(screenX, screenY, point.pointZLocation, point.color); // ← Remove pointDiameter and 1
				});
			} else if (entity.entityType === "point") {
				// Apply pixel distance simplification to points for performance
				const originalPoints = entity.data;
				const simplifiedPoints = simplifyByPxDist(originalPoints, 3); // Slightly smaller threshold for points

				for (const pointData of simplifiedPoints) {
					const [x, y] = worldToCanvas(pointData.pointXLocation, pointData.pointYLocation);
					printKADPoints(x, y, pointData.pointZLocation, pointData.color);
				}
			} else if (entity.entityType === "circle") {
				// Draw circles
				entity.data.forEach((circle) => {
					const screenX = (circle.pointXLocation - centroidX) * currentScale + printCanvas.width / 2;
					const screenY = -(circle.pointYLocation - centroidY) * currentScale + printCanvas.height / 2;
					printKADCircles(screenX, screenY, circle.pointZLocation, circle.radius, circle.lineWidth, circle.color);
				});
			} else if (entity.entityType === "text") {
				// Draw text - Fix the property name
				entity.data.forEach((textData) => {
					if (textData && textData.text) {
						// ← Change from textValue to text
						const screenX = (textData.pointXLocation - centroidX) * currentScale + printCanvas.width / 2;
						const screenY = -(textData.pointYLocation - centroidY) * currentScale + printCanvas.height / 2;
						printKADTexts(screenX, screenY, textData.pointZLocation, textData.text, textData.color); // ← Change textValue to text and strokeColor to color
					}
				});
			} else if (developerModeEnabled && (entity.entityType === "line" || entity.entityType === "poly")) {
				// --- Developer Mode: Full quality, no simplification ---
				const points = entity.data;
				if (points.length < 2) continue;

				// Draw all segments without any simplification
				for (let i = 0; i < points.length - 1; i++) {
					const currentPoint = points[i]; // FIRST point of segment
					const nextPoint = points[i + 1]; // SECOND point of segment

					const [sx, sy] = worldToCanvas(currentPoint.pointXLocation, currentPoint.pointYLocation);
					const [ex, ey] = worldToCanvas(nextPoint.pointXLocation, nextPoint.pointYLocation);

					// Use FIRST point properties
					printKADPolys(sx, sy, ex, ey, currentPoint.pointZLocation, nextPoint.pointZLocation, currentPoint.lineWidth, currentPoint.color, false);
				}

				// Handle closing segment for polygons
				const isClosed = entity.entityType === "poly";
				if (isClosed && points.length > 2) {
					const firstPoint = points[0];
					const lastPoint = points[points.length - 1];
					const [sx, sy] = worldToCanvas(lastPoint.pointXLocation, lastPoint.pointYLocation);
					const [ex, ey] = worldToCanvas(firstPoint.pointXLocation, firstPoint.pointYLocation);

					// Use last point properties for closing segment
					printKADPolys(sx, sy, ex, ey, lastPoint.pointZLocation, firstPoint.pointZLocation, lastPoint.lineWidth, lastPoint.color, false);
				}
			} else if (!developerModeEnabled && (entity.entityType === "line" || entity.entityType === "poly")) {
				// --- Pixel-distance simplification for performance ---
				const originalPoints = entity.data;
				if (originalPoints.length < 2) continue;

				// Simplify by pixel distance
				let pointThreshold = 2;
				if (currentScale > 1) {
					pointThreshold = 2;
				} else {
					pointThreshold = 1;
				}

				const simplifiedPoints = simplifyByPxDist(originalPoints, pointThreshold);

				// Draw the simplified line/polygon
				for (let i = 0; i < simplifiedPoints.length - 1; i++) {
					const currentPoint = simplifiedPoints[i];
					const nextPoint = simplifiedPoints[i + 1];

					const [sx, sy] = worldToCanvas(currentPoint.pointXLocation, currentPoint.pointYLocation);
					const [ex, ey] = worldToCanvas(nextPoint.pointXLocation, nextPoint.pointYLocation);

					// Use FIRST point properties
					printKADPolys(sx, sy, ex, ey, currentPoint.pointZLocation, nextPoint.pointZLocation, currentPoint.lineWidth, currentPoint.color, false);
				}

				// Handle closing segment for polygons
				const isClosed = entity.entityType === "poly";
				if (isClosed && simplifiedPoints.length > 2) {
					const firstPoint = simplifiedPoints[0];
					const lastPoint = simplifiedPoints[simplifiedPoints.length - 1];
					const [sx, sy] = worldToCanvas(lastPoint.pointXLocation, lastPoint.pointYLocation);
					const [ex, ey] = worldToCanvas(firstPoint.pointXLocation, firstPoint.pointYLocation);

					// Use last point properties for closing segment
					printKADPolys(sx, sy, ex, ey, lastPoint.pointZLocation, firstPoint.pointZLocation, lastPoint.lineWidth, lastPoint.color, false);
				}
			}
		}

		// VORONOI PF & OVERLAYS
		const tri = delaunayTriangles(points, maxEdgeLength);
		const blastBoundaryPolygon = createBlastBoundaryPolygon(tri.resultTriangles);
		const offsetBoundaryPolygon = offsetPolygonClipper(blastBoundaryPolygon, getAverageDistance(points) / 2);

		// Voronoi Powder Factor
		if (displayOptions.voronoiPF) {
			// console.log("DEBUG: VORONOI PF");
			switch (selectedVoronoiMetric) {
				case "powderFactor":
					// console.log("Drawing Powder Factor");
					//get the min and max values for the PF if isVoronoiLegendFixed is false
					let minPF, maxPF, intervalPF, deltaPF;

					if (!isVoronoiLegendFixed) {
						// console.log("DEBUG: VORONOI PF NOT FIXED");
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.powderFactor).filter((v) => v != null && !isNaN(v));
						minPF = 0; //values.length > 0 ? Math.min(...values) : 0;
						maxPF = values.length > 0 ? Math.max(...values) : 3;
						if (maxPF - minPF > 0) {
							deltaPF = maxPF - minPF;
							intervalPF = deltaPF / 4;
						} else {
							minPF = 0;
							maxPF = 1;
							intervalPF = 0.2;
						}
					} else {
						// console.log("DEBUG: VORONOI PF FIXED");
						minPF = 0;
						maxPF = 3;
						if (maxPF - minPF > 0) {
							deltaPF = maxPF - minPF;
							intervalPF = deltaPF > 0 ? Math.ceil(deltaPF / 10) : 0.5;
						} else {
							minPF = 0;
							maxPF = 1;
							intervalPF = 0.2;
						}
					}
					printVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getPFColor(value, minPF, maxPF), "Legend Powder Factor", minPF, maxPF, intervalPF);
					break;
				case "mass":
					// console.log("Drawing Mass");
					let minMass, maxMass, intervalMass, deltaMass;

					if (!isVoronoiLegendFixed) {
						// console.log("DEBUG: VORONOI MASS NOT FIXED");
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.mass).filter((v) => v != null && !isNaN(v));
						minMass = values.length > 0 ? Math.min(...values) : 0;
						maxMass = values.length > 0 ? Math.max(...values) : 500;
						if (maxMass - minMass > 0) {
							deltaMass = maxMass - minMass;
							intervalMass = deltaMass / 4;
						} else {
							minMass = 0;
							maxMass = 1;
							intervalMass = 0.2;
						}
					} else {
						// console.log("DEBUG: VORONOI MASS FIXED");
						minMass = 0;
						maxMass = 1000;
						if (maxMass - minMass > 0) {
							deltaMass = maxMass - minMass;
							intervalMass = deltaMass > 0 ? Math.ceil(deltaMass / 10) : 250;
						} else {
							minMass = 0;
							maxMass = 1;
							intervalMass = 0.2;
						}
					}
					printVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getMassColor(value, minMass, maxMass), "Legend Mass", minMass, maxMass, intervalMass);
					break;
				case "volume": {
					// console.log("Drawing Volume");
					let minVol, maxVol, intervalVol, deltaVol;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.volume).filter((v) => v != null && !isNaN(v));
						minVol = values.length > 0 ? Math.min(...values) : 0;
						maxVol = values.length > 0 ? Math.max(...values) : 100;
						if (maxVol - minVol > 0) {
							deltaVol = maxVol - minVol;
							intervalVol = deltaVol / 10;
						} else {
							minVol = 0;
							maxVol = 1;
							intervalVol = 0.2;
						}
					} else {
						minVol = 0;
						maxVol = 5000;
						if (maxVol - minVol > 0) {
							deltaVol = maxVol - minVol;
							intervalVol = 500;
						} else {
							minVol = 0;
							maxVol = 1;
							intervalVol = 0.2;
						}
					}
					printVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getVolumeColor(value, minVol, maxVol), "Legend Volume", minVol, maxVol, intervalVol);
					break;
				}
				case "area": {
					// console.log("Drawing Area");
					let minArea, maxArea, intervalArea, deltaArea;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.area).filter((v) => v != null && !isNaN(v));
						minArea = values.length > 0 ? Math.min(...values) : 0;
						maxArea = values.length > 0 ? Math.max(...values) : 100;
						if (maxArea - minArea > 0) {
							deltaArea = maxArea - minArea;
							intervalArea = deltaArea / 10;
						} else {
							minArea = 0;
							maxArea = 1;
							intervalArea = 0.2;
						}
					} else {
						minArea = 0;
						maxArea = 500;
						if (maxArea - minArea > 0) {
							deltaArea = maxArea - minArea;
							intervalArea = 50;
						} else {
							minArea = 0;
							maxArea = 1;
							intervalArea = 0.2;
						}
					}
					printVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getAreaColor(value, minArea, maxArea), "Legend Area", minArea, maxArea, intervalArea);
					break;
				}
				case "measuredLength": {
					// console.log("Drawing Measured Length");
					let minMLen, maxMLen, intervalMLen, deltaMLen;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.measuredLength).filter((v) => v != null && !isNaN(v));
						minMLen = values.length > 0 ? Math.min(...values) : 0;
						maxMLen = values.length > 0 ? Math.max(...values) : 50;
						if (maxMLen - minMLen > 0) {
							deltaMLen = maxMLen - minMLen;
							intervalMLen = deltaMLen / 10;
						} else if (maxMLen > 0) {
							minMLen = 0;
							maxMLen = maxMLen;
							intervalMLen = (maxMLen - minMLen) / 10;
						} else {
							minMLen = 0;
							maxMLen = 1;
							intervalMLen = 0.2;
						}
					} else {
						minMLen = 0;
						maxMLen = 50;
						if (maxMLen - minMLen > 0) {
							deltaMLen = maxMLen - minMLen;
							intervalMLen = 5;
						} else if (maxMLen > 0) {
							minMLen = 0;
							maxMLen = maxMLen;
							intervalMLen = (maxMLen - minMLen) / 10;
						} else {
							minMLen = 0;
							maxMLen = 1;
							intervalMLen = 0.2;
						}
					}
					printVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getLengthColor(value, minMLen, maxMLen), "Legend Measured Length", minMLen, maxMLen, intervalMLen);
					break;
				}
				case "designedLength": {
					// console.log("Drawing Designed Length");
					let minDLen, maxDLen, intervalDLen, deltaDLen;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const values = clippedCells.map((c) => c.designedLength).filter((v) => v != null && !isNaN(v));
						minDLen = values.length > 0 ? Math.min(...values) : 0;
						maxDLen = values.length > 0 ? Math.max(...values) : 50;
						if (maxDLen - minDLen > 0) {
							deltaDLen = maxDLen - minDLen;
							intervalDLen = deltaDLen / 10;
						} else if (maxDLen > 0) {
							minDLen = 0;
							maxDLen = maxDLen;
							intervalDLen = (maxDLen - minDLen) / 10;
						} else {
							minDLen = 0;
							maxDLen = 1;
							intervalDLen = 0.2;
						}
					} else {
						minDLen = 0;
						maxDLen = 50;
						if (maxDLen - minDLen > 0) {
							deltaDLen = maxDLen - minDLen;
							intervalDLen = 5;
						} else if (maxDLen > 0) {
							minDLen = 0;
							maxDLen = maxDLen;
							intervalDLen = (maxDLen - minDLen) / 10;
						} else {
							minDLen = 0;
							maxDLen = 1;
							intervalDLen = 0.2;
						}
					}
					printVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getLengthColor(value, minDLen, maxDLen), "Legend Designed Length", minDLen, maxDLen, intervalDLen);
					break;
				}
				case "holeFiringTime": {
					// console.log("Drawing Hole Firing Time");
					let minHTime, maxHTime, intervalHTime, deltaHTime;

					if (!isVoronoiLegendFixed) {
						const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
						const clippedCells = clipVoronoiCells(voronoiMetrics);
						const holeTimes = clippedCells.map((c) => c.holeFiringTime).filter((t) => t != null && !isNaN(t));
						minHTime = holeTimes.length > 0 ? Math.min(...holeTimes) : 0;
						maxHTime = holeTimes.length > 0 ? Math.max(...holeTimes) : 5000;
						if (maxHTime - minHTime > 0) {
							deltaHTime = maxHTime - minHTime;
							intervalHTime = deltaHTime / 10;
						} else {
							minHTime = 0;
							maxHTime = 1;
							intervalHTime = 0.5;
						}
					} else {
						minHTime = 0;
						maxHTime = 5000;
						if (maxHTime - minHTime > 0) {
							deltaHTime = maxHTime - minHTime;
							intervalHTime = deltaHTime > 0 ? Math.ceil(deltaHTime / 10) : 1000;
						} else {
							minHTime = 0;
							maxHTime = 1;
							intervalHTime = 0.5;
						}
					}
					printVoronoiLegendAndCells(points, selectedVoronoiMetric, (value) => getHoleFiringTimeColor(value, minHTime, maxHTime), "Legend Hole Firing Time", minHTime, maxHTime, intervalHTime);
					break;
				}
			}
		}

		// Slope Map
		if (displayOptions.slopeMap) {
			const centroid = { x: centroidX, y: centroidY };
			const { resultTriangles } = delaunayTriangles(points, maxEdgeLength);
			printDelauanySlopeMap(resultTriangles, centroid, strokeColor);
			for (const triangle of resultTriangles) {
				printTriangleAngleText(triangle, centroid, "black");
			}
			printLegend("black");
		}

		// Burden Relief
		if (displayOptions.burdenRelief) {
			const centroid = { x: centroidX, y: centroidY };
			const { reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
			printDelauanyBurdenRelief(reliefTriangles, centroid, strokeColor);
			for (const triangle of reliefTriangles) {
				printTriangleBurdenReliefText(triangle, centroid, "black");
			}
			printReliefLegend("black");
		}

		// First Movement Direction Arrows
		if (displayOptions.firstMovement) {
			connScale = document.getElementById("connSlider").value;
			for (const arrow of directionArrows) {
				const [startX, startY] = worldToCanvas(arrow[0], arrow[1]);
				const [endX, endY] = worldToCanvas(arrow[2], arrow[3]);
				printDirectionArrow(startX, startY, endX, endY, arrow[4], "black", arrow[5]);
			}
		}

		// Contour Lines
		if (displayOptions.contour) {
			printCtx.lineWidth = 3;
			printCtx.strokeStyle = "magenta";
			for (const contourLines of contourLinesArray) {
				for (const line of contourLines) {
					const [startX, startY] = worldToCanvas(line[0].x, line[0].y);
					const [endX, endY] = worldToCanvas(line[1].x, line[1].y);
					printCtx.beginPath();
					printCtx.moveTo(startX, startY);
					printCtx.lineTo(endX, endY);
					printCtx.stroke();
				}
			}
		}

		// Main hole loop
		printCtx.lineWidth = 1;
		printCtx.strokeStyle = "black";
		printCtx.font = parseInt(currentFontSize) + "px Arial";
		if (points && Array.isArray(points) && points.length > 0) {
			for (const point of points) {
				const [x, y] = worldToCanvas(point.startXLocation, point.startYLocation);
				const [gradeX, gradeY] = worldToCanvas(point.gradeXLocation, point.gradeYLocation);
				const [lineEndX, lineEndY] = worldToCanvas(point.endXLocation, point.endYLocation);

				toeSizeInMeters = document.getElementById("toeSlider").value;
				connScale = document.getElementById("connSlider").value;

				// Draw collar-to-toe track if angled
				if (point.holeAngle > 0) {
					printTrack(x, y, lineEndX, lineEndY, gradeX, gradeY, "black", point.subdrillAmount);
				}

				// FIX: Do not draw UI-specific highlights on the print version
				// handleHoleHighlighting(point, x, y);

				// Draw toe if hole length is not zero
				if (parseFloat(point.holeLengthCalculated).toFixed(1) != 0.0) {
					const radiusInPixels = toeSizeInMeters * currentScale;
					printHoleToe(lineEndX, lineEndY, transparentFillColor, "black", radiusInPixels);
				}

				// Calculate text offsets
				const textOffset = parseInt((point.holeDiameter / 1000) * holeScale * currentScale);
				const leftSideToe = parseInt(lineEndX) - textOffset;
				const rightSideToe = parseInt(lineEndX) + textOffset;
				const leftSideCollar = parseInt(x) - textOffset;
				const rightSideCollar = parseInt(x) + textOffset;
				const topSideToe = parseInt(lineEndY - textOffset);
				const middleSideToe = parseInt(lineEndY + textOffset + parseInt(currentFontSize / 4));
				const bottomSideToe = parseInt(lineEndY + textOffset + parseInt(currentFontSize));
				const topSideCollar = parseInt(y - textOffset);
				const middleSideCollar = parseInt(y + parseInt(currentFontSize / 2));
				const bottomSideCollar = parseInt(y + textOffset + parseInt(currentFontSize));

				// Draw text/labels based on displayOptions
				printHoleTextsAndConnectors(point, x, y, lineEndX, lineEndY, {
					leftSideToe,
					rightSideToe,
					leftSideCollar,
					rightSideCollar,
					topSideToe,
					middleSideToe,
					bottomSideToe,
					topSideCollar,
					middleSideCollar,
					bottomSideCollar,
					holeMap,
					displayOptions
				});

				// Draw main hole geometry, with selection highlight logic
				printHoleMainShape(point, x, y, selectedHole);

				// Font slider/label only needs to be updated once, after loop
			}
		}

		// Holes Displayed Count
		printCtx.fillStyle = "black";
		printCtx.font = "12px Arial";
		if (!points || !Array.isArray(points) || points.length < 1) {
			printCtx.fillText("Holes Displayed: 0", 10, printCanvas.height - 65);
		} else {
			printCtx.fillText("Holes Displayed: " + points.length, 10, printCanvas.height - 65);
		}
		printCtx.fillText("Scale [ 1:" + currentScale.toFixed(4) + " ]", 10, printCanvas.height - 55);
		printCtx.fillStyle = "blue";
		printCtx.fillText("Version: Build: " + buildVersion, 10, printCanvas.height - 35);

		// These are DOM manipulations and should not be in a print function
		// fontSlider.value = currentFontSize;
		// fontLabel.textContent = "Font Size: " + parseFloat(currentFontSize).toFixed(1) + "px";
	} else {
		// Handle missing context
		return;
	}
}

function printVoronoiLegendAndCells(points, selectedVoronoiMetric, getColorForMetric, legendLabel, minValue, maxValue, step) {
	const legendX = 10,
		legendY = printCanvas.height / 2 - 70,
		gradientWidth = 20,
		gradientHeight = 160;
	printCtx.fillStyle = "black";
	printCtx.font = "14px Roboto";
	printCtx.fontWeight = "bold";
	printCtx.fillText(legendLabel || "Legend " + selectedVoronoiMetric, legendX, legendY - 15);

	// Create gradient for legend
	const gradient = printCtx.createLinearGradient(0, legendY, 0, legendY + gradientHeight);
	const stops = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0];
	stops.forEach(function (stop) {
		const value = minValue + stop * (maxValue - minValue);
		const color = getColorForMetric(value);
		if (typeof color !== "string" || color.includes("NaN")) {
			// fallback or skip this color stop
		} else {
			gradient.addColorStop(stop, color);
		}
	});
	printCtx.fillStyle = gradient;
	printCtx.fillRect(legendX + 50, legendY, gradientWidth, gradientHeight);

	printCtx.fillStyle = "black";
	printCtx.textAlign = "left";
	printCtx.textBaseline = "middle";
	// Draw tick marks and labels
	for (let v = minValue; v <= maxValue; v += step) {
		const y = legendY + ((v - minValue) / (maxValue - minValue)) * gradientHeight;
		printCtx.strokeStyle = "black";
		printCtx.beginPath();
		printCtx.moveTo(legendX + 50 + gradientWidth, y);
		printCtx.lineTo(legendX + 50 + gradientWidth + 8, y);
		printCtx.stroke();
		printCtx.fillText(v.toFixed(1), legendX, y);
	}

	const voronoiMetrics = getVoronoiMetrics(points, useToeLocation);
	//modes available: min, max, average, mode

	const clippedCells = clipVoronoiCells(voronoiMetrics);

	for (const cell of clippedCells) {
		const value = cell[selectedVoronoiMetric];
		if (!cell.polygon || value == null) continue;
		printCtx.beginPath();
		for (let j = 0; j < cell.polygon.length; j++) {
			const pt = cell.polygon[j];
			const [x, y] = worldToCanvas(pt.x !== undefined ? pt.x : pt[0], pt.y !== undefined ? pt.y : pt[1]);
			if (j === 0) printCtx.moveTo(x, y);
			else printCtx.lineTo(x, y);
		}
		printCtx.closePath();
		printCtx.fillStyle = getColorForMetric(value);
		printCtx.fill();
		printCtx.strokeStyle = "black";
		printCtx.lineWidth = 1;
		printCtx.stroke();
	}
}
function printHoleTextsAndConnectors(point, x, y, lineEndX, lineEndY, printCtxObj) {
	const { leftSideToe, rightSideToe, leftSideCollar, rightSideCollar, topSideToe, middleSideToe, bottomSideToe, topSideCollar, middleSideCollar, bottomSideCollar, holeMap, displayOptions } = printCtxObj;

	if (displayOptions.holeID) {
		printText(rightSideCollar, topSideCollar, point.holeID, "black");
	}
	if (displayOptions.holeDia) {
		printText(rightSideCollar, middleSideCollar, parseFloat(point.holeDiameter).toFixed(0), "rgb(0, 50, 0)");
	}
	if (displayOptions.holeLen) {
		printText(rightSideCollar, bottomSideCollar, parseFloat(point.holeLengthCalculated).toFixed(1), "rgb(0, 0, 67)");
	}
	if (displayOptions.holeAng) {
		printRightAlignedText(leftSideCollar, topSideCollar, parseFloat(point.holeAngle).toFixed(0) + "°", "rgb(67, 30, 0)");
	}
	if (displayOptions.holeDip) {
		printRightAlignedText(leftSideToe, topSideToe, 90 - parseFloat(point.holeAngle).toFixed(0) + "°", "rgb(67, 30, 0)");
	}
	if (displayOptions.holeBea) {
		printRightAlignedText(leftSideToe, bottomSideToe, parseFloat(point.holeBearing).toFixed(1) + "°", "red");
	}
	if (displayOptions.holeSubdrill) {
		printRightAlignedText(leftSideToe, bottomSideToe, parseFloat(point.subdrillAmount).toFixed(1), "blue");
	}
	if (displayOptions.initiationTime) {
		printRightAlignedText(leftSideCollar, middleSideCollar, point.holeTime, "red");
	}
	if (displayOptions.connector && point.fromHoleID) {
		const [splitEntityName, splitFromHoleID] = point.fromHoleID.split(":::");
		const fromHole = holeMap.get(splitEntityName + ":::" + splitFromHoleID);
		if (fromHole) {
			const [startX, startY] = worldToCanvas(fromHole.startXLocation, fromHole.startYLocation);
			const connColor = point.colorHexDecimal;
			try {
				printArrow(startX, startY, x, y, connColor, connScale);
			} catch (error) {
				console.error("Error printing arrow:", error);
			}
		}
	}
	if (displayOptions.delayValue && point.fromHoleID) {
		const [splitEntityName, splitFromHoleID] = point.fromHoleID.split(":::");
		const fromHole = holeMap.get(splitEntityName + ":::" + splitFromHoleID);
		if (fromHole) {
			const [startX, startY] = worldToCanvas(fromHole.startXLocation, fromHole.startYLocation);
			const connColor = point.colorHexDecimal;
			const pointDelay = point.timingDelayMilliseconds;
			printArrowDelayText(startX, startY, x, y, connColor, pointDelay);
		}
	}
	if (displayOptions.xValue) {
		printRightAlignedText(leftSideCollar, topSideCollar, parseFloat(point.startXLocation).toFixed(2), textFillColor);
	}
	if (displayOptions.yValue) {
		printRightAlignedText(leftSideCollar, middleSideCollar, parseFloat(point.startYLocation).toFixed(2), textFillColor);
	}
	if (displayOptions.zValue) {
		printRightAlignedText(leftSideCollar, bottomSideCollar, parseFloat(point.startZLocation).toFixed(2), textFillColor);
	}
	if (displayOptions.holeType) {
		printText(rightSideCollar, middleSideCollar, point.holeType, "rgb(53, 0, 72)");
	}
	if (displayOptions.measuredLength) {
		printRightAlignedText(leftSideCollar, bottomSideToe, point.measuredLength, "rgb(70, 0, 0)");
	}
	if (displayOptions.measuredMass) {
		printRightAlignedText(leftSideCollar, topSideToe, point.measuredMass, "rgb(70, 0, 0)");
	}
	if (displayOptions.measuredComment) {
		printText(rightSideCollar, middleSideCollar, point.measuredComment, "rgb(70, 0, 0)");
	}
}
function printHoleMainShape(point, x, y, selectedHole) {
	const diameterPx = parseInt((point.holeDiameter / 1000) * currentScale * holeScale);

	let highlightType = null;
	let highlightColor1 = null,
		highlightColor2 = null,
		highlightText = null;

	// Check if we're in connector mode
	if (isAddingConnector || isAddingMultiConnector) {
		// First selected hole in connector mode (using fromHoleStore)
		if (fromHoleStore && fromHoleStore === point) {
			highlightType = "first";
			highlightColor1 = "rgba(0, 255, 0, 0.2)";
			highlightColor2 = "rgba(0, 190, 0, .8)";
			highlightText = "1st Selected Hole: " + point.holeID + " in: " + point.entityName + " (Select second hole)";
		}
		// Second selected hole in connector mode (using firstSelectedHole/secondSelectedHole)
		else if (firstSelectedHole && firstSelectedHole === point) {
			highlightType = "first";
			highlightColor1 = "rgba(0, 255, 0, 0.2)";
			highlightColor2 = "rgba(0, 190, 0, .8)";
			highlightText = "1st Selected Hole: " + point.holeID + " in: " + point.entityName;
		} else if (secondSelectedHole && secondSelectedHole === point) {
			highlightType = "second";
			highlightColor1 = "rgba(255, 255, 0, 0.2)";
			highlightColor2 = "rgba(255, 200, 0, .8)";
			highlightText = "2nd Selected Hole: " + point.holeID + " in: " + point.entityName + " (Click to connect)";
		}
	}
	// Regular selection highlighting (NOT in connector mode)
	else if (selectedHole != null && selectedHole === point) {
		highlightType = "selected";
		highlightColor1 = "rgba(255, 0, 150, 0.2)";
		highlightColor2 = "rgba(255, 0, 150, .8)";
		highlightText = "Editing Selected Hole: " + selectedHole.holeID + " in: " + selectedHole.entityName + " with Single Selection Mode \nEscape key to clear Selection";
	}
	// Multiple selection highlighting
	else if (selectedMultipleHoles != null && selectedMultipleHoles.find((p) => p.entityName === point.entityName && p.holeID === point.holeID)) {
		highlightType = "multi";
		highlightColor1 = "rgba(255, 0, 150, 0.2)";
		highlightColor2 = "rgba(255, 0, 150, .8)";
		if (point === selectedMultipleHoles[0]) {
			highlightText = "Editing Selected Holes: {" + selectedMultipleHoles.map((h) => h.holeID).join(",") + "} \nEscape key to clear Selection";
		} else {
			highlightText = "";
		}
	}

	// Draw main hole/track shape (dummy, missing, or real)
	printCtx.lineWidth = 1;

	printCtx.strokeStyle = strokeColor;

	if (parseFloat(point.holeLengthCalculated).toFixed(1) == 0.0) {
		printDummy(x, y, parseInt(0.2 * holeScale * currentScale), "black");
	} else if (point.holeDiameter == 0) {
		printNoDiameterHole(x, y, 10, "black");
	} else {
		printHole(x, y, diameterPx, "black", "black");
	}
}
//Update printSurface function (around line 23909)
function printSurface() {
	// Check if any surfaces are visible
	let hasSurfaces = false;
	let allMinZ = Infinity;
	let allMaxZ = -Infinity;

	// Check all loaded surfaces for visibility and calculate global Z range
	for (const [surfaceId, surface] of loadedSurfaces.entries()) {
		if (surface.visible && surface.points && surface.points.length > 0) {
			hasSurfaces = true;

			// Find Z range for this surface
			surface.points.forEach((point) => {
				if (point.z < allMinZ) allMinZ = point.z;
				if (point.z > allMaxZ) allMaxZ = point.z;
			});
		}
	}

	if (!hasSurfaces) return;

	// Draw all visible surfaces with their individual gradients
	for (const [surfaceId, surface] of loadedSurfaces.entries()) {
		if (surface.visible && surface.triangles && surface.triangles.length > 0) {
			surface.triangles.forEach((triangle) => {
				printTriangleWithGradient(triangle, allMinZ, allMaxZ, printCtx, surface.transparency ?? 1.0, surface.gradient || "default");
			});
		}
	}

	// Draw legend after all surfaces
	printSurfaceLegend();
}
function printSurfaceLegend() {
	if (!showSurfaceLegend || loadedSurfaces.size === 0) return;

	// Get first visible surface for legend
	const visibleSurface = Array.from(loadedSurfaces.values()).find((s) => s.visible);
	if (!visibleSurface || !visibleSurface.triangles || visibleSurface.triangles.length === 0) return;

	// Calculate elevation range
	let minZ = Infinity;
	let maxZ = -Infinity;

	visibleSurface.points.forEach((point) => {
		if (point.z < minZ) minZ = point.z;
		if (point.z > maxZ) maxZ = point.z;
	});

	// Legend dimensions and position
	const legendWidth = 20;
	const legendHeight = 200;
	const legendX = printCanvas.width - legendWidth - 60;
	const legendY = 50;
	const steps = 50;

	// Draw color gradient
	for (let i = 0; i < steps; i++) {
		const ratio = i / (steps - 1);
		const y = legendY + legendHeight - (i * legendHeight) / steps;
		const height = legendHeight / steps + 1;

		printCtx.fillStyle = elevationToColor(minZ + ratio * (maxZ - minZ), minZ, maxZ);
		printCtx.fillRect(legendX, y, legendWidth, height);
	}

	// Draw elevation labels
	printCtx.fillStyle = strokeColor;
	printCtx.font = "12px Roboto";
	printCtx.fontWeight = "bold";
	printCtx.textAlign = "left";

	const labelCount = 5;
	for (let i = 0; i < labelCount; i++) {
		const ratio = i / (labelCount - 1);
		const elevation = minZ + ratio * (maxZ - minZ);
		const y = legendY + legendHeight - ratio * legendHeight;

		// Draw tick mark
		printCtx.beginPath();
		printCtx.moveTo(legendX + legendWidth, y);
		printCtx.lineTo(legendX + legendWidth + 5, y);
		printCtx.stroke();

		// Draw elevation text
		printCtx.fillText(elevation.toFixed(1) + "m", legendX + legendWidth + 8, y + 4);
	}

	// Draw title
	printCtx.font = "14px Arial";
	printCtx.textAlign = "center";
	printCtx.fillText("Elevation", legendX + legendWidth / 2, legendY - 20);

	// Draw gradient name
	printCtx.font = "10px Arial";
	const gradientNames = {
		default: "Default",
		viridis: "Viridis",
		turbo: "Turbo",
		parula: "Parula",
		cividis: "Cividis",
		terrain: "Terrain"
	};
	printCtx.fillText(gradientNames[currentGradient] || "Default", legendX + legendWidth / 2, legendY + legendHeight + 30);

	// Reset text alignment
	printCtx.textAlign = "left";
}
function printTriangleWithGradient(triangle, globalMinZ, globalMaxZ, targetCtx = printCtx, alpha = 1.0, gradient = "default") {
	const showWireFrame = false;
	const [p1, p2, p3] = triangle.vertices;

	// Convert to printCanvas coordinates
	const [x1, y1] = worldToCanvas(p1.x, p1.y);
	const [x2, y2] = worldToCanvas(p2.x, p2.y);
	const [x3, y3] = worldToCanvas(p3.x, p3.y);

	// Save context state
	targetCtx.save();

	// Set transparency
	targetCtx.globalAlpha = alpha;

	// Check if we have texture data (future enhancement)
	if (surfaceTextureData && surfaceTextureData.hasTextures) {
		targetCtx.beginPath();
		targetCtx.moveTo(x1, y1);
		targetCtx.lineTo(x2, y2);
		targetCtx.lineTo(x3, y3);
		targetCtx.closePath();

		const avgZ = (p1.z + p2.z + p3.z) / 3;
		targetCtx.fillStyle = elevationToColor(avgZ, globalMinZ, globalMaxZ, gradient);
		targetCtx.fill();

		if (showWireFrame) {
			targetCtx.strokeStyle = "rgba(0, 0, 0, 0.05)";
			targetCtx.lineWidth = 0.1;
			targetCtx.stroke();
		}
		targetCtx.restore(); // <-- FIX: restore before return
		return;
	}

	// Check if surface is flat
	if (globalMaxZ - globalMinZ < 0.001) {
		targetCtx.beginPath();
		targetCtx.moveTo(x1, y1);
		targetCtx.lineTo(x2, y2);
		targetCtx.lineTo(x3, y3);
		targetCtx.closePath();
		targetCtx.fillStyle = "rgba(255, 165, 0, 0.7)";
		targetCtx.fill();

		if (showWireFrame) {
			targetCtx.strokeStyle = "rgba(0, 0, 0, 0.1)";
			targetCtx.lineWidth = 0.1;
			targetCtx.stroke();
		}
		targetCtx.restore(); // <-- FIX: restore before return
		return;
	}

	// Create gradient based on elevation for non-flat surfaces
	const canvasGradient = targetCtx.createLinearGradient(x1, y1, x3, y3);

	const color1 = elevationToColor(p1.z, globalMinZ, globalMaxZ, gradient);
	const color2 = elevationToColor(p2.z, globalMinZ, globalMaxZ, gradient);
	const color3 = elevationToColor(p3.z, globalMinZ, globalMaxZ, gradient);

	canvasGradient.addColorStop(0, color1);
	canvasGradient.addColorStop(0.5, color2);
	canvasGradient.addColorStop(1, color3);

	targetCtx.beginPath();
	targetCtx.moveTo(x1, y1);
	targetCtx.lineTo(x2, y2);
	targetCtx.lineTo(x3, y3);
	targetCtx.closePath();
	targetCtx.fillStyle = canvasGradient;
	targetCtx.fill();

	if (showWireFrame) {
		targetCtx.strokeStyle = "rgba(0, 0, 0, 0.1)";
		targetCtx.lineWidth = 0.1;
		targetCtx.stroke();
	}
	targetCtx.restore();
}
function printBackgroundImage() {
	if (loadedImages.size === 0) return;

	loadedImages.forEach((image) => {
		if (!image.visible || !image.canvas) return;

		const bbox = image.bbox;
		if (bbox && bbox.length >= 4) {
			const [x1, y1] = worldToPrintCanvas(bbox[0], bbox[3]);
			const [x2, y2] = worldToPrintCanvas(bbox[2], bbox[1]);

			printCtx.save();
			// Also fix line 24010 in the print function
			printCtx.globalAlpha = image.transparency !== undefined && image.transparency !== null ? image.transparency : 1.0;
			printCtx.drawImage(image.canvas, Math.min(x1, x2), Math.min(y1, y2), printCanvasWidth, printCanvasHeight);
			printCtx.restore();

			// Debug rectangle
			printCtx.strokeStyle = "red";
			printCtx.lineWidth = 1;
			printCtx.strokeRect(Math.min(x1, x2), Math.min(y1, y2), printCanvasWidth, printCanvasHeight);

			printCtx.restore();
		}
	});
}

function drawCompleteBlastDataForPrint(printCtx, printArea) {
	if (!points || points.length === 0) return;

	// Calculate data bounds locally
	let minX = Math.min(...points.map((p) => p.startXLocation));
	let maxX = Math.max(...points.map((p) => p.startXLocation));
	let minY = Math.min(...points.map((p) => p.startYLocation));
	let maxY = Math.max(...points.map((p) => p.startYLocation));

	const padding = Math.max(maxX - minX, maxY - minY) * 0.05;
	minX -= padding;
	maxX += padding;
	minY -= padding;
	maxY += padding;

	// Calculate scale locally
	const dataWidth = maxX - minX;
	const dataHeight = maxY - minY;
	const scaleX = printArea.width / dataWidth;
	const scaleY = printArea.height / dataHeight;
	const printScale = Math.min(scaleX, scaleY) * 0.9;

	// Center data
	const scaledWidth = dataWidth * printScale;
	const scaledHeight = dataHeight * printScale;
	const offsetX = printArea.x + (printArea.width - scaledWidth) / 2;
	const offsetY = printArea.y + (printArea.height - scaledHeight) / 2;

	// Local coordinate conversion function
	function worldToPrintCanvas(worldX, worldY) {
		const printCentroidX = minX + dataWidth / 2;
		const printCentroidY = minY + dataHeight / 2;
		const x = (worldX - printCentroidX) * printScale + offsetX + scaledWidth / 2;
		const y = -(worldY - printCentroidY) * printScale + offsetY + scaledHeight / 2;
		return [x, y];
	}

	// Get display options
	const displayOptions = getDisplayOptions();
	const printHoleScale = parseFloat(document.getElementById("holeSize")?.value || 3);
	const printFontSize = Math.max(8, Math.min(24, (12 * printScale) / 50));

	printCtx.save();

	// Draw KAD objects first
	if (allKADDrawingsMap && allKADDrawingsMap.size > 0) {
		for (const [name, entity] of allKADDrawingsMap.entries()) {
			if (entity.entityType === "point") {
				entity.data.forEach((point) => {
					const [x, y] = worldToPrintCanvas(point.pointXLocation, point.pointYLocation);
					printCtx.beginPath();
					printCtx.arc(x, y, 2, 0, 2 * Math.PI);
					printCtx.fillStyle = point.color || "black";
					printCtx.fill();
				});
			} else if (entity.entityType === "line" || entity.entityType === "poly") {
				const entityPoints = entity.data;
				if (entityPoints.length < 2) continue;

				printCtx.strokeStyle = entityPoints[0].color || "black";
				printCtx.lineWidth = entityPoints[0].lineWidth || 1;
				printCtx.beginPath();

				for (let i = 0; i < entityPoints.length - 1; i++) {
					const [sx, sy] = worldToPrintCanvas(entityPoints[i].pointXLocation, entityPoints[i].pointYLocation);
					const [ex, ey] = worldToPrintCanvas(entityPoints[i + 1].pointXLocation, entityPoints[i + 1].pointYLocation);

					if (i === 0) printCtx.moveTo(sx, sy);
					printCtx.lineTo(ex, ey);
				}

				// Close polygon if needed
				if (entity.entityType === "poly" && entityPoints.length > 2) {
					printCtx.closePath();
				}

				printCtx.stroke();
			}
		}
	}

	// Draw holes
	printCtx.lineWidth = 1;
	printCtx.strokeStyle = strokeColor;
	printCtx.font = parseInt(printFontSize) + "px Arial";

	for (const point of points) {
		const [x, y] = worldToPrintCanvas(point.startXLocation, point.startYLocation);
		const [gradeX, gradeY] = worldToPrintCanvas(point.gradeXLocation, point.gradeYLocation);
		const [lineEndX, lineEndY] = worldToPrintCanvas(point.endXLocation, point.endYLocation);

		// Draw collar-to-toe track if angled
		if (point.holeAngle > 0) {
			printCtx.lineWidth = 1;

			if (point.subdrillAmount < 0) {
				// Negative subdrill
				printCtx.beginPath();
				printCtx.strokeStyle = strokeColor;
				printCtx.moveTo(x, y);
				printCtx.lineTo(lineEndX, lineEndY);
				printCtx.stroke();

				printCtx.beginPath();
				printCtx.strokeStyle = "rgba(255, 0, 0, 0.2)";
				printCtx.moveTo(lineEndX, lineEndY);
				printCtx.lineTo(gradeX, gradeY);
				printCtx.stroke();

				printCtx.beginPath();
				printCtx.arc(gradeX, gradeY, 3, 0, 2 * Math.PI);
				printCtx.fillStyle = "rgba(255, 0, 0, 0.2)";
				printCtx.fill();
			} else {
				// Positive subdrill
				printCtx.beginPath();
				printCtx.strokeStyle = strokeColor;
				printCtx.moveTo(x, y);
				printCtx.lineTo(gradeX, gradeY);
				printCtx.stroke();

				printCtx.beginPath();
				printCtx.strokeStyle = "rgba(255, 0, 0, 1.0)";
				printCtx.moveTo(gradeX, gradeY);
				printCtx.lineTo(lineEndX, lineEndY);
				printCtx.stroke();

				printCtx.beginPath();
				printCtx.arc(gradeX, gradeY, 3, 0, 2 * Math.PI);
				printCtx.fillStyle = "rgba(255, 0, 0, 1.0)";
				printCtx.fill();
			}
		}

		// Draw toe if hole length is not zero
		if (parseFloat(point.holeLengthCalculated).toFixed(1) != 0.0) {
			const radiusInPixels = (document.getElementById("toeSlider")?.value || 3) * printScale;
			printCtx.beginPath();
			printCtx.lineWidth = 1;
			printCtx.arc(lineEndX, lineEndY, radiusInPixels, 0, 2 * Math.PI);
			printCtx.fillStyle = transparentFillColor;
			printCtx.strokeStyle = strokeColor;
			printCtx.stroke();
			printCtx.fill();
		}

		// Calculate text positions
		const textOffset = parseInt((point.holeDiameter / 1000) * printHoleScale * printScale);
		const leftSideCollar = parseInt(x) - textOffset;
		const rightSideCollar = parseInt(x) + textOffset;
		const leftSideToe = parseInt(lineEndX) - textOffset;
		const topSideCollar = parseInt(y - textOffset);
		const middleSideCollar = parseInt(y + parseInt(printFontSize / 2));
		const bottomSideCollar = parseInt(y + textOffset + parseInt(printFontSize));
		const topSideToe = parseInt(lineEndY - textOffset);
		const bottomSideToe = parseInt(lineEndY + textOffset + parseInt(printFontSize));

		// Draw text labels based on display options
		printCtx.font = parseInt(printFontSize - 2) + "px Arial";

		if (displayOptions.holeID) {
			printCtx.fillStyle = textFillColor;
			printCtx.fillText(point.holeID, rightSideCollar, topSideCollar);
		}
		if (displayOptions.holeDia) {
			printCtx.fillStyle = "green";
			printCtx.fillText(parseFloat(point.holeDiameter).toFixed(0), rightSideCollar, middleSideCollar);
		}
		if (displayOptions.holeLen) {
			printCtx.fillStyle = depthColor;
			printCtx.fillText(parseFloat(point.holeLengthCalculated).toFixed(1), rightSideCollar, bottomSideCollar);
		}
		if (displayOptions.holeAng) {
			printCtx.fillStyle = angleDipColor;
			const text = parseFloat(point.holeAngle).toFixed(0);
			const textWidth = printCtx.measureText(text).width;
			printCtx.fillText(text, leftSideCollar - textWidth, topSideCollar);
		}
		if (displayOptions.holeDip) {
			printCtx.fillStyle = angleDipColor;
			const text = (90 - parseFloat(point.holeAngle)).toFixed(0);
			const textWidth = printCtx.measureText(text).width;
			printCtx.fillText(text, leftSideToe - textWidth, topSideToe);
		}
		if (displayOptions.holeBea) {
			printCtx.fillStyle = "red";
			const text = parseFloat(point.holeBearing).toFixed(1);
			const textWidth = printCtx.measureText(text).width;
			printCtx.fillText(text, leftSideToe - textWidth, bottomSideToe);
		}
		if (displayOptions.initiationTime) {
			printCtx.fillStyle = "red";
			const text = point.holeTime;
			const textWidth = printCtx.measureText(text).width;
			printCtx.fillText(text, leftSideCollar - textWidth, middleSideCollar);
		}

		// Draw main hole shape
		const diameterPx = parseInt((point.holeDiameter / 1000) * printScale * printHoleScale);

		printCtx.lineWidth = 1;
		printCtx.strokeStyle = strokeColor;

		if (parseFloat(point.holeLengthCalculated).toFixed(1) == 0.0) {
			// Draw dummy (X shape)
			printCtx.lineWidth = 2;
			const radius = parseInt(0.2 * printHoleScale * printScale);
			printCtx.beginPath();
			printCtx.moveTo(x - radius, y - radius);
			printCtx.lineTo(x + radius, y + radius);
			printCtx.moveTo(x - radius, y + radius);
			printCtx.lineTo(x + radius, y - radius);
			printCtx.stroke();
		} else if (point.holeDiameter == 0) {
			// Draw square for no diameter
			printCtx.lineWidth = 2;
			const halfSide = 5;
			printCtx.beginPath();
			printCtx.rect(x - halfSide, y - halfSide, halfSide * 2, halfSide * 2);
			printCtx.stroke();
		} else {
			// Draw normal hole (black filled circle)
			printCtx.beginPath();
			const minRadius = 1.5;
			const drawRadius = diameterPx > minRadius ? diameterPx : minRadius;
			printCtx.arc(x, y, drawRadius, 0, 2 * Math.PI);
			printCtx.fillStyle = fillColor;
			printCtx.fill();
			printCtx.stroke();
		}
	}

	printCtx.restore();
}
function printHeader(printCtx, x, y, width, height) {
	printCtx.save();
	printCtx.fillStyle = "black";
	printCtx.font = "bold 18px Arial";
	printCtx.textAlign = "left";
	printCtx.textBaseline = "top";

	// Title
	const title = "KIRRA Blast Pattern";
	printCtx.fillText(title, x, y + 10);

	// Date and time
	printCtx.font = "12px Arial";
	const now = new Date();
	const dateStr = now.toLocaleDateString() + " " + now.toLocaleTimeString();
	printCtx.textAlign = "right";
	printCtx.fillText(dateStr, x + width, y + 10);

	// Statistics
	if (points && points.length > 0) {
		const stats = getBlastStatistics();
		printCtx.textAlign = "left";
		printCtx.font = "10px Arial";
		let statsY = y + 35;
		const statsSpacing = 12;

		printCtx.fillText("Holes: " + stats.holeCount, x, statsY);
		printCtx.fillText("Avg Spacing: " + stats.avgSpacing.toFixed(1) + "m", x + 80, statsY);
		printCtx.fillText("Avg Burden: " + stats.avgBurden.toFixed(1) + "m", x + 180, statsY);
		printCtx.fillText("Pattern: " + stats.pattern, x + 280, statsY);
	}

	printCtx.restore();
}
function printFooter(printCtx, x, y, width, height) {
	printCtx.save();
	printCtx.fillStyle = "black";
	printCtx.font = "10px Arial";
	printCtx.textAlign = "center";
	printCtx.textBaseline = "middle";

	printCtx.fillText("Generated by KIRRA Blast Design Software", x + width / 2, y + height / 2);

	printCtx.restore();
}
//----------------- REPLICATION OF THE UX Canvas but for High Resolution Printing ------------------///

///------------------ STATISTICS CALCULATIONS HERE ------------------///
function getBlastStatistics() {
	return {
		blastName: currentBlastName || "Unnamed Blast",
		holeCount: points.length,
		totalLength: points.reduce((sum, point) => sum + (point.length || 0), 0),
		avgBurden: calculateAverageBurden(), // Implement if you have burden data
		avgSpacing: calculateAverageSpacing(), // Implement if you have spacing data
		powderFactor: calculatePowderFactor() // Implement if you have powder factor data
	};
}
function detectRowsAndCalculateMetrics() {
	if (!points || points.length === 0) return null;

	// Group holes by Y-coordinate (with tolerance for slight variations)
	const tolerance = 0.5; // Adjust based on your coordinate precision
	const rows = [];

	// Sort points by Y coordinate first
	const sortedPoints = [...points].sort((a, b) => a.y - b.y);

	// Group points into rows
	let currentRow = [sortedPoints[0]];
	let currentY = sortedPoints[0].y;

	for (let i = 1; i < sortedPoints.length; i++) {
		const point = sortedPoints[i];

		if (Math.abs(point.y - currentY) <= tolerance) {
			// Same row
			currentRow.push(point);
		} else {
			// New row
			rows.push(currentRow.sort((a, b) => a.x - b.x)); // Sort row by X
			currentRow = [point];
			currentY = point.y;
		}
	}

	// Add the last row
	if (currentRow.length > 0) {
		rows.push(currentRow.sort((a, b) => a.x - b.x));
	}

	return calculateMetricsFromRows(rows);
}
function calculateMetricsFromRows(rows) {
	const spacings = [];
	const burdens = [];

	// Calculate spacing (distance between holes in same row)
	rows.forEach((row) => {
		for (let i = 1; i < row.length; i++) {
			const distance = Math.sqrt(Math.pow(row[i].x - row[i - 1].x, 2) + Math.pow(row[i].y - row[i - 1].y, 2));
			spacings.push(distance);
		}
	});

	// Calculate burden (distance between rows)
	for (let i = 1; i < rows.length; i++) {
		// Find closest holes between adjacent rows
		const row1 = rows[i - 1];
		const row2 = rows[i];

		// Simple approach: use Y difference (assuming horizontal rows)
		const burden = Math.abs(row2[0].y - row1[0].y);
		burdens.push(burden);
	}

	return {
		averageSpacing: spacings.length > 0 ? spacings.reduce((a, b) => a + b) / spacings.length : 0,
		averageBurden: burdens.length > 0 ? burdens.reduce((a, b) => a + b) / burdens.length : 0,
		mostCommonSpacing: findMostCommon(spacings),
		mostCommonBurden: findMostCommon(burdens),
		rowCount: rows.length,
		totalHoles: points.length,
		spacingVariations: spacings,
		burdenVariations: burdens
	};
}
function detectRowsWithClustering() {
	if (!points || points.length === 0) return null;

	// Use k-means or density-based clustering on Y-coordinates
	const yCoordinates = points.map((p) => p.y);
	const uniqueYs = [...new Set(yCoordinates.map((y) => Math.round(y * 10) / 10))];

	// Group points by rounded Y coordinates
	const rowGroups = {};

	points.forEach((point) => {
		const roundedY = Math.round(point.y * 10) / 10;
		if (!rowGroups[roundedY]) {
			rowGroups[roundedY] = [];
		}
		rowGroups[roundedY].push(point);
	});

	// Convert to array and sort each row by X
	const rows = Object.values(rowGroups)
		.map((row) => row.sort((a, b) => a.x - b.x))
		.sort((a, b) => a[0].y - b[0].y);

	return calculateMetricsFromRows(rows);
}
function findMostCommon(distances) {
	if (distances.length === 0) return 0;

	// Round to nearest 0.1 to group similar distances
	const rounded = distances.map((d) => Math.round(d * 10) / 10);

	// Count occurrences
	const counts = {};
	rounded.forEach((d) => {
		counts[d] = (counts[d] || 0) + 1;
	});

	// Find most common
	let mostCommon = 0;
	let maxCount = 0;

	for (const [distance, count] of Object.entries(counts)) {
		if (count > maxCount) {
			maxCount = count;
			mostCommon = parseFloat(distance);
		}
	}

	return mostCommon;
}
function calculateAverageBurden() {
	const metrics = detectRowsAndCalculateMetrics();
	return metrics ? metrics.averageBurden : 0;
}

function calculateAverageSpacing() {
	const metrics = detectRowsAndCalculateMetrics();
	return metrics ? metrics.averageSpacing : 0;
}

function calculateBlastMetrics() {
	const metrics = detectRowsAndCalculateMetrics();

	if (!metrics) return null;

	return {
		averageSpacing: metrics.averageSpacing.toFixed(1),
		averageBurden: metrics.averageBurden.toFixed(1),
		mostCommonSpacing: metrics.mostCommonSpacing.toFixed(1),
		mostCommonBurden: metrics.mostCommonBurden.toFixed(1),
		rowCount: metrics.rowCount,
		holesPerRow: Math.round(metrics.totalHoles / metrics.rowCount),
		totalHoles: metrics.totalHoles,
		patternType: detectPatternType(metrics)
	};
}

function detectPatternType(metrics) {
	const spacingVariation = Math.abs(metrics.averageSpacing - metrics.mostCommonSpacing);
	const burdenVariation = Math.abs(metrics.averageBurden - metrics.mostCommonBurden);

	if (spacingVariation < 0.5 && burdenVariation < 0.5) {
		return "Regular Grid";
	} else if (spacingVariation < 1.0 && burdenVariation < 1.0) {
		return "Semi-Regular Grid";
	} else {
		return "Irregular Pattern";
	}
}

function calculatePowderFactor() {
	const voronoiMetrics = getVoronoiMetrics(points, true);
	if (!voronoiMetrics || voronoiMetrics.length === 0) {
		return 0;
	}
	const totalPowderFactor = voronoiMetrics.reduce((sum, cell) => sum + (cell.powderFactor || 0), 0);
	const averagePowderFactor = voronoiMetrics.length > 0 ? totalPowderFactor / voronoiMetrics.length : 0;
	return averagePowderFactor;
}

function calculateBlastVolume() {
	const voronoiMetrics = getVoronoiMetrics(points, true);
	if (!voronoiMetrics || voronoiMetrics.length === 0) {
		return 0;
	}
	const totalVolume = voronoiMetrics.reduce((sum, cell) => sum + (cell.volume || 0), 0);
	return totalVolume;
}

function calculateBlastMass() {
	const voronoiMetrics = getVoronoiMetrics(points, true);
	if (!voronoiMetrics || voronoiMetrics.length === 0) {
		return 0;
	}
	const totalMass = voronoiMetrics.reduce((sum, cell) => sum + (cell.mass || 0), 0);
	return totalMass;
}

function calculateBlastArea() {
	const voronoiMetrics = getVoronoiMetrics(points, true);
	if (!voronoiMetrics || voronoiMetrics.length === 0) {
		return 0;
	}
	const totalArea = voronoiMetrics.reduce((sum, cell) => sum + (cell.area || 0), 0);
	return totalArea;
}

function calculateTotalLength() {
	//use the sum of the points array calculatedHoleLength
	const totalMeters = points.reduce((sum, point) => sum + (point.calculatedHoleLength || 0), 0);
	return totalMeters;
}

///------------------ STATISTICS CALCULATION END HERE ----------------///

//Make sure everything is loaded before the application initialization

//----------------- Floating Tree View for File interactions ------------------///
// Tree View System
class TreeView {
	constructor(containerId) {
		this.container = document.getElementById(containerId);
		this.selectedNodes = new Set();
		this.expandedNodes = new Set();
		this.dragData = { isDragging: false, startX: 0, startY: 0 };
		this.isCollapsed = false;

		this.init();
	}

	init() {
		this.setupEventListeners();
		//this.makeResizable();
		this.updateTreeData();
	}

	setupEventListeners() {
		// Panel dragging
		const header = document.getElementById("treePanelHeader");
		header.addEventListener("mousedown", this.startDrag.bind(this));

		// Panel controls
		document.getElementById("treeCollapseBtn").addEventListener("click", this.toggleCollapse.bind(this));
		document.getElementById("treeCloseBtn").addEventListener("click", this.hide.bind(this));

		// Tree interactions
		const treeView = document.getElementById("treeView");
		treeView.addEventListener("click", this.handleTreeClick.bind(this));
		treeView.addEventListener("contextmenu", this.handleContextMenu.bind(this));

		// Context menu
		// Hide context menu on startup
		document.getElementById("treeContextMenu").style.display = "none";
		const contextMenu = document.getElementById("treeContextMenu");
		contextMenu.addEventListener("click", this.handleContextAction.bind(this));

		// Hide context menu on outside click
		document.addEventListener("click", this.hideContextMenu.bind(this));

		// Keyboard shortcuts
		document.addEventListener("keydown", this.handleKeyboard.bind(this));

		// ADD THIS: Color swatch event delegation
		this.container.addEventListener("click", (e) => {
			if (e.target.classList.contains("color-swatch")) {
				e.stopPropagation(); // Prevent tree node selection

				const entityName = e.target.dataset.entityName;
				const pointID = parseInt(e.target.dataset.pointId);

				// Call the color picker function
				if (entityName && !isNaN(pointID)) {
					openColorPickerForElement(e.target, entityName, pointID);
				}
			}
		});
	}

	startDrag(e) {
		this.dragData.isDragging = true;
		this.dragData.startX = e.clientX - this.container.offsetLeft;
		this.dragData.startY = e.clientY - this.container.offsetTop;

		document.addEventListener("mousemove", this.drag.bind(this));
		document.addEventListener("mouseup", this.stopDrag.bind(this));
		e.preventDefault();
	}

	drag(e) {
		if (!this.dragData.isDragging) return;

		const x = e.clientX - this.dragData.startX;
		const y = e.clientY - this.dragData.startY;

		this.container.style.left = x + "px";
		this.container.style.top = y + "px";
	}

	stopDrag() {
		this.dragData.isDragging = false;
		document.removeEventListener("mousemove", this.drag);
		document.removeEventListener("mouseup", this.stopDrag);
	}

	toggleCollapse() {
		this.isCollapsed = !this.isCollapsed;
		this.container.classList.toggle("collapsed", this.isCollapsed);

		const btn = document.getElementById("treeCollapseBtn");
		btn.textContent = this.isCollapsed ? "+" : "−";
	}

	hide() {
		this.container.style.display = "none";
	}

	show() {
		this.container.style.display = "flex";
	}

	handleTreeClick(e) {
		const treeItem = e.target.closest(".tree-item");
		if (!treeItem) return;

		const expandBtn = e.target.closest(".tree-expand");
		if (expandBtn && !expandBtn.classList.contains("leaf")) {
			this.toggleNode(treeItem);
			return;
		}

		// Handle selection
		const nodeId = treeItem.dataset.nodeId;

		if (e.ctrlKey || e.metaKey) {
			// Multi-select
			if (this.selectedNodes.has(nodeId)) {
				this.selectedNodes.delete(nodeId);
				treeItem.classList.remove("selected", "multi-selected");
			} else {
				this.selectedNodes.add(nodeId);
				treeItem.classList.add("multi-selected");
			}
		} else {
			// Single select
			this.clearSelection();
			this.selectedNodes.add(nodeId);
			treeItem.classList.add("selected");
		}

		this.onSelectionChange();
	}

	toggleNode(treeItem) {
		const nodeId = treeItem.dataset.nodeId;
		const children = treeItem.parentNode.querySelector(".tree-children");
		const expandBtn = treeItem.querySelector(".tree-expand");

		if (!children) return;

		if (this.expandedNodes.has(nodeId)) {
			this.expandedNodes.delete(nodeId);
			children.classList.remove("expanded");
			expandBtn.classList.remove("expanded");
		} else {
			this.expandedNodes.add(nodeId);
			children.classList.add("expanded");
			expandBtn.classList.add("expanded");
		}
	}

	clearSelection() {
		this.selectedNodes.clear();
		this.container.querySelectorAll(".tree-item").forEach((item) => {
			item.classList.remove("selected", "multi-selected");
		});
	}

	handleContextMenu(e) {
		const treeItem = e.target.closest(".tree-item");
		if (!treeItem) return;

		e.preventDefault();

		// If right-clicked item is not selected, select it
		const nodeId = treeItem.dataset.nodeId;
		if (!this.selectedNodes.has(nodeId)) {
			this.clearSelection();
			this.selectedNodes.add(nodeId);
			treeItem.classList.add("selected");
		}

		this.showContextMenu(e.clientX, e.clientY);
	}

	showContextMenu(x, y) {
		const menu = document.getElementById("treeContextMenu");

		// Get the selected node to determine what options to show
		const selectedNodeIds = Array.from(this.selectedNodes);
		const isTopLevelParent = selectedNodeIds.some((nodeId) => nodeId === "blast" || nodeId === "drawings" || nodeId === "surfaces" || nodeId === "images");

		// Show/hide delete and properties options based on selection
		const deleteItem = menu.querySelector('[data-action="delete"]');
		const propertiesItem = menu.querySelector('[data-action="properties"]');

		if (deleteItem) {
			deleteItem.style.display = isTopLevelParent ? "none" : "flex";
		}

		if (propertiesItem) {
			propertiesItem.style.display = isTopLevelParent ? "none" : "flex";
		}

		menu.style.left = x + "px";
		menu.style.top = y + "px";
		menu.style.display = "block";
	}

	hideContextMenu() {
		document.getElementById("treeContextMenu").style.display = "none";
	}

	handleContextAction(e) {
		const action = e.target.closest(".tree-context-item")?.dataset.action;
		if (!action) return;

		this.hideContextMenu();

		switch (action) {
			case "delete":
				this.deleteSelected();
				break;
			case "hide":
				this.hideSelected();
				break;
			case "show":
				this.showSelected(); // Make sure the "show" action is handled
				break;
			case "properties":
				this.showProperties();
				break;
		}
	}

	deleteSelected() {
		if (this.selectedNodes.size === 0) return;

		const nodeIds = Array.from(this.selectedNodes);

		// Determine what types we're deleting
		const hasHoles = nodeIds.some((nodeId) => nodeId.split("-")[0] === "hole");
		const hasEntities = nodeIds.some((nodeId) => nodeId.split("-")[0] === "entity");

		if (hasEntities) {
			// Deleting blast entities (which deletes all holes in that blast)
			Swal.fire({
				title: "Delete Blast",
				html: nodeIds.length === 1 ? "Delete this entire blast and all its holes?" : `Delete ${nodeIds.length} blasts and all their holes?`,
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete",
				cancelButtonText: "Cancel",
				confirmButtonColor: "#d33",
				customClass: {
					container: "custom-popup-container",
					title: "swal2-title",
					confirmButton: "confirm",
					cancelButton: "cancel"
				}
			}).then((result) => {
				if (result.isConfirmed) {
					nodeIds.forEach((nodeId) => {
						const type = nodeId.split("-")[0];
						const itemId = nodeId.split("-").slice(1).join("-");

						if (type === "entity") {
							// Delete all holes with this entity name
							const entityName = itemId;
							points = points.filter((hole) => hole.entityName !== entityName);
							console.log(`Deleted all holes in blast: ${entityName}`);
						} else if (type === "surface") {
							deleteSurfaceFromDB(itemId).then(() => {
								loadedSurfaces.delete(surfaceId);
							});
						} else if (type === "image") {
							deleteImageFromDB(itemId).then(() => {
								loadedImages.delete(imageId);
							});
						} else {
							this.deleteNode(nodeId);
						}
					});
					this.updateTreeData();
					drawData(points, selectedHole);
				}
			});
		} else if (hasHoles) {
			// Deleting individual holes with renumber option
			Swal.fire({
				title: "Delete Holes",
				html: nodeIds.length === 1 ? "Delete this hole?" : `Delete ${nodeIds.length} holes?`,
				icon: "warning",
				showCancelButton: true,
				showDenyButton: true,
				confirmButtonText: "Delete",
				denyButtonText: "Renumber",
				cancelButtonText: "Cancel",
				confirmButtonColor: "#d33",
				denyButtonColor: "#ff6b35",
				customClass: {
					container: "custom-popup-container",
					title: "swal2-title",
					confirmButton: "confirm",
					denyButton: "deny",
					cancelButton: "cancel"
				}
			}).then((result) => {
				if (result.isConfirmed || result.isDenied) {
					const shouldRenumber = result.isDenied;

					nodeIds.forEach((nodeId) => {
						const type = nodeId.split("-")[0];
						const itemId = nodeId.split("-").slice(1).join("-");

						if (type === "hole") {
							const holeIndex = points.findIndex((hole) => hole.holeID === itemId);
							if (holeIndex !== -1) {
								const entityName = points[holeIndex].entityName;
								points.splice(holeIndex, 1);

								if (shouldRenumber) {
									// Renumber remaining holes in the same entity
									const entityHoles = points
										.filter((hole) => hole.entityName === entityName)
										.sort((a, b) => {
											if (Math.abs(a.startYLocation - b.startYLocation) > 0.1) {
												return b.startYLocation - a.startYLocation;
											}
											return a.startXLocation - b.startXLocation;
										});

									entityHoles.forEach((hole, index) => {
										hole.holeID = (index + 1).toString();
									});
								}
							}
						}
					});
					this.updateTreeData();
					drawData(points, selectedHole);
				}
			});
		} else {
			// Standard confirmation for other items (surfaces, images, drawings, etc.)
			Swal.fire({
				title: "Delete Items",
				html: nodeIds.length === 1 ? "Delete this item?" : "Delete " + nodeIds.length + " items?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete",
				cancelButtonText: "Cancel",
				confirmButtonColor: "#d33",
				customClass: {
					container: "custom-popup-container",
					title: "swal2-title",
					confirmButton: "confirm",
					cancelButton: "cancel"
				}
			}).then((result) => {
				if (result.isConfirmed) {
					nodeIds.forEach((nodeId) => {
						const type = nodeId.split("-")[0];
						const itemId = nodeId.split("-").slice(1).join("-");
						if (type === "surface") {
							deleteSurfaceFromDB(itemId).then(() => {
								loadedSurfaces.delete(itemId);
								drawData(points, selectedHole);
							});
						} else if (type === "image") {
							deleteImageFromDB(itemId).then(() => {
								loadedImages.delete(itemId);
								drawData(points, selectedHole);
							});
						} else if (type === "points" || type === "line" || type === "poly" || type === "circle" || type === "text") {
							// Delete drawing objects from allKADDrawingsMap
							const entityName = itemId;
							if (allKADDrawingsMap && allKADDrawingsMap.has(entityName)) {
								allKADDrawingsMap.delete(entityName);
								console.log(`Deleted drawing object: ${entityName}`);

								if (typeof debouncedSaveKAD === "function") {
									debouncedSaveKAD();
								}

								drawData(points, selectedHole);
							}
						} else {
							this.deleteNode(nodeId);
						}
					});
					this.updateTreeData();
				}
			});
		}
	}

	hideSelected() {
		this.selectedNodes.forEach((nodeId) => {
			const element = this.container.querySelector('[data-node-id="' + nodeId + '"]');
			if (element) {
				element.style.opacity = "0.5";
				element.classList.add("hidden-node");

				const type = nodeId.split("-")[0];
				const itemId = nodeId.split("-").slice(1).join("-");

				if (type === "surface") {
					setSurfaceVisibility(itemId, false);
				} else if (type === "image") {
					setImageVisibility(itemId, false);
				}
			}
		});

		this.clearSelection();
	}
	showSelected() {
		this.selectedNodes.forEach((nodeId) => {
			const element = this.container.querySelector('[data-node-id="' + nodeId + '"]');
			if (element) {
				element.style.opacity = "1";
				element.classList.remove("hidden-node");

				const type = nodeId.split("-")[0];
				const itemId = nodeId.split("-").slice(1).join("-");

				if (type === "surface") {
					setSurfaceVisibility(itemId, true);
				} else if (type === "image") {
					setImageVisibility(itemId, true);
				}
			}
		});

		this.clearSelection();
	}
	showProperties() {
		if (this.selectedNodes.size === 1) {
			const nodeId = Array.from(this.selectedNodes)[0];
			const type = nodeId.split("-")[0];

			try {
				if (type === "surface") {
					// Check if the function exists in global scope
					if (typeof showSurfaceContextMenu === "function") {
						const canvas = document.getElementById("renderCanvas") || document.querySelector("canvas");
						if (canvas) {
							const rect = canvas.getBoundingClientRect();
							const centerX = rect.left + rect.width / 2;
							const centerY = rect.top + rect.height / 2;

							// Call the function in the global scope
							window.showSurfaceContextMenu(centerX, centerY);
						} else {
							console.warn("Canvas not found for surface context menu");
							// Fallback position
							window.showSurfaceContextMenu(window.innerWidth / 2, window.innerHeight / 2);
						}
					} else {
						console.error("showSurfaceContextMenu function not found");
					}
				} else if (type === "image") {
					// Check if the function exists in global scope
					if (typeof showImageContextMenu === "function") {
						const canvas = document.getElementById("renderCanvas") || document.querySelector("canvas");
						if (canvas) {
							const rect = canvas.getBoundingClientRect();
							const centerX = rect.left + rect.width / 2;
							const centerY = rect.top + rect.height / 2;

							// Call the function in the global scope
							window.showImageContextMenu(centerX, centerY);
						} else {
							console.warn("Canvas not found for image context menu");
							// Fallback position
							window.showImageContextMenu(window.innerWidth / 2, window.innerHeight / 2);
						}
					} else {
						console.error("showImageContextMenu function not found");
					}
				} else {
					// For other node types
					this.showNodeProperties(nodeId);
				}
			} catch (error) {
				console.error("Error showing properties:", error);
			}
		}
	}

	handleKeyboard(e) {
		if (!this.container.style.display === "none") return;

		switch (e.key) {
			case "Delete":
				this.deleteSelected();
				break;
			case "Escape":
				this.clearSelection();
				break;
		}
	}

	// Data management
	updateTreeData() {
		const treeData = this.buildTreeData();
		const html = this.renderTree(treeData);
		document.getElementById("treeView").innerHTML = html;
	}

	buildTreeData() {
		// Build tree structure from your data
		const tree = [
			{
				id: "blast",
				type: "blast",
				label: "Blast",
				expanded: true,
				children: this.buildBlastData()
			},
			{
				id: "drawings",
				type: "drawing",
				label: "Drawings",
				expanded: true,
				children: this.buildDrawingData()
			},
			{
				id: "surfaces",
				type: "surface",
				label: "Surfaces",
				expanded: true,
				children: this.buildSurfaceData()
			},
			{
				id: "images",
				type: "image",
				label: "Images",
				expanded: true,
				children: this.buildImageData()
			}
		];

		return tree;
	}

	buildBlastData() {
		if (!points || points.length === 0) return [];

		// Group holes by entity name
		const entities = {};
		points.forEach((hole) => {
			const entityName = hole.entityName || "Unknown";
			if (!entities[entityName]) {
				entities[entityName] = [];
			}
			entities[entityName].push(hole);
		});

		return Object.keys(entities).map((entityName) => {
			const holes = entities[entityName];
			const totalLength = holes.reduce((sum, hole) => sum + (hole.holeLengthCalculated || 0), 0);
			const metrics = getVoronoiMetrics(holes);
			const stats = getBlastStatistics();

			const volume = metrics.totalVolume;

			return {
				id: "entity-" + entityName,
				type: "entity",
				label: entityName,
				meta: "(" + holes.length + ", " + parseFloat(totalLength).toFixed(1) + "m, " + parseFloat(volume).toFixed(1) + "m³)",
				children: holes.map((hole, index) => ({
					id: "hole-" + hole.holeID || index,
					type: "hole",
					label: hole.holeID || "Hole " + index + 1,
					meta: "",
					children: [
						{ id: hole.holeID + "-startx", type: "property", label: "Start X", meta: (hole.startXLocation || 0).toFixed(3) },
						{ id: hole.holeID + "-starty", type: "property", label: "Start Y", meta: (hole.startYLocation || 0).toFixed(3) },
						{ id: hole.holeID + "-startz", type: "property", label: "Start Z", meta: (hole.startZLocation || 0).toFixed(3) },
						{ id: hole.holeID + "-gradez", type: "property", label: "Grade Z", meta: (hole.gradeZLocation || 0).toFixed(3) },
						{ id: hole.holeID + "-diameter", type: "property", label: "Diameter", meta: hole.holeDiameter || 115 + "mm" },
						{ id: hole.holeID + "-angle", type: "property", label: "Angle", meta: hole.holeAngle.toFixed(0) || 0 + "°" },
						{ id: hole.holeID + "-bearing", type: "property", label: "Bearing", meta: hole.holeBearing.toFixed(2) || 0 + "°" },
						{ id: hole.holeID + "-length", type: "property", label: "Length", meta: hole.holeLengthCalculated.toFixed(2) || 0 + "m" },
						{ id: hole.holeID + "-subdrill", type: "property", label: "Subdrill", meta: hole.subdrillAmount.toFixed(2) || 0 + "m" },
						{ id: hole.holeID + "-type", type: "property", label: "Hole Type", meta: hole.holeType || "Undefined" }
					]
				}))
			};
		});
	}

	// Enhanced buildDrawingData() - with Z values and color swatches
	buildDrawingData() {
		const drawingChildren = [];
		const pointsChildren = [];
		const linesChildren = [];
		const polysChildren = [];
		const circlesChildren = [];
		const textsChildren = [];

		if (typeof allKADDrawingsMap !== "undefined" && allKADDrawingsMap && allKADDrawingsMap.size > 0) {
			for (const [entityName, entity] of allKADDrawingsMap.entries()) {
				// Create individual element children for each entity
				// Fix line 25241 in buildDrawingData method
				const elementChildren = entity.data.map((element, index) => ({
					id: entity.entityType + "-" + entityName + "-element-" + (element.pointID || index + 1),
					type: entity.entityType + "-element",
					label: entity.entityType === "text" ? element.text || "Text " + (element.pointID || index + 1) : entity.entityType === "circle" ? "Circle " + (element.pointID || index + 1) : "Point " + (element.pointID || index + 1),
					// FIX: Add safety checks before calling toFixed()
					meta: entity.entityType === "circle" ? "R:" + (Number(element.radius) || 0).toFixed(1) : "(" + (Number(element.pointXLocation) || 0).toFixed(1) + "," + (Number(element.pointYLocation) || 0).toFixed(1) + "," + (Number(element.pointZLocation) || 0).toFixed(1) + ")",
					// Add color information for swatch generation
					elementData: element // Store the full element data for color picker access
				}));

				// Group by entity type with children
				switch (entity.entityType) {
					case "point":
						pointsChildren.push({
							id: "points-" + entityName,
							type: "points-group",
							label: entityName,
							meta: "(" + entity.data?.length || 0 + ")",
							children: elementChildren
						});
						break;
					case "line":
						linesChildren.push({
							id: "line-" + entityName,
							type: "line-group",
							label: entityName,
							meta: "(" + entity.data?.length || 0 + ")",
							children: elementChildren
						});
						break;
					case "poly":
						polysChildren.push({
							id: "poly-" + entityName,
							type: "polygon-group",
							label: entityName,
							meta: "(" + entity.data?.length || 0 + ")",
							children: elementChildren
						});
						break;
					case "circle":
						circlesChildren.push({
							id: "circle-" + entityName,
							type: "circle-group",
							label: entityName,
							meta: "(" + entity.data?.length || 0 + ")",
							children: elementChildren
						});
						break;
					case "text":
						textsChildren.push({
							id: "text-" + entityName,
							type: "text-group",
							label: entityName,
							meta: "(" + entity.data?.length || 0 + ")",
							children: elementChildren
						});
						break;
				}
			}
		}

		// Add categories with children to the drawing tree (same as before)
		if (pointsChildren.length > 0) {
			drawingChildren.push({
				id: "drawings-points",
				type: "points-folder",
				label: "Points",
				children: pointsChildren
			});
		}

		if (linesChildren.length > 0) {
			drawingChildren.push({
				id: "drawings-lines",
				type: "lines-folder",
				label: "Lines",
				children: linesChildren
			});
		}

		if (polysChildren.length > 0) {
			drawingChildren.push({
				id: "drawings-polygons",
				type: "polygons-folder",
				label: "Polygons",
				children: polysChildren
			});
		}

		if (circlesChildren.length > 0) {
			drawingChildren.push({
				id: "drawings-circles",
				type: "circle-folder",
				label: "Circles",
				children: circlesChildren
			});
		}

		if (textsChildren.length > 0) {
			drawingChildren.push({
				id: "drawings-texts",
				type: "text-folder",
				label: "Texts",
				children: textsChildren
			});
		}

		return drawingChildren;
	}

	// Instead of using cache arrays, use the Maps:
	buildSurfaceData() {
		const surfaceChildren = [];

		// Use Map directly instead of cache array
		loadedSurfaces.forEach((surface, surfaceId) => {
			surfaceChildren.push({
				id: "surface-" + surfaceId,
				type: "surface",
				label: surface.name,
				meta: "(" + (surface.points?.length || 0) + " points)"
			});
		});

		return surfaceChildren;
	}

	buildImageData() {
		const imageChildren = [];

		// Use Map directly instead of cache array
		loadedImages.forEach((image, imageId) => {
			imageChildren.push({
				id: "image-" + imageId,
				type: "image",
				label: image.name,
				meta: image.type || "image"
			});
		});

		return imageChildren;
	}

	// Enhanced renderTree() - with color swatches
	renderTree(nodes, level = 0) {
		return nodes
			.map((node) => {
				const hasChildren = node.children && node.children.length > 0;
				const isExpanded = this.expandedNodes.has(node.id) || node.expanded;
				const isSelected = this.selectedNodes.has(node.id);

				// Generate color swatch for individual elements
				let colorSwatchHtml = "";
				if (node.elementData && node.type.includes("-element")) {
					const color = node.elementData.color || "#777777";
					colorSwatchHtml = `<span class="color-swatch" 
				style="background-color: ${color};" 
				data-element-id="${node.id}"
				data-entity-name="${node.elementData.entityName}"
				data-point-id="${node.elementData.pointID}"></span>`;
				}

				let html = `
            <li class="tree-node">
                <div class="tree-item ${isSelected ? "selected" : ""}" data-node-id="${node.id}">
                    <span class="tree-expand ${hasChildren ? (isExpanded ? "expanded" : "") : "leaf"}"></span>
                    <span class="tree-icon ${node.type}"></span>
                    ${colorSwatchHtml}
                    <span class="tree-label">${node.label}</span>
                    ${node.meta ? `<span class="tree-meta">${node.meta}</span>` : ""}
                </div>
        `;

				if (hasChildren) {
					html += `
                <ul class="tree-children ${isExpanded ? "expanded" : ""}">
                    ${this.renderTree(node.children, level + 1)}
                </ul>
            `;
				}

				html += "</li>";
				return html;
			})
			.join("");
	}

	// Callbacks
	onSelectionChange() {
		// Override this method to handle selection changes
		console.log("Selected nodes:", Array.from(this.selectedNodes));
	}

	deleteNode(nodeId) {
		// Override this method to handle node deletion
		console.log("Delete node:", nodeId);
	}

	showNodeProperties(nodeId) {
		// Override this method to show node properties
		console.log("Show properties for:", nodeId);
	}
}
// Add this new function to handle color picker for individual elements
// Fix the openColorPickerForElement function
// // Clean Swal2 wrapper with immediate JSColor
// function openColorPickerForElement(swatchElement, entityName, pointID) {
// 	event.stopPropagation();

// 	// Get the element data
// 	const entity = allKADDrawingsMap.get(entityName);
// 	if (!entity) return;

// 	const element = entity.data.find((el) => el.pointID === pointID);
// 	if (!element) return;

// 	const currentColor = element.drawingColor || jsColorHexDrawing;

// 	Swal.fire({
// 		title: `Color for ${entityName} Point ${pointID}`,
// 		html: `
// 			<div style="text-align: center; padding: 20px;">
// 				<div style="margin-bottom: 15px;">
// 					<strong>Current:</strong>
// 					<span class="color-swatch" style="background-color: ${currentColor}; margin-left: 8px;"></span>
// 					<span style="margin-left: 8px;">${currentColor}</span>
// 				</div>
// 				<input id="colorPickerInput" style="width: 200px; height: 40px; border: 2px solid #ccc; border-radius: 4px;" value="${currentColor.replace("#", "")}" data-jscolor="{format:'hex', previewElement:'#colorPreview', mode:'HSV', width:300, height:200}">
// 				<div id="colorPreview" style="width: 60px; height: 30px; border: 1px solid #666; margin: 10px auto; border-radius: 4px; background-color: ${currentColor};"></div>
// 			</div>
// 		`,
// 		showCancelButton: true,
// 		confirmButtonText: "Apply Color",
// 		cancelButtonText: "Cancel",
// 		width: 400,
// 		didOpen: () => {
// 			// Initialize JSColor on the input
// 			const input = document.getElementById("colorPickerInput");
// 			new JSColor(input, {
// 				format: "hex",
// 				mode: "HSV",
// 				width: 300,
// 				height: 200,
// 				onChange: function () {
// 					const preview = document.getElementById("colorPreview");
// 					const newColor = "#" + this.toString();
// 					preview.style.backgroundColor = newColor;
// 				}
// 			});
// 		}
// 	}).then((result) => {
// 		if (result.isConfirmed) {
// 			const input = document.getElementById("colorPickerInput");
// 			const newColor = "#" + input.value;

// 			// Update the element color
// 			element.drawingColor = newColor;
// 			swatchElement.style.backgroundColor = newColor;

// 			// Redraw the canvas
// 			drawData(points, selectedHole);
// 			console.log(`✅ Updated ${entityName} point ${pointID} color to:`, newColor);
// 		}
// 	});
// }
// Simple direct JSColor popup
/// Fix the openColorPickerForElement function - remove double hash
function openColorPickerForElement(swatchElement, entityName, pointID) {
	event.stopPropagation();

	// Get the element data
	const entity = allKADDrawingsMap.get(entityName);
	if (!entity) return;

	const element = entity.data.find((el) => el.pointID === pointID);
	if (!element) return;

	// Check if JSColor is already installed and remove it
	if (swatchElement.jscolor) {
		try {
			swatchElement.jscolor.destroy();
		} catch (e) {
			// Ignore errors during cleanup
		}
	}

	// Create JSColor picker directly
	const picker = new JSColor(swatchElement, {
		value: element.color || getJSColorHexDrawing(),
		format: "hex",
		mode: "HSV",
		position: "right",
		onChange: function () {
			// ✅ FIX: Use toHEXString() instead of toString() to avoid double hash
			const newColor = this.toHEXString(); // This already includes the #
			element.color = newColor;
			swatchElement.style.backgroundColor = newColor;

			// Redraw the canvas
			drawData(points, selectedHole);
			debouncedUpdateTreeView();

			console.log("✅ Updated " + entityName + " point " + pointID + " color to:", newColor);
		}
	});

	// Show the picker
	picker.show();
}
// Initialize tree view
let treeView;
// Add this debounced version
let updateTreeViewTimeout;
function debouncedUpdateTreeView(delay = 100) {
	if (updateTreeViewTimeout) {
		clearTimeout(updateTreeViewTimeout);
	}
	updateTreeViewTimeout = setTimeout(() => {
		updateTreeView(); // ✅ Call updateTreeView(), not itself!
	}, delay);
}
// Update tree when data changes
function updateTreeView() {
	if (treeView) {
		treeView.updateTreeData();
	}
}

document.addEventListener("DOMContentLoaded", function () {
	console.log("🚀 Starting application initialization...");

	// REMOVE THIS LINE:
	// treeView = new TreeView("treePanel");

	// Just hide the panel
	const treePanel = document.getElementById("treePanel");
	if (treePanel) {
		treePanel.style.display = "none";
	}

	// Initialize TreeView ONLY when the button is first clicked
	document.getElementById("showTreeBtn").addEventListener("click", function () {
		// Create TreeView on first use
		if (!treeView) {
			console.log("🌳 Creating TreeView for first time...");
			treeView = new TreeView("treePanel");
			updateTreeView();
		}

		// Toggle panel visibility
		const treePanel = document.getElementById("treePanel");
		if (treePanel) {
			if (treePanel.style.display === "none" || !treePanel.style.display) {
				treePanel.style.display = "flex";
			} else {
				treePanel.style.display = "none";
			}
		}
	});

	// The rest of your initialization code...
	setTimeout(function () {
		getDarkModeSettings();
		updatePopup();
		initializeVoronoiControls();

		// Longer delay for jscolor
		setTimeout(function () {
			initializePreferences();
		}, 200);

		console.log("✅ Application initialization complete");
		debugPreferences();
	}, 50);
});
