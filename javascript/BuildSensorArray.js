function BuildSensorArray(array, sensor, date) {
    if (Array.isArray(array)) {
        let sensorArray = [];
        sensorArray.push(array[0]);
        let i;
        let j = 0;
        let k;
        let l = 0;

        for (i = 1; i < array.length; i++) {
            if (array[i - 1][sensor] === array[i][sensor] && array[i] !== array[array.length - 1]) {
                j++;
            } else if (array[i - 1][sensor] !== array[i][sensor] && array [i] !== array[array.length - 1]) {
                for (k = i - j - 1; k < i; k++) {
                    if (array[k][date] > sensorArray[l][date]) {
                        sensorArray[l] = array[k];
                    }
                }
                sensorArray.push(array[i]);
                j = 0;
                l++;
            } else if (array[i - 1][sensor] === array[i][sensor] && array[i] === array[array.length - 1]) {
                for (k = i - j - 1; k <= i; k++) {
                    if (array[k][date] > sensorArray[l][date]) {
                        sensorArray[l] = array[k];
                    }
                }
            } else {
                for (k = i - j - 1; k < i; k++) {
                    if (array[k][date] > sensorArray[l][date]) {
                        sensorArray[l] = array[k];
                    }
                }
                sensorArray.push(array[i]);
            }
        }

        return sensorArray;
    }
}