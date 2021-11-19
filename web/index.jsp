<%-- 
    Document   : index
    Created on : Nov 19, 2021, 9:05:04 AM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        
        <link href="Recursos/bootstrap-4.5.3-dist/bootstrap-4.5.3-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="Recursos/bootstrap-4.5.3-dist/bootstrap-4.5.3-dist/css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="Recursos/css/Estilo.css" rel="stylesheet" type="text/css"/>
        
        <script src="Recursos/js/JQuery.js" type="text/javascript"></script>
        <script src="Recursos/bootstrap-4.5.3-dist/bootstrap-4.5.3-dist/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="Recursos/bootstrap-4.5.3-dist/bootstrap-4.5.3-dist/js/bootstrap.js" type="text/javascript"></script>
        <script src="Recursos/js/Alertas.js" type="text/javascript"></script>
        <script src="Recursos/js/datatables.min.js" type="text/javascript"></script>
        <script src="Recursos/js/Ingreso.js" type="text/javascript"></script>
    </head>
    <body>
         <div class="container" id="datos">                               
            <div class="container" id="Containerlogin">
                <div class="row">
                    <div class="col col-lg-6">
                        <div class="container logologin">
                            <h1 class="titulo">Flujo</h1>                            
                        </div>
                    </div>          
                    <div class="col col-lg-6" id="loginiz">
                        <h1>Login</h1>
                        <div class="row">
                            <div class="col col-lg-6">
                                <label>Usuario</label>
                                <input type="text" id="Usuario" name="LugarE" class="form-control" placeholder="Porfavor digite el usuario">
                            </div>                            
                        </div>
                        <div class="row">
                            <div class="col col-lg-6" id="loginder">
                                <label>Contraseña</label>
                                <input type="password" id="Contra"  name="CostoE" class="form-control" placeholder="porfavor digite la contraseña">
                            </div>

                        </div>
                        <button class="btn btn-info colorbtn" id="ingresar">Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
