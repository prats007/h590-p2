 $(document).ready(function() {

                  $("#all").click(function(e){

                     $("#jmk").show(1500);
                      $("#vc").show(1500);
                      $("#cc").show(1500);
                      $("#kohler").show(1500);
                      $("#arduino").show(1500);
                      $("#lms").show(1500);
                      $("#rs").show(1500);
                      $("#gc").show(1500);
                      $("#photo").show(1500);
                      $("#db").show(1500);
                      $("#posters").show(1500);
                      $("#3d").show(1500);
                })

                   $("#skt").click(function(e){

                      $("#jmk").hide(1500);
                      $("#vc").hide(1500);
                      $("#cc").hide(1500);
                      $("#db").hide(1500);
                      $("#kohler").hide(1500);
                      $("#arduino").hide(1500);
                      $("#lms").hide(1500);
                      $("#photo").hide(1500);
                      $("#rs").show(1500);
                      $("#gc").show(1500);
                      $("#3d").hide(1500);
                      
                    
                })

                   $("#pic").click(function(e){
                      $("#jmk").hide(1500);
                      $("#vc").hide(1500);
                      $("#cc").hide(1500);
                      $("#db").hide(1500);
                      $("#kohler").hide(1500);
                      $("#arduino").hide(1500);
                      $("#lms").hide(1500);
                      $("#rs").hide(1500);
                      $("#gc").hide(1500);
                      $("#photo").show(1500);
                      $("#posters").hide(1500);
                      $("#3d").hide(1500);
                      
                })

                   $("#prjcts").click(function(e){
                      $("#rs").hide(1500);
                      $("#gc").hide(1500);
                      $("#photo").hide(1500);
                      $("#jmk").show(1500);
                      $("#vc").show(1500);
                      $("#cc").show(1500);
                      $("#kohler").show(1500);
                      $("#arduino").show(1500);
                      $("#lms").show(1500);
                      $("#db").hide(1500);
                      $("#posters").show(1500);
                      $("#3d").show(1500);
                      
                })

                   $("#dsgn").click(function(e){
                      $("#rs").hide(1500);
                      $("#gc").hide(1500);
                      $("#photo").hide(1500);
                      $("#jmk").show(1500);
                      $("#vc").hide(1500);
                      $("#cc").hide(1500);
                      $("#kohler").show(1500);
                      $("#arduino").hide(1500);
                      $("#lms").show(1500);
                      $("#db").show(1500);
                      $("#posters").show(1500);
                      $("#3d").show(1500);
                      
                })




                   /* Best code we came up with accident :p
                      $("#jmk").toggle(function(){
                        $(this).animate(function(){
                          $(this).toggle();
                        })  
                      });

                      $("#lms").toggle(function(){
                        $(this).animate(function(){
                          $(this).toggle();
                        })
                      });*/
              });