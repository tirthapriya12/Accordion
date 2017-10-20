
$(document).ready(function () {



    $.ajax({
        url: "list.json",
        type: "GET",
        success: function (data, satus, xhr) {
            $('#accordion ').append('<h3><li id="' + data.label + '">' + data.label + '</li></h3>');
            console.log(data.data);
            buildTree(data);

            stylise(x);
            $('li').on('click', function (event) {

                event.stopPropagation();
                console.log($(this));
                //event.target.style.display='none';

                $(this).children(0).toggle(900);



            });
            
            console.log(x);

        }
    });

    var j = 0, x = [];
    //selector="#accordion li";
    function buildTree(lab) {
        console.log('->' + lab.label);


        /*if (lab.data == undefined) {
            console.log('->');
            $('#accordion').append('-><br>');
            return;
        }
        */
        if (lab.data) {



            createList(lab.data, lab.label);
            for (var j = 0; j < lab.data.length; j++) {


                buildTree(lab.data[j]);

                // text='<li>'+lab.data[j].label+'</li>'; 
                // $(selector).append(text);

                console.log('returning from ' + lab.data[j].label + " ");
            }
        }
        else {
            //  $(selector).append('<li>'+lab.label+'');
            return;
        }



    }


    function createList(obj, parent) {
        str = "<ul>";
        var flag = false;
        for (i in obj) {
            if (obj[i].data) {
                flag = true;
                str = str + '<li id="' + (obj[i].label) + '">' + obj[i].label + '</li>';
                //x[j++]=obj[i].label;
                //x[j++]=id++;
                // $(selector).append(str);
                x[j++] = (obj[i].label);
            }
            else {
                str = str + '<li >' + obj[i].label + '</li>';
            }

        }
        str = str + '</ul>';
        /*if(flag)
         {   
                
                   selector=parent;
                     $('#'+parent).append(str);
                  //selector='#'+x[j];
                  //selector='#'+(id);
 
                
                   
                  
         }
         else{
             $(selector).append(str);
         selector=selector+' li';
         }*/
        selector = parent;
        $('#' + parent).append(str);

    }

    function stylise(y) {

             for (var i=0;i<y.length;i++) {

                document.getElementById(y[i]).style.border = '2px solid black';
                 document.getElementById(y[i]).style.borderRadius='5px';
                 document.getElementById(y[i]).style.margin = '2% 2% 2% 7% ';
                 document.getElementById(y[i]).style.backgroundColor='#ea9999';
            }

    }

});