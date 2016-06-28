
jQuery.noConflict();
jQuery(document).ready(function ($) {
    //alert("h: " + $(window).height() + "w: " + $(window).width());
    var MaxPhotoNum = 30;
    if (($(window).height() > 520) && ($(window).width() > 700)) {
        $("h5").show(); $("label").show(); $("h6").show();
    }
    if (($(window).height() < 520) || ($(window).width() < 700)) {
        $("h5").hide(); $("label").hide(); $("h6").hide();
    }

    $("#myAbout").innerHeight($(window).height() - 150);

    var temp, imgSum = 1, lastPos;
    imgSum = Math.floor(($(window).width()) / 120);
    if (imgSum >= MaxPhotoNum) imgSum = MaxPhotoNum;

    var pid = [];
    var tempId, tempImg, tempNum, str;
    for (var i = 0; i < MaxPhotoNum; i++) {
        tempNum = i + 1;
        if (i < 9)
            tempId = "p0" + tempNum;
        else
            tempId = "p" + tempNum;
        str = "<img id=" + tempId + " width='120px' height='90px'>";
        tempImg = $(str);
        str = "../../MySource/" + tempId + ".gif";
        tempImg.attr("src", str);
        tempImg.appendTo("#picInBottom");
        pid[i] = "#" + tempId;
        $(pid[i]).hide();
    }

    temp = ($(window).width() - imgSum * 120) / 2;
    for (var i = 0; i < imgSum ; i++) {
        $(pid[i]).show();
        $(pid[i]).offset({ left: temp });
        temp += 120;
    }
    lastPos = temp - 120;

    $("label").click(function (e) {
        e.preventDefault();
        $("h6").slideToggle("slow");
    });

    $(window).resize(function (e) {
        e.preventDefault();
        if (($(window).height() > 520) && ($(window).width() > 700)) {
            $("h5").show(); $("label").show(); $("h6").show();
        }
        if (($(window).height() < 520) || ($(window).width() < 700)) {
            $("h5").hide(); $("label").hide(); $("h6").hide();
        }
        $("#myAbout").innerHeight($(window).height() - 150);

        imgSum = Math.floor(($(window).width()) / 120);
        if (imgSum >= MaxPhotoNum) imgSum = MaxPhotoNum;
        for (var i = 0; i < MaxPhotoNum; i++) {
            $(pid[i]).hide();
        }

        temp = ($(window).width() - imgSum * 120) / 2;
        for (var i = 0; i < imgSum ; i++) {
            $(pid[i]).show();
            $(pid[i]).offset({ left: temp });
            temp += 120;
        }
        lastPos = temp - 120;
    });

    $("img").hover(function (e) {
        var pos = 0;
        var eid = e.target.id;
        if (eid[0] != "p" || isNaN(Number(eid.slice(1))) || Number(eid.slice(1)) > MaxPhotoNum)
            return;
        eid = Number(eid.slice(1));
        if (eid <= (imgSum - 1)) {
            $(pid[eid]).hide();
            $(this).height(180);
            $(this).width(240);
            pos = $(window).height() - 180;
            $(this).offset({ top: pos });
        }
        else {
            $(this).prev().hide();
            $(this).height(180);
            $(this).width(240);
            pos = $(window).height() - 180;
            lastPos = lastPos - 120;
            $(this).offset({ left: lastPos, top: pos });
        }
    },
    function (e) {
        var pos = 0;
        var eid = e.target.id;
        if (eid[0] != "p" || isNaN(Number(eid.slice(1))) || Number(eid.slice(1)) > MaxPhotoNum)
            return;
        eid = Number(eid.slice(1));
        if (eid <= (imgSum - 1)) {
            $(this).height(90);
            $(this).width(120);
            pos = $(window).height() - 90;
            $(this).offset({ top: pos });
            $(pid[eid]).show();
        }
        else {
            $(this).height(90);
            $(this).width(120);
            pos = $(window).height() - 90;
            lastPos = lastPos + 120;
            $(this).offset({ left: lastPos, top: pos });
            $(this).prev().show();
        }
    });
});

// @copyright wendy xiao ASP.NET&MVC demo on 6-8-2016