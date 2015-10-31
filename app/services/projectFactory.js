/**
 * Created by dave on 10/31/15.
 */

(function() {
    var projectFactory = function() {

        var systemTypes = [
            {
                id: 1,
                name: 'VAV/VVT'
            },
            {
                id: 2,
                name: 'SZ CAV Unit'
            },
            {
                id: 3,
                name: 'VVT AHU/RTU'
            },
            {
                id: 4,
                name: 'VAV AHU/RTU'
            },
            {
                id: 5,
                name: 'SZ VAV Unit'
            },
            {
                id: 6,
                name: 'Custom Plant'
            },
        ];

        var unitTypes = [
            {
                id: 1,
                name: 'VVT'
            },
            {
                id: 2,
                name: 'SD Cooling Only'
            },
            {
                id: 3,
                name: 'SD w/ RH'
            },
            {
                id: 4,
                name: 'Series Fan'
            },
            {
                id: 5,
                name: 'Parallel Fan'
            },
            {
                id: 6,
                name: 'Comm. Stat'
            },
            {
                id: 7,
                name: 'Unit Mnt\'d Xtrl.'
            },
            {
                id: 8,
                name: 'Comm. Stat'
            },
            {
                id: 9,
                name: 'Unit Mnt\'d Xtrl.'
            },
            {
                id: 10,
                name: 'Stg. C & Stg. H'
            },
            {
                id: 11,
                name: 'Stg. C & Mod. H'
            },
            {
                id: 12,
                name: 'Stg. C & HW'
            },
            {
                id: 13,
                name: 'CHW & HW'
            },
            {
                id: 14,
                name: 'Stg. C & Stg H'
            },
            {
                id: 15,
                name: 'Stg. C & Mod. H'
            },
            {
                id: 16,
                name: 'Stg. C & HW'
            },
            {
                id: 17,
                name: 'CHW & HW'
            },
            {
                id: 18,
                name: '# Inputs'
            }
        ];

        var reheatTypes = [
            {
                id: 1,
                name: '1 Stage Elec'
            },
            {
                id: 2,
                name: '2 Stage Elec'
            },
            {
                id: 3,
                name: 'SCR'
            },
            {
                id: 4,
                name: '1/2" 2 Way'
            },
            {
                id: 5,
                name: '3/4" 2way'
            },
            {
                id: 6,
                name: '1/2" 3way'
            },
            {
                id: 7,
                name: '3/4 3way'
            },
            {
                id: 8,
                name: '2-Pipe FCU'
            },
            {
                id: 9,
                name: '4-Pipe FCU'
            },
            {
                id: 10,
                name: 'Heat Pump'
            },
            {
                id: 11,
                name: 'AHU/RTU'
            },
            {
                id: 12,
                name: 'Stg. C & Stg. H'
            },
            {
                id: 13,
                name: 'Stg. C & Mod. H'
            },
            {
                id: 14,
                name: 'Stg. C & HW'
            },
            {
                id: 15,
                name: 'CHW & HW'
            },
            {
                id: 16,
                name: '1" 2way'
            },
            {
                id: 17,
                name: '1-1/2" 2way'
            },
            {
                id: 18,
                name: '2" 2way'
            },
            {
                id: 19,
                name: '1" 3way'
            },
            {
                id: 20,
                name: '1-1/2" 3 way'
            },
            {
                id: 21,
                name: '2" 3way'
            },
            {
                id: 22,
                name: '* All Spring Return'
            },
            {
                id: 23,
                name: '#Binary Outputs'
            }
        ];

        var systemXunit = [
            {
                systemId: 1,
                unitIds: [1, 2, 3, 4, 5]
            },
            {
                systemId: 2,
                unitIds: [6, 7]
            },
            {
                systemId: 3,
                unitIds: [8, 9]
            },
            {
                systemId: 4,
                unitIds: [10, 11, 12, 13]
            },
            {
                systemId: 5,
                unitIds: [14, 15, 16, 17]
            },
            {
                systemId: 6,
                unitIds: [18]
            }
        ];

        var unitXreheat = [
            {
                unitId: 3,
                reheatIds: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                unitId: 4,
                reheatIds: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                unitId: 5,
                reheatIds: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                unitId: 6,
                reheatIds: [8, 9, 10, 11]
            },
            {
                unitId: 7,
                reheatIds: [8, 9, 10, 11]
            },
            {
                unitId: 8,
                reheatIds: [12, 13, 14, 15]
            },
            {
                unitId: 9,
                reheatIds: [12, 13, 14, 15]
            },
            {
                unitId: 10,
                reheatIds: [16, 17, 18, 19, 20, 21, 22]
            },
            {
                unitId: 11,
                reheatIds: [16, 17, 18, 19, 20, 21, 22]
            },
            {
                unitId: 12,
                reheatIds: [16, 17, 18, 19, 20, 21, 22]
            },
            {
                unitId: 13,
                reheatIds: [16, 17, 18, 19, 20, 21, 22]
            },
            {
                unitId: 14,
                reheatIds: [16, 17, 18, 19, 20, 21, 22]
            },
            {
                unitId: 15,
                reheatIds: [16, 17, 18, 19, 20, 21, 22]
            },
            {
                unitId: 16,
                reheatIds: [16, 17, 18, 19, 20, 21, 22]
            },
            {
                unitId: 17,
                reheatIds: [16, 17, 18, 19, 20, 21, 22]
            },
            {
                unitId: 18,
                reheatIds: [23]
            }
        ];

        var factory = {};

        factory.getSystemTypes = function() {
          return systemTypes;
        };

        factory.getUnitTypes = function(systemTypeId){
            systemTypeId = parseInt(systemTypeId);
            var items = [];

            for(var i = 0; i < systemXunit.length; i++) {
                if(systemXunit[i].systemId == systemTypeId){
                    for(var j = 0; j < systemXunit[i].unitIds.length; j++) {
                        items.push(unitTypes[systemXunit[i].unitIds[j]]);
                    }
                }
            }
            if(items.length == 0){
                items.push(
                    {
                        id: 0,
                        name: 'N/A'
                    }
                );
            }
            return items;
        };

        factory.getReheatTypes = function(unitTypeId){
            unitTypeId = parseInt(unitTypeId);
            var items = [];

            for(var i = 0; i < unitXreheat.length; i++) {
                if(unitXreheat[i].unitId == unitTypeId){
                    for(var j = 0; j < unitXreheat[i].reheatIds.length; j++) {
                        items.push(reheatTypes[unitXreheat[i].reheatIds[j]]);
                    }
                }
            }
            if(items.length == 0){
                items.push(
                    {
                        id: 0,
                        name: 'N/A'
                    }
                );
            }
            return items;
        };

        return factory;
    };

    angular.module('ccsApp').factory('projectFactory',
        projectFactory);

}());