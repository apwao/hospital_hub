

// Obtaining input values from check boxes
//laboratory checkbox inputs
//Services offered
var haemoglobin = $(" form #hbcheck:checked").val();
var gxm = $("form #gxmcheck:checked").val();
var bgcrossing = $("form #bgccheck:checked").val();
var fhaemogram = $("form #fhcheck:checked").val();
var hpylori = $("form #hpycheck:checked").val();
var rbs = $("form #rbscheck:checked").val();
var urinalysis = $(" form #ulycheck:checked").val();

// renal unit checkbox inputs
//equipment status
var dialysis = $("form #dialysis:checked").val();
var oxygen = $("form #oxygen:checked").val();
//text-field inputs
//Bed-capacity & Admitting Physician
var bed_capacity_r = $('#bcrenal').val();
var admitting_physician_r = $('#ad_renal').val();

//radiology checkbox inputs
//equipment status
var ultrasound = $("form #ultrasound:checked").val();
var ct = $(" form #ct:checked").val();
var mri = $(" form #mri:checked").val();
var xray = $(" form #xray:checked").val();
//radiology radio inputs
//existence of the facility
var deptPresent= $("input:radio[name=facility_functional]:checked").val();

//icu checkbox inputs
//equipment status
var ventilator = $(" form #ventilator:checked").val();
var ecg = $(" form #ecg:checked").val();
//radio inputs
var facility_present = $("input:radio[name=facility_present]:checked").val();
//text-field inputs
//Bed-capacity & Admitting Physician
var bed_capacity_i = $('#bcicu').val();
var admitting_physician_i = $('#ad_icu').val();
//pharmacy radio inputs
var facility_functional = $("input:radio[name=dept_present]:checked").val();

$(document).ready(function(event){
    event.preventDefault();
    $("form #next").click(function(){
        $.("services.html .sth #sth1").append();

    })
})


