const { is } = require("express/lib/request");

$(document).ready(function () {
    let selectedAmenities = [];
    // Update list of selected amenities
    function amenities() {
        let amenitiesDiv = $("#amenities");
        amenitiesDiv.empty();
        let h4 = $("h4");
        h4.text(selectedAmenities.join(", "));
        amenitiesDiv.append(h4)
    }
    // Event Listener for checkbox changes
    $("input[type='checkbox']").change(function() {
        let amenityId = $(this).attr("data-id");

        if ($(this).is(":checked")) {
            if (!selectedAmenities.includes(amenityId)) {
                selectedAmenities.push(amenityId);
            }
        } else {
            let index = selectedAmenities.indeOf(amenityId);
            if (index !== -1) {
                selectedAmenities.splice(index, 1);
            }
        }
        amenities();
    })
});