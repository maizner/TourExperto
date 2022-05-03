


	var inputs = $( '.js_thumbs_file' );
	

	Array.prototype.forEach.call( inputs, function( input )
	{
		
		input.addEventListener( 'change', function( e )
		{
			var fileUploaded = $(this).find('.file_uploaded');
			
			var label	 = $(this).find('.files_container');
			var fileImage=  $(this).find('label .img-container');
			var theDate= label.find( '.date_time .date' );
			var theTime= label.find( '.date_time .time' );
			var uploadBtn = $(this).find('.button_container_right');
			var exploreBtn = $(this).find('.button_container_left')
			var cleanBtn = $(this).find('.js_clean')

			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
				
			else 
				
				fileName = e.target.value.split( '\\' ).pop();


			if( fileName ){
				//Formato js para agregar imagen. No en uso. Sale de BD
				
        		var tmppath = URL.createObjectURL(event.target.files[0]);
				// fileImage.fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
				fileImage.fadeIn("fast").html('<img src="'+ URL.createObjectURL(event.target.files[0])+'" alt="" width="100%"  height="auto" class="img">');
				$(label).append(fileImage);	
				fileUploaded.html('<svg width="50px" height="50px" fill="#ffffff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M39 38H11c-1.7 0-3-1.3-3-3V17c0-1.7 1.3-3 3-3h6c.2 0 .5-.2.6-.3l1.1-2.2c.4-.8 1.4-1.4 2.3-1.4h8c.9 0 1.9.6 2.3 1.4l1.1 2.2c.1.2.4.3.6.3h6c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3zM11 16c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1h-6c-.9 0-1.9-.6-2.3-1.4l-1.1-2.2c-.1-.2-.4-.4-.6-.4h-8c-.2 0-.5.2-.6.3l-1.1 2.2c-.4.9-1.4 1.5-2.3 1.5h-6z"/><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"/><circle cx="35" cy="18" r="1"/><path d="M12 12h4v1h-4z"/><path d="M25 21v-1c-2.8 0-5 2.2-5 5h1c0-2.2 1.8-4 4-4z"/></svg>');
				fileUploaded.attr('title',fileName);
				fileUploaded.addClass('browse');
				label.addClass("up");
				uploadBtn.removeClass("d-none");
				exploreBtn.addClass("d-none")
				const date = new Date();
				/*TODO DEV: Pasar lang 'en' x config */
				const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' , hour: '2-digit', minute: '2-digit'}) 
				const [{ value: month },,{ value: day },,{ value: year },,{ value: hour },,{ value: minute }] = dateTimeFormat .formatToParts(date ) 
				theDate.html(`${day}  ${month} ${year }`);
				theTime.html(` ${hour }:${minute } hs`);

			}else{
			
				label.removeClass("up");
				uploadBtn.addClass("d-none");
				exploreBtn.removeClass("d-none")
			}

			$(cleanBtn).on('click', function(){
				$(fileUploaded, theDate, theTime).innerHTML ='';
				label.removeClass("up");
				uploadBtn.addClass("d-none");
				exploreBtn.removeClass("d-none")
			});
		
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0aHVtYnNmaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblx0dmFyIGlucHV0cyA9ICQoICcuanNfdGh1bWJzX2ZpbGUnICk7XG5cdFxuXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoIGlucHV0cywgZnVuY3Rpb24oIGlucHV0IClcblx0e1xuXHRcdFxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBmdW5jdGlvbiggZSApXG5cdFx0e1xuXHRcdFx0dmFyIGZpbGVVcGxvYWRlZCA9ICQodGhpcykuZmluZCgnLmZpbGVfdXBsb2FkZWQnKTtcblx0XHRcdFxuXHRcdFx0dmFyIGxhYmVsXHQgPSAkKHRoaXMpLmZpbmQoJy5maWxlc19jb250YWluZXInKTtcblx0XHRcdHZhciBmaWxlSW1hZ2U9ICAkKHRoaXMpLmZpbmQoJ2xhYmVsIC5pbWctY29udGFpbmVyJyk7XG5cdFx0XHR2YXIgdGhlRGF0ZT0gbGFiZWwuZmluZCggJy5kYXRlX3RpbWUgLmRhdGUnICk7XG5cdFx0XHR2YXIgdGhlVGltZT0gbGFiZWwuZmluZCggJy5kYXRlX3RpbWUgLnRpbWUnICk7XG5cdFx0XHR2YXIgdXBsb2FkQnRuID0gJCh0aGlzKS5maW5kKCcuYnV0dG9uX2NvbnRhaW5lcl9yaWdodCcpO1xuXHRcdFx0dmFyIGV4cGxvcmVCdG4gPSAkKHRoaXMpLmZpbmQoJy5idXR0b25fY29udGFpbmVyX2xlZnQnKVxuXHRcdFx0dmFyIGNsZWFuQnRuID0gJCh0aGlzKS5maW5kKCcuanNfY2xlYW4nKVxuXG5cdFx0XHR2YXIgZmlsZU5hbWUgPSAnJztcblxuXHRcdFx0aWYoIHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAxIClcblx0XHRcdFx0ZmlsZU5hbWUgPSAoIHRoaXMuZ2V0QXR0cmlidXRlKCAnZGF0YS1tdWx0aXBsZS1jYXB0aW9uJyApIHx8ICcnICkucmVwbGFjZSggJ3tjb3VudH0nLCB0aGlzLmZpbGVzLmxlbmd0aCApO1xuXHRcdFx0XHRcblx0XHRcdGVsc2UgXG5cdFx0XHRcdFxuXHRcdFx0XHRmaWxlTmFtZSA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCAnXFxcXCcgKS5wb3AoKTtcblxuXG5cdFx0XHRpZiggZmlsZU5hbWUgKXtcblx0XHRcdFx0Ly9Gb3JtYXRvIGpzIHBhcmEgYWdyZWdhciBpbWFnZW4uIE5vIGVuIHVzby4gU2FsZSBkZSBCRFxuXHRcdFx0XHRcbiAgICAgICAgXHRcdHZhciB0bXBwYXRoID0gVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuXHRcdFx0XHQvLyBmaWxlSW1hZ2UuZmFkZUluKFwiZmFzdFwiKS5hdHRyKCdzcmMnLFVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSk7XG5cdFx0XHRcdGZpbGVJbWFnZS5mYWRlSW4oXCJmYXN0XCIpLmh0bWwoJzxpbWcgc3JjPVwiJysgVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pKydcIiBhbHQ9XCJcIiB3aWR0aD1cIjEwMCVcIiAgaGVpZ2h0PVwiYXV0b1wiIGNsYXNzPVwiaW1nXCI+Jyk7XG5cdFx0XHRcdCQobGFiZWwpLmFwcGVuZChmaWxlSW1hZ2UpO1x0XG5cdFx0XHRcdGZpbGVVcGxvYWRlZC5odG1sKCc8c3ZnIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIiBmaWxsPVwiI2ZmZmZmZlwiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0zOSAzOEgxMWMtMS43IDAtMy0xLjMtMy0zVjE3YzAtMS43IDEuMy0zIDMtM2g2Yy4yIDAgLjUtLjIuNi0uM2wxLjEtMi4yYy40LS44IDEuNC0xLjQgMi4zLTEuNGg4Yy45IDAgMS45LjYgMi4zIDEuNGwxLjEgMi4yYy4xLjIuNC4zLjYuM2g2YzEuNyAwIDMgMS4zIDMgM3YxOGMwIDEuNy0xLjMgMy0zIDN6TTExIDE2Yy0uNiAwLTEgLjQtMSAxdjE4YzAgLjYuNCAxIDEgMWgyOGMuNiAwIDEtLjQgMS0xVjE3YzAtLjYtLjQtMS0xLTFoLTZjLS45IDAtMS45LS42LTIuMy0xLjRsLTEuMS0yLjJjLS4xLS4yLS40LS40LS42LS40aC04Yy0uMiAwLS41LjItLjYuM2wtMS4xIDIuMmMtLjQuOS0xLjQgMS41LTIuMyAxLjVoLTZ6XCIvPjxwYXRoIGQ9XCJNMjUgMzRjLTUgMC05LTQtOS05czQtOSA5LTkgOSA0IDkgOS00IDktOSA5em0wLTE2Yy0zLjkgMC03IDMuMS03IDdzMy4xIDcgNyA3IDctMy4xIDctNy0zLjEtNy03LTd6XCIvPjxjaXJjbGUgY3g9XCIzNVwiIGN5PVwiMThcIiByPVwiMVwiLz48cGF0aCBkPVwiTTEyIDEyaDR2MWgtNHpcIi8+PHBhdGggZD1cIk0yNSAyMXYtMWMtMi44IDAtNSAyLjItNSA1aDFjMC0yLjIgMS44LTQgNC00elwiLz48L3N2Zz4nKTtcblx0XHRcdFx0ZmlsZVVwbG9hZGVkLmF0dHIoJ3RpdGxlJyxmaWxlTmFtZSk7XG5cdFx0XHRcdGZpbGVVcGxvYWRlZC5hZGRDbGFzcygnYnJvd3NlJyk7XG5cdFx0XHRcdGxhYmVsLmFkZENsYXNzKFwidXBcIik7XG5cdFx0XHRcdHVwbG9hZEJ0bi5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcblx0XHRcdFx0ZXhwbG9yZUJ0bi5hZGRDbGFzcyhcImQtbm9uZVwiKVxuXHRcdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdFx0LypUT0RPIERFVjogUGFzYXIgbGFuZyAnZW4nIHggY29uZmlnICovXG5cdFx0XHRcdGNvbnN0IGRhdGVUaW1lRm9ybWF0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJzItZGlnaXQnICwgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0J30pIFxuXHRcdFx0XHRjb25zdCBbeyB2YWx1ZTogbW9udGggfSwseyB2YWx1ZTogZGF5IH0sLHsgdmFsdWU6IHllYXIgfSwseyB2YWx1ZTogaG91ciB9LCx7IHZhbHVlOiBtaW51dGUgfV0gPSBkYXRlVGltZUZvcm1hdCAuZm9ybWF0VG9QYXJ0cyhkYXRlICkgXG5cdFx0XHRcdHRoZURhdGUuaHRtbChgJHtkYXl9ICAke21vbnRofSAke3llYXIgfWApO1xuXHRcdFx0XHR0aGVUaW1lLmh0bWwoYCAke2hvdXIgfToke21pbnV0ZSB9IGhzYCk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XG5cdFx0XHRcdGxhYmVsLnJlbW92ZUNsYXNzKFwidXBcIik7XG5cdFx0XHRcdHVwbG9hZEJ0bi5hZGRDbGFzcyhcImQtbm9uZVwiKTtcblx0XHRcdFx0ZXhwbG9yZUJ0bi5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKVxuXHRcdFx0fVxuXG5cdFx0XHQkKGNsZWFuQnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHQkKGZpbGVVcGxvYWRlZCwgdGhlRGF0ZSwgdGhlVGltZSkuaW5uZXJIVE1MID0nJztcblx0XHRcdFx0bGFiZWwucmVtb3ZlQ2xhc3MoXCJ1cFwiKTtcblx0XHRcdFx0dXBsb2FkQnRuLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuXHRcdFx0XHRleHBsb3JlQnRuLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpXG5cdFx0XHR9KTtcblx0XHRcblx0XHR9KTtcblxuXHRcdC8vIEZpcmVmb3ggYnVnIGZpeFxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1cycsIGZ1bmN0aW9uKCl7IGlucHV0LmNsYXNzTGlzdC5hZGQoICdoYXMtZm9jdXMnICk7IH0pO1xuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgZnVuY3Rpb24oKXsgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSggJ2hhcy1mb2N1cycgKTsgfSk7XG5cdH0pO1xuXG4iXSwiZmlsZSI6InRodW1ic2ZpbGUuanMifQ==
