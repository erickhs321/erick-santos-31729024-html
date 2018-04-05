   
    function MostrarNavEFooter()
    {      
  
        var navbar =        
        
      '<nav class="navbar navbar-expand-lg navbar-dark bg-primary">'+
        '<div class="container">'+
            '<a class="navbar-brand h1 mb-0"  href="index.html">Site do Erick</a>'+
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"'+
              'aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">'+
              '<span class="navbar-toggler-icon"></span>'+
            '</button>'+
        
            '<div class="collapse navbar-collapse" id="navbarColor01">'+
            
              '<ul class="navbar-nav mr-auto">'+        
              '<li class="nav-item">'+
                  '<a class="nav-link" href="index.html">Início<span class="sr-only">(current)</span></a>'+
                '</li>'+    
                '<li class="nav-item">'+
                  '<a class="nav-link" href="formulario.html">Formulário<span class="sr-only">(current)</span></a>'+
                '</li>'+
                '<li class="nav-item">'+
                  '<a class="nav-link" href="arvore-dom.html">Arvore DOM</a>'+
                '</li>'+
                '<li class="nav-item">'+
                  '<a class="nav-link" href="respostas.html">Respostas</a>'+
                '</li>'+
              '</ul>'+
              '<form class="form-inline">'+
                '<input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Search">'+
                '<button class="btn btn-outline-info my-2 my-sm-0" type="submit">Pesquisar</button>'+
              '</form>'+
            '</div>'+   
          '</div>'+
     '</nav>'
         
            
      
        document.getElementById("navbar").innerHTML = navbar;

        document.getElementById("footer").innerHTML = 

          
            '<span class="text-muted"> Copyright &copy; All Rights Reserved</span>'
          
        
    };


   
    

    

