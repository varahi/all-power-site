function homePage()
{
	if(typeof window.external != "undefined")
	{
		document.body.style.behavior = "url(#default#homepage)";
		document.body.setHomePage(window.location);
	}
	else
	{
		alert("Ваш браузер не поддерживает автоматическую установку домашней странички");
	}
}

function bookmark()
{
    if (typeof window.external != "undefined" && typeof window.external.AddFavorite != "undefined") {
        window.external.AddFavorite (window.location, document.title);
    } else if (typeof window.opera != "undefined" && window.opera.version() < 9) {
        alert ("Нажмите [Ctrl] + [T] для создания закладки на эту страницу.");
    } else {
        alert ("Нажмите [Ctrl] + [D] для создания закладки на эту страницу.");
    }
}

function writeFlash(width,height,id,src,bgcolor,transparent)
{
	if(transparent){
		paramT='<param name="wmode" value="transparent">';
		embedT=' wmode="transparent"';
	} else {
		paramT='';
		embedT='';
	}
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+width+'" height="'+height+'" id="'+id+'" align="middle">');
	document.write('<param name="allowScriptAccess" value="sameDomain" />');
	document.write('<param name="movie" value="'+src+'" />');
	document.write('<param name="quality" value="high" />');
	document.write(paramT);
	document.write('<param name="bgcolor" value="'+bgcolor+'" />');
	document.write('<embed src="'+src+'" quality="high" bgcolor="'+bgcolor+'" width="'+width+'" height="'+height+'" name="'+id+'" align="middle" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"'+embedT+' />');
	document.write('</embed>');
	document.write('</object>');
}

function openPopup(url,width,height)
{
	popup_wnd = window.open(url, "", "location=no,status=yes,toolbar=no,menubar=no,scrollbars=yes,resizable=no,width="+width+",height="+height);
	popup_wnd.focus();
}

function openPopupNoBar(url,width,height)
{
	popup_wnd = window.open(url, "popup_wnd", "location=no,status=yes,toolbar=no,menubar=no,scrollbars=no,resizable=yes,width="+width+",height="+height);
	popup_wnd.focus();
}


