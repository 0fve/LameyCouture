

function disableElementsAfterBrowsingInvoice(className) {
    elements = document.getElementsByClassName(className);
    for (element of elements) {
        element.disabled = true
    }
}

function getOrderStatus() {
    // get data from db

    return 'قيد الانشاء'
}


document.getElementById("orderNumber").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        orderNumber = document.getElementById("orderNumber");
        if (Number.isInteger(orderNumber.value - 1)) {
            disableElementsAfterBrowsingInvoice("browse-inputs")

            clientContainer = document.getElementsByClassName("status-container");

            // clientContainer[0].innerHTML += `<div class="col-3 col-sm-5 col-xs-2 col-md-4 col-lg-3 col-xl-3 p-0">
            // <input type="text" class="form-control form-control-md rounded mx-3 browse-inputs" id="orderStatus"
            //     placeholder="حالة الطلب" value="${getOrderStatus()}" disabled></div>`
        }
    }
})


function print() {
    var frame = document.getElementById('print')
    frame.contentWindow.focus()
    frame.contentWindow.print()
}



