(function () {
    var app = angular.module('mercado', []);
    app.controller('mercadoController', function ($scope) {
        $scope.filaEditable = -1;
        $scope.listaDeCompras=[];
        $scope.linea={};
        $scope.agregarArticulo = function(){
            $scope.listaDeCompras.push(angular.copy($scope.linea));
            $scope.linea={};
        };
        $scope.totalizar = function () {
            total = 0;
            angular.forEach($scope.listaDeCompras,function(value,key){
                total += value.cantidad * value.precio;
            });
            return total;
        };
        $scope.borrar = function (nombre) {
            if(confirm("¿Borrar " + nombre + "?"))
            {
                pos = $scope.listaDeCompras.map(function(elemento){
                return elemento.articulo;
                }).indexOf(nombre);
                $scope.listaDeCompras.splice(pos,1);
            }
        };
        $scope.borrarTodo = function () {
          if(confirm("¿Borrar todos los artículos?"))
            $scope.listaDeCompras = [];
        };
        $scope.setFilaEditable = function (fila) {
            $scope.filaEditable = fila;
        }
    });
})();
