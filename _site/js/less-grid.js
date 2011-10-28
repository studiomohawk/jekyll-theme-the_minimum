/*
	less grid v1.0.0 - (c) Arnau March http://arnaumarch.com/en/lessgrid.html, freely distributable under the terms of the MIT license.
*/

$(document).ready(function() {
	createSwitch();
});

function createGrid () {
	$('.foot_inner').append('<div id="less-grid"></div>');
	var pageWidth = $('.foot_inner').width();
	$('#less-grid').css({
							width: pageWidth,
							position: "fixed",
							top: "0",
							bottom: "0",
							zIndex: 900
	});
	var colWidth = 60;
	var colSep = 24;
	var colCount = 1;
	for(colLeft=0;colLeft<=pageWidth;colLeft=(colWidth+colSep)*(colCount-1)){
		$('#less-grid').append('<span class="col col-'+colCount+'">&nbsp;col:&nbsp;'
		+colCount+'<br/>&nbsp;w:&nbsp;'+(((colWidth+colSep)*colCount)-colSep)+'</span>');
		$('#less-grid .col-'+colCount).css({
								width: colWidth,
								position: "absolute",
								top: "0",
								left: colLeft,
								bottom: "0",
								background: "#3d5fa3",
								opacity: 0.5,
								color: "#fff",
								fontSize: "13px",
								paddingTop: "33px"
		});
		colCount++;
	};
}

function createSwitch () {
	$('body').append('<span id="less-grid-switch">show grid</span>');
	$('#less-grid-switch').css({
							position: "fixed",
							top: "0",
							left: "0",
							background: "#3d5fa3",
							border: "2px solid #fff",
							borderTop: 0,
							color: "#fff",
							fontSize: "13px",
							lineHeight: "13px",
							padding: "2px 8px 6px 8px",
							cursor: "pointer",
							"border-radius": "0 0 5px 5px",
							"-moz-border-radius": "0 0 5px 5px",
							zIndex: 1000

	});
	$('#less-grid-switch').toggle(function() {
		$(this).text("x");
		$('#less-grid').show();
		$(this).attr('rel','on');
		$('#less-grid').remove();
		createGrid();
	}, function() {
		$(this).text('show grid');
		$('#less-grid').hide();
		$(this).attr('rel','off');
	 });
}

$(function(){
	$(window).resize(function(){
		if($('#less-grid-switch').attr('rel')=="on") {
			$('#less-grid').remove();
			createGrid();
		}
	 });
});
