'use strict';

/**
 * @ngdoc directive
 * @name anzacMockupApp.directive:fileread
 * @description
 * # fileread
 */
angular.module('anzacMockupApp')
    .directive('fileread', [

        function() {
            return {
                scope: {
                    fileread: '='
                },
                link: function(scope, element) {
                    console.log('here!!!');

                    element.bind('change', function(changeEvent) {
                        var readers = [],
                            files = changeEvent.target.files,
                            datas = [];
                        for (var i = 0; i < files.length; i++) {
                            readers[i] = new FileReader();
                            readers[i].onload = function(loadEvent) {
                                datas.push(loadEvent.target.result);
                                if (datas.length === files.length) {
                                    scope.$apply(function() {
                                        scope.fileread = datas;
                                    });
                                }
                            }
                            readers[i].readAsDataURL(files[i]);
                        }
                    });
                }
            };
        }
    ]);
