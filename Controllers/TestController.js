////app.controller('TestController', function ($scope) {
////    $scope.testmessage = "Setup angularjs application in visual studio 2019 successfully ";
////});

angular.module('App', []).controller('CrudCtrl', ['$scope',
    function ($scope) {

        /* Obtiene la lista de usuarios */
        $scope.Usuarios = {
            "Id": 1,
            "name": "Juan Rodriguez",
            "email": " juan@rodriguez.org ",
            "password": "hunter2",
            "number": "1234567",
            "citycode": "1",
            "contrycode": "57"
        };

        $scope.Guardar = function () {
            var id = $scope.Id;
            if (id == 0) {
                var data = { Id: 1, name: $scope.name, email: $scope.email, password: $scope.password, contrycode: $scope.contrycode, citycode: $scope.citycode, number: $scope.number };
                var datos = JSON.stringify(data);
                $scope.Usuarios = datos;
                alert("Usuario Guardado con éxito");
                $scope.Listar(datos);
            }
            else {
                var data = { Id: 1, name: $scope.name, email: $scope.email, password: $scope.password, contrycode: $scope.contrycode, citycode: $scope.citycode, number: $scope.number };
                var datos = JSON.stringify(data);
                $scope.Usuarios = datos;
                alert("Usuario Actualizado con éxito");
                $scope.Listar(datos);
            }
            $scope.ClearControls();
        };

        $scope.ObtenerPorId = function (id) {

            if (id > 0) {

                //$scope.Usuario = angular.fromJson($scope.Usuario);

                console.log($scope.Usuarios);

                $scope.Id = $scope.Usuarios.Id;
                $scope.name = $scope.Usuarios.name;
                $scope.email = $scope.Usuarios.email;
                $scope.password = $scope.Usuarios.password;
                $scope.number = $scope.Usuarios.number;
                $scope.citycode = $scope.Usuarios.citycode;
                $scope.contrycode = $scope.Usuarios.contrycode;
            } else {
                alert("No existe registro para Actualizar");
            }
        };

        $scope.Eliminar = function (id) {

            if (id > 0) {
                alert("Usuario Eliminado con éxito");
                $scope.Listar("");
            } else {
                alert("No existe registro para eliminar");
            }

        };

        $scope.Listar = function (datos) {
            if (datos == "") {
                $scope.Usuarios = {
                    "Id": 0,
                    "name": "",
                    "email": "",
                    "password": "",
                    "number": "",
                    "citycode": "",
                    "contrycode": ""
                };
            } else {
                $scope.Usuarios = angular.fromJson(datos);
            };
        };

        /*Limpia los objetos HTML */
        $scope.ClearControls = function () {
            $scope.Id = 0;
            $scope.name = '';
            $scope.email = '';
            $scope.password = '';
            $scope.contrycode = '';
            $scope.citycode = '';
            $scope.number = '';
        }
        //$scope.Usuarios = [
        //	{
        //		name: "gede",
        //		country: "indonesia",
        //		editable: false
        //	},
        //	{
        //		name: "made",
        //		country: "thailand",
        //		editable: false
        //	}
        //];
        //$scope.entity = {}

        //$scope.edit = function (index) {
        //    $scope.entity = $scope.Usuarios[index];
        //    $scope.entity.index = index;
        //    $scope.entity.editable = true;
        //}

        //$scope.delete = function (index) {
        //    $scope.Usuarios.splice(index, 1);
        //}

        //$scope.save = function (index) {
        //    $scope.Usuarios[index].editable = false;

        //}

        //$scope.add = function () {
        //    $scope.Usuarios.push({
        //        name: "",
        //        country: "",
        //        editable: true
        //    })
        //}
    }
]);