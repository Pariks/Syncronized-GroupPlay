import $ from "jquery";
 
import "./application.scss";

$("body").html("whoa");

if(module.hot){
	module.hot.accept();
}