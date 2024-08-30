const canvas = document.getElementById("canvas");
const padding = 10; // add 10 pixels of padding

// Get the screen size and calculate the dimensions based on the desired ratio
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const canvasWidth = Math.round(screenWidth);
const canvasHeight = Math.round(screenHeight);

const canvasAdjustWidth = 40;
const canvasAdjustHeight = 0.33;
// Set the dimensions of the canvas and its container
canvas.width = document.documentElement.clientWidth - canvasAdjustWidth;
canvas.height = document.documentElement.clientHeight - document.documentElement.clientHeight * canvasAdjustHeight;

const timeChartObject = document.getElementById("timeChart");

const ctx = canvas.getContext("2d");
let scale = 5; // adjust the scale to fit the points in the canvas
let fontSize = document.getElementById("fontSlider").value;
let points = [];
let countPoints = points.length;
let sumMeters = 0;
let currentScale = scale; // declare a variable to store the current scale
let currentFontSize = fontSize; // declare a variable to store the current fontsize
let toeScale = document.getElementById("toeSlider").value;
let deltaX = 0;
let deltaY = 0;
let centroidX = 0;
let centroidY = 0;
let centroidZ = 0;
// Variable to store the "fromHole" ID during connector mode
let fromHoleStore = null;
let isAddingConnector = false;
let isAddingHole = false; //not used yet
let isDeletingHole = false;
let isMovingCanvas = false;
let isDragging = false;
// Variables to store the initial mouse position during canvas movement
let initialMouseX = 0;
let initialMouseY = 0;
let intervalAmount = document.getElementById("intervalSlider").value;
let contourLevel = 0;
let minX;
let minY;
let contourLines = [];
let epsilon = 1;
let holeTimes = {};
let firstSelectedHoleID = null;
let secondSelectedHoleID = null;
let selectedHoleID = null;
let isLengthEditing = false;
let isAngleEditing = false;
let isBearingEditing = false;
let isEastingEditing = false;
let isNorthingEditing = false;
let isElevationEditing = false;
let isDisplayingContours = false;
let isDisplayingTriangles = false;
let maxEdgeLength = 15;
let clickedHole; // Declare clickedHole outside the event listener
let contourLinesArray = [];
let selectedHolesArray = [];
let resultTriangles = [];
let isPlaying = false; // To track whether the animation is playing
let animationInterval; // To store the interval ID for the animation
let playSpeed = 1; // Default play speed
//COLOURS
let noneColour = "rgba(0, 0, 0, 0)";
let darkModeEnabled = document.body.classList.contains("dark-mode");
let transparentFillColour = darkModeEnabled ? "rgba(0, 128, 255, 0.3)" : "rgba(128, 255, 0, 0.3)";
let fillColour = darkModeEnabled ? "lightgrey" : "darkgrey";
let strokeColour = darkModeEnabled ? "white" : "black";
let textFillColour = darkModeEnabled ? "white" : "black";
let depthColour = darkModeEnabled ? "blue" : "cyan";
let angleDipColour = darkModeEnabled ? "darkcyan" : "orange";

document.getElementById("fileInput").addEventListener("change", handleFileUpload);
document.getElementById("zoomInButton").addEventListener("click", zoomIn);
document.getElementById("zoomOutButton").addEventListener("click", zoomOut);
document.getElementById("resetZoomButton").addEventListener("click", resetZoom);
document.getElementById("deleteHoleButton").addEventListener("click", deleteSelectedHole);

const option1 = document.getElementById("display1");
const option2 = document.getElementById("display2");
const option3 = document.getElementById("display3");
const option4 = document.getElementById("display4");
const option5 = document.getElementById("display5");
const option5A = document.getElementById("display5A");
const option6 = document.getElementById("display6");
const option7 = document.getElementById("display7");
const option8 = document.getElementById("display8");
const option8A = document.getElementById("display8A");
const option9 = document.getElementById("display9");
const option10 = document.getElementById("display10");
const option11 = document.getElementById("display11");
// Add event listeners for mouse down, move, and up events
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mouseup", handleMouseUp);
// Add event listeners for touch start, move, and end events
canvas.addEventListener("touchstart", handleTouchStart);
canvas.addEventListener("touchmove", handleTouchMove);
canvas.addEventListener("touchend", handleTouchEnd);
// Event listener for the connector switch
const addConnectorSwitch = document.getElementById("addConnectorButton");
addConnectorSwitch.addEventListener("change", function() {
	if (this.checked) {
		isAddingConnector = true;
		document.getElementById("display5A").checked = true; // Set display mode to connectors
		canvas.addEventListener("click", handleConnectorClick);
		canvas.addEventListener("touchstart", handleConnectorClick);
		drawPoints(points, selectedHoleID);
	} else {
		isAddingConnector = false;
		canvas.removeEventListener("click", handleConnectorClick);
		canvas.removeEventListener("touchstart", handleConnectorClick);
		selectedHoleID = null;
		firstSelectedHoleID = null;
		secondSelectedHoleID = null;
		fromHoleStore = null;
		clickedHole = null;
		drawPoints(points, selectedHoleID);
	}
});
// Event listener for the delete switch
const deleteHoleSwitch = document.getElementById("deleteHoleSwitch");
deleteHoleSwitch.addEventListener("change", function() {
	if (this.checked) {
		isDeletingHole = true;
		isAddingHole = false;
		addHoleSwitch.checked = false;
		addHoleSwitch.disabled = true;
		document.getElementById("display1").checked = true; // Set display mode to connectors
		canvas.addEventListener("click", handleHoleDeletingClick);
		canvas.addEventListener("touchstart", handleHoleDeletingClick);
		delaunayTriangles(points, maxEdgeLength);
		calculateTimes(points);
		contourLinesArray = recalculateContours(points, deltaX, deltaY);
		drawPoints(points, selectedHoleID);
	} else {
		isDeletingHole = false;
		addHoleSwitch.disabled = false;
		canvas.removeEventListener("click", handleHoleDeletingClick);
		canvas.removeEventListener("touchstart", handleHoleDeletingClick);
		selectedHoleID = null;
		firstSelectedHoleID = null;
		secondSelectedHoleID = null;
		fromHoleStore = null;
		clickedHole = null;
		delaunayTriangles(points, maxEdgeLength);
		calculateTimes(points);
		contourLinesArray = recalculateContours(points, deltaX, deltaY);
		drawPoints(points, selectedHoleID);
	}
});
// Event listener for the add switch
const addHoleSwitch = document.getElementById("addHoleSwitch");
addHoleSwitch.addEventListener("change", function() {
	if (this.checked) {
		isAddingHole = true;
		isDeletingHole = false;
		deleteHoleSwitch.checked = false;
		deleteHoleSwitch.disabled = true;
		document.getElementById("display1").checked = true; // Set display mode to connectors
		canvas.addEventListener("click", handleHoleAddingClick);
		canvas.addEventListener("touchstart", handleHoleAddingClick);
		delaunayTriangles(points, maxEdgeLength);
		calculateTimes(points);
		contourLinesArray = recalculateContours(points, deltaX, deltaY);
		drawPoints(points, selectedHoleID);
	} else {
		isAddingHole = false;
		canvas.removeEventListener("click", handleHoleAddingClick);
		canvas.removeEventListener("touchstart", handleHoleAddingClick);
		deleteHoleSwitch.disabled = false;
		selectedHoleID = null;
		firstSelectedHoleID = null;
		secondSelectedHoleID = null;
		fromHoleStore = null;
		clickedHole = null;
		delaunayTriangles(points, maxEdgeLength);
		calculateTimes(points);
		contourLinesArray = recalculateContours(points, deltaX, deltaY);
		drawPoints(points, selectedHoleID);
	}
});
// Event listener for the edit hole Length switch
const editLengthSwitch = document.getElementById("editLengthButton");
editLengthSwitch.addEventListener("change", function() {
	//console.log("editLengthSwitch");
	if (this.checked) {
		//console.log("editLengthSwitch checked");
		isLengthEditing = true;
		document.getElementById("display2").checked = true; // Set display mode to hole Length
		canvas.addEventListener("click", handleHoleLengthEditClick);
		canvas.addEventListener("touchstart", handleHoleLengthEditClick);
		drawPoints(points, selectedHoleID);
	} else {
		//console.log("editLengthSwitch unchecked");
		isLengthEditing = false;
		canvas.removeEventListener("click", handleHoleLengthEditClick);
		canvas.removeEventListener("touchstart", handleHoleLengthEditClick);
		selectedHoleID = null;
		firstSelectedHoleID = null;
		secondSelectedHoleID = null;
		fromHoleStore = null;
		clickedHole = null;
		drawPoints(points, selectedHoleID);
	}
	// Access the slider element and add an event listener to track changes
	const holeLengthSlider = document.getElementById("holeLengthSlider");
	holeLengthSlider.addEventListener("input", function() {
		if (isLengthEditing) {
			let newHoleLength = parseFloat(holeLengthSlider.value);
			if (selectedHoleID) {
				const index = points.findIndex(point => point.holeID === selectedHoleID);
				if (index !== -1) {
					clickedHole = points[index];
					//console.log("clickedHole - " + "Hole Length : " + newHoleLength + "m");
					holeLengthLabel.textContent = "Hole Length : " + parseFloat(newHoleLength).toFixed(1) + "m";

					// Calculate endXYZ and draw points
					calculateEndXYZ(clickedHole, newHoleLength, 1);
					drawPoints(points, selectedHoleID);
				}
			}
		}
	});
});
// Event listener for the edit hole Angle switch
const editAngleSwitch = document.getElementById("editAngleButton");
editAngleSwitch.addEventListener("change", function() {
	//console.log("editAngleSwitch");
	if (this.checked) {
		//console.log("editAngleSwitch checked");
		isAngleEditing = true;
		document.getElementById("display3").checked = true; // Set display mode to hole Angle
		canvas.addEventListener("click", handleAngleEditClick);
		canvas.addEventListener("touchstart", handleAngleEditClick);
		drawPoints(points, selectedHoleID);
	} else {
		//console.log("editAngleSwitch unchecked");
		isAngleEditing = false;
		canvas.removeEventListener("click", handleAngleEditClick);
		canvas.removeEventListener("touchstart", handleAngleEditClick);
		selectedHoleID = null;
		firstSelectedHoleID = null;
		secondSelectedHoleID = null;
		fromHoleStore = null;
		clickedHole = null;
		drawPoints(points, selectedHoleID);
	}
	// Access the slider element and add an event listener to track changes
	const holeAngleSlider = document.getElementById("holeAngleSlider");
	holeAngleSlider.addEventListener("input", function() {
		if (isAngleEditing) {
			let newHoleAngle = parseFloat(holeAngleSlider.value);
			if (selectedHoleID) {
				const index = points.findIndex(point => point.holeID === selectedHoleID);
				if (index !== -1) {
					clickedHole = points[index];
					//console.log("clickedHole - " + "Hole Angle : " + newHoleAngle + '°');
					holeAngleLabel.textContent = "Hole Angle : " + parseFloat(newHoleAngle).toFixed(0) + "\u00B0";

					// Calculate endXYZ and draw points
					calculateEndXYZ(clickedHole, newHoleAngle, 2);
					drawPoints(points, selectedHoleID);
				}
			}
		}
	});
});
// Event listener for the edit hole Bearing switch
const editBearingSwitch = document.getElementById("editBearingButton");
editBearingSwitch.addEventListener("change", function() {
	//console.log("editBearingSwitch");
	if (this.checked) {
		console.log("editBearingSwitch checked");
		isBearingEditing = true;
		document.getElementById("display5").checked = true; // Set display mode to hole Bearing
		canvas.addEventListener("click", handleBearingEditClick);
		canvas.addEventListener("touchstart", handleBearingEditClick);
		drawPoints(points, selectedHoleID);
	} else {
		//console.log("editBearingSwitch unchecked");
		isBearingEditing = false;
		canvas.removeEventListener("click", handleBearingEditClick);
		canvas.removeEventListener("touchstart", handleBearingEditClick);
		selectedHoleID = null;
		firstSelectedHoleID = null;
		secondSelectedHoleID = null;
		fromHoleStore = null;
		clickedHole = null;
		drawPoints(points, selectedHoleID);
	}
	// Access the slider element and add an event listener to track changes
	const holeBearingSlider = document.getElementById("holeBearingSlider");
	holeBearingSlider.addEventListener("input", function() {
		if (isBearingEditing) {
			let newHoleBearing = parseFloat(holeBearingSlider.value);
			if (selectedHoleID) {
				const index = points.findIndex(point => point.holeID === selectedHoleID);
				if (index !== -1) {
					clickedHole = points[index];
					//console.log("clickedHole - " + "Hole Bearing : " + newHoleBearing + "\u00B0");
					holeBearingLabel.textContent = "Hole Bearing : " + parseFloat(newHoleBearing).toFixed(1) + "\u00B0";

					// Calculate endXYZ and draw points
					calculateEndXYZ(clickedHole, newHoleBearing, 3);
					drawPoints(points, selectedHoleID);
				}
			}
		}
	});
});
/// Event listener for the edit hole Easting switch
const editEastingSwitch = document.getElementById("editEastingButton");
editEastingSwitch.addEventListener("change", function() {
	if (this.checked) {
		isEastingEditing = true;
		document.getElementById("display9").checked = true; // Set display mode to hole Easting
		canvas.addEventListener("click", handleEastingEditClick);
		canvas.addEventListener("touchstart", handleEastingEditClick);
		drawPoints(points, selectedHoleID);
	} else {
		isEastingEditing = false;
		canvas.removeEventListener("click", handleEastingEditClick);
		canvas.removeEventListener("touchstart", handleEastingEditClick);
		selectedHoleID = null;
		firstSelectedHoleID = null;
		secondSelectedHoleID = null;
		fromHoleStore = null;
		clickedHole = null;
		delaunayTriangles(points, maxEdgeLength);
		calculateTimes(points);
		contourLinesArray = recalculateContours(points, deltaX, deltaY);
		drawPoints(points, selectedHoleID);
	}
});
// Access the slider element and add an event listener to track changes
const holeEastingSlider = document.getElementById("holeEastingSlider");
holeEastingSlider.addEventListener("input", function() {
	if (isEastingEditing) {
		if (selectedHoleID) {
			const index = points.findIndex(point => point.holeID === selectedHoleID);
			if (index !== -1) {
				clickedHole = points[index];
				let newHoleEasting = parseFloat(holeEastingSlider.value);
				holeEastingLabel.textContent = "Hole Easting (X): " + newHoleEasting.toFixed(2) + "mE";
				// Calculate endXYZ and draw points
				calculateEndXYZ(clickedHole, newHoleEasting, 4);
				delaunayTriangles(points, maxEdgeLength);
				contourLinesArray = recalculateContours(points, deltaX, deltaY); // Recalculate contour lines
				drawPoints(points, selectedHoleID);
			}
		}
	}
});
/// Event listener for the edit hole Northing switch
const editNorthingSwitch = document.getElementById("editNorthingButton");
editNorthingSwitch.addEventListener("change", function() {
	if (this.checked) {
		isNorthingEditing = true;
		document.getElementById("display10").checked = true; // Set display mode to hole Northing
		canvas.addEventListener("click", handleNorthingEditClick);
		canvas.addEventListener("touchstart", handleNorthingEditClick);
		drawPoints(points, selectedHoleID);
	} else {
		isNorthingEditing = false;
		canvas.removeEventListener("click", handleNorthingEditClick);
		canvas.removeEventListener("touchstart", handleNorthingEditClick);
		selectedHoleID = null;
		firstSelectedHoleID = null;
		secondSelectedHoleID = null;
		fromHoleStore = null;
		clickedHole = null;
		delaunayTriangles(points, maxEdgeLength);
		calculateTimes(points);
		contourLinesArray = recalculateContours(points, deltaX, deltaY);
		drawPoints(points, selectedHoleID);
	}
});
// Access the slider element and add an event listener to track changes
const holeNorthingSlider = document.getElementById("holeNorthingSlider");
holeNorthingSlider.addEventListener("input", function() {
	if (isNorthingEditing) {
		if (selectedHoleID) {
			const index = points.findIndex(point => point.holeID === selectedHoleID);
			if (index !== -1) {
				clickedHole = points[index];
				let newHoleNorthing = parseFloat(holeNorthingSlider.value);
				holeNorthingLabel.textContent = "Hole Northing (Y): " + newHoleNorthing.toFixed(2) + "mN";
				// Calculate endXYZ and draw points
				calculateEndXYZ(clickedHole, newHoleNorthing, 5);
				contourLinesArray = recalculateContours(points, deltaX, deltaY); // Recalculate contour lines
				delaunayTriangles(points, maxEdgeLength);
				drawPoints(points, selectedHoleID);
			}
		}
	}
});
/// Event listener for the edit hole Elevation switch
const editElevationSwitch = document.getElementById("editElevationButton");
editElevationSwitch.addEventListener("change", function() {
	if (this.checked) {
		isElevationEditing = true;
		document.getElementById("display11").checked = true; // Set display mode to hole Elevation
		canvas.addEventListener("click", handleElevationEditClick);
		canvas.addEventListener("touchstart", handleElevationEditClick);
		drawPoints(points, selectedHoleID);
	} else {
		isElevationEditing = false;
		canvas.removeEventListener("click", handleElevationEditClick);
		canvas.removeEventListener("touchstart", handleElevationEditClick);
		selectedHoleID = null;
		firstSelectedHoleID = null;
		secondSelectedHoleID = null;
		fromHoleStore = null;
		clickedHole = null;
		delaunayTriangles(points, maxEdgeLength);
		calculateTimes(points);
		contourLinesArray = recalculateContours(points, deltaX, deltaY);
		drawPoints(points, selectedHoleID);
	}
});
// Access the slider element and add an event listener to track changes
const holeElevationSlider = document.getElementById("holeElevationSlider");
holeElevationSlider.addEventListener("input", function() {
	if (isElevationEditing) {
		if (selectedHoleID) {
			const index = points.findIndex(point => point.holeID === selectedHoleID);
			if (index !== -1) {
				clickedHole = points[index];
				let newHoleElevation = parseFloat(holeElevationSlider.value);
				holeElevationLabel.textContent = "Hole Elevation (Z): " + newHoleElevation.toFixed(2) + "m";
				// Calculate endXYZ and draw points
				calculateEndXYZ(clickedHole, newHoleElevation, 6);
				delaunayTriangles(points, maxEdgeLength);
				drawPoints(points, selectedHoleID);
			}
		}
	}
});
function resizeChart() {
	if (Array.isArray(holeTimes)) {
		const newWidth = document.documentElement.clientWidth;
		Plotly.relayout(timeChartObject, { width: newWidth });
	}
}
// Add event listener for window resize
window.addEventListener("resize", resizeChart);
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
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
		}
	});
}
function isIOS() {
	const userAgent = navigator.userAgent.toLowerCase();
	return /iphone|ipad|ipod/.test(userAgent);
}
document.getElementById("saveAs").addEventListener("click", function() {
	if (isIOS()) {
		const csv = convertPointsTo10ColumnCSV();

		// Create a Blob with the CSV data
		const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });

		// Create a URL for the Blob
		const url = URL.createObjectURL(blob);

		// Create an anchor element with the download link
		const link = document.createElement("a");
		link.href = url;
		link.download = "blastingapps_output_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";
		link.textContent = "Click here to download";

		// Append the link to the document
		document.body.appendChild(link);

		// Programmatically trigger the click event on the link
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	} else {
		const csv = convertPointsTo10ColumnCSV();

		// Create an invisible anchor element
		const link = document.createElement("a");
		link.style.display = "none";

		// Set the CSV data as the "href" attribute
		link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);

		// Prompt the user to save the file
		// Name the file "blastingapps_output" with today's date and time
		link.download = "blastingapps_output_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";

		// Append the link to the document
		document.body.appendChild(link);

		// Programmatically trigger the click event on the link
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	}
});
document.getElementById("saveAll").addEventListener("click", function() {
	if (isIOS()) {
		const csv = convertPointsToAllDataCSV();

		// Create a Blob with the CSV data
		const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });

		// Create a URL for the Blob
		const url = URL.createObjectURL(blob);

		// Create an anchor element with the download link
		const link = document.createElement("a");
		link.href = url;
		link.download = "blastingapps_all_output_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";
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
		link.download = "blastingapps_all_output_" + new Date().toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", "_") + ".csv";

		// Append the link to the document
		document.body.appendChild(link);

		// Programmatically trigger the click event on the link
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	}
});
// Function to check if the mouse is inside the canvas
function isMouseInside(mouseX, mouseY, canvas) {
	const rect = canvas.getBoundingClientRect(); // Get the bounding rectangle of the canvas
	return mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom;
}
const canvasContainer = document.querySelector(".canvas-container");

canvasContainer.addEventListener(
	"wheel",
	function(event) {
		const mouseX = event.clientX;
		const mouseY = event.clientY;
		const isMouseInsideCanvas = isMouseInside(mouseX, mouseY, canvas); // Replace `canvas` with the actual reference to your canvas element

		if (isMouseInsideCanvas) {
			event.preventDefault();
			const deltaY = event.deltaY;

			if (deltaY > 0) {
				// Update the current scale based on the scroll wheel movement
				currentScale *= 0.9; // Zoom out
				currentFontSize *= 0.9;
			} else if (deltaY < 0) {
				currentScale *= 1.1; // Zoom in
				currentFontSize *= 1.1;
			}

			drawPoints(points, selectedHoleID);
		}
	},
	{ passive: false } // Add this option to make the event listener non-passive
);
// Access the slider element and add an event listener to track changes
const slider = document.getElementById("toeSlider");
slider.addEventListener("input", function() {
	////console.log('Slider value:', this.value);
	toeScale = document.getElementById("toeSlider").value;
	toeLabel.textContent = "Toe Size : " + parseFloat(toeScale).toFixed(1);
	drawPoints(points, selectedHoleID);
});
// Access the slider element and add an event listener to track changes
const connSlider = document.getElementById("connSlider");
connSlider.addEventListener("input", function() {
	////console.log('Connector value:', this.value);
	connScale = document.getElementById("connSlider").value;
	connLabel.textContent = "Tie Size : " + parseFloat(connScale).toFixed(1);
	drawPoints(points, selectedHoleID);
});
const fontSlider = document.getElementById("fontSlider");
fontSlider.addEventListener("input", function() {
	currentFontSize = this.value;
	currentFontSize = document.getElementById("fontSlider").value;
	fontLabel.textContent = "Font Size : " + currentFontSize + "px";
	drawPoints(points, selectedHoleID);
});
// Access the slider element and add an event listener to track changes
const intervalSlider = document.getElementById("intervalSlider");
intervalSlider.addEventListener("input", function() {
	intervalAmount = document.getElementById("intervalSlider").value;
	intervalLabel.textContent = "Interval : " + intervalAmount + "ms";
	contourLinesArray = recalculateContours(points, deltaX, deltaY);
	drawPoints(points, selectedHoleID);
});

const timeSlider = document.getElementById("timeRange");
timeSlider.addEventListener("input", function() {
	////console.log('Connector value:', this.value);
	timeRange = document.getElementById("timeRange").value;
	timeRangeLabel.textContent = "Time window :" + timeRange + "ms";
	timeChart();
});
option1.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option2.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option3.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option4.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option5.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option5A.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option6.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option7.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option8.addEventListener("change", function() {
	isDisplayingContours = true;
	drawPoints(points, selectedHoleID);
});
option8A.addEventListener("change", function() {
	isDisplayingTriangles = true;
	drawPoints(points, selectedHoleID);
});
option9.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option10.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
option11.addEventListener("change", function() {
	drawPoints(points, selectedHoleID);
});
let touchStartTime;
let touchDuration;
const longPressDuration = 200;

function handleMouseDown(event) {
  touchStartTime = Date.now();
  touchDuration = 0; // Reset touch duration on touch start

  isDragging = true;
  lastMouseX = event.clientX;
  lastMouseY = event.clientY;

}

function handleMouseMove(event) {
  if (isDragging) {
    deltaX = event.clientX - lastMouseX;
    deltaY = event.clientY - lastMouseY;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    centroidX -= deltaX / currentScale;
    centroidY += deltaY / currentScale;
    drawPoints(points, selectedHoleID);
  }
}

function handleMouseUp(event) {
	isDragging = false;
	touchDuration = Date.now() - touchStartTime;
  
	if (isAddingHole && touchDuration <= longPressDuration) {
	  // Short click behavior
	  touchStartX = event.clientX;
	  touchStartY = event.clientY;
	  addHolePopup();
	}
  }

function handleTouchStart(event) {
  touchStartTime = Date.now();
  touchDuration = 0; // Reset touch duration on touch start

  if (event.touches.length === 1) {
    isTouchDragging = true;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  } else if (event.touches.length === 2) {
    // Pinch
    initialPinchDistance = null;
    initialScale = currentScale;
    initialFontSize = currentFontSize;
  }
}

function handleTouchMove(event) {
  if (event.touches.length === 1 && isTouchDragging) {
    event.preventDefault();
    let touchX = event.touches[0].clientX;
    let touchY = event.touches[0].clientY;
    deltaX = touchX - touchStartX;
    deltaY = touchY - touchStartY;
    touchStartX = touchX;
    touchStartY = touchY;
    centroidX -= deltaX / currentScale;
    centroidY += deltaY / currentScale;
    drawPoints(points, selectedHoleID);
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
      // Calculate font size change based on the ratio of the current scale to the initial scale
      currentFontSize = initialFontSize * (currentScale / initialScale);

      drawPoints(points, selectedHoleID);
    }
  }
}

function handleTouchEnd(event) {
  touchDuration = Date.now() - touchStartTime;
  if (isAddingHole && touchDuration <= longPressDuration) {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
    addHolePopup();
  }
  if (event.touches.length === 0) {
    isTouchDragging = false;
  } else if (event.touches.length === 1) {
    initialPinchDistance = null;
    initialScale = currentScale;
    initialFontSize = currentFontSize;
  }
}

function handleFileUpload(event) {
	const file = event.target.files[0];
	if (!file) {
		//console.log("File selection canceled");
		return; // Exit the function if file selection is canceled
	}
	points = [];
	contourLines = [];
	contourLinesArray = [];
	contourData = [];
	resultTriangles = [];
	resetZoom();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	const reader = new FileReader();

	reader.onload = function(event) {
		const data = event.target.result;
		try {
			points = parseCSV(data);
		} catch (error) {
			alert("A file format error occurred: " + error.message);
		}

		for (let i = 0; i < points.length; i++) {
			points[i].holeTime = null;
		}
		// Calculate centroid of points
		let sumX = 0;
		let sumY = 0;
		for (let i = 0; i < points.length; i++) {
			sumX += points[i].startXLocation;
			sumY += points[i].startYLocation;
		}

		centroidX = sumX / points.length;
		centroidY = sumY / points.length;
		contourLinesArray = recalculateContours(points, deltaX, deltaY); // Recalculate contour lines
		resultTriangles = delaunayTriangles(points, maxEdgeLength); // Recalculate triangles

		drawPoints(points, selectedHoleID);
		countPoints = points.length;
	};
	reader.readAsText(file);
}
function parseCSV(data) {
	const lines = data.split("\n");
	let minX = Infinity;
	let minY = Infinity;
	for (let i = 0; i < lines.length; i++) {
		const values = lines[i].split(",");
		if (values.length === 10) {
			// check if it has the correct number of values
			const holeID = values[0]; //Id of the blast hole
			const startXLocation = parseFloat(values[1]); //start of the blast hole X value
			const startYLocation = parseFloat(values[2]); //start of the blast hole Y value
			const startZLocation = parseFloat(values[3]); //start of the blast hole Z value
			const endXLocation = parseFloat(values[4]); //end of the blast hole X value
			const endYLocation = parseFloat(values[5]); //end of the blast hole Y value
			const endZLocation = parseFloat(values[6]); //end of the blast hole Z value
			const fromHoleID = values[7]; //from hole where the connector tail will be
			const timingDelayMilliseconds = parseInt(values[8]); //delay from hole to Id of the blast
			const colourHexDecimal = values[9].replace(/\r$/, ""); //colour of the delay in HEXDECIMALS
			const holeLengthCalculated = Math.pow(Math.pow(startXLocation - endXLocation, 2) + Math.pow(startYLocation - endYLocation, 2) + Math.pow(startZLocation - endZLocation, 2), 0.5); //calc the distance between sx,sy,sz and ex,ey,ez
			const deltaXAmount = endXLocation - startXLocation; // Calculate the differences between the longitude and latitude of the two points
			const deltaYAmount = endYLocation - startYLocation; // Calculate the differences between the longitude and latitude of the two points
			const deltaZAmount = endZLocation - startZLocation; // Calculate the differences between the longitude and latitude of the two points
			const verticalObject = {
				x: 0,
				y: 0,
				z: 1
			};
			const dotProduct = deltaXAmount * verticalObject.x + deltaYAmount * verticalObject.y + deltaZAmount * verticalObject.z; // Calculate the dot product
			const magnitude = Math.pow(deltaXAmount * deltaXAmount + deltaYAmount * deltaYAmount + deltaZAmount * deltaZAmount, 0.5); // Calculate the magnitudes of the two vectors
			const holeAngle = 180 - Math.acos(dotProduct / magnitude) * (180 / Math.PI); //angle in degrees;
			const holeBearing = (450 - Math.atan2(deltaYAmount, deltaXAmount) * (180 / Math.PI)) % 360; //bearing in degrees

			if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation) && !isNaN(endXLocation) && !isNaN(endYLocation) && !isNaN(endZLocation) && !isNaN(timingDelayMilliseconds)) {
				// check if they are valid numbers
				points.push({
					holeID,
					startXLocation,
					startYLocation,
					startZLocation,
					endXLocation,
					endYLocation,
					endZLocation,
					fromHoleID,
					timingDelayMilliseconds,
					colourHexDecimal,
					holeLengthCalculated,
					holeAngle,
					holeBearing
				});
				minX = Math.min(minX, startXLocation);
				minY = Math.min(minY, startYLocation);
			}
			////console.log(points);
		}
		if (values.length === 7) {
			// check if it has the correct number of values
			const holeID = values[0];
			const startXLocation = parseFloat(values[1]); //start of the blast hole X value
			const startYLocation = parseFloat(values[2]); //start of the blast hole Y value
			const startZLocation = parseFloat(values[3]); //start of the blast hole Z value
			const endXLocation = parseFloat(values[4]); //end of the blast hole X value
			const endYLocation = parseFloat(values[5]); //end of the blast hole Y value
			const endZLocation = parseFloat(values[6]); //end of the blast hole Z value
			const holeLengthCalculated = Math.pow(Math.pow(startXLocation - endXLocation, 2) + Math.pow(startYLocation - endYLocation, 2) + Math.pow(startZLocation - endZLocation, 2), 0.5); //calc the distance between sx,sy,sz and ex,ey,ez
			const deltaXAmount = endXLocation - startXLocation; // Calculate the differences between the longitude and latitude of the two points
			const deltaYAmount = endYLocation - startYLocation; // Calculate the differences between the longitude and latitude of the two points
			const deltaZAmount = endZLocation - startZLocation; // Calculate the differences between the longitude and latitude of the two points
			const verticalObject = {
				x: 0,
				y: 0,
				z: 1
			};
			const dotProduct = deltaXAmount * verticalObject.x + deltaYAmount * verticalObject.y + deltaZAmount * verticalObject.z; // Calculate the dot product
			const magnitude = Math.pow(deltaXAmount * deltaXAmount + deltaYAmount * deltaYAmount + deltaZAmount * deltaZAmount, 0.5); // Calculate the magnitudes of the two vectors
			const holeAngle = 180 - Math.acos(dotProduct / magnitude) * (180 / Math.PI); //angle in degrees;
			const holeBearing = (450 - Math.atan2(deltaYAmount, deltaXAmount) * (180 / Math.PI)) % 360; //bearing in degrees
			const fromHoleID = values[0];
			const timingDelayMilliseconds = 0;
			const colourHexDecimal = "red";
			if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation) && !isNaN(endXLocation) && !isNaN(endYLocation) && !isNaN(endZLocation)) {
				// check if they are valid numbers
				points.push({
					holeID,
					startXLocation,
					startYLocation,
					startZLocation,
					endXLocation,
					endYLocation,
					endZLocation,
					fromHoleID,
					timingDelayMilliseconds,
					colourHexDecimal,
					holeLengthCalculated,
					holeAngle,
					holeBearing
				});
				minX = Math.min(minX, startXLocation);
				minY = Math.min(minY, startYLocation);
			}
		}
		if (values.length === 4) {
			// check if it has the correct number of values
			const holeID = values[0];
			const startXLocation = parseFloat(values[1]); //start of the blast hole X value
			const startYLocation = parseFloat(values[2]); //start of the blast hole Y value
			const startZLocation = parseFloat(values[3]); //start of the blast hole Z value
			const endXLocation = parseFloat(values[1]); //end of the blast hole X value
			const endYLocation = parseFloat(values[2]); //end of the blast hole Y value
			const endZLocation = parseFloat(values[3]); //end of the blast hole Z value
			const holeLengthCalculated = 0;
			const holeAngle = 0;
			const holeBearing = 0;
			const fromHoleID = values[0];
			const timingDelayMilliseconds = 0;
			const colourHexDecimal = "red";
			if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation)) {
				// check if they are valid numbers
				points.push({
					holeID,
					startXLocation,
					startYLocation,
					startZLocation,
					endXLocation,
					endYLocation,
					endZLocation,
					fromHoleID,
					timingDelayMilliseconds,
					colourHexDecimal,
					holeLengthCalculated,
					holeAngle,
					holeBearing
				});
				minX = Math.min(minX, startXLocation);
				minY = Math.min(minY, startYLocation);
			}
		}
	}
	return points;
}
function convertPointsTo10ColumnCSV() {
	let csv = "";

	// Add the CSV header if needed
	//const header = "holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,fromHoleID,timingDelayMilliseconds,colourHexDecimal,holeLengthCalculated,holeAngle,holeBearing";
	//csv += header + "\n";

	// Iterate over the points array and convert each object to a CSV row
	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		const row = `${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colourHexDecimal}`; //,${point.holeLengthCalculated},${point.holeAngle},${point.holeBearing}`;
		csv += row + "\n";
	}

	return csv;
}
function convertPointsToAllDataCSV() {
	let csv = "";

	// Add the CSV header if needed
	const header = "holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,fromHoleID,timingDelayMilliseconds,colourHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime";
	csv += header + "\n";

	// Iterate over the points array and convert each object to a CSV row
	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		const row = `${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colourHexDecimal},${point.holeLengthCalculated},${point.holeAngle},${point.holeBearing},${point.holeTime}`;
		csv += row + "\n";
	}

	return csv;
}
function calculateTimes(points) {
	const surfaces = {};
	holeTimes = {};

	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		if (point.holeID) {
			surfaces[point.fromHoleID + "_" + point.holeID] = {
				time: 0,
				delay: point.timingDelayMilliseconds
			};
			holeTimes[point.holeID] = null;
		}
	}

	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		if (point.holeID === point.fromHoleID) {
			if (holeTimes[point.holeID] === null || point.timingDelayMilliseconds < holeTimes[point.holeID]) {
				holeTimes[point.holeID] = point.timingDelayMilliseconds;
			}
			updateSurfaceTimes(point.holeID, point.timingDelayMilliseconds, surfaces, holeTimes);
		}
	}

	const result = [];
	for (const holeID in holeTimes) {
		result.push([holeID, holeTimes[holeID]]);
	}
	//console.log(points);
	return result;
}
function updateSurfaceTimes(holeID, time, surfaces, holeTimes, visited = new Set()) {
	visited.add(holeID);
	for (const id in surfaces) {
		if (id.length >= holeID.length + 1 && id.startsWith(holeID + "_")) {
			const surface = surfaces[id];
			const toHoleID = id.split("_")[1];
			const delay = surfaces[id].delay;
			const toTime = parseInt(time) + parseInt(delay);
			if (!visited.has(toHoleID) && (toTime < surface.time || surface.time === 0)) {
				surface.time = toTime;
				holeTimes[toHoleID] = toTime;
				updateSurfaceTimes(toHoleID, toTime, surfaces, holeTimes, visited);
			}
		}
	}
	visited.delete(holeID);
}
function delaunayContours(contourData, contourLevel, maxEdgeLength) {
	// Compute Delaunay triangulation
	const delaunay = d3.Delaunay.from(contourData.map(point => [point.x, point.y]));
	const triangles = delaunay.triangles; // Access the triangles property directly

	const contourLines = [];

	for (let i = 0; i < triangles.length; i += 3) {
		const contourLine = [];

		for (let j = 0; j < 3; j++) {
			const p1 = contourData[triangles[i + j]];
			const p2 = contourData[triangles[i + (j + 1) % 3]];

			// Calculate distance between p1 and p2
			const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
			//If the distance is larger than 20 don't draw the line.
			if (distance <= maxEdgeLength && ((p1.z < contourLevel && p2.z >= contourLevel) || (p1.z >= contourLevel && p2.z < contourLevel))) {
				const point = interpolate(p1, p2, contourLevel);
				contourLine.push(point);
			}
		}

		if (contourLine.length === 2) {
			contourLines.push(contourLine);
		}
	}

	//console.log(contourLines);

	return contourLines;
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

	const { maxDist, maxDistPoint } = line.slice(1, -1).reduce((result, point, i) => {
		const distSq = pointToLineDistanceSq(point, firstPoint, lastPoint, lineDistSq);
		if (distSq > result.maxDist) {
			return { maxDist: distSq, maxDistPoint: { index: i + 1, point } };
		}
		return result;
	}, { maxDist: 0, maxDistPoint: { index: 0, point: null } });

	if (Math.sqrt(maxDist) > epsilon) {
		const left = simplifyLine(line.slice(0, maxDistPoint.index + 1), epsilon);
		const right = simplifyLine(line.slice(maxDistPoint.index), epsilon);

		return left.slice(0, left.length - 1).concat(right);
	} else {
		return [firstPoint, lastPoint];
	}
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
function delaunayTriangles(points, maxEdgeLength) {
	resultTriangles = []; //clear the array of triangles
	const getX = point => parseFloat(point.startXLocation);
	const getY = point => parseFloat(point.startYLocation);

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

		// Calculate squared edge lengths
		const edge1Squared = distanceSquared([getX(p1), getY(p1)], [getX(p2), getY(p2)]);
		const edge2Squared = distanceSquared([getX(p2), getY(p2)], [getX(p3), getY(p3)]);
		const edge3Squared = distanceSquared([getX(p3), getY(p3)], [getX(p1), getY(p1)]);

		// Check if all edge lengths are less than or equal to the maxEdgeLength squared
		if (edge1Squared <= maxEdgeLength ** 2 && edge2Squared <= maxEdgeLength ** 2 && edge3Squared <= maxEdgeLength ** 2) {
			// Add the triangle to the result if the condition is met
			resultTriangles.push([
				[getX(p1), getY(p1), p1.startZLocation], // [x, y, z] of point 1
				[getX(p2), getY(p2), p2.startZLocation], // [x, y, z] of point 2
				[getX(p3), getY(p3), p3.startZLocation] // [x, y, z] of point 3
			]);
		}
	}
	//console.log(resultTriangles);
	return resultTriangles;
}
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawTrack(lineStartX, lineStartY, lineEndX, lineEndY, strokeColour) {
	ctx.beginPath();
	ctx.moveTo(lineStartX, lineStartY);
	ctx.lineTo(lineEndX, lineEndY);
	ctx.strokeStyle = strokeColour;
	ctx.stroke();
}
function drawHoleToe(x, y, fillColour, strokeColour) {
	ctx.beginPath();
	ctx.arc(x, y, toeScale * (currentScale * 0.1), 0, 2 * Math.PI);
	ctx.fillStyle = fillColour;
	ctx.strokeStyle = strokeColour;
	ctx.stroke();
	ctx.fill();
}
function drawHole(x, y, radius, fillColour, strokeColour) {
	ctx.strokeStyle = strokeColour;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fillStyle = fillColour;
	ctx.fill(); // fill the circle with the fill colour
	ctx.lineWidth = 2;
	ctx.stroke(); // draw the circle border with the stroke colour
}
//draw an X shape with the intersection of the lines at x,y and the length of the lines being the radius of the drawHole function
function drawDummy(x, y, radius, strokeColour) {
	ctx.strokeStyle = strokeColour;
	ctx.lineWidth = 2; // Adjust the line width as needed
	ctx.beginPath();
	ctx.moveTo(x - radius, y - radius);
	ctx.lineTo(x + radius, y + radius);
	ctx.moveTo(x - radius, y + radius);
	ctx.lineTo(x + radius, y - radius);
	ctx.stroke();
}
function drawHiHole(x, y, radius, fillColour, strokeColour) {
	ctx.strokeStyle = strokeColour;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fillStyle = fillColour;
	ctx.fill(); // fill the circle with the fill colour
	ctx.lineWidth = 5;
	ctx.stroke(); // draw the circle border with the stroke colour
}
function drawText(x, y, text, color) {
	ctx.font = parseInt(currentFontSize - 2) + "px Arial";
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);
}
function drawArrow(startX, startY, endX, endY, color, connScale) {
	// Set up the arrow parameters
	var arrowWidth = 2 * connScale;
	var arrowLength = 4 * connScale;

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
		var size = 3 * connScale; // Change this value to adjust the size of the house shape
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
		ctx.lineTo(endX - arrowLength * Math.cos(Math.PI / 2 * 3 - angle) - arrowWidth * Math.sin(Math.PI / 2 * 3 - angle), endY - arrowLength * Math.sin(Math.PI / 2 * 3 - angle) + arrowWidth * Math.cos(Math.PI / 2 * 3 - angle));
		ctx.lineTo(endX - arrowLength * Math.cos(Math.PI / 2 * 3 - angle) + arrowWidth * Math.sin(Math.PI / 2 * 3 - angle), endY - arrowLength * Math.sin(Math.PI / 2 * 3 - angle) - arrowWidth * Math.cos(Math.PI / 2 * 3 - angle));
		ctx.closePath();
		ctx.fill();
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
function drawDelauanyTriangles(triangles, centroid, strokeColour) {
	ctx.strokeStyle = strokeColour;
	ctx.fillStyle = fillColour;
	ctx.lineWidth = 1;

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
            z: tBZ - tAZ,
        };
        const edge2 = {
            x: tCX - tAX,
            y: tCY - tAY,
            z: tCZ - tAZ,
        };
        const edge3 = {
            x: tCX - tBX,
            y: tCY - tBY,
            z: tCZ - tBZ,
        };

        const verticalDirection = { x: 0, y: 0, z: 1 }; // Assuming z-axis is the vertical direction
        const angle1 = getAngleBetweenEdges(edge1, verticalDirection);
        const angle2 = getAngleBetweenEdges(edge2, verticalDirection);
        const angle3 = getAngleBetweenEdges(edge3, verticalDirection);

        const roundedDipAngle = Math.abs(Math.max(angle1, angle2, angle3)-90);



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

		// Calculate the RGB values based on roundedDipAngle using linear interpolation
		const r = Math.round(minRGB[0] + (maxRGB[0] - minRGB[0]) * (roundedDipAngle / 50));
		const g = Math.round(minRGB[1] + (maxRGB[1] - minRGB[1]) * (roundedDipAngle / 50));
		const b = Math.round(minRGB[2] + (maxRGB[2] - minRGB[2]) * (roundedDipAngle / 50));

		const ir = 255 - Math.round(minRGB[0] + (maxRGB[0] - minRGB[0]) * (roundedDipAngle / 50));
		const ig = 255 - Math.round(minRGB[1] + (maxRGB[1] - minRGB[1]) * (roundedDipAngle / 50));
		const ib = 255 - Math.round(minRGB[2] + (maxRGB[2] - minRGB[2]) * (roundedDipAngle / 50));

		    // Define the color ranges and corresponding RGB values
			let triangleFillColour;
			if (roundedDipAngle >= 0 && roundedDipAngle < 5) {
			  // Cornflower blue for angles in the range [0, 4)
			  triangleFillColour = 'rgb(51, 139, 255)';
			} else if (roundedDipAngle >= 5 && roundedDipAngle < 7) {
			  // Green for angles in the range [7, 10]
			  triangleFillColour = 'rgb(0, 102, 204)';
			} else if (roundedDipAngle >= 7 && roundedDipAngle < 9) {
				// Green for angles in the range [7, 10]
				triangleFillColour = 'rgb(0, 204, 204)';
			}else if (roundedDipAngle >= 9 && roundedDipAngle < 12) {
				// Green for angles in the range [7, 10]
				triangleFillColour = 'rgb(102, 204, 0)';
			  }
			  else if (roundedDipAngle >= 12 && roundedDipAngle < 15) {
				// Green for angles in the range [7, 10]
				triangleFillColour = 'rgb(204, 204, 0)';
			  }
			else if (roundedDipAngle >= 15 && roundedDipAngle < 17) {
				// Green for angles in the range [7, 10]
				triangleFillColour = 'rgb(255, 128, 0)';
			  }
			 else if (roundedDipAngle >= 17 && roundedDipAngle < 20) {
				// Green for angles in the range [7, 10]
				triangleFillColour = 'rgb(255, 0, 0)';
			  }
			 else {
			  // Default to grey for all other angles
			  triangleFillColour = 'rgb(153, 0, 76)';
			}

		// Combine the calculated RGB values into the final fill color
		// triangleFillColour = `rgb(${r}, ${g}, ${b})`;
		const triangelStokeColour = `rgb(${r}, ${g}, ${b})`;
    // Invert the color by subtracting each channel value from 255
    	const invertedColour = `rgb(${ir}, ${ig}, ${ib})`;
		const triangleCentroid = {
			x: (aAX + aBX + aCX) / 3,
			y: (aAY + aBY + aCY) / 3,
			z: (aAZ + aBZ + aCZ) / 3
		};
		ctx.strokeStyle = triangelStokeColour;
		ctx.fillStyle = triangleFillColour;
		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.moveTo(aAX, aAY);
		ctx.lineTo(aBX, aBY);
		ctx.lineTo(aCX, aCY);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();

		ctx.lineWidth = 1;
		drawText(triangleCentroid.x, triangleCentroid.y, parseFloat(roundedDipAngle).toFixed(1), strokeColour);
	}
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
    return angle * 180 / Math.PI;
}
function drawMousePosition(x, y) {
	ctx.strokeStyle = strokeColour;
	ctx.beginPath();
	ctx.rect(x - 7, y - 7, 14, 14);
	ctx.lineWidth = 1;
	ctx.stroke();
}
function getClickedHole(clickX, clickY) {
	// Adjust the click coordinates based on the current scale and centroid
	const adjustedX = (clickX - canvas.width / 2) / currentScale + centroidX;
	const adjustedY = -(clickY - canvas.height / 2) / currentScale + centroidY; // Invert the Y-coordinate
	// Calculate the distance threshold based on the scale factor
	const threshold = 2; // Adjust the threshold based on the scale factor

	if (isAddingConnector) {
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
				if (firstSelectedHoleID == null) {
					firstSelectedHoleID = point.holeID;
					secondSelectedHoleID = null;
				} else if (secondSelectedHoleID == null && firstSelectedHoleID != point.holeID && point.holeID != null) {
					secondSelectedHoleID = point.holeID;
					firstSelectedHoleID = null;
				} else {
					firstSelectedHoleID = null;
					secondSelectedHoleID = point.holeID;
				}
				return point; // Return the clicked hole
			}
		}
	} else if (isLengthEditing || isAngleEditing || isBearingEditing || isEastingEditing || isNorthingEditing || isElevationEditing || isDeletingHole) {
		for (let i = 0; i < points.length; i++) {
			let point = points[i];
			let holeX = point.startXLocation;
			let holeY = point.startYLocation;

			const distance = Math.sqrt(Math.pow(holeX - adjustedX, 2) + Math.pow(holeY - adjustedY, 2));

			if (distance <= threshold) {
				selectedHoleID = point.holeID; // Update the selected hole ID
				// Update slider attributes here
				let holeNorthingSlider = document.getElementById("holeNorthingSlider");
				let holeEastingSlider = document.getElementById("holeEastingSlider");
				let holeElevationSlider = document.getElementById("holeElevationSlider");
				let holeLengthSlider = document.getElementById("holeLengthSlider");
				let holeAngleSlider = document.getElementById("holeAngleSlider");
				let holeBearingSlider = document.getElementById("holeBearingSlider");

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
				holeBearingSlider.step = 0.5;

				holeEastingSlider.value = point.startXLocation;
				holeNorthingSlider.value = point.startYLocation;
				holeElevationSlider.value = point.startZLocation;
				holeLengthSlider.value = point.holeLengthCalculated;
				holeAngleSlider.value = point.holeAngle;
				holeBearingSlider.value = point.holeBearing;


				holeEastingLabel.textContent = "Hole Easting (X) : " + parseFloat(point.startXLocation).toFixed(2) + "mE";
				holeNorthingLabel.textContent = "Hole Northing (Y): " + parseFloat(point.startYLocation).toFixed(2) + "mN";
				holeElevationLabel.textContent = "Hole Elevation (Z) : " + parseFloat(point.startZLocation).toFixed(2) + "m";
				holeLengthLabel.textContent = "Hole Length: " + parseFloat(point.holeLengthCalculated).toFixed(1) + "m";
				holeAngleLabel.textContent = "Hole Angle: " + parseFloat(point.holeAngle).toFixed(0) + "\u00B0";
				holeBearingLabel.textContent = "Hole Bearing: " + parseFloat(point.holeBearing).toFixed(1) + "\u00B0";

				return point; // Return the clicked hole
			}
		}
		if (isDisplayingContours) {
			contourLinesArray = recalculateContours(points, deltaX, deltaY);
		}
		if (isDisplayingTriangles) {
			resultTriangles = delaunayTriangles(points, maxEdgeLength);
		}
		// If no hole is clicked or found within the threshold
		// Reset only the firstSelectedHoleID
		firstSelectedHoleID = null;
	}

	return null; // Return null if no hole is clicked
}
function handleConnectorClick(event) {
	if (isAddingConnector) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHoleID = clickedHole.holeID;
				drawPoints(points, selectedHoleID);
				// TODO: Update UI or provide feedback for selecting fromHole
			} else {
				// Get the holeID of the toHole
				const toHoleID = clickedHole.holeID;
				selectedHoleID = clickedHole.holeID;
				// Get the delay and connector colour from the UI
				const delay = parseInt(document.getElementById("delay").value);
				const colour = document.getElementById("connectorColour").value;

				// Find the index of the clicked hole in the points array
				const clickedHoleIndex = points.findIndex(point => point === clickedHole);

				if (clickedHoleIndex !== -1) {
					// Update the last three values of the clicked hole record
					points[clickedHoleIndex].fromHoleID = fromHoleStore.holeID;
					points[clickedHoleIndex].timingDelayMilliseconds = delay;
					points[clickedHoleIndex].colourHexDecimal = colour;
					//console.log("Added Tie" + " fromHoleID=" + fromHoleStore.holeID + " toHoleID=" + toHoleID + " delay=" + delay + " colour=" + colour);
					//console.log("Check Tie" + " HoleID=" + points[fromHoleStore.holeID].id + " delay=" + points[fromHoleStore.holeID].timingDelayMilliseconds + " colour=" + points[fromHoleStore.holeID].colourHexDecimal);
				}
				// Reset the fromHole and exit add connector mode
				fromHoleStore = null;

				contourLinesArray = recalculateContours(points, deltaX, deltaY); // Recalculate contour lines

				drawPoints(points, selectedHoleID);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
	}
}
function deleteSelectedHole() {
	if(isDeletingHole) {
		if (selectedHoleID !== null) {
			// Delete the selected hole using the points point find method not the holeID
			const index = points.findIndex(point => point.holeID === selectedHoleID);
			if (index !== -1) {
				points.splice(index, 1);
				// Reset the selected holeID
				selectedHoleID = null;
				// Reset the fromHoleStore
				fromHoleStore = null;
				// Recalculate contour lines
			}

			delaunayTriangles(points, maxEdgeLength);
			calculateTimes(points);
			contourLinesArray = recalculateContours(points, deltaX, deltaY);
			drawPoints(points, selectedHoleID);
		}
	}
}
function handleHoleDeletingClick(event) {
	if (isDeletingHole) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHoleID = clickedHole.holeID;
				drawPoints(points, selectedHoleID);
				//calculateEndXYZ(clickedHole, document.getElementById("holeLengthSlider").value, 1);
			} else {
				drawPoints(points, selectedHoleID);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
	}
}

let worldX = null;
let worldY = null;
function handleHoleAddingClick(event) {
	if (isAddingHole) {
		// Get the click/touch coordinates relative to the canvas
		//const rect = canvas.getBoundingClientRect();
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		let clickX = event.clientX - rect.left;
		let clickY = event.clientY - rect.top;

		if (isNaN(event.clientX - rect.left) || isNaN(event.clientY - rect.top)) {
			// Handle the case when the values are NaN
			clickX = event.changedTouches[0].clientX- rect.left;
			clickY = event.changedTouches[0].clientY- rect.top;
		  } else {
			// Proceed with the calculation using the valid values
			clickX = event.clientX - rect.left;
			clickY = event.clientY - rect.top;
		  }
		worldX =  (clickX - canvas.width / 2) / currentScale + centroidX;
		worldY =  -(clickY - canvas.height / 2) / currentScale + centroidY;

		console.log("worldX: " + worldX + " worldY: " + worldY);
	}
	else {
		worldX = null;
		worldY = null;
	}
}
// Using SweetAlert Library Create a popup that gets input from the user.
function addHolePopup() {
	Swal.fire({
	  title: "Add a hole to the Pattern?",
	  icon: "question",
	  showCancelButton: true,
	  confirmButtonText: "&#10004;",
	  cancelButtonText: "&#10008;",
	  html: `
		<div class="button-container-2col">
		  	<label for="useCustomHoleID">Use Custom Hole ID</label>
		  	<input type="checkbox" id="useCustomHoleID" name="useCustomHoleID">
		  	<label for="customHoleID">Hole ID</label>
		  	<input type="text" id="customHoleID" placeholder="Custom Hole ID" />
		  	<label for="elevation">Start Z</label>
		  	<input type="number" id="elevation" placeholder="Elevation" value="0" />
		  	<label for="length">Length</label>
		  	<input type="number" id="length" placeholder="Length" value="0" />
		  	<label for="angle">Angle</label>
		  	<input type="number" id="angle" placeholder="Angle" value="0" />
		  	<label for="bearing">Bearing</label>
		  	<input type="number" id="bearing" placeholder="Bearing" value="0" />
		  </div>
	  `,
	  customClass: {
		container: "custom-popup-container",
		confirmButton: "custom-confirm-button",
		cancelButton: "custom-cancel-button",
	  },
	}).then((result) => {
	  if (result.isConfirmed) {
		const useCustomHoleID = document.getElementById("useCustomHoleID").checked;
		const customHoleID = document.getElementById("customHoleID").value;
		const elevation = parseFloat(document.getElementById("elevation").value);
		const length = parseFloat(document.getElementById("length").value);
		const angle = parseFloat(document.getElementById("angle").value);
		const bearing = parseFloat(document.getElementById("bearing").value);
  
		// Use the obtained values to add the hole
		addHole(useCustomHoleID, customHoleID, worldX, worldY, elevation, length, angle, bearing);
	  } else {
		worldX = null;
		worldY = null;
	  }
	});
  }
  
//Add hole to the points array popup using sweetalert and then draw the points
function addHole(useCustomHoleID, holeID, startXLocation, startYLocation, startZLocation, length, angle, bearing) {
	let newHoleID	= null;
	if (useCustomHoleID) {
		newHoleID = holeID;
	}else if(useCustomHoleID == false){
		newHoleID = points.length + 1;
	} else{
		newHoleID = 9999;
	}
	startXLocation = parseFloat(startXLocation).toFixed(3);
	startYLocation = parseFloat(startYLocation).toFixed(3);
	startZLocation = parseFloat(startZLocation).toFixed(3);
	let endXLocation = parseFloat(startXLocation + length * Math.cos((90 - angle) * (Math.PI / 180)) * Math.cos((450 - bearing) % 360 * (Math.PI / 180))).toFixed(3);
	let endYLocation = parseFloat(startYLocation + length * Math.cos((90 - angle) * (Math.PI / 180)) * Math.sin((450 - bearing) % 360 * (Math.PI / 180))).toFixed(3);
	let endZLocation = parseFloat(startZLocation - length * Math.cos(angle * (Math.PI / 180))).toFixed(3);
	let holeLengthCalculated = parseFloat(length).toFixed(3);										
	let holeAngle = parseFloat(angle).toFixed(3);				
	let holeBearing = parseFloat(bearing).toFixed(3);	
	if(isNaN(holeLengthCalculated)){
		holeLengthCalculated = 0;
	}
	if(isNaN(holeAngle)){
		holeAngle = 0;
	}
	if(isNaN(holeBearing)){
		holeBearing = 0;
	}
	let fromHoleID = newHoleID;				
	let timingDelayMilliseconds = 0;	
	let colourHexDecimal = "red";			
	console.log("useCustomHoleID: " + useCustomHoleID + " holeID: " + holeID + " startXLocation: " + startXLocation + " startYLocation: " + startYLocation + " startZLocation: " + startZLocation + " length: " + length + " angle: " + angle + " bearing: " + bearing);
		points.push({
			holeID: newHoleID,
			startXLocation: startXLocation,
			startYLocation: startYLocation,
			startZLocation: startZLocation,
			endXLocation: endXLocation,
			endYLocation: endYLocation,
			endZLocation: endZLocation,
			holeLengthCalculated: holeLengthCalculated,
			holeAngle: holeAngle,
			holeBearing: holeBearing,
			fromHoleID: fromHoleID,
			timingDelayMilliseconds: timingDelayMilliseconds,
			colourHexDecimal: colourHexDecimal,
		});
		console.log("Added Hole: " + newHoleID);

	delaunayTriangles(points, maxEdgeLength);
	calculateTimes(points);
	contourLinesArray = recalculateContours(points, deltaX, deltaY);
	drawPoints(points, selectedHoleID);


}

function handleHoleLengthEditClick(event) {
	if (isLengthEditing) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHoleID = clickedHole.holeID;
				drawPoints(points, selectedHoleID);
				//calculateEndXYZ(clickedHole, document.getElementById("holeLengthSlider").value, 1);
			} else {
				drawPoints(points, selectedHoleID);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
	}
}
function handleAngleEditClick(event) {
	if (isAngleEditing) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHoleID = clickedHole.holeID;
				drawPoints(points, selectedHoleID);
				//calculateEndXYZ(clickedHole, document.getElementById("holeAngleSlider").value, 2);
			} else {
				drawPoints(points, selectedHoleID);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
	}
}
function handleBearingEditClick(event) {
	if (isBearingEditing) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHoleID = clickedHole.holeID;
				drawPoints(points, selectedHoleID);
				//calculateEndXYZ(clickedHole, document.getElementById("holeBearingSlider").value, 3);
			} else {
				drawPoints(points, selectedHoleID);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
	}
}
function handleEastingEditClick(event) {
	if (isEastingEditing) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHoleID = clickedHole.holeID;
				drawPoints(points, selectedHoleID);
				//calculateEndXYZ(clickedHole, document.getElementById("holeEastingSlider").value, 4);
			} else {
				drawPoints(points, selectedHoleID);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
	}
}
function handleNorthingEditClick(event) {
	if (isNorthingEditing) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHoleID = clickedHole.holeID;
				drawPoints(points, selectedHoleID);
				//calculateEndXYZ(clickedHole, document.getElementById("holeNorthingSlider").value, 5);
			} else {
				drawPoints(points, selectedHoleID);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
	}
}
function handleElevationEditClick(event) {
	if (isElevationEditing) {
		// Get the click/touch coordinates relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;

		// Get the clicked hole
		const clickedHole = getClickedHole(clickX, clickY);

		if (clickedHole) {
			if (!fromHoleStore) {
				// Set the selected fromHole
				fromHoleStore = clickedHole;
				selectedHoleID = clickedHole.holeID;
				drawPoints(points, selectedHoleID);
				//calculateEndXYZ(clickedHole, document.getElementById("holeElevationSlider").value, 6);
			} else {
				drawPoints(points, selectedHoleID);
				//console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
			}
		}
	}
}
function recalculateContours(points, deltaX, deltaY) {
	const contourData = [];
	holeTimes = calculateTimes(points);
	// Update chart data
	timeChart();

	for (let i = 0; i < holeTimes.length; i++) {
		const holeID = holeTimes[i][0];
		const time = holeTimes[i][1];

		// Find the element in points array with matching holeID
		const point = points.find(point => point.holeID === holeID);

		if (point) {
			const contourX = point.startXLocation;
			const contourY = point.startYLocation;

			point.holeTime = time; // Update holeTime in points array

			contourData[i] = {
				x: contourX,
				y: contourY,
				z: time
			};
		}
	}

	// Find the maximum holeTime value
	const maxHoleTime = Math.max(...points.map(point => point.holeTime));

	// Calculate contour lines and store them in contourLinesArray
	contourLinesArray = [];
	let interval = maxHoleTime < 350 ? 25 : maxHoleTime < 700 ? 100 : 250;
	interval = parseInt(intervalAmount);
	for (let contourLevel = 0; contourLevel <= maxHoleTime; contourLevel += interval) {
		const contourLines = delaunayContours(contourData, contourLevel, maxEdgeLength);
		const epsilon = 1; // Adjust this value to control the level of simplification
		const simplifiedContourLines = contourLines.map(line => simplifyLine(line, epsilon));
		contourLinesArray.push(simplifiedContourLines);
	}

	// Adjust the centroid coordinates based on the delta offset
	//centroidX += deltaX / currentScale;
	//centroidY += deltaY / currentScale;

	return contourLinesArray;
}
//given the input of getClickedHole() and the newHoleLength write a function that will return the EndX EndY and End Z. Call it calculateEndXYZ()
function calculateEndXYZ(clickedHole, newValue, modeLAB) {
	//console.log("calculateEndXYZ called :" +clickedHole.holeID +" | " +newValue +" | " +modeLAB);
	let startX = clickedHole.startXLocation;
	let startY = clickedHole.startYLocation;
	let startZ = clickedHole.startZLocation;
	let holeLength = clickedHole.holeLengthCalculated;
	let holeAngle = clickedHole.holeAngle;
	let holeBearing = clickedHole.holeBearing;
	let endX, endY, endZ;
	if (modeLAB === 1) {
		//Length
		endX = startX + newValue * Math.cos((90 - holeAngle) * (Math.PI / 180)) * Math.cos((450 - holeBearing) % 360 * (Math.PI / 180));
		endY = startY + newValue * Math.cos((90 - holeAngle) * (Math.PI / 180)) * Math.sin((450 - holeBearing) % 360 * (Math.PI / 180));
		endZ = startZ - newValue * Math.cos(holeAngle * (Math.PI / 180));
		// Update the points array with the new values
		const index = points.findIndex(point => point.holeID === clickedHole.holeID);
		if (index !== -1) {
			points[index].endXLocation = endX;
			points[index].endYLocation = endY;
			points[index].endZLocation = endZ;
			points[index].holeLengthCalculated = parseFloat(newValue);
			//console.log("points[index].holeLengthCalculated: " + points[index].holeLengthCalculated);
			//console.log("End X,Y,Z : " + endX + " | " + endY + " | " + endZ);
		}
	} else if (modeLAB === 2) {
		//hole angle
		//calculate the endXYZ based on the new hole angle
		endX = startX + holeLength * Math.cos((90 - newValue) * (Math.PI / 180)) * Math.cos((450 - holeBearing) % 360 * (Math.PI / 180));
		endY = startY + holeLength * Math.cos((90 - newValue) * (Math.PI / 180)) * Math.sin((450 - holeBearing) % 360 * (Math.PI / 180));
		endZ = startZ - holeLength * Math.cos(newValue * (Math.PI / 180));
		//Update the points array with the new values
		const index = points.findIndex(point => point.holeID === clickedHole.holeID);
		if (index !== -1) {
			points[index].endXLocation = endX;
			points[index].endYLocation = endY;
			points[index].endZLocation = endZ;
			points[index].holeAngle = parseFloat(newValue);
		}
	} else if (modeLAB === 3) {
		//Calculate the endXYZ based on the new hole bearing
		endX = startX + holeLength * Math.cos((90 - holeAngle) * (Math.PI / 180)) * Math.cos((450 - newValue) % 360 * (Math.PI / 180));
		endY = startY + holeLength * Math.cos((90 - holeAngle) * (Math.PI / 180)) * Math.sin((450 - newValue) % 360 * (Math.PI / 180));
		endZ = startZ - holeLength * Math.cos(holeAngle * (Math.PI / 180));
		//Update the points array with the new values
		const index = points.findIndex(point => point.holeID === clickedHole.holeID);
		if (index !== -1) {
			points[index].endXLocation = endX;
			points[index].endYLocation = endY;
			points[index].endZLocation = endZ;
			points[index].holeBearing = parseFloat(newValue);
		}
	} else if (modeLAB === 4) {
		// Easting Adjustment
		const deltaX = newValue - clickedHole.startXLocation;
		clickedHole.startXLocation = newValue;
		clickedHole.endXLocation += deltaX;
		// Update the points array with the new values
		const index = points.findIndex(point => point.holeID === clickedHole.holeID);
		if (index !== -1) {
			points[index].endXLocation = clickedHole.endXLocation;
			points[index].startXLocation = clickedHole.startXLocation;
		}
	} else if (modeLAB === 5) {
		// Northing Adjustment
		const deltaY = newValue - clickedHole.startYLocation;
		clickedHole.startYLocation = newValue;
		clickedHole.endYLocation += deltaY;
		// Update the points array with the new values
		const index = points.findIndex(point => point.holeID === clickedHole.holeID);
		if (index !== -1) {
			points[index].endYLocation = clickedHole.endYLocation;
			points[index].startYLocation = clickedHole.startYLocation;
		}
	} else if (modeLAB === 6) {
		// Elevation Adjustment
		const deltaZ = newValue - clickedHole.startZLocation;
		clickedHole.startZLocation = newValue;
		clickedHole.endZLocation += deltaZ;
		// Update the points array with the new values
		const index = points.findIndex(point => point.holeID === clickedHole.holeID);
		if (index !== -1) {
			points[index].endZLocation = clickedHole.endZLocation;
			points[index].startZLocation = clickedHole.startZLocation;
		}
	}

	return {
		endX,
		endY,
		endZ
	};
}
// Function to set the slider attributes based on the selected hole's values
function setSliderAttributes(clickedHole) {
	const holeXSlider = document.getElementById("holeEastingSlider");
	const holeYSlider = document.getElementById("holeNorthingSlider");
	const holeZSlider = document.getElementById("holeElevationSlider");

	// Set the min and max attributes based on the selected hole's values
	holeXSlider.min = clickedHole.startXLocation - 20;
	holeXSlider.max = clickedHole.startXLocation + 20;
	holeYSlider.min = clickedHole.startYLocation - 20;
	holeYSlider.max = clickedHole.startYLocation + 20;
	holeZSlider.min = clickedHole.startZLocation - 20;
	holeZSlider.max = clickedHole.startZLocation + 20;

	// Set the value attribute to the current hole's value
	holeXSlider.value = clickedHole.startXLocation;
	holeYSlider.value = clickedHole.startYLocation;
	holeZSlider.value = clickedHole.startZLocation;
}
function timeChart() {
	if (Array.isArray(holeTimes)) {
		const times = holeTimes.map(time => time[1]);
		const maxTime = Math.max(...times);
		const timeRange = parseInt(document.getElementById("timeRange").value);
		const numBins = Math.ceil(maxTime / timeRange);
		const counts = Array(numBins).fill(0);

		for (let i = 0; i < times.length; i++) {
			const binIndex = Math.floor(times[i] / timeRange);
			counts[binIndex]++;
		}

		var config = {
			responsive: true //,
			// Disable box selection and lasso selection tools
			// Now, users can only click on one bar to select
			//modeBarButtonsToRemove: ["lasso2d", "select2d", "toggleSpikelines"]
		};

		const binEdges = Array(numBins).fill(0).map((_, index) => index * timeRange);

		// Create an array to store the holeID for each bin
		const holeIDs = Array(numBins).fill(null);

		// Store the holeID in the corresponding bin
		for (const point of points) {
			const binIndex = Math.floor(point.holeTime / timeRange);
			holeIDs[binIndex] = holeIDs[binIndex] || []; // Set it to an empty array if null
			holeIDs[binIndex].push(point.holeID);
		}

		// Create an array to store the concatenated holeID strings for each bin
		const holeIDTexts = holeIDs.map(ids => (ids ? ids.join(", ") : ""));

		const data = [
			{
				x: binEdges,
				y: counts,
				type: "bar",
				marker: {
					color: "red"
				},
				// Use the holeIDs array as the text property for hover labels
				text: holeIDTexts,
				hoverinfo: "y+text" // Show the y-value and the custom text when hovering
			}
		];

		const layout = {
			title: {
				text: "Time Window Chart",
				font: {
					size: 16 // Set the title font size
				}
			},
			plot_bgcolor: noneColour,
			paper_bgcolor: noneColour,
			font: {
				color: textFillColour
			},
			xaxis: {
				title: "Time in milliseconds",
				showgrid: true
			},
			yaxis: {
				title: "Number of holes",
				showgrid: true
			},
			height: 300, // Adjust the height to your desired value in pixels
			margin: {
				t: 30, // Set the top margin to move the title closer to the chart
				//set the bottom margeing so the axis lable is closer to the chart
				b: 30
			}
		};

		Plotly.newPlot("timeChart", data, layout, config);

		// Add click event listener to the plot
		const chart = document.getElementById("timeChart");
		chart.on("plotly_click", function(data) {
			const clickedIndex = data.points[0].pointIndex;
			const clickedBarColor = "blue";
			const defaultBarColor = "red";

			// Get the current colors and clone the array to prevent modifying the original data
			const currentColors = data.points[0].data.marker.color.slice();

			// Update the clicked bar color
			currentColors[clickedIndex] = clickedBarColor;

			// Update the chart to reflect the new colors
			Plotly.restyle("timeChart", { "marker.color": [currentColors] });

			// Store the selected hole IDs corresponding to the clicked bar
			selectedHolesArray = holeIDs[clickedIndex];
			//console.log(selectedHolesArray);
			drawPoints(points, selectedHoleID);
		});
	}
}
//Add a listener to the close accordian id= timeAccordian
document.getElementById("timeAccordian").addEventListener("click", function() {
	// If the accordian is open
	if (this.classList.contains("active")) {
	} else {
		// If the accordian is closed
		// If the animation is playing, stop it
		if (isPlaying) {
			stopAnimation();
		}
		selectedHolesArray = [];
		drawPoints(points, selectedHoleID);
	}
});
// Function to update the play speed
function updatePlaySpeed() {
	const playSpeedInput = document.getElementById("playSpeed");
	playSpeed = parseFloat(playSpeedInput.value);
}
// Add click event listener to the "Play" button
const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
	updatePlaySpeed(); // Update play speed
	const maxTime = Math.max(...holeTimes.map(time => time[1])); // Get the max time
	isPlaying = true;
	// Clear previous animation interval before starting a new one
	clearInterval(animationInterval);

	let currentTime = 0;
	const animationStep = Math.max(0.1, playSpeed); // Minimum animation step of 1 millisecond

	play.textContent = "Playing at " + parseFloat(playSpeed).toFixed(3) + "x speed";
	//Set the display7 as checked
	//document.getElementById("display7").checked = true;

	// Start the animation loop
	animationInterval = setInterval(() => {
		if (currentTime <= maxTime + (playSpeed + playSpeed * 15)) {
			selectedHolesArray = holeTimes.filter(time => time[1] <= currentTime).map(time => time[0]);
			drawPoints(points, selectedHolesArray); // Call drawPoints with the updated selectedHolesArray
			currentTime += animationStep;
		} else {
			//call the stopbutton function
			stopButton.click();
			clearInterval(animationInterval); // Stop the animation when maxTime is reached
		}
	}, animationStep);
});

// Add click event listener to the "Stop" button
const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
	clearInterval(animationInterval); // Stop the ongoing animation
	isPlaying = false;
	selectedHolesArray = []; // Reset the selected holes array
	drawPoints(points, selectedHolesArray); // Call drawPoints to reset the highlights
});

// Add input event listener to the playSpeed input range
const playSpeedInput = document.getElementById("playSpeed");
playSpeedInput.addEventListener("input", updatePlaySpeed);

function drawLegend(strokecolour) {
	//draw a legend at the bottom of the screen in the center
	//the legend should be for the drawDelauanyTriangles function
	//the legend should display the roundedAngleDip Ranges and there colours
	const legend0to5 = 'rgb(51, 139, 255)';
	const legend5to7 = 'rgb(0, 102, 204)';
	const legend7to9 = 'rgb(0, 204, 204)';
	const legend9to12  = 'rgb(102, 204, 0)';
	const legend12to15  = 'rgb(204, 204, 0)';
	const legend15to17 = 'rgb(255, 128, 0)';
	const legend17to20  = 'rgb(255, 0, 0)';
	const legend20above = 'rgb(153, 0, 76)';
	//draw the legend
	ctx.beginPath();
	ctx.fill();
	ctx.font = "14px Arial";
	ctx.fillStyle = strokecolour;
	ctx.fillText("Legend", 10, canvas.height/2 - 70);
	ctx.fillText("0\u00B0-5\u00B0",     10, canvas.height/2 - 40);
	ctx.fillText("5\u00B0-7\u00B0",     10, canvas.height/2 - 10);
	ctx.fillText("7\u00B0-9\u00B0",     10, canvas.height/2 + 20);
	ctx.fillText("9\u00B0-12\u00B0",    10, canvas.height/2 + 50);
	ctx.fillText("12\u00B0-15\u00B0",   10, canvas.height/2 + 80);
	ctx.fillText("15\u00B0-17\u00B0",   10, canvas.height/2 + 110);
	ctx.fillText("17\u00B0-20\u00B0",   10, canvas.height/2 + 140);
	ctx.fillText("20\u00B0+",       10, canvas.height/2 + 170);
	ctx.fillStyle = legend0to5;
	ctx.fillRect(                  60, canvas.height/2 - 55, 20, 20);
	ctx.fillStyle = legend5to7;
	ctx.fillRect(                  60, canvas.height/2 - 25, 20, 20);
	ctx.fillStyle = legend7to9;
	ctx.fillRect(                  60, canvas.height/2 + 5, 20, 20);
	ctx.fillStyle = legend9to12;
	ctx.fillRect(                  60, canvas.height/2 + 35, 20, 20);
	ctx.fillStyle = legend12to15;
	ctx.fillRect(                  60, canvas.height/2 + 65, 20, 20);
	ctx.fillStyle = legend15to17;
	ctx.fillRect(                  60, canvas.height/2 + 95, 20, 20);
	ctx.fillStyle = legend17to20;
	ctx.fillRect(                  60, canvas.height/2 + 125, 20, 20);
	ctx.fillStyle = legend20above;
	ctx.fillRect(                  60, canvas.height/2 + 155, 20, 20);
	ctx.stroke();
	}

function drawPoints(points, selectedHoleID) {
	clearCanvas();
	// Disable image smoothing (anti-aliasing)
	ctx.imageSmoothingEnabled = false;

	// Set the colors dynamically based on the mode
	ctx.fillStyle = fillColour;
	ctx.strokeStyle = strokeColour;
	if (document.getElementById("display8A").checked === true) {
		const centroid = {
			x: centroidX,
			y: centroidY
		};
		drawDelauanyTriangles(resultTriangles, centroid, strokeColour);
		drawLegend();
	}
	if (document.getElementById("display8").checked === true) {
					// NEW CODE - Further performance improvements
					ctx.lineWidth = 3;

					// Move color assignment outside of the loop if possible
					const firstColor = "magenta";
					for (let i = 0; i < contourLinesArray.length; i++) {
						const contourLines = contourLinesArray[i];
						////console.log("Drawing Contour Lines\n", contourLines);
		
						ctx.strokeStyle = firstColor;
		
						for (let j = 0; j < contourLines.length; j++) {
							const line = contourLines[j];
		
							const startX = (line[0].x - centroidX) * currentScale + canvas.width / 2;
							const startY = (-line[0].y + centroidY) * currentScale + canvas.height / 2;
							const endX = (line[1].x - centroidX) * currentScale + canvas.width / 2;
							const endY = (-line[1].y + centroidY) * currentScale + canvas.height / 2;
		
							//Draw the lines
							ctx.beginPath();
							ctx.moveTo(startX, startY);
							ctx.lineTo(endX, endY);
							ctx.stroke();
						}
					}
	}
	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		const x = (points[i].startXLocation - centroidX) * currentScale + canvas.width / 2; // adjust x position
		const y = (-points[i].startYLocation + centroidY) * currentScale + canvas.height / 2; // adjust y position
		const lineStartX = x;
		const lineStartY = y;
		const lineEndX = (points[i].endXLocation - centroidX) * currentScale + canvas.width / 2;
		const lineEndY = (centroidY - points[i].endYLocation) * currentScale + canvas.height / 2;

		toeScale = document.getElementById("toeSlider").value;
		connScale = document.getElementById("connSlider").value;
		ctx.strokeStyle = strokeColour;
		if (points[i].holeAngle > 0) {
			drawTrack(lineStartX, lineStartY, lineEndX, lineEndY, strokeColour);
		}
		//Ths highlight is for tha animation
		if (isPlaying && selectedHolesArray != null && selectedHolesArray.includes(points[i].holeID)) {
			drawHiHole(x, y, 10 + parseInt(0.5 * currentScale), "rgba(255, 150, 0, 0.7)", "red");
		}
		//Need this below if to highlight the selected hole on timeChart selection - Don't remove
		if (!isPlaying && selectedHolesArray != null && selectedHolesArray.includes(points[i].holeID)) {
			drawHiHole(x, y, 10 + parseInt(0.25 * currentScale), "red", "red");
		}

		ctx.lineWidth = 1; // Reset stroke width for non-selected holes
		ctx.strokeStyle = strokeColour; // Reset stroke color for non-selected holes
		ctx.font = parseInt(currentFontSize) + "px Arial";
		if (parseFloat(points[i].holeLengthCalculated).toFixed(1) != 0.0) {
			drawHoleToe(lineEndX, lineEndY, transparentFillColour, strokeColour);
		}
		if (document.getElementById("display1").checked === true) {
			drawText(parseInt(x) + 1, parseInt(y) - 5, points[i].holeID, textFillColour);
		} else if (document.getElementById("display2").checked === true) {
			drawText(parseInt(lineEndX) + 1, parseInt(lineEndY) - 5, parseFloat(points[i].holeLengthCalculated).toFixed(1), depthColour);
		} else if (document.getElementById("display3").checked === true) {
			drawText(parseInt(lineEndX) + 1, parseInt(lineEndY) - 5, parseFloat(points[i].holeAngle).toFixed(0), angleDipColour);
		} else if (document.getElementById("display4").checked === true) {
			drawText(parseInt(lineEndX) + 1, parseInt(lineEndY) - 5, 90 - parseFloat(points[i].holeAngle).toFixed(0), angleDipColour);
		} else if (document.getElementById("display5").checked === true) {
			drawText(parseInt(lineEndX) + 1, parseInt(lineEndY) - 5, parseFloat(points[i].holeBearing).toFixed(1), "red");
		} else if (document.getElementById("display5A").checked === true) {
			drawText(parseInt(x) + 1, parseInt(y) - 5, points[i].holeID, textFillColour);
			const startPoint = points.find(point => point.holeID === points[i].fromHoleID);
			const endPoint = points.find(point => point.holeID === points[i].holeID);

			if (startPoint && endPoint) {
				const startX = (startPoint.startXLocation - centroidX) * currentScale + canvas.width / 2;
				const startY = (-startPoint.startYLocation + centroidY) * currentScale + canvas.height / 2;
				const endX = (endPoint.startXLocation - centroidX) * currentScale + canvas.width / 2;
				const endY = (-endPoint.startYLocation + centroidY) * currentScale + canvas.height / 2;

				const connColour = point.colourHexDecimal;

				drawArrow(startX, startY, endX, endY, connColour, connScale);
			}
		} else if (document.getElementById("display6").checked === true) {
			const startPoint = points.find(point => point.holeID === points[i].fromHoleID);
			const endPoint = points.find(point => point.holeID === points[i].holeID);

			if (startPoint && endPoint) {
				const startX = (startPoint.startXLocation - centroidX) * currentScale + canvas.width / 2;
				const startY = (-startPoint.startYLocation + centroidY) * currentScale + canvas.height / 2;
				const endX = (endPoint.startXLocation - centroidX) * currentScale + canvas.width / 2;
				const endY = (-endPoint.startYLocation + centroidY) * currentScale + canvas.height / 2;

				const connColour = point.colourHexDecimal;
				const pointDelay = point.timingDelayMilliseconds;

				drawArrow(startX, startY, endX, endY, connColour, connScale);
				drawArrowDelayText(startX, startY, endX, endY, connColour, pointDelay);
			}
		} else if (document.getElementById("display7").checked === true) {
			const startPoint = points.find(point => point.holeID === points[i].fromHoleID);
			const endPoint = points.find(point => point.holeID === points[i].holeID);

			if (startPoint && endPoint) {
				const startX = (startPoint.startXLocation - centroidX) * currentScale + canvas.width / 2;
				const startY = (-startPoint.startYLocation + centroidY) * currentScale + canvas.height / 2;
				const endX = (endPoint.startXLocation - centroidX) * currentScale + canvas.width / 2;
				const endY = (-endPoint.startYLocation + centroidY) * currentScale + canvas.height / 2;

				const connColour = point.colourHexDecimal;
				const pointDelay = point.timingDelayMilliseconds;

				drawArrow(startX, startY, endX, endY, connColour, connScale);
				// Times
				ctx.fillStyle = "red";
				ctx.fillText(parseInt(point.holeTime), parseInt(endX) + 1, parseInt(endY) - 5);
			}
		} else if (document.getElementById("display8").checked === true) {

			const startPoint = points.find(point => point.holeID === points[i].fromHoleID);
			const endPoint = points.find(point => point.holeID === points[i].holeID);

			if (startPoint && endPoint) {
				const startX = (startPoint.startXLocation - centroidX) * currentScale + canvas.width / 2;
				const startY = (-startPoint.startYLocation + centroidY) * currentScale + canvas.height / 2;
				const endX = (endPoint.startXLocation - centroidX) * currentScale + canvas.width / 2;
				const endY = (-endPoint.startYLocation + centroidY) * currentScale + canvas.height / 2;

				// Times text
				ctx.fillStyle = "red";
				ctx.fillText(parseInt(points[i].holeTime), parseInt(endX) + 1, parseInt(endY) - 5);
			}
		} else if (document.getElementById("display9").checked === true) {
			drawText(parseInt(x) + 1, parseInt(y) - 5, parseFloat(points[i].startXLocation).toFixed(2), textFillColour);
		} else if (document.getElementById("display10").checked === true) {
			drawText(parseInt(x) + 1, parseInt(y) - 5, parseFloat(points[i].startYLocation).toFixed(2), textFillColour);
		} else if (document.getElementById("display11").checked === true) {
			drawText(parseInt(x) + 1, parseInt(y) - 5, parseFloat(points[i].startZLocation).toFixed(2), textFillColour);
		}
		if (selectedHoleID != null && selectedHoleID == points[i].holeID) {
			if (firstSelectedHoleID == null) {
				drawHiHole(x, y, parseInt(0.75 * currentScale), "rgba(255, 0, 150, 0.2)", "rgba(255, 0, 150, .8)");
				ctx.fillStyle = "rgba(255, 0, 150, .8)";
				ctx.font = "18px Arial"; // Set the font size for the selected hole text
				if (isLengthEditing || isAngleEditing || isBearingEditing || isEastingEditing || isNorthingEditing || isElevationEditing) {
					ctx.fillText("Editing Selected Hole: " + selectedHoleID, 2, 20);
				} else if (isAddingConnector) {
					ctx.fillText("2nd Selected Hole: " + selectedHoleID, 2, 20);
				}
			} else {
				drawHiHole(x, y, parseInt(0.75 * currentScale), "rgba(0, 255, 0, 0.2)", "rgba(0, 190, 0, .8)");
				ctx.fillStyle = "rgba(0, 190, 0, .8)";
				ctx.font = "18px Arial"; // Set the font size for the selected hole text
				ctx.fillText("1st Selected Hole: " + selectedHoleID, 2, 20);
			}
			ctx.lineWidth = 1; // Reset stroke width for non-selected holes
			ctx.strokeStyle = strokeColour; // Reset stroke color for non-selected holes
			if (parseFloat(points[i].holeLengthCalculated).toFixed(1) == 0.0) {
				drawDummy(x, y, 5, strokeColour);
			} else {
				drawHole(x, y, 3, fillColour, strokeColour);
			}
		} else {
			ctx.lineWidth = 1; // Reset stroke width for non-selected holes
			ctx.strokeStyle = strokeColour; // Reset stroke color for non-selected holes
			if (parseFloat(points[i].holeLengthCalculated).toFixed(1) == 0.0) {
				drawDummy(x, y, 5, strokeColour);
			} else {
				drawHole(x, y, 3, fillColour, strokeColour);
			}
		}

		// Update the font slider value and label with the currentFontSize
		fontSlider.value = currentFontSize;
		fontLabel.textContent = "Font Size: " + parseFloat(currentFontSize).toFixed(1) + "px";
	}
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	lastMouseX = evt.clientX;
	lastMouseY = evt.clientY;
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}
function zoomIn() {
	currentScale += 1; // increase the current scale by 1
	currentFontSize += 1;
	drawPoints(points, selectedHoleID);
}
function zoomOut() {
	currentScale = Math.max(0.25, currentScale - 1); // decrease the current scale by 0.25, but not below 1
	currentFontSize -= 1;
	drawPoints(points, selectedHoleID);
}
function resetZoom() {
	currentScale = scale; // reset the current scale to the original scale
	currentFontSize = fontSize;
	drawPoints(points, selectedHoleID);
}
function savePointsToLocalStorage(points) {
	const lines = points.map(point => {
		return `${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colourHexDecimal}`;
	});
	const csvString = lines.join("\n");
	localStorage.setItem("blastingAppPoints", csvString);
}
function loadPointsFromLocalStorage() {
	const csvString = localStorage.getItem("blastingAppPoints");
	if (csvString) {
		points = parseCSV(csvString);
		updateCentroids();
		calculateTimes(points);
		contourLinesArray = recalculateContours(points, deltaX, deltaY);
		resultTriangles = delaunayTriangles(points, maxEdgeLength); // Recalculate triangles
		drawPoints(points, selectedHoleID);
		return points;
	}
	return null;
}
function checkLocalStorageData() {
	const csvString = localStorage.getItem("blastingAppPoints");
	if (csvString) {
		// Show the popup asking the user if they want to continue from where they left off
		showPopup();
	}
}
function showPopup() {
	const userDecision = confirm("Do you want to pick up from where you left off?\n\nPress OK to continue or Cancel to start fresh.");
	if (userDecision === true) {
		// User chose to continue, load the data from local storage
		points = loadPointsFromLocalStorage();
	} else {
		// User chose not to continue, do nothing or start fresh
		clearLoadedData();
	}
	//console.log(points);
	drawPoints(points, selectedHoleID);
}

function clearLoadedData() {
	localStorage.removeItem("blastingAppPoints");
}
function updateCentroids() {
	// Calculate centroid of points
	let sumX = 0;
	let sumY = 0;
	for (let i = 0; i < points.length; i++) {
		sumX += points[i].startXLocation;
		sumY += points[i].startYLocation;
	}
	centroidX = sumX / points.length;
	centroidY = sumY / points.length;
}

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if dark mode preference exists in local storage
const darkModePref = localStorage.getItem("darkMode");
if (darkModePref === "true") {
	body.classList.add("dark-mode");
	canvas.classList.add("dark-canvas");
	darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", () => {
	if (darkModeToggle.checked) {
		body.classList.add("dark-mode");
		canvas.classList.add("dark-canvas");
		localStorage.setItem("darkMode", "true");
	} else {
		body.classList.remove("dark-mode");
		canvas.classList.remove("dark-canvas");
		localStorage.setItem("darkMode", "false");
	}
	darkModeEnabled = document.body.classList.contains("dark-mode");
	transparentFillColour = darkModeEnabled ? "rgba(0, 128, 255, 0.3)" : "rgba(128, 255, 0, 0.3)";
	fillColour = darkModeEnabled ? "darkgrey" : "lightgrey";
	strokeColour = darkModeEnabled ? "white" : "black";
	textFillColour = darkModeEnabled ? "white" : "black";
	depthColour = darkModeEnabled ? "cyan" : "blue";
	angleDipColour = darkModeEnabled ? "orange" : "darkorange";
	if (Array.isArray(holeTimes)) {
		timeChart();
	}
	drawPoints(points, selectedHoleID);
});

window.addEventListener("load", () => {
	const darkModeEnabled = localStorage.getItem("darkMode") === "true";
	if (darkModeEnabled) {
		darkModeToggle.checked = true;
		body.classList.add("dark-mode");
		canvas.classList.add("dark-canvas");
	} else {
		darkModeToggle.checked = false;
		body.classList.remove("dark-mode");
		canvas.classList.remove("dark-canvas");
	}
	transparentFillColour = darkModeEnabled ? "rgba(0, 128, 255, 0.3)" : "rgba(128, 255, 0, 0.3)";
	fillColour = darkModeEnabled ? "darkgrey" : "lightgrey";
	strokeColour = darkModeEnabled ? "white" : "black";
	textFillColour = darkModeEnabled ? "white" : "black";
	depthColour = darkModeEnabled ? "cyan" : "blue";
	angleDipColour = darkModeEnabled ? "orange" : "darkorange";
	clearCanvas();
	checkLocalStorageData();
});
// When the page is about to be unloaded or closed, you might want to save the points array to session storage to ensure data is not lost
window.addEventListener("beforeunload", () => {
	savePointsToLocalStorage(points);
});

window.addEventListener("resize", () => {
	canvas.width = document.documentElement.clientWidth - canvasAdjustWidth;
	canvas.height = document.documentElement.clientHeight - document.documentElement.clientHeight * canvasAdjustHeight;
	if (Array.isArray(holeTimes)) {
		timeChart();
	}
	savePointsToLocalStorage(points);

	drawPoints(points, selectedHoleID);
});
