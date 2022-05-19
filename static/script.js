function disableElementsAfterBrowsingInvoice(className) {
    elements = document.getElementsByClassName("browse-inputs");
    for (element of elements){
        element.disabled = true
    }
}

function getOrderStatus(){
    // get data from db

    return 'قيد الانشاء'
}


document.getElementById("orderNumber").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        orderNumber = document.getElementById("orderNumber");
        if (Number.isInteger(orderNumber.value - 1)) {
            disableElementsAfterBrowsingInvoice()
            clientContainer = document.getElementsByClassName("here");

            clientContainer[0].innerHTML += `<div class="col-3 col-sm-5 col-xs-2 col-md-4 col-lg-3 col-xl-3 p-0">
            <input type="text" class="form-control form-control-md rounded mx-3 browse-inputs" id="orderStatus"
                placeholder="حالة الطلب" value="${getOrderStatus()}" disabled></div>`
        }
    }
})

