/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    const ajax = (ir_a, llevar, hacer) => {
        $.ajax({
            url: ir_a,
            encoding: "UTF-8",
            data: llevar,
            type: 'POST',
            dataType: 'html',
            contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
            success: function (data) {
                hacer(data);
            },
            error: function (xhr, status) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    background: 'linear-gradient(#2BD9DD , #6ACF28)',
                    html: status + ":" + xhr + 'Porvar contate con el administrador'
                });
            }
        });
    };

    $("#ingresar").click(function () {
        if (!$("#Usuario").val() == "diego") {
            swal({
                type: 'error',
                title: 'Oops...',
                background: 'linear-gradient(#2BD9DD , #6ACF28)',
                html: "Error de usuraio, Porfavor verifique"
            });
        } else if (!$("#Contra").val() == "diego") {
            swal({
                type: 'error',
                title: 'Oops...',
                background: 'linear-gradient(#2BD9DD , #6ACF28)',
                html: "Error de contraseña, Porfavor verifique"
            });
        } else {

            let hacer = (data) => {
                let btn1 = $("<button>").addClass("btn btn-info").html("Revision");
                btn1.click(function () {
                    var siguiente = "Revision";
                    let hacer2 = (data) => {
                        title2.html("Revision");
                        btn4.show();
                        btn1.hide();
                        btn2.hide();
                        btn3.hide();
                    };
                    ajax("Flujo", siguiente, hacer2);
                });
                let btn2 = $("<button>").addClass("btn btn-info").html("Carateristica 1");
                btn2.click(function () {
                    var siguiente = "Carateristica 1";
                    let hacer2 = (data) => {
                        title2.html("Carateristica 1");
                        btn4.show();
                        btn1.hide();
                        btn2.hide();
                        btn3.hide();
                    };
                    ajax("Flujo", siguiente, hacer2);
                });
                let btn3 = $("<button>").addClass("btn btn-info").html("Carateristica 2");
                btn3.click(function () {
                    var siguiente = "Carateristica 2";
                    let hacer2 = (data) => {
                        title2.html("Carateristica 2");
                        btn4.show();
                        btn1.hide();
                        btn2.hide();
                        btn3.hide();
                    };
                    ajax("Flujo", siguiente, hacer2);
                });
                let btn4 = $("<button>").addClass("btn btn-info").html("Master").hide();
                btn4.click(function () {
                    var siguiente = "Master";
                    let hacer2 = (data) => {
                        title2.html("Master");
                        btn4.hide();
                        btn1.show();
                        btn2.show();
                        btn3.show();
                    };
                    ajax("Flujo", siguiente, hacer2);
                });
                let btn5 = $("<button>").addClass("btn btn-danger").html("Salir");
                btn5.click(function () {

                    location.reload();

                });
                let div = $("<div>");
                let title2 = $("<h1>").addClass("titulo");
                let title = (data) => {
                    let hacer = (data) => {
                        title2.html(data.toString());
                    };
                    ajax("Dato", "", hacer);
                };
                title();
                div.append(btn1);
                div.append(btn2);
                div.append(btn3);
                div.append(btn4);
                div.append(btn5);
                $("#datos").html(div);
                $("#datos").append(title2);

            };
            ajax("index.jsp", "", hacer);
        }
    });

    const Consultar = () => {

        let hacer = (data) => {
            return data.toString();
        };
        ajax("Dato", "", hacer);
    };
});

