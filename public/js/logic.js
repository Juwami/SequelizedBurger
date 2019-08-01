
// burger-name is from input
$("#submitBtn").on("click", function (e) {
    e.preventDefault();
    let burger = {
        burger_name: $("#burger-name").val().trim()
    }

    // console.log(burger.burger_name)

    if (burger.burger_name != "") {

        // console.log("Burger Name:", burger.burger_name)

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(function () {
            // reload doesn't work for POST - need to ask TAs
            location.reload();
        })
    }
    else {
        alert("You did not input a name.")
    }
});

$(".eat-burger").on("click", function () {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
            devoured: 1
        }
    }).then(function () {
        location.reload();
    })
})

$(".digest-burger").on("click", function () {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(function () {
        location.reload();
    })
})