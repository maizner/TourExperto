


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

