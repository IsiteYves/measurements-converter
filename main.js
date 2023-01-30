var measurementsHolder = document.getElementById("measurements-holder"),
  converterHeader = document.getElementById("measurements-header"),
  chooseButton = document.getElementById("measurement-choose"),
  fromButton = document.getElementById("from-button"),
  toButton = document.getElementById("to-button"),
  fromToButtons = document.getElementsByClassName("from-to-buttons"),
  valueAndResult = document.getElementsByClassName("value-and-result"),
  measurementsList = document.getElementsByClassName("measurements-list"),
  realMsList = measurementsList[0].getElementsByTagName("ul"),
  msListItems = realMsList[0].getElementsByTagName("li"),
  unitList = document.getElementsByClassName("measurements-from"),
  realUnitList = unitList[0].getElementsByTagName("ul"),
  realUnitList1 = unitList[1].getElementsByTagName("ul"),
  realUnitList2 = unitList[2].getElementsByTagName("ul"),
  realUnitList3 = unitList[3].getElementsByTagName("ul"),
  realUnitList4 = unitList[4].getElementsByTagName("ul"),
  realUnitList5 = unitList[5].getElementsByTagName("ul"),
  realUnitList6 = unitList[6].getElementsByTagName("ul"),
  realUnitList7 = unitList[7].getElementsByTagName("ul"),
  realUnitList8 = unitList[8].getElementsByTagName("ul"),
  realUnitList9 = unitList[9].getElementsByTagName("ul"),
  realUnitList10 = unitList[10].getElementsByTagName("ul"),
  realUnitList11 = unitList[11].getElementsByTagName("ul"),
  unitFromItems = realUnitList[0].getElementsByTagName("li"),
  unitFromItems1 = realUnitList1[0].getElementsByTagName("li"),
  unitFromItems2 = realUnitList2[0].getElementsByTagName("li"),
  unitFromItems3 = realUnitList3[0].getElementsByTagName("li"),
  unitFromItems4 = realUnitList4[0].getElementsByTagName("li"),
  unitFromItems5 = realUnitList5[0].getElementsByTagName("li"),
  unitFromItems6 = realUnitList6[0].getElementsByTagName("li"),
  unitFromItems7 = realUnitList7[0].getElementsByTagName("li"),
  unitFromItems8 = realUnitList8[0].getElementsByTagName("li"),
  unitFromItems9 = realUnitList9[0].getElementsByTagName("li"),
  unitFromItems10 = realUnitList10[0].getElementsByTagName("li"),
  unitFromItems11 = realUnitList11[0].getElementsByTagName("li"),
  unitList2 = document.getElementsByClassName("measurements-to"),
  unitToList = unitList2[0].getElementsByTagName("ul"),
  unitToList1 = unitList2[1].getElementsByTagName("ul"),
  unitToList2 = unitList2[2].getElementsByTagName("ul"),
  unitToList3 = unitList2[3].getElementsByTagName("ul"),
  unitToList4 = unitList2[4].getElementsByTagName("ul"),
  unitToList5 = unitList2[5].getElementsByTagName("ul"),
  unitToList6 = unitList2[6].getElementsByTagName("ul"),
  unitToList7 = unitList2[7].getElementsByTagName("ul"),
  unitToList8 = unitList2[8].getElementsByTagName("ul"),
  unitToList9 = unitList2[9].getElementsByTagName("ul"),
  unitToList10 = unitList2[10].getElementsByTagName("ul"),
  unitToList11 = unitList2[11].getElementsByTagName("ul"),
  unitToItems = unitToList[0].getElementsByTagName("li"),
  unitToItems1 = unitToList1[0].getElementsByTagName("li");
let unitToItems2 = unitToList2[0].getElementsByTagName("li"),
  unitToItems3 = unitToList3[0].getElementsByTagName("li"),
  unitToItems4 = unitToList4[0].getElementsByTagName("li"),
  unitToItems5 = unitToList5[0].getElementsByTagName("li"),
  unitToItems6 = unitToList6[0].getElementsByTagName("li"),
  unitToItems7 = unitToList7[0].getElementsByTagName("li");
let unitToItems8 = unitToList8[0].getElementsByTagName("li"),
  unitToItems9 = unitToList9[0].getElementsByTagName("li"),
  unitToItems10 = unitToList10[0].getElementsByTagName("li"),
  unitToItems11 = unitToList11[0].getElementsByTagName("li"),
  valueToConvertField = document.getElementById("from-value"),
  buttonForSwitching = document.getElementById("switch-button"),
  customizationImagesHolder = document.getElementById("customization-images"),
  customizationImages1 = customizationImagesHolder.getElementsByTagName("img"),
  customizationImagesHolder2 = document.getElementById(
    "converter-customization-images"
  ),
  customizationImages2 = customizationImagesHolder2.getElementsByTagName("img"),
  customizationButton = document.getElementById("customization-button"),
  customizationPane = document.getElementById("customization-pane"),
  cancelButton = document.getElementById("cancel-button"),
  saveButton = document.getElementById("save-button"),
  bodyBgSource = "",
  converterBgSource = "",
  documentElmnt = document.getElementsByTagName("body")[0];
(copyrightHint = document.getElementById("copyright-hint")),
  (convertedValue = document.getElementById("converted-value"));
function convertTheValue() {
  if (valueToConvertField.value !== "") {
    if (chooseButton.innerHTML === "Mass") {
      var gramValue;
      //****** First convert all to Grams *****\\
      if (fromButton.innerHTML === "Tones") {
        gramValue = valueToConvertField.value * 1000000;
      } else if (fromButton.innerHTML === "Quintals") {
        gramValue = valueToConvertField.value * 100000;
      } else if (fromButton.innerHTML === "Milliagrams") {
        gramValue = valueToConvertField.value * 10000;
      } else if (fromButton.innerHTML === "Kilograms") {
        gramValue = valueToConvertField.value * 1000;
      } else if (fromButton.innerHTML === "Hectograms") {
        gramValue = valueToConvertField.value * 100;
      } else if (fromButton.innerHTML === "Decagrams") {
        gramValue = valueToConvertField.value * 10;
      } else if (fromButton.innerHTML === "Grams") {
        gramValue = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Decigrams") {
        gramValue = valueToConvertField.value / 10;
      } else if (fromButton.innerHTML === "Centigrams") {
        gramValue = valueToConvertField.value / 100;
      } else if (fromButton.innerHTML === "Milligrams") {
        gramValue = valueToConvertField.value / 1000;
      } else if (fromButton.innerHTML === "Micrograms") {
        gramValue = valueToConvertField.value / 1000000;
      } else if (fromButton.innerHTML === "Nanograms") {
        gramValue = valueToConvertField.value / 1000000000;
      } else if (fromButton.innerHTML === "Picograms") {
        gramValue = valueToConvertField.value / 1000000000000;
      } else if (fromButton.innerHTML === "Pounds") {
        gramValue = valueToConvertField.value / 0.00220462262185;
      } else if (fromButton.innerHTML === "Ounces") {
        gramValue = valueToConvertField.value * 28.34952;
      } else {
        gramValue = (valueToConvertField.value * 14) / 0.00220462262185;
      }
      ////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      //**** Convert To the specified "To..." Unit ***\\
      if (toButton.innerHTML === "Tones") {
        convertedValue.innerHTML =
          "<b>" +
          gramValue / 1000000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Quintals") {
        convertedValue.innerHTML =
          "<b>" +
          gramValue / 100000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Milliagrams") {
        convertedValue.innerHTML =
          "<b>" +
          gramValue / 10000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Kilograms") {
        convertedValue.innerHTML =
          "<b>" + gramValue / 1000 + "</b>" + " " + "<span>Kg</span>";
      } else if (toButton.innerHTML === "Hectograms") {
        convertedValue.innerHTML =
          "<b>" + gramValue / 100 + "</b>" + " " + "<span>Hg</span>";
      } else if (toButton.innerHTML === "Decagrams") {
        convertedValue.innerHTML =
          "<b>" + gramValue / 10 + "</b>" + " " + "<span>Dag</span>";
      } else if (toButton.innerHTML === "Grams") {
        convertedValue.innerHTML =
          "<b>" +
          gramValue +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Decigrams") {
        convertedValue.innerHTML =
          "<b>" + gramValue * 10 + "</b>" + " " + "<span>Dg</span>";
      } else if (toButton.innerHTML === "Centigrams") {
        convertedValue.innerHTML =
          "<b>" + gramValue * 100 + "</b>" + " " + "<span>Cg</span>";
      } else if (toButton.innerHTML === "Milligrams") {
        convertedValue.innerHTML =
          "<b>" + gramValue * 1000 + "</b>" + " " + "<span>Mg</span>";
      } else if (toButton.innerHTML === "Micrograms") {
        convertedValue.innerHTML =
          "<b>" + gramValue * 1000000 + "</b>" + " " + "<span>μg</span>";
      } else if (toButton.innerHTML === "Nanograms") {
        convertedValue.innerHTML =
          "<b>" + gramValue * 1000000000 + "</b>" + " " + "<span>Ng</span>";
      } else if (toButton.innerHTML === "Picograms") {
        convertedValue.innerHTML =
          "<b>" + gramValue * 1000000000000 + "</b>" + " " + "<span>Pg</span>";
      } else if (toButton.innerHTML === "Pounds") {
        convertedValue.innerHTML =
          "<b>" +
          gramValue * 0.00220462262185 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Ounces") {
        convertedValue.innerHTML =
          "<b>" +
          gramValue / 28.34952 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" +
          (gramValue * 0.00220462262185) / 14 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML;
        +"</span>";
      }
    } else if (chooseButton.innerHTML === "Length") {
      var meterValue;
      //****** First convert all to Meters *****\\
      if (fromButton.innerHTML === "Exameters") {
        meterValue = valueToConvertField.value * 1000000000000000000;
      } else if (fromButton.innerHTML === "Petameters") {
        meterValue = valueToConvertField.value * 1000000000000000;
      } else if (fromButton.innerHTML === "Terameters") {
        meterValue = valueToConvertField.value * 1000000000000;
      } else if (fromButton.innerHTML === "Gigameters") {
        meterValue = valueToConvertField.value * 1000000000;
      } else if (fromButton.innerHTML === "Megameters") {
        meterValue = valueToConvertField.value * 1000000;
      } else if (fromButton.innerHTML === "Kilometers") {
        meterValue = valueToConvertField.value * 1000;
      } else if (fromButton.innerHTML === "Hectometers") {
        meterValue = valueToConvertField.value * 100;
      } else if (fromButton.innerHTML === "Decameters") {
        meterValue = valueToConvertField.value * 10;
      } else if (fromButton.innerHTML === "Meters") {
        meterValue = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Decimeters") {
        meterValue = valueToConvertField.value / 10;
      } else if (fromButton.innerHTML === "Centimeters") {
        meterValue = valueToConvertField.value / 100;
      } else if (fromButton.innerHTML === "Millimeters") {
        meterValue = valueToConvertField.value / 1000;
      } else if (fromButton.innerHTML === "Micrometers") {
        meterValue = valueToConvertField.value / 1000000;
      } else if (fromButton.innerHTML === "Nanometers") {
        meterValue = valueToConvertField.value / 1000000000;
      } else if (fromButton.innerHTML === "Picometers") {
        meterValue = valueToConvertField.value / 1000000000000;
      } else if (fromButton.innerHTML === "Femtometers") {
        meterValue = valueToConvertField.value / 1000000000000000;
      } else if (fromButton.innerHTML === "Attometers") {
        meterValue = valueToConvertField.value / 1000000000000000000;
      } else if (fromButton.innerHTML === "Inches") {
        meterValue = valueToConvertField.value * 0.0254;
      } else if (fromButton.innerHTML === "Feet") {
        meterValue = valueToConvertField.value * 0.3048;
      } else if (fromButton.innerHTML === "Yards") {
        meterValue = valueToConvertField.value * 0.9144;
      } else if (fromButton.innerHTML === "Miles") {
        meterValue = valueToConvertField.value * 1609.344;
      } else {
        meterValue = valueToConvertField.value * 1852;
      }
      ////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      //**** Convert To the specified "To..." Unit ***\\
      if (toButton.innerHTML === "Exameters") {
        convertedValue.innerHTML =
          "<b>" +
          meterValue / 1000000000000000000 +
          "</b>" +
          " " +
          "<span>Em</span>";
      } else if (toButton.innerHTML === "Petameters") {
        convertedValue.innerHTML =
          "<b>" +
          meterValue / 1000000000000000 +
          "</b>" +
          " " +
          "<span>Pm</span>";
      } else if (toButton.innerHTML === "Terameters") {
        convertedValue.innerHTML =
          "<b>" + meterValue / 1000000000000 + "</b>" + " " + "<span>Tm</span>";
      } else if (toButton.innerHTML === "Gigameters") {
        convertedValue.innerHTML =
          "<b>" + meterValue / 1000000000 + "</b>" + " " + "<span>Gm</span>";
      } else if (toButton.innerHTML === "Megameters") {
        convertedValue.innerHTML =
          "<b>" + meterValue / 1000000 + "</b>" + " " + "<span>Mm</span>";
      } else if (toButton.innerHTML === "Kilometers") {
        convertedValue.innerHTML =
          "<b>" + meterValue / 1000 + "</b>" + " " + "<span>Km</span>";
      } else if (toButton.innerHTML === "Hectometers") {
        convertedValue.innerHTML =
          "<b>" + meterValue / 100 + "</b>" + " " + "<span>Hm</span>";
      } else if (toButton.innerHTML === "Decameters") {
        convertedValue.innerHTML =
          "<b>" + meterValue / 10 + "</b>" + " " + "<span>Dam</span>";
      } else if (toButton.innerHTML === "Meters") {
        convertedValue.innerHTML =
          "<b>" +
          meterValue +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Decimeters") {
        convertedValue.innerHTML =
          "<b>" + meterValue * 10 + "</b>" + " " + "<span>Dm</span>";
      } else if (toButton.innerHTML === "Centimeters") {
        convertedValue.innerHTML =
          "<b>" + meterValue * 100 + "</b>" + " " + "<span>Cm</span>";
      } else if (toButton.innerHTML === "Millimeters") {
        convertedValue.innerHTML =
          "<b>" + meterValue * 1000 + "</b>" + " " + "<span>mm</span>";
      } else if (toButton.innerHTML === "Micrometers") {
        convertedValue.innerHTML =
          "<b>" + meterValue * 1000000 + "</b>" + " " + "<span>μm</span>";
      } else if (toButton.innerHTML === "Nanometers") {
        convertedValue.innerHTML =
          "<b>" + meterValue * 1000000000 + "</b>" + " " + "<span>Nm</span>";
      } else if (toButton.innerHTML === "Picometers") {
        convertedValue.innerHTML =
          "<b>" + meterValue * 1000000000000 + "</b>" + " " + "<span>Pm</span>";
      } else if (toButton.innerHTML === "Femtometers") {
        convertedValue.innerHTML =
          "<b>" +
          meterValue * 1000000000000000 +
          "</b>" +
          " " +
          "<span>Fm</span>";
      } else if (toButton.innerHTML === "Attometers") {
        convertedValue.innerHTML =
          "<b>" +
          meterValue * 1000000000000000000 +
          "</b>" +
          " " +
          "<span>Am</span>";
      } else if (toButton.innerHTML === "Inches") {
        convertedValue.innerHTML =
          "<b>" +
          meterValue * 39.37008 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Feet") {
        convertedValue.innerHTML =
          "<b>" +
          meterValue * 3.28084 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Yards") {
        convertedValue.innerHTML =
          "<b>" +
          meterValue * 1.093613 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Miles") {
        convertedValue.innerHTML =
          "<b>" +
          meterValue * 0.000621 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" +
          meterValue / 1852 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML;
        +"</span>";
      }
    } else if (chooseButton.innerHTML === "Area") {
      var meterSqrValue;
      //****** First convert all to Square Meters *****\\
      if (fromButton.innerHTML === "(Exa) -- Em<sup>2</sup>") {
        meterSqrValue =
          valueToConvertField.value * 1000000000000000000000000000000000000;
      } else if (fromButton.innerHTML === "(Peta) -- Pm<sup>2</sup>") {
        meterSqrValue =
          valueToConvertField.value * 1000000000000000000000000000000;
      } else if (fromButton.innerHTML === "(Tera) -- Tm<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value * 1000000000000000000000000;
      } else if (fromButton.innerHTML === "(Giga) -- Gm<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value * 1000000000000000000;
      } else if (fromButton.innerHTML === "(Mega) -- Mm<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value * 1000000000000;
      } else if (fromButton.innerHTML === "Square miles") {
        meterSqrValue = valueToConvertField.value * 2589988;
      } else if (fromButton.innerHTML === "Km<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value * 1000000;
      } else if (fromButton.innerHTML === "Hm<sup>2</sup> (Hectares)") {
        meterSqrValue = valueToConvertField.value * 10000;
      } else if (fromButton.innerHTML === "Dam<sup>2</sup> (Ares)") {
        meterSqrValue = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Acres") {
        meterSqrValue = valueToConvertField.value * 4046.856;
      } else if (fromButton.innerHTML === "m<sup>2</sup> (Centares)") {
        meterSqrValue = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Square yards") {
        meterSqrValue = valueToConvertField.value * 0.836127;
      } else if (fromButton.innerHTML === "Square feet") {
        meterSqrValue = valueToConvertField.value * 0.092903;
      } else if (fromButton.innerHTML === "Dm<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value / 100;
      } else if (fromButton.innerHTML === "Square inches") {
        meterSqrValue = valueToConvertField.value * 0.000645;
      } else if (fromButton.innerHTML === "Cm<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value / 10000;
      } else if (fromButton.innerHTML === "mm<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value / 1000000;
      } else if (fromButton.innerHTML === "(Micro) -- μm<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value / 1000000000000;
      } else if (fromButton.innerHTML === "(Nano) -- Nm<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value * 1000000000000000000;
      } else if (fromButton.innerHTML === "(Pico) -- Pm<sup>2</sup>") {
        meterSqrValue = valueToConvertField.value * 1000000000000000000000000;
      } else if (fromButton.innerHTML === "(Femto) -- Fm<sup>2</sup>") {
        meterSqrValue =
          valueToConvertField.value * 1000000000000000000000000000000;
      } else {
        meterSqrValue =
          valueToConvertField.value * 1000000000000000000000000000000000000;
      }
      ////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      //**** Convert To the specified "To..." Unit ***\\
      if (toButton.innerHTML === "(Exa) -- Em<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 1000000000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Em<sup>2</sup></span>";
      } else if (toButton.innerHTML === "(Peta) -- Pm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 1000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Pm<sup>2</sup></span>";
      } else if (toButton.innerHTML === "(Tera) -- Tm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 1000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Tm<sup>2</sup></span>";
      } else if (toButton.innerHTML === "(Giga) -- Gm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 1000000000000000000 +
          "</b>" +
          " " +
          "<span>Gm<sup>2</sup></span>";
      } else if (toButton.innerHTML === "(Mega) -- Mm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 1000000000000 +
          "</b>" +
          " " +
          "<span>Mm<sup>2</sup></span>";
      } else if (toButton.innerHTML === "Square miles") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 2589988 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Km<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 1000000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Hm<sup>2</sup> (Hectares)") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 10000 +
          "</b>" +
          " " +
          "<span>Hm<sup>2</sup></span>";
      } else if (toButton.innerHTML === "Dam<sup>2</sup> (Ares)") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 100 +
          "</b>" +
          " " +
          "<span>Dam<sup>2</sup></span>";
      } else if (toButton.innerHTML === "Acres") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 4046.856 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "m<sup>2</sup> (Centares)") {
        convertedValue.innerHTML =
          "<b>" + meterSqrValue + "</b>" + " " + "<span>m<sup>2</sup></span>";
      } else if (toButton.innerHTML === "Square yards") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 0.836127 +
          "</b>" +
          " " +
          "<span>yd<sup>2</sup></span>";
      } else if (toButton.innerHTML === "Square feet") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 092903 +
          "</b>" +
          " " +
          "<span>ft<sup>2</sup></span>";
      } else if (toButton.innerHTML === "Dm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue * 100 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Square inches") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue / 0.000645 +
          "</b>" +
          " " +
          "<span>in<sup>2</sup></span>";
      } else if (toButton.innerHTML === "Cm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue * 10000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "mm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue * 1000000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "(Micro) -- μm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue * 1000000000000 +
          "</b>" +
          " " +
          "<span>μm<sup>2</sup></span>";
      } else if (toButton.innerHTML === "(Nano) -- Nm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue * 1000000000000000000 +
          "</b>" +
          " " +
          "<span>Nm<sup>2</sup></span>";
      } else if (toButton.innerHTML === "(Pico) -- Pm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue * 1000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Pm<sup>2</sup></span>";
      } else if (toButton.innerHTML === "(Femto) -- Fm<sup>2</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue * 1000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Fm<sup>2</sup></span>";
      } else {
        convertedValue.innerHTML =
          "<b>" +
          meterSqrValue * 1000000000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Am<sup>2</sup></span>";
      }
    } else if (chooseButton.innerHTML === "Volume") {
      var meterCbValue;
      //****** First convert all to Cubic Meters *****\\
      if (fromButton.innerHTML === "(Exa) -- Em<sup>3</sup>") {
        meterCbValue =
          valueToConvertField.value *
          1000000000000000000000000000000000000000000000000000000;
      } else if (fromButton.innerHTML === "(Peta) -- Pm<sup>3</sup>") {
        meterCbValue =
          valueToConvertField.value *
          1000000000000000000000000000000000000000000000;
      } else if (fromButton.innerHTML === "(Tera) -- Tm<sup>3</sup>") {
        meterCbValue =
          valueToConvertField.value * 1000000000000000000000000000000000000;
      } else if (fromButton.innerHTML === "(Giga) -- Gm<sup>3</sup>") {
        meterCbValue = valueToConvertField.value * 1000000000000000000000000000;
      } else if (fromButton.innerHTML === "(Mega) -- Mm<sup>3</sup>") {
        meterCbValue = valueToConvertField.value * 1000000000000000000;
      } else if (fromButton.innerHTML === "Km<sup>3</sup>") {
        meterCbValue = valueToConvertField.value * 1000000000;
      } else if (fromButton.innerHTML === "Hm<sup>3</sup>") {
        meterCbValue = valueToConvertField.value * 1000000;
      } else if (fromButton.innerHTML === "Dam<sup>3</sup>") {
        meterCbValue = valueToConvertField.value * 1000;
      } else if (fromButton.innerHTML === "m<sup>3</sup> (Kiloliters)") {
        meterCbValue = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Bathtubs") {
        meterCbValue = valueToConvertField.value / 2.64;
      } else if (fromButton.innerHTML === "Dm<sup>3</sup> (Liters)") {
        meterCbValue = valueToConvertField.value / 1000;
      } else if (fromButton.innerHTML === "Cm<sup>3</sup> (Milliliters)") {
        meterCbValue = valueToConvertField.value / 1000000;
      } else if (fromButton.innerHTML === "mm<sup>3</sup>") {
        meterCbValue = valueToConvertField.value / 1000000000;
      } else if (fromButton.innerHTML === "(Micro) -- μm<sup>3</sup>") {
        meterCbValue = valueToConvertField.value / 1000000000000000000;
      } else if (fromButton.innerHTML === "(Nano) -- Nm<sup>3</sup>") {
        meterCbValue = valueToConvertField.value / 1000000000000000000000000000;
      } else if (fromButton.innerHTML === "(Pico) -- Pm<sup>3</sup>") {
        meterCbValue =
          valueToConvertField.value / 1000000000000000000000000000000000000;
      } else if (fromButton.innerHTML === "(Femto) -- Fm<sup>3</sup>") {
        meterCbValue =
          valueToConvertField.value /
          1000000000000000000000000000000000000000000000;
      } else if (fromButton.innerHTML === "(Atto) -- Am<sup>3</sup>") {
        meterCbValue =
          valueToConvertField.value /
          1000000000000000000000000000000000000000000000000000000;
      } else if (fromButton.innerHTML === "Cubic yards") {
        meterCbValue = valueToConvertField.value * 0.764555;
      } else if (fromButton.innerHTML === "Cubic feet") {
        meterCbValue = valueToConvertField.value * 0.028317;
      } else if (fromButton.innerHTML === "Cubic inches") {
        meterCbValue = valueToConvertField.value * 0.000016;
      } else if (fromButton.innerHTML === "Teaspoons(US)") {
        meterCbValue = valueToConvertField.value * 0.000005;
      } else if (fromButton.innerHTML === "Tablespoons(US)") {
        meterCbValue = valueToConvertField.value * 0.000015;
      } else if (fromButton.innerHTML === "Fluid&nbsp;ounces(US)") {
        meterCbValue = valueToConvertField.value * 0.00003;
      } else if (fromButton.innerHTML === "Cups (US)") {
        meterCbValue = valueToConvertField.value * 0.000237;
      } else if (fromButton.innerHTML === "Pints (US)") {
        meterCbValue = valueToConvertField.value * 0.000473;
      } else if (fromButton.innerHTML === "Quarts (US)") {
        meterCbValue = valueToConvertField.value * 0.000946;
      } else if (fromButton.innerHTML === "Gallons (US)") {
        meterCbValue = valueToConvertField.value * 0.003785;
      } else if (fromButton.innerHTML === "Teaspoons(UK)") {
        meterCbValue = valueToConvertField.value * 0.000006;
      } else if (fromButton.innerHTML === "Tablespoons(UK)") {
        meterCbValue = valueToConvertField.value * 0.000018;
      } else if (fromButton.innerHTML === "Fluid&nbsp;Ounces(UK)") {
        meterCbValue = valueToConvertField.value * 0.000028;
      } else if (fromButton.innerHTML === "Pints (UK)") {
        meterCbValue = valueToConvertField.value * 0.000568;
      } else if (fromButton.innerHTML === "Quarts (UK)") {
        meterCbValue = valueToConvertField.value * 0.001137;
      } else {
        meterCbValue = valueToConvertField.value * 0.004546;
      }
      ////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      //**** Convert To the specified "To..." Unit ***\\
      if (toButton.innerHTML === "(Exa) -- Em<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue /
            1000000000000000000000000000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Em<sup>3</sup></span>";
      } else if (toButton.innerHTML === "(Peta) -- Pm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue / 1000000000000000000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Pm<sup>3</sup></span>";
      } else if (toButton.innerHTML === "(Tera) -- Tm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue / 1000000000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Tm<sup>2</sup></span>";
      } else if (toButton.innerHTML === "(Giga) -- Gm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue / 1000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Gm<sup>3</sup></span>";
      } else if (toButton.innerHTML === "(Mega) -- Mm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue / 1000000000000000000 +
          "</b>" +
          " " +
          "<span>Mm<sup>3</sup></span>";
      } else if (toButton.innerHTML === "Km<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue / 1000000000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Hm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue / 1000000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Dam<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue / 1000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "m<sup>3</sup> (Kiloliters)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue +
          "</b>" +
          " " +
          "<span>m<sup>3</sup> (KL)</span>";
      } else if (toButton.innerHTML === "Bathtubs") {
        convertedValue.innerHTML =
          "<b>" + meterCbValue * 2.64 + "</b>" + " " + "<span>bathtubs</span>";
      } else if (toButton.innerHTML === "Cubic yards") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1.307951 +
          "</b>" +
          " " +
          "<span>yd<sup>3</sup></span>";
      } else if (toButton.innerHTML === "Cubic feet") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 35.31467 +
          "</b>" +
          " " +
          "<span>ft<sup>3</sup></span>";
      } else if (toButton.innerHTML === "Dm<sup>3</sup> (Liters)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1000 +
          "</b>" +
          " " +
          "<span>Dm<sup>3</sup> (L)</span>";
      } else if (toButton.innerHTML === "Cubic inches") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 61023.74 +
          "</b>" +
          " " +
          "<span>in<sup>3</sup></span>";
      } else if (toButton.innerHTML === "Cm<sup>3</sup> (Milliliters)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1000000 +
          "</b>" +
          " " +
          "<span>Cm<sup>3</sup> (ML)</span>";
      } else if (toButton.innerHTML === "mm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1000000000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "(Micro) -- μm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1000000000000000000 +
          "</b>" +
          " " +
          "<span>μm<sup>3</sup></span>";
      } else if (toButton.innerHTML === "(Nano) -- Nm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Nm<sup>3</sup></span>";
      } else if (toButton.innerHTML === "(Pico) -- Pm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1000000000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Pm<sup>3</sup></span>";
      } else if (toButton.innerHTML === "(Femto) -- Fm<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1000000000000000000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Fm<sup>3</sup></span>";
      } else if (toButton.innerHTML === "(Atto) -- Am<sup>3</sup>") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue *
            1000000000000000000000000000000000000000000000000000000 +
          "</b>" +
          " " +
          "<span>Fm<sup>3</sup></span>";
      } else if (toButton.innerHTML === "Teaspoons(US)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 202884.1 +
          "</b>" +
          " " +
          "<span>tsp.(US)</span>";
      } else if (toButton.innerHTML === "Tablespoons(US)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 67628.05 +
          "</b>" +
          " " +
          "<span>tbsp.(US)</span>";
      } else if (toButton.innerHTML === "Fluid&nbsp;Ounces(US)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 33814.02 +
          "</b>" +
          " " +
          "<span>f.Ounces(US)</span>";
      } else if (toButton.innerHTML === "Cups (US)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 4226.753 +
          "</b>" +
          " " +
          "<span>Cp.(Us)</span>";
      } else if (toButton.innerHTML === "Pints (US)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 2113.376 +
          "</b>" +
          " " +
          "<span>pt(US)</span>";
      } else if (toButton.innerHTML === "Quarts (US)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1056.688 +
          "</b>" +
          " " +
          "<span>qt(US)</span>";
      } else if (toButton.innerHTML === "Gallons (US)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 264.1721 +
          "</b>" +
          " " +
          "<span>gal(US)</span>";
      } else if (toButton.innerHTML === "Teaspoons(UK)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 168936.4 +
          "</b>" +
          " " +
          "<span>tsp.(UK)</span>";
      } else if (toButton.innerHTML === "Tablespoons(UK)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 56312.13 +
          "</b>" +
          " " +
          "<span>tbsp.(UK)</span>";
      } else if (toButton.innerHTML === "Fluid&nbsp;Ounces(UK)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 35195.08 +
          "</b>" +
          " " +
          "<span>f.Ounces(UK)</span>";
      } else if (toButton.innerHTML === "Pints (UK)") {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 1759.754 +
          "</b>" +
          " " +
          "<span>pt(UK)</span>";
      } else if (toButton.innerHTML === "Quarts (UK)") {
        convertedValue.innerHTML =
          "<b>" + meterCbValue * 879.877 + "</b>" + " " + "<span>qt(UK)</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" +
          meterCbValue * 219.9692 +
          "</b>" +
          " " +
          "<span>gal(UK)</span>";
      }
    } else if (chooseButton.innerHTML === "Temperature") {
      var celsiusValue;
      //****** First convert all to Meters *****\\
      if (fromButton.innerHTML === "Celsius") {
        celsiusValue = Number(valueToConvertField.value);
      } else if (fromButton.innerHTML === "Kelvin") {
        celsiusValue = Number(valueToConvertField.value - 273.15);
      } else if (fromButton.innerHTML === "Fahrenheit") {
        if (valueToConvertField.value === "33.8") {
          celsiusValue = 1;
        } else {
          var firstValue = Number(valueToConvertField.value - 32);
          celsiusValue = (firstValue * 5) / 9;
        }
      } else if (valueToConvertField.value === "") {
      } else {
        celsiusValue = (valueToConvertField.value * 5) / 4;
      }
      ////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      //**** Convert To the specified "To..." Unit ***\\
      if (toButton.innerHTML === "Celsius") {
        convertedValue.innerHTML =
          "<b>" + celsiusValue + "</b>" + " " + "<span>°C</span>";
      } else if (toButton.innerHTML === "Kelvin") {
        var kelvinValue = celsiusValue + 273.15;
        convertedValue.innerHTML =
          "<b>" + kelvinValue + "</b>" + " " + "<span>°K</span>";
      } else if (toButton.innerHTML === "Fahrenheit") {
        var firstFahrenheitValue = (celsiusValue * 9) / 5;
        var fahrenheitValue = firstFahrenheitValue + 32;
        convertedValue.innerHTML =
          "<b>" + fahrenheitValue + "</b>" + " " + "<span>°F</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" + (celsiusValue * 4) / 5 + "</b>" + " " + "<span>°R</span>";
      }
    } else if (chooseButton.innerHTML === "Energy") {
      var joulesValue;
      //****** First convert all to Meters *****\\
      if (fromButton.innerHTML === "Electron volts") {
        joulesValue = valueToConvertField.value * 1.602177e-19;
      } else if (fromButton.innerHTML === "Joules") {
        joulesValue = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Kilojoules") {
        joulesValue = valueToConvertField.value * 1000;
      } else if (fromButton.innerHTML === "Thermal calories") {
        joulesValue = valueToConvertField.value * 4.184;
      } else if (fromButton.innerHTML === "Food calories") {
        joulesValue = valueToConvertField.value * 4184;
      } else if (fromButton.innerHTML === "Foot-pounds") {
        joulesValue = valueToConvertField.value * 1.355818;
      } else {
        joulesValue = valueToConvertField.value * 1055.056;
      }
      ////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      //**** Convert To the specified "To..." Unit ***\\
      if (toButton.innerHTML === "Electron volts") {
        convertedValue.innerHTML =
          "<b>" +
          joulesValue / 1.602177e-19 +
          "</b>" +
          " " +
          "<span>e.Volts</span>";
      } else if (toButton.innerHTML === "Joules") {
        convertedValue.innerHTML =
          "<b>" + joulesValue + "</b>" + " " + "<span>Joules (J)</span>";
      } else if (toButton.innerHTML === "Kilojoules") {
        convertedValue.innerHTML =
          "<b>" + joulesValue / 1000 + "</b>" + " " + "<span>Kj</span>";
      } else if (toButton.innerHTML === "Thermal calories") {
        convertedValue.innerHTML =
          "<b>" + joulesValue / 4.184 + "</b>" + " " + "<span>TCal</span>";
      } else if (toButton.innerHTML === "Food calories") {
        convertedValue.innerHTML =
          "<b>" + joulesValue / 4184 + "</b>" + " " + "<span>FCal</span>";
      } else if (toButton.innerHTML === "Foot-pounds") {
        convertedValue.innerHTML =
          "<b>" + joulesValue / 1.355818 + "</b>" + " " + "<span>F.lb</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" + joulesValue / 1055.056 + "</b>" + " " + "<span>BTU</span>";
      }
    } else if (chooseButton.innerHTML === "Power") {
      var valueInWatts;
      //****** First convert all to Watts *****\\
      if (fromButton.innerHTML === "Gigawatts") {
        valueInWatts = valueToConvertField.value * 1000000000;
      } else if (fromButton.innerHTML === "Megawatts") {
        valueInWatts = valueToConvertField.value * 1000000;
      } else if (fromButton.innerHTML === "Kilowatts") {
        valueInWatts = valueToConvertField.value * 1000;
      } else if (fromButton.innerHTML === "Horsepower (Electric)") {
        valueInWatts = valueToConvertField.value * 746;
      } else if (fromButton.innerHTML === "Horsepower (Mechanic)") {
        valueInWatts = valueToConvertField.value * 745.699872;
      } else if (fromButton.innerHTML === "Decibel-watts") {
        valueInWatts = valueToConvertField.value * 1.258925411794;
      } else if (fromButton.innerHTML === "Watts") {
        valueInWatts = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Decibel-milliwatts") {
        valueInWatts = valueToConvertField.value * 0.001258925412;
      } else if (fromButton.innerHTML === "BTU/hr") {
        valueInWatts = valueToConvertField.value * 0.29307107;
      } else if (fromButton.innerHTML === "Foot-pounds/minute") {
        valueInWatts = valueToConvertField.value * 0.022597;
      } else if (fromButton.innerHTML === "BTUs/minute") {
        valueInWatts = valueToConvertField.value * 17.58427;
      } else if (fromButton.innerHTML === "Light bulbs") {
        valueInWatts = valueToConvertField.value * 50;
      } else {
        valueInWatts = valueToConvertField.value / 1000;
      }
      ////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      //**** Convert To the specified "To..." Unit ***\\
      if (toButton.innerHTML === "Gigawatts") {
        convertedValue.innerHTML =
          "<b>" + valueInWatts / 1000000000 + "</b>" + " " + "<span>GW</span>";
      } else if (toButton.innerHTML === "Megawatts") {
        convertedValue.innerHTML =
          "<b>" + valueInWatts / 1000000 + "</b>" + " " + "<span>MW</span>";
      } else if (toButton.innerHTML === "Kilowatts") {
        convertedValue.innerHTML =
          "<b>" + valueInWatts / 1000 + "</b>" + " " + "<span>KW</span>";
      } else if (toButton.innerHTML === "Horsepower (Electric)") {
        convertedValue.innerHTML =
          "<b>" + valueInW1atts / 746 + "</b>" + " " + "<span>hp(E)</span>";
      } else if (toButton.innerHTML === "Horsepower (Mechanic)") {
        convertedValue.innerHTML =
          "<b>" +
          valueInWatts / 745.699872 +
          "</b>" +
          " " +
          "<span>hp(I)</span>";
      } else if (toButton.innerHTML === "Decibel-watts") {
        convertedValue.innerHTML =
          "<b>" +
          valueInWatts / 1.258925411794 +
          "</b>" +
          " " +
          "<span>dBW</span>";
      } else if (toButton.innerHTML === "Watts") {
        convertedValue.innerHTML =
          "<b>" + valueInWatts + "</b>" + " " + "<span>Watts</span>";
      } else if (toButton.innerHTML === "Decibel-milliwatts") {
        convertedValue.innerHTML =
          "<b>" +
          valueInWatts / 0.001258925412 +
          "</b>" +
          " " +
          "<span>dBm</span>";
      } else if (toButton.innerHTML === "BTU/hr") {
        convertedValue.innerHTML =
          "<b>" +
          valueInWatts / 0.29307107 +
          "</b>" +
          " " +
          "<span>BTU<sub>IT</sub>/hr</span>";
      } else if (toButton.innerHTML === "Foot-pounds/minute") {
        convertedValue.innerHTML =
          "<b>" +
          valueInWatts / 0.022597 +
          "</b>" +
          " " +
          "<span>ft.lb/min</span>";
      } else if (toButton.innerHTML === "BTUs/minute") {
        convertedValue.innerHTML =
          "<b>" +
          valueInWatts / 17.58427 +
          "</b>" +
          " " +
          "<span>BTU/min</span>";
      } else if (toButton.innerHTML === "Light bulbs") {
        convertedValue.innerHTML =
          "<b>" +
          valueInWatts * 0.02 +
          "</b>" +
          " " +
          "<span>Lightbulbs</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" + valueInWatts * 1000 + "</b>" + " " + "<span>mW</span>";
      }
    } else if (chooseButton.innerHTML === "Pressure") {
      var valueInPascals;
      ///**** First convert all to Pascals ****\\\
      if (fromButton.innerHTML === "Atmospheres") {
        valueInPascals = valueToConvertField.value * 101325;
      } else if (fromButton.innerHTML === "Bars") {
        valueInPascals = valueToConvertField.value * 100000;
      } else if (fromButton.innerHTML === "Kilopascals") {
        valueInPascals = valueToConvertField.value * 1000;
      } else if (fromButton.innerHTML === "Millimeters of mercury") {
        valueInPascals = valueToConvertField.value * 133.3;
      } else if (fromButton.innerHTML === "Pascals") {
        valueInPascals = valueToConvertField.value;
      } else {
        valueInPascals = valueToConvertField.value * 6894.757;
      }
      ///////////// Then convert to the specified "To..." units \\\\\\\\\\\\\
      if (toButton.innerHTML === "Atmospheres") {
        convertedValue.innerHTML =
          "<b>" + valueInPascals / 101325 + "</b>" + " " + "<span>Atm</span>";
      } else if (toButton.innerHTML === "Bars") {
        convertedValue.innerHTML =
          "<b>" + valueInPascals / 100000 + "</b>" + " " + "<span>bar</span>";
      } else if (toButton.innerHTML === "Kilopascals") {
        convertedValue.innerHTML =
          "<b>" + valueInPascals / 1000 + "</b>" + " " + "<span>Kpa</span>";
      } else if (toButton.innerHTML === "Millimeters of mercury") {
        convertedValue.innerHTML =
          "<b>" + valueInPascals / 133.3 + "</b>" + " " + "<span>mmHg</span>";
      } else if (toButton.innerHTML === "Pascals") {
        convertedValue.innerHTML =
          "<b>" + valueInPascals + "</b>" + " " + "<span>Pa</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" +
          valueInPascals / 6894.757 +
          "</b>" +
          " " +
          "<span>pd/in<sup>2</sup></span>";
      }
    } else if (chooseButton.innerHTML === "Speed") {
      var kmPerSecValue;
      ///**** First convert all to Kilometers per hour ****\\\
      if (fromButton.innerHTML === "Miles per hour") {
        kmPerSecValue = valueToConvertField.value * 1.6092;
      } else if (fromButton.innerHTML === "Kilometers per hour") {
        kmPerSecValue = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Feet per second") {
        kmPerSecValue = valueToConvertField.value * 1.09728;
      } else if (fromButton.innerHTML === "Meters per second") {
        kmPerSecValue = valueToConvertField.value * 3.6;
      } else if (fromButton.innerHTML === "Centimeters per second") {
        kmPerSecValue = valueToConvertField.value * 0.036;
      } else if (fromButton.innerHTML === "Knots") {
        kmPerSecValue = valueToConvertField.value * 1.85184;
      } else {
        kmPerSecValue = valueToConvertField.value * 1225.08;
      }
      ///////////// Then convert to the specified "To..." units \\\\\\\\\\\\\
      if (toButton.innerHTML === "Miles per hour") {
        convertedValue.innerHTML =
          "<b>" +
          kmPerSecValue / 1.6092 +
          "</b>" +
          " " +
          "<span>Miles/h</span>";
      } else if (toButton.innerHTML === "Kilometers per hour") {
        convertedValue.innerHTML =
          "<b>" + kmPerSecValue + "</b>" + " " + "<span>Km/h</span>";
      } else if (toButton.innerHTML === "Feet per second") {
        convertedValue.innerHTML =
          "<b>" + kmPerSecValue / 1.09728 + "</b>" + " " + "<span>ft/s</span>";
      } else if (toButton.innerHTML === "Meters per second") {
        convertedValue.innerHTML =
          "<b>" + kmPerSecValue / 3.6 + "</b>" + " " + "<span>m/s</span>";
      } else if (toButton.innerHTML === "Centimeters per second") {
        convertedValue.innerHTML =
          "<b>" + kmPerSecValue / 0.036 + "</b>" + " " + "<span>cm/s</span>";
      } else if (toButton.innerHTML === "Knots") {
        convertedValue.innerHTML =
          "<b>" + kmPerSecValue / 1.85184 + "</b>" + " " + "<span>Knots</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" + kmPerSecValue / 1225.08 + "</b>" + " " + "<span>Mach</span>";
      }
    } else if (chooseButton.innerHTML === "Time") {
      var valueInSeconds;
      ///**** First convert all to seconds ****\\\
      if (fromButton.innerHTML === "Microseconds") {
        valueInSeconds = valueToConvertField.value / 1000000;
      } else if (fromButton.innerHTML === "Milliseconds") {
        valueInSeconds = valueToConvertField.value / 1000;
      } else if (fromButton.innerHTML === "Tierces") {
        valueInSeconds = valueToConvertField.value / 100;
      } else if (fromButton.innerHTML === "Seconds") {
        valueInSeconds = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Minutes") {
        valueInSeconds = valueToConvertField.value * 60;
      } else if (fromButton.innerHTML === "Hours") {
        valueInSeconds = valueToConvertField.value * 3600;
      } else if (fromButton.innerHTML === "Days") {
        valueInSeconds = valueToConvertField.value * 86400;
      } else if (fromButton.innerHTML === "Weeks") {
        valueInSeconds = valueToConvertField.value * 604800;
      } else if (fromButton.innerHTML === "Months") {
        valueInSeconds = valueToConvertField.value * 2629800;
      } else if (fromButton.innerHTML === "Decades") {
        valueInSeconds = valueToConvertField.value * 315576000;
      } else if (fromButton.innerHTML === "Centuries") {
        valueInSeconds = valueToConvertField.value * 3155760000;
      } else if (fromButton.innerHTML === "Milleniums") {
        valueInSeconds = valueToConvertField.value * 31557600000;
      } else {
        valueInSeconds = valueToConvertField.value * 31557600;
      }
      ///////////// Then convert to the specified "To..." units \\\\\\\\\\\\\
      if (toButton.innerHTML === "Microseconds") {
        convertedValue.innerHTML =
          "<b>" + valueInSeconds * 1000000 + "</b>" + " " + "<span>μs</span>";
      } else if (toButton.innerHTML === "Milliseconds") {
        convertedValue.innerHTML =
          "<b>" + valueInSeconds * 1000 + "</b>" + " " + "<span>ms</span>";
      } else if (toButton.innerHTML === "Tierces") {
        convertedValue.innerHTML =
          "<b>" + valueInSeconds * 100 + "</b>" + " " + "<span>Tierces</span>";
      } else if (toButton.innerHTML === "Seconds") {
        convertedValue.innerHTML =
          "<b>" + valueInSeconds + "</b>" + " " + "<span>Seconds</span>";
      } else if (toButton.innerHTML === "Minutes") {
        convertedValue.innerHTML =
          "<b>" + valueInSeconds / 60 + "</b>" + " " + "<span>Minutes</span>";
      } else if (toButton.innerHTML === "Hours") {
        convertedValue.innerHTML =
          "<b>" + valueInSeconds / 3600 + "</b>" + " " + "<span>Hours</span>";
      } else if (toButton.innerHTML === "Days") {
        convertedValue.innerHTML =
          "<b>" + valueInSeconds / 86400 + "</b>" + " " + "<span>Days</span>";
      } else if (toButton.innerHTML === "Weeks") {
        convertedValue.innerHTML =
          "<b>" + valueInSeconds / 604800 + "</b>" + " " + "<span>Weeks</span>";
      } else if (toButton.innerHTML === "Months") {
        convertedValue.innerHTML =
          "<b>" +
          valueInSeconds / 2629800 +
          "</b>" +
          " " +
          "<span>Months</span>";
      } else if (toButton.innerHTML === "Decades") {
        convertedValue.innerHTML =
          "<b>" +
          valueInSeconds / 315576000 +
          "</b>" +
          " " +
          "<span>Decades</span>";
      } else if (toButton.innerHTML === "Centuries") {
        convertedValue.innerHTML =
          "<b>" +
          valueInSeconds / 3155760000 +
          "</b>" +
          " " +
          "<span>Centuries</span>";
      } else if (toButton.innerHTML === "Milleniums") {
        convertedValue.innerHTML =
          "<b>" +
          valueInSeconds / 31557600000 +
          "</b>" +
          " " +
          "<span>Milleniums</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" +
          valueInSeconds / 31557600 +
          "</b>" +
          " " +
          "<span>Years</span>";
      }
    } else if (chooseButton.innerHTML === "Data") {
      var megabyteValue;
      ////// First convert all to megabytes \\\\\\\\\
      if (fromButton.innerHTML === "Floppy disks") {
        megabyteValue = valueToConvertField.value / 0.66;
      } else if (fromButton.innerHTML === "CDs") {
        megabyteValue = (valueToConvertField.value * 1000) / 1.36;
      } else if (fromButton.innerHTML === "DVDs") {
        megabyteValue = (valueToConvertField.value * 125000) / 24.77;
      } else if (fromButton.innerHTML === "Bits") {
        megabyteValue = valueToConvertField.value * 0.000000125;
      } else if (fromButton.innerHTML === "Bytes") {
        megabyteValue = valueToConvertField.value * 0.000001;
      } else if (fromButton.innerHTML === "Kilobits") {
        megabyteValue = valueToConvertField.value * 0.000125;
      } else if (fromButton.innerHTML === "Kibibits") {
        megabyteValue = valueToConvertField.value * 0.000128;
      } else if (fromButton.innerHTML === "Kilobytes") {
        megabyteValue = valueToConvertField.value * 0.001;
      } else if (fromButton.innerHTML === "Kibibytes") {
        megabyteValue = valueToConvertField.value * 0.001024;
      } else if (fromButton.innerHTML === "Megabits") {
        megabyteValue = valueToConvertField.value * 0.125;
      } else if (fromButton.innerHTML === "Mebibits") {
        megabyteValue = valueToConvertField.value * 0.131052;
      } else if (fromButton.innerHTML === "Megabytes") {
        megabyteValue = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Mebibytes") {
        megabyteValue = valueToConvertField.value * 0.048576;
      } else if (fromButton.innerHTML === "Gigabits") {
        megabyteValue = valueToConvertField.value * 125;
      } else if (fromButton.innerHTML === "Gibibits") {
        megabyteValue = valueToConvertField.value * 134.2177;
      } else if (fromButton.innerHTML === "Gigabytes") {
        megabyteValue = valueToConvertField.value * 1000;
      } else if (fromButton.innerHTML === "Gibibytes") {
        megabyteValue = valueToConvertField.value * 1073.742;
      } else if (fromButton.innerHTML === "Terabits") {
        megabyteValue = valueToConvertField.value * 125000;
      } else if (fromButton.innerHTML === "Tebibits") {
        megabyteValue = valueToConvertField.value * 137439;
      } else if (fromButton.innerHTML === "Terabytes") {
        megabyteValue = valueToConvertField.value * 1000000;
      } else if (fromButton.innerHTML === "Tebibytes") {
        megabyteValue = valueToConvertField.value * 1099512;
      } else if (fromButton.innerHTML === "Petabits") {
        megabyteValue = valueToConvertField.value * 125000000;
      } else if (fromButton.innerHTML === "Pebibits") {
        megabyteValue = valueToConvertField.value * 140737488;
      } else if (fromButton.innerHTML === "Petabytes") {
        megabyteValue = valueToConvertField.value * 1000000000;
      } else if (fromButton.innerHTML === "Pebibytes") {
        megabyteValue = valueToConvertField.value * 1125899907;
      } else if (fromButton.innerHTML === "Exabits") {
        megabyteValue = valueToConvertField.value * 125000000000;
      } else if (fromButton.innerHTML === "Exbibits") {
        megabyteValue = valueToConvertField.value * 144115188076;
      } else if (fromButton.innerHTML === "Exabytes") {
        megabyteValue = valueToConvertField.value * 1000000000000;
      } else if (fromButton.innerHTML === "Exbibytes") {
        megabyteValue = valueToConvertField.value * 1152921504607;
      } else if (fromButton.innerHTML === "Zetabits") {
        megabyteValue = valueToConvertField.value * 125000000000000;
      } else if (fromButton.innerHTML === "Zebibits") {
        megabyteValue = valueToConvertField.value * 147573952589676;
      } else if (fromButton.innerHTML === "Zetabytes") {
        megabyteValue = valueToConvertField.value * 1e15;
      } else if (fromButton.innerHTML === "Zebibytes") {
        megabyteValue = valueToConvertField.value * 1.180592e15;
      } else if (fromButton.innerHTML === "Yottabits") {
        megabyteValue = valueToConvertField.value * 1.25e17;
      } else if (fromButton.innerHTML === "Yobibits") {
        megabyteValue = valueToConvertField.value * 1.511157e17;
      } else if (fromButton.innerHTML === "Yottabytes") {
        megabyteValue = valueToConvertField.value * 1e18;
      } else {
        megabyteValue = valueToConvertField.value * 1.208926e18;
      }
      /////////// Then convert to the specified 'To...' units \\\\\\\\\\\\
      if (toButton.innerHTML === "Floppy disks") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue * 0.66 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "CDs") {
        convertedValue.innerHTML =
          "<b>" +
          (megabyteValue * 1.36) / 1000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "DVDs") {
        convertedValue.innerHTML =
          "<b>" +
          (megabyteValue * 24.77) / 125000 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Bits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 0.000000125 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Bytes") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 0.000001 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Kilobits") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 0.000125 + "</b>" + "<span>Kb</span>";
      } else if (toButton.innerHTML === "Kibibits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 0.000128 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Kilobytes") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 0.001 + "</b>" + " " + "<span>KB</span>";
      } else if (toButton.innerHTML === "Kibibytes") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 0.001024 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Megabits") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 0.125 + "</b>" + " " + "<span>Mb</span>";
      } else if (toButton.innerHTML === "Mebibits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 0.131052 +
          "</b>" +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Megabytes") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue + "</b>" + " " + "<span>MB</span>";
      } else if (toButton.innerHTML === "Mebibytes") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 0.048576 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Gigabits") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 125 + "</b>" + " " + "<span>Gb</span>";
      } else if (toButton.innerHTML === "Gibibits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 134.2177 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Gigabytes") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 1000 + "</b>" + " " + "<span>GB</span>";
      } else if (toButton.innerHTML === "Gibibytes") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 1073.742 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Terabits") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 125000 + "</b>" + " " + "<span>Tb</span>";
      } else if (toButton.innerHTML === "Tebibits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 137439 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Terabytes") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 1000000 + "</b>" + " " + "<span>TB</span>";
      } else if (toButton.innerHTML === "Tebibytes") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 1099512 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Petabits") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 125000000 + "</b>" + " " + "<span>Pb</span>";
      } else if (toButton.innerHTML === "Pebibits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 140737488 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Petabytes") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 1000000000 + "</b>" + " " + "<span>PB</span>";
      } else if (toButton.innerHTML === "Pebibytes") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 1125899907 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Exabits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 125000000000 +
          "</b>" +
          " " +
          "<span>Eb</span>";
      } else if (toButton.innerHTML === "Exbibits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 144115188076 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Exabytes") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 1000000000000 +
          "</b>" +
          " " +
          "<span>EB</span>";
      } else if (toButton.innerHTML === "Exbibytes") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 1152921504607 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Zetabits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 125000000000000 +
          "</b>" +
          " " +
          "<span>Zb</span>";
      } else if (toButton.innerHTML === "Zebibits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 147573952589676 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Zetabytes") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 1e15 + "</b>" + " " + "<span>ZB</span>";
      } else if (toButton.innerHTML === "Zebibytes") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 1.180592e15 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Yottabits") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 1.25e17 + "</b>" + " " + "<span>Yb</span>";
      } else if (toButton.innerHTML === "Yobibits") {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 1.511157e17 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      } else if (toButton.innerHTML === "Yottabytes") {
        convertedValue.innerHTML =
          "<b>" + megabyteValue / 1e18 + "</b>" + " " + "<span>YB</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" +
          megabyteValue / 1.208926e18 +
          "</b>" +
          " " +
          "<span>" +
          toButton.innerHTML +
          "</span>";
      }
    } else if (chooseButton.innerHTML === "Angle") {
      var valueInDegrees;
      //****** First convert all to Meters *****\\
      if (fromButton.innerHTML === "Degrees") {
        valueInDegrees = valueToConvertField.value;
      } else if (fromButton.innerHTML === "Radians") {
        valueInDegrees = valueToConvertField.value * 57.29578;
      } else {
        valueInDegrees = valueToConvertField.value * 0.9;
      }
      ////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      //**** Convert To the specified "To..." Unit ***\\
      if (toButton.innerHTML === "Degrees") {
        convertedValue.innerHTML =
          "<b>" + valueInDegrees + "</b>" + " " + "<span>deg</span>";
      } else if (toButton.innerHTML === "Radians") {
        convertedValue.innerHTML =
          "<b>" + valueInDegrees / 57.29578 + "</b>" + " " + "<span>rad</span>";
      } else {
        convertedValue.innerHTML =
          "<b>" + valueInDegrees / 0.9 + "</b>" + " " + "<span>grad</span>";
      }
    } else {
      alert(
        chooseButton.innerHTML +
          " measurements are not yet available!Enjoy other available measurements, as you kindly wait for " +
          chooseButton.innerHTML +
          " measurements."
      );
      valueToConvertField.value = "";
    }
  } else {
    convertedValue.innerHTML = "Result...";
  }
}
window.oninput = function () {
  if (chooseButton.innerHTML === "Choose Measurement") {
    alert(
      "You've got to choose the type of measurements (Such as Mass, Pressure,etc), before you start filling out this field and then get your converted result!"
    );
    valueToConvertField.value = "";
  } else if (fromButton.innerHTML === "From...") {
    alert(
      "You've got to choose the measurement units to convert from, before you start filling out this field and then get your converted result!"
    );
    valueToConvertField.value = "";
  } else if (toButton.innerHTML === "To...") {
    alert(
      "You've got to choose the measurement units to convert to, before you start filling out this field and then get your converted result!"
    );
    valueToConvertField.value = "";
  } else {
    convertTheValue();
  }
};

//           https://www.linkedin.com/in/anca-todirica-10242643/
// https://kotlinlang.org/lp/event-14/#event
window.onload = function () {
  document.querySelector("#copyright-yr").innerHTML = new Date().getFullYear();
  // alert('Note: While looking at various measurements, be careful not to automatically confirm that a measurement unit that comes before another is automatically great than the other one after it according to the order they are put in!Because for some measurements for instance, \'Speed\', you may find that "Kilometers per hour(Km/h)" comes before "Meters per second(m/s), but this doesn\'t automatically mean that 1 Km/h is great than  1 m/s, because 1 Km/h is equal to only 0.2777 m/s which is less than 1 m/s!"'
  // +'So, it will be better for you to use the converter instead of wrong guesses.');
  implementContent();
};
window.onresize = implementContent;
function implementContent() {
  var documentWidth = document.documentElement.clientWidth;
  if (documentWidth <= 760) {
    if (documentWidth >= 580) {
      for (var r = 0; r < customizationImages1.length; r++) {
        customizationImages1[r].style.width = "193px";
        customizationImages1[r].style.height = "150px";
      }
      for (var s = 0; s < customizationImages2.length; s++) {
        customizationImages2[s].style.width = "193px";
        customizationImages2[s].style.height = "150px";
      }
    } else {
      for (var r = 0; r < customizationImages1.length; r++) {
        customizationImages1[r].style.width = "91%";
        customizationImages1[r].style.height =
          (35 * documentWidth) / 100 + "px";
      }
      for (var s = 0; s < customizationImages2.length; s++) {
        customizationImages2[s].style.width = "91%";
        customizationImages2[s].style.height = "200px";
      }
    }
    // measurementsHolder.style.margin = "0";
    // measurementsHolder.style.paddingBottom = "15%";
    // measurementsHolder.style.border = "0.9px solid #808080";
    // measurementsHolder.style.borderLeft = "none";
    // customizationButton.style.marginTop = "6%";
    // customizationButton.style.width = "19.2%";
    // customizationButton.style.marginLeft = "40%";
    // measurementsHolder.style.borderRight = "none";
    // fromToButtons[0].style.width = "80%";
    // valueAndResult[0].style.marginTop = "-17%";
    // fromToButtons[0].style.marginLeft = "10%";
    // fromToButtons[1].style.marginRight = "9.8%";
    // fromToButtons[1].style.width = "80%";
    // fromToButtons[1].style.marginTop = "-17%";
    // valueAndResult[1].style.marginTop = "-6%";
    // buttonForSwitching.style.marginLeft = "-100%";
  } else {
    for (var r = 0; r < customizationImages1.length; r++) {
      customizationImages1[r].style.width = "193px";
      customizationImages1[r].style.height = "150px";
    }
    for (var s = 0; s < customizationImages2.length; s++) {
      customizationImages2[s].style.width = "193px";
      customizationImages2[s].style.height = "150px";
    }
    // measurementsHolder.style.borderRadius = "8px";
    // customizationButton.style.marginTop = "-72%";
    // customizationButton.style.width = "13.5%";
    // customizationButton.style.marginLeft = "42.8%";
    // measurementsHolder.style.border = "2px solid #808080";
    // valueAndResult[1].style.marginTop = "-5%";
    // measurementsHolder.style.paddingBottom = "3.3%";
    // fromToButtons[0].style.width = "30%";
    // fromToButtons[0].style.marginLeft = "5%";
    // fromToButtons[1].style.marginRight = "5%";
    // fromToButtons[1].style.width = "30%";
    // fromToButtons[1].style.marginTop = "3%";
    // buttonForSwitching.style.marginLeft = "33%";
  }
  for (var x = 0; x < msListItems.length; x++) {
    msListItems[x].setAttribute("id", "measurement-items");
    msListItems[x].onclick = function () {
      if (chooseButton.innerHTML === this.innerHTML) {
        fromButton.innerHTML = fromButton.innerHTML;
        toButton.innerHTML = toButton.innerHTML;
        valueToConvertField.value += "";
        convertedValue.innerHTML += "";
      } else {
        fromButton.innerHTML = "From...";
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
        convertedValue.innerHTML = "Result...";
      }
      chooseButton.innerHTML = this.innerHTML;
      realMsList[0].style.display = "none";
    };
  }
  for (var y = 0; y < unitFromItems.length; y++) {
    unitFromItems[y].setAttribute("id", "measurement-units");
    unitFromItems[y].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList[0].style.display = "none";
    };
  }
  for (var a = 0; a < unitFromItems1.length; a++) {
    unitFromItems1[a].setAttribute("id", "measurement-units");
    unitFromItems1[a].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList1[0].style.display = "none";
    };
  }
  for (var b = 0; b < unitFromItems2.length; b++) {
    unitFromItems2[b].setAttribute("id", "measurement-units");
    unitFromItems2[b].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList2[0].style.display = "none";
    };
  }
  for (var c = 0; c < unitFromItems3.length; c++) {
    unitFromItems3[c].setAttribute("id", "measurement-units");
    unitFromItems3[c].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList3[0].style.display = "none";
    };
  }
  for (var d = 0; d < unitFromItems4.length; d++) {
    unitFromItems4[d].setAttribute("id", "measurement-units");
    unitFromItems4[d].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList4[0].style.display = "none";
    };
  }
  for (var e = 0; e < unitFromItems5.length; e++) {
    unitFromItems5[e].setAttribute("id", "measurement-units");
    unitFromItems5[e].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList5[0].style.display = "none";
    };
  }
  for (var f = 0; f < unitFromItems6.length; f++) {
    unitFromItems6[f].setAttribute("id", "measurement-units");
    unitFromItems6[f].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList6[0].style.display = "none";
    };
  }
  for (var g = 0; g < unitFromItems7.length; g++) {
    unitFromItems7[g].setAttribute("id", "measurement-units");
    unitFromItems7[g].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList7[0].style.display = "none";
    };
  }
  for (var h = 0; h < unitFromItems8.length; h++) {
    unitFromItems8[h].setAttribute("id", "measurement-units");
    unitFromItems8[h].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList8[0].style.display = "none";
    };
  }
  for (var i = 0; i < unitFromItems9.length; i++) {
    unitFromItems9[i].setAttribute("id", "measurement-units");
    unitFromItems9[i].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList9[0].style.display = "none";
    };
  }
  for (var j = 0; j < unitFromItems10.length; j++) {
    unitFromItems10[j].setAttribute("id", "measurement-units");
    unitFromItems10[j].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList10[0].style.display = "none";
    };
  }
  for (var k = 0; k < unitFromItems11.length; k++) {
    unitFromItems11[k].setAttribute("id", "measurement-units");
    unitFromItems11[k].onclick = function () {
      if (this.innerHTML === toButton.innerHTML) {
        toButton.innerHTML = "To...";
        valueToConvertField.value = "";
      } else {
        toButton.innerHTML === toButton.innerHTML;
      }
      fromButton.innerHTML = this.innerHTML;
      convertTheValue();
      realUnitList11[0].style.display = "none";
    };
  }
  for (var z = 0; z < unitToItems.length; z++) {
    unitToItems[z].setAttribute("id", "measurement-units-2");
    unitToItems[z].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            fromButton.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList[0].style.display = "none";
    };
  }
  for (var g = 0; g < unitToItems1.length; g++) {
    unitToItems1[g].setAttribute("id", "measurement-units-2");
    unitToItems1[g].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            fromButton.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList1[0].style.display = "none";
    };
  }
  for (var h = 0; h < unitToItems2.length; h++) {
    unitToItems2[h].setAttribute("id", "measurement-units-2");
    unitToItems2[h].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList2[0].style.display = "none";
    };
  }
  for (var i = 0; i < unitToItems3.length; i++) {
    unitToItems3[i].setAttribute("id", "measurement-units-2");
    unitToItems3[i].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList3[0].style.display = "none";
    };
  }
  for (var j = 0; j < unitToItems4.length; j++) {
    unitToItems4[j].setAttribute("id", "measurement-units-2");
    unitToItems4[j].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList4[0].style.display = "none";
    };
  }
  for (var k = 0; k < unitToItems5.length; k++) {
    unitToItems5[k].setAttribute("id", "measurement-units-2");
    unitToItems5[k].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList5[0].style.display = "none";
    };
  }
  for (var l = 0; l < unitToItems6.length; l++) {
    unitToItems6[l].setAttribute("id", "measurement-units-2");
    unitToItems6[l].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList6[0].style.display = "none";
    };
  }
  for (var m = 0; m < unitToItems7.length; m++) {
    unitToItems7[m].setAttribute("id", "measurement-units-2");
    unitToItems7[m].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList7[0].style.display = "none";
    };
  }
  for (var n = 0; n < unitToItems8.length; n++) {
    unitToItems8[n].setAttribute("id", "measurement-units-2");
    unitToItems8[n].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList8[0].style.display = "none";
    };
  }
  for (var o = 0; o < unitToItems9.length; o++) {
    unitToItems9[o].setAttribute("id", "measurement-units-2");
    unitToItems9[o].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList9[0].style.display = "none";
    };
  }
  for (var p = 0; p < unitToItems10.length; p++) {
    unitToItems10[p].setAttribute("id", "measurement-units-2");
    unitToItems10[p].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList10[0].style.display = "none";
    };
  }
  for (var q = 0; q < unitToItems11.length; q++) {
    unitToItems11[q].setAttribute("id", "measurement-units-2");
    unitToItems11[q].onclick = function () {
      if (fromButton.innerHTML === this.innerHTML) {
        alert(
          "You can't convert from " +
            this.innerHTML +
            " to " +
            this.innerHTML +
            "."
        );
        toButton.innerHTML = toButton.innerHTML;
      } else {
        toButton.innerHTML = this.innerHTML;
      }
      convertTheValue();
      unitToList11[0].style.display = "none";
    };
  }
}
document.onclick = function (e) {
  if (
    e.target.id !== "measurement-items" &&
    e.target.id !== "measurement-choose"
  ) {
    realMsList[0].style.display = "none";
  }
  if (e.target.id !== "measurement-units" && e.target.id !== "from-button") {
    realUnitList[0].style.display = "none";
    realUnitList1[0].style.display = "none";
    realUnitList2[0].style.display = "none";
    realUnitList3[0].style.display = "none";
    realUnitList4[0].style.display = "none";
    realUnitList5[0].style.display = "none";
    realUnitList6[0].style.display = "none";
    realUnitList7[0].style.display = "none";
    realUnitList8[0].style.display = "none";
    realUnitList9[0].style.display = "none";
    realUnitList10[0].style.display = "none";
    realUnitList11[0].style.display = "none";
  }
  if (e.target.id !== "measurement-units-2" && e.target.id !== "to-button") {
    unitToList[0].style.display = "none";
    unitToList1[0].style.display = "none";
    unitToList2[0].style.display = "none";
    unitToList3[0].style.display = "none";
    unitToList4[0].style.display = "none";
    unitToList5[0].style.display = "none";
    unitToList6[0].style.display = "none";
    unitToList7[0].style.display = "none";
    unitToList8[0].style.display = "none";
    unitToList9[0].style.display = "none";
    unitToList10[0].style.display = "none";
    unitToList11[0].style.display = "none";
  }
  if (e.target.id === "customization-pane") {
    customizationPane.style.display = "none";
  }
};
chooseButton.onclick = function () {
  if (realMsList[0].style.display === "block") {
    realMsList[0].style.display = "none";
  } else {
    realMsList[0].style.display = "block";
  }
};
fromButton.onclick = function () {
  if (chooseButton.innerHTML !== "Choose Measurement") {
    if (
      realUnitList[0].style.display === "none" &&
      realUnitList1[0].style.display === "none" &&
      realUnitList2[0].style.display === "none" &&
      realUnitList3[0].style.display === "none" &&
      realUnitList4[0].style.display === "none" &&
      realUnitList5[0].style.display === "none" &&
      realUnitList6[0].style.display === "none" &&
      realUnitList7[0].style.display === "none" &&
      realUnitList8[0].style.display === "none" &&
      realUnitList9[0].style.display === "none" &&
      realUnitList10[0].style.display === "none" &&
      realUnitList11[0].style.display === "none"
    ) {
      if (chooseButton.innerHTML === "Mass") {
        realUnitList[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Length") {
        realUnitList1[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Area") {
        realUnitList2[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Volume") {
        realUnitList3[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Temperature") {
        realUnitList4[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Energy") {
        realUnitList5[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Power") {
        realUnitList6[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Pressure") {
        realUnitList7[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Speed") {
        realUnitList8[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Time") {
        realUnitList9[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Data") {
        realUnitList10[0].style.display = "block";
      } else {
        realUnitList11[0].style.display = "block";
      }
    } else {
      realUnitList[0].style.display = "none";
      realUnitList1[0].style.display = "none";
      realUnitList2[0].style.display = "none";
      realUnitList3[0].style.display = "none";
      realUnitList4[0].style.display = "none";
      realUnitList5[0].style.display = "none";
      realUnitList6[0].style.display = "none";
      realUnitList7[0].style.display = "none";
      realUnitList8[0].style.display = "none";
      realUnitList9[0].style.display = "none";
      realUnitList10[0].style.display = "none";
      realUnitList11[0].style.display = "none";
    }
  } else {
    realUnitList[0].style.display = "none";
    alert(
      "You first have to choose the measurement type(Such as Mass, Temperature, etc(Using the ' Choose Measurement' button above);) before choosing which unit to convert from or to!"
    );
  }
};
toButton.onclick = function () {
  if (
    chooseButton.innerHTML !== "Choose Measurement" &&
    fromButton.innerHTML !== "From..."
  ) {
    if (
      unitToList[0].style.display === "none" &&
      unitToList1[0].style.display === "none" &&
      unitToList2[0].style.display === "none" &&
      unitToList3[0].style.display === "none" &&
      unitToList4[0].style.display === "none" &&
      unitToList5[0].style.display === "none" &&
      unitToList6[0].style.display === "none" &&
      unitToList7[0].style.display === "none" &&
      unitToList8[0].style.display === "none" &&
      unitToList9[0].style.display === "none" &&
      unitToList10[0].style.display === "none" &&
      unitToList11[0].style.display === "none"
    ) {
      if (chooseButton.innerHTML === "Mass") {
        unitToList[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Length") {
        unitToList1[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Area") {
        unitToList2[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Volume") {
        unitToList3[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Temperature") {
        unitToList4[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Energy") {
        unitToList5[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Power") {
        unitToList6[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Pressure") {
        unitToList7[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Speed") {
        unitToList8[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Time") {
        unitToList9[0].style.display = "block";
      } else if (chooseButton.innerHTML === "Data") {
        unitToList10[0].style.display = "block";
      } else {
        unitToList11[0].style.display = "block";
      }
    } else {
      unitToList[0].style.display = "none";
      unitToList1[0].style.display = "none";
      unitToList2[0].style.display = "none";
      unitToList3[0].style.display = "none";
      unitToList4[0].style.display = "none";
      unitToList5[0].style.display = "none";
      unitToList6[0].style.display = "none";
      unitToList7[0].style.display = "none";
      unitToList8[0].style.display = "none";
      unitToList9[0].style.display = "none";
      unitToList10[0].style.display = "none";
      unitToList11[0].style.display = "none";
    }
  } else {
    unitToList[0].style.display = "none";
    alert(
      "You first have to specify which unit to convert from(Using the 'From...' button), before choosing the unit to convert to!"
    );
  }
};
buttonForSwitching.onclick = interchangUnits;
function interchangUnits() {
  if (fromButton.innerHTML !== "From..." && toButton.innerHTML !== "To...") {
    var temp = fromButton.innerHTML;
    fromButton.innerHTML = toButton.innerHTML;
    toButton.innerHTML = temp;
    convertTheValue();
  } else {
    if (fromButton.innerHTML === "From...") {
      alert(
        "You've first got to choose which units to convert from, before you can be able to interchange the units."
      );
    } else {
      alert(
        "You've first got to choose which units to convert to, before you can be able to interchange the units."
      );
    }
  }
}
customizationButton.onclick = function () {
  customizationPane.style.display = "block";
};
for (var u = 0; u < customizationImages1.length; u++) {
  customizationImages1[u].onclick = function () {
    if (this.style.boxShadow === "unset") {
      bodyBgSource = this.getAttribute("data-image-source");
      for (var x = 0; x < customizationImages1.length; x++) {
        customizationImages1[x].style.boxShadow = "unset";
      }
      this.style.boxShadow = "0 0 0 8px #1886f3af";
    } else {
      bodyBgSource = "";
      this.style.boxShadow = "unset";
    }
  };
}
for (var v = 0; v < customizationImages2.length; v++) {
  customizationImages2[v].onclick = function () {
    if (this.style.boxShadow === "unset") {
      converterBgSource = this.getAttribute("data-image-source");
      for (var y = 0; y < customizationImages2.length; y++) {
        customizationImages2[y].style.boxShadow = "unset";
      }
      this.style.boxShadow = "0 0 0 8px #1886f3af";
    } else {
      converterBgSource = "";
      this.style.boxShadow = "unset";
    }
  };
}
cancelButton.onclick = function () {
  customizationPane.style.display = "none";
};
saveButton.onclick = function () {
  var docWidth = document.documentElement.clientWidth;
  if (
    bodyBgSource === "images/anc-house-view.png" ||
    bodyBgSource === "images/even-layer.png" ||
    bodyBgSource === "images/crop-well.png"
  ) {
    copyrightHint.style.color = "#fff";
  } else {
    copyrightHint.style.color = "#808080";
  }
  documentElmnt.style.backgroundImage = "url('" + bodyBgSource + "')";
  if (converterBgSource === "transparent") {
    converterHeader.style.color = "#808080";
    measurementsHolder.style.background = "transparent";
  } else {
    converterHeader.style.color = "#fff";
    measurementsHolder.style.background =
      "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url('" +
      converterBgSource +
      "') no-repeat";
  }
  customizationPane.style.display = "none";
};
