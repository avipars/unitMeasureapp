/* For JavasScript */

//One Liner
var a = UnitOf.Mass.fromPounds(5).toKilograms; //2.26796 returned as 5 pounds is 2.26796 kilograms

//Set Then Convert
var feet = UnitOf.Length.fromFeet(5.5); //Instantiate UnitOf.Length and set "feet" as 5.5
var b = feet.toInches; //66 returned as 5.5 feet is 66 inches
var c = feet.toMeters; //1.6764 returned as 5.5 feet is 1.6764 meters

//Convert Data Type and Fractions
var d = UnitOf.DataType("12.5").toFloat(); //12.5 of type Float returned. 0 would be returned if conversion failed
var e = UnitOf.DataType("Not A Number").toInt(10); //10 of type Int returned since conversion fails
var f = UnitOf.DataType(0.5).toFraction(); //"1/2" of type string returned. Empty string would be returned if failed

//Create your own custom measurement
var x = UnitOf.Anything("FEET", 1, true, {METERS:0.3048, INCHES:12}); //Custom measurement w/ 3 units
var g = x.convertNow(36, "INCHES", "FEET"); //3 returned as 36 inches is 3 feet
var h = x.convertNow("3", "FEET", "METERS"); //0.9144 returned as 3 feet is 0.9144 meters