var cube = angular.module('cube', []);
function baseCtrl($scope,$location) {
    if (location.href.indexOf("mobile=true") != -1 || Util.getFromLocalStorage("STORE-IsMOBILE")) {
        $scope.sections = appglobal.configuration_mobile;
        Util.setToLocalStorage("STORE-IsMOBILE", true);
    } else {
        $scope.sections = appglobal.configuration;
    }

    $scope.navigate = function (tile) {
        var el = $('#' + tile.tileId);                
        if (tile.appUrl != null && tile.appUrl.trim() != "" && tile.type !== "folder") {
            showSplashDiv(el, tile);
        } else {
            showFolderOption(el, tile);
        }        
    };

    function showFolderOption(el, tile) {
        var folderContent = $(".folderContent");
        var folderContentShown = folderContent.css("display") != "none";
        folderContent.remove();        
        var clickedFolder = $(el);
        clickedFolder.parent(".tile-image").after(folderContent);
        folderContent.find(".folderName").html("").html("<div><img src='img/crmfolder.jpg'></img></div>");        
        if (!folderContentShown) {
            $('.tile').not($(el)).animate({
                opacity: 0.00
            }, "fast");
        } else {
            $('.tile').animate({
                opacity: 1.00
            }, "fast");
        }
        folderContent.slideToggle("fast");        
    }
    
    function showSplashDiv(el, tile) {
        var splashDiv = $("<div/>");        
        splashDiv.addClass([tile.size, 'bg-color-blue'].join(" "));
        splashDiv.css({
            'position': 'absolute',
            'left': 10,
            'top': 10,
            'width': el.width() + "px",
            'height': el.height() + "px"
        });
        splashDiv.appendTo(document.body);
        splashDiv.animate({
            left: $(window).scrollLeft(),
            top: $(window).scrollTop(),
            width: "100%",
            height: "100%"
        }, 500, function () {
            launchApp(tile.id, tile.name, tile.appUrl, function () {
                splashDiv.fadeOut();
            });
        });
        splashDiv.append(
            $('<img />').attr('src', 'img/loading.jpg')
                .css({
                    'position': 'absolute',
                    'left': ($(window).width() - 512) / 2,
                    'top': ($(window).height() - 512) / 2
                })
        );
    }

    function launchApp(id, title, url, callback) {
        var popupdiv, iframe;
        if ($("#div_" + id).length > 0) {
            popupdiv = $("#div_" + id);
            iframe = $("#iframe_" + id);
            popupdiv.toggle();
        } else {
            popupdiv = $('<div id="div_' + id + '" class=popupdiv >'  + '</div>');                     
            popupdiv.appendTo(document.body);
            iframe = $('<iframe id="iframe_' + id + '" frameborder="no" class=app_iframe />');            
            var minimize = $('<img src="img/minimize.png" class=minimize></img>');            
            minimize.click(function () {                                
                //popupdiv.toggle("slide", { direction: 'down' });
                popupdiv.animate({ height: "toggle", bottom: "4%" });
                //popupdiv.slideDown();
            });         
            iframe.appendTo(popupdiv);
            minimize.appendTo(popupdiv);

            addTab(id, title);
        }
        
        this.appRunning = true;
                        
        iframe.attr({ 'src': url })
        iframe.load(function () {
            callback();
            $(this).css('visibility', 'visible');
        });

        location.hash = id;
    }

    function addTab(id,title) {
        var label = title,
            divid = "div_" + id,
          id = "tabs-" + id,
          tabTemplate = "<li><a href='#{href}' >#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
          li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)),          
          tabs = $("#tabs").tabs();

        li.delegate("a", "click", function () {
            //$('#' + divid).toggle('slide',{direction:'down'});
            $('#' + divid).animate({ height: "toggle", bottom: "4%" });
        });

        li.delegate("span.ui-icon-close", "click", function () {
            
            var panelId = $(this).closest("li").remove().attr("aria-controls");
            var divid = "div_" + panelId.replace("tabs-", "");
            //$(this).closest("#" + panelId).remove();
            //$(this).closest("#" + divid).remove();
            //tabs.find(".ui-tabs-nav").remove(li);
            $("#" + panelId).remove();
            $("#" + divid).remove();
            tabs.tabs("refresh");
        });          
        tabs.find(".ui-tabs-nav").append(li);        
        tabs.tabs("refresh");        
    }
}
