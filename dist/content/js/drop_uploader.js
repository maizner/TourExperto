//http://demo.borisolhor.com/drop-uploader/
(function($) {
    jQuery.fn.drop_uploader = function(options) {
        options = $.extend({
            // Localization
            uploader_text: 'Drop files to upload, or',
            browse_text: 'Browse',
            only_one_error_text: 'Only one file allowed',
            not_allowed_error_text: 'File type is not allowed',
            big_file_before_error_text: 'Files, bigger than',
            big_file_after_error_text: 'is not allowed',
            allowed_before_error_text: 'Only',
            allowed_after_error_text: 'files allowed',
            // CSS
            browse_css_class: 'button button-primary',
            browse_css_selector: 'file_browse',
            uploader_icon: '<i class="pe-7s-cloud-upload"></i>',
            file_icon: '<i class="pe-7s-file"></i>',
            progress_color: '#4a90e2',
            // Main Options
            time_show_errors: 5,
            layout: 'thumbnails', // thumbnails/list
            method: 'normal', // normal/ajax/chunked
            chunk_size: 1000000, 
            // AJAX URL
            url: 'ajax_upload.php',
            delete_url: 'ajax_delete.php',
        }, options);

        this.each(function(i, val) {
            var v = val;
            // Get input file params
            var file_accept = $(v).attr("accept");
            var file_multiple = $(v).prop("multiple");
            var file_multiple_count = parseInt($(v).data("count"));
            var input_name = $(v).prop("name");
            var max_file_size = 0; 

            var uploader_id = 'drop_uploader_' + i;

            var added_files = 0;
            var files_index = 0;

            var cur_form = $(v).parent("form");
            var input_max_file_size = $(cur_form).find("input[name=MAX_FILE_SIZE]").val();
            if(input_max_file_size !== undefined) {
                max_file_size = parseInt(input_max_file_size);
            }

            var data_max_file_size = $(v).data("maxfilesize");
            if(data_max_file_size !== undefined) {
                max_file_size = parseInt(data_max_file_size);
            }

            var layout = options.layout;
            if($(v).data("layout") == "thumbnails") {
                layout = "thumbnails";
            } else if($(v).data("layout") == "list") {
                layout = "list";
            }

            var submit_method = options.method;
            if($(v).data("method") == "normal") {
                submit_method = "normal";
            } else if($(v).data("method") == "ajax") {
                submit_method = "ajax";
            } else if($(v).data("method") == "chunked") {
                submit_method = "chunked";
            }

            var submit_url = options.url;
            if($(v).data("url") != "" && $(v).data("url") !== undefined) {
                submit_url = $(v).data("url");
            }

            var delete_url = options.delete_url;
            if($(v).data("deleteurl") != "" && $(v).data("deleteurl") !== undefined) {
                delete_url = $(v).data("deleteurl");
            }

            // Wrap file input field
            $(v).attr('id', get_random_id());
            $(v).wrap('<div id="' + uploader_id + '" class="drop_uploader drop_zone"></div>');
            $(v).before('<span class="errors"></span>');
            if(submit_method == "ajax" || submit_method == "chunked") {
                $(v).attr('name', '');
            }

            var ul_classes = "files";

            if(layout == "thumbnails") {
                ul_classes += " thumb"
            }
            if(submit_method == "ajax") {
                ul_classes += " ajax"
            }
            if(submit_method == "chunked") {
                ul_classes += " ajax"
            }

            $(v).before('<ul class="' + ul_classes + '"></ul>');
            $(v).before('<div class="text_wrapper">' + options.uploader_icon + ' <span class="text">' + options.uploader_text + ' <a href="#" class="' + options.browse_css_class + ' ' + options.browse_css_selector + '">' + options.browse_text + '</a></span></div>');


            var drop_zone = $('#' + uploader_id);

            drop_zone[0].ondragover = function(event) {
                drop_zone.addClass('hover');
                if(submit_method == "normal") {
                    maximizeInput(v);
                    return false;
                } else if(submit_method == "ajax" || submit_method == "chunked"){
                    minimizeInput(v);
                    return false;
                }
                
            };

            drop_zone[0].ondragleave = function(event) {
                drop_zone.removeClass('hover');
                //minimizeInput(v);
                return false;
            };

            drop_zone[0].ondrop = function(event) {
                minimizeInput(v);
                clear_error();
                if(submit_method == "normal") {
                    var files = event.dataTransfer.files;
                    // Check Files
                    var check_result = check_files(files);
                    if(check_result == false) {
                        $('#' + uploader_id + ' .files').html('');
                        // Delete input and create new
                        var new_id = get_random_id();
                        var cur_input_html = $(v)[0].outerHTML;
                        var new_v = $.parseHTML(cur_input_html);
                        $(new_v).attr('id', new_id);
                        $(v).before(new_v);
                        $(v).remove();
                        v = $('#'+new_id)[0];
                        $(v).change(function() {
                            files_added();
                        });
                        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                    }
                } else if(submit_method == "ajax" || submit_method == "chunked") {
                    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                    var files = event.dataTransfer.files;
                    var check_result = check_files(files);
                    if(check_result) {
                        files_added(files);
                    }
                }
            };

            $(drop_zone).find("." + options.browse_css_selector).click(function(event) {
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                $(v).click();
            });

            // Show added files
            $(v).change(function() {
                var files = $(v)[0].files;
                var check_result = check_files(files);

                if(submit_method == "normal") {
                    if(check_result == false) {
                        $('#' + uploader_id + ' .files').html('');
                        // Delete input and create new
                        var new_id = get_random_id();
                        var cur_input_html = $(v)[0].outerHTML;
                        var new_v = $.parseHTML(cur_input_html);
                        $(new_v).attr('id', new_id);
                        $(v).before(new_v);
                        $(v).remove();
                        v = $('#'+new_id)[0];
                        $(v).change(function() {
                            files_added();
                        });
                        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                    } else {
                        files_added(files);
                    }
                } else if(submit_method == "ajax" || submit_method == "chunked") {
                    if(check_result) {
                        files_added(files);
                    }
                }
            });

            function files_added(files) {
                if(files === undefined) {
                    var files = $(v)[0].files;
                }
                if(submit_method == "normal") {
                    $('#' + uploader_id + ' .files').html('');
                }
                for (var i = 0; i < files.length; i++) {
                    var fileSize = get_file_size_readable(files[i].size)
                    
                    if(layout == "thumbnails") {
                        // Si es miniatura o thumbnail
                        // Agregando archivos a la lista 
                        var listUl = $('#' + uploader_id + ' .files.thumb')
                        var listItem = '<li id="selected_file_' + files_index + '"><div class="thumbnail"></div><span class="title" title="' + files[i].name + '"><span class="left">' + files[i].name +'</span> <span class="right"> '+ fileSize  +' </span></span></li>'
                        listUl.append(listItem);
                        preview_file(files[i],files_index);
                        $(listUl).on('click', function(){
                            $(this).children().remove()
                        })
                    } else {
                        //Si es lista
                        // Agregando archivos a la lista 
                        var listUl = $('#' + uploader_id + ' .files')
                        var listItem = '<li id="selected_file_' + files_index + '">' + options.file_icon + ' <span class="left">' + files[i].name +'</span> <span class="right"> '+ fileSize  +' </span> </li>'
                        listUl.append(listItem);
                        $(listUl).on('click', function(){
                            $(this).children().remove()
                        })
                    }

                    // Now upload files via AJAX
                    if(submit_method == "ajax") {
                        file_upload_ajax(files[i],files_index);
                    } else if(submit_method == "chunked") {
                        file_upload_chunked(files[i],files_index);
                    }
                    files_index++;
                    if(submit_method == "ajax" || submit_method == "chunked") {
                        added_files++;
                    }
                }

            }

            function preview_file(file, i) {
                var reader  = new FileReader();

                getOrientation(file, function(orientation) {
                    var rotate_class = "";
                    if(orientation == 8) {
                        rotate_class = "rotate_90";
                    } else if(orientation == 3) {
                        rotate_class = "rotate_180";
                    } else if(orientation == 6) {
                        rotate_class = "rotate_270";
                    }
                    $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').addClass(rotate_class);
                });
                
                // Check file type
                if(file.type.match('image/*')) {
                    reader.readAsDataURL(file);
                } else if(file.type.match('video/*')) {
                    $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').html('<i class="pe-7s-video"></i>');
                } else if(file.type.match('audio/*')) {
                    $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').html('<i class="pe-7s-volume"></i>');
                } else {
                    $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').html('<i class="pe-7s-file"></i>');
                }

                reader.onloadend = function () {
                    $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').attr('style', 'background-image: url("' + reader.result + '")');
                    // Add hover layer
                    $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').append('<div class="du_hover_layer"></div>');
                }
            }

            function file_upload_ajax(file,i) {
                $('#' + uploader_id).trigger( "file_upload_start", [ file.name ] );
                var xhr = new XMLHttpRequest();
                if(layout == "thumbnails") {
                    $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').after('<div class="du_progress"></div>');
                } else {
                    $('#' + uploader_id + ' #selected_file_' + i).append('<div class="du_progress"></div>');
                }
                var progress_el = $('#' + uploader_id + ' #selected_file_' + i + ' .du_progress');
                (xhr.upload || xhr).addEventListener('progress', function(e) {
                    var done = e.position || e.loaded
                    var total = e.totalSize || e.total;
                    var progress = Math.round(done/total*100);
                    draw_round_progress(progress_el[0], progress / 100, layout);
                });
                xhr.addEventListener('load', function(e) {
                    var response = JSON.parse(this.response);
                    $('#' + uploader_id + ' #selected_file_' + i + ' .du_progress').fadeOut('slow');
                    if(response.success) {
                        $('#' + uploader_id).trigger( "file_upload_end", [ file.name ] );
                        // Add delete button
                        var du_delete_button = $('<i class="pe-7s-trash action-delete" data-fileid="' + response.file_id + '"></i>').hide();
                        if(layout == "thumbnails") {
                            $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').append(du_delete_button);
                        } else if (layout == "list") {
                            $('#' + uploader_id + ' #selected_file_' + i).append(du_delete_button);
                        }
                        du_delete_button.delay(500).fadeIn("slow");
                        // Add hidden input with file id
                        $('#' + uploader_id).append('<input id="hidden_file_' + i + '" type="hidden" name="' + input_name + '" value="' + response.file_id + '" >');
                        // Add delete buton listener
                        $('#' + uploader_id + ' #selected_file_' + i + ' i.action-delete').on("click", function(event) {
                            var fileid = $(this).data("fileid");
                            $.ajax({
                                url: delete_url,
                                data: "fileid=" + fileid,
                            }).done(function() {
                                $('#' + uploader_id + ' #selected_file_' + i).delay(500).fadeOut("slow");
                                $('#' + uploader_id + ' #hidden_file_' + i).remove();
                                added_files--;
                            });
                        });
                    } else {
                        set_error(response.message);
                        remove_file(i);
                    }
                });
                xhr.open('post', submit_url, true);
                var fdata = new FormData;
                fdata.append(input_name.replace('[]',''), file);
                xhr.send(fdata);
            }

            function file_upload_chunked(file,i) {
                $('#' + uploader_id).trigger( "file_upload_start", [ file.name ] );

                if(layout == "thumbnails") {
                    $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').after('<div class="du_progress"></div>');
                } else {
                    $('#' + uploader_id + ' #selected_file_' + i).append('<div class="du_progress"></div>');
                }

                var size = file.size;
                var sliceSize = options.chunk_size;
                var start = 0;
                var chunk = 0;

                loop();

                function loop() {
                    var end = start + sliceSize;

                    if (size - end < 0) {
                        end = size;
                    }

                    var s = slice(file, start, end);

                    send(s, start, end, size, sliceSize);

                    chunk++;

                    if (end < size) {
                        start += sliceSize;
                    }
                }

                function send(piece, start, end, size, sliceSize) {
                    var formdata = new FormData();
                    var xhr = new XMLHttpRequest();

                    xhr.open('POST', submit_url, true);

                    formdata.append('start', start);
                    formdata.append('end', end);
                    formdata.append(input_name.replace('[]',''), piece);
                    formdata.append('chunk', chunk);
                    formdata.append('file_name', file.name);
                    if (end < size) {
                        formdata.append('chunk_last', false);
                    } else {
                        formdata.append('chunk_last', true);
                    }

                    xhr.onreadystatechange = function() {
                        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {

                            var response = JSON.parse(this.response);

                            // Draw progress
                            var progress_el = $('#' + uploader_id + ' #selected_file_' + i + ' .du_progress');

                            draw_round_progress(progress_el[0], end / size, layout);

                            if (end < size) {
                                loop();
                            } else if(response.success && response.type == 'file') {
                                // Upload Completed
                                $('#' + uploader_id + ' #selected_file_' + i + ' .du_progress').fadeOut('slow');

                                $('#' + uploader_id).trigger( "file_upload_end", [ file.name ] );
                                // Add delete button
                                var du_delete_button = $('<i class="pe-7s-trash action-delete" data-fileid="' + response.file_id + '"></i>').hide();
                                if(layout == "thumbnails") {
                                    $('#' + uploader_id + ' #selected_file_' + i + ' div.thumbnail').append(du_delete_button);
                                } else if (layout == "list") {
                                    $('#' + uploader_id + ' #selected_file_' + i).append(du_delete_button);
                                }
                                du_delete_button.delay(500).fadeIn("slow");
                                // Add hidden input with file id
                                $('#' + uploader_id).append('<input id="hidden_file_' + i + '" type="hidden" name="' + input_name + '" value="' + response.file_id + '" >');
                                // Add delete buton listener
                                $('#' + uploader_id + ' #selected_file_' + i + ' i.action-delete').on("click", function(event) {
                                    var fileid = $(this).data("fileid");
                                    $.ajax({
                                        url: delete_url,
                                        data: "fileid=" + fileid,
                                    }).done(function() {
                                        $('#' + uploader_id + ' #selected_file_' + i).delay(500).fadeOut("slow");
                                        $('#' + uploader_id + ' #hidden_file_' + i).remove();
                                        added_files--;
                                    });
                                });
                            }
                        }
                    }

                    xhr.send(formdata);
                }
            }

            function slice(file, start, end) {
                var slice = file.mozSlice ? file.mozSlice :
                            file.webkitSlice ? file.webkitSlice :
                            file.slice ? file.slice : noop;

                return slice.bind(file)(start, end);
            }

            function noop() {
  
            }

            function remove_file(i) {
                $('#' + uploader_id + ' #selected_file_' + i).delay(options.time_show_errors * 1000).fadeOut("slow");
            }

            function set_error(text) {
                $('#' + uploader_id + ' .errors').html('<p>' + text + '</p>');
                if (options.time_show_errors > 0) {
                    setTimeout(clear_error, options.time_show_errors * 1000);
                }
            }

            function clear_error() {
                $('#' + uploader_id + ' .errors p').fadeOut("slow", function() {
                    $('#' + uploader_id + ' .errors p').remove();
                });
            }

            function get_file_size_readable(bytes) {
                if      (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2)+' GB';}
                else if (bytes>=1000000)    {bytes=(bytes/1000000).toFixed(2)+' MB';}
                else if (bytes>=1000)       {bytes=(bytes/1000).toFixed(2)+' KB';}
                else if (bytes>1)           {bytes=bytes+' bytes';}
                else if (bytes==1)          {bytes=bytes+' byte';}
                else                        {bytes='0 byte';}
                return bytes;
            };

            function check_files(files) {
                var allow_file_add = true;
                // Check multiple file support
                if (file_multiple) {
                    if(file_multiple_count) {
                        console.log(added_files);
                        if ((files.length + added_files) > file_multiple_count) {
                            set_error(options.allowed_before_error_text + ' ' + file_multiple_count + ' ' + options.allowed_after_error_text);
                            if(submit_method == "normal") {
                                added_files = 0;
                            }
                            return false;
                        } else {
                            allow_file_add = true;
                        }
                    } else {
                        allow_file_add = true;
                    }
                } else {
                    if (files.length > 1 || added_files > 0) {
                        set_error(options.only_one_error_text);
                        return false;
                    } else {
                        allow_file_add = true;
                    }
                }
                // Check file type support
                if(file_accept === undefined) {
                    allow_file_add = true;
                } else {
                    var accept_array = file_accept.split(',');
                    for (var i = 0; i < files.length; i++) {
                        var match_count = 0;
                        for (var a = 0; a < accept_array.length; a++) {
                            var match_string = accept_array[a].replace('/','.').trim();
                            if(files[i].type.match(match_string) != null) {
                                match_count++;
                            }
                        }
                        if(match_count == 0) {
                            set_error(options.not_allowed_error_text);
                            return false;
                        }
                    }
                }
                // Check file size
                for (var i = 0; i < files.length; i++) {
                    if(files[i].size > max_file_size && max_file_size > 0) {
                        set_error(options.big_file_before_error_text + ' ' + get_file_size_readable(max_file_size) + ' ' + options.big_file_after_error_text);
                        return false;
                    }
                }
                return allow_file_add;
            }

            function maximizeInput(v) {
                var drop_zone = $(v).parent(".drop_zone");
                var position = drop_zone.position();
                var top = position.top + parseInt(drop_zone.css('marginTop'), 10);
                var left = position.left + parseInt(drop_zone.css('marginLeft'), 10);
                $(v).css({top: top, left: left, position:'absolute', width: drop_zone.width(), height: drop_zone.height(), display:'block'});
            }

            function minimizeInput(v) {
                $(v).css({display:'none'});
            }

            function get_random_id() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for( var i=0; i < 15; i++ )
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            }

            function draw_round_progress(el, percent, layout) {

                var canvas = el.children[0];

                var color = hex_to_rgba(options.progress_color);

                if(canvas === undefined) {
                    canvas = document.createElement('canvas');    
                }

                if(layout == "thumbnails") {
                    canvas.width = 100;
                    canvas.height = 100;
                    canvas.style.width = "50px";
                    canvas.style.height = "50px";
                    var diameter = 96;
                    var line_width = 8;
                } else {
                    canvas.width = 48;
                    canvas.height = 48;
                    canvas.style.width = "24px";
                    canvas.style.height = "24px";
                    var diameter = 48;
                    var line_width = 4;
                }

                el.appendChild(canvas);
                    
                if (typeof(G_vmlCanvasManager) !== 'undefined') {
                    G_vmlCanvasManager.initElement(canvas);
                }

                var ctx = canvas.getContext('2d');

                ctx.translate(diameter / 2, diameter / 2); // change center
                ctx.rotate((-1 / 2 + 0 / 180) * Math.PI); // rotate -90 deg
                
                var radius = (diameter - line_width) / 2; 
                percent = Math.min(Math.max(0, percent || 1), 1);
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
                ctx.strokeStyle = color;
                ctx.lineCap = 'round'; // butt, round or square
                ctx.lineWidth = line_width;
                ctx.stroke();
            }

            function hex_to_rgba(hex) {
                var c;
                if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                    c= hex.substring(1).split('');
                    if(c.length== 3){
                        c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                    }
                    c= '0x'+c.join('');
                    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',.8)';
                } else {
                    // return default color
                    return 'rgba(74, 144, 226, .8)';
                }
            }

            function getOrientation(file, callback) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var view = new DataView(e.target.result);
                    if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
                    var length = view.byteLength, offset = 2;
                    while (offset < length) {
                        var marker = view.getUint16(offset, false);
                        offset += 2;
                        if (marker == 0xFFE1) {
                            if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
                            var little = view.getUint16(offset += 6, false) == 0x4949;
                            offset += view.getUint32(offset + 4, little);
                            var tags = view.getUint16(offset, little);
                            offset += 2;
                            for (var i = 0; i < tags; i++)
                            if (view.getUint16(offset + (i * 12), little) == 0x0112)
                                return callback(view.getUint16(offset + (i * 12) + 8, little));
                        }
                        else if ((marker & 0xFF00) != 0xFF00) break;
                        else offset += view.getUint16(offset, false);
                    }
                    return callback(-1);
                };
                reader.readAsArrayBuffer(file);
            }
        });
    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkcm9wX3VwbG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cDovL2RlbW8uYm9yaXNvbGhvci5jb20vZHJvcC11cGxvYWRlci9cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgIGpRdWVyeS5mbi5kcm9wX3VwbG9hZGVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgIC8vIExvY2FsaXphdGlvblxyXG4gICAgICAgICAgICB1cGxvYWRlcl90ZXh0OiAnRHJvcCBmaWxlcyB0byB1cGxvYWQsIG9yJyxcclxuICAgICAgICAgICAgYnJvd3NlX3RleHQ6ICdCcm93c2UnLFxyXG4gICAgICAgICAgICBvbmx5X29uZV9lcnJvcl90ZXh0OiAnT25seSBvbmUgZmlsZSBhbGxvd2VkJyxcclxuICAgICAgICAgICAgbm90X2FsbG93ZWRfZXJyb3JfdGV4dDogJ0ZpbGUgdHlwZSBpcyBub3QgYWxsb3dlZCcsXHJcbiAgICAgICAgICAgIGJpZ19maWxlX2JlZm9yZV9lcnJvcl90ZXh0OiAnRmlsZXMsIGJpZ2dlciB0aGFuJyxcclxuICAgICAgICAgICAgYmlnX2ZpbGVfYWZ0ZXJfZXJyb3JfdGV4dDogJ2lzIG5vdCBhbGxvd2VkJyxcclxuICAgICAgICAgICAgYWxsb3dlZF9iZWZvcmVfZXJyb3JfdGV4dDogJ09ubHknLFxyXG4gICAgICAgICAgICBhbGxvd2VkX2FmdGVyX2Vycm9yX3RleHQ6ICdmaWxlcyBhbGxvd2VkJyxcclxuICAgICAgICAgICAgLy8gQ1NTXHJcbiAgICAgICAgICAgIGJyb3dzZV9jc3NfY2xhc3M6ICdidXR0b24gYnV0dG9uLXByaW1hcnknLFxyXG4gICAgICAgICAgICBicm93c2VfY3NzX3NlbGVjdG9yOiAnZmlsZV9icm93c2UnLFxyXG4gICAgICAgICAgICB1cGxvYWRlcl9pY29uOiAnPGkgY2xhc3M9XCJwZS03cy1jbG91ZC11cGxvYWRcIj48L2k+JyxcclxuICAgICAgICAgICAgZmlsZV9pY29uOiAnPGkgY2xhc3M9XCJwZS03cy1maWxlXCI+PC9pPicsXHJcbiAgICAgICAgICAgIHByb2dyZXNzX2NvbG9yOiAnIzRhOTBlMicsXHJcbiAgICAgICAgICAgIC8vIE1haW4gT3B0aW9uc1xyXG4gICAgICAgICAgICB0aW1lX3Nob3dfZXJyb3JzOiA1LFxyXG4gICAgICAgICAgICBsYXlvdXQ6ICd0aHVtYm5haWxzJywgLy8gdGh1bWJuYWlscy9saXN0XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ25vcm1hbCcsIC8vIG5vcm1hbC9hamF4L2NodW5rZWRcclxuICAgICAgICAgICAgY2h1bmtfc2l6ZTogMTAwMDAwMCwgXHJcbiAgICAgICAgICAgIC8vIEFKQVggVVJMXHJcbiAgICAgICAgICAgIHVybDogJ2FqYXhfdXBsb2FkLnBocCcsXHJcbiAgICAgICAgICAgIGRlbGV0ZV91cmw6ICdhamF4X2RlbGV0ZS5waHAnLFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIHZhciB2ID0gdmFsO1xyXG4gICAgICAgICAgICAvLyBHZXQgaW5wdXQgZmlsZSBwYXJhbXNcclxuICAgICAgICAgICAgdmFyIGZpbGVfYWNjZXB0ID0gJCh2KS5hdHRyKFwiYWNjZXB0XCIpO1xyXG4gICAgICAgICAgICB2YXIgZmlsZV9tdWx0aXBsZSA9ICQodikucHJvcChcIm11bHRpcGxlXCIpO1xyXG4gICAgICAgICAgICB2YXIgZmlsZV9tdWx0aXBsZV9jb3VudCA9IHBhcnNlSW50KCQodikuZGF0YShcImNvdW50XCIpKTtcclxuICAgICAgICAgICAgdmFyIGlucHV0X25hbWUgPSAkKHYpLnByb3AoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICB2YXIgbWF4X2ZpbGVfc2l6ZSA9IDA7IFxyXG5cclxuICAgICAgICAgICAgdmFyIHVwbG9hZGVyX2lkID0gJ2Ryb3BfdXBsb2FkZXJfJyArIGk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWRkZWRfZmlsZXMgPSAwO1xyXG4gICAgICAgICAgICB2YXIgZmlsZXNfaW5kZXggPSAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIGN1cl9mb3JtID0gJCh2KS5wYXJlbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRfbWF4X2ZpbGVfc2l6ZSA9ICQoY3VyX2Zvcm0pLmZpbmQoXCJpbnB1dFtuYW1lPU1BWF9GSUxFX1NJWkVdXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZihpbnB1dF9tYXhfZmlsZV9zaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG1heF9maWxlX3NpemUgPSBwYXJzZUludChpbnB1dF9tYXhfZmlsZV9zaXplKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGFfbWF4X2ZpbGVfc2l6ZSA9ICQodikuZGF0YShcIm1heGZpbGVzaXplXCIpO1xyXG4gICAgICAgICAgICBpZihkYXRhX21heF9maWxlX3NpemUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbWF4X2ZpbGVfc2l6ZSA9IHBhcnNlSW50KGRhdGFfbWF4X2ZpbGVfc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBsYXlvdXQgPSBvcHRpb25zLmxheW91dDtcclxuICAgICAgICAgICAgaWYoJCh2KS5kYXRhKFwibGF5b3V0XCIpID09IFwidGh1bWJuYWlsc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQgPSBcInRodW1ibmFpbHNcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCQodikuZGF0YShcImxheW91dFwiKSA9PSBcImxpc3RcIikge1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0ID0gXCJsaXN0XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzdWJtaXRfbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XHJcbiAgICAgICAgICAgIGlmKCQodikuZGF0YShcIm1ldGhvZFwiKSA9PSBcIm5vcm1hbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRfbWV0aG9kID0gXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCQodikuZGF0YShcIm1ldGhvZFwiKSA9PSBcImFqYXhcIikge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0X21ldGhvZCA9IFwiYWpheFwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoJCh2KS5kYXRhKFwibWV0aG9kXCIpID09IFwiY2h1bmtlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRfbWV0aG9kID0gXCJjaHVua2VkXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzdWJtaXRfdXJsID0gb3B0aW9ucy51cmw7XHJcbiAgICAgICAgICAgIGlmKCQodikuZGF0YShcInVybFwiKSAhPSBcIlwiICYmICQodikuZGF0YShcInVybFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRfdXJsID0gJCh2KS5kYXRhKFwidXJsXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZGVsZXRlX3VybCA9IG9wdGlvbnMuZGVsZXRlX3VybDtcclxuICAgICAgICAgICAgaWYoJCh2KS5kYXRhKFwiZGVsZXRldXJsXCIpICE9IFwiXCIgJiYgJCh2KS5kYXRhKFwiZGVsZXRldXJsXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZV91cmwgPSAkKHYpLmRhdGEoXCJkZWxldGV1cmxcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFdyYXAgZmlsZSBpbnB1dCBmaWVsZFxyXG4gICAgICAgICAgICAkKHYpLmF0dHIoJ2lkJywgZ2V0X3JhbmRvbV9pZCgpKTtcclxuICAgICAgICAgICAgJCh2KS53cmFwKCc8ZGl2IGlkPVwiJyArIHVwbG9hZGVyX2lkICsgJ1wiIGNsYXNzPVwiZHJvcF91cGxvYWRlciBkcm9wX3pvbmVcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJCh2KS5iZWZvcmUoJzxzcGFuIGNsYXNzPVwiZXJyb3JzXCI+PC9zcGFuPicpO1xyXG4gICAgICAgICAgICBpZihzdWJtaXRfbWV0aG9kID09IFwiYWpheFwiIHx8IHN1Ym1pdF9tZXRob2QgPT0gXCJjaHVua2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICQodikuYXR0cignbmFtZScsICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHVsX2NsYXNzZXMgPSBcImZpbGVzXCI7XHJcblxyXG4gICAgICAgICAgICBpZihsYXlvdXQgPT0gXCJ0aHVtYm5haWxzXCIpIHtcclxuICAgICAgICAgICAgICAgIHVsX2NsYXNzZXMgKz0gXCIgdGh1bWJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHN1Ym1pdF9tZXRob2QgPT0gXCJhamF4XCIpIHtcclxuICAgICAgICAgICAgICAgIHVsX2NsYXNzZXMgKz0gXCIgYWpheFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3VibWl0X21ldGhvZCA9PSBcImNodW5rZWRcIikge1xyXG4gICAgICAgICAgICAgICAgdWxfY2xhc3NlcyArPSBcIiBhamF4XCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCh2KS5iZWZvcmUoJzx1bCBjbGFzcz1cIicgKyB1bF9jbGFzc2VzICsgJ1wiPjwvdWw+Jyk7XHJcbiAgICAgICAgICAgICQodikuYmVmb3JlKCc8ZGl2IGNsYXNzPVwidGV4dF93cmFwcGVyXCI+JyArIG9wdGlvbnMudXBsb2FkZXJfaWNvbiArICcgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JyArIG9wdGlvbnMudXBsb2FkZXJfdGV4dCArICcgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIicgKyBvcHRpb25zLmJyb3dzZV9jc3NfY2xhc3MgKyAnICcgKyBvcHRpb25zLmJyb3dzZV9jc3Nfc2VsZWN0b3IgKyAnXCI+JyArIG9wdGlvbnMuYnJvd3NlX3RleHQgKyAnPC9hPjwvc3Bhbj48L2Rpdj4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgZHJvcF96b25lID0gJCgnIycgKyB1cGxvYWRlcl9pZCk7XHJcblxyXG4gICAgICAgICAgICBkcm9wX3pvbmVbMF0ub25kcmFnb3ZlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wX3pvbmUuYWRkQ2xhc3MoJ2hvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZihzdWJtaXRfbWV0aG9kID09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbWl6ZUlucHV0KHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihzdWJtaXRfbWV0aG9kID09IFwiYWpheFwiIHx8IHN1Ym1pdF9tZXRob2QgPT0gXCJjaHVua2VkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltaXplSW5wdXQodik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBkcm9wX3pvbmVbMF0ub25kcmFnbGVhdmUgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZHJvcF96b25lLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgLy9taW5pbWl6ZUlucHV0KHYpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJvcF96b25lWzBdLm9uZHJvcCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtaW5pbWl6ZUlucHV0KHYpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJfZXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIGlmKHN1Ym1pdF9tZXRob2QgPT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBGaWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGVja19yZXN1bHQgPSBjaGVja19maWxlcyhmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2hlY2tfcmVzdWx0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnIC5maWxlcycpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgaW5wdXQgYW5kIGNyZWF0ZSBuZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19pZCA9IGdldF9yYW5kb21faWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cl9pbnB1dF9odG1sID0gJCh2KVswXS5vdXRlckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdfdiA9ICQucGFyc2VIVE1MKGN1cl9pbnB1dF9odG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChuZXdfdikuYXR0cignaWQnLCBuZXdfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHYpLmJlZm9yZShuZXdfdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAkKCcjJytuZXdfaWQpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHYpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzX2FkZGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA/IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgOiAoZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHN1Ym1pdF9tZXRob2QgPT0gXCJhamF4XCIgfHwgc3VibWl0X21ldGhvZCA9PSBcImNodW5rZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID8gZXZlbnQucHJldmVudERlZmF1bHQoKSA6IChldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrX3Jlc3VsdCA9IGNoZWNrX2ZpbGVzKGZpbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihjaGVja19yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNfYWRkZWQoZmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICQoZHJvcF96b25lKS5maW5kKFwiLlwiICsgb3B0aW9ucy5icm93c2VfY3NzX3NlbGVjdG9yKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIDogKGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgJCh2KS5jbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNob3cgYWRkZWQgZmlsZXNcclxuICAgICAgICAgICAgJCh2KS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSAkKHYpWzBdLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrX3Jlc3VsdCA9IGNoZWNrX2ZpbGVzKGZpbGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzdWJtaXRfbWV0aG9kID09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjaGVja19yZXN1bHQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgLmZpbGVzJykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBpbnB1dCBhbmQgY3JlYXRlIG5ld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2lkID0gZ2V0X3JhbmRvbV9pZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyX2lucHV0X2h0bWwgPSAkKHYpWzBdLm91dGVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld192ID0gJC5wYXJzZUhUTUwoY3VyX2lucHV0X2h0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKG5ld192KS5hdHRyKCdpZCcsIG5ld19pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodikuYmVmb3JlKG5ld192KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh2KS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9ICQoJyMnK25ld19pZClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodikuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNfYWRkZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID8gZXZlbnQucHJldmVudERlZmF1bHQoKSA6IChldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc19hZGRlZChmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHN1Ym1pdF9tZXRob2QgPT0gXCJhamF4XCIgfHwgc3VibWl0X21ldGhvZCA9PSBcImNodW5rZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNoZWNrX3Jlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc19hZGRlZChmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbGVzX2FkZGVkKGZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZihmaWxlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVzID0gJCh2KVswXS5maWxlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHN1Ym1pdF9tZXRob2QgPT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnIC5maWxlcycpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxlU2l6ZSA9IGdldF9maWxlX3NpemVfcmVhZGFibGUoZmlsZXNbaV0uc2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihsYXlvdXQgPT0gXCJ0aHVtYm5haWxzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgZXMgbWluaWF0dXJhIG8gdGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFncmVnYW5kbyBhcmNoaXZvcyBhIGxhIGxpc3RhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdFVsID0gJCgnIycgKyB1cGxvYWRlcl9pZCArICcgLmZpbGVzLnRodW1iJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RJdGVtID0gJzxsaSBpZD1cInNlbGVjdGVkX2ZpbGVfJyArIGZpbGVzX2luZGV4ICsgJ1wiPjxkaXYgY2xhc3M9XCJ0aHVtYm5haWxcIj48L2Rpdj48c3BhbiBjbGFzcz1cInRpdGxlXCIgdGl0bGU9XCInICsgZmlsZXNbaV0ubmFtZSArICdcIj48c3BhbiBjbGFzcz1cImxlZnRcIj4nICsgZmlsZXNbaV0ubmFtZSArJzwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJyaWdodFwiPiAnKyBmaWxlU2l6ZSAgKycgPC9zcGFuPjwvc3Bhbj48L2xpPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFVsLmFwcGVuZChsaXN0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdfZmlsZShmaWxlc1tpXSxmaWxlc19pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQobGlzdFVsKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigpLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TaSBlcyBsaXN0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZ3JlZ2FuZG8gYXJjaGl2b3MgYSBsYSBsaXN0YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RVbCA9ICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnIC5maWxlcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9ICc8bGkgaWQ9XCJzZWxlY3RlZF9maWxlXycgKyBmaWxlc19pbmRleCArICdcIj4nICsgb3B0aW9ucy5maWxlX2ljb24gKyAnIDxzcGFuIGNsYXNzPVwibGVmdFwiPicgKyBmaWxlc1tpXS5uYW1lICsnPC9zcGFuPiA8c3BhbiBjbGFzcz1cInJpZ2h0XCI+ICcrIGZpbGVTaXplICArJyA8L3NwYW4+IDwvbGk+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0VWwuYXBwZW5kKGxpc3RJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChsaXN0VWwpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdyB1cGxvYWQgZmlsZXMgdmlhIEFKQVhcclxuICAgICAgICAgICAgICAgICAgICBpZihzdWJtaXRfbWV0aG9kID09IFwiYWpheFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfdXBsb2FkX2FqYXgoZmlsZXNbaV0sZmlsZXNfaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihzdWJtaXRfbWV0aG9kID09IFwiY2h1bmtlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfdXBsb2FkX2NodW5rZWQoZmlsZXNbaV0sZmlsZXNfaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaWxlc19pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHN1Ym1pdF9tZXRob2QgPT0gXCJhamF4XCIgfHwgc3VibWl0X21ldGhvZCA9PSBcImNodW5rZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRlZF9maWxlcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXZpZXdfZmlsZShmaWxlLCBpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyICA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0T3JpZW50YXRpb24oZmlsZSwgZnVuY3Rpb24ob3JpZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm90YXRlX2NsYXNzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZihvcmllbnRhdGlvbiA9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZV9jbGFzcyA9IFwicm90YXRlXzkwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKG9yaWVudGF0aW9uID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlX2NsYXNzID0gXCJyb3RhdGVfMTgwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKG9yaWVudGF0aW9uID09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlX2NsYXNzID0gXCJyb3RhdGVfMjcwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnICNzZWxlY3RlZF9maWxlXycgKyBpICsgJyBkaXYudGh1bWJuYWlsJykuYWRkQ2xhc3Mocm90YXRlX2NsYXNzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmaWxlIHR5cGVcclxuICAgICAgICAgICAgICAgIGlmKGZpbGUudHlwZS5tYXRjaCgnaW1hZ2UvKicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZmlsZS50eXBlLm1hdGNoKCd2aWRlby8qJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkICsgJyAjc2VsZWN0ZWRfZmlsZV8nICsgaSArICcgZGl2LnRodW1ibmFpbCcpLmh0bWwoJzxpIGNsYXNzPVwicGUtN3MtdmlkZW9cIj48L2k+Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZmlsZS50eXBlLm1hdGNoKCdhdWRpby8qJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkICsgJyAjc2VsZWN0ZWRfZmlsZV8nICsgaSArICcgZGl2LnRodW1ibmFpbCcpLmh0bWwoJzxpIGNsYXNzPVwicGUtN3Mtdm9sdW1lXCI+PC9pPicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkICsgJyAjc2VsZWN0ZWRfZmlsZV8nICsgaSArICcgZGl2LnRodW1ibmFpbCcpLmh0bWwoJzxpIGNsYXNzPVwicGUtN3MtZmlsZVwiPjwvaT4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnICNzZWxlY3RlZF9maWxlXycgKyBpICsgJyBkaXYudGh1bWJuYWlsJykuYXR0cignc3R5bGUnLCAnYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJyArIHJlYWRlci5yZXN1bHQgKyAnXCIpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGhvdmVyIGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgI3NlbGVjdGVkX2ZpbGVfJyArIGkgKyAnIGRpdi50aHVtYm5haWwnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkdV9ob3Zlcl9sYXllclwiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmaWxlX3VwbG9hZF9hamF4KGZpbGUsaSkge1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCkudHJpZ2dlciggXCJmaWxlX3VwbG9hZF9zdGFydFwiLCBbIGZpbGUubmFtZSBdICk7XHJcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXQgPT0gXCJ0aHVtYm5haWxzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkICsgJyAjc2VsZWN0ZWRfZmlsZV8nICsgaSArICcgZGl2LnRodW1ibmFpbCcpLmFmdGVyKCc8ZGl2IGNsYXNzPVwiZHVfcHJvZ3Jlc3NcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgI3NlbGVjdGVkX2ZpbGVfJyArIGkpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImR1X3Byb2dyZXNzXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3NfZWwgPSAkKCcjJyArIHVwbG9hZGVyX2lkICsgJyAjc2VsZWN0ZWRfZmlsZV8nICsgaSArICcgLmR1X3Byb2dyZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAoeGhyLnVwbG9hZCB8fCB4aHIpLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkb25lID0gZS5wb3NpdGlvbiB8fCBlLmxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IGUudG90YWxTaXplIHx8IGUudG90YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5yb3VuZChkb25lL3RvdGFsKjEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd19yb3VuZF9wcm9ncmVzcyhwcm9ncmVzc19lbFswXSwgcHJvZ3Jlc3MgLyAxMDAsIGxheW91dCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgI3NlbGVjdGVkX2ZpbGVfJyArIGkgKyAnIC5kdV9wcm9ncmVzcycpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQpLnRyaWdnZXIoIFwiZmlsZV91cGxvYWRfZW5kXCIsIFsgZmlsZS5uYW1lIF0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGRlbGV0ZSBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR1X2RlbGV0ZV9idXR0b24gPSAkKCc8aSBjbGFzcz1cInBlLTdzLXRyYXNoIGFjdGlvbi1kZWxldGVcIiBkYXRhLWZpbGVpZD1cIicgKyByZXNwb25zZS5maWxlX2lkICsgJ1wiPjwvaT4nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxheW91dCA9PSBcInRodW1ibmFpbHNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgI3NlbGVjdGVkX2ZpbGVfJyArIGkgKyAnIGRpdi50aHVtYm5haWwnKS5hcHBlbmQoZHVfZGVsZXRlX2J1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09IFwibGlzdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkICsgJyAjc2VsZWN0ZWRfZmlsZV8nICsgaSkuYXBwZW5kKGR1X2RlbGV0ZV9idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1X2RlbGV0ZV9idXR0b24uZGVsYXkoNTAwKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgaGlkZGVuIGlucHV0IHdpdGggZmlsZSBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkKS5hcHBlbmQoJzxpbnB1dCBpZD1cImhpZGRlbl9maWxlXycgKyBpICsgJ1wiIHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJyArIGlucHV0X25hbWUgKyAnXCIgdmFsdWU9XCInICsgcmVzcG9uc2UuZmlsZV9pZCArICdcIiA+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBkZWxldGUgYnV0b24gbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgI3NlbGVjdGVkX2ZpbGVfJyArIGkgKyAnIGkuYWN0aW9uLWRlbGV0ZScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlaWQgPSAkKHRoaXMpLmRhdGEoXCJmaWxlaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZGVsZXRlX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImZpbGVpZD1cIiArIGZpbGVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgI3NlbGVjdGVkX2ZpbGVfJyArIGkpLmRlbGF5KDUwMCkuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgI2hpZGRlbl9maWxlXycgKyBpKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZF9maWxlcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldF9lcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlX2ZpbGUoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB4aHIub3BlbigncG9zdCcsIHN1Ym1pdF91cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZkYXRhID0gbmV3IEZvcm1EYXRhO1xyXG4gICAgICAgICAgICAgICAgZmRhdGEuYXBwZW5kKGlucHV0X25hbWUucmVwbGFjZSgnW10nLCcnKSwgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChmZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbGVfdXBsb2FkX2NodW5rZWQoZmlsZSxpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkKS50cmlnZ2VyKCBcImZpbGVfdXBsb2FkX3N0YXJ0XCIsIFsgZmlsZS5uYW1lIF0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXQgPT0gXCJ0aHVtYm5haWxzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkICsgJyAjc2VsZWN0ZWRfZmlsZV8nICsgaSArICcgZGl2LnRodW1ibmFpbCcpLmFmdGVyKCc8ZGl2IGNsYXNzPVwiZHVfcHJvZ3Jlc3NcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgI3NlbGVjdGVkX2ZpbGVfJyArIGkpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImR1X3Byb2dyZXNzXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNpemUgPSBmaWxlLnNpemU7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpY2VTaXplID0gb3B0aW9ucy5jaHVua19zaXplO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9vcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGxvb3AoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZCA9IHN0YXJ0ICsgc2xpY2VTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2l6ZSAtIGVuZCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gc2xpY2UoZmlsZSwgc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbmQocywgc3RhcnQsIGVuZCwgc2l6ZSwgc2xpY2VTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZCA8IHNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgKz0gc2xpY2VTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZW5kKHBpZWNlLCBzdGFydCwgZW5kLCBzaXplLCBzbGljZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgc3VibWl0X3VybCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1kYXRhLmFwcGVuZCgnc3RhcnQnLCBzdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWRhdGEuYXBwZW5kKCdlbmQnLCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1kYXRhLmFwcGVuZChpbnB1dF9uYW1lLnJlcGxhY2UoJ1tdJywnJyksIHBpZWNlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtZGF0YS5hcHBlbmQoJ2NodW5rJywgY2h1bmspO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1kYXRhLmFwcGVuZCgnZmlsZV9uYW1lJywgZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kIDwgc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtZGF0YS5hcHBlbmQoJ2NodW5rX2xhc3QnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWRhdGEuYXBwZW5kKCdjaHVua19sYXN0JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyYXcgcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc19lbCA9ICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnICNzZWxlY3RlZF9maWxlXycgKyBpICsgJyAuZHVfcHJvZ3Jlc3MnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3X3JvdW5kX3Byb2dyZXNzKHByb2dyZXNzX2VsWzBdLCBlbmQgLyBzaXplLCBsYXlvdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmQgPCBzaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgcmVzcG9uc2UudHlwZSA9PSAnZmlsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGxvYWQgQ29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCArICcgI3NlbGVjdGVkX2ZpbGVfJyArIGkgKyAnIC5kdV9wcm9ncmVzcycpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCkudHJpZ2dlciggXCJmaWxlX3VwbG9hZF9lbmRcIiwgWyBmaWxlLm5hbWUgXSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBkZWxldGUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR1X2RlbGV0ZV9idXR0b24gPSAkKCc8aSBjbGFzcz1cInBlLTdzLXRyYXNoIGFjdGlvbi1kZWxldGVcIiBkYXRhLWZpbGVpZD1cIicgKyByZXNwb25zZS5maWxlX2lkICsgJ1wiPjwvaT4nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGF5b3V0ID09IFwidGh1bWJuYWlsc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnICNzZWxlY3RlZF9maWxlXycgKyBpICsgJyBkaXYudGh1bWJuYWlsJykuYXBwZW5kKGR1X2RlbGV0ZV9idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09IFwibGlzdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnICNzZWxlY3RlZF9maWxlXycgKyBpKS5hcHBlbmQoZHVfZGVsZXRlX2J1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1X2RlbGV0ZV9idXR0b24uZGVsYXkoNTAwKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBoaWRkZW4gaW5wdXQgd2l0aCBmaWxlIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyB1cGxvYWRlcl9pZCkuYXBwZW5kKCc8aW5wdXQgaWQ9XCJoaWRkZW5fZmlsZV8nICsgaSArICdcIiB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicgKyBpbnB1dF9uYW1lICsgJ1wiIHZhbHVlPVwiJyArIHJlc3BvbnNlLmZpbGVfaWQgKyAnXCIgPicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBkZWxldGUgYnV0b24gbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkICsgJyAjc2VsZWN0ZWRfZmlsZV8nICsgaSArICcgaS5hY3Rpb24tZGVsZXRlJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZWlkID0gJCh0aGlzKS5kYXRhKFwiZmlsZWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBkZWxldGVfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJmaWxlaWQ9XCIgKyBmaWxlaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHVwbG9hZGVyX2lkICsgJyAjc2VsZWN0ZWRfZmlsZV8nICsgaSkuZGVsYXkoNTAwKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnICNoaWRkZW5fZmlsZV8nICsgaSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZF9maWxlcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoZm9ybWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzbGljZShmaWxlLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpY2UgPSBmaWxlLm1velNsaWNlID8gZmlsZS5tb3pTbGljZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLndlYmtpdFNsaWNlID8gZmlsZS53ZWJraXRTbGljZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnNsaWNlID8gZmlsZS5zbGljZSA6IG5vb3A7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNsaWNlLmJpbmQoZmlsZSkoc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG5vb3AoKSB7XHJcbiAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZV9maWxlKGkpIHtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnICNzZWxlY3RlZF9maWxlXycgKyBpKS5kZWxheShvcHRpb25zLnRpbWVfc2hvd19lcnJvcnMgKiAxMDAwKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0X2Vycm9yKHRleHQpIHtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnIC5lcnJvcnMnKS5odG1sKCc8cD4nICsgdGV4dCArICc8L3A+Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50aW1lX3Nob3dfZXJyb3JzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2xlYXJfZXJyb3IsIG9wdGlvbnMudGltZV9zaG93X2Vycm9ycyAqIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhcl9lcnJvcigpIHtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnIC5lcnJvcnMgcCcpLmZhZGVPdXQoXCJzbG93XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgdXBsb2FkZXJfaWQgKyAnIC5lcnJvcnMgcCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldF9maWxlX3NpemVfcmVhZGFibGUoYnl0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICAgICAgKGJ5dGVzPj0xMDAwMDAwMDAwKSB7Ynl0ZXM9KGJ5dGVzLzEwMDAwMDAwMDApLnRvRml4ZWQoMikrJyBHQic7fVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYnl0ZXM+PTEwMDAwMDApICAgIHtieXRlcz0oYnl0ZXMvMTAwMDAwMCkudG9GaXhlZCgyKSsnIE1CJzt9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChieXRlcz49MTAwMCkgICAgICAge2J5dGVzPShieXRlcy8xMDAwKS50b0ZpeGVkKDIpKycgS0InO31cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJ5dGVzPjEpICAgICAgICAgICB7Ynl0ZXM9Ynl0ZXMrJyBieXRlcyc7fVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYnl0ZXM9PTEpICAgICAgICAgIHtieXRlcz1ieXRlcysnIGJ5dGUnO31cclxuICAgICAgICAgICAgICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICB7Ynl0ZXM9JzAgYnl0ZSc7fVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ5dGVzO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tfZmlsZXMoZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbGxvd19maWxlX2FkZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBtdWx0aXBsZSBmaWxlIHN1cHBvcnRcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlX211bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZmlsZV9tdWx0aXBsZV9jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRlZF9maWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZmlsZXMubGVuZ3RoICsgYWRkZWRfZmlsZXMpID4gZmlsZV9tdWx0aXBsZV9jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0X2Vycm9yKG9wdGlvbnMuYWxsb3dlZF9iZWZvcmVfZXJyb3JfdGV4dCArICcgJyArIGZpbGVfbXVsdGlwbGVfY291bnQgKyAnICcgKyBvcHRpb25zLmFsbG93ZWRfYWZ0ZXJfZXJyb3JfdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzdWJtaXRfbWV0aG9kID09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZF9maWxlcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd19maWxlX2FkZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd19maWxlX2FkZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMSB8fCBhZGRlZF9maWxlcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0X2Vycm9yKG9wdGlvbnMub25seV9vbmVfZXJyb3JfdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd19maWxlX2FkZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZmlsZSB0eXBlIHN1cHBvcnRcclxuICAgICAgICAgICAgICAgIGlmKGZpbGVfYWNjZXB0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd19maWxlX2FkZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2NlcHRfYXJyYXkgPSBmaWxlX2FjY2VwdC5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoX2NvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBhY2NlcHRfYXJyYXkubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaF9zdHJpbmcgPSBhY2NlcHRfYXJyYXlbYV0ucmVwbGFjZSgnLycsJy4nKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmaWxlc1tpXS50eXBlLm1hdGNoKG1hdGNoX3N0cmluZykgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2hfY291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0X2Vycm9yKG9wdGlvbnMubm90X2FsbG93ZWRfZXJyb3JfdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmaWxlIHNpemVcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihmaWxlc1tpXS5zaXplID4gbWF4X2ZpbGVfc2l6ZSAmJiBtYXhfZmlsZV9zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRfZXJyb3Iob3B0aW9ucy5iaWdfZmlsZV9iZWZvcmVfZXJyb3JfdGV4dCArICcgJyArIGdldF9maWxlX3NpemVfcmVhZGFibGUobWF4X2ZpbGVfc2l6ZSkgKyAnICcgKyBvcHRpb25zLmJpZ19maWxlX2FmdGVyX2Vycm9yX3RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbG93X2ZpbGVfYWRkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtYXhpbWl6ZUlucHV0KHYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkcm9wX3pvbmUgPSAkKHYpLnBhcmVudChcIi5kcm9wX3pvbmVcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBkcm9wX3pvbmUucG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3AgPSBwb3NpdGlvbi50b3AgKyBwYXJzZUludChkcm9wX3pvbmUuY3NzKCdtYXJnaW5Ub3AnKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgcGFyc2VJbnQoZHJvcF96b25lLmNzcygnbWFyZ2luTGVmdCcpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAkKHYpLmNzcyh7dG9wOiB0b3AsIGxlZnQ6IGxlZnQsIHBvc2l0aW9uOidhYnNvbHV0ZScsIHdpZHRoOiBkcm9wX3pvbmUud2lkdGgoKSwgaGVpZ2h0OiBkcm9wX3pvbmUuaGVpZ2h0KCksIGRpc3BsYXk6J2Jsb2NrJ30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtaW5pbWl6ZUlucHV0KHYpIHtcclxuICAgICAgICAgICAgICAgICQodikuY3NzKHtkaXNwbGF5Oidub25lJ30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRfcmFuZG9tX2lkKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvc3NpYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciggdmFyIGk9MDsgaSA8IDE1OyBpKysgKVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkcmF3X3JvdW5kX3Byb2dyZXNzKGVsLCBwZXJjZW50LCBsYXlvdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gZWwuY2hpbGRyZW5bMF07XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gaGV4X3RvX3JnYmEob3B0aW9ucy5wcm9ncmVzc19jb2xvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY2FudmFzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0ID09IFwidGh1bWJuYWlsc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gXCI1MHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWFtZXRlciA9IDk2O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5lX3dpZHRoID0gODtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gNDg7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDQ4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbWV0ZXIgPSA0ODtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGluZV93aWR0aCA9IDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoR192bWxDYW52YXNNYW5hZ2VyKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBHX3ZtbENhbnZhc01hbmFnZXIuaW5pdEVsZW1lbnQoY2FudmFzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShkaWFtZXRlciAvIDIsIGRpYW1ldGVyIC8gMik7IC8vIGNoYW5nZSBjZW50ZXJcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoKC0xIC8gMiArIDAgLyAxODApICogTWF0aC5QSSk7IC8vIHJvdGF0ZSAtOTAgZGVnXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciByYWRpdXMgPSAoZGlhbWV0ZXIgLSBsaW5lX3dpZHRoKSAvIDI7IFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHBlcmNlbnQgfHwgMSksIDEpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmFyYygwLCAwLCByYWRpdXMsIDAsIE1hdGguUEkgKiAyICogcGVyY2VudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7IC8vIGJ1dHQsIHJvdW5kIG9yIHNxdWFyZVxyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVfd2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhleF90b19yZ2JhKGhleCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGM7XHJcbiAgICAgICAgICAgICAgICBpZigvXiMoW0EtRmEtZjAtOV17M30pezEsMn0kLy50ZXN0KGhleCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGM9IGhleC5zdWJzdHJpbmcoMSkuc3BsaXQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGMubGVuZ3RoPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGM9IFtjWzBdLCBjWzBdLCBjWzFdLCBjWzFdLCBjWzJdLCBjWzJdXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYz0gJzB4JytjLmpvaW4oJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAncmdiYSgnK1soYz4+MTYpJjI1NSwgKGM+PjgpJjI1NSwgYyYyNTVdLmpvaW4oJywnKSsnLC44KSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBkZWZhdWx0IGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdyZ2JhKDc0LCAxNDQsIDIyNiwgLjgpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oZmlsZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWV3LmdldFVpbnQxNigwLCBmYWxzZSkgIT0gMHhGRkQ4KSByZXR1cm4gY2FsbGJhY2soLTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGgsIG9mZnNldCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFya2VyID0gdmlldy5nZXRVaW50MTYob2Zmc2V0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFya2VyID09IDB4RkZFMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXcuZ2V0VWludDMyKG9mZnNldCArPSAyLCBmYWxzZSkgIT0gMHg0NTc4Njk2NikgcmV0dXJuIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXR0bGUgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQgKz0gNiwgZmFsc2UpID09IDB4NDk0OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSB2aWV3LmdldFVpbnQzMihvZmZzZXQgKyA0LCBsaXR0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhZ3MgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGxpdHRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFnczsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIChpICogMTIpLCBsaXR0bGUpID09IDB4MDExMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sodmlldy5nZXRVaW50MTYob2Zmc2V0ICsgKGkgKiAxMikgKyA4LCBsaXR0bGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgobWFya2VyICYgMHhGRjAwKSAhPSAweEZGMDApIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIG9mZnNldCArPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7Il0sImZpbGUiOiJkcm9wX3VwbG9hZGVyLmpzIn0=
