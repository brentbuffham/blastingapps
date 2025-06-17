// Description: This file contains the main functions for the Kirra App
// Author: Brent Buffham
// Last Modified: "20250617.1920AWST"
const buildVersion = "20250617.1920AWST"; //Backwards Compatible Date Format AWST = Australian Western Standard Time
//-----------------------------------------

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
// Function to add a point to the kadPointsMap
let entityName; // Define entityName outside the function to persist between calls
let createNewEntity = true; // Flag to create a new entity
// Variables to store the initial mouse position during canvas movement
let initialMouseX = 0;
let initialMouseY = 0;
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
let isDeletingPoint = false;
let isDeletingLine = false;
let isDeletingCircle = false;
let isDeletingPoly = false;
let isDeletingText = false;
//modify tool booleans
let isModifyingPoint = false;
let isModifyingCircle = false;
let isModifyingText = false;
//offset tool booleans
let isOffsetLinePoly = false;
//Record Measurements booleans
let isMeasureRecording = false;

//has selected multiple holes
let hasSelectedMultipleHoles = false;
let selectionMode = false; // Selection mode is false if single ONLY hole selection on each click and true when each click adds a hole to the selection.  It does not indicate that selection is active or inactive.
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
let noneColour = "rgba(0, 0, 0, 0)";
let darkModeEnabled = document.body.classList.contains("dark-mode");
let transparentFillColour = darkModeEnabled ? "rgba(0, 128, 255, 0.3)" : "rgba(128, 255, 0, 0.3)";
let fillColour = darkModeEnabled ? "lightgrey" : "darkgrey";
let strokeColour = darkModeEnabled ? "white" : "black";
let textFillColour = darkModeEnabled ? "white" : "black";
let depthColour = darkModeEnabled ? "blue" : "cyan";
let angleDipColour = darkModeEnabled ? "darkcyan" : "orange";

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
const modifyPointSwitch = document.getElementById("modifyPointDraw");
const modifyCircleSwitch = document.getElementById("modifyCircleDraw");
const modifyTextSwitch = document.getElementById("modifyTextDraw");
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
const deletePointDraw = document.getElementById("deletePointDraw");
const deleteLineDraw = document.getElementById("deleteLineDraw");
const deleteCircleDraw = document.getElementById("deleteCircleDraw");
const deletePolyDraw = document.getElementById("deletePolyDraw");
const deleteTextDraw = document.getElementById("deleteTextDraw");
//Record Measurements Switch Event Listeners
const measuredLengthSwitch = document.getElementById("measuredLengthSwitch");
const measuredMassSwitch = document.getElementById("measuredMassSwitch");
const measuredCommentSwitch = document.getElementById("measuredCommentSwitch");

//switch Options - Do not in clude in switches array
const renumberStartListener = document.getElementById("deleteRenumberStart");
const renumberHoles = document.getElementById("renumberHoles");
let isRenumberingHoles = false;

const switches = [
    addConnectorButton,
    addMultiConnectorButton,
    addPatternSwitch,
    addHoleSwitch,
    editLengthPopupSwitch,
    editTypeSwitch,
    editBlastNameSwitch,
    deleteHoleSwitch,
    modifyPointSwitch,
    modifyCircleSwitch,
    modifyTextSwitch,
    offsetLinePolySwitch,
    editHoleTypePopupSwitch,
    addPointDraw,
    addLineDraw,
    addCircleDraw,
    addPolyDraw,
    addTextDraw,
    deletePointDraw,
    deleteLineDraw,
    deleteCircleDraw,
    deletePolyDraw,
    deleteTextDraw,
    measuredLengthSwitch,
    measuredMassSwitch,
    measuredCommentSwitch,
    selectionModeButton,
    editHolesToggle
];

const bools = [
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
    isDeletingPoint,
    isDeletingLine,
    isDeletingCircle,
    isDeletingPoly,
    isDeletingText,
    isPlaying,
    isModifyingPoint,
    isModifyingCircle,
    isModifyingText,
    isOffsetLinePoly,
    isMeasureRecording,
    selectionMode //check this
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
    isDeletingPoint = false;
    isDeletingLine = false;
    isDeletingCircle = false;
    isDeletingPoly = false;
    isDeletingText = false;
    isPlaying = false;
    isModifyingPoint = false;
    isModifyingCircle = false;
    isModifyingText = false;
    isOffsetLinePoly = false;
    isMeasureRecording = false;
    selectionMode = false;
    isMoveToolActive = false;
    isMovingHole = false;
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

    // Reset any other state variables
    blastNameValue = "";
    currentEntityName = "";
}

// Update resetFloatingToolbarButtons to only clear floating toolbar related bools
function resetFloatingToolbarButtons(excluding) {
    // Clear only floating toolbar tool states
    isSelectionPointerActive = false;
    isPolygonSelectionActive = false;
    isMoveToolActive = false;
    isBearingToolActive = false;
    isRulerActive = false;
    isRulerProtractorActive = false;

    // Set all tool checkboxes to false except the excluded one
    selectPointerTool.checked = excluding === "selectPointerTool";
    selectByPolygonTool.checked = excluding === "selectByPolygonTool";
    moveToTool.checked = excluding === "moveToTool";
    tieConnectTool.checked = excluding === "tieConnectTool";
    tieConnectMultiTool.checked = excluding === "tieConnectMultiTool";
    bearingTool.checked = excluding === "bearingTool";
    rulerTool.checked = excluding === "rulerTool";
    rulerProtractorTool.checked = excluding === "rulerProtractorTool";

    // Set only the excluded tool's active state to true
    isSelectionPointerActive = excluding === "selectPointerTool";
    isPolygonSelectionActive = excluding === "selectByPolygonTool";
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

    // Force redraw to update button states
    drawData(points, selectedHole);
}

// Master function to reset everything
function resetAppToDefaults() {
    setAllBoolsToFalse();
    resetAllSwitchesAndToggles();
    resetAllSelectedStores();
    resetFloatingToolbarButtons("none");
    console.log("App reset to defaults: bools, switches, toggles, and stores cleared");
}

// Buttons
document.getElementById("deletePointButton").addEventListener("click", deleteSelectedPoint);
document.getElementById("deleteObjectButton").addEventListener("click", deleteSelectedObject);
document.getElementById("deleteAllButton").addEventListener("click", deleteSelectedAll);
document.getElementById("fileInput").addEventListener("change", handleFileUpload);
document.getElementById("fileInputDXF").addEventListener("change", handleDXFUpload);
document.getElementById("fileInputMeasured").addEventListener("change", handleMeasuredUpload);
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
const allToggles = [
    displayHoleId,
    displayHoleLength,
    displayHoleDiameter,
    displayHoleAngle,
    displayHoleDip,
    displayHoleBearing,
    displayHoleSubdrill,
    displayConnectors,
    displayDelays,
    displayTimes,
    displayContours,
    displaySlope,
    displayRelief,
    displayFirstMovements,
    displayXLocation,
    displayYLocation,
    displayElevation,
    displayHoleType,
    displayMLength,
    displayMMass,
    displayMComment,
    displayVaronoiCells
];

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
        // Update the text content of elements in the DOM
        document.querySelector("title").textContent = langTranslations.title;
        document.querySelector("#helpButton").title = langTranslations.help_button;
        document.querySelector("#zoomInButton").textContent = langTranslations.zoom_in_button;
        document.querySelector("#zoomOutButton").textContent = langTranslations.zoom_out_button;
        // document.querySelector("#resetZoomButton").textContent = langTranslations.reset_zoom_button;
        document.querySelector("#buttonGoBack").textContent = langTranslations.go_back_button;
        document.querySelector(".sun-icon").textContent = langTranslations.dark_mode_sun;
        document.querySelector(".moon-icon").textContent = langTranslations.dark_mode_moon;
        document.querySelector("#openOrImportAcc span").textContent = langTranslations.open_import;
        document.querySelector("#fileInput").placeholder = langTranslations.file_input_placeholder;
        document.querySelector("#fileInputDXF").placeholder = langTranslations.file_input_placeholder_dxf;
        document.querySelector("#fileInputMeasured").placeholder = langTranslations.file_input_placeholder_measured;
        document.querySelector("#plusorminusHolesAcc span").textContent = langTranslations.plus_minus_holes;
        document.querySelector("#addPatternLabel").textContent = langTranslations.add_pattern_label;
        document.querySelector("#addHoleLabel").textContent = langTranslations.add_hole_label;
        document.querySelector("#deleteHoleLabel").textContent = langTranslations.delete_label;
        document.querySelector("#deleteHoleButton").textContent = langTranslations.delete_hole_button;
        document.querySelector("#deletePatternButton").textContent = langTranslations.delete_pattern_button;
        document.querySelector("#deleteAllPatternsButton").textContent = langTranslations.delete_all_patterns_button;
        document.querySelector("label[for='renumberHoles']").textContent = langTranslations.renumber_holes_label;
        document.querySelector("label[for='deleteRenumberStart']").textContent = langTranslations.delete_renumber_start_label;
        document.querySelector("#editHolesAcc").textContent = langTranslations.edit_holes;
        document.querySelector("#editBlastNameLabel").textContent = langTranslations.edit_blast_name_label;
        document.querySelector("#editLengthPopupLabel").textContent = langTranslations.edit_length_popup_label;
        document.querySelector("#editHoleTypePopupLabel").textContent = langTranslations.edit_hole_type_popup_label;
        document.querySelector("#selectionModeLabel").textContent = langTranslations.selection_mode_label;
        document.querySelector("#editEastingButton").textContent = langTranslations.edit_easting_label;
        document.querySelector("#holeEastingLabel").textContent = langTranslations.hole_easting_label;
        document.querySelector("#editNorthingButton ").textContent = langTranslations.edit_northing_label;
        document.querySelector("#holeNorthingLabel").textContent = langTranslations.hole_northing_label;
        document.querySelector("#editElevationButton ").textContent = langTranslations.edit_elevation_label;
        document.querySelector("#holeElevationLabel").textContent = langTranslations.hole_elevation_label;
        document.querySelector("#editDiameterButton").textContent = langTranslations.edit_diameter_label;
        document.querySelector("#holeDiameterLabel").textContent = langTranslations.hole_diameter_label;
        document.querySelector("#editLengthButton").textContent = langTranslations.edit_length_label;
        document.querySelector("#holeLengthLabel").textContent = langTranslations.hole_length_label;
        document.querySelector("#editAngleButton").textContent = langTranslations.edit_angle_label;
        document.querySelector("#holeAngleLabel").textContent = langTranslations.hole_angle_label;
        document.querySelector("#editBearingButton").textContent = langTranslations.edit_bearing_label;
        document.querySelector("#holeBearingLabel").textContent = langTranslations.hole_bearing_label;
        document.querySelector("#recordActualsAcc span").textContent = langTranslations.record_actuals;
        document.querySelector("#recordLengthPopupLabel").textContent = langTranslations.record_length_popup_label;
        document.querySelector("#editMassPopupLabel").textContent = langTranslations.record_mass_popup_label;
        document.querySelector("#recordCommentPopupLabel").textContent = langTranslations.record_comment_popup_label;
        document.querySelector("#viewControlsAcc span").textContent = langTranslations.view_controls;
        document.querySelector("#fontLabel").textContent = langTranslations.font_size_label;
        document.querySelector("#connLabel").textContent = langTranslations.tie_size_label;
        document.querySelector("#toeLabel").textContent = langTranslations.toe_size_label;
        document.querySelector("#holeLabel").textContent = langTranslations.hole_adjust_label;
        document.querySelector("#intervalLabel").textContent = langTranslations.interval_label;
        document.querySelector("#firstMovementLabel").textContent = langTranslations.first_movement_label;
        document.querySelector("#outputfilesAcc").textContent = langTranslations.output_files;
        document.querySelector("#save_holes_label").textContent = langTranslations.save_holes_label;
        document.querySelector("#saveHoles").textContent = langTranslations.save_holes_button;
        document.querySelector("#save_kad_label").textContent = langTranslations.save_kad_label;
        document.querySelector("#saveKAD").textContent = langTranslations.save_kad_button;
        document.querySelector("#save_all_label").textContent = langTranslations.save_all_label;
        document.querySelector("#saveAll").textContent = langTranslations.save_all_button;
        document.querySelector("#save_measures_label").textContent = langTranslations.save_measures_label;
        document.querySelector("#saveMeasures").textContent = langTranslations.save_measures_button;
        document.querySelector("#exportHolesDXFLabel").textContent = langTranslations.export_holes_dxf_label;
        document.querySelector("#exportHolesDXF").textContent = langTranslations.export_holes_dxf_button;
        document.querySelector("#exportDrawingDXFLabel").textContent = langTranslations.export_dxf_drawing_label;
        document.querySelector("#exportDrawingDXF").textContent = langTranslations.export_dxf_drawing_button;
        document.querySelector("#saveIREDES").textContent = langTranslations.save_iredes_button;
        document.querySelector("#saveAQM").textContent = langTranslations.save_aqm_button;
        document.querySelector("#exampleFilesAcc span").textContent = langTranslations.example_helper_files;
        document.querySelector("#testfile1").textContent = langTranslations.download_test_tie_1;
        document.querySelector("#testfile2").textContent = langTranslations.download_test_tie_2;
        document.querySelector("#testfile3").textContent = langTranslations.download_test_tie_3;
        document.querySelector("#testfile4").textContent = langTranslations.download_kad_pitshell;
        document.querySelector("#testfile5").textContent = langTranslations.download_kad_pitshell_ios;
        document.querySelector("#testfile6").textContent = langTranslations.download_kad_blastmaster;
        document.querySelector("#testfile7").textContent = langTranslations.download_kad_blastmaster_ios;
        document.querySelector("#testfile8").textContent = langTranslations.download_conversion_tool;
        document.querySelector("#aboutAcc").textContent = langTranslations.about_title;
        document.querySelector("#aboutPanel").textContent = langTranslations.about_content;
        const connectorsText = document.querySelector("#connectorsAcc span");
        if (connectorsText) {
            connectorsText.textContent = langTranslations.connectors;
        }
        console.log(document.querySelector("#connectorsAcc span"));
        document.querySelector("#singleTie").textContent = langTranslations.single_tie_label;
        document.querySelector("#multiTie").textContent = langTranslations.multi_tie_label;
        document.querySelector("#delayLabel").textContent = langTranslations.delay_label;
        document.querySelector("#connectorColour").textContent = langTranslations.colour_label;
        document.querySelector("#connectLabel").textContent = langTranslations.connect_distance_label;
        document.querySelector("#animateAcc").textContent = langTranslations.animate_firing;
        document.querySelector("#play").textContent = langTranslations.play_button;
        document.querySelector("#stop").textContent = langTranslations.stop_button;
        document.querySelector("#timeWindowAcc span").textContent = langTranslations.time_window;
        document.querySelector("#timeRangeLabel").textContent = langTranslations.time_range_label;
        document.querySelector("#timeOffsetLabel").textContent = langTranslations.time_offset_label;
        document.querySelector("#holeCountLabel").textContent = langTranslations.hole_count_label;
        document.querySelector("#measuredMassLabel").textContent = langTranslations.measured_mass_label;
        document.querySelector("#drawingTools").textContent = langTranslations.drawing_tools;
        document.querySelector("#elevationName").textContent = langTranslations.elevation_label;
        document.querySelector("#colourLabel").textContent = langTranslations.drawing_colour_label;
        document.querySelector("#lineWidthLabel").textContent = langTranslations.line_width_label;
        document.querySelector("#pointDraw").textContent = langTranslations.point_draw_label;
        document.querySelector("#lineDraw").textContent = langTranslations.line_draw_label;
        document.querySelector("#polyDraw").textContent = langTranslations.poly_draw_label;
        document.querySelector("#circleDraw").textContent = langTranslations.circle_draw_label;
        document.querySelector("#drawingRadiusLabel").textContent = langTranslations.drawing_radius_label;
        document.querySelector("#textDraw").textContent = langTranslations.text_draw_label;
        document.querySelector("#textLabel").textContent = langTranslations.text_label;
        document.querySelector("#commonMath1").textContent = langTranslations.common_math_label;
        document.querySelector("#commonMath2").textContent = langTranslations.common_math_examples;
        document.querySelector("#drawingRemovalAcc span").textContent = langTranslations.drawing_removal;
        document.querySelector("#pointDeleteLabel").textContent = langTranslations.point_delete_label;
        document.querySelector("#lineDeleteLabel").textContent = langTranslations.line_delete_label;
        document.querySelector("#polyDeleteLabel").textContent = langTranslations.poly_delete_label;
        document.querySelector("#circleDeleteLabel").textContent = langTranslations.circle_delete_label;
        document.querySelector("#textDeleteLabel").textContent = langTranslations.text_delete_label;
        document.querySelector("#deletePointButton").textContent = langTranslations.delete_point_button;
        document.querySelector("#deleteObjectButton").textContent = langTranslations.delete_object_button;
        document.querySelector("#deleteAllButton").textContent = langTranslations.delete_all_button;
        document.querySelector("#buymeacoffeelabel").textContent = langTranslations.buy_coffee_alt;
        document.querySelector("#bugButton").textContent = langTranslations.report_bug_button;
        document.querySelector("label[for='display1']").title = langTranslations.display_hole_id_title;
        document.querySelector("label[for='display2']").title = langTranslations.display_hole_length_title;
        document.querySelector("label[for='display2A']").title = langTranslations.display_hole_diameter_title;
        document.querySelector("label[for='display3']").title = langTranslations.display_angle_title;
        document.querySelector("label[for='display4']").title = langTranslations.display_dip_title;
        document.querySelector("label[for='display5']").title = langTranslations.display_bearing_title;
        document.querySelector("label[for='display5B']").title = langTranslations.display_subdrill_title;
        document.querySelector("label[for='display5A']").title = langTranslations.display_ties_title;
        document.querySelector("label[for='display6']").title = langTranslations.display_connectors_title;
        document.querySelector("label[for='display6A']").title = langTranslations.display_times_only_title;
        document.querySelector("label[for='display8']").title = langTranslations.display_contours_title;
        document.querySelector("label[for='display8A']").title = langTranslations.display_slope_title;
        document.querySelector("label[for='display8B']").title = langTranslations.display_relief_title;
        document.querySelector("label[for='display8C']").title = langTranslations.display_direction_title;
        document.querySelector("label[for='display9']").title = langTranslations.display_xlocation_title;
        document.querySelector("label[for='display10']").title = langTranslations.display_ylocation_title;
        document.querySelector("label[for='display11']").title = langTranslations.display_zlocation_title;
        document.querySelector("label[for='display12']").title = langTranslations.display_hole_type_title;
        document.querySelector("label[for='display13']").title = langTranslations.display_measure_title;
        document.querySelector("label[for='display14']").title = langTranslations.display_mass_title;
        document.querySelector("label[for='display15']").title = langTranslations.display_comment_title;
        // Add more elements to update as needed
    } else {
        console.error("Translations for language ", language, " not found.");
    }
}

//drawing elevation value
const drawingElevation = document.getElementById("drawingElevation");

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
        selectionMode = true;

        if (selectedHole && !selectedMultipleHoles.includes(selectedHole)) {
            selectedMultipleHoles.push(selectedHole);
            selectedHole = null;
        }

        console.log("selectionModeButton.addEventListener checked");
    } else {
        console.log("selectionModeButton.addEventListener unchecked");
        selectionMode = false;
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
function setSelectionModeToFalse() {
    selectionMode = false;
    selectionModeButton.checked = false;
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
        setSelectionModeToFalse();
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
        setSelectionModeToFalse();
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
        setSelectionModeToFalse();
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
        setSelectionModeToFalse();
        setAllBoolsToFalse();
        isDrawingPoint = true;
        addPointDraw.checked = true;
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
        setSelectionModeToFalse();
        setAllBoolsToFalse();
        isDrawingLine = true;
        addLineDraw.checked = true;
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
        setSelectionModeToFalse();
        isDrawingPoly = true;
        addPolyDraw.checked = true;
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
        setSelectionModeToFalse();
        isDrawingCircle = true;
        addCircleDraw.checked = true;
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
        setSelectionModeToFalse();
        isDrawingText = true;
        addTextDraw.checked = true;
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

deletePointDraw.addEventListener("change", function () {
    if (this.checked) {
        switches.forEach((switchElement) => {
            if (switchElement) switchElement.checked = false;
        });
        setAllBoolsToFalse();
        setSelectionModeToFalse();
        isDeletingPoint = true;
        deletePointDraw.checked = true;
        canvas.addEventListener("click", getClickedPoint);
        canvas.addEventListener("touchstart", getClickedPoint);
    } else {
        isDeletingPoint = false;
        canvas.removeEventListener("click", getClickedPoint);
        canvas.removeEventListener("touchstart", getClickedPoint);
        drawData(points, selectedHole);
    }
});
deleteLineDraw.addEventListener("change", function () {
    if (this.checked) {
        switches.forEach((switchElement) => {
            if (switchElement) switchElement.checked = false;
        });
        setAllBoolsToFalse();
        setSelectionModeToFalse();
        isDeletingLine = true;
        deleteLineDraw.checked = true;
        canvas.addEventListener("click", getClickedPoint);
        canvas.addEventListener("touchstart", getClickedPoint);
    } else {
        isDeletingLine = false;
        canvas.removeEventListener("click", getClickedPoint);
        canvas.removeEventListener("touchstart", getClickedPoint);
        drawData(points, selectedHole);
    }
});
deletePolyDraw.addEventListener("change", function () {
    if (this.checked) {
        switches.forEach((switchElement) => {
            if (switchElement) switchElement.checked = false;
        });
        setAllBoolsToFalse();
        setSelectionModeToFalse();
        isDeletingPoly = true;
        deletePolyDraw.checked = true;
        canvas.addEventListener("click", getClickedPoint);
        canvas.addEventListener("touchstart", getClickedPoint);
    } else {
        isDeletingPoly = false;
        canvas.removeEventListener("click", getClickedPoint);
        canvas.removeEventListener("touchstart", getClickedPoint);
        drawData(points, selectedHole);
    }
});
deleteCircleDraw.addEventListener("change", function () {
    if (this.checked) {
        switches.forEach((switchElement) => {
            if (switchElement) switchElement.checked = false;
        });
        setAllBoolsToFalse();
        setSelectionModeToFalse();
        isDeletingCircle = true;
        deleteCircleDraw.checked = true;
        canvas.addEventListener("click", getClickedPoint);
        canvas.addEventListener("touchstart", getClickedPoint);
    } else {
        isDeletingCircle = false;
        canvas.removeEventListener("click", getClickedPoint);
        canvas.removeEventListener("touchstart", getClickedPoint);
        drawData(points, selectedHole);
    }
});
deleteTextDraw.addEventListener("change", function () {
    if (this.checked) {
        switches.forEach((switchElement) => {
            if (switchElement) switchElement.checked = false;
        });
        setAllBoolsToFalse();
        setSelectionModeToFalse();
        isDeletingText = true;
        deleteTextDraw.checked = true;
        canvas.addEventListener("click", getClickedPoint);
        canvas.addEventListener("touchstart", getClickedPoint);
    } else {
        isDeletingText = false;
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
        isAddingConnector = true;
        addConnectorButton.checked = true;
        isPolygonSelectionActive = false;
        isSelectionPointerActive = false;
        selectedMultipleHoles = [];
        selectByPolygonTool.checked = false;
        selectPointerTool.checked = false;
        setSelectionModeToFalse();
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
        addMultiConnectorButton.checked = true;
        isAddingMultiConnector = true;
        isPolygonSelectionActive = false;
        isSelectionPointerActive = false;
        selectedMultipleHoles = [];
        selectByPolygonTool.checked = false;
        selectPointerTool.checked = false;
        setSelectionModeToFalse();
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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
        setSelectionModeToFalse();
        addHoleSwitch.checked = true;
        isAddingHole = true;
        isAddingPattern = false;
        document.getElementById("display1").checked = true;
        canvas.addEventListener("click", handleHoleAddingClick);
        canvas.addEventListener("touchstart", handleHoleAddingClick);
        const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
        calculateTimes(points);
        const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
        setSelectionModeToFalse();
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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
        setSelectionModeToFalse();
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
        bools.forEach((bool) => {
            if (bool !== isHoleEditing || boll != selectionMode) bool = false;
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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

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
    if (Array.isArray(holeTimes)) {
        const newWidth = document.documentElement.clientWidth;
        Plotly.relayout(timeChartObject, {
            width: newWidth
        });
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

let useToeLocation = false;

document.addEventListener("DOMContentLoaded", function () {
    const voronoiBoundarySwitch = document.getElementById("voronoiBoundarySwitch");
    voronoiBoundarySwitch.addEventListener("change", function () {
        useToeLocation = voronoiBoundarySwitch.checked;

        drawData(points, selectedHole);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const voronoiMetricDropdown = document.getElementById("voronoiSelect");
    voronoiMetricDropdown.addEventListener("change", function () {
        drawData(points, selectedHole);
    });
});
let isVoronoiLegendFixed = false;
document.addEventListener("DOMContentLoaded", function () {
    const voronoiLegendDropdown = document.getElementById("voronoiLegendSelect");
    voronoiLegendDropdown.addEventListener("change", function () {
        isVoronoiLegendFixed = voronoiLegendDropdown.value === "fixed";
        drawData(points, selectedHole);
    });
});

let selectedVoronoiMetric = "powderFactor"; // default

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
    //mapData = [kadHolesMap, kadPointsMap, kadPolygonsMap, kadLinesMap, kadCirclesMap, kadTextsMap];//including holes
    //mapData = [kadPointsMap, kadPolygonsMap, kadLinesMap, kadCirclesMap, kadTextsMap]; //excluding holes
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
const slider = document.getElementById("toeSlider");
slider.addEventListener("input", function () {
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
    const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

    // directionArrows now contains the arrow data for later drawing

    drawData(points, selectedHole);
});
// Access the slider element and add an event listener to track changes
const firstMovementSlider = document.getElementById("firstMovementSlider");
firstMovementSlider.addEventListener("input", function () {
    firstMovementSize = document.getElementById("firstMovementSlider").value;
    firstMovementLabel.textContent = "First Movement Size : " + firstMovementSize;
    const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

    // directionArrows now contains the arrow data for later drawing

    drawData(points, selectedHole);
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
    if (selectionMode && selectedMultipleHoles.length > 0) {
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
                const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
}

let randomHex = Math.floor(Math.random() * 16777215).toString(16);

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
            colour = "red";
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
            colour = values[19].replace(/\r$/, "");
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
            colour = values[13].replace(/\r$/, "");
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
            colour = values[11].replace(/\r$/, "");
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
                colourHexDecimal: colour,
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

    calculateTimes(points);
    drawData(points, selectedHole);
    return points;
}
//OLDER VERSION
// function parseCSV(data, blastNameValue) {
//     if (!points || !Array.isArray(points)) points = [];
//     sessionLoadCount += 1;
//     const lines = data.split("\n");
//     let minX = Infinity;
//     let minY = Infinity;
//     const entityName = blastNameValue;
//     const entityType = "hole";

//     for (let i = 0; i < lines.length; i++) {
//         const values = lines[i].split(",");

//         if (values.length > 25) {
//             continue;
//         }

//         if (values.length === 25) {
//             const entityName = values[0];
//             const entityType = "hole";
//             const holeID = values[2]; //Id of the blast hole
//             const startXLocation = parseFloat(values[3]); //start of the blast hole X value
//             const startYLocation = parseFloat(values[4]); //start of the blast hole Y value
//             const startZLocation = parseFloat(values[5]); //start of the blast hole Z value
//             const endXLocation = parseFloat(values[6]); //end of the blast hole X value
//             const endYLocation = parseFloat(values[7]); //end of the blast hole Y value
//             const endZLocation = parseFloat(values[8]); //end of the blast hole Z value
//             const gradeXLocation = parseFloat(values[9]); //grade of the blast hole X value
//             const gradeYLocation = parseFloat(values[10]); //grade of the blast hole Y value
//             const gradeZLocation = parseFloat(values[11]); //grade of the blast hole Z value
//             const subdrillAmount = parseFloat(values[12]); //subdrill of the blast hole
//             const subdrillLength = parseFloat(values[13]); //subdrill length of the blast hole
//             const benchHeight = parseFloat(values[14]); //bench height of the blast hole
//             const holeDiameter = parseFloat(values[15]); //diameter of the blast hole
//             const holeType = values[16]; //type of the blast hole
//             const fromHoleID = values[17]; //from hole where the connector tail will be
//             const timingDelayMilliseconds = parseInt(values[18]); //delay from hole to Id of the blast
//             const colourHexDecimal = values[19].replace(/\r$/, ""); //colour of the delay in HEXDECIMALS
//             const measuredLength = values.length > 20 ? parseFloat(values[20]) : 0;
//             const measuredLengthTimeStamp = values.length > 21 ? values[21] : "09/05/1975 00:00:00";
//             const measuredMass = values.length > 22 ? parseFloat(values[22]) : 0;
//             const measuredMassTimeStamp = values.length > 23 ? values[23] : "09/05/1975 00:00:00";
//             const measuredComment = values.length > 24 ? values[24] : "None";
//             const measuredCommentTimeStamp = values.length > 25 ? values[25] : "09/05/1975 00:00:00";
//             const holeLengthCalculated = Math.pow(Math.pow(startXLocation - endXLocation, 2) + Math.pow(startYLocation - endYLocation, 2) + Math.pow(startZLocation - endZLocation, 2), 0.5); //calc the distance between sx,sy,sz and ex,ey,ez
//             const deltaXAmount = endXLocation - startXLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("X",deltaXAmount);
//             const deltaYAmount = endYLocation - startYLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("Y",deltaYAmount);
//             const deltaZAmount = endZLocation - startZLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("Z",deltaZAmount);
//             const verticalObject = {
//                 x: 0,
//                 y: 0,
//                 z: 1
//             };
//             const dotProduct = deltaXAmount * verticalObject.x + deltaYAmount * verticalObject.y + deltaZAmount * verticalObject.z;
//             const magnitude = Math.sqrt(deltaXAmount * deltaXAmount + deltaYAmount * deltaYAmount + deltaZAmount * deltaZAmount);

//             const epsilon = 1e-10; // A small value to prevent division by zero
//             const normalizedDotProduct = Math.abs(magnitude) < epsilon ? 0 : dotProduct / magnitude;
//             const holeAngle = 180 - Math.acos(normalizedDotProduct) * (180 / Math.PI);

//             const holeBearing = (450 - Math.atan2(deltaYAmount, deltaXAmount) * (180 / Math.PI)) % 360; //bearing in degrees
//             if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation) && !isNaN(endXLocation) && !isNaN(endYLocation) && !isNaN(endZLocation) && !isNaN(timingDelayMilliseconds)) {
//                 // check if they are valid numbers
//                 points.push({
//                     entityName,
//                     entityType,
//                     holeID,
//                     startXLocation,
//                     startYLocation,
//                     startZLocation,
//                     endXLocation,
//                     endYLocation,
//                     endZLocation,
//                     gradeXLocation,
//                     gradeYLocation,
//                     gradeZLocation,
//                     subdrillAmount,
//                     subdrillLength,
//                     benchHeight,
//                     holeDiameter,
//                     holeType,
//                     fromHoleID,
//                     timingDelayMilliseconds,
//                     colourHexDecimal,
//                     holeLengthCalculated,
//                     holeAngle,
//                     holeBearing,
//                     measuredLength,
//                     measuredLengthTimeStamp,
//                     measuredMass,
//                     measuredMassTimeStamp,
//                     measuredComment,
//                     measuredCommentTimeStamp
//                 });
//                 minX = Math.min(minX, startXLocation);
//                 minY = Math.min(minY, startYLocation);
//             }
//         }
//         if (values.length === 20) {
//             // check if it has the correct number of values
//             const entityName = values[0];
//             const entityType = "hole";
//             const holeID = values[2]; //Id of the blast hole
//             const startXLocation = parseFloat(values[3]); //start of the blast hole X value
//             const startYLocation = parseFloat(values[4]); //start of the blast hole Y value
//             const startZLocation = parseFloat(values[5]); //start of the blast hole Z value
//             const endXLocation = parseFloat(values[6]); //end of the blast hole X value
//             const endYLocation = parseFloat(values[7]); //end of the blast hole Y value
//             const endZLocation = parseFloat(values[8]); //end of the blast hole Z value
//             const holeDiameter = parseFloat(values[9]); //diameter of the blast hole
//             const holeType = values[10]; //type of the blast hole
//             const fromHoleID = values[11]; //from hole where the connector tail will be
//             const timingDelayMilliseconds = parseInt(values[12]); //delay from hole to Id of the blast
//             const colourHexDecimal = values[13].replace(/\r$/, ""); //colour of the delay in HEXDECIMALS
//             // Parse optional fields
//             const measuredLength = values.length > 14 ? parseFloat(values[14]) : 0;
//             const measuredLengthTimeStamp = values.length > 15 ? values[15] : "09/05/1975 00:00:00";
//             const measuredMass = values.length > 16 ? parseFloat(values[16]) : 0;
//             const measuredMassTimeStamp = values.length > 17 ? values[17] : "09/05/1975 00:00:00";
//             const measuredComment = values.length > 18 ? values[18] : "None";
//             const measuredCommentTimeStamp = values.length > 19 ? values[19] : "09/05/1975 00:00:00";

//             const holeLengthCalculated = Math.pow(Math.pow(startXLocation - endXLocation, 2) + Math.pow(startYLocation - endYLocation, 2) + Math.pow(startZLocation - endZLocation, 2), 0.5); //calc the distance between sx,sy,sz and ex,ey,ez
//             const deltaXAmount = endXLocation - startXLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("X",deltaXAmount);
//             const deltaYAmount = endYLocation - startYLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("Y",deltaYAmount);
//             const deltaZAmount = endZLocation - startZLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("Z",deltaZAmount);
//             const verticalObject = {
//                 x: 0,
//                 y: 0,
//                 z: 1
//             };
//             const dotProduct = deltaXAmount * verticalObject.x + deltaYAmount * verticalObject.y + deltaZAmount * verticalObject.z;
//             const magnitude = Math.sqrt(deltaXAmount * deltaXAmount + deltaYAmount * deltaYAmount + deltaZAmount * deltaZAmount);

//             const epsilon = 1e-10; // A small value to prevent division by zero
//             const normalizedDotProduct = Math.abs(magnitude) < epsilon ? 0 : dotProduct / magnitude;
//             const holeAngle = 180 - Math.acos(normalizedDotProduct) * (180 / Math.PI);

//             const holeBearing = (450 - Math.atan2(deltaYAmount, deltaXAmount) * (180 / Math.PI)) % 360; //bearing in degrees
//             // Need to calculate the XY and Z values for the grade based on the posistion along the hole length. 1st calculte the subdrilllength use the subdrill amount and an the angle of the hole to calculate the length of the subdrill.
//             const subdrillAmount = 0;
//             const subdrillLength = subdrillAmount * Math.cos(holeAngle * (Math.PI / 180));
//             //then use the calcualted hole length minus the subdrill length to calculate the grade x y z position
//             const gradeXLocation = endXLocation - subdrillLength * Math.cos(holeBearing * (Math.PI / 180));
//             const gradeYLocation = endYLocation - subdrillLength * Math.sin(holeBearing * (Math.PI / 180));
//             const gradeZLocation = endZLocation - subdrillAmount;
//             //then use the the start z location - grade z loacation to calculate the bench height
//             const benchHeight = startZLocation - gradeZLocation;

//             if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation) && !isNaN(endXLocation) && !isNaN(endYLocation) && !isNaN(endZLocation) && !isNaN(timingDelayMilliseconds)) {
//                 // check if they are valid numbers
//                 points.push({
//                     entityName,
//                     entityType,
//                     holeID,
//                     startXLocation,
//                     startYLocation,
//                     startZLocation,
//                     endXLocation,
//                     endYLocation,
//                     endZLocation,
//                     gradeXLocation,
//                     gradeYLocation,
//                     gradeZLocation,
//                     subdrillAmount,
//                     subdrillLength,
//                     benchHeight,
//                     holeDiameter,
//                     holeType,
//                     fromHoleID,
//                     timingDelayMilliseconds,
//                     colourHexDecimal,
//                     holeLengthCalculated,
//                     holeAngle,
//                     holeBearing,
//                     measuredLength,
//                     measuredLengthTimeStamp,
//                     measuredMass,
//                     measuredMassTimeStamp,
//                     measuredComment,
//                     measuredCommentTimeStamp
//                 });
//                 minX = Math.min(minX, startXLocation);
//                 minY = Math.min(minY, startYLocation);
//             }
//         } else if (values.length === 14) {
//             // check if it has the correct number of values
//             const entityName = values[0];
//             const entityType = "hole";
//             const holeID = values[2]; //Id of the blast hole
//             const startXLocation = parseFloat(values[3]); //start of the blast hole X value
//             const startYLocation = parseFloat(values[4]); //start of the blast hole Y value
//             const startZLocation = parseFloat(values[5]); //start of the blast hole Z value
//             const endXLocation = parseFloat(values[6]); //end of the blast hole X value
//             const endYLocation = parseFloat(values[7]); //end of the blast hole Y value
//             const endZLocation = parseFloat(values[8]); //end of the blast hole Z value
//             const holeDiameter = parseFloat(values[9]); //diameter of the blast hole
//             const holeType = values[10]; //type of the blast hole
//             const fromHoleID = values[11]; //from hole where the connector tail will be
//             const timingDelayMilliseconds = parseInt(values[12]); //delay from hole to Id of the blast
//             const colourHexDecimal = values[13].replace(/\r$/, ""); //colour of the delay in HEXDECIMALS
//             const measuredLength = 0;
//             const measuredLengthTimeStamp = "09/05/1975 00:00:00";
//             const measuredMass = 0;
//             const measuredMassTimeStamp = "09/05/1975 00:00:00";
//             const measuredComment = "None";
//             const measuredCommentTimeStamp = "09/05/1975 00:00:00";
//             const holeLengthCalculated = Math.pow(Math.pow(startXLocation - endXLocation, 2) + Math.pow(startYLocation - endYLocation, 2) + Math.pow(startZLocation - endZLocation, 2), 0.5); //calc the distance between sx,sy,sz and ex,ey,ez
//             const deltaXAmount = endXLocation - startXLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("X",deltaXAmount);
//             const deltaYAmount = endYLocation - startYLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("Y",deltaYAmount);
//             const deltaZAmount = endZLocation - startZLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("Z",deltaZAmount);
//             const verticalObject = {
//                 x: 0,
//                 y: 0,
//                 z: 1
//             };
//             const dotProduct = deltaXAmount * verticalObject.x + deltaYAmount * verticalObject.y + deltaZAmount * verticalObject.z;
//             const magnitude = Math.sqrt(deltaXAmount * deltaXAmount + deltaYAmount * deltaYAmount + deltaZAmount * deltaZAmount);

//             const epsilon = 1e-10; // A small value to prevent division by zero
//             const normalizedDotProduct = Math.abs(magnitude) < epsilon ? 0 : dotProduct / magnitude;
//             const holeAngle = 180 - Math.acos(normalizedDotProduct) * (180 / Math.PI);

//             const holeBearing = (450 - Math.atan2(deltaYAmount, deltaXAmount) * (180 / Math.PI)) % 360; //bearing in degrees
//             // Need to calculate the XY and Z values for the grade based on the posistion along the hole length. 1st calculte the subdrilllength use the subdrill amount and an the angle of the hole to calculate the length of the subdrill.
//             const subdrillAmount = 0;
//             const subdrillLength = subdrillAmount * Math.cos(holeAngle * (Math.PI / 180));
//             //then use the calcualted hole length minus the subdrill length to calculate the grade x y z position
//             const gradeXLocation = endXLocation - subdrillLength * Math.cos(holeBearing * (Math.PI / 180));
//             const gradeYLocation = endYLocation - subdrillLength * Math.sin(holeBearing * (Math.PI / 180));
//             const gradeZLocation = endZLocation - subdrillAmount;
//             //then use the the start z location - grade z loacation to calculate the bench height
//             const benchHeight = startZLocation - gradeZLocation;

//             if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation) && !isNaN(endXLocation) && !isNaN(endYLocation) && !isNaN(endZLocation) && !isNaN(timingDelayMilliseconds)) {
//                 // check if they are valid numbers
//                 points.push({
//                     entityName,
//                     entityType,
//                     holeID,
//                     startXLocation,
//                     startYLocation,
//                     startZLocation,
//                     endXLocation,
//                     endYLocation,
//                     endZLocation,
//                     gradeXLocation,
//                     gradeYLocation,
//                     gradeZLocation,
//                     subdrillAmount,
//                     subdrillLength,
//                     benchHeight,
//                     holeDiameter,
//                     holeType,
//                     fromHoleID,
//                     timingDelayMilliseconds,
//                     colourHexDecimal,
//                     holeLengthCalculated,
//                     holeAngle,
//                     holeBearing,
//                     measuredLength,
//                     measuredLengthTimeStamp,
//                     measuredMass,
//                     measuredMassTimeStamp,
//                     measuredComment,
//                     measuredCommentTimeStamp
//                 });
//                 minX = Math.min(minX, startXLocation);
//                 minY = Math.min(minY, startYLocation);
//             }
//         } else if (values.length === 12) {
//             // Skip empty lines and lines with fewer than 12 values
//             if (values.length < 12) {
//                 continue;
//             }
//             //files with id, x, y, z, x, y, z, diameter, type, fromHoleID, delay, colour
//             // check if it has the correct number of values
//             const entityName = blastNameValue;
//             const holeID = values[0]; //Id of the blast hole
//             const startXLocation = parseFloat(values[1]); //start of the blast hole X value
//             const startYLocation = parseFloat(values[2]); //start of the blast hole Y value
//             const startZLocation = parseFloat(values[3]); //start of the blast hole Z value
//             const endXLocation = parseFloat(values[4]); //end of the blast hole X value
//             const endYLocation = parseFloat(values[5]); //end of the blast hole Y value
//             const endZLocation = parseFloat(values[6]); //end of the blast hole Z value
//             const holeDiameter = parseFloat(values[7]); //diameter of the blast hole
//             const holeType = values[8]; //type of the blast hole
//             const fromHoleID = values[9].includes(":::") ? values[9] : `${blastNameValue}:::${values[9]}`;
//             //from hole where the connector tail will be
//             const timingDelayMilliseconds = parseInt(values[10]); //delay from hole to Id of the blast
//             const colourHexDecimal = values[11].replace(/\r$/, ""); //colour of the delay in HEXDECIMALS
//             const measuredLength = 0;
//             const measuredLengthTimeStamp = "09/05/1975 00:00:00";
//             const measuredMass = 0;
//             const measuredMassTimeStamp = "09/05/1975 00:00:00";
//             const measuredComment = "None";
//             const measuredCommentTimeStamp = "09/05/1975 00:00:00";
//             const holeLengthCalculated = Math.pow(Math.pow(startXLocation - endXLocation, 2) + Math.pow(startYLocation - endYLocation, 2) + Math.pow(startZLocation - endZLocation, 2), 0.5); //calc the distance between sx,sy,sz and ex,ey,ez
//             const deltaXAmount = endXLocation - startXLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("X",deltaXAmount);
//             const deltaYAmount = endYLocation - startYLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("Y",deltaYAmount);
//             const deltaZAmount = endZLocation - startZLocation; // Calculate the differences between the longitude and latitude of the two points
//             //console.log("Z",deltaZAmount);
//             const verticalObject = {
//                 x: 0,
//                 y: 0,
//                 z: 1
//             };
//             const dotProduct = deltaXAmount * verticalObject.x + deltaYAmount * verticalObject.y + deltaZAmount * verticalObject.z;
//             const magnitude = Math.sqrt(deltaXAmount * deltaXAmount + deltaYAmount * deltaYAmount + deltaZAmount * deltaZAmount);

//             const epsilon = 1e-10; // A small value to prevent division by zero
//             const normalizedDotProduct = Math.abs(magnitude) < epsilon ? 0 : dotProduct / magnitude;
//             const holeAngle = 180 - Math.acos(normalizedDotProduct) * (180 / Math.PI);

//             const holeBearing = (450 - Math.atan2(deltaYAmount, deltaXAmount) * (180 / Math.PI)) % 360; //bearing in degrees
//             // Need to calculate the XY and Z values for the grade based on the posistion along the hole length. 1st calculte the subdrilllength use the subdrill amount and an the angle of the hole to calculate the length of the subdrill.
//             const subdrillAmount = 0;
//             const subdrillLength = subdrillAmount * Math.cos(holeAngle * (Math.PI / 180));
//             //then use the calcualted hole length minus the subdrill length to calculate the grade x y z position
//             const gradeXLocation = endXLocation - subdrillLength * Math.cos(holeBearing * (Math.PI / 180));
//             const gradeYLocation = endYLocation - subdrillLength * Math.sin(holeBearing * (Math.PI / 180));
//             const gradeZLocation = endZLocation - subdrillAmount;
//             //then use the the start z location - grade z loacation to calculate the bench height
//             const benchHeight = startZLocation - gradeZLocation;

//             if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation) && !isNaN(endXLocation) && !isNaN(endYLocation) && !isNaN(endZLocation) && !isNaN(timingDelayMilliseconds)) {
//                 // check if they are valid numbers
//                 points.push({
//                     entityName,
//                     entityType,
//                     holeID,
//                     startXLocation,
//                     startYLocation,
//                     startZLocation,
//                     endXLocation,
//                     endYLocation,
//                     endZLocation,
//                     gradeXLocation,
//                     gradeYLocation,
//                     gradeZLocation,
//                     subdrillAmount,
//                     subdrillLength,
//                     benchHeight,
//                     holeDiameter,
//                     holeType,
//                     fromHoleID,
//                     timingDelayMilliseconds,
//                     colourHexDecimal,
//                     holeLengthCalculated,
//                     holeAngle,
//                     holeBearing,
//                     measuredLength,
//                     measuredLengthTimeStamp,
//                     measuredMass,
//                     measuredMassTimeStamp,
//                     measuredComment,
//                     measuredCommentTimeStamp
//                 });
//                 minX = Math.min(minX, startXLocation);
//                 minY = Math.min(minY, startYLocation);
//             }
//             ////console.log(points);
//         } else if (values.length === 9) {
//             // Skip empty lines and lines with fewer than 9 values
//             if (values.length < 9) {
//                 continue;
//             }
//             //files with id, x, y, z, x, y, z, diameter, type
//             // check if it has the correct number of values
//             const entityName = blastNameValue;
//             const holeID = values[0];
//             const startXLocation = parseFloat(values[1]); //start of the blast hole X value
//             const startYLocation = parseFloat(values[2]); //start of the blast hole Y value
//             const startZLocation = parseFloat(values[3]); //start of the blast hole Z value
//             const endXLocation = parseFloat(values[4]); //end of the blast hole X value
//             const endYLocation = parseFloat(values[5]); //end of the blast hole Y value
//             const endZLocation = parseFloat(values[6]); //end of the blast hole Z value
//             const holeDiameter = parseFloat(values[7]);
//             const holeType = values[8];
//             const holeLengthCalculated = Math.pow(Math.pow(startXLocation - endXLocation, 2) + Math.pow(startYLocation - endYLocation, 2) + Math.pow(startZLocation - endZLocation, 2), 0.5); //calc the distance between sx,sy,sz and ex,ey,ez
//             const deltaXAmount = endXLocation - startXLocation; // Calculate the differences between the longitude and latitude of the two points
//             const deltaYAmount = endYLocation - startYLocation; // Calculate the differences between the longitude and latitude of the two points
//             const deltaZAmount = endZLocation - startZLocation; // Calculate the differences between the longitude and latitude of the two points
//             const verticalObject = {
//                 x: 0,
//                 y: 0,
//                 z: 1
//             };
//             const dotProduct = deltaXAmount * verticalObject.x + deltaYAmount * verticalObject.y + deltaZAmount * verticalObject.z; // Calculate the dot product
//             const magnitude = Math.pow(deltaXAmount * deltaXAmount + deltaYAmount * deltaYAmount + deltaZAmount * deltaZAmount, 0.5); // Calculate the magnitudes of the two vectors
//             const holeAngle = 180 - Math.acos(dotProduct / magnitude) * (180 / Math.PI); //angle in degrees;
//             const holeBearing = (450 - Math.atan2(deltaYAmount, deltaXAmount) * (180 / Math.PI)) % 360; //bearing in degrees
//             // Need to calculate the XY and Z values for the grade based on the posistion along the hole length. 1st calculte the subdrilllength use the subdrill amount and an the angle of the hole to calculate the length of the subdrill.
//             const subdrillAmount = 0;
//             const subdrillLength = subdrillAmount * Math.cos(holeAngle * (Math.PI / 180));
//             //then use the calcualted hole length minus the subdrill length to calculate the grade x y z position
//             const gradeXLocation = endXLocation - subdrillLength * Math.cos(holeBearing * (Math.PI / 180));
//             const gradeYLocation = endYLocation - subdrillLength * Math.sin(holeBearing * (Math.PI / 180));
//             const gradeZLocation = endZLocation - subdrillAmount;
//             //then use the the start z location - grade z loacation to calculate the bench height
//             const benchHeight = startZLocation - gradeZLocation;

//             const fromHoleID = `${blastNameValue}:::${values[0]}`;
//             const timingDelayMilliseconds = 0;
//             const colourHexDecimal = "red";
//             const measuredLength = 0;
//             const measuredLengthTimeStamp = "09/05/1975 00:00:00";
//             const measuredMass = 0;
//             const measuredMassTimeStamp = "09/05/1975 00:00:00";
//             const measuredComment = "None";
//             const measuredCommentTimeStamp = "09/05/1975 00:00:00";
//             if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation) && !isNaN(endXLocation) && !isNaN(endYLocation) && !isNaN(endZLocation)) {
//                 // check if they are valid numbers
//                 points.push({
//                     entityName,
//                     entityType,
//                     holeID,
//                     startXLocation,
//                     startYLocation,
//                     startZLocation,
//                     endXLocation,
//                     endYLocation,
//                     endZLocation,
//                     gradeXLocation,
//                     gradeYLocation,
//                     gradeZLocation,
//                     subdrillAmount,
//                     subdrillLength,
//                     benchHeight,
//                     holeDiameter,
//                     holeType,
//                     fromHoleID,
//                     timingDelayMilliseconds,
//                     colourHexDecimal,
//                     holeLengthCalculated,
//                     holeAngle,
//                     holeBearing,
//                     measuredLength,
//                     measuredLengthTimeStamp,
//                     measuredMass,
//                     measuredMassTimeStamp,
//                     measuredComment,
//                     measuredCommentTimeStamp
//                 });
//                 minX = Math.min(minX, startXLocation);
//                 minY = Math.min(minY, startYLocation);
//             }
//         } else if (values.length === 7) {
//             //files with id, x, y, z, x, y, z
//             // check if it has the correct number of values
//             const entityName = blastNameValue;
//             const holeID = values[0];
//             const startXLocation = parseFloat(values[1]); //start of the blast hole X value
//             const startYLocation = parseFloat(values[2]); //start of the blast hole Y value
//             const startZLocation = parseFloat(values[3]); //start of the blast hole Z value
//             const endXLocation = parseFloat(values[4]); //end of the blast hole X value
//             const endYLocation = parseFloat(values[5]); //end of the blast hole Y value
//             const endZLocation = parseFloat(values[6]); //end of the blast hole Z value
//             const holeDiameter = 0;
//             const holeType = "Undefined";
//             const holeLengthCalculated = Math.pow(Math.pow(startXLocation - endXLocation, 2) + Math.pow(startYLocation - endYLocation, 2) + Math.pow(startZLocation - endZLocation, 2), 0.5); //calc the distance between sx,sy,sz and ex,ey,ez
//             const deltaXAmount = endXLocation - startXLocation; // Calculate the differences between the longitude and latitude of the two points
//             const deltaYAmount = endYLocation - startYLocation; // Calculate the differences between the longitude and latitude of the two points
//             const deltaZAmount = endZLocation - startZLocation; // Calculate the differences between the longitude and latitude of the two points
//             const verticalObject = {
//                 x: 0,
//                 y: 0,
//                 z: 1
//             };
//             const dotProduct = deltaXAmount * verticalObject.x + deltaYAmount * verticalObject.y + deltaZAmount * verticalObject.z; // Calculate the dot product
//             const magnitude = Math.pow(deltaXAmount * deltaXAmount + deltaYAmount * deltaYAmount + deltaZAmount * deltaZAmount, 0.5); // Calculate the magnitudes of the two vectors
//             const holeAngle = 180 - Math.acos(dotProduct / magnitude) * (180 / Math.PI); //angle in degrees;
//             const holeBearing = (450 - Math.atan2(deltaYAmount, deltaXAmount) * (180 / Math.PI)) % 360; //bearing in degrees
//             // Need to calculate the XY and Z values for the grade based on the posistion along the hole length. 1st calculte the subdrilllength use the subdrill amount and an the angle of the hole to calculate the length of the subdrill.
//             const subdrillAmount = 0;
//             const subdrillLength = subdrillAmount * Math.cos(holeAngle * (Math.PI / 180));
//             //then use the calcualted hole length minus the subdrill length to calculate the grade x y z position
//             const gradeXLocation = endXLocation - subdrillLength * Math.cos(holeBearing * (Math.PI / 180));
//             const gradeYLocation = endYLocation - subdrillLength * Math.sin(holeBearing * (Math.PI / 180));
//             const gradeZLocation = endZLocation - subdrillAmount;
//             //then use the the start z location - grade z loacation to calculate the bench height
//             const benchHeight = startZLocation - gradeZLocation;
//             const fromHoleID = `${blastNameValue}:::${values[0]}`;
//             console.log("blastNameValue:", blastNameValue);
//             console.log("values[0]:", values[0]);
//             console.log("fromHoleID:", fromHoleID);
//             const timingDelayMilliseconds = 0;
//             const colourHexDecimal = "red";
//             const measuredLength = 0;
//             const measuredLengthTimeStamp = "09/05/1975 00:00:00";
//             const measuredMass = 0;
//             const measuredMassTimeStamp = "09/05/1975 00:00:00";
//             const measuredComment = "None";
//             const measuredCommentTimeStamp = "09/05/1975 00:00:00";
//             if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation) && !isNaN(endXLocation) && !isNaN(endYLocation) && !isNaN(endZLocation)) {
//                 // check if they are valid numbers
//                 points.push({
//                     entityName,
//                     entityType,
//                     holeID,
//                     startXLocation,
//                     startYLocation,
//                     startZLocation,
//                     endXLocation,
//                     endYLocation,
//                     endZLocation,
//                     gradeXLocation,
//                     gradeYLocation,
//                     gradeZLocation,
//                     subdrillAmount,
//                     subdrillLength,
//                     benchHeight,
//                     holeDiameter,
//                     holeType,
//                     fromHoleID,
//                     timingDelayMilliseconds,
//                     colourHexDecimal,
//                     holeLengthCalculated,
//                     holeAngle,
//                     holeBearing,
//                     measuredLength,
//                     measuredLengthTimeStamp,
//                     measuredMass,
//                     measuredMassTimeStamp,
//                     measuredComment,
//                     measuredCommentTimeStamp
//                 });
//                 minX = Math.min(minX, startXLocation);
//                 minY = Math.min(minY, startYLocation);
//             }
//         }
//         if (values.length === 4) {
//             //files with id, x, y, z
//             // check if it has the correct number of values
//             const entityName = blastNameValue;
//             const holeID = values[0];
//             const startXLocation = parseFloat(values[1]); //start of the blast hole X value
//             const startYLocation = parseFloat(values[2]); //start of the blast hole Y value
//             const startZLocation = parseFloat(values[3]); //start of the blast hole Z value
//             const endXLocation = parseFloat(values[1]); //end of the blast hole X value
//             const endYLocation = parseFloat(values[2]); //end of the blast hole Y value
//             const endZLocation = parseFloat(values[3]); //end of the blast hole Z value
//             const holeDiameter = 0;
//             const holeType = "Undefined";
//             const holeLengthCalculated = 0;
//             const holeAngle = 0;
//             const holeBearing = 0;
//             // Need to calculate the XY and Z values for the grade based on the posistion along the hole length. 1st calculte the subdrilllength use the subdrill amount and an the angle of the hole to calculate the length of the subdrill.
//             const subdrillAmount = 0;
//             const subdrillLength = subdrillAmount * Math.cos(holeAngle * (Math.PI / 180));
//             //then use the calcualted hole length minus the subdrill length to calculate the grade x y z position
//             const gradeXLocation = endXLocation - subdrillLength * Math.cos(holeBearing * (Math.PI / 180));
//             const gradeYLocation = endYLocation - subdrillLength * Math.sin(holeBearing * (Math.PI / 180));
//             const gradeZLocation = endZLocation - subdrillAmount;
//             //then use the the start z location - grade z loacation to calculate the bench height
//             const benchHeight = startZLocation - gradeZLocation;
//             const fromHoleID = `${blastNameValue}:::${values[0]}`;
//             const timingDelayMilliseconds = 0;
//             const colourHexDecimal = "red";
//             const measuredLength = 0;
//             const measuredLengthTimeStamp = "09/05/1975 00:00:00";
//             const measuredMass = 0;
//             const measuredMassTimeStamp = "09/05/1975 00:00:00";
//             const measuredComment = "None";
//             const measuredCommentTimeStamp = "09/05/1975 00:00:00";
//             if (!isNaN(startXLocation) && !isNaN(startYLocation) && !isNaN(startZLocation)) {
//                 // check if they are valid numbers
//                 points.push({
//                     entityName,
//                     entityType,
//                     holeID,
//                     startXLocation,
//                     startYLocation,
//                     startZLocation,
//                     endXLocation,
//                     endYLocation,
//                     endZLocation,
//                     gradeXLocation,
//                     gradeYLocation,
//                     gradeZLocation,
//                     subdrillAmount,
//                     subdrillLength,
//                     benchHeight,
//                     holeDiameter,
//                     holeType,
//                     fromHoleID,
//                     timingDelayMilliseconds,
//                     colourHexDecimal,
//                     holeLengthCalculated,
//                     holeAngle,
//                     holeBearing,
//                     measuredLength,
//                     measuredLengthTimeStamp,
//                     measuredMass,
//                     measuredMassTimeStamp,
//                     measuredComment,
//                     measuredCommentTimeStamp
//                 });
//                 minX = Math.min(minX, startXLocation);
//                 minY = Math.min(minY, startYLocation);
//             }
//             //} else if (localStorage.getItem("kirraDataPoints") !== null) {
//             //return points;
//         }
//     }

//     calculateTimes(points);
//     drawData(points, selectedHole);
//     return points;
// }

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
}

function parseDXFtoKadMaps(dxf) {
    // 1) seed counters so we never collide with existing entries
    var counts = {
        point: kadPointsMap.size,
        line: kadLinesMap.size,
        poly: kadPolygonsMap.size,
        circle: kadCirclesMap.size,
        text: kadTextsMap.size
    };

    // 2) kirra.js centroid offsets
    var offsetX = 0; //centroidX || 0;
    var offsetY = 0; //centroidY || 0;

    // 3) raw DXF colour or bright-red fallback, but return as "#RRGGBB"
    function getColor(idx) {
        // pick the DXF colour (decimal) or default grey
        var dec = idx != null && idx >= 0 ? idx : 0x777777;
        // convert to hex, pad to 6 digits, uppercase if you like
        var hex = dec.toString(16).padStart(6, "0").toUpperCase();
        return "#" + hex;
    }

    // 4) iterate over every entity
    dxf.entities.forEach(function (ent) {
        var t = ent.type.toUpperCase();
        var color = getColor(ent.color);
        // console.log("Entity type:", t, "\nEntity name:", ent.name, "\nColor:", color, "\n\n");

        // POINT or VERTEX
        if (t === "POINT" || t === "VERTEX") {
            var x = (ent.position && ent.position.x != null ? ent.position.x : ent.x) - offsetX;
            var y = (ent.position && ent.position.y != null ? ent.position.y : ent.y) - offsetY;
            var z = (ent.position && ent.position.z != null ? ent.position.z : ent.z) || 0;
            if (x == null || y == null) {
                console.warn("POINT/VERTEX missing coords:", ent);
            } else {
                var name = ent.name || "pointEntity_" + ++counts.point;
                kadPointsMap.set(name, {
                    name: name,
                    entityType: "point",
                    data: [
                        {
                            entityName: name,
                            entityType: "point",
                            pointID: 1,
                            pointXLocation: x,
                            pointYLocation: y,
                            pointZLocation: z,
                            colour: color
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
                var nameI = ent.name || "pointEntity_" + ++counts.point;
                kadPointsMap.set(nameI, {
                    name: nameI,
                    entityType: "point",
                    data: [
                        {
                            entityName: nameI,
                            entityType: "point",
                            pointID: 1,
                            pointXLocation: xi,
                            pointYLocation: yi,
                            pointZLocation: zi,
                            colour: color
                        }
                    ]
                });
            }
        }
        // LINE → always first two vertices
        else if (t === "LINE") {
            var v = ent.vertices;
            if (!v || v.length < 2) {
                console.warn("LINE missing vertices:", ent);
            } else {
                var v0 = v[0],
                    v1 = v[1];
                var nameL = ent.name || "lineEntity_" + ++counts.line;
                kadLinesMap.set(nameL, {
                    name: nameL,
                    entityType: "line",
                    data: [
                        {
                            entityName: nameL,
                            entityType: "line",
                            pointID: 1,
                            pointXLocation: v0.x - offsetX,
                            pointYLocation: v0.y - offsetY,
                            pointZLocation: v0.z || 0,
                            pointXTarget: v1.x - offsetX,
                            pointYTarget: v1.y - offsetY,
                            pointZTarget: v1.z || 0,
                            lineWidth: 1,
                            colour: color
                        }
                    ]
                });
            }
        }
        // LWPOLYLINE or POLYLINE → always polygon
        else if (t === "LWPOLYLINE" || t === "POLYLINE") {
            var verts = ent.vertices || ent.controlPoints || [];
            if (!verts.length) {
                console.warn("POLYLINE missing vertices:", ent);
            } else {
                var nameP = ent.name || "polyEntity_" + ++counts.poly;
                kadPolygonsMap.set(nameP, {
                    name: nameP,
                    entityType: "poly",
                    data: []
                });
                var dataP = kadPolygonsMap.get(nameP).data;
                verts.forEach(function (v, i) {
                    dataP.push({
                        entityName: nameP,
                        entityType: "poly",
                        pointID: i + 1,
                        pointXLocation: v.x - offsetX,
                        pointYLocation: v.y - offsetY,
                        pointZLocation: v.z || 0,
                        lineWidth: 1,
                        colour: color,
                        closed: false
                    });
                });
                // close if flagged
                if (ent.closed || ent.shape) {
                    var v0p = verts[0];
                    dataP.push({
                        entityName: nameP,
                        entityType: "poly",
                        pointID: dataP.length + 1,
                        pointXLocation: v0p.x - offsetX,
                        pointYLocation: v0p.y - offsetY,
                        pointZLocation: v0p.z || 0,
                        lineWidth: 1,
                        colour: color,
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
                var nameC = ent.name || "circleEntity_" + ++counts.circle;
                kadCirclesMap.set(nameC, {
                    name: nameC,
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
                            colour: color
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
                var nameE = ent.name || "polyEntity_" + ++counts.poly;
                kadPolygonsMap.set(nameE, {
                    name: nameE,
                    entityType: "poly",
                    data: []
                });
                var dataE = kadPolygonsMap.get(nameE).data;
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
                        colour: color,
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
                var nameT = ent.name || "textEntity_" + ++counts.text;
                kadTextsMap.set(nameT, {
                    name: nameT,
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
                            colour: color
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

    console.log("Appended to KAD maps:", {
        points: kadPointsMap,
        lines: kadLinesMap,
        polys: kadPolygonsMap,
        circles: kadCirclesMap,
        texts: kadTextsMap
    });
    //console.log("DXF parsed successfully");
    //call drawData and reset the view
    //drawData();
    resetZoom();
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
const kadHolesMap = new Map(); //Not used
const kadPointsMap = new Map();
const kadPolygonsMap = new Map();
const kadLinesMap = new Map();
const kadCirclesMap = new Map();
const kadTextsMap = new Map();

function parseKADFile(fileData) {
    const dataLines = fileData.split("\n");
    let minX = Infinity;
    let minY = Infinity;
    let pointID, pointXLocation, pointYLocation, pointZLocation, text, radius, colour, closed;

    // Parse the kad file data
    for (let i = 0; i < dataLines.length; i++) {
        const row = dataLines[i].split(",");
        const entityName = row[0];
        const entityType = row[1];

        // Parsing logic for different entity types
        switch (entityType) {
            case "point":
                // Create an empty entity object if it doesn't exist
                if (!kadPointsMap.has(entityName)) {
                    kadPointsMap.set(entityName, {
                        entityName: entityName, // Store the entityName
                        entityType: entityType,
                        data: []
                    });
                }
                pointID = row[2]; // Id of the point
                pointXLocation = parseFloat(row[3]); // X value of the point
                pointYLocation = parseFloat(row[4]); // Y value of the point
                pointZLocation = parseFloat(row[5]); // Z value of the point
                colour = row[6].replace(/\r$/, ""); // Colour of the point in HEXDECIMALS
                kadPointsMap.get(entityName).data.push({
                    entityName: entityName,
                    entityType: entityType,
                    pointID: pointID,
                    pointXLocation: pointXLocation,
                    pointYLocation: pointYLocation,
                    pointZLocation: pointZLocation,
                    colour: colour
                });
                break;
            case "poly":
                // Create an empty entity object if it doesn't exist
                if (!kadPolygonsMap.has(entityName)) {
                    kadPolygonsMap.set(entityName, {
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
                colour = row[7].replace(/\r$/, ""); // Colour of the point in HEXDECIMALS
                closed = String(row[8]).trim().toLowerCase() === "true";
                kadPolygonsMap.get(entityName).data.push({
                    entityName: entityName,
                    entityType: entityType,
                    pointID: pointID,
                    pointXLocation: pointXLocation,
                    pointYLocation: pointYLocation,
                    pointZLocation: pointZLocation,
                    lineWidth: lineWidth,
                    colour: colour,
                    closed: closed
                });
                break;
            case "line":
                // Create an empty entity object if it doesn't exist
                if (!kadLinesMap.has(entityName)) {
                    kadLinesMap.set(entityName, {
                        name: entityName, // Store the entityName
                        entityType: entityType,
                        data: []
                    });
                }
                pointID = row[2]; // Id of the point
                pointXLocation = parseFloat(row[3]); // X value of the point
                pointYLocation = parseFloat(row[4]); // Y value of the point
                pointZLocation = parseFloat(row[5]); // Z value of the point
                lineWidth = parseFloat(row[6]); // Width of the line
                colour = row[7].replace(/\r$/, ""); // Colour of the point in HEXDECIMALS
                kadLinesMap.get(entityName).data.push({
                    entityName: entityName,
                    entityType: entityType,
                    pointID: pointID,
                    pointXLocation: pointXLocation,
                    pointYLocation: pointYLocation,
                    pointZLocation: pointZLocation,
                    lineWidth: lineWidth,
                    colour: colour
                });
                break;
            case "circle":
                // Create an empty entity object if it doesn't exist
                if (!kadCirclesMap.has(entityName)) {
                    kadCirclesMap.set(entityName, {
                        name: entityName, // Store the entityName
                        entityType: entityType,
                        data: []
                    });
                }
                pointID = row[2]; // Id of the point
                pointXLocation = parseFloat(row[3]); // X value of the point
                pointYLocation = parseFloat(row[4]); // Y value of the point
                pointZLocation = parseFloat(row[5]); // Z value of the point
                radius = parseFloat(row[6]); // Radius of the circle
                lineWidth = parseFloat(row[7]); // Width of the line
                colour = row[8].replace(/\r$/, ""); // Colour of the point in HEXDECIMALS
                kadCirclesMap.get(entityName).data.push({
                    name: entityName,
                    entityType: entityType,
                    pointID: pointID,
                    pointXLocation: pointXLocation,
                    pointYLocation: pointYLocation,
                    pointZLocation: pointZLocation,
                    radius: radius,
                    lineWidth: lineWidth,
                    colour: colour
                });
                break;
            case "text":
                // Create an empty entity object if it doesn't exist
                if (!kadTextsMap.has(entityName)) {
                    kadTextsMap.set(entityName, {
                        name: entityName, // Store the entityName
                        entityType: entityType,
                        data: []
                    });
                }
                pointID = row[2]; // Id of the point
                pointXLocation = parseFloat(row[3]); // X value of the point
                pointYLocation = parseFloat(row[4]); // Y value of the point
                pointZLocation = parseFloat(row[5]); // Z value of the point
                text = row[6]; // Text Value
                colour = row[7].replace(/\r$/, ""); // Colour of the point in HEXDECIMALS
                kadTextsMap.get(entityName).data.push({
                    name: entityName,
                    entityType: entityType,
                    pointID: pointID,
                    pointXLocation: pointXLocation,
                    pointYLocation: pointYLocation,
                    pointZLocation: pointZLocation,
                    text: text,
                    colour: colour
                });
                break;
            default:
                break;
        }
    }
    //Get all the map X and Y coordinates from all the kadPointsMap, kadLineMap, kadPolygonsMap, kadCirclesMap, kadHolesMap and kadTextsMap data and then calculate the centroidX and centroidY
    let sumX = 0;
    let sumY = 0;
    let count = 0;
    for (let [key, value] of kadPointsMap) {
        for (let i = 0; i < value.data.length; i++) {
            sumX += value.data[i].pointXLocation;
            sumY += value.data[i].pointYLocation;
            count++;
        }
    }
    for (let [key, value] of kadLinesMap) {
        for (let i = 0; i < value.data.length; i++) {
            sumX += value.data[i].pointXLocation;
            sumY += value.data[i].pointYLocation;
            count++;
        }
    }
    for (let [key, value] of kadPolygonsMap) {
        for (let i = 0; i < value.data.length; i++) {
            sumX += value.data[i].pointXLocation;
            sumY += value.data[i].pointYLocation;
            count++;
        }
    }
    for (let [key, value] of kadCirclesMap) {
        for (let i = 0; i < value.data.length; i++) {
            sumX += value.data[i].pointXLocation;
            sumY += value.data[i].pointYLocation;
            count++;
        }
    }
    //KAD Holes NOT USED
    //for (let [key, value] of kadHolesMap) {
    //	for (let i = 0; i < value.data.length; i++) {
    //		sumX += value.data[i].startXLocation;
    //		sumY += value.data[i].startYLocation;
    //		count++;
    //	}
    //}
    for (let [key, value] of kadTextsMap) {
        for (let i = 0; i < value.data.length; i++) {
            sumX += value.data[i].pointXLocation;
            sumY += value.data[i].pointYLocation;
            count++;
        }
    }
    centroidX = sumX / count;
    centroidY = sumY / count;

    console.log(kadPointsMap);
    console.log(kadLinesMap);
    console.log(kadPolygonsMap);
    console.log(kadCirclesMap);
    //console.log(kadHolesMap);
    console.log(kadTextsMap);
}
let mapData = [kadHolesMap, kadPointsMap, kadPolygonsMap, kadLinesMap, kadCirclesMap, kadTextsMap];

function exportKADFile(mapData) {
    // Prepare the CSV content for .kad file
    let csvContentKAD = "";
    let csvContentTXT = "";

    for (const map of mapData) {
        for (const entry of map.entries()) {
            const entityName = entry[0];
            //console.log(entityName);
            const entityData = entry[1];
            //console.log(entityData);

            if (entityData.entityType.trim() === "hole") {
                //commented out to avoid exporting holes
                //console.log(entityData.entityType);
                //for (const hole of entityData.data) {
                //	const csvLine = `${entityName},${hole.entityType},${hole.holeID},${hole.startXLocation},${hole.startYLocation},${hole.startZLocation},${hole.endXLocation},${hole.endYLocation},${hole.endZLocation},${hole.holeDiameter},${hole.holeType},${hole.fromHoleID},${hole.timingDelayMilliseconds},${hole.colourHexDecimal},${hole.holeLengthCalculated},${hole.holeAngle},${hole.holeBearing}\n`;
                //	csvContentKAD += csvLine;
                //}
            } else if (entityData.entityType.trim() === "point") {
                //console.log(entityData.entityType);
                for (const point of entityData.data) {
                    const csvLine = `${entityName},${point.entityType},${point.pointID},${point.pointXLocation},${point.pointYLocation},${point.pointZLocation},${point.colour}\n`;
                    csvContentKAD += csvLine;
                    csvContentTXT += csvLine;
                }
            } else if (entityData.entityType.trim() === "poly") {
                //console.log(entityData.entityType);
                for (let i = 0; i < entityData.data.length; i++) {
                    const polygon = entityData.data[i];
                    const isLast = i === entityData.data.length - 1;
                    const csvLine = `${entityName},${polygon.entityType},${polygon.pointID},${polygon.pointXLocation},${polygon.pointYLocation},${polygon.pointZLocation},${polygon.lineWidth},${polygon.colour},${isLast ? "1" : "0"}\n`;
                    csvContentKAD += csvLine;
                    csvContentTXT += csvLine;
                }
            } else if (entityData.entityType.trim() === "line") {
                //console.log(entityData.entityType);
                for (const entityLine of entityData.data) {
                    const csvLine = `${entityName},${entityLine.entityType},${entityLine.pointID},${entityLine.pointXLocation},${entityLine.pointYLocation},${entityLine.pointZLocation},${entityLine.lineWidth},${entityLine.colour}\n`;
                    csvContentKAD += csvLine;
                    csvContentTXT += csvLine;
                }
            } else if (entityData.entityType.trim() === "circle") {
                //console.log(entityData.entityType);
                for (const circle of entityData.data) {
                    const csvLine = `${entityName},${circle.entityType},${circle.pointID},${circle.pointXLocation},${circle.pointYLocation},${circle.pointZLocation},${circle.radius},${circle.lineWidth},${circle.colour}\n`;
                    csvContentKAD += csvLine;
                    csvContentTXT += csvLine;
                }
            } else if (entityData.entityType.trim() === "text") {
                //console.log(entityData.entityType);
                for (const text of entityData.data) {
                    const csvLine = `${entityName},${text.entityType},${text.pointID},${text.pointXLocation},${text.pointYLocation},${text.pointZLocation},${text.text},${text.colour}\n`;
                    csvContentKAD += csvLine;
                    csvContentTXT += csvLine;
                }
            }
        }
    }
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
    const colour = getJSColourHexDrawing();
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
    const polygon = getRadiiPolygons(points, steps, radius, union, addToMaps, colour, lineWidth, useToeLocation);
    drawData(points, selectedHole); // Redraw to reflect updated values
});

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
 *   - "point": { pointXLocation, pointYLocation, pointZLocation, colour }
 *   - "line": { pointXLocation, pointYLocation, pointZLocation, pointXTarget, pointYTarget, pointZTarget, colour }
 *   - "poly": { pointXLocation, pointYLocation, pointZLocation, colour }
 *   - "circle": { pointXLocation, pointYLocation, pointZLocation, radius, colour }
 *   - "text": { pointXLocation, pointYLocation, pointZLocation, text, colour }
 *
 * @returns {void}
 */
function exportKADDXF() {
    let dxf = "0\nSECTION\n2\nHEADER\n0\nENDSEC\n";
    dxf += "0\nSECTION\n2\nTABLES\n0\nENDSEC\n";
    dxf += "0\nSECTION\n2\nBLOCKS\n0\nENDSEC\n";
    dxf += "0\nSECTION\n2\nENTITIES\n";

    const allMaps = [kadPointsMap, kadLinesMap, kadPolygonsMap, kadCirclesMap, kadTextsMap];

    for (const map of allMaps) {
        for (const [entityName, entityData] of map.entries()) {
            const type = entityData.entityType.trim();
            const data = entityData.data;

            data.forEach((item, index) => {
                //get the first colour of the first point in the item
                let colour = 1;
                colour = typeof item.colour === "string" ? getColorInteger(item.colour) : 1; // default to red if no colour is provided
                if (type === "point") {
                    dxf += "0\nPOINT\n8\n" + entityName + "\n";
                    dxf += "10\n" + item.pointXLocation + "\n20\n" + item.pointYLocation + "\n30\n" + item.pointZLocation + "\n";
                    dxf += "62\n" + colour + "\n";
                } else if (type === "line") {
                    if (index < data.length - 1) {
                        const next = data[index + 1];
                        dxf += "0\nLINE\n8\n" + entityName + "\n";
                        dxf += "10\n" + item.pointXLocation + "\n20\n" + item.pointYLocation + "\n30\n" + item.pointZLocation + "\n";
                        dxf += "11\n" + next.pointXLocation + "\n21\n" + next.pointYLocation + "\n31\n" + next.pointZTarget + "\n";
                        dxf += "62\n" + colour + "\n";
                    }
                } else if (type === "poly") {
                    if (index === 0 && data.length > 1) {
                        dxf += "0\nPOLYLINE\n8\n" + entityName + "\n66\n1\n70\n1\n";
                        dxf += "62\n" + colour + "\n";
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
                    dxf += "62\n" + colour + "\n";
                } else if (type === "text") {
                    dxf += "0\nTEXT\n8\n" + entityName + "\n";
                    dxf += "10\n" + item.pointXLocation + "\n20\n" + item.pointYLocation + "\n30\n" + item.pointZLocation + "\n";
                    dxf += "40\n0.5\n"; // text height
                    dxf += "50\n0.0\n"; // rotation
                    dxf += "1\n" + item.text + "\n";
                    dxf += "62\n" + colour + "\n";
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

// Example usage
//const mapData = [kadHolesMap, kadPointsMap, kadPolygonsMap, kadLinesMap, kadCirclesMap, kadTextsMap];
//exportMapDataCSV(mapData);

function convertPointsTo14ColumnCSV() {
    let csv = "";

    // Add the CSV header if needed
    //const header = "holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,holeDiameter, holeType,fromHoleID,timingDelayMilliseconds,colourHexDecimal,holeLengthCalculated,holeAngle,holeBearing";
    //csv += header + "\n";

    // Iterate over the points array and convert each object to a CSV row
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const row = `${point.entityName},${point.entityType},${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.holeDiameter},${point.holeType},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colourHexDecimal}`; //,${point.holeLengthCalculated},${point.holeAngle},${point.holeBearing}`;
        csv += row + "\n";
    }

    return csv;
}

function convertPointsTo12ColumnCSV() {
    let csv = "";

    // Add the CSV header if needed
    //const header = "holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,holeDiameter, holeType,fromHoleID,timingDelayMilliseconds,colourHexDecimal,holeLengthCalculated,holeAngle,holeBearing";
    //csv += header + "\n";

    // Iterate over the points array and convert each object to a CSV row
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const row = `${point.entityName},${point.entityType},${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.holeDiameter},${point.holeType},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colourHexDecimal}`; //,${point.holeLengthCalculated},${point.holeAngle},${point.holeBearing}`;
        csv += row + "\n";
    }

    return csv;
}

function convertPointsToAllDataCSV() {
    let csv = "";
    /* STRUCTURE OF THE POINTS ARRAY
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
        entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colourHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp
    */
    // Add the CSV header if needed
    const header =
        "entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colourHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp";
    csv += header + "\n";

    // Iterate over the points array and convert each object to a CSV row
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const row = `${point.entityName},${point.entityType},${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.gradeXLocation},${point.gradeYLocation},${point.gradeZLocation},${point.subdrillAmount},${point.subdrillLength},${point.benchHeight},${point.holeDiameter},${point.holeType},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colourHexDecimal},${point.holeLengthCalculated},${point.holeAngle},${point.holeBearing},${point.holeTime},${point.measuredLength},${point.measuredLengthTimeStamp},${point.measuredMass},${point.measuredMassTimeStamp},${point.measuredComment},${point.measuredCommentTimeStamp}`;
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
    console.log("Contour generation completed:");
    console.log("- Total contour lines:", contourLines.length);
    console.log("- Direction arrows:", directionArrows.length);
    console.log("- Cache size:", localAverageCache.size);

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

        // Optional: Log some statistics for debugging
        console.log("Triangulation completed:");
        console.log("- Total triangles generated:", resultTriangles.length);
        console.log("- Cache size:", localAverageCache.size);

        return { resultTriangles, reliefTriangles };
    } catch (err) {
        console.log("Error in delaunayTriangles:", err);
        return { resultTriangles: [], reliefTriangles: [] };
    }
}
//OLD VERSION OF DELTAUNAY TRIANGULATION
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

    const minColour = min;
    const maxColour = max;
    const ratio = Math.min(Math.max((area - minColour) / (maxColour - minColour), 0), 1);

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
    const minColour = min;
    const maxColour = max;
    const ratio = Math.min(Math.max((length - minColour) / (maxColour - minColour), 0), 1);

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
    const minColour = min;
    const maxColour = max;
    const ratio = Math.min(Math.max((holeFiringTime - minColour) / (maxColour - minColour), 0), 1);

    // Lime green: rgb(0, 150, 0), Red: rgb(200, 0, 0)
    const r = Math.round(50 + (255 - 50) * ratio);
    const g = Math.round(255 - 255 * ratio);
    const b = Math.round(50 - 50 * ratio);

    return `rgb(${r},${g},${b})`;
}

function getMassColor(mass, min, max) {
    // Cool to hot: blue (min) -> cyan -> green -> yellow -> red (max)
    const minColour = min;
    const maxColour = max;
    const ratio = Math.min(Math.max((mass - minColour) / (maxColour - minColour), 0), 1);

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
    const minColour = min;
    const maxColour = max;
    const ratio = Math.min(Math.max((volume - minColour) / (maxColour - minColour), 0), 1);

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
 * @param {boolean} addToMaps - If true, adds the generated polygons to the `kadPolygonsMap`.
 * @returns {Array<Array<Object>>} An array of polygons. Each polygon is an array of points, where each point is an object with `x`, `y`, and `z` properties.  Returns an empty array if the Clipper union fails.
 */
function getRadiiPolygons(points, steps, radius, union, addToMaps, colour, lineWidth, useToeLocation) {
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
                kadPolygonsMap.set(entityName, {
                    entityType: "poly",
                    data: polygon.map((pt) => ({
                        entityName: entityName,
                        pointXLocation: pt.x,
                        pointYLocation: pt.y,
                        pointZLocation: pt.z,
                        pointID: "",
                        lineWidth: 5,
                        colour: 1,
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
            kadPolygonsMap.set(entityName, {
                entityType: "poly",
                data: polygon.map((pt) => ({
                    entityName: entityName,
                    pointXLocation: pt.x,
                    pointYLocation: pt.y,
                    pointZLocation: pt.z,
                    pointID: pt.pointID,
                    lineWidth: lineWidth || 5,
                    colour: colour || 1,
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
    //----------------------getRadiiPolygons(points, steps, radius, union, addToMaps, colour, lineWidth, useToeLocation)
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

function drawBlastBoundary(polygon, strokeColour) {
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
    ctx.strokeStyle = strokeColour;
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

function getAverageDistance(points) {
    if (!points || !Array.isArray(points) || points.length < 2) return 1;
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
function drawKADPoints(x, y, z, strokeColour) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.strokeStyle = strokeColour;
    ctx.fillStyle = strokeColour;
    ctx.stroke();
    ctx.fill();
}
//Draws an open polyline from the kadLinesArray
function drawKADLines(sx, sy, ex, ey, sz, ez, lineWidth, strokeColour) {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = strokeColour;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

function drawKADPolys(sx, sy, ex, ey, sz, ez, lineWidth, strokeColour, isClosed) {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = strokeColour;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    if (isClosed) {
        ctx.closePath();
    }
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

//Draws a circle from the kadCirclesArray
function drawKADCircles(x, y, z, radius, lineWidth, strokeColour) {
    ctx.strokeStyle = strokeColour;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    //ctx.fillStyle = fillColour;
    //ctx.fill(); // fill the circle with the fill colour
    ctx.lineWidth = lineWidth;
    ctx.stroke(); // draw the circle border with the stroke colour
}
//Draws text from the kadTextsArray
function drawKADTexts(x, y, z, text, color) {
    ctx.font = parseInt(currentFontSize - 2) + "px Arial";
    ctx.fillStyle = color;

    // Replace "\n" with line breaks
    text = text.replace(/\\n/g, "\n");
    const lines = text.split("\n");

    const lineHeight = parseInt(currentFontSize - 2) + 4;

    lines.forEach((line, index) => {
        if (line.startsWith("=")) {
            try {
                const expression = line.substring(1); // Remove '='
                const calculatedValue = eval(expression);
                ctx.fillText(calculatedValue.toString(), x, y + index * lineHeight);
            } catch (e) {
                ctx.fillText("Error", x, y + index * lineHeight);
            }
        } else {
            ctx.fillText(line, x, y + index * lineHeight);
        }
    });
}

/*** CODE TO DRAW POINTS FROM CSV DATA ***/
function drawTrack(lineStartX, lineStartY, lineEndX, lineEndY, gradeX, gradeY, strokeColour, subdrillAmount) {
    ctx.lineWidth = 1;

    if (subdrillAmount < 0) {
        // NEGATIVE SUBDRILL: Draw only from start to toe (bypass grade)
        // Use 20% opacity for the entire line since it represents "over-drilling"
        ctx.beginPath();
        ctx.strokeStyle = strokeColour;
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
        ctx.strokeStyle = strokeColour; // Dark line (full opacity)
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

function drawHoleToe(x, y, fillColour, strokeColour, radius) {
    ctx.beginPath();
    // Use the toeSizeInMeters directly to set the radius
    ctx.lineWidth = 1;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fillColour;
    ctx.strokeStyle = strokeColour;
    ctx.stroke();
    ctx.fill();
}

function drawHole(x, y, radius, fillColour, strokeColour) {
    ctx.strokeStyle = strokeColour;
    ctx.fillStyle = fillColour;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill(); // fill the circle with the fill colour
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
//draw an square shape with the intersection of the lines at x,y and the length of the lines being the radius of the drawHole function
function drawNoDiameterHole(x, y, sideLength, strokeColour) {
    ctx.strokeStyle = strokeColour;
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

function drawHiHole(x, y, radius, fillColour, strokeColour) {
    ctx.strokeStyle = strokeColour;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fillColour;
    ctx.fill(); // fill the circle with the fill colour
    ctx.lineWidth = 5;
    ctx.stroke(); // draw the circle border with the stroke colour
}

function drawExplosion(x, y, spikes, outerRadius, innerRadius, colour1, colour2) {
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
    ctx.strokeStyle = colour1;
    ctx.stroke();
    ctx.fillStyle = colour2;
    ctx.fill();
}

function drawHexagon(x, y, sideLength, fillColour, strokeColour) {
    ctx.strokeStyle = strokeColour;
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
    ctx.fillStyle = fillColour;
    ctx.fill(); // fill the hexagon with the fill colour
    ctx.lineWidth = 5;
    ctx.stroke(); // draw the hexagon border with the stroke colour
}
// Helper function to draw multiline text
function drawMultilineText(ctx, text, x, y, lineHeight = 16) {
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, y + i * lineHeight);
    }
}
//Left-align the text
function drawText(x, y, text, color) {
    ctx.font = parseInt(currentFontSize - 2) + "px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}
// Right-align the text by calculating the text width
function drawRightAlignedText(x, y, text, color) {
    ctx.font = parseInt(currentFontSize - 2) + "px Arial";
    const textWidth = ctx.measureText(text).width;
    ctx.fillStyle = color;
    // Draw the text at an x position minus the text width for right alignment
    drawText(x - textWidth, y, text, color);
}

function drawDirectionArrow(startX, startY, endX, endY, fillColour, strokeColour, connScale) {
    try {
        // Set up the arrow parameters
        var arrowWidth = (firstMovementSize / 4) * currentScale; // Width of the arrowhead
        var arrowLength = 2 * (firstMovementSize / 4) * currentScale; // Length of the arrowhead
        var tailWidth = arrowWidth * 0.7; // Width of the tail (adjust as needed)
        const angle = Math.atan2(endY - startY, endX - startX); // Angle of the arrow

        // Set the stroke and fill colors
        ctx.strokeStyle = strokeColour; // Stroke color (black outline)
        ctx.fillStyle = fillColour; // Fill color (goldenrod)

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

function drawDelauanySlopeMap(triangles, centroid, strokeColour) {
    if (!triangles || !Array.isArray(triangles) || triangles.length === 0) return;
    ctx.strokeStyle = strokeColour;
    ctx.fillStyle = fillColour;
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
        let triangleFillColour;
        if (maxSlopeAngle >= 0 && maxSlopeAngle < 5) {
            // Cornflower blue for angles in the range [0, 4)
            triangleFillColour = "rgb(51, 139, 255)";
        } else if (maxSlopeAngle >= 5 && maxSlopeAngle < 7) {
            // Green for angles in the range [7, 10]
            triangleFillColour = "rgb(0, 102, 204)";
        } else if (maxSlopeAngle >= 7 && maxSlopeAngle < 9) {
            // Green for angles in the range [7, 10]
            triangleFillColour = "rgb(0, 204, 204)";
        } else if (maxSlopeAngle >= 9 && maxSlopeAngle < 12) {
            // Green for angles in the range [7, 10]
            triangleFillColour = "rgb(102, 204, 0)";
        } else if (maxSlopeAngle >= 12 && maxSlopeAngle < 15) {
            // Green for angles in the range [7, 10]
            triangleFillColour = "rgb(204, 204, 0)";
        } else if (maxSlopeAngle >= 15 && maxSlopeAngle < 17) {
            // Green for angles in the range [7, 10]
            triangleFillColour = "rgb(255, 128, 0)";
        } else if (maxSlopeAngle >= 17 && maxSlopeAngle < 20) {
            // Green for angles in the range [7, 10]
            triangleFillColour = "rgb(255, 0, 0)";
        } else {
            // Default to grey for all other angles
            triangleFillColour = "rgb(153, 0, 76)";
        }

        // Combine the calculated RGB values into the final fill color
        // triangleFillColour = `rgb(${r}, ${g}, ${b})`;
        const triangleStrokeColor = `rgb(${r}, ${g}, ${b})`;
        // Invert the color by subtracting each channel value from 255
        const invertedColour = `rgb(${ir}, ${ig}, ${ib})`;

        ctx.strokeStyle = triangleStrokeColor;
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
    }
}
function drawDelauanyBurdenRelief(triangles, centroid, strokeColour) {
    if (!triangles || !Array.isArray(triangles) || triangles.length === 0) return;
    ctx.strokeStyle = strokeColour;
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
        let triangleFillColour;
        if (burdenRelief < 4) {
            triangleFillColour = "rgb(75, 20, 20)"; // fast
        } else if (burdenRelief < 7) {
            triangleFillColour = "rgb(255, 40, 40)";
        } else if (burdenRelief < 10) {
            triangleFillColour = "rgb(255, 120, 50)"; //
        } else if (burdenRelief < 13) {
            triangleFillColour = "rgb(255, 255, 50)"; //
        } else if (burdenRelief < 16) {
            triangleFillColour = "rgb(50, 255, 70)"; //
        } else if (burdenRelief < 19) {
            triangleFillColour = "rgb(50, 255, 200)"; //
        } else if (burdenRelief < 22) {
            triangleFillColour = "rgb(50, 230, 255)"; //
        } else if (burdenRelief < 25) {
            triangleFillColour = "rgb(50, 180, 255)"; //
        } else if (burdenRelief < 30) {
            triangleFillColour = "rgb(50, 100, 255)"; //
        } else if (burdenRelief < 40) {
            triangleFillColour = "rgb(50, 0, 255)"; //
        } else {
            triangleFillColour = "rgb(75, 0, 150)"; // slow
        }

        ctx.fillStyle = triangleFillColour;

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
function drawReliefLegend(strokecolour) {
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
    ctx.font = "14px Arial";
    ctx.fillStyle = strokecolour;
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

function drawTriangleAngleText(triangle, centroid, strokeColour) {
    if (!triangle || !Array.isArray(triangle) || triangle.length !== 3) return;
    const triangleCentroid = calculateTriangleCentroid(triangle);
    let maxSlopeAngle = getDipAngle(triangle);
    drawText((triangleCentroid.x - centroid.x) * currentScale + canvas.width / 2, (-triangleCentroid.y + centroid.y) * currentScale + canvas.height / 2, parseFloat(maxSlopeAngle).toFixed(1), strokeColour);
}

function drawTriangleBurdenReliefText(triangle, centroid, strokeColour) {
    if (!triangle || !Array.isArray(triangle) || triangle.length !== 3) return;
    const triangleCentroid = calculateTriangleCentroid(triangle);
    let burdenRelief = getBurdenRelief(triangle);
    drawText((triangleCentroid.x - centroid.x) * currentScale + canvas.width / 2, (-triangleCentroid.y + centroid.y) * currentScale + canvas.height / 2, parseFloat(burdenRelief).toFixed(1), strokeColour);
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
    if (!selectionMode && !isMoveToolActive) {
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
    } else if (!selectionMode && isMeasureRecording) {
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
    } else if (!selectionMode && (isSelectionPointerActive || isPolygonSelectionActive || isHoleEditing || isLengthPopupEditing || isDeletingHole || isBlastNameEditing || isBearingToolActive || isMoveToolActive)) {
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
                const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
                const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);
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
    if (!selectionMode) {
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

    if (selectionMode && (isHoleEditing || isPolygonSelectionActive || isSelectionPointerActive || isDeletingHole || isBlastNameEditing)) {
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

function getJSColourHex() {
    const colourElement = document.getElementById("connectorColour");
    // Get the JSColor instance from the element
    const jsColorInstance = colourElement.jscolor;
    // Get the color value
    const colourHex = jsColorInstance.toHEXString(); // This will get the color in HEX format, e.g., "#FF0000"
    return colourHex;
}
function getJSColourHexDrawing() {
    const colourElement = document.getElementById("drawingColour");
    // Get the JSColor instance from the element
    const jsColorInstance = colourElement.jscolor;
    // Get the color value
    const colourHex = jsColorInstance.toHEXString(); // This will get the color in HEX format, e.g., "#FF0000"
    return colourHex;
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
                const delay = parseInt(document.getElementById("delay").value);
                const clickedHoleIndex = points.findIndex((point) => point === clickedHole);

                if (clickedHoleIndex !== -1) {
                    // Use the new combined format for fromHoleID
                    points[clickedHoleIndex].fromHoleID = `${fromHoleStore.entityName}:::${fromHoleStore.holeID}`;
                    points[clickedHoleIndex].timingDelayMilliseconds = delay;
                    points[clickedHoleIndex].colourHexDecimal = getJSColourHex();
                }
                fromHoleStore = null;
                const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

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

                const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

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
            points[pointIndex].timingDelayMilliseconds = parseInt(document.getElementById("delay").value);
            points[pointIndex].colourHexDecimal = getJSColourHex();
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
    worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
    worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;

    if (isDeletingPoint) {
        selectedPoint = getClickedPointInMap(kadPointsMap, clickX, clickY);
        drawData(points, selectedHole);
        return selectedPoint;
    }
    if (isDeletingLine) {
        selectedPoint = getClickedPointInMap(kadLinesMap, clickX, clickY);
        drawData(points, selectedHole);
        return selectedPoint;
    }
    if (isDeletingPoly) {
        selectedPoint = getClickedPointInMap(kadPolygonsMap, clickX, clickY);
        drawData(points, selectedHole);
        return selectedPoint;
    }
    if (isDeletingText) {
        selectedPoint = getClickedPointInMap(kadTextsMap, clickX, clickY);
        drawData(points, selectedHole);
        return selectedPoint;
    }
    if (isDeletingCircle) {
        selectedPoint = getClickedPointInMap(kadCirclesMap, clickX, clickY);
        drawData(points, selectedHole);
        return selectedPoint;
    }
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
                colour: point.colour
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
                        colour: point.colour
                    });
                }
            }

            prevPoint = point;
        }

        // Add the new entity to the appropriate map (line or poly)
        if (entityType === "poly") {
            kadPolygonsMap.set(newEntity.entityName, newEntity);
        } else if (entityType === "line") {
            kadLinesMap.set(newEntity.entityName, newEntity);
        }

        // Redraw the canvas or perform any other necessary updates
        drawData(points, selectedHole);

        // Return the newly created entity if needed
        return newEntity;
    }
}

function deleteSelectedPoint() {
    if (selectedPoint) {
        if (isDeletingPoint) {
            deletePointInMap(kadPointsMap, selectedPoint);
        } else if (isDeletingLine) {
            deletePointInMap(kadLinesMap, selectedPoint);
        } else if (isDeletingPoly) {
            deletePointInMap(kadPolygonsMap, selectedPoint);
        } else if (isDeletingText) {
            deletePointInMap(kadTextsMap, selectedPoint);
        } else if (isDeletingCircle) {
            deletePointInMap(kadCirclesMap, selectedPoint);
        }
    }
}

function deleteSelectedObject() {
    if (selectedPoint) {
        if (isDeletingPoint) {
            deleteObjectInMap(kadPointsMap, selectedPoint);
        } else if (isDeletingLine) {
            deleteObjectInMap(kadLinesMap, selectedPoint);
        } else if (isDeletingPoly) {
            deleteObjectInMap(kadPolygonsMap, selectedPoint);
        } else if (isDeletingText) {
            deleteObjectInMap(kadTextsMap, selectedPoint);
        } else if (isDeletingCircle) {
            deleteObjectInMap(kadCirclesMap, selectedPoint);
        }
    }
}

function deleteSelectedAll() {
    if (selectedPoint) {
        if (isDeletingPoint) {
            deleteAllInMap(kadPointsMap);
        } else if (isDeletingLine) {
            deleteAllInMap(kadLinesMap);
        } else if (isDeletingPoly) {
            deleteAllInMap(kadPolygonsMap);
        } else if (isDeletingText) {
            deleteAllInMap(kadTextsMap);
        } else if (isDeletingCircle) {
            deleteAllInMap(kadCirclesMap);
        }
    }
}

function deletePointInMap(map, pointToDelete) {
    for (const [entityName, entity] of map) {
        const dataIndex = entity.data.findIndex((point) => {
            return point.pointID === pointToDelete.pointID && point.entityName === entityName && point.pointXLocation === pointToDelete.pointXLocation && point.pointYLocation === pointToDelete.pointYLocation;
        });

        if (dataIndex !== -1) {
            entity.data.splice(dataIndex, 1);
            drawData(points, selectedHole);
            selectedPoint = null;
            break;
        }
    }
    drawData(points, selectedHole);
}

function deleteObjectInMap(map, pointToDelete) {
    for (const [entityName, entity] of map) {
        if (entity.data.includes(pointToDelete)) {
            // Delete the entire entity
            map.delete(entityName);
            drawData(points, selectedHole);
            selectedPoint = null;
            break;
        } else {
            drawData(points, selectedHole);
        }
    }
    drawData(points, selectedHole);
}

function deleteAllInMap(map) {
    map.clear();
    selectedPoint = null;
    drawData(points, selectedHole);
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
                    console.log("Deleting Hole ID:", point.holeID, "in:", point.entityName);
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
            console.log("Processing deletion for single Hole ID:", selectedHole.holeID, "in:", selectedHole.entityName);
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
                    console.log("Renumbering for Entity:", entityName, "starting at:", deleteRenumberStart);
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
                    delete kadHolesMap.delete(entityName);
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
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

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
    if (isDeletingHole) {
        if (selectedHole !== null) {
            // Remove all holes from kadHolesMap
            kadHolesMap.clear();

            // Remove all holes from the points array
            points = [];

            // Reset the selected holeID
            selectedHole = null;
            // Reset the fromHoleStore
            fromHoleStore = null;
            // Recalculate contour lines
            const { resultTriangles, reliefTriangles } = delaunayTriangles(points, maxEdgeLength); // Recalculate triangles
            calculateTimes(points);
            const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

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

        if (clickedHole && !selectionMode) {
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
        if (multipleClickedHoles.length > 0 && selectionMode) {
            selectedMultipleHoles = [...multipleClickedHoles]; // Update the selection
            drawData(points, selectedHole); // You might need to modify this function to handle multiple selected holes
        }
    }
}

function renumberHolesFunction(startNumber, selectedEntityName) {
    console.log("Renumbering holes for Entity:", selectedEntityName);

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
        worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
        worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;
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
        worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
        worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;
        addKADPoint();
    } else {
        worldX = null;
        worldY = null;
    }
}

// Function to add a point to the kadPointsMap
function addKADPoint() {
    if (isDrawingPoint) {
        // Create a new point object or use the existing one
        const entityType = "point";
        const pointID = kadPointsMap.has(entityName) ? kadPointsMap.get(entityName).data.length + 1 : 1;
        const pointXLocation = worldX;
        const pointYLocation = worldY;
        const pointZLocation = document.getElementById("drawingElevation").value;
        const colour = getJSColourHexDrawing();

        if (createNewEntity) {
            entityName = "pointObject" + (kadPointsMap.size + 1);
            createNewEntity = false; // Set the flag to false after creating a new entity
        }

        const pointObject = {
            entityName: entityName, //0
            entityType: entityType, //1
            pointID: pointID, //2
            pointXLocation: pointXLocation, //3
            pointYLocation: pointYLocation, //4
            pointZLocation: pointZLocation, //5
            colour: colour //6
        };

        // Add the point to kadPointsMap
        if (!kadPointsMap.has(entityName)) {
            kadPointsMap.set(entityName, {
                name: entityName,
                entityType: entityType,
                data: []
            });
        }
        kadPointsMap.get(entityName).data.push(pointObject);
    }
    drawData(points, selectedHole);
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
        worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
        worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;
        addKADLine();
    } else {
        worldX = null;
        worldY = null;
    }
}
// Function to add a point to the kadPointsMap
function addKADLine() {
    if (isDrawingLine) {
        // Create a new point object or use the existing one
        const entityType = "line";
        const pointID = kadLinesMap.has(entityName) ? kadLinesMap.get(entityName).data.length + 1 : 1;
        const pointXLocation = worldX;
        const pointYLocation = worldY;
        const pointZLocation = document.getElementById("drawingElevation").value;
        const lineWidth = document.getElementById("drawingLineWidth").value;
        const colour = getJSColourHexDrawing();

        if (createNewEntity) {
            entityName = "lineObject" + (kadLinesMap.size + 1);
            createNewEntity = false; // Set the flag to false after creating a new entity
        }

        const lineObject = {
            entityName: entityName,
            entityType: entityType,
            pointID: pointID,
            pointXLocation: pointXLocation,
            pointYLocation: pointYLocation,
            pointZLocation: pointZLocation,
            lineWidth: lineWidth,
            colour: colour
        };

        // Add the point to kadPointsMap
        if (!kadLinesMap.has(entityName)) {
            kadLinesMap.set(entityName, {
                name: entityName,
                entityType: entityType,
                data: []
            });
        }
        kadLinesMap.get(entityName).data.push(lineObject);
    }
    drawData(points, selectedHole);
    console.log("kadLinesMap: ", kadLinesMap);
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
        worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
        worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;
        addKADPoly();
    } else {
        worldX = null;
        worldY = null;
    }
}
// Function to add a point to the kadPointsMap
function addKADPoly() {
    if (isDrawingPoly) {
        // Create a new point object or use the existing one
        const entityType = "poly";
        const pointID = kadPolygonsMap.has(entityName) ? kadPolygonsMap.get(entityName).data.length + 1 : 1;
        const pointXLocation = worldX;
        const pointYLocation = worldY;
        const pointZLocation = document.getElementById("drawingElevation").value;
        const lineWidth = document.getElementById("drawingLineWidth").value;
        const colour = getJSColourHexDrawing();
        const closed = true; // Default to closed polygon

        if (createNewEntity) {
            entityName = "polyObject" + (kadPolygonsMap.size + 1);
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
            colour: colour,
            closed: closed // Set to true if the polygon is closed
        };

        // Add the point to kadPointsMap
        if (!kadPolygonsMap.has(entityName)) {
            kadPolygonsMap.set(entityName, {
                name: entityName,
                entityType: entityType,
                data: []
            });
        }
        kadPolygonsMap.get(entityName).data.push(polyObject);
    }
    drawData(points, selectedHole);
    console.log("kadPolygonsMap: ", kadPolygonsMap);
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
        worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
        worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;
        addKADCircle();
    } else {
        worldX = null;
        worldY = null;
    }
}
// Function to add a point to the kadPointsMap
function addKADCircle() {
    if (isDrawingCircle) {
        // Create a new point object or use the existing one
        const entityType = "circle";
        const pointID = kadCirclesMap.has(entityName) ? kadCirclesMap.get(entityName).data.length + 1 : 1;
        const pointXLocation = worldX;
        const pointYLocation = worldY;
        const pointZLocation = document.getElementById("drawingElevation").value;
        const radius = document.getElementById("drawingRadius").value;
        const lineWidth = document.getElementById("drawingLineWidth").value;
        const colour = getJSColourHexDrawing();
        //console.log("pointColour: " + colour);

        if (createNewEntity) {
            entityName = "circleObject" + (kadCirclesMap.size + 1);
            createNewEntity = false; // Set the flag to false after creating a new entity
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
            colour: colour
        };

        // Add the point to kadPointsMap
        if (!kadCirclesMap.has(entityName)) {
            kadCirclesMap.set(entityName, {
                name: entityName,
                entityType: entityType,
                data: []
            });
        }
        kadCirclesMap.get(entityName).data.push(circleObject);
    }
    drawData(points, selectedHole);
    console.log("kadCirclesMap: ", kadCirclesMap);
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
        worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
        worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;
        addKADText();
    } else {
        worldX = null;
        worldY = null;
    }
}

// Function to add a point to the kadPointsMap
function addKADText() {
    if (isDrawingText) {
        // Create a new point object or use the existing one
        const entityType = "text";
        const pointID = kadTextsMap.has(entityName) ? kadTextsMap.get(entityName).data.length + 1 : 1;
        const pointXLocation = worldX;
        const pointYLocation = worldY;
        const pointZLocation = document.getElementById("drawingElevation").value;
        let text = document.getElementById("drawingText").value;
        const colour = getJSColourHexDrawing();
        //console.log("pointColour: " + colour);

        // Escape double quotes in string literals
        text = text.replace(/"/g, '"');

        if (createNewEntity) {
            entityName = "textObject" + (kadTextsMap.size + 1);
            createNewEntity = false; // Set the flag to false after creating a new entity
        }

        const textObject = {
            entityName: entityName,
            entityType: entityType,
            pointID: pointID,
            pointXLocation: pointXLocation,
            pointYLocation: pointYLocation,
            pointZLocation: pointZLocation,
            text: text,
            colour: colour
        };

        // Add the point to kadPointsMap
        if (!kadTextsMap.has(entityName)) {
            kadTextsMap.set(entityName, {
                name: entityName,
                entityType: entityType,
                data: []
            });
        }
        kadTextsMap.get(entityName).data.push(textObject);
    }
    drawData(points, selectedHole);
    console.log("kadTextsMap: ", kadTextsMap);
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
function addHolePopup() {
    //Retrieve the last enteredvalues from local storage
    let savedAddHolePopupSettings = JSON.parse(localStorage.getItem("savedAddHolePopupSettings")) || {};
    let lastValues = {
        blastName: savedAddHolePopupSettings.blastName || blastNameValue,
        useCustomHoleID: savedAddHolePopupSettings.useCustomHoleID || false,
        customHoleID: savedAddHolePopupSettings.customHoleID || "",
        elevation: savedAddHolePopupSettings.elevation || 0,
        diameter: savedAddHolePopupSettings.diameter || 115,
        type: savedAddHolePopupSettings.type || "Production",
        length: savedAddHolePopupSettings.length || 0,
        subdrill: savedAddHolePopupSettings.subdrill || 0,
        angle: savedAddHolePopupSettings.angle || 0,
        bearing: savedAddHolePopupSettings.bearing || 0
    };

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
		  	<label class="labelWhite18" for="customHoleID">Hole ID</label>
		  	<input type="text3" id="customHoleID" placeholder="Custom Hole ID" value="${lastValues.customHoleID}" />
		  	<label class="labelWhite18" for="elevation">Start Z</label>
		  	<input type="number3" id="elevation" placeholder="Elevation" value="${lastValues.elevation}" inputmode="decimal" pattern="[0-9]*"/>
			<label class="labelWhite18" for="diameter">Diameter</label>
			<input type="number3" id="diameter" name="diameter" placeholder="Diameter" value="${lastValues.diameter}" step=1 min="0" max="1000" inputmode="decimal" pattern="[0-9]*"/>
			<label class="labelWhite18" for="type">Type</label>
			<input type="text3" id="type" name="type" placeholder="Type" value="${lastValues.type}"/>
		  	<label class="labelWhite18" for="length">Length</label>
		  	<input type="number3" id="length" placeholder="Length" value="${lastValues.length}" inputmode="decimal" pattern="[0-9]*"/>
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
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const useCustomHoleID = document.getElementById("useCustomHoleID").checked;
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
                    icon: "error"
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
                    icon: "error"
                });
                return; // Exit the function
            }
            const elevationInput = document.getElementById("elevation");
            const elevationValue = parseFloat(elevationInput.value);
            if (isNaN(elevationValue) || elevationValue < -2000 || elevationValue > 8000) {
                // Show an alert to the user
                Swal.fire({
                    title: "Invalid Elevation",
                    text: "Please enter an elevation between -2000 and 8000 meters.",
                    icon: "error"
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
                    icon: "error"
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
                    icon: "error"
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
                    icon: "error"
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
                    icon: "error"
                });
                return; // Exit the function
            }

            lastValues = {
                blastName: blastNameValue,
                useCustomHoleID: useCustomHoleID,
                customHoleID: customHoleID,
                elevation: elevationValue,
                diameter: diameterValue,
                type: typeValue,
                length: lengthValue,
                subdrill: subdrillValue,
                angle: angleValue,
                bearing: bearingValue
            };
            localStorage.setItem("savedAddHolePopupSettings", JSON.stringify(lastValues));

            //create a new hole
            addHole(useCustomHoleID, blastNameValue, customHoleID, worldX, worldY, elevationValue, diameterValue, typeValue, lengthValue, subdrillValue, angleValue, bearingValue);
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
        worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
        worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;
        addPatternPopup(parseFloat(worldX.toFixed(3)), parseFloat(worldY.toFixed(3)));
        //console.log("worldX: " + worldX + " worldY: " + worldY);
    } else {
        worldX = null;
        worldY = null;
    }
}

// Using SweetAlert Library Create a popup that gets input from the user.
function addPatternPopup(worldX, worldY) {
    //Retrieve the last enteredvalues from local storage
    let savedAddPatternPopupSettings = JSON.parse(localStorage.getItem("savedAddPatternPopupSettings")) || {};
    let lastValues = {
        blastName: savedAddPatternPopupSettings.blastName || blastNameValue,
        nameTypeIsNumerical: savedAddPatternPopupSettings.nameTypeIsNumerical || true,
        rowOrientation: savedAddPatternPopupSettings.rowOrientation || 90.0,
        x: savedAddPatternPopupSettings.x || worldX,
        y: savedAddPatternPopupSettings.y || worldY,
        z: savedAddPatternPopupSettings.z || 100,
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

    //${lastValues.}
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
		  <label class="labelWhite18" for="diameter">Diameter</label>
		  <input type="number3" id="diameter" name="diameter" placeholder="Diameter" value="${lastValues.diameter}" step=1 min="0" max="1000" inputmode="decimal" pattern="[0-9]*"/>
		  <label class="labelWhite18" for="type">Type</label>
		  <input type="text3" id="type" name="type" placeholder="Type" value="${lastValues.type}"/>
		  <label class="labelWhite18" for="angle">Angle</label>
		  <input type="number3" id="angle" name="angle" placeholder="Angle" value="${lastValues.angle}" step="1" min="0" max="60" inputmode="decimal" pattern="[0-9]*"/>
		  <label class="labelWhite18" for="bearing">Bearing</label>
		  <input type="number3" id="bearing" name="bearing" placeholder="Bearing" value="${lastValues.bearing}" value="0.0" step=0.1 min="0" max="359.999" inputmode="decimal" pattern="[0-9]*"/>
		  <label class="labelWhite18" for="length">Length</label>
		  <input type="number3" id="length" name="length" placeholder="Length" value="${lastValues.length}" step="0.1" min="0.0" max="200" inputmode="decimal" pattern="[0-9]*"/>
		  <label class="labelWhite18" for="subdrill">Subdrill</label>
		  <input type="number3" id="subdrill" name="subdrill" placeholder="Subdrill" value="${lastValues.subdrill}" step="0.1" min="0.0" max="100" inputmode="decimal" pattern="[0-9]*"/>
		  <label class="labelWhite18" for="spacingOffset">Offset</label>
		  <input type="number3" id="spacingOffset" name="spacingOffset" placeholder="SpacingOffset" value="${lastValues.spacingOffset}" step="0.1" min="-1.0" max="1.0" inputmode="decimal" pattern="[0-9]*"/>
		  <div class="labelWhite12"  id="infolabel1" name="infolabel1">Offset Information: </div> 
		  <div class="labelWhite12"  id="infolabel2" name="infolabel2">Staggered = -0.5 or 0.5, Square = -1, 0, 1</div> 
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
        }
    })
        .then((result) => {
            if (result.isConfirmed) {
                // Retrieve values from the input fields
                const entityName = document.getElementById("blastName").value;

                const offset = document.getElementById("spacingOffset").value;
                const nameTypeIsNumerical = document.getElementById("nameTypeIsNumerical").checked;
                const rowOrientation = parseFloat(document.getElementById("rowOrientation").value);
                const x = parseFloat(document.getElementById("x").value);
                const y = parseFloat(document.getElementById("y").value);
                const z = parseFloat(document.getElementById("z").value);
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

                //entityName checks
                if (entityName === null || entityName === "") {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Blast Name",
                        text: "Please enter a Blast Name.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //offset checks
                if (isNaN(offset) || offset < -1 || offset > 1) {
                    //show alert to user
                    Swal.fire({
                        title: "Invalid Offset",
                        text: "Please enter an offset between -1 and 1.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //nameTypeIsNumerical checks
                if (nameTypeIsNumerical === null || nameTypeIsNumerical === "") {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Name Type",
                        text: "Please enter a Name Type.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //rowOrientation checks
                if (isNaN(rowOrientation) || rowOrientation < 0 || rowOrientation > 359.999) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Row Orientation",
                        text: "Please enter a row orientation between 0 and 359.999 degrees.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //x checks
                if (isNaN(x)) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid X",
                        text: "Please enter an X value in meters.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //y checks
                if (isNaN(y)) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Y",
                        text: "Please enter an Y value in meters.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //z checks
                if (isNaN(z)) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Z",
                        text: "Please enter an Z value in meters.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //diameter checks
                if (isNaN(diameter) || diameter < 0 || diameter > 1000) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Diameter",
                        text: "Please enter an diameter between 0 and 1000 millimeters.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //type checks which is only text
                if (type === null || type === "") {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Type",
                        text: "Please enter a Type.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //angle checks
                if (isNaN(angle) || angle < 0 || angle > 60) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Angle",
                        text: "Please enter an angle between 0 and 60 degrees.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //bearing checks
                if (isNaN(bearing) || bearing < 0 || bearing > 360) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Bearing",
                        text: "Please enter an bearing between 0 and 360 degrees.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //length checks
                if (isNaN(length) || length < 0 || length > 200) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Length",
                        text: "Please enter an length between 0 and 200 meters.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //subdrill checks
                if (isNaN(subdrill) || subdrill < -50 || subdrill > 50) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Subdrill",
                        text: "Please enter an subdrill between -50 and 50 meters.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //burden checks
                if (isNaN(burden) || burden < 0.1 || burden > 50) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Burden",
                        text: "Please enter an burden between 0.1 and 50 meters.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //spacing checks
                if (isNaN(spacing) || spacing < 0.1 || spacing > 50) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Spacing",
                        text: "Please enter an spacing between 0.1 and 50 meters.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //rows checksq
                if (isNaN(rows) || rows < 1 || rows > 500) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Rows",
                        text: "Please enter an rows between 1 and 500.",
                        icon: "error"
                    });
                    return; // Exit the function
                }
                //holesPerRow checks
                if (isNaN(holesPerRow) || holesPerRow < 1 || holesPerRow > 500) {
                    // Show an alert to the user
                    Swal.fire({
                        title: "Invalid Holes Per Row",
                        text: "Please enter an holes per row between 1 and 500.",
                        icon: "error"
                    });
                    return; // Exit the function
                }

                lastValues = {
                    blastName: entityName,
                    offset: offset,
                    nameTypeIsNumerical: nameTypeIsNumerical,
                    rowOrientation: rowOrientation,
                    x: x,
                    y: y,
                    z: z,
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
                addPattern(offset, entityName, nameTypeIsNumerical, rowOrientation, x, y, z, diameter, type, angle, bearing, length, subdrill, burden, spacing, rows, holesPerRow);
            } else {
                // Handle cancel action if needed
            }
        })
        .finally(() => {
            // Hide the loading spinner when the popup is closed
            Swal.hideLoading();
        });
}

function addPattern(offset, entityName, nameTypeIsNumerical, rowOrientation, x, y, z, diameter, type, angle, bearing, length, subdrill, burden, spacing, rows, holesPerRow) {
    let entityType = "hole";
    let startXLocation = parseFloat(x);
    let startYLocation = parseFloat(y);
    let startZLocation = parseFloat(z);
    let holeLength = parseFloat(length);
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

    let currentLetter = "A"; // Initialize the current letter
    let currentRow = 1; // Initialize the current row number

    for (let i = 0; i < patternrows; i++) {
        for (let j = 0; j < patternholesPerRow; j++) {
            // Translate to the origin
            const translatedX = startXLocation - x;
            const translatedY = startYLocation - y;

            // Calculate the rotated position based on rowOrientation
            const rotatedX = translatedX * Math.cos(patternrowOrientation) - translatedY * Math.sin(patternrowOrientation);
            const rotatedY = translatedX * Math.sin(patternrowOrientation) + translatedY * Math.cos(patternrowOrientation);

            // Translate back to the original position
            const finalX = rotatedX + x;
            const finalY = rotatedY + y;

            let holeID;
            // Initialize points as an empty array if it's null
            if (points === null) {
                points = [];
            }

            if (patternnameTypeIsNumerical) {
                holeID = currentLetter + currentRow; // Generate the hole ID
                addHole(true, entityName, points.length + 1, parseFloat(finalX), parseFloat(finalY), parseFloat(startZLocation), parseFloat(holeDiameter), holeType, parseFloat(holeLength), parseFloat(subdrillAmount), parseFloat(holeAngle), parseFloat(holeBearing), holeID);
            } else {
                holeID = currentLetter + (j + 1); // Generate the hole ID
                addHole(true, entityName, holeID, parseFloat(finalX), parseFloat(finalY), parseFloat(startZLocation), parseFloat(holeDiameter), holeType, parseFloat(holeLength), parseFloat(subdrillAmount), parseFloat(holeAngle), parseFloat(holeBearing));
            }
            startXLocation = startXLocation + patternspacing;
        }

        // Apply the offset conditionally for every second row
        if (i % 2 === 0) {
            startXLocation = x + patternoffset * patternspacing;
        } else {
            startXLocation = x;
        }

        startYLocation = startYLocation + patternburden;

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
			<label class="labelWhite18" for="allHoleBlastNames">Apply to all holes with the same name</label>
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
                }
            }
        }
    });
}

//Add hole to the points array popup using sweetalert and then draw the points
//Add hole to the points array popup using sweetalert and then draw the points
function addHole(useCustomHoleID, entityName, holeID, startXLocation, startYLocation, startZLocation, diameter, type, length, subdrill, angle, bearing) {
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
        newHoleID = holeID;
    } else if (useCustomHoleID === false) {
        if (points !== null) {
            newHoleID = points.length + 1;
        } else {
            newHoleID = 1;
        }
    } else {
        newHoleID = 9999;
    }
    startXLocation = parseFloat(startXLocation);
    startYLocation = parseFloat(startYLocation);
    startZLocation = parseFloat(startZLocation);
    let endXLocation = parseFloat(startXLocation + length * Math.cos((90 - angle) * (Math.PI / 180)) * Math.cos(((450 - bearing) % 360) * (Math.PI / 180)));
    let endYLocation = parseFloat(startYLocation + length * Math.cos((90 - angle) * (Math.PI / 180)) * Math.sin(((450 - bearing) % 360) * (Math.PI / 180)));
    let endZLocation = parseFloat(startZLocation - length * Math.cos(angle * (Math.PI / 180)));
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
    let holeDiameter = parseFloat(diameter);
    let holeType = type;
    let holeLengthCalculated = parseFloat(length);
    let subdrillAmount = parseFloat(subdrill);
    let holeAngle = parseFloat(angle);
    let holeBearing = parseFloat(bearing);
    if (isNaN(holeLengthCalculated)) {
        holeLengthCalculated = 0;
    }
    if (isNaN(holeAngle)) {
        holeAngle = 0;
    }
    if (isNaN(holeBearing)) {
        holeBearing = 0;
    }
    let toHoleCombinedID = entityName.toString() + ":::" + newHoleID.toString();
    let timingDelayMilliseconds = 0;
    let colourHexDecimal = "red";
    let measuredLength = 0;
    let measuredLengthTimeStamp = "09/05/1975 00:00:00";
    let measuredMass = 0;
    let measuredMassTimeStamp = "09/05/1975 00:00:00";
    let measuredComment = "None";
    let measuredCommentTimeStamp = "09/05/1975 00:00:00";
    let subdrillLength = holeAngle > 0 ? subdrillAmount / Math.sin((90 - holeAngle) * (Math.PI / 180)) : subdrillAmount;
    let benchHeight = holeLengthCalculated * Math.cos(holeAngle * (Math.PI / 180));
    let gradeXLocation = endXLocation;
    let gradeYLocation = endYLocation;
    let gradeZLocation = endZLocation;

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
        colourHexDecimal: colourHexDecimal.toString(),
        measuredLength: measuredLength,
        measuredLengthTimeStamp: measuredLengthTimeStamp,
        measuredMass: measuredMass,
        measuredMassTimeStamp: measuredMassTimeStamp,
        measuredComment: measuredComment,
        measuredCommentTimeStamp: measuredCommentTimeStamp
    });
    console.log("Added Hole: " + newHoleID);
    console.log(
        "Added Hole attributes: \nentiyName: " +
            entityName +
            "\nHoleID: " +
            newHoleID +
            "\nStartX: " +
            startXLocation +
            " StartY: " +
            startYLocation +
            " StartZ: " +
            startZLocation +
            "\nEndX: " +
            endXLocation +
            " EndY: " +
            endYLocation +
            " EndZ: " +
            endZLocation +
            "\nGradeX: " +
            gradeXLocation +
            " GradeY: " +
            gradeYLocation +
            " GradeZ: " +
            gradeZLocation +
            "\nSubdrill: " +
            subdrillAmount +
            " SubdrillLength: " +
            subdrillLength +
            " BenchHeight: " +
            benchHeight +
            "\nDiameter: " +
            holeDiameter +
            " Type: " +
            holeType +
            "\nLength: " +
            holeLengthCalculated +
            " Angle: " +
            holeAngle +
            " Bearing: " +
            holeBearing +
            "\nFromHoleID: " +
            toHoleCombinedID +
            " TimingDelay: " +
            timingDelayMilliseconds +
            " Colour: " +
            colourHexDecimal +
            "\nMeasuredLength: " +
            measuredLength +
            " MeasuredLengthTimeStamp: " +
            measuredLengthTimeStamp +
            "\nMeasuredMass: " +
            measuredMass +
            " MeasuredMassTimeStamp: " +
            measuredMassTimeStamp +
            "\nMeasuredComment: " +
            measuredComment +
            " MeasuredCommentTimeStamp: " +
            measuredCommentTimeStamp
    );
    if (isAddingHole && !isAddingPattern) {
        drawData(points, selectedHole);
    }
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
            } else {
                drawData(points, selectedHole);
                //console.log("centroidX: " + centroidX + " centroidY: " + centroidY);
            }
        } else if (clickedHole && editLengthPopupSwitch.checked == true) {
            editHoleLengthPopup();
        }
        const multipleClickedHoles = getMultipleClickedHoles(clickX, clickY);
        if (multipleClickedHoles.length > 0 && selectionMode && editLengthPopupSwitch.checked == false) {
            selectedMultipleHoles = [...multipleClickedHoles]; // Update the selection
            drawData(points, selectedHole); // You might need to modify this function to handle multiple selected holes
        }
    }
}

function handleSelection(event) {
    if (isSelectionPointerActive) {
        // Get the click/touch coordinates relative to the canvas
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        const clickedHole = getClickedHole(clickX, clickY);

        if (clickedHole && !selectionMode) {
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
        if (multipleClickedHoles.length > 0 && selectionMode) {
            selectedMultipleHoles = [...multipleClickedHoles]; // Update the selection
            drawData(points, selectedHole); // You might need to modify this function to handle multiple selected holes
        }
    }
}

function handleHoleEditingSelection(event) {
    if (isHoleEditing || selectPointerTool.checked) {
        // Get the click/touch coordinates relative to the canvas
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        const clickedHole = getClickedHole(clickX, clickY);

        if (clickedHole && !selectionMode) {
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
        if (multipleClickedHoles.length > 0 && selectionMode) {
            selectedMultipleHoles = [...multipleClickedHoles]; // Update the selection
            drawData(points, selectedHole); // You might need to modify this function to handle multiple selected holes
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

    // No need to reassign points[index] since we're working on the original object
}

function timeChart() {
    if (!Array.isArray(holeTimes)) return;

    const times = holeTimes.map((time) => time[1]);
    const maxTime = Math.max(...times);
    const timeRange = parseInt(document.getElementById("timeRange").value);
    const timeOffset = parseInt(document.getElementById("timeOffset").value);
    const numBins = Math.ceil(maxTime / timeRange);
    const binStart = -timeOffset;

    const measuredMassRadio = document.getElementById("measuredMassRadio");
    const holeCountRadio = document.getElementById("holeCountRadio");
    const useMass = measuredMassRadio?.checked;

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

    const defaultColour = Array(numBins).fill("red");

    const chart = document.getElementById("timeChart");
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
        plot_bgcolor: noneColour,
        paper_bgcolor: noneColour,
        font: { color: textFillColour },
        modebar: {
            orientation: "v",
            bgcolor: noneColour,
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
            marker: { color: defaultColour },
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
        const newColours = defaultColour.map((color, index) => (selectedPoints.includes(index) ? "lime" : color));
        Plotly.restyle("timeChart", { "marker.color": [newColours] });

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
        Plotly.restyle("timeChart", { "marker.color": [defaultColour] });
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
    const animationStep = Math.max(0.1, playSpeed); // Minimum animation step of 1 millisecond

    play.textContent = "Playing at " + parseFloat(playSpeed).toFixed(3) + "x speed";
    //Set the display7 as checked
    //document.getElementById("display7").checked = true;

    // Start the animation loop
    animationInterval = setInterval(() => {
        if (currentTime <= maxTime + (playSpeed + playSpeed * 15)) {
            timingWindowHolesSelected = points.filter((point) => point.holeTime <= currentTime);
            drawData(points, timingWindowHolesSelected); // Call drawPoints with the updated selectedHolesArray
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
    timingWindowHolesSelected = []; // Reset the selected holes array
    //drawData(points, timingWindowHolesSelected); // Call drawPoints to reset the highlights
});

// Add input event listener to the playSpeed input range
const playSpeedInput = document.getElementById("playSpeed");
playSpeedInput.addEventListener("input", updatePlaySpeed);

function drawLegend(strokecolour) {
    //draw a legend at the bottom of the screen in the center
    //the legend should be for the drawDelauanyTriangles function
    //the legend should display the roundedAngleDip Ranges and there colours
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
    ctx.font = "14px Arial";
    ctx.fillStyle = strokecolour;
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

        // Highlight single selected point if needed
        if (selectedPoint !== null) {
            const [x, y] = worldToCanvas(selectedPoint.pointXLocation, selectedPoint.pointYLocation);
            drawHiHole(x, y, 10, "rgba(255, 102, 255, 0.3)", "rgba(255, 0, 255, 0.6)");
        }

        // KAD POINTS
        if (kadPointsMap.size > 0) {
            for (const entity of kadPointsMap.values()) {
                for (const pointData of entity.data) {
                    const [x, y] = worldToCanvas(pointData.pointXLocation, pointData.pointYLocation);
                    drawKADPoints(x, y, pointData.pointZLocation, pointData.colour);
                }
            }
        }
        // KAD LINES
        if (kadLinesMap.size > 0) {
            for (const entity of kadLinesMap.values()) {
                const points = entity.data;
                if (points.length < 2) continue;
                let [prevX, prevY] = worldToCanvas(points[0].pointXLocation, points[0].pointYLocation);
                let prevZ = points[0].pointZLocation;
                for (let i = 1; i < points.length; i++) {
                    const [x, y] = worldToCanvas(points[i].pointXLocation, points[i].pointYLocation);
                    const z = points[i].pointZLocation;
                    // Only draw if the distance in canvas space is >= 1px
                    const dx = x - prevX;
                    const dy = y - prevY;
                    const pxDist = 5;
                    if (Math.sqrt(dx * dx + dy * dy) >= pxDist || i === points.length - 1) {
                        drawKADLines(prevX, prevY, x, y, prevZ, z, points[i - 1].lineWidth, points[i - 1].colour);
                        prevX = x;
                        prevY = y;
                        prevZ = z;
                    }
                }
            }
        }

        // KAD POLYGONS with pixel-distance simplification
        if (kadPolygonsMap.size > 0) {
            let globalTotalPoints = 0;
            let globalDrawnPoints = 0;
            for (const entity of kadPolygonsMap.values()) {
                const points = entity.data;
                if (points.length < 2) continue;
                const totalPoints = points.length;
                let drawnPoints = 0;
                const firstPoint = points[0];
                let [firstX, firstY] = worldToCanvas(firstPoint.pointXLocation, firstPoint.pointYLocation);
                let prevX = firstX;
                let prevY = firstY;
                let prevZ = firstPoint.pointZLocation;
                for (let i = 1; i < points.length; i++) {
                    const currentPoint = points[i];
                    const [x, y] = worldToCanvas(currentPoint.pointXLocation, currentPoint.pointYLocation);
                    const z = currentPoint.pointZLocation;
                    const dx = x - prevX;
                    const dy = y - prevY;
                    const pxDist = 5;
                    if (Math.sqrt(dx * dx + dy * dy) >= pxDist || i === points.length - 1) {
                        drawKADPolys(prevX, prevY, x, y, prevZ, z, currentPoint.lineWidth, currentPoint.colour, currentPoint.closed);
                        prevX = x;
                        prevY = y;
                        prevZ = z;
                        drawnPoints++;
                    }
                }
                // Close polygon if needed
                if (points[points.length - 1].closed === true) {
                    drawKADPolys(prevX, prevY, firstX, firstY, prevZ, firstPoint.pointZLocation, firstPoint.lineWidth, firstPoint.colour, points[points.length - 1].closed);
                    drawnPoints++;
                }
                globalTotalPoints += totalPoints;
                globalDrawnPoints += drawnPoints;
            }
        }

        // KAD TEXT
        if (kadTextsMap.size > 0) {
            for (const entity of kadTextsMap.values()) {
                for (const pointData of entity.data) {
                    const [x, y] = worldToCanvas(pointData.pointXLocation, pointData.pointYLocation);
                    drawKADTexts(x, y, pointData.pointZLocation, pointData.text, pointData.colour);
                }
            }
        }

        // KAD CIRCLES
        if (kadCirclesMap.size > 0) {
            for (const entity of kadCirclesMap.values()) {
                for (const pointData of entity.data) {
                    const [x, y] = worldToCanvas(pointData.pointXLocation, pointData.pointYLocation);
                    drawKADCircles(x, y, pointData.pointZLocation, pointData.radius * currentScale, pointData.lineWidth, pointData.colour);
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
            drawDelauanySlopeMap(resultTriangles, centroid, strokeColour);
            for (const triangle of resultTriangles) {
                drawTriangleAngleText(triangle, centroid, strokeColour);
            }
            drawLegend("darkgrey");
        }

        // Burden Relief
        if (displayOptions.burdenRelief) {
            const centroid = { x: centroidX, y: centroidY };
            const { reliefTriangles } = delaunayTriangles(points, maxEdgeLength);
            drawDelauanyBurdenRelief(reliefTriangles, centroid, strokeColour);
            for (const triangle of reliefTriangles) {
                drawTriangleBurdenReliefText(triangle, centroid, strokeColour);
            }
            drawReliefLegend("darkgrey");
        }

        // First Movement Direction Arrows
        if (displayOptions.firstMovement) {
            connScale = document.getElementById("connSlider").value;
            for (const arrow of directionArrows) {
                const [startX, startY] = worldToCanvas(arrow[0], arrow[1]);
                const [endX, endY] = worldToCanvas(arrow[2], arrow[3]);
                drawDirectionArrow(startX, startY, endX, endY, arrow[4], strokeColour, arrow[5]);
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
        ctx.strokeStyle = strokeColour;
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
                    drawTrack(x, y, lineEndX, lineEndY, gradeX, gradeY, strokeColour, point.subdrillAmount);
                }

                // Highlight selected holes for animation/time window selection
                handleHoleHighlighting(point, x, y);

                // Draw toe if hole length is not zero
                if (parseFloat(point.holeLengthCalculated).toFixed(1) != 0.0) {
                    const radiusInPixels = toeSizeInMeters * currentScale;
                    drawHoleToe(lineEndX, lineEndY, transparentFillColour, strokeColour, radiusInPixels);
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
            //draw a vertical lin the height of the canvas at the mouse x location and draw a line the width of the canvas at the y location of the mouse. it should be colour grey at 50% opacity
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouseX, 0);
            ctx.lineTo(mouseX, canvas.height);
            ctx.strokeStyle = "rgba(128, 128, 128, 0.5)";
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(0, mouseY);
            ctx.lineTo(canvas.width, mouseY);
            ctx.strokeStyle = "rgba(128, 128, 128, 0.5)";
            ctx.stroke();
            ctx.closePath();
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

        // Update font slider and label after loop (once)
        fontSlider.value = currentFontSize;
        fontLabel.textContent = "Font Size: " + parseFloat(currentFontSize).toFixed(1) + "px";
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
    ctx.fillStyle = "darkgrey";
    ctx.font = "14px Arial";
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
        drawText(rightSideCollar, topSideCollar, point.holeID, textFillColour);
    }
    if (displayOptions.holeDia) {
        drawText(rightSideCollar, middleSideCollar, parseFloat(point.holeDiameter).toFixed(0), "green");
    }
    if (displayOptions.holeLen) {
        drawText(rightSideCollar, bottomSideCollar, parseFloat(point.holeLengthCalculated).toFixed(1), depthColour);
    }
    if (displayOptions.holeAng) {
        drawRightAlignedText(leftSideCollar, topSideCollar, parseFloat(point.holeAngle).toFixed(0), angleDipColour);
    }
    if (displayOptions.holeDip) {
        drawRightAlignedText(leftSideToe, topSideToe, 90 - parseFloat(point.holeAngle).toFixed(0), angleDipColour);
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
            const connColour = point.colourHexDecimal;
            try {
                drawArrow(startX, startY, x, y, connColour, connScale);
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
            const connColour = point.colourHexDecimal;
            const pointDelay = point.timingDelayMilliseconds;
            drawArrowDelayText(startX, startY, x, y, connColour, pointDelay);
        }
    }
    if (displayOptions.xValue) {
        drawRightAlignedText(leftSideCollar, topSideCollar, parseFloat(point.startXLocation).toFixed(2), textFillColour);
    }
    if (displayOptions.yValue) {
        drawRightAlignedText(leftSideCollar, middleSideCollar, parseFloat(point.startYLocation).toFixed(2), textFillColour);
    }
    if (displayOptions.zValue) {
        drawRightAlignedText(leftSideCollar, bottomSideCollar, parseFloat(point.startZLocation).toFixed(2), textFillColour);
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
        drawMultilineText(ctx, highlightText, 2, 20);
    }

    // Draw main hole/track shape (dummy, missing, or real)
    ctx.lineWidth = 1;
    ctx.strokeStyle = strokeColour;
    if (parseFloat(point.holeLengthCalculated).toFixed(1) == 0.0) {
        drawDummy(x, y, parseInt(0.2 * holeScale * currentScale), strokeColour);
    } else if (point.holeDiameter == 0) {
        drawNoDiameterHole(x, y, 10, strokeColour);
    } else {
        drawHole(x, y, diameterPx, fillColour, strokeColour);
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

function resetZoom() {
    currentScale = scale; // reset the current scale to the original scale
    currentFontSize = fontSize;

    //calculate the centroids from the data in the maps and points
    updateCentroids();
    drawData(points, selectedHole);
}
///SAVE and LOAD POINTS ARRAY TO LOCAL STORAGE /////////////////////////////////
function saveHolesToLocalStorage(points) {
    if (points !== null) {
        /* STRUCTURE OF THE POINTS ARRAY
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
        entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colourHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp
    */
        const lines = points.map((point) => {
            return `${point.entityName},${point.entityType},${point.holeID},${point.startXLocation},${point.startYLocation},${point.startZLocation},${point.endXLocation},${point.endYLocation},${point.endZLocation},${point.gradeXLocation},${point.gradeYLocation},${point.gradeZLocation},${point.subdrillAmount},${point.subdrillLength},${point.benchHeight},${point.holeDiameter},${point.holeType},${point.fromHoleID},${point.timingDelayMilliseconds},${point.colourHexDecimal},${point.holeLengthCalculated},${point.holeAngle},${point.holeBearing},${point.initiationTime},${point.measuredLength},${point.measuredLengthTimeStamp},${point.measuredMass},${point.measuredMassTimeStamp},${point.measuredComment},${point.measuredCommentTimeStamp}\n`;
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
        //updateCentroids();
        calculateTimes(points);
        const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

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
        entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colourHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp
    */
    const csvString = localStorage.getItem("kirraDataPoints");
    //console.log(csvString);
    if (csvString) {
        points = parseCSV(csvString);
        //console.log(points);
        updateCentroids();
        calculateTimes(points);
        const { contourLinesArray, directionArrows } = recalculateContours(points, deltaX, deltaY);

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
///SAVE and LOAD KAD MAPS TO LOCAL STORAGE /////////////////////////////////
function saveKADToLocalStorage(mapData) {
    //mapData = [kadHolesMap, kadPointsMap, kadPolygonsMap, kadLinesMap, kadCirclesMap, kadTextsMap]; //including kadHolesMap
    mapData = [kadPointsMap, kadPolygonsMap, kadLinesMap, kadCirclesMap, kadTextsMap]; //excluding kadHolesMap
    //localStorage.removeItem("kadData");

    let csvContentKAD = "";

    for (const map of mapData) {
        for (const entry of map.entries()) {
            const entityName = entry[0];
            //console.log(entityName);
            const entityData = entry[1];
            //console.log(entityData);

            if (entityData.entityType.trim() === "hole") {
                //commented out holes at this stage as it is duplicating the data
                //console.log(entityData.entityType);
                //for (const hole of entityData.data) {
                //	const csvLine = `${entityName},${hole.entityType},${hole.holeID},${hole.startXLocation},${hole.startYLocation},${hole.startZLocation},${hole.endXLocation},${hole.endYLocation},${hole.endZLocation},${hole.holeDiameter},${hole.holeType},${hole.fromHoleID},${hole.timingDelayMilliseconds},${hole.colourHexDecimal},${hole.holeLengthCalculated},${hole.holeAngle},${hole.holeBearing}\n`;
                //	csvContentKAD += csvLine;
                //}
            } else if (entityData.entityType.trim() === "point") {
                //console.log(entityData.entityType);
                for (const point of entityData.data) {
                    const csvLine = `${entityName},${point.entityType},${point.pointID},${point.pointXLocation},${point.pointYLocation},${point.pointZLocation},${point.colour}\n`;
                    csvContentKAD += csvLine;
                }
            } else if (entityData.entityType.trim() === "poly") {
                //console.log(entityData.entityType);
                for (let i = 0; i < entityData.data.length; i++) {
                    const polygon = entityData.data[i];
                    const isLast = i === entityData.data.length - 1;
                    const csvLine = `${entityName},${polygon.entityType},${polygon.pointID},${polygon.pointXLocation},${polygon.pointYLocation},${polygon.pointZLocation},${polygon.lineWidth},${polygon.colour},${isLast ? "true" : "false"}\n`;
                    csvContentKAD += csvLine;
                }
            } else if (entityData.entityType.trim() === "line") {
                //console.log(entityData.entityType);
                for (const entityLine of entityData.data) {
                    const csvLine = `${entityName},${entityLine.entityType},${entityLine.pointID},${entityLine.pointXLocation},${entityLine.pointYLocation},${entityLine.pointZLocation},${entityLine.lineWidth},${entityLine.colour}\n`;
                    csvContentKAD += csvLine;
                }
            } else if (entityData.entityType.trim() === "circle") {
                //console.log(entityData.entityType);
                for (const circle of entityData.data) {
                    const csvLine = `${entityName},${circle.entityType},${circle.pointID},${circle.pointXLocation},${circle.pointYLocation},${circle.pointZLocation},${circle.radius},${circle.lineWidth},${circle.colour}\n`;
                    csvContentKAD += csvLine;
                }
            } else if (entityData.entityType.trim() === "text") {
                //console.log(entityData.entityType);
                for (const text of entityData.data) {
                    const csvLine = `${entityName},${text.entityType},${text.pointID},${text.pointXLocation},${text.pointYLocation},${text.pointZLocation},${text.text},${text.colour}\n`;
                    csvContentKAD += csvLine;
                }
            }
        }
    }
    console.log("///////////////////KAD DATA ON SAVE//////////////");
    console.log("KAD Points : ", kadPointsMap);
    console.log("KAD Lines : ", kadLinesMap);
    console.log("KAD Polygons : ", kadPolygonsMap);
    console.log("KAD Circles : ", kadCirclesMap);
    console.log("KAD Texts : ", kadTextsMap);
    //console.log(kadHolesMap);
    //console.log("Local Storage kadData: ", csvContentKAD);
    localStorage.setItem("kadData", csvContentKAD);
}
// Load the all Kad maps from Local Storage if they are not null
function loadKADFromLocalStorage() {
    const csvStringKAD = localStorage.getItem("kadData");
    if (csvStringKAD) {
        parseKADFile(csvStringKAD);
        drawData(points, selectedHole);
        //console.log the KAD maps
        console.log("///////////////////KAD DATA ON LOAD//////////////");
        console.log("KAD Points : ", kadPointsMap);
        console.log("KAD Lines : ", kadLinesMap);
        console.log("KAD Polygons : ", kadPolygonsMap);
        console.log("KAD Circles : ", kadCirclesMap);
        console.log("KAD Texts : ", kadTextsMap);
        //console.log("KAD Holes : ", kadHolesMap);
    }
}

//CHECK THIS
function checkLocalStorageData() {
    const csvString = localStorage.getItem("kirraDataPoints");
    const csvStringKAD = localStorage.getItem("kadData");
    if (csvString || csvStringKAD) {
        // Show the popup asking the user if they want to continue from where they left off
        showPopup();
    }
}

function showPopup() {
    const userDecision = confirm("Do you want to pick up from where you left off?\n\nPress OK to continue or Cancel to start fresh.");
    console.log("function showPopup()");
    if (userDecision === true) {
        // User chose to continue, load the data from local storage
        points = loadHolesFromLocalStorage();
        loadKADFromLocalStorage();
    } else {
        // User chose not to continue, do nothing or start fresh
        clearLoadedData();
    }
    //console.log(points);
    drawData(points, selectedHole);
}

function clearLoadedData() {
    localStorage.removeItem("kirraDataPoints");
}
// Listen for changes in the kirraDataPoints key
window.addEventListener("storage", function (event) {
    if (event.key === "kirraDataPoints") {
        console.log("kirraDataPoints changed");
    } else {
        console.log("kirraDataPoints not changed");
    }
});

function updateCentroids() {
    // Calculate centroid of points
    let sumX = 0;
    let sumY = 0;
    let records = 0;
    if (points !== null) {
        for (let i = 0; i < points.length; i++) {
            sumX += points[i].startXLocation;
            sumY += points[i].startYLocation;
            records++;
        }
    }
    if (kadPointsMap.size > 0) {
        for (const entity of kadPointsMap.values()) {
            for (const point of entity.data) {
                sumX += point.pointXLocation;
                sumY += point.pointYLocation;
                records++;
            }
        }
    }
    if (kadPolygonsMap.size > 0) {
        for (const entity of kadPolygonsMap.values()) {
            for (const polygon of entity.data) {
                sumX += polygon.pointXLocation;
                sumY += polygon.pointYLocation;
                records++;
            }
        }
    }
    if (kadLinesMap.size > 0) {
        for (const entity of kadLinesMap.values()) {
            for (const line of entity.data) {
                sumX += line.pointXLocation;
                sumY += line.pointYLocation;
                records++;
            }
        }
    }
    if (kadCirclesMap.size > 0) {
        for (const entity of kadCirclesMap.values()) {
            for (const circle of entity.data) {
                sumX += circle.pointXLocation;
                sumY += circle.pointYLocation;
                records++;
            }
        }
    }
    if (kadTextsMap.size > 0) {
        for (const entity of kadTextsMap.values()) {
            for (const text of entity.data) {
                sumX += text.pointXLocation;
                sumY += text.pointYLocation;
                records++;
            }
        }
    }
    centroidX = sumX / records;
    centroidY = sumY / records;
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
    transparentFillColour = darkModeEnabled ? "rgba(0, 128, 255, 0.3)" : "rgba(128, 255, 0, 0.3)";
    fillColour = darkModeEnabled ? "darkgrey" : "lightgrey";
    strokeColour = darkModeEnabled ? "white" : "black";
    textFillColour = darkModeEnabled ? "white" : "black";
    depthColour = darkModeEnabled ? "cyan" : "blue";
    angleDipColour = darkModeEnabled ? "orange" : "darkorange";
    if (Array.isArray(holeTimes)) {
        timeChart();
    }
    drawData(points, selectedHole);
});

window.addEventListener("load", () => {
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
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
    resetAppToDefaults();

    //----------------- KEY LISTENERS ----------------//
    //add keylistener to escape key to reset everything
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            console.log("Escape pressed - resetting all");
            resetAllSelectedStores();

            // Reset polygon selection if active
            if (isPolygonSelectionActive) {
                polyPointsX = [];
                polyPointsY = [];
                isPolygonSelectionActive = false;
            }

            // Refresh display
            drawData(points, selectedHole);
        }
    });

    //add a key listener to the shift key to toggle multiple hole selection
    document.addEventListener("keydown", (event) => {
        if (event.key === "Shift") {
            document.getElementById("selectionModeButton").checked = true;
            selectionMode = true;
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "Shift") {
            document.getElementById("selectionModeButton").checked = false;
            selectionMode = false;
        }
    });
    //----------------- END KEY LISTENERS ----------------//

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
    saveHolesToLocalStorage(points);
    saveKADToLocalStorage(mapData);
});

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
    saveHolesToLocalStorage(points);
    saveKADToLocalStorage(mapData);
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
        plotly.relayout("timeChart", {
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
        Plotly.relayout("timeChart", {
            width: newWidthRight - 50
        });
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
    isDraggingTools = true;
    offsetX = e.clientX - toolbar.getBoundingClientRect().left;
    offsetY = e.clientY - toolbar.getBoundingClientRect().top;
    toolbar.style.transition = "none"; // Disable smooth transition during dragging
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
            selectionMode: selectionMode
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
        selectionMode = previousToolState.selectionMode;

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

    // Throttle contour recalculation for better performance
    if (!contourUpdatePending) {
        contourUpdatePending = true;
        requestAnimationFrame(() => {
            if (points.length > 0) {
                holeTimes = calculateTimes(points);
                const result = recalculateContours(points, deltaX, deltaY);
                contourLinesArray = result.contourLinesArray;
                directionArrows = result.directionArrows;
            }
            contourUpdatePending = false;
        });
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
    const worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
    const worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;

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
        // Uncheck the other buttons
        resetFloatingToolbarButtons("selectPointerTool");

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
        console.log("Point selection mode enabled");
        drawData(points, selectedHole);
    } else {
        isSelectionPointerActive = false;
        // Disable point selection mode
        canvas.removeEventListener("click", handleSelection);
        canvas.removeEventListener("touchstart", handleSelection);
        drawData(points, selectedHole);
    }
});

// Update the polygon tool event listener to properly handle conflicts
selectByPolygonTool.addEventListener("change", function () {
    if (this.checked) {
        // Uncheck the other buttons
        resetFloatingToolbarButtons("selectByPolygonTool");
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
        canvas.addEventListener("touchstart", selectInsidePolygonTouch);
        canvas.addEventListener("mousemove", handlePolygonMouseMove);
        canvas.addEventListener("contextmenu", function (e) {
            e.preventDefault(); // Prevent context menu
            selectInsidePolygon(e); // Handle right-click as completion
        });

        // Clear any existing selection
        polyPointsX = [];
        polyPointsY = [];
        selectedMultipleHoles = [];
    } else {
        isPolygonSelectionActive = false;

        // Remove polygon listeners
        canvas.removeEventListener("click", selectInsidePolygon);
        canvas.removeEventListener("touchstart", selectInsidePolygonTouch);
        canvas.removeEventListener("mousemove", handlePolygonMouseMove);

        // Clear polygon points
        polyPointsX = [];
        polyPointsY = [];
        drawData(points, selectedHole);
    }
});

function selectInsidePolygon(event) {
    if (!isPolygonSelectionActive) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Convert click coordinates to world coordinates
    const worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
    const worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;

    // Right click or Control+Click to finish polygon and select holes
    if (event.button === 2 || event.ctrlKey) {
        event.preventDefault(); // Prevent context menu

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
                console.log("Checking hole:", point.holeID, "at:", holeX, holeY, "against polygon with points:", polyPointsX.length);

                if (isPointInPolygon(holeX, holeY, polyPointsX, polyPointsY)) {
                    selectedMultipleHoles.push(point);
                    console.log("Selected hole:", point.holeID);
                }
                // Update averages and sliders after selection
                if (selectedMultipleHoles.length > 0) {
                    updateSelectionAveragesAndSliders(selectedMultipleHoles);
                }
            });

            console.log("Total holes selected:", selectedMultipleHoles.length);
        }

        // Clear the polygon after selection
        polyPointsX = [];
        polyPointsY = [];
        drawData(points, selectedHole);
        return;
    }

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

    // Convert touch coordinates to world coordinates
    const worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
    const worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;

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

                console.log("Checking hole:", point.holeID, "at:", holeX, holeY, "against polygon with points:", polyPointsX.length);

                if (isPointInPolygon(holeX, holeY, polyPointsX, polyPointsY)) {
                    selectedMultipleHoles.push(point);
                    console.log("Selected hole:", point.holeID);
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
        entityName,entityType,holeID,startXLocation,startYLocation,startZLocation,endXLocation,endYLocation,endZLocation,gradeXLocation, gradeYLocation, gradeZLocation, subdrillAmount, subdrillLength, benchHeight, holeDiameter,holeType,fromHoleID,timingDelayMilliseconds,colourHexDecimal,holeLengthCalculated,holeAngle,holeBearing,initiationTime,measuredLength,measuredLengthTimeStamp,measuredMass,measuredMassTimeStamp,measuredComment,measuredCommentTimeStamp
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
        { name: "colourHexDecimal", label: "Tie Colour" },
        { name: "measuredLength", label: "Measured Length" },
        { name: "measuredMass", label: "Measured Mass" },
        { name: "measuredComment", label: "Measured Comment" }
    ];

    const mappingHtml = modalFields
        .map(
            (field) =>
                '<label class="labelWhite12" for="swal-col-' +
                field.name +
                '">' +
                field.label +
                '</label><select id="swal-col-' +
                field.name +
                '" style="font-size: 12px; height: 26px; padding: 3px 6px; width: 120px; border-radius: 4px; background-color: #fff; color: #000; border: 1px solid #999; appearance: none; box-sizing: border-box;">' +
                ignoreOption +
                columnOptions +
                "</select>"
        )
        .join("");

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
                endXLocation: ["endx", "toex", "end easting", "end east", "tx", "end x"],
                endYLocation: ["endy", "toey", "end northing", "end north", "ty", "end y"],
                endZLocation: ["endz", "toerl", "end elevation", "tz", "end z"],
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
                colourHexDecimal: getValue("colourHexDecimal") || "red",
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
    } else {
        isRulerActive = false;
        rulerStartPoint = null;
        rulerEndPoint = null;
        canvas.removeEventListener("click", handleRulerClick);
        drawData(points, selectedHole);
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
    } else {
        isRulerProtractorActive = false;
        rulerProtractorPoints = [];
        canvas.removeEventListener("click", handleRulerProtractorClick);
        drawData(points, selectedHole);
    }
});

// Handle ruler clicks
function handleRulerClick(event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
    const worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
    const worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;

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
    const worldX = (clickX - canvas.width / 2) / currentScale + centroidX;
    const worldY = -(clickY - canvas.height / 2) / currentScale + centroidY;

    rulerProtractorPoints.push({ x: worldX, y: worldY });

    if (rulerProtractorPoints.length > 3) {
        // Start new measurement after 3 points
        rulerProtractorPoints = [{ x: worldX, y: worldY }];
    }

    drawData(points, selectedHole);
}

//----------------- END RULER TOOLS --------------------//

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
				    <label class="labelWhite18">Update - NEW FEATURES:                   </label>
				<br><label class="labelWhite18">Custom CSV Importer                      </label>
				<br><label class="labelWhite18">Move Hole Interactively                  </label>
				<br><label class="labelWhite18">Alter Bearing Interactively              </label>
				<br><label class="labelWhite18">Ruler Tool Added (Bearing and Protractor)</label>
                <br><label class="labelWhite18">Font Size Slider Limited to 100px        </label>
				<br><label class="labelWhite18">New & Existing Issues                     </label>
				<br><label class="labelWhite12c">Voronoi Display Lag with large blasts</label>
				<br><label class="labelWhite12c">Is it worth a donation? Or a reshare?</label>
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
// Add an event listener for the "DOMContentLoaded" event
document.addEventListener("DOMContentLoaded", function () {
    // Call the updatePopup function when the page is fully loaded
    updatePopup();
});
