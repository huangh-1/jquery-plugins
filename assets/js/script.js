console.log("hello world");

if(jQuery) {
    console.log("jquery loaded")
}
else {
    console.log("no jquery")
}

let mobileMenuOpen = false;

$("#mobile-menu-button").click(function(){
    
    if(mobileMenuOpen == false) {
        $("#main-menu").removeClass("display-none-mobile");
        $("#mobile-menu-text").text("Close");
        let close = $("#mobile-menu-icon").attr("src").replace("menu", "close");
        console.log(close);
        $("#mobile-menu-icon").attr("src", close);

        mobileMenuOpen = true;
    }

    else {
        $("#main-menu").addClass("display-none-mobile");
        $("#mobile-menu-text").text("Menu");
        let open = $("#mobile-menu-icon").attr("src").replace("close", "menu");

        $("#mobile-menu-icon").attr("src", open);

        mobileMenuOpen = false; 
    }
});