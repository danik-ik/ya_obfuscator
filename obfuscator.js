/**
 * Created by danik-ik on 07.07.16.
 */

/**
 * обфусцирует классы по заданному списку. Обфусцированные имена начинаются с буквы и содержат
 * буквы, цифры, символы '-' и '_'.
 * Тем классам, которые встречаются в исходных данных максимально часто, ставятся в соответствие
 * максимально короткие обфусцированные имена
 *
 * @param {Array} data – массив CSS классов
 * @return {Object} — хэш; ключи — имена исходных классов, значения — обфусцированные имена
 *
 */

module.exports = function(data) {
	midObj = counts(data);

	// Промежуточный массив для сортировки
	var midArr = [];
	for (var key in midObj) {
		midArr.push({'class': key, 'count': midObj[key]});
	}

	// Самые часто встречающиеся классы - наверх
	midArr.sort(function (a, b) {
		return b.count - a.count;
	});
	for (var i = 0; i < midArr.length; i++) {
		midObj[midArr[i].class] = generateNewName(i);
	}
	return midObj;
};

module.exports.counts = counts;

/**
 * Преобразует массив классов в хэш-объект, с подсчётом количества вхождений.
 *
 * @param {Array} data – массив CSS классов
 * @return {Object} — хэш; ключи — имена исходных классов, значения — количество вхождений в исходный массив
 *
 */

function counts(data) {
	var result = {};

	for (var i = 0; i < data.length; i++) {
		var current = data[i];
		if (result[current] === undefined) result[current] = 0;
		result[current]++;
	}

	return result;
};

/**
 * Преобразует число в обфусцированное имя
 *
 * @param {number} i – исходное число
 * @return {string} — обфусцированное имя.
 *
 */
function generateNewName(i) {
	return 'a'
}
