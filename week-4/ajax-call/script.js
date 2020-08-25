var xhr = new XMLHttpRequest();
xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
xhr.open("GET", chrome.extension.getURL('resources.json'), true);
xhr.send();

$(document).ready(function() {
    $("#retrieve-resources").click(function() {
        var displayResources = $("#display-resources");
        
        displayResources.text("Loading data from JSON source...");
    
        $.ajax({
        type: "GET",
        url: "resources.json", // Using our resources.json file to serve results
        success: function(result) {
            console.log(result);
            var output =
            "<table><thead><tr><th>First Name</th><th>Middle Name</th><th>Last Name</th></thead><tbody>";
            for (var i in result) {
            output +=
                "<tr><td>" +
                result[i].firstName +
                "</td><td>" +
                result[i].middleName +
                "</td><td>" +
                result[i].lastName +
                "</td></tr>";
            }
            output += "</tbody></table>";
    
            displayResources.html(output);
            $("table").addClass("table");
        }
        });
    });
});