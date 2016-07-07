/**
 * Created by danik-ik on 07.07.16.
 */

/**
 * @param {Array} data – массив CSS классов
 */

module.exports = function(data) {
	var result = {};

	for (var i = 0; i < data.length; i++) {
		var current = data[i];
		if (result[current] === undefined) result[current] = 0;
		result[current]++;
	}

	return result;
};
